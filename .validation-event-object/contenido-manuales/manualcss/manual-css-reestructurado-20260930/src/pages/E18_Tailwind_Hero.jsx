import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E18 · Tailwind: hero utility-first
// Objetivo: primer contacto real con Tailwind CSS.
// Recrear el hero del E06 usando clases de utilidad
// y entender las diferencias filosóficas con CSS puro.
// =====================================================

const COMPARATIVA = [
  {
    concepto: "Filosofía",
    css: "CSS semántico: clases con significado (.btn-primary, .card)",
    tailwind: "Utility-first: clases atómicas de una sola propiedad (flex, p-4, bg-blue-500)",
  },
  {
    concepto: "Dónde vive el diseño",
    css: "En el archivo .css, separado del HTML",
    tailwind: "Directamente en el HTML/JSX, sin archivo CSS aparte",
  },
  {
    concepto: "Bundle size",
    css: "Crece con cada componente nuevo",
    tailwind: "Solo incluye las clases usadas (PurgeCSS automático)",
  },
  {
    concepto: "Responsive",
    css: "@media queries en CSS separado",
    tailwind: "Prefijos: sm:, md:, lg:, xl: directamente en clase",
  },
  {
    concepto: "Curva de aprendizaje",
    css: "Conoces CSS plano → fácil inicio",
    tailwind: "Necesitas aprender el sistema de nombres de Tailwind",
  },
  {
    concepto: "Personalización",
    css: "Ilimitada con custom properties",
    tailwind: "tailwind.config.js: extiende el tema completo",
  },
];

const CLASES_CLAVE = [
  { clase: "flex", propiedad: "display: flex" },
  { clase: "flex-col", propiedad: "flex-direction: column" },
  { clase: "items-center", propiedad: "align-items: center" },
  { clase: "justify-center", propiedad: "justify-content: center" },
  { clase: "gap-4", propiedad: "gap: 1rem (4 × 0.25rem)" },
  { clase: "p-6", propiedad: "padding: 1.5rem" },
  { clase: "px-4 py-2", propiedad: "padding-horizontal: 1rem; padding-vertical: 0.5rem" },
  { clase: "text-3xl", propiedad: "font-size: 1.875rem" },
  { clase: "font-bold", propiedad: "font-weight: 700" },
  { clase: "text-white", propiedad: "color: white" },
  { clase: "bg-indigo-600", propiedad: "background-color: #4f46e5" },
  { clase: "rounded-xl", propiedad: "border-radius: 0.75rem" },
  { clase: "shadow-lg", propiedad: "box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)..." },
  { clase: "hover:bg-indigo-700", propiedad: "hover → background-color: #4338ca" },
  { clase: "transition", propiedad: "transition-property: all; duration: 150ms" },
  { clase: "md:flex-row", propiedad: "≥768px → flex-direction: row" },
];

export default function E18_Tailwind_Hero() {
  useEffect(() => {
    document.title = "E18 · Tailwind: hero utility-first — Ejercicios CSS";
  }, []);

  const [vistaActiva, setVistaActiva] = useState("tailwind");

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E18 · Nivel avanzado · Tailwind CSS</p>
        <h1>Tailwind: hero utility-first</h1>
        <p className="doc-lead">
          Tailwind CSS es el framework más popular de 2024–2025, pero tiene una filosofía
          radicalmente diferente a Bootstrap o CSS puro. En este ejercicio crearás un{" "}
          <strong>hero section completo con Tailwind</strong>, comprenderás el sistema de
          clases utilitarias y reflexionarás sobre cuándo tiene sentido este enfoque.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> filosofía utility-first, sistema de espaciado
          de Tailwind (<code>p-4</code>, <code>gap-6</code>), colores y tipografía, prefijos
          responsive (<code>md:</code>, <code>lg:</code>) y cómo instalar Tailwind en un
          proyecto real.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · ¿Qué es utility-first?</a></li>
            <li><a href="#paso-2">Paso 2 · El sistema de espaciado de Tailwind</a></li>
            <li><a href="#paso-3">Paso 3 · Clases clave para el hero</a></li>
            <li><a href="#paso-4">Paso 4 · CSS puro vs Tailwind: comparación directa</a></li>
            <li><a href="#paso-5">Paso 5 · Instalación de Tailwind (via CDN/Vite)</a></li>
            <li><a href="#paso-6">Paso 6 · Código del hero completo</a></li>
            <li><a href="#paso-7">Paso 7 · Responsive con prefijos sm: md: lg:</a></li>
            <li><a href="#paso-8">Paso 8 · Retos extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · ¿Qué es utility-first?</summary>
          <div className="dd-body">
            <p>
              En CSS clásico nombras <em>componentes</em> (<code>.card</code>,{" "}
              <code>.btn-primary</code>) y dentro defines sus propiedades CSS.
              En Tailwind cada clase representa <strong>una sola propiedad CSS</strong>:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1rem",
                margin: "1rem 0",
              }}
            >
              <div>
                <h4 style={{ marginTop: 0 }}>CSS puro / BEM</h4>
                <pre><code>{`<!-- HTML: clase semántica -->
<div class="card">...</div>

/* CSS: toda la lógica aquí */
.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0,0,0,.07);
}`}</code></pre>
              </div>
              <div>
                <h4 style={{ marginTop: 0 }}>Tailwind utility-first</h4>
                <pre><code>{`<!-- HTML: toda la lógica aquí -->
<div class="flex flex-col p-6 bg-white
            rounded-xl shadow-md">
  ...
</div>

/* CSS: prácticamente vacío */
/* Tailwind genera lo que necesitas */`}</code></pre>
              </div>
            </div>

            <h3>Debate: ¿no ensucia el HTML?</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  titulo: "Argumento en contra",
                  color: "#ef4444",
                  puntos: [
                    "El HTML tiene demasiadas clases largas",
                    "Rompe la separación de responsabilidades",
                    "Dificulta la lectura del marcado",
                  ],
                },
                {
                  titulo: "Argumento a favor",
                  color: "#22c55e",
                  puntos: [
                    "No hay que cambiar de archivo para estilar",
                    "No hay que inventar nombres de clase",
                    "El diseño es visible directamente en el HTML",
                    "Bundle CSS mínimo en producción",
                  ],
                },
              ].map((arg) => (
                <div
                  key={arg.titulo}
                  className="card"
                  style={{ padding: "1rem", borderTop: `3px solid ${arg.color}` }}
                >
                  <h4 style={{ marginTop: 0, color: arg.color }}>{arg.titulo}</h4>
                  <ul style={{ margin: 0, padding: "0 0 0 1.25rem" }}>
                    {arg.puntos.map((p) => (
                      <li key={p} style={{ fontSize: "0.85rem", marginBottom: "0.25rem" }}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · El sistema de espaciado de Tailwind</summary>
          <div className="dd-body">
            <p>
              Tailwind usa una <strong>escala numérica</strong> donde cada unidad
              equivale a <code>0.25rem</code> (4px por defecto). Es consistente
              y predecible:
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((n) => (
                <div
                  key={n}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <div
                    style={{
                      width: `${n * 4}px`,
                      height: "1.5rem",
                      background: "#6366f1",
                      borderRadius: "2px",
                      maxWidth: "96px",
                    }}
                  />
                  <code style={{ fontSize: "0.65rem" }}>p-{n}</code>
                  <span style={{ fontSize: "0.6rem", color: "var(--text-tertiary)" }}>
                    {n * 0.25}rem
                  </span>
                </div>
              ))}
            </div>

            <div className="table-wrap" role="region" tabIndex={0} style={{ marginTop: "1rem" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Clases de espaciado</th>
                    <th>Propiedad CSS</th>
                    <th>Ejemplo de uso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>p-4</code></td><td>padding: 1rem</td><td>Padding uniforme</td></tr>
                  <tr><td><code>px-6 py-3</code></td><td>padding horizontal/vertical</td><td>Botones</td></tr>
                  <tr><td><code>m-4</code></td><td>margin: 1rem</td><td>Margen exterior</td></tr>
                  <tr><td><code>mx-auto</code></td><td>margin-inline: auto</td><td>Centrar horizontalmente</td></tr>
                  <tr><td><code>gap-6</code></td><td>gap: 1.5rem</td><td>En flex/grid</td></tr>
                  <tr><td><code>space-y-4</code></td><td>margin-top en hijos</td><td>Espaciar listas</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · Clases clave para el hero</summary>
          <div className="dd-body">
            <p>Estas son las clases Tailwind que usarás en el hero. Apréndetelas:</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "0.5rem",
              }}
            >
              {CLASES_CLAVE.map((c) => (
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
                      fontSize: "0.8rem",
                      flexShrink: 0,
                    }}
                  >
                    {c.clase}
                  </code>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                    {c.propiedad}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · CSS puro vs Tailwind: comparación directa</summary>
          <div className="dd-body">
            <p>Selecciona la vista para comparar el mismo botón entre los dos enfoques:</p>

            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
              {["css", "tailwind", "preview"].map((v) => (
                <button
                  key={v}
                  className={`btn ${vistaActiva === v ? "btn-primary" : ""}`}
                  onClick={() => setVistaActiva(v)}
                >
                  {v === "css" ? "CSS puro" : v === "tailwind" ? "Tailwind" : "Vista previa"}
                </button>
              ))}
            </div>

            {vistaActiva === "css" && (
              <pre><code>{`<!-- HTML con clase semántica -->
<a href="#" class="btn-hero">
  Empezar gratis
</a>

/* CSS separado */
.btn-hero {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background-color: white;
  color: #4338ca;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 9999px;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: background-color 200ms ease, transform 200ms ease;
}

.btn-hero:hover {
  background-color: #e0e7ff;
  transform: translateY(-2px);
}

.btn-hero:focus-visible {
  outline: 3px solid white;
  outline-offset: 3px;
}`}</code></pre>
            )}

            {vistaActiva === "tailwind" && (
              <pre><code>{`<!-- Todo en el HTML, sin CSS adicional -->
<a
  href="#"
  class="
    inline-flex items-center gap-2
    px-8 py-3.5
    bg-white text-indigo-700
    text-base font-bold
    rounded-full shadow-md
    transition duration-200 ease-in-out
    hover:bg-indigo-50 hover:-translate-y-0.5
    focus-visible:outline focus-visible:outline-3
    focus-visible:outline-white focus-visible:outline-offset-3
  "
>
  Empezar gratis
</a>`}</code></pre>
            )}

            {vistaActiva === "preview" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px",
                  background: "linear-gradient(135deg, #4338ca, #7c3aed)",
                  borderRadius: "12px",
                  padding: "2rem",
                }}
              >
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.875rem 2rem",
                    background: "white",
                    color: "#4338ca",
                    fontSize: "1rem",
                    fontWeight: 700,
                    borderRadius: "9999px",
                    textDecoration: "none",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    transition: "all 200ms ease",
                  }}
                >
                  Empezar gratis →
                </a>
              </div>
            )}

            <div className="callout" style={{ marginTop: "1rem" }}>
              💡 <strong>Reflexión:</strong> Ambos enfoques generan exactamente el mismo resultado
              visual. La diferencia está en el proceso y en las preferencias del equipo.
              Tailwind es especialmente eficiente cuando se trabaja con frameworks de componentes
              como React o Vue, donde los componentes ya encapsulan la lógica.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Instalación de Tailwind</summary>
          <div className="dd-body">
            <h3>Opción A — CDN (práctica rápida, no para producción)</h3>
            <pre><code>{`<!-- Añade en el <head> de tu HTML -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Listo, ya puedes usar clases Tailwind -->
<div class="flex items-center gap-4 p-6 bg-white rounded-xl shadow">
  ...
</div>`}</code></pre>

            <h3>Opción B — Vite + React (recomendado para proyectos)</h3>
            <pre><code>{`# 1. Crear proyecto Vite
npm create vite@latest mi-proyecto -- --template react
cd mi-proyecto

# 2. Instalar Tailwind y sus dependencias
npm install -D tailwindcss postcss autoprefixer

# 3. Inicializar la configuración
npx tailwindcss init -p

# 4. Configurar tailwind.config.js (decirle dónde están tus archivos)
# tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# 5. Añadir directivas en src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# 6. Arrancar el servidor
npm run dev`}</code></pre>

            <div className="callout tip">
              🚀 <strong>Versión 4 (2025):</strong> Tailwind v4 tiene una instalación aún más
              simple con un solo plugin de Vite y sin necesidad de{" "}
              <code>tailwind.config.js</code> para proyectos básicos.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Código del hero completo con Tailwind</summary>
          <div className="dd-body">
            <p>
              Copia este HTML con CDN de Tailwind. Ábrelo directamente en el navegador
              sin ningún servidor:
            </p>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E18 · Hero con Tailwind</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-slate-50 font-sans">

  <!-- NAVEGACIÓN -->
  <nav class="bg-white border-b border-slate-200 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#" class="text-lg font-bold text-indigo-600">
          💨 TailwindDemo
        </a>
        <!-- Links escritorio -->
        <div class="hidden md:flex items-center gap-6">
          <a href="#" class="text-sm text-slate-600 hover:text-indigo-600 transition-colors">
            Inicio
          </a>
          <a href="#" class="text-sm text-slate-600 hover:text-indigo-600 transition-colors">
            Docs
          </a>
          <a href="#" class="text-sm text-slate-600 hover:text-indigo-600 transition-colors">
            Blog
          </a>
          <a href="#"
             class="text-sm font-semibold bg-indigo-600 text-white px-4 py-2 rounded-lg
                    hover:bg-indigo-700 transition-colors">
            Empezar
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section class="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900
                  text-white py-20 sm:py-28 lg:py-36">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <!-- Texto -->
        <div class="flex-1 text-center lg:text-left">
          <span class="inline-block text-indigo-300 text-sm font-semibold
                       tracking-widest uppercase mb-4">
            Nuevo en v4.0
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight
                     mb-6">
            Diseña más rápido
            <span class="text-indigo-300"> con utilidades</span>
          </h1>
          <p class="text-indigo-200 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-8">
            Tailwind CSS es un framework utility-first que te permite
            construir interfaces modernas directamente en tu HTML.
          </p>
          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#"
               class="inline-flex items-center justify-center gap-2
                      bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl
                      hover:bg-indigo-50 hover:shadow-lg transition-all duration-200
                      focus-visible:outline-4 focus-visible:outline-white">
              Empezar gratis →
            </a>
            <a href="#"
               class="inline-flex items-center justify-center gap-2
                      border-2 border-indigo-300 text-indigo-100 font-semibold
                      px-8 py-4 rounded-xl hover:border-white hover:text-white
                      transition-all duration-200">
              Ver la documentación
            </a>
          </div>
          <!-- Stats -->
          <div class="flex flex-wrap gap-8 justify-center lg:justify-start mt-10">
            <div>
              <p class="text-3xl font-extrabold">4M+</p>
              <p class="text-indigo-300 text-sm">descargas semanales</p>
            </div>
            <div>
              <p class="text-3xl font-extrabold">80k+</p>
              <p class="text-indigo-300 text-sm">estrellas en GitHub</p>
            </div>
            <div>
              <p class="text-3xl font-extrabold">99%</p>
              <p class="text-indigo-300 text-sm">satisfacción</p>
            </div>
          </div>
        </div>

        <!-- Tarjeta de código (decorativa) -->
        <div class="flex-1 w-full max-w-md lg:max-w-none">
          <div class="bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-700
                      font-mono text-sm leading-relaxed">
            <div class="flex gap-2 mb-4">
              <span class="w-3 h-3 rounded-full bg-red-500"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span class="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div class="text-slate-400">
              &lt;<span class="text-indigo-400">div</span>
              <span class="text-green-400"> class</span>=<span class="text-yellow-300">"</span>
            </div>
            <div class="text-yellow-300 pl-4">flex flex-col gap-4</div>
            <div class="text-yellow-300 pl-4">p-6 bg-white</div>
            <div class="text-yellow-300 pl-4">rounded-xl shadow-lg</div>
            <div class="text-yellow-300 pl-4">hover:shadow-xl</div>
            <div class="text-yellow-300 pl-4">transition-shadow</div>
            <div class="text-slate-400">"&gt;</div>
            <div class="text-slate-500 pl-4 mt-1">...</div>
            <div class="text-slate-400">&lt;/<span class="text-indigo-400">div</span>&gt;</div>
          </div>
        </div>

      </div>
    </div>
  </section>

</body>
</html>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Responsive con prefijos sm: md: lg:</summary>
          <div className="dd-body">
            <p>
              En Tailwind, el responsive es <strong>mobile-first</strong> por defecto.
              Los prefijos aplican la clase a partir de ese breakpoint hacia arriba:
            </p>

            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Prefijo</th>
                    <th>min-width</th>
                    <th>Ejemplo de uso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>(sin prefijo)</td><td>todos los tamaños</td><td><code>flex-col</code></td></tr>
                  <tr><td><code>sm:</code></td><td>640px</td><td><code>sm:flex-row</code></td></tr>
                  <tr><td><code>md:</code></td><td>768px</td><td><code>md:grid-cols-2</code></td></tr>
                  <tr><td><code>lg:</code></td><td>1024px</td><td><code>lg:grid-cols-3</code></td></tr>
                  <tr><td><code>xl:</code></td><td>1280px</td><td><code>xl:text-6xl</code></td></tr>
                  <tr><td><code>2xl:</code></td><td>1536px</td><td><code>2xl:max-w-8xl</code></td></tr>
                </tbody>
              </table>
            </div>

            <h3>Ejemplo práctico: grid responsive</h3>
            <pre><code>{`<!-- Sin Tailwind (CSS) -->
.grid { display: grid; grid-template-columns: 1fr; }
@media (min-width: 640px)  { .grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px) { .grid { grid-template-columns: 1fr 1fr 1fr; } }

<!-- Con Tailwind -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  ...
</div>
<!-- Una sola línea sustituye 4 líneas de CSS -->`}</code></pre>

            <div className="callout">
              💡 <strong>Importante:</strong> las clases sin prefijo aplican a todos los
              tamaños (la base). Los prefijos solo añaden a partir de ese breakpoint.
              Es exactamente la misma lógica que <code>min-width</code> en CSS puro.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 8 ════════════ */}
      <section className="doc-section" id="paso-8">
        <details className="dd">
          <summary>Paso 8 · Retos extra</summary>
          <div className="dd-body">
            <ol>
              <li>
                <strong>Dark mode:</strong> Añade <code>dark:</code> a las clases de colores.
                Primero configura <code>darkMode: 'class'</code> en <code>tailwind.config.js</code>.
                Luego alterna la clase <code>dark</code> en el <code>html</code> con un botón JS.
              </li>
              <li>
                <strong>Hover y focus accesibles:</strong> Comprueba que el botón principal
                tenga un <code>focus-visible:</code> visible. Navega con Tab y verifica
                que se ve claramente en el hero.
              </li>
              <li>
                <strong>Componente con @apply:</strong> Crea un archivo CSS con la clase
                <code>.btn-hero</code> usando <code>@apply flex items-center gap-2 px-8 py-4...</code>.
                Compara con la versión de clases inline.
              </li>
              <li>
                <strong>Animación de entrada:</strong> Añade <code>animate-fade-in</code>
                usando el plugin <code>@tailwindcss/animations</code> o escribe un
                <code>@keyframes</code> personalizado en la config.
              </li>
              <li>
                <strong>Recrea el E06:</strong> Toma el hero del E06 (Flexbox con CSS puro)
                y recréalo <em>exactamente</em> igual pero usando solo clases Tailwind.
                ¿Cuántas líneas de CSS necesitas ahora?
              </li>
            </ol>

            {/* Tabla comparativa */}
            <h3>¿Cuándo usar Tailwind, Bootstrap o CSS puro?</h3>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Situación</th>
                    <th>Mejor opción</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARATIVA.map((c) => (
                    <tr key={c.concepto}>
                      <td><strong>{c.concepto}</strong></td>
                      <td style={{ fontSize: "0.8rem" }}>
                        <div><strong>CSS:</strong> {c.css}</div>
                        <div style={{ color: "var(--interactive-primary)", marginTop: "0.25rem" }}>
                          <strong>Tailwind:</strong> {c.tailwind}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      <div className="doc-next">
        <Link to="/ejercicios/e17-responsive-mobile-first" className="btn">← E17 Responsive</Link>
        <Link to="/ejercicios/e19-tailwind-grid" className="btn btn-primary">E19 Tailwind Grid →</Link>
      </div>
    </main>
  );
}
