import PageHero from '../components/content/PageHero';
import ProjectCard from '../components/content/ProjectCard';
import Container from '../components/layout/Container';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((a, b) =>
    a.number.localeCompare(b.number)
  );

  return (
    <>
      <PageHero eyebrow="Práctica" title="Proyectos">
        Una progresión pensada para transformar lo aprendido en trabajos reales.
      </PageHero>

      <Container className="py-12">
        <div className="grid gap-5 lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </>
  );
}
