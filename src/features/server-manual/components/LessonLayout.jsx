import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { allChapters } from '../courseStructure';
import LessonHeader from './LessonHeader';
import ManualSidebar from './ManualSidebarNavigation';

const pathFor = (slug) => `/manuales/node-fundamentos/lecciones/${slug}`;

export default function LessonLayout({ chapter, children }) {
  const [open, setOpen] = useState(false);
  const position = allChapters.findIndex((item) => item.slug === chapter.slug);
  const previous = [...allChapters.slice(0, position)].reverse().find((item) => item.status === 'Disponible');
  const next = allChapters.slice(position + 1).find((item) => item.status === 'Disponible');
  return <div className="bg-slate-50"><div className="mx-auto flex max-w-[1440px]"><ManualSidebar activeSlug={chapter.slug} open={open} onClose={() => setOpen(false)} /><main className="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:px-12"><button type="button" className="mb-5 inline-flex items-center gap-2 rounded-lg border border-brand-lavender bg-white px-3 py-2 font-bold text-brand-purple lg:hidden" onClick={() => setOpen(true)}><Menu size={18} />Contenido</button><article className="mx-auto max-w-3xl"><LessonHeader chapter={chapter} />{children}<nav className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 font-bold">{previous ? <Link className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-purple" to={pathFor(previous.slug)}><ChevronLeft size={18} />{previous.title}</Link> : <Link className="text-brand-blue hover:text-brand-purple" to="/manuales/node-fundamentos">← Índice del manual</Link>}{next ? <Link className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-purple" to={pathFor(next.slug)}>{next.title}<ChevronRight size={18} /></Link> : <span className="text-slate-500">Siguiente capítulo · En preparación</span>}</nav></article></main></div></div>;
}
