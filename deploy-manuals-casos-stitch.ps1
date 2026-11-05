$ErrorActionPreference = "Stop"

# Despliegue acotado: solo sustituye los dos manuales indicados. No toca el
# shell del portal ni ningún otro directorio de /var/www/devcampus.
$remoteHost = "root@devcampus.es"
$backupRoot = "/var/backups/devcampus-manuals"
$manuals = @(
    @{ Name = "casos-de-uso"; Source = "public\casos-de-uso"; Parent = "/var/www/devcampus" },
    @{ Name = "google-stitch"; Source = "public\contenido-manuales\google-stitch"; Parent = "/var/www/devcampus/contenido-manuales" }
)
$archives = @()

function Assert-ExternalCommandSucceeded {
    param([string]$Step)
    if ($LASTEXITCODE -ne 0) { throw "$Step falló (código de salida: $LASTEXITCODE)." }
}

try {
    foreach ($manual in $manuals) {
        $source = Join-Path $PSScriptRoot $manual.Source
        $archive = Join-Path $PSScriptRoot ("{0}-deploy.tar.gz" -f $manual.Name)
        if (-not (Test-Path -LiteralPath (Join-Path $source "index.html"))) {
            throw "No existe $source\index.html."
        }
        if (Test-Path -LiteralPath $archive) { Remove-Item -LiteralPath $archive -Force }

        Write-Host "=== Empaquetando $($manual.Name) ==="
        & tar.exe -czf $archive -C $source .
        Assert-ExternalCommandSucceeded "Empaquetado de $($manual.Name)"
        $contents = & tar.exe -tzf $archive
        Assert-ExternalCommandSucceeded "Inspección de $($manual.Name)"
        if ($contents -notcontains "./index.html") { throw "El paquete de $($manual.Name) no contiene index.html." }
        $manual.Archive = $archive
        $manual.RemoteArchive = "/tmp/$($manual.Name)-deploy.tar.gz"
        $archives += $archive
    }

    foreach ($manual in $manuals) {
        Write-Host "=== Subiendo $($manual.Name) ==="
        & scp $manual.Archive "${remoteHost}:$($manual.RemoteArchive)"
        Assert-ExternalCommandSucceeded "Subida SCP de $($manual.Name)"
    }

    $remoteScript = @'
set -euo pipefail

backup_root="/var/backups/devcampus-manuals"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
stages=""

cleanup() {
  for stage in $stages; do rm -rf "$stage"; done
  rm -f /tmp/casos-de-uso-deploy.tar.gz /tmp/google-stitch-deploy.tar.gz
}
trap cleanup EXIT

deploy_one() {
  name="$1"
  parent="$2"
  archive="$3"
  target="$parent/$name"
  stage="$parent/.${name}-staging-$timestamp"
  previous="$parent/.${name}-previous-$timestamp"
  backup="$backup_root/${name}-$timestamp.tar.gz"

  test -d "$parent"
  test -d "$target"
  test -f "$target/index.html"
  test -f "$archive"
  test ! -e "$stage"
  test ! -e "$previous"
  mkdir -p "$backup_root" "$stage"
  stages="$stages $stage"
  tar -xzf "$archive" -C "$stage"
  test -f "$stage/index.html"

  tar -czf "$backup" -C "$parent" "$name"
  test -s "$backup"

  mv "$target" "$previous"
  if ! mv "$stage" "$target"; then
    mv "$previous" "$target"
    exit 1
  fi
  stages=""
  chown -R www-data:www-data "$target"
  find "$target" -type d -exec chmod 755 {} \;
  find "$target" -type f -exec chmod 644 {} \;
  test -f "$target/index.html"
  rm -rf "$previous"
  echo "Manual publicado: $target"
  echo "Backup remoto: $backup"
}

deploy_one "casos-de-uso" "/var/www/devcampus" "/tmp/casos-de-uso-deploy.tar.gz"
test -f "/var/www/devcampus/casos-de-uso/diagrama-landing-page.png"
deploy_one "google-stitch" "/var/www/devcampus/contenido-manuales" "/tmp/google-stitch-deploy.tar.gz"
test -f "/var/www/devcampus/contenido-manuales/google-stitch/guia-prompt-perfecto.png"
nginx -t
'@

    $remoteScriptPath = Join-Path $env:TEMP "deploy-manuals-casos-stitch-remote.sh"
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($remoteScriptPath, $remoteScript.Replace("`r`n", "`n"), $utf8NoBom)
    try {
        Write-Host "=== Creando backups y publicando solo los dos manuales ==="
        $sshCommand = "ssh $remoteHost ""bash -s"" < ""$remoteScriptPath"""
        & cmd.exe /d /c $sshCommand
        $remoteExitCode = $LASTEXITCODE
    }
    finally {
        Remove-Item -LiteralPath $remoteScriptPath -Force -ErrorAction SilentlyContinue
    }
    if ($remoteExitCode -ne 0) { throw "Despliegue limitado falló (código de salida: $remoteExitCode)." }
    Write-Host "=== DESPLIEGUE LIMITADO COMPLETADO ==="
}
finally {
    foreach ($archive in $archives) { Remove-Item -LiteralPath $archive -Force -ErrorAction SilentlyContinue }
}
