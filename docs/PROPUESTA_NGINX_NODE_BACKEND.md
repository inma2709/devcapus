# Propuesta no aplicada: manual Node independiente

Esta propuesta requiere aprobación explícita, prueba de sintaxis y recarga controlada de Nginx. No forma parte de la publicación actual.

## Estado auditado

- El servidor `devcampus.es` usa `root /var/www/devcampus` y el fallback `try_files $uri $uri/ /index.html`.
- `/var/www/devcampus/manuales-backend/node/` no existe todavía.
- No hay una regla específica para `/manuales-backend/node/`; por ello esa URL devuelve hoy el `index.html` del portal.
- La aplicación Node usa `HashRouter`, de modo que Nginx solo debe entregar el índice y los assets de esa aplicación.

## Diseño de releases

Nginx debe apuntar a un enlace `current` dentro del directorio exclusivo de Node:

```text
/var/www/devcampus/manuales-backend/node/
  releases/<id>/index.html
  releases/<id>/assets/...
  current -> releases/<id>
  assets/<hash>...
```

La activación futura debe crear un release completo, verificarlo, incorporar primero los assets nuevos al almacén estable `assets/` y cambiar `current` de forma atómica. Los nombres de Vite están hashados: los assets ya existentes no se reemplazan y se mantienen mientras pueda existir HTML que los referencie. Conservar solo el release anterior no es suficiente si los assets se sirven desde `current`.

## Bloque Nginx propuesto

Insertar estas ubicaciones antes de `location /` del servidor HTTPS de `devcampus.es`:

```nginx
location = /manuales-backend/node {
    return 301 /manuales-backend/node/;
}

location = /manuales-backend/node/ {
    alias /var/www/devcampus/manuales-backend/node/index.html;
    add_header Cache-Control "no-store, max-age=0" always;
}

location ^~ /manuales-backend/node/assets/ {
    alias /var/www/devcampus/manuales-backend/node/assets/;
    try_files $uri =404;
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable" always;
}

location ^~ /manuales-backend/node/ {
    alias /var/www/devcampus/manuales-backend/node/;
    try_files $uri =404;
}
```

No se añade `X-Frame-Options` ni una CSP nueva: el visor actual necesita iframe de mismo origen. Si se añade CSP global en el futuro, debe permitir `frame-src 'self'` para el portal y conservar esta ruta.

## Shell del portal

Para generar un artefacto de comprobación sin tocar `dist/`, usar `npm run build:verify`. El artefacto contiene solamente `index.html` y `assets/` en `%TEMP%/devcampus-portal-verify`.

No debe usarse todavía `deploy-portal.ps1`: ejecuta el build normal, que intenta limpiar `dist/`. `deploy-manual-javascript.ps1` admite un artefacto mediante `-SkipBuild -DistPath`, pero su sustitución completa de `assets/` tampoco conserva los hashes del release anterior.

## Bloqueadores del script global backend

La publicación real de `deploy-backend-manual.ps1` no está autorizada ni es segura aún para actualizaciones: cuando el destino existe, `mv stage remote` anida el stage dentro del destino en lugar de reemplazarlo. El rollback remoto también está deshabilitado. Ambos flujos deben sustituirse por releases versionados, incorporación previa de los assets hashados al almacén estable, un cambio atómico del enlace `current`, comprobación HTTP posterior y restauración del release anterior.

## Sustitución vigente: publicación simple

La estructura vigente no usa releases ni enlaces simbólicos: `/var/www/devcampus/manuales-backend/node/` contiene directamente `index.html` y `assets/`. El módulo `scripts/publish-backend-manual.ps1` sube assets sin borrar los existentes, respalda el índice anterior y solo sustituye el índice tras completar los recursos. Si falla su health check, restaura el índice previo o elimina únicamente el índice nuevo de una primera publicación.
