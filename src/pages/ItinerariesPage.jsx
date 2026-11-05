import { Link } from 'react-router-dom';

import Container from '../components/layout/Container';
import PageHero from '../components/content/PageHero';
import { itineraries } from '../data/itineraries';

export default function ItinerariesPage() {
  return <><PageHero eyebrow="Recorridos formativos" title="Itinerarios">Aprende siguiendo una secuencia de manuales, prácticas y proyectos conectados.</PageHero><Container className="py-12 sm:py-16"><div className="grid gap-6 md:grid-cols-2">{itineraries.map((itinerary) => <article key={itinerary.id} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><p className="text-sm font-bold uppercase tracking-widest text-brand-blue">{itinerary.certificate} · {itinerary.code}</p><h2 className="mt-3 text-2xl font-bold text-brand-purple">{itinerary.title}</h2><p className="mt-3 leading-7 text-slate-600">{itinerary.durationHours} horas · {itinerary.sessions} jornadas de {itinerary.sessionHours} horas · Proyecto: {itinerary.project.title}.</p><Link className="mt-6 inline-flex rounded-lg bg-brand-blue px-4 py-2.5 font-bold text-white hover:bg-brand-purple" to={`/itinerarios/${itinerary.slug}`}>Ver itinerario</Link></article>)}</div></Container></>;
}
