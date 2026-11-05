import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E05 · Variables CSS (Custom Properties)
// Objetivo: crear un sistema de tokens de diseño con
// :root, var() y demostrar el poder de temas que
// cambian bstante solo modificando las variables.
// =====================================================

const TEMAS = {
  morado: {
    "--color-primary": "#6366f1",
    "--color-primary-h": "#4f46e5",
    "--color-accent-bg": "#eef2ff",
    "--color-bg": "#f8fafc",
    "--color-surface": "#ffffff",
    "--color-text": "#1e293b",
    "--color-text-soft": "#64748b",
    "--color-border": "#e2e8f0",
    "--radius-card": "16px",
  },
  verde: {
    "--color-primary": "#16a34a",
    "--color-primary-h": "#15803d",
    "--color-accent-bg": "#f0fdf4",
    "--color-bg": "#f0fdf4",
    "--color-surface": "#ffffff",
    "--color-text": "#14532d",
    "--color-text-soft": "#4b7a5e",
    "--color-border": "#bbf7d0",
    "--radius-card": "8px",
  },
  naranja: {
    "--color-primary": "#ea580c",
    "--color-primary-h": "#c2410c",
    "--color-accent-bg": "#fff7ed",
    "--color-bg": "#fff7ed",
    "--color-surface": "#ffffff",
    "--color-text": "#431407",
    "--color-text-soft": "#78350f",
    "--color-border": "#fed7aa",
    "--radius-card": "4px",
  },
};

export default function E05_Variables_CSS() {
  useEffect(() => {
    document.title = "E05 · Variables CSS — Ejercicios CSS";
  }, []);

  const [temaActivo, setTemaActivo] = useState("morado");
  const tema = TEMAS[temaActivo];

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ── HERO ── */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E05 · Nivel inicial</p>
        <h1>Variables CSS: un solo cambio, toda la página</h1>
        <p className="doc-lead">
          Las variables CSS (custom properties) son la herramienta más potente para
          mantener un diseño consistente. El objetivo de este ejercicio es que experimentes
          en primera persona <strong>cómo cambiar tres líneas de CSS cambia toda la interfaz</strong>.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> <code>:root</code>, <code>var()</code>,
          valores de fallback, tokens de diseño (color, espacio, radio) y la diferencia
          entre variables CSS y variables Sass.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · ¿Qué es una custom property?</a></li>
            <li><a href="#paso-2">Paso 2 · Declarar variables en :root</a></li>
            <li><a href="#paso-3">Paso 3 · Usar variables con var()</a></li>
            <li><a href="#paso-4">Paso 4 · El sistema completo: color, espacio y radio</a></li>
            <li><a href="#paso-5">Paso 5 · Demo interactiva: cambia el tema</a></li>
            <li><a href="#paso-6">Paso 6 · Código final + reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · ¿Qué es una custom property?</summary>
          <div className="dd-body">
            <p>
              Una <strong>custom property</strong> (o variable CSS) es una propiedad que tú
              inventas y que empieza siempre con dos guiones:{" "}
              <code>--nombre-de-mi-variable</code>.
            </p>

            <pre><code>{`/* Declarar la variable (guardar el valor) */
:root {
  --color-primario: #6366f1;
}

/* Usar la variable */
.boton {
  background-color: var(--color-primario);
}`}</code></pre>

            <p>
              El resultado es exactamente igual que escribir{" "}
              <code>background-color: #6366f1</code> — pero ahora si cambias{" "}
              <code>--color-primario</code> en un sitio, cambia en todos los lugares
              donde se usa.
            </p>

            <div className="callout tip">
              <strong>Sintaxis de dos partes:</strong><br />
              1. <strong>Declarar:</strong> <code>--nombre: valor;</code> dentro de un selector<br />
              2. <strong>Usar:</strong> <code>var(--nombre)</code> como valor de cualquier propiedad
            </div>

            <h3>Sin variables vs con variables</h3>
            <div
              className="table-wrap"
              role="region"
              aria-label="Sin vs con variables"
              tabIndex={0}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>❌ Sin variables (frágil)</th>
                    <th>✅ Con variables (mantenible)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <pre style={{ margin: 0 }}><code>{`.boton  { color: #6366f1; }
.titulo { color: #6366f1; }
.badge  { background: #6366f1; }
/* 3 sitios a actualizar si el color cambia */`}</code></pre>
                    </td>
                    <td>
                      <pre style={{ margin: 0 }}><code>{`:root { --primario: #6366f1; }

.boton  { color: var(--primario); }
.titulo { color: var(--primario); }
.badge  { background: var(--primario); }
/* 1 sitio a actualizar */`}</code></pre>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · Declarar variables en :root</summary>
          <div className="dd-body">
            <p>
              <code>:root</code> es un selector especial que selecciona el elemento
              raíz del documento (el <code>&lt;html&gt;</code>). Al declarar variables
              ahí, están disponibles en <strong>toda la página</strong>.
            </p>

            <pre><code>{`:root {
  /* ── Por qué en :root? ──────────────────────────────────
     Las variables CSS heredan como el color o font-family.
     Al ponerlas en :root (el elemento más alto del DOM),
     todos los elementos del documento pueden heredarlas.
  ─────────────────────────────────────────────────────── */

  /* Colores */
  --color-primary:    #6366f1;
  --color-primary-h:  #4f46e5;   /* hover: más oscuro */
  --color-text:       #1e293b;
  --color-text-soft:  #64748b;
  --color-bg:         #f8fafc;
  --color-surface:    #ffffff;
  --color-border:     #e2e8f0;

  /* Espaciado */
  --space-sm:   0.5rem;    /* 8px */
  --space-md:   1rem;      /* 16px */
  --space-lg:   1.5rem;    /* 24px */
  --space-xl:   2rem;      /* 32px */

  /* Radios de borde */
  --radius-sm:    4px;
  --radius-md:    8px;
  --radius-lg:    16px;
  --radius-pill:  999px;   /* para botones completamente redondos */
}`}</code></pre>

            <div className="callout">
              💡 También puedes declarar variables <strong>dentro de un selector</strong>
              y solo serán accesibles desde ese elemento y sus hijos:
              <pre style={{ margin: "0.5rem 0 0" }}><code>{`.tarjeta {
  --padding-interno: 1.5rem;  /* solo disponible dentro de .tarjeta */
}
.tarjeta .titulo { padding: var(--padding-interno); } /* ✅ funciona */
.boton           { padding: var(--padding-interno); } /* ❌ undefined */`}</code></pre>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · Usar variables con var() y valores de fallback</summary>
          <div className="dd-body">
            <p>
              La función <code>var()</code> tiene una <strong>segunda forma</strong> con
              valor de reserva (fallback): si la variable no existe, usa el valor alternativo.
            </p>

            <pre><code>{`/* Uso básico */
.boton {
  background-color: var(--color-primary);
}

/* Con fallback: si --color-primary no existe, usa #6366f1 */
.boton {
  background-color: var(--color-primary, #6366f1);
}

/* Anidado: fallback que usa otra variable */
.boton {
  background-color: var(--color-boton, var(--color-primary, #6366f1));
  /* Primero busca --color-boton,
     si no existe busca --color-primary,
     si tampoco existe usa #6366f1 */
}

/* Variables en cualquier propiedad */
.tarjeta {
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
}
`}</code></pre>

            <div className="callout tip">
              <strong>Variables en propiedades abreviadas</strong> — funciona:
              <pre style={{ margin: "0.5rem 0 0" }}><code>{`/* Dentro de una propiedad compuesta */
border: 1px solid var(--color-border);
padding: var(--space-md) var(--space-lg);
background: linear-gradient(var(--color-primary), var(--color-primary-h));`}</code></pre>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · El sistema completo: tarjeta con tokens</summary>
          <div className="dd-body">
            <p>
              Ahora aplicamos todo el sistema de variables a una mini-interfaz real:
              una tarjeta de producto. <strong>Ningún valor de color, espacio ni radio
              está escrito a mano</strong> — todo viene de las variables.
            </p>

            <pre><code>{`/* La tarjeta con 100% variables */
.tarjeta {
  background:    var(--color-surface);
  border:        1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding:       var(--space-xl);
  max-width:     360px;
}

.tarjeta__titulo {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 var(--space-sm);
}

.tarjeta__desc {
  font-size: 0.875rem;
  color: var(--color-text-soft);
  line-height: 1.6;
  margin: 0 0 var(--space-lg);
}

.tarjeta__boton {
  background:    var(--color-primary);
  color:         white;
  border:        none;
  border-radius: var(--radius-md);
  padding:       var(--space-sm) var(--space-lg);
  font-weight:   600;
  cursor:        pointer;
  transition:    background 0.15s ease;
}

.tarjeta__boton:hover {
  background: var(--color-primary-h);
}`}</code></pre>

            <div className="callout tip">
              ✨ La tarjeta de arriba no tiene ni un solo color, espacio ni radio escritos
              a mano. Todo viene de <code>:root</code>. ¿Qué pasa si cambias{" "}
              <code>--color-primary</code>? La tarjeta entera cambia de color en un segundo.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 — DEMO INTERACTIVA ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Demo interactiva — cambia el tema y observa</summary>
          <div className="dd-body">
            <p>
              Aquí está la magia. Los tres botones de abajo cambian el conjunto de
              variables. Observa cómo <strong>toda la tarjeta se actualiza a la vez</strong>{" "}
              sin tocar nada del HTML ni del CSS de la tarjeta.
            </p>

            {/* Selector de tema */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {Object.keys(TEMAS).map(t => (
                <button
                  key={t}
                  onClick={() => setTemaActivo(t)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    border: `2px solid ${temaActivo === t ? TEMAS[t]["--color-primary"] : "var(--border-medium)"}`,
                    background: temaActivo === t ? TEMAS[t]["--color-primary"] : "transparent",
                    color: temaActivo === t ? "white" : "var(--text-primary)",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    transition: "all 0.15s ease",
                    textTransform: "capitalize",
                  }}
                >
                  🎨 Tema {t}
                </button>
              ))}
            </div>

            {/* Tarjeta con tema aplicado */}
            <div style={{
              background: tema["--color-bg"],
              padding: "2rem",
              borderRadius: "12px",
              border: `1px solid ${tema["--color-border"]}`,
            }}>
              <div style={{
                background: tema["--color-surface"],
                border: `1px solid ${tema["--color-border"]}`,
                borderRadius: tema["--radius-card"],
                padding: "1.5rem",
                maxWidth: "360px",
              }}>
                <span style={{
                  display: "inline-block",
                  background: tema["--color-accent-bg"],
                  color: tema["--color-primary"],
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.2rem 0.6rem",
                  borderRadius: "999px",
                  marginBottom: "0.75rem",
                }}>
                  Nuevo
                </span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: tema["--color-text"], margin: "0 0 0.5rem" }}>
                  Curso de CSS Avanzado
                </h3>
                <p style={{ fontSize: "0.875rem", color: tema["--color-text-soft"], lineHeight: 1.6, margin: "0 0 1.25rem" }}>
                  Aprende las técnicas modernas de CSS: Grid, Flexbox, variables y animaciones.
                </p>
                <button style={{
                  background: tema["--color-primary"],
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.6rem 1.25rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  transition: "background 0.15s ease",
                }}>
                  Ver curso →
                </button>
              </div>
            </div>

            <div className="callout" style={{ marginTop: "1rem" }}>
              💡 <strong>Lo que ves aquí</strong> es lo que permite crear un{" "}
              <em>modo oscuro</em>, <em>temas por marca</em> o <em>personalización
              por usuario</em> en CSS puro. Solo cambian las variables, no el CSS de
              los componentes.
            </div>

            <h3>Así se hace en CSS real (modo oscuro)</h3>
            <pre><code>{`/* Tema claro (por defecto) */
:root {
  --color-bg:      #f8fafc;
  --color-surface: #ffffff;
  --color-text:    #1e293b;
}

/* Tema oscuro: redefinir las mismas variables */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:      #0f172a;
    --color-surface: #1e293b;
    --color-text:    #f1f5f9;
  }
}

/* El CSS de los componentes no cambia ni una línea */
.tarjeta {
  background: var(--color-surface);  /* se adapta solo */
  color: var(--color-text);
}`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 — CÓDIGO FINAL ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Código final completo + reto extra</summary>
          <div className="dd-body">
            <pre><code>{`/* styles.css */

/* ── Sistema de tokens ── */
:root {
  /* Colores */
  --color-primary:    #6366f1;
  --color-primary-h:  #4f46e5;
  --color-accent-bg:  #eef2ff;
  --color-text:       #1e293b;
  --color-text-soft:  #64748b;
  --color-bg:         #f8fafc;
  --color-surface:    #ffffff;
  --color-border:     #e2e8f0;

  /* Espacio */
  --space-sm:  0.5rem;
  --space-md:  1rem;
  --space-lg:  1.5rem;
  --space-xl:  2rem;

  /* Radios */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-pill: 999px;
}

/* ── Uso en componentes ── */
body {
  background: var(--color-bg);
  color: var(--color-text);
}

.tarjeta {
  background:    var(--color-surface);
  border:        1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding:       var(--space-xl);
  max-width:     360px;
}

.badge {
  display: inline-block;
  background: var(--color-accent-bg);
  color: var(--color-primary);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
}

.boton {
  background:    var(--color-primary);
  color:         white;
  border:        none;
  border-radius: var(--radius-md);
  padding:       var(--space-sm) var(--space-lg);
  font-weight:   600;
  cursor:        pointer;
  transition:    background 0.15s ease;
}

.boton:hover { background: var(--color-primary-h); }`}</code></pre>

            <div className="callout tip">
              ✅ <strong>Qué has practicado:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li>Declarar variables en <code>:root</code></li>
                <li>Usar <code>var()</code> con y sin fallback</li>
                <li>Tokens de color, espacio y radio: el vocabulario del diseño</li>
                <li>Cómo un cambio de variable actualiza toda la interfaz</li>
                <li>La base técnica de modo oscuro y temas dinámicos</li>
              </ul>
            </div>

            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li>
                  <strong>Modo oscuro automático:</strong> añade{" "}
                  <code>@media (prefers-color-scheme: dark)</code> y redefine{" "}
                  <code>--color-bg</code>, <code>--color-surface</code> y{" "}
                  <code>--color-text</code>. Sin tocar nada más, la página
                  se adaptará al modo del sistema.
                </li>
                <li>
                  <strong>Tema por clase:</strong> en vez de media query, aplica el tema
                  oscuro con una clase en el html: <code>&lt;html class="tema-oscuro"&gt;</code>
                  y actívala con un botón de JS.
                </li>
                <li>
                  <strong>Variables de espaciado fluido:</strong> usa <code>clamp()</code>
                  en las variables de espacio para que sean más pequeñas en móvil y más
                  grandes en escritorio:{" "}
                  <code>--space-lg: clamp(1rem, 3vw, 2rem);</code>
                </li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="callout tip">
          🎉 <strong>¡Has terminado el Nivel 1!</strong> Con estos 5 ejercicios tienes
          las bases reales de CSS: box-model, tipografía, interacciones, componentes y
          un sistema de diseño con variables. El siguiente nivel — Flexbox y Grid — te
          dará el control total del layout.
        </div>
        <div className="doc-next">
          <Link to="/ejercicios/e04-botones" className="btn">← E04 Botones</Link>
          <Link to="/ejercicios" className="btn btn-primary">Ver todos los ejercicios →</Link>
        </div>
      </section>
    </main>
  );
}
