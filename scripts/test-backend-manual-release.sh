#!/usr/bin/env bash
set -euo pipefail
repo_root="$(cd "$(dirname "$0")/.." && pwd)"
helper="$repo_root/scripts/backend-manual-release.sh"
test_root="$(mktemp -d)"; trap 'rm -rf "$test_root"' EXIT
web="$test_root/web"; root="$web/node"; backup="$test_root/backups"; logs="$test_root/logs"; bin="$test_root/bin"
mkdir -p "$web" "$bin"
export TEST_ROOT="$root"
cat > "$bin/curl" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
for arg in "$@"; do url="$arg"; done
test "${FAIL_HEALTH:-0}" != 1 || exit 22
release="$(readlink "$TEST_ROOT/current" | sed 's#releases/##')"
case "$url" in
  *release.json) cat "$TEST_ROOT/releases/$release/release.json" ;;
  *assets/*) printf 'HTTP/1.1 200 OK\r\nContent-Type: application/javascript\r\n\r\n' ;;
  *) cat "$TEST_ROOT/releases/$release/index.html" ;;
esac
EOF
chmod +x "$bin/curl"; export PATH="$bin:$PATH"
make_package() { local id="$1" asset="$2" content="$3"; local dir="$test_root/$id"; mkdir -p "$dir/assets"; printf '<meta name="devcampus-manual" content="node"><script src="/manuales-backend/node/assets/%s"></script>' "$asset" > "$dir/index.html"; printf '%s' "$content" > "$dir/assets/$asset"; tar -czf "$test_root/$id.tar.gz" -C "$dir" index.html assets; }
run() { "$helper" "$@"; }
publish() { local id="$1"; run prepare node "$root" "$backup" "$logs" "$id"; cp "$test_root/$id.tar.gz" "$root/.staging/$id/package.tar.gz"; run activate node "$root" "$backup" "$logs" "$id" '' https://test.invalid /manuales-backend/node/ 'name="devcampus-manual" content="node"'; }
make_package r1 old.js old; publish r1; test "$(readlink "$root/current")" = releases/r1
make_package r2 new.js new; publish r2; test "$(readlink "$root/current")" = releases/r2; test -f "$root/assets/old.js"; test -f "$root/assets/new.js"
make_package r3 failed.js failed; run prepare node "$root" "$backup" "$logs" r3; cp "$test_root/r3.tar.gz" "$root/.staging/r3/package.tar.gz"; if FAIL_HEALTH=1 run activate node "$root" "$backup" "$logs" r3 '' https://test.invalid /manuales-backend/node/ 'name="devcampus-manual" content="node"'; then exit 1; fi; test "$(readlink "$root/current")" = releases/r2; test -f "$root/releases/r3/.failed"
run rollback node "$root" "$backup" "$logs" rollback '' https://test.invalid /manuales-backend/node/ 'name="devcampus-manual" content="node"'; test "$(readlink "$root/current")" = releases/r1
run prepare node "$root" "$backup" "$logs" lock-a; if run prepare node "$root" "$backup" "$logs" lock-b; then exit 1; fi; run cleanup node "$root" "$backup" "$logs" lock-a
make_package collision old.js changed; run prepare node "$root" "$backup" "$logs" collision; cp "$test_root/collision.tar.gz" "$root/.staging/collision/package.tar.gz"; if run activate node "$root" "$backup" "$logs" collision '' https://test.invalid /manuales-backend/node/ 'name="devcampus-manual" content="node"'; then exit 1; fi; test "$(readlink "$root/current")" = releases/r1
printf 'TODAS LAS PRUEBAS LINUX LOCALES: OK\n'
