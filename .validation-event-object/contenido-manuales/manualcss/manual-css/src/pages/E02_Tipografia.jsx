import { useEffect } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E02 · Tipografía y paleta de colores
// Objetivo: dominar las propiedades de texto en CSS
// y crear una pequeña guía de estilos propia.
// =====================================================

export default function E02_Tipografia() {
  useEffect(() => {
    document.title = "E02 · Tipografía y paleta de colores — Ejercicios CSS";
  }, []);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ── HERO ── */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E02 · Nivel inicial</p>
        <h1>Tipografía y paleta de colores</h1>
        <p className="doc-lead">
          La tipografía es el 90% del diseño web. Antes de colocar elementos en la
          pantalla, necesitas dominar <strong>cómo se ve y se lee el texto</strong>.
          En este ejercicio crearás tu propia mini guía de estilos tipográficos.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> <code>font-family</code>, <code>font-size</code>,{" "}
          <code>font-weight</code>, <code>line-height</code>, <code>letter-spacing</code>,{" "}
          <code>color</code>, <code>text-transform</code> y cómo importar fuentes de Google Fonts.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · Importar una fuente de Google Fonts</a></li>
            <li><a href="#paso-2">Paso 2 · Establecer la fuente base del body</a></li>
            <li><a href="#paso-3">Paso 3 · Escala de titulares h1–h4</a></li>
            <li><a href="#paso-4">Paso 4 · Párrafo legible: line-height y max-width</a></li>
            <li><a href="#paso-5">Paso 5 · Variantes: strong, em, code, blockquote</a></li>
            <li><a href="#paso-6">Paso 6 · Tu paleta de colores con 4 variables</a></li>
            <li><a href="#paso-7">Paso 7 · Código final + reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · Importar una fuente de Google Fonts</summary>
          <div className="dd-body">
            <p>
              Por defecto, el navegador usa la fuente del sistema (Arial, Helvetica, etc.).
              Para algo más cuidado, usaremos <strong>Google Fonts</strong>: un servicio
              gratuito con cientos de fuentes listas para usar.
            </p>
            <p>
              Vamos a usar <strong>Inter</strong>: moderna, muy legible en pantalla y usada
              por miles de productos profesionales.
            </p>

            <pre><code>{`<!-- Opción A: en el <head> del HTML -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
  rel="stylesheet"
/>`}</code></pre>

            <pre><code>{`/* Opción B: en el propio CSS con @import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');`}</code></pre>

            <div className="callout">
              💡 El parámetro <code>wght@400;600;700;800</code> importa solo los pesos que vamos
              a usar (normal, semi-bold, bold, extra-bold). Importar menos pesos = página más rápida.
            </div>
            <div className="callout tip">
              <code>display=swap</code> indica al navegador que muestre la fuente del sistema
              mientras carga Inter y luego haga el cambio. Evita el bloqueo del texto durante
              la carga. <strong>Siempre úsalo.</strong>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · Establecer la fuente base del body</summary>
          <div className="dd-body">
            <p>
              La forma más eficiente de aplicar una fuente es ponerla en <code>body</code>.
              Por la <strong>herencia</strong> de CSS, todos los elementos hijos la heredarán
              automáticamente: párrafos, títulos, listas... todo.
            </p>

            <pre><code>{`body {
  font-family: 'Inter', system-ui, sans-serif;
  /* system-ui y sans-serif son el fallback si Inter no carga */

  font-size: 16px;       /* tamaño base: 1rem = 16px en toda la página */
  line-height: 1.6;      /* interlineado cómodo para el cuerpo de texto */
  color: #1e293b;        /* color de texto principal (gris muy oscuro) */

  background-color: #f8fafc;
  margin: 0;
  padding: 0;
}`}</code></pre>

            <div className="callout tip">
              <strong>¿Por qué 16px?</strong> Es el tamaño por defecto del navegador y
              el recomendado para texto de cuerpo en pantalla. No lo bajes por debajo
              de 16px para párrafos: es el mínimo para una lectura cómoda.
            </div>
            <div className="callout">
              <strong>Fuentes fallback:</strong> <code>system-ui</code> usa la fuente
              nativa del sistema operativo (San Francisco en macOS, Segoe UI en Windows).
              Si Google Fonts no carga, el texto sigue viéndose bien.
            </div>

            {/* Vista previa */}
            <h3>Vista previa — texto con Inter</h3>
            <div style={{ border: "2px dashed var(--border-medium)", padding: "1.5rem", borderRadius: "8px", fontFamily: "'Inter', system-ui, sans-serif", fontSize: "16px", lineHeight: 1.6, color: "#1e293b", background: "#f8fafc" }}>
              Este párrafo usa Inter a 16px con line-height 1.6. Fíjate en el espacio entre
              líneas: es el suficiente para que el ojo no se pierda al saltar de una a otra.
              La tipografía bien aplicada hace que el contenido se lea solo.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · Escala de titulares h1–h4</summary>
          <div className="dd-body">
            <p>
              Los titulares crean <strong>jerarquía visual</strong>: el usuario sabe
              de un vistazo qué es lo más importante. La clave es{" "}
              <strong>una escala con saltos claros</strong>, no 4 tamaños casi iguales.
            </p>

            <pre><code>{`h1, h2, h3, h4 {
  line-height: 1.2;       /* titulares más compactos que el párrafo */
  margin: 0 0 0.5rem;
  font-weight: 700;
}

h1 {
  font-size: 2.5rem;      /* 40px — el más grande, solo uno por página */
  font-weight: 800;
  color: #0f172a;
}

h2 {
  font-size: 1.75rem;     /* 28px — secciones principales */
}

h3 {
  font-size: 1.25rem;     /* 20px — subsecciones */
}

h4 {
  font-size: 1rem;        /* 16px — igual al párrafo pero en negrita */
  letter-spacing: 0.05em; /* pequeño espaciado entre letras */
  text-transform: uppercase;
  color: #6366f1;         /* color de acento para el h4 */
}`}</code></pre>

            <div className="callout tip">
              <strong>Escala visual de titulares:</strong>
            </div>

            <div style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              border: "2px dashed var(--border-medium)", padding: "1.5rem",
              borderRadius: "8px", background: "white"
            }}>
              <h1 style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1.2, color: "#0f172a", margin: "0 0 0.75rem" }}>Titular H1 — 40px</h1>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.2, color: "#1e293b", margin: "0 0 0.75rem" }}>Titular H2 — 28px</h2>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.2, color: "#1e293b", margin: "0 0 0.75rem" }}>Titular H3 — 20px</h3>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.2, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0" }}>Titular H4 — 16px uppercase</h4>
            </div>

            <div className="callout warn">
              ⚠️ <strong>Solo un H1 por página.</strong> El H1 es el título principal —
              tanto para el usuario como para los motores de búsqueda. Usar varios H1
              genera confusión de jerarquía y perjudica el SEO.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · Párrafo legible: line-height y max-width</summary>
          <div className="dd-body">
            <p>
              Un párrafo perfectamente legible tiene <strong>dos propiedades clave</strong>:{" "}
              buen interlineado y una anchura máxima. ¿Por qué la anchura? Porque líneas
              muy largas obligan al ojo a recorrer demasiado espacio y al volver al inicio
              se pierde el renglón.
            </p>

            <pre><code>{`p {
  font-size: 1rem;        /* 16px — base */
  line-height: 1.7;       /* más generoso que los títulos */
  color: #334155;         /* un tono más claro que el h1 */
  max-width: 65ch;        /* ← la unidad ch = anchura del carácter "0" */
  margin: 0 0 1rem;
}`}</code></pre>

            <div className="callout tip">
              <strong>La unidad <code>ch</code></strong> significa "caracteres". <code>65ch</code>{" "}
              = aprox. 65 caracteres de ancho. Es la recomendación tipográfica clásica para
              texto de cuerpo: entre 50 y 75 caracteres por línea. Mucho mejor que usar
              píxeles que no se adaptan al tamaño de fuente.
            </div>

            {/* Vista previa */}
            <h3>Comparación: sin y con max-width</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
              <div style={{ border: "2px dashed #fca5a5", padding: "1rem", borderRadius: "8px", background: "#fff" }}>
                <div style={{ fontSize: "0.7rem", color: "#ef4444", marginBottom: "0.5rem", fontWeight: 700 }}>❌ Sin max-width</div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#334155", margin: 0 }}>
                  Este párrafo ocupa todo el ancho disponible. Si la pantalla es grande, las líneas se hacen muy largas y el ojo se pierde al buscar el inicio de la siguiente.
                </p>
              </div>
              <div style={{ border: "2px dashed #86efac", padding: "1rem", borderRadius: "8px", background: "#fff" }}>
                <div style={{ fontSize: "0.7rem", color: "#16a34a", marginBottom: "0.5rem", fontWeight: 700 }}>✅ Con max-width: 65ch</div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#334155", margin: 0, maxWidth: "65ch" }}>
                  Este párrafo nunca supera las 65 letras por línea. La lectura es fluida. El ojo salta cómodamente de una línea a la siguiente.
                </p>
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · strong, em, code y blockquote</summary>
          <div className="dd-body">
            <p>
              El texto no es solo párrafos. Hay marcas de énfasis, código y citas.
              CSS puede estilizarlos sin tocar el HTML.
            </p>

            <pre><code>{`strong {
  font-weight: 700;
  color: #1e293b;     /* un tono más oscuro para destacar */
}

em {
  font-style: italic;
  color: #475569;
}

code {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 0.875em;           /* em: relativo al padre, no al root */
  background-color: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 0.1em 0.4em;
}

blockquote {
  border-left: 4px solid #6366f1;   /* barra de acento a la izquierda */
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: #475569;
  font-style: italic;
}`}</code></pre>

            <div className="callout">
              💡 <code>font-size: 0.875em</code> en <code>code</code> usa <strong>em</strong>{" "}
              (relativo al elemento padre) en vez de <strong>rem</strong> (relativo al root).
              Así el código siempre es un 12.5% más pequeño que el texto que lo rodea,
              sea cual sea el tamaño del padre.
            </div>

            {/* Vista previa */}
            <h3>Vista previa</h3>
            <div style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              border: "2px dashed var(--border-medium)", padding: "1.5rem", borderRadius: "8px", background: "white"
            }}>
              <p style={{ lineHeight: 1.7, margin: "0 0 1rem" }}>
                Usa <strong style={{ fontWeight: 700, color: "#1e293b" }}>strong</strong> para
                resaltar algo importante y{" "}
                <em style={{ fontStyle: "italic", color: "#475569" }}>em</em> para énfasis
                semántico. El código <code style={{ fontFamily: "monospace", fontSize: "0.875em", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: "4px", padding: "0.1em 0.4em" }}>display: block</code> va
                así.
              </p>
              <blockquote style={{ borderLeft: "4px solid #6366f1", paddingLeft: "1rem", margin: "0", color: "#475569", fontStyle: "italic" }}>
                La tipografía es el arte de hacer que el texto no parezca texto.
              </blockquote>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Tu paleta de colores con 4 variables CSS</summary>
          <div className="dd-body">
            <p>
              Hasta ahora hemos usado colores escritos a mano (<code>#6366f1</code>,{" "}
              <code>#1e293b</code>…). Ahora los centralizamos usando{" "}
              <strong>CSS custom properties</strong> (variables CSS). Si quieres cambiar
              el color de acento, cambias un solo valor y se actualiza en todas partes.
            </p>

            <pre><code>{`:root {
  --color-text:       #1e293b;  /* texto principal */
  --color-text-soft:  #64748b;  /* texto secundario */
  --color-accent:     #6366f1;  /* color de marca (violeta) */
  --color-bg:         #f8fafc;  /* fondo de la página */
  --color-surface:    #ffffff;  /* fondo de tarjetas/componentes */
}

/* Ahora sustituyes los colores duros por variables */
body {
  color: var(--color-text);
  background-color: var(--color-bg);
}

h1, h2, h3 {
  color: var(--color-text);
}

h4, .tarjeta__rol {
  color: var(--color-accent);
}

p {
  color: var(--color-text-soft);
}`}</code></pre>

            <div className="callout tip">
              <strong>¿Por qué 4 variables y no 20?</strong> Para empezar, menos es más.
              Con texto principal, texto suave, acento, fondo de página y fondo de superficie
              puedes estilizar prácticamente cualquier interfaz sencilla. Añade más cuando
              las necesites de verdad.
            </div>

            {/* Paleta visual */}
            <h3>Tu paleta visual</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { nombre: "--color-text", hex: "#1e293b", texto: "Texto principal" },
                { nombre: "--color-text-soft", hex: "#64748b", texto: "Texto suave" },
                { nombre: "--color-accent", hex: "#6366f1", texto: "Acento" },
                { nombre: "--color-bg", hex: "#f8fafc", texto: "Fondo página", dark: false },
                { nombre: "--color-surface", hex: "#ffffff", texto: "Superficie", dark: false },
              ].map((c) => (
                <div key={c.nombre} style={{
                  background: c.hex,
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "0.75rem 1rem",
                  minWidth: "140px",
                  flex: "1 1 140px"
                }}>
                  <div style={{ color: c.dark === false ? "#1e293b" : "white", fontWeight: 700, fontSize: "0.875rem", fontFamily: "monospace" }}>{c.hex}</div>
                  <div style={{ color: c.dark === false ? "#64748b" : "rgba(255,255,255,0.8)", fontSize: "0.75rem", marginTop: "0.25rem" }}>{c.nombre}</div>
                  <div style={{ color: c.dark === false ? "#64748b" : "rgba(255,255,255,0.7)", fontSize: "0.7rem" }}>{c.texto}</div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 — CÓDIGO FINAL ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Código final completo + reto extra</summary>
          <div className="dd-body">

            <pre><code>{`/* styles.css — Guía de estilos tipográficos */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

/* Variables de color */
:root {
  --color-text:      #1e293b;
  --color-text-soft: #64748b;
  --color-accent:    #6366f1;
  --color-bg:        #f8fafc;
  --color-surface:   #ffffff;
}

/* Base */
body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-bg);
  margin: 0;
  padding: 2rem;
}

/* Títulares */
h1, h2, h3, h4 { line-height: 1.2; margin: 0 0 0.5rem; font-weight: 700; }
h1 { font-size: 2.5rem; font-weight: 800; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.25rem; }
h4 { font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-accent); }

/* Párrafo */
p { font-size: 1rem; line-height: 1.7; color: var(--color-text-soft); max-width: 65ch; margin: 0 0 1rem; }

/* Énfasis */
strong { font-weight: 700; color: var(--color-text); }
em     { font-style: italic; }
code   { font-family: monospace; font-size: 0.875em; background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0.1em 0.4em; }

/* Cita */
blockquote {
  border-left: 4px solid var(--color-accent);
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: var(--color-text-soft);
  font-style: italic;
}`}</code></pre>

            <div className="callout tip">
              ✅ <strong>Qué has practicado en este ejercicio:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li>Importar fuentes con Google Fonts y <code>@import</code></li>
                <li>Escala tipográfica h1–h4 con jerarquía visual clara</li>
                <li>Propiedades: <code>font-size</code>, <code>font-weight</code>, <code>line-height</code>, <code>letter-spacing</code></li>
                <li>La unidad <code>ch</code> para anchura de texto</li>
                <li>Estilizar <code>strong</code>, <code>em</code>, <code>code</code> y <code>blockquote</code></li>
                <li>Tu primera mini paleta con <code>:root</code> y <code>var()</code></li>
              </ul>
            </div>

            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li>Crea un <code>.lead</code> (primer párrafo de una sección) con <code>font-size: 1.15rem</code> y <code>color: var(--color-text)</code>.</li>
                <li>Añade una clase <code>.badge</code>: texto pequeño en mayúsculas con un fondo de acento suave.</li>
                <li>Cambia <code>--color-accent</code> en <code>:root</code> a un verde (<code>#16a34a</code>) y comprueba cómo cambia toda la página a la vez.</li>
                <li>Añade una segunda fuente solo para los títulares (ej: Playfair Display) y aplícala con <code>{"h1, h2, h3 { font-family: 'Playfair Display', serif; }"}</code>.</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e01-tarjeta-perfil" className="btn">← E01 Tarjeta de perfil</Link>
          <Link to="/ejercicios/e03-menu-hover" className="btn btn-primary">Siguiente: E03 Menú →</Link>
        </div>
      </section>
    </main>
  );
}
