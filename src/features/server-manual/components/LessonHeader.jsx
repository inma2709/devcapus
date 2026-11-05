import ManualBreadcrumbs from './ManualBreadcrumbs';

export default function LessonHeader({ chapter }) {
  return <><ManualBreadcrumbs currentChapter={chapter.title} /><header className="mt-5 border-b border-slate-200 pb-8"><p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Capítulo {chapter.number} · {chapter.duration}</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-purple sm:text-5xl">{chapter.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">Conocimientos previos: {chapter.prerequisites}.</p></header></>;
}
