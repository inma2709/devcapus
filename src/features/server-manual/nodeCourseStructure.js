export const nodeCourseStructure = [
  {
    day: 'Jornada 1 · Primeros pasos en el backend',
    duration: '5 horas',
    chapters: [
      { slug: 'del-navegador-al-backend', title: 'Del navegador al backend', duration: '90 min', status: 'Disponible', prerequisites: 'HTML, CSS y JavaScript básico' },
      { slug: 'que-es-node', title: '¿Qué es Node.js y qué problema resuelve?', duration: '105 min', status: 'Disponible', prerequisites: 'Variables, constantes y console.log' },
      { slug: 'instalacion-node-entorno', title: 'Instalación de Node.js y preparación del entorno', duration: '105 min', status: 'Disponible', prerequisites: 'Capítulos 1 y 2' },
    ],
  },
  {
    day: 'Jornada 2 · Trabajar con Node.js', duration: '5 horas',
    chapters: [
      { slug: 'npm-package-json-modulos', title: 'npm, package.json y módulos', duration: '75 min', status: 'Disponible', prerequisites: 'Jornada 1' },
      { slug: 'modulos-propios-sumar-restar', title: 'Módulos propios: sumar, restar y reutilizar código', duration: '75 min', status: 'Disponible', prerequisites: 'ES Modules y funciones' },
      { slug: 'fs-leer-escribir-archivos', title: 'Leer, crear y ampliar archivos con node:fs', duration: '120 min', status: 'Disponible', prerequisites: 'Módulos ES y callbacks básicos' },
      { slug: 'path-rutas-archivos', title: 'Rutas de archivos seguras con node:path', duration: '30 min', status: 'Disponible', prerequisites: 'node:fs y rutas relativas' },
    ],
  },
  {
    day: 'Jornada 3 · Programación asíncrona', duration: '5 horas',
    chapters: [
      { slug: 'event-loop-timers', title: 'Event Loop y temporizadores', duration: '75 min', status: 'Disponible', prerequisites: 'Funciones' },
      { slug: 'callbacks-callback-hell', title: 'Callbacks y callback hell', duration: '75 min', status: 'Disponible', prerequisites: 'Event Loop y funciones' },
      { slug: 'promesas-pedidos', title: 'Promesas: resolve, reject y seguimiento de pedidos', duration: '75 min', status: 'Disponible', prerequisites: 'Callbacks' },
      { slug: 'async-await-errores', title: 'async/await, try/catch y top-level await', duration: '75 min', status: 'Disponible', prerequisites: 'Promesas' },
    ],
  },
  {
    day: 'Jornada 4 · Comprender cómo funciona un servidor', duration: '5 horas',
    chapters: [
      { slug: 'http-url-localhost-puertos', title: 'HTTP, URL, localhost y puertos', duration: '75 min', status: 'Disponible', prerequisites: 'Jornadas 1 y 2' },
      { slug: 'primer-servidor-node-http', title: 'Mi primer servidor con node:http', duration: '90 min', status: 'Disponible', prerequisites: 'HTTP, URL y puertos' },
      { slug: 'respuestas-html-json-endpoints', title: 'Respuestas HTML, JSON y endpoints GET', duration: '75 min', status: 'Disponible', prerequisites: 'Primer servidor node:http' },
      { slug: 'api-post-streams-json', title: 'API POST: cuerpo, streams, JSON y validación', duration: '90 min', status: 'Disponible', prerequisites: 'Endpoints GET y JSON' },
      { slug: 'puertos-procesos-errores', title: 'Puertos, procesos y resolución de errores', duration: '75 min', status: 'Disponible', prerequisites: 'Servidor node:http' },
      { slug: 'primeras-pruebas-postman', title: 'Primeras pruebas HTTP con Postman', duration: '60 min', status: 'Disponible', prerequisites: 'Servidor activo y URL local' },
    ],
  },
];

let chapterNumber = 1;
nodeCourseStructure.forEach((group) => {
  group.chapters.forEach((chapter) => {
    chapter.day = group.day;
    chapter.dayDuration = group.duration;
    chapter.number = chapterNumber;
    chapterNumber += 1;
  });
});

export const allNodeChapters = nodeCourseStructure.flatMap((group) => group.chapters);
export const nodeLessonSlugs = new Set(allNodeChapters.map((chapter) => chapter.slug));
export const getNodeChapter = (slug) => allNodeChapters.find((chapter) => chapter.slug === slug);
