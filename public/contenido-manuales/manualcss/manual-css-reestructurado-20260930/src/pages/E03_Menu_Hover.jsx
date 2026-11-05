import { useEffect } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E03 · Menú horizontal con hover
// Objetivo: entender display, list-style y las
// pseudoclases :hover y :focus-visible para crear
// una navegación accesible sin frameworks.
// =====================================================

export default function E03_Menu_Hover() {
  useEffect(() => {
    document.title = "E03 · Menú horizontal con hover — Ejercicios CSS";
  }, []);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ── HERO ── */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E03 · Nivel inicial</p>
        <h1>Menú horizontal con hover</h1>
        <p className="doc-lead">
          Una barra de navegación es el componente más común de la web. En este
          ejercicio la construiremos desde cero: desde una lista de puntos fea hasta
          un menú horizontal con <strong>transiciones suaves y accesibilidad de teclado</strong>.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> <code>display: flex</code> en la{" "}
          <code>ul</code>, <code>list-style: none</code>, <code>:hover</code>,{" "}
          <code>:focus-visible</code>, <code>transition</code> y cómo destacar el
          enlace de la página activa con <code>.active</code>.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · El HTML semántico del menú</a></li>
            <li><a href="#paso-2">Paso 2 · Eliminar el estilo de lista</a></li>
            <li><a href="#paso-3">Paso 3 · Poner los ítems en horizontal</a></li>
            <li><a href="#paso-4">Paso 4 · Estilizar los enlaces</a></li>
            <li><a href="#paso-5">Paso 5 · Hover con transición suave</a></li>
            <li><a href="#paso-6">Paso 6 · Focus-visible y estado activo</a></li>
            <li><a href="#paso-7">Paso 7 · Código final + reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · El HTML semántico del menú</summary>
          <div className="dd-body">
            <p>
              Un menú de navegación se construye con <code>&lt;nav&gt;</code> +{" "}
              <code>&lt;ul&gt;</code> + <code>&lt;li&gt;</code> + <code>&lt;a&gt;</code>.
              Esta estructura no es arbitraria: los lectores de pantalla anuncian
              "lista de navegación, 4 elementos" y el usuario sabe exactamente qué esperar.
            </p>

            <pre><code>{`<nav class="navbar" aria-label="Navegación principal">
  <ul class="navbar__lista">

    <li class="navbar__item">
      <a href="/" class="navbar__link active">Inicio</a>
    </li>

    <li class="navbar__item">
      <a href="/cursos" class="navbar__link">Cursos</a>
    </li>

    <li class="navbar__item">
      <a href="/proyectos" class="navbar__link">Proyectos</a>
    </li>

    <li class="navbar__item">
      <a href="/contacto" class="navbar__link">Contacto</a>
    </li>

  </ul>
</nav>`}</code></pre>

            <div className="callout">
              💡 <code>aria-label="Navegación principal"</code> es esencial cuando hay
              más de una navegación en la página (menú principal + pie de página, por ejemplo).
              Le dice al lector de pantalla cuál es cuál.
            </div>
            <div className="callout warn">
              ⚠️ La clase <code>active</code> en el enlace de la página actual es importante:
              tanto visualmente (el usuario sabe dónde está) como para accesibilidad
              (deberías añadir también <code>aria-current="page"</code>).
            </div>

            {/* Vista previa */}
            <h3>Vista previa — sin CSS</h3>
            <div style={{ border: "2px dashed var(--border-medium)", padding: "1rem", borderRadius: "8px" }}>
              <nav>
                <ul>
                  <li><a href="#paso-1">Inicio</a></li>
                  <li><a href="#paso-1">Cursos</a></li>
                  <li><a href="#paso-1">Proyectos</a></li>
                  <li><a href="#paso-1">Contacto</a></li>
                </ul>
              </nav>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", marginTop: "0.5rem" }}>
              Lista vertical con viñetas y los enlaces azules por defecto del navegador. Ahora lo transformamos.
            </p>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · Eliminar el estilo de lista</summary>
          <div className="dd-body">
            <p>
              Lo primero es quitar las viñetas y los márgenes por defecto que el navegador
              añade a toda <code>&lt;ul&gt;</code>.
            </p>

            <pre><code>{`.navbar__lista {
  list-style: none;   /* ← adiós viñetas */
  margin: 0;          /* ← quita el margen del navegador */
  padding: 0;         /* ← quita el padding del navegador */
}`}</code></pre>

            <div className="callout tip">
              <strong>Todos los navegadores</strong> añaden estilos por defecto a los elementos
              HTML (márgenes, padding, viñetas, colores de enlace…). Parte del trabajo inicial
              en CSS es <em>resetear</em> esos estilos para partir de una base limpia.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · Poner los ítems en horizontal</summary>
          <div className="dd-body">
            <p>
              Los <code>&lt;li&gt;</code> son bloques (<code>display: block</code>) por defecto,
              así que se apilan en vertical. Usamos <code>display: flex</code> en el padre (
              <code>ul</code>) para que los hijos se coloquen en horizontal automáticamente.
            </p>

            <pre><code>{`.navbar {
  background-color: #1e293b;   /* fondo oscuro para la barra */
  padding: 0 1.5rem;
}

.navbar__lista {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;               /* ← los li pasan a horizontal */
  gap: 0.25rem;                /* ← espacio entre ítems */
}`}</code></pre>

            <div className="callout">
              <code>display: flex</code> en el contenedor (<code>ul</code>) convierte a sus hijos
              directos (<code>li</code>) en <em>flex items</em>: se colocan en fila por defecto.
              Este es el uso más básico y más común de Flexbox — no necesitas más propiedades para esto.
            </div>

            {/* Vista previa */}
            <h3>Vista previa — ítems en horizontal</h3>
            <div style={{ border: "2px dashed var(--border-medium)", borderRadius: "8px", overflow: "hidden" }}>
              <nav style={{ background: "#1e293b", padding: "0 1.5rem" }}>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: "0.25rem" }}>
                  {["Inicio", "Cursos", "Proyectos", "Contacto"].map(item => (
                    <li key={item}><a href="#paso-3" style={{ color: "white", textDecoration: "none", padding: "1rem 0.75rem", display: "block" }}>{item}</a></li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · Estilizar los enlaces</summary>
          <div className="dd-body">
            <p>
              Los enlaces tienen subrayado y color azul por defecto del navegador.
              Los quitamos y damos nuestro estilo propio.
            </p>

            <pre><code>{`.navbar__link {
  display: block;             /* necesario para que padding funcione bien */
  padding: 1rem 0.75rem;      /* área de clic generosa */
  color: #cbd5e1;             /* texto gris claro (no blanco puro) */
  text-decoration: none;      /* ← adiós subrayado */
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 6px;
}`}</code></pre>

            <div className="callout warn">
              ⚠️ Cuando quites el subrayado de los enlaces, <strong>siempre</strong> debes
              compensarlo con otro indicador visual en hover (cambio de color, fondo…).
              El subrayado es la señal más universal de "esto es un enlace".
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Hover con transición suave</summary>
          <div className="dd-body">
            <p>
              Ahora el momento estrella: el efecto hover. La clave para que no se vea
              brusco es <strong><code>transition</code></strong>: le decimos al navegador
              cuánto tiempo debe tardar en cambiar de un estado al otro.
            </p>

            <pre><code>{`.navbar__link {
  /* ... lo de antes ... */
  transition: background-color 0.2s ease,
              color 0.2s ease;
  /* Le decimos: cuando cambien background-color o color,
     hazlo en 0.2 segundos con aceleración suave ("ease") */
}

.navbar__link:hover {
  background-color: rgba(255, 255, 255, 0.1);  /* fondo sutil */
  color: #ffffff;                               /* texto blanco */
}`}</code></pre>

            <div className="callout tip">
              <strong>La propiedad <code>transition</code>:</strong><br />
              <code>transition: propiedad duración timing-function;</code><br /><br />
              — <code>propiedad</code>: qué cambia (<code>background-color</code>,{" "}
              <code>color</code>, <code>transform</code>…)<br />
              — <code>duración</code>: cuánto tarda (<code>0.2s</code> = 200 milisegundos)<br />
              — <code>ease</code>: empieza lento, acelera, termina lento. Natural.<br />
              — <code>linear</code>: velocidad constante. Más mecánico.<br />
              — <code>ease-out</code>: empieza rápido y frena. Bueno para elementos que "llegan".
            </div>

            {/* Vista previa con hover funcional */}
            <h3>Vista previa — pasa el ratón por los enlaces</h3>
            <div style={{ border: "2px dashed var(--border-medium)", borderRadius: "8px", overflow: "hidden" }}>
              <nav style={{ background: "#1e293b", padding: "0 1.5rem" }}>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: "0.25rem" }}>
                  {["Inicio", "Cursos", "Proyectos", "Contacto"].map(item => (
                    <li key={item}>
                      <a
                        href="#paso-5"
                        style={{ display: "block", padding: "1rem 0.75rem", color: "#cbd5e1", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, borderRadius: "6px", transition: "background-color 0.2s ease, color 0.2s ease" }}
                        onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; }}
                        onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#cbd5e1"; }}
                      >{item}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", marginTop: "0.5rem" }}>
              ¡Pruébalo! La transición de 0.2s hace que se vea natural, no mecánico.
            </p>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Focus-visible y estado activo</summary>
          <div className="dd-body">
            <p>
              Dos últimas piezas fundamentales: el enlace de la <strong>página actual</strong>{" "}
              y el <strong>indicador de foco para teclado</strong>. Sin esto, la navegación
              por teclado es invisible.
            </p>

            <pre><code>{`/* Página actual: destaca con acento */
.navbar__link.active {
  color: #ffffff;
  background-color: rgba(99, 102, 241, 0.3);  /* violeta translúcido */
  font-weight: 600;
}

/* Focus de teclado: NUNCA uses outline: none sin alternativa */
.navbar__link:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}`}</code></pre>

            <div className="callout warn">
              🚨 <strong>Regla de oro de accesibilidad:</strong> Nunca pongas{" "}
              <code>outline: none</code> en un enlace sin proporcionar un estilo
              de foco alternativo. El <code>outline</code> es la única pista visual
              que tienen los usuarios de teclado para saber dónde están. Sin él,
              navegar por la página es imposible para ellos.
            </div>
            <div className="callout tip">
              <code>:focus-visible</code> (con guion) solo muestra el outline cuando
              el usuario navega con teclado, <em>no</em> cuando hace clic con el ratón.
              Así tienes foco accesible sin el "anillo feo" en cada clic.{" "}
              <code>:focus</code> sin el <code>-visible</code> se activa siempre.
            </div>

            {/* Vista previa completa */}
            <h3>Vista previa — menú completo</h3>
            <div style={{ border: "2px dashed var(--border-medium)", borderRadius: "8px", overflow: "hidden" }}>
              <nav style={{ background: "#1e293b", padding: "0 1.5rem" }}>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: "0.25rem" }}>
                  {[{ label: "Inicio", active: true }, { label: "Cursos" }, { label: "Proyectos" }, { label: "Contacto" }].map(item => (
                    <li key={item.label}>
                      <a
                        href="#paso-6"
                        style={{
                          display: "block", padding: "1rem 0.75rem",
                          color: item.active ? "#fff" : "#cbd5e1",
                          textDecoration: "none", fontSize: "0.9rem", fontWeight: item.active ? 600 : 500,
                          borderRadius: "6px",
                          background: item.active ? "rgba(99,102,241,0.3)" : "transparent",
                          transition: "background-color 0.2s ease, color 0.2s ease"
                        }}
                        onMouseOver={e => { if (!item.active) { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; } }}
                        onMouseOut={e => { if (!item.active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#cbd5e1"; } }}
                      >{item.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 — CÓDIGO FINAL ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Código final completo + reto extra</summary>
          <div className="dd-body">
            <pre><code>{`/* styles.css */
:root {
  --navbar-bg:      #1e293b;
  --navbar-text:    #cbd5e1;
  --navbar-hover:   rgba(255,255,255,0.1);
  --navbar-active:  rgba(99,102,241,0.3);
  --navbar-accent:  #6366f1;
}

.navbar {
  background-color: var(--navbar-bg);
  padding: 0 1.5rem;
}

.navbar__lista {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.25rem;
}

.navbar__link {
  display: block;
  padding: 1rem 0.75rem;
  color: var(--navbar-text);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 6px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.navbar__link:hover {
  background-color: var(--navbar-hover);
  color: #ffffff;
}

.navbar__link.active {
  color: #ffffff;
  background-color: var(--navbar-active);
  font-weight: 600;
}

.navbar__link:focus-visible {
  outline: 2px solid var(--navbar-accent);
  outline-offset: 2px;
}`}</code></pre>

            <div className="callout tip">
              ✅ <strong>Qué has practicado:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li>HTML semántico: <code>nav</code>, <code>ul</code>, <code>li</code>, <code>a</code></li>
                <li><code>list-style: none</code> + reset de márgenes</li>
                <li><code>display: flex</code> para alinear en horizontal</li>
                <li>Estilizar <code>&lt;a&gt;</code>: quitar subrayado, añadir padding</li>
                <li><code>transition</code> para hover suave</li>
                <li><code>:focus-visible</code> para accesibilidad de teclado</li>
                <li>Estado <code>.active</code> para la página actual</li>
              </ul>
            </div>

            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li>Añade un <strong>logo</strong> a la izquierda del menú usando{" "}
                  <code>display: flex; justify-content: space-between;</code> en{" "}
                  el <code>nav</code>.</li>
                <li>Haz que el menú tenga <strong>modo oscuro/claro</strong>: añade una clase{" "}
                  <code>.navbar--light</code> y cambia los colores con variables.</li>
                <li>Añade un <strong>subrayado animado</strong> en hover usando{" "}
                  <code>::after</code> con <code>transform: scaleX()</code> y <code>transition</code>.</li>
                <li>
                  Añade <code>aria-current="page"</code> al enlace activo en el HTML
                  y selecciónalo en CSS con <code>[aria-current="page"]</code> en vez de <code>.active</code>.
                </li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e02-tipografia" className="btn">← E02 Tipografía</Link>
          <Link to="/ejercicios/e04-botones" className="btn btn-primary">Siguiente: E04 Botones →</Link>
        </div>
      </section>
    </main>
  );
}
