import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E19 · Tailwind + Grid: página responsive
// Objetivo: recrear la galería del E09 y el layout
// del E10 con clases Tailwind Grid ‑ comparar flujos
// de trabajo CSS puro vs utility-first.
// =====================================================

const FOTOS = [
  { emoji: "🏔️", titulo: "Montañas", color: "bg-blue-100", texto: "text-blue-800" },
  { emoji: "🌊", titulo: "Océano", color: "bg-sky-100", texto: "text-sky-800" },
  { emoji: "🌲", titulo: "Bosque", color: "bg-green-100", texto: "text-green-800" },
  { emoji: "🌅", titulo: "Atardecer", color: "bg-yellow-100", texto: "text-yellow-800" },
  { emoji: "🏙️", titulo: "Ciudad", color: "bg-purple-100", texto: "text-purple-800" },
  { emoji: "🌸", titulo: "Flores", color: "bg-pink-100", texto: "text-pink-800" },
  { emoji: "🦋", titulo: "Mariposa", color: "bg-indigo-100", texto: "text-indigo-800" },
  { emoji: "🌵", titulo: "Desierto", color: "bg-orange-100", texto: "text-orange-800" },
  { emoji: "🐋", titulo: "Ballena", color: "bg-cyan-100", texto: "text-cyan-800" },
];

const GRID_CLASES = [
  { clase: "grid", css: "display: grid" },
  { clase: "grid-cols-1", css: "grid-template-columns: repeat(1, 1fr)" },
  { clase: "grid-cols-2", css: "grid-template-columns: repeat(2, 1fr)" },
  { clase: "grid-cols-3", css: "grid-template-columns: repeat(3, 1fr)" },
  { clase: "grid-cols-4", css: "grid-template-columns: repeat(4, 1fr)" },
  { clase: "col-span-2", css: "grid-column: span 2" },
  { clase: "col-span-full", css: "grid-column: 1 / -1" },
  { clase: "row-span-2", css: "grid-row: span 2" },
  { clase: "gap-4", css: "gap: 1rem" },
  { clase: "gap-x-6 gap-y-4", css: "column-gap: 1.5rem; row-gap: 1rem" },
  { clase: "sm:grid-cols-2", css: "≥640px → grid-cols-2" },
  { clase: "lg:grid-cols-4", css: "≥1024px → grid-cols-4" },
];

export default function E19_Tailwind_Grid() {
  useEffect(() => {
    document.title = "E19 · Tailwind + Grid: página responsive — Ejercicios CSS";
  }, []);

  const [tabActiva, setTabActiva] = useState("galeria");

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E19 · Nivel avanzado · Tailwind CSS + Grid</p>
        <h1>Tailwind + Grid: página responsive</h1>
        <p className="doc-lead">
          En este ejercicio combinas los conocimientos de CSS Grid (E09, E10, E16) con
          el sistema de clases de Tailwind. Recrearás la galería responsive y el layout
          de página completa <strong>sin escribir una sola línea de CSS propio</strong>.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> clases <code>grid-cols-*</code>,{" "}
          <code>col-span-*</code>, <code>row-span-*</code>, prefijos responsive{" "}
          <code>sm:</code> <code>md:</code> <code>lg:</code> aplicados a Grid y cómo
          Tailwind simplifica layouts complejos.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · Grid en Tailwind: las clases fundamentales</a></li>
            <li><a href="#paso-2">Paso 2 · Galería responsive (equivalente al E09)</a></li>
            <li><a href="#paso-3">Paso 3 · Layout de página completa (equivalente al E10)</a></li>
            <li><a href="#paso-4">Paso 4 · col-span y row-span: elementos que ocupan más celdas</a></li>
            <li><a href="#paso-5">Paso 5 · Demo visual comparativa</a></li>
            <li><a href="#paso-6">Paso 6 · Código completo HTML con Tailwind CDN</a></li>
            <li><a href="#paso-7">Paso 7 · Retos extra y reflexión final</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · Grid en Tailwind: las clases fundamentales</summary>
          <div className="dd-body">
            <p>
              Tailwind tiene clases directas para cada aspecto de CSS Grid. No necesitas
              recordar la sintaxis exacta: son descriptivas y consistentes.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              {GRID_CLASES.map((c) => (
                <div
                  key={c.clase}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.75rem",
                    padding: "0.5rem 0.75rem",
                    background: "var(--surface-primary)",
                    borderRadius: "6px",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <code
                    style={{
                      color: "var(--interactive-primary)",
                      fontSize: "0.78rem",
                      flexShrink: 0,
                    }}
                  >
                    {c.clase}
                  </code>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>
                    → {c.css}
                  </span>
                </div>
              ))}
            </div>

            <h3>La regla de los valores implícitos</h3>
            <p>
              Por defecto Tailwind usa <code>1fr</code> para cada columna. Si necesitas
              columnas de tamaño diferente (como <code>2fr 1fr</code>), extiende
              la config de Tailwind:
            </p>
            <pre><code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        // Crea la clase grid-cols-layout
        'layout': '2fr 1fr',
        // Crea la clase grid-cols-sidebar
        'sidebar': '1fr 300px',
      },
    },
  },
}

// Uso en HTML
<div class="grid grid-cols-layout gap-6">...</div>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · Galería responsive (equivalente al E09 con Tailwind)</summary>
          <div className="dd-body">
            <p>
              En el E09 usabas <code>repeat(auto-fill, minmax(180px, 1fr))</code>.
              Con Tailwind lo consigues combinando breakpoints:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
                margin: "1rem 0",
              }}
            >
              <div>
                <h4 style={{ marginTop: 0 }}>Con CSS puro (E09)</h4>
                <pre style={{ fontSize: "0.75rem" }}><code>{`.galeria {
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}`}</code></pre>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Una sola regla + minmax automático
                </p>
              </div>
              <div>
                <h4 style={{ marginTop: 0 }}>Con Tailwind</h4>
                <pre style={{ fontSize: "0.75rem" }}><code>{`<div class="
  grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-4
">
  ...
</div>`}</code></pre>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Breakpoints explícitos, más control
                </p>
              </div>
            </div>

            {/* Demo visual de la galería */}
            <h3>Vista previa de la galería</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "0.75rem",
                marginTop: "0.5rem",
              }}
            >
              {FOTOS.map((foto) => (
                <article
                  key={foto.titulo}
                  style={{
                    background: "var(--surface-primary)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "12px",
                    padding: "1rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>{foto.emoji}</span>
                  <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: 600 }}>{foto.titulo}</p>
                </article>
              ))}
            </div>

            <pre style={{ marginTop: "1rem" }}><code>{`<!-- Galería con Tailwind -->
<div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

  <article class="bg-blue-100 rounded-xl p-4 text-center flex flex-col items-center gap-2">
    <span class="text-4xl">🏔️</span>
    <p class="font-semibold text-blue-800 text-sm">Montañas</p>
    <p class="text-blue-600 text-xs">Paisajes de altura</p>
    <button class="mt-auto text-xs bg-blue-600 text-white px-3 py-1.5
                   rounded-lg hover:bg-blue-700 transition-colors w-full">
      Ver galería
    </button>
  </article>

  <!-- Repite para cada foto -->
</div>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · Layout de página completa (equivalente al E10)</summary>
          <div className="dd-body">
            <p>
              El E10 usaba <code>grid-template-areas</code> con fracciones. En Tailwind
              recurrimos a la extensión de la config o a un enfoque con{" "}
              <code>col-span</code>:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
                margin: "1rem 0",
              }}
            >
              <div>
                <h4 style={{ marginTop: 0 }}>Con CSS puro (E10)</h4>
                <pre style={{ fontSize: "0.75rem" }}><code>{`.layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main    aside"
    "footer footer footer";
  min-height: 100vh;
  gap: 1rem;
}`}</code></pre>
              </div>
              <div>
                <h4 style={{ marginTop: 0 }}>Con Tailwind (col-span)</h4>
                <pre style={{ fontSize: "0.75rem" }}><code>{`<div class="grid grid-cols-5 grid-rows-[auto_1fr_auto]
            gap-4 min-h-screen">
  <!-- Header: 5 columnas -->
  <header class="col-span-5 ...">Header</header>

  <!-- Sidebar: 1 col -->
  <aside class="col-span-1 ...">Sidebar</aside>

  <!-- Main: 3 cols -->
  <main class="col-span-3 ...">Main</main>

  <!-- Aside: 1 col -->
  <aside class="col-span-1 ...">Aside</aside>

  <!-- Footer: 5 cols -->
  <footer class="col-span-5 ...">Footer</footer>
</div>`}</code></pre>
              </div>
            </div>

            {/* Demo visual del layout */}
            <h3>Vista previa del layout</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 3fr 1fr",
                gridTemplateRows: "50px 1fr 40px",
                gap: "4px",
                background: "var(--border-subtle)",
                padding: "4px",
                borderRadius: "8px",
                height: "200px",
              }}
            >
              {[
                { label: "Header", col: "1 / 4", row: "auto", bg: "#6366f1" },
                { label: "Sidebar", col: "1 / 2", row: "auto", bg: "#8b5cf6" },
                { label: "Main", col: "2 / 3", row: "auto", bg: "#a78bfa" },
                { label: "Aside", col: "3 / 4", row: "auto", bg: "#c4b5fd" },
                { label: "Footer", col: "1 / 4", row: "auto", bg: "#64748b" },
              ].map((z) => (
                <div
                  key={z.label}
                  style={{
                    gridColumn: z.col,
                    background: z.bg,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    fontSize: "0.75rem",
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

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · col-span y row-span: elementos que ocupan más celdas</summary>
          <div className="dd-body">
            <p>
              <code>col-span-{"{n}"}</code> hace que un elemento ocupe <em>n</em> columnas.{" "}
              <code>row-span-{"{n}"}</code> hace lo mismo con las filas. Equivale a{" "}
              <code>grid-column: span n</code> en CSS puro.
            </p>

            <pre><code>{`/* CSS puro */
.portada { grid-column: span 2; grid-row: span 2; }

<!-- Tailwind equivalente -->
<article class="col-span-2 row-span-2 ...">Portada grande</article>

<!-- Galería tipo Pinterest con celdas variables -->
<div class="grid grid-cols-3 gap-4">
  <article class="col-span-2 row-span-2 ...">Grande</article>
  <article class="col-span-1 ...">Pequeño</article>
  <article class="col-span-1 ...">Pequeño</article>
  <article class="col-span-1 ...">Pequeño</article>
  <article class="col-span-2 ...">Ancho</article>
  <article class="col-span-1 ...">Normal</article>
</div>`}</code></pre>

            {/* Demo del masonry-like con col-span */}
            <h3>Demo: grid editorial con col-span</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridAutoRows: "80px",
                gap: "6px",
                marginTop: "0.5rem",
              }}
            >
              {[
                { cols: "1 / 3", rows: "1 / 3", label: "Portada (col-span-2 row-span-2)", bg: "#6366f1" },
                { cols: "3", rows: "1", label: "Art 1", bg: "#8b5cf6" },
                { cols: "4", rows: "1", label: "Art 2", bg: "#a78bfa" },
                { cols: "3 / 5", rows: "2", label: "Art 3 (col-span-2)", bg: "#7c3aed" },
                { cols: "1", rows: "3", label: "Art 4", bg: "#06b6d4" },
                { cols: "2", rows: "3", label: "Art 5", bg: "#0891b2" },
                { cols: "3 / 5", rows: "3", label: "Art 6 (col-span-2)", bg: "#0e7490" },
              ].map((z) => (
                <div
                  key={z.label}
                  style={{
                    gridColumn: z.cols,
                    gridRow: z.rows,
                    background: z.bg,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "monospace",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    borderRadius: "6px",
                    padding: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  {z.label}
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Demo visual comparativa: CSS puro vs Tailwind</summary>
          <div className="dd-body">
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
              {["galeria", "layout"].map((t) => (
                <button
                  key={t}
                  className={`btn ${tabActiva === t ? "btn-primary" : ""}`}
                  onClick={() => setTabActiva(t)}
                >
                  {t === "galeria" ? "Galería (E09)" : "Layout (E10)"}
                </button>
              ))}
            </div>

            {tabActiva === "galeria" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <h4 style={{ marginTop: 0 }}>CSS puro (E09)</h4>
                  <pre style={{ fontSize: "0.8rem" }}><code>{`.galeria {
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}

.tarjeta {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 4px rgba(0,0,0,.08);
  transition: transform 200ms;
}

.tarjeta:hover {
  transform: translateY(-4px);
}`}</code></pre>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                    ✅ Más legible como HTML · CSS reutilizable<br />
                    ⚠️ Hay que cambiar de archivo
                  </p>
                </div>
                <div>
                  <h4 style={{ marginTop: 0 }}>Tailwind CSS</h4>
                  <pre style={{ fontSize: "0.8rem" }}><code>{`<div class="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  gap-4
">
  <article class="
    bg-white rounded-xl p-6
    shadow hover:-translate-y-1
    transition-transform duration-200
  ">
    ...
  </article>
</div>`}</code></pre>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                    ✅ Todo en el HTML · No cambias de archivo<br />
                    ⚠️ HTML más largo · Nombres de clase específicos
                  </p>
                </div>
              </div>
            )}

            {tabActiva === "layout" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <h4 style={{ marginTop: 0 }}>CSS puro (E10)</h4>
                  <pre style={{ fontSize: "0.8rem" }}><code>{`.pagina {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main   aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 1rem;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }`}</code></pre>
                </div>
                <div>
                  <h4 style={{ marginTop: 0 }}>Tailwind CSS</h4>
                  <pre style={{ fontSize: "0.8rem" }}><code>{`<div class="
  grid
  grid-cols-[200px_1fr_200px]
  grid-rows-[auto_1fr_auto]
  min-h-screen gap-4 p-4
">
  <header class="col-span-3 ...">
    Header
  </header>
  <aside class="col-span-1 ...">
    Sidebar
  </aside>
  <main class="col-span-1 ...">
    Main
  </main>
  <aside class="col-span-1 ...">
    Aside
  </aside>
  <footer class="col-span-3 ...">
    Footer
  </footer>
</div>`}</code></pre>
                </div>
              </div>
            )}
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Código completo HTML con Tailwind CDN</summary>
          <div className="dd-body">
            <p>
              Copia este archivo HTML completo. Incluye la galería responsive, el layout
              de página y una sección de features usando CSS Grid con Tailwind:
            </p>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E19 · Tailwind + Grid</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-slate-100 font-sans text-slate-800">

  <!-- ── LAYOUT COMPLETO DE PÁGINA ─────────────────── -->
  <div class="grid grid-cols-1 lg:grid-cols-[240px_1fr] min-h-screen">

    <!-- Sidebar (oculto en móvil) -->
    <aside class="hidden lg:block bg-slate-900 text-slate-300 p-6">
      <h2 class="text-white font-bold text-lg mb-6">Navegación</h2>
      <nav class="flex flex-col gap-2">
        <a href="#galeria"
           class="px-3 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-colors text-sm">
          📸 Galería
        </a>
        <a href="#features"
           class="px-3 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-colors text-sm">
          ⚡ Features
        </a>
        <a href="#editorial"
           class="px-3 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-colors text-sm">
          📰 Editorial
        </a>
      </nav>
    </aside>

    <!-- Contenido principal -->
    <div class="flex flex-col">

      <!-- Header sticky -->
      <header class="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="font-bold text-indigo-600 text-lg">E19 · Tailwind Grid</h1>
          <div class="flex gap-3">
            <button class="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg
                           hover:bg-indigo-700 transition-colors">
              Acción
            </button>
          </div>
        </div>
      </header>

      <main class="p-4 sm:p-6 lg:p-8 flex flex-col gap-12">

        <!-- ── SECCIÓN 1: GALERÍA RESPONSIVE ──────── -->
        <section id="galeria">
          <h2 class="text-2xl font-bold mb-2">📸 Galería responsive</h2>
          <p class="text-slate-500 mb-6 text-sm">
            <code class="bg-slate-100 px-1 rounded">grid-cols-1 sm:grid-cols-2 lg:grid-cols-3</code>
            — sin una línea de CSS propio.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <article class="bg-blue-50 rounded-xl p-6 text-center flex flex-col items-center gap-3
                            hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              <span class="text-5xl">🏔️</span>
              <h3 class="font-bold text-blue-800">Montañas</h3>
              <p class="text-blue-600 text-sm">Paisajes de altura nevados</p>
              <button class="mt-auto text-xs font-semibold bg-blue-600 text-white
                             px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                Ver galería
              </button>
            </article>

            <article class="bg-sky-50 rounded-xl p-6 text-center flex flex-col items-center gap-3
                            hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              <span class="text-5xl">🌊</span>
              <h3 class="font-bold text-sky-800">Océano</h3>
              <p class="text-sky-600 text-sm">Profundidades marinas</p>
              <button class="mt-auto text-xs font-semibold bg-sky-600 text-white
                             px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors w-full">
                Ver galería
              </button>
            </article>

            <article class="bg-green-50 rounded-xl p-6 text-center flex flex-col items-center gap-3
                            hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              <span class="text-5xl">🌲</span>
              <h3 class="font-bold text-green-800">Bosque</h3>
              <p class="text-green-600 text-sm">Naturaleza exuberante</p>
              <button class="mt-auto text-xs font-semibold bg-green-600 text-white
                             px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-full">
                Ver galería
              </button>
            </article>

            <article class="bg-yellow-50 rounded-xl p-6 text-center flex flex-col items-center gap-3
                            hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              <span class="text-5xl">🌅</span>
              <h3 class="font-bold text-yellow-800">Atardecer</h3>
              <p class="text-yellow-600 text-sm">Cielos de colores cálidos</p>
              <button class="mt-auto text-xs font-semibold bg-yellow-500 text-white
                             px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors w-full">
                Ver galería
              </button>
            </article>

            <article class="bg-purple-50 rounded-xl p-6 text-center flex flex-col items-center gap-3
                            hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              <span class="text-5xl">🏙️</span>
              <h3 class="font-bold text-purple-800">Ciudad</h3>
              <p class="text-purple-600 text-sm">Arquitectura urbana</p>
              <button class="mt-auto text-xs font-semibold bg-purple-600 text-white
                             px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full">
                Ver galería
              </button>
            </article>

            <article class="bg-pink-50 rounded-xl p-6 text-center flex flex-col items-center gap-3
                            hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              <span class="text-5xl">🌸</span>
              <h3 class="font-bold text-pink-800">Flores</h3>
              <p class="text-pink-600 text-sm">Jardines en primavera</p>
              <button class="mt-auto text-xs font-semibold bg-pink-600 text-white
                             px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors w-full">
                Ver galería
              </button>
            </article>

          </div>
        </section>

        <!-- ── SECCIÓN 2: FEATURES EN GRID ─────────── -->
        <section id="features">
          <h2 class="text-2xl font-bold mb-2">⚡ Grid de features</h2>
          <p class="text-slate-500 mb-6 text-sm">
            <code class="bg-slate-100 px-1 rounded">grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code>
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🚀", titulo: "Rápido", desc: "Bundle de producción mínimo. Solo las clases que usas." },
              { emoji: "🎨", titulo: "Flexible", desc: "Personaliza cada aspecto del diseño sin limitaciones." },
              { emoji: "📱", titulo: "Responsive", desc: "Breakpoints integrados. sm: md: lg: xl: 2xl:." },
              { emoji: "♿", titulo: "Accesible", desc: "Clases para focus-visible, screen-reader-only y más." },
              { emoji: "🌙", titulo: "Dark mode", desc: "dark: prefix. Automático o controlado con clase." },
              { emoji: "⚡", titulo: "JIT mode", desc: "Just-In-Time: genera CSS al vuelo. Sin purge manual." },
            ].map(f => \`
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-100
                        hover:shadow-md transition-shadow">
              <span class="text-3xl mb-3 block">\${f.emoji}</span>
              <h3 class="font-bold text-lg mb-2">\${f.titulo}</h3>
              <p class="text-slate-500 text-sm">\${f.desc}</p>
            </div>
            \`).join("")}
          </div>
        </section>

        <!-- ── SECCIÓN 3: EDITORIAL CON COL-SPAN ──── -->
        <section id="editorial">
          <h2 class="text-2xl font-bold mb-2">📰 Layout editorial</h2>
          <p class="text-slate-500 mb-6 text-sm">
            <code class="bg-slate-100 px-1 rounded">col-span-2</code>,
            <code class="bg-slate-100 px-1 rounded">row-span-2</code>
          </p>
          <div class="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] gap-4">
            <article class="col-span-2 row-span-2 bg-indigo-600 rounded-xl p-6 text-white
                            flex flex-col justify-end">
              <span class="text-xs font-semibold uppercase tracking-widest opacity-70 mb-2">
                Especial
              </span>
              <h3 class="text-xl font-bold leading-tight">
                CSS Grid Areas: el futuro de los layouts
              </h3>
            </article>
            <article class="bg-purple-100 rounded-xl p-4 flex flex-col justify-end">
              <h3 class="font-bold text-purple-900 text-sm">Flexbox en 2026</h3>
            </article>
            <article class="bg-sky-100 rounded-xl p-4 flex flex-col justify-end">
              <h3 class="font-bold text-sky-900 text-sm">Container Queries</h3>
            </article>
            <article class="col-span-2 bg-slate-200 rounded-xl p-4 flex flex-col justify-end">
              <h3 class="font-bold text-slate-700 text-sm">Tailwind v4: lo que cambia</h3>
            </article>
          </div>
        </section>

      </main>

      <!-- Footer -->
      <footer class="bg-slate-900 text-slate-400 text-center py-6 text-sm mt-auto">
        E19 · Tailwind + Grid · CSS Manual 2026
      </footer>
    </div>
  </div>

</body>
</html>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd">
          <summary>Paso 7 · Retos extra y reflexión final</summary>
          <div className="dd-body">
            <ol>
              <li>
                <strong>Mismo layout, mismo resultado:</strong> toma el código del E10
                con CSS Grid puro y recréalo exactamente igual con Tailwind. Cuenta las
                líneas de código de cada versión.
              </li>
              <li>
                <strong>Dark mode:</strong> añade la variante <code>dark:</code> a los
                colores de fondo y texto de la galería. Escribe un botón que alterne
                la clase <code>dark</code> en el <code>html</code> con JavaScript.
              </li>
              <li>
                <strong>Masonry layout:</strong> investiga cómo crear un efecto masonry
                (columnas de Pinterest) con <code>grid-flow: dense</code> y{" "}
                <code>row-span</code> variables.
              </li>
              <li>
                <strong>Tailwind + Vite + React:</strong> instala Tailwind en este proyecto
                de React con <code>npm install -D tailwindcss</code> y recrea el E19
                como componente React con clases Tailwind.
              </li>
              <li>
                <strong>Comparativa final:</strong> ¿en qué proyectos preferirías usar
                Tailwind? ¿En cuáles CSS puro? ¿En cuáles Bootstrap? Escribe tus conclusiones.
              </li>
            </ol>

            <div className="callout tip" style={{ marginTop: "1.5rem" }}>
              🏆 <strong>¡Ya dominas CSS Grid!</strong> Has aprendido la misma técnica
              desde tres perspectivas: CSS puro (E09–E10), Grid Areas (E16) y Tailwind (E19).
              Ahora el <strong>E20</strong> — el proyecto final — donde todo converge.
            </div>
          </div>
        </details>
      </section>

      <div className="doc-next">
        <Link to="/ejercicios/e18-tailwind-hero" className="btn">← E18 Tailwind Hero</Link>
        <Link to="/ejercicios/e20-portfolio-final" className="btn btn-primary">E20 Proyecto Final →</Link>
      </div>
    </main>
  );
}
