import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E16 · Grid areas: layout de revista
// Objetivo: usar grid-template-areas para crear
// layouts editoriales complejos con zonas nombradas.
// =====================================================

const AREAS_EJEMPLO = `"portada portada lateral"
"articulo1 articulo2 lateral"
"pie pie pie"`;

export default function E16_Grid_Areas() {
  useEffect(() => {
    document.title = "E16 · Grid Areas: layout de revista — Ejercicios CSS";
  }, []);

  const [layout, setLayout] = useState("tres-col");

  const layoutsDemo = {
    "tres-col": {
      label: "Revista (3 cols)",
      areas: `"portada portada lateral"\n"art1 art2 lateral"\n"pie pie pie"`,
      cols: "2fr 1fr 1fr",
      rows: "280px 200px 80px",
    },
    "dos-col": {
      label: "Blog (2 cols)",
      areas: `"portada portada"\n"art1 art2"\n"pie pie"`,
      cols: "1fr 1fr",
      rows: "280px 200px 80px",
    },
    editorial: {
      label: "Editorial",
      areas: `"portada lateral"\n"art1 lateral"\n"art2 art3"`,
      cols: "2fr 1fr",
      rows: "160px 160px 200px",
    },
  };

  const demo = layoutsDemo[layout];

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E16 · Nivel avanzado · CSS Grid</p>
        <h1>Grid areas: layout de revista</h1>
        <p className="doc-lead">
          <code>grid-template-areas</code> es la propiedad más visual e intuitiva de CSS Grid.
          Te permite <strong>dibujar el layout con texto</strong>, asignando nombres legibles a
          cada zona del diseño. Es el paso natural después de dominar Grid con fracciones.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong>{" "}
          <code>grid-template-areas</code>, <code>grid-area</code>, zonas nombradas,
          cómo combinar <code>fr</code> con áreas y cómo cambiar el layout completo
          con una sola media query.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · ¿Qué son las grid areas?</a></li>
            <li><a href="#paso-2">Paso 2 · grid-template-areas: el mapa del layout</a></li>
            <li><a href="#paso-3">Paso 3 · grid-area en los hijos</a></li>
            <li><a href="#paso-4">Paso 4 · Combinar con fr y rows</a></li>
            <li><a href="#paso-5">Paso 5 · Demo interactiva de layouts</a></li>
            <li><a href="#paso-6">Paso 6 · Responsive con areas + media queries</a></li>
            <li><a href="#paso-7">Paso 7 · Tu código: cópialo y practica</a></li>
            <li><a href="#paso-8">Paso 8 · Reto extra: portada de periódico</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · ¿Qué son las grid areas?</summary>
          <div className="dd-body">
            <p>
              Hasta ahora con CSS Grid definías columnas y filas y luego colocabas
              elementos usando <code>grid-column</code> y <code>grid-row</code> con
              números de línea. Funciona, pero es difícil de leer.
            </p>
            <p>
              <strong>Grid areas</strong> te permite <em>nombrar zonas</em> del grid
              y asignárselas a los elementos. El código resultante es
              casi autodocumentado.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <div>
                <h4 style={{ marginTop: 0 }}>❌ Sin grid areas (difícil de leer)</h4>
                <pre><code>{`.header  { grid-column: 1 / 4; grid-row: 1; }
.sidebar { grid-column: 3; grid-row: 2 / 4; }
.main    { grid-column: 1 / 3; grid-row: 2; }
.footer  { grid-column: 1 / 4; grid-row: 3; }`}</code></pre>
              </div>
              <div>
                <h4 style={{ marginTop: 0 }}>✅ Con grid areas (visual e intuitivo)</h4>
                <pre><code>{`.contenedor {
  grid-template-areas:
    "header  header  header"
    "main    main    sidebar"
    "footer  footer  footer";
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }`}</code></pre>
              </div>
            </div>

            <div className="callout">
              💡 <strong>La regla de oro:</strong> cada fila del <code>grid-template-areas</code>
              es una fila del grid. Cada palabra es una celda. Misma palabra = la zona ocupa
              esas celdas. Usa un punto <code>.</code> para celdas vacías.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · grid-template-areas: el mapa del layout</summary>
          <div className="dd-body">
            <p>
              Define el mapa de tu layout en el <strong>contenedor padre</strong>.
              Cada string es una fila. Las palabras dentro son las zonas de esa fila.
            </p>

            <pre><code>{`.revista {
  display: grid;
  grid-template-areas:
    "portada  portada  lateral"
    "art1     art2     lateral"
    "pie      pie      pie";
  /* Las zonas deben ser rectángulas: no se permiten formas en L */
}`}</code></pre>

            <h3>Reglas importantes</h3>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Regla</th>
                    <th>Ejemplo válido</th>
                    <th>Ejemplo inválido</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Las áreas deben ser rectangulares</td>
                    <td><code>"a a b" / "a a c"</code></td>
                    <td><code>"a b b" / "a a b"</code> ❌</td>
                  </tr>
                  <tr>
                    <td>Todas las filas misma cantidad de celdas</td>
                    <td><code>"a b c" / "d e f"</code></td>
                    <td><code>"a b" / "c d e"</code> ❌</td>
                  </tr>
                  <tr>
                    <td>Celda vacía con punto</td>
                    <td><code>"a . b"</code></td>
                    <td>No se puede dejar espacio en blanco</td>
                  </tr>
                  <tr>
                    <td>Los nombres son case-sensitive</td>
                    <td><code>header</code> ≠ <code>Header</code></td>
                    <td>Mezclar mayúsculas/minúsculas causa error</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Visualización del layout</h3>
            <div
              style={{
                display: "grid",
                gridTemplateAreas: `"portada portada lateral" "art1 art2 lateral" "pie pie pie"`,
                gridTemplateColumns: "2fr 1fr 1fr",
                gridTemplateRows: "100px 80px 50px",
                gap: "4px",
                background: "var(--border-subtle)",
                padding: "4px",
                borderRadius: "8px",
                marginTop: "1rem",
              }}
            >
              {[
                { area: "portada", label: "portada", bg: "#6366f1" },
                { area: "art1", label: "art1", bg: "#8b5cf6" },
                { area: "art2", label: "art2", bg: "#a78bfa" },
                { area: "lateral", label: "lateral", bg: "#06b6d4" },
                { area: "pie", label: "pie", bg: "#64748b" },
              ].map((z) => (
                <div
                  key={z.area}
                  style={{
                    gridArea: z.area,
                    background: z.bg,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    borderRadius: "4px",
                  }}
                >
                  {z.label}
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · grid-area en los hijos</summary>
          <div className="dd-body">
            <p>
              Cada elemento hijo necesita saber a qué área pertenece. Usa la propiedad{" "}
              <code>grid-area</code> con el mismo nombre que definiste en el padre.
            </p>

            <pre><code>{`/* CSS de los elementos hijos */
.portada { grid-area: portada; }
.art1    { grid-area: art1; }
.art2    { grid-area: art2; }
.lateral { grid-area: lateral; }
.pie     { grid-area: pie; }

/* HTML */
<div class="revista">
  <article class="portada">Portada grande</article>
  <article class="art1">Artículo 1</article>
  <article class="art2">Artículo 2</article>
  <aside class="lateral">Lateral</aside>
  <footer class="pie">Pie de página</footer>
</div>`}</code></pre>

            <div className="callout">
              💡 <code>grid-area</code> también acepta la sintaxis corta de líneas:{" "}
              <code>grid-area: 1 / 2 / 3 / 4</code> (fila-inicio / col-inicio / fila-fin / col-fin).
              Pero para layouts complejos, los nombres nombrados son mucho más claros.
            </div>

            <h3>Nombres semánticos recomendados</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              {[
                { nombre: "header", uso: "Cabecera / barra superior" },
                { nombre: "nav", uso: "Navegación lateral o superior" },
                { nombre: "main", uso: "Contenido principal" },
                { nombre: "sidebar", uso: "Columna lateral" },
                { nombre: "aside", uso: "Contenido relacionado" },
                { nombre: "footer", uso: "Pie de página" },
                { nombre: "hero", uso: "Sección destacada" },
                { nombre: "portada", uso: "Artículo principal revista" },
              ].map((n) => (
                <div key={n.nombre} className="card" style={{ padding: "0.75rem" }}>
                  <code style={{ color: "var(--interactive-primary)" }}>{n.nombre}</code>
                  <p style={{ margin: "0.25rem 0 0", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                    {n.uso}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · Combinar grid-template-areas con fr y rows</summary>
          <div className="dd-body">
            <p>
              Las áreas definen <em>dónde van</em> los elementos, pero las columnas y filas
              definen <em>cuánto espacio tienen</em>. Combina ambas propiedades para control total.
            </p>

            <pre><code>{`.revista {
  display: grid;
  grid-template-areas:
    "portada  portada  lateral"   /* Fila 1 */
    "art1     art2     lateral"   /* Fila 2 */
    "pie      pie      pie";      /* Fila 3 */

  /* Columnas: la portada ocupa el doble que cada artículo,
     el lateral tiene ancho fijo relativo */
  grid-template-columns: 2fr 1fr 300px;

  /* Filas: portada más alta, artículos medianos, pie bajo */
  grid-template-rows: 320px 200px 80px;

  gap: 1rem;
}`}</code></pre>

            <h3>Unidades más usadas en layouts de revista</h3>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Unidad</th>
                    <th>Cuándo usarla</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>fr</code></td>
                    <td>Columnas proporcionales que llenan el espacio</td>
                    <td><code>2fr 1fr 1fr</code></td>
                  </tr>
                  <tr>
                    <td><code>px</code></td>
                    <td>Sidebar fijo, alturas exatas</td>
                    <td><code>300px</code> para sidebar</td>
                  </tr>
                  <tr>
                    <td><code>auto</code></td>
                    <td>Fila se ajusta al contenido</td>
                    <td><code>auto</code> para footer</td>
                  </tr>
                  <tr>
                    <td><code>minmax()</code></td>
                    <td>Columna con mínimo y máximo</td>
                    <td><code>minmax(200px, 1fr)</code></td>
                  </tr>
                  <tr>
                    <td><code>%</code></td>
                    <td>Porcentaje del contenedor</td>
                    <td><code>30%</code> (mejor usar <code>fr</code>)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Demo interactiva de layouts</summary>
          <div className="dd-body">
            <p>Selecciona un tipo de layout y observa cómo cambia el <code>grid-template-areas</code>:</p>

            {/* Selector de layout */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              {Object.entries(layoutsDemo).map(([key, val]) => (
                <button
                  key={key}
                  className={`btn ${layout === key ? "btn-primary" : ""}`}
                  onClick={() => setLayout(key)}
                >
                  {val.label}
                </button>
              ))}
            </div>

            {/* CSS generado */}
            <pre style={{ marginBottom: "1rem" }}><code>{`grid-template-areas:\n  ${demo.areas.split("\n").join("\n  ")};
grid-template-columns: ${demo.cols};`}</code></pre>

            {/* Demo visual */}
            <div
              style={{
                display: "grid",
                gridTemplateAreas: demo.areas,
                gridTemplateColumns: demo.cols,
                gridTemplateRows: demo.rows,
                gap: "6px",
                background: "var(--border-subtle)",
                padding: "6px",
                borderRadius: "12px",
              }}
            >
              {layout === "tres-col" && (
                <>
                  <DemoZona area="portada" label="📰 PORTADA" bg="#6366f1" />
                  <DemoZona area="art1" label="📄 Artículo 1" bg="#8b5cf6" />
                  <DemoZona area="art2" label="📄 Artículo 2" bg="#a78bfa" />
                  <DemoZona area="lateral" label="📋 Lateral" bg="#06b6d4" />
                  <DemoZona area="pie" label="🔗 Pie" bg="#64748b" />
                </>
              )}
              {layout === "dos-col" && (
                <>
                  <DemoZona area="portada" label="📰 PORTADA" bg="#6366f1" />
                  <DemoZona area="art1" label="📄 Artículo 1" bg="#8b5cf6" />
                  <DemoZona area="art2" label="📄 Artículo 2" bg="#a78bfa" />
                  <DemoZona area="pie" label="🔗 Pie" bg="#64748b" />
                </>
              )}
              {layout === "editorial" && (
                <>
                  <DemoZona area="portada" label="📰 PORTADA" bg="#6366f1" />
                  <DemoZona area="lateral" label="📋 Lateral" bg="#06b6d4" />
                  <DemoZona area="art1" label="📄 Art 1" bg="#8b5cf6" />
                  <DemoZona area="art2" label="📄 Art 2" bg="#a78bfa" />
                  <DemoZona area="art3" label="📄 Art 3" bg="#c4b5fd" />
                </>
              )}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Responsive con areas + media queries</summary>
          <div className="dd-body">
            <p>
              La magia de <code>grid-template-areas</code> se multiplica con responsive design.
              Para cambiar <strong>todo el layout</strong> en móvil solo redefines las áreas:
            </p>

            <pre><code>{`/* ── Mobile first (una sola columna) ── */
.revista {
  display: grid;
  grid-template-areas:
    "portada"
    "lateral"
    "art1"
    "art2"
    "pie";
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* ── Tablet: dos columnas ── */
@media (min-width: 640px) {
  .revista {
    grid-template-areas:
      "portada portada"
      "art1    art2"
      "lateral lateral"
      "pie     pie";
    grid-template-columns: 1fr 1fr;
  }
}

/* ── Desktop: tres columnas ── */
@media (min-width: 1024px) {
  .revista {
    grid-template-areas:
      "portada portada lateral"
      "art1    art2    lateral"
      "pie     pie     pie";
    grid-template-columns: 2fr 1fr 280px;
    grid-template-rows: 320px 200px 80px;
  }
}

/* Los hijos NO cambian: solo el padre */
.portada { grid-area: portada; }
.art1    { grid-area: art1; }
.art2    { grid-area: art2; }
.lateral { grid-area: lateral; }
.pie     { grid-area: pie; }`}</code></pre>

            <div className="callout tip">
              🚀 <strong>Potencia clave:</strong> los elementos hijos no necesitan cambiar.
              Solo redefinir las áreas en el padre basta para reorganizar todo el layout.
              Es mucho más mantenible que cambiar <code>grid-column</code> en cada hijo.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Tu código HTML+CSS: cópialo y practica</summary>
          <div className="dd-body">
            <p>
              Copia este código completo en un archivo <code>.html</code> nuevo y ábrelo
              en el navegador. Empieza desde la vista mobile y luego amplía la ventana.
            </p>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E16 · Layout de revista con Grid Areas</title>
  <style>
    /* ── Reset y base ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: #f8fafc;
      color: #1e293b;
      padding: 1rem;
    }

    /* ── Contenedor principal ── */
    .revista {
      display: grid;
      grid-template-areas:
        "portada"
        "lateral"
        "art1"
        "art2"
        "pie";
      grid-template-columns: 1fr;
      gap: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    @media (min-width: 640px) {
      .revista {
        grid-template-areas:
          "portada portada"
          "art1    art2"
          "lateral lateral"
          "pie     pie";
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (min-width: 1024px) {
      .revista {
        grid-template-areas:
          "portada portada lateral"
          "art1    art2    lateral"
          "pie     pie     pie";
        grid-template-columns: 2fr 1fr 280px;
        grid-template-rows: 320px 200px 60px;
      }
    }

    /* ── Asignación de áreas ── */
    .portada { grid-area: portada; }
    .art1    { grid-area: art1; }
    .art2    { grid-area: art2; }
    .lateral { grid-area: lateral; }
    .pie     { grid-area: pie; }

    /* ── Estilos de las zonas ── */
    .portada {
      background: linear-gradient(135deg, #1e1b4b, #4338ca);
      color: white;
      padding: 2rem;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .portada .kicker { font-size: 0.75rem; text-transform: uppercase;
      letter-spacing: 0.1em; opacity: 0.7; margin-bottom: 0.5rem; }
    .portada h2 { font-size: clamp(1.25rem, 3vw, 2rem); line-height: 1.2; }
    .portada p  { margin-top: 0.75rem; opacity: 0.85; font-size: 0.9rem; }

    .art1, .art2 {
      background: white;
      border-radius: 12px;
      padding: 1.25rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    }
    .art1 h3, .art2 h3 { font-size: 1rem; margin-bottom: 0.5rem; }
    .art1 p,  .art2 p  { font-size: 0.875rem; color: #64748b; }

    .lateral {
      background: white;
      border-radius: 12px;
      padding: 1.25rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    }
    .lateral h3 { font-size: 0.85rem; text-transform: uppercase;
      letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 1rem; }
    .lateral ul { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
    .lateral li { font-size: 0.875rem; padding-bottom: 0.75rem;
      border-bottom: 1px solid #f1f5f9; }
    .lateral li:last-child { border-bottom: none; }

    .pie {
      background: #1e293b;
      color: #94a3b8;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      padding: 0.75rem;
    }
  </style>
</head>
<body>
  <div class="revista">

    <!-- PORTADA: artículo principal -->
    <article class="portada">
      <p class="kicker">Especial · Diseño Web</p>
      <h2>CSS Grid Areas: el layout thinking del futuro</h2>
      <p>
        Cómo los layouts de revista del siglo XX inspiran las técnicas
        de composición más potentes del CSS moderno.
      </p>
    </article>

    <!-- ARTÍCULO 1 -->
    <article class="art1">
      <h3>🎨 Variables CSS: diseño con tokens</h3>
      <p>
        Las custom properties permiten crear sistemas de diseño robustos
        y temas en tiempo real sin tocar el JavaScript.
      </p>
    </article>

    <!-- ARTÍCULO 2 -->
    <article class="art2">
      <h3>⚡ Flexbox vs Grid: guía definitiva</h3>
      <p>
        Cuándo usar cada sistema de layout y cómo combinarlos
        para obtener lo mejor de ambos mundos.
      </p>
    </article>

    <!-- LATERAL: noticias breves -->
    <aside class="lateral">
      <h3>En breve</h3>
      <ul>
        <li>Container Queries ahora en todos los navegadores modernos</li>
        <li>CSS Nesting sale de la fase experimental</li>
        <li>Tailwind v4 reduce el tamaño del bundle un 60%</li>
        <li>Chrome 126 soporta anchor positioning</li>
      </ul>
    </aside>

    <!-- PIE DE PÁGINA -->
    <footer class="pie">
      © 2026 CSS Magazine · Todos los derechos reservados
    </footer>

  </div>
</body>
</html>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 8 ════════════ */}
      <section className="doc-section" id="paso-8">
        <details className="dd">
          <summary>Paso 8 · Reto extra: portada de periódico</summary>
          <div className="dd-body">
            <p>
              ¿Lo completaste? Estos retos te llevan al siguiente nivel:
            </p>
            <ol>
              <li>
                <strong>Portada de periódico:</strong> Crea un layout tipo periódico clásico con
                una noticia principal que ocupa toda la fila superior y 4 noticias secundarias
                en la segunda fila en grid de 4 columnas.
              </li>
              <li>
                <strong>Celdas vacías:</strong> Usa el punto (<code>.</code>) para dejar una
                celda vacía entre artículos. Experimenta con diferentes posiciones.
              </li>
              <li>
                <strong>Hover en zonas:</strong> Añade una transición al <code>box-shadow</code>
                en cada artículo cuando se pasa el cursor por encima.
              </li>
              <li>
                <strong>Imagen como portada:</strong> Cambia el fondo de la portada por una imagen
                real con <code>background-image</code>, <code>background-size: cover</code> y
                un overlay oscuro semitransparente para que el texto sea legible.
              </li>
              <li>
                <strong>Sticky sidebar:</strong> Añade <code>position: sticky; top: 1rem</code>
                al lateral para que se quede fijo al hacer scroll. Ajusta el altura con{" "}
                <code>overflow-y: auto</code>.
              </li>
            </ol>
            <div className="callout tip">
              🏆 <strong>Nivel extra:</strong> Toma el layout terminado y recréalo usando el
              Grid de Bootstrap (E11). Compara cuántas líneas de CSS necesitas en cada caso.
              Reflexiona sobre las ventajas de cada enfoque.
            </div>
          </div>
        </details>
      </section>

      <div className="doc-next">
        <Link to="/ejercicios/e15-bootstrap-landing" className="btn">← E15 Bootstrap Landing</Link>
        <Link to="/ejercicios/e17-responsive-mobile-first" className="btn btn-primary">E17 Responsive mobile-first →</Link>
      </div>
    </main>
  );
}

// ── Componente auxiliar para la demo ─────────────────────────
function DemoZona({ area, label, bg }) {
  return (
    <div
      style={{
        gridArea: area,
        background: bg,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: "0.8rem",
        borderRadius: "6px",
        fontFamily: "monospace",
        textAlign: "center",
        padding: "0.5rem",
      }}
    >
      {label}
    </div>
  );
}
