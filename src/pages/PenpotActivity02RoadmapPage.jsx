import { ArrowLeft, CheckSquare, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

import Seo from '../components/content/Seo';
import Container from '../components/layout/Container';

const activityPath = '/manuales/diseno/actividad-penpot-02';

const steps = [
  ['Antes de empezar · Usa la biblioteca', ['En Penpot, activa la biblioteca “WIREFRAMING KIT V1.1”. Localiza sus COMPONENTES, COLORES y TIPOGRAFÍAS.', 'En este ejercicio usa al menos un componente existente, algún color y un estilo tipográfico de la biblioteca. Una biblioteca mantiene la interfaz coherente y reutiliza soluciones ya definidas.']],
  ['Paso 1 · Crear el tablero', ['Crea un board de 1440 × aproximadamente 1000 px llamado “Landing VetCare”.', 'Puedes aumentar la altura si necesitas más espacio. El ejercicio se realiza solo para escritorio.']],
  ['Paso 2 · Header', ['Reproduce “VetCare” a la izquierda y “Inicio”, “Servicios”, “Equipo” y “Contacto” a la derecha.', 'Identifica dos grupos dentro del mismo contenedor: Header → Logo y Navegación. Ambos quedan separados horizontalmente.']],
  ['Paso 3 · Hero', ['Crea dos bloques principales: Hero → Texto e Imagen.', 'A la izquierda: “Cuidamos de quienes forman parte de tu familia”, su descripción y el botón “Pedir cita”. A la derecha, un placeholder: “Imagen de clínica o mascota”. No necesitas buscar una foto real.']],
  ['Dirección horizontal · Observa la estructura', ['El hero es un contenedor con dos elementos en horizontal y una separación entre ellos: [ Texto ]              [ Imagen ].', 'Más adelante CSS puede expresar esta idea con display: flex;. No tienes que memorizarlo todavía.']],
  ['Paso 4 · Sección de servicios', ['Añade “Nuestros servicios” y “Todo lo que tu mascota necesita en un mismo lugar.”', 'Debajo habrá tres tarjetas, pero no las crees manualmente: primero construye una sola Service Card.']],
  ['Paso 5 · Crear la primera Service Card', ['Crea: Service Card → Icono, Título y Descripción. Usa el icono ♡, “Consulta veterinaria” y “Revisiones generales, diagnóstico y seguimiento de la salud de tu mascota.”', 'Usa aproximadamente 28 px de espacio interior y esquinas de 12 px. Puedes elegir valores coherentes de la biblioteca.']],
  ['Padding · El espacio interior', ['El contenido de la tarjeta no queda pegado al borde. Ese espacio interior se llama padding en CSS.', 'Más adelante podrá escribirse como padding: 28px;. De momento solo reconoce qué decisión visual representa.']],
  ['Paso 6 · Convertir la tarjeta en componente', ['Selecciona todos los elementos de la primera tarjeta, conviértela en componente y llámala “Service Card”.', 'No vamos a crear tres tarjetas distintas: definimos una estructura y la reutilizamos.']],
  ['Paso 7 · Crear instancias', ['Crea tres instancias del componente. Mantén “Consulta veterinaria” en la primera.', 'En la segunda escribe “Vacunación” y “Programas de vacunación y prevención adaptados a cada etapa de su vida.” En la tercera, “Higiene y cuidado” y “Servicios básicos de higiene y recomendaciones para mantener su bienestar diario.”']],
  ['Gap · Separación uniforme', ['Coloca las tres instancias horizontalmente: [ Consulta ] ← 24 px → [ Vacunación ] ← 24 px → [ Higiene ].', 'La distancia uniforme entre elementos se llama gap en CSS: gap: 24px;. No necesitas memorizarlo todavía.']],
  ['Paso 8 · CTA y footer', ['Crea el CTA con “¿Necesitas una cita?”, su texto y el botón “Contactar”. El texto queda a la izquierda y el botón a la derecha.', 'Aprovéchalo para observar contenedor, dirección horizontal, alineación y separación. Termina con el footer: “© 2026 VetCare · Clínica Veterinaria”.']],
];

const layerTree = `Landing VetCare
├── Header
│   ├── Logo
│   └── Navegación
├── Hero
│   ├── Hero Content
│   └── Hero Image
├── Servicios
│   ├── Encabezado
│   └── Service List
│       ├── Service Card
│       ├── Service Card
│       └── Service Card
├── CTA
│   ├── Contenido
│   └── Botón
└── Footer`;

const penpotTree = `Servicios
└── Contenedor de tarjetas
    ├── Service Card
    ├── Service Card
    └── Service Card

Service Card
├── Icono
├── Título
└── Descripción`;

const htmlTree = `<section>
  <div>
    <article>...</article>
    <article>...</article>
    <article>...</article>
  </div>
</section>`;

const mappings = [['Tablero', 'Página / viewport'], ['Caja / contenedor', 'div, section, article'], ['Texto principal', 'h1, h2...'], ['Texto normal', 'p'], ['Botón', 'button o a'], ['Componente', 'Estructura reutilizable'], ['Elementos dentro de una caja', 'Elementos HTML anidados'], ['Dirección horizontal', 'Flexbox'], ['Separación', 'gap'], ['Espacio interior', 'padding'], ['Espacio exterior', 'margin'], ['Ancho y alto', 'width / height'], ['Esquinas redondeadas', 'border-radius'], ['Color de fondo', 'background'], ['Alineación', 'propiedades de layout']];
const checklist = ['He utilizado WIREFRAMING KIT V1.1.', 'He utilizado elementos de la biblioteca.', 'He creado el header.', 'He creado el hero.', 'He creado una Service Card.', 'He convertido la tarjeta en componente.', 'He creado tres instancias.', 'He modificado el contenido de las instancias.', 'He colocado las tarjetas horizontalmente.', 'He mantenido una separación uniforme.', 'He creado el CTA.', 'He creado el footer.', 'He organizado las capas.', 'Entiendo qué es un contenedor.', 'Entiendo qué representa padding.', 'Entiendo qué representa gap.', 'Entiendo la relación básica entre Penpot, HTML y CSS.'];

function CodeMapping({ penpot, css }) { return <div className="rounded-lg bg-slate-50 p-4"><p className="text-sm font-bold text-brand-purple">En Penpot</p><p className="mt-1 text-slate-700">{penpot}</p><p className="mt-4 text-sm font-bold text-brand-purple">En CSS</p><code className="mt-1 inline-block rounded bg-slate-900 px-3 py-1.5 text-sm text-slate-100">{css}</code></div>; }

export default function PenpotActivity02RoadmapPage() {
  return (
    <>
      <Seo title="Hoja de ruta: componentes y posicionamiento en Penpot" description="Guía para crear una landing VetCare con bibliotecas, componentes y decisiones de layout en Penpot." />
      <section className="bg-brand-lavender/30 py-8 sm:py-10"><Container className="max-w-4xl"><Link to={activityPath} className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-brand-blue"><ArrowLeft size={18} aria-hidden="true" /> Volver a la actividad</Link><p className="mt-7 text-sm font-bold uppercase tracking-widest text-brand-blue">Actividad 2 · Hoja de ruta</p><h1 className="mt-2 text-3xl font-black text-brand-purple sm:text-4xl">Componentes y posicionamiento en Penpot</h1><p className="mt-3 max-w-3xl text-slate-700">Construye una pequeña landing de una clínica veterinaria utilizando la biblioteca WIREFRAMING KIT V1.1 y crea tu primer componente reutilizable.</p></Container></section>
      <Container className="max-w-4xl py-12 sm:py-16">
        <section className="rounded-xl border-l-4 border-brand-yellow bg-brand-yellow/15 p-6 text-slate-700"><p>En la actividad anterior reproduciste una interfaz para aprender las herramientas básicas de Penpot.</p><p className="mt-3">Ahora vamos a dar un paso más. Utilizaremos una biblioteca de diseño, construiremos una pequeña landing page y crearemos nuestro primer componente reutilizable.</p><p className="mt-3 font-bold text-brand-purple">Esta actividad es especialmente importante porque será el puente entre Penpot y el desarrollo con HTML y CSS.</p></section>
        <div className="mt-8 grid gap-4 sm:grid-cols-3"><div className="rounded-xl border border-brand-lavender bg-white p-5"><Monitor className="text-brand-blue" aria-hidden="true" /><p className="mt-3 font-bold text-brand-purple">Formato de trabajo</p><p className="mt-1 text-slate-600">Escritorio</p></div><div className="rounded-xl border border-brand-lavender bg-white p-5"><p className="font-bold text-brand-purple">Tamaño recomendado</p><p className="mt-1 text-slate-600">1440 px de ancho</p></div><div className="rounded-xl border border-brand-lavender bg-white p-5"><p className="font-bold text-brand-purple">Responsive</p><p className="mt-1 text-slate-600">Todavía no</p></div></div>
        <div className="mt-10 space-y-5">{steps.map(([title, items], index) => <section key={title} className="rounded-xl border border-brand-lavender bg-white p-6 sm:p-7"><p className="text-sm font-bold text-brand-blue">{String(index + 1).padStart(2, '0')}</p><h2 className="mt-1 text-xl font-black text-brand-purple">{title}</h2><ul className="mt-4 space-y-2 leading-7 text-slate-700">{items.map((item) => <li key={item}>• {item}</li>)}</ul></section>)}</div>
        <section className="mt-8 rounded-xl border border-brand-lavender bg-white p-6 sm:p-7"><h2 className="text-xl font-black text-brand-purple">Contenedores: cajas dentro de cajas</h2><p className="mt-3 leading-7 text-slate-700">Una interfaz está formada continuamente por elementos que contienen otros elementos. Esta idea será fundamental cuando pasemos a HTML.</p><pre className="mt-5 overflow-x-auto rounded-lg bg-slate-900 p-5 text-sm leading-6 text-slate-100">{penpotTree}</pre></section>
        <section className="mt-8 rounded-xl border border-brand-lavender bg-white p-6 sm:p-7"><h2 className="text-xl font-black text-brand-purple">La conexión con HTML</h2><p className="mt-3 leading-7 text-slate-700">No necesitas memorizar estas etiquetas todavía. Lo importante es comprender que HTML también organiza elementos dentro de otros elementos.</p><pre className="mt-5 overflow-x-auto rounded-lg bg-slate-900 p-5 text-sm leading-6 text-slate-100">{htmlTree}</pre></section>
        <section className="mt-8 rounded-xl border border-brand-lavender bg-white p-6 sm:p-7"><h2 className="text-xl font-black text-brand-purple">La conexión con CSS</h2><p className="mt-3 leading-7 text-slate-700">Es solo una anticipación: estas decisiones de diseño tendrán una equivalencia directa cuando escribamos CSS.</p><div className="mt-5 grid gap-4 sm:grid-cols-2">{[['Tarjetas en horizontal', 'display: flex;'], ['24 px entre tarjetas', 'gap: 24px;'], ['28 px dentro de una tarjeta', 'padding: 28px;'], ['Esquinas redondeadas', 'border-radius: 12px;'], ['Elementos separados a izquierda y derecha', 'justify-content: space-between;']].map(([penpot, css]) => <CodeMapping key={css} penpot={penpot} css={css} />)}</div></section>
        <section className="mt-8 rounded-xl border border-brand-lavender bg-white p-6 sm:p-7"><h2 className="text-xl font-black text-brand-purple">Paso 9 · Organizar las capas</h2><p className="mt-3 leading-7 text-slate-700">Evita nombres genéricos como “Rectangle 1”, “Rectangle 2”, “Text 3” o “Group 5”. Puedes usar esta estructura:</p><pre className="mt-5 overflow-x-auto rounded-lg bg-slate-900 p-5 text-sm leading-6 text-slate-100">{layerTree}</pre></section>
        <section className="mt-8 rounded-xl border border-brand-lavender bg-white p-6 sm:p-7"><h2 className="text-xl font-black text-brand-purple">Lee tu diseño como un desarrollador</h2><ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700"><li>¿Cuál es el contenedor principal del hero?</li><li>¿Cuántos elementos principales contiene y están en horizontal o vertical?</li><li>¿Qué contiene cada Service Card?</li><li>¿Por qué no hemos creado las tres tarjetas manualmente?</li><li>¿Qué representa el espacio interior de la tarjeta? En CSS: <strong>padding</strong>.</li><li>¿Qué representa la separación uniforme entre tarjetas? En CSS: <strong>gap</strong>.</li><li>¿Qué significa que un elemento esté dentro de otro?</li></ol><p className="mt-4 text-slate-700">La finalidad no es evaluar sintaxis CSS, sino comprobar que entiendes la estructura.</p></section>
        <section className="mt-8 rounded-xl border border-brand-lavender bg-white p-6 sm:p-7"><h2 className="text-xl font-black text-brand-purple">Penpot → desarrollo web</h2><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[500px] text-left"><thead className="border-b border-brand-lavender text-sm text-brand-purple"><tr><th className="pb-3">En Penpot</th><th className="pb-3">En desarrollo web</th></tr></thead><tbody className="divide-y divide-slate-100 text-slate-700">{mappings.map(([penpot, web]) => <tr key={penpot}><td className="py-3 font-semibold">{penpot}</td><td className="py-3">{web}</td></tr>)}</tbody></table></div></section>
        <aside className="mt-8 rounded-xl border-l-4 border-brand-yellow bg-brand-yellow/15 p-6"><h2 className="font-black text-brand-purple">Ya sabes diseñar la estructura. Ahora vamos a aprender a explicársela al navegador.</h2><p className="mt-3 leading-7 text-slate-700">HTML nos permitirá indicar qué elementos existen.</p><p className="mt-1 leading-7 text-slate-700">CSS nos permitirá indicar cómo deben colocarse y cómo deben verse.</p></aside>
        <section className="mt-8 rounded-xl border border-brand-lavender bg-white p-6 sm:p-7"><div className="flex items-center gap-3"><CheckSquare className="text-brand-blue" aria-hidden="true" /><h2 className="text-xl font-black text-brand-purple">Checklist final</h2></div><ul className="mt-5 grid gap-3 sm:grid-cols-2 text-slate-700">{checklist.map((item) => <li key={item}>☐ {item}</li>)}</ul></section>
      </Container>
    </>
  );
}
