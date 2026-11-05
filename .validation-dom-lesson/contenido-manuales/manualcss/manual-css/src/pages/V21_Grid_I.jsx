import { useEffect, useMemo, useState } from "react";

/**
 * V21 · CSS Grid (Lección ampliada PRO)
 * Lista para copiar/pegar.
 * Objetivo: desde cero → profesional, con modelo mental, tablas, patrones reales,
 * responsive moderno, depuración, accesibilidad, retos y test.
 */
export default function V21_Grid() {
  useEffect(() => {
    document.title =
      "V21 · CSS Grid: domina el layout bidimensional profesional (Lección completa)";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Cuál es la principal diferencia conceptual entre Flexbox y Grid?",
        options: [
          "Grid solo funciona en horizontal",
          "Flexbox es bidimensional y Grid unidimensional",
          "Grid es bidimensional y Flexbox unidimensional",
          "No hay diferencia real",
        ],
        correct: "Grid es bidimensional y Flexbox unidimensional",
        why:
          "Grid controla filas y columnas a la vez (2D). Flexbox trabaja principalmente en un eje (1D).",
      },
      {
        id: "q2",
        q: "¿Qué propiedad define las columnas en Grid?",
        options: [
          "grid-columns",
          "grid-template-columns",
          "grid-column-layout",
          "columns-template",
        ],
        correct: "grid-template-columns",
        why:
          "grid-template-columns define el número y tamaño de columnas del grid (tracks).",
      },
      {
        id: "q3",
        q: "¿Qué unidad es específica de Grid para fracciones del espacio disponible?",
        options: ["%", "vh", "fr", "em"],
        correct: "fr",
        why:
          "fr (fraction) reparte el espacio libre entre tracks de forma proporcional.",
      },
      {
        id: "q4",
        q: "¿Qué hace grid-area (en el contexto de template-areas)?",
        options: [
          "Define el tamaño del contenedor",
          "Permite nombrar y posicionar áreas en el layout",
          "Activa el modo responsive",
          "Distribuye el espacio entre columnas",
        ],
        correct: "Permite nombrar y posicionar áreas en el layout",
        why:
          "grid-area permite asignar un item a un área declarada en grid-template-areas (layout declarativo).",
      },
      {
        id: "q5",
        q: "¿Qué combinación crea columnas responsivas sin media queries?",
        options: [
          "repeat(auto-fill, minmax(250px, 1fr))",
          "repeat(3, 1fr)",
          "grid-auto-flow: dense",
          "grid-template-rows: auto",
        ],
        correct: "repeat(auto-fill, minmax(250px, 1fr))",
        why:
          "auto-fill + minmax crea un número variable de columnas que se adaptan al ancho disponible.",
      },
      {
        id: "q6",
        q: "¿Qué propiedad define el espacio entre filas y columnas en Grid?",
        options: ["margin", "gap", "spacing", "grid-space"],
        correct: "gap",
        why:
          "gap (row-gap/column-gap) define el espacio entre tracks del grid de forma consistente.",
      },
      {
        id: "q7",
        q: "¿Qué significa 'grid item'?",
        options: [
          "Cualquier elemento dentro del grid, aunque esté anidado",
          "Solo los hijos directos del contenedor grid",
          "Solo elementos con class",
          "Solo elementos con grid-area",
        ],
        correct: "Solo los hijos directos del contenedor grid",
        why:
          "En CSS Grid, los grid items son los hijos directos del contenedor. Los nietos no participan salvo que se cree otro grid.",
      },
      {
        id: "q8",
        q: "¿Qué opción describe mejor auto-fit vs auto-fill en repeat()?",
        options: [
          "Son iguales siempre",
          "auto-fit colapsa tracks vacíos; auto-fill los mantiene (aunque estén vacíos)",
          "auto-fill colapsa tracks vacíos; auto-fit los mantiene",
          "Solo se diferencian en móvil",
        ],
        correct:
          "auto-fit colapsa tracks vacíos; auto-fill los mantiene (aunque estén vacíos)",
        why:
          "auto-fit 'encaja' el contenido y colapsa columnas vacías; auto-fill reserva columnas potenciales aunque no haya items suficientes.",
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
        <p className="doc-kicker">V21 · CSS Layout Avanzado</p>
        <h1>CSS Grid: el sistema profesional para layouts bidimensionales</h1>

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
            🏗 Analogía del arquitecto: planos con filas y columnas
          </h3>
          <p style={{ marginBottom: "1rem", color: "#7c2d12" }}>
            Si Flexbox es una carretera (una dimensión), Grid es un{" "}
            <strong>plano arquitectónico</strong> (dos dimensiones): defines{" "}
            <strong>columnas</strong> y <strong>filas</strong> antes de colocar
            los elementos.
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
                📏 Columnas
              </h4>
              <p style={{ margin: 0, fontSize: ".9rem" }}>
                Se definen con <code>grid-template-columns</code>
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
                📐 Filas
              </h4>
              <p style={{ margin: 0, fontSize: ".9rem" }}>
                Se definen con <code>grid-template-rows</code>
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
                🔎 Resultado
              </h4>
              <p style={{ margin: 0, fontSize: ".9rem" }}>
                Una rejilla donde colocas elementos en 2D (como un tablero).
              </p>
            </div>
          </div>

          <div className="callout tip" style={{ marginTop: "1rem" }}>
            🎯 Idea clave: Grid controla simultáneamente filas y columnas (2D). Por eso es
            ideal para páginas completas y dashboards.
          </div>
        </div>

        <p className="doc-lead">
          CSS Grid es el sistema definitivo para layouts complejos: dashboards,
          portadas, páginas con sidebar, headers, footers y zonas claramente
          estructuradas. Dominar Grid te permite escribir CSS más{" "}
          <strong>limpio</strong>, <strong>predecible</strong> y{" "}
          <strong>mantenible</strong>.
        </p>

        <div className="callout">
          🧠 Objetivo práctico: que puedas leer un diseño y decidir:
          <strong> “esto es Grid”</strong> (layout 2D) y <strong>“esto es Flex”</strong>{" "}
          (alineación/1D dentro de un bloque).
        </div>

        <nav className="doc-index" aria-label="Índice del tema">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#conceptos">1) Conceptos fundamentales (vocabulario Grid)</a></li>
            <li><a href="#columnas">2) Columnas/filas: fr, repeat(), minmax()</a></li>
            <li><a href="#gap">3) Gap y ritmo visual (por qué NO usar márgenes para esto)</a></li>
            <li><a href="#alineacion">4) Alineación en Grid (justify/align + place-*)</a></li>
            <li><a href="#auto">5) Auto-placement y grid-auto-* (cómo coloca Grid “solo”)</a></li>
            <li><a href="#areas">6) Grid Areas (layout declarativo profesional)</a></li>
            <li><a href="#responsive">7) Responsive moderno: auto-fit/auto-fill + minmax</a></li>
            <li><a href="#patrones">8) Patrones profesionales (página, dashboard, gallery)</a></li>
            <li><a href="#accesibilidad">9) Accesibilidad y orden lógico (DOM vs visual)</a></li>
            <li><a href="#gotchas">10) Errores comunes + checklist de depuración</a></li>
            <li><a href="#retos">11) Retos prácticos (3 niveles) + soluciones</a></li>
            <li><a href="#test">12) Test de evaluación</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= 1) CONCEPTOS ================= */}
      <section className="doc-section" id="conceptos">
        <details className="dd" open>
          <summary>1) Conceptos fundamentales (vocabulario que un profesional maneja)</summary>
          <div className="dd-body">
            <div className="callout tip">
              Antes de escribir layouts avanzados, tienes que entender el vocabulario.
              Si no, Grid se vuelve “magia” y eso es mala ingeniería.
            </div>

            <div className="table-wrap" role="region" aria-label="Vocabulario Grid" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Término</th>
                    <th>Definición</th>
                    <th>Traducción mental</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Grid container</strong></td>
                    <td>Elemento con <code>display: grid</code></td>
                    <td>La “rejilla” principal</td>
                  </tr>
                  <tr>
                    <td><strong>Grid item</strong></td>
                    <td>Hijo directo del grid container</td>
                    <td>Las “piezas” del tablero</td>
                  </tr>
                  <tr>
                    <td><strong>Track</strong></td>
                    <td>Fila o columna del grid</td>
                    <td>Una franja (fila/columna)</td>
                  </tr>
                  <tr>
                    <td><strong>Cell</strong></td>
                    <td>Intersección fila-columna</td>
                    <td>Casilla</td>
                  </tr>
                  <tr>
                    <td><strong>Line</strong></td>
                    <td>Líneas numeradas que delimitan tracks</td>
                    <td>Coordenadas para colocar</td>
                  </tr>
                  <tr>
                    <td><strong>Grid area</strong></td>
                    <td>Bloque rectangular de celdas</td>
                    <td>Zona (header/main/sidebar…)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <details className="dd dd-nested" open>
              <summary>Modelo mental (lo que un alumno debe poder decir con palabras)</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    “Activo Grid en un contenedor para crear un tablero 2D.”
                  </li>
                  <li>
                    “Defino columnas/filas (tracks) y el espacio entre ellos (gap).”
                  </li>
                  <li>
                    “Los hijos directos son grid items y puedo colocarlos o dejar que se auto-coloquen.”
                  </li>
                  <li>
                    “Para layouts grandes, prefiero Grid Areas porque el CSS se lee como un plano.”
                  </li>
                </ul>
              </div>
            </details>

            <pre>
              <code>{`/* Grid mínimo */
.grid{
  display:grid;
}`}</code>
            </pre>

            <div className="callout warn">
              Recordatorio clave: solo los <strong>hijos directos</strong> participan como items.
              Si quieres maquetar un nieto, o reorganizas HTML o haces otro grid dentro.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 2) COLUMNAS/FILAS ================= */}
      <section className="doc-section" id="columnas">
        <details className="dd" open>
          <summary>2) Columnas, filas y unidades (fr, repeat, minmax) — dominio real</summary>
          <div className="dd-body">
            <p>
              Grid se define con tracks: columnas y filas. Los tamaños pueden ser fijos
              (<code>px</code>), relativos (<code>%</code>), adaptativos (<code>auto</code>)
              o proporcionales con <code>fr</code>.
            </p>

            <pre>
              <code>{`.container{
  display:grid;
  grid-template-columns: 1fr 2fr 1fr; /* 1/2/1 del espacio libre */
  grid-template-rows: auto 200px;     /* 1ª fila según contenido, 2ª fija */
  gap: 16px;
}`}</code>
            </pre>

            <div className="callout">
              <strong>fr</strong> = “porciones del espacio libre”. Si hay 4fr en total y un track tiene 2fr,
              ese track recibe 2/4 del espacio libre.
            </div>

            <details className="dd dd-nested" open>
              <summary>repeat(): menos código, más claridad</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.container{
  display:grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
  gap: 16px;
}`}</code>
                </pre>
                <div className="callout tip">
                  repeat() es profesional porque reduce errores y mejora lectura.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>minmax(): la herramienta estrella para layouts robustos</summary>
              <div className="dd-body">
                <p>
                  <code>minmax(min, max)</code> define un track con límites:
                  nunca bajará de “min” y nunca superará “max”.
                </p>

                <pre>
                  <code>{`.container{
  display:grid;
  gap: 16px;
  grid-template-columns: 240px minmax(280px, 1fr);
}`}</code>
                </pre>

                <div className="callout tip">
                  Esta línea describe un patrón real: sidebar fija (240px) + contenido flexible
                  que no se rompe por ser demasiado estrecho.
                </div>

                <div className="callout warn">
                  Si tu layout “se rompe” en pantallas pequeñas, muchas veces faltó un minmax().
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Tabla rápida de tamaños de tracks (para estudiar)</summary>
              <div className="dd-body">
                <div className="table-wrap" role="region" aria-label="Tamaños de tracks" tabIndex={0}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Valor</th>
                        <th>Qué hace</th>
                        <th>Cuándo usarlo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>px</code></td>
                        <td>Fijo</td>
                        <td>Barras, columnas estables</td>
                      </tr>
                      <tr>
                        <td><code>%</code></td>
                        <td>Relativo al contenedor</td>
                        <td>Distribuciones simples</td>
                      </tr>
                      <tr>
                        <td><code>auto</code></td>
                        <td>Según contenido + reglas de grid</td>
                        <td>Filas que crecen por contenido</td>
                      </tr>
                      <tr>
                        <td><code>fr</code></td>
                        <td>Reparte espacio libre</td>
                        <td>Columnas fluidas</td>
                      </tr>
                      <tr>
                        <td><code>minmax()</code></td>
                        <td>Límites min/max</td>
                        <td>Evitar roturas y layouts “inteligentes”</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 3) GAP ================= */}
      <section className="doc-section" id="gap">
        <details className="dd" open>
          <summary>3) gap y ritmo visual: el espacio profesional entre filas/columnas</summary>
          <div className="dd-body">
            <p>
              En Grid, el espacio entre items se controla con <code>gap</code>. Es superior a márgenes
              para separar tarjetas porque es consistente y pertenece al layout, no a cada item.
            </p>

            <pre>
              <code>{`.grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; /* espacio entre columnas y filas */
}

/* Alternativa fina */
.grid{
  column-gap: 24px;
  row-gap: 12px;
}`}</code>
            </pre>

            <div className="callout tip">
              Regla práctica: <strong>gap</strong> para el layout, <strong>padding</strong> para el interior del componente.
            </div>

            <div className="callout warn">
              Si usas márgenes para separar items, te complicas: bordes, colapsos, excepciones, “el último no”.
              Grid ya resuelve eso con gap.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 4) ALINEACIÓN ================= */}
      <section className="doc-section" id="alineacion">
        <details className="dd" open>
          <summary>4) Alineación en Grid: justify/align y place-* (nivel pro)</summary>
          <div className="dd-body">
            <p>
              En Grid hay dos familias:
              <strong> alineación del contenido del grid</strong> (tracks dentro del contenedor)
              y <strong> alineación de los items dentro de sus celdas</strong>.
            </p>

            <details className="dd dd-nested" open>
              <summary>Contenido del grid (tracks): justify-content / align-content</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.grid{
  display:grid;
  grid-template-columns: repeat(3, 120px);
  grid-template-rows: repeat(2, 80px);
  gap: 12px;

  justify-content: center; /* eje inline (horizontal) */
  align-content: start;     /* eje block (vertical) */
}`}</code>
                </pre>
                <div className="callout">
                  Esto mueve el “bloque de rejilla” dentro del contenedor cuando el grid no ocupa todo el ancho/alto.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Items dentro de celdas: justify-items / align-items</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  justify-items: start; /* dentro de la celda (horizontal) */
  align-items: center;  /* dentro de la celda (vertical) */
}

/* Para un item concreto */
.card--destacada{
  justify-self: end;
  align-self: stretch;
}`}</code>
                </pre>

                <div className="callout tip">
                  <code>place-items</code> es shorthand de align-items + justify-items.
                  <br />
                  <code>place-content</code> es shorthand de align-content + justify-content.
                </div>

                <pre>
                  <code>{`.grid{
  place-items: center;   /* items centrados dentro de celdas */
  place-content: start;  /* tracks pegados arriba */
}`}</code>
                </pre>
              </div>
            </details>

            <div className="callout warn">
              Error típico: intentar centrar items con flex dentro del contenedor, cuando Grid ya lo resuelve con place-items.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 5) AUTO-PLACEMENT ================= */}
      <section className="doc-section" id="auto">
        <details className="dd" open>
          <summary>5) Auto-placement y grid-auto-* (cómo Grid coloca elementos “solo”)</summary>
          <div className="dd-body">
            <p>
              Si no posicionas manualmente los items, Grid usa auto-placement:
              los coloca en celdas disponibles en orden del DOM.
            </p>

            <pre>
              <code>{`.grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  grid-auto-rows: 140px; /* filas automáticas con altura base */
}`}</code>
            </pre>

            <details className="dd dd-nested" open>
              <summary>grid-auto-flow: row / column / dense</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.grid{ grid-auto-flow: row; }     /* por filas (default) */
.grid{ grid-auto-flow: column; }  /* por columnas */
.grid{ grid-auto-flow: dense; }   /* intenta rellenar huecos */`}</code>
                </pre>

                <div className="callout warn">
                  <strong>dense</strong> puede cambiar el orden visual (rellena huecos).
                  Úsalo con cuidado por accesibilidad y comprensión del usuario.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Demo: item que ocupa 2 columnas / 2 filas</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.item--ancho{
  grid-column: span 2;
}

.item--alto{
  grid-row: span 2;
}`}</code>
                </pre>

                <div className="callout tip">
                  span es la forma más didáctica de “hacer crecer” un item sin calcular líneas.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 6) AREAS ================= */}
      <section className="doc-section" id="areas">
        <details className="dd" open>
          <summary>6) Grid Areas: layout declarativo profesional (introducción sólida)</summary>
          <div className="dd-body">
            <p>
              Grid Areas permite describir el layout como un mapa. Es ideal para páginas completas.
              (En el siguiente tema puedes profundizar aún más en Areas.)
            </p>

            <pre>
              <code>{`.layout{
  display:grid;
  gap: 16px;

  grid-template-columns: 220px 1fr;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header{ grid-area: header; }
.sidebar{ grid-area: sidebar; }
.main{ grid-area: main; }
.footer{ grid-area: footer; }`}</code>
            </pre>

            <div className="callout tip">
              Ventaja: el CSS se lee como un plano: “header arriba”, “sidebar a la izquierda”, etc.
            </div>

            <details className="dd dd-nested" open>
              <summary>Reglas rápidas para no romper Grid Areas</summary>
              <div className="dd-body">
                <ul>
                  <li>El mapa debe tener el mismo número de tokens en cada fila.</li>
                  <li>Un área repetida debe formar un rectángulo (no forma de L).</li>
                  <li><code>.</code> crea una celda vacía (hueco).</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 7) RESPONSIVE ================= */}
      <section className="doc-section" id="responsive">
        <details className="dd" open>
          <summary>7) Responsive moderno: auto-fit/auto-fill + minmax (sin media queries)</summary>
          <div className="dd-body">
            <p>
              Para rejillas de tarjetas (cards), la forma profesional es:
              <strong> columnas automáticas</strong> con límite mínimo y máximo.
            </p>

            <pre>
              <code>{`.cards{
  display:grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}`}</code>
            </pre>

            <div className="callout tip">
              ¿auto-fit o auto-fill? <strong>auto-fit</strong> suele ser el favorito en cards:
              colapsa columnas vacías y aprovecha el espacio con los items existentes.
            </div>

            <details className="dd dd-nested" open>
              <summary>auto-fill vs auto-fit explicado con una imagen mental</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    <strong>auto-fill</strong>: “reserva” huecos para columnas aunque falten items.
                  </li>
                  <li>
                    <strong>auto-fit</strong>: “encaja” las columnas existentes y colapsa las vacías.
                  </li>
                </ul>
                <div className="callout">
                  Regla práctica para alumnos: empieza con <code>auto-fit</code>. Si necesitas que se “mantengan”
                  huecos de columna por diseño, prueba <code>auto-fill</code>.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Patrón “más profesional” con container queries (opcional avanzado)</summary>
              <div className="dd-body">
                <div className="callout warn">
                  Esto es opcional. Si tu manual aún no trata container queries, puedes saltarlo.
                </div>
                <pre>
                  <code>{`/* Idea: responder al ancho del componente, no del viewport */
.cards{
  container-type: inline-size;
  display:grid;
  gap: 16px;
  grid-template-columns: 1fr;
}

@container (min-width: 520px){
  .cards{ grid-template-columns: repeat(2, 1fr); }
}

@container (min-width: 860px){
  .cards{ grid-template-columns: repeat(3, 1fr); }
}`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 8) PATRONES ================= */}
      <section className="doc-section" id="patrones">
        <details className="dd" open>
          <summary>8) Patrones profesionales con Grid (lo que sí se usa en producción)</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>Patrón A · Dashboard (sidebar fija + header + contenido)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.dashboard{
  display:grid;
  gap: 16px;
  min-height: 100vh;

  grid-template-columns: 260px 1fr;
  grid-template-rows: auto 1fr;

  grid-template-areas:
    "sidebar header"
    "sidebar content";
}

.sidebar{ grid-area: sidebar; }
.header{ grid-area: header; }
.content{ grid-area: content; }`}</code>
                </pre>

                <div className="callout tip">
                  Este layout es muy habitual en apps internas, paneles y backoffice.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Patrón B · Página (header + main + aside + footer) con Areas</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.page{
  display:grid;
  gap: 16px;
  min-height: 100vh;

  grid-template-columns: 1fr 320px;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
}

.page-header{ grid-area: header; }
.page-main{ grid-area: main; }
.page-aside{ grid-area: aside; }
.page-footer{ grid-area: footer; }`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Patrón C · Galería de cards (responsive automático)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`.gallery{
  display:grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}`}</code>
                </pre>

                <div className="callout">
                  Este patrón reemplaza muchas “media queries por columnas”.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Patrón D · “Masonry” (simulado) — advertencia didáctica</summary>
              <div className="dd-body">
                <div className="callout warn">
                  Grid “masonry” real no es universal en todos los navegadores. Para enseñar,
                  puedes simularlo con spans (no perfecto) o usar soluciones específicas.
                </div>

                <pre>
                  <code>{`.masonry{
  display:grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-auto-rows: 12px; /* unidad base */
}

/* Cada tarjeta multiplica filas según su contenido (manual) */
.card--r12{ grid-row: span 12; }
.card--r18{ grid-row: span 18; }
.card--r24{ grid-row: span 24; }`}</code>
                </pre>

                <div className="callout tip">
                  Esto sirve para explicar <code>grid-row: span n</code> y auto-rows.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 9) ACCESIBILIDAD ================= */}
      <section className="doc-section" id="accesibilidad">
        <details className="dd" open>
          <summary>9) Accesibilidad en layouts Grid: orden lógico, foco y lectura</summary>
          <div className="dd-body">
            <p>
              Un punto universitario: el CSS puede cambiar el orden visual, pero el orden del DOM
              sigue controlando tabulación y lectores de pantalla.
            </p>

            <div className="callout tip">
              ✅ Buenas prácticas:
              <ul style={{ marginBottom: 0 }}>
                <li>Mantén el HTML en orden semántico (header → nav → main → footer).</li>
                <li>Usa Grid Areas para distribuir visualmente sin reordenar dramáticamente.</li>
                <li>Evita depender de “dense” para reorganizar por estética.</li>
                <li>Asegura foco visible (tu CSS base ya lo hace) y usa skip-link.</li>
              </ul>
            </div>

            <div className="callout warn">
              Si colocas visualmente “main arriba” pero en el DOM está después, un usuario de teclado
              recorrerá primero nav/aside antes de llegar a main. Eso puede ser confuso.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 10) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>10) Errores comunes + checklist profesional de depuración</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>No definir columnas</strong> → se ve “una columna” y parece que Grid no funciona.
              </li>
              <li>
                <strong>Confundir auto-fit y auto-fill</strong> → columnas vacías o distribución rara.
              </li>
              <li>
                <strong>Olvidar gap</strong> → se usan márgenes y luego aparecen inconsistencias.
              </li>
              <li>
                <strong>No usar minmax</strong> → el layout se rompe en anchos intermedios.
              </li>
              <li>
                <strong>Creer que los nietos son items</strong> → “no se aplica a mi card interna”.
              </li>
              <li>
                <strong>Grid Areas inválidas</strong> → tokens por fila distintos o áreas no rectangulares.
              </li>
            </ul>

            <details className="dd dd-nested" open>
              <summary>Checklist (si algo “no cuadra”, haz esto en orden)</summary>
              <div className="dd-body">
                <ol>
                  <li>¿El contenedor tiene <code>display:grid</code>?</li>
                  <li>¿Hay <code>grid-template-columns</code> definido?</li>
                  <li>¿Gap definido? (para ver estructura)</li>
                  <li>¿Los items son hijos directos?</li>
                  <li>¿Estás usando auto-fit/auto-fill con minmax correctamente?</li>
                  <li>Si usas Areas: ¿mismo nº de tokens por fila y áreas rectangulares?</li>
                </ol>

                <pre>
                  <code>{`/* Debug visual */
.grid{
  outline: 2px dashed rgba(228,77,38,.55);
}
.grid > *{
  outline: 2px solid rgba(31,41,55,.35);
}`}</code>
                </pre>

                <div className="callout tip">
                  DevTools: activa “Grid overlays” para ver tracks y áreas. Es la forma más rápida de enseñar.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 11) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>11) Retos prácticos (del concepto al dominio)</summary>
          <div className="dd-body">
            <div className="callout">
              🚀 Hazlos en orden. La progresión está pensada para construir intuición real.
            </div>

            {/* Reto 1 */}
            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1: Grid de 3 columnas con cards iguales</summary>
              <div className="dd-body">
                <p>
                  Crea una rejilla de 3 columnas. Cada card debe estirarse igual. Usa gap (no márgenes).
                </p>

                <details className="dd dd-nested">
                  <summary>✅ Solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`.cards{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            {/* Reto 2 */}
            <details className="dd dd-nested" open>
              <summary>🟡 Reto 2: Rejilla responsive sin media queries</summary>
              <div className="dd-body">
                <p>
                  Crea cards que se adapten: mínimo 220px, máximo 1fr. Que el número de columnas cambie solo.
                </p>

                <details className="dd dd-nested">
                  <summary>✅ Solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`.cards{
  display:grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            {/* Reto 3 */}
            <details className="dd dd-nested">
              <summary>🔴 Reto 3: Item destacado que ocupa 2 columnas y 2 filas</summary>
              <div className="dd-body">
                <p>
                  En una galería, marca una card como destacada. Debe ocupar 2 columnas y 2 filas.
                </p>

                <details className="dd dd-nested">
                  <summary>✅ Solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`.gallery{
  display:grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-rows: 160px;
}

.card--featured{
  grid-column: span 2;
  grid-row: span 2;
}`}</code>
                    </pre>

                    <div className="callout warn">
                      Consejo: prueba en anchos pequeños. Si no caben 2 columnas, el item se ajustará.
                      Esto también enseña “comportamiento real” en responsive.
                    </div>
                  </div>
                </details>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 12) TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>🏆 Test de evaluación</summary>
          <div className="dd-body">
            <div className="callout">
              Objetivo: que puedas <strong>predecir</strong> qué hará Grid con una configuración dada.
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
                        {ok && <>✅ <strong>{q.why}</strong></>}
                        {bad && (
                          <>
                            ❌ Correcta: <strong>{q.correct}</strong>. {q.why}
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
                    Corregir
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
                      🏆 <strong>Excelente.</strong> Tienes dominio real de Grid (conceptos, responsive y depuración).
                    </>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>
                      🎯 <strong>Muy bien.</strong> Revisa auto-fit/auto-fill y la diferencia entre gap vs márgenes.
                    </>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>
                      📚 <strong>Vas bien.</strong> Practica 2 layouts reales (dashboard + gallery) para afianzar.
                    </>
                  )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Necesitas más práctica.</strong> Repite conceptos de tracks, fr, minmax y auto-placement.
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
          ✅ Checklist final (Grid PRO):
          <ul style={{ marginBottom: 0 }}>
            <li>Defino tracks con fr / minmax para evitar roturas.</li>
            <li>Uso gap para ritmo visual, no márgenes.</li>
            <li>Domino auto-fit/auto-fill para grids responsive.</li>
            <li>Uso Grid Areas para layout grande y mantenible.</li>
            <li>Depuro con overlays de Grid en DevTools.</li>
          </ul>
        </div>

        <div className="doc-next">
          <a href="#" className="btn btn-primary">
            Siguiente tema → Grid Areas en profundidad
          </a>
        </div>
      </section>
    </main>
  );
}
