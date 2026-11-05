param(
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"

# Despliegue general de DevCampus. Vite incorpora src/pages en el bundle y
# copia public/ a dist/. Los proyectos Vite alojados dentro de public/ se
# reconstruyen primero para que sus cambios también lleguen a la publicación.
$archivePath = Join-Path $env:TEMP "devcampus-all-deploy.tar.gz"
$remoteArchivePath = "/tmp/devcampus-all-deploy.tar.gz"
$remoteHost = "root@devcampus.es"

function Assert-ExternalCommandSucceeded {
    param([string]$Step)

    if ($LASTEXITCODE -ne 0) {
        throw "$Step falló (código de salida: $LASTEXITCODE)."
    }
}

function Assert-PublishableDist {
    param([string]$Path)

    foreach ($requiredPath in @("index.html", "assets")) {
        if (-not (Test-Path -LiteralPath (Join-Path $Path $requiredPath))) {
            throw "El build no contiene $requiredPath. No se publicará nada."
        }
    }

    if (-not (Get-ChildItem -LiteralPath (Join-Path $Path "assets") -File -Recurse | Select-Object -First 1)) {
        throw "El build no contiene assets publicables. No se publicará nada."
    }
}

function Remove-NonPublishableDependencies {
    param([string]$Path)

    # Los proyectos Vite anidados viven en public/ y Vite los copia al dist
    # raíz. Sus node_modules solo sirven para compilar en local: nunca deben
    # formar parte del paquete ni llegar al servidor.
    Get-ChildItem -LiteralPath $Path -Directory -Recurse -Filter "node_modules" |
        ForEach-Object {
            Write-Host "Excluyendo dependencia local del paquete: $($_.FullName)"
            Remove-Item -LiteralPath $_.FullName -Recurse -Force
        }
}

try {
    if ($SkipBuild) {
        Write-Host "=== 1. Validando el build existente ==="
    }
    else {
        $manualCssSource = Join-Path $PSScriptRoot "public\contenido-manuales\manualcss\manual-css"
        if (-not (Test-Path -LiteralPath $manualCssSource -PathType Container)) {
            throw "No existe el proyecto anidado del Manual CSS: $manualCssSource"
        }

        Write-Host "=== 1. Compilando el Manual CSS incluido en public ==="
        Push-Location $manualCssSource
        try {
            & npm.cmd run build
            Assert-ExternalCommandSucceeded "Build del Manual CSS"
        }
        finally {
            Pop-Location
        }
        Assert-PublishableDist -Path (Join-Path $manualCssSource "dist")

        Write-Host "=== 2. Compilando portal y páginas ==="
        & npm.cmd run build
        Assert-ExternalCommandSucceeded "Build"
    }

    $distPath = Join-Path $PSScriptRoot "dist"
    Assert-PublishableDist -Path $distPath
    Remove-NonPublishableDependencies -Path $distPath

    Remove-Item -LiteralPath $archivePath -Force -ErrorAction SilentlyContinue
    Write-Host "=== 3. Empaquetando todo el contenido publicable ==="
    & tar.exe -czf $archivePath -C $distPath .
    Assert-ExternalCommandSucceeded "Creación del paquete"

    $contents = & tar.exe -tzf $archivePath
    Assert-ExternalCommandSucceeded "Inspección del paquete"
    if ($contents -notcontains "./index.html" -or $contents -notcontains "./assets/") {
        throw "El paquete no contiene index.html y assets/ en la raíz."
    }
    if ($contents | Where-Object { $_ -match '(^|/)(node_modules|\.git)(/|$)' }) {
        throw "El paquete contiene dependencias o metadatos de Git; se cancela el despliegue."
    }

    Write-Host "=== 4. Subiendo el paquete ==="
    & scp $archivePath "${remoteHost}:$remoteArchivePath"
    Assert-ExternalCommandSucceeded "Subida SCP"

    $remoteScript = @'
set -euo pipefail

archive="/tmp/devcampus-all-deploy.tar.gz"
web_root="/var/www/devcampus"
web_parent="/var/www"
backup_root="/var/backups/devcampus"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
stage="$web_parent/.devcampus-stage-$timestamp"
previous="$web_parent/.devcampus-previous-$timestamp"

cleanup() {
  rm -rf "$stage"
  rm -f "$archive"
}
trap cleanup EXIT

test -f "$archive"
test -d "$web_root"
mkdir -p "$backup_root" "$stage"
tar -xzf "$archive" -C "$stage"
test -f "$stage/index.html"
test -d "$stage/assets"
test -n "$(find "$stage/assets" -type f -print -quit)"
if find "$stage" -type d \( -name node_modules -o -name .git \) -print -quit | grep -q .; then
  echo "El paquete contiene directorios no publicables." >&2
  exit 1
fi

backup_file="$backup_root/all-$timestamp.tar.gz"
tar -czf "$backup_file" -C "$web_parent" devcampus
test -s "$backup_file"

chown -R www-data:www-data "$stage"
find "$stage" -type d -exec chmod 755 {} \;
find "$stage" -type f -exec chmod 644 {} \;

# El cambio de directorio es atómico dentro de /var/www. Si falla la
# activación, se restaura inmediatamente la versión previa.
mv "$web_root" "$previous"
if ! mv "$stage" "$web_root"; then
  mv "$previous" "$web_root"
  exit 1
fi

if ! nginx -t || ! systemctl reload nginx; then
  rm -rf "$web_root"
  mv "$previous" "$web_root"
  nginx -t
  systemctl reload nginx || true
  exit 1
fi

rm -rf "$previous"
echo "Backup remoto: $backup_file"
echo "Despliegue general completado: $web_root"
'@

    $remoteScriptPath = Join-Path $env:TEMP "deploy-all-remote.sh"
    $remoteScriptRemotePath = "/tmp/deploy-all-remote.sh"
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($remoteScriptPath, $remoteScript.Replace("`r`n", "`n"), $utf8NoBom)

    try {
        Write-Host "=== 5. Creando backup y activando el despliegue ==="
        # Copiar el script evita la redirección de entrada de cmd.exe, que en
        # Windows puede fallar con rutas temporales aunque la conexión SSH sea válida.
        & scp $remoteScriptPath "${remoteHost}:$remoteScriptRemotePath"
        Assert-ExternalCommandSucceeded "Subida del script remoto"

        & ssh $remoteHost "bash $remoteScriptRemotePath"
        $remoteExitCode = $LASTEXITCODE
    }
    finally {
        Remove-Item -LiteralPath $remoteScriptPath -Force -ErrorAction SilentlyContinue
        & ssh $remoteHost "rm -f $remoteScriptRemotePath" 2>$null
    }

    if ($remoteExitCode -ne 0) {
        throw "El despliegue general falló (código de salida: $remoteExitCode). El backup remoto se conserva."
    }

    Write-Host "=== DESPLIEGUE GENERAL COMPLETADO ==="
}
finally {
    Remove-Item -LiteralPath $archivePath -Force -ErrorAction SilentlyContinue
}
