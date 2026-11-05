import { useEffect, useMemo, useState } from "react";

/**
 * V28 · Componentes UI: Botones y Vínculos (Lección PRO)
 * - Semántica y criterios de decisión (link vs button)
 * - Reset + base sólida de componentes
 * - Estados completos (hover/active/focus/disabled/loading)
 * - Accesibilidad (teclado, focus-visible, aria, contraste, target size)
 * - Variantes y tamaños (design system)
 * - Patrones reales: CTA, icon buttons, button groups, links inline, nav links
 * - Errores comunes y depuración
 * - Retos con soluciones
 * - Mini test
 *
 * Nota: El CSS aquí va dentro de <pre><code> para tu manual.
 * Integra las clases en tu stylesheet global del manual.
 */

export default function V28_Componentes_Botones_Vinculos() {
  useEffect(() => {
    document.title =
      "V28 · Componentes UI: Botones y Vínculos (de cero a experto)";
  }, []);

  // ================== MINI TEST ==================
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Cuál es la regla semántica principal para elegir entre <a> y <button>?",
        options: [
          "Si parece botón, usa <button>",
          "Si navega (URL), usa <a>; si ejecuta acción, usa <button>",
          "Usa siempre <a> porque es más flexible",
          "Son equivalentes si aplicas CSS",
        ],
        correct: "Si navega (URL), usa <a>; si ejecuta acción, usa <button>",
        why:
          "La semántica no es estética. <a href> representa navegación; <button> representa una acción en la UI (enviar, abrir, confirmar, alternar).",
      },
      {
        id: "q2",
        q: "¿Qué problema tiene usar <a> sin href como si fuera botón?",
        options: [
          "Ninguno, es lo mismo",
          "No recibe estilos",
          "Pierde semántica, comportamiento esperado y accesibilidad",
          "No puede tener padding",
        ],
        correct: "Pierde semántica, comportamiento esperado y accesibilidad",
        why:
          "Un <a> sin href no es un enlace real: no participa igual en navegación, puede comportarse distinto con teclado y no comunica intención correctamente.",
      },
      {
        id: "q3",
        q: "¿Qué atributo deberías definir casi siempre en <button> para evitar envíos accidentales de formularios?",
        options: ["role", "type", "href", "tabindex"],
        correct: "type",
        why:
          "Dentro de <form>, el type por defecto de <button> suele ser submit. Si el botón no envía el formulario, usa type='button'.",
      },
      {
        id: "q4",
        q: "¿Qué pseudo-clase es preferible para mostrar el foco solo cuando el usuario navega con teclado?",
        options: [":focus", ":active", ":focus-visible", ":hover"],
        correct: ":focus-visible",
        why:
          ":focus-visible intenta mostrar el foco cuando es útil (teclado/assistive tech) sin molestar al usuario de ratón.",
      },
      {
        id: "q5",
        q: "¿Cuál es el error más típico en botones disabled en sistemas reales?",
        options: [
          "Ponerles opacity",
          "No diferenciar disabled de loading",
          "Usar cursor: pointer",
          "Usar padding",
        ],
        correct: "No diferenciar disabled de loading",
        why:
          "Disabled suele significar 'no disponible'. Loading es 'acción en curso'. Mezclarlos confunde al usuario y puede generar clicks repetidos.",
      },
      {
        id: "q6",
        q: "Para accesibilidad táctil, ¿qué tamaño mínimo de área clicable se recomienda típicamente?",
        options: ["10px", "24px", "44px", "80px"],
        correct: "44px",
        why:
          "Una recomendación común para objetivo táctil es alrededor de 44×44 px (varía por guías), pero como regla didáctica es excelente.",
      },
      {
        id: "q7",
        q: "¿Qué es más correcto para un enlace que parece botón y navega a una URL?",
        options: [
          "<button> con onClick que cambia window.location",
          "<a href> estilizado como botón",
          "<div role='button'> con JS",
          "Cualquiera vale",
        ],
        correct: "<a href> estilizado como botón",
        why:
          "Si navega, que sea un enlace real (<a href>). Luego lo puedes estilizar como botón sin romper semántica.",
      },
      {
        id: "q8",
        q: "¿Cuál es el mayor “gotcha” de quitar el subrayado de enlaces en texto?",
        options: [
          "Que se ve feo",
          "Que se pierde una pista visual esencial y afecta accesibilidad",
          "Que visited deja de funcionar",
          "Que no se puede hover",
        ],
        correct: "Que se pierde una pista visual esencial y afecta accesibilidad",
        why:
          "En texto continuo, el subrayado ayuda a identificar enlaces. Si lo quitas, compensa con estilos claros (color + subrayado en hover/focus o custom underline).",
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
        <p className="doc-kicker">V28 · Componentes UI</p>
        <h1>Botones y vínculos: del nivel cero al diseño profesional</h1>

        <p className="doc-lead">
          Un manual serio no enseña “pon padding y ya”. Enseña a construir
          componentes que se comporten bien en <strong>teclado</strong>,{" "}
          <strong>táctil</strong>, <strong>formularios</strong>,{" "}
          <strong>estados de carga</strong>, <strong>accesibilidad</strong> y{" "}
          <strong>mantenibilidad</strong>. Botones y enlaces son el núcleo de la
          interacción web: si los haces bien, tu interfaz sube de nivel.
        </p>

        <div className="callout tip">
          🎯 Objetivos de esta lección:
          <ul style={{ marginBottom: 0 }}>
            <li>
              Elegir correctamente entre <code>&lt;button&gt;</code> y{" "}
              <code>&lt;a&gt;</code> (semántica real).
            </li>
            <li>
              Construir una base <strong>reutilizable</strong> (clase .btn / .link).
            </li>
            <li>
              Dominar estados: <code>:hover</code>, <code>:active</code>,{" "}
              <code>:focus-visible</code>, <code>[disabled]</code>, loading.
            </li>
            <li>
              Escalar a un mini “design system”: variantes, tamaños, iconos,
              grupos, links inline.
            </li>
          </ul>
        </div>

        <nav className="doc-index" aria-label="Índice del tema">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#mentalidad">1) Mentalidad profesional: semántica & intención</a></li>
            <li><a href="#decision">2) Árbol de decisión: ¿link o button?</a></li>
            <li><a href="#reset">3) Reset y base sólida (sin romper accesibilidad)</a></li>
            <li><a href="#btn-base">4) Botón base: anatomía de un componente</a></li>
            <li><a href="#estados">5) Estados completos (hover/active/focus/disabled/loading)</a></li>
            <li><a href="#variantes">6) Variantes: primary/secondary/outline/ghost/danger</a></li>
            <li><a href="#tamaños">7) Tamaños y densidad (sm/md/lg) + área táctil</a></li>
            <li><a href="#iconos">8) Botones con iconos: patrones y errores típicos</a></li>
            <li><a href="#links">9) Vínculos: enlaces inline, nav links, enlaces tipo botón</a></li>
            <li><a href="#accesibilidad">10) Accesibilidad (teclado, aria, focus, contraste)</a></li>
            <li><a href="#gotchas">11) Gotchas del mundo real (formularios, disabled, pointer-events)</a></li>
            <li><a href="#retos">12) Retos prácticos (con soluciones)</a></li>
            <li><a href="#test">13) Test final</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= 1) MENTALIDAD ================= */}
      <section className="doc-section" id="mentalidad">
        <details className="dd" open>
          <summary>1) Mentalidad profesional: semántica e intención</summary>
          <div className="dd-body">
            <p>
              Antes de escribir CSS, un experto se hace una pregunta:
              <strong> “¿Qué es esto a nivel de intención?”</strong>
              <br />
              No: “¿cómo quiero que se vea?”. La web no es una imagen: es un sistema
              interactivo usado por ratón, teclado, táctil, lectores de pantalla, bots, etc.
            </p>

            <div className="callout">
              <strong>Principio fundamental:</strong> La semántica manda y el estilo acompaña.
              <br />
              Primero eliges el elemento correcto (<code>a</code> o <code>button</code>),
              luego lo conviertes en un componente bonito.
            </div>

            <details className="dd dd-nested" open>
              <summary>¿Qué “promete” cada elemento al usuario?</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    <code>&lt;a href="..."&gt;</code> promete <strong>navegación</strong>:
                    abrir un destino, copiar URL, abrir en pestaña, historial, etc.
                  </li>
                  <li>
                    <code>&lt;button&gt;</code> promete <strong>acción</strong>:
                    enviar, confirmar, alternar, abrir/cerrar, ejecutar algo en la UI.
                  </li>
                </ul>

                <div className="callout warn">
                  Si rompes esa promesa, el usuario se siente “traicionado”:
                  <br />
                  Un enlace que no navega o un botón que “teletransporta” a otra página sin enlace real
                  rompe expectativas (y accesibilidad).
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 2) DECISIÓN ================= */}
      <section className="doc-section" id="decision">
        <details className="dd" open>
          <summary>2) Árbol de decisión: ¿link o button?</summary>
          <div className="dd-body">
            <div className="callout tip">
              Piensa así:
              <br />
              <strong>Si hay un destino (URL) → enlace.</strong>
              <br />
              <strong>Si hay una acción (UI) → botón.</strong>
            </div>

            <div className="table-wrap" role="region" aria-label="Árbol de decisión link vs button" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Situación</th>
                    <th>Elemento correcto</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ir a “/contacto”</td>
                    <td><code>&lt;a href="/contacto"&gt;</code></td>
                    <td>CTA “Contactar” que lleva a otra página</td>
                  </tr>
                  <tr>
                    <td>Abrir un modal</td>
                    <td><code>&lt;button type="button"&gt;</code></td>
                    <td>“Ver más”, “Iniciar sesión” (modal)</td>
                  </tr>
                  <tr>
                    <td>Enviar un formulario</td>
                    <td><code>&lt;button type="submit"&gt;</code></td>
                    <td>“Guardar”, “Enviar”</td>
                  </tr>
                  <tr>
                    <td>Alternar estado (on/off)</td>
                    <td><code>&lt;button aria-pressed="..."&gt;</code></td>
                    <td>“Favorito”, “Silenciar”</td>
                  </tr>
                  <tr>
                    <td>Descargar un archivo</td>
                    <td><code>&lt;a href="..." download&gt;</code></td>
                    <td>“Descargar PDF”</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <details className="dd dd-nested" open>
              <summary>Errores típicos que verás en alumnos (y en proyectos reales)</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    <strong>Enlace sin href</strong> (para abrir modal): debería ser button.
                  </li>
                  <li>
                    <strong>Div con onClick</strong>: no tiene accesibilidad por defecto, mal foco, mal teclado.
                  </li>
                  <li>
                    <strong>Button que navega</strong> con JS: impide abrir en pestaña, copiar enlace, etc.
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 3) RESET ================= */}
      <section className="doc-section" id="reset">
        <details className="dd" open>
          <summary>3) Reset y base sólida (sin romper accesibilidad)</summary>
          <div className="dd-body">
            <p>
              Un problema real: cada navegador trae estilos por defecto. Si quieres un componente consistente,
              necesitas un “reset controlado” (no un borrado salvaje).
            </p>

            <div className="callout warn">
              ⚠️ Error de novato: <code>outline: none</code> “porque se ve feo”.
              <br />
              Eso rompe accesibilidad. Si lo quitas, <strong>reemplázalo</strong> por un foco visible.
            </div>

            <pre>
              <code>{`/* =========================
   Reset controlado (botones/links)
   ========================= */

/* Botón: resetea apariencia sin matar accesibilidad */
button.btn{
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  background: none;
  font: inherit;
  color: inherit;
}

/* Link base (si vas a tratarlo como componente) */
a.link{
  color: inherit; /* o tu color de links del sistema */
  text-decoration: none; /* OJO: luego lo compensamos en estados */
}

/* Mejoras generales de interacción */
.btn, .link{
  -webkit-tap-highlight-color: transparent; /* móvil: highlight feo */
}`}</code>
            </pre>

            <div className="callout tip">
              “Reset controlado” significa: quito lo que molesta, pero mantengo lo que da semántica y accesibilidad.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 4) BTN BASE ================= */}
      <section className="doc-section" id="btn-base">
        <details className="dd" open>
          <summary>4) Botón base: anatomía de un componente (lo que un pro siempre incluye)</summary>
          <div className="dd-body">
            <p>
              Un botón profesional no es solo color. Es:
              <strong> layout interno</strong>, <strong>espaciado</strong>, <strong>tipografía</strong>,
              <strong>estados</strong>, <strong>foco</strong>, <strong>tamaño táctil</strong> y <strong>consistencia</strong>.
            </p>

            <details className="dd dd-nested" open>
              <summary>Base recomendada (reutilizable)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* =========================
   Botón base
   ========================= */
.btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  /* Tamaño táctil y consistencia */
  min-height: 44px;
  padding: .75rem 1.1rem;

  border-radius: .75rem;
  font-weight: 700;
  line-height: 1;
  text-decoration: none; /* por si se usa en <a> estilo botón */

  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  transition:
    transform .15s ease,
    background-color .15s ease,
    color .15s ease,
    border-color .15s ease,
    box-shadow .15s ease;
}

/* Si el usuario prefiere menos movimiento */
@media (prefers-reduced-motion: reduce){
  .btn{ transition: none; }
}`}</code>
                </pre>

                <div className="callout tip">
                  Por qué <code>inline-flex</code>: alinea icono y texto mejor que inline-block.
                  Por qué <code>min-height: 44px</code>: área táctil consistente.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>HTML correcto (con type)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Acción (UI) -->
<button class="btn btn-primary" type="button">
  Guardar
</button>

<!-- Enviar formulario -->
<button class="btn btn-primary" type="submit">
  Enviar
</button>

<!-- Navegación (enlace) con estilo botón -->
<a class="btn btn-primary" href="/contacto">
  Contactar
</a>`}</code>
                </pre>

                <div className="callout warn">
                  Regla: si está dentro de un <code>&lt;form&gt;</code> y NO quieres enviar,
                  usa siempre <code>type="button"</code>.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 5) ESTADOS ================= */}
      <section className="doc-section" id="estados">
        <details className="dd" open>
          <summary>5) Estados completos: hover, active, focus-visible, disabled y loading</summary>
          <div className="dd-body">
            <div className="callout tip">
              Un componente profesional “se siente” bien porque sus estados están bien pensados:
              <strong> hover</strong> (intención), <strong>active</strong> (respuesta),
              <strong>focus</strong> (teclado), <strong>disabled/loading</strong> (estado del sistema).
            </div>

            <details className="dd dd-nested" open>
              <summary>Focus visible (teclado) sin molestar a ratón</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Focus recomendado */
.btn:focus{
  outline: none; /* lo quitamos... */
}

/* ...pero lo reemplazamos por un foco visible REAL */
.btn:focus-visible{
  outline: 3px solid rgba(0,0,0,.85);
  outline-offset: 3px;
}`}</code>
                </pre>

                <div className="callout warn">
                  Si quitas el outline y no pones focus-visible, estás rompiendo accesibilidad.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Hover y Active (micro-feedback)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Hover: intención (ratón/táctil con pointer) */
.btn:hover{
  transform: translateY(-1px);
}

/* Active: respuesta inmediata al click */
.btn:active{
  transform: translateY(0) scale(.98);
}`}</code>
                </pre>

                <div className="callout tip">
                  “Hover sube un pelín, active presiona un pelín” = sensación de botón físico.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Disabled vs aria-disabled (diferencia profesional)</summary>
              <div className="dd-body">
                <p>
                  Para <code>&lt;button&gt;</code>, lo correcto es usar <code>disabled</code>.
                  Para <code>&lt;a&gt;</code> no existe disabled nativo: si necesitas estado “deshabilitado”,
                  usa <code>aria-disabled="true"</code> y estilos (y evita navegación).
                </p>

                <pre>
                  <code>{`/* Disabled real (solo en form controls) */
.btn:disabled{
  opacity: .55;
  cursor: not-allowed;
  transform: none;
}

/* Para enlaces o casos especiales */
.btn[aria-disabled="true"]{
  opacity: .55;
  cursor: not-allowed;
  pointer-events: none; /* ojo: si lo pones, no llega el foco; úsalo con criterio */
}`}</code>
                </pre>

                <div className="callout warn">
                  <code>pointer-events:none</code> bloquea click, pero también puede bloquear interacciones útiles.
                  Úsalo solo si sabes lo que implica. En enlaces “deshabilitados”, a veces prefieres manejar el click
                  y mantener foco/lectura.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Loading (estado de “acción en curso”) — patrón recomendado</summary>
              <div className="dd-body">
                <p>
                  Loading NO es lo mismo que disabled. Loading es “estoy procesando”.
                  En UI real, loading suele:
                </p>
                <ul>
                  <li>Evitar clicks repetidos</li>
                  <li>Dar feedback (“Cargando…”) o spinner</li>
                  <li>Mantener el ancho para que no “salte” el layout</li>
                </ul>

                <pre>
                  <code>{`/* Patrón: botón loading */
.btn.is-loading{
  cursor: wait;
  pointer-events: none; /* evita doble click */
  position: relative;
}

/* Spinner simple */
.btn.is-loading::after{
  content: "";
  width: 1em;
  height: 1em;
  border-radius: 999px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  display: inline-block;
  margin-left: .5rem;
  animation: spin .8s linear infinite;
}

@keyframes spin{
  to{ transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce){
  .btn.is-loading::after{ animation: none; }
}`}</code>
                </pre>

                <div className="callout tip">
                  Para UX: si el botón decía “Guardar”, en loading puedes pasar a “Guardando…”
                  o mantener el texto y añadir spinner.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 6) VARIANTES ================= */}
      <section className="doc-section" id="variantes">
        <details className="dd" open>
          <summary>6) Variantes: primary/secondary/outline/ghost/danger (mini design system)</summary>
          <div className="dd-body">
            <p>
              Escalar un sistema no significa crear 200 clases distintas. Significa tener:
              <strong> una base</strong> + <strong>modificadores</strong>.
            </p>

            <pre>
              <code>{`/* =========================
   Variantes (ejemplo con paleta tipo HTML)
   Ajusta a tu CSS base del manual si usas tokens.
   ========================= */

.btn-primary{
  background: #E44D26;
  color: #fff;
}

.btn-primary:hover{
  background: #F16529;
}

.btn-secondary{
  background: #212121;
  color: #fff;
}

.btn-outline{
  background: transparent;
  border: 2px solid currentColor;
  color: #E44D26;
}

.btn-outline:hover{
  background: rgba(228,77,38,.08);
}

.btn-ghost{
  background: transparent;
  color: #212121;
}

.btn-ghost:hover{
  background: rgba(0,0,0,.06);
}

.btn-danger{
  background: #b91c1c;
  color: #fff;
}

.btn-danger:hover{
  background: #991b1b;
}`}</code>
            </pre>

            <div className="callout">
              Consejo profesional: define pocas variantes y úsalas bien.
              Demasiadas variantes confunden y rompen consistencia visual.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 7) TAMAÑOS ================= */}
      <section className="doc-section" id="tamaños">
        <details className="dd" open>
          <summary>7) Tamaños y densidad: sm / md / lg + área táctil</summary>
          <div className="dd-body">
            <p>
              Los tamaños no son “capricho”: dependen de densidad de interfaz.
              Un dashboard suele usar botones más compactos que una landing.
            </p>

            <pre>
              <code>{`/* Tamaños */
.btn-sm{
  min-height: 36px;
  padding: .5rem .85rem;
  border-radius: .6rem;
  font-weight: 700;
}

.btn-md{
  min-height: 44px;
  padding: .75rem 1.1rem;
}

.btn-lg{
  min-height: 52px;
  padding: .95rem 1.35rem;
  border-radius: .9rem;
  font-size: 1.05rem;
}`}</code>
            </pre>

            <div className="callout tip">
              Regla simple: en móvil, prioriza targets grandes; en escritorio puedes compactar, pero mantén foco claro.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 8) ICONOS ================= */}
      <section className="doc-section" id="iconos">
        <details className="dd" open>
          <summary>8) Botones con iconos (patrones + errores típicos)</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>Patrón A: icono + texto</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Icono + texto -->
<button class="btn btn-primary btn-md" type="button">
  <span aria-hidden="true">★</span>
  <span>Guardar</span>
</button>`}</code>
                </pre>

                <div className="callout tip">
                  Usa <code>aria-hidden</code> en iconos decorativos.
                  Si el icono transmite información por sí mismo, entonces necesita texto alternativo.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Patrón B: icon button (solo icono) — accesibilidad obligatoria</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Solo icono: necesita aria-label -->
<button class="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Eliminar">
  <span aria-hidden="true">🗑</span>
</button>`}</code>
                </pre>

                <pre>
                  <code>{`/* Icon button: cuadrado, centrado */
.btn-icon{
  width: 44px;
  padding: 0; /* ya tenemos min-height */
  justify-content: center;
}`}</code>
                </pre>

                <div className="callout warn">
                  Botón solo icono SIN <code>aria-label</code> = inaccesible para lector de pantalla.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 9) LINKS ================= */}
      <section className="doc-section" id="links">
        <details className="dd" open>
          <summary>9) Vínculos: enlaces inline, nav links y enlaces tipo botón</summary>
          <div className="dd-body">
            <p>
              Los enlaces son navegación. Pero “navegación” no significa solo menús:
              también hay enlaces dentro de texto, enlaces de acción secundaria, enlaces “ver más”, etc.
            </p>

            <details className="dd dd-nested" open>
              <summary>Enlace inline en texto (recomendación profesional)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Enlaces dentro de párrafos: subrayado útil */
.link-inline{
  color: #E44D26;
  text-decoration: underline;
  text-underline-offset: .15em;
  text-decoration-thickness: 2px;
}

.link-inline:hover{
  text-decoration-thickness: 3px;
}

.link-inline:focus-visible{
  outline: 3px solid rgba(0,0,0,.85);
  outline-offset: 3px;
}`}</code>
                </pre>

                <div className="callout tip">
                  En texto continuo, el subrayado es una señal de accesibilidad.
                  Si lo quitas, debes compensar claramente (color + indicador).
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Nav links (menú): estilo consistente + estado activo</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Enlaces de navegación */
.nav-link{
  display:inline-flex;
  align-items:center;
  padding: .6rem .85rem;
  border-radius: .6rem;
  text-decoration: none;
  color: #111;
  transition: background-color .15s ease, color .15s ease;
}

.nav-link:hover{
  background: rgba(0,0,0,.06);
}

.nav-link[aria-current="page"]{
  background: rgba(228,77,38,.12);
  color: #E44D26;
  font-weight: 800;
}

.nav-link:focus-visible{
  outline: 3px solid rgba(0,0,0,.85);
  outline-offset: 3px;
}`}</code>
                </pre>

                <div className="callout">
                  <code>aria-current="page"</code> es el estándar para indicar “estás aquí”.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Enlace con estilo botón (CTA que navega)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Navega: enlace real -->
<a class="btn btn-primary btn-lg" href="/registro">
  Crear cuenta
</a>`}</code>
                </pre>

                <div className="callout tip">
                  Se ve como botón, pero se comporta como enlace: abrir en pestaña, copiar URL, etc.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 10) ACCESIBILIDAD ================= */}
      <section className="doc-section" id="accesibilidad">
        <details className="dd" open>
          <summary>10) Accesibilidad: checklist de un profesional</summary>
          <div className="dd-body">
            <div className="callout tip">
              Un sistema de botones/links profesional cumple:
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Focus visible</strong> (teclado)</li>
                <li><strong>Contraste</strong> suficiente</li>
                <li><strong>Tamaño táctil</strong> razonable</li>
                <li><strong>Semántica correcta</strong> (a vs button)</li>
                <li><strong>Estados comunicados</strong> (disabled/loading)</li>
              </ul>
            </div>

            <details className="dd dd-nested" open>
              <summary>Focus visible: patrón recomendado (reutilizable)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Patrón global de foco */
:where(.btn, .link, .nav-link):focus{
  outline: none;
}

:where(.btn, .link, .nav-link):focus-visible{
  outline: 3px solid rgba(0,0,0,.85);
  outline-offset: 3px;
}`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Teclado y “orden lógico” (principio clave)</summary>
              <div className="dd-body">
                <p>
                  Si tu componente solo funciona con ratón, está incompleto.
                  Prueba siempre:
                </p>
                <ul>
                  <li><kbd>Tab</kbd> para moverte</li>
                  <li><kbd>Enter</kbd> y <kbd>Space</kbd> para activar botones</li>
                  <li>Ver si el foco se ve claro y no “se pierde”</li>
                </ul>

                <div className="callout warn">
                  Si construyes “botones” con divs, tendrás que reimplementar teclado, roles y estados.
                  Es mala práctica salvo casos muy justificados.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 11) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>11) Gotchas del mundo real (lo que rompe proyectos)</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>Gotcha 1: botones dentro de form (type por defecto)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Si no pones type, puede comportarse como submit -->
<form>
  <button class="btn btn-primary">Abrir modal</button> <!-- PELIGRO -->
</form>

<!-- Correcto -->
<form>
  <button class="btn btn-primary" type="button">Abrir modal</button>
</form>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Gotcha 2: disabled no aplica a enlaces</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Enlace "deshabilitado" (concepto) -->
<a class="btn btn-outline" href="/pago" aria-disabled="true" tabindex="-1">
  Pagar
</a>`}</code>
                </pre>

                <div className="callout warn">
                  Si realmente no debe navegar, lo ideal es que NO sea enlace.
                  Si es “bloqueado”, quizá sea un botón con tooltip o un estado informativo.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Gotcha 3: quitar subrayado a enlaces en párrafos</summary>
              <div className="dd-body">
                <p>
                  En un botón, no pasa nada quitar subrayado. En un enlace inline,
                  quitarlo puede reducir identificabilidad.
                </p>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 12) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>12) Retos prácticos (con soluciones)</summary>
          <div className="dd-body">
            <div className="callout">
              👇 Haz primero el reto. Luego abre la solución.
            </div>

            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1: crea un botón primary con focus-visible y active</summary>
              <div className="dd-body">
                <details className="dd dd-nested">
                  <summary>✅ Solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`.btn{ display:inline-flex; align-items:center; justify-content:center; gap:.5rem; min-height:44px; padding:.75rem 1.1rem; border-radius:.75rem; font-weight:700; cursor:pointer; transition:all .15s ease; }
.btn-primary{ background:#E44D26; color:#fff; }
.btn-primary:hover{ background:#F16529; }
.btn:active{ transform:scale(.98); }
.btn:focus{ outline:none; }
.btn:focus-visible{ outline:3px solid rgba(0,0,0,.85); outline-offset:3px; }`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>🟡 Reto 2: crea un icon button accesible</summary>
              <div className="dd-body">
                <details className="dd dd-nested">
                  <summary>✅ Solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`<button class="btn btn-ghost btn-icon" type="button" aria-label="Cerrar">
  <span aria-hidden="true">✕</span>
</button>

/* CSS */
.btn-icon{ width:44px; padding:0; justify-content:center; }`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>🔴 Reto 3: botón loading con spinner</summary>
              <div className="dd-body">
                <details className="dd dd-nested">
                  <summary>✅ Solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`.btn.is-loading{ cursor:wait; pointer-events:none; }
.btn.is-loading::after{ content:""; width:1em; height:1em; border-radius:999px; border:2px solid currentColor; border-top-color:transparent; display:inline-block; margin-left:.5rem; animation:spin .8s linear infinite; }
@keyframes spin{ to{ transform:rotate(360deg); } }`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            <div className="callout tip">
              Si haces estos 3 retos bien, ya tienes una base de sistema de botones real.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 13) TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>13) Test final (con feedback)</summary>
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
                      🏆 <strong>Perfecto.</strong> Ya piensas como un profesional: semántica, estados y accesibilidad.
                    </>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>
                      🎯 <strong>Muy bien.</strong> Repasa focus-visible y el uso correcto de type en button.
                    </>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>
                      📚 <strong>Buen nivel.</strong> Practica enlaces inline y nav links con aria-current.
                    </>
                  )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Aún no.</strong> Vuelve a la sección de semántica y estados: ahí está el núcleo.
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
          ✅ Cierre:
          <br />
          Si puedes justificar con palabras por qué algo es <code>&lt;a&gt;</code> o <code>&lt;button&gt;</code>,
          y tu componente tiene estados completos (incluido foco), ya estás construyendo como profesional.
        </div>

        <div className="doc-next">
          <a href="#" className="btn btn-primary">
            Siguiente lección → Formularios: inputs, labels y validación visual
          </a>
        </div>
      </section>
    </main>
  );
}
