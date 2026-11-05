import { useEffect, useMemo, useState } from "react";

export default function V19_Flexbox() {
  useEffect(() => {
    document.title = "V19 · Flexbox: de ejes y alineación a layouts profesionales";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué frase describe mejor Flexbox?",
        options: [
          "Un sistema bidimensional para filas y columnas a la vez",
          "Un sistema unidimensional para alinear y distribuir elementos en un eje",
          "Un sistema solo para centrar cosas",
          "Una alternativa a position:absolute",
        ],
        correct:
          "Un sistema unidimensional para alinear y distribuir elementos en un eje",
        why: "Flexbox trabaja principalmente en un eje (principal) y su eje perpendicular (secundario). Para layouts 2D, suele encajar mejor Grid.",
      },
      {
        id: "q2",
        q: "¿Qué propiedad define la dirección del eje principal?",
        options: ["align-items", "flex-wrap", "flex-direction", "justify-content"],
        correct: "flex-direction",
        why: "flex-direction define hacia dónde fluye el eje principal (row/column y sus reverses).",
      },
      {
        id: "q3",
        q: "En un contenedor con flex-direction: row, ¿qué alinea en el eje principal?",
        options: ["align-items", "justify-content", "align-content", "align-self"],
        correct: "justify-content",
        why: "justify-content siempre alinea sobre el eje principal (que en row es horizontal).",
      },
      {
        id: "q4",
        q: "¿Qué hace gap en Flexbox?",
        options: [
          "Ajusta el tamaño base de cada ítem",
          "Define el espacio entre ítems sin trucos de márgenes",
          "Activa el salto de línea",
          "Cambia el orden visual",
        ],
        correct: "Define el espacio entre ítems sin trucos de márgenes",
        why: "gap crea separación consistente entre ítems (y líneas cuando hay wrap), sin depender de márgenes laterales.",
      },
      {
        id: "q5",
        q: "¿Qué significa flex: 1 0 200px?",
        options: [
          "grow=1, shrink=0, basis=200px",
          "grow=0, shrink=1, basis=200px",
          "grow=1, shrink=1, basis=0",
          "basis=1px, grow=0, shrink=200",
        ],
        correct: "grow=1, shrink=0, basis=200px",
        why: "El shorthand flex es: flex-grow flex-shrink flex-basis.",
      },
      {
        id: "q6",
        q: "¿Cuándo tiene sentido align-content?",
        options: [
          "Siempre, aunque haya una sola línea",
          "Solo cuando hay varias líneas (wrap) y sobra espacio en el eje secundario",
          "Solo para centrar en el eje principal",
          "Solo dentro de ítems, no en el contenedor",
        ],
        correct:
          "Solo cuando hay varias líneas (wrap) y sobra espacio en el eje secundario",
        why: "align-content distribuye líneas (no ítems) en el eje secundario, y requiere wrap y múltiples líneas.",
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
      {/* Skip link (si ya lo tienes global, puedes borrar esto) */}
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ================= HERO ================= */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">V19 · CSS Layout Avanzado</p>
        <h1>Flexbox: domina ejes, alineación y patrones de layout profesionales</h1>

        {/* Analogía */}
        <div
          style={{
            backgroundColor: "#fff7ed",
            padding: "1.5rem",
            borderRadius: "0.75rem",
            marginBottom: "1.25rem",
            border: "1px solid rgba(228,77,38,.25)",
          }}
        >
          <h3 style={{ marginTop: 0, color: "#9a3412" }}>
            🧭 Analogía del GPS: una carretera principal y un carril perpendicular
          </h3>
          <p style={{ marginBottom: "1rem", color: "#7c2d12" }}>
            Imagina que el contenedor es una <strong>carretera</strong> por la que
            circulan los elementos (ítems). Flexbox te da control total sobre:
          </p>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "1rem",
                borderRadius: "0.6rem",
                border: "1px solid rgba(0,0,0,.08)",
              }}
            >
              <h4 style={{ marginTop: 0, color: "#ea580c", fontSize: ".95rem" }}>
                ➜ Eje principal (main axis)
              </h4>
              <p style={{ margin: 0, fontSize: ".9rem", color: "#7c2d12" }}>
                Es la dirección “de avance” (row o column).{" "}
                <strong>justify-content</strong> reparte y alinea en este eje.
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "1rem",
                borderRadius: "0.6rem",
                border: "1px solid rgba(0,0,0,.08)",
              }}
            >
              <h4 style={{ marginTop: 0, color: "#ea580c", fontSize: ".95rem" }}>
                ⟂ Eje secundario (cross axis)
              </h4>
              <p style={{ margin: 0, fontSize: ".9rem", color: "#7c2d12" }}>
                Es perpendicular al principal.{" "}
                <strong>align-items</strong> alinea ítems en este eje.
              </p>
            </div>
          </div>

          <div className="callout tip" style={{ marginTop: "1rem" }}>
            🎯 Idea clave: no pienses “horizontal/vertical”. Piensa siempre en{" "}
            <strong>eje principal</strong> y <strong>eje secundario</strong>.
          </div>
        </div>

        <p className="doc-lead">
          Flexbox es el sistema más potente para{" "}
          <strong>alinear, distribuir y dimensionar</strong> elementos cuando el
          layout se puede describir como “una fila” o “una columna”, aunque haya
          wrap. Dominar Flexbox significa saber resolver: navbars, cards,
          centrados perfectos, sidebars, toolbars, chips, formularios alineados y
          layouts responsive sin hacks.
        </p>

        <div className="callout tip">
          🏆 Objetivo: que puedas diseñar con Flexbox “sin prueba-error”, prediciendo
          el resultado solo con ver el CSS.
        </div>

        {/* ================= ÍNDICE ================= */}
        <nav className="doc-index" aria-label="Índice del tema">
          <h2>🧭 Índice</h2>
          <ol>
            <li>
              <a href="#modelo">1) Modelo mental: contenedor, ítems y ejes</a>
            </li>
            <li>
              <a href="#contenedor">2) Propiedades del contenedor (las que mandan)</a>
            </li>
            <li>
              <a href="#items">3) Propiedades de los ítems (tamaños, crecimiento y orden)</a>
            </li>
            <li>
              <a href="#patrones">4) Patrones profesionales (navbar, cards, sidebar, centrado)</a>
            </li>
            <li>
              <a href="#gotchas">5) Gotchas y depuración (por qué “no hace caso”)</a>
            </li>
            <li>
              <a href="#retos">6) Retos prácticos (de control a soltura real)</a>
            </li>
            <li>
              <a href="#test">7) Test de evaluación con feedback</a>
            </li>
          </ol>

          <div className="callout" style={{ marginTop: "1rem" }}>
            🔥 Estrategia: aprende el modelo (ejes) → domina contenedor → domina ítems
            → aplica patrones → valida con retos y test.
          </div>
        </nav>
      </header>

      {/* ================= 1) MODELO ================= */}
      <section className="doc-section" id="modelo">
        <details className="dd" open>
          <summary>1) Modelo mental: contenedor, ítems y ejes</summary>
          <div className="dd-body">
            <p>
              Flexbox empieza siempre con una decisión:{" "}
              <strong>¿quién es el contenedor flex?</strong> Solo los{" "}
              <strong>hijos directos</strong> de ese contenedor se convierten en
              flex items.
            </p>

            <pre>
              <code>{`/* 1) Contenedor flex */
.container{
  display: flex;
}

/* 2) Los hijos directos de .container son flex items */
.container > *{
  /* aquí se aplican propiedades de ítem (flex, order, align-self...) */
}`}</code>
            </pre>

            <div className="callout tip">
              📌 Regla: si el elemento que quieres alinear <strong>no es hijo directo</strong>,
              Flexbox “no lo ve”. O cambias la estructura, o haces flex en el padre correcto.
            </div>

            <details className="dd dd-nested" open>
              <summary>Los ejes cambian con flex-direction</summary>
              <div className="dd-body">
                <p>
                  <code>flex-direction</code> define el eje principal. Eso cambia
                  qué significa “centrar” o “repartir”.
                </p>

                <div className="table-wrap" role="region" aria-label="Tabla ejes" tabIndex={0}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>flex-direction</th>
                        <th>Eje principal (main)</th>
                        <th>Eje secundario (cross)</th>
                        <th>justify-content actúa en…</th>
                        <th>align-items actúa en…</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>row</code></td>
                        <td>Horizontal</td>
                        <td>Vertical</td>
                        <td>Horizontal</td>
                        <td>Vertical</td>
                      </tr>
                      <tr>
                        <td><code>column</code></td>
                        <td>Vertical</td>
                        <td>Horizontal</td>
                        <td>Vertical</td>
                        <td>Horizontal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="callout warn">
                  Error típico: “align-items centra horizontalmente”. No siempre.
                  Depende de <code>flex-direction</code>.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 2) CONTENEDOR ================= */}
      <section className="doc-section" id="contenedor">
        <details className="dd" open>
          <summary>2) Propiedades del contenedor: dirección, alineación, wrap, gap</summary>
          <div className="dd-body">
            <p>
              El contenedor define las reglas de distribución:{" "}
              <strong>dirección</strong>, <strong>alineación</strong>,{" "}
              <strong>saltos de línea</strong> y <strong>separación</strong>.
            </p>

            <details className="dd dd-nested" open>
              <summary>2.1 display:flex vs inline-flex</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.fila{ display: flex; }       /* contenedor como bloque */
.filaEnLinea{ display: inline-flex; } /* contenedor en línea */`}</code>
                </pre>

                <div className="callout">
                  <strong>display:flex</strong> hace que el contenedor se comporte como bloque.
                  <strong> inline-flex</strong> lo mantiene en línea, pero sus hijos siguen siendo flex items.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>2.2 flex-direction: define el eje principal</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.container{
  display:flex;
  flex-direction: row; /* row | row-reverse | column | column-reverse */
}`}</code>
                </pre>

                <div className="callout tip">
                  Si estás maquetando “tarjetas en fila”, suele ser <code>row</code>.
                  Si estás apilando “bloques verticales”, suele ser <code>column</code>.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>2.3 justify-content: reparte en el eje principal</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.container{
  display:flex;
  justify-content: space-between;
}`}</code>
                </pre>

                <div className="table-wrap" role="region" aria-label="Tabla justify-content" tabIndex={0}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Valor</th>
                        <th>Qué hace</th>
                        <th>Uso típico</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>flex-start</code></td>
                        <td>Ítems al inicio del eje principal</td>
                        <td>Listas alineadas a la izquierda</td>
                      </tr>
                      <tr>
                        <td><code>center</code></td>
                        <td>Ítems centrados</td>
                        <td>Botoneras centradas</td>
                      </tr>
                      <tr>
                        <td><code>flex-end</code></td>
                        <td>Ítems al final</td>
                        <td>Acciones alineadas a la derecha</td>
                      </tr>
                      <tr>
                        <td><code>space-between</code></td>
                        <td>Primero al inicio, último al final</td>
                        <td>Navbar logo ↔ enlaces</td>
                      </tr>
                      <tr>
                        <td><code>space-evenly</code></td>
                        <td>Espacio uniforme entre y bordes</td>
                        <td>Menús equilibrados</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="callout warn">
                  Si quieres separación consistente, usa <code>gap</code> antes que
                  forzar <code>space-between</code> “porque sí”.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>2.4 align-items: alinea ítems en el eje secundario</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.container{
  display:flex;
  align-items: center; /* stretch | flex-start | center | flex-end | baseline */
}`}</code>
                </pre>

                <div className="callout tip">
                  <code>stretch</code> (por defecto) estira los ítems en el eje secundario
                  si no tienen tamaño fijado.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>2.5 gap y flex-wrap: separación + saltos de línea</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.container{
  display:flex;
  flex-wrap: wrap;   /* nowrap | wrap | wrap-reverse */
  gap: 16px;         /* separación entre ítems y líneas */
}`}</code>
                </pre>

                <div className="callout">
                  <strong>wrap</strong> permite múltiples líneas. Con wrap activo, aparece un nuevo
                  concepto: <code>align-content</code> (distribuye líneas).
                </div>

                <details className="dd dd-nested">
                  <summary>¿align-items o align-content?</summary>
                  <div className="dd-body">
                    <div className="table-wrap" role="region" aria-label="Tabla align-items vs align-content" tabIndex={0}>
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Propiedad</th>
                            <th>Qué alinea</th>
                            <th>Cuándo tiene efecto</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><code>align-items</code></td>
                            <td>Ítems (en cada línea)</td>
                            <td>Siempre</td>
                          </tr>
                          <tr>
                            <td><code>align-content</code></td>
                            <td>Líneas (bloques de líneas)</td>
                            <td>Solo con wrap y varias líneas</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <pre>
                      <code>{`.container{
  display:flex;
  flex-wrap: wrap;
  align-content: space-between; /* distribuye líneas */
}`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>2.6 Atajo mental: “centrado perfecto”</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.center{
  display:flex;
  justify-content:center;
  align-items:center;
}`}</code>
                </pre>

                <div className="callout tip">
                  Si además necesitas centrar dentro de una altura, asegúrate de tener altura disponible
                  (por ejemplo, <code>min-height</code>).
                </div>

                <pre>
                  <code>{`.heroCenter{
  min-height: 60vh;
  display:flex;
  justify-content:center;
  align-items:center;
}`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 3) ITEMS ================= */}
      <section className="doc-section" id="items">
        <details className="dd" open>
          <summary>3) Propiedades de los ítems: tamaño, crecimiento, orden y alineación individual</summary>
          <div className="dd-body">
            <p>
              Aquí está el salto a nivel profesional: entender{" "}
              <strong>cómo calcula tamaños Flexbox</strong> y cómo los ítems pueden{" "}
              <strong>crecer, encoger o fijar su base</strong>.
            </p>

            <details className="dd dd-nested" open>
              <summary>3.1 flex-grow / flex-shrink / flex-basis</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.itemA{ flex-grow: 1; }
.itemB{ flex-shrink: 0; }
.itemC{ flex-basis: 240px; }`}</code>
                </pre>

                <div className="table-wrap" role="region" aria-label="Tabla grow/shrink/basis" tabIndex={0}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Propiedad</th>
                        <th>Idea</th>
                        <th>Traducción práctica</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>flex-basis</code></td>
                        <td>Tamaño inicial</td>
                        <td>“Mi punto de partida” antes de repartir</td>
                      </tr>
                      <tr>
                        <td><code>flex-grow</code></td>
                        <td>Capacidad de crecer</td>
                        <td>“¿Puedo ocupar espacio sobrante?”</td>
                      </tr>
                      <tr>
                        <td><code>flex-shrink</code></td>
                        <td>Capacidad de encoger</td>
                        <td>“¿Me dejo apretar si falta espacio?”</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="callout warn">
                  Si un ítem “se aplasta” y no quieres, revisa <code>flex-shrink</code> y <code>min-width</code>.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>3.2 Shorthand flex (lo que debes dominar sí o sí)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* flex: grow shrink basis */
.item{ flex: 1 1 0; }
.sidebar{ flex: 0 0 280px; }`}</code>
                </pre>

                <div className="callout tip">
                  Patrones útiles:
                  <ul style={{ marginBottom: 0 }}>
                    <li>
                      <code>flex: 1</code> → “rellena el espacio disponible” (muy común para el contenido principal)
                    </li>
                    <li>
                      <code>flex: 0 0 280px</code> → “ancho fijo” (sidebar, chips con tamaño fijo)
                    </li>
                    <li>
                      <code>flex: 1 0 240px</code> → “crece pero no te encojas” (cards que no deben apretarse demasiado)
                    </li>
                  </ul>
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>3.3 order: reordenar visualmente (con criterio)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.item{ order: 0; }
.prioritaria{ order: -1; }
.secundaria{ order: 2; }`}</code>
                </pre>

                <div className="callout warn">
                  Reordenar visualmente puede afectar a la navegación por teclado y al orden lógico.
                  Úsalo para ajustes puntuales, no para “cambiar el HTML”.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>3.4 align-self: alinear un ítem distinto</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.itemEspecial{
  align-self: flex-end; /* sobreescribe align-items */
}`}</code>
                </pre>

                <div className="callout">
                  Perfecto para un botón “Cerrar” en una esquina, un chip que debe bajar, etc.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>3.5 El truco profesional: márgenes automáticos</summary>
              <div className="dd-body">
                <p>
                  <code>margin-left: auto</code> o <code>margin-top: auto</code> empuja un ítem al
                  extremo del eje principal. Es un patrón ultra estable.
                </p>

                <pre>
                  <code>{`/* Navbar: empuja el bloque de acciones a la derecha */
.nav{
  display:flex;
  align-items:center;
  gap: 12px;
}
.nav .actions{
  margin-left: auto;
}`}</code>
                </pre>

                <div className="callout tip">
                  Piensa “auto margin” como un separador elástico que empuja.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 4) PATRONES ================= */}
      <section className="doc-section" id="patrones">
        <details className="dd" open>
          <summary>4) Patrones profesionales de Flexbox (listos para producción)</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>Patrón A · Navbar robusto (logo + links + acciones)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- HTML -->
<header class="top">
  <div class="logo">Marca</div>
  <nav class="links">
    <a href="#">Inicio</a>
    <a href="#">Cursos</a>
    <a href="#">Contacto</a>
  </nav>
  <div class="actions">
    <button>Login</button>
    <button>Registro</button>
  </div>
</header>`}</code>
                </pre>

                <pre>
                  <code>{`/* CSS */
.top{
  display:flex;
  align-items:center;
  gap: 12px;
  padding: 12px 16px;
}
.links{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
}
.actions{
  margin-left:auto; /* empuja acciones al final */
  display:flex;
  gap: 8px;
}`}</code>
                </pre>

                <div className="callout tip">
                  Este patrón escala bien: si los links crecen, se envuelven con <code>wrap</code> sin romper.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Patrón B · Grid de tarjetas responsive con wrap + basis</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Contenedor */
.cards{
  display:flex;
  flex-wrap: wrap;
  gap: 16px;
}

/* Tarjeta: base 260px, crece para rellenar, y no se aplasta demasiado */
.card{
  flex: 1 1 260px;
  min-width: 240px;
}`}</code>
                </pre>

                <div className="callout">
                  Si quieres “tarjetas que se adapten” sin Grid, este patrón es muy efectivo.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Patrón C · Sidebar + contenido (layout clásico)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Contenedor principal */
.layout{
  display:flex;
  gap: 16px;
  align-items: stretch;
}

/* Sidebar fija */
.sidebar{
  flex: 0 0 280px;
}

/* Contenido elástico */
.content{
  flex: 1;
  min-width: 0; /* CLAVE: permite que el contenido encaje sin desbordar */
}`}</code>
                </pre>

                <div className="callout warn">
                  <strong>min-width: 0</strong> en el contenido es un truco de producción: evita desbordes cuando
                  hay textos largos o elementos que no se encogen bien.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Patrón D · “Footer pegado abajo” con Flex en la página</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Página completa */
.page{
  min-height: 100vh;
  display:flex;
  flex-direction: column;
}

/* El main ocupa el espacio */
.page main{
  flex: 1;
}`}</code>
                </pre>

                <div className="callout tip">
                  Este patrón evita hacks y funciona perfecto con headers fijos o variables.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 5) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>5) Gotchas y depuración: cuando Flexbox “no hace lo que esperas”</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>El ítem no es hijo directo</strong>: solo los hijos directos son flex items.
              </li>
              <li>
                <strong>Te falta altura</strong>: no puedes centrar verticalmente si el contenedor no tiene altura.
              </li>
              <li>
                <strong>min-width/min-height por defecto</strong>: algunos contenidos no se encogen como esperas.
                Usa <code>min-width:0</code> en contenedores flex para evitar overflow.
              </li>
              <li>
                <strong>align-content no hace nada</strong>: si no hay wrap y varias líneas, no aplica.
              </li>
              <li>
                <strong>Confusión de ejes</strong>: cambia <code>flex-direction</code> y cambia lo que significa “principal”.
              </li>
              <li>
                <strong>space-between para “separar”</strong>: mejor <code>gap</code> si lo que quieres es distancia constante.
              </li>
              <li>
                <strong>order abusivo</strong>: puede romper el orden lógico para teclado/lectores.
              </li>
            </ul>

            <div className="callout tip">
              ✅ Técnica de diagnóstico: escribe temporalmente{" "}
              <code>outline: 2px solid</code> al contenedor y a los ítems para “ver” cajas y ejes.
            </div>

            <pre>
              <code>{`/* Debug rápido */
.flexDebug{ outline: 2px dashed rgba(228,77,38,.6); }
.flexDebug > *{ outline: 2px solid rgba(31,41,55,.35); }`}</code>
            </pre>
          </div>
        </details>
      </section>

      {/* ================= 6) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>6) Retos prácticos: del control al dominio real</summary>
          <div className="dd-body">
            <div className="callout">
              🚀 Hazlos en tu editor. No busques “copiar y pegar”: el objetivo es que puedas
              <strong> justificar</strong> cada propiedad.
            </div>

            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1 · Toolbar: icono + título + acciones a la derecha</summary>
              <div className="dd-body">
                <p>
                  Construye una barra con icono, un título, y un grupo de botones a la derecha.
                  Requisito: que el título no empuje a los botones fuera de pantalla; debe recortar o envolver.
                </p>
                <pre>
                  <code>{`/* Pistas:
- .bar: display:flex; align-items:center; gap
- .actions: margin-left:auto; display:flex; gap
- El título puede necesitar flex:1 y min-width:0
*/`}</code>
                </pre>

                <details className="dd dd-nested">
                  <summary>Ver solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`/* CSS */
.bar{
  display:flex;
  align-items:center;
  gap: 12px;
  padding: 12px 16px;
}
.title{
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.actions{
  margin-left:auto;
  display:flex;
  gap: 8px;
}`}</code>
                    </pre>
                    <div className="callout tip">
                      🧠 Clave: <code>min-width:0</code> permite que el título se encoga y no provoque overflow.
                    </div>
                  </div>
                </details>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>🟡 Reto 2 · Cards responsive: 1 → 2 → 3 columnas según espacio</summary>
              <div className="dd-body">
                <p>
                  Crea tarjetas que se adapten al ancho: se van colocando como “mosaico” en líneas.
                  Objetivo: sin media queries obligatorias.
                </p>

                <details className="dd dd-nested">
                  <summary>Ver solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`/* CSS */
.cards{
  display:flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card{
  flex: 1 1 280px; /* base flexible */
  min-width: 240px;
}`}</code>
                    </pre>
                    <div className="callout">
                      Ajusta el <code>flex-basis</code> (280px) según tu diseño: define el “ancho ideal” de la tarjeta.
                    </div>
                  </div>
                </details>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>🔴 Reto 3 · Layout: sidebar fija + contenido que no desborda (caso real)</summary>
              <div className="dd-body">
                <p>
                  Tienes una sidebar de 280px y un contenido con tablas o código largo.
                  Debe caber sin romper el layout: si hace falta, scroll horizontal dentro del contenido.
                </p>

                <details className="dd dd-nested">
                  <summary>Ver solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`/* CSS */
.layout{
  display:flex;
  gap: 16px;
}
.sidebar{
  flex: 0 0 280px;
}
.main{
  flex: 1;
  min-width: 0;      /* evita overflow del ítem flex */
}
.main .table-wrap,
.main pre{
  overflow: auto;    /* scroll interno si el contenido es más ancho */
}`}</code>
                    </pre>
                    <div className="callout tip">
                      🎯 Este reto es “real”: sin <code>min-width:0</code> el contenido puede forzar desbordes inesperados.
                    </div>
                  </div>
                </details>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 7) TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>🏆 Test de evaluación: valida tu dominio de Flexbox</summary>
          <div className="dd-body">
            <div className="callout">
              🎯 Responde sin apuntes. Lo importante es tu capacidad de predecir el layout.
            </div>

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
                      🏆 <strong>Excelente.</strong> Controlas el modelo mental (ejes), el contenedor,
                      los ítems y los casos reales.
                    </>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>
                      🎯 <strong>Muy buen nivel.</strong> Repasa especialmente <code>align-content</code>,
                      <code>min-width:0</code> y el shorthand <code>flex</code>.
                    </>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>
                      📚 <strong>Buen avance.</strong> Te recomiendo practicar 2–3 patrones (navbar, cards, sidebar)
                      hasta que puedas escribirlos sin mirar.
                    </>
                  )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Necesitas más práctica guiada.</strong> Repite los retos y asegúrate de entender
                      qué propiedad actúa en qué eje.
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
          ✅ Checklist de dominio Flexbox:
          <ul style={{ marginBottom: 0 }}>
            <li>Identifico ejes al instante con flex-direction.</li>
            <li>Uso justify-content/align-items sin confundir ejes.</li>
            <li>Uso wrap + gap para layouts de tarjetas.</li>
            <li>Domino flex (grow/shrink/basis) y patrones como sidebar+content.</li>
            <li>Conozco trucos de producción: min-width:0, margin-left:auto.</li>
          </ul>
        </div>

        <div className="doc-next">
          <a href="#" className="btn btn-primary">
            Siguiente tema → CSS Grid (layouts 2D)
          </a>
        </div>
      </section>
    </main>
  );
}
