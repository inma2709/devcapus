import { useEffect, useMemo, useState } from "react";

export default function V17_DisplayFlujo() {
  useEffect(() => {
    document.title = "V17 · Display y flujo normal del documento";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "¿Cuál es la diferencia principal entre display: block e display: inline?", options: ["block ocupa toda la línea; inline solo el espacio de su contenido", "inline es más moderno que block", "block solo funciona en divs; inline solo en spans", "Son idénticos en comportamiento"], correct: "block ocupa toda la línea; inline solo el espacio de su contenido", why: "Los elementos block (div, p, h1...) empiezan en nueva línea y se estiran al 100% del padre. Los inline (span, a, strong...) fluyen dentro del texto y no aceptan width/height." },
    { id: "q2", q: "¿Qué diferencia hay entre display: none y visibility: hidden?", options: ["Son equivalentes", "display: none elimina el elemento del flujo; visibility: hidden lo oculta pero mantiene su espacio", "visibility: hidden elimina el elemento del DOM", "display: none mantiene el espacio; visibility: hidden lo elimina"], correct: "display: none elimina el elemento del flujo; visibility: hidden lo oculta pero mantiene su espacio", why: "Con display:none el elemento no ocupa espacio. Con visibility:hidden el elemento sigue ocupando espacio, solo es invisible." },
    { id: "q3", q: "¿Qué permite display: inline-block que no permite display: inline?", options: ["Aplicar colores de fondo", "Aplicar width, height, margin y padding vertical", "Que el elemento fluya dentro del texto", "Que el elemento sea accesible por teclado"], correct: "Aplicar width, height, margin y padding vertical", why: "inline-block combina lo mejor de ambos: fluye como texto pero acepta dimensiones y márgenes verticales, a diferencia de inline puro." },
    { id: "q4", q: "¿Qué pasa al aplicar display: block a un elemento <a>?", options: ["El enlace deja de funcionar", "El enlace se convierte en un bloque que ocupa toda la anchura disponible", "El enlace se centra automáticamente", "El enlace pierde sus estilos de color"], correct: "El enlace se convierte en un bloque que ocupa toda la anchura disponible", why: "Cualquier elemento puede cambiar su tipo de display. Es una técnica común para hacer botones o tarjetas cliqueables en toda su área." },
    { id: "q5", q: "¿Qué hace display: contents?", options: ["Oculta el elemento pero mantiene sus hijos visibles", "Elimina la caja del elemento pero sus hijos siguen participando en el layout", "Es equivalente a display: none", "Hace que el elemento sea transparente"], correct: "Elimina la caja del elemento pero sus hijos siguen participando en el layout", why: "display:contents hace que el elemento 'desaparezca' de la caja pero sus hijos se comportan como si fueran hijos directos del padre. Útil para wrappers semánticos sin impacto visual." },
  ], []);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = useMemo(() => questions.filter((q) => answers[q.id] === q.correct).length, [answers, questions]);
  const choose = (id, opt) => setAnswers((p) => ({ ...p, [id]: opt }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <main className="doc" id="contenido">
      <header className="doc-hero">
        <p className="doc-kicker">V17 · Layout</p>
        <h1>Display y flujo normal del documento</h1>
        <p className="doc-lead">
          Antes de Flexbox y Grid, todos los elementos se posicionaban según el
          <strong> flujo normal</strong>. Entender <code>display</code> es la base de todo lo demás:
          sin esta propiedad, el layout no tiene sentido.
        </p>
      </header>

      {/* FLUJO NORMAL */}
      <section className="card">
        <h2>El flujo normal: cómo se colocan los elementos por defecto</h2>
        <p>
          Sin CSS, los elementos HTML se apilan siguiendo dos reglas simples según su tipo de display natural:
        </p>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))" }}>
          <div style={{ background: "#f0f9ff", padding: "1.25rem", borderRadius: "0.75rem", border: "2px solid #38bdf8" }}>
            <h3 style={{ marginTop: 0, color: "#0369a1" }}>🔲 Elementos block</h3>
            <p style={{ fontSize: "0.9em", marginBottom: "0.5rem" }}>Empiezan en nueva línea, se estiran al 100% del padre.</p>
            <code style={{ fontSize: "0.85em", background: "#e0f2fe", padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>div, p, h1-h6, ul, ol, li, section, article, header, footer, main, nav, form, blockquote</code>
          </div>

          <div style={{ background: "#f0fdf4", padding: "1.25rem", borderRadius: "0.75rem", border: "2px solid #4ade80" }}>
            <h3 style={{ marginTop: 0, color: "#15803d" }}>▶ Elementos inline</h3>
            <p style={{ fontSize: "0.9em", marginBottom: "0.5rem" }}>Fluyen dentro del texto, solo ocupan lo que necesitan.</p>
            <code style={{ fontSize: "0.85em", background: "#dcfce7", padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>span, a, strong, em, img, input, button, label, abbr, cite, code, small</code>
          </div>
        </div>
      </section>

      {/* VALORES DE DISPLAY */}
      <section className="card">
        <h2>Valores de display más importantes</h2>

        <details className="dd">
          <summary>block, inline, inline-block</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* block: nueva línea, 100% de ancho, acepta width/height */
div { display: block; }

/* inline: fluye en texto, NO acepta width/height */
span { display: inline; }

/* inline-block: fluye en texto, SÍ acepta width/height */
.badge { display: inline-block; width: 2rem; height: 2rem; }`}</pre>
            <div className="callout tip">
              Usa <code>inline-block</code> para badges, iconos o botones que necesitan dimensiones pero deben fluir con el texto.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>none vs visibility: hidden — la diferencia crucial</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* Elimina el elemento del flujo: no ocupa espacio */
.tooltip { display: none; }
.tooltip.visible { display: block; }

/* Oculta visualmente pero mantiene el espacio */
.placeholder { visibility: hidden; }

/* Tercera opción: accesible y visual */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
}`}</pre>
          </div>
        </details>

        <details className="dd">
          <summary>flex, grid, contents — display moderno</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* flex: activa el modelo de layout Flexbox */
.nav { display: flex; gap: 1rem; }

/* grid: activa el modelo de layout Grid */
.gallery { display: grid; grid-template-columns: repeat(3, 1fr); }

/* contents: la caja desaparece, los hijos pasan al padre */
.wrapper { display: contents; }
/* Útil para wrappers semánticos sin impacto en el layout */`}</pre>
          </div>
        </details>
      </section>

      {/* MINI-TEST */}
      <section className="card">
        <h2>🧠 Mini-test: comprueba lo aprendido</h2>
        <p>Responde sin mirar. Cada pregunta tiene una sola respuesta correcta.</p>
        <form onSubmit={submit}>
          {questions.map((q) => (
            <div key={q.id} style={{ marginBottom: "1.5rem", padding: "1rem 1.25rem", background: submitted ? (answers[q.id] === q.correct ? "#f0fdf4" : "#fef2f2") : "#f8fafc", borderRadius: "0.5rem", border: `1px solid ${submitted ? (answers[q.id] === q.correct ? "#86efac" : "#fca5a5") : "#e2e8f0"}` }}>
              <p style={{ fontWeight: 600, margin: "0 0 0.5rem" }}>{q.q}</p>
              {q.options.map((opt) => (
                <label key={opt} style={{ display: "block", cursor: submitted ? "default" : "pointer", padding: "0.25rem 0", color: submitted && opt === q.correct ? "#16a34a" : submitted && opt === answers[q.id] && opt !== q.correct ? "#dc2626" : "inherit", fontWeight: submitted && opt === q.correct ? 700 : "normal" }}>
                  <input type="radio" name={q.id} value={opt} checked={answers[q.id] === opt} onChange={() => choose(q.id, opt)} disabled={submitted} style={{ marginRight: "0.5rem" }} />
                  {opt}
                </label>
              ))}
              {submitted && <p style={{ marginTop: "0.5rem", fontSize: "0.9em", color: "#475569", borderTop: "1px solid #e2e8f0", paddingTop: "0.5rem" }}>💡 {q.why}</p>}
            </div>
          ))}
          {!submitted ? (
            <button type="submit" className="btn btn-primary" disabled={Object.keys(answers).length < questions.length}>Comprobar respuestas</button>
          ) : (
            <div>
              <p style={{ fontWeight: 700, fontSize: "1.1em", margin: "0 0 1rem" }}>{score === questions.length ? "🏆 ¡Perfecto!" : score >= Math.ceil(questions.length * 0.7) ? "✅ Muy bien" : "📚 Repasa un poco más"} — {score}/{questions.length} correctas ({Math.round((score / questions.length) * 100)}%)</p>
              <button type="button" className="btn" onClick={reset}>Reintentar</button>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
