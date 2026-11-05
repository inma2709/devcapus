import { useEffect, useMemo, useState } from "react";

export default function V18_OverflowContencion() {
  useEffect(() => {
    document.title = "V18 · Overflow, contención y aspect-ratio";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "¿Cuál es la diferencia entre overflow: hidden y overflow: auto?", options: ["Son idénticos", "hidden corta el contenido sin barra; auto añade barra de scroll solo si es necesario", "auto corta el contenido; hidden añade scroll", "hidden es para texto; auto para imágenes"], correct: "hidden corta el contenido sin barra; auto añade barra de scroll solo si es necesario", why: "overflow:hidden recorta el contenido que se sale. overflow:auto solo muestra una barra de desplazamiento si el contenido realmente desborda." },
    { id: "q2", q: "¿Qué hace aspect-ratio: 16 / 9?", options: ["Establece el tamaño en 16px por 9px", "Mantiene la proporción 16:9 al redimensionar el elemento", "Solo funciona en imágenes y videos", "Fija el ancho a 16rem y el alto a 9rem"], correct: "Mantiene la proporción 16:9 al redimensionar el elemento", why: "aspect-ratio define la relación entre ancho y alto. Si el ancho cambia, el alto se ajusta automáticamente para mantener la proporción 16:9." },
    { id: "q3", q: "¿Cuándo es útil object-fit: cover?", options: ["Para comprimir imágenes grandes", "Para que una imagen llene su contenedor sin distorsionarse, recortando lo que sobre", "Para centrar texto dentro de una imagen", "Para aplicar un filtro de imagen"], correct: "Para que una imagen llene su contenedor sin distorsionarse, recortando lo que sobre", why: "object-fit:cover hace que la imagen rellene completamente el contenedor (como background-size:cover) pero funciona con el elemento <img>." },
    { id: "q4", q: "¿Qué sigifica que un elemento cree un 'stacking context' al aplicar overflow:hidden?", options: ["Nada importante", "Los elementos flotantes hijos son contenidos por el padre con overflow:hidden (clearfix moderno)", "El elemento se vuelve position:absolute automáticamente", "Los z-index de los hijos se resetean"], correct: "Los elementos flotantes hijos son contenidos por el padre con overflow:hidden (clearfix moderno)", why: "overflow:hidden fue durante años el 'clearfix' estándar: fuerza al padre a contener los hijos flotantes en lugar de colapsar a 0." },
    { id: "q5", q: "¿Cuál es la diferencia entre overflow-y: scroll y overflow-y: auto?", options: ["Son idénticos", "scroll siempre muestra la barra aunque no haga falta; auto solo cuando hay desbordamiento", "auto siempre muestra la barra; scroll solo a veces", "scroll es para touch; auto para ratón"], correct: "scroll siempre muestra la barra aunque no haga falta; auto solo cuando hay desbordamiento", why: "overflow:scroll reserva espacio para la barra de desplazamiento aunque no haya contenido suficiente. overflow:auto es más limpio visualmente." },
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
        <p className="doc-kicker">V18 · Layout</p>
        <h1>Overflow, contención y aspect-ratio</h1>
        <p className="doc-lead">
          ¿Qué pasa cuando un elemento tiene más contenido del que cabe en su caja?
          CSS ofrece varias estrategias para manejar el desbordamiento y mantener el control
          visual del layout.
        </p>
      </header>

      {/* OVERFLOW */}
      <section className="card">
        <h2>La propiedad overflow</h2>
        <p>
          <code>overflow</code> controla qué pasa cuando el contenido es más grande que su contenedor.
          Se puede aplicar para los dos ejes con <code>overflow-x</code> y <code>overflow-y</code>.
        </p>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))" }}>
          {[
            { val: "visible", desc: "El contenido desborda fuera de la caja (valor por defecto).", bg: "#fef2f2", border: "#fca5a5", color: "#dc2626" },
            { val: "hidden", desc: "El contenido que sale de la caja se recorta. Sin barra.", bg: "#f0fdf4", border: "#4ade80", color: "#15803d" },
            { val: "scroll", desc: "Siempre muestra barra de scroll, aunque no haya desbordamiento.", bg: "#fefce8", border: "#facc15", color: "#a16207" },
            { val: "auto", desc: "Barra de scroll solo si hay desbordamiento. La más usada.", bg: "#f0f9ff", border: "#38bdf8", color: "#0369a1" },
          ].map(({ val, desc, bg, border, color }) => (
            <div key={val} style={{ background: bg, padding: "1rem", borderRadius: "0.75rem", border: `2px solid ${border}` }}>
              <code style={{ fontWeight: 700, color }}>{val}</code>
              <p style={{ fontSize: "0.9em", margin: "0.5rem 0 0" }}>{desc}</p>
            </div>
          ))}
        </div>

        <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto", marginTop: "1rem" }}>{`/* Scroll vertical en un panel lateral */
.sidebar { overflow-y: auto; height: 400px; }

/* Evitar que el contenido desborde un contenedor */
.card { overflow: hidden; border-radius: 0.75rem; }

/* Scroll horizontal en tabla o código */
.table-wrapper { overflow-x: auto; }`}</pre>
      </section>

      {/* ASPECT RATIO */}
      <section className="card">
        <h2>aspect-ratio: proporciones sin JavaScript</h2>

        <details className="dd">
          <summary>Uso básico y casos de uso</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* Video responsive 16:9 */
.video-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
}

/* Tarjeta cuadrada */
.avatar { aspect-ratio: 1; width: 4rem; }

/* Miniatura 4:3 */
.thumbnail { aspect-ratio: 4 / 3; width: 100%; }`}</pre>
            <div className="callout tip">
              Antes de <code>aspect-ratio</code>, el truco era <code>padding-top: 56.25%</code>. Ahora es innecesario y mucho menos intuitivo.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>object-fit y object-position para imágenes</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* Imagen que rellena su caja sin distorsión */
.card-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;       /* Rellena, recorta lo que sobre */
  object-position: center; /* Punto de enfoque */
}

/* Valores de object-fit:
   contain  → cabe entero, deja barras negras
   cover    → rellena, recorta
   fill     → estira (distorsiona)
   none     → tamaño original
   scale-down → el menor de contain y none */`}</pre>
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
