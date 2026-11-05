import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E10 · Grid con fracciones: layout de página
// Objetivo: construir un layout de página completo
// (header, sidebar, main, aside, footer) usando
// grid-template-columns con fr, grid-column, grid-row
// y grid-template-areas.
// =====================================================

export default function E10_Grid_Layout() {
  useEffect(() => {
    document.title = "E10 · Grid Layout de página — Ejercicios CSS";
  }, []);

  const [layoutActivo, setLayoutActivo] = useState("clasico");

  const layouts = {
    clasico: {
      label: "Clásico (sidebar izq.)",
      grid: '"header header" "sidebar main" "footer footer"',
      cols: "220px 1fr",
      rows: "auto 1fr auto",
    },
    inverso: {
      label: "Sidebar derecha",
      grid: '"header header" "main sidebar" "footer footer"',
      cols: "1fr 220px",
      rows: "auto 1fr auto",
    },
    sinSidebar: {
      label: "Sin sidebar",
      grid: '"header" "main" "footer"',
      cols: "1fr",
      rows: "auto 1fr auto",
    },
    dosSidebars: {
      label: "Dos sidebars",
      grid: '"header header header" "sidebar main aside" "footer footer footer"',
      cols: "180px 1fr 180px",
      rows: "auto 1fr auto",
    },
  };

  const lActivo = layouts[layoutActivo];

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E10 · Nivel intermedio · CSS Grid</p>
        <h1>Grid con fracciones: layout de página</h1>
        <p className="doc-lead">
          En este ejercicio usas CSS Grid para lo que mejor hace: maquetrar un{" "}
          <strong>layout completo de página</strong> con header, sidebar, contenido
          principal y footer — todo con control total de filas y columnas y sin
          ningún hack de flotados o posicionamiento.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> la unidad <code>fr</code>,{" "}
          <code>grid-template-areas</code>, <code>grid-column</code>,{" "}
          <code>grid-row</code>, <code>grid-area</code>, <code>minmax()</code> en filas
          y el patrón <strong>Holy Grail Layout</strong>.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · La unidad fr — fracciones del espacio</a></li>
            <li><a href="#paso-2">Paso 2 · grid-template-rows — definir filas</a></li>
            <li><a href="#paso-3">Paso 3 · grid-column y grid-row — posicionar ítems</a></li>
            <li><a href="#paso-4">Paso 4 · grid-template-areas — el ASCII art</a></li>
            <li><a href="#paso-5">Paso 5 · grid-area — asignar ítems a áreas</a></li>
            <li><a href="#paso-6">Paso 6 · Layout interactivo — cambia el diseño</a></li>
            <li><a href="#paso-7">Paso 7 · Código final + reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · La unidad fr — fracciones del espacio libre</summary>
          <div className="dd-body">
            <p>
              <code>fr</code> (fracción) es la unidad estrella de Grid. Representa una
              fracción del <strong>espacio disponible</strong> después de colocar los
              elementos de tamaño fijo.
            </p>

            <pre><code>{`/* 3 columnas iguales: cada una toma 1/3 del ancho total */
grid-template-columns: 1fr 1fr 1fr;

/* Sidebar + contenido: sidebar fijo de 250px, contenido toma el resto */
grid-template-columns: 250px 1fr;

/* Dos sidebars + contenido: contenido toma el espacio restante */
grid-template-columns: 200px 1fr 200px;

/* Pesos diferentes: la segunda columna es el doble que las otras */
grid-template-columns: 1fr 2fr 1fr;
/* Si el ancho total es 900px: 225px | 450px | 225px */`}</code></pre>

            {/* Demo visual del fr */}
            <h3>Cómo se calcula fr</h3>
            <div style={{ border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "1rem", background: "white" }}>
              {[
                { cols: "1fr 1fr 1fr", labels: ["1fr = 33%", "1fr = 33%", "1fr = 33%"], colors: ["#6366f1", "#8b5cf6", "#a78bfa"] },
                { cols: "1fr 2fr 1fr", labels: ["1fr = 25%", "2fr = 50%", "1fr = 25%"], colors: ["#6366f1", "#4f46e5", "#a78bfa"] },
                { cols: "200px 1fr", labels: ["200px fijo", "1fr = resto"], colors: ["#0891b2", "#06b6d4"] },
              ].map(({ cols, labels, colors }) => (
                <div key={cols} style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.7rem", fontFamily: "monospace", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
                    grid-template-columns: <strong>{cols}</strong>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: cols, gap: "3px" }}>
                    {labels.map((l, i) => (
                      <div key={i} style={{ background: colors[i], color: "white", padding: "0.4rem 0.5rem", borderRadius: "4px", fontSize: "0.72rem", fontWeight: 700, textAlign: "center" }}>{l}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · grid-template-rows — definir filas</summary>
          <div className="dd-body">
            <p>
              Grid también controla las filas. Para un layout de página, el patrón
              más útil es: <strong>header auto, contenido que crece, footer auto</strong>.
            </p>

            <pre><code>{`.pagina {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  /* auto = el tamaño de su contenido
     1fr  = ocupa el espacio sobrante (el main crece para llenar) */

  min-height: 100vh;    /* la página ocupa al menos toda la pantalla */
}

/* grid-template-rows también puede usar minmax(): */
grid-template-rows: 64px minmax(400px, 1fr) 80px;
/* header fijo de 64px, contenido mínimo 400px pero crece, footer de 80px */`}</code></pre>

            <div className="callout tip">
              El truco del <strong>footer pegado abajo</strong>:{" "}
              <code>min-height: 100vh</code> en el grid padre + <code>1fr</code> para
              la fila del contenido. El footer siempre estará abajo aunque la página
              tenga poco contenido.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · grid-column y grid-row — posicionar ítems</summary>
          <div className="dd-body">
            <p>
              Sin <code>grid-template-areas</code>, colocamos los ítems indicando qué{" "}
              <strong>líneas de la cuadrícula</strong> deben ocupar:
            </p>

            <pre><code>{`/* El grid tiene líneas numeradas automáticamente:
   columnas: | 1 | 2 | 3 |
   filas:    — 1 — 2 — 3 —        */

.header {
  grid-column: 1 / 3;    /* de línea-col 1 a línea-col 3 → ocupa TODO el ancho */
  grid-row: 1 / 2;       /* de línea-fila 1 a línea-fila 2 → primera fila */
}

.sidebar {
  grid-column: 1 / 2;    /* primera columna */
  grid-row: 2 / 3;       /* segunda fila */
}

.main {
  grid-column: 2 / 3;    /* segunda columna */
  grid-row: 2 / 3;
}

.footer {
  grid-column: 1 / 3;    /* todo el ancho */
  grid-row: 3 / 4;
}

/* Shorthand: span = "ocupa N pistas desde aquí" */
.header { grid-column: 1 / span 2; }  /* desde columna 1, ocupa 2 */`}</code></pre>

            <div className="callout">
              La notación <code>1 / -1</code> significa "desde la primera línea hasta
              la última" — muy útil cuando no sabes cuántas columnas hay:{" "}
              <code>grid-column: 1 / -1</code> siempre ocupa todo el ancho.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · grid-template-areas — el "ASCII art" del layout</summary>
          <div className="dd-body">
            <p>
              <code>grid-template-areas</code> es la forma más legible de definir un
              layout. Dibujas el layout como un mapa de texto:
            </p>

            <pre><code>{`.pagina {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"     /* fila 1: el header ocupa las 2 columnas */
    "sidebar main"       /* fila 2: sidebar + contenido */
    "footer  footer";    /* fila 3: el footer ocupa las 2 columnas */

  min-height: 100vh;
}`}</code></pre>

            <div className="callout tip">
              <strong>Reglas de grid-template-areas:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li>Cada cadena entre comillas es una <strong>fila</strong></li>
                <li>Las palabras dentro son los <strong>nombres de las áreas</strong></li>
                <li>Repite un nombre para que esa área ocupe varias celdas</li>
                <li>Usa <code>.</code> para una celda vacía (sin nombre)</li>
                <li>El mapa debe ser siempre rectangular (sin huecos irregulares)</li>
              </ul>
            </div>

            <pre><code>{`/* Ejemplo con celda vacía (.) */
grid-template-areas:
  "logo  nav    nav"
  "aside main   main"
  ".     footer footer";
/* La celda inferior-izquierda está vacía */`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · grid-area — asignar ítems a áreas</summary>
          <div className="dd-body">
            <p>
              Una vez definidas las áreas en el padre, cada hijo se asigna a su área
              con <code>grid-area</code>:
            </p>

            <pre><code>{`/* En los hijos: grid-area: nombre-del-area */
.site-header  { grid-area: header; }
.site-sidebar { grid-area: sidebar; }
.site-main    { grid-area: main; }
.site-footer  { grid-area: footer; }

/* ¡Eso es todo! Grid coloca cada elemento automáticamente
   según el mapa definido en grid-template-areas */`}</code></pre>

            <div className="callout tip">
              La belleza de <code>grid-template-areas</code>: para cambiar el layout
              <strong> solo tienes que cambiar las cadenas en el padre</strong>, no
              tocar los hijos. En un media query para móvil, puedes reorganizar todo
              el layout con 4-5 líneas de CSS:
            </div>

            <pre><code>{`@media (max-width: 768px) {
  .pagina {
    grid-template-columns: 1fr;     /* una sola columna */
    grid-template-areas:
      "header"
      "main"
      "sidebar"    /* el sidebar va debajo en móvil */
      "footer";
  }
}`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 — LAYOUT INTERACTIVO ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Layout interactivo — cambia el diseño en tiempo real</summary>
          <div className="dd-body">
            <p>Selecciona un layout y observa cómo cambia la cuadrícula:</p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
              {Object.entries(layouts).map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => setLayoutActivo(key)}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "8px",
                    border: "1.5px solid",
                    borderColor: layoutActivo === key ? "#6366f1" : "#cbd5e1",
                    background: layoutActivo === key ? "#6366f1" : "white",
                    color: layoutActivo === key ? "white" : "#374151",
                    fontWeight: 600,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Código generado */}
            <div style={{ fontSize: "0.75rem", fontFamily: "monospace", background: "#1e293b", color: "#a5f3fc", padding: "0.75rem 1rem", borderRadius: "8px", marginBottom: "1rem", lineHeight: 1.6 }}>
              <span style={{ color: "#94a3b8" }}>{"/* CSS generado */"}</span><br />
              .pagina {"{"}<br />
              {"  "}display: grid;<br />
              {"  "}grid-template-columns: <strong style={{ color: "#fde68a" }}>{lActivo.cols}</strong>;<br />
              {"  "}grid-template-rows: <strong style={{ color: "#fde68a" }}>{lActivo.rows}</strong>;<br />
              {"  "}grid-template-areas:<br />
              {lActivo.grid.split('"').filter((_, i) => i % 2 !== 0).map((row, i) => (
                <span key={i}>{"    "}<span style={{ color: "#fde68a" }}>&ldquo;{row}&rdquo;</span><br /></span>
              ))}
              {"}"}
            </div>

            {/* Maqueta visual del layout */}
            <div style={{
              display: "grid",
              gridTemplateColumns: lActivo.cols,
              gridTemplateRows: lActivo.rows,
              gridTemplateAreas: lActivo.grid,
              gap: "0.5rem",
              minHeight: "260px",
              border: "2px dashed var(--border-medium)",
              borderRadius: "12px",
              padding: "0.75rem",
              background: "#f8fafc",
            }}>
              {/* Header */}
              <div style={{ gridArea: "header", background: "#6366f1", color: "white", borderRadius: "8px", padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>🏠</span>
                <strong style={{ fontSize: "0.875rem" }}>header</strong>
                <span style={{ marginLeft: "auto", fontSize: "0.7rem", opacity: 0.8, fontFamily: "monospace" }}>grid-area: header</span>
              </div>

              {/* Sidebar (solo en layouts que tienen sidebar) */}
              {(layoutActivo === "clasico" || layoutActivo === "inverso" || layoutActivo === "dosSidebars") && (
                <div style={{ gridArea: "sidebar", background: "#8b5cf6", color: "white", borderRadius: "8px", padding: "0.75rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <strong style={{ fontSize: "0.875rem" }}>sidebar</strong>
                  {["Link 1", "Link 2", "Link 3", "Link 4"].map(l => (
                    <div key={l} style={{ background: "rgba(255,255,255,.15)", borderRadius: "4px", padding: "0.3rem 0.5rem", fontSize: "0.75rem" }}>{l}</div>
                  ))}
                </div>
              )}

              {/* Main */}
              <div style={{ gridArea: "main", background: "white", border: "1.5px solid #e2e8f0", borderRadius: "8px", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <strong style={{ fontSize: "0.875rem", color: "#1e293b" }}>main — contenido principal</strong>
                <div style={{ background: "#f1f5f9", borderRadius: "6px", height: "20px" }} />
                <div style={{ background: "#f1f5f9", borderRadius: "6px", height: "20px", width: "80%" }} />
                <div style={{ background: "#f1f5f9", borderRadius: "6px", height: "20px", width: "90%" }} />
                <span style={{ fontSize: "0.7rem", fontFamily: "monospace", color: "#6366f1", marginTop: "auto" }}>grid-area: main</span>
              </div>

              {/* Aside (solo en dosSidebars) */}
              {layoutActivo === "dosSidebars" && (
                <div style={{ gridArea: "aside", background: "#0891b2", color: "white", borderRadius: "8px", padding: "0.75rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <strong style={{ fontSize: "0.875rem" }}>aside</strong>
                  {["Widget 1", "Widget 2"].map(l => (
                    <div key={l} style={{ background: "rgba(255,255,255,.2)", borderRadius: "4px", padding: "0.3rem 0.5rem", fontSize: "0.75rem" }}>{l}</div>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div style={{ gridArea: "footer", background: "#1e293b", color: "#94a3b8", borderRadius: "8px", padding: "0.6rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.78rem" }}>
                <strong style={{ color: "white" }}>footer</strong>
                <span style={{ fontFamily: "monospace", fontSize: "0.7rem" }}>grid-area: footer</span>
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Código completo + reto extra</summary>
          <div className="dd-body">
            <p>El layout "Holy Grail" completo y responsive:</p>

            <pre><code>{`/* HTML */
<body class="pagina">
  <header class="site-header">...</header>
  <nav class="site-sidebar">...</nav>
  <main class="site-main">...</main>
  <aside class="site-aside">...</aside>
  <footer class="site-footer">...</footer>
</body>`}</code></pre>

            <pre><code>{`/* CSS */
.pagina {
  display: grid;
  grid-template-columns: 240px 1fr 200px;
  grid-template-rows: 64px 1fr auto;
  grid-template-areas:
    "header  header  header"
    "sidebar main    aside"
    "footer  footer  footer";
  min-height: 100vh;
  gap: 0;
}

.site-header  { grid-area: header; }
.site-sidebar { grid-area: sidebar; }
.site-main    { grid-area: main; }
.site-aside   { grid-area: aside; }
.site-footer  { grid-area: footer; }

/* Responsive: móvil → todo en una columna */
@media (max-width: 768px) {
  .pagina {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
  }
}

/* Tablet: sin aside */
@media (min-width: 769px) and (max-width: 1024px) {
  .pagina {
    grid-template-columns: 220px 1fr;
    grid-template-areas:
      "header  header"
      "sidebar main"
      "footer  footer";
  }
  .site-aside { display: none; }
}`}</code></pre>

            <div className="callout tip">
              ✅ <strong>Qué has practicado:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li>La unidad <code>fr</code> para distribuir espacio</li>
                <li><code>grid-template-rows</code> con <code>auto</code> y <code>1fr</code></li>
                <li>Posicionamiento con <code>grid-column</code> / <code>grid-row</code></li>
                <li><code>grid-template-areas</code> — el mapa visual del layout</li>
                <li><code>grid-area</code> en los hijos</li>
                <li>Layout responsive con media queries que solo tocan el padre</li>
              </ul>
            </div>

            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Dashboard admin:</strong> crea un layout con sidebar colapsable (usa JavaScript para añadir/quitar una clase que cambia el `grid-template-columns`).</li>
                <li><strong>Subgrid:</strong> dentro de un grid item, crea un nuevo grid con <code>display: subgrid</code> para alinear el contenido interno con el grid padre.</li>
                <li><strong>Grid implícito:</strong> experimenta con <code>grid-auto-rows</code> y <code>grid-auto-flow</code> para entender cómo Grid maneja los ítems que no caben en la cuadrícula explícita.</li>
                <li><strong>Animación de layout:</strong> usa <code>transition</code> en <code>grid-template-columns</code> para animar el cambio de columnas al colapsar el sidebar.</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e09-grid-galeria" className="btn">← E09 Grid Galería</Link>
          <Link to="/ejercicios" className="btn btn-primary">Ver todos los ejercicios →</Link>
        </div>
      </section>
    </main>
  );
}
