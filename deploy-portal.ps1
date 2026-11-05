$ErrorActionPreference = "Stop"

# Publica exclusivamente el shell de DevCampus: index.html y assets/. No toca
# contenido-manuales, proyectos, proyectos-alumnos ni ninguna otra carpeta.
$archivePath = Join-Path $PSScriptRoot "devcampus-portal-shell.tar.gz"
$remoteArchivePath = "/tmp/devcampus-portal-shell.tar.gz"
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
    if (-not (Test-Path -LiteralPath (Join-Path $distPath "index.html")) -or -not (Test-Path -LiteralPath (Join-Path $distPath "assets"))) {
        throw "El build no contiene index.html y assets/."
    }

    if (Test-Path -LiteralPath $archivePath) {
        Remove-Item -LiteralPath $archivePath -Force
    }

    Write-Host "=== 2. Empaquetando solo el shell del portal ==="
    & tar.exe -czf $archivePath -C $distPath index.html assets
    Assert-ExternalCommandSucceeded "Creación del paquete del portal"

    $archiveContents = & tar.exe -tzf $archivePath
    Assert-ExternalCommandSucceeded "Inspección del paquete del portal"
    if ($archiveContents -notcontains "index.html" -or $archiveContents -notcontains "assets/") {
        throw "El paquete no contiene index.html y assets/ en su raíz."
    }

    Write-Host "=== 3. Subiendo solo el shell del portal ==="
    & scp $archivePath "${remoteHost}:$remoteArchivePath"
    Assert-ExternalCommandSucceeded "Subida SCP del portal"

    $remoteScript = @'
set -euo pipefail

archive="/tmp/devcampus-portal-shell.tar.gz"
web_root="/var/www/devcampus"
backup_root="/var/backups/devcampus-portal"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
stage="/tmp/devcampus-portal-stage-$timestamp"
previous_assets="/tmp/devcampus-portal-assets-$timestamp"
previous_index="/tmp/devcampus-portal-index-$timestamp.html"

cleanup() {
  rm -rf "$stage" "$previous_assets"
  rm -f "$archive" "$previous_index"
}
trap cleanup EXIT

test -f "$web_root/index.html"
test -d "$web_root/assets"
test -f "$archive"
mkdir -p "$stage" "$backup_root"
tar -xzf "$archive" -C "$stage"
test -f "$stage/index.html"
test -d "$stage/assets"
test -n "$(find "$stage/assets" -type f -print -quit)"

# Backup remoto del shell, separado de manuales y proyectos.
backup_file="$backup_root/portal-shell-$timestamp.tar.gz"
tar -czf "$backup_file" -C "$web_root" index.html assets
test -s "$backup_file"

chown -R www-data:www-data "$stage/assets"
find "$stage/assets" -type d -exec chmod 755 {} \;
find "$stage/assets" -type f -exec chmod 644 {} \;
chmod 644 "$stage/index.html"

# Instala primero los assets nuevos y después index.html, de modo que el HTML
# publicado nunca apunte a bundles inexistentes. Solo se sustituyen estos dos
# objetivos; el resto del webroot se conserva intacto.
cp "$web_root/index.html" "$previous_index"
mv "$web_root/assets" "$previous_assets"
if ! mv "$stage/assets" "$web_root/assets"; then
  mv "$previous_assets" "$web_root/assets"
  exit 1
fi
if ! mv "$stage/index.html" "$web_root/index.html"; then
  mv "$web_root/assets" "$stage/assets"
  mv "$previous_assets" "$web_root/assets"
  mv "$previous_index" "$web_root/index.html"
  exit 1
fi

test -f "$web_root/index.html"
test -d "$web_root/assets"
nginx -t
systemctl reload nginx

echo "Backup remoto: $backup_file"
echo "Shell del portal publicado: $web_root/index.html y $web_root/assets"
'@

    $remoteScriptPath = Join-Path $env:TEMP "deploy-portal-remote.sh"
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($remoteScriptPath, $remoteScript.Replace("`r`n", "`n"), $utf8NoBom)

    try {
        Write-Host "=== 4. Haciendo backup e instalando el shell del portal ==="
        $sshCommand = "ssh $remoteHost ""bash -s"" < ""$remoteScriptPath"""
        & cmd.exe /d /c $sshCommand
        $remoteExitCode = $LASTEXITCODE
    }
    finally {
        Remove-Item -LiteralPath $remoteScriptPath -Force -ErrorAction SilentlyContinue
    }

    if ($remoteExitCode -ne 0) {
        throw "Despliegue del shell del portal falló (código de salida: $remoteExitCode)."
    }

    Write-Host "=== DESPLIEGUE DEL PORTAL COMPLETADO ==="
}
finally {
    Remove-Item -LiteralPath $archivePath -Force -ErrorAction SilentlyContinue
}
