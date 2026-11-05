import EmptyState from '../components/content/EmptyState';
import PageHero from '../components/content/PageHero';
import StudentProjectCard from '../components/content/StudentProjectCard';
import Container from '../components/layout/Container';
import { studentProjects } from '../data/studentProjects';

export default function StudentProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Comunidad" title="Proyectos de alumnos">
        Una galería para compartir trabajos realizados durante los cursos.
      </PageHero>

      <Container className="py-12">
        {studentProjects.length ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {studentProjects.map((project) => (
              <StudentProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState title="Aún no hay proyectos publicados">
            Muy pronto podrás descubrir aquí los proyectos desarrollados por alumnos de DevCampus.
          </EmptyState>
        )}
      </Container>
    </>
  );
}
