# DevCampus: instrucciones de trabajo

## Proyecto fuente

- **Nombre:** DevCampus.
- **Ruta oficial:** `C:\Users\inmac\Downloads\devcampusept`.
- **Código fuente:** `src/`.
- **Stack comprobado:** React 19, Vite 8, JavaScript/JSX, React Router DOM 7, Tailwind CSS 4, Lucide React y oxlint.
- **No editar:** `dist/`, los directorios `dist-*`, bundles generados ni recursos compilados. No reconstruir la aplicación a partir de ellos.
- El prototipo `C:\Users\inmac\Documents\ChatGPT\Curso\manual-entorno-servidor` se conserva, pero **no** es el origen de nuevos desarrollos.

## Comandos habituales

```powershell
npm run dev
npm run lint
npm run build
npm run preview
```

`npm run build` usa `vite build` y puede limpiar `dist/`. Antes de una compilación de validación, comprobar si ese directorio contiene recursos publicados que deban conservarse. No ejecutar scripts `deploy*`, `git push` ni publicar sin autorización expresa.

## Arquitectura que se debe consultar

- Router y composición global: `src/App.jsx`.
- Navegación principal: `src/components/layout/SiteHeader.jsx`.
- Catálogo: `src/data/manuals.js`, `src/pages/ManualsPage.jsx` y `src/components/content/ManualCard.jsx`.
- Itinerarios: `src/data/itineraries.js`, `src/pages/ItinerariesPage.jsx` y `src/pages/ItineraryDetailPage.jsx`.
- Manuales con recursos estáticos: `src/pages/ManualViewerPage.jsx`.
- Manual de JavaScript: `src/features/javascript-manual/`.
- Manual de entorno servidor activo: `src/features/server-manual/ServerManual.jsx`, con índice en `src/features/server-manual/courseStructure.js`, componentes compartidos en `src/features/server-manual/components/` y una lección por archivo en `src/features/server-manual/lessons/`. `NodeManual.jsx` y `NodeManualPhase1.jsx` se conservan temporalmente como respaldo histórico.

Para añadir o ampliar manuales, leer antes [docs/COMO_CREAR_MANUALES.md](docs/COMO_CREAR_MANUALES.md). Para escribir capítulos y prácticas, aplicar obligatoriamente [docs/ESTANDAR_DIDACTICO_MANUALES.md](docs/ESTANDAR_DIDACTICO_MANUALES.md).

## Procedimiento obligatorio para un manual nuevo

1. Localizar en `src/data/itineraries.js` la unidad formativa y el `manualId` correspondientes.
2. Comprobar en `src/data/manuals.js` si ya está registrado y conservar su identificador estable.
3. Revisar el patrón de `NodeManual.jsx` y los componentes existentes antes de crear otros.
4. Implementar capítulos y prácticas dentro de DevCampus; no crear una aplicación Vite independiente.
5. Registrar las rutas específicas en `src/App.jsx` antes de la ruta genérica `/manuales/:slug` cuando corresponda.
6. Actualizar metadatos del catálogo y comprobar los enlaces del itinerario y de la navegación.
7. Ejecutar las validaciones apropiadas y documentar los archivos modificados en la entrega.

## Restricciones permanentes

- No duplicar routers ni layouts existentes sin una justificación técnica aceptada.
- No modificar manuales previos si la tarea no lo exige.
- No editar manualmente `dist/` ni añadir dependencias sin necesidad técnica.
- No eliminar archivos, contenidos o recursos existentes sin justificar el alcance y recibir autorización.
- No desplegar, publicar, ejecutar `git push` ni scripts de despliegue sin autorización expresa.
