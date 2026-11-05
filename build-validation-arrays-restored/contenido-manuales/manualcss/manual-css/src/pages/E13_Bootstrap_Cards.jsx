import { useEffect } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E13 · Bootstrap: cards, badges y botones
// Objetivo: dominar los componentes visuales más
// usados en proyectos reales: tarjetas, etiquetas
// de estado y botones con todas sus variantes.
// =====================================================

const CARD_DATA = [
  { titulo: "Diseño de interfaces", categoria: "UI/UX", badge: "Nuevo", color: "#6366f1", img: "https://picsum.photos/seed/design/400/200" },
  { titulo: "Desarrollo frontend", categoria: "Dev", badge: "Popular", color: "#06b6d4", img: "https://picsum.photos/seed/frontend/400/200" },
  { titulo: "Accesibilidad web", categoria: "A11y", badge: "Pro", color: "#16a34a", img: "https://picsum.photos/seed/access/400/200" },
];

export default function E13_Bootstrap_Cards() {
  useEffect(() => {
    document.title = "E13 · Bootstrap Cards — Ejercicios CSS";
  }, []);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">Saltar al contenido</a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E13 · Nivel intermedio · Bootstrap 5</p>
        <h1>Bootstrap: cards, badges y botones</h1>
        <p className="doc-lead">
          Las tarjetas son el componente más versátil de Bootstrap: sirven para
          mostrar artículos, productos, perfiles o cualquier contenido agrupado.
          Junto con los <strong>badges</strong> para etiquetas de estado y los{" "}
          <strong>botones</strong> con todas sus variantes, dominarás los bloques
          visuales base de cualquier proyecto.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> estructura de <code>.card</code>,
          variantes con imagen, <code>.card-group</code> y <code>.card-deck</code>,
          badges con colores semánticos, botones (sólidos, outline, tamaños),
          y combinaciones reales.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · Anatomía de la card Bootstrap</a></li>
            <li><a href="#paso-2">Paso 2 · Card con imagen</a></li>
            <li><a href="#paso-3">Paso 3 · Variantes y utilidades</a></li>
            <li><a href="#paso-4">Paso 4 · Grupos y grids de cards</a></li>
            <li><a href="#paso-5">Paso 5 · Badges: etiquetas de estado</a></li>
            <li><a href="#paso-6">Paso 6 · Botones: todas las variantes</a></li>
            <li><a href="#paso-7">Paso 7 · Tu HTML copiable: practica ya</a></li>
            <li><a href="#paso-8">Paso 8 · Reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · Anatomía de la card Bootstrap</summary>
          <div className="dd-body">
            <p>
              La card Bootstrap es un contenedor flexible con partes opcionales.
              Puedes usar todas o solo las que necesites.
            </p>
            <pre><code>{`<div class="card">                              <!-- contenedor -->

  <div class="card-header">                     <!-- cabecera (opcional) -->
    Categoría del artículo
  </div>

  <div class="card-body">                       <!-- cuerpo principal -->
    <h5 class="card-title">Título</h5>
    <h6 class="card-subtitle mb-2 text-muted">Subtítulo</h6>
    <p class="card-text">Descripción del contenido...</p>
    <a href="#" class="btn btn-primary">Leer más</a>
  </div>

  <ul class="list-group list-group-flush">       <!-- lista interna (opcional) -->
    <li class="list-group-item">Ítem 1</li>
    <li class="list-group-item">Ítem 2</li>
  </ul>

  <div class="card-footer text-muted">          <!-- pie (opcional) -->
    Publicado el 1 de enero
  </div>

</div>`}</code></pre>

            {/* Vista previa mínima */}
            <h3>Vista previa: card básica</h3>
            <div style={{ maxWidth: "300px", border: "1px solid #e2e8f0", borderRadius: "0.5rem", overflow: "hidden", fontFamily: "system-ui" }}>
              <div style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", padding: "0.5rem 1rem", fontSize: "0.78rem", color: "#64748b" }}>Categoría</div>
              <div style={{ padding: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>Título de la tarjeta</div>
                <div style={{ color: "#64748b", fontSize: "0.8rem", marginBottom: "0.5rem" }}>Subtítulo descriptivo</div>
                <p style={{ fontSize: "0.85rem", color: "#374151", marginBottom: "0.75rem" }}>Texto de ejemplo con información relevante del contenido.</p>
                <span style={{ background: "#6366f1", color: "white", padding: "0.25rem 0.75rem", borderRadius: "0.375rem", fontSize: "0.8rem" }}>Leer más</span>
              </div>
              <div style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "0.5rem 1rem", fontSize: "0.75rem", color: "#94a3b8" }}>Publicado el 1 de enero</div>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · Card con imagen</summary>
          <div className="dd-body">
            <p>
              La imagen puede ir arriba (<code>card-img-top</code>), abajo (<code>card-img-bottom</code>)
              o como fondo de toda la tarjeta (<code>card-img-overlay</code>).
            </p>
            <pre><code>{`<!-- Imagen arriba (lo más común) -->
<div class="card" style="width: 18rem;">
  <img src="imagen.jpg" class="card-img-top" alt="Descripción" />
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Descripción breve.</p>
    <a href="#" class="btn btn-primary">Ver más</a>
  </div>
</div>

<!-- Imagen con texto superpuesto (overlay) -->
<div class="card text-bg-dark">
  <img src="imagen.jpg" class="card-img" alt="Descripción" />
  <div class="card-img-overlay">
    <h5 class="card-title">Título sobre la imagen</h5>
    <p class="card-text">Solo si hay suficiente contraste.</p>
  </div>
</div>`}</code></pre>
            <div className="callout warn">
              ⚠️ <code>card-img-overlay</code> requiere que la imagen tenga suficiente
              oscuridad para que el texto sea legible. Añade un degradado con CSS
              (<code>background: linear-gradient(transparent, rgba(0,0,0,0.6))</code>)
              si la imagen es muy clara.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · Variantes de color y utilidades</summary>
          <div className="dd-body">
            <p>
              Bootstrap incluye atajos de color para cards usando la clase{" "}
              <code>text-bg-*</code> (Bootstrap 5.2+) que gestiona fondo y texto
              con el contraste correcto.
            </p>
            <pre><code>{`<div class="card text-bg-primary mb-3">...</div>
<div class="card text-bg-success mb-3">...</div>
<div class="card text-bg-danger mb-3">...</div>
<div class="card text-bg-warning mb-3">...</div>
<div class="card text-bg-info mb-3">...</div>
<div class="card text-bg-dark mb-3">...</div>`}</code></pre>

            {/* Vista previa de colores */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {[
                { bg: "#6366f1", text: "white", label: "primary" },
                { bg: "#16a34a", text: "white", label: "success" },
                { bg: "#dc2626", text: "white", label: "danger" },
                { bg: "#f59e0b", text: "black", label: "warning" },
                { bg: "#0ea5e9", text: "white", label: "info" },
                { bg: "#1e293b", text: "white", label: "dark" },
              ].map(v => (
                <div key={v.label} style={{ background: v.bg, color: v.text, borderRadius: "8px", padding: "0.5rem 0.75rem", fontSize: "0.78rem", fontFamily: "monospace", minWidth: "90px", textAlign: "center" }}>
                  <div style={{ fontWeight: 700 }}>Título</div>
                  <div style={{ opacity: 0.8, marginTop: "0.2rem" }}>text-bg-{v.label}</div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · Grupos y grids de cards</summary>
          <div className="dd-body">
            <p>
              Para mostrar varias tarjetas combinamos Bootstrap Grid con las cards.{" "}
              <strong>No uses <code>card-deck</code></strong>: era de Bootstrap 4 y
              fue eliminado. La forma correcta en Bootstrap 5 es usar el grid:
            </p>
            <pre><code>{`<!-- ✅ Forma correcta en Bootstrap 5 -->
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">  <!-- h-100: todas las cards a la misma altura -->
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card 1</h5>
        <p class="card-text">Descripción...</p>
      </div>
      <div class="card-footer">Pie de tarjeta</div>
    </div>
  </div>
  <!-- repite .col + .card para cada tarjeta -->
</div>

<!-- Explicación de las clases del row -->
<!-- row-cols-1: 1 columna en móvil (apiladas) -->
<!-- row-cols-md-3: 3 columnas desde tablet -->
<!-- g-4: gap de 1.5rem entre cards (gutters) -->
<!-- h-100: todas las cards a la misma altura -->`}</code></pre>

            {/* Vista previa de grid 3 columnas */}
            <h3>Vista previa: 3 cards iguales</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
              {CARD_DATA.map(c => (
                <div key={c.titulo} style={{ border: "1px solid #e2e8f0", borderRadius: "0.5rem", overflow: "hidden", fontFamily: "system-ui", display: "flex", flexDirection: "column" }}>
                  <div style={{ height: "100px", background: `linear-gradient(135deg, ${c.color}22, ${c.color}55)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "2rem" }}>🖼️</span>
                  </div>
                  <div style={{ padding: "0.75rem", flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.25rem" }}>{c.titulo}</div>
                    <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Descripción de la tarjeta.</div>
                  </div>
                  <div style={{ padding: "0.5rem 0.75rem", borderTop: "1px solid #f1f5f9", fontSize: "0.72rem", color: "#94a3b8", background: "#f8fafc" }}>
                    {c.categoria}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Badges: etiquetas de estado y contadores</summary>
          <div className="dd-body">
            <p>
              Los badges son pequeñas etiquetas para indicar estados, categorías
              o contadores. Se usan dentro o junto a otros elementos.
            </p>
            <pre><code>{`<!-- Dentro de un heading -->
<h5>Mensajes <span class="badge text-bg-danger">4</span></h5>

<!-- Sobre un botón (posicionado) -->
<button type="button" class="btn btn-primary position-relative">
  Bandeja de entrada
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
  </span>
</button>

<!-- Badge en una card (categoría) -->
<div class="card-body">
  <span class="badge text-bg-primary mb-2">Nuevo</span>
  <h5 class="card-title">Artículo reciente</h5>
</div>

<!-- Todas las variantes de color -->
<span class="badge text-bg-primary">primary</span>
<span class="badge text-bg-secondary">secondary</span>
<span class="badge text-bg-success">success</span>
<span class="badge text-bg-danger">danger</span>
<span class="badge text-bg-warning">warning</span>
<span class="badge text-bg-info">info</span>
<span class="badge text-bg-dark">dark</span>

<!-- Badge redondeada (pill) -->
<span class="badge rounded-pill text-bg-primary">Pill badge</span>`}</code></pre>

            {/* Vista previa de badges */}
            <h3>Vista previa de badges</h3>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
              {[
                { bg: "#6366f1", text: "white", label: "primary" },
                { bg: "#64748b", text: "white", label: "secondary" },
                { bg: "#16a34a", text: "white", label: "success" },
                { bg: "#dc2626", text: "white", label: "danger" },
                { bg: "#f59e0b", text: "black", label: "warning" },
                { bg: "#0ea5e9", text: "white", label: "info" },
                { bg: "#1e293b", text: "white", label: "dark" },
              ].map(b => (
                <span key={b.label} style={{ background: b.bg, color: b.text, padding: "0.2em 0.6em", borderRadius: "0.35rem", fontSize: "0.72rem", fontWeight: 600 }}>{b.label}</span>
              ))}
              <span style={{ background: "#6366f1", color: "white", padding: "0.2em 0.65em", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 600 }}>Pill</span>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Botones: todas las variantes</summary>
          <div className="dd-body">
            <p>
              Bootstrap tiene dos familias de botones: <strong>sólidos</strong> (<code>btn-primary</code>) y{" "}
              <strong>outline</strong> (<code>btn-outline-primary</code>). Más dos tamaños adicionales.
            </p>
            <pre><code>{`<!-- Botones sólidos -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>

<!-- Botones outline -->
<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-secondary">Secondary</button>
<!-- (mismos colores disponibles) -->

<!-- Tamaños -->
<button class="btn btn-primary btn-lg">Grande</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-sm">Pequeño</button>

<!-- Ancho completo -->
<button class="btn btn-primary w-100">Ancho completo</button>

<!-- Desactivado -->
<button class="btn btn-primary" disabled>Desactivado</button>

<!-- Grupo de botones -->
<div class="btn-group" role="group" aria-label="Opciones">
  <button class="btn btn-outline-primary">Día</button>
  <button class="btn btn-outline-primary">Semana</button>
  <button class="btn btn-outline-primary">Mes</button>
</div>`}</code></pre>

            {/* Vista previa */}
            <h3>Vista previa de botones</h3>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
              {[
                { bg: "#6366f1", border: "#6366f1", text: "white", label: "Primary" },
                { bg: "#64748b", border: "#64748b", text: "white", label: "Secondary" },
                { bg: "#16a34a", border: "#16a34a", text: "white", label: "Success" },
                { bg: "#dc2626", border: "#dc2626", text: "white", label: "Danger" },
                { bg: "#f59e0b", border: "#f59e0b", text: "black", label: "Warning" },
              ].map(b => (
                <span key={b.label} style={{ background: b.bg, border: `1px solid ${b.border}`, color: b.text, padding: "0.375rem 0.75rem", borderRadius: "0.375rem", fontSize: "0.85rem", cursor: "pointer" }}>{b.label}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {[
                { color: "#6366f1", label: "Primary" },
                { color: "#64748b", label: "Secondary" },
                { color: "#16a34a", label: "Success" },
              ].map(b => (
                <span key={b.label} style={{ background: "transparent", border: `1px solid ${b.color}`, color: b.color, padding: "0.375rem 0.75rem", borderRadius: "0.375rem", fontSize: "0.85rem", cursor: "pointer" }}>{b.label}</span>
              ))}
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
              Página de ejemplo con grid de cards, badges y botones. Cópiala y experimenta.
            </p>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E13 · Cards, Badges y Botones</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
</head>
<body class="bg-light">

  <div class="container py-5">

    <h1 class="mb-1">Nuestros cursos</h1>
    <p class="text-muted mb-4">Aprende a tu ritmo</p>

    <!-- Grid de cards -->
    <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">

      <!-- Card 1 -->
      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="https://picsum.photos/seed/css/400/200" class="card-img-top" alt="CSS" />
          <div class="card-body">
            <span class="badge text-bg-primary mb-2">Nuevo</span>
            <h5 class="card-title">CSS Moderno</h5>
            <p class="card-text text-muted">Aprende Flexbox, Grid, animaciones y variables CSS con proyectos reales.</p>
          </div>
          <div class="card-footer d-flex align-items-center justify-content-between">
            <span class="text-muted small">⏱ 20h · Intermedio</span>
            <a href="#" class="btn btn-outline-primary btn-sm">Empezar</a>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="https://picsum.photos/seed/bootstrap/400/200" class="card-img-top" alt="Bootstrap" />
          <div class="card-body">
            <span class="badge text-bg-success mb-2">Popular</span>
            <h5 class="card-title">Bootstrap 5</h5>
            <p class="card-text text-muted">Maqueta interfaces completas y responsivas en la mitad de tiempo.</p>
          </div>
          <div class="card-footer d-flex align-items-center justify-content-between">
            <span class="text-muted small">⏱ 15h · Básico</span>
            <a href="#" class="btn btn-outline-success btn-sm">Empezar</a>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="https://picsum.photos/seed/tailwind/400/200" class="card-img-top" alt="Tailwind" />
          <div class="card-body">
            <span class="badge text-bg-info mb-2">Trending</span>
            <h5 class="card-title">Tailwind CSS</h5>
            <p class="card-text text-muted">El framework utility-first que está revolucionando el diseño web.</p>
          </div>
          <div class="card-footer d-flex align-items-center justify-content-between">
            <span class="text-muted small">⏱ 18h · Intermedio</span>
            <a href="#" class="btn btn-outline-info btn-sm">Empezar</a>
          </div>
        </div>
      </div>

    </div>

    <!-- Sección de badges en contexto -->
    <h2 class="mb-3">Estados del pedido</h2>
    <div class="card mb-5">
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Bootstrap: navbar responsive
          <span class="badge text-bg-success">Completado</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          CSS Grid avanzado
          <span class="badge text-bg-primary">En curso</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Tailwind: proyecto final
          <span class="badge text-bg-secondary">Pendiente</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Accesibilidad web
          <span class="badge text-bg-danger">Bloqueado</span>
        </li>
      </ul>
    </div>

    <!-- Grupo de botones -->
    <h2 class="mb-3">Filtrar cursos</h2>
    <div class="btn-group mb-4 flex-wrap" role="group" aria-label="Filtros">
      <button class="btn btn-primary">Todos</button>
      <button class="btn btn-outline-primary">CSS</button>
      <button class="btn btn-outline-primary">Bootstrap</button>
      <button class="btn btn-outline-primary">Tailwind</button>
      <button class="btn btn-outline-primary">React</button>
    </div>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}</code></pre>
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
                <li><strong>Card horizontal</strong>: usa <code>row g-0</code> dentro de la card y <code>col-md-4</code> para la imagen + <code>col-md-8</code> para el cuerpo. Crea un componente estilo artículo de blog.</li>
                <li><strong>Card de perfil de usuario</strong>: foto de perfil centrada encima, nombre, descripción, contador de seguidores con badges y botones "Seguir" / "Mensaje".</li>
                <li><strong>Grid de precios</strong>: 3 cards con plan gratuito, profesional (destacado con borde de color) y empresarial. Cada una con lista de características y botón de compra.</li>
                <li><strong>Badges dinámicos</strong>: usa JavaScript para cambiar el color del badge según el estado (verde = completado, amarillo = en curso, rojo = bloqueado).</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e12-bootstrap-navbar" className="btn">← E12 Bootstrap Navbar</Link>
          <Link to="/ejercicios/e14-bootstrap-forms" className="btn btn-primary">Siguiente: E14 Formularios →</Link>
        </div>
      </section>
    </main>
  );
}
