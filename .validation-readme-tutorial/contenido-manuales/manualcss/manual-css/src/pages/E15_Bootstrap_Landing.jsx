import { useEffect } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E15 · Bootstrap: landing page completa
// Objetivo: integrar todos los componentes aprendidos
// en este bloque Bootstrap (E11–E14) para construir
// una landing page profesional y totalmente responsive.
// =====================================================

const FEATURES = [
  { icon: "🎨", titulo: "Diseño moderno", desc: "Componentes visualmente atractivos incluidos de serie. Sin diseñador necesario." },
  { icon: "📱", titulo: "Mobile first", desc: "Diseñado para móviles desde la base. Los breakpoints hacen el resto." },
  { icon: "⚡", titulo: "Listo en minutos", desc: "CDN, una estructura y ya tienes una página funcional. Sin instalaciones." },
  { icon: "♿", titulo: "Accesible", desc: "Bootstrap implementa las mejores prácticas de accesibilidad en sus componentes." },
  { icon: "🧩", titulo: "Componentes ricos", desc: "Navbar, cards, modales, formularios, tooltips… todo sin escribir JS." },
  { icon: "🌍", titulo: "Comunidad enorme", desc: "Documentación, temas, plugins y una comunidad activa desde 2011." },
];

const TESTIMONIALS = [
  { nombre: "Laura M.", rol: "Diseñadora UI", texto: "Bootstrap me permite entregar prototipos a mis clientes en horas en lugar de días.", avatar: "LM" },
  { nombre: "Carlos R.", rol: "Freelance developer", texto: "El grid de Bootstrap me solucionó el responsive que tardaba semanas en afinar.", avatar: "CR" },
  { nombre: "Sofía A.", rol: "Estudiante de DAW", texto: "Empecé con CSS puro, luego aprendí Bootstrap. Ahora los dos se complementan perfectamente.", avatar: "SA" },
];

const PRICING = [
  { plan: "Gratis", precio: "0€", periodo: "para siempre", color: "#64748b", features: ["5 proyectos", "CDN sin límite", "Documentación completa", "Comunidad"], cta: "Empezar gratis", outline: true },
  { plan: "Pro", precio: "9€", periodo: "al mes", color: "#6366f1", destacado: true, features: ["Proyectos ilimitados", "Temas premium", "Soporte prioritario", "Plantillas exclusivas", "Sin publicidad"], cta: "Empezar prueba", outline: false },
  { plan: "Equipo", precio: "29€", periodo: "al mes", color: "#06b6d4", features: ["Todo el plan Pro", "Hasta 10 usuarios", "Panel de equipo", "Factura mensual", "Integración Figma"], cta: "Contactar", outline: true },
];

export default function E15_Bootstrap_Landing() {
  useEffect(() => {
    document.title = "E15 · Bootstrap Landing — Ejercicios CSS";
  }, []);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">Saltar al contenido</a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E15 · Nivel intermedio · Bootstrap 5 · Proyecto integrador</p>
        <h1>Bootstrap: landing page completa</h1>
        <p className="doc-lead">
          El ejercicio final del bloque Bootstrap. Aquí integras{" "}
          <strong>todo lo aprendido en E11–E14</strong> para construir una landing
          page profesional completa: navbar, hero, features, testimonios, precios y footer.
          Recibirás el HTML completo listo para copiar y personalizar.
        </p>
        <div className="callout tip">
          🎯 <strong>Secciones de la landing:</strong> Navbar responsive (E12) ·
          Hero con CTA · Grid de features 3 columnas (E11) · Cards de testimonios (E13) ·
          Tabla de precios con badge destacado · Formulario de contacto (E14) · Footer con columnas
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · Planificación y estructura general</a></li>
            <li><a href="#paso-2">Paso 2 · Navbar + Hero</a></li>
            <li><a href="#paso-3">Paso 3 · Sección Features (grid 3 cols)</a></li>
            <li><a href="#paso-4">Paso 4 · Testimonios con cards</a></li>
            <li><a href="#paso-5">Paso 5 · Tabla de precios</a></li>
            <li><a href="#paso-6">Paso 6 · Formulario de contacto</a></li>
            <li><a href="#paso-7">Paso 7 · Footer con columnas</a></li>
            <li><a href="#paso-8">Paso 8 · HTML completo copiable</a></li>
            <li><a href="#paso-9">Paso 9 · Reto extra: personalización</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · Planificación y estructura general</summary>
          <div className="dd-body">
            <p>
              Antes de escribir código, planifica qué secciones tendrá la página y qué
              componente Bootstrap usará cada una. Esta es la estructura del proyecto:
            </p>
            <pre><code>{`landing-page.html
│
├── <nav>        Navbar fixed-top  (navbar + container)
│
├── <section id="hero">
│     Hero con título, subtítulo y CTAs
│     Fondo con degradado CSS
│
├── <section id="features">
│     Grid de características
│     row row-cols-1 row-cols-md-3 g-4
│
├── <section id="testimonios">
│     Cards de testimonios de usuarios
│     row row-cols-1 row-cols-md-3 g-4
│
├── <section id="precios">
│     Tres columnas de precios
│     Tarjeta destacada con borde de color
│
├── <section id="contacto">
│     Formulario de Bootstrap (form-control, is-valid...)
│
└── <footer>
      grid de 4 columnas con links y copyright`}</code></pre>

            <div className="callout tip">
              <strong>Regla de oro del maquetado por secciones:</strong> cada sección
              es un <code>&lt;section&gt;</code> con un <code>id</code>. Dentro, un{" "}
              <code>&lt;div class="container"&gt;</code> que centra el contenido.
              Las secciones alternas tienen fondos distintos (blanco / gris claro)
              para diferenciarlas visualmente.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · Navbar + Hero: la primera impresión</summary>
          <div className="dd-body">
            <pre><code>{`<!-- NAVBAR (del E12, con fixed-top) -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">🎨 Bootstrap Pro</a>
    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navMenu"
            aria-controls="navMenu" aria-expanded="false"
            aria-label="Abrir menú">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav mx-auto gap-1">
        <li class="nav-item"><a class="nav-link active" href="#">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="#features">Características</a></li>
        <li class="nav-item"><a class="nav-link" href="#precios">Precios</a></li>
        <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
      </ul>
      <a href="#precios" class="btn btn-primary btn-sm mt-2 mt-md-0">Ver planes</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section id="hero" class="d-flex align-items-center text-white text-center"
  style="min-height: 100vh; padding-top: 70px;
  background: linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #6366f1 100%);">
  <div class="container">
    <span class="badge text-bg-warning mb-3 px-3 py-2">✨ Nuevo en Bootstrap 5.3</span>
    <h1 class="display-3 fw-bold mb-3">
      Maqueta sin límites<br />
      <span class="text-warning">con Bootstrap</span>
    </h1>
    <p class="lead opacity-75 mb-4 col-md-8 mx-auto">
      El framework CSS más usado del mundo. Componentes listos,
      grid responsive, JavaScript opcional.
    </p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#features" class="btn btn-primary btn-lg px-4">Explorar características</a>
      <a href="https://getbootstrap.com" class="btn btn-outline-light btn-lg px-4"
         target="_blank" rel="noopener">Documentación oficial</a>
    </div>
    <p class="mt-4 opacity-50 small">
      Usado por GitHub, Spotify, Airbnb y millones de proyectos más.
    </p>
  </div>
</section>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 — FEATURES ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · Features: grid de características (3 columnas)</summary>
          <div className="dd-body">
            <pre><code>{`<section id="features" class="py-6 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">¿Por qué Bootstrap?</h2>
      <p class="text-muted lead">Todo lo que necesitas para construir interfaces modernas</p>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

      <!-- Característica 1 -->
      <div class="col">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body p-4">
            <div class="fs-1 mb-3">🎨</div>
            <h5 class="card-title fw-bold">Diseño moderno</h5>
            <p class="card-text text-muted">
              Componentes visualmente atractivos incluidos de serie.
            </p>
          </div>
        </div>
      </div>

      <!-- Característica 2 -->
      <div class="col">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body p-4">
            <div class="fs-1 mb-3">📱</div>
            <h5 class="card-title fw-bold">Mobile first</h5>
            <p class="card-text text-muted">
              Diseñado para móviles desde la base.
            </p>
          </div>
        </div>
      </div>

      <!-- ... repite para cada característica -->

    </div>
  </div>
</section>`}</code></pre>

            {/* Vista previa de las features */}
            <h3>Vista previa</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
              {FEATURES.slice(0, 3).map(f => (
                <div key={f.titulo} style={{ background: "white", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>{f.titulo}</div>
                  <div style={{ color: "#64748b", fontSize: "0.78rem", lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 — TESTIMONIOS ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · Cards de testimonios</summary>
          <div className="dd-body">
            <pre><code>{`<section id="testimonios" class="py-6">
  <div class="container">
    <h2 class="text-center fw-bold mb-5">Lo que dicen nuestros alumnos</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">

      <div class="col">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body p-4">
            <p class="card-text text-muted fst-italic mb-4">
              "Bootstrap me permite entregar prototipos en horas."
            </p>
            <div class="d-flex align-items-center gap-3">
              <!-- Avatar con iniciales -->
              <div class="rounded-circle d-flex align-items-center justify-content-center
                          fw-bold text-white"
                   style="width:48px; height:48px; background:#6366f1; flex-shrink:0;">
                LM
              </div>
              <div>
                <div class="fw-bold">Laura M.</div>
                <div class="text-muted small">Diseñadora UI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- repite .col para cada testimonio -->

    </div>
  </div>
</section>`}</code></pre>

            {/* Vista previa */}
            <h3>Vista previa</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
              {TESTIMONIALS.map(t => (
                <div key={t.nombre} style={{ background: "white", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p style={{ color: "#475569", fontSize: "0.82rem", fontStyle: "italic", flex: 1 }}>"{t.texto}"</p>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#6366f1", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.82rem" }}>{t.nombre}</div>
                      <div style={{ color: "#94a3b8", fontSize: "0.72rem" }}>{t.rol}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 — PRECIOS ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Tabla de precios</summary>
          <div className="dd-body">
            <pre><code>{`<section id="precios" class="py-6 bg-light">
  <div class="container">
    <h2 class="text-center fw-bold mb-5">Elige tu plan</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">

      <!-- Plan gratuito -->
      <div class="col">
        <div class="card h-100 text-center">
          <div class="card-body p-4">
            <h5 class="card-title fw-bold">Gratis</h5>
            <p class="display-5 fw-bold my-3">0€
              <small class="text-muted fs-6">/ siempre</small>
            </p>
            <ul class="list-unstyled mb-4">
              <li class="mb-2">✓ 5 proyectos</li>
              <li class="mb-2">✓ CDN sin límite</li>
              <li class="mb-2">✓ Documentación</li>
              <li class="text-muted mb-2">✗ Temas premium</li>
            </ul>
            <a href="#" class="btn btn-outline-primary w-100">Empezar gratis</a>
          </div>
        </div>
      </div>

      <!-- Plan Pro (destacado) -->
      <div class="col">
        <div class="card h-100 text-center border-primary border-2 shadow">
          <div class="card-header bg-primary text-white fw-bold py-2">
            ⭐ Más popular
          </div>
          <div class="card-body p-4">
            <h5 class="card-title fw-bold">Pro</h5>
            <p class="display-5 fw-bold my-3">9€
              <small class="text-muted fs-6">/ mes</small>
            </p>
            <ul class="list-unstyled mb-4">
              <li class="mb-2">✓ Proyectos ilimitados</li>
              <li class="mb-2">✓ Temas premium</li>
              <li class="mb-2">✓ Soporte prioritario</li>
              <li class="mb-2">✓ Plantillas exclusivas</li>
              <li class="mb-2">✓ Sin publicidad</li>
            </ul>
            <a href="#" class="btn btn-primary w-100">Empezar prueba</a>
          </div>
        </div>
      </div>

      <!-- Plan Equipo -->
      <div class="col">...</div>

    </div>
  </div>
</section>`}</code></pre>

            {/* Vista previa */}
            <h3>Vista previa de planes</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
              {PRICING.map(p => (
                <div key={p.plan} style={{ background: "white", borderRadius: "12px", border: `${p.destacado ? "2px" : "1px"} solid ${p.destacado ? p.color : "#e2e8f0"}`, overflow: "hidden", boxShadow: p.destacado ? "0 4px 16px rgba(99,102,241,0.2)" : "none" }}>
                  {p.destacado && <div style={{ background: p.color, color: "white", textAlign: "center", padding: "0.4rem", fontSize: "0.75rem", fontWeight: 700 }}>⭐ Más popular</div>}
                  <div style={{ padding: "1.25rem", textAlign: "center" }}>
                    <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.plan}</div>
                    <div style={{ fontSize: "1.75rem", fontWeight: 800, color: p.color }}>{p.precio}<span style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 400 }}>/{p.periodo}</span></div>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0.75rem 0", fontSize: "0.78rem" }}>
                      {p.features.map(f => <li key={f} style={{ marginBottom: "0.25rem" }}>✓ {f}</li>)}
                    </ul>
                    <div style={{ background: p.outline ? "transparent" : p.color, border: `1px solid ${p.color}`, color: p.outline ? p.color : "white", borderRadius: "6px", padding: "0.4rem 1rem", fontSize: "0.8rem", cursor: "pointer" }}>{p.cta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 — FORMULARIO ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Formulario de contacto</summary>
          <div className="dd-body">
            <pre><code>{`<section id="contacto" class="py-6">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <h2 class="text-center fw-bold mb-2">¿Hablamos?</h2>
        <p class="text-center text-muted mb-4">
          Responderemos en menos de 24 horas.
        </p>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="cName" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="cName" required />
              <div class="invalid-feedback">Campo obligatorio.</div>
            </div>
            <div class="col-md-6">
              <label for="cEmail" class="form-label">Email</label>
              <input type="email" class="form-control" id="cEmail" required />
              <div class="invalid-feedback">Email inválido.</div>
            </div>
            <div class="col-12">
              <label for="cAsunto" class="form-label">Asunto</label>
              <select class="form-select" id="cAsunto" required>
                <option value="">Selecciona un asunto...</option>
                <option>Consulta sobre planes</option>
                <option>Soporte técnico</option>
                <option>Colaboración</option>
              </select>
              <div class="invalid-feedback">Selecciona un asunto.</div>
            </div>
            <div class="col-12">
              <label for="cMsg" class="form-label">Mensaje</label>
              <textarea class="form-control" id="cMsg" rows="4"
                placeholder="Cuéntanos en qué podemos ayudarte..." required></textarea>
              <div class="invalid-feedback">Escribe tu mensaje.</div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary w-100 btn-lg">
                Enviar mensaje
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 — FOOTER ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Footer con columnas</summary>
          <div className="dd-body">
            <pre><code>{`<footer class="bg-dark text-light py-5 mt-0">
  <div class="container">
    <div class="row row-cols-1 row-cols-md-4 g-4 mb-4">

      <!-- Columna 1: marca -->
      <div class="col">
        <h5 class="fw-bold mb-3">🎨 Bootstrap Pro</h5>
        <p class="text-muted small">
          El framework CSS más popular del mundo para crear interfaces responsive.
        </p>
      </div>

      <!-- Columna 2: links docs -->
      <div class="col">
        <h6 class="fw-bold mb-3">Documentación</h6>
        <ul class="list-unstyled">
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">Grid System</a></li>
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">Componentes</a></li>
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">Utilidades</a></li>
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">JavaScript</a></li>
        </ul>
      </div>

      <!-- Columna 3: comunidad -->
      <div class="col">
        <h6 class="fw-bold mb-3">Comunidad</h6>
        <ul class="list-unstyled">
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">GitHub</a></li>
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">Discord</a></li>
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">Blog</a></li>
        </ul>
      </div>

      <!-- Columna 4: newsletter -->
      <div class="col">
        <h6 class="fw-bold mb-3">Newsletter</h6>
        <p class="text-muted small mb-2">Novedades cada semana.</p>
        <div class="input-group">
          <input type="email" class="form-control form-control-sm"
            placeholder="tu@email.com" />
          <button class="btn btn-primary btn-sm">Unirme</button>
        </div>
      </div>

    </div>
    <hr class="border-secondary" />
    <p class="text-center text-muted small mb-0">
      © 2025 Bootstrap Pro. Hecho con ❤️ y Bootstrap 5.
    </p>
  </div>
</footer>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 8 — HTML COMPLETO ════════════ */}
      <section className="doc-section" id="paso-8">
        <details className="dd" open>
          <summary>Paso 8 · HTML completo copiable: tu landing página</summary>
          <div className="dd-body">
            <p>
              Copia todo este HTML, guárdalo como <code>landing.html</code> y ábrelo
              en el navegador. Verás una landing page completa y responsive.
            </p>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bootstrap Pro · Landing Page</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
  <style>
    /* Espaciado extra para secciones */
    .py-6 { padding-top: 5rem; padding-bottom: 5rem; }
    /* Smooth scroll */
    html { scroll-behavior: smooth; }
  </style>
</head>
<body>

<!-- ══════════════════════════════════════
     NAVBAR
══════════════════════════════════════ -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">🎨 Bootstrap Pro</a>
    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navMain"
            aria-controls="navMain" aria-expanded="false"
            aria-label="Abrir menú">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMain">
      <ul class="navbar-nav mx-auto gap-1">
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="#features">Características</a></li>
        <li class="nav-item"><a class="nav-link" href="#testimonios">Testimonios</a></li>
        <li class="nav-item"><a class="nav-link" href="#precios">Precios</a></li>
        <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
      </ul>
      <a href="#precios" class="btn btn-primary btn-sm mt-2 mt-md-0">Ver planes</a>
    </div>
  </div>
</nav>

<!-- ══════════════════════════════════════
     HERO
══════════════════════════════════════ -->
<section id="hero" class="d-flex align-items-center text-white text-center"
  style="min-height:100vh; padding-top:70px;
  background:linear-gradient(135deg,#1e1b4b 0%,#4c1d95 50%,#6366f1 100%);">
  <div class="container">
    <span class="badge text-bg-warning mb-3 px-3 py-2 fs-6">✨ Nuevo en Bootstrap 5.3</span>
    <h1 class="display-3 fw-bold mb-3">
      Maqueta sin límites<br/>
      <span class="text-warning">con Bootstrap</span>
    </h1>
    <p class="lead opacity-75 mb-4 col-md-8 mx-auto">
      El framework CSS más usado del mundo. Componentes listos, grid responsive,
      accesibilidad incluida.
    </p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#features" class="btn btn-primary btn-lg px-4">Explorar características</a>
      <a href="https://getbootstrap.com" class="btn btn-outline-light btn-lg px-4"
         target="_blank" rel="noopener noreferrer">Documentación oficial</a>
    </div>
    <p class="mt-4 opacity-50 small">
      Usado por GitHub, Spotify, Airbnb y millones de proyectos más.
    </p>
  </div>
</section>

<!-- ══════════════════════════════════════
     FEATURES
══════════════════════════════════════ -->
<section id="features" class="py-6 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold display-6">¿Por qué Bootstrap?</h2>
      <p class="lead text-muted">Todo lo que necesitas para construir interfaces modernas</p>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col">
        <div class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
          <div class="fs-1 mb-3">🎨</div>
          <h5 class="card-title fw-bold">Diseño moderno</h5>
          <p class="card-text text-muted">Componentes atractivos incluidos de serie. Sin diseñador necesario.</p>
        </div></div>
      </div>
      <div class="col">
        <div class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
          <div class="fs-1 mb-3">📱</div>
          <h5 class="card-title fw-bold">Mobile first</h5>
          <p class="card-text text-muted">Diseñado para móviles desde la base. Los breakpoints hacen el resto.</p>
        </div></div>
      </div>
      <div class="col">
        <div class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
          <div class="fs-1 mb-3">⚡</div>
          <h5 class="card-title fw-bold">Listo en minutos</h5>
          <p class="card-text text-muted">CDN, una estructura y ya tienes una página funcional. Sin instalaciones.</p>
        </div></div>
      </div>
      <div class="col">
        <div class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
          <div class="fs-1 mb-3">♿</div>
          <h5 class="card-title fw-bold">Accesible</h5>
          <p class="card-text text-muted">Bootstrap implementa las mejores prácticas de accesibilidad por defecto.</p>
        </div></div>
      </div>
      <div class="col">
        <div class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
          <div class="fs-1 mb-3">🧩</div>
          <h5 class="card-title fw-bold">Componentes ricos</h5>
          <p class="card-text text-muted">Navbar, cards, modales, formularios, tooltips… todo sin escribir JS propio.</p>
        </div></div>
      </div>
      <div class="col">
        <div class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
          <div class="fs-1 mb-3">🌍</div>
          <h5 class="card-title fw-bold">Comunidad enorme</h5>
          <p class="card-text text-muted">Documentación, temas, plugins y una comunidad activa desde 2011.</p>
        </div></div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     TESTIMONIOS
══════════════════════════════════════ -->
<section id="testimonios" class="py-6">
  <div class="container">
    <h2 class="text-center fw-bold display-6 mb-5">Lo que dicen nuestros alumnos</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
          <p class="card-text text-muted fst-italic mb-4">
            "Bootstrap me permite entregar prototipos a mis clientes en horas en lugar de días."
          </p>
          <div class="d-flex align-items-center gap-3">
            <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
              style="width:48px;height:48px;background:#6366f1;flex-shrink:0;">LM</div>
            <div><div class="fw-bold">Laura M.</div><div class="text-muted small">Diseñadora UI</div></div>
          </div>
        </div></div>
      </div>
      <div class="col">
        <div class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
          <p class="card-text text-muted fst-italic mb-4">
            "El grid de Bootstrap me solucionó el responsive que tardaba semanas en afinar."
          </p>
          <div class="d-flex align-items-center gap-3">
            <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
              style="width:48px;height:48px;background:#06b6d4;flex-shrink:0;">CR</div>
            <div><div class="fw-bold">Carlos R.</div><div class="text-muted small">Freelance developer</div></div>
          </div>
        </div></div>
      </div>
      <div class="col">
        <div class="card h-100 border-0 shadow-sm"><div class="card-body p-4">
          <p class="card-text text-muted fst-italic mb-4">
            "Empecé con CSS puro, luego aprendí Bootstrap. Ahora los dos se complementan."
          </p>
          <div class="d-flex align-items-center gap-3">
            <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
              style="width:48px;height:48px;background:#16a34a;flex-shrink:0;">SA</div>
            <div><div class="fw-bold">Sofía A.</div><div class="text-muted small">Estudiante de DAW</div></div>
          </div>
        </div></div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     PRECIOS
══════════════════════════════════════ -->
<section id="precios" class="py-6 bg-light">
  <div class="container">
    <h2 class="text-center fw-bold display-6 mb-5">Elige tu plan</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center align-items-stretch">

      <!-- Plan Gratis -->
      <div class="col">
        <div class="card h-100 text-center">
          <div class="card-body p-4 d-flex flex-column">
            <h5 class="card-title fw-bold">Gratis</h5>
            <p class="display-5 fw-bold my-3">0€ <small class="text-muted fs-6">/ siempre</small></p>
            <ul class="list-unstyled text-start mb-4">
              <li class="mb-2">✓ 5 proyectos</li>
              <li class="mb-2">✓ CDN sin límite</li>
              <li class="mb-2">✓ Documentación completa</li>
              <li class="text-muted mb-2">✗ Temas premium</li>
              <li class="text-muted mb-2">✗ Soporte prioritario</li>
            </ul>
            <a href="#contacto" class="btn btn-outline-primary w-100 mt-auto">Empezar gratis</a>
          </div>
        </div>
      </div>

      <!-- Plan Pro (destacado) -->
      <div class="col">
        <div class="card h-100 text-center border-primary border-2 shadow">
          <div class="card-header bg-primary text-white fw-bold py-2">⭐ Más popular</div>
          <div class="card-body p-4 d-flex flex-column">
            <h5 class="card-title fw-bold">Profesional</h5>
            <p class="display-5 fw-bold my-3">9€ <small class="text-muted fs-6">/ mes</small></p>
            <ul class="list-unstyled text-start mb-4">
              <li class="mb-2">✓ Proyectos ilimitados</li>
              <li class="mb-2">✓ Temas premium</li>
              <li class="mb-2">✓ Soporte prioritario</li>
              <li class="mb-2">✓ Plantillas exclusivas</li>
              <li class="mb-2">✓ Sin publicidad</li>
            </ul>
            <a href="#contacto" class="btn btn-primary w-100 mt-auto">Empezar prueba gratis</a>
          </div>
        </div>
      </div>

      <!-- Plan Equipo -->
      <div class="col">
        <div class="card h-100 text-center">
          <div class="card-body p-4 d-flex flex-column">
            <h5 class="card-title fw-bold">Equipo</h5>
            <p class="display-5 fw-bold my-3">29€ <small class="text-muted fs-6">/ mes</small></p>
            <ul class="list-unstyled text-start mb-4">
              <li class="mb-2">✓ Todo el plan Pro</li>
              <li class="mb-2">✓ Hasta 10 usuarios</li>
              <li class="mb-2">✓ Panel de equipo</li>
              <li class="mb-2">✓ Factura mensual</li>
              <li class="mb-2">✓ Integración Figma</li>
            </ul>
            <a href="#contacto" class="btn btn-outline-secondary w-100 mt-auto">Contactar</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     CONTACTO
══════════════════════════════════════ -->
<section id="contacto" class="py-6">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <h2 class="text-center fw-bold display-6 mb-2">¿Hablamos?</h2>
        <p class="text-center text-muted mb-4">Responderemos en menos de 24 horas.</p>
        <form id="contactForm" class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="cName" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="cName" required />
              <div class="invalid-feedback">Introduce tu nombre.</div>
            </div>
            <div class="col-md-6">
              <label for="cEmail" class="form-label">Email</label>
              <input type="email" class="form-control" id="cEmail" required />
              <div class="invalid-feedback">Email inválido.</div>
            </div>
            <div class="col-12">
              <label for="cAsunto" class="form-label">Asunto</label>
              <select class="form-select" id="cAsunto" required>
                <option value="">Selecciona...</option>
                <option>Consulta sobre planes</option>
                <option>Soporte técnico</option>
                <option>Colaboración</option>
                <option>Otro</option>
              </select>
              <div class="invalid-feedback">Selecciona un asunto.</div>
            </div>
            <div class="col-12">
              <label for="cMsg" class="form-label">Mensaje</label>
              <textarea class="form-control" id="cMsg" rows="4"
                placeholder="Cuéntanos en qué podemos ayudarte..." required></textarea>
              <div class="invalid-feedback">Escribe tu mensaje.</div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary w-100 btn-lg">
                Enviar mensaje ✉️
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     FOOTER
══════════════════════════════════════ -->
<footer class="bg-dark text-light py-5">
  <div class="container">
    <div class="row row-cols-1 row-cols-md-4 g-4 mb-4">
      <div class="col">
        <h5 class="fw-bold mb-3">🎨 Bootstrap Pro</h5>
        <p class="text-muted small">
          El framework CSS más popular para crear interfaces responsive modernas.
        </p>
      </div>
      <div class="col">
        <h6 class="fw-bold mb-3">Documentación</h6>
        <ul class="list-unstyled">
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">Grid System</a></li>
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">Componentes</a></li>
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">Utilidades</a></li>
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">JavaScript</a></li>
        </ul>
      </div>
      <div class="col">
        <h6 class="fw-bold mb-3">Comunidad</h6>
        <ul class="list-unstyled">
          <li class="mb-1"><a href="https://github.com/twbs/bootstrap" class="text-muted text-decoration-none">GitHub</a></li>
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">Discord</a></li>
          <li class="mb-1"><a href="#" class="text-muted text-decoration-none">Blog oficial</a></li>
        </ul>
      </div>
      <div class="col">
        <h6 class="fw-bold mb-3">Newsletter</h6>
        <p class="text-muted small mb-2">Novedades cada semana en tu bandeja.</p>
        <div class="input-group">
          <input type="email" class="form-control form-control-sm" placeholder="tu@email.com" />
          <button class="btn btn-primary btn-sm">Unirme</button>
        </div>
      </div>
    </div>
    <hr class="border-secondary" />
    <p class="text-center text-muted small mb-0">
      © 2025 Bootstrap Pro. Hecho con ❤️ y Bootstrap 5.3
    </p>
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
  // Validación del formulario de contacto
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
    } else {
      alert('✅ Mensaje enviado correctamente. ¡Nos ponemos en contacto pronto!');
      form.reset();
      form.classList.remove('was-validated');
      return;
    }
    form.classList.add('was-validated');
  });
</script>

</body>
</html>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 9 ════════════ */}
      <section className="doc-section" id="paso-9">
        <details className="dd" open>
          <summary>Paso 9 · Reto extra: personalización y mejoras</summary>
          <div className="dd-body">
            <h3>🔥 Reto extra (landing completa)</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li>
                  <strong>Cambia la identidad visual</strong>: reemplaza el morado por el
                  color de tu marca. Pista: puedes hacerlo con la variable CSS{" "}
                  <code>--bs-primary</code> o con un tema personalizado generado en{" "}
                  <a href="https://getbootstrap.com/docs/5.3/customize/color/" target="_blank" rel="noopener noreferrer">Bootstrap Customize Colors</a>.
                </li>
                <li>
                  <strong>Añade un modal</strong>: cuando el usuario envíe el formulario,
                  muestra un modal de confirmación en lugar del <code>alert()</code>.
                  Usa <code>data-bs-toggle="modal"</code> y el componente Bootstrap Modal.
                </li>
                <li>
                  <strong>Animaciones al hacer scroll</strong>: añade la librería{" "}
                  <a href="https://michalsnik.github.io/aos/" target="_blank" rel="noopener noreferrer">AOS (Animate On Scroll)</a>{" "}
                  y aplica <code>data-aos="fade-up"</code> a las cards de features.
                </li>
                <li>
                  <strong>Versión dark mode</strong>: añade un toggle en la navbar que
                  cambie el atributo <code>data-bs-theme="dark"</code> del{" "}
                  <code>&lt;html&gt;</code> con una línea de JS.
                </li>
                <li>
                  <strong>Convierte en tu portfolio real</strong>: personaliza el contenido
                  con tus proyectos, habilidades y datos de contacto reales.
                </li>
              </ol>
            </div>

            <div className="callout tip" style={{ marginTop: "1rem" }}>
              🏆 <strong>¡Felicidades!</strong> Has completado el bloque de Bootstrap
              (E11–E15). Ahora conoces el framework más usado del mundo. El siguiente
              paso es aprender a personalizarlo con Sass y combinarlo con CSS propio
              para proyectos únicos.
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e14-bootstrap-forms" className="btn">← E14 Bootstrap Forms</Link>
          <Link to="/ejercicios" className="btn btn-primary">← Volver a todos los ejercicios</Link>
        </div>
      </section>
    </main>
  );
}
