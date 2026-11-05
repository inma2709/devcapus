param([Parameter(Mandatory=$true,Position=0)][string]$Manual, [switch]$ValidateOnly, [switch]$Simulate)
$simpleScript = Join-Path $PSScriptRoot 'deploy-backend-manual-simple.ps1'
& $simpleScript @PSBoundParameters
exit $LASTEXITCODE

$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
function Import-BackendManualConfig([string]$Path) {
  if (Get-Command Import-PowerShellDataFile -ErrorAction SilentlyContinue) {
    return Import-PowerShellDataFile $Path
  }

  return & {
    param([string]$ConfigPath)
    Import-LocalizedData -BaseDirectory (Split-Path -Parent $ConfigPath) -FileName (Split-Path -Leaf $ConfigPath)
  } $Path
}
$config = Import-BackendManualConfig (Join-Path $root 'backend-manuals.config.psd1')
function Fail([string]$Message) { throw "[backend-manual] $Message" }
function Resolve-Local([string]$Relative) { $full=[IO.Path]::GetFullPath((Join-Path $root $Relative)); if (-not $full.StartsWith($root,[StringComparison]::OrdinalIgnoreCase)) { Fail 'Ruta local fuera del repositorio.' }; return $full }
function Assert-Remote([string]$Path) { if ([string]::IsNullOrWhiteSpace($Path) -or $Path -eq '/' -or -not $Path.StartsWith($config.Settings.RemoteWebRoot + '/')) { Fail "Ruta remota no autorizada: $Path" }; if ($Path -match '\.\.') { Fail 'La ruta remota contiene ..' } }
if (-not $config.Manuals.ContainsKey($Manual)) { Fail "Manual no registrado: $Manual" }
$item=$config.Manuals[$Manual]; if ($item.Id -ne $Manual) { Fail 'Configuración incoherente.' }; Assert-Remote $item.RemotePath
$source=Resolve-Local $item.SourcePath; $build=Resolve-Local $item.BuildPath
Write-Host "Manual: $($item.Name) [$($item.Status)]"; Write-Host "Destino autorizado: $($item.RemotePath)"
if (-not (Test-Path -LiteralPath $source -PathType Container)) { Write-Host "DEPENDENCIA PENDIENTE: no existe el proyecto independiente: $source"; exit 2 }
if (-not (Test-Path -LiteralPath $build -PathType Container)) { Write-Host "DEPENDENCIA PENDIENTE: no existe el build independiente: $build"; exit 2 }
foreach($required in @('index.html','assets')) { if (-not (Test-Path -LiteralPath (Join-Path $build $required))) { Fail "Build incompleto: falta $required" } }
$archive=Join-Path $env:TEMP "devcampus-backend-$Manual.tar.gz"; Remove-Item -LiteralPath $archive -Force -ErrorAction SilentlyContinue
& tar.exe -czf $archive -C $build index.html assets; if($LASTEXITCODE -ne 0){Fail 'No se pudo empaquetar'}
$entries=& tar.exe -tzf $archive; if($LASTEXITCODE -ne 0 -or $entries -match '(^|/)(node_modules|src|\.git)(/|$)'){Fail 'Paquete no publicable'}
if($ValidateOnly -or $Simulate){ Write-Host 'VALIDACION/SIMULACION COMPLETADA: no se ha iniciado SCP, SSH ni modificado un destino remoto.'; Remove-Item $archive -Force; exit 0 }
$lock="/tmp/devcampus-backend-$Manual.lock"; $stage="/tmp/devcampus-backend-$Manual-stage"; $remote=$item.RemotePath; $backupRoot=$config.Settings.RemoteBackupRoot
& scp $archive "$($config.Settings.RemoteHost):/tmp/devcampus-backend-$Manual.tar.gz"; if($LASTEXITCODE -ne 0){Fail 'SCP falló'}
$command="set -euo pipefail; test ! -e '$lock'; mkdir '$lock'; trap 'rm -rf $lock $stage' EXIT; mkdir -p '$stage' '$backupRoot'; tar -xzf '/tmp/devcampus-backend-$Manual.tar.gz' -C '$stage'; test -f '$stage/index.html'; test -d '$stage/assets'; test ! -L '$remote'; mkdir -p '$(Split-Path $remote -Parent)'; if test -d '$remote'; then tar -czf '$backupRoot/$Manual-'`$(date -u +%Y%m%dT%H%M%SZ)'.tar.gz' -C '$(Split-Path $remote -Parent)' '$Manual'; fi; mv '$stage' '$remote'"
& ssh $config.Settings.RemoteHost "bash -lc `"$command`""; if($LASTEXITCODE -ne 0){Fail 'Activación remota falló; el destino existente se conserva antes del swap.'}
Remove-Item $archive -Force
