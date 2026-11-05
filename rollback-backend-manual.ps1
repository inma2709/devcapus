param([Parameter(Mandatory=$true,Position=0)][string]$Manual, [switch]$ValidateOnly, [switch]$Simulate)
$ErrorActionPreference='Stop'; $root=$PSScriptRoot
function Import-BackendManualConfig([string]$Path) {
  if (Get-Command Import-PowerShellDataFile -ErrorAction SilentlyContinue) { return Import-PowerShellDataFile $Path }
  return & { param([string]$ConfigPath) Import-LocalizedData -BaseDirectory (Split-Path -Parent $ConfigPath) -FileName (Split-Path -Leaf $ConfigPath) } $Path
}
$config=Import-BackendManualConfig (Join-Path $root 'backend-manuals.config.psd1')
if(-not $config.Manuals.ContainsKey($Manual)){throw "Manual no registrado: $Manual"}; $item=$config.Manuals[$Manual]
if($item.RemotePath -notlike "$($config.Settings.RemoteWebRoot)/*"){throw 'Ruta remota no autorizada'}
if($ValidateOnly -or $Simulate){Write-Host "SIMULACION: restauraria solo $($item.RemotePath) desde el ultimo backup individual de $Manual."; exit 0}
throw 'Rollback remoto deshabilitado hasta validar el protocolo de swap y Nginx en staging.'
