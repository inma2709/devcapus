/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";

export default function V32_Overlays_Ligeros() {
  useEffect(() => {
    document.title =
      "V32 · Tooltips, Popovers y Dropdowns: overlays ligeros, accesibles y profesionales";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Cuál es la principal diferencia entre un tooltip y un popover?",
        options: [
          "El tooltip puede tener botones y el popover no",
          "El popover puede contener contenido interactivo y el tooltip no",
          "El tooltip es más grande",
          "No hay diferencia real",
        ],
        correct: "El popover puede contener contenido interactivo y el tooltip no",
        why:
          "El tooltip es informativo y no interactivo; el popover sí puede incluir enlaces, botones o formularios.",
      },
      {
        id: "q2",
        q: "¿Qué patrón de accesibilidad es correcto para un tooltip?",
        options: [
          "Mostrarlo solo con hover",
          "Asociarlo con aria-describedby y activarlo también con foco",
          "Usar role=button",
          "Hacerlo clicable",
        ],
        correct: "Asociarlo con aria-describedby y activarlo también con foco",
        why:
          "Un tooltip accesible debe mostrarse también al foco (no solo hover) y vincularse con aria-describedby.",
      },
      {
        id: "q3",
        q: "¿Cuál es el comportamiento esperado de un dropdown accesible?",
        options: [
          "Abrirse solo con hover",
          "Abrirse con click o teclado y cerrarse con Esc",
          "Nunca cerrarse automáticamente",
          "Bloquear el foco fuera",
        ],
        correct: "Abrirse con click o teclado y cerrarse con Esc",
        why:
          "Dropdowns deben funcionar con teclado (Enter/Espacio) y cerrarse con Esc.",
      },
      {
        id: "q4",
        q: "¿Qué error es común al crear tooltips?",
        options: [
          "Usar position:absolute",
          "No permitir que el usuario con teclado pueda activarlo",
          "Usar z-index",
          "Añadir sombra",
        ],
        correct: "No permitir que el usuario con teclado pueda activarlo",
        why:
          "Si solo aparece con hover, el usuario de teclado nunca lo verá.",
      },
      {
        id: "q5",
        q: "¿Cuándo deberías usar un modal en vez de un popover?",
        options: [
          "Cuando necesitas una acción crítica que interrumpe el flujo",
          "Cuando quieres mostrar un tooltip pequeño",
          "Cuando el contenido es mínimo",
          "Nunca",
        ],
        correct: "Cuando necesitas una acción crítica que interrumpe el flujo",
        why:
          "Modales son para interrupciones importantes; popovers son ligeros y no bloqueantes.",
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
        <p className="doc-kicker">V32 · Componentes UI</p>
        <h1>Tooltips, Popovers y Dropdowns: overlays ligeros y usabilidad real</h1>

        <p className="doc-lead">
          No todos los elementos flotantes son modales. Existen overlays más ligeros
          que enriquecen la experiencia sin bloquear la interfaz. Aquí aprenderás a
          distinguirlos, implementarlos correctamente y hacerlos accesibles.
        </p>

        <div className="callout tip">
          🎯 Objetivos:
          <ul style={{ marginBottom: 0 }}>
            <li>Diferenciar tooltip, popover y dropdown.</li>
            <li>Entender cuándo usar cada uno.</li>
            <li>Aplicar accesibilidad real (teclado, foco, táctil).</li>
            <li>Evitar patrones anti-UX.</li>
          </ul>
        </div>

        <nav className="doc-index">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#conceptos">1) Qué es cada componente</a></li>
            <li><a href="#tooltip">2) Tooltip accesible</a></li>
            <li><a href="#popover">3) Popover interactivo</a></li>
            <li><a href="#dropdown">4) Dropdown (menú desplegable)</a></li>
            <li><a href="#comparativa">5) Comparativa y criterios</a></li>
            <li><a href="#errores">6) Errores comunes</a></li>
            <li><a href="#test">7) Test final</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= CONCEPTOS ================= */}
      <section className="doc-section" id="conceptos">
        <details className="dd" open>
          <summary>1) Qué es cada componente (desde cero)</summary>
          <div className="dd-body">
            <div className="callout">
              🔹 Tooltip → ayuda breve, no interactiva.
              <br />
              🔹 Popover → contenedor flotante con contenido interactivo.
              <br />
              🔹 Dropdown → menú desplegable asociado a un botón.
            </div>

            <p>
              Todos son overlays, pero su intención es distinta. Confundirlos
              genera mala experiencia.
            </p>
          </div>
        </details>
      </section>

      {/* ================= TOOLTIP ================= */}
      <section className="doc-section" id="tooltip">
        <details className="dd" open>
          <summary>2) Tooltip accesible (informativo)</summary>
          <div className="dd-body">
            <p>
              Un tooltip es una pequeña ayuda contextual. No debe contener botones
              ni enlaces.
            </p>

            <pre>
              <code>{`<button aria-describedby="tip1" class="btn">
  ℹ
</button>
<span role="tooltip" id="tip1" class="tooltip">
  Información adicional
</span>`}</code>
            </pre>

            <pre>
              <code>{`.tooltip{
  position:absolute;
  background:#111;
  color:#fff;
  padding:.4rem .6rem;
  border-radius:.5rem;
  font-size:.85rem;
  opacity:0;
  pointer-events:none;
  transition:.2s;
}

button:hover + .tooltip,
button:focus + .tooltip{
  opacity:1;
}`}</code>
            </pre>

            <div className="callout tip">
              Importante: debe activarse también con <strong>focus</strong>, no solo hover.
            </div>
          </div>
        </details>
      </section>

      {/* ================= POPOVER ================= */}
      <section className="doc-section" id="popover">
        <details className="dd" open>
          <summary>3) Popover interactivo</summary>
          <div className="dd-body">
            <p>
              Un popover permite interacción (botones, enlaces, formularios).
              No bloquea el fondo como un modal.
            </p>

            <pre>
              <code>{`<button aria-expanded="false" aria-controls="pop1" class="btn">
  Opciones
</button>

<div id="pop1" class="popover" hidden>
  <a href="#">Editar</a>
  <a href="#">Duplicar</a>
  <a href="#">Eliminar</a>
</div>`}</code>
            </pre>

            <pre>
              <code>{`.popover{
  position:absolute;
  background:#fff;
  border:1px solid rgba(0,0,0,.15);
  border-radius:.75rem;
  padding:.5rem;
  box-shadow:0 12px 40px rgba(0,0,0,.2);
}`}</code>
            </pre>

            <div className="callout warn">
              Debe cerrarse con Esc y al hacer click fuera.
            </div>
          </div>
        </details>
      </section>

      {/* ================= DROPDOWN ================= */}
      <section className="doc-section" id="dropdown">
        <details className="dd" open>
          <summary>4) Dropdown (menú desplegable)</summary>
          <div className="dd-body">
            <p>
              Un dropdown es un menú asociado a un botón. Muy usado en navegación.
            </p>

            <pre>
              <code>{`<div class="dropdown">
  <button class="btn" aria-expanded="false">
    Perfil ▼
  </button>
  <ul class="menu">
    <li><a href="#">Cuenta</a></li>
    <li><a href="#">Configuración</a></li>
    <li><a href="#">Salir</a></li>
  </ul>
</div>`}</code>
            </pre>

            <pre>
              <code>{`.menu{
  position:absolute;
  background:#fff;
  border:1px solid rgba(0,0,0,.15);
  border-radius:.75rem;
  padding:.5rem 0;
  list-style:none;
  margin:0;
  display:none;
}

.dropdown:hover .menu,
.dropdown:focus-within .menu{
  display:block;
}`}</code>
            </pre>

            <div className="callout tip">
              En producción, mejor controlarlo con JS para manejar teclado y Esc.
            </div>
          </div>
        </details>
      </section>

      {/* ================= COMPARATIVA ================= */}
      <section className="doc-section" id="comparativa">
        <details className="dd" open>
          <summary>5) Comparativa profesional</summary>
          <div className="dd-body">
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Interactivo</th>
                    <th>Bloquea fondo</th>
                    <th>Uso típico</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tooltip</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Ayuda contextual</td>
                  </tr>
                  <tr>
                    <td>Popover</td>
                    <td>Sí</td>
                    <td>No</td>
                    <td>Opciones rápidas</td>
                  </tr>
                  <tr>
                    <td>Dropdown</td>
                    <td>Sí</td>
                    <td>No</td>
                    <td>Menú navegación</td>
                  </tr>
                  <tr>
                    <td>Modal</td>
                    <td>Sí</td>
                    <td>Sí</td>
                    <td>Acción crítica</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      {/* ================= ERRORES ================= */}
      <section className="doc-section" id="errores">
        <details className="dd" open>
          <summary>6) Errores comunes</summary>
          <div className="dd-body">
            <ul>
              <li>Mostrar tooltips solo con hover.</li>
              <li>Dropdowns que no funcionan con teclado.</li>
              <li>Popovers que no se pueden cerrar.</li>
              <li>Usar modal cuando bastaba un popover.</li>
            </ul>
          </div>
        </details>
      </section>

      {/* ================= TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>7) Test final</summary>
          <div className="dd-body">
            <form onSubmit={submit}>
              {questions.map((q, i) => {
                const picked = answers[q.id];
                const ok = submitted && picked === q.correct;
                const bad = submitted && picked && picked !== q.correct;

                return (
                  <div className="card" key={q.id} style={{ marginTop: "1rem" }}>
                    <h3>{i + 1}. {q.q}</h3>
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
                        {opt}
                      </label>
                    ))}

                    {submitted && (
                      <div className={`callout ${ok ? "tip" : "warn"}`}>
                        {ok ? `✅ ${q.why}` : `❌ Correcta: ${q.correct}. ${q.why}`}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="doc-next">
                {!submitted ? (
                  <button className="btn btn-primary">Corregir</button>
                ) : (
                  <>
                    <div className="badge">
                      Resultado: {score}/{questions.length}
                    </div>
                    <button className="btn" type="button" onClick={reset}>
                      Reintentar
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="callout tip">
          ✅ Si sabes cuándo usar cada overlay, ya estás diseñando como profesional.
        </div>

     
      </section>
    </main>
  );
}
