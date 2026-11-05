import { ArrowUpRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ManualCard({ manual }) {
  const isAvailable = Boolean(manual.path || manual.route)

  return (
    <article
      className="
        flex
        flex-col
        h-full
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-brand-lavender
        hover:shadow-lg
      "
    >
      <BookOpen
        className="text-teal-700"
        aria-hidden="true"
      />

      <p className="mt-4 text-sm font-semibold text-teal-700">
        {manual.category} · {manual.level}{manual.duration ? ` · ${manual.duration}` : ''}
      </p>

      <h2 className="mt-1 text-xl font-bold text-slate-900">
        {manual.title}
      </h2>

      <p className="mt-2 grow leading-7 text-slate-600">
        {manual.description}
      </p>

      <p className="mt-3 text-sm font-semibold text-brand-purple">
        {manual.course} · {manual.status}
      </p>

      {isAvailable ? (
        <Link
          className="
            mt-5
            inline-flex
            items-center
            justify-center
            gap-2
            self-start
            rounded-lg
            bg-brand-blue
            px-4
            py-2.5
            text-sm
            font-bold
            text-white
            shadow-sm
            transition-colors
            hover:bg-brand-purple
          "
          to={manual.route ?? `/manuales/${manual.slug}`}
        >
          Abrir recurso
          <ArrowUpRight size={18} />
        </Link>
      ) : (
        <p className="mt-5 text-sm font-semibold text-slate-500">
          En preparación
        </p>
      )}

      {manual.id === 'node-fundamentos' && (
        <Link
          className="mt-3 text-sm font-bold text-brand-blue underline hover:text-brand-purple"
          to="/itinerarios/mf0492-entorno-servidor"
        >
          Ver itinerario MF0492_3
        </Link>
      )}
    </article>
  )
}
