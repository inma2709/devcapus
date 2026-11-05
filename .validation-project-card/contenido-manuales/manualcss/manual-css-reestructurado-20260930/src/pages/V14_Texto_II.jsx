import { useEffect, useMemo, useState } from "react";

export default function V14_TextoII() {
  useEffect(() => {
    document.title = "V14 · Texto II: espaciado, transformación y desbordamiento";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "¿Qué hace letter-spacing: 0.1em?", options: ["Aumenta el tamaño de la fuente un 10%", "Añade espacio entre caracteres individuales", "Aumenta el espacio entre palabras", "Reduce el kerning de la fuente"], correct: "Añade espacio entre caracteres individuales", why: "letter-spacing controla el espacio entre cada carácter. Útil para cabeceras en mayúsculas o textos con tracking tipográfico." },
    { id: "q2", q: "¿Cuál es el valor de line-height recomendado para párrafos de texto?", options: ["1 (sin espaciado extra)", "Entre 1.4 y 1.6 para cuerpo de texto", "3 para maximizar legibilidad", "Siempre en píxeles (24px)"], correct: "Entre 1.4 y 1.6 para cuerpo de texto", why: "Un line-height de ~1.5 mejora la legibilidad en textos largos. Sin unidad es preferible (1.5 en lugar de 1.5em) para evitar herencia problemática." },
    { id: "q3", q: "¿Qué hace text-transform: uppercase?", options: ["Cambia la fuente a una variante mayúscula", "Convierte el texto a mayúsculas visualmente sin alterar el HTML", "Hace el texto más grande", "Aplica negrita al texto"], correct: "Convierte el texto a mayúsculas visualmente sin alterar el HTML", why: "text-transform es solo visual. El texto sigue siendo minúsculas en el HTML/DOM, lo que es mejor para accesibilidad y SEO." },
    { id: "q4", q: "¿Qué combinación de propiedades necesitas para que el texto se trunque con '...'?", options: ["Solo text-overflow: ellipsis", "overflow: hidden + white-space: nowrap + text-overflow: ellipsis", "Solo white-space: nowrap", "word-break: break-all + overflow: hidden"], correct: "overflow: hidden + white-space: nowrap + text-overflow: ellipsis", why: "Las tres propiedades son necesarias: white-space evita los saltos de línea, overflow corta el texto y text-overflow añade los puntos suspensivos." },
    { id: "q5", q: "¿Cuál es la diferencia entre word-break: break-all y overflow-wrap: break-word?", options: ["Son idénticos", "break-all corta en cualquier carácter; break-word solo corta si no cabe la palabra entera", "overflow-wrap no existe en CSS moderno", "break-all es solo para idiomas asiáticos"], correct: "break-all corta en cualquier carácter; break-word solo corta si no cabe la palabra entera", why: "overflow-wrap: break-word es más suave: solo rompe la palabra si es la única forma de que quepa. break-all es más agresivo y rompe en cualquier punto." },
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
        <p className="doc-kicker">V14 · Texto</p>
        <h1>Texto II: espaciado, transformaciones y desbordamiento</h1>
        <p className="doc-lead">
          Más allá de font-size y color, CSS ofrece decenas de propiedades para controlar cómo
          se presenta el texto. En este tema aprenderás a manejar el espaciado, las transformaciones
          y los casos en que el texto no cabe en su contenedor.
        </p>
      </header>

      {/* ESPACIADO */}
      <section className="card">
        <h2>Espaciado tipográfico</h2>
        <p>El espaciado define el ritmo visual del texto. Las tres propiedades clave son:</p>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))" }}>
          <div style={{ background: "#f0f9ff", padding: "1.25rem", borderRadius: "0.75rem", border: "2px solid #38bdf8" }}>
            <h3 style={{ marginTop: 0, color: "#0369a1" }}>letter-spacing</h3>
            <p style={{ marginBottom: "0.5rem" }}>Espacio entre <strong>caracteres</strong> individuales.</p>
            <pre style={{ background: "#e0f2fe", padding: "0.75rem", borderRadius: "0.5rem", margin: 0, fontSize: "0.9em" }}>{`h1 { letter-spacing: 0.05em; }
/* Tracking para mayúsculas */
.label { 
  text-transform: uppercase;
  letter-spacing: 0.15em;
}`}</pre>
          </div>

          <div style={{ background: "#f0fdf4", padding: "1.25rem", borderRadius: "0.75rem", border: "2px solid #4ade80" }}>
            <h3 style={{ marginTop: 0, color: "#15803d" }}>line-height</h3>
            <p style={{ marginBottom: "0.5rem" }}>Altura de <strong>cada línea</strong> de texto.</p>
            <pre style={{ background: "#dcfce7", padding: "0.75rem", borderRadius: "0.5rem", margin: 0, fontSize: "0.9em" }}>{`/* Sin unidad: herencia limpia */
body { line-height: 1.6; }

/* Títulos más compactos */
h1 { line-height: 1.1; }
h2 { line-height: 1.2; }`}</pre>
          </div>

          <div style={{ background: "#fff7ed", padding: "1.25rem", borderRadius: "0.75rem", border: "2px solid #fb923c" }}>
            <h3 style={{ marginTop: 0, color: "#c2410c" }}>word-spacing</h3>
            <p style={{ marginBottom: "0.5rem" }}>Espacio entre <strong>palabras</strong>.</p>
            <pre style={{ background: "#ffedd5", padding: "0.75rem", borderRadius: "0.5rem", margin: 0, fontSize: "0.9em" }}>{`/* Para diseño editorial */
.quote { 
  word-spacing: 0.2em;
  font-style: italic;
}`}</pre>
          </div>
        </div>

        <div className="callout tip">
          <strong>Regla de oro:</strong> Para cuerpo de texto, usa <code>line-height: 1.5</code> o <code>1.6</code> (sin unidad). Sin unidad significa que los hijos heredan el multiplicador, no un valor fijo en px.
        </div>
      </section>

      {/* TRANSFORMACIONES */}
      <section className="card">
        <h2>Transformaciones y decoración de texto</h2>

        <details className="dd">
          <summary>text-transform: mayúsculas, minúsculas y capitalize</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* Visuales: el HTML no cambia */
.heading { text-transform: uppercase; }
.subtitle { text-transform: capitalize; }
.legal { text-transform: lowercase; }
.code { text-transform: none; } /* Revertir herencia */`}</pre>
            <div className="callout tip">
              Usa <code>text-transform: uppercase</code> en CSS (no en el HTML) para que lectores de pantalla lean el texto en minúsculas/normal.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>text-decoration: líneas y estilos</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`a { text-decoration: none; }           /* Quitar subrayado */
.del { text-decoration: line-through; } /* Tachado */
.mark { 
  text-decoration: underline;
  text-decoration-color: #f59e0b;       /* Color personalizado */
  text-decoration-style: wavy;          /* Ondulado */
  text-underline-offset: 4px;           /* Separación del texto */
}`}</pre>
          </div>
        </details>

        <details className="dd">
          <summary>text-shadow: sombra tipográfica</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* Sintaxis: offset-x  offset-y  blur  color */
h1 { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }

/* Múltiples sombras (efecto neón) */
.neon { 
  text-shadow: 0 0 8px #0ea5e9, 
               0 0 20px #0ea5e9;
}`}</pre>
          </div>
        </details>
      </section>

      {/* DESBORDAMIENTO */}
      <section className="card">
        <h2>Desbordamiento de texto</h2>
        <p>Cuando el texto no cabe en su contenedor, CSS ofrece varias estrategias:</p>

        <details className="dd">
          <summary>Truncar con puntos suspensivos (ellipsis)</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* Las 3 propiedades son NECESARIAS */
.truncate {
  overflow: hidden;        /* Ocultar lo que desborda */
  white-space: nowrap;     /* Evitar el salto de línea */
  text-overflow: ellipsis; /* Añadir los "..." */
}

/* Para múltiples líneas (no Firefox <69) */
.clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`}</pre>
          </div>
        </details>

        <details className="dd">
          <summary>word-break y overflow-wrap: ¿cuándo romper palabras?</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* Rompe solo si la palabra no cabe: más natural */
.safe { overflow-wrap: break-word; }

/* Rompe en cualquier carácter: muy agresivo */
.aggressive { word-break: break-all; }

/* Buena práctica: combinar ambos */
.content {
  overflow-wrap: break-word;
  word-break: break-word; /* Alias más moderno */
  hyphens: auto;          /* Añadir guiones si el idioma lo permite */
}`}</pre>
            <div className="callout">
              Añade <code>lang="es"</code> al HTML para que <code>hyphens: auto</code> funcione correctamente en español.
            </div>
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
