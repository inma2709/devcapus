import { useEffect, useMemo, useState } from "react";

/**
 * V23 · Grid Areas (Lección universitaria)
 * - Muy completa, didáctica y lista para copiar/pegar en tu manual.
 * - Incluye: modelo mental, reglas formales, patrones reales, depuración, accesibilidad,
 *   responsive por planos, comparativas, retos + test con feedback.
 */
export default function V23_GridAreas_Universitario() {
  useEffect(() => {
    document.title =
      "V23 · CSS Grid Areas : layouts declarativos, robustos y mantenibles";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué describe mejor grid-template-areas?",
        options: [
          "Un sistema para animar el layout",
          "Un plano declarativo que asigna nombres a celdas para construir áreas",
          "Un atajo para crear columnas automáticas",
          "Una propiedad solo para móviles",
        ],
        correct: "Un plano declarativo que asigna nombres a celdas para construir áreas",
        why:
          "Grid Areas permite definir un 'mapa' de layout: un string por fila, donde cada token es una celda con nombre o un hueco (.).",
      },
      {
        id: "q2",
        q: "¿Qué condición debe cumplir un área nombrada para ser válida en Grid Areas?",
        options: [
          "Debe tener al menos 3 celdas",
          "Debe ser un rectángulo continuo (sin huecos ni cortes)",
          "Debe ocupar una fila completa",
          "Debe tener el mismo nombre que el id del elemento",
        ],
        correct: "Debe ser un rectángulo continuo (sin huecos ni cortes)",
        why:
          "La especificación exige que un área sea un bloque rectangular. Si queda con forma en L o discontinua, el navegador invalida la definición.",
      },
      {
        id: "q3",
        q: "En un mapa de grid-template-areas, ¿qué significa el token '.'?",
        options: [
          "Que la celda hereda el área de arriba",
          "Una celda vacía (sin área asignada)",
          "Que el grid ignora esa fila",
          "Que el ítem debe auto-colocarse ahí",
        ],
        correct: "Una celda vacía (sin área asignada)",
        why:
          "El punto crea un hueco explícito en el plano. No asigna el espacio a ningún ítem.",
      },
      {
        id: "q4",
        q: "Si defines grid-template-areas con 3 columnas, ¿qué debe ocurrir en cada fila del mapa?",
        options: [
          "Cada fila puede tener tokens distintos, Grid los ajusta",
          "Todas las filas deben tener exactamente 3 tokens",
          "Solo la primera fila debe tener 3 tokens",
          "Los tokens pueden omitirse con espacios",
        ],
        correct: "Todas las filas deben tener exactamente 3 tokens",
        why:
          "Cada string representa una fila y debe declarar el mismo número de celdas (tokens) para que el plano sea válido.",
      },
      {
        id: "q5",
        q: "¿Cómo asignas un grid item a un área llamada 'main'?",
        options: ["grid-area: main", "grid-template-areas: main", "grid-main: area", "area: main"],
        correct: "grid-area: main",
        why:
          "Los ítems se asignan con grid-area: nombre; (el contenedor define el plano con grid-template-areas).",
      },
      {
        id: "q6",
        q: "¿Qué ventaja clave aporta Grid Areas al responsive?",
        options: [
          "Evita usar media queries",
          "Permite reordenar visualmente cambiando el plano sin tocar el HTML",
          "Hace que el DOM cambie automáticamente",
          "Aumenta el FPS del navegador",
        ],
        correct: "Permite reordenar visualmente cambiando el plano sin tocar el HTML",
        why:
          "En responsive puedes redefinir grid-template-areas y/o columnas/filas sin alterar el orden lógico del documento.",
      },
      {
        id: "q7",
        q: "¿Cuál es el riesgo principal de reordenar contenido con CSS (Grid/Flex) respecto a accesibilidad?",
        options: [
          "Que el CSS deje de funcionar en Safari",
          "Que el orden visual no coincida con el orden del DOM para teclado/lectores",
          "Que los colores se vuelvan inaccesibles",
          "Que desaparezca el focus visible",
        ],
        correct: "Que el orden visual no coincida con el orden del DOM para teclado/lectores",
        why:
          "El DOM marca el orden de tabulación y lectura. Si reorganizas demasiado con CSS, puedes confundir navegación por teclado y lectores de pantalla.",
      },
      {
        id: "q8",
        q: "¿Qué debes revisar primero si 'grid areas' no se aplica como esperas?",
        options: [
          "Si tienes overflow:hidden",
          "Si el mapa tiene el mismo número de tokens por fila y las áreas son rectángulos",
          "Si usas display:block",
          "Si hay un z-index",
        ],
        correct:
          "Si el mapa tiene el mismo número de tokens por fila y las áreas son rectángulos",
        why:
          "Los fallos más comunes son: filas con distinto número de tokens, nombres mal escritos o áreas no rectangulares.",
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
        <p className="doc-kicker">
          V23 · CSS Grid  · Layout declarativo con Grid Areas
        </p>
        <h1>
          Grid Areas al detalle: el “lenguaje de planos” para layouts robustos y
          mantenibles
        </h1>

        {/* Analogía potente */}
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
            🗺 Analogía : planos + zonificación (arquitectura)
          </h3>
          <p style={{ color: "#7c2d12", marginBottom: "1rem" }}>
            En arquitectura, un plano no coloca “muebles” por coordenadas
            aisladas; define <strong>zonas</strong>: salón, cocina, pasillo,
            dormitorio… y luego decides qué se ubica dentro. Grid Areas traslada
            esa idea al CSS: <strong>primero el plano, después los elementos</strong>.
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
                ✅ Ventaja A: legibilidad
              </h4>
              <p style={{ margin: 0, fontSize: ".9rem", color: "#7c2d12" }}>
                El layout se lee como un mapa: “header”, “main”, “aside”, “footer”.
                Menos errores, más mantenimiento.
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
                ✅ Ventaja B: responsive por planos
              </h4>
              <p style={{ margin: 0, fontSize: ".9rem", color: "#7c2d12" }}>
                Cambias el plano (mapa) en media queries sin tocar el HTML.
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
                ✅ Ventaja C: coherencia semántica
              </h4>
              <p style={{ margin: 0, fontSize: ".9rem", color: "#7c2d12" }}>
                Mantienes un DOM lógico (orden de lectura) y reorganizas el layout
                solo visualmente.
              </p>
            </div>
          </div>

          <div className="callout tip" style={{ marginTop: "1rem" }}>
            🎯 Meta del tema: dominar Grid Areas como una herramienta de ingeniería
            de UI: coherencia, mantenibilidad, responsive y depuración.
          </div>
        </div>

        <p className="doc-lead">
          Esta lección es deliberadamente completa: aprenderás{" "}
          <strong>la sintaxis</strong>, <strong>las reglas formales</strong>,{" "}
          <strong>los fallos típicos</strong>, <strong>patrones reales</strong>{" "}
          (página, dashboard, huecos), <strong>responsive por planos</strong>, y
          criterios profesionales (accesibilidad, orden lógico, depuración con
          DevTools).
        </p>

        <div className="callout">
          🧠 Recomendación de estudio: no memorices. Practica con 2 layouts:
          (1) página clásica y (2) dashboard con áreas múltiples.
        </div>

        {/* ================= ÍNDICE ================= */}
        <nav className="doc-index" aria-label="Índice del tema">
          <h2>🧭 Índice</h2>
          <ol>
            <li>
              <a href="#fundamentos">
                1) Fundamentos: términos (track, cell, area) y modelo mental
              </a>
            </li>
            <li>
              <a href="#sintaxis">
                2) Sintaxis formal de grid-template-areas (mapa) + reglas
              </a>
            </li>
            <li>
              <a href="#asignar">3) Asignación: grid-area en ítems</a>
            </li>
            <li>
              <a href="#rectangulos">
                4) Regla crítica: áreas rectangulares (válido vs inválido)
              </a>
            </li>
            <li>
              <a href="#huecos">
                5) Huecos (.) y “zonas vacías” con intención de diseño
              </a>
            </li>
            <li>
              <a href="#responsive">
                6) Responsive por planos (redefinir mapa sin tocar HTML)
              </a>
            </li>
            <li>
              <a href="#patrones">
                7) Patrones profesionales (página, dashboard, landing)
              </a>
            </li>
            <li>
              <a href="#comparativas">
                8) Comparativas: Areas vs líneas; Areas vs Flex; buenas prácticas
              </a>
            </li>
            <li>
              <a href="#debug">
                9) Depuración: por qué “no funciona” y cómo diagnosticarlo
              </a>
            </li>
            <li>
              <a href="#retos">10) Retos prácticos (3 niveles) + soluciones</a>
            </li>
            <li>
              <a href="#test">11) Test con feedback (evaluación)</a>
            </li>
          </ol>

          <div className="callout tip" style={{ marginTop: "1rem" }}>
            📌 Si tu alumnado empieza de cero, exige que entiendan antes:{" "}
            <strong>Grid container</strong>, <strong>tracks</strong>,{" "}
            <strong>gap</strong>, <strong>fr</strong>. Luego Areas.
          </div>
        </nav>
      </header>

      {/* ================= 1) FUNDAMENTOS ================= */}
      <section className="doc-section" id="fundamentos">
        <details className="dd" open>
          <summary>
            1) Fundamentos : vocabulario y modelo mental
          </summary>
          <div className="dd-body">
            <p>
              Para enseñar Grid Areas bien, el alumno debe manejar el vocabulario
              de CSS Grid:
            </p>

            <div
              className="table-wrap"
              role="region"
              aria-label="Tabla de conceptos Grid"
              tabIndex={0}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Término</th>
                    <th>Qué significa</th>
                    <th>Traducción didáctica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Grid container</strong></td>
                    <td>Elemento con <code>display: grid</code></td>
                    <td>La “rejilla” donde ocurre todo</td>
                  </tr>
                  <tr>
                    <td><strong>Grid item</strong></td>
                    <td>Hijo directo del grid container</td>
                    <td>Las “piezas” que colocamos</td>
                  </tr>
                  <tr>
                    <td><strong>Track</strong></td>
                    <td>Fila o columna del grid</td>
                    <td>Una “raya” o franja de la rejilla</td>
                  </tr>
                  <tr>
                    <td><strong>Cell</strong></td>
                    <td>Intersección fila-columna</td>
                    <td>Una “casilla”</td>
                  </tr>
                  <tr>
                    <td><strong>Area</strong></td>
                    <td>Conjunto rectangular de celdas</td>
                    <td>Una “zona” (header, main…)</td>
                  </tr>
                  <tr>
                    <td><strong>Line</strong></td>
                    <td>Líneas numeradas del grid</td>
                    <td>Coordenadas para colocar por bordes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              Grid Areas se apoya en una idea formal: un <strong>área</strong> es un
              conjunto <strong>rectangular</strong> de celdas. Este concepto es
              el núcleo del tema.
            </div>

            <details className="dd dd-nested" open>
              <summary>Qué problema resuelve Grid Areas (en ingeniería de UI)</summary>
              <div className="dd-body">
                <p>
                  Posicionar con <code>grid-column</code>/<code>grid-row</code> es
                  preciso, pero a partir de cierto tamaño de layout se vuelve:
                </p>
                <ul>
                  <li>Difícil de leer (requiere “calcular” líneas)</li>
                  <li>Propenso a errores de mantenimiento</li>
                  <li>Costoso de modificar en responsive</li>
                </ul>

                <p>
                  Grid Areas cambia el enfoque: describes el layout con un “mapa”
                  legible, y los items se asignan por nombre.
                </p>

                <div className="callout">
                  💡 En proyectos reales, la mantenibilidad (claridad + cambios rápidos)
                  suele ser más valiosa que la micro-optimización.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>
      {/* ================= ¿QUÉ ES UN TOKEN? ================= */}
<section className="doc-section" id="token">
  <details className="dd" open>
    <summary>
      ¿Qué es un token en grid-template-areas?
    </summary>

    <div className="dd-body">

      <p>
        En <code>grid-template-areas</code>, un <strong>token</strong> es cada unidad textual
        individual que aparece dentro de las comillas que definen una fila del mapa,
        separada por espacios de las demás. Aunque visualmente parezca una frase,
        el navegador no la interpreta como texto continuo, sino como una secuencia
        estructurada de elementos independientes.
      </p>

      <p>
        Cuando el navegador lee una línea como:
      </p>

      <pre>
        <code>{`"sidebar main"`}</code>
      </pre>

      <p>
        Internamente realiza estos pasos:
      </p>

      <ol>
        <li>Detecta el string completo entre comillas.</li>
        <li>Lo divide usando el espacio como delimitador.</li>
        <li>Cada fragmento resultante se convierte en un <strong>token</strong>.</li>
        <li>Cada token representa exactamente <strong>una celda del grid</strong>.</li>
      </ol>

      <div className="callout tip">
        📌 Regla mental clave: <strong>1 token = 1 celda</strong>.
      </div>

      <p>
        En el ejemplo anterior existen dos tokens:
      </p>

      <ul>
        <li><code>sidebar</code></li>
        <li><code>main</code></li>
      </ul>

      <p>
        Por tanto, esa fila tiene dos celdas y el grid tendrá dos columnas.
        El número total de tokens en cada fila determina el número de columnas del layout.
      </p>

      <pre>
        <code>{`grid-template-areas:
  "header header header"
  "sidebar main ads"
  "footer footer footer";`}</code>
      </pre>

      <p>
        En este caso, cada fila contiene tres tokens. Esto significa que el grid
        tiene tres columnas. Si una fila tuviera un número diferente de tokens,
        el mapa sería inválido y el navegador ignoraría la declaración completa.
      </p>

      <div className="callout warn">
        ⚠️ Todas las filas deben tener exactamente el mismo número de tokens.
      </div>

      <p>
        Los tokens pueden ser:
      </p>

      <ul>
        <li>Nombres de áreas (<code>header</code>, <code>main</code>, <code>footer</code>).</li>
        <li>El símbolo <code>.</code>, que representa una celda vacía.</li>
      </ul>

      <pre>
        <code>{`"sidebar . main"`}</code>
      </pre>

      <p>
        Aunque el punto represente una celda vacía, sigue contando como un token.
        Es simplemente un marcador de espacio sin área asignada.
      </p>

      <p>
        Cuando un mismo nombre se repite en tokens contiguos, esas celdas se combinan
        visualmente formando un área rectangular. Sin embargo, técnicamente siguen
        siendo tokens individuales que el motor de render interpreta como parte
        de la misma zona.
      </p>

      <div className="callout">
        🎓 Definición formal: Un token en <code>grid-template-areas</code> es cada palabra
        o símbolo separado por espacios dentro del string que define una fila,
        y representa una celda individual dentro de la estructura bidimensional del grid.
      </div>

    </div>
  </details>
</section>


      {/* ================= 2) SINTAXIS ================= */}
      <section className="doc-section" id="sintaxis">
        <details className="dd" open>
          <summary>
            2) Sintaxis formal de grid-template-areas (mapa) + reglas que invalidan
          </summary>
          <div className="dd-body">
            <p>
              Un layout con Areas tiene dos fases:
              <strong> (1) definir el grid + mapa</strong> y{" "}
              <strong>(2) asignar ítems a áreas</strong>.
            </p>

            <pre>
              <code>{`/* Fase 1: contenedor */
.layout{
  display:grid;
  gap: 16px;
  grid-template-columns: 280px 1fr;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}`}</code>
            </pre>

            <div className="callout tip">
              📌 El mapa es un conjunto de strings, uno por fila. Cada string se
              divide en tokens (palabras). Cada token representa una celda.
            </div>

            <details className="dd dd-nested" open>
              <summary>Reglas de validez del mapa (las “leyes”)</summary>
              <div className="dd-body">
                <ol>
                  <li>
                    <strong>Mismo número de tokens en cada fila</strong> (si no, el mapa es inválido).
                  </li>
                  <li>
                    Los tokens pueden ser nombres (por ejemplo <code>header</code>) o{" "}
                    <code>.</code> (celda vacía).
                  </li>
                  <li>
                    Un área se forma repitiendo el mismo nombre en celdas contiguas.
                  </li>
                  <li>
                    <strong>Un área debe ser rectangular</strong> (si no lo es, se invalida).
                  </li>
                </ol>

                <div className="callout warn">
                  El 80% de errores en Grid Areas viene de: tokens desiguales por fila, typos
                  (header vs hedar), o áreas no rectangulares.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Guía de estilo para nombres (best practice)</summary>
              <div className="dd-body">
                <ul>
                  <li>Usa nombres semánticos y cortos: <code>header</code>, <code>nav</code>, <code>main</code>, <code>aside</code>, <code>footer</code>.</li>
                  <li>Evita nombres por apariencia: <code>left</code>, <code>big</code>, <code>blue</code>.</li>
                  <li>Si hay variantes, usa prefijos: <code>panelA</code>, <code>panelB</code> o <code>stats</code>, <code>activity</code>.</li>
                  <li>Consistencia: mismo idioma y convención (camelCase o kebab) siempre.</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>
      

      {/* ================= 3) ASIGNAR ================= */}
      <section className="doc-section" id="asignar">
        <details className="dd" open>
          <summary>3) Asignación: grid-area en los ítems (y por qué es elegante)</summary>
          <div className="dd-body">
            <p>
              Para colocar un item en el plano, asignas su área:
              <code> grid-area: nombre</code>.
            </p>

            <pre>
              <code>{`/* Fase 2: items */
.header{ grid-area: header; }
.sidebar{ grid-area: sidebar; }
.main{ grid-area: main; }
.footer{ grid-area: footer; }`}</code>
            </pre>

            <pre>
              <code>{`<!-- HTML (orden lógico recomendado) -->
<div class="layout">
  <header class="header">Header</header>
  <nav class="sidebar">Sidebar / Nav</nav>
  <main class="main">Main</main>
  <footer class="footer">Footer</footer>
</div>`}</code>
            </pre>

            <div className="callout tip">
              Este enfoque separa responsabilidades:
              <ul style={{ marginBottom: 0 }}>
                <li>HTML: estructura semántica + orden lógico</li>
                <li>CSS: distribución espacial (layout)</li>
              </ul>
            </div>

            <details className="dd dd-nested">
              <summary>Nota avanzada: grid-area también puede ser shorthand por líneas</summary>
              <div className="dd-body">
                <p>
                  Ojo: <code>grid-area</code> es una propiedad con doble vida. Además de
                  asignar un nombre (cuando usas template-areas), también puede funcionar como
                  shorthand por líneas:
                </p>

                <pre>
                  <code>{`/* Shorthand por líneas: row-start / col-start / row-end / col-end */
.item{
  grid-area: 1 / 2 / 3 / 4;
}`}</code>
                </pre>

                <div className="callout warn">
                  Para alumnos que empiezan, mantén <strong>grid-area: nombre</strong> cuando estés
                  en Grid Areas. El shorthand por líneas es otra lección.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 4) RECTÁNGULOS ================= */}
      <section className="doc-section" id="rectangulos">
        <details className="dd" open>
          <summary>4) Regla crítica: áreas rectangulares (válido vs inválido)</summary>
          <div className="dd-body">
            <p>
              Un área nombrada se construye repitiendo el mismo token en el mapa.
              Formalmente, esa repetición debe formar un rectángulo continuo.
            </p>

            <div className="table-wrap" role="region" aria-label="Rectángulos válidos e inválidos" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Mapa</th>
                    <th>¿Válido?</th>
                    <th>Qué pasa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rectángulo 2×2</td>
                    <td>
                      <code>
                        "a a"<br />
                        "a a"
                      </code>
                    </td>
                    <td>✅</td>
                    <td>a ocupa un bloque continuo</td>
                  </tr>
                  <tr>
                    <td>Rectángulo 1×3</td>
                    <td>
                      <code>
                        "a a a"<br />
                        ". . ."
                      </code>
                    </td>
                    <td>✅</td>
                    <td>a ocupa una banda superior</td>
                  </tr>
                  <tr>
                    <td>Forma en L</td>
                    <td>
                      <code>
                        "a a"<br />
                        "a ."
                      </code>
                    </td>
                    <td>❌</td>
                    <td>El navegador invalida esa área</td>
                  </tr>
                  <tr>
                    <td>Discontinua</td>
                    <td>
                      <code>
                        "a . a"<br />
                        "a . a"
                      </code>
                    </td>
                    <td>❌</td>
                    <td>No es un rectángulo único</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout warn">
              Si intentas “dibujar” formas raras con un mismo nombre, Grid Areas no es tu herramienta.
              Usa líneas (<code>grid-row</code>/<code>grid-column</code>) o reorganiza el diseño.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 5) HUECOS ================= */}
      <section className="doc-section" id="huecos">
        <details className="dd" open>
          <summary>5) Huecos con '.' y “zonas vacías” con intención</summary>
          <div className="dd-body">
            <p>
              El token <code>.</code> crea celdas sin nombre: huecos explícitos.
              Esto es útil para composición (respiración visual, gutters internos,
              espacios reservados).
            </p>

            <pre>
              <code>{`.layout{
  display:grid;
  gap: 16px;
  grid-template-columns: 240px 1fr 240px;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    "header header header"
    "sidebar main ."
    "footer footer footer";
}`}</code>
            </pre>

            <div className="callout tip">
              La diferencia entre <code>gap</code> y <code>.</code>:
              <ul style={{ marginBottom: 0 }}>
                <li><strong>gap</strong> separa tracks (espacio entre celdas)</li>
                <li><strong>.</strong> reserva una celda completa sin contenido (espacio estructural)</li>
              </ul>
            </div>

            <details className="dd dd-nested" open>
              <summary>Ejemplo real: columna de “publicidad” que a veces desaparece</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.layout{
  display:grid;
  grid-template-columns: 240px 1fr 240px;
  grid-template-areas:
    "header header header"
    "nav main ad"
    "footer footer footer";
}

@media (max-width: 900px){
  .layout{
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "nav"
      "footer";
  }
}`}</code>
                </pre>

                <div className="callout">
                  En escritorio existe el área <code>ad</code>. En móvil desaparece del plano sin tocar HTML.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 6) RESPONSIVE ================= */}
      <section className="doc-section" id="responsive">
        <details className="dd" open>
          <summary>6) Responsive por planos: reescribir el mapa (sin tocar el HTML)</summary>
          <div className="dd-body">
            <p>
              El responsive con Grid Areas es un enfoque de ingeniería: redefinir el plano
              en puntos de ruptura. Es limpio, rápido y mantenible.
            </p>

            <details className="dd dd-nested" open>
              <summary>Ejemplo completo: página clásica → móvil apilado</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Desktop */
.page{
  display:grid;
  gap: 16px;
  min-height: 100vh;

  grid-template-columns: 280px 1fr;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

/* Tablet/Móvil */
@media (max-width: 900px){
  .page{
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;

    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "footer";
  }
}`}</code>
                </pre>

                <div className="callout tip">
                  Observa la coherencia: el HTML puede seguir siendo header → nav → main → footer
                  en orden lógico. El CSS decide el plano según el viewport.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Accesibilidad: orden visual vs orden lógico</summary>
              <div className="dd-body">
                <p>
                  Ten en cuenta que esto es obligatorio: el orden del DOM controla
                  tabulación y lectura. Si reordenas visualmente, evita contradicciones fuertes.
                </p>
                <div className="callout warn">
                  Buena práctica: deja el DOM en un orden semántico natural (header → nav → main → footer).
                  Reordena solo lo necesario por CSS.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 7) PATRONES ================= */}
      <section className="doc-section" id="patrones">
        <details className="dd" open>
          <summary>7) Patrones profesionales con Grid Areas (producción)</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>Patrón A · Página completa (base universal)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Contenedor */
.page{
  display:grid;
  gap: 16px;
  min-height: 100vh;

  grid-template-columns: 280px 1fr;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    "header header"
    "nav main"
    "footer footer";
}

/* Asignación */
.page-header{ grid-area: header; }
.page-nav{ grid-area: nav; }
.page-main{ grid-area: main; }
.page-footer{ grid-area: footer; }`}</code>
                </pre>

                <div className="callout tip">
                  Este patrón es “la plantilla” más reutilizable del mundo real:
                  docs, paneles, webs corporativas, etc.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Patrón B · Dashboard (zonas múltiples y jerarquía visual)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.dashboard{
  display:grid;
  gap: 16px;
  min-height: 100vh;

  grid-template-columns: 240px 1fr 360px;
  grid-template-rows: auto 1fr 1fr;

  grid-template-areas:
    "nav header header"
    "nav content stats"
    "nav content activity";
}

/* Items */
.d-nav{ grid-area: nav; }
.d-header{ grid-area: header; }
.d-content{ grid-area: content; }
.d-stats{ grid-area: stats; }
.d-activity{ grid-area: activity; }`}</code>
                </pre>

                <div className="callout">
                  Aquí <code>content</code> ocupa dos filas y se vuelve el foco. Es un patrón real
                  en dashboards: “contenido principal + columna de KPIs”.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Patrón C · Landing (hero amplio + columnas inferiores)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.landing{
  display:grid;
  gap: 16px;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  grid-template-areas:
    "hero hero hero"
    "card1 card2 card3";
}

.hero{ grid-area: hero; }
.card1{ grid-area: card1; }
.card2{ grid-area: card2; }
.card3{ grid-area: card3; }`}</code>
                </pre>

                <div className="callout tip">
                  Este patrón enseña algo clave: un área puede abarcar múltiples columnas (hero).
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 8) COMPARATIVAS ================= */}
      <section className="doc-section" id="comparativas">
        <details className="dd" open>
          <summary>8) Comparativas y buenas prácticas (criterio profesional)</summary>
          <div className="dd-body">
            <div className="table-wrap" role="region" aria-label="Comparativa enfoques" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Enfoque</th>
                    <th>Cuándo</th>
                    <th>Ventaja</th>
                    <th>Riesgo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Grid Areas</strong></td>
                    <td>Layouts con zonas claras</td>
                    <td>Legible, fácil responsive</td>
                    <td>Áreas deben ser rectangulares</td>
                  </tr>
                  <tr>
                    <td>Grid por líneas</td>
                    <td>Colocación puntual precisa</td>
                    <td>Control total por coordenadas</td>
                    <td>Menos mantenible en layouts grandes</td>
                  </tr>
                  <tr>
                    <td>Flexbox</td>
                    <td>Componentes 1D (barra, lista, cards)</td>
                    <td>Rápido para alineación</td>
                    <td>No es ideal para layouts 2D complejos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              Criterio a tener en cuenta: elige la herramienta por el problema, no por costumbre.
              Grid Areas brilla en layout estructural; Flex en componentes.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 9) DEBUG ================= */}
      <section className="doc-section" id="debug">
        <details className="dd" open>
          <summary>9) Depuración: por qué “no funciona” y cómo diagnosticarlo</summary>
          <div className="dd-body">
            <p>
              Cuando un alumno dice “Grid Areas no funciona”, casi siempre es un
              error de validez del plano o de nombres. Diagnóstico profesional:
            </p>

            <ol>
              <li>
                ¿El contenedor tiene <code>display: grid</code>?
              </li>
              <li>
                ¿El número de columnas coincide con tokens por fila?
              </li>
              <li>
                ¿Los nombres de área son idénticos (sin typos)?
              </li>
              <li>
                ¿Cada área forma un rectángulo?
              </li>
              <li>
                ¿El item es hijo directo (grid item)?
              </li>
            </ol>

            <div className="callout tip">
              Debug visual rápido:
            </div>

            <pre>
              <code>{`/* Debug de contenedor e items */
.layout{
  outline: 2px dashed rgba(228,77,38,.6);
}
.layout > *{
  outline: 2px solid rgba(31,41,55,.35);
}`}</code>
            </pre>

            <div className="callout">
              En DevTools (Chrome/Firefox): activa “Grid overlays” para ver el plano real.
              Esto acelera la enseñanza muchísimo.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 10) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>10) Retos prácticos (3 niveles) + soluciones</summary>
          <div className="dd-body">
            <div className="callout">
              🎯 Estos retos entrenan competencias: diseño del plano, asignación, huecos, responsive por áreas.
            </div>

            {/* Reto 1 */}
            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1 (base): página clásica con áreas</summary>
              <div className="dd-body">
                <p>
                  Crea un layout con <code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code>.
                  Desktop: nav a la izquierda. Móvil: apilado.
                </p>

                <details className="dd dd-nested">
                  <summary>✅ Solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`/* CSS */
.page{
  display:grid;
  gap: 16px;
  min-height: 100vh;

  grid-template-columns: 280px 1fr;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    "header header"
    "nav main"
    "footer footer";
}

.page-header{ grid-area: header; }
.page-nav{ grid-area: nav; }
.page-main{ grid-area: main; }
.page-footer{ grid-area: footer; }

@media (max-width: 900px){
  .page{
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      "header"
      "nav"
      "main"
      "footer";
  }
}`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            {/* Reto 2 */}
            <details className="dd dd-nested" open>
              <summary>🟡 Reto 2 (intermedio): dashboard con 5 áreas</summary>
              <div className="dd-body">
                <p>
                  Diseña un dashboard con <code>nav</code>, <code>header</code>, <code>content</code>, <code>stats</code>, <code>activity</code>.
                  El content debe ocupar dos filas.
                </p>

                <details className="dd dd-nested">
                  <summary>✅ Solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`/* CSS */
.dashboard{
  display:grid;
  gap: 16px;
  min-height: 100vh;

  grid-template-columns: 240px 1fr 360px;
  grid-template-rows: auto 1fr 1fr;

  grid-template-areas:
    "nav header header"
    "nav content stats"
    "nav content activity";
}

.d-nav{ grid-area: nav; }
.d-header{ grid-area: header; }
.d-content{ grid-area: content; }
.d-stats{ grid-area: stats; }
.d-activity{ grid-area: activity; }

/* Responsive: apilar columna derecha abajo */
@media (max-width: 980px){
  .dashboard{
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto 1fr auto auto;
    grid-template-areas:
      "nav header"
      "nav content"
      "nav stats"
      "nav activity";
  }
}

@media (max-width: 760px){
  .dashboard{
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto auto;
    grid-template-areas:
      "header"
      "nav"
      "content"
      "stats"
      "activity";
  }
}`}</code>
                    </pre>

                    <div className="callout tip">
                      Observa que no cambiamos HTML. Solo el plano.
                    </div>
                  </div>
                </details>
              </div>
            </details>

            {/* Reto 3 */}
            <details className="dd dd-nested">
              <summary>🔴 Reto 3 (avanzado): huecos '.' + zona reservada</summary>
              <div className="dd-body">
                <p>
                  Crea un layout con una columna derecha reservada para “ads” o “info”,
                  que desaparece en móvil. En desktop: <code>sidebar main .</code> para dejar espacio.
                </p>

                <details className="dd dd-nested">
                  <summary>✅ Solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`/* CSS */
.layout{
  display:grid;
  gap: 16px;
  grid-template-columns: 240px 1fr 240px;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    "header header header"
    "sidebar main ."
    "footer footer footer";
}

.header{ grid-area: header; }
.sidebar{ grid-area: sidebar; }
.main{ grid-area: main; }
.footer{ grid-area: footer; }

@media (max-width: 900px){
  .layout{
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "footer";
  }
}`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 11) TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>🏆 Test de evaluación: Grid Areas </summary>
          <div className="dd-body">
            <div className="callout">
              Evalúa comprensión real: sintaxis, reglas, rectángulos, responsive, accesibilidad.
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
                      🏆 <strong>Excelente.</strong> Manejas sintaxis, reglas formales y criterio profesional.
                    </>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>
                      🎯 <strong>Muy bien.</strong> Refuerza especialmente: rectángulos válidos y coherencia DOM vs visual.
                    </>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>
                      📚 <strong>Progreso sólido.</strong> Repite los retos y practica el responsive por planos.
                    </>
                  )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Necesitas más práctica.</strong> Vuelve a la sección de reglas y rectángulos y rehace el mapa.
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
          ✅ Checklist  (Grid Areas):
          <ul style={{ marginBottom: 0 }}>
            <li>Defino un plano con tokens consistentes (mismo nº por fila).</li>
            <li>Compruebo rectángulos continuos para cada área.</li>
            <li>Uso '.' para huecos estructurales con intención de diseño.</li>
            <li>Reorganizo responsive cambiando solo grid-template-areas.</li>
            <li>Mantengo el DOM en orden lógico por accesibilidad.</li>
            <li>Depuro con overlays de Grid en DevTools.</li>
          </ul>
        </div>

        <div className="doc-next">
          <a href="#" className="btn btn-primary">
            Siguiente tema → Grid avanzado: auto-placement, dense y subgrid
          </a>
        </div>
      </section>
    </main>
  );
}
