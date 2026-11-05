import { useEffect } from "react";
import { Link } from "react-router-dom";

// =============================================================
//  LANDING DE EJERCICIOS — 20 retos progresivos
//  HTML · CSS · Bootstrap · Tailwind
//  Nivel: inicial → intermedio · Progresión gradual y motivadora
// =============================================================

// ── Datos de los ejercicios ───────────────────────────────────
const NIVELES = [
  {
    id: "nivel-1",
    titulo: "Nivel 1 · Primeros pasos con HTML y CSS puro",
    descripcion:
      "Sin frameworks. Solo HTML semántico y las propiedades CSS esenciales. El objetivo es que entiendas el modelo mental antes de añadir herramientas.",
    color: "success",
    ejercicios: [
      {
        num: "E01",
        titulo: "Tarjeta de perfil",
        desc: "Crea una tarjeta de perfil (avatar, nombre, rol, bio). Practica box-model, colores, bordes y border-radius sin Flexbox todavía.",
        skills: ["box-model", "color", "border-radius", "unidades"],
        dificultad: "Inicial",
        horas: "1h",
        ruta: "/ejercicios/e01-tarjeta-perfil",
      },
      {
        num: "E02",
        titulo: "Tipografía y paleta de colores",
        desc: "Diseña una pequeña guía de estilos: titulares h1–h4, párrafo, strong, em, citas. Elige fuente de Google Fonts y define tu paleta.",
        skills: ["font-family", "font-size", "line-height", "color"],
        dificultad: "Inicial",
        horas: "1h",
        ruta: "/ejercicios/e02-tipografia",
      },
      {
        num: "E03",
        titulo: "Menú horizontal con hover",
        desc: "Convierte una lista ul > li en un menú de navegación horizontal. Añade estado hover con transición suave de color y fondo.",
        skills: ["display", "list-style", ":hover", "transition"],
        dificultad: "Inicial",
        horas: "1h",
        ruta: "/ejercicios/e03-menu-hover",
      },
      {
        num: "E04",
        titulo: "Botones con todos sus estados",
        desc: "Crea un conjunto de botones (primario, secundario, peligro). Estila :hover, :focus-visible, :active y :disabled con accesibilidad.",
        skills: [":hover", ":focus-visible", ":active", ":disabled"],
        dificultad: "Inicial",
        horas: "1–2h",
        ruta: "/ejercicios/e04-botones",
      },
      {
        num: "E05",
        titulo: "Variables CSS: tema de color",
        desc: "Define --color-primary, --space-md y demás custom properties en :root. Úsalas en toda la página para que un solo cambio actualice todo.",
        skills: ["--custom-properties", ":root", "var()", "tokens"],
        dificultad: "Inicial",
        horas: "1h",
        ruta: "/ejercicios/e05-variables-css",
      },
    ],
  },
  {
    id: "nivel-2",
    titulo: "Nivel 2 · Flexbox y Grid básico",
    descripcion:
      "El salto más importante del CSS moderno. Centra, distribuye y crea layouts sin trucos raros. Aquí el CSS empieza a sentirse lógico.",
    color: "primary",
    ejercicios: [
      {
        num: "E06",
        titulo: "Flexbox: centra y distribuye",
        desc: "Crea un hero section con imagen y texto alineados con Flexbox. Practica justify-content, align-items y flex-direction.",
        skills: ["flexbox", "justify-content", "align-items", "gap"],
        dificultad: "Básico",
        horas: "1h",
        ruta: "/ejercicios/e06-flexbox-basico",
      },
      {
        num: "E07",
        titulo: "Galería de tarjetas con Flexbox",
        desc: "Seis tarjetas de producto con imagen, título y precio. Usa flex-wrap y gap para que se reorganicen solas al cambiar el ancho.",
        skills: ["flex-wrap", "flex-grow", "min-width", "gap"],
        dificultad: "Básico",
        horas: "2h",
        ruta: "/ejercicios/e07-galeria-flex",
      },
      {
        num: "E08",
        titulo: "Formulario accesible estilizado",
        desc: "Maqueta un formulario de contacto con label, input, textarea y botón. Cuida :focus-visible, contraste y mensajes de error visibles.",
        skills: ["form", ":focus-visible", "accesibilidad", "label"],
        dificultad: "Básico",
        horas: "2h",
        ruta: "/ejercicios/e08-formulario",
      },
      {
        num: "E09",
        titulo: "Grid básico: galería responsive",
        desc: "Crea una galería de 9 imágenes con CSS Grid. Usa repeat() y auto-fill con minmax() para que sea responsive sin media queries.",
        skills: ["grid", "repeat()", "auto-fill", "minmax()"],
        dificultad: "Básico",
        horas: "1–2h",
        ruta: "/ejercicios/e09-grid-galeria",
      },
      {
        num: "E10",
        titulo: "Grid con fracciones: layout de página",
        desc: "Maqueta un layout completo (header, sidebar, main, footer) usando fr, grid-column y grid-row. El layout clásico que aparece en proyectos reales.",
        skills: ["fr", "grid-column", "grid-row", "grid-template"],
        dificultad: "Básico",
        horas: "2h",
        ruta: "/ejercicios/e10-grid-layout",
      },
    ],
  },
  {
    id: "nivel-3",
    titulo: "Nivel 3 · Bootstrap 5: del prototipo al producto",
    descripcion:
      "Ahora que entiendes CSS de verdad, Bootstrap tiene sentido. Aprenderás a usarlo sin depender de él ciegamente y a personalizarlo con tus propias variables.",
    color: "secondary",
    ejercicios: [
      {
        num: "E11",
        titulo: "Bootstrap: primera maqueta con el grid",
        desc: "Traslada el layout del E10 a Bootstrap usando container, row y col-*. Compara el resultado con tu CSS a mano para entender qué hace Bootstrap por debajo.",
        skills: ["container", "row", "col-*", "breakpoints"],
        dificultad: "Intermedio",
        tecnologia: "Bootstrap 5",
        horas: "1–2h",
        ruta: "/ejercicios/e11-bootstrap-grid",
      },
      {
        num: "E12",
        titulo: "Bootstrap: navbar responsive con toggler",
        desc: "Monta una barra de navegación completa con logo, links y menú hamburguesa. Sin tocar JS: Bootstrap lo gestiona con data-bs-*.",
        skills: ["navbar", "collapse", "toggler", "data-bs-*"],
        dificultad: "Intermedio",
        tecnologia: "Bootstrap 5",
        horas: "2h",
        ruta: "/ejercicios/e12-bootstrap-navbar",
      },
      {
        num: "E13",
        titulo: "Bootstrap: cards, badges y botones",
        desc: "Crea una sección de productos con las clases card de Bootstrap. Añade badges de disponibilidad y botones con variantes (primary, outline, danger).",
        skills: ["card", "badge", "btn", "utilities"],
        dificultad: "Intermedio",
        tecnologia: "Bootstrap 5",
        horas: "1–2h",
        ruta: "/ejercicios/e13-bootstrap-cards",
      },
      {
        num: "E14",
        titulo: "Bootstrap: formulario con validación visual",
        desc: "Rehaz el formulario del E08 con las clases Bootstrap. Activa los estados is-valid e is-invalid y el feedback de error descriptivo.",
        skills: ["form-control", "is-valid", "is-invalid", "feedback"],
        dificultad: "Intermedio",
        tecnologia: "Bootstrap 5",
        horas: "2h",
        ruta: "/ejercicios/e14-bootstrap-forms",
      },
      {
        num: "E15",
        titulo: "Bootstrap: landing page completa",
        desc: "Maqueta una landing real: hero con CTA, sección de 3 features en grid, fila de testimonios y footer de dos columnas. Todo responsive.",
        skills: ["grid Bootstrap", "hero", "components", "responsive"],
        dificultad: "Intermedio",
        tecnologia: "Bootstrap 5",
        horas: "3–4h",
        ruta: "/ejercicios/e15-bootstrap-landing",
      },
    ],
  },
  {
    id: "nivel-4",
    titulo: "Nivel 4 · Grid Areas, Responsive y Tailwind",
    descripcion:
      "El nivel más avanzado del bloque. Grid areas para layouts editoriales complejos, responsive mobile-first, y tu primer contacto práctico con Tailwind.",
    color: "warning",
    ejercicios: [
      {
        num: "E16",
        titulo: "Grid areas: layout de revista",
        desc: "Diseña un layout de blog/revista con grid-template-areas. Define zonas: portada grande, artículos secundarios, columna lateral y pie.",
        skills: ["grid-template-areas", "grid-area", "named areas", "fr"],
        dificultad: "Avanzado",
        horas: "2–3h",
        ruta: "/ejercicios/e16-grid-areas",
      },
      {
        num: "E17",
        titulo: "Responsive mobile-first completo",
        desc: "Parte del E15 o E16 y aplica media queries mobile-first. Primero el móvil, luego tablet y escritorio. Usa min-width y variables que cambian con el breakpoint.",
        skills: ["@media", "min-width", "mobile-first", "custom properties"],
        dificultad: "Avanzado",
        horas: "2–3h",
        ruta: "/ejercicios/e17-responsive-mobile-first",
      },
      {
        num: "E18",
        titulo: "Tailwind: hero utility-first",
        desc: "Tu primer contacto real con Tailwind. Recrea el hero del E06 usando solo clases de utilidad. Reflexiona sobre las diferencias filosóficas con Bootstrap y CSS puro.",
        skills: ["utility-first", "flex", "text-*", "bg-*"],
        dificultad: "Avanzado",
        tecnologia: "Tailwind CSS",
        horas: "1–2h",
        ruta: "/ejercicios/e18-tailwind-hero",
      },
      {
        num: "E19",
        titulo: "Tailwind + Grid: página responsive",
        desc: "Recrea la galería del E09 y el layout del E10 usando Tailwind Grid. Compara el flujo de trabajo con CSS Grid mano a mano.",
        skills: ["grid-cols-*", "gap-*", "sm:", "md:", "lg:"],
        dificultad: "Avanzado",
        tecnologia: "Tailwind CSS",
        horas: "2–3h",
        ruta: "/ejercicios/e19-tailwind-grid",
      },
      {
        num: "E20",
        titulo: "Proyecto final: portfolio con Grid Areas",
        desc: "Maqueta un portfolio completo desde cero. Grid areas para el layout, variables CSS para los colores, Flexbox para los componentes internos y media queries para que sea 100% responsive. El ejercicio donde todo se conecta.",
        skills: ["grid-areas", "flexbox", "variables CSS", "responsive", "accesibilidad"],
        dificultad: "Proyecto final",
        horas: "4–6h",
        ruta: "/ejercicios/e20-portfolio-final",
        especial: true,
      },
    ],
  },
];

// ── Helpers ───────────────────────────────────────────────────
const BADGE_COLOR = {
  Inicial: "badge--success",
  Básico: "badge--primary",
  Intermedio: "badge--secondary",
  Avanzado: "badge--warning",
  "Proyecto final": "badge--danger",
};

const NIVEL_ICONO = {
  "nivel-1": "🌱",
  "nivel-2": "⚡",
  "nivel-3": "🅱",
  "nivel-4": "🚀",
};

const TOTAL = NIVELES.reduce((acc, n) => acc + n.ejercicios.length, 0);

// =============================================================
export default function EjerciciosLanding() {
  useEffect(() => {
    document.title = "Ejercicios · 20 retos progresivos HTML, CSS, Bootstrap y Tailwind";
  }, []);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ════════════ HERO ════════════ */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Práctica · {TOTAL} ejercicios progresivos</p>
        <h1>De cero a Grid Areas: el camino práctico</h1>

        <p className="doc-lead">
          Leer teoría es el primer paso. <strong>Escribir código es donde realmente aprendes.</strong>{" "}
          Estos {TOTAL} ejercicios te llevan desde una tarjeta básica con HTML y CSS puro hasta un
          portfolio responsivo con Grid Areas — pasando por Flexbox, Bootstrap y Tailwind. Cada
          ejercicio construye sobre el anterior.
        </p>

        <div className="callout tip">
          🎯 <strong>Cómo usarlos:</strong> Intenta cada ejercicio antes de ver ninguna pista.
          El error es parte del aprendizaje. Cuando te atasques, vuelve a la lección teórica
          correspondiente del manual.
        </div>

        {/* Stats rápidas */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          {[
            { label: "Total ejercicios", valor: TOTAL, icon: "📝" },
            { label: "Niveles", valor: 4, icon: "🏆" },
            { label: "CSS puro", valor: 10, icon: "💎" },
            { label: "Bootstrap", valor: 5, icon: "🅱" },
            { label: "Tailwind", valor: 2, icon: "💨" },
          ].map((s) => (
            <div
              key={s.label}
              className="card"
              style={{
                textAlign: "center",
                minWidth: "110px",
                flex: "1 1 110px",
                padding: "1rem",
              }}
            >
              <div style={{ fontSize: "1.75rem" }}>{s.icon}</div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--interactive-primary)",
                  lineHeight: 1,
                }}
              >
                {s.valor}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-secondary)",
                  marginTop: "0.25rem",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mapa de progresión visual */}
        <nav className="doc-index" aria-label="Mapa de niveles">
          <h2>🗺️ Mapa de progresión</h2>
          <ol>
            {NIVELES.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>
                  {NIVEL_ICONO[n.id]} {n.titulo}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </header>

      {/* ════════════ BLOQUE: CÓMO TRABAJAR ════════════ */}
      <section className="doc-section">
        <div className="callout">
          <strong>📌 Metodología de cada ejercicio</strong>
          <ol style={{ marginBottom: 0 }}>
            <li>
              <strong>Lee el enunciado completo</strong> antes de tocar el teclado. Visualiza
              el resultado en tu cabeza.
            </li>
            <li>
              <strong>Escribe el HTML semántico primero</strong> — sin estilos. Estructura antes
              que decoración.
            </li>
            <li>
              <strong>Añade el CSS de forma incremental</strong>, propiedad a propiedad. Usa
              DevTools para ver qué hace cada una.
            </li>
            <li>
              <strong>Prueba en varios tamaños de pantalla</strong>. Cambia el ancho del navegador
              y observa qué se rompe.
            </li>
            <li>
              <strong>Valida la accesibilidad básica</strong>: navega con Tab, contrasta colores
              y usa etiquetas semánticas.
            </li>
          </ol>
        </div>
      </section>

      {/* ════════════ NIVELES ════════════ */}
      {NIVELES.map((nivel, ni) => (
        <section className="doc-section" id={nivel.id} key={nivel.id}>
          <details className="dd" open>
            <summary>
              {NIVEL_ICONO[nivel.id]} {nivel.titulo}
            </summary>
            <div className="dd-body">
              <p style={{ marginTop: 0 }}>
                <em>{nivel.descripcion}</em>
              </p>

              {/* Grid de tarjetas de ejercicio */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1.25rem",
                  marginTop: "1rem",
                }}
              >
                {nivel.ejercicios.map((ej) => (
                  <article
                    key={ej.num}
                    className="card"
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      borderTop: ej.especial
                        ? "4px solid var(--interactive-primary)"
                        : undefined,
                    }}
                  >
                    {/* Cabecera */}
                    <header
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "0.5rem",
                      }}
                    >
                      <div>
                        <span
                          className="doc-kicker"
                          style={{ marginBottom: "0.25rem", display: "block" }}
                        >
                          {ej.num}
                          {ej.tecnologia && (
                            <span
                              style={{
                                marginLeft: "0.5rem",
                                fontSize: "0.7rem",
                                color: "var(--text-tertiary)",
                              }}
                            >
                              · {ej.tecnologia}
                            </span>
                          )}
                        </span>
                        <h3 style={{ margin: 0, fontSize: "1rem" }}>
                          {ej.especial && "⭐ "}
                          {ej.titulo}
                        </h3>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", flexShrink: 0 }}>
                        <span className={`badge ${BADGE_COLOR[ej.dificultad] ?? ""}`}>
                          {ej.dificultad}
                        </span>
                        <span
                          className="badge"
                          style={{
                            fontSize: "0.65rem",
                            background: "var(--surface-primary)",
                            color: "var(--text-tertiary)",
                            border: "1px solid var(--border-subtle)",
                          }}
                        >
                          ⏱ {ej.horas}
                        </span>
                      </div>
                    </header>

                    {/* Descripción */}
                    <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-secondary)", flex: 1 }}>
                      {ej.desc}
                    </p>

                    {/* Skills */}
                    <footer style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {ej.skills.map((sk) => (
                        <code
                          key={sk}
                          style={{
                            fontSize: "0.7rem",
                            background: "var(--surface-primary)",
                            border: "1px solid var(--border-subtle)",
                            borderRadius: "4px",
                            padding: "0.1rem 0.4rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {sk}
                        </code>
                      ))}
                    </footer>

                    {/* CTA */}
                    {ej.ruta ? (
                      <Link to={ej.ruta} className="btn btn-primary" style={{ marginTop: "0.25rem" }}>
                        Ir al ejercicio →
                      </Link>
                    ) : (
                      <span
                        className="btn"
                        style={{
                          marginTop: "0.25rem",
                          opacity: 0.55,
                          cursor: "default",
                          userSelect: "none",
                          textAlign: "center",
                        }}
                        aria-disabled="true"
                      >
                        Próximamente
                      </span>
                    )}
                  </article>
                ))}
              </div>

              {/* Consejo de nivel */}
              <div className="callout" style={{ marginTop: "1.5rem" }}>
                {ni === 0 && (
                  <>
                    🌱 <strong>Consejo de nivel:</strong> No uses Flexbox ni Grid todavía en este
                    nivel. La restricción es intencionada: entender el flujo normal de CSS es
                    fundamental antes de cambiarlo.
                  </>
                )}
                {ni === 1 && (
                  <>
                    ⚡ <strong>Consejo de nivel:</strong> Con Flexbox y Grid ya puedes maquetar
                    el 90% de los layouts que encontrarás en proyectos reales. Domínalos bien
                    antes de pasar a frameworks.
                  </>
                )}
                {ni === 2 && (
                  <>
                    🅱 <strong>Consejo de nivel:</strong> Cuando uses Bootstrap, intenta siempre
                    identificar qué CSS genera cada clase. Inspecciona con DevTools. Así Bootstrap
                    te hace mejor en CSS, no más dependiente de él.
                  </>
                )}
                {ni === 3 && (
                  <>
                    🚀 <strong>Consejo de nivel:</strong> El E20 es el que más tiempo merece.
                    No lo hagas con prisa. Es donde todo converge: layout, tipografía, colores,
                    responsive y accesibilidad. Muéstraselo a alguien.
                  </>
                )}
              </div>
            </div>
          </details>
        </section>
      ))}

      {/* ════════════ HOJA DE RUTA CONCEPTUAL ════════════ */}
      <section className="doc-section">
        <details className="dd">
          <summary>🗺️ ¿Qué lección del manual refuerza cada ejercicio?</summary>
          <div className="dd-body">
            <div
              className="table-wrap"
              role="region"
              aria-label="Relación ejercicios y lecciones"
              tabIndex={0}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Ejercicio</th>
                    <th>Lección(es) recomendadas</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["E01 · Tarjeta de perfil", "V16 Box Model + V02/V03 CSS externo"],
                    ["E02 · Tipografía", "V13 Texto I + V14 Texto II + V15 Tipografía"],
                    ["E03 · Menú con hover", "V08 Selectores básicos + V10 Pseudoclases"],
                    ["E04 · Botones", "V10 Pseudoclases + V28 Vínculos y botones"],
                    ["E05 · Variables CSS", "V12 Variables CSS / Custom properties"],
                    ["E06 · Flexbox básico", "V19 Flexbox I"],
                    ["E07 · Galería flex", "V20 Flexbox II (alineación)"],
                    ["E08 · Formulario", "V31 Formularios accesibles"],
                    ["E09 · Grid galería", "V21 Grid I"],
                    ["E10 · Grid fr", "V22 Grid II (fracciones)"],
                    ["E11 · Bootstrap grid", "V38 Bootstrap + V22 Grid"],
                    ["E12 · Bootstrap navbar", "V38 Bootstrap + V29 Navbar"],
                    ["E13 · Bootstrap cards", "V38 Bootstrap + V28 Botones"],
                    ["E14 · Bootstrap form", "V38 Bootstrap + V31 Formularios"],
                    ["E15 · Landing Bootstrap", "V38 Bootstrap (completo)"],
                    ["E16 · Grid areas", "V23 Grid Areas y Layouts"],
                    ["E17 · Responsive", "V34 Media Queries + V35 Responsive Grid/Flex"],
                    ["E18 · Tailwind hero", "V39 Tailwind + V19 Flexbox I"],
                    ["E19 · Tailwind grid", "V39 Tailwind + V22 Grid II"],
                    ["E20 · Proyecto final", "Todo el manual"],
                  ].map(([ej, lec]) => (
                    <tr key={ej}>
                      <td>
                        <strong>{ej}</strong>
                      </td>
                      <td>{lec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ CIERRE MOTIVADOR ════════════ */}
      <section className="doc-section">
        <div className="callout tip">
          ✅ <strong>Recuerda siempre:</strong>
          <ul style={{ marginBottom: 0 }}>
            <li>
              Un ejercicio terminado que funciona es mejor que diez a medias.{" "}
              <strong>Completa antes de pasar al siguiente.</strong>
            </li>
            <li>
              Los errores en la consola y DevTools son tus mejores profesores.{" "}
              <strong>Aprende a leerlos, no a ignorarlos.</strong>
            </li>
            <li>
              El E20 no tiene solución única. Tu portfolio, tu diseño, tu código.{" "}
              <strong>Hazlo tuyo.</strong>
            </li>
            <li>
              Código del manual en GitHub:{" "}
              <a
                href="https://github.com/inma2709/manualcss"
                target="_blank"
                rel="noreferrer noopener"
              >
                github.com/inma2709/manualcss
              </a>
            </li>
          </ul>
        </div>

        <div className="doc-next">
          <Link to="/" className="btn">
            ← Volver al inicio
          </Link>
         
        </div>
      </section>
    </main>
  );
}
