#!/usr/bin/env bash
set -euo pipefail

backup="/var/backups/devcampus-portal/javascript-manual-shell-20261014T180021Z.tar.gz"
web_root="/var/www/devcampus"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
stage="/tmp/devcampus-js-rollback-${timestamp}"
failed_assets="/tmp/devcampus-js-failed-assets-${timestamp}"
failed_index="/tmp/devcampus-js-failed-index-${timestamp}.html"

cleanup() {
  rm -rf "$stage"
}
trap cleanup EXIT

test -f "$backup"
test -f "$web_root/index.html"
test -d "$web_root/assets"
mkdir -p "$stage"
tar -xzf "$backup" -C "$stage"
test -f "$stage/index.html"
test -d "$stage/assets"

mv "$web_root/assets" "$failed_assets"
if ! mv "$stage/assets" "$web_root/assets"; then
  mv "$failed_assets" "$web_root/assets"
  exit 1
fi
mv "$web_root/index.html" "$failed_index"
if ! mv "$stage/index.html" "$web_root/index.html"; then
  mv "$web_root/assets" "$stage/assets"
  mv "$failed_assets" "$web_root/assets"
  mv "$failed_index" "$web_root/index.html"
  exit 1
fi

chown -R www-data:www-data "$web_root/assets"
find "$web_root/assets" -type d -exec chmod 755 {} \;
find "$web_root/assets" -type f -exec chmod 644 {} \;
chmod 644 "$web_root/index.html"
nginx -t
systemctl reload nginx

echo "RESTORED_BACKUP=$backup"
echo "FAILED_ASSETS_PRESERVED=$failed_assets"
echo "FAILED_INDEX_PRESERVED=$failed_index"
