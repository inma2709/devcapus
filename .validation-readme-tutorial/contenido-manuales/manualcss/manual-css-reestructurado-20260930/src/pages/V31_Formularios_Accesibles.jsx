import { useEffect, useMemo, useState } from "react";

export default function V31_Formularios_Accesibles() {
  useEffect(() => {
    document.title =
      "V31 · Formularios en HTML + CSS: accesibles, usables y profesionales (mouse/teclado/táctil)";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué es imprescindible para que un campo sea accesible (identificación del control)?",
        options: [
          "Que tenga placeholder",
          "Que tenga <label> asociado (for/id o envolviendo)",
          "Que tenga border",
          "Que tenga aria-hidden",
        ],
        correct: "Que tenga <label> asociado (for/id o envolviendo)",
        why:
          "El label es el nombre accesible del campo. El placeholder no sustituye un label.",
      },
      {
        id: "q2",
        q: "¿Cuál es el principal problema de usar placeholder como única etiqueta?",
        options: [
          "No se ve bonito",
          "Desaparece al escribir y puede no leerse bien; no es un nombre persistente",
          "No funciona en Safari",
          "Hace el input más alto",
        ],
        correct:
          "Desaparece al escribir y puede no leerse bien; no es un nombre persistente",
        why:
          "El placeholder es ayuda, no etiqueta. Al escribir se oculta y puede tener bajo contraste.",
      },
      {
        id: "q3",
        q: "¿Qué pseudo-clase es la recomendada para mostrar estilos de foco solo cuando procede?",
        options: [":focus", ":hover", ":focus-visible", ":active"],
        correct: ":focus-visible",
        why:
          ":focus-visible muestra el foco cuando la interacción es por teclado, evitando anillos de foco “molestos” con ratón.",
      },
      {
        id: "q4",
        q: "¿Qué atributo ayuda a conectar un mensaje de ayuda/errores con un input?",
        options: ["aria-help", "aria-describedby", "aria-label-only", "aria-note"],
        correct: "aria-describedby",
        why:
          "aria-describedby referencia el id de un texto auxiliar/errores para que el lector de pantalla lo lea junto al control.",
      },
      {
        id: "q5",
        q: "¿Cuál es un tamaño mínimo razonable para targets táctiles (botones, checkbox custom)?",
        options: ["16px", "24px", "44px", "64px"],
        correct: "44px",
        why:
          "44×44 px es una referencia común para objetivos táctiles cómodos (evita toques erróneos).",
      },
      {
        id: "q6",
        q: "¿Qué técnica mejora mucho la usabilidad al detectar el primer error en submit?",
        options: [
          "Ocultar todos los errores",
          "Hacer scroll al inicio sin más",
          "Enfocar el primer campo inválido y mostrar un resumen",
          "Cambiar el color del fondo de la página",
        ],
        correct: "Enfocar el primer campo inválido y mostrar un resumen",
        why:
          "Guía al usuario a la corrección: foco en el primer error + mensajes claros y asociados al campo.",
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
        <p className="doc-kicker">V31 · Componentes UI</p>
        <h1>Formularios PRO: accesibilidad + usabilidad (ratón, teclado y táctil)</h1>

        <p className="doc-lead">
          Un formulario profesional no es “poner inputs”. Es diseñar una interacción
          que funcione para todo el mundo: usuarios de ratón, teclado, pantallas táctiles
          y tecnologías de asistencia. Aquí aprenderás a construir formularios
          <strong> accesibles</strong>, <strong>claros</strong>, <strong>robustos</strong>
          y <strong>bonitos</strong> con buenas prácticas reales.
        </p>

        <div className="callout tip">
          🎯 Objetivos de la lección:
          <ul style={{ marginBottom: 0 }}>
            <li>Semántica correcta: labels, fieldset/legend, tipos de input.</li>
            <li>Accesibilidad real: nombre accesible, descripciones, errores, foco.</li>
            <li>Usabilidad: feedback claro, estados, validación y microcopy.</li>
            <li>Interacción multiplataforma: ratón, teclado y táctil.</li>
            <li>Estilos profesionales con CSS: focus-visible, disabled, invalid, etc.</li>
          </ul>
        </div>

        <nav className="doc-index" aria-label="Índice del tema">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#principios">1) Principios: por qué formularios son “zona crítica”</a></li>
            <li><a href="#estructura">2) Estructura semántica: label, fieldset, legend</a></li>
            <li><a href="#inputs">3) Inputs: tipos, autocomplete, inputmode</a></li>
            <li><a href="#accesibilidad">4) Accesibilidad: nombre, ayuda, errores, aria</a></li>
            <li><a href="#foco">5) Foco y navegación por teclado: focus-visible</a></li>
            <li><a href="#tactil">6) Táctil y mouse: tamaños, estados, hit area</a></li>
            <li><a href="#validacion">7) Validación: HTML5 + estilos + mensajes</a></li>
            <li><a href="#patrones">8) Patrones PRO: formularios largos, resumen de errores, steps</a></li>
            <li><a href="#gotchas">9) Errores comunes</a></li>
            <li><a href="#retos">10) Retos prácticos (con solución)</a></li>
            <li><a href="#test">11) Test final</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= 1) PRINCIPIOS ================= */}
      <section className="doc-section" id="principios">
        <details className="dd" open>
          <summary>1) Principios: por qué los formularios son “zona crítica”</summary>
          <div className="dd-body">
            <p>
              Si una página informa, un formulario <strong>pide</strong>. Y cuando pides, el usuario
              siente riesgo: “¿lo estoy haciendo bien?”, “¿me equivoco?”, “¿me va a dar error?”.
              Por eso los formularios deben ser especialmente claros.
            </p>

            <div className="callout">
              💡 En UX, un formulario se evalúa por:
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Claridad</strong>: sé qué me piden y por qué.</li>
                <li><strong>Velocidad</strong>: lo completo sin fricción.</li>
                <li><strong>Corrección</strong>: si fallo, sé cómo arreglarlo.</li>
                <li><strong>Accesibilidad</strong>: puedo hacerlo con teclado/lector/táctil.</li>
              </ul>
            </div>

            <div className="callout warn">
              Error típico: “el formulario se ve precioso” pero es inaccesible (sin labels, sin foco visible, sin mensajes).
              Eso en mundo real = usuarios perdidos + abandono + quejas.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 2) ESTRUCTURA ================= */}
      <section className="doc-section" id="estructura">
        <details className="dd" open>
          <summary>2) Estructura semántica: label, fieldset y legend (lo que no se negocia)</summary>
          <div className="dd-body">
            <div className="callout tip">
              Regla: cada control debe tener un <strong>nombre accesible</strong> persistente.
              En HTML, eso se consigue normalmente con <code>&lt;label&gt;</code>.
            </div>

            <details className="dd dd-nested" open>
              <summary>Patrón correcto: label + input (for/id)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<div class="field">
  <label class="label" for="email">Email</label>
  <input class="input" id="email" name="email" type="email" autocomplete="email" required />
  <p class="hint" id="email-hint">Usa el correo donde recibes notificaciones.</p>
</div>`}</code>
                </pre>

                <div className="callout">
                  ✅ Beneficios:
                  <ul style={{ marginBottom: 0 }}>
                    <li>Click en el label enfoca el input (ratón).</li>
                    <li>Lector de pantalla anuncia “Email, campo de texto”.</li>
                    <li>Nombre no desaparece (como pasa con placeholder).</li>
                  </ul>
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Fieldset/legend: cuando hay grupos (radio/checkbox)</summary>
              <div className="dd-body">
                <p>
                  Si tienes un conjunto de opciones (p.ej. método de pago), ese grupo necesita un título.
                  Ahí entra <code>&lt;fieldset&gt;</code> y <code>&lt;legend&gt;</code>.
                </p>

                <pre>
                  <code>{`<fieldset class="fieldset">
  <legend class="legend">Método de contacto preferido</legend>

  <label class="check">
    <input type="radio" name="contact" value="email" checked />
    <span>Email</span>
  </label>

  <label class="check">
    <input type="radio" name="contact" value="phone" />
    <span>Teléfono</span>
  </label>
</fieldset>`}</code>
                </pre>

                <div className="callout tip">
                  <strong>Legend</strong> es crucial: sin él, el usuario de lector oye opciones sin contexto.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 3) INPUTS ================= */}
      <section className="doc-section" id="inputs">
        <details className="dd" open>
          <summary>3) Inputs: tipos correctos, autocomplete e inputmode (usabilidad real)</summary>
          <div className="dd-body">
            <p>
              Elegir bien <code>type</code>, <code>autocomplete</code> e <code>inputmode</code> mejora:
              teclado en móvil, autocompletado y prevención de errores.
            </p>

            <div className="table-wrap" role="region" aria-label="Inputs recomendados" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Dato</th>
                    <th>type</th>
                    <th>autocomplete</th>
                    <th>inputmode</th>
                    <th>Notas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td><code>email</code></td>
                    <td><code>email</code></td>
                    <td>(auto)</td>
                    <td>Teclado con @ en móvil</td>
                  </tr>
                  <tr>
                    <td>Teléfono</td>
                    <td><code>tel</code></td>
                    <td><code>tel</code></td>
                    <td><code>tel</code></td>
                    <td>No valida formato por país (ojo)</td>
                  </tr>
                  <tr>
                    <td>Nombre</td>
                    <td><code>text</code></td>
                    <td><code>given-name</code></td>
                    <td>(auto)</td>
                    <td>Mejor UX con autocompletado</td>
                  </tr>
                  <tr>
                    <td>Apellidos</td>
                    <td><code>text</code></td>
                    <td><code>family-name</code></td>
                    <td>(auto)</td>
                    <td>Idem</td>
                  </tr>
                  <tr>
                    <td>Código postal</td>
                    <td><code>text</code></td>
                    <td><code>postal-code</code></td>
                    <td><code>numeric</code></td>
                    <td>Mejor que number (por ceros)</td>
                  </tr>
                  <tr>
                    <td>Fecha</td>
                    <td><code>date</code></td>
                    <td>(depende)</td>
                    <td>(auto)</td>
                    <td>Usa el picker nativo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout warn">
              Evita <code>type="number"</code> para datos como teléfono o CP:
              puedes perder ceros y la UX es peor (spinners, validación rara).
            </div>
          </div>
        </details>
      </section>

      {/* ================= 4) ACCESIBILIDAD ================= */}
      <section className="doc-section" id="accesibilidad">
        <details className="dd" open>
          <summary>4) Accesibilidad: nombre, ayuda, errores y aria (en serio)</summary>
          <div className="dd-body">
            <p>
              En accesibilidad, un control debe tener:
            </p>
            <ul>
              <li><strong>Nombre</strong> (label)</li>
              <li><strong>Rol</strong> (input/textarea/select ya lo tienen)</li>
              <li><strong>Estado</strong> (required, invalid, disabled)</li>
              <li><strong>Descripción</strong> (pista/errores asociados)</li>
            </ul>

            <details className="dd dd-nested" open>
              <summary>Ayuda persistente con aria-describedby</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<div class="field">
  <label class="label" for="password">Contraseña</label>
  <input
    class="input"
    id="password"
    name="password"
    type="password"
    aria-describedby="pwd-hint"
    required
  />
  <p class="hint" id="pwd-hint">Mínimo 8 caracteres, 1 número y 1 mayúscula.</p>
</div>`}</code>
                </pre>

                <div className="callout tip">
                  El lector de pantalla lee el hint como descripción del control.
                  Y visualmente el usuario tiene una guía antes del error.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Errores asociados al campo (patrón recomendado)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<div class="field field-error">
  <label class="label" for="dni">DNI</label>
  <input
    class="input"
    id="dni"
    name="dni"
    type="text"
    aria-invalid="true"
    aria-describedby="dni-hint dni-error"
    required
  />
  <p class="hint" id="dni-hint">Formato: 12345678Z</p>
  <p class="error" id="dni-error">El DNI no es válido. Revisa número y letra.</p>
</div>`}</code>
                </pre>

                <div className="callout">
                  Claves:
                  <ul style={{ marginBottom: 0 }}>
                    <li><code>aria-invalid="true"</code> cuando hay error.</li>
                    <li><code>aria-describedby</code> apunta a hint + error.</li>
                    <li>Mensaje de error <strong>concreto</strong> (no “error genérico”).</li>
                  </ul>
                </div>
              </div>
            </details>

            <div className="callout warn">
              Placeholder NO es etiqueta. Úsalo solo como ejemplo (“Ej: nombre@correo.com”),
              pero nunca como sustituto del label.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 5) FOCO / TECLADO ================= */}
      <section className="doc-section" id="foco">
        <details className="dd" open>
          <summary>5) Foco y navegación por teclado: focus-visible y orden lógico</summary>
          <div className="dd-body">
            <p>
              Si un usuario usa teclado:
              <strong> TAB</strong> debe recorrer controles en orden lógico,
              y el foco debe ser <strong>muy visible</strong>.
            </p>

            <div className="callout tip">
              Nunca quites el focus. Estílalo.
            </div>

            <pre>
              <code>{`/* =========================
   Estilos de campos (base PRO)
   ========================= */

.field{
  display: grid;
  gap: .35rem;
  margin-bottom: 1rem;
}

.label{
  font-weight: 850;
  color: #111;
}

.hint{
  margin: 0;
  font-size: .92rem;
  opacity: .85;
}

.error{
  margin: 0;
  font-size: .92rem;
  font-weight: 800;
  color: #991b1b;
}

/* Inputs base */
.input,
.select,
.textarea{
  width: 100%;
  padding: .7rem .9rem;
  border-radius: .85rem;
  border: 1px solid rgba(0,0,0,.16);
  background: #fff;
  color: #111;
  transition: border-color .15s ease, box-shadow .15s ease, background-color .15s ease;
}

/* Placeholder (solo ayuda visual, que tenga contraste decente) */
.input::placeholder,
.textarea::placeholder{
  opacity: .7;
}

/* Hover (ratón) */
.input:hover,
.select:hover,
.textarea:hover{
  border-color: rgba(0,0,0,.30);
}

/* Focus: accesible */
.input:focus,
.select:focus,
.textarea:focus{
  outline: none;
}

/* Focus visible (teclado) */
.input:focus-visible,
.select:focus-visible,
.textarea:focus-visible{
  border-color: rgba(228,77,38,.75);
  box-shadow: 0 0 0 4px rgba(228,77,38,.18);
}`}</code>
            </pre>

            <div className="callout">
              <strong>focus-visible</strong> evita “anillos” cuando haces click con ratón,
              pero mantiene foco para teclado.
            </div>

            <details className="dd dd-nested">
              <summary>Orden de tabulación (qué no hacer)</summary>
              <div className="dd-body">
                <ul>
                  <li>No uses <code>tabindex</code> positivo para “reordenar”.</li>
                  <li>El orden debe venir del DOM (estructura HTML).</li>
                  <li>Evita modales/menus sin gestión de foco (si no hay JS, ojo).</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 6) TÁCTIL / RATÓN ================= */}
      <section className="doc-section" id="tactil">
        <details className="dd" open>
          <summary>6) Táctil y ratón: tamaños, estados y “hit area” (usabilidad real)</summary>
          <div className="dd-body">
            <p>
              Un formulario debe ser cómodo en móvil:
              el dedo es impreciso comparado con un cursor. Necesitas
              <strong>targets grandes</strong>, espaciado y feedback claro.
            </p>

            <div className="callout tip">
              Referencia común de target táctil: <strong>44×44 px</strong>.
            </div>

            <pre>
              <code>{`/* Botones e inputs cómodos */
.input,
.select,
.textarea{
  min-height: 44px; /* hit area táctil */
}

/* Check/radio: envuelve input con label para ampliar zona clicable */
.check{
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  padding: .55rem .75rem;     /* hace de “hit area” */
  border-radius: .75rem;
  cursor: pointer;
  user-select: none;
}

.check:hover{
  background: rgba(0,0,0,.04);
}

.check input{
  width: 18px;
  height: 18px;
}`}</code>
            </pre>

            <div className="callout warn">
              Si haces “checkbox custom” con divs, puedes romper accesibilidad.
              Para enseñar y en manual: empieza por el input nativo estilizado.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 7) VALIDACIÓN ================= */}
      <section className="doc-section" id="validacion">
        <details className="dd" open>
          <summary>7) Validación: HTML5 + estilos + mensajes claros</summary>
          <div className="dd-body">
            <p>
              HTML ya ofrece validación básica: <code>required</code>, <code>type="email"</code>,
              <code>minLength</code>, <code>pattern</code>. CSS puede reflejar estados.
            </p>

            <details className="dd dd-nested" open>
              <summary>Estados CSS: :invalid, :valid, :required (con cuidado)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* OJO: :invalid se activa incluso antes de tocar el campo (depende del navegador).
   Por eso se suele condicionar con :user-invalid o con clases (JS).
   Aquí lo dejamos didáctico y prudente. */

.input:required{
  border-left: 4px solid rgba(0,0,0,.08);
  padding-left: .75rem;
}

/* Cuando el usuario escribe y queda inválido, estilo de error */
.input:focus:invalid{
  border-color: rgba(239,68,68,.85);
  box-shadow: 0 0 0 4px rgba(239,68,68,.18);
}

/* Cuando es válido y ha sido completado */
.input:focus:valid{
  border-color: rgba(16,185,129,.75);
  box-shadow: 0 0 0 4px rgba(16,185,129,.16);
}`}</code>
                </pre>

                <div className="callout tip">
                  En proyectos reales, la validación visual suele controlarse con clases (JS/React),
                  para evitar mostrar “rojo” antes de que el usuario interactúe.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Patrón PRO: resumen de errores + foco al primer inválido (conceptual)</summary>
              <div className="dd-body">
                <p>
                  En submit, lo mejor es:
                </p>
                <ol>
                  <li>Mostrar un resumen arriba con enlaces a campos con error</li>
                  <li>Enfocar el primer campo inválido</li>
                  <li>Mensajes específicos por campo</li>
                </ol>

                <pre>
                  <code>{`<div class="error-summary" role="alert" aria-live="assertive">
  <p><strong>Revisa los campos marcados:</strong></p>
  <ul>
    <li><a href="#email">Email: formato inválido</a></li>
    <li><a href="#password">Contraseña: mínimo 8 caracteres</a></li>
  </ul>
</div>`}</code>
                </pre>

                <pre>
                  <code>{`.error-summary{
  border: 1px solid rgba(239,68,68,.35);
  background: rgba(239,68,68,.10);
  border-radius: .9rem;
  padding: 1rem;
}

.error-summary a{
  color: #991b1b;
  font-weight: 900;
  text-decoration: none;
}

.error-summary a:hover{
  text-decoration: underline;
}`}</code>
                </pre>

                <div className="callout warn">
                  Esto se vuelve perfecto cuando lo conectas con lógica (React) para generar la lista automáticamente.
                  Pero el patrón visual + semántico se puede enseñar ya aquí.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 8) PATRONES PRO ================= */}
      <section className="doc-section" id="patrones">
        <details className="dd" open>
          <summary>8) Patrones PRO: formularios largos, secciones, y layout</summary>
          <div className="dd-body">
            <p>
              En formularios reales, el mayor problema es la fatiga:
              muchos campos = abandono. Soluciones:
            </p>
            <ul>
              <li>Dividir por secciones (fieldset + títulos)</li>
              <li>Mostrar progreso (pasos)</li>
              <li>Agrupar campos relacionados en columnas (responsive)</li>
              <li>Validación temprana (sin castigar)</li>
            </ul>

            <details className="dd dd-nested" open>
              <summary>Layout en 2 columnas (desktop) y 1 columna (móvil)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<form class="form">
  <div class="form-grid">
    <div class="field">
      <label class="label" for="name">Nombre</label>
      <input class="input" id="name" name="name" autocomplete="given-name" />
    </div>

    <div class="field">
      <label class="label" for="lastname">Apellidos</label>
      <input class="input" id="lastname" name="lastname" autocomplete="family-name" />
    </div>

    <div class="field field-full">
      <label class="label" for="address">Dirección</label>
      <input class="input" id="address" name="address" autocomplete="street-address" />
    </div>
  </div>

  <div class="form-actions">
    <button class="btn" type="button">Cancelar</button>
    <button class="btn btn-primary" type="submit">Guardar</button>
  </div>
</form>`}</code>
                </pre>

                <pre>
                  <code>{`.form-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.field-full{
  grid-column: 1 / -1;
}

.form-actions{
  display: flex;
  justify-content: flex-end;
  gap: .65rem;
  margin-top: 1rem;
}

@media (max-width: 720px){
  .form-grid{
    grid-template-columns: 1fr;
  }
}`}</code>
                </pre>

                <div className="callout tip">
                  Grid para el layout del formulario. Cada field ya es una unidad.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Botones: tamaño, estados y disabled</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Botones pro (si no los tienes globales) */
.btn{
  min-height: 44px;
  padding: .65rem 1rem;
  border-radius: .85rem;
  border: 1px solid rgba(0,0,0,.14);
  background: #fff;
  font-weight: 900;
  cursor: pointer;
}

.btn:focus{ outline:none; }
.btn:focus-visible{
  outline: 3px solid rgba(0,0,0,.85);
  outline-offset: 3px;
}

.btn:disabled{
  opacity: .55;
  cursor: not-allowed;
}`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 9) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>9) Errores comunes (y por qué son graves)</summary>
          <div className="dd-body">
            <ul>
              <li><strong>Sin label</strong> → inaccesible (lector) y peor UX (click area pequeña).</li>
              <li><strong>Placeholder como label</strong> → desaparece, confunde, bajo contraste.</li>
              <li><strong>No focus visible</strong> → teclado inutilizable.</li>
              <li><strong>Errores genéricos</strong> (“campo inválido”) → usuario no sabe qué arreglar.</li>
              <li><strong>Checkbox/radio custom</strong> con divs sin input real → rotura total de accesibilidad.</li>
              <li><strong>Campos muy juntos</strong> en móvil → toques erróneos.</li>
            </ul>

            <div className="callout warn">
              Si tu formulario no se puede completar con teclado (TAB + ENTER + SPACE),
              no está listo para producción.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 10) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>10) Retos prácticos (con solución)</summary>
          <div className="dd-body">
            <div className="callout">
              Haz estos 3 retos. Si los dominas, ya puedes construir formularios reales.
            </div>

            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1: campo con label + hint + focus-visible</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<div class="field">
  <label class="label" for="user">Usuario</label>
  <input class="input" id="user" name="user" aria-describedby="user-hint" />
  <p class="hint" id="user-hint">Entre 4 y 12 caracteres.</p>
</div>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>🟡 Reto 2: radio group con fieldset/legend</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<fieldset class="fieldset">
  <legend class="legend">Tipo de cuenta</legend>
  <label class="check"><input type="radio" name="plan" value="basic" /> <span>Básica</span></label>
  <label class="check"><input type="radio" name="plan" value="pro" /> <span>Pro</span></label>
</fieldset>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>🔴 Reto 3: error asociado con aria-describedby + aria-invalid</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<div class="field field-error">
  <label class="label" for="email2">Email</label>
  <input class="input" id="email2" name="email2" type="email"
         aria-invalid="true" aria-describedby="email2-error" />
  <p class="error" id="email2-error">Escribe un email válido (ej: nombre@dominio.com).</p>
</div>`}</code>
                </pre>
              </div>
            </details>

            <div className="callout tip">
              Si el alumno sabe hacer el reto 3, ya entiende accesibilidad real en formularios.
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
                      🏆 <strong>Excelente.</strong> Formularios accesibles y usables: objetivo cumplido.
                    </>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>
                      🎯 <strong>Muy bien.</strong> Refuerza aria-describedby y la estrategia de errores.
                    </>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>
                      📚 <strong>Buen nivel.</strong> Revisa focus-visible y targets táctiles.
                    </>
                  )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Aún no.</strong> Vuelve a semántica: label + fieldset + legend.
                      Sin eso, no hay accesibilidad.
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
          ✅ Cierre PRO:
          <br />
          Un formulario accesible es el que puedes completar:
          <strong> sin ratón</strong>, <strong>sin vista</strong> (lector),
          y <strong>con dedo</strong> en móvil sin fallos.
          Si cumples eso, tu UI está a nivel profesional.
        </div>

        
      </section>
    </main>
  );
}
