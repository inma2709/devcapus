#!/usr/bin/env bash
# Ejecutado solo en el servidor por los scripts PowerShell. No guarda secretos.
set -euo pipefail

action="$1"; manual="$2"; root="$3"; backup_root="$4"; log_root="$5"; release="$6"
archive="${7:-}"; health_origin="${8:-}"; health_path="${9:-}"; health_marker="${10:-}"

fail() { printf '[backend-manual] %s\n' "$*" >&2; exit 1; }
log() { mkdir -p "$log_root/$manual"; printf '%s manual=%s action=%s release=%s %s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$manual" "$action" "$release" "$*" >> "$log_root/$manual/releases.log"; }
assert_tree() {
  case "$root" in */"$manual") ;; *) fail 'Destino remoto no coincide con el manual.' ;; esac
  test -d "$(dirname "$root")" || fail 'El directorio remoto autorizado no existe.'
  test ! -L "$(dirname "$root")" || fail 'El padre remoto autorizado no puede ser un enlace simbolico.'
  if test -e "$root"; then test -d "$root" && test ! -L "$root" || fail 'El destino remoto no es un directorio fisico.'; fi
}
init_tree() {
  assert_tree
  mkdir -p "$root/releases" "$root/assets" "$root/.staging" "$backup_root/$manual" "$log_root/$manual"
  for path in "$root/releases" "$root/assets" "$root/.staging"; do test -d "$path" && test ! -L "$path" || fail "Ruta no segura: $path"; done
}
lock() { mkdir "$root/.deploy-lock" 2>/dev/null || fail 'Ya existe un despliegue o rollback para este manual.'; printf '%s\n' "$release" > "$root/.deploy-lock/release"; }
unlock() { rm -rf "$root/.deploy-lock"; }
valid_payload() { test -d "$root/releases/$1" && test -f "$root/releases/$1/index.html" && test -d "$root/releases/$1/assets"; }
valid_release() { valid_payload "$1" && test -f "$root/releases/$1/release.json" && test ! -e "$root/releases/$1/.failed"; }
active_release() {
  test -L "$root/current" || return 1
  local link; link="$(readlink "$root/current")"
  case "$link" in releases/*) ;; *) return 1 ;; esac
  local id="${link#releases/}"; valid_release "$id" || return 1; printf '%s\n' "$id"
}
activate() {
  local id="$1"
  local new_link="$root/.current-$id"
  valid_release "$id" || fail 'Release incompleto.'
  ln -s "releases/$id" "$new_link"
  mv -Tf "$new_link" "$root/current"
  test "$(active_release)" = "$id" || fail 'No se pudo activar el release esperado.'
}
health() {
  local html release_json asset
  html="$(curl --fail --silent --show-error --max-time 15 "$health_origin$health_path")" || return 1
  printf '%s' "$html" | grep -Fq "$health_marker" || return 1
  release_json="$(curl --fail --silent --show-error --max-time 15 "$health_origin${health_path}release.json")" || return 1
  printf '%s' "$release_json" | grep -Fq "\"release\":\"$release\"" || return 1
  while IFS= read -r asset; do curl --fail --silent --show-error --max-time 15 -I "$health_origin$asset" >/dev/null || return 1; done < <(printf '%s' "$html" | grep -oE '/manuales-backend/[A-Za-z0-9._/-]+/assets/[A-Za-z0-9._-]+' | sort -u)
}
previous_release() {
  local active="$1" id
  while IFS= read -r id; do test "$id" = "$active" || { valid_release "$id" && { printf '%s\n' "$id"; return 0; }; }; done < <(find "$root/releases" -mindepth 1 -maxdepth 1 -type d -printf '%f\n' | sort -r)
  return 1
}

case "$action" in
  prepare)
    init_tree; lock; mkdir -p "$root/.staging/$release"; log 'result=prepared';
    ;;
  activate)
    init_tree; test -d "$root/.deploy-lock" || fail 'No existe el bloqueo de despliegue.'
    stage="$root/.staging/$release"; test -f "$stage/package.tar.gz" || fail 'No existe el paquete transferido.'
    previous="$(active_release || true)"; mkdir "$root/releases/$release" || fail 'El identificador de release ya existe.'
    tar -xzf "$stage/package.tar.gz" -C "$root/releases/$release"
    valid_payload "$release" || { rm -rf "$root/releases/$release"; fail 'Paquete de release incompleto.'; }
    find "$root/releases/$release" -type l -print -quit | grep -q . && fail 'El release contiene enlaces simbolicos.' || true
    printf '{"manual":"%s","release":"%s"}\n' "$manual" "$release" > "$root/releases/$release/release.json"
    find "$root/releases/$release/assets" -mindepth 1 -maxdepth 1 -type f -print0 | while IFS= read -r -d '' file; do name="$(basename "$file")"; target="$root/assets/$name"; if test -e "$target"; then cmp -s "$file" "$target" || fail "Colision de asset: $name"; else cp -- "$file" "$target"; fi; done
    tar -czf "$backup_root/$manual/$release.tar.gz" -C "$root/releases" "$release"
    activate "$release"
    if ! health; then
      touch "$root/releases/$release/.failed"
      if test -n "$previous"; then activate "$previous"; log "result=health-failed rollback=$previous"; else rm -f "$root/current"; log 'result=health-failed first-release-disabled'; fi
      unlock; fail 'La comprobacion HTTP fallo; se restauro el estado anterior.'
    fi
    log "result=activated previous=${previous:-none}"; unlock; rm -rf "$stage"
    ;;
  rollback)
    init_tree; lock; current="$(active_release)" || { unlock; fail 'No hay release activo valido.'; }; previous="$(previous_release "$current")" || { unlock; fail 'No existe un release anterior valido.'; }
    activate "$previous"; release="$previous"; health || { activate "$current"; unlock; fail 'Fallo la comprobacion HTTP del rollback; se restauro el release original.'; }
    log "result=rolled-back previous=$current"; unlock
    ;;
  cleanup)
    test -d "$root/.deploy-lock" && unlock || true
    ;;
  *) fail 'Accion no reconocida.' ;;
esac
