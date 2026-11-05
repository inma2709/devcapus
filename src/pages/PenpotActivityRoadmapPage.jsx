import { ArrowLeft, CheckSquare, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

import Seo from '../components/content/Seo';
import Container from '../components/layout/Container';

const activityPath = '/manuales/diseno/actividad-penpot-01';

const steps = [
  ['Antes de empezar', ['Entra en Penpot y crea un nuevo proyecto llamado “Primer diseño web”.', 'Crea dentro un archivo llamado “Actividad 1 - DevCampus”.']],
  ['Paso 1 · Crear el tablero', ['Crea un Board de 1440 × 1024 px llamado “Página principal”.', 'Usa el fondo #F4F6F8.']],
  ['Paso 2 · Crear la cabecera', ['Añade un rectángulo de 1440 × 80 px con fondo #FFFFFF.', 'Coloca “DevCampus” a la izquierda y “Inicio”, “Cursos” y “Contacto” a la derecha.']],
  ['Paso 3 · Crear el bloque principal', ['Centra el título “Aprende desarrollo web”.', 'Debajo añade “Descubre HTML, CSS y JavaScript paso a paso.” y el botón “Empezar” en #2563EB.']],
  ['Paso 4 · Crear la primera tarjeta', ['Crea una tarjeta de aproximadamente 300 × 180 px, fondo blanco, borde gris claro y radio de 10 px.', 'Incluye “HTML” y su texto descriptivo.']],
  ['Paso 5 · Duplicar tarjetas', ['Duplica la primera tarjeta dos veces.', 'Crea HTML, CSS y JavaScript manteniendo tamaño, altura, tipografía y separación.']],
  ['Paso 6 · Crear el footer', ['Añade un rectángulo inferior en #222222.', 'Centra el texto “© 2026 DevCampus”.']],
];

const layerTree = `Página principal
├── Header
│   ├── Logo
│   └── Navegación
├── Hero
│   ├── Título
│   ├── Descripción
│   └── Botón
├── Tarjetas
│   ├── Tarjeta HTML
│   ├── Tarjeta CSS
│   └── Tarjeta JavaScript
└── Footer`;

export default function PenpotActivityRoadmapPage() {
  return (
    <>
      <Seo title="Hoja de ruta: actividad Penpot" description="Guía paso a paso para reproducir una interfaz web sencilla en Penpot." />
      <section className="bg-brand-lavender/30 py-8 sm:py-10">
        <Container className="max-w-4xl">
          <Link to={activityPath} className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-brand-blue">
            <ArrowLeft size={18} aria-hidden="true" /> Volver a la actividad
          </Link>
          <p className="mt-7 text-sm font-bold uppercase tracking-widest text-brand-blue">Actividad 1 · Hoja de ruta</p>
          <h1 className="mt-2 text-3xl font-black text-brand-purple sm:text-4xl">Reproducir una interfaz sencilla en Penpot</h1>
          <p className="mt-3 max-w-3xl text-slate-700">Avanza en orden, compara tu tablero con el HTML de referencia y cambia una cosa cada vez.</p>
        </Container>
      </section>

      <Container className="max-w-4xl py-12 sm:py-16">
        <div className="space-y-5">
          {steps.map(([title, items], index) => (
            <section key={title} className="rounded-xl border border-brand-lavender bg-white p-6 sm:p-7">
              <p className="text-sm font-bold text-brand-blue">{String(index + 1).padStart(2, '0')}</p>
              <h2 className="mt-1 text-xl font-black text-brand-purple">{title}</h2>
              <ul className="mt-4 space-y-2 leading-7 text-slate-700">
                {items.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-xl border border-brand-lavender bg-white p-6 sm:p-7">
          <h2 className="text-xl font-black text-brand-purple">Paso 7 · Organizar las capas</h2>
          <p className="mt-3 leading-7 text-slate-700">Renombra las capas y evita nombres genéricos como “Rectangle 1” o “Text 2”. Puedes usar esta estructura:</p>
          <pre className="mt-5 overflow-x-auto rounded-lg bg-slate-900 p-5 text-sm leading-6 text-slate-100">{layerTree}</pre>
        </section>

        <section className="mt-8 rounded-xl border border-brand-lavender bg-white p-6 sm:p-7">
          <h2 className="text-xl font-black text-brand-purple">Qué estás aprendiendo</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left">
              <thead className="border-b border-brand-lavender text-sm text-brand-purple"><tr><th className="pb-3">Penpot</th><th className="pb-3">Web</th></tr></thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[['Board', 'Pantalla / página'], ['Rectángulo', 'Caja / sección'], ['Texto', 'h1, p, nav…'], ['Botón', 'Elemento interactivo'], ['Espaciado', 'margin / padding'], ['Alineación', 'layout'], ['Tarjetas alineadas', 'flex / grid']].map(([penpot, web]) => <tr key={penpot}><td className="py-3 font-semibold">{penpot}</td><td className="py-3">{web}</td></tr>)}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="mt-8 rounded-xl border-l-4 border-brand-yellow bg-brand-yellow/15 p-6">
          <div className="flex gap-3"><Monitor className="shrink-0 text-brand-purple" aria-hidden="true" /><div><h2 className="font-black text-brand-purple">Todavía no trabajamos responsive</h2><p className="mt-2 leading-7 text-slate-700">Esta actividad está diseñada únicamente para una pantalla de ordenador de 1440 px de ancho. No tienes que crear versión móvil ni tablet; más adelante adaptaremos este mismo diseño.</p></div></div>
        </aside>

        <section className="mt-8 rounded-xl border border-brand-lavender bg-white p-6 sm:p-7">
          <div className="flex items-center gap-3"><CheckSquare className="text-brand-blue" aria-hidden="true" /><h2 className="text-xl font-black text-brand-purple">Criterios de finalización</h2></div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-slate-700">
            {['He creado el tablero.', 'He creado la cabecera.', 'He añadido el menú.', 'He creado el hero.', 'He creado el botón.', 'He creado las tres tarjetas.', 'He alineado correctamente los elementos.', 'He creado el footer.', 'He organizado y renombrado las capas.'].map((item) => <li key={item}>☐ {item}</li>)}
          </ul>
        </section>
      </Container>
    </>
  );
}
