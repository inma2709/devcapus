import { useEffect, useMemo, useState } from "react";

/**
 * R02 · Layout Responsive (PRO)
 * - Mobile-first
 * - Patrones reales con Grid/Flex
 * - Sidebar / Header / Footer
 * - Cards fluidas (auto-fit/minmax)
 * - Tipografía y espaciado fluidos
 * - Debug y gotchas (overflow, minmax(0,1fr), 70ch)
 *
 * ✅ Listo para copiar/pegar en tu manual
 */
export default function R02_LayoutResponsive_Pro() {
  useEffect(() => {
    document.title =
      "R02 · Layout responsive PRO: patrones reales con Grid y Flex (mobile-first)";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "En mobile-first, ¿cómo se construye el layout base?",
        options: [
          "Con 3 columnas y luego se apila en móvil",
          "Con una columna y estructura simple, y luego se mejora con min-width",
          "Con max-width para móvil",
          "Con position:absolute para todo",
        ],
        correct:
          "Con una columna y estructura simple, y luego se mejora con min-width",
        why:
          "Mobile-first define un baseline simple y robusto para pantallas pequeñas; luego se añaden mejoras.",
      },
      {
        id: "q2",
        q: "¿Qué patrón permite cards fluidas sin media queries en muchos casos?",
        options: [
          "repeat(3, 1fr)",
          "repeat(auto-fit, minmax(220px, 1fr))",
          "float: left",
          "position: fixed",
        ],
        correct: "repeat(auto-fit, minmax(220px, 1fr))",
        why:
          "auto-fit + minmax crea columnas automáticas que se ajustan al espacio disponible.",
      },
      {
        id: "q3",
        q: "¿Qué solución evita que un Grid “explote” por overflow de un hijo largo?",
        options: [
          "grid-template-columns: 1fr 1fr",
          "minmax(0, 1fr) y/o overflow-wrap",
          "height: 100vh",
          "z-index: 9999",
        ],
        correct: "minmax(0, 1fr) y/o overflow-wrap",
        why:
          "En Grid, los tracks pueden no encoger por el min-content de los hijos. minmax(0,1fr) permite encoger; overflow-wrap ayuda con textos largos.",
      },
      {
        id: "q4",
        q: "¿Cuál es una práctica PRO para legibilidad del contenido en escritorio?",
        options: [
          "Dejar el texto a ancho completo",
          "Usar max-width en ch (ej: 70ch) y centrar",
          "Poner font-size fijo en 12px",
          "Usar solo mayúsculas",
        ],
        correct: "Usar max-width en ch (ej: 70ch) y centrar",
        why:
          "Limitar la longitud de línea mejora la lectura y reduce fatiga visual.",
      },
      {
        id: "q5",
        q: "¿Cuándo es mejor Flexbox que Grid?",
        options: [
          "Para layouts bidimensionales con filas y columnas",
          "Para alineación en un eje (nav, toolbars, grupos de botones)",
          "Para hacer breakpoints",
          "Para hacer overlays",
        ],
        correct:
          "Para alineación en un eje (nav, toolbars, grupos de botones)",
        why:
          "Flexbox es unidimensional: excelente para alineación horizontal/vertical y distribución en un eje.",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let ok = 0;
    for (const q of questions) if (answers[q.id] === q.correct) ok++;
    return ok;
  }, [answers, questions]);

  const choose = (id, opt) => setAnswers((p) => ({ ...p, [id]: opt }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ================= HERO ================= */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Responsive · R02</p>
        <h1>Layout responsive PRO: patrones reales con Grid + Flex (mobile-first)</h1>

        <p className="doc-lead">
          Aquí pasamos de “poner media queries” a construir layouts robustos:{" "}
          <strong>header, navegación, sidebar, contenido, cards</strong> y{" "}
          <strong>tipografía legible</strong>. El objetivo es que tu interfaz
          funcione bien en móvil, tablet y escritorio y sea fácil de mantener.
        </p>

        <div className="callout tip">
          🧠 Regla de oro (PRO): primero <strong>fluidez</strong> (wrap, min/max,
          clamp, auto-fit), después <strong>breakpoints</strong> solo cuando el
          layout lo pide.
        </div>

        <nav className="doc-index" aria-label="Índice del tema">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#mapa">1) Mapa mental: qué es layout responsive</a></li>
            <li><a href="#wrap">2) El contenedor “wrap” y la legibilidad (70ch)</a></li>
            <li><a href="#base">3) Estructura base mobile-first</a></li>
            <li><a href="#grid-vs-flex">4) Cuándo Grid y cuándo Flex</a></li>
            <li><a href="#layout-app">5) Layout tipo “app”: header + sidebar + main</a></li>
            <li><a href="#cards">6) Cards fluidas y rejillas inteligentes</a></li>
            <li><a href="#nav-responsive">7) Navegación responsive (top + lateral)</a></li>
            <li><a href="#tipografia">8) Tipografía y espacios fluidos</a></li>
            <li><a href="#gotchas">9) Gotchas: overflow, minmax(0,1fr), imágenes</a></li>
            <li><a href="#retos">10) Retos prácticos</a></li>
            <li><a href="#test">11) Test con feedback</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= 1) MAPA ================= */}
      <section className="doc-section" id="mapa">
        <details className="dd" open>
          <summary>1) Mapa mental: qué es layout responsive (y qué NO es)</summary>
          <div className="dd-body">
            <div className="callout">
              Layout responsive ={" "}
              <strong>estructura + lectura + interacción</strong> en distintos tamaños.
              <ul style={{ marginBottom: 0 }}>
                <li>
                  <strong>Estructura</strong>: secciones, columnas, rejillas, orden visual.
                </li>
                <li>
                  <strong>Lectura</strong>: ancho de línea, tamaños de texto, espacios.
                </li>
                <li>
                  <strong>Interacción</strong>: botones tocables, foco visible, menús que funcionan sin hover.
                </li>
              </ul>
            </div>

            <div className="callout warn">
              ❌ No es: “tres breakpoints mágicos y ya”.
              <br />
              ✅ Sí es: una base mobile-first + fluidez + mejoras por contenido.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 2) WRAP + LEGIBILIDAD ================= */}
      <section className="doc-section" id="wrap">
        <details className="dd" open>
          <summary>2) El contenedor “wrap” y la legibilidad (diferencia PRO)</summary>
          <div className="dd-body">
            <p>
              Si tu contenido se estira a 1600px de ancho, la lectura se vuelve difícil.
              Un layout profesional controla el ancho del contenido con un contenedor.
            </p>

            <pre>
              <code>{`/* Patrón universal: contenedor centrado con padding seguro */
.wrap{
  width: min(1120px, calc(100% - 2rem));
  margin-inline: auto;
}`}</code>
            </pre>

            <p>
              Para texto largo (artículos, documentación, manuales) añade un límite de “longitud de línea”:
            </p>

            <pre>
              <code>{`/* Legibilidad: limita el ancho del texto (aprox 60–75 caracteres por línea) */
.prose{
  max-width: 70ch;
}`}</code>
            </pre>

            <div className="callout tip">
              🎯 Truco: aplica <code>.prose</code> al contenedor del contenido textual.
              Mantienes el layout amplio, pero el texto sigue siendo cómodo.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 3) BASE MOBILE FIRST ================= */}
      <section className="doc-section" id="base">
        <details className="dd" open>
          <summary>3) Estructura base mobile-first (una columna “inteligente”)</summary>
          <div className="dd-body">
            <p>
              El baseline (móvil) debe funcionar incluso si no existieran media queries.
              Eso te obliga a construir una estructura simple y robusta:
            </p>

            <pre>
              <code>{`/* Base: todo en columna, espacio consistente */
.page{
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.header{ /* ... */ }
.main{ /* ... */ }
.footer{ /* ... */ }`}</code>
            </pre>

            <div className="callout">
              ✅ En móvil, lo correcto casi siempre es:
              <ul style={{ marginBottom: 0 }}>
                <li>Una columna.</li>
                <li>Espaciado consistente (<code>gap</code>).</li>
                <li>Componentes tocables (min-height, padding).</li>
              </ul>
            </div>

            <div className="callout warn">
              Evita el error clásico: “diseñar desktop y luego intentar apilar”.
              Eso suele generar CSS frágil y difícil de mantener.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 4) GRID VS FLEX ================= */}
      <section className="doc-section" id="grid-vs-flex">
        <details className="dd" open>
          <summary>4) Cuándo Grid y cuándo Flex (decisión profesional)</summary>
          <div className="dd-body">
            <div className="table-wrap" role="region" aria-label="Cuándo usar Grid o Flex" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Necesitas…</th>
                    <th>Usa</th>
                    <th>Ejemplos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Filas y columnas a la vez</td>
                    <td><strong>Grid</strong></td>
                    <td>Layouts de página, rejillas, dashboards</td>
                  </tr>
                  <tr>
                    <td>Alinear y distribuir en un eje</td>
                    <td><strong>Flex</strong></td>
                    <td>Navbars, toolbars, grupos de botones</td>
                  </tr>
                  <tr>
                    <td>Cards que se adaptan solas</td>
                    <td><strong>Grid</strong></td>
                    <td>auto-fit/minmax</td>
                  </tr>
                  <tr>
                    <td>Un componente “en fila” con wrap</td>
                    <td><strong>Flex</strong></td>
                    <td>Chips/tags con <code>flex-wrap</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              Un layout PRO suele mezclar ambos:
              <strong> Grid para la macroestructura</strong> + <strong>Flex para microalineación</strong>.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 5) LAYOUT TIPO APP ================= */}
      <section className="doc-section" id="layout-app">
        <details className="dd" open>
          <summary>5) Layout tipo “app”: header + sidebar + main (mobile-first)</summary>
          <div className="dd-body">
            <p>
              Este patrón es el más típico en manuales/documentación: header arriba,
              navegación lateral y contenido principal. En móvil, la sidebar se apila o se convierte en drawer.
            </p>

            <details className="dd dd-nested" open>
              <summary>HTML base (estructura semántica)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="#">Manual CSS</a>
    <nav class="topnav" aria-label="Navegación principal">
      <a class="topnav-link" href="#">Inicio</a>
      <a class="topnav-link" href="#">Responsive</a>
      <a class="topnav-link" href="#">Componentes</a>
    </nav>
  </div>
</header>

<div class="wrap app-layout">
  <aside class="sidebar" aria-label="Navegación lateral">
    <!-- menú lateral -->
  </aside>

  <main class="main">
    <!-- contenido -->
  </main>
</div>

<footer class="site-footer">
  <div class="wrap">Footer</div>
</footer>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>CSS (mobile-first + mejora en escritorio)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Layout base: 1 columna */
.app-layout{
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: start;
}

/* Sidebar arriba en móvil (apilada) */
.sidebar{
  order: 0;
}

/* Contenido */
.main{
  order: 1;
}

/* Mejora: en pantallas grandes, sidebar + main en 2 columnas */
@media (min-width: 1024px){
  .app-layout{
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 1.25rem;
  }

  .sidebar{
    position: sticky;
    top: 88px; /* ajusta según tu header */
    align-self: start;
    max-height: calc(100vh - 100px);
    overflow: auto;
  }
}`}</code>
                </pre>

                <div className="callout tip">
                  🔥 Clave PRO: <code>minmax(0, 1fr)</code> evita overflows del contenido.
                </div>
              </div>
            </details>

            <div className="callout">
              Si tu header es fijo, compensa con <code>scroll-margin-top</code> en secciones ancladas:
              <pre style={{ marginTop: ".75rem" }}>
                <code>{`.doc-section{ scroll-margin-top: 96px; }`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* ================= 6) CARDS FLUIDAS ================= */}
      <section className="doc-section" id="cards">
        <details className="dd" open>
          <summary>6) Cards fluidas: rejillas inteligentes sin vivir en breakpoints</summary>
          <div className="dd-body">
            <p>
              Para listados (tarjetas, módulos, recursos), el patrón más eficiente es:
              columnas automáticas que nunca bajan de un tamaño mínimo.
            </p>

            <pre>
              <code>{`/* Rejilla automática: columnas “seguras” */
.cards{
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

/* Opcional: en pantallas muy grandes, aumenta el mínimo */
@media (min-width: 1280px){
  .cards{
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
}`}</code>
            </pre>

            <div className="callout tip">
              Este patrón reduce media queries y se adapta a ventanas pequeñas, split-screen y zoom.
            </div>

            <details className="dd dd-nested">
              <summary>Card base (ejemplo)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<article class="card">
  <h3>Media queries</h3>
  <p>Aprende a diseñar mobile-first y usar breakpoints por contenido.</p>
  <a class="btn btn-primary" href="#">Entrar</a>
</article>`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 7) NAV RESPONSIVE ================= */}
      <section className="doc-section" id="nav-responsive">
        <details className="dd" open>
          <summary>7) Navegación responsive: top + lateral (sin depender de hover)</summary>
          <div className="dd-body">
            <p>
              La navegación responsive no es “cambiar tamaño”. Es garantizar que:
              <strong> se puede abrir, usar y cerrar</strong> en móvil, teclado y ratón.
            </p>

            <details className="dd dd-nested" open>
              <summary>Patrón simple: menú lateral colapsable con &lt;details&gt; (sin JS)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<aside class="sidebar">
  <details class="dd" open>
    <summary>Responsive</summary>
    <div class="dd-body">
      <a class="sidelink" href="#mapa">Mapa</a>
      <a class="sidelink" href="#wrap">Wrap</a>
      <a class="sidelink" href="#cards">Cards</a>
    </div>
  </details>
</aside>`}</code>
                </pre>

                <pre>
                  <code>{`.sidelink{
  display: block;
  padding: .6rem .75rem;
  border-radius: .75rem;
  text-decoration: none;
}

.sidelink[aria-current="page"],
.sidelink.is-active{
  font-weight: 700;
}`}</code>
                </pre>

                <div className="callout tip">
                  Para “marcar dónde estás”: usa <code>aria-current="page"</code> en el enlace activo.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Regla móvil: targets táctiles y separación</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.topnav-link, .sidelink{
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: .5rem;
}`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 8) TIPOGRAFÍA Y ESPACIOS ================= */}
      <section className="doc-section" id="tipografia">
        <details className="dd" open>
          <summary>8) Tipografía y espacios fluidos (clamp): se nota “nivel pro”</summary>
          <div className="dd-body">
            <p>
              Una interfaz responsive profesional se siente “natural” porque su escala
              tipográfica y sus espacios crecen suavemente.
            </p>

            <pre>
              <code>{`/* Tipografía fluida */
h1{ font-size: clamp(28px, 4vw, 44px); }
h2{ font-size: clamp(22px, 3vw, 32px); }
p{  font-size: clamp(16px, 2.2vw, 20px); }

/* Espaciado fluido (opcional) */
.section{
  padding-block: clamp(16px, 2vw, 28px);
}`}</code>
            </pre>

            <div className="callout warn">
              ⚠️ Ojo: no uses fluididad para todo. Mantén consistencia y evita “bailes” excesivos.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 9) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>9) Gotchas: overflow, minmax(0,1fr), imágenes y depuración</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>Gotcha A: “Se sale del contenedor” (overflow inesperado)</summary>
              <div className="dd-body">
                <p>
                  Causas típicas: palabras largas, URLs, code blocks, elementos con width fijo.
                </p>

                <pre>
                  <code>{`/* Texto largo: permite partir */
.prose, .card{
  overflow-wrap: anywhere;
}

/* Bloques de código: scroll horizontal */
pre{
  overflow: auto;
}`}</code>
                </pre>

                <div className="callout tip">
                  Si el layout es Grid con columnas fr, usa <code>minmax(0,1fr)</code> en el track del contenido.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Gotcha B: imágenes deformadas o con espacios raros</summary>
              <div className="dd-body">
                <pre>
                  <code>{`img{
  max-width: 100%;
  height: auto;
  display: block; /* evita el “gap” inline */
}`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Checklist de depuración (DevTools)</summary>
              <div className="dd-body">
                <ul>
                  <li>Prueba 320 / 375 / 768 / 1024 / 1280.</li>
                  <li>Prueba zoom 200% (accesibilidad).</li>
                  <li>Prueba split-screen / ventana estrecha.</li>
                  <li>Activa “Emulate focus” y revisa foco visible.</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 10) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>10) Retos prácticos (del concepto al dominio)</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1: Layout de documentación (wrap + sidebar sticky + main)</summary>
              <div className="dd-body">
                <p>
                  Implementa el patrón de la sección 5: en móvil apilado,
                  en escritorio sidebar sticky con altura máxima y scroll interno.
                </p>
                <div className="callout tip">
                  Pista: <code>grid-template-columns: 280px minmax(0, 1fr)</code> + <code>position: sticky</code>.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>🟡 Reto 2: Cards fluidas “módulos”</summary>
              <div className="dd-body">
                <p>
                  Crea una rejilla de cards que muestre 1 columna en móvil y aumente automáticamente.
                </p>
                <pre>
                  <code>{`.cards{
  display:grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>🔴 Reto 3: evita overflow en un code block largo</summary>
              <div className="dd-body">
                <p>
                  Inserta una URL larguísima en un <code>&lt;pre&gt;</code> y asegura que:
                  <strong> no rompe el layout</strong> y se puede leer con scroll horizontal.
                </p>
              </div>
            </details>

            <div className="callout">
              Si resuelves estos 3 retos, ya construyes layouts responsivos “de producción”.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 11) TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>11) Test final (con feedback)</summary>
          <div className="dd-body">
            <form onSubmit={submit}>
              {questions.map((q, i) => {
                const picked = answers[q.id];
                const ok = submitted && picked === q.correct;
                const bad = submitted && picked && picked !== q.correct;

                return (
                  <div className="card" key={q.id} style={{ marginTop: "1rem" }}>
                    <h3 style={{ marginTop: 0 }}>
                      {i + 1}. {q.q}
                    </h3>

                    <div className="test-question" role="group" aria-label={`Pregunta ${i + 1}`}>
                      {q.options.map((opt) => (
                        <label key={opt}>
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={picked === opt}
                            onChange={() => choose(q.id, opt)}
                            disabled={submitted}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>

                    {submitted && (
                      <div className={`callout ${ok ? "tip" : "warn"}`}>
                        {ok && (
                          <>
                            ✅ Correcta. <strong>{q.why}</strong>
                          </>
                        )}
                        {bad && (
                          <>
                            ❌ Incorrecta. Correcta: <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                        {!picked && (
                          <>
                            ⚠️ Sin responder. Correcta: <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="doc-next" style={{ gap: ".6rem" }}>
                {!submitted ? (
                  <button className="btn btn-primary" type="submit">
                    Corregir test
                  </button>
                ) : (
                  <>
                    <div className="badge" aria-live="polite">
                      Resultado: {score}/{questions.length}
                    </div>
                    <button className="btn" type="button" onClick={reset}>
                      Reintentar
                    </button>
                  </>
                )}
              </div>

              {submitted && (
                <div
                  className={`callout ${
                    score >= questions.length * 0.85
                      ? "tip"
                      : score >= questions.length * 0.65
                      ? ""
                      : "warn"
                  }`}
                  style={{ marginTop: "1rem" }}
                >
                  {score === questions.length && (
                    <>
                      🏆 <strong>Perfecto.</strong> Ya estás pensando como se trabaja en layouts reales:
                      fluidez + breakpoints por contenido + Grid/Flex con criterio.
                    </>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>
                      🎯 <strong>Muy bien.</strong> Repasa especialmente <code>minmax(0,1fr)</code> y el criterio
                      Grid vs Flex.
                    </>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>
                      📚 <strong>Buen avance.</strong> Repite los retos: ahí es donde se fija el conocimiento.
                    </>
                  )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Toca reforzar.</strong> Vuelve al índice y rehace: wrap/70ch, auto-fit/minmax
                      y mobile-first base.
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </details>
      </section>

      {/* ================= CIERRE ================= */}
      <section className="doc-section">
        <div className="callout tip">
          ✅ Resumen PRO:
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Mobile-first</strong>: base en una columna + mejoras con <code>min-width</code>.</li>
            <li><strong>Fluidez</strong>: wrap, 70ch, clamp, auto-fit/minmax.</li>
            <li><strong>Estructura</strong>: Grid para macro, Flex para micro.</li>
            <li><strong>Robustez</strong>: minmax(0,1fr) + overflow controlado.</li>
          </ul>
        </div>

        
      </section>
    </main>
  );
}
