param(
    [switch]$SkipBuild,
    [string]$DistPath
)

$ErrorActionPreference = "Stop"

# El nuevo manual de JavaScript vive dentro del React del portal. Por eso este
# despliegue publica exclusivamente el shell generado (index.html y assets/),
# nunca toca el manual JavaScript antiguo ni otros directorios de manuales.
$archivePath = Join-Path $env:TEMP "devcampus-javascript-manual-shell.tar.gz"
$remoteArchivePath = "/tmp/devcampus-javascript-manual-shell.tar.gz"
$remoteHost = "root@devcampus.es"

function Assert-ExternalCommandSucceeded {
    param([string]$Step)
    if ($LASTEXITCODE -ne 0) { throw "$Step falló (código de salida: $LASTEXITCODE)." }
}

function Invoke-RemoteBash {
    param([Parameter(Mandatory = $true)][string]$Script)

    # ProcessStartInfo escribe el script directamente en stdin de OpenSSH. Evita
    # la capa cmd.exe y sus reglas de quoting, y es compatible con PowerShell 5.1.
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    $payload = $Script.Replace("`r`n", "`n")
    $psi = New-Object System.Diagnostics.ProcessStartInfo
    $psi.FileName = 'ssh'
    $psi.Arguments = "$remoteHost bash -s"
    $psi.UseShellExecute = $false
    $psi.RedirectStandardInput = $true
    $psi.RedirectStandardOutput = $true
    $psi.RedirectStandardError = $true

    $process = New-Object System.Diagnostics.Process
    $process.StartInfo = $psi
    [void]$process.Start()
    $writer = New-Object System.IO.StreamWriter($process.StandardInput.BaseStream, $utf8NoBom)
    $writer.Write($payload)
    $writer.Dispose()
    $stdout = $process.StandardOutput.ReadToEnd()
    $stderr = $process.StandardError.ReadToEnd()
    $process.WaitForExit()
    if ($stdout) { Write-Host $stdout.TrimEnd() }
    if ($stderr) { Write-Error $stderr.TrimEnd() }
    if ($process.ExitCode -ne 0) { throw "La activación remota del shell falló (código de salida: $($process.ExitCode))." }
}

try {
    if ($SkipBuild) {
        Write-Host "=== 1. Validando el artefacto existente del portal ==="
    }
    else {
        Write-Host "=== 1. Compilando el portal con el nuevo manual JavaScript ==="
        $env:DEVCAMPUS_SHELL_BUILD = "1"
        & npm.cmd --prefix $PSScriptRoot run build
        Assert-ExternalCommandSucceeded "Build del manual JavaScript"
    }

    if ([string]::IsNullOrWhiteSpace($DistPath)) {
        $distPath = Join-Path $PSScriptRoot "dist-javascript-shell"
    }
    else {
        $distPath = [System.IO.Path]::GetFullPath($DistPath)
    }

    if (-not (Test-Path -LiteralPath $distPath -PathType Container)) {
        throw "No existe el directorio de artefactos: $distPath"
    }
    foreach ($artifact in @("index.html", "assets")) {
        if (-not (Test-Path -LiteralPath (Join-Path $distPath $artifact))) {
            throw "El build no contiene $artifact. No se publicará nada."
        }
    }

    $bundles = @(Get-ChildItem -LiteralPath (Join-Path $distPath "assets") -Filter "*.js" -File)
    if ($bundles.Count -eq 0) { throw "El build no contiene un bundle JavaScript publicable." }
    $bundleSource = ($bundles | ForEach-Object { [System.IO.File]::ReadAllText($_.FullName) }) -join "`n"
    if (-not $bundleSource.Contains('/manuales-backend/node/')) {
        throw "El artefacto no incorpora NodeManualViewer; no se publicará el shell."
    }
    if (-not $bundleSource.Contains('Manual independiente de Fundamentos de Node.js')) {
        throw "El artefacto no contiene el visor Node esperado; no se publicará el shell."
    }

    Remove-Item -LiteralPath $archivePath -Force -ErrorAction SilentlyContinue
    Write-Host "=== 2. Empaquetando solo el shell del portal ==="
    & tar.exe -czf $archivePath -C $distPath index.html assets
    Assert-ExternalCommandSucceeded "Creación del paquete del manual JavaScript"

    $contents = & tar.exe -tzf $archivePath
    Assert-ExternalCommandSucceeded "Inspección del paquete"
    if ($contents -notcontains "index.html" -or $contents -notcontains "assets/") {
        throw "El paquete no contiene index.html y assets/ en su raíz."
    }
    if ($contents | Where-Object { $_ -match '(^|/)(node_modules|src|\.git)(/|$)' }) {
        throw "El paquete contiene fuente o dependencias y no se publicará."
    }

    Write-Host "=== 3. Subiendo el shell actualizado ==="
    & scp $archivePath "${remoteHost}:$remoteArchivePath"
    Assert-ExternalCommandSucceeded "Subida SCP"

    $remoteScript = @'
set -euo pipefail
archive="/tmp/devcampus-javascript-manual-shell.tar.gz"
web_root="/var/www/devcampus"
backup_root="/var/backups/devcampus-portal"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
stage="/tmp/devcampus-javascript-manual-stage-$timestamp"
previous_index="/tmp/devcampus-javascript-manual-index-$timestamp.html"

cleanup() { rm -rf "$stage"; rm -f "$archive" "$previous_index"; }
trap cleanup EXIT

test -f "$archive"
test -f "$web_root/index.html"
test -d "$web_root/assets"
mkdir -p "$stage" "$backup_root"
tar -xzf "$archive" -C "$stage"
test -f "$stage/index.html"
test -d "$stage/assets"
test -n "$(find "$stage/assets" -type f -print -quit)"

backup_file="$backup_root/portal-shell-index-$timestamp.html"
cp -p "$web_root/index.html" "$backup_file"
test -s "$backup_file"

# Los bundles de Vite tienen nombre con hash. Se incorporan de forma aditiva:
# un nombre ya existente solo se acepta si su contenido es idéntico. Así nunca
# se eliminan assets utilizados por lectores que todavía cargan el HTML anterior.
while IFS= read -r -d '' source_file; do
  relative_path="${source_file#$stage/assets/}"
  target_file="$web_root/assets/$relative_path"
  mkdir -p "$(dirname "$target_file")"
  if test -e "$target_file"; then
    cmp -s "$source_file" "$target_file" || { echo "Colisión de asset: $relative_path" >&2; exit 1; }
  else
    install -m 644 "$source_file" "$target_file"
  fi
done < <(find "$stage/assets" -type f -print0)
chmod 644 "$stage/index.html"

cp -p "$web_root/index.html" "$previous_index"
cp "$stage/index.html" "$web_root/index.html.next"
if ! mv -f "$web_root/index.html.next" "$web_root/index.html"; then
  rm -f "$web_root/index.html.next"; cp -p "$previous_index" "$web_root/index.html"; exit 1
fi

portal_assets="$(grep -oE '(src|href)="/assets/[^"]+"' "$web_root/index.html" | sed -E 's/^[^"]*"([^"]+)"$/\1/')"
if test -z "$portal_assets"; then
  cp -p "$previous_index" "$web_root/index.html"
  echo "El index.html nuevo no referencia assets del portal; se restauró el anterior." >&2
  exit 1
fi

assets_ok=true
while IFS= read -r asset_path; do
  test -n "$asset_path" || continue
  curl --fail --silent --show-error --resolve devcampus.es:443:127.0.0.1 "https://devcampus.es$asset_path" -o /dev/null || assets_ok=false
done <<< "$portal_assets"

if ! $assets_ok \
  || ! curl --fail --silent --show-error --resolve devcampus.es:443:127.0.0.1 "https://devcampus.es/" | grep -q '<div id="root"></div>' \
  || ! curl --fail --silent --show-error --resolve devcampus.es:443:127.0.0.1 "https://devcampus.es/manuales/javascript" | grep -q '<div id="root"></div>' \
  || ! curl --fail --silent --show-error --resolve devcampus.es:443:127.0.0.1 "https://devcampus.es/manuales/node-fundamentos" | grep -q '<div id="root"></div>'; then
  cp -p "$previous_index" "$web_root/index.html"
  echo "La comprobación HTTP falló; se restauró el index.html anterior." >&2
  exit 1
fi
echo "Backup remoto: $backup_file"
echo "Shell del portal actualizado; los assets anteriores se han conservado."
'@
    Write-Host "=== 4. Backup y activación segura del shell del portal ==="
    Invoke-RemoteBash $remoteScript
    Write-Host "=== DESPLIEGUE DEL NUEVO MANUAL JAVASCRIPT COMPLETADO ==="
}
finally { Remove-Item -LiteralPath $archivePath -Force -ErrorAction SilentlyContinue }
