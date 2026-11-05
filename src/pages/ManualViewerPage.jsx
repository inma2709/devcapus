import {
  ArrowLeft,
  BookOpen,
} from 'lucide-react';
import {
  Link,
  useParams,
} from 'react-router-dom';

import Seo from '../components/content/Seo';
import Container from '../components/layout/Container';
import { manuals } from '../data/manuals';
import NotFoundPage from './NotFoundPage';

export default function ManualViewerPage() {
  const { slug } = useParams();
  const manual = manuals.find((item) => item.slug === slug);

  if (!manual || !manual.path) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Seo
        title={manual.title}
        description={manual.description}
      />

      <section className="bg-brand-lavender/30 py-8 sm:py-10">
        <Container>
          <Link
            to={manual.category === 'Backend' ? '/manuales/backend' : '/manuales/frontend'}
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-brand-blue"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Volver a la biblioteca
          </Link>

          <div className="mt-5 flex items-start gap-4">
            <BookOpen
              className="mt-1 shrink-0 text-brand-pink"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">
                {manual.category} · {manual.level}
              </p>
              <h1 className="mt-1 text-3xl font-black text-brand-purple sm:text-4xl">
                {manual.title}
              </h1>
              <p className="mt-2 max-w-3xl text-slate-600">
                {manual.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <iframe
          className="block min-h-[82vh] w-full rounded-2xl border border-brand-lavender bg-white shadow-sm sm:min-h-[86vh] lg:min-h-[90vh]"
          src={manual.path}
          title={`${manual.title} dentro de DevCampus`}
        />
      </div>
    </>
  );
}
