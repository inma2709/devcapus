export const courses = [
  {
    id: 'ifcd0210',
    slug: 'ifcd0210-desarrollo-aplicaciones-web',
    title: 'IFCD0210 — Desarrollo de aplicaciones con tecnologías web',
    shortTitle: 'Certificado IFCD0210',
    description:
      'Plan oficial de formación profesional de nivel 3 destinado a dominar el desarrollo web de extremo a extremo, abarcando interfaces de cliente, lógica de servidor, bases de datos e implantación en producción.',
    level: 'Nivel 3 — Cualificación Profesional',
    duration: '590 horas + 80 horas de prácticas',
    images: {
      calendario: '/calendario.png',
      programacion: '/Programación_Web_Entorno_Cliente.png'
    },
    technologies: [
      'HTML5',
      'CSS3',
      'Flexbox/Grid',
      'Bootstrap',
      'JavaScript (ES6)',
      'DOM y APIs',
      'Node.js/PHP',
      'Bases de Datos',
      'APIs REST',
      'Git/GitHub',
      'Docker y Cloud'
    ],
    objectives: [
      'Construir arquitecturas web frontend semánticas, adaptables y accesibles.',
      'Sólida maestría en la interactividad e integración de servicios asíncronos en cliente.',
      'Diseñar y programar lógica de servidor, flujos de autenticación e interacción con datos.',
      'Asegurar y automatizar el despliegue del software en entornos cloud y producción moderna.'
    ],
    syllabus: [
      {
        code: 'MF0491_3',
        title: 'Programación web en el entorno cliente',
        hours: 180,
        description: 'Módulo centrado en la creación de interfaces web interactivas y dinámicas en el navegador utilizando lenguajes de marcas, hojas de estilo CSS avanzadas, componentes modernos y lógica JavaScript.',
        units: [
          {
            code: 'UF1841',
            title: 'Elaboración de documentos web mediante lenguajes de marcas',
            hours: 60,
            objectives: [
              'Analizar y estructurar documentos web semánticos con HTML5.',
              'Dominar el diseño adaptable (Responsive Design) mediante Flexbox, CSS Grid y Media Queries.',
              'Implementar pautas de accesibilidad web (WCAG) y formularios robustos con validación nativa.'
            ]
          },
          {
            code: 'UF1842',
            title: 'Desarrollo de componentes de software en el entorno cliente',
            hours: 90,
            objectives: [
              'Dominar el lenguaje JavaScript (ES6+), sus tipos, flujos de datos y eventos.',
              'Manipular dinámicamente el DOM (Document Object Model) y renderizar respuestas asíncronas.',
              'Consumir e interactuar con APIs REST externas mediante solicitudes asíncronas (fetch, async/await).'
            ]
          },
          {
            code: 'UF1843',
            title: 'Publicación de páginas web',
            hours: 30,
            objectives: [
              'Entender el ciclo de vida de un sitio y configurar servidores FTP, dominios y hostings operativos.',
              'Dominar la instalación y personalización de Gestores de Contenido (WordPress) alineados con SEO.',
              'Ejecutar técnicas de posicionamiento en buscadores (SEO on-page, sitemaps y robots.txt).'
            ]
          }
        ]
      },
      {
        code: 'MF0492_3',
        title: 'Programación web en el entorno servidor',
        hours: 240,
        description: 'Módulo enfocado en la arquitectura web dinámica backend, procesado de sesiones de usuario, persistencia segura y la integración de servicios web robustos.',
        units: [
          {
            code: 'UF1844',
            title: 'Desarrollo de aplicaciones web en el entorno de servidor',
            hours: 90,
            objectives: [
              'Comprender la arquitectura cliente-servidor, protocolo HTTP y ciclo de petición/respuesta.',
              'Diseñar e implementar lógica backend con flujos, sesiones, cookies dinámicas y JWT.',
              'Adoptar patrones de diseño sólidos como el Modelo-Vista-Controlador (MVC).'
            ]
          },
          {
            code: 'UF1845',
            title: 'Acceso a datos en aplicaciones web del entorno servidor',
            hours: 90,
            objectives: [
              'Gestionar bases de datos relacionales utilizando lenguajes de consulta y sentencias SQL clásicas.',
              'Prevenir ataques cibernéticos habituales del tipo Sql Injection mediante la parametrización de consultas.',
              'Integrar operaciones CRUD (Create, Read, Update, Delete) de forma segura.'
            ]
          },
          {
            code: 'UF1846',
            title: 'Desarrollo de servicios web y herramientas de programación en el entorno servidor',
            hours: 60,
            objectives: [
              'Diseñar, programar y estructurar APIs y servicios orientados a REST con documentación openAPI.',
              'Incorporar flujos automáticos de pruebas unitarias y de integración para garantizar calidad.',
              'Aprender a empaquetar software utilizando gestores de dependencias estándar en la industria.'
            ]
          }
        ]
      },
      {
        code: 'MF0493_3',
        title: 'Implantación de aplicaciones web en entornos de producción',
        hours: 90,
        description: 'Módulo encargado de la preparación para salida a producción, automatización y seguridad de servidores locales, cloud y arquitecturas de integración continua.',
        units: [
          {
            code: 'UF1847',
            title: 'Configuración y despliegue en servidores web',
            hours: 45,
            objectives: [
              'Administrar servidores web de referencia como Apache o Nginx bajo parámetros seguros.',
              'Garantizar la protección SSL/HTTPS mediante certificados modernos y configuración de cortafuegos.'
            ]
          },
          {
            code: 'UF1848',
            title: 'Integración continua y tecnologías de contenedores',
            hours: 45,
            objectives: [
              'Empacar el desarrollo mediante contenedores de software robustos (Docker).',
              'Automatizar flujos organizados de compilación y despliegue automático (CI/CD).'
            ]
          }
        ]
      }
    ],
    modules: [
      'MF0491_3 — Programación web en el entorno cliente (180h)',
      'MF0492_3 — Programación web en el entorno servidor (240h)',
      'MF0493_3 — Implantación de aplicaciones web en entornos de producción (90h)',
    ]
  }
];
