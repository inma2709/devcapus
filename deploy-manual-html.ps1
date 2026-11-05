$ErrorActionPreference = "Stop"

# Despliegue limitado al manual UF1841. No ejecuta el despliegue global ni toca
# /var/www/devcampus/index.html, /var/www/devcampus/assets ni otros manuales.
$manualSource = Join-Path $PSScriptRoot "public\contenido-manuales\html"
$archivePath = Join-Path $PSScriptRoot "manual-html-uf1841-deploy.tar.gz"
$remoteArchivePath = "/tmp/manual-html-uf1841-deploy.tar.gz"
$remoteHost = "root@devcampus.es"

function Assert-ExternalCommandSucceeded {
    param([string]$Step)

    if ($LASTEXITCODE -ne 0) {
        throw "$Step falló (código de salida: $LASTEXITCODE)."
    }
}

if (-not (Test-Path -LiteralPath (Join-Path $manualSource "index.html"))) {
    throw "No existe $manualSource\index.html. No se puede publicar el manual."
}

if (-not (Test-Path -LiteralPath (Join-Path $manualSource "assets"))) {
    throw "No existe $manualSource\assets. No se puede publicar el manual."
}

if (Test-Path -LiteralPath $archivePath) {
    Remove-Item -LiteralPath $archivePath -Force
}

try {
    Write-Host "=== 1. Empaquetando solo el manual HTML ==="
    & tar.exe -czf $archivePath -C $manualSource .
    Assert-ExternalCommandSucceeded "Creación del paquete TAR.GZ del manual"

    $archiveContents = & tar.exe -tzf $archivePath
    Assert-ExternalCommandSucceeded "Inspección del paquete TAR.GZ del manual"
    if ($archiveContents -notcontains "./index.html" -or $archiveContents -notcontains "./assets/") {
        throw "El paquete no contiene index.html y assets/ en su raíz."
    }

    Write-Host "=== 2. Subiendo solo el paquete del manual ==="
    & scp $archivePath "${remoteHost}:$remoteArchivePath"
    Assert-ExternalCommandSucceeded "Subida SCP del manual"

    $remoteScript = @'
set -euo pipefail

archive="/tmp/manual-html-uf1841-deploy.tar.gz"
web_root="/var/www/devcampus"
manual_parent="$web_root/contenido-manuales"
manual_target="$manual_parent/html"
backup_root="/var/backups/devcampus-manuals"
nginx_config="/etc/nginx/sites-available/devcampus.es"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
stage="$manual_parent/.html-staging-$timestamp"
previous="/tmp/devcampus-html-previous-$timestamp"

cleanup() {
  rm -rf "$stage"
  rm -f "$archive"
}
trap cleanup EXIT

# Confirma que el virtual host de DevCampus usa esta raíz y que el manual existe.
nginx -T 2>/dev/null | grep -q "root /var/www/devcampus"
test -f "$manual_target/index.html"
test -f "$archive"
mkdir -p "$backup_root"

# React Router necesita que las rutas internas del manual vuelvan a su propio
# index.html, en vez de caer en el fallback del portal. La regla no afecta a
# ninguna otra ruta y conserva una copia de la configuración antes del cambio.
if ! grep -q "location \^~ /contenido-manuales/html/" "$nginx_config"; then
  nginx_backup="$backup_root/nginx-devcampus-$timestamp.conf"
  cp "$nginx_config" "$nginx_backup"
  sed -i '/^[[:space:]]*location \/ {$/i\
    location ^~ /contenido-manuales/html/ {\
        try_files $uri $uri/ /contenido-manuales/html/index.html;\
    }\
' "$nginx_config"
  nginx -t
  systemctl reload nginx
fi

mkdir -p "$stage"
tar -xzf "$archive" -C "$stage"
test -f "$stage/index.html"
test -d "$stage/assets"
test -n "$(find "$stage/assets" -type f -print -quit)"

# Backup remoto, fuera del webroot, antes de cualquier sustitución.
backup_file="$backup_root/html-uf1841-$timestamp.tar.gz"
tar -czf "$backup_file" -C "$manual_parent" html
test -s "$backup_file"

chown -R www-data:www-data "$stage"
find "$stage" -type d -exec chmod 755 {} \;
find "$stage" -type f -exec chmod 644 {} \;

# Sustitución exclusiva del directorio del manual. Si el segundo movimiento
# fallase, se restaura el directorio anterior inmediatamente.
mv "$manual_target" "$previous"
if ! mv "$stage" "$manual_target"; then
  mv "$previous" "$manual_target"
  exit 1
fi

test -f "$manual_target/index.html"
test -d "$manual_target/assets"
test -n "$(find "$manual_target/assets" -type f -print -quit)"
rm -rf "$previous"

echo "Backup remoto: $backup_file"
echo "Manual publicado: $manual_target"
'@

    $remoteScriptPath = Join-Path $env:TEMP "deploy-manual-html-remote.sh"
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($remoteScriptPath, $remoteScript.Replace("`r`n", "`n"), $utf8NoBom)

    try {
        Write-Host "=== 3. Creando backup remoto y sustituyendo solo el manual ==="
        $sshCommand = "ssh $remoteHost ""bash -s"" < ""$remoteScriptPath"""
        & cmd.exe /d /c $sshCommand
        $remoteExitCode = $LASTEXITCODE
    }
    finally {
        Remove-Item -LiteralPath $remoteScriptPath -Force -ErrorAction SilentlyContinue
    }

    if ($remoteExitCode -ne 0) {
        throw "Despliegue limitado del manual falló (código de salida: $remoteExitCode)."
    }

    Write-Host "=== DESPLIEGUE DEL MANUAL COMPLETADO ==="
}
finally {
    Remove-Item -LiteralPath $archivePath -Force -ErrorAction SilentlyContinue
}
