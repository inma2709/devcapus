import { useEffect, useMemo, useState } from "react";

  export default function V32_Modales() {
  useEffect(() => {
    document.title =
      "V32 · Modales (Dialog) accesibles: foco, teclado, táctil y patrones PRO";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Cuál es la característica clave de un modal accesible cuando se abre?",
        options: [
          "Que tenga sombra",
          "Que bloquee el scroll del body",
          "Que mueva el foco dentro del modal y no deje tabular fuera",
          "Que sea centrado",
        ],
        correct: "Que mueva el foco dentro del modal y no deje tabular fuera",
        why:
          "Un modal debe gestionar el foco: al abrir, foco dentro; al tabular, no debe escaparse.",
      },
      {
        id: "q2",
        q: "¿Qué tecla se espera que cierre un modal en la mayoría de UIs?",
        options: ["Enter", "Escape (Esc)", "Tab", "Shift"],
        correct: "Escape (Esc)",
        why:
          "Esc es el estándar de facto: cerrar diálogos de forma rápida y consistente.",
      },
      {
        id: "q3",
        q: "¿Qué elemento HTML nativo es el más adecuado para un modal moderno?",
        options: ["div", "dialog", "section", "aside"],
        correct: "dialog",
        why:
          "<dialog> aporta semántica y métodos nativos como showModal()/close() (con soporte moderno).",
      },
      {
        id: "q4",
        q: "¿Qué atributo/relación es recomendable para que el modal tenga un “nombre accesible”?",
        options: [
          "placeholder",
          "aria-labelledby apuntando al título",
          "aria-hidden=true en el modal",
          "role=button",
        ],
        correct: "aria-labelledby apuntando al título",
        why:
          "El lector de pantalla necesita un nombre: aria-labelledby enlaza el título con el diálogo.",
      },
      {
        id: "q5",
        q: "¿Cuál es un patrón correcto al cerrar un modal?",
        options: [
          "Dejar el foco donde sea",
          "Devolver el foco al botón que abrió el modal",
          "Enviar el foco al body",
          "Ocultar el modal sin cambiar nada",
        ],
        correct: "Devolver el foco al botón que abrió el modal",
        why:
          "El usuario debe volver al punto de interacción: el “trigger” que abrió el modal.",
      },
      {
        id: "q6",
        q: "En móvil, ¿qué adaptación suele mejorar la usabilidad de modales largos?",
        options: [
          "Hacerlos siempre más pequeños",
          "Convertirlos en fullscreen o bottom-sheet con scroll interno",
          "Quitar el botón cerrar",
          "Ponerlos en hover",
        ],
        correct: "Convertirlos en fullscreen o bottom-sheet con scroll interno",
        why:
          "En pantallas pequeñas, fullscreen/bottom-sheet y scroll interno evita cortes y mejora el control táctil.",
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
        <p className="doc-kicker">V32 · Componentes</p>
        <h1>Modales (Dialog) PRO: accesibles, usables y consistentes</h1>

        <div className="callout tip">
          🎯 Lo que vas a dominar:
          <ul style={{ marginBottom: 0 }}>
            <li>Qué es un modal y cuándo NO usarlo.</li>
            <li>Patrón accesible completo: foco, teclado, cierre, y retorno de foco.</li>
            <li>Implementación con <code>&lt;dialog&gt;</code> + estilos de backdrop.</li>
            <li>Scroll interno, “scroll lock”, y modales largos.</li>
            <li>Adaptación móvil: fullscreen / bottom-sheet.</li>
            <li>Errores típicos (los que rompen accesibilidad).</li>
          </ul>
        </div>

        <p className="doc-lead">
          Un modal es un <strong>diálogo</strong> que interrumpe el flujo normal para pedir una acción,
          confirmar algo o mostrar información crítica. Si está mal hecho, crea un infierno:
          no se puede cerrar, el foco se pierde, el teclado queda atrapado fuera o el contenido
          “salta”. Si está bien hecho, se siente profesional y “natural”.
        </p>

        <div className="callout warn">
          Regla de oro:
          <br />
          ✅ Modal para acciones puntuales y críticas.
          <br />
          ❌ No uses modal como “página” (para contenido largo y navegación compleja).
        </div>

        <nav className="doc-index" aria-label="Índice del tema">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#concepto">1) Qué es un modal y cuándo usarlo</a></li>
            <li><a href="#a11y-checklist">2) Checklist de accesibilidad (lo que exige un modal)</a></li>
            <li><a href="#dialog-nativo">3) Implementación con &lt;dialog&gt;: HTML + CSS</a></li>
            <li><a href="#foco">4) Foco y teclado: Tab, Shift+Tab, Esc, retorno de foco</a></li>
            <li><a href="#scroll">5) Scroll interno, backdrop y “scroll lock”</a></li>
            <li><a href="#responsive">6) Adaptación móvil: fullscreen y bottom-sheet</a></li>
            <li><a href="#patrones">7) Patrones PRO: confirmación, formulario, contenido</a></li>
            <li><a href="#gotchas">8) Errores comunes</a></li>
            <li><a href="#retos">9) Retos prácticos</a></li>
            <li><a href="#test">10) Test final</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= 1) CONCEPTO ================= */}
      <section className="doc-section" id="concepto">
        <details className="dd" open>
          <summary>1) Qué es un modal y cuándo usarlo (criterio profesional)</summary>
          <div className="dd-body">
            <p>
              Un modal es un <strong>diálogo modal</strong>: cuando se abre, la intención es que
              el usuario resuelva esa interacción <strong>antes</strong> de volver al contenido
              de fondo. Por eso, desde accesibilidad, el foco debe quedarse dentro.
            </p>

            <div className="table-wrap" role="region" aria-label="Cuándo usar modal" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>✅ Sí (casos típicos)</th>
                    <th>❌ No (mejor otra solución)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Confirmar acción destructiva (“Eliminar”)</td>
                    <td>Mostrar un artículo largo o documentación</td>
                  </tr>
                  <tr>
                    <td>Formulario corto (login, newsletter)</td>
                    <td>Navegar entre muchas secciones (eso es una página)</td>
                  </tr>
                  <tr>
                    <td>Vista rápida de un elemento</td>
                    <td>Contenido que requiere muchos enlaces/scroll</td>
                  </tr>
                  <tr>
                    <td>Aviso legal / consentimiento puntual</td>
                    <td>“Porque queda bonito” (sin necesidad real)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              Si el contenido del modal requiere más de ~1-2 pantallas de scroll en móvil,
              plantéate un <strong>drawer</strong> o una <strong>página dedicada</strong>.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 2) CHECKLIST A11Y ================= */}
      <section className="doc-section" id="a11y-checklist">
        <details className="dd" open>
          <summary>2) Checklist de accesibilidad: lo que un modal debe cumplir</summary>
          <div className="dd-body">
            <div className="callout">
              ✅ Un modal accesible debe:
              <ul style={{ marginBottom: 0 }}>
                <li>Tener <strong>título</strong> (nombre accesible) y opcionalmente descripción.</li>
                <li>Al abrir: mover el <strong>foco</strong> a un elemento dentro (ej. título o primer control).</li>
                <li>Mientras está abierto: <strong>no permitir tabular</strong> al contenido de fondo.</li>
                <li>Permitir cerrar con <strong>Esc</strong> (salvo casos críticos justificados).</li>
                <li>Permitir cerrar con botón “Cerrar” visible y accesible.</li>
                <li>Al cerrar: devolver foco al botón que lo abrió.</li>
                <li>En móvil: targets táctiles cómodos (≥ 44px) y scroll interno bien resuelto.</li>
              </ul>
            </div>

            <div className="callout warn">
              Errores que rompen accesibilidad:
              <ul style={{ marginBottom: 0 }}>
                <li>Modal sin foco visible o sin gestión de foco.</li>
                <li>“Cerrar” solo con click fuera (backdrop) y sin botón.</li>
                <li>Quitar outline y no reemplazarlo.</li>
                <li>Contenido de fondo interactivo (tab se escapa).</li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* ================= 3) DIALOG NATIVO ================= */}
      <section className="doc-section" id="dialog-nativo">
        <details className="dd" open>
          <summary>3) Implementación con &lt;dialog&gt;: HTML + CSS (base profesional)</summary>
          <div className="dd-body">
            <p>
              El elemento <code>&lt;dialog&gt;</code> aporta un comportamiento nativo moderno.
              En React, lo controlas con una ref y <code>showModal()</code>/<code>close()</code>.
              Aquí te dejo una implementación lista y didáctica.
            </p>

            <details className="dd dd-nested" open>
              <summary>✅ Ejemplo completo (React): trigger + dialog + cierre</summary>
              <div className="dd-body">
                <pre>
                  <code>{`import { useEffect, useRef, useState } from "react";

export function DemoModal() {
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    openerRef.current = document.activeElement; // guardamos el trigger para devolver foco
    dialogRef.current?.showModal();
    setOpen(true);

    // mover foco dentro (al título o al primer control)
    requestAnimationFrame(() => {
      dialogRef.current?.querySelector("[data-autofocus]")?.focus();
    });
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setOpen(false);

    // devolver foco al trigger
    requestAnimationFrame(() => {
      openerRef.current?.focus?.();
    });
  };

  // cerrar con Escape: dialog ya lo hace nativo, pero escuchamos "close" para sincronizar estado
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;

    const onClose = () => {
      setOpen(false);
      requestAnimationFrame(() => openerRef.current?.focus?.());
    };

    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Demo · Modal accesible</h3>

      <button className="btn btn-primary" type="button" onClick={openModal}>
        Abrir modal
      </button>

      <dialog
        ref={dialogRef}
        className="modal"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
      >
        <div className="modal-box">
          <header className="modal-head">
            <h2 id="modal-title" className="modal-title" data-autofocus tabIndex={-1}>
              Confirmar acción
            </h2>

            <button className="modal-close" type="button" onClick={closeModal} aria-label="Cerrar modal">
              ✕
            </button>
          </header>

          <p id="modal-desc" className="modal-desc">
            Vas a eliminar un elemento. Esta acción no se puede deshacer.
          </p>

          <div className="modal-actions">
            <button className="btn" type="button" onClick={closeModal}>
              Cancelar
            </button>
            <button className="btn btn-primary" type="button">
              Confirmar
            </button>
          </div>
        </div>
      </dialog>

      <div className="callout tip" style={{ marginTop: "1rem" }}>
        Estado: <strong>{open ? "abierto" : "cerrado"}</strong>
      </div>
    </div>
  );
}`}</code>
                </pre>

                <div className="callout">
                  Puntos clave:
                  <ul style={{ marginBottom: 0 }}>
                    <li>Guardamos el elemento activo antes de abrir para <strong>devolver foco</strong>.</li>
                    <li>Al abrir, movemos el foco a <code>[data-autofocus]</code> (título).</li>
                    <li>Botón cerrar con <code>aria-label</code>.</li>
                    <li><code>aria-labelledby</code> y <code>aria-describedby</code> para nombre/descr.</li>
                  </ul>
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>CSS del modal (pro, accesible, adaptable)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* =========================
   MODAL (dialog) — estilos PRO
   ========================= */

/* Backdrop del dialog */
.modal::backdrop{
  background: rgba(15, 23, 42, .55);
}

/* Caja del modal (dialog) */
.modal{
  border: 0;
  padding: 0;
  border-radius: 1rem;
  width: min(720px, calc(100% - 2rem));
  box-shadow: 0 24px 80px rgba(0,0,0,.28);
}

/* Contenido interno (para padding y layout) */
.modal-box{
  background: #fff;
  color: #111;
  border-radius: 1rem;
  padding: 1rem 1rem 1.1rem;
}

/* Cabecera */
.modal-head{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: .75rem;
}

.modal-title{
  margin: 0;
  font-size: 1.25rem;
  font-weight: 950;
  line-height: 1.2;
}

.modal-desc{
  margin: .75rem 0 1rem;
  opacity: .9;
}

/* Botón cerrar: target táctil */
.modal-close{
  width: 44px;
  height: 44px;
  border-radius: .9rem;
  border: 1px solid rgba(0,0,0,.12);
  background: #fff;
  cursor: pointer;
  display: inline-grid;
  place-items: center;
  font-weight: 900;
}

.modal-close:hover{
  background: rgba(0,0,0,.04);
}

.modal-close:focus{
  outline: none;
}

.modal-close:focus-visible{
  outline: 3px solid rgba(0,0,0,.85);
  outline-offset: 3px;
}

/* Acciones */
.modal-actions{
  display: flex;
  justify-content: flex-end;
  gap: .65rem;
  margin-top: .75rem;
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce){
  .modal{ scroll-behavior: auto; }
}`}</code>
                </pre>

                <div className="callout tip">
                  Fíjate: el modal es “componente” y su CSS es autocontenido.
                  Luego, en Responsive, lo adaptarás (fullscreen/bottom-sheet).
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 4) FOCO Y TECLADO ================= */}
      <section className="doc-section" id="foco">
        <details className="dd" open>
          <summary>4) Foco y teclado: Tab, Shift+Tab, Esc y retorno de foco (lo esencial)</summary>
          <div className="dd-body">
            <div className="callout">
              Teclado esperado:
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Tab</strong>: recorre controles dentro del modal.</li>
                <li><strong>Shift+Tab</strong>: recorre hacia atrás.</li>
                <li><strong>Esc</strong>: cierra (si está permitido).</li>
                <li><strong>Enter</strong>: activa el botón enfocado (según contexto).</li>
              </ul>
            </div>

            <p>
              El elemento <code>&lt;dialog&gt;</code> en modo modal ayuda a mantener el foco.
              Aun así, tu responsabilidad es:
              <strong> enfocar algo</strong> al abrir y <strong>devolver foco</strong> al cerrar.
            </p>

            <div className="callout warn">
              No enfoques siempre el primer input si el modal es “informativo”.
              En modales informativos, enfocar el <strong>título</strong> (con tabIndex=-1) es muy buena práctica.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 5) SCROLL / LOCK ================= */}
      <section className="doc-section" id="scroll">
        <details className="dd" open>
          <summary>5) Scroll interno, backdrop y “scroll lock”</summary>
          <div className="dd-body">
            <p>
              Cuando el contenido del modal es largo, lo correcto es que el scroll ocurra
              <strong> dentro del modal</strong>, no en el body. Si el fondo se mueve,
              el usuario pierde orientación.
            </p>

            <details className="dd dd-nested" open>
              <summary>Modal con scroll interno (patrón)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Caja con altura máxima y scroll interno */
.modal-box{
  max-height: min(80vh, 720px);
  overflow: auto;
}

/* Cabecera pegada (opcional) */
.modal-head{
  position: sticky;
  top: 0;
  background: #fff;
  padding-bottom: .5rem;
}`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>¿Hace falta “scroll lock” manual?</summary>
              <div className="dd-body">
                <p>
                  Con <code>&lt;dialog&gt;</code> en modo modal, el navegador ya reduce bastante
                  la interacción con el fondo. Aun así, en algunos diseños puede interesar
                  bloquear el scroll del body cuando el modal está abierto (especialmente si no usas dialog).
                </p>

                <div className="callout tip">
                  En React, si algún día lo haces: añade/quita una clase en <code>body</code> al abrir/cerrar,
                  y aplica <code>overflow:hidden</code>. (Esto ya entra en JS/React, no solo CSS.)
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 6) RESPONSIVE ================= */}
      <section className="doc-section" id="responsive">
        <details className="dd" open>
          <summary>6) Adaptación móvil: fullscreen y bottom-sheet (usabilidad táctil)</summary>
          <div className="dd-body">
            <p>
              En móvil hay 2 patrones top:
              <strong> fullscreen</strong> (formularios) y <strong>bottom-sheet</strong> (acciones rápidas).
            </p>

            <details className="dd dd-nested" open>
              <summary>Fullscreen modal (móvil)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`@media (max-width: 520px){
  .modal{
    width: 100%;
    margin: 0;
    border-radius: 0;
  }

  .modal-box{
    border-radius: 0;
    min-height: 100dvh; /* viewport dinámico móvil */
    max-height: 100dvh;
  }

  .modal-actions{
    position: sticky;
    bottom: 0;
    background: #fff;
    padding-top: .75rem;
    padding-bottom: calc(.75rem + env(safe-area-inset-bottom));
  }
}`}</code>
                </pre>

                <div className="callout tip">
                  <code>100dvh</code> evita problemas con barras del navegador móvil.
                  Y <code>safe-area</code> protege botones en iPhone.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Bottom-sheet (móvil): se “pega abajo”</summary>
              <div className="dd-body">
                <pre>
                  <code>{`@media (max-width: 520px){
  .modal{
    align-self: end; /* dialog centrado por defecto, esta técnica ayuda */
  }

  .modal-box{
    border-radius: 1.25rem 1.25rem 0 0;
  }
}`}</code>
                </pre>

                <div className="callout warn">
                  Bottom-sheet real suele requerir más control (animación, drag).
                  Aquí lo dejamos como patrón visual simple y didáctico.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 7) PATRONES PRO ================= */}
      <section className="doc-section" id="patrones">
        <details className="dd" open>
          <summary>7) Patrones PRO: confirmación, formulario y contenido</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>Patrón A: confirmación destructiva (Recomendado)</summary>
              <div className="dd-body">
                <div className="callout tip">
                  Siempre ofrece “Cancelar” + acción principal clara (“Eliminar”) y explica consecuencias.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Patrón B: formulario dentro del modal (Login / newsletter)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<dialog class="modal" aria-labelledby="login-title" aria-describedby="login-desc">
  <div class="modal-box">
    <header class="modal-head">
      <h2 id="login-title" class="modal-title" tabIndex="-1" data-autofocus>Acceder</h2>
      <button class="modal-close" aria-label="Cerrar">✕</button>
    </header>

    <p id="login-desc" class="modal-desc">Introduce tus credenciales.</p>

    <form class="form">
      <div class="field">
        <label class="label" for="m-email">Email</label>
        <input class="input" id="m-email" type="email" autocomplete="email" required />
      </div>

      <div class="field">
        <label class="label" for="m-pass">Contraseña</label>
        <input class="input" id="m-pass" type="password" autocomplete="current-password" required />
      </div>

      <div class="modal-actions">
        <button class="btn" type="button">Cancelar</button>
        <button class="btn btn-primary" type="submit">Entrar</button>
      </div>
    </form>
  </div>
</dialog>`}</code>
                </pre>

                <div className="callout warn">
                  Si el formulario es largo, mejor fullscreen en móvil o página dedicada.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Patrón C: contenido informativo corto</summary>
              <div className="dd-body">
                <p>
                  Para contenido breve (aviso, ayuda), el foco al título + botón cerrar es excelente.
                  Mantén el texto corto y escaneable.
                </p>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 8) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>8) Errores comunes (y por qué arruinan el componente)</summary>
          <div className="dd-body">
            <ul>
              <li><strong>Sin botón cerrar</strong>: en táctil el usuario se queda atrapado.</li>
              <li><strong>Click fuera como única salida</strong>: no es accesible ni evidente.</li>
              <li><strong>Sin foco visible</strong>: teclado inutilizable.</li>
              <li><strong>No devolver foco</strong>: el usuario pierde el contexto al cerrar.</li>
              <li><strong>Modal infinito</strong> (sin max-height): se sale del viewport.</li>
              <li><strong>Animaciones exageradas</strong> sin <code>prefers-reduced-motion</code>.</li>
            </ul>

            <div className="callout warn">
              Nunca “deshabilites” Esc sin motivo serio. Si lo haces, necesitas alternativas muy claras.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 9) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>9) Retos prácticos (para dominar el modal)</summary>
          <div className="dd-body">
            <div className="callout">
              Haz estos retos para que el modal te salga de memoria (nivel profesional).
            </div>

            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1: crea un modal con título accesible y botón cerrar</summary>
              <div className="dd-body">
                <ul>
                  <li>Usa <code>&lt;dialog&gt;</code></li>
                  <li>Conecta <code>aria-labelledby</code> al título</li>
                  <li>Botón cerrar con <code>aria-label</code></li>
                </ul>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>🟡 Reto 2: añade scroll interno + sticky header</summary>
              <div className="dd-body">
                <ul>
                  <li><code>max-height: 80vh</code> + <code>overflow:auto</code></li>
                  <li><code>position: sticky</code> para cabecera</li>
                </ul>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>🔴 Reto 3: versión móvil fullscreen con safe-area</summary>
              <div className="dd-body">
                <ul>
                  <li>Media query a <code>max-width:520px</code></li>
                  <li>Usa <code>100dvh</code></li>
                  <li>Acciones sticky abajo con <code>env(safe-area-inset-bottom)</code></li>
                </ul>
              </div>
            </details>

            <div className="callout tip">
              Si dominas el reto 3, estás a nivel “producción real”.
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
                      🏆 <strong>Excelente.</strong> Ya entiendes modales como componente profesional (a11y + UX).
                    </>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>
                      🎯 <strong>Muy bien.</strong> Repasa retorno de foco y nombre accesible.
                    </>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>
                      📚 <strong>Buen nivel.</strong> Revisa foco y adaptación móvil.
                    </>
                  )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Aún no.</strong> Vuelve al checklist: foco + Esc + botón cerrar + retorno de foco.
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
          Un modal bien hecho se nota porque:
          <strong> se abre sin “sustos”</strong>, el foco entra, Tab no se escapa,
          Esc funciona, cerrar devuelve al punto exacto, y en móvil no se rompe.
        </div>

        <div className="doc-next">
          <a href="#" className="btn btn-primary">
            Siguiente lección → Tooltips, Popovers y Dropdowns
          </a>
        </div>
      </section>
    </main>
  );
}
