import { useEffect, useMemo, useState } from "react";

export default function V34_MediaQueries_MobileFirst() {
  useEffect(() => {
    document.title =
      "V34 · Media Queries y Mobile-First: responsividad real";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué significa exactamente 'mobile-first' en CSS?",
        options: [
          "Diseñar solo para móvil",
          "Empezar con estilos base para pantallas pequeñas y luego mejorar con media queries",
          "Usar siempre unidades en px",
          "Ocultar contenido en escritorio",
        ],
        correct:
          "Empezar con estilos base para pantallas pequeñas y luego mejorar con media queries",
        why:
          "Mobile-first define el 'baseline' para pantallas pequeñas. Luego se añaden mejoras con breakpoints (normalmente min-width).",
      },
      {
        id: "q2",
        q: "¿Qué media query es más típica en mobile-first?",
        options: [
          "@media (max-width: 768px)",
          "@media (min-width: 768px)",
          "@media (height: 768px)",
          "@media (orientation: landscape) solamente",
        ],
        correct: "@media (min-width: 768px)",
        why:
          "Mobile-first suele usar min-width: empezamos en pequeño y ampliamos con mejoras a partir de ciertos anchos.",
      },
      {
        id: "q3",
        q: "¿Cuál es una buena razón para evitar breakpoints 'por dispositivo'?",
        options: [
          "Porque son ilegales",
          "Porque hay demasiados tamaños y cambian constantemente",
          "Porque CSS no soporta dispositivos",
          "Porque solo funciona en iPhone",
        ],
        correct: "Porque hay demasiados tamaños y cambian constantemente",
        why:
          "Los breakpoints deberían basarse en cuándo el layout 'se rompe', no en modelos de teléfono.",
      },
      {
        id: "q4",
        q: "¿Qué unidad ayuda a crear layouts fluidos junto a breakpoints?",
        options: ["fr", "px", "cm", "pt"],
        correct: "fr",
        why:
          "En Grid, fr reparte espacio disponible. En responsive se combina con minmax() y auto-fit/fill.",
      },
      {
        id: "q5",
        q: "¿Qué mejora de accesibilidad es obligatoria en responsive táctil?",
        options: [
          "Hover en todo",
          "Targets táctiles cómodos (≈44px) y foco visible",
          "Usar solo iconos sin texto",
          "Quitar outlines para que quede limpio",
        ],
        correct: "Targets táctiles cómodos (≈44px) y foco visible",
        why:
          "En táctil necesitas hit areas grandes; y el foco visible es esencial para teclado y accesibilidad.",
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
        <p className="doc-kicker">Responsive · R01</p>
        <h1>Media Queries + Mobile-First: responsividad real para proyectos modernos</h1>

        <div className="callout tip">
          🧠 Idea clave: <strong>mobile-first no es “móvil y ya”</strong>. Es diseñar un
          <strong> baseline mínimo</strong> que funcione perfecto en pantallas pequeñas y luego
          <strong> añadir mejoras</strong> cuando hay espacio real.
        </div>

        <p className="doc-lead">
          La responsividad no es “que se vea más o menos bien”. Es que la interfaz sea
          <strong> usable</strong> y <strong>accesible</strong> en móvil, tablet y escritorio:
          lectura cómoda, navegación clara, botones tocables, foco visible, y layouts que se
          adaptan sin romperse.
        </p>

        <div className="callout warn">
          📌 Regla profesional: <strong>los breakpoints no son por dispositivo</strong>.
          Son por <strong>contenido</strong>: cuando el layout deja de ser legible o usable,
          introduces un breakpoint.
        </div>

        {/* ================= ÍNDICE ================= */}
        <nav className="doc-index" aria-label="Índice de la lección">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#por-que-responsive">1) Por qué responsive es obligatorio hoy</a></li>
            <li><a href="#mobile-first">2) Mobile-first explicado (con mentalidad PRO)</a></li>
            <li><a href="#media-queries">3) Media queries: sintaxis y buenas prácticas</a></li>
            <li><a href="#breakpoints">4) Breakpoints por contenido (no por dispositivos)</a></li>
            <li><a href="#layout-fluido">5) Layout fluido: min(), max(), clamp(), minmax()</a></li>
            <li><a href="#tactil-teclado">6) Usabilidad: táctil, ratón y teclado</a></li>
            <li><a href="#patrones">7) Patrones responsive que usarás siempre</a></li>
            <li><a href="#gotchas">8) Errores comunes y cómo depurar</a></li>
            <li><a href="#retos">9) Retos prácticos</a></li>
            <li><a href="#test">10) Test final</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= 1) POR QUÉ RESPONSIVE ================= */}
      <section className="doc-section" id="por-que-responsive">
        <details className="dd" open>
          <summary>1) Por qué responsive es obligatorio hoy (visión realista)</summary>
          <div className="dd-body">
            <p>
              En el mundo real, tu web se usa en <strong>pantallas pequeñas</strong> (móvil),
              <strong> pantallas medias</strong> (tablet/portátiles) y <strong>pantallas grandes</strong>.
              Además, el usuario no siempre navega “a pantalla completa”: hay ventanas pequeñas,
              modo split-screen, zoom del navegador, y accesibilidad (tamaños de fuente mayores).
            </p>

            <div className="callout">
              Responsive no es solo “reordenar columnas”. Es:
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Legibilidad</strong>: anchura de texto razonable y tipografías adaptables.</li>
                <li><strong>Navegación</strong>: menús accesibles en móvil (sin depender de hover).</li>
                <li><strong>Interacción</strong>: targets táctiles y estados de foco visibles.</li>
                <li><strong>Rendimiento</strong>: evitar layouts pesados cuando no hacen falta.</li>
                <li><strong>Accesibilidad</strong>: soporte para teclado, zoom y preferencias del usuario.</li>
              </ul>
            </div>

            <div className="callout warn">
              Un diseño “bonito” pero no usable en móvil es un diseño fallido.
              En proyectos reales, eso se traduce en abandono, errores y frustración.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 2) MOBILE FIRST ================= */}
      <section className="doc-section" id="mobile-first">
        <details className="dd" open>
          <summary>2) Mobile-first explicado (como lo hace un equipo profesional)</summary>
          <div className="dd-body">
            <p>
              Mobile-first significa que escribes tu CSS en este orden mental:
            </p>

            <div className="card">
              <h3 style={{ marginTop: 0 }}>✅ Orden profesional</h3>
              <ol style={{ marginBottom: 0 }}>
                <li>
                  <strong>Base</strong>: estilo mínimo para móvil (1 columna, tipografía legible, botones grandes).
                </li>
                <li>
                  <strong>Mejoras</strong>: a partir de ciertos anchos, mejoras layout (2 columnas, sidebar, más espacio).
                </li>
                <li>
                  <strong>Refinamiento</strong>: en grandes pantallas, limitas anchuras, mejoras densidad y composición.
                </li>
              </ol>
            </div>

            <div className="callout tip">
              🧩 Ventaja: el CSS base es pequeño y robusto. Las pantallas grandes reciben “capas de mejora”.
            </div>

            <details className="dd dd-nested" open>
              <summary>Ejemplo mental: una página de contenido</summary>
              <div className="dd-body">
                <ul>
                  <li><strong>Móvil</strong>: nav simple, contenido en una columna, cards apiladas.</li>
                  <li><strong>Tablet</strong>: 2 columnas en listados, nav con más espacio.</li>
                  <li><strong>Escritorio</strong>: layout con sidebar + contenido y max-width para no estirar el texto.</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 3) MEDIA QUERIES ================= */}
      <section className="doc-section" id="media-queries">
        <details className="dd" open>
          <summary>3) Media queries: sintaxis + buenas prácticas</summary>
          <div className="dd-body">
            <p>
              Las media queries te permiten aplicar CSS solo cuando se cumple una condición
              (ancho, orientación, preferencias de movimiento, contraste, etc.).
              En mobile-first, lo común es usar <code>min-width</code>.
            </p>

            <pre>
              <code>{`/* BASE (móvil): sin media query */
.page{
  padding: 1rem;
}

/* Mejora en pantallas medianas */
@media (min-width: 768px){
  .page{
    padding: 2rem;
  }
}

/* Mejora en pantallas grandes */
@media (min-width: 1024px){
  .page{
    padding: 2.5rem;
  }
}`}</code>
            </pre>

            <div className="callout tip">
              ✅ Mobile-first: base sin MQ + mejoras con <code>min-width</code>.
              <br />
              ⚠️ Evita mezclar min y max sin un sistema claro (se vuelve difícil de mantener).
            </div>

            <details className="dd dd-nested" open>
              <summary>Media queries que también son “responsive” (no solo width)</summary>
              <div className="dd-body">
                <div className="table-wrap" role="region" aria-label="Media queries útiles" tabIndex={0}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Media feature</th>
                        <th>Para qué sirve</th>
                        <th>Ejemplo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>(min-width)</code></td>
                        <td>Mejoras por tamaño</td>
                        <td><code>@media (min-width: 768px)</code></td>
                      </tr>
                      <tr>
                        <td><code>(orientation)</code></td>
                        <td>Retrato/paisaje</td>
                        <td><code>@media (orientation: landscape)</code></td>
                      </tr>
                      <tr>
                        <td><code>(prefers-reduced-motion)</code></td>
                        <td>Reducir animaciones</td>
                        <td><code>@media (prefers-reduced-motion: reduce)</code></td>
                      </tr>
                      <tr>
                        <td><code>(prefers-color-scheme)</code></td>
                        <td>Modo oscuro/claro</td>
                        <td><code>@media (prefers-color-scheme: dark)</code></td>
                      </tr>
                      <tr>
                        <td><code>(hover)</code> / <code>(pointer)</code></td>
                        <td>Detectar hover/puntero</td>
                        <td><code>@media (hover: hover)</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="callout">
                  Idea pro: <strong>no diseñes interacciones solo para hover</strong>.
                  En táctil, no existe hover real. Usa <code>:focus-visible</code> y click.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 4) BREAKPOINTS POR CONTENIDO ================= */}
      <section className="doc-section" id="breakpoints">
        <details className="dd" open>
          <summary>4) Breakpoints por contenido (el criterio correcto)</summary>
          <div className="dd-body">
            <p>
              Un breakpoint se añade cuando <strong>el contenido lo pide</strong>.
              Ejemplos típicos:
            </p>

            <ul>
              <li>El texto se vuelve demasiado ancho → necesitas <code>max-width</code>.</li>
              <li>Una lista de cards queda “apretada” → pasas a 2 columnas.</li>
              <li>La navegación ya no cabe → cambias patrón (hamburguesa → menú horizontal).</li>
            </ul>

            <div className="callout tip">
              Un sistema muy común:
              <strong> 520 / 768 / 1024 / 1280</strong> como puntos de mejora,
              pero siempre ajustados por tu contenido.
            </div>

            <pre>
              <code>{`/* Base */
.grid-cards{
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Cuando haya hueco, 2 columnas */
@media (min-width: 768px){
  .grid-cards{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* En grande, 3 columnas */
@media (min-width: 1024px){
  .grid-cards{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}`}</code>
            </pre>
          </div>
        </details>
      </section>

      {/* ================= 5) LAYOUT FLUIDO ================= */}
      <section className="doc-section" id="layout-fluido">
        <details className="dd" open>
          <summary>5) Layout fluido: min(), max(), clamp() y minmax()</summary>
          <div className="dd-body">
            <p>
              La responsividad moderna no es solo “saltos” por breakpoints.
              También es <strong>fluidez</strong>: que el diseño se adapte de forma suave.
            </p>

            <details className="dd dd-nested" open>
              <summary>clamp(): tipografía fluida (muy pro)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Tamaño de texto: mínimo 16px, ideal 2.2vw, máximo 20px */
p{
  font-size: clamp(16px, 2.2vw, 20px);
}

/* Títulos: mínimo 28px, ideal 4vw, máximo 44px */
h1{
  font-size: clamp(28px, 4vw, 44px);
}`}</code>
                </pre>

                <div className="callout tip">
                  <code>clamp(min, ideal, max)</code> evita textos gigantes en pantallas enormes
                  y evita textos minúsculos en pantallas pequeñas.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>minmax(): columnas que no se rompen</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.cards{
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}`}</code>
                </pre>

                <div className="callout">
                  Este patrón genera columnas automáticas:
                  <ul style={{ marginBottom: 0 }}>
                    <li>cada card nunca baja de 220px</li>
                    <li>si hay espacio, se reparten con <code>1fr</code></li>
                    <li>se adapta sin media queries en muchos casos</li>
                  </ul>
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>max-width: la regla que separa amateur de pro</summary>
              <div className="dd-body">
                <p>
                  En escritorio grande, el error típico es dejar el texto ocupar todo el ancho.
                  Eso mata la legibilidad. En contenido, suele funcionar:
                  <strong> 60–75 caracteres por línea</strong> aprox.
                </p>

                <pre>
                  <code>{`.prose{
  max-width: 70ch; /* ch = ancho aproximado de “0” */
  margin-inline: auto;
}`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 6) USABILIDAD MULTIDISPOSITIVO ================= */}
      <section className="doc-section" id="tactil-teclado">
        <details className="dd" open>
          <summary>6) Usabilidad: táctil, ratón y teclado (responsive de verdad)</summary>
          <div className="dd-body">
            <p>
              Responsive también significa <strong>método de entrada</strong>:
              el usuario puede usar ratón, teclado o dedos.
            </p>

            <div className="table-wrap" role="region" aria-label="Usabilidad por input" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Input</th>
                    <th>Qué necesitas garantizar</th>
                    <th>CSS clave</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>👆 Táctil</td>
                    <td>Targets grandes, espacio entre controles</td>
                    <td><code>min-height</code>, padding, gap</td>
                  </tr>
                  <tr>
                    <td>⌨️ Teclado</td>
                    <td>Orden de tab lógico + foco visible</td>
                    <td><code>:focus-visible</code></td>
                  </tr>
                  <tr>
                    <td>🖱 Ratón</td>
                    <td>Hover opcional (no obligatorio)</td>
                    <td><code>:hover</code> + fallback</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <details className="dd dd-nested" open>
              <summary>Targets táctiles (44px) + foco visible (obligatorio)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Botones y links “tocables” */
.btn, .topnav-link, .menu a{
  min-height: 44px;
  padding: .6rem 1rem;
}

/* Foco visible universal */
:where(a, button, input, select, textarea, summary):focus{
  outline: none;
}

:where(a, button, input, select, textarea, summary):focus-visible{
  outline: 3px solid rgba(17, 24, 39, .9);
  outline-offset: 3px;
  border-radius: .6rem;
}`}</code>
                </pre>

                <div className="callout tip">
                  Esto mejora la UX en teclado sin “ensuciar” en ratón.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Hover solo cuando existe hover (pro)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`@media (hover: hover) and (pointer: fine){
  .btn:hover{ transform: translateY(-1px); }
}`}</code>
                </pre>

                <div className="callout">
                  En táctil no necesitas hover. Este patrón evita efectos raros en móvil.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Reduce motion (accesibilidad)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`@media (prefers-reduced-motion: reduce){
  *{
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 7) PATRONES RESPONSIVE ================= */}
      <section className="doc-section" id="patrones">
        <details className="dd" open>
          <summary>7) Patrones responsive que usarás siempre</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>Patrón A: contenedor centrado (wrap) + padding seguro</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.wrap{
  width: min(1120px, calc(100% - 2rem));
  margin-inline: auto;
}`}</code>
                </pre>

                <div className="callout tip">
                  <code>calc(100% - 2rem)</code> asegura margen lateral incluso en pantallas pequeñas.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Patrón B: dos columnas que se apilan (layout típico)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.two-columns{
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 900px){
  .two-columns{
    grid-template-columns: 320px 1fr;
    align-items: start;
  }
}`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Patrón C: imágenes responsivas sin deformarse</summary>
              <div className="dd-body">
                <pre>
                  <code>{`img{
  max-width: 100%;
  height: auto;
  display: block;
}`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Patrón D: tabla con scroll horizontal (sin romper layout)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.table-wrap{
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 8) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>8) Errores comunes y depuración (lo que te pasará sí o sí)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Texto demasiado ancho</strong> en desktop → usa <code>max-width: 70ch</code>.
              </li>
              <li>
                <strong>Cards se desbordan</strong> en grid → usa <code>minmax(0, 1fr)</code> en columnas.
              </li>
              <li>
                <strong>Menús basados en hover</strong> → en móvil fallan → usa click/focus-within.
              </li>
              <li>
                <strong>Media queries “incoherentes”</strong> → define un sistema de breakpoints estable.
              </li>
              <li>
                <strong>Quitar el outline</strong> → mata accesibilidad → usa <code>:focus-visible</code>.
              </li>
            </ul>

            <div className="callout tip">
              Herramienta pro: en DevTools, activa “Responsive mode” y prueba:
              <strong> 320px, 375px, 768px, 1024px, 1280px</strong> + zoom 200%.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 9) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>9) Retos prácticos (para dominar mobile-first)</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1: convierte un listado en grid responsive sin media queries</summary>
              <div className="dd-body">
                <p>
                  Crea una clase <code>.cards</code> que muestre 1 columna en móvil y tantas columnas
                  como quepan en pantallas grandes usando <code>auto-fit</code> + <code>minmax</code>.
                </p>
                <pre>
                  <code>{`.cards{
  display:grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>🟡 Reto 2: crea un layout 2 columnas que se apile en móvil</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.layout{
  display:grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 900px){
  .layout{
    grid-template-columns: 280px 1fr;
  }
}`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>🔴 Reto 3: tipografía fluida con clamp (sin romper accesibilidad)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`h1{ font-size: clamp(28px, 4vw, 44px); }
p{ font-size: clamp(16px, 2.2vw, 20px); }`}</code>
                </pre>
              </div>
            </details>

            <div className="callout tip">
              Si resuelves los 3 retos, ya entiendes responsive como un profesional.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 10) TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>10) Test final (con feedback)</summary>
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
                      🏆 <strong>Excelente.</strong> Ya entiendes mobile-first y media queries con criterio profesional.
                    </>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>
                      🎯 <strong>Muy bien.</strong> Refuerza el criterio de breakpoints por contenido y la usabilidad táctil.
                    </>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>
                      📚 <strong>Buen progreso.</strong> Revisa clamp/minmax y foco visible (son la base de lo pro).
                    </>
                  )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Aún no.</strong> Vuelve a: mobile-first (min-width), targets táctiles y foco visible.
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
          ✅ Resumen:
          <br />
          Mobile-first + media queries no es una “técnica”, es un <strong>método</strong>:
          base robusta para móvil + mejoras por contenido + usabilidad para ratón/teclado/táctil.
        </div>

        <div className="doc-next">
          <a href="#" className="btn btn-primary">
            Siguiente lección → Layout responsive (Grid/Flex + patrones)
          </a>
        </div>
      </section>
    </main>
  );
}
