import { FolderOpen } from 'lucide-react';

export default function EmptyState({ title, children }) {
  return (
    <section className="rounded-xl border border-dashed border-teal-300 bg-teal-50 p-8 text-center">
      <FolderOpen
        className="mx-auto text-teal-700"
        size={32}
        aria-hidden="true"
      />
      <h2 className="mt-4 text-xl font-bold text-slate-900">
        {title}
      </h2>
      <p className="mx-auto mt-2 max-w-xl leading-7 text-slate-600">
        {children}
      </p>
    </section>
  );
}
