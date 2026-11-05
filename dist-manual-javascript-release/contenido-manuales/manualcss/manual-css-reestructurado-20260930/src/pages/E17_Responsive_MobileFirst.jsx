import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E17 · Responsive mobile-first completo
// Objetivo: aplicar media queries min-width a un
// layout real: primero móvil, luego tablet y desktop.
// =====================================================

const BREAKPOINTS = [
  { nombre: "Base (móvil)", ancho: "< 640px", cols: "1 columna", codigo: "/* Sin @media (es la base) */" },
  { nombre: "sm — Tablet", ancho: "≥ 640px", cols: "2 columnas", codigo: "@media (min-width: 640px) { ... }" },
  { nombre: "md — Laptop", ancho: "≥ 768px", cols: "2 col + adaptaciones", codigo: "@media (min-width: 768px) { ... }" },
  { nombre: "lg — Desktop", ancho: "≥ 1024px", cols: "3 columnas", codigo: "@media (min-width: 1024px) { ... }" },
  { nombre: "xl — Wide", ancho: "≥ 1280px", cols: "4 columnas (opcional)", codigo: "@media (min-width: 1280px) { ... }" },
];

export default function E17_Responsive_MobileFirst() {
  useEffect(() => {
    document.title = "E17 · Responsive mobile-first completo — Ejercicios CSS";
  }, []);

  const [bpActivo, setBpActivo] = useState(0);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E17 · Nivel avanzado · Responsive Design</p>
        <h1>Responsive mobile-first completo</h1>
        <p className="doc-lead">
          Mobile-first no es solo una técnica, es una{" "}
          <strong>forma de pensar el diseño</strong>. Primero defines cómo se
          ve en el dispositivo más pequeño y luego añades complejidad con{" "}
          <code>min-width</code>. El resultado es código más limpio, más
          rápido y más accesible.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> diferencia entre <code>max-width</code> y{" "}
          <code>min-width</code>, breakpoints con <code>@media</code>, variables CSS que
          cambian con el viewport, y cómo aplicar todo sobre el layout del E16.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · Mobile-first vs desktop-first</a></li>
            <li><a href="#paso-2">Paso 2 · La lógica de min-width</a></li>
            <li><a href="#paso-3">Paso 3 · Breakpoints estándar</a></li>
            <li><a href="#paso-4">Paso 4 · Variables CSS responsivas</a></li>
            <li><a href="#paso-5">Paso 5 · Aplicarlo al layout del E16</a></li>
            <li><a href="#paso-6">Paso 6 · Tipografía fluida con clamp()</a></li>
            <li><a href="#paso-7">Paso 7 · Tu código completo</a></li>
            <li><a href="#paso-8">Paso 8 · Retos extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · Mobile-first vs desktop-first</summary>
          <div className="dd-body">
            <p>
              Existen dos enfoques para escribir CSS responsive. Entender la diferencia
              es fundamental para elegir el correcto:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <div className="card" style={{ borderTop: "3px solid #ef4444" }}>
                <h4 style={{ marginTop: 0, color: "#ef4444" }}>❌ Desktop-first (evítalo)</h4>
                <pre style={{ fontSize: "0.75rem" }}><code>{`/* Empiezas con el layout de escritorio */
.galeria {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

/* Y lo "deshaces" para pantallas pequeñas */
@media (max-width: 768px) {
  .galeria {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .galeria {
    grid-template-columns: 1fr;
  }
}`}</code></pre>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: 0 }}>
                  Problema: sobrescribes CSS que el móvil no necesita. Más especificidad, más conflictos.
                </p>
              </div>

              <div className="card" style={{ borderTop: "3px solid #22c55e" }}>
                <h4 style={{ marginTop: 0, color: "#22c55e" }}>✅ Mobile-first (hazlo así)</h4>
                <pre style={{ fontSize: "0.75rem" }}><code>{`/* Empiezas con el móvil (base) */
.galeria {
  display: grid;
  grid-template-columns: 1fr;
}

/* Y añades complejidad hacia arriba */
@media (min-width: 640px) {
  .galeria {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .galeria {
    grid-template-columns: repeat(4, 1fr);
  }
}`}</code></pre>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: 0 }}>
                  Ventaja: los estilos base son mínimos. Cada breakpoint solo añade lo necesario.
                </p>
              </div>
            </div>

            <div className="callout" style={{ marginTop: "1rem" }}>
              📱 <strong>Dato real:</strong> más del 60% del tráfico web mundial viene de móviles.
              Diseñar primero para móvil no es solo buena práctica, es diseñar para la mayoría
              de tus usuarios.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · La lógica de min-width</summary>
          <div className="dd-body">
            <p>
              Con <code>min-width</code>, los estilos dentro del <code>@media</code> se aplican
              cuando el viewport es{" "}
              <strong>igual o mayor al valor especificado</strong>. Funciona de
              forma acumulativa y progresiva:
            </p>

            <pre><code>{`/* Sin @media → aplica en TODOS los tamaños (la base: móvil) */
.nav {
  flex-direction: column;  /* menú vertical en móvil */
  gap: 0;
}

/* ≥ 768px → se AÑADE y/o SOBREESCRIBE lo anterior */
@media (min-width: 768px) {
  .nav {
    flex-direction: row;   /* menú horizontal en tablet/desktop */
    gap: 1rem;
  }
}

/* ≥ 1024px → se AÑADE y/o SOBREESCRIBE lo anterior */
@media (min-width: 1024px) {
  .nav {
    gap: 2rem;             /* más espacio en desktop */
  }
}`}</code></pre>

            <h3>Cascada + especificidad en media queries</h3>
            <p>
              Las media queries <strong>no aumentan la especificidad</strong>. Gana el que
              aparece después en el archivo (cascada). Por eso el orden importa:
              de menor a mayor breakpoint.
            </p>
            <pre><code>{`/* ✅ Orden correcto: de menor a mayor */
/* Base */     .box { width: 100%; }
/* ≥ 640px */  @media (min-width: 640px)  { .box { width: 50%; } }
/* ≥ 1024px */ @media (min-width: 1024px) { .box { width: 33%; } }

/* ❌ Orden incorrecto: el 50% nunca aplicará en 1024+ */
@media (min-width: 1024px) { .box { width: 33%; } }
@media (min-width: 640px)  { .box { width: 50%; } } /* Sobreescribe al anterior! */`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · Breakpoints estándar</summary>
          <div className="dd-body">
            <p>
              Selecciona un breakpoint para ver cómo se usa y qué dispositivos cubre:
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              {BREAKPOINTS.map((bp, i) => (
                <button
                  key={bp.nombre}
                  className={`btn ${bpActivo === i ? "btn-primary" : ""}`}
                  onClick={() => setBpActivo(i)}
                >
                  {bp.nombre}
                </button>
              ))}
            </div>

            <div className="card" style={{ padding: "1.25rem" }}>
              <h4 style={{ marginTop: 0 }}>{BREAKPOINTS[bpActivo].nombre}</h4>
              <p><strong>Viewport:</strong> {BREAKPOINTS[bpActivo].ancho}</p>
              <p><strong>Uso típico:</strong> {BREAKPOINTS[bpActivo].cols}</p>
              <pre><code>{BREAKPOINTS[bpActivo].codigo}</code></pre>
            </div>

            <h3>Tabla completa de breakpoints</h3>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>min-width</th>
                    <th>Dispositivos típicos</th>
                    <th>Uso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Base</strong></td>
                    <td>—</td>
                    <td>Móviles pequeños, relojes</td>
                    <td>Estilos por defecto, sin <code>@media</code></td>
                  </tr>
                  <tr>
                    <td><strong>sm</strong></td>
                    <td><code>640px</code></td>
                    <td>Móviles horizontales, phablets</td>
                    <td>2 columnas, nav horizontal pequeña</td>
                  </tr>
                  <tr>
                    <td><strong>md</strong></td>
                    <td><code>768px</code></td>
                    <td>iPad, tablets</td>
                    <td>Sidebar aparece, tipografía mayor</td>
                  </tr>
                  <tr>
                    <td><strong>lg</strong></td>
                    <td><code>1024px</code></td>
                    <td>Laptops, iPads Pro</td>
                    <td>Layout completo, 3+ columnas</td>
                  </tr>
                  <tr>
                    <td><strong>xl</strong></td>
                    <td><code>1280px</code></td>
                    <td>Monitores estándar</td>
                    <td>Mayores gaps, más contenido visible</td>
                  </tr>
                  <tr>
                    <td><strong>2xl</strong></td>
                    <td><code>1536px</code></td>
                    <td>Monitores grandes</td>
                    <td>max-width en contenedor, evita líneas largas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              💡 <strong>Consejo:</strong> no uses breakpoints fijos de memoria. Diseña
              primero en móvil y añade un breakpoint <em>cuando el diseño se rompa</em>.
              Tus breakpoints serán los que necesita <em>tu</em> diseño, no los de Bootstrap.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · Variables CSS responsivas</summary>
          <div className="dd-body">
            <p>
              Una técnica potente: cambia las <strong>variables CSS</strong> en cada breakpoint
              y todos los elementos que las usen se adaptarán automáticamente.
            </p>

            <pre><code>{`:root {
  /* Escala de espaciado móvil */
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;

  /* Tipografía base */
  --fs-body: 1rem;
  --fs-h1: 1.75rem;
  --fs-h2: 1.25rem;

  /* Grid */
  --cols-galeria: 1;
  --gap-galeria: 0.75rem;
}

@media (min-width: 640px) {
  :root {
    --space-md: 1.25rem;
    --space-lg: 2rem;
    --fs-h1: 2.25rem;
    --cols-galeria: 2;
    --gap-galeria: 1rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --space-md: 1.5rem;
    --space-lg: 2.5rem;
    --space-xl: 3.5rem;
    --fs-h1: 3rem;
    --fs-h2: 1.75rem;
    --cols-galeria: 3;
    --gap-galeria: 1.5rem;
  }
}

/* Los elementos usan las variables: se adaptan solos */
.galeria {
  display: grid;
  grid-template-columns: repeat(var(--cols-galeria), 1fr);
  gap: var(--gap-galeria);
}

h1       { font-size: var(--fs-h1); }
.section { padding: var(--space-xl) var(--space-md); }`}</code></pre>

            <div className="callout tip">
              🚀 <strong>Ventaja:</strong> Si necesitas ajustar el espaciado de toda la página,
              solo cambias las variables en <code>:root</code>, no buscas por todo el CSS.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Aplicarlo al layout del E16 (Grid Areas responsive)</summary>
          <div className="dd-body">
            <p>
              Partiendo del layout de revista del E16, añadimos los breakpoints mobile-first
              correctamente ordenados:
            </p>

            <pre><code>{`/* ── PASO 1: Móvil (base sin @media) ──────────────── */
.revista {
  display: grid;
  grid-template-areas:
    "portada"
    "art1"
    "art2"
    "lateral"
    "pie";
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ── PASO 2: Tablet sm ≥ 640px ─────────────────────── */
@media (min-width: 640px) {
  .revista {
    grid-template-areas:
      "portada portada"
      "art1    art2"
      "lateral lateral"
      "pie     pie";
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem;
    gap: 1.25rem;
  }
}

/* ── PASO 3: Desktop lg ≥ 1024px ───────────────────── */
@media (min-width: 1024px) {
  .revista {
    grid-template-areas:
      "portada portada lateral"
      "art1    art2    lateral"
      "pie     pie     pie";
    grid-template-columns: 2fr 1fr 280px;
    grid-template-rows: 320px 200px 70px;
    padding: 2rem;
    gap: 1.5rem;
  }
}

/* Hijos: solo se asignan al área. No cambian nunca. */
.portada { grid-area: portada; }
.art1    { grid-area: art1; }
.art2    { grid-area: art2; }
.lateral { grid-area: lateral; }
.pie     { grid-area: pie; }`}</code></pre>

            {/* Demo visual del cambio de layout */}
            <h3>Simulación por tamaños</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
                marginTop: "0.5rem",
              }}
            >
              {[
                {
                  label: "📱 Móvil",
                  areas: '"portada" "art1" "art2" "lateral" "pie"',
                  cols: "1fr",
                  rows: "80px 60px 60px 60px 40px",
                },
                {
                  label: "📟 Tablet",
                  areas: '"portada portada" "art1 art2" "lateral lateral" "pie pie"',
                  cols: "1fr 1fr",
                  rows: "80px 60px 60px 40px",
                },
                {
                  label: "🖥️ Desktop",
                  areas: '"portada portada lateral" "art1 art2 lateral" "pie pie pie"',
                  cols: "2fr 1fr 80px",
                  rows: "80px 60px 40px",
                },
              ].map((sim) => (
                <div key={sim.label}>
                  <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{sim.label}</p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateAreas: sim.areas,
                      gridTemplateColumns: sim.cols,
                      gridTemplateRows: sim.rows,
                      gap: "4px",
                      background: "var(--border-subtle)",
                      padding: "4px",
                      borderRadius: "8px",
                    }}
                  >
                    {["portada", "art1", "art2", "lateral", "pie"].map((a, i) => {
                      const colors = ["#6366f1", "#8b5cf6", "#a78bfa", "#06b6d4", "#64748b"];
                      // Skip areas not in this sim
                      if (sim.areas.indexOf(a) === -1) return null;
                      return (
                        <div
                          key={a}
                          style={{
                            gridArea: a,
                            background: colors[i],
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            borderRadius: "4px",
                            fontFamily: "monospace",
                          }}
                        >
                          {a}
                        </div>
                      );
                    })}
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
          <summary>Paso 6 · Tipografía fluida con clamp()</summary>
          <div className="dd-body">
            <p>
              <code>clamp(mínimo, preferido, máximo)</code> permite que el texto crezca
              <em>fluidamente</em> entre dos tamaños según el ancho del viewport, sin
              ninguna media query.
            </p>

            <pre><code>{`/* Sin clamp: tres breakpoints manuales */
h1 { font-size: 1.5rem; }
@media (min-width: 640px)  { h1 { font-size: 2rem; } }
@media (min-width: 1024px) { h1 { font-size: 3rem; } }

/* Con clamp: fluido y automático */
h1 {
  /* Mínimo: 1.5rem · Preferido: 4vw · Máximo: 3rem */
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Más ejemplos */
h2       { font-size: clamp(1.25rem, 3vw, 2rem); }
p        { font-size: clamp(0.95rem, 1.5vw, 1.125rem); }
.hero    { padding: clamp(2rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem); }
.section { gap: clamp(1rem, 3vw, 2.5rem); }`}</code></pre>

            <div className="callout">
              💡 <strong>Cómo funciona:</strong>{" "}
              <code>4vw</code> en una pantalla de 375px es 15px (demasiado pequeño),
              así que el navegador usa el mínimo. En 1440px sería 57.6px (demasiado grande),
              así que usa el máximo. Entre medias, el tamaño crece suavemente.
            </div>

            {/* Demo visual clamp */}
            <div
              style={{
                background: "var(--surface-primary)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "8px",
                padding: "1.5rem",
                marginTop: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Este texto usa <code>clamp(1rem, 3vw, 2.5rem)</code>
              </p>
              <p
                style={{
                  fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                  color: "var(--text-secondary)",
                  marginBottom: 0,
                  marginTop: "0.5rem",
                }}
              >
                Y este párrafo usa <code>clamp(0.875rem, 1.5vw, 1.125rem)</code>.
                Cambia el ancho de la ventana para ver el efecto fluido.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Tu código completo mobile-first</summary>
          <div className="dd-body">
            <p>
              Código completo listo para copiar. Toma el layout de revista del E16 y
              lo convierte en 100% responsive con la metodología mobile-first.
            </p>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E17 · Responsive Mobile-First</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* ── Variables responsive en :root ── */
    :root {
      --space: 1rem;
      --gap: 0.75rem;
      --fs-titulo: clamp(1.25rem, 5vw, 2.5rem);
      --fs-body: clamp(0.9rem, 2vw, 1rem);
      --cols: 1;
    }

    @media (min-width: 640px) {
      :root { --space: 1.5rem; --gap: 1rem; --cols: 2; }
    }

    @media (min-width: 1024px) {
      :root { --space: 2rem; --gap: 1.5rem; --cols: 3; }
    }

    body {
      font-family: system-ui, sans-serif;
      background: #f8fafc;
      color: #1e293b;
      font-size: var(--fs-body);
      line-height: 1.6;
    }

    /* ── Layout principal: mobile first ── */
    .revista {
      display: grid;
      grid-template-areas:
        "portada"
        "art1"
        "art2"
        "lateral"
        "pie";
      grid-template-columns: 1fr;
      gap: var(--gap);
      padding: var(--space);
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
        grid-template-rows: 320px 200px 70px;
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
      padding: var(--space);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      min-height: 220px;
    }
    .portada h2 { font-size: var(--fs-titulo); line-height: 1.2; }

    .art1, .art2 {
      background: white;
      border-radius: 12px;
      padding: var(--space);
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    }

    .lateral {
      background: white;
      border-radius: 12px;
      padding: var(--space);
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
      overflow-y: auto;
    }

    .pie {
      grid-area: pie;
      background: #1e293b;
      color: #94a3b8;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      font-size: 0.8rem;
    }

    /* ── Navegación mobile-first ── */
    .nav {
      display: flex;
      flex-direction: column;
      background: #1e293b;
      padding: 1rem;
    }

    @media (min-width: 768px) {
      .nav {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 2rem;
      }
    }

    .nav a {
      color: #cbd5e1;
      text-decoration: none;
      padding: 0.5rem 0;
    }

    @media (min-width: 768px) {
      .nav a { padding: 0.5rem 1rem; border-radius: 4px; }
      .nav a:hover { background: rgba(255,255,255,0.08); }
    }
  </style>
</head>
<body>

  <!-- NAVEGACIÓN -->
  <nav class="nav">
    <strong style="color:white">📰 CSS Magazine</strong>
    <a href="#">Inicio</a>
    <a href="#">Artículos</a>
    <a href="#">Tutoriales</a>
    <a href="#">Contacto</a>
  </nav>

  <!-- LAYOUT PRINCIPAL -->
  <div class="revista">
    <article class="portada">
      <p style="font-size:0.75rem;opacity:0.7;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.5rem">
        Especial · CSS Moderno
      </p>
      <h2>Responsive Design: el enfoque mobile-first</h2>
      <p style="margin-top:.75rem;opacity:.85;font-size:.9rem">
        Por qué diseñar desde el móvil produce mejores resultados en todos los dispositivos.
      </p>
    </article>

    <article class="art1">
      <h3>🎨 Variables CSS responsivas</h3>
      <p>Cambia variables en :root con media queries y toda la página se adapta.</p>
    </article>

    <article class="art2">
      <h3>⚡ clamp(): tipografía fluida</h3>
      <p>Texto que crece suavemente sin una sola media query adicional.</p>
    </article>

    <aside class="lateral">
      <h3 style="font-size:.8rem;text-transform:uppercase;color:#94a3b8;margin-bottom:1rem">
        En breve
      </h3>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:.75rem">
        <li style="font-size:.875rem;padding-bottom:.75rem;border-bottom:1px solid #f1f5f9">
          Container Queries ya disponibles en todos los navegadores
        </li>
        <li style="font-size:.875rem;padding-bottom:.75rem;border-bottom:1px solid #f1f5f9">
          CSS Nesting sale de la fase experimental
        </li>
        <li style="font-size:.875rem">
          Chrome 126 soporta anchor positioning nativo
        </li>
      </ul>
    </aside>

    <footer class="pie">© 2026 CSS Magazine</footer>
  </div>

</body>
</html>`}</code></pre>
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
                <strong>Menú hamburguesa sin JS:</strong> Usa el{" "}
                <code>checkbox hack</code> (input type checkbox + label + CSS) para
                mostrar/ocultar el menú en móvil sin JavaScript.
              </li>
              <li>
                <strong>Imagen responsive:</strong> Añade una imagen a la portada con{" "}
                <code>object-fit: cover</code> y comprueba que se ve bien en todos
                los tamaños con el atributo <code>srcset</code>.
              </li>
              <li>
                <strong>Contenedor con max-width:</strong> En pantallas XL ({">"}1280px), el
                contenido tiene demasiado ancho. Añade <code>max-width: 1200px; margin: 0 auto</code>
                al contenedor principal.
              </li>
              <li>
                <strong>Tipografía completa con clamp:</strong> Convierte todos los tamaños
                de fuente del layout (h1, h2, h3, p, footer) a <code>clamp()</code>.
                Elimina todas las unidades de font-size dentro de los @media.
              </li>
              <li>
                <strong>Dark mode:</strong> Añade <code>@media (prefers-color-scheme: dark)</code>
                y cambia los colores del layout para el modo oscuro.
              </li>
            </ol>
            <div className="callout tip">
              🏆 <strong>Desafío:</strong> Toma la landing del E15 (Bootstrap) y recréala
              desde cero con CSS puro y metodología mobile-first. Compara el resultado
              y el proceso con Bootstrap.
            </div>
          </div>
        </details>
      </section>

      <div className="doc-next">
        <Link to="/ejercicios/e16-grid-areas" className="btn">← E16 Grid Areas</Link>
        <Link to="/ejercicios/e18-tailwind-hero" className="btn btn-primary">E18 Tailwind Hero →</Link>
      </div>
    </main>
  );
}
