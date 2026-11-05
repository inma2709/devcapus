import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E20 · Proyecto final: portfolio con Grid Areas
// Objetivo: integrar Grid Areas, variables CSS,
// Flexbox y media queries en un portfolio completo
// y accesible. El ejercicio donde todo converge.
// =====================================================

const SECCIONES = [
  { id: "header", label: "Header / Nav", color: "#6366f1", texto: "#fff" },
  { id: "hero", label: "Hero", color: "#8b5cf6", texto: "#fff" },
  { id: "about", label: "Sobre mí", color: "#0ea5e9", texto: "#fff" },
  { id: "skills", label: "Habilidades", color: "#10b981", texto: "#fff" },
  { id: "projects", label: "Proyectos", color: "#f59e0b", texto: "#fff" },
  { id: "contact", label: "Contacto", color: "#ef4444", texto: "#fff" },
  { id: "footer", label: "Footer", color: "#64748b", texto: "#fff" },
];

const VARIABLES = [
  { nombre: "--color-primary", valor: "#6366f1", uso: "Color principal de la marca" },
  { nombre: "--color-secondary", valor: "#8b5cf6", uso: "Acento, gradientes" },
  { nombre: "--color-accent", valor: "#0ea5e9", uso: "Highlights, links activos" },
  { nombre: "--color-text", valor: "#1e293b", uso: "Texto principal (modo claro)" },
  { nombre: "--color-bg", valor: "#f8fafc", uso: "Fondo general" },
  { nombre: "--color-surface", valor: "#ffffff", uso: "Fondo de tarjetas" },
  { nombre: "--color-border", valor: "#e2e8f0", uso: "Bordes de divisores" },
  { nombre: "--font-sans", valor: "'Inter', sans-serif", uso: "Tipografía principal" },
  { nombre: "--font-heading", valor: "'Plus Jakarta Sans', sans-serif", uso: "Títulos y encabezados" },
  { nombre: "--space-xs", valor: "0.25rem", uso: "Espacios mínimos" },
  { nombre: "--space-sm", valor: "0.5rem", uso: "Espacios pequeños" },
  { nombre: "--space-md", valor: "1rem", uso: "Espacios medios" },
  { nombre: "--space-lg", valor: "2rem", uso: "Espacios grandes" },
  { nombre: "--space-xl", valor: "4rem", uso: "Secciones completas" },
  { nombre: "--radius-sm", valor: "0.375rem", uso: "Botones, inputs" },
  { nombre: "--radius-md", valor: "0.75rem", uso: "Tarjetas" },
  { nombre: "--radius-lg", valor: "1.5rem", uso: "Hero, banners" },
  { nombre: "--shadow-card", valor: "0 4px 20px rgba(0,0,0,.08)", uso: "Elevación de tarjetas" },
];

const PROYECTOS_DEMO = [
  { titulo: "App de tareas", stack: "HTML · CSS Grid · JS", color: "#6366f1" },
  { titulo: "Landing SaaS", stack: "HTML · Tailwind · Forms", color: "#8b5cf6" },
  { titulo: "Dashboard", stack: "HTML · CSS Grid Areas", color: "#0ea5e9" },
  { titulo: "Blog personal", stack: "HTML · CSS · Tipografía", color: "#10b981" },
  { titulo: "E-commerce", stack: "HTML · Bootstrap 5", color: "#f59e0b" },
  { titulo: "Portfolio v1", stack: "CSS puro · Flexbox", color: "#ef4444" },
];

const CHECKLIST = [
  {
    categoria: "Estructura HTML",
    items: [
      "header > nav con logo y links de navegación",
      "main con secciones semánticas (section, article)",
      "Atributos aria-label donde haga falta",
      "Navegación accesible con skip-link",
      "footer con datos de contacto y redes",
    ],
  },
  {
    categoria: "Variables CSS",
    items: [
      "Paleta de color definida en :root",
      "Escala tipográfica con variables",
      "Espaciados con tokens (--space-*)",
      "Radios de borde consistentes (--radius-*)",
      "Soporte opcional: modo oscuro (prefers-color-scheme)",
    ],
  },
  {
    categoria: "Grid Areas (layout principal)",
    items: [
      "grid-template-areas definido con nombres claros",
      "Cada sección tiene grid-area asignado",
      "Layout de escritorio: ≥ 3 columnas",
      "media queries adaptan areas a tablet y móvil",
      "Sidebar o columna lateral opcional",
    ],
  },
  {
    categoria: "Flexbox (componentes internos)",
    items: [
      "Tarjetas de proyectos con Flexbox (columna)",
      "Barra de navegación con Flexbox (row)",
      "Grid de skills con flex-wrap",
      "Footer con Flexbox para columnas",
      "Centrado vertical en hero",
    ],
  },
  {
    categoria: "Responsive",
    items: [
      "Mobile-first: base CSS sin @media",
      "Breakpoint sm (640px): ajustes de layout",
      "Breakpoint md (768px): dos columnas",
      "Breakpoint lg (1024px): grid areas completo",
      "Imágenes con max-width: 100%",
    ],
  },
  {
    categoria: "Accesibilidad y calidad",
    items: [
      "Contraste mínimo 4.5:1 en texto normal",
      "Focus visible en todos los elementos interactivos",
      "Jerarquía h1 → h2 → h3 coherente",
      "Textos alternativos en imágenes",
      "Validado con Lighthouse > 90 accesibilidad",
    ],
  },
];

export default function E20_Portfolio_Final() {
  useEffect(() => {
    document.title = "E20 · Portfolio final con Grid Areas — Ejercicios CSS";
  }, []);

  const [seccionActiva, setSeccionActiva] = useState("header");
  const [checkItems, setCheckItems] = useState({});

  const toggleCheck = (key) =>
    setCheckItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const totalItems = CHECKLIST.reduce((a, c) => a + c.items.length, 0);
  const completados = Object.values(checkItems).filter(Boolean).length;
  const porcentaje = Math.round((completados / totalItems) * 100);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ════════════ HERO ════════════ */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E20 · Proyecto final · CSS completo · 4–6h</p>
        <h1>⭐ Portfolio completo con Grid Areas</h1>
        <p className="doc-lead">
          El ejercicio donde <strong>todo converge</strong>. Maqueta un portfolio profesional desde
          cero usando Grid Areas para el layout, variables CSS para los tokens de diseño, Flexbox
          para los componentes internos y media queries para el responsive. No hay solución única —
          es <strong>tu diseño, tu código, tu portfolio</strong>.
        </p>
        <div className="callout tip">
          ⭐ <strong>Ejercicio de integración:</strong> Este ejercicio no tiene una solución
          correcta única. El objetivo es que apliques de forma coherente y razonada todo lo
          aprendido. El código ha de ser tuyo — nada de copiar plantillas.
        </div>

        {/* Índice */}
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · Planificación del portfolio</a></li>
            <li><a href="#paso-2">Paso 2 · Variables CSS y tokens de diseño</a></li>
            <li><a href="#paso-3">Paso 3 · HTML semántico base</a></li>
            <li><a href="#paso-4">Paso 4 · Grid Areas: layout principal</a></li>
            <li><a href="#paso-5">Paso 5 · Sección Hero</a></li>
            <li><a href="#paso-6">Paso 6 · Sección Proyectos</a></li>
            <li><a href="#paso-7">Paso 7 · Responsive mobile-first</a></li>
            <li><a href="#paso-8">Paso 8 · Accesibilidad y pulido final</a></li>
            <li><a href="#paso-9">Paso 9 · Checklist final</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · Planificación del portfolio</summary>
          <div className="dd-body">
            <p>
              Antes de escribir una sola línea de CSS, define en papel (o en un documento) la
              estructura de tu portfolio. Un portfolio básico tiene estas <strong>7 secciones</strong>:
            </p>

            {/* Visual de secciones */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                gap: "0.75rem",
                margin: "1.5rem 0",
              }}
            >
              {SECCIONES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setSeccionActiva(s.id)}
                  style={{
                    background: seccionActiva === s.id ? s.color : "var(--surface-raised)",
                    color: seccionActiva === s.id ? s.texto : "var(--text-primary)",
                    border: `2px solid ${s.color}`,
                    borderRadius: "var(--radius-md, 8px)",
                    padding: "0.75rem",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    transition: "all .2s",
                    textAlign: "center",
                  }}
                >
                  {i + 1}. {s.label}
                </button>
              ))}
            </div>

            {/* Descripción de sección activa */}
            {seccionActiva === "header" && (
              <div className="callout">
                <strong>Header / Nav:</strong> Logo o nombre, links de navegación (Inicio, Proyectos, Sobre mí, Contacto).
                Usa <code>position: sticky; top: 0</code> para que quede fija al hacer scroll. Flexbox para alinear logo y links.
              </div>
            )}
            {seccionActiva === "hero" && (
              <div className="callout">
                <strong>Hero:</strong> Tu nombre grande, título profesional, descripción breve (2–3 líneas) y un botón CTA
                ("Ver proyectos" o "Contáctame"). Opcionalmente una foto o ilustración. Flexbox con alineación central.
              </div>
            )}
            {seccionActiva === "about" && (
              <div className="callout">
                <strong>Sobre mí:</strong> Párrafo personal, foto y lista de datos clave (localización, disponibilidad, idiomas).
                Dos columnas con Grid o Flexbox en desktop, una columna en móvil.
              </div>
            )}
            {seccionActiva === "skills" && (
              <div className="callout">
                <strong>Habilidades:</strong> Listado de tecnologías con iconos o badges. Flex-wrap para que se adapten.
                Agrúpalas por categoría: Frontend, Herramientas, Diseño, etc.
              </div>
            )}
            {seccionActiva === "projects" && (
              <div className="callout">
                <strong>Proyectos:</strong> Grid de tarjetas. Cada tarjeta: captura o emoji, título, descripción breve,
                stack de tecnologías y link al repositorio / demo. Auto-fill con minmax() para responsive automático.
              </div>
            )}
            {seccionActiva === "contact" && (
              <div className="callout">
                <strong>Contacto:</strong> Formulario simple (nombre, email, mensaje) con los estilos del E08.
                O simplemente links directos a email y redes sociales con iconos.
              </div>
            )}
            {seccionActiva === "footer" && (
              <div className="callout">
                <strong>Footer:</strong> Copyright, links de redes, créditos. Dos o tres columnas en desktop.
                Tipografía pequeña, fondo oscuro o sutil. Flex en columna en móvil, en fila en desktop.
              </div>
            )}

            <div className="callout tip" style={{ marginTop: "1.5rem" }}>
              💡 <strong>Truco de planificación:</strong> Dibuja el wireframe en papel antes de tocar el teclado.
              Tres rectángulos: móvil, tablet, desktop. Eso marca la estructura del grid y los breakpoints.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · Variables CSS y tokens de diseño</summary>
          <div className="dd-body">
            <p>
              Empieza el CSS definiendo <strong>todos los tokens en <code>:root</code></strong> antes
              de escribir ninguna regla de layout. Así un solo cambio actualiza toda la página.
            </p>
            <pre><code>{`:root {
  /* ── Colores ── */
  --color-primary:   #6366f1;
  --color-secondary: #8b5cf6;
  --color-accent:    #0ea5e9;
  --color-text:      #1e293b;
  --color-text-muted:#64748b;
  --color-bg:        #f8fafc;
  --color-surface:   #ffffff;
  --color-border:    #e2e8f0;

  /* ── Tipografía ── */
  --font-sans:    'Inter', system-ui, sans-serif;
  --font-heading: 'Plus Jakarta Sans', var(--font-sans);
  --fs-sm:   0.875rem;
  --fs-base: 1rem;
  --fs-lg:   1.125rem;
  --fs-xl:   1.25rem;
  --fs-2xl:  1.5rem;
  --fs-3xl:  1.875rem;
  --fs-4xl:  2.25rem;
  --fs-5xl:  3rem;

  /* ── Espaciado ── */
  --space-xs:  0.25rem;
  --space-sm:  0.5rem;
  --space-md:  1rem;
  --space-lg:  2rem;
  --space-xl:  4rem;
  --space-2xl: 6rem;

  /* ── Bordes y sombras ── */
  --radius-sm:   0.375rem;
  --radius-md:   0.75rem;
  --radius-lg:   1.5rem;
  --radius-full: 9999px;
  --shadow-sm:   0 1px 3px rgba(0,0,0,.08);
  --shadow-md:   0 4px 20px rgba(0,0,0,.08);
  --shadow-lg:   0 10px 40px rgba(0,0,0,.12);

  /* ── Transiciones ── */
  --transition: 200ms ease;
}

/* Modo oscuro opcional */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text:    #f1f5f9;
    --color-bg:      #0f172a;
    --color-surface: #1e293b;
    --color-border:  #334155;
  }
}`}</code></pre>

            <p>Referencia rápida de las variables clave:</p>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Variable</th>
                    <th>Valor por defecto</th>
                    <th>Uso</th>
                  </tr>
                </thead>
                <tbody>
                  {VARIABLES.map((v) => (
                    <tr key={v.nombre}>
                      <td><code>{v.nombre}</code></td>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          {v.valor.startsWith("#") && (
                            <span
                              style={{
                                display: "inline-block",
                                width: "0.875rem",
                                height: "0.875rem",
                                borderRadius: "3px",
                                background: v.valor,
                                border: "1px solid var(--border-subtle)",
                                flexShrink: 0,
                              }}
                            />
                          )}
                          <code style={{ fontSize: "0.8rem" }}>{v.valor}</code>
                        </span>
                      </td>
                      <td style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{v.uso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · HTML semántico base</summary>
          <div className="dd-body">
            <p>
              La estructura HTML del portfolio sigue el flujo natural del documento. Cada sección tiene
              su etiqueta semántica y sus atributos de accesibilidad.
            </p>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio de [Tu nombre] — desarrollador/a web" />
  <title>[Tu nombre] · Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <!-- Skip link para accesibilidad -->
  <a href="#main" class="skip-link">Saltar al contenido</a>

  <!-- ── HEADER / NAV ── -->
  <header class="site-header" role="banner">
    <nav class="nav" aria-label="Navegación principal">
      <a href="#" class="nav__logo" aria-label="Ir al inicio">
        <span aria-hidden="true">✦</span> TuNombre
      </a>
      <ul class="nav__links" role="list">
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contacto" class="btn-nav">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <!-- ── MAIN ── -->
  <main id="main" class="portfolio-grid">

    <!-- Hero -->
    <section class="hero" aria-label="Presentación">
      <div class="hero__content">
        <p class="hero__kicker">Hola, soy</p>
        <h1 class="hero__name">Tu Nombre</h1>
        <p class="hero__role">Desarrollador/a web Frontend</p>
        <p class="hero__bio">
          Apasionado/a del CSS, los layouts responsivos y la experiencia de usuario.
          Construyo interfaces accesibles y bonitas desde cero.
        </p>
        <div class="hero__ctas">
          <a href="#proyectos" class="btn btn--primary">Ver proyectos</a>
          <a href="#contacto" class="btn btn--outline">Contactar</a>
        </div>
      </div>
      <div class="hero__image" aria-hidden="true">
        <!-- Foto o ilustración -->
      </div>
    </section>

    <!-- Sobre mí -->
    <section class="about" id="sobre-mi" aria-labelledby="about-title">
      <h2 id="about-title">Sobre mí</h2>
      <!-- contenido -->
    </section>

    <!-- Skills -->
    <section class="skills" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">Habilidades</h2>
      <!-- lista de skills -->
    </section>

    <!-- Proyectos -->
    <section class="projects" id="proyectos" aria-labelledby="projects-title">
      <h2 id="projects-title">Proyectos</h2>
      <div class="projects__grid">
        <!-- tarjetas -->
      </div>
    </section>

    <!-- Contacto -->
    <section class="contact" id="contacto" aria-labelledby="contact-title">
      <h2 id="contact-title">Contacto</h2>
      <!-- formulario -->
    </section>

  </main>

  <!-- ── FOOTER ── -->
  <footer class="site-footer" role="contentinfo">
    <p>© 2026 Tu Nombre · Hecho con HTML y CSS puro</p>
  </footer>

</body>
</html>`}</code></pre>
            <div className="callout">
              🔑 <strong>Puntos clave del HTML:</strong> <code>lang="es"</code> en el html,
              <code>role="banner"</code> en el header, <code>role="contentinfo"</code> en el footer,
              <code>aria-labelledby</code> en cada sección y el <strong>skip-link</strong> siempre al principio del body.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · Grid Areas: layout principal</summary>
          <div className="dd-body">
            <p>
              El <code>.portfolio-grid</code> es el corazón del layout. Usamos{" "}
              <code>grid-template-areas</code> para mapear visualmente las secciones antes de escribir
              el CSS de cada una.
            </p>

            {/* Visual del layout */}
            <div style={{ margin: "1.5rem 0" }}>
              <h3 style={{ fontSize: "0.9rem", marginBottom: "0.75rem", color: "var(--text-secondary)" }}>
                Vista del layout en desktop (≥ 1024px):
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateAreas: `
                    "header header header"
                    "hero hero sidebar"
                    "about about sidebar"
                    "skills projects projects"
                    "contact contact contact"
                    "footer footer footer"
                  `,
                  gridTemplateColumns: "1fr 1fr 280px",
                  gridTemplateRows: "auto minmax(300px,auto) auto auto auto auto",
                  gap: "4px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {[
                  { area: "header", label: "header", bg: "#6366f1" },
                  { area: "hero", label: "hero", bg: "#8b5cf6" },
                  { area: "sidebar", label: "sidebar (foto / datos)", bg: "#0ea5e9" },
                  { area: "about", label: "about", bg: "#0284c7" },
                  { area: "skills", label: "skills", bg: "#10b981" },
                  { area: "projects", label: "projects", bg: "#f59e0b" },
                  { area: "contact", label: "contact", bg: "#ef4444" },
                  { area: "footer", label: "footer", bg: "#64748b" },
                ].map((z) => (
                  <div
                    key={z.area}
                    style={{
                      gridArea: z.area,
                      background: z.bg,
                      color: "#fff",
                      padding: "0.75rem 1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    .{z.label}
                  </div>
                ))}
              </div>
            </div>

            <pre><code>{`/* ── GRID ÁREAS DEL PORTFOLIO ── */
.portfolio-grid {
  display: grid;
  grid-template-areas:
    "header  header   header"
    "hero    hero     sidebar"
    "about   about    sidebar"
    "skills  projects projects"
    "contact contact  contact"
    "footer  footer   footer";
  grid-template-columns: 1fr 1fr 280px;
  grid-template-rows:
    auto
    minmax(400px, auto)
    auto
    auto
    auto
    auto;
  min-height: 100vh;
}

/* Asignación de áreas */
.site-header { grid-area: header;   }
.hero        { grid-area: hero;     }
.sidebar     { grid-area: sidebar;  }
.about       { grid-area: about;    }
.skills      { grid-area: skills;   }
.projects    { grid-area: projects; }
.contact     { grid-area: contact;  }
.site-footer { grid-area: footer;   }`}</code></pre>

            <div className="callout tip">
              💡 <strong>Pro-tip:</strong> Usa exactamente el mismo nombre en el <code>grid-template-areas</code>
              y en la propiedad <code>grid-area</code> del elemento. Si los nombres no coinciden el árbol de área
              no se asigna y el elemento vuelve al flujo normal.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Sección Hero</summary>
          <div className="dd-body">
            <p>
              El Hero es la primera impresión. Debe communicar quién eres en menos de 5 segundos.
              Usamos Flexbox para alinear el contenido y variables CSS para los colores.
            </p>
            <pre><code>{`/* ── HERO ── */
.hero {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  padding: var(--space-xl) var(--space-lg);
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  color: #fff;
  position: relative;
  overflow: hidden;
}

/* Decoración de fondo */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,…") center / cover;
  opacity: 0.05;
  pointer-events: none;
}

.hero__content {
  flex: 1;
  min-width: 0;
}

.hero__kicker {
  font-size: var(--fs-lg);
  opacity: 0.8;
  margin-bottom: var(--space-xs);
}

.hero__name {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, var(--fs-5xl));
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 var(--space-sm);
}

.hero__role {
  font-size: var(--fs-xl);
  opacity: 0.9;
  margin-bottom: var(--space-md);
}

.hero__bio {
  font-size: var(--fs-base);
  line-height: 1.7;
  max-width: 50ch;
  opacity: 0.85;
  margin-bottom: var(--space-lg);
}

.hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

/* Botones del hero */
.btn--primary {
  background: #fff;
  color: var(--color-primary);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  text-decoration: none;
  transition: transform var(--transition), box-shadow var(--transition);
}

.btn--primary:hover,
.btn--primary:focus-visible {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn--outline {
  border: 2px solid rgba(255,255,255,.6);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  text-decoration: none;
  font-weight: 600;
  transition: background var(--transition), border-color var(--transition);
}

.btn--outline:hover,
.btn--outline:focus-visible {
  background: rgba(255,255,255,.1);
  border-color: #fff;
}`}</code></pre>

            <div className="callout">
              🎨 <strong>Nota sobre <code>clamp()</code>:</strong> <code>font-size: clamp(2.5rem, 5vw, 3rem)</code>
              hace el título fluido sin media queries. El tamaño crece con el viewport pero nunca supera el máximo
              ni baja del mínimo.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Sección Proyectos</summary>
          <div className="dd-body">
            <p>
              La galería de proyectos usa CSS Grid con <code>auto-fill + minmax()</code> para ser
              responsive sin media queries. Cada tarjeta tiene Flexbox en columna para organizar su contenido.
            </p>

            {/* Demo de tarjetas */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1rem",
                margin: "1.5rem 0",
              }}
            >
              {PROYECTOS_DEMO.map((p) => (
                <article
                  key={p.titulo}
                  style={{
                    background: "var(--surface-raised, #fff)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 2px 8px rgba(0,0,0,.06)",
                  }}
                >
                  <div
                    style={{
                      background: p.color,
                      height: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                    }}
                  >
                    💻
                  </div>
                  <div style={{ padding: "0.875rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <h3 style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700 }}>{p.titulo}</h3>
                    <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-secondary)" }}>{p.stack}</p>
                    <a
                      href="#"
                      style={{
                        marginTop: "auto",
                        fontSize: "0.75rem",
                        color: p.color,
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      Ver proyecto →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <pre><code>{`/* ── GRID DE PROYECTOS ── */
.projects {
  padding: var(--space-xl) var(--space-lg);
}

.projects h2 {
  font-family: var(--font-heading);
  font-size: var(--fs-3xl);
  margin-bottom: var(--space-lg);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-lg);
}

/* ── TARJETA DE PROYECTO ── */
.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition), box-shadow var(--transition);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.project-card__thumb {
  aspect-ratio: 16 / 9;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  overflow: hidden;
}

.project-card__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__body {
  padding: var(--space-md);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.project-card__title {
  font-size: var(--fs-lg);
  font-weight: 700;
  margin: 0;
}

.project-card__desc {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
  flex: 1;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.project-card__tag {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-full);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
}

.project-card__links {
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-xs);
}

.project-card__link {
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  padding: 0.375rem 0.75rem;
  border: 1.5px solid var(--color-primary);
  border-radius: var(--radius-sm);
  transition: background var(--transition), color var(--transition);
}

.project-card__link:hover,
.project-card__link:focus-visible {
  background: var(--color-primary);
  color: #fff;
}`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Responsive mobile-first</summary>
          <div className="dd-body">
            <p>
              El layout de Grid Areas se adapta en cada breakpoint reorganizando las áreas.
              Recuerda: el CSS base es para móvil, los <code>@media</code> amplían hacia arriba.
            </p>
            <pre><code>{`/* ══════════════════════════════
   BASE (móviles < 640px)
   Todo en una columna, sin grid areas
══════════════════════════════ */
.portfolio-grid {
  display: grid;
  grid-template-areas:
    "header"
    "hero"
    "about"
    "skills"
    "projects"
    "contact"
    "footer";
  grid-template-columns: 1fr;
}

/* El sidebar desaparece en móvil */
.sidebar { display: none; }

/* Navigation en móvil: hamburguesa */
.nav {
  flex-direction: column;
  gap: var(--space-sm);
}

.hero {
  flex-direction: column;
  text-align: center;
  padding: var(--space-xl) var(--space-md);
}

.hero__ctas {
  justify-content: center;
}

/* ══════════════════════════════
   TABLET (≥ 640px)
══════════════════════════════ */
@media (min-width: 640px) {
  .portfolio-grid {
    grid-template-areas:
      "header  header"
      "hero    hero"
      "about   skills"
      "projects projects"
      "contact contact"
      "footer  footer";
    grid-template-columns: 1fr 1fr;
  }

  .nav {
    flex-direction: row;
    justify-content: space-between;
  }

  .hero {
    text-align: left;
    flex-direction: row;
  }
}

/* ══════════════════════════════
   LAPTOP (≥ 768px)
══════════════════════════════ */
@media (min-width: 768px) {
  .portfolio-grid {
    grid-template-areas:
      "header  header  header"
      "hero    hero    about"
      "skills  skills  about"
      "projects projects projects"
      "contact contact contact"
      "footer  footer  footer";
    grid-template-columns: 1fr 1fr 300px;
  }

  .sidebar { display: block; }
}

/* ══════════════════════════════
   ESCRITORIO (≥ 1024px) — layout completo
══════════════════════════════ */
@media (min-width: 1024px) {
  .portfolio-grid {
    grid-template-areas:
      "header  header   header"
      "hero    hero     sidebar"
      "about   about    sidebar"
      "skills  projects projects"
      "contact contact  contact"
      "footer  footer   footer";
    grid-template-columns: 1fr 1fr 280px;
  }
}

/* ══════════════════════════════
   WIDE (≥ 1280px)
══════════════════════════════ */
@media (min-width: 1280px) {
  .portfolio-grid {
    grid-template-areas:
      "header  header  header  header"
      "hero    hero    sidebar sidebar"
      "about   skills  sidebar sidebar"
      "projects projects projects projects"
      "contact contact contact contact"
      "footer  footer  footer  footer";
    grid-template-columns: 1fr 1fr 1fr 280px;
    max-width: 1400px;
    margin: 0 auto;
  }
}`}</code></pre>

            <div className="callout tip">
              📐 <strong>Regla de oro mobile-first:</strong> Si usas <code>min-width</code> en los
              media queries, estás haciendo mobile-first correctamente. El CSS base (sin media query) es el móvil.
              Cada <code>@media</code> añade complejidad hacia pantallas más grandes.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 8 ════════════ */}
      <section className="doc-section" id="paso-8">
        <details className="dd" open>
          <summary>Paso 8 · Accesibilidad y pulido final</summary>
          <div className="dd-body">
            <p>
              Antes de publicar el portfolio, pasa por esta lista de verificación de accesibilidad.
              Un portfolio accesible demuestra que te importa la calidad del código.
            </p>
            <pre><code>{`/* ── FOCUS VISIBLE ── */
*:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}

/* Eliminar outline solo si hay :focus-visible */
*:focus:not(:focus-visible) {
  outline: none;
}

/* ── SKIP LINK ── */
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-md);
  background: var(--color-primary);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  text-decoration: none;
  font-weight: 600;
  z-index: 9999;
  transition: top var(--transition);
}

.skip-link:focus {
  top: 0;
}

/* ── CONTRASTE ── */
/* Verifica siempre con:
   https://webaim.org/resources/contrastchecker/
   Mínimo 4.5:1 para texto normal, 3:1 para texto grande */

/* ── MOTION REDUCIDA ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* ── IMÁGENES RESPONSIVAS ── */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Foto de perfil con aspect-ratio */
.avatar {
  width: 200px;
  aspect-ratio: 1;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 4px solid var(--color-surface);
  box-shadow: var(--shadow-md);
}`}</code></pre>

            <div className="callout">
              🔍 <strong>Herramientas de verificación:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li>
                  <a href="https://web.dev/measure/" target="_blank" rel="noreferrer">web.dev/measure</a> → Lighthouse completo
                </li>
                <li>
                  <a href="https://wave.webaim.org/" target="_blank" rel="noreferrer">wave.webaim.org</a> → Accesibilidad visual
                </li>
                <li>
                  <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noreferrer">WebAIM Contrast Checker</a> → Contraste de color
                </li>
                <li>DevTools → Pestaña Lighthouse → Accessibility ≥ 90</li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 9 · CHECKLIST INTERACTIVO ════════════ */}
      <section className="doc-section" id="paso-9">
        <details className="dd" open>
          <summary>Paso 9 · Checklist final interactivo</summary>
          <div className="dd-body">
            <p>
              Marca cada punto conforme lo completes en tu portfolio. Progreso actual:{" "}
              <strong>{completados}/{totalItems}</strong> puntos.
            </p>

            {/* Barra de progreso */}
            <div
              style={{
                background: "var(--surface-primary, #f1f5f9)",
                borderRadius: "9999px",
                height: "12px",
                overflow: "hidden",
                margin: "0.75rem 0 1.5rem",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${porcentaje}%`,
                  background:
                    porcentaje === 100
                      ? "#10b981"
                      : porcentaje > 50
                      ? "#6366f1"
                      : "#f59e0b",
                  borderRadius: "9999px",
                  transition: "width 0.4s ease",
                }}
              />
            </div>
            {porcentaje === 100 && (
              <div className="callout tip" style={{ marginBottom: "1.5rem" }}>
                🎉 <strong>¡Portfolio completado!</strong> Felicidades — has terminado el ejercicio
                más completo del manual. Ahora compártelo, ponlo en GitHub Pages y úsalo como
                carta de presentación.
              </div>
            )}

            {CHECKLIST.map((cat) => (
              <div key={cat.categoria} style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  {cat.categoria}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {cat.items.map((item) => {
                    const key = `${cat.categoria}:${item}`;
                    const checked = !!checkItems[key];
                    return (
                      <li key={key}>
                        <label
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.625rem",
                            cursor: "pointer",
                            fontSize: "0.875rem",
                            color: checked ? "var(--text-tertiary, #94a3b8)" : "var(--text-primary)",
                            textDecoration: checked ? "line-through" : "none",
                            padding: "0.25rem 0",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleCheck(key)}
                            style={{ marginTop: "2px", accentColor: "#6366f1", flexShrink: 0 }}
                          />
                          {item}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <div className="callout tip" style={{ marginTop: "1rem" }}>
              🚀 <strong>¿Siguiente paso?</strong> Publica tu portfolio en{" "}
              <a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages</a> (gratis).
              Solo necesitas un repo público y activar Pages en Settings → Pages → Deploy from branch.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ CONEXIÓN CON LECCIONES ════════════ */}
      <section className="doc-section">
        <details className="dd">
          <summary>📚 Lecciones del manual que refuerzan este ejercicio</summary>
          <div className="dd-body">
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Concepto aplicado</th>
                    <th>Lección</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Variables CSS (:root, var())", "V12 Variables CSS — Custom Properties"],
                    ["Grid Areas y grid-template-areas", "V23 Grid Areas y Layouts"],
                    ["Flexbox (nav, hero, cards)", "V19 Flexbox I + V20 Flexbox II"],
                    ["Media queries mobile-first", "V34 Media Queries + V35 Responsive"],
                    ["Tipografía y legibilidad", "V13 Texto I + V15 Tipografía"],
                    ["Box model y espaciado", "V16 Box Model + Box Sizing"],
                    ["Botones y estados interactivos", "V28 Vínculos y Botones"],
                    ["Formulario de contacto", "V31 Formularios Accesibles"],
                    ["Accesibilidad CSS", "V36 Accesibilidad CSS"],
                    ["Posicionamiento (nav sticky)", "V32 Overlays + V33 Z-index"],
                    ["Imágenes responsivas", "V24 Imágenes I + V25 Imágenes II"],
                    ["Fondos y gradientes (hero)", "V27 Fondos y Gradientes"],
                  ].map(([concepto, leccion]) => (
                    <tr key={concepto}>
                      <td><strong>{concepto}</strong></td>
                      <td style={{ fontSize: "0.875rem" }}>{leccion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ CIERRE ════════════ */}
      <section className="doc-section">
        <div className="callout tip">
          ✅ <strong>Has llegado al final del manual.</strong> El E20 no tiene una solución
          correcta — tiene <em>tu</em> solución. Tómate el tiempo que necesites, itera el
          diseño, pruébalo en móvil real y compártelo. Eso es lo que importa.
        </div>

        <div className="doc-next">
          <Link to="/ejercicios/e19-tailwind-grid" className="btn">
            ← E19 Tailwind Grid
          </Link>
          <Link to="/ejercicios" className="btn btn-primary">
            Ver todos los ejercicios
          </Link>
        </div>
      </section>
    </main>
  );
}
