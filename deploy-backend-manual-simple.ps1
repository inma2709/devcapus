param([Parameter(Mandatory=$true,Position=0)][string]$Manual, [switch]$ValidateOnly, [switch]$Simulate)
$ErrorActionPreference='Stop'; $root=$PSScriptRoot
function Read-Config($Path){if(Get-Command Import-PowerShellDataFile -ErrorAction SilentlyContinue){return Import-PowerShellDataFile $Path}; & {param($p) Import-LocalizedData -BaseDirectory (Split-Path -Parent $p) -FileName (Split-Path -Leaf $p)} $Path}
function Fail($message){throw "[backend-manual] $message"}
function LocalPath($relative){$path=[IO.Path]::GetFullPath((Join-Path $root $relative));if(-not $path.StartsWith($root+[IO.Path]::DirectorySeparatorChar,[StringComparison]::OrdinalIgnoreCase)){Fail 'Ruta local fuera del proyecto.'};$path}
$config=Read-Config (Join-Path $root 'backend-manuals.config.psd1')
if(-not $config.Manuals.ContainsKey($Manual)){Fail "Manual no registrado: $Manual"};$item=$config.Manuals[$Manual]
if($item.Id -ne $Manual -or $item.RemotePath -match '\.\.' -or -not $item.RemotePath.StartsWith($config.Settings.RemoteWebRoot+'/')){Fail 'Destino remoto no autorizado.'}
$source=LocalPath $item.SourcePath;$build=LocalPath $item.BuildPath
if(-not(Test-Path $source -PathType Container)){Fail 'No existe el proyecto independiente.'}
& npm.cmd --prefix $source run build;if($LASTEXITCODE){Fail 'Fallo el build independiente.'}
foreach($entry in 'index.html','assets'){if(-not(Test-Path (Join-Path $build $entry))){Fail "Build incompleto: falta $entry"}}
$index=Get-Content -Raw (Join-Path $build 'index.html');if($index -notmatch [regex]::Escape($item.HealthMarker)){Fail 'El index no identifica el manual.'};if($index -notmatch [regex]::Escape("$($item.HealthPath)assets/")){Fail 'La base publica de assets no coincide.'}
$archive=Join-Path $env:TEMP "devcampus-$Manual-manual.tar.gz";Remove-Item $archive -Force -ErrorAction SilentlyContinue
try {
  & tar.exe -czf $archive -C $build index.html assets;if($LASTEXITCODE){Fail 'No se pudo empaquetar.'};$entries=& tar.exe -tzf $archive;if($LASTEXITCODE -or $entries -match '(^|/)(node_modules|src|\.git)(/|$)'){Fail 'Paquete no publicable.'}
  if($ValidateOnly -or $Simulate){Write-Host 'VALIDACION/SIMULACION COMPLETADA: build y paquete correctos; sin SSH/SCP ni cambios remotos.';return}
  $publisher = Join-Path $root 'scripts\publish-backend-manual.ps1'
  if (-not (Test-Path -LiteralPath $publisher -PathType Leaf)) { Fail 'No existe el modulo de publicacion SSH/SCP.' }
  & $publisher -Manual $Manual -LocalBuild $build -RemoteDestination $item.RemotePath -SshHost $config.Settings.RemoteHost -HealthUrl ($config.Settings.HealthOrigin + $item.HealthPath) -ExpectedMarker $item.HealthMarker -ConfigPath (Join-Path $root 'backend-manuals.config.psd1')
  if ($LASTEXITCODE -ne 0) { Fail "La publicacion remota fallo (codigo $LASTEXITCODE)." }
} finally {Remove-Item $archive -Force -ErrorAction SilentlyContinue}
