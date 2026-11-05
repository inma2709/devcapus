import { useEffect, useMemo, useState } from "react";
import { manualAsset } from "../utils/manualAsset";

const overflowGuideImage = manualAsset("overflow-limites-guia.png");

export default function V18_OverflowContencion() {
  useEffect(() => {
    document.title = "V18 · Overflow, contención y aspect-ratio";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "Un panel tiene altura limitada y su contenido debe seguir siendo accesible. ¿Qué decisión suele ser correcta?", options: ["overflow: hidden", "overflow-y: auto", "display: none", "aspect-ratio: auto"], correct: "overflow-y: auto", why: "auto añade desplazamiento únicamente cuando hace falta; el contenido no desaparece ni queda inaccesible." },
    { id: "q2", q: "¿Qué diferencia práctica hay entre overflow: hidden y overflow: clip?", options: ["Ninguna", "hidden recorta y puede desplazarse mediante script; clip solo recorta", "clip muestra siempre una barra", "hidden convierte al padre en position: relative"], correct: "hidden recorta y puede desplazarse mediante script; clip solo recorta", why: "Ambos ocultan lo que se sale, pero clip no crea un contenedor desplazable. Para un recorte puro, clip expresa mejor la intención." },
    { id: "q3", q: "¿Qué expresa aspect-ratio: 16 / 9?", options: ["Un ancho fijo de 16 px y alto de 9 px", "La proporción preferida entre ancho y alto", "Que el elemento siempre será un vídeo", "Que la imagen se recortará"], correct: "La proporción preferida entre ancho y alto", why: "La relación ayuda al navegador a calcular una dimensión cuando la otra no está fijada. No elige por sí sola cómo se ajusta una imagen." },
    { id: "q4", q: "Una foto debe llenar una miniatura 4:3, aunque se recorten los bordes. ¿Qué combinación encaja?", options: ["object-fit: contain", "object-fit: cover", "overflow: scroll", "display: inline"], correct: "object-fit: cover", why: "cover conserva la proporción de la imagen y llena la caja; la parte que no cabe se recorta." },
    { id: "q5", q: "¿Qué afirmación sobre overflow: hidden es correcta?", options: ["Crea siempre un stacking context", "Hace invisible el elemento completo", "Puede recortar descendientes y crea un nuevo contexto de formato de bloque", "Es el clearfix moderno recomendado"], correct: "Puede recortar descendientes y crea un nuevo contexto de formato de bloque", why: "No crea automáticamente un stacking context. Históricamente se usó para contener floats, pero hoy se prefieren Flexbox, Grid o display: flow-root cuando esa es la intención." },
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
        <p className="doc-kicker">V18 · Layout y robustez</p>
        <h1>Overflow, contención y aspect-ratio</h1>
        <p className="doc-lead">
          Una caja no siempre puede crecer: un panel tiene una altura, una tarjeta tiene bordes
          redondeados y una imagen necesita reservar su proporción. CSS permite decidir qué hacer
          cuando el contenido y la caja no coinciden.
        </p>
      </header>

      <section className="card">
        <h2>Antes de elegir: ¿qué está limitado?</h2>
        <p>
          El desbordamiento aparece cuando el área de contenido es mayor que el espacio disponible.
          Para verlo tiene que haber un límite en ese eje: <code>height</code>, <code>max-height</code>,
          una columna de Grid o una caja con una proporción concreta.
        </p>
        <div className="callout tip">
          <strong>Mapa mental.</strong> <code>display</code> decide cómo participa una caja en el flujo;
          <code> overflow</code> decide qué pasa con lo que no cabe dentro de ella; <code>aspect-ratio</code>
          ayuda a calcular sus dimensiones antes de que llegue el contenido.
        </div>
        <div style={{ display: "grid", gap: "0.9rem", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", marginTop: "1rem" }}>
          {[
            ["¿Debe poder leerse todo?", "Crea un área desplazable."],
            ["¿Es un recorte visual intencionado?", "Oculta lo que sobresale."],
            ["¿La caja debe mantener forma?", "Define una proporción."],
          ].map(([title, text]) => (
            <div key={title} style={{ padding: "1rem", border: "1px solid #cbd5e1", borderRadius: "0.75rem", background: "#f8fafc" }}>
              <strong>{title}</strong><p style={{ margin: "0.45rem 0 0" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Guía visual: límites y decisiones de overflow</h2>
        <p>
          Usa esta síntesis como referencia: primero localiza el límite real de la caja; después decide
          si el contenido debe crecer, adaptarse, desplazarse o recortarse conscientemente.
        </p>
        <img
          src={overflowGuideImage}
          alt="Infografía sobre límites de una caja en CSS: overflow, contención, ejes, truncado, Flexbox, Grid, aspect-ratio y object-fit"
          style={{ display: "block", width: "100%", maxWidth: "1100px", height: "auto", margin: "1.25rem auto 0", borderRadius: "0.75rem", border: "1px solid #cbd5e1" }}
        />
      </section>

      {/* OVERFLOW */}
      <section className="card">
        <h2>Overflow: ver, desplazar o recortar</h2>
        <p>
          <code>overflow</code> controla qué pasa cuando el contenido es más grande que su contenedor.
          Se puede aplicar para los dos ejes con <code>overflow-x</code> y <code>overflow-y</code>. Elige
          el valor según el acceso que el contenido necesita, no solo según cómo queda visualmente.
        </p>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))" }}>
          {[
            { val: "visible", desc: "El contenido sale de la caja. Es el valor inicial.", bg: "#f8fafc", border: "#94a3b8", color: "#334155" },
            { val: "auto", desc: "Añade desplazamiento solo si hace falta. Ideal para contenido accesible.", bg: "#eff6ff", border: "#60a5fa", color: "#1d4ed8" },
            { val: "scroll", desc: "Reserva una barra aunque no haya exceso; aporta estabilidad entre estados.", bg: "#fffbeb", border: "#fbbf24", color: "#92400e" },
            { val: "hidden", desc: "Recorta el exceso. Útil como máscara visual, no para ocultar información necesaria.", bg: "#f0fdf4", border: "#4ade80", color: "#166534" },
            { val: "clip", desc: "Recorte puro: no crea un área desplazable. Úsalo cuando esa sea la intención.", bg: "#fdf4ff", border: "#e879f9", color: "#86198f" },
          ].map(({ val, desc, bg, border, color }) => (
            <div key={val} style={{ background: bg, padding: "1rem", borderRadius: "0.75rem", border: `2px solid ${border}` }}>
              <code style={{ fontWeight: 700, color }}>{val}</code>
              <p style={{ fontSize: "0.9em", margin: "0.5rem 0 0" }}>{desc}</p>
            </div>
          ))}
        </div>

        <pre style={{ background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto", marginTop: "1rem" }}>{`/* Scroll vertical en un panel lateral */
.sidebar { overflow-y: auto; height: 400px; }

/* Recorte visual en una tarjeta con esquinas redondeadas */
.card { overflow: hidden; border-radius: 0.75rem; }

/* Scroll horizontal en tabla o código */
.table-wrapper { overflow-x: auto; }`}</pre>
        <div className="callout warn">
          <strong>No recortes una interacción.</strong> Si un enlace, un campo o texto relevante queda fuera,
          <code> hidden</code> lo vuelve difícil o imposible de usar. En ese caso, permite desplazamiento,
          cambia el layout o muestra el contenido de otra manera.
        </div>
      </section>

      <section className="card">
        <h2>Contener no es ocultar</h2>
        <p>
          <code>overflow: hidden</code> crea el borde de recorte de una tarjeta, pero no es una solución
          universal de layout: no convierte al elemento en absoluto ni crea automáticamente un <em>stacking context</em>.
        </p>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
          <div style={{ padding: "1rem", borderLeft: "4px solid #0ea5e9", background: "#f0f9ff" }}>
            <strong>Floats heredados</strong>
            <p style={{ marginBottom: 0 }}>Si solo necesitas contener floats antiguos, expresa esa intención con <code>display: flow-root</code>. En componentes nuevos, Flexbox y Grid suelen evitar el problema.</p>
          </div>
          <div style={{ padding: "1rem", borderLeft: "4px solid #f59e0b", background: "#fffbeb" }}>
            <strong>Elementos que no encogen</strong>
            <p style={{ marginBottom: 0 }}>En Flexbox o Grid revisa también <code>min-width: 0</code> o <code>min-height: 0</code>. Poner overflow sin comprobarlo puede limitarse a esconder el síntoma.</p>
          </div>
        </div>
      </section>

      {/* ASPECT RATIO */}
      <section className="card">
        <h2>aspect-ratio: proporciones sin JavaScript</h2>
        <p>
          <code>aspect-ratio</code> expresa una relación preferida entre ancho y alto. Cuando una dimensión
          puede calcularse y la otra es automática, el navegador usa esa relación. No fija por sí sola dos
          tamaños que ya has declarado de forma explícita.
        </p>

        <details className="dd">
          <summary>Uso básico y casos de uso</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* Video responsive 16:9 */
.video-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
}

/* Tarjeta cuadrada */
.avatar { aspect-ratio: 1; width: 4rem; }

/* Miniatura 4:3 */
.thumbnail { aspect-ratio: 4 / 3; width: 100%; }`}</pre>
            <div className="callout tip">
              Reservar una proporción evita saltos de layout mientras carga una imagen. Antes de
              <code> aspect-ratio</code>, el truco era <code>padding-top: 56.25%</code>; ahora es innecesario
              y mucho menos intuitivo.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>object-fit y object-position para imágenes</summary>
          <div className="dd-body">
            <pre style={{ background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>{`/* Imagen que rellena su caja sin distorsión */
.card-img {
  display: block;
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
            <p>
              La proporción define la <strong>caja</strong>; <code>object-fit</code> decide cómo se adapta el
              archivo y <code>object-position</code> indica qué zona se privilegia al recortar. Usa
              <code> cover</code> para fotos de tarjeta y <code>contain</code> cuando deba verse completo,
              como un logotipo.
            </p>
            <div className="callout tip">
              <code>object-fit</code> y <code>object-position</code> actúan sobre contenido reemplazado,
              como <code>img</code> o <code>video</code>; no redimensionan el texto de un <code>div</code>.
            </div>
          </div>
        </details>
      </section>

      <section className="card">
        <h2>Reto corto: diagnostica antes de escribir CSS</h2>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {[
            ["Código largo en móvil", "Envuelve el bloque en un contenedor con overflow-x: auto; no rompas las líneas de código a la fuerza."],
            ["Foto de autor en una tarjeta", "Da una caja cuadrada con aspect-ratio: 1 y usa object-fit: cover."],
            ["Resultados de un filtro", "Si hay límite de alto, usa overflow-y: auto y conserva un modo de llegar a todos los resultados."],
            ["Título que no cabe en una columna Grid", "Comprueba min-width: 0 y la estrategia de texto antes de ocultarlo."],
          ].map(([title, answer]) => (
            <details className="dd" key={title}><summary>{title}</summary><div className="dd-body"><p>{answer}</p></div></details>
          ))}
        </div>
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
