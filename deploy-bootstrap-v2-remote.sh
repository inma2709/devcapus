set -euo pipefail

archive="/tmp/devcampus-bootstrap-v2.tar.gz"
parent="/var/www/devcampus/contenido-manuales/manual-bootstrap-principiantes"
target="$parent/v2"
stamp="$(date -u +%Y%m%dT%H%M%SZ)"
stage="/var/www/.bootstrap-v2-stage-$stamp"
previous="/var/www/.bootstrap-v2-previous-$stamp"

test -f "$archive"
test -d "$parent"
mkdir -p "$stage"
tar -xzf "$archive" -C "$stage"

for required in index.html manual.css manual.js chuleta.html devacademy-final.html; do
  test -f "$stage/v2/$required"
done

if test -d "$target"; then
  mv "$target" "$previous"
fi
mv "$stage/v2" "$target"
rmdir "$stage"
chown -R www-data:www-data "$target"
find "$target" -type d -exec chmod 755 {} \;
find "$target" -type f -exec chmod 644 {} \;
test -f "$target/capitulo-8.html"
rm -f "$archive"
printf 'PUBLISHED=%s\nBACKUP=%s\n' "$target" "$previous"
