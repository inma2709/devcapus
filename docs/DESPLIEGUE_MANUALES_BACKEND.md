# Despliegue independiente de manuales backend

El sistema registra exclusivamente manuales con build Vite autónomo. Node es un piloto: `manuals/node/` no existe todavía, así que toda validación informa la dependencia y nunca puede publicar el bundle del portal.

```powershell
npm run deploy:backend -- node -ValidateOnly
npm run deploy:backend -- node -Simulate
npm run rollback:backend -- node -Simulate
```

La publicación real queda bloqueada hasta la migración de Node y la validación del swap remoto en staging. El destino autorizado de Node es exclusivamente `/var/www/devcampus/manuales-backend/node/`.
