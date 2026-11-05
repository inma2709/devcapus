param([Parameter(Mandatory=$true,Position=0)][string]$Manual, [switch]$ValidateOnly, [switch]$Simulate)
$ErrorActionPreference = 'Stop'; $root = $PSScriptRoot
function Read-Config($Path) { if(Get-Command Import-PowerShellDataFile -ErrorAction SilentlyContinue){return Import-PowerShellDataFile $Path}; & { param($p) Import-LocalizedData -BaseDirectory (Split-Path -Parent $p) -FileName (Split-Path -Leaf $p) } $Path }
function Stop-Manual($m){throw "[backend-manual] $m"}
function Local-Path($relative){$path=[IO.Path]::GetFullPath((Join-Path $root $relative)); if(-not $path.StartsWith($root + [IO.Path]::DirectorySeparatorChar,[StringComparison]::OrdinalIgnoreCase)){Stop-Manual 'Ruta local fuera del repositorio.'}; $path}
function Release-Id{"$(Get-Date -AsUTC -Format 'yyyyMMddTHHmmssZ')-$(([guid]::NewGuid().ToString('N')).Substring(0,12))"}
$config=Read-Config (Join-Path $root 'backend-manuals.config.psd1')
if(-not $config.Manuals.ContainsKey($Manual)){Stop-Manual "Manual no registrado: $Manual"}; $item=$config.Manuals[$Manual]
if($item.Id -ne $Manual -or [string]::IsNullOrWhiteSpace($item.HealthMarker)){Stop-Manual 'Configuracion incompleta.'}
if($item.RemotePath -match '\.\.' -or -not $item.RemotePath.StartsWith($config.Settings.RemoteWebRoot + '/')){Stop-Manual 'Ruta remota no autorizada.'}
$source=Local-Path $item.SourcePath; $build=Local-Path $item.BuildPath
if(-not(Test-Path $source -PathType Container) -or -not(Test-Path $build -PathType Container)){Stop-Manual 'No existe el proyecto o build independiente.'}
foreach($entry in 'index.html','assets'){if(-not(Test-Path (Join-Path $build $entry))){Stop-Manual "Build incompleto: falta $entry"}}
$index=Get-Content -Raw (Join-Path $build 'index.html'); if($index -notmatch [regex]::Escape($item.HealthMarker) -or $index -notmatch [regex]::Escape("$($item.HealthPath)assets/")){Stop-Manual 'El build no coincide con la identidad o base publica configurada.'}
$archive=Join-Path $env:TEMP "devcampus-backend-$Manual.tar.gz"
try {
  Remove-Item $archive -Force -ErrorAction SilentlyContinue; & tar.exe -czf $archive -C $build index.html assets; if($LASTEXITCODE){Stop-Manual 'No se pudo empaquetar'}
  $entries=& tar.exe -tzf $archive; if($LASTEXITCODE -or $entries -match '(^|/)(node_modules|src|\.git)(/|$)'){Stop-Manual 'Paquete no publicable'}
  if($ValidateOnly -or $Simulate){Write-Host 'VALIDACION/SIMULACION COMPLETADA: sin SCP, SSH ni cambios remotos.'; return}
  Stop-Manual 'La ejecucion remota requiere activar el helper versionado tras las pruebas Linux de esta fase.'
} finally {Remove-Item $archive -Force -ErrorAction SilentlyContinue}
