import { ArrowRight, Download, ExternalLink, Monitor, Route } from 'lucide-react';
import { Link } from 'react-router-dom';

import Seo from '../components/content/Seo';
import Container from '../components/layout/Container';

const activityPath = '/manuales/diseno/actividad-penpot-02';
const resourcePath = '/recursos/actividad-penpot-02-vetcare.html';

export default function PenpotActivity02Page() {
  return (
    <>
      <Seo title="Actividad Penpot: componentes y layout | DevCampus" description="Actividad práctica de Penpot para aprender a usar bibliotecas, crear componentes reutilizables y comprender la relación entre diseño, HTML y CSS." />

      <section className="bg-brand-lavender/30 py-10 sm:py-14">
        <Container className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Actividad 2 · Diseño con Penpot</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-brand-purple sm:text-5xl">Componentes y posicionamiento en Penpot</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">Utiliza una biblioteca de diseño, crea tu primer componente reutilizable y descubre cómo las decisiones de posicionamiento de Penpot se traducirán después a HTML y CSS.</p>
        </Container>
      </section>

      <Container className="max-w-4xl py-12 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-brand-lavender bg-white p-5"><Monitor className="text-brand-blue" aria-hidden="true" /><p className="mt-3 text-sm font-bold text-brand-purple">Formato de trabajo</p><p className="mt-1 text-slate-600">Escritorio</p></div>
          <div className="rounded-xl border border-brand-lavender bg-white p-5"><Route className="text-brand-blue" aria-hidden="true" /><p className="mt-3 text-sm font-bold text-brand-purple">Tablero recomendado</p><p className="mt-1 text-slate-600">1440 × 1000 px</p></div>
          <div className="rounded-xl border border-brand-lavender bg-white p-5"><p className="text-2xl font-black text-brand-blue" aria-hidden="true">—</p><p className="mt-3 text-sm font-bold text-brand-purple">Responsive</p><p className="mt-1 text-slate-600">Todavía no se trabaja</p></div>
        </div>

        <aside className="mt-8 rounded-xl border-l-4 border-brand-yellow bg-brand-yellow/15 p-6 text-slate-700"><p className="font-bold text-brand-purple">El puente entre diseño y desarrollo</p><p className="mt-2 leading-7">Lo que organizamos visualmente en Penpot después tendremos que describírselo al navegador mediante HTML y CSS.</p></aside>

        <p className="mt-10 max-w-3xl leading-7 text-slate-700">Primero observa la landing VetCare que debes reproducir. Puedes abrirla en una pestaña independiente o descargar exactamente el mismo archivo HTML para tenerlo como referencia mientras trabajas en Penpot.</p>

        <div className="mt-6"><a href={resourcePath} target="_blank" rel="noreferrer" className="group block rounded-2xl bg-brand-purple p-7 text-white shadow-sm transition-colors hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"><ExternalLink aria-hidden="true" /><h2 className="mt-5 text-xl font-black">Ver ejemplo online</h2><p className="mt-2 leading-7 text-white/90">Abre en una nueva pestaña la landing VetCare que vas a reproducir en Penpot.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Ver el resultado <ArrowRight size={18} aria-hidden="true" /></span></a></div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <a href={resourcePath} download="actividad-penpot-02-vetcare.html" className="group rounded-2xl bg-brand-blue p-7 text-white shadow-sm transition-colors hover:bg-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"><Download aria-hidden="true" /><h2 className="mt-5 text-xl font-black">Descargar HTML</h2><p className="mt-2 leading-7 text-white/90">Descarga la landing VetCare y ábrela localmente mientras trabajas en Penpot.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Descargar archivo <ArrowRight size={18} aria-hidden="true" /></span></a>
          <Link to={`${activityPath}/hoja-de-ruta`} className="group rounded-2xl border border-brand-lavender bg-white p-7 shadow-sm transition-colors hover:border-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"><Route className="text-brand-blue" aria-hidden="true" /><h2 className="mt-5 text-xl font-black text-brand-purple">Ver instrucciones</h2><p className="mt-2 leading-7 text-slate-600">Sigue la hoja de ruta para usar una biblioteca, crear componentes y entender contenedores, padding y gap.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Abrir guía <ArrowRight size={18} aria-hidden="true" /></span></Link>
        </div>
      </Container>
    </>
  );
}
