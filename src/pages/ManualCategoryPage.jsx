import { ArrowLeft } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';

import ManualCard from '../components/content/ManualCard';
import PageHero from '../components/content/PageHero';
import Container from '../components/layout/Container';
import { frameworks } from '../data/frameworks';
import { manuals } from '../data/manuals';

const categoryDetails = {
  frontend: { title: 'Manuales de Frontend', description: 'Recursos para diseñar y construir la parte visible de las aplicaciones web.' },
  backend: { title: 'Manuales de Backend', description: 'Recursos para crear servidores, APIs y servicios que dan soporte a las aplicaciones web.' },
};

const frameworkResources = frameworks.map((framework) => ({ ...framework, category: 'Frameworks', course: 'Manual formativo', route: `/frameworks/${framework.slug}` }));

export default function ManualCategoryPage({ area: configuredArea }) {
  const { area: routeArea } = useParams();
  const area = configuredArea ?? routeArea;
  const detail = categoryDetails[area];
  if (!detail) return <Navigate to="/manuales" replace />;

  const categoryManuals = area === 'backend'
    ? manuals.filter((manual) => manual.category === 'Backend')
    : [...manuals.filter((manual) => manual.category !== 'Backend'), ...frameworkResources].filter((manual) => manual.visibleInCatalog !== false);

  return (
    <>
      <PageHero eyebrow="Biblioteca docente" title={detail.title}>{detail.description}</PageHero>
      <Container className="py-10 sm:py-14">
        <Link to="/manuales" className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-brand-blue"><ArrowLeft size={18} aria-hidden="true" />Volver a todos los manuales</Link>
        <p className="mt-8 text-sm font-semibold text-slate-600">{categoryManuals.length} {categoryManuals.length === 1 ? 'manual disponible' : 'manuales disponibles'}</p>
        <section className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-label={detail.title}>
          {categoryManuals.map((manual) => <ManualCard key={manual.id} manual={manual} />)}
        </section>
      </Container>
    </>
  );
}
