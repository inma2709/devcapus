import { Link } from "react-router-dom";

export default function ExpandedTopic({ title, intro, essential, deepen, advanced, code, challenge, next }) {
  return <article className="doc expanded-topic">
    <section className="card hero"><p className="doc-kicker">Recorrido escalable · Profundiza</p><h1>{title}</h1><p className="doc-lead">{intro}</p></section>
    <section className="card layer essential"><h2><span className="layer-badge">Esencial</span> Empieza por aquí</h2><p>{essential.text}</p><pre><code>{essential.code || code}</code></pre><ul>{essential.points.map((point) => <li key={point}>{point}</li>)}</ul></section>
    <details className="card layer deepen" open><summary><span className="layer-badge">Profundiza</span> Comprende mejor</summary><div className="dd-body"><p>{deepen.text}</p>{deepen.code && <pre><code>{deepen.code}</code></pre>}<ul>{deepen.points.map((point) => <li key={point}>{point}</li>)}</ul></div></details>
    <details className="card layer advanced"><summary><span className="layer-badge">Avanzado</span> Para seguir creciendo</summary><div className="dd-body"><p>{advanced.text}</p>{advanced.code && <pre><code>{advanced.code}</code></pre>}<ul>{advanced.points.map((point) => <li key={point}>{point}</li>)}</ul></div></details>
    <section className="card"><h2>Reto guiado</h2><p>{challenge}</p>{next && <Link className="btn btn-primary" to={next}>Continuar →</Link>}</section>
  </article>;
}
