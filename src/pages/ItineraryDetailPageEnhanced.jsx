import { Link, useParams } from 'react-router-dom';
import Container from '../components/layout/Container';
import PageHero from '../components/content/PageHero';
import { getItinerary } from '../data/itineraries';
import { manuals } from '../data/manuals';
import { getManualStats } from '../features/server-manual/manualStats';
import NotFoundPage from './NotFoundPage';

export default function ItineraryDetailPageEnhanced() {
  const itinerary = getItinerary(useParams().slug);
  if (!itinerary) return <NotFoundPage />;
  const nodeStats = getManualStats();
  return <><PageHero eyebrow={`${itinerary.certificate} · ${itinerary.code}`} title={itinerary.title}>Un recorrido de {itinerary.durationHours} horas para transformar un gestor de citas local en una aplicación web completa.</PageHero><Container className="space-y-12 py-12 sm:py-16"><section><h2 className="text-3xl font-bold text-brand-purple">Unidades formativas</h2><div className="mt-6 space-y-5">{itinerary.units.map((unit) => <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white" key={unit.code}><header className="bg-teal-50 p-6"><p className="font-bold text-brand-blue">{unit.code} · {unit.durationHours} horas</p><h3 className="mt-1 text-xl font-bold text-brand-purple">{unit.title}</h3></header><ol className="divide-y divide-slate-100">{unit.manualIds.map((id) => { const manual = manuals.find((item) => item.id === id); const available = Boolean(manual?.route); const progress = id === 'node-fundamentos' ? `${nodeStats.availableChapters} de ${nodeStats.totalChapters} capítulos disponibles` : manual?.status; return <li className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between" key={id}><div><h4 className="font-bold text-slate-900">{manual?.title ?? id}</h4><p className="mt-1 text-slate-600">{manual?.description}</p><p className="mt-2 text-sm font-semibold text-brand-purple">{manual?.level} · {progress}</p></div>{available ? <Link className="shrink-0 font-bold text-brand-blue hover:text-brand-purple" to={manual.route}>Abrir manual →</Link> : <span className="shrink-0 font-bold text-slate-500">Próximamente</span>}</li>; })}</ol></article>)}</div></section><section className="rounded-2xl bg-brand-purple p-7 text-white"><p className="font-bold uppercase tracking-widest text-teal-200">Proyecto transversal</p><h2 className="mt-2 text-3xl font-bold">{itinerary.project.title}</h2><ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{itinerary.project.stages.map((stage, index) => <li className="flex items-center gap-3" key={stage}><span className="grid h-7 w-7 place-items-center rounded-full bg-brand-pink font-bold text-brand-purple">{index + 1}</span>{stage}</li>)}</ol></section></Container></>;
}
