$ErrorActionPreference = "Stop"

# Hace que la ruta SPA /frameworks/react no sea capturada por la carpeta
# estática homónima. El manual sigue disponible en /frameworks/react/index.html.
$remoteHost = "root@devcampus.es"
$remoteScript = @'
set -euo pipefail

config="/etc/nginx/sites-available/devcampus.es"
backup_root="/var/backups/devcampus-portal"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
backup="$backup_root/nginx-devcampus.es-$timestamp.bak"

if grep -q 'location = /frameworks/react' "$config"; then
  echo "La regla exacta ya existe."
  exit 0
fi

mkdir -p "$backup_root"
cp "$config" "$backup"
sed -i '/location \^~ \/contenido-manuales\/html\/ {/i\    location = /frameworks/react {\n        try_files /__devcampus_spa_route__ /index.html;\n    }\n' "$config"

if ! nginx -t; then
  cp "$backup" "$config"
  nginx -t
  exit 1
fi

systemctl reload nginx
echo "Backup Nginx: $backup"
sed -n '/location = \/frameworks\/react/,/}/p' "$config"
'@

$remoteScriptPath = Join-Path $env:TEMP "configure-frameworks-react-route.sh"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($remoteScriptPath, $remoteScript.Replace("`r`n", "`n"), $utf8NoBom)

try {
    $sshCommand = "ssh $remoteHost `"bash -s`" < `"$remoteScriptPath`""
    & cmd.exe /d /c $sshCommand
    if ($LASTEXITCODE -ne 0) {
        throw "Actualización de la ruta Nginx falló (código de salida: $LASTEXITCODE)."
    }
}
finally {
    Remove-Item -LiteralPath $remoteScriptPath -Force -ErrorAction SilentlyContinue
}
