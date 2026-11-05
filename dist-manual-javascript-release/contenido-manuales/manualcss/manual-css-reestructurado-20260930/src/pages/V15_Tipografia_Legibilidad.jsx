import { useEffect, useMemo, useState } from "react";

export default function V15_TipografiaLegibilidad() {
  useEffect(() => {
    document.title = "V15 · Tipografía y legibilidad: cómo hacer texto fácil de leer";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "¿Cuál es la longitud de línea óptima para cuerpo de texto en pantalla?", options: ["20-30 caracteres", "45-75 caracteres", "100-120 caracteres", "Depende solo del font-size"], correct: "45-75 caracteres", why: "La 'measure' tipográfica recomendada es 45-75 ch (caracteres). En CSS puedes limitarla con max-width: 65ch en el contenedor de texto." },
    { id: "q2", q: "¿Qué unidad CSS refleja mejor el ancho de un carácter promedio?", options: ["em", "rem", "ch", "ex"], correct: "ch", why: "La unidad ch es igual al ancho del carácter '0' de la fuente actual. Ideal para definir la longitud óptima de línea." },
    { id: "q3", q: "¿Por qué se recomienda no usar negro puro (#000000) sobre blanco puro (#ffffff)?", options: ["Por razones de rendimiento", "El contraste extremo causa fatiga visual en textos largos", "Los navegadores no lo soportan bien", "Solo es recomendación para móviles"], correct: "El contraste extremo causa fatiga visual en textos largos", why: "Un contraste de negro puro sobre blanco puro es demasiado duro para leer. Se prefiere #1a1a1a o #333 sobre #fff, o un fondo ligeramente crema." },
    { id: "q4", q: "¿Qué valor de line-height se recomienda para párrafos de texto?", options: ["1.0 (igual al tamaño de fuente)", "1.4 a 1.6", "2.5 o más", "Siempre 24px"], correct: "1.4 a 1.6", why: "Un line-height de 1.5 crea el espacio vertical necesario para que el ojo pueda distinguir las líneas y seguirlas con facilidad." },
    { id: "q5", q: "¿Qué ventaja tiene usar una pila de fuentes del sistema (system font stack)?", options: ["Carga más lento pero se ve mejor", "Carga instantáneamente porque usa fuentes ya instaladas en el dispositivo", "Solo funciona en macOS", "Ofrece más opciones de personalización que Google Fonts"], correct: "Carga instantáneamente porque usa fuentes ya instaladas en el dispositivo", why: "Las system fonts (como -apple-system, Segoe UI, Ubuntu) están preinstaladas en el SO, eliminando la carga de una web font y mejorando el rendimiento." },
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
        <p className="doc-kicker">V15 · Tipografía</p>
        <h1>Tipografía y legibilidad</h1>
        <p className="doc-lead">
          Elegir una fuente bonita no es suficiente. La legibilidad depende del tamaño, el interlineado,
          la longitud de línea y el contraste. Aprende las reglas que hacen que el texto sea
          realmente fácil de leer.
        </p>
      </header>

      {/* MEDIDA Y ESPACIO */}
      <section className="card">
        <h2>La medida tipográfica: cuánto texto cabe en una línea</h2>
        <p>
          El término <strong>measure</strong> define la longitud de cada línea de texto. Si es demasiado
          larga, el ojo se pierde al pasar a la siguiente. Si es demasiado corta, el ritmo de lectura
          se rompe.
        </p>

        <div className="callout tip">
          <strong>Regla de oro:</strong> entre <strong>45 y 75 caracteres</strong> por línea en cuerpo de texto.
          En CSS: <code>max-width: 65ch</code> en el párrafo o contenedor de lectura.
        </div>

        <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* Limitar la longitud de línea */
.prose {
  max-width: 65ch;
  margin-inline: auto; /* Centrar */
}

/* Para artículos o posts */
article {
  max-width: 70ch;
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.6;
}`}</pre>
      </section>

      {/* CONTRASTE Y COLOR */}
      <section className="card">
        <h2>Contraste y color: el texto también se cansa</h2>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}>
          <div style={{ background: "#fff", padding: "1.25rem", borderRadius: "0.75rem", border: "2px solid #e2e8f0" }}>
            <h3 style={{ marginTop: 0 }}>❌ Evitar</h3>
            <p style={{ color: "#000000", background: "#ffffff", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.9em" }}>Negro puro sobre blanco puro — contraste excesivo</p>
            <p style={{ color: "#999", background: "#fff", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.9em", marginBottom: 0 }}>Gris claro sobre blanco — ratio insuficiente</p>
          </div>
          <div style={{ background: "#fff", padding: "1.25rem", borderRadius: "0.75rem", border: "2px solid #4ade80" }}>
            <h3 style={{ marginTop: 0 }}>✅ Preferido</h3>
            <p style={{ color: "#1e293b", background: "#f8fafc", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.9em" }}>Casi negro (#1e293b) sobre ligeramente gris — confortable</p>
            <p style={{ color: "#374151", background: "#fff", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.9em", marginBottom: 0 }}>Gris oscuro (#374151) sobre blanco — legible y suave</p>
          </div>
        </div>

        <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto", marginTop: "1rem" }}>{`:root {
  --text-primary:   #1e293b; /* Títulos */
  --text-body:      #374151; /* Párrafos */
  --text-muted:     #6b7280; /* Notas, meta */
  --bg-page:        #ffffff;
  --bg-subtle:      #f8fafc; /* Fondo de tarjetas */
}`}</pre>
      </section>

      {/* PILA TIPOGRÁFICA */}
      <section className="card">
        <h2>Pilas tipográficas: fuentes del sistema vs web fonts</h2>

        <details className="dd">
          <summary>System font stack: carga cero, aspecto nativo</summary>
          <div className="dd-body">
            <p>Esta pila usa las fuentes instaladas en el sistema operativo del usuario: sin descarga, sin FOUT.</p>
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`body {
  font-family:
    -apple-system,        /* macOS/iOS: San Francisco */
    BlinkMacSystemFont,   /* Chrome en macOS */
    "Segoe UI",           /* Windows */
    Ubuntu,               /* Linux */
    Roboto,               /* Android/Chrome */
    "Helvetica Neue",
    Arial,
    sans-serif;           /* Fallback genérico */
}`}</pre>
          </div>
        </details>

        <details className="dd">
          <summary>Google Fonts: cómo incluirlas correctamente</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* En el <head>, con preconnect para mejor rendimiento */
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

/* En tu CSS */
body { font-family: 'Inter', sans-serif; }`}</pre>
          </div>
        </details>

        <details className="dd">
          <summary>Tamaños fluidos con clamp()</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`:root {
  --text-sm:   clamp(0.875rem, 1vw,   1rem);
  --text-base: clamp(1rem,     1.5vw, 1.125rem);
  --text-lg:   clamp(1.125rem, 2vw,   1.5rem);
  --text-xl:   clamp(1.5rem,   3vw,   2.25rem);
  --text-2xl:  clamp(2rem,     5vw,   3.5rem);
}

body { font-size: var(--text-base); }
h1   { font-size: var(--text-2xl); }
h2   { font-size: var(--text-xl); }`}</pre>
            <div className="callout tip">
              Con clamp(), los tamaños escalan automáticamente según el viewport. No necesitas media queries para la tipografía.
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
