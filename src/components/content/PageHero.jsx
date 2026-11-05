import Container from '../layout/Container';
import Seo from './Seo';

export default function PageHero({ eyebrow, title, children }) {
  const seoDescription = typeof children === 'string' ? children : undefined;

  return (
    <>
      <Seo title={title} description={seoDescription} />
      
      <section className="relative overflow-hidden border-b border-teal-200 bg-teal-50 py-12 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-brand-pink/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-brand-lavender/35 blur-3xl" />
        <Container>
          <p className="relative mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
            {eyebrow}
          </p>
          <h1 className="relative max-w-3xl text-4xl font-bold tracking-tight text-brand-purple sm:text-5xl">
            {title}
          </h1>
          {children && (
            <div className="relative mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {children}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
