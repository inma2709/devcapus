$ErrorActionPreference = "Stop"

$archivePath = Join-Path $PSScriptRoot "devcampus-deploy.tar.gz"
$remoteArchivePath = "/tmp/devcampus-deploy.tar.gz"
$remoteHost = "root@devcampus.es"

function Assert-ExternalCommandSucceeded {
    param([string]$Step)

    if ($LASTEXITCODE -ne 0) {
        throw "$Step falló (código de salida: $LASTEXITCODE)."
    }
}

Write-Host "=== 1. Compilando DevCampus ==="
npm run build
Assert-ExternalCommandSucceeded "Build"

Write-Host "=== 2. Creando paquete ==="
if (Test-Path -LiteralPath $archivePath) {
    Remove-Item -LiteralPath $archivePath -Force
}

 # -C empaqueta el contenido de dist, de modo que index.html queda en la raíz remota.
& tar.exe -czf $archivePath -C (Join-Path $PSScriptRoot "dist") .
Assert-ExternalCommandSucceeded "Creación del paquete TAR.GZ"

Write-Host "=== 3. Subiendo al servidor ==="
& scp $archivePath "${remoteHost}:$remoteArchivePath"
Assert-ExternalCommandSucceeded "Subida SCP"

Write-Host "=== 4. Desplegando ==="
$remoteScript = @'
set -e

test -f /tmp/devcampus-deploy.tar.gz
mkdir -p /var/www/devcampus
rm -rf /var/www/devcampus/*
tar -xzf /tmp/devcampus-deploy.tar.gz -C /var/www/devcampus
chown -R www-data:www-data /var/www/devcampus
find /var/www/devcampus -type d -exec chmod 755 {} \;
find /var/www/devcampus -type f -exec chmod 644 {} \;
test -f /var/www/devcampus/index.html
test -d /var/www/devcampus/assets

if [ -n "$(find /var/www/devcampus -type d \( -name node_modules -o -name .git \) -print -quit)" ]; then
  echo "El paquete desplegado contiene node_modules o .git." >&2
  exit 1
fi

rm -f /tmp/devcampus-deploy.tar.gz
nginx -t
systemctl reload nginx
'@

# SSH debe recibir saltos LF. PowerShell vuelve a usar CRLF al canalizar texto
# hacia ejecutables nativos, por eso se redirige un archivo temporal en UTF-8.
$remoteScriptPath = Join-Path $env:TEMP "devcampus-deploy-remote.sh"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($remoteScriptPath, $remoteScript.Replace("`r`n", "`n"), $utf8NoBom)

try {
    $sshCommand = "ssh $remoteHost ""bash -s"" < ""$remoteScriptPath"""
    & cmd.exe /d /c $sshCommand
    $remoteExitCode = $LASTEXITCODE
}
finally {
    Remove-Item -LiteralPath $remoteScriptPath -Force -ErrorAction SilentlyContinue
}

if ($remoteExitCode -ne 0) {
    throw "Despliegue remoto falló (código de salida: $remoteExitCode)."
}

Write-Host "=== 5. Validando servidor ==="
$homeResponse = Invoke-WebRequest -Uri "https://devcampus.es/" -UseBasicParsing
if ($homeResponse.StatusCode -ne 200) {
    throw "La home devolvió HTTP $($homeResponse.StatusCode)."
}

$indexHtml = Get-Content -LiteralPath (Join-Path $PSScriptRoot "dist\index.html") -Raw
$scriptMatch = [regex]::Match($indexHtml, '<script[^>]+src="(?<src>[^"]+)"')
if ($scriptMatch.Success) {
    $assetPath = $scriptMatch.Groups['src'].Value
    if (-not $assetPath.StartsWith('/')) {
        $assetPath = "/$assetPath"
    }

    $assetResponse = Invoke-WebRequest -Uri ("https://devcampus.es" + $assetPath) -UseBasicParsing
    if ($assetResponse.StatusCode -ne 200) {
        throw "El recurso principal $assetPath devolvió HTTP $($assetResponse.StatusCode)."
    }
}

Remove-Item -LiteralPath $archivePath -Force
Write-Host "=== DESPLIEGUE COMPLETADO ==="
Write-Host "https://devcampus.es"
