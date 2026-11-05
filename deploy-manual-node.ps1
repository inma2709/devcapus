param([switch]$SkipBuild, [string]$DistPath, [switch]$ValidateOnly)

$ErrorActionPreference = 'Stop'
$archivePath = Join-Path $env:TEMP 'devcampus-node-manual-shell.tar.gz'
$remoteArchivePath = '/tmp/devcampus-node-manual-shell.tar.gz'
$remoteHost = 'root@devcampus.es'

function Assert-Command { param([string]$Step) if ($LASTEXITCODE -ne 0) { throw "$Step falló (código de salida: $LASTEXITCODE)." } }
function Assert-Shell { param([string]$Path)
    if (-not (Test-Path -LiteralPath $Path -PathType Container)) { throw "No existe el directorio de artefactos: $Path" }
    foreach ($item in @('index.html', 'assets')) { if (-not (Test-Path -LiteralPath (Join-Path $Path $item))) { throw "El build no contiene $item." } }
    if (-not (Get-ChildItem -LiteralPath (Join-Path $Path 'assets') -Filter '*.js' -File | Select-Object -First 1)) { throw 'El build no contiene un bundle JavaScript publicable.' }
}

try {
    if (-not $SkipBuild) {
        Write-Host '=== 1. Compilando el portal con el manual Node.js ==='
        $env:DEVCAMPUS_SHELL_BUILD = '1'
        & npm.cmd --prefix $PSScriptRoot run build
        Assert-Command 'Build del manual Node.js'
    }
    $dist = if ([string]::IsNullOrWhiteSpace($DistPath)) { Join-Path $PSScriptRoot 'dist-javascript-shell' } else { [IO.Path]::GetFullPath($DistPath) }
    Assert-Shell $dist
    Remove-Item -LiteralPath $archivePath -Force -ErrorAction SilentlyContinue
    Write-Host '=== 2. Empaquetando solo index.html y assets ==='
    & tar.exe -czf $archivePath -C $dist index.html assets
    Assert-Command 'Creación del paquete'
    $contents = & tar.exe -tzf $archivePath; Assert-Command 'Inspección del paquete'
    if ($contents -notcontains 'index.html' -or $contents -notcontains 'assets/') { throw 'El paquete no contiene index.html y assets/ en la raíz.' }
    if ($contents | Where-Object { $_ -match '(^|/)(node_modules|src|\.git)(/|$)' }) { throw 'El paquete contiene fuente o dependencias.' }
    if ($ValidateOnly) { Write-Host '=== VALIDACIÓN DEL PAQUETE NODE.JS COMPLETADA ==='; return }
    Write-Host '=== 3. Subiendo el shell actualizado ==='
    & scp $archivePath "${remoteHost}:$remoteArchivePath"; Assert-Command 'Subida SCP'
    $remote = "set -euo pipefail; a=$remoteArchivePath; w=/var/www/devcampus; b=/var/backups/devcampus-portal; t=`$(date -u +%Y%m%dT%H%M%SZ); s=/tmp/devcampus-node-stage-`$t; mkdir -p `$s `$b; tar -xzf `$a -C `$s; test -f `$s/index.html; test -d `$s/assets; tar -czf `$b/node-manual-shell-`$t.tar.gz -C `$w index.html assets; mv `$w/assets /tmp/node-assets-`$t; cp `$w/index.html /tmp/node-index-`$t.html; mv `$s/assets `$w/assets; mv `$s/index.html `$w/index.html; nginx -t; systemctl reload nginx; curl --fail --silent --show-error --resolve devcampus.es:443:127.0.0.1 https://devcampus.es/manuales/node-fundamentos > /dev/null"
    Write-Host '=== 4. Backup y activación del manual Node.js ==='
    & ssh $remoteHost "bash -lc '$remote'"; Assert-Command 'Activación remota'
}
finally { Remove-Item -LiteralPath $archivePath -Force -ErrorAction SilentlyContinue }
