import { ArrowRight, Code2, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageHero from '../components/content/PageHero';
import Container from '../components/layout/Container';
import { frameworks } from '../data/frameworks';
import { manuals } from '../data/manuals';

const areas = [
  {
    id: 'frontend', title: 'Frontend', to: '/manuales/frontend', Icon: Code2,
    description: 'HTML, CSS, JavaScript, diseño de interfaces, control de versiones y frameworks para crear experiencias web claras, accesibles y responsive.',
    cardClass: 'border-brand-blue/25 bg-brand-blue text-white', iconClass: 'bg-white/15 text-white', buttonClass: 'bg-white text-brand-blue hover:bg-teal-50',
  },
  {
    id: 'backend', title: 'Backend', to: '/manuales/backend', Icon: Server,
    description: 'Node.js, servidores, APIs, bases de datos, seguridad y despliegue para construir la parte que hace funcionar una aplicación.',
    cardClass: 'border-brand-lavender bg-teal-50 text-brand-purple', iconClass: 'bg-brand-lavender/35 text-brand-purple', buttonClass: 'bg-brand-purple text-white hover:bg-brand-blue',
  },
];

const catalogItems = [...manuals, ...frameworks];

function getAreaCount(area) {
  return area === 'backend'
    ? manuals.filter((manual) => manual.category === 'Backend').length
    : catalogItems.filter((manual) => manual.category !== 'Backend' && manual.visibleInCatalog !== false).length;
}

export default function ManualsPage() {
  return (
    <>
      <PageHero eyebrow="Biblioteca docente" title="Manuales de desarrollo web">
        Una biblioteca docente para consultar, practicar y avanzar paso a paso mientras desarrollas tus proyectos.
      </PageHero>

      <Container className="py-12 sm:py-16">
        <section aria-label="Áreas de la biblioteca" className="grid gap-6 md:grid-cols-2">
          {areas.map(({ id, title, description, Icon, to, cardClass, iconClass, buttonClass }) => {
            const count = getAreaCount(id);
            return (
              <article key={id} className={`flex min-h-80 flex-col rounded-3xl border p-7 shadow-sm sm:p-9 ${cardClass}`}>
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconClass}`}><Icon size={30} aria-hidden="true" /></div>
                <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] opacity-80">Área de aprendizaje</p>
                <h2 className="mt-2 text-3xl font-black">{title}</h2>
                <p className="mt-4 max-w-md grow text-lg leading-8 opacity-90">{description}</p>
                <p className="mt-6 text-sm font-bold">{count} {count === 1 ? 'manual' : 'manuales'} en el catálogo</p>
                <Link to={to} className={`mt-5 inline-flex w-fit items-center gap-2 rounded-lg px-5 py-3 text-sm font-bold shadow-sm transition-colors ${buttonClass}`}>
                  Ver manuales de {title}<ArrowRight size={18} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </section>
      </Container>
    </>
  );
}
