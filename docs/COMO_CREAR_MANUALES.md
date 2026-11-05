# Cómo crear manuales en DevCampus

Esta guía describe la integración de un manual dentro de la aplicación fuente de DevCampus. La ruta de trabajo es `C:\Users\inmac\Downloads\devcampusept`. No se debe usar como origen el prototipo independiente de entorno servidor ni los directorios compilados `dist*`.

## Arquitectura real

El proyecto usa un único `BrowserRouter` en `src/App.jsx`. La cabecera y el pie se cargan alrededor de todas las rutas. Los manuales pueden ser recursos estáticos mostrados dentro de `ManualViewerPage`, manuales React con ruta propia o actividades específicas.

```text
devcampusept/
├── package.json                         # scripts y dependencias
├── vite.config.js                       # plugins React y Tailwind
├── src/
│   ├── App.jsx                          # único router y rutas de la aplicación
│   ├── components/
│   │   ├── content/
│   │   │   ├── ManualCard.jsx           # tarjeta del catálogo
│   │   │   ├── PageHero.jsx
│   │   │   └── Seo.jsx
│   │   └── layout/
│   │       ├── SiteHeader.jsx           # navegación principal
│   │       ├── SiteFooter.jsx
│   │       └── Container.jsx
│   ├── data/
│   │   ├── manuals.js                   # metadatos del catálogo
│   │   └── itineraries.js               # unidades y orden de itinerarios
│   ├── features/
│   │   ├── javascript-manual/           # manual React de JavaScript
│   │   ├── javascript-exercises/
│   │   └── server-manual/
│   │       ├── ServerManual.jsx         # implementación activa del Manual 1
│   │       ├── courseStructure.js       # índice y metadatos de capítulos
│   │       ├── components/              # estructura didáctica reutilizable
│   │       ├── lessons/                 # un archivo por capítulo publicado
│   │       ├── NodeManualPhase1.jsx     # respaldo de la Fase 1
│   │       └── NodeManual.jsx           # piloto original conservado
│   └── pages/
│       ├── ManualsPage.jsx              # catálogo filtrable
│       ├── ManualViewerPage.jsx         # iframe para manuales con path
│       ├── ItinerariesPage.jsx
│       └── ItineraryDetailPage.jsx
└── docs/
    ├── COMO_CREAR_MANUALES.md
    └── ESTANDAR_DIDACTICO_MANUALES.md
```

`ManualCard` trata un manual como disponible cuando tiene `route` o `path`. `route` enlaza a una pantalla React de DevCampus; `path` se abre con la ruta genérica `/manuales/:slug` y `ManualViewerPage` lo carga en un `iframe`.

## Itinerario MF0492_3

El itinerario se declara en `src/data/itineraries.js` con el slug `mf0492-entorno-servidor`:

| Unidad | Horas | Manuales | Estado actual |
| --- | ---: | --- | --- |
| UF1844 · Desarrollo en entorno servidor | 90 | Fundamentos de Node.js (30), APIs REST con Express (45), Arquitectura y calidad del backend (15) | Solo Node.js tiene contenido y ruta disponibles. |
| UF1845 · Acceso a datos | 90 | SQL (45), PostgreSQL desde Node.js (30), Autenticación y seguridad (15) | Registrados como próximos; sin capítulos ni ruta. |
| UF1846 · Aplicaciones web distribuidas | 60 | Servicios distribuidos (35), Integración y proyecto full stack (25) | Registrados como próximos; sin capítulos ni ruta. |

Son 240 horas, distribuidas en 48 jornadas de 5 horas. El proyecto transversal registrado es **Gestor de citas full stack**, con etapas de gestión local, API Express, PostgreSQL, usuarios y permisos, React y publicación. El contenido desarrollado del Manual 1 se limita a la lección `que-es-node`; no se debe presentar como un manual completo.

## Procedimiento para un manual nuevo

### 1. Ubicar el manual en el itinerario

Abrir `src/data/itineraries.js`, localizar la UF correspondiente y su `manualIds`. Para Express el identificador ya previsto es `express-api-rest`, dentro de `UF1844`.

### 2. Revisar su registro de catálogo

Buscar `id: 'express-api-rest'` en `src/data/manuals.js`. Ya existen su título, descripción, categoría `Backend`, curso `MF0492_3`, nivel y estado `Próximamente`. Mantener `id` y `slug` porque los enlaza el detalle del itinerario.

Al publicarlo, añadir una ruta concreta y cambiar el estado solo cuando los capítulos y prácticas estén realmente implementados:

```js
{
  id: 'express-api-rest',
  slug: 'express-api-rest',
  title: 'Desarrollo de APIs REST con Express',
  category: 'Backend',
  course: 'MF0492_3',
  level: 'Intermedio · 45 h',
  route: '/manuales/express-api-rest',
  status: 'Disponible',
}
```

No declarar disponible un manual cuyo contenido sea solo un índice o una lección de prueba.

### 3. Diseñar capítulos con el patrón existente

Tomar `src/features/server-manual/ServerManual.jsx`, `courseStructure.js`, `components/` y `lessons/` como referencia inmediata. La implementación activa separa el índice, el menú lateral responsive, bloques de código, prácticas, pistas, soluciones razonadas y comprobaciones. Los archivos de fases anteriores conservan respaldo histórico. No crear un router adicional.

Para Express, una organización posible —que debe ajustarse al contenido real antes de codificar— es:

```text
src/features/server-manual/
├── ExpressManual.jsx
└── express/                             # solo si varios capítulos justifican separarlo
    ├── courseStructure.js
    ├── ExpressIntroductionLesson.jsx
    └── RoutesAndResponsesLesson.jsx
```

Los nombres deben ser descriptivos, en PascalCase para componentes (`ExpressManual.jsx`) y en camelCase para datos o funciones (`courseStructure.js`). Los slugs deben ser estables, en minúsculas y con guiones: por ejemplo, `primer-servidor-express`.

### 4. Registrar rutas sin interferir con las existentes

Importar el manual en `src/App.jsx` y añadir rutas explícitas. Deben estar antes de `/manuales/:slug`, que está reservada para `ManualViewerPage`.

```jsx
import ExpressManual from './features/server-manual/ExpressManual';

<Route path="/manuales/express-api-rest" element={<ExpressManual />} />
<Route
  path="/manuales/express-api-rest/lecciones/:lessonSlug"
  element={<ExpressManual />}
/>
```

`NodeManual` usa exactamente el patrón `/manuales/node-fundamentos` y `/manuales/node-fundamentos/lecciones/:lessonSlug`. El manual nuevo debe usar rutas equivalentes si dispone de lecciones internas.

### 5. Registrar contenido, relaciones y estado

- Conservar el vínculo entre `manualIds` de `itineraries.js` y `id` de `manuals.js`.
- Mantener `category: 'Backend'` para que aparezca en el filtro de `ManualsPage`.
- Utilizar `route` para contenido React integrado y `path` solo para recursos estáticos ya existentes.
- Incluir, dentro de cada capítulo, enlaces directos a conocimientos previos cuando una lección existente los cubra. Por ejemplo, un prerrequisito de JavaScript puede enlazar a `/manuales/javascript` o a su `topicSlug` real.
- El estado `Próximamente` se mantiene hasta que el recorrido, capítulos y prácticas estén desarrollados.

### 6. Comprobar navegación

Verificar manualmente:

1. `/manuales?categoria=Backend` muestra la tarjeta y el estado correcto.
2. `/itinerarios/mf0492-entorno-servidor` presenta el manual en su UF y lo enlaza solo si tiene `route`.
3. La cabecera lleva a `/itinerarios`.
4. El índice lateral y los enlaces anterior/siguiente no apuntan a capítulos inexistentes.
5. La ruta del manual, cada ruta de lección y el botón de vuelta funcionan sin caer en `NotFoundPage`.
6. Los manuales existentes de JavaScript y las rutas genéricas `/manuales/:slug` siguen funcionando.

### 7. Validar y entregar

Ejecutar como mínimo el linter para los archivos editados:

```powershell
npm exec oxlint -- src/App.jsx src/data/manuals.js src/data/itineraries.js src/features/server-manual/ExpressManual.jsx
```

Si es seguro compilar sin alterar recursos publicados, ejecutar `npm run build`. El build estándar puede vaciar `dist/`, por lo que hay que revisar antes su contenido. No ejecutar scripts `deploy*`, no publicar y no hacer `git push` como parte de esta validación.

La entrega debe enumerar los archivos modificados, rutas añadidas, validaciones realizadas y cualquier capítulo aún pendiente.

## Checklist

- [ ] El `id` del catálogo coincide con el `manualId` del itinerario.
- [ ] La tarjeta se muestra en la categoría esperada y refleja el estado real.
- [ ] Las rutas específicas están registradas antes de `/manuales/:slug`.
- [ ] El manual tiene índice, capítulos accesibles y navegación lateral coherente.
- [ ] Los ejemplos y enlaces previos no están rotos.
- [ ] Node.js, JavaScript y el resto de manuales existentes no se han modificado innecesariamente.
- [ ] Se ha ejecutado el linter de los archivos cambiados y, cuando procede, la compilación.
- [ ] No se han editado `dist/` ni bundles; no se ha publicado ningún cambio.

## Manual estático de Astro: actualización de lecciones

El Manual de Astro se registra en `src/data/frameworks.js` y el visor de Frameworks carga su portada estática mediante el `iframe` de `src/pages/FrameworkViewerPage.jsx`. La ruta publicada es `/frameworks/astro/index.html`.

Las cinco lecciones tienen una sola fuente: `public/frameworks/astro/lessons-source.html`. Cada página mínima de `public/frameworks/astro/lecciones/<slug>/index.html` declara su número con `data-lesson` y carga `../../lesson-page.js`. Ese cargador solicita `../../lessons-source.html`, extrae el artículo correspondiente y lo muestra. No se deben copiar ni editar los artículos dentro de las páginas de `lecciones/`.

Para actualizar una lección:

1. Editar exclusivamente el `<article data-lesson="N">` correspondiente en `public/frameworks/astro/lessons-source.html`.
2. Iniciar Vite desde el proyecto fuente, no desde `dist` ni desde un proyecto de validación: `npm run dev`.
3. Abrir la ruta de la lección, por ejemplo `http://127.0.0.1:5173/frameworks/astro/lecciones/01-por-que-astro/`. `lesson-page.js` usa `cache: 'no-store'`, por lo que la navegación vuelve a solicitar la fuente; una recarga normal basta durante desarrollo.
4. Confirmar en las herramientas de red que `frameworks/astro/lessons-source.html` responde 200 y que el documento contiene el texto modificado. Si no ocurre, comprobar que el terminal de Vite se inició en `C:\Users\inmac\Downloads\devcampusept`.
5. Ejecutar `npm run build` y verificar las mismas rutas bajo `dist/frameworks/astro/` antes de publicar. El build copia los recursos estáticos; no se editan directamente.
