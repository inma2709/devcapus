param([string]$ManualSource)

$ErrorActionPreference = "Stop"

# Despliegue aislado del Manual CSS. Nunca ejecuta el despliegue global ni
# modifica el portal, sus assets, otros manuales o el webroot completo.
if (-not $ManualSource) {
    $ManualSource = Join-Path $PSScriptRoot "public\contenido-manuales\manualcss\manual-css"
}
$manualSource = (Resolve-Path -LiteralPath $ManualSource -ErrorAction Stop).Path
$distPath = Join-Path $manualSource "dist"
$archivePath = Join-Path $env:TEMP "manual-css-deploy.tar.gz"
$remoteArchivePath = "/tmp/manual-css-deploy.tar.gz"
$remoteHost = "root@devcampus.es"

function Assert-ExternalCommandSucceeded {
    param([string]$Step)

    if ($LASTEXITCODE -ne 0) {
        throw "$Step falló (código de salida: $LASTEXITCODE)."
    }
}

function Assert-ManualArtifact {
    param([string]$Path, [string]$Label)

    if (-not (Test-Path -LiteralPath (Join-Path $Path "index.html") -PathType Leaf)) {
        throw "$Label no contiene index.html. No se publicará nada."
    }
    if (-not (Test-Path -LiteralPath (Join-Path $Path "assets") -PathType Container)) {
        throw "$Label no contiene assets/. No se publicará nada."
    }
    if (-not (Get-ChildItem -LiteralPath (Join-Path $Path "assets") -File -Recurse | Select-Object -First 1)) {
        throw "$Label tiene assets/ vacío. No se publicará nada."
    }
    if (Test-Path -LiteralPath (Join-Path $Path "node_modules")) {
        throw "$Label no puede contener node_modules/."
    }
}

if (-not (Test-Path -LiteralPath $manualSource -PathType Container)) {
    throw "No existe el proyecto del Manual CSS: $manualSource"
}

try {
    Push-Location $manualSource

    Write-Host "=== 1. Validando el Manual CSS ==="
    # ESLint por defecto admite warnings; el manual exige cero errores y cero warnings.
    & npm.cmd run lint -- --max-warnings=0
    Assert-ExternalCommandSucceeded "Lint del Manual CSS"

    Write-Host "=== 2. Generando el artefacto del Manual CSS ==="
    & npm.cmd run build
    Assert-ExternalCommandSucceeded "Build del Manual CSS"
    Assert-ManualArtifact -Path $distPath -Label "El artefacto dist/"

    $indexContent = Get-Content -LiteralPath (Join-Path $distPath "index.html") -Raw
    if ($indexContent -match '(?:src|href)="/assets/') {
        throw "El build usa /assets global. Debe usar la base del Manual CSS antes de publicar."
    }

    if (Test-Path -LiteralPath $archivePath) {
        Remove-Item -LiteralPath $archivePath -Force
    }

    Write-Host "=== 3. Empaquetando exclusivamente dist/ ==="
    & tar.exe -czf $archivePath -C $manualSource dist
    Assert-ExternalCommandSucceeded "Creación del paquete TAR.GZ del Manual CSS"

    $archiveContents = & tar.exe -tzf $archivePath
    Assert-ExternalCommandSucceeded "Inspección del paquete TAR.GZ del Manual CSS"
    if ($archiveContents -notcontains "dist/index.html" -or $archiveContents -notcontains "dist/assets/") {
        throw "El paquete debe contener dist/index.html y dist/assets/."
    }
    if ($archiveContents | Where-Object { $_ -match '(^|/)node_modules(/|$)|(^|/)src(/|$)|(^|/)\.git(/|$)' }) {
        throw "El paquete contiene código fuente o dependencias; se cancela el despliegue."
    }

    Write-Host "=== 4. Subiendo solo el artefacto del Manual CSS ==="
    & scp $archivePath "${remoteHost}:$remoteArchivePath"
    Assert-ExternalCommandSucceeded "Subida SCP del Manual CSS"

    $remoteScript = @'
set -euo pipefail

archive="/tmp/manual-css-deploy.tar.gz"
web_root="/var/www/devcampus"
manual_parent="$web_root/contenido-manuales/manualcss"
manual_target="$manual_parent/manual-css"
published_dist="$manual_target/dist"
backup_root="/var/backups/devcampus-manuals"
nginx_config="/etc/nginx/sites-available/devcampus.es"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
stage="$manual_parent/.manual-css-staging-$timestamp"
previous="/tmp/devcampus-manual-css-previous-$timestamp"

cleanup() {
  rm -rf "$stage"
  rm -f "$archive"
}
trap cleanup EXIT

# Guardas de alcance: este script solo admite el directorio del Manual CSS.
test "$manual_target" = "/var/www/devcampus/contenido-manuales/manualcss/manual-css"
test -f "$archive"
test -d "$manual_target"
nginx -T 2>/dev/null | grep -q "root /var/www/devcampus"
mkdir -p "$backup_root"

# React Router necesita que una recarga de una ruta interna vuelva al índice
# de este manual. La regla queda limitada a su dist/ y se guarda antes una
# copia recuperable de Nginx. No cambia las reglas del portal ni de otros manuales.
if ! grep -q "location \^~ /contenido-manuales/manualcss/manual-css/dist/" "$nginx_config"; then
  nginx_backup="$backup_root/nginx-devcampus-manual-css-$timestamp.conf"
  cp "$nginx_config" "$nginx_backup"
  sed -i '/^[[:space:]]*location \/ {$/i\
    location ^~ /contenido-manuales/manualcss/manual-css/dist/ {\
        try_files $uri $uri/ /contenido-manuales/manualcss/manual-css/dist/index.html;\
    }\
' "$nginx_config"
  if ! nginx -t; then
    cp "$nginx_backup" "$nginx_config"
    exit 1
  fi
  if ! systemctl reload nginx; then
    cp "$nginx_backup" "$nginx_config"
    nginx -t
    systemctl reload nginx || true
    exit 1
  fi
fi

mkdir -p "$stage"
tar -xzf "$archive" -C "$stage"
test -f "$stage/dist/index.html"
test -d "$stage/dist/assets"
test -n "$(find "$stage/dist/assets" -type f -print -quit)"
if find "$stage" -type d \( -name node_modules -o -name .git -o -name src \) -print -quit | grep -q .; then
  echo "El artefacto remoto contiene ficheros no publicables." >&2
  exit 1
fi

# Backup íntegro y fuera del webroot, antes de sustituir el único destino permitido.
backup_file="$backup_root/manual-css-$timestamp.tar.gz"
tar -czf "$backup_file" -C "$manual_parent" manual-css
test -s "$backup_file"

chown -R www-data:www-data "$stage"
find "$stage" -type d -exec chmod 755 {} \;
find "$stage" -type f -exec chmod 644 {} \;

# Activación atómica por directorio. Si falla el segundo movimiento, el
# directorio anterior se repone inmediatamente.
mv "$manual_target" "$previous"
if ! mv "$stage" "$manual_target"; then
  mv "$previous" "$manual_target"
  exit 1
fi

test -f "$published_dist/index.html"
test -d "$published_dist/assets"
test -n "$(find "$published_dist/assets" -type f -print -quit)"

# Comprobación real de la ruta de entrada, rutas internas y un recurso. Así
# una actualización nunca se considera correcta si React Router vuelve al portal.
base_url="https://devcampus.es/contenido-manuales/manualcss/manual-css/dist"
for route in "" "/ejercicios" "/ampliacion"; do
  curl --location --fail --silent --show-error --resolve devcampus.es:443:127.0.0.1 "$base_url$route" | grep -F '<title>CSS Manual</title>' > /dev/null
done
asset_path="$(sed -n 's/.*src="\([^\"]*\/assets\/[^\"]*\.js\)".*/\1/p' "$published_dist/index.html" | head -n 1)"
test -n "$asset_path"
curl --fail --silent --show-error --resolve devcampus.es:443:127.0.0.1 "https://devcampus.es$asset_path" >/dev/null

rm -rf "$previous"

echo "Backup remoto: $backup_file"
echo "Copia de Nginx (si se creó): ${nginx_backup:-ya existente}"
echo "Manual publicado: $published_dist"
echo "Recuperación manual: extrae el backup en un staging y sustituye solo $manual_target tras validarlo."
'@

    $remoteScriptPath = Join-Path $env:TEMP "deploy-manual-css-remote.sh"
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($remoteScriptPath, $remoteScript.Replace("`r`n", "`n"), $utf8NoBom)

    try {
        Write-Host "=== 5. Backup y activación aislada del Manual CSS ==="
        $sshCommand = "ssh $remoteHost ""bash -s"" < ""$remoteScriptPath"""
        & cmd.exe /d /c $sshCommand
        $remoteExitCode = $LASTEXITCODE
    }
    finally {
        Remove-Item -LiteralPath $remoteScriptPath -Force -ErrorAction SilentlyContinue
    }

    if ($remoteExitCode -ne 0) {
        throw "El despliegue aislado del Manual CSS falló (código de salida: $remoteExitCode). El backup remoto se conserva."
    }

    Write-Host "=== DESPLIEGUE DEL MANUAL CSS COMPLETADO ==="
}
finally {
    if (Get-Location | ForEach-Object { $_.Path -eq $manualSource }) {
        Pop-Location
    }
    Remove-Item -LiteralPath $archivePath -Force -ErrorAction SilentlyContinue
}
