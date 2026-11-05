[CmdletBinding()]
param(
  [Parameter(Mandatory)][string]$Manual,
  [Parameter(Mandatory)][string]$LocalBuild,
  [Parameter(Mandatory)][string]$RemoteDestination,
  [Parameter(Mandatory)][string]$SshHost,
  [Parameter(Mandatory)][string]$HealthUrl,
  [Parameter(Mandatory)][string]$ExpectedMarker,
  [string]$ConfigPath
)

$ErrorActionPreference = 'Stop'
if ([string]::IsNullOrWhiteSpace($ConfigPath)) { $ConfigPath = Join-Path $PSScriptRoot '..\backend-manuals.config.psd1' }
function Fail([string]$Message) { throw "[publish-backend-manual] $Message" }
function Read-Config([string]$Path) {
  $full = [IO.Path]::GetFullPath($Path)
  if (!(Test-Path -LiteralPath $full -PathType Leaf)) { Fail 'No existe la configuracion central.' }
  if (Get-Command Import-PowerShellDataFile -ErrorAction SilentlyContinue) { return Import-PowerShellDataFile $full }
  return & { param($p) Import-LocalizedData -BaseDirectory (Split-Path -Parent $p) -FileName (Split-Path -Leaf $p) } $full
}
function Bash-Literal([string]$Value) { "'" + $Value.Replace("'", "'`"'`"'") + "'" }
function Invoke-RemoteBash([string]$Script, [string[]]$Arguments) {
  $temporary = Join-Path $env:TEMP "devcampus-publish-$([guid]::NewGuid().ToString('N')).sh"
  [IO.File]::WriteAllText($temporary, $Script.Replace("`r`n", "`n"), (New-Object Text.UTF8Encoding($false)))
  try {
    $argumentText = ($Arguments | ForEach-Object { Bash-Literal $_ }) -join ' '
    $psi = New-Object System.Diagnostics.ProcessStartInfo
    $psi.FileName = 'ssh'; $psi.Arguments = "$SshHost `"bash -s -- $argumentText`""
    $psi.UseShellExecute = $false; $psi.RedirectStandardInput = $true; $psi.RedirectStandardOutput = $true; $psi.RedirectStandardError = $true
    $process = New-Object System.Diagnostics.Process; $process.StartInfo = $psi; [void]$process.Start()
    $process.StandardInput.Write(([IO.File]::ReadAllText($temporary).Replace("`r`n", "`n"))); $process.StandardInput.Close()
    $stdout = $process.StandardOutput.ReadToEnd(); $stderr = $process.StandardError.ReadToEnd(); $process.WaitForExit()
    if ($stdout) { Write-Output $stdout }; if ($stderr) { Write-Error $stderr }
    if ($process.ExitCode -ne 0) { Fail "La operacion SSH fallo (codigo $($process.ExitCode))." }
  } finally { Remove-Item -LiteralPath $temporary -Force -ErrorAction SilentlyContinue }
}

$config = Read-Config $ConfigPath
if (!$config.Manuals.ContainsKey($Manual)) { Fail "Manual no registrado: $Manual" }
$item = $config.Manuals[$Manual]
if ($item.Id -ne $Manual) { Fail 'Configuracion del manual incoherente.' }
if ($SshHost -ne $config.Settings.RemoteHost) { Fail 'Servidor SSH no autorizado.' }
if ($RemoteDestination -ne $item.RemotePath) { Fail 'Destino remoto distinto del registrado.' }
if ($RemoteDestination -match '\.\.' -or !$RemoteDestination.StartsWith($config.Settings.RemoteWebRoot + '/')) { Fail 'Destino remoto fuera del arbol autorizado.' }
if ($HealthUrl -ne ($config.Settings.HealthOrigin + $item.HealthPath)) { Fail 'URL de health no coincide con la configuracion.' }
if ($ExpectedMarker -ne $item.HealthMarker) { Fail 'Marcador HTML distinto del registrado.' }
$build = [IO.Path]::GetFullPath($LocalBuild)
if (!(Test-Path -LiteralPath $build -PathType Container)) { Fail 'No existe el build local.' }
$index = Join-Path $build 'index.html'; $assets = Join-Path $build 'assets'
if (!(Test-Path -LiteralPath $index -PathType Leaf) -or !(Test-Path -LiteralPath $assets -PathType Container)) { Fail 'El build debe contener index.html y assets.' }
if ((Get-Content -Raw $index) -notmatch [regex]::Escape($ExpectedMarker)) { Fail 'El index local no contiene el marcador esperado.' }
if (!(Get-ChildItem -LiteralPath $assets -File -Recurse | Select-Object -First 1)) { Fail 'El build no contiene assets publicables.' }

$token = "$((Get-Date).ToUniversalTime().ToString('yyyyMMddTHHmmssZ'))-$(([guid]::NewGuid().ToString('N')).Substring(0,8))"
$prepare = @'
set -euo pipefail
destination="$1"; parent="$2"; health_url="$3"; marker="$4"; token="$5"
fail(){ echo "[publish-backend-manual] $*" >&2; exit 1; }
webroot="$(dirname "$parent")"
test -d "$webroot" && test ! -L "$webroot" || fail 'Webroot remoto no autorizado.'
mkdir -p "$parent"
test -d "$parent" && test ! -L "$parent" || fail 'Padre remoto no autorizado.'
case "$destination" in "$parent"/*) ;; *) fail 'Destino fuera del arbol autorizado.' ;; esac
if test -f "$destination/index.html"; then
  response="$(curl --silent --show-error --location --max-time 15 "$health_url" || true)"
  printf '%s' "$response" | grep -Fq "$marker" || fail 'El index remoto existente no pertenece al manual seleccionado.'
else
  # En la primera publicación la URL puede devolver el fallback del portal: se verifica
  # la location efectiva de Nginx sin aceptar todavía esa respuesta como health check.
  nginx_effective="$(nginx -T 2>&1 || true)"
  printf '%s' "$nginx_effective" | grep -Fq 'location ^~ /manuales-backend/node/' || fail 'No existe la location aislada de Node en Nginx.'
  printf '%s' "$nginx_effective" | grep -Fq "$destination" || fail 'La location de Node no apunta al destino autorizado.'
fi
mkdir -p "$destination/assets" "$destination/.staging"
test ! -L "$destination" && test ! -L "$destination/assets" || fail 'Enlace simbolico inesperado.'
stage="$destination/.staging/$token"; mkdir "$stage"
printf '%s' "$stage"
'@
$activate = @'
set -euo pipefail
destination="$1"; backup_root="$2"; manual="$3"; health_url="$4"; marker="$5"; token="$6"
stage="$destination/.staging/$token"; backup=""; fail(){ echo "[publish-backend-manual] $*" >&2; exit 1; }
cleanup(){ rm -rf "$stage"; }
trap cleanup EXIT
test -f "$stage/index.html" && test -d "$stage/assets" || fail 'Transferencia incompleta.'
find "$stage" -type l -print -quit | grep -q . && fail 'Transferencia con enlaces simbolicos.' || true
mkdir -p "$backup_root/$manual"
if test -f "$destination/index.html"; then backup="$backup_root/$manual/index-$token.html"; cp "$destination/index.html" "$backup"; fi
find "$stage/assets" -type f -print0 | while IFS= read -r -d '' source; do name="$(basename "$source")"; target="$destination/assets/$name"; if test -e "$target"; then cmp -s "$source" "$target" || fail "Colision de asset: $name"; else cp "$source" "$target"; fi; done
test -n "$(find "$destination/assets" -type f -print -quit)" || fail 'No hay assets publicados.'
cp "$stage/index.html" "$destination/index.html.next"; mv -f "$destination/index.html.next" "$destination/index.html"
health_body="$stage/health.html"
touch "$health_body"; marker_actual=""
health_meta="$(curl --silent --show-error --location --max-time 15 --output "$health_body" --write-out '%{http_code}|%{content_type}|%{url_effective}' "$health_url" || true)"
health_status="${health_meta%%|*}"; health_rest="${health_meta#*|}"; health_type="${health_rest%%|*}"; health_final="${health_rest#*|}"
marker_actual="$(tr -d '[:space:]' < "$health_body" 2>/dev/null | tr \"'\" '\"' || true)"
marker_pattern="<metaname=\"devcampus-manual\"content=\"$manual\""
marker_found=false; printf '%s' "$marker_actual" | grep -Fq "$marker_pattern" && marker_found=true
marker_cr=false; od -An -tx1 "$health_body" | grep -q '0d' && marker_cr=true || true
assets_ok=true; health_origin="$(printf '%s' "$health_final" | sed -E 's#(https?://[^/]+).*#\1#')"
while IFS= read -r asset; do test -z "$asset" && continue; asset_status="$(curl --silent --show-error --location --max-time 15 --output /dev/null --write-out '%{http_code}' "${health_origin}$asset" || true)"; test "$asset_status" = 200 || { echo "[publish-backend-manual] health asset=$asset status=$asset_status" >&2; assets_ok=false; }; done < <(grep -oE '/manuales-backend/node/assets/[A-Za-z0-9._-]+' "$health_body" | sort -u)
printf '[publish-backend-manual] health url=%s status=%s content_type=%s manual=%q marker=%s cr=%s assets=%s\n' "$health_final" "$health_status" "$health_type" "$manual" "$marker_found" "$marker_cr" "$assets_ok" >&2
if test "$health_status" != 200 || ! printf '%s' "$health_type" | grep -qi '^text/html' || test "$marker_found" != true || test "$assets_ok" != true; then
  if test -n "$backup"; then cp "$backup" "$destination/index.html.restore"; mv -f "$destination/index.html.restore" "$destination/index.html"; else rm -f "$destination/index.html"; fi
  fail 'Health check fallido; HTML anterior restaurado cuando existia.'
fi
echo "Publicado manual=$manual backup=${backup:-none}"
'@

$stage = Invoke-RemoteBash $prepare @($RemoteDestination, $config.Settings.RemoteWebRoot, $HealthUrl, $ExpectedMarker, $token)
try {
  & scp -r $assets "$SshHost`:$stage/"; if ($LASTEXITCODE -ne 0) { Fail 'SCP de assets fallo.' }
  & scp $index "$SshHost`:$stage/index.html"; if ($LASTEXITCODE -ne 0) { Fail 'SCP de index.html fallo.' }
  Invoke-RemoteBash $activate @($RemoteDestination, $config.Settings.RemoteBackupRoot, $Manual, $HealthUrl, $ExpectedMarker, $token)
} catch { throw } 
