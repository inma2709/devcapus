$ErrorActionPreference = "Stop"

# Publica el shell de DevCampus, el manual React y el HTML autónomo de la
# actividad Penpot. No toca otros manuales, proyectos ni recursos.
$archivePath = Join-Path $PSScriptRoot "devcampus-frameworks-react.tar.gz"
$remoteArchivePath = "/tmp/devcampus-frameworks-react.tar.gz"
$remoteHost = "root@devcampus.es"

function Assert-ExternalCommandSucceeded {
    param([string]$Step)

    if ($LASTEXITCODE -ne 0) {
        throw "$Step falló (código de salida: $LASTEXITCODE)."
    }
}

try {
    Write-Host "=== 1. Compilando DevCampus ==="
    npm run build
    Assert-ExternalCommandSucceeded "Build"

    $distPath = Join-Path $PSScriptRoot "dist"
    $reactManualPath = Join-Path $distPath "frameworks\react"
    $penpotActivityPath = Join-Path $distPath "recursos\actividad-penpot-01.html"
    # Nginx prioriza una carpeta física sobre el fallback de la SPA. Este
    # índice generado permite que /frameworks/ cargue el shell del portal.
    Copy-Item -LiteralPath (Join-Path $distPath "index.html") -Destination (Join-Path $distPath "frameworks\index.html") -Force
    foreach ($requiredPath in @(
        (Join-Path $distPath "index.html"),
        (Join-Path $distPath "assets"),
        (Join-Path $distPath "frameworks\index.html"),
        (Join-Path $reactManualPath "index.html"),
        (Join-Path $reactManualPath "assets"),
        $penpotActivityPath
    )) {
        if (-not (Test-Path -LiteralPath $requiredPath)) {
            throw "El build no contiene el recurso requerido: $requiredPath"
        }
    }

    if (Test-Path -LiteralPath $archivePath) {
        Remove-Item -LiteralPath $archivePath -Force
    }

    Write-Host "=== 2. Empaquetando shell, manual React y actividad Penpot ==="
    & tar.exe -czf $archivePath -C $distPath index.html assets frameworks/index.html frameworks/react recursos/actividad-penpot-01.html
    Assert-ExternalCommandSucceeded "Creación del paquete"

    $archiveContents = & tar.exe -tzf $archivePath
    Assert-ExternalCommandSucceeded "Inspección del paquete"
    foreach ($requiredEntry in @("index.html", "assets/", "frameworks/index.html", "frameworks/react/index.html", "frameworks/react/assets/", "recursos/actividad-penpot-01.html")) {
        if ($archiveContents -notcontains $requiredEntry) {
            throw "El paquete no contiene $requiredEntry."
        }
    }

    Write-Host "=== 3. Subiendo el paquete ==="
    & scp $archivePath "${remoteHost}:$remoteArchivePath"
    Assert-ExternalCommandSucceeded "Subida SCP"

    $remoteScript = @'
set -euo pipefail

archive="/tmp/devcampus-frameworks-react.tar.gz"
web_root="/var/www/devcampus"
backup_root="/var/backups/devcampus"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
stage="/tmp/devcampus-frameworks-react-stage-$timestamp"
previous_assets="/tmp/devcampus-assets-$timestamp"
previous_react="/tmp/devcampus-react-$timestamp"
previous_index="/tmp/devcampus-index-$timestamp.html"
previous_frameworks_index="/tmp/devcampus-frameworks-index-$timestamp.html"
previous_penpot_activity="/tmp/devcampus-actividad-penpot-01-$timestamp.html"
had_frameworks_index=false
had_penpot_activity=false

cleanup() {
  rm -rf "$stage" "$previous_assets" "$previous_react"
  rm -f "$archive" "$previous_index" "$previous_frameworks_index" "$previous_penpot_activity"
}
trap cleanup EXIT

test -f "$web_root/index.html"
test -d "$web_root/assets"
test -f "$archive"
mkdir -p "$stage" "$backup_root"
tar -xzf "$archive" -C "$stage"
test -f "$stage/index.html"
test -d "$stage/assets"
test -f "$stage/frameworks/index.html"
test -f "$stage/frameworks/react/index.html"
test -d "$stage/frameworks/react/assets"
test -f "$stage/recursos/actividad-penpot-01.html"

# El backup recoge exactamente los destinos que el despliegue puede sustituir.
backup_file="$backup_root/frameworks-react-$timestamp.tar.gz"
backup_targets=(index.html assets)
if [ -d "$web_root/frameworks" ]; then
  backup_targets+=(frameworks)
fi
if [ -f "$web_root/recursos/actividad-penpot-01.html" ]; then
  backup_targets+=(recursos/actividad-penpot-01.html)
fi
tar -czf "$backup_file" -C "$web_root" "${backup_targets[@]}"
test -s "$backup_file"

chown -R www-data:www-data "$stage/assets" "$stage/frameworks" "$stage/recursos"
find "$stage/assets" "$stage/frameworks" "$stage/recursos" -type d -exec chmod 755 {} \;
find "$stage/assets" "$stage/frameworks" "$stage/recursos" -type f -exec chmod 644 {} \;
chmod 644 "$stage/index.html"

# Se instalan primero los recursos y se publica index.html al final. Si una
# sustitución falla, se restaura inmediatamente el estado anterior.
cp "$web_root/index.html" "$previous_index"
mv "$web_root/assets" "$previous_assets"
if ! mv "$stage/assets" "$web_root/assets"; then
  mv "$previous_assets" "$web_root/assets"
  exit 1
fi

mkdir -p "$web_root/frameworks"
if [ -d "$web_root/frameworks/react" ]; then
  mv "$web_root/frameworks/react" "$previous_react"
fi
if ! mv "$stage/frameworks/react" "$web_root/frameworks/react"; then
  [ -d "$web_root/frameworks/react" ] && rm -rf "$web_root/frameworks/react"
  [ -d "$previous_react" ] && mv "$previous_react" "$web_root/frameworks/react"
  mv "$web_root/assets" "$stage/assets"
  mv "$previous_assets" "$web_root/assets"
  exit 1
fi

if [ -f "$web_root/frameworks/index.html" ]; then
  mv "$web_root/frameworks/index.html" "$previous_frameworks_index"
  had_frameworks_index=true
fi
if ! mv "$stage/frameworks/index.html" "$web_root/frameworks/index.html"; then
  [ "$had_frameworks_index" = true ] && mv "$previous_frameworks_index" "$web_root/frameworks/index.html"
  rm -rf "$web_root/frameworks/react"
  [ -d "$previous_react" ] && mv "$previous_react" "$web_root/frameworks/react"
  mv "$web_root/assets" "$stage/assets"
  mv "$previous_assets" "$web_root/assets"
  exit 1
fi

mkdir -p "$web_root/recursos"
if [ -f "$web_root/recursos/actividad-penpot-01.html" ]; then
  mv "$web_root/recursos/actividad-penpot-01.html" "$previous_penpot_activity"
  had_penpot_activity=true
fi
if ! mv "$stage/recursos/actividad-penpot-01.html" "$web_root/recursos/actividad-penpot-01.html"; then
  [ "$had_penpot_activity" = true ] && mv "$previous_penpot_activity" "$web_root/recursos/actividad-penpot-01.html"
  rm -f "$web_root/frameworks/index.html"
  [ "$had_frameworks_index" = true ] && mv "$previous_frameworks_index" "$web_root/frameworks/index.html"
  rm -rf "$web_root/frameworks/react"
  [ -d "$previous_react" ] && mv "$previous_react" "$web_root/frameworks/react"
  mv "$web_root/assets" "$stage/assets"
  mv "$previous_assets" "$web_root/assets"
  exit 1
fi

if ! mv "$stage/index.html" "$web_root/index.html"; then
  rm -f "$web_root/recursos/actividad-penpot-01.html"
  [ "$had_penpot_activity" = true ] && mv "$previous_penpot_activity" "$web_root/recursos/actividad-penpot-01.html"
  rm -f "$web_root/frameworks/index.html"
  [ "$had_frameworks_index" = true ] && mv "$previous_frameworks_index" "$web_root/frameworks/index.html"
  rm -rf "$web_root/frameworks/react"
  [ -d "$previous_react" ] && mv "$previous_react" "$web_root/frameworks/react"
  mv "$web_root/assets" "$stage/assets"
  mv "$previous_assets" "$web_root/assets"
  mv "$previous_index" "$web_root/index.html"
  exit 1
fi

test -f "$web_root/index.html"
test -d "$web_root/assets"
test -f "$web_root/frameworks/index.html"
test -f "$web_root/frameworks/react/index.html"
test -d "$web_root/frameworks/react/assets"
test -f "$web_root/recursos/actividad-penpot-01.html"
nginx -t
systemctl reload nginx

echo "Backup remoto: $backup_file"
echo "Publicado: $web_root/index.html, $web_root/assets, $web_root/frameworks y $web_root/recursos/actividad-penpot-01.html"
'@

    $remoteScriptPath = Join-Path $env:TEMP "deploy-frameworks-react-remote.sh"
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($remoteScriptPath, $remoteScript.Replace("`r`n", "`n"), $utf8NoBom)

    try {
        Write-Host "=== 4. Haciendo backup remoto y publicando ==="
        $sshCommand = "ssh $remoteHost `"bash -s`" < `"$remoteScriptPath`""
        & cmd.exe /d /c $sshCommand
        $remoteExitCode = $LASTEXITCODE
    }
    finally {
        Remove-Item -LiteralPath $remoteScriptPath -Force -ErrorAction SilentlyContinue
    }

    if ($remoteExitCode -ne 0) {
        throw "Despliegue remoto falló (código de salida: $remoteExitCode)."
    }

    Write-Host "=== DESPLIEGUE COMPLETADO ==="
}
finally {
    Remove-Item -LiteralPath $archivePath -Force -ErrorAction SilentlyContinue
}
