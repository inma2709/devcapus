import {
  Braces,
  Code2,
  FileCode2,
  LayoutTemplate,
  Palette,
  PanelsTopLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import CourseCard from '../components/content/CourseCard';
import EmptyState from '../components/content/EmptyState';
import ProjectCard from '../components/content/ProjectCard';
import SectionHeader from '../components/content/SectionHeader';
import Container from '../components/layout/Container';
import { courses } from '../data/courses';
import { projects } from '../data/projects';

const topics = [
  [
    Palette,
    'Diseño web',
    'Principios para crear interfaces claras y útiles.',
  ],
  [
    FileCode2,
    'HTML',
    'Estructura semántica para la web.',
  ],
  [
    PanelsTopLeft,
    'CSS',
    'Estilos, layouts y diseño responsive.',
  ],
  [
    LayoutTemplate,
    'Bootstrap',
    'Componentes para avanzar con orden.',
  ],
  [
    Braces,
    'JavaScript',
    'Interactividad y lógica en el navegador.',
  ],
  [
    Code2,
    'WordPress',
    'Creación y publicación de sitios web.',
  ],
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-teal-50 py-14 sm:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-lavender/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-brand-pink/20 blur-3xl" />
        <Container>
          <div className="relative max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-white/75 px-3 py-1 text-sm font-bold uppercase tracking-[0.14em] text-brand-blue shadow-sm">
              DevCampus
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-brand-purple sm:text-6xl">
              Aprende desarrollo web construyendo proyectos reales
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Cursos, manuales y proyectos creados para acompañarte desde tu primera página web hasta el desarrollo de aplicaciones.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="rounded-xl bg-brand-blue px-5 py-3 text-center font-bold text-white shadow-lg shadow-brand-blue/20 transition hover:-translate-y-0.5 hover:bg-brand-purple"
                to="/cursos"
              >
                Explorar cursos
              </Link>
              <Link
                className="rounded-xl border border-brand-blue bg-white/70 px-5 py-3 text-center font-bold text-brand-blue transition hover:-translate-y-0.5 hover:bg-white"
                to="/manuales"
              >
                Ver manuales
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container className="space-y-16 py-14 sm:py-20">
        <section>
          <SectionHeader eyebrow="Empieza aquí" title="Qué puedes aprender">
            Contenidos organizados para aprender con una base sólida y aplicar cada idea en la práctica.
          </SectionHeader>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map(([Icon, title, text]) => (
              <article
                className="rounded-2xl border border-teal-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-lavender hover:shadow-md"
                key={title}
              >
                <Icon className="text-brand-pink" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-brand-purple">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Paso a paso" title="Aprende creando">
            Cada proyecto incorpora nuevas herramientas para que avances con seguridad.
          </SectionHeader>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Formación" title="Cursos disponibles" />
          <div className="max-w-xl">
            <CourseCard course={courses[0]} />
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Comunidad" title="Creado por alumnos" />
          <EmptyState title="Próximamente, proyectos del alumnado">
            Muy pronto podrás descubrir aquí los proyectos desarrollados por alumnos de DevCampus.
          </EmptyState>
        </section>

        <section className="relative overflow-hidden rounded-3xl bg-brand-purple p-7 text-white shadow-xl shadow-brand-purple/15 sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-brand-pink/25 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 right-1/4 h-44 w-44 rounded-full bg-brand-lavender/20 blur-2xl" />
          <h2 className="relative text-2xl font-bold">Tu siguiente paso empieza hoy</h2>
          <p className="relative mt-3 max-w-2xl leading-7 text-teal-200">
            Consulta un manual o ponte manos a la obra con el primer proyecto práctico.
          </p>
          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              className="rounded-xl bg-brand-pink px-5 py-3 text-center font-bold text-brand-purple transition hover:-translate-y-0.5 hover:bg-white"
              to="/manuales"
            >
              Ir a manuales
            </Link>
            <Link
              className="rounded-xl border border-white/40 px-5 py-3 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              to="/proyectos"
            >
              Ver proyecto 01
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}
