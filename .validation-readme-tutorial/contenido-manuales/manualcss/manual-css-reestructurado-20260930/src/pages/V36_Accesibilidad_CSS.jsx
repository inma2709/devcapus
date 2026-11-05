import { useEffect, useMemo, useState } from "react";

/**
 * R03 · Accesibilidad en CSS (PRO)
 * - Teclado: foco visible, orden, skip link
 * - Ratón vs táctil: targets, hover media features
 * - Lectores de pantalla: nombres accesibles, aria-current, aria-live
 * - Preferencias del usuario: reduced-motion, color-scheme, contrast
 * - Formularios y errores: invalid, required, mensajes
 * - Patrones UI: menus, modales, tabs (qué exige A11y)
 *
 * ✅ Listo para copiar/pegar en tu manual
 */
export default function V36_Accesibilidad_CSS() {
  useEffect(() => {
    document.title =
      "V36 · Accesibilidad en CSS: teclado, foco, táctil y preferencias del usuario";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué pseudo-clase es la recomendada para mostrar foco solo cuando realmente es necesario?",
        options: [":focus", ":active", ":focus-visible", ":hover"],
        correct: ":focus-visible",
        why:
          ":focus-visible muestra el foco cuando el navegador detecta navegación por teclado (o similar), evitando 'foco molesto' al hacer click.",
      },
      {
        id: "q2",
        q: "¿Cuál es un tamaño mínimo recomendado para targets táctiles (aprox.)?",
        options: ["16px", "24px", "44px", "80px"],
        correct: "44px",
        why:
          "Un target alrededor de 44px mejora la precisión en pantallas táctiles y reduce errores.",
      },
      {
        id: "q3",
        q: "¿Qué patrón evita que el contenido principal quede inaccesible por teclado al cargar una página?",
        options: [
          "Quitar outline",
          "Usar un skip link al contenido",
          "Poner todo en divs",
          "Usar position:absolute",
        ],
        correct: "Usar un skip link al contenido",
        why:
          "El skip link permite saltar navegación repetitiva y llegar al contenido principal rápidamente.",
      },
      {
        id: "q4",
        q: "¿Qué media query respeta la preferencia del usuario de reducir animaciones?",
        options: [
          "(prefers-color-scheme: dark)",
          "(prefers-reduced-motion: reduce)",
          "(hover: hover)",
          "(pointer: fine)",
        ],
        correct: "(prefers-reduced-motion: reduce)",
        why:
          "Reduce motion es una preferencia del sistema: se debe respetar en transiciones/animaciones/scroll.",
      },
      {
        id: "q5",
        q: "En navegación, ¿qué atributo es ideal para marcar el enlace de la página actual?",
        options: ["aria-live", "aria-current", "aria-pressed", "role=dialog"],
        correct: "aria-current",
        why:
          'aria-current="page" comunica a tecnologías de asistencia cuál es la página actual.',
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
        <p className="doc-kicker">Responsive · R03</p>
        <h1>Accesibilidad PRO en CSS: teclado, foco, táctil y preferencias del usuario</h1>

        <p className="doc-lead">
          La accesibilidad no es “un extra”. Es la base de un producto usable: que una interfaz
          se pueda utilizar con <strong>ratón</strong>, <strong>teclado</strong>,{" "}
          <strong>táctil</strong> y tecnologías de asistencia. En esta lección vas a aprender
          qué reglas aplicar en CSS para que tu UI sea <strong>robusta</strong> y{" "}
          <strong>profesional</strong>.
        </p>

        <div className="callout tip">
          🎯 Objetivo: que puedas revisar cualquier pantalla y detectar “fallos típicos” de accesibilidad en 2 minutos.
        </div>

        <div className="callout warn">
          Regla de oro: <strong>no elimines el outline</strong> sin reemplazarlo por un foco visible mejor.
        </div>

        <nav className="doc-index" aria-label="Índice de accesibilidad">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#que-es-a11y">1) Qué es accesibilidad (A11y) en UI real</a></li>
            <li><a href="#teclado">2) Teclado: foco visible, orden y skip link</a></li>
            <li><a href="#tactil-raton">3) Táctil vs ratón: targets, hover y pointer</a></li>
            <li><a href="#color-contraste">4) Contraste, estados y legibilidad</a></li>
            <li><a href="#preferencias">5) Preferencias del usuario: reduced-motion, scheme</a></li>
            <li><a href="#navegacion">6) Navegación accesible: active, aria-current, breadcrumbs</a></li>
            <li><a href="#formularios">7) Formularios: labels, errores, :invalid y feedback</a></li>
            <li><a href="#patrones">8) Patrones UI: menús, dropdowns, modales (qué exige A11y)</a></li>
            <li><a href="#checklist">9) Checklist PRO (auditoría rápida)</a></li>
            <li><a href="#test">10) Test final</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= 1) QUÉ ES A11Y ================= */}
      <section className="doc-section" id="que-es-a11y">
        <details className="dd" open>
          <summary>1) Qué es accesibilidad (A11y) en una interfaz real</summary>
          <div className="dd-body">
            <p>
              Accesibilidad (A11y) significa que tu interfaz funciona para el mayor número de personas,
              incluyendo usuarios con baja visión, daltonismo, movilidad reducida, uso exclusivo de teclado,
              lectores de pantalla, o simplemente contextos difíciles: sol en móvil, pantalla pequeña, manos ocupadas.
            </p>

            <div className="callout">
              En CSS, accesibilidad se traduce en:
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Foco visible</strong> y navegación por teclado coherente.</li>
                <li><strong>Contraste</strong> suficiente y estados claros (hover/focus/active/disabled).</li>
                <li><strong>Targets táctiles</strong> cómodos (tamaño y separación).</li>
                <li><strong>Preferencias del usuario</strong> respetadas (reduced motion, color scheme).</li>
                <li><strong>Layouts robustos</strong> que soportan zoom y fuentes grandes.</li>
              </ul>
            </div>

            <div className="callout tip">
              Accesibilidad no es “hacerlo feo”. Es hacerlo claro, predecible y usable.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 2) TECLADO ================= */}
      <section className="doc-section" id="teclado">
        <details className="dd" open>
          <summary>2) Teclado: foco visible, orden y skip link (obligatorio)</summary>
          <div className="dd-body">
            <p>
              Si alguien usa teclado, el foco es su “cursor”. Si el foco no se ve, está perdido.
              Tu CSS debe garantizar un foco visible consistente en enlaces, botones, inputs y elementos interactivos.
            </p>

            <details className="dd dd-nested" open>
              <summary>2.1 Foco visible con :focus-visible (patrón recomendado)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* 1) No quites el outline sin reemplazarlo */
:where(a, button, input, select, textarea, summary, [tabindex]):focus{
  outline: none;
}

/* 2) Foco visible solo cuando toca */
:where(a, button, input, select, textarea, summary, [tabindex]):focus-visible{
  outline: 3px solid rgba(17, 24, 39, .9);
  outline-offset: 3px;
  border-radius: .75rem;
}`}</code>
                </pre>

                <div className="callout tip">
                  Este patrón evita el foco “molesto” al hacer click, pero lo muestra en teclado.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>2.2 Skip link: saltar al contenido</summary>
              <div className="dd-body">
                <p>
                  En páginas con navegación larga (tu manual), el skip link permite saltar directamente al contenido.
                  Es simple y mejora muchísimo la experiencia.
                </p>

                <pre>
                  <code>{`<!-- HTML: al inicio del body o main -->
<a class="skip-link" href="#contenido-real">Saltar al contenido</a>`}</code>
                </pre>

                <pre>
                  <code>{`/* CSS: visible solo al enfocarlo */
.skip-link{
  position: absolute;
  top: 12px;
  left: 12px;
  padding: .6rem .9rem;
  border-radius: .75rem;
  transform: translateY(-140%);
  transition: transform .2s ease;
  z-index: 9999;
}

.skip-link:focus,
.skip-link:focus-visible{
  transform: translateY(0);
}`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>2.3 Orden de tabulación y errores típicos</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    ✅ Orden natural del DOM: el tab sigue el orden del HTML. Evita “reordenar visualmente” sin razón.
                  </li>
                  <li>
                    ❌ <code>tabindex</code> positivos (1,2,3...) suelen crear caos. Úsalos solo con criterio muy avanzado.
                  </li>
                  <li>
                    ❌ Elementos clicables que no son interactivos (div con onClick) → mala accesibilidad.
                  </li>
                </ul>

                <div className="callout warn">
                  Si un elemento parece botón, debe ser <code>&lt;button&gt;</code>.
                  Si navega, debe ser <code>&lt;a&gt;</code>. Semántica = accesibilidad.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 3) TÁCTIL VS RATÓN ================= */}
      <section className="doc-section" id="tactil-raton">
        <details className="dd" open>
          <summary>3) Táctil vs ratón: targets, hover y pointer (responsivo real)</summary>
          <div className="dd-body">
            <p>
              En móvil no hay hover real. Diseñar interacciones basadas en hover rompe la usabilidad.
              Lo correcto es: click/tap como base, hover como mejora.
            </p>

            <details className="dd dd-nested" open>
              <summary>3.1 Targets táctiles: tamaño y separación</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Mínimo tocable para controles */
:where(a, button, .btn, .topnav-link, .sidelink){
  min-height: 44px;
  padding: .6rem 1rem;
}

/* Evita botones pegados: usa gap */
.actions{
  display: flex;
  gap: .75rem;
  flex-wrap: wrap;
}`}</code>
                </pre>

                <div className="callout tip">
                  Aunque el botón sea pequeño visualmente, puedes ampliar su “hit area” con padding.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>3.2 Hover solo cuando existe hover (patrón pro)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`@media (hover: hover) and (pointer: fine){
  .btn:hover{
    transform: translateY(-1px);
  }
}`}</code>
                </pre>

                <div className="callout">
                  <code>(hover: hover)</code> aplica estilos hover solo en dispositivos con hover real (ratón/trackpad).
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>3.3 Estados de interacción mínimos (lo que siempre debe existir)</summary>
              <div className="dd-body">
                <ul>
                  <li><strong>Default</strong>: claro y legible.</li>
                  <li><strong>Hover</strong>: opcional (solo si hay hover).</li>
                  <li><strong>Focus-visible</strong>: obligatorio.</li>
                  <li><strong>Active</strong>: feedback al pulsar (táctil).</li>
                  <li><strong>Disabled</strong>: no interactivo y comprensible.</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 4) CONTRASTE ================= */}
      <section className="doc-section" id="color-contraste">
        <details className="dd" open>
          <summary>4) Contraste, estados y legibilidad (sin “solo color”)</summary>
          <div className="dd-body">
            <p>
              Un error común: indicar estados solo con color (“verde = ok, rojo = error”).
              Eso falla con daltonismo, baja visión o pantallas malas.
              Siempre añade una señal adicional: icono, texto, forma, subrayado, etc.
            </p>

            <div className="callout tip">
              ✅ Para links: el subrayado sigue siendo una herramienta accesible.
              Puedes personalizarlo con <code>text-underline-offset</code>.
            </div>

            <pre>
              <code>{`a{
  text-decoration-thickness: 2px;
  text-underline-offset: .18em;
}

a:hover{
  text-decoration-thickness: 3px;
}`}</code>
            </pre>

            <details className="dd dd-nested" open>
              <summary>Estados accesibles: error/éxito con forma y texto</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Ejemplo de “estado” visual no basado solo en color */
.field{
  border: 1px solid rgba(0,0,0,.18);
  border-radius: .75rem;
  padding: .7rem .8rem;
}

.field.is-invalid{
  border-width: 2px;
}

.field.is-valid{
  border-width: 2px;
}

.helper{
  font-size: .92rem;
  margin-top: .35rem;
}`}</code>
                </pre>

                <div className="callout">
                  El color ayuda, pero el grosor de borde, iconos y el texto de ayuda hacen el estado inequívoco.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 5) PREFERENCIAS ================= */}
      <section className="doc-section" id="preferencias">
        <details className="dd" open>
          <summary>5) Preferencias del usuario: reduced-motion, scheme, (y más)</summary>
          <div className="dd-body">
            <p>
              Parte de la accesibilidad moderna es respetar preferencias del sistema:
              personas con mareos por animaciones, usuarios de modo oscuro, etc.
            </p>

            <details className="dd dd-nested" open>
              <summary>5.1 Reduced motion (obligatorio si animas)</summary>
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

                <div className="callout warn">
                  Si usas scroll suave o animaciones, este bloque es “responsabilidad profesional”.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>5.2 Dark mode (si tu manual lo soporta)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`@media (prefers-color-scheme: dark){
  /* Ajusta tokens/variables si tu sistema lo permite */
}`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>5.3 “Más contraste” (cuando exista en el entorno)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`@media (prefers-contrast: more){
  :where(a, button, input, select, textarea):focus-visible{
    outline-width: 4px;
  }
}`}</code>
                </pre>

                <div className="callout tip">
                  No todos los navegadores lo soportan igual, pero es un plus cuando está disponible.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 6) NAVEGACIÓN ================= */}
      <section className="doc-section" id="navegacion">
        <details className="dd" open>
          <summary>6) Navegación accesible: active, aria-current y migas</summary>
          <div className="dd-body">
            <p>
              En navegación, la accesibilidad se apoya en dos ideas:
              <strong> el usuario siempre sabe dónde está</strong> y puede moverse sin perderse.
            </p>

            <details className="dd dd-nested" open>
              <summary>6.1 Marcar página actual: aria-current="page"</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<a class="topnav-link" href="/responsive" aria-current="page">
  Responsive
</a>`}</code>
                </pre>

                <pre>
                  <code>{`/* Estilo del enlace activo */
.topnav-link[aria-current="page"]{
  font-weight: 800;
}`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>6.2 Migas de pan (breadcrumbs): semántica y claridad</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<nav aria-label="Migas de pan" class="breadcrumbs">
  <ol>
    <li><a href="/">Inicio</a></li>
    <li><a href="/responsive">Responsive</a></li>
    <li aria-current="page">Accesibilidad</li>
  </ol>
</nav>`}</code>
                </pre>

                <pre>
                  <code>{`.breadcrumbs ol{
  list-style: none;
  display: flex;
  gap: .5rem;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.breadcrumbs li + li::before{
  content: "›";
  opacity: .6;
  margin-right: .5rem;
}`}</code>
                </pre>

                <div className="callout tip">
                  Nota: el último elemento suele ser texto (no link) y lleva <code>aria-current="page"</code>.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 7) FORMULARIOS ================= */}
      <section className="doc-section" id="formularios">
        <details className="dd" open>
          <summary>7) Formularios: labels, errores y estados (:invalid) sin perder accesibilidad</summary>
          <div className="dd-body">
            <p>
              En formularios, lo más accesible es lo más simple:
              label claro, campo con foco visible y errores que se entienden.
            </p>

            <details className="dd dd-nested" open>
              <summary>7.1 Estados con :invalid y :required (solo como mejora)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Cuidado: :invalid puede marcar campos vacíos. Úsalo con criterio */
input:required{
  border-width: 2px;
}

/* Mejor si solo marcas invalid cuando el usuario interactuó (clase is-invalid desde JS) */
.is-invalid input{
  border-width: 2px;
}`}</code>
                </pre>

                <div className="callout warn">
                  Solo con CSS no siempre puedes saber “si el usuario ya intentó enviar”.
                  Lo profesional suele combinar CSS + una clase desde JS (o lógica del framework).
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>7.2 Mensajes de error accesibles (concepto)</summary>
              <div className="dd-body">
                <p>
                  Para lectores de pantalla, el error debe estar asociado al input
                  (normalmente con <code>aria-describedby</code>) y anunciado (a veces con <code>aria-live</code>).
                </p>

                <div className="callout tip">
                  Esto se trabaja con HTML/ARIA, pero tu CSS debe asegurar que el mensaje es visible,
                  cercano al campo y no depende solo del color.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 8) PATRONES UI ================= */}
      <section className="doc-section" id="patrones">
        <details className="dd" open>
          <summary>8) Patrones UI y accesibilidad: menús, dropdowns, modales (visión práctica)</summary>
          <div className="dd-body">
            <p>
              Los patrones interactivos “fallan” casi siempre por lo mismo:
              <strong> foco</strong>, <strong>teclado</strong> y <strong>estado visible</strong>.
            </p>

            <div className="table-wrap" role="region" aria-label="Patrones UI y accesibilidad" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Patrón</th>
                    <th>Qué exige A11y</th>
                    <th>CSS que ayuda</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dropdown / menú</td>
                    <td>Se abre con teclado, foco visible, estado claro</td>
                    <td><code>:focus-visible</code>, <code>:focus-within</code>, estados</td>
                  </tr>
                  <tr>
                    <td>Modal</td>
                    <td>Trap de foco, cerrar con ESC, bloquear scroll</td>
                    <td>Overlay visible, no depender de hover</td>
                  </tr>
                  <tr>
                    <td>Tabs</td>
                    <td>Teclas flecha, panel visible, roles ARIA</td>
                    <td>Estados, focus, selected</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout warn">
              CSS no puede “atrapar el foco” por sí solo (eso suele requerir JS).
              Pero CSS sí puede garantizar que el foco se vea y que los estados sean claros.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 9) CHECKLIST ================= */}
      <section className="doc-section" id="checklist">
        <details className="dd" open>
          <summary>9) Checklist PRO: auditoría rápida de accesibilidad (2 minutos)</summary>
          <div className="dd-body">
            <div className="card">
              <h3 style={{ marginTop: 0 }}>✅ Checklist</h3>
              <ul style={{ marginBottom: 0 }}>
                <li>¿Puedo navegar toda la página solo con TAB/ENTER/ESC?</li>
                <li>¿Veo el foco siempre? (usa :focus-visible)</li>
                <li>¿Los botones/links tienen hit area ≥ 44px?</li>
                <li>¿Los enlaces parecen enlaces (no solo color)?</li>
                <li>¿Errores y estados no dependen solo del color?</li>
                <li>¿Con zoom 200% sigue siendo usable?</li>
                <li>¿Se respeta reduced-motion si hay animaciones?</li>
                <li>¿La página actual se marca con aria-current?</li>
              </ul>
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
                      🏆 <strong>Excelente.</strong> Ya controlas las bases de accesibilidad aplicada en CSS.
                    </>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>
                      🎯 <strong>Muy bien.</strong> Refuerza: targets táctiles y criterio de estados no solo con color.
                    </>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>
                      📚 <strong>Buen progreso.</strong> Repite el checklist y prueba tu UI solo con teclado.
                    </>
                  )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Necesitas repasar.</strong> Vuelve a foco visible, skip link y reduced-motion.
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
          ✅ Conclusión:
          <br />
          En CSS, la accesibilidad se gana con <strong>foco visible</strong>,
          <strong>targets táctiles</strong>, <strong>contraste</strong> y
          <strong>preferencias respetadas</strong>. Es lo que separa una UI bonita de una UI profesional.
        </div>

       
      </section>
    </main>
  );
}
