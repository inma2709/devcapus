export const projects = [
  {
    id: 'curriculum-digital',
    slug: 'curriculum-digital',
    number: '01',
    title: 'Currículum digital',
    description: 'Crea tu primera página web construyendo un currículum digital responsivo desde las bases.',
    technologies: ['HTML5', 'CSS3', 'Semántica Web'],
    level: 'Fase inicial',
    url: '/Proyecto2.citas/CvDigital/index.html',
    files: {
      index: '/Proyecto2.citas/CvDigital/index.html',
      css: '/Proyecto2.citas/CvDigital/css/style.css',
      manual: '/Proyecto2.citas/CvDigital/MANUAL_CURRICULUM_DIGITAL.md'
    }
  },
  {
    id: 'mi-negocio',
    slug: 'te-presento-mi-negocio',
    number: '02',
    title: 'Te presento mi negocio',
    description: 'Digitaliza un pequeño negocio creando una landing page interactiva con componentes adaptativos.',
    technologies: ['HTML5', 'Bootstrap 5', 'JavaScript', 'Responsive'],
    level: 'Fase cliente',
    url: '/Proyecto2.citas/Landing/index.html',
    files: {
      index: '/Proyecto2.citas/Landing/index.html',
      js: '/Proyecto2.citas/Landing/js/script.js',
      manual: '/Proyecto2.citas/Landing/manual-aprendizaje.md'
    }
  },
  {
    id: 'digitaliza-negocio',
    slug: 'digitaliza-tu-negocio',
    number: '03',
    title: 'Digitaliza tu negocio (Gestor de Citas)',
    description: 'Aprende a trabajar con datos dinámicos, persistencia del estado en localStorage, arreglos de objetos y validaciones.',
    technologies: ['JavaScript ES6', 'localStorage', 'Flexbox & CSS', 'Data Flow'],
    level: 'Fase cliente funcional',
    url: '/Proyecto2.citas/Citas/index.html',
    files: {
      index: '/Proyecto2.citas/Citas/index.html',
      css: '/Proyecto2.citas/Citas/styles.css',
      js: '/Proyecto2.citas/Citas/app.js',
      manual: '/Proyecto2.citas/Citas/MANUAL_PROYECTO_DIGITALIZA.md',
      readme: '/Proyecto2.citas/Citas/README.md'
    }
  },
  {
    id: 'citas-simplificado',
    slug: 'mi-gestor-de-citas',
    number: '04',
    title: 'Mi gestor de citas',
    description: 'Construye desde cero un gestor sencillo para crear, mostrar y eliminar citas con JavaScript, sin backend.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM y eventos'],
    level: 'Proyecto guiado',
    url: '/Proyecto2.citas/Citas-Simplificado/demo/index.html',
    files: {
      index: '/Proyecto2.citas/Citas-Simplificado/index.html',
      css: '/Proyecto2.citas/Citas-Simplificado/styles.css',
      js: '/Proyecto2.citas/Citas-Simplificado/app.js',
      manual: '/Proyecto2.citas/Citas-Simplificado/ENUNCIADO.md'
    }
  },
  {
    id: 'tutorial-readme',
    slug: 'tutorial-readme',
    number: 'Guía',
    title: 'README.md · Presenta tu proyecto',
    description: 'Aprende a documentar tus proyectos, explicar cómo funcionan, añadir imágenes y preparar un README que puedas mostrar en GitHub y en tu portfolio.',
    technologies: ['Markdown', 'Documentación', 'GitHub'],
    level: 'Inicial',
    kind: 'resource',
    url: '/proyectos/readme'
  }
];
