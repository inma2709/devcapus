import { useEffect } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E11 · Bootstrap: primera maqueta con el grid
// Objetivo: entender el sistema de 12 columnas de Bootstrap,
// los breakpoints, las clases col-* y cómo se compara
// con CSS Grid puro que ya conocemos.
// =====================================================

const BREAKPOINTS = [
  { nombre: "xs", clase: "(ninguna)", ancho: "< 576px", cols: 12, uso: "Móvil pequeño — el punto de partida" },
  { nombre: "sm", clase: "col-sm-*", ancho: "≥ 576px", cols: 12, uso: "Móvil grande / phablet" },
  { nombre: "md", clase: "col-md-*", ancho: "≥ 768px", cols: 12, uso: "Tablet — el más usado" },
  { nombre: "lg", clase: "col-lg-*", ancho: "≥ 992px", cols: 12, uso: "Desktop pequeño" },
  { nombre: "xl", clase: "col-xl-*", ancho: "≥ 1200px", cols: 12, uso: "Desktop grande" },
  { nombre: "xxl", clase: "col-xxl-*", ancho: "≥ 1400px", cols: 12, uso: "Pantallas muy grandes" },
];

export default function E11_Bootstrap_Grid() {
  useEffect(() => {
    document.title = "E11 · Bootstrap Grid — Ejercicios CSS";
  }, []);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">Saltar al contenido</a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E11 · Nivel intermedio · Bootstrap 5</p>
        <h1>Bootstrap: primera maqueta con el grid</h1>
        <p className="doc-lead">
          Ahora que entiendes CSS Grid de verdad, Bootstrap Grid no será magia negra
          sino un <strong>sistema de convenciones construido sobre flex y CSS</strong>.
          Aprenderás las clases, los breakpoints y cuándo tiene sentido usarlo.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> el sistema de 12 columnas, clases{" "}
          <code>container</code> / <code>row</code> / <code>col-*</code>, breakpoints
          Bootstrap, <code>col-md-6 col-lg-4</code> y cómo se compara con CSS Grid puro.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · ¿Qué es Bootstrap y cuándo usarlo?</a></li>
            <li><a href="#paso-2">Paso 2 · Incluir Bootstrap: el CDN</a></li>
            <li><a href="#paso-3">Paso 3 · Container: la caja centrada</a></li>
            <li><a href="#paso-4">Paso 4 · Row y Col: el sistema de 12 columnas</a></li>
            <li><a href="#paso-5">Paso 5 · Breakpoints: columnas responsive</a></li>
            <li><a href="#paso-6">Paso 6 · Bootstrap Grid vs CSS Grid</a></li>
            <li><a href="#paso-7">Paso 7 · Tu HTML copiable: practica ya</a></li>
            <li><a href="#paso-8">Paso 8 · Reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · ¿Qué es Bootstrap y cuándo usarlo?</summary>
          <div className="dd-body">
            <p>
              Bootstrap es una <strong>biblioteca de CSS y JavaScript</strong> creada por
              Twitter en 2011. Te da componentes listos (navbar, cards, modales, formularios)
              y un sistema de grid para que no tengas que escribir todo desde cero.
            </p>
            <div className="callout tip">
              <strong>¿Por qué aprenderlo si ya sé CSS?</strong> Porque Bootstrap está
              en miles de proyectos reales. Como desarrollador/a, te encontrarás código
              Bootstrap aunque tú no lo hayas elegido. Entender cómo funciona por dentro —
              que es lo que estás haciendo — te permitirá usarlo, personalizarlo y
              saber cuándo prescindir de él.
            </div>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead><tr><th>Situación</th><th>Usa Bootstrap</th><th>Usa CSS puro</th></tr></thead>
                <tbody>
                  <tr><td>Prototipo rápido / MVP</td><td>✅ Ideal</td><td>Más lento</td></tr>
                  <tr><td>Proyecto con diseño propio y específico</td><td>Sobreingeniería</td><td>✅ Ideal</td></tr>
                  <tr><td>Equipo que ya usa Bootstrap</td><td>✅ Consiste en el estilo</td><td>Rompe la coherencia</td></tr>
                  <tr><td>Aprender CSS a fondo</td><td>Oculta la complejidad</td><td>✅ Imprescindible</td></tr>
                  <tr><td>Quieres máximo control visual</td><td>Pelea constante</td><td>✅ Control total</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · Incluir Bootstrap: el CDN</summary>
          <div className="dd-body">
            <p>
              La forma más rápida de empezar es con el <strong>CDN</strong> (Content
              Delivery Network): un enlace en el <code>{"<head>"}</code> que carga Bootstrap
              directamente desde los servidores de Bootstrap sin instalar nada.
            </p>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mi proyecto Bootstrap</title>

  <!-- ① CSS de Bootstrap — va en el <head> -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  />

  <!-- ② Tus estilos personales — DESPUÉS de Bootstrap para poder sobreescribir -->
  <link rel="stylesheet" href="estilos.css" />
</head>
<body>

  <!-- Tu HTML aquí -->

  <!-- ③ JS de Bootstrap — justo antes de </body> (necesario para toggler, modales...) -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  ></script>
</body>
</html>`}</code></pre>
            <div className="callout warn">
              ⚠️ El orden importa: tu <code>estilos.css</code> debe ir{" "}
              <strong>después</strong> del CSS de Bootstrap, no antes. Si va antes,
              Bootstrap sobreescribirá tus estilos en lugar de al revés.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · Container: la caja centrada con ancho máximo</summary>
          <div className="dd-body">
            <p>
              <code>.container</code> es el punto de partida del grid Bootstrap. Es un
              bloque centrado con ancho máximo que varía según el breakpoint. Piénsalo
              como el <code>max-width + margin: 0 auto</code> que tú harías a mano.
            </p>
            <pre><code>{`<!-- Container con ancho máximo fijo según el viewport -->
<div class="container">...</div>

<!-- Container que siempre ocupa el 100% del ancho -->
<div class="container-fluid">...</div>

<!-- Container que solo es fluido hasta cierto breakpoint -->
<div class="container-md">...</div>   <!-- fluido en xs y sm, fijo desde md -->`}</code></pre>

            {/* Demo visual de container */}
            <h3>Lo que hace .container por dentro</h3>
            <pre><code>{`/* Bootstrap genera algo equivalente a esto: */
.container {
  width: 100%;
  padding-right: 1rem;   /* gutter horizontal */
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 540px;      /* en sm */
  max-width: 720px;      /* en md */
  max-width: 960px;      /* en lg */
  max-width: 1140px;     /* en xl */
  max-width: 1320px;     /* en xxl */
}`}</code></pre>
            <div className="callout">
              💡 Ahora entiendes por qué el contenido nunca se pega a los bordes y
              siempre tiene el mismo margen a ambos lados: es el <code>padding</code>
              del container más el <code>margin: auto</code>.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · Row y Col: el sistema de 12 columnas</summary>
          <div className="dd-body">
            <p>
              Bootstrap divide el espacio horizontal en <strong>12 columnas iguales</strong>.
              Tú decides cuántas ocupa cada elemento con las clases <code>col-*</code>.
              Las columnas siempre van dentro de un <code>row</code>, y los rows dentro
              de un <code>container</code>.
            </p>
            <pre><code>{`<!-- Estructura base: container > row > col -->
<div class="container">
  <div class="row">

    <div class="col-6">Ocupa 6/12 = 50%</div>
    <div class="col-6">Ocupa 6/12 = 50%</div>

  </div>
</div>`}</code></pre>

            {/* Demos visuales del sistema de 12 columnas */}
            <h3>Combinaciones de columnas — siempre suman 12</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { cols: [12], label: "col-12 (100%)" },
                { cols: [6, 6], label: "col-6 + col-6 (50% + 50%)" },
                { cols: [4, 4, 4], label: "col-4 + col-4 + col-4 (33% + 33% + 33%)" },
                { cols: [3, 3, 3, 3], label: "col-3 × 4 (25% cada una)" },
                { cols: [8, 4], label: "col-8 + col-4 (contenido + sidebar)" },
                { cols: [2, 8, 2], label: "col-2 + col-8 + col-2 (márgenes + central)" },
              ].map(({ cols, label }) => (
                <div key={label}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", fontFamily: "monospace", marginBottom: "0.2rem" }}>{label}</div>
                  <div style={{ display: "flex", gap: "4px" }}>
                    {cols.map((c, i) => (
                      <div key={i} style={{ flex: c, background: i % 2 === 0 ? "#6366f1" : "#8b5cf6", color: "white", padding: "0.4rem 0.25rem", borderRadius: "4px", textAlign: "center", fontSize: "0.75rem", fontWeight: 700 }}>
                        col-{c}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="callout tip" style={{ marginTop: "1rem" }}>
              <strong>col sin número = columna automática.</strong> Si escribes{" "}
              <code>{"<div class=\"col\">"}</code>, Bootstrap calcula el ancho automáticamente
              repartiendo el espacio disponible entre todos los <code>col</code> del row.
              Equivale al <code>flex: 1</code> que ya conoces de Flexbox, porque{" "}
              <strong>Bootstrap Grid usa Flexbox por debajo</strong>.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Breakpoints: columnas que cambian según el ancho</summary>
          <div className="dd-body">
            <p>
              La potencia del grid Bootstrap es que puedes decir{" "}
              <strong>"en móvil ocupa 12 columnas, en tablet 6, en desktop 4"</strong>{" "}
              con una sola línea de HTML. Sin media queries en tu CSS.
            </p>
            <pre><code>{`<!-- col-12: 1 columna en móvil -->
<!-- col-md-6: 2 columnas en tablet (≥768px) -->
<!-- col-lg-4: 3 columnas en desktop (≥992px) -->
<div class="col-12 col-md-6 col-lg-4">
  Tarjeta de producto
</div>`}</code></pre>

            <div className="table-wrap" role="region" tabIndex={0} aria-label="Breakpoints de Bootstrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Clase</th>
                    <th>Desde</th>
                    <th>Uso típico</th>
                  </tr>
                </thead>
                <tbody>
                  {BREAKPOINTS.map(b => (
                    <tr key={b.nombre}>
                      <td><strong>{b.nombre}</strong></td>
                      <td><code>{b.clase}</code></td>
                      <td><code>{b.ancho}</code></td>
                      <td>{b.uso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>El patrón más habitual: galería de tarjetas responsive</h3>
            <pre><code>{`<div class="container">
  <div class="row g-4">  <!-- g-4 = gap de 1.5rem entre columnas y filas -->

    <!-- En móvil: 1 col (col-12)
         En tablet: 2 cols (col-md-6)
         En desktop: 3 cols (col-lg-4) -->
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">...</div>
    </div>

    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">...</div>
    </div>

    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">...</div>
    </div>

  </div>
</div>`}</code></pre>

            {/* Demo visual del cambio de layout */}
            <h3>Cómo cambia el layout según el viewport</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "📱 Móvil (col-12) — 1 columna", cols: 1 },
                { label: "📟 Tablet (col-md-6) — 2 columnas", cols: 2 },
                { label: "🖥️ Desktop (col-lg-4) — 3 columnas", cols: 3 },
              ].map(({ label, cols }) => (
                <div key={label}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "0.35rem" }}>{label}</div>
                  <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "0.5rem" }}>
                    {Array.from({ length: 3 }, (_, i) => (
                      <div key={i} style={{ background: "#eef2ff", border: "1px solid #a5b4fc", borderRadius: "8px", padding: "0.75rem", textAlign: "center" }}>
                        <div style={{ fontSize: "1.5rem" }}>{["🍕", "📸", "🎸"][i]}</div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#4f46e5", marginTop: "0.25rem" }}>Tarjeta {i + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Bootstrap Grid vs CSS Grid: cara a cara</summary>
          <div className="dd-body">
            <p>
              Ya sabes CSS Grid. Ahora veamos exactamente qué hace Bootstrap por debajo
              para que no sea una caja negra:
            </p>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr><th>Aspecto</th><th>Bootstrap Grid</th><th>CSS Grid puro</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Motor</td>
                    <td>Flexbox (Bootstrap usa flex internamente)</td>
                    <td>CSS Grid</td>
                  </tr>
                  <tr>
                    <td>Columnas</td>
                    <td>Siempre 12 (convención fija)</td>
                    <td>Las que definas tú</td>
                  </tr>
                  <tr>
                    <td>Responsive</td>
                    <td>Clases en el HTML: <code>col-md-6</code></td>
                    <td>Media queries en el CSS</td>
                  </tr>
                  <tr>
                    <td>Curva de aprendizaje</td>
                    <td>Baja (memorizar clases)</td>
                    <td>Media (entender el modelo)</td>
                  </tr>
                  <tr>
                    <td>Control</td>
                    <td>Limitado al sistema de 12</td>
                    <td>Total: fr, minmax, areas…</td>
                  </tr>
                  <tr>
                    <td>Peso extra</td>
                    <td>Sí (~22KB el CSS del grid)</td>
                    <td>Cero bytes extra</td>
                  </tr>
                  <tr>
                    <td>Mejor para</td>
                    <td>Prototipos rápidos, equipos grandes</td>
                    <td>Diseños complejos, control total</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Equivalencia directa de código</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#6366f1", marginBottom: "0.4rem" }}>Bootstrap Grid</div>
                <pre style={{ margin: 0 }}><code>{`<div class="container">
  <div class="row g-3">
    <div class="col-12 col-md-4">
      A
    </div>
    <div class="col-12 col-md-4">
      B
    </div>
    <div class="col-12 col-md-4">
      C
    </div>
  </div>
</div>`}</code></pre>
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0891b2", marginBottom: "0.4rem" }}>Equivalente en CSS Grid puro</div>
                <pre style={{ margin: 0 }}><code>{`.grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fill,
    minmax(240px, 1fr));
  gap: 1rem;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;
}`}</code></pre>
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 — CÓDIGO COPIABLE ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Tu HTML copiable: practica ya</summary>
          <div className="dd-body">
            <p>
              Copia este archivo, ábrelo en el navegador y experimenta cambiando las
              clases <code>col-*</code>. Bootstrap se carga desde el CDN — no necesitas
              instalar nada.
            </p>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E11 · Bootstrap Grid</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
  <style>
    /* Tus estilos personales van aquí, después de Bootstrap */
    .demo-caja {
      padding: 1rem;
      background: #eef2ff;
      border: 2px solid #a5b4fc;
      border-radius: 8px;
      text-align: center;
      font-weight: 700;
      color: #4f46e5;
    }
    .seccion { padding: 2rem 0; border-bottom: 1px solid #e2e8f0; }
    .seccion h2 { margin-bottom: 1.5rem; font-size: 1.1rem; color: #6366f1; }
  </style>
</head>
<body class="bg-light">

  <div class="container py-4">
    <h1 class="mb-4">E11 · Bootstrap Grid — Practica</h1>

    <!-- Sección 1: columnas iguales -->
    <div class="seccion">
      <h2>1. Tres columnas iguales (col-md-4)</h2>
      <div class="row g-3">
        <div class="col-12 col-md-4">
          <div class="demo-caja">Columna A<br/><small>col-12 col-md-4</small></div>
        </div>
        <div class="col-12 col-md-4">
          <div class="demo-caja">Columna B<br/><small>col-12 col-md-4</small></div>
        </div>
        <div class="col-12 col-md-4">
          <div class="demo-caja">Columna C<br/><small>col-12 col-md-4</small></div>
        </div>
      </div>
    </div>

    <!-- Sección 2: contenido + sidebar -->
    <div class="seccion">
      <h2>2. Contenido principal + sidebar (col-md-8 / col-md-4)</h2>
      <div class="row g-3">
        <div class="col-12 col-md-8">
          <div class="demo-caja" style="background:#e0f2fe; border-color:#7dd3fc; color:#0369a1;">
            Contenido principal<br/><small>col-12 col-md-8</small>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="demo-caja" style="background:#fce7f3; border-color:#f9a8d4; color:#9d174d;">
            Sidebar<br/><small>col-12 col-md-4</small>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección 3: galería 1-2-3 columnas -->
    <div class="seccion">
      <h2>3. Galería responsive: móvil 1 col → tablet 2 → desktop 3</h2>
      <div class="row g-3">
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="demo-caja">Tarjeta 1</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="demo-caja">Tarjeta 2</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="demo-caja">Tarjeta 3</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="demo-caja">Tarjeta 4</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="demo-caja">Tarjeta 5</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="demo-caja">Tarjeta 6</div>
        </div>
      </div>
    </div>

    <!-- Sección 4: auto-columnas -->
    <div class="seccion">
      <h2>4. Col sin número (auto) — se reparten el espacio</h2>
      <div class="row g-3">
        <div class="col"><div class="demo-caja">col (auto)</div></div>
        <div class="col"><div class="demo-caja">col (auto)</div></div>
        <div class="col"><div class="demo-caja">col (auto)</div></div>
        <div class="col"><div class="demo-caja">col (auto)</div></div>
      </div>
    </div>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}</code></pre>
            <div className="callout tip">
              🔬 <strong>Experimentos para hacer:</strong> cambia <code>col-12 col-md-4</code>{" "}
              por <code>col-6 col-md-3</code> y observa. Cambia <code>g-3</code> (gap) a{" "}
              <code>g-0</code> o <code>g-5</code>. Elimina el <code>container</code> y{" "}
              pon <code>container-fluid</code>. Reduce la ventana del navegador y mira
              cómo cambia el layout.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 8 ════════════ */}
      <section className="doc-section" id="paso-8">
        <details className="dd" open>
          <summary>Paso 8 · Reto extra</summary>
          <div className="dd-body">
            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Réplica del layout del E10</strong> (header + sidebar + main + footer) usando solo clases Bootstrap: <code>container</code>, <code>row</code>, <code>col-md-3</code>, <code>col-md-9</code>.</li>
                <li><strong>Offset</strong>: centra un <code>col-md-6</code> usando <code>offset-md-3</code> para añadir 3 columnas vacías a la izquierda.</li>
                <li><strong>Orden</strong>: usa <code>order-md-1</code> y <code>order-md-2</code> para que en móvil el contenido aparezca antes que el sidebar, pero en desktop se invierta.</li>
                <li><strong>Compara el peso</strong>: abre DevTools → Network y mira cuántos KB carga Bootstrap. Reflexiona: ¿merece la pena para este ejercicio concreto?</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e10-grid-layout" className="btn">← E10 Grid Layout</Link>
          <Link to="/ejercicios/e12-bootstrap-navbar" className="btn btn-primary">Siguiente: E12 Navbar →</Link>
        </div>
      </section>
    </main>
  );
}
