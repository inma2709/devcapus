export default function StudentProjectCard({ project }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5">
      <img
        className="aspect-video w-full rounded-lg object-cover"
        src={project.image}
        alt={`Vista previa de ${project.title}`}
      />
      <p className="mt-4 text-sm text-slate-500">
        {project.student}
      </p>
      <h2 className="mt-1 text-xl font-bold">
        {project.title}
      </h2>
    </article>
  );
}
