#!/usr/bin/env bash
set -euo pipefail

backup="/var/backups/devcampus-manuals/manual-css-20261006T204423Z.tar.gz"
parent="/var/www/devcampus/contenido-manuales/manualcss"
target="/var/www/devcampus/contenido-manuales/manualcss/manual-css"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
stage="/var/www/devcampus/contenido-manuales/manualcss/.manual-css-rollback-${timestamp}"
previous="/var/www/devcampus/contenido-manuales/manualcss/.manual-css-failed-${timestamp}"

test -f "$backup"
test -d "$target"
mkdir -p "$stage"
tar -xzf "$backup" -C "$stage"
test -f "$stage/manual-css/dist/index.html"

mv "$target" "$previous"
if ! mv "$stage/manual-css" "$target"; then
  mv "$previous" "$target"
  exit 1
fi

rm -rf "$stage"
chown -R www-data:www-data "$target"
find "$target" -type d -exec chmod 755 {} \;
find "$target" -type f -exec chmod 644 {} \;
nginx -t
systemctl reload nginx

echo "RESTORED=$target"
echo "BACKUP_PRESERVED=$backup"
echo "FAILED_VERSION_PRESERVED=$previous"
