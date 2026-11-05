set -euo pipefail

config="/etc/nginx/sites-available/devcampus.es"
backup="/var/backups/devcampus/bootstrap-v2-nginx-$(date -u +%Y%m%dT%H%M%SZ).conf"

grep -q 'location \^~ /contenido-manuales/manual-bootstrap-principiantes/v2/' "$config" && exit 0
mkdir -p /var/backups/devcampus
cp "$config" "$backup"
sed -i '/^[[:space:]]*location \/ {$/i\
    location ^~ /contenido-manuales/manual-bootstrap-principiantes/v2/ {\
        try_files $uri =404;\
    }\
' "$config"
if ! nginx -t; then
  cp "$backup" "$config"
  exit 1
fi
systemctl reload nginx
printf 'NGINX_BACKUP=%s\n' "$backup"
