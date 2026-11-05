import { useEffect } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E12 · Bootstrap: navbar responsive con toggler
// Objetivo: construir una barra de navegación completa
// con logo, links, menú hamburguesa y comportamiento
// responsive sin escribir una sola línea de JavaScript.
// =====================================================

export default function E12_Bootstrap_Navbar() {
  useEffect(() => {
    document.title = "E12 · Bootstrap Navbar — Ejercicios CSS";
  }, []);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">Saltar al contenido</a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E12 · Nivel intermedio · Bootstrap 5</p>
        <h1>Bootstrap: navbar responsive con toggler</h1>
        <p className="doc-lead">
          La navbar es el componente más complejo de Bootstrap y a la vez el más
          habitual en proyectos reales. En este ejercicio construirás una completa:{" "}
          <strong>logo, links, menú hamburguesa en móvil y dropdown</strong>,
          todo sin tocar JavaScript.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> la estructura de{" "}
          <code>navbar</code>, clases <code>navbar-expand-*</code>,
          el toggler con <code>data-bs-*</code>, variantes de color,{" "}
          <code>ms-auto</code> para empujar elementos y dropdown.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · Anatomía de la navbar Bootstrap</a></li>
            <li><a href="#paso-2">Paso 2 · navbar-brand: el logo/nombre</a></li>
            <li><a href="#paso-3">Paso 3 · El toggler: el botón hamburguesa</a></li>
            <li><a href="#paso-4">Paso 4 · navbar-nav y nav-link</a></li>
            <li><a href="#paso-5">Paso 5 · Colores y variantes</a></li>
            <li><a href="#paso-6">Paso 6 · ms-auto y elementos a la derecha</a></li>
            <li><a href="#paso-7">Paso 7 · Dropdown sin JavaScript propio</a></li>
            <li><a href="#paso-8">Paso 8 · Tu HTML copiable: practica ya</a></li>
            <li><a href="#paso-9">Paso 9 · Reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · Anatomía de la navbar Bootstrap</summary>
          <div className="dd-body">
            <p>
              La navbar de Bootstrap tiene una estructura fija que hay que respetar.
              Si cambias el orden o quitas algún elemento, el comportamiento responsive
              se rompe. Primero entiende el esqueleto:
            </p>
            <pre><code>{`<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <div class="container">

    <!-- 1. El logo o nombre del sitio -->
    <a class="navbar-brand" href="#">MiSitio</a>

    <!-- 2. El botón hamburguesa (visible solo en móvil) -->
    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menú">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- 3. El menú colapsable (id debe coincidir con data-bs-target) -->
    <div class="collapse navbar-collapse" id="menuPrincipal">

      <!-- 4. Los links de navegación -->
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#sobre">Sobre mí</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#proyectos">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contacto">Contacto</a>
        </li>
      </ul>

    </div>
  </div>
</nav>`}</code></pre>

            {/* Diagrama de la anatomía */}
            <h3>Diagrama de componentes</h3>
            <div style={{ background: "#1e293b", borderRadius: "10px", padding: "1rem", fontFamily: "monospace", fontSize: "0.78rem", lineHeight: 1.8, color: "#94a3b8" }}>
              <div style={{ color: "#6366f1" }}>{"<nav class=\"navbar navbar-expand-md\">"}</div>
              <div style={{ paddingLeft: "1.5rem", color: "#94a3b8" }}>{"<div class=\"container\">"}</div>
              <div style={{ paddingLeft: "3rem" }}>
                <span style={{ color: "#34d399" }}>{"<a class=\"navbar-brand\">"}</span>
                <span style={{ color: "#fde68a" }}> ← Logo / nombre</span>
              </div>
              <div style={{ paddingLeft: "3rem" }}>
                <span style={{ color: "#f87171" }}>{"<button class=\"navbar-toggler\">"}</span>
                <span style={{ color: "#fde68a" }}> ← Hamburguesa (solo móvil)</span>
              </div>
              <div style={{ paddingLeft: "3rem" }}>
                <span style={{ color: "#60a5fa" }}>{"<div class=\"collapse navbar-collapse\">"}</span>
                <span style={{ color: "#fde68a" }}> ← Se oculta/muestra en móvil</span>
              </div>
              <div style={{ paddingLeft: "4.5rem" }}>
                <span style={{ color: "#a78bfa" }}>{"<ul class=\"navbar-nav ms-auto\">"}</span>
                <span style={{ color: "#fde68a" }}> ← Los links (ms-auto = a la derecha)</span>
              </div>
              <div style={{ paddingLeft: "6rem", color: "#94a3b8" }}>{"<li class=\"nav-item\"> <a class=\"nav-link\"> ..."}</div>
              <div style={{ paddingLeft: "1.5rem", color: "#94a3b8" }}>{"</div>"}</div>
              <div style={{ color: "#6366f1" }}>{"</nav>"}</div>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · navbar-brand: el logo o nombre del sitio</summary>
          <div className="dd-body">
            <p>
              <code>.navbar-brand</code> es el primer elemento de la navbar y normalmente
              contiene el logo o el nombre del sitio. Bootstrap le da estilos especiales:
              fuente más grande, negrita y sin subrayado.
            </p>
            <pre><code>{`<!-- Solo texto -->
<a class="navbar-brand" href="#">MiPortfolio</a>

<!-- Con imagen (logo) -->
<a class="navbar-brand" href="#">
  <img src="logo.svg" alt="MiPortfolio" height="30" />
</a>

<!-- Imagen + texto -->
<a class="navbar-brand" href="#">
  <img src="logo.svg" alt="" height="30" class="me-2" />
  MiPortfolio
</a>`}</code></pre>
            <div className="callout">
              <code>height="30"</code> es el alto estándar para logos en la navbar Bootstrap.
              No uses <code>width</code> — deja que el ancho se calcule automáticamente
              para mantener la proporción de la imagen.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · El toggler: el botón hamburguesa sin JavaScript</summary>
          <div className="dd-body">
            <p>
              El botón hamburguesa parece magia: abre y cierra el menú sin que tú escribas
              una línea de JS. El secreto está en los atributos <code>data-bs-*</code>:
              Bootstrap Javascript los lee y gestiona el comportamiento.
            </p>
            <pre><code>{`<button
  class="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"           <!-- ① acción: colapsar/expandir -->
  data-bs-target="#menuPrincipal"     <!-- ② id del menú que controla -->
  aria-controls="menuPrincipal"       <!-- ③ accesibilidad: mismo id -->
  aria-expanded="false"               <!-- ④ el menú empieza cerrado -->
  aria-label="Abrir menú de navegación"  <!-- ⑤ descripción para lectores de pantalla -->
>
  <span class="navbar-toggler-icon"></span>  <!-- el icono ☰ -->
</button>

<!-- El menú que se controla DEBE tener el id correspondiente -->
<div class="collapse navbar-collapse" id="menuPrincipal">
  <!-- nav items aquí -->
</div>`}</code></pre>

            <div className="callout tip">
              <strong>¿Cómo funciona <code>data-bs-toggle="collapse"</code>?</strong>
              El JS de Bootstrap escucha todos los clics en elementos con ese atributo.
              Cuando detecta el clic, busca el elemento con el id de{" "}
              <code>data-bs-target</code> y le añade/quita la clase <code>show</code>.
              ¡Eso es todo! La animación y el comportamiento responsive son puramente CSS.
            </div>

            <h3>navbar-expand-* — cuándo se muestra el menú completo</h3>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead><tr><th>Clase</th><th>Menú hamburguesa en</th><th>Menú completo desde</th></tr></thead>
                <tbody>
                  <tr><td><code>navbar-expand-sm</code></td><td>Solo en xs (&lt; 576px)</td><td>≥ 576px</td></tr>
                  <tr><td><code>navbar-expand-md</code></td><td>xs y sm (&lt; 768px)</td><td>≥ 768px ← el más habitual</td></tr>
                  <tr><td><code>navbar-expand-lg</code></td><td>hasta md (&lt; 992px)</td><td>≥ 992px</td></tr>
                  <tr><td><code>navbar-expand</code></td><td>Nunca</td><td>Siempre abierto</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · navbar-nav y nav-link: los links de navegación</summary>
          <div className="dd-body">
            <p>
              Los links del menú siguen la estructura <code>ul.navbar-nav {">"} li.nav-item {">"} a.nav-link</code>.
              Es verboso pero semántico y accesible.
            </p>
            <pre><code>{`<ul class="navbar-nav">

  <!-- link activo (página actual) -->
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
  </li>

  <!-- link normal -->
  <li class="nav-item">
    <a class="nav-link" href="#sobre">Sobre mí</a>
  </li>

  <!-- link desactivado -->
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Próximamente</a>
  </li>

</ul>`}</code></pre>

            <div className="callout">
              <code>aria-current="page"</code> en el link activo no es opcional: le indica
              a los lectores de pantalla qué página está activa ahora mismo.{" "}
              Bootstrap solo añade estilos visuales con <code>active</code>; la
              accesibilidad la aportas tú con el atributo aria.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Colores y variantes de la navbar</summary>
          <div className="dd-body">
            <p>
              Bootstrap incluye variantes de color predefinidas. A partir de Bootstrap 5.3
              también soporta el modo oscuro del sistema operativo automáticamente.
            </p>
            <pre><code>{`<!-- Navbar oscura -->
<nav class="navbar navbar-dark bg-dark">

<!-- Navbar clara -->
<nav class="navbar navbar-light bg-light">

<!-- Navbar con color de marca (usa cualquier color Bootstrap) -->
<nav class="navbar navbar-dark bg-primary">
<nav class="navbar navbar-dark bg-success">
<nav class="navbar navbar-dark bg-danger">

<!-- Navbar con color personalizado (solo CSS) -->
<nav class="navbar navbar-dark" style="background: #6366f1;">

<!-- Bootstrap 5.3+: modo oscuro automático -->
<nav class="navbar" data-bs-theme="dark">
<nav class="navbar" data-bs-theme="auto">  <!-- sigue el sistema operativo -->`}</code></pre>

            {/* Vista previa de colores */}
            <h3>Vista previa de variantes</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { bg: "#1e293b", text: "white", label: "bg-dark", nombre: "MiSitio" },
                { bg: "#f8fafc", text: "#1e293b", border: "1px solid #e2e8f0", label: "bg-light", nombre: "MiSitio" },
                { bg: "#6366f1", text: "white", label: "bg-primary personalizado", nombre: "MiSitio" },
                { bg: "#16a34a", text: "white", label: "bg-success", nombre: "MiSitio" },
              ].map(v => (
                <div key={v.label} style={{ background: v.bg, border: v.border, borderRadius: "8px", padding: "0.6rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <strong style={{ color: v.text, fontSize: "0.9rem" }}>{v.nombre}</strong>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {["Inicio", "Sobre mí", "Contacto"].map(l => (
                      <span key={l} style={{ color: v.text, opacity: 0.85, fontSize: "0.8rem" }}>{l}</span>
                    ))}
                  </div>
                  <span style={{ color: v.text, opacity: 0.5, fontSize: "0.65rem", fontFamily: "monospace" }}>{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · ms-auto: empujar elementos a la derecha</summary>
          <div className="dd-body">
            <p>
              <code>ms-auto</code> significa <em>margin-start: auto</em> (margen al
              inicio). En un contexto flex (que es la navbar), empuja todo el resto del
              contenido hacia la derecha. Es el equivalente de{" "}
              <code>margin-left: auto</code> que usarías en CSS puro.
            </p>
            <pre><code>{`<!-- Los links pegados a la derecha -->
<ul class="navbar-nav ms-auto">...</ul>

<!-- Logo a la izquierda, links en el centro, botón a la derecha -->
<a class="navbar-brand" href="#">Logo</a>
<div class="collapse navbar-collapse">
  <ul class="navbar-nav mx-auto">   <!-- mx-auto: margen automático a ambos lados -->
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  </ul>
  <div class="d-flex gap-2">        <!-- botones a la derecha -->
    <a href="#" class="btn btn-outline-light btn-sm">Login</a>
    <a href="#" class="btn btn-light btn-sm">Registro</a>
  </div>
</div>`}</code></pre>

            <div className="callout tip">
              <strong>Chuleta de utilidades de margen Bootstrap:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li><code>ms-auto</code> — <code>margin-left: auto</code> → empuja a la derecha</li>
                <li><code>me-auto</code> — <code>margin-right: auto</code> → empuja a la izquierda</li>
                <li><code>mx-auto</code> — márgenes automáticos a ambos lados → centra</li>
                <li><code>ms-2</code>, <code>me-3</code>… — márgenes fijos en escala del 1 al 5</li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Dropdown: submenús sin una línea de JS propio</summary>
          <div className="dd-body">
            <p>
              El dropdown permite añadir submenús a cualquier link de la navbar.
              Como el toggler, funciona solo con <code>data-bs-*</code>.
            </p>
            <pre><code>{`<li class="nav-item dropdown">

  <!-- El link que abre el dropdown -->
  <a class="nav-link dropdown-toggle"
     href="#"
     role="button"
     data-bs-toggle="dropdown"
     aria-expanded="false">
    Servicios
  </a>

  <!-- La lista desplegable -->
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#diseño">Diseño web</a></li>
    <li><a class="dropdown-item" href="#dev">Desarrollo</a></li>
    <li><hr class="dropdown-divider" /></li>   <!-- separador -->
    <li><a class="dropdown-item" href="#seo">SEO</a></li>
  </ul>

</li>`}</code></pre>
            <div className="callout warn">
              ⚠️ El JavaScript de Bootstrap (<code>bootstrap.bundle.min.js</code>) es{" "}
              <strong>imprescindible</strong> para que el dropdown funcione. Si olvidas
              el script al final del body, el menú hamburguesa y los dropdowns no se
              abrirán.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 8 — CÓDIGO COPIABLE ════════════ */}
      <section className="doc-section" id="paso-8">
        <details className="dd" open>
          <summary>Paso 8 · Tu HTML copiable: practica ya</summary>
          <div className="dd-body">
            <p>
              Navbar completa con logo, links, dropdown, botones de CTA y menú
              hamburguesa responsive. Cópiala, ábrela en el navegador y reduce
              la ventana para ver el toggler en acción.
            </p>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E12 · Bootstrap Navbar</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
  <style>
    body { padding-top: 70px; } /* espacio para la navbar fixed-top */
    .hero {
      min-height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: linear-gradient(135deg, #eef2ff, #e0e7ff);
    }
  </style>
</head>
<body>

  <!-- ✅ Navbar completa y responsive -->
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container">

      <!-- Logo / nombre -->
      <a class="navbar-brand fw-bold" href="#">
        🎨 MiPortfolio
      </a>

      <!-- Botón hamburguesa (visible solo en móvil) -->
      <button class="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navMenu"
              aria-controls="navMenu"
              aria-expanded="false"
              aria-label="Abrir menú">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú colapsable -->
      <div class="collapse navbar-collapse" id="navMenu">

        <!-- Links principales (centrados con mx-auto) -->
        <ul class="navbar-nav mx-auto gap-1">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sobre">Sobre mí</a>
          </li>

          <!-- Dropdown de Proyectos -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              Proyectos
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#web">Diseño web</a></li>
              <li><a class="dropdown-item" href="#apps">Aplicaciones</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#todos">Ver todos</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#blog">Blog</a>
          </li>
        </ul>

        <!-- Botones de CTA a la derecha -->
        <div class="d-flex gap-2 mt-2 mt-md-0">
          <a href="#contacto" class="btn btn-outline-light btn-sm">Contactar</a>
          <a href="#cv" class="btn btn-primary btn-sm">Descargar CV</a>
        </div>

      </div>
    </div>
  </nav>

  <!-- Contenido de prueba para ver la navbar en contexto -->
  <section class="hero">
    <div>
      <h1 class="display-4 fw-bold">Hola, soy diseñadora web</h1>
      <p class="lead text-muted">Especializada en CSS moderno y accesibilidad</p>
      <a href="#proyectos" class="btn btn-primary btn-lg mt-3">Ver proyectos</a>
    </div>
  </section>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}</code></pre>

            <div className="callout tip">
              🔬 <strong>Experimentos:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li>Cambia <code>navbar-dark bg-dark</code> por <code>navbar-light bg-white shadow-sm</code></li>
                <li>Quita <code>fixed-top</code> y observa que la navbar ya no flota</li>
                <li>Añade <code>sticky-top</code> en lugar de <code>fixed-top</code> — ¿cuál es la diferencia?</li>
                <li>Reduce la ventana hasta móvil y prueba el menú hamburguesa</li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 9 ════════════ */}
      <section className="doc-section" id="paso-9">
        <details className="dd" open>
          <summary>Paso 9 · Reto extra</summary>
          <div className="dd-body">
            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Navbar con fondo transparente que se vuelve oscura al hacer scroll</strong>: añade el atributo <code>data-bs-theme</code> y contrólalo con unas pocas líneas de JS.</li>
                <li><strong>Navbar con avatar de usuario</strong>: añade un dropdown en el extremo derecho con la foto de perfil, nombre y opciones "Mi perfil" / "Cerrar sesión".</li>
                <li><strong>Segunda navbar</strong>: crea una barra secundaria debajo de la principal con categorías o tabs usando las clases <code>nav nav-tabs</code>.</li>
                <li><strong>CSS puro equivalente</strong>: rehaz esta navbar sin Bootstrap, solo con Flexbox y <code>:checked + label</code> (el truco del checkbox para el toggler sin JS).</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e11-bootstrap-grid" className="btn">← E11 Bootstrap Grid</Link>
          <Link to="/ejercicios/e13-bootstrap-cards" className="btn btn-primary">Siguiente: E13 Cards →</Link>
        </div>
      </section>
    </main>
  );
}
