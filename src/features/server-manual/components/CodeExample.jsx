export default function CodeExample({ file, children, output, language = 'JavaScript' }) {
  return <figure className="my-8 overflow-hidden rounded-xl border border-slate-300 bg-slate-950 shadow-sm">
    <figcaption className="flex justify-between gap-3 bg-slate-800 px-4 py-2 text-sm font-bold text-slate-100"><span>{file}</span><span className="font-normal text-slate-300">{language}</span></figcaption>
    <pre className="overflow-x-auto p-4 text-sm leading-7 text-teal-100"><code>{children}</code></pre>
    {output && <div className="border-t border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-200"><strong>Resultado esperado</strong><pre className="mt-2 overflow-x-auto text-teal-100"><code>{output}</code></pre></div>}
  </figure>;
}
