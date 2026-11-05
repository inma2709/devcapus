import { ArrowUpRight, Download, FileCode, FileText, BookOpen, FileText as DocumentIcon } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className="flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300">
      <div className="flex items-center justify-between">
        {project.kind === 'resource' ? <DocumentIcon className="text-teal-700" size={38} aria-label="Recurso didáctico" /> : <span className="text-4xl font-extrabold text-teal-700 font-display">{project.number}</span>}
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {project.level}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-slate-900 leading-tight">
        {project.title}
      </h3>
      
      <p className="mt-2.5 grow text-sm leading-relaxed text-slate-600">
        {project.description}
      </p>

      {/* Badges de Tecnologías */}
      <ul className="mt-4 flex flex-wrap gap-1.5 border-b border-slate-100 pb-4">
        {project.technologies.map((tech) => (
          <li
            className="rounded bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-800"
            key={tech}
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* Enlaces de Descarga y Demo */}
      <div className="mt-5 space-y-4">
        {/* Ver demo del proyecto */}
        {project.url && (
          <a
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-700 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-teal-800"
            href={project.url}
            target={project.kind === 'resource' ? undefined : '_blank'}
            rel={project.kind === 'resource' ? undefined : 'noreferrer'}
          >
            {project.kind === 'resource' ? 'Ver tutorial' : 'Abrir Demo en Vivo'}
            <ArrowUpRight size={14} />
          </a>
        )}

        {/* Bloque Descargables para el Alumnado */}
        {project.files && (
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 space-y-3 shadow-inner">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Recursos y descargas:</p>
            
            <div className="grid grid-cols-2 gap-2">
              {/* Descargar HTML */}
              {project.files.index && (
                <a
                  href={project.files.index}
                  download="index.html"
                  className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded py-1.5"
                  title="Descargar index.html"
                >
                  <FileCode size={13} className="text-teal-600" />
                  index.html
                  <Download size={10} className="text-slate-400" />
                </a>
              )}

              {/* Descargar CSS */}
              {project.files.css && (
                <a
                  href={project.files.css}
                  download="style.css"
                  className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded py-1.5"
                  title="Descargar style.css"
                >
                  <FileCode size={13} className="text-brand-pink" />
                  style.css
                  <Download size={10} className="text-slate-400" />
                </a>
              )}

              {/* Descargar JS */}
              {project.files.js && (
                <a
                  href={project.files.js}
                  download={project.id === 'mi-negocio' ? 'script.js' : 'app.js'}
                  className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded py-1.5 relative col-span-1"
                  title="Descargar script de lógica JS"
                >
                  <FileCode size={13} className="text-yellow-600" />
                  lógica.js
                  <Download size={10} className="text-slate-400" />
                </a>
              )}

              {/* Descargar Manual */}
              {project.files.manual && (
                <a
                  href={project.files.manual}
                  download
                  className={`flex items-center justify-center gap-1 text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded py-1.5 ${(!project.files.css && !project.files.js) ? 'col-span-1' : (project.files.js && !project.files.css ? 'col-span-1' : 'col-span-2')}`}
                  title="Descargar Manual de Aprendizaje del Proyecto"
                >
                  <BookOpen size={13} className="text-brand-blue" />
                  Ver Manual.md
                  <Download size={10} className="text-slate-400" />
                </a>
              )}

              {/* Descargar README.md (específico de Citas) */}
              {project.files.readme && (
                <a
                  href={project.files.readme}
                  download="README.md"
                  className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded py-1.5 col-span-2"
                  title="Descargar archivo README de instrucciones"
                >
                  <FileText size={13} className="text-slate-600" />
                  README.md
                  <Download size={10} className="text-slate-400" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
