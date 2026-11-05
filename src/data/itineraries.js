export const itineraries = [
  {
    id: 'mf0492-entorno-servidor',
    slug: 'mf0492-entorno-servidor',
    code: 'MF0492_3',
    title: 'Programación web en el entorno servidor',
    certificate: 'IFCD0210',
    durationHours: 240,
    sessions: 48,
    sessionHours: 5,
    project: {
      title: 'Gestor de citas full stack',
      stages: ['Gestión local de citas', 'API con Express', 'Persistencia en PostgreSQL', 'Usuarios y permisos', 'Integración con React', 'Publicación'],
    },
    units: [
      { code: 'UF1844', title: 'Desarrollo en entorno servidor', durationHours: 90, manualIds: ['node-fundamentos', 'express-api-rest', 'arquitectura-calidad-backend'] },
      { code: 'UF1845', title: 'Acceso a datos', durationHours: 90, manualIds: ['sql-relacional', 'postgresql-node', 'seguridad-autenticacion'] },
      { code: 'UF1846', title: 'Aplicaciones web distribuidas', durationHours: 60, manualIds: ['servicios-distribuidos', 'integracion-despliegue'] },
    ],
  },
];

export const getItinerary = (slug) => itineraries.find((itinerary) => itinerary.slug === slug);
