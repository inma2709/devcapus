import { useEffect, useMemo, useState } from "react";

export default function V29_Navegacion_Migas_Usabilidad() {
  useEffect(() => {
    document.title =
      "V29 · Navegación y Usabilidad: menús, sidebar, responsive y migas de pan (nivel PRO)";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué atributo es el estándar para marcar el enlace de la página actual en un menú?",
        options: ["aria-selected", "aria-active", "aria-current", "data-active"],
        correct: "aria-current",
        why:
          "aria-current (p.ej. aria-current='page') comunica a tecnologías de asistencia cuál es el ítem actual.",
      },
      {
        id: "q2",
        q: "¿Cuál es la regla más importante para la navegación en móvil?",
        options: [
          "Ocultar todo el menú siempre",
          "Reducir el tamaño del texto",
          "Priorizar tareas y ofrecer un patrón de apertura/cierre claro",
          "Eliminar el header",
        ],
        correct: "Priorizar tareas y ofrecer un patrón de apertura/cierre claro",
        why:
          "En móvil no cabe todo: se prioriza, se agrupa y se ofrece navegación clara (menú colapsable) sin perder orientación.",
      },
      {
        id: "q3",
        q: "¿Qué patrón es preferible para un menú desplegable accesible sin JS complejo?",
        options: ["div con hover", "details/summary", "span con click", "table"],
        correct: "details/summary",
        why:
          "details/summary ofrece un mecanismo nativo de expandir/colapsar con soporte de teclado y semántica.",
      },
      {
        id: "q4",
        q: "¿Para qué sirven las migas de pan (breadcrumbs)?",
        options: [
          "Para decorar la cabecera",
          "Para indicar jerarquía y ayudar a volver a niveles superiores",
          "Para reemplazar el menú principal",
          "Para mejorar la velocidad del sitio",
        ],
        correct: "Para indicar jerarquía y ayudar a volver a niveles superiores",
        why:
          "Las migas de pan muestran dónde estás dentro de una estructura, y permiten retroceder por niveles con claridad.",
      },
      {
        id: "q5",
        q: "¿Cuál es un error típico al usar position: fixed en la barra superior?",
        options: [
          "Que el menú se vea mejor",
          "Que no se pueda usar flexbox",
          "Que tape el contenido si no compensas con padding/margin",
          "Que no funcione en Chrome",
        ],
        correct: "Que tape el contenido si no compensas con padding/margin",
        why:
          "Una barra fixed sale del flujo. Debes compensar el espacio (padding-top o margin-top) para no ocultar el contenido.",
      },
      {
        id: "q6",
        q: "¿Qué técnica mejora mucho la usabilidad en páginas largas con navegación lateral?",
        options: [
          "Quitar los títulos",
          "Usar sticky en el sidebar",
          "Poner todo en un modal",
          "Hacer el texto más pequeño",
        ],
        correct: "Usar sticky en el sidebar",
        why:
          "position: sticky mantiene visible la navegación contextual, ayudando a saltar secciones sin perder orientación.",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let ok = 0;
    for (const q of questions) if (answers[q.id] === q.correct) ok++;
    return ok;
  }, [answers, questions]);

  const choose = (id, opt) => setAnswers((p) => ({ ...p, [id]: opt }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ================= HERO ================= */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">V17 · Usabilidad y Navegación</p>
        <h1>Navegación PRO: menú superior, lateral, móvil y migas de pan</h1>

        <p className="doc-lead">
          La navegación no es “poner un menú”. Es diseñar la{" "}
          <strong>orientación</strong> del usuario: que sepa dónde está, qué
          puede hacer, y cómo volver atrás. Aquí aprenderás a construir un
          sistema profesional con CSS:{" "}
          <strong>barra superior</strong>,{" "}
          <strong>sidebar</strong>,{" "}
          <strong>menús colapsables</strong>,{" "}
          <strong>responsive móvil</strong> y{" "}
          <strong>breadcrumbs</strong>.
        </p>

        <div className="callout tip">
          🎯 Objetivos de esta lección (nivel PRO):
          <ul style={{ marginBottom: 0 }}>
            <li>Organizar navegación superior y lateral con patrones reales.</li>
            <li>Construir menús colapsables sin romper accesibilidad.</li>
            <li>Resolver navegación móvil (sin perder orientación).</li>
            <li>Marcar “dónde estás” (estado activo: <code>aria-current</code>).</li>
            <li>Implementar migas de pan bien (semántica + CSS).</li>
          </ul>
        </div>

        <nav className="doc-index" aria-label="Índice del tema">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#principios">1) Principios de usabilidad: orientación y jerarquía</a></li>
            <li><a href="#arquitectura">2) Arquitectura típica: topbar + sidebar + contenido</a></li>
            <li><a href="#topnav">3) Menú superior profesional (desktop)</a></li>
            <li><a href="#sidebar">4) Navegación lateral (sticky + submenús)</a></li>
            <li><a href="#colapsables">5) Menús colapsables (details/summary)</a></li>
            <li><a href="#mobile">6) Navegación en móvil: patrones reales</a></li>
            <li><a href="#estado-actual">7) “Dónde estoy”: activo, aria-current y breadcrumbs</a></li>
            <li><a href="#breadcrumbs">8) Migas de pan PRO (semántica + CSS)</a></li>
            <li><a href="#gotchas">9) Errores comunes y depuración</a></li>
            <li><a href="#retos">10) Retos prácticos (con soluciones)</a></li>
            <li><a href="#test">11) Test final</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= 1) PRINCIPIOS ================= */}
      <section className="doc-section" id="principios">
        <details className="dd" open>
          <summary>1) Principios de usabilidad: orientación y jerarquía</summary>
          <div className="dd-body">
            <p>
              Un usuario en una web se hace tres preguntas constantemente:
            </p>
            <ul>
              <li><strong>¿Dónde estoy?</strong> (contexto)</li>
              <li><strong>¿Qué puedo hacer aquí?</strong> (opciones)</li>
              <li><strong>¿Cómo vuelvo atrás o cambio de sección?</strong> (control)</li>
            </ul>

            <div className="callout">
              💡 Si tu navegación responde bien a esas 3 preguntas, tu web “se siente” profesional.
            </div>

            <details className="dd dd-nested" open>
              <summary>Señales visuales de orientación (lo mínimo imprescindible)</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    <strong>Elemento activo</strong> en el menú (color + fondo + peso tipográfico).
                  </li>
                  <li>
                    <strong>Título claro</strong> de la página/sección.
                  </li>
                  <li>
                    <strong>Migas de pan</strong> en estructuras jerárquicas.
                  </li>
                  <li>
                    <strong>Sidebar</strong> con subapartados en páginas largas.
                  </li>
                </ul>
                <div className="callout warn">
                  Error típico: “marco el activo solo con color”.
                  <br />
                  En accesibilidad, el color solo puede fallar. Usa también fondo, borde, icono o peso.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 2) ARQUITECTURA ================= */}
      <section className="doc-section" id="arquitectura">
        <details className="dd" open>
          <summary>2) Arquitectura típica: topbar + sidebar + contenido</summary>
          <div className="dd-body">
            <p>
              En manuales, documentación y apps web es muy común este layout:
            </p>

            <pre>
              <code>{`<header class="topbar">...</header>

<div class="layout">
  <aside class="sidebar">...</aside>
  <main class="content">...</main>
</div>`}</code>
            </pre>

            <pre>
              <code>{`/* Layout general (Grid es perfecto aquí) */
.layout{
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 1.25rem;
  align-items: start;
}

@media (max-width: 900px){
  .layout{
    grid-template-columns: 1fr; /* Sidebar se replantea en móvil */
  }
}`}</code>
            </pre>

            <div className="callout tip">
              Grid para el “macro-layout” (2 columnas). Flex para menús y alineación interna.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 3) TOPNAV ================= */}
      <section className="doc-section" id="topnav">
        <details className="dd" open>
          <summary>3) Menú superior profesional (desktop)</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>HTML semántico recomendado</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<header class="topbar">
  <div class="topbar-wrap">
    <a class="brand" href="/">MiManualCSS</a>

    <nav class="topnav" aria-label="Navegación principal">
      <a class="topnav-link" href="/fundamentos" aria-current="page">Fundamentos</a>
      <a class="topnav-link" href="/componentes">Componentes</a>
      <a class="topnav-link" href="/layout">Layout</a>
      <a class="topnav-link" href="/practicas">Prácticas</a>
    </nav>

    <div class="topbar-actions">
      <a class="btn btn-outline btn-sm" href="/login">Entrar</a>
    </div>
  </div>
</header>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>CSS topbar (flex + sticky opcional)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Topbar: visible y consistente */
.topbar{
  position: sticky; /* se queda arriba al hacer scroll */
  top: 0;
  z-index: 50;
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,.08);
}

.topbar-wrap{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: .9rem 1rem;
}

.brand{
  font-weight: 900;
  text-decoration: none;
  color: #111;
  letter-spacing: .2px;
}

/* Menú horizontal */
.topnav{
  display: flex;
  align-items: center;
  gap: .35rem;
}

/* Links del menú */
.topnav-link{
  display: inline-flex;
  align-items: center;
  padding: .55rem .85rem;
  border-radius: .65rem;
  text-decoration: none;
  color: #222;
  font-weight: 700;
  transition: background-color .15s ease, color .15s ease;
}

.topnav-link:hover{
  background: rgba(0,0,0,.06);
}

/* “Dónde estoy”: activo */
.topnav-link[aria-current="page"]{
  background: rgba(228,77,38,.12);
  color: #E44D26;
}

/* Focus visible (reutilizable) */
.topnav-link:focus{
  outline: none;
}
.topnav-link:focus-visible{
  outline: 3px solid rgba(0,0,0,.85);
  outline-offset: 3px;
}`}</code>
                </pre>

                <div className="callout tip">
                  <code>position: sticky</code> suele ser mejor que fixed: mantiene contexto sin “sacar” del flujo.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 4) SIDEBAR ================= */}
      <section className="doc-section" id="sidebar">
        <details className="dd" open>
          <summary>4) Navegación lateral (sticky + submenús)</summary>
          <div className="dd-body">
            <p>
              La navegación lateral funciona muy bien para documentación:
              permite saltar a subsecciones y refuerza orientación.
            </p>

            <pre>
              <code>{`<aside class="sidebar" aria-label="Navegación del tema">
  <h3 class="sidebar-title">En este tema</h3>

  <nav class="sidenav">
    <a class="sidenav-link" href="#principios" aria-current="true">Principios</a>
    <a class="sidenav-link" href="#topnav">Menú superior</a>
    <a class="sidenav-link" href="#sidebar">Sidebar</a>
    <a class="sidenav-link" href="#breadcrumbs">Migas de pan</a>
  </nav>
</aside>`}</code>
            </pre>

            <pre>
              <code>{`/* Sidebar sticky: se mantiene visible mientras lees */
.sidebar{
  position: sticky;
  top: 76px; /* ajusta según altura de topbar */
  align-self: start;
  padding: 1rem;
  border: 1px solid rgba(0,0,0,.08);
  border-radius: .9rem;
  background: #fff;
}

.sidebar-title{
  margin: 0 0 .75rem 0;
  font-size: 1rem;
}

/* Navegación vertical */
.sidenav{
  display: grid;
  gap: .35rem;
}

.sidenav-link{
  display: block;
  padding: .55rem .7rem;
  border-radius: .6rem;
  text-decoration: none;
  color: #333;
  font-weight: 650;
  transition: background-color .15s ease, color .15s ease;
}

.sidenav-link:hover{
  background: rgba(0,0,0,.06);
}

.sidenav-link[aria-current="true"]{
  background: rgba(228,77,38,.12);
  color: #E44D26;
}

/* Focus visible */
.sidenav-link:focus{ outline:none; }
.sidenav-link:focus-visible{
  outline: 3px solid rgba(0,0,0,.85);
  outline-offset: 3px;
}`}</code>
            </pre>

            <div className="callout warn">
              Sticky puede “fallar” si un ancestro tiene <code>overflow</code> o <code>transform</code>.
              Si no funciona, revisa el CSS de padres.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 5) COLAPSABLES ================= */}
      <section className="doc-section" id="colapsables">
        <details className="dd" open>
          <summary>5) Menús colapsables (sin JS complejo) con details/summary</summary>
          <div className="dd-body">
            <p>
              Para submenús (categorías, secciones, módulos),{" "}
              <code>&lt;details&gt;</code> es un patrón excelente: es nativo, accesible y fácil.
            </p>

            <pre>
              <code>{`<nav class="sidemenu" aria-label="Secciones">
  <details class="menu-group" open>
    <summary class="menu-summary">Fundamentos</summary>
    <div class="menu-items">
      <a class="sidenav-link" href="/fundamentos/box-model">Box Model</a>
      <a class="sidenav-link" href="/fundamentos/flex">Flex</a>
      <a class="sidenav-link" href="/fundamentos/grid">Grid</a>
    </div>
  </details>

  <details class="menu-group">
    <summary class="menu-summary">Componentes</summary>
    <div class="menu-items">
      <a class="sidenav-link" href="/componentes/botones">Botones</a>
      <a class="sidenav-link" href="/componentes/forms">Forms</a>
    </div>
  </details>
</nav>`}</code>
            </pre>

            <pre>
              <code>{`/* Grupo colapsable */
.menu-group{
  border: 1px solid rgba(0,0,0,.08);
  border-radius: .85rem;
  background: #fff;
  padding: .25rem;
}

.menu-summary{
  cursor: pointer;
  list-style: none;
  padding: .75rem .8rem;
  border-radius: .7rem;
  font-weight: 850;
  user-select: none;
}

.menu-summary::-webkit-details-marker{ display:none; }

/* Indicador visual (flecha) */
.menu-summary::after{
  content: "▾";
  float: right;
  opacity: .75;
}

.menu-group[open] .menu-summary::after{
  content: "▴";
}

.menu-items{
  display: grid;
  gap: .25rem;
  padding: .25rem;
}`}</code>
            </pre>

            <div className="callout tip">
              Para alumnos: es “el acordeón” más limpio y semántico sin JS.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 6) MOBILE ================= */}
      <section className="doc-section" id="mobile">
        <details className="dd" open>
          <summary>6) Navegación en móvil: patrones reales y CSS</summary>
          <div className="dd-body">
            <p>
              En móvil tienes un problema físico:{" "}
              <strong>no cabe</strong> todo. Un sistema profesional:
              <strong>prioriza</strong>, agrupa y ofrece un control claro.
            </p>

            <details className="dd dd-nested" open>
              <summary>Patrón A: topbar con botón de menú + panel lateral (CSS-first)</summary>
              <div className="dd-body">
                <p>
                  Aquí un patrón que se enseña mucho por claridad: un <strong>checkbox</strong> o un
                  <strong>target</strong> para abrir/cerrar. En producción solemos usar JS, pero el
                  concepto y el CSS son didácticos.
                </p>

                <pre>
                  <code>{`<!-- Toggle con checkbox (didáctico) -->
<input class="nav-toggle" type="checkbox" id="nav-toggle" />
<label class="nav-burger" htmlFor="nav-toggle">☰</label>

<nav class="mobile-drawer" aria-label="Menú móvil">
  <a class="mobile-link" href="/fundamentos">Fundamentos</a>
  <a class="mobile-link" href="/componentes">Componentes</a>
  <a class="mobile-link" href="/layout">Layout</a>
</nav>

<div class="backdrop"></div>`}</code>
                </pre>

                <pre>
                  <code>{`/* Ocultamos el checkbox (sigue siendo accesible si se hace bien) */
.nav-toggle{
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}

/* Botón hamburguesa */
.nav-burger{
  display: none;
  width: 44px;
  height: 44px;
  border-radius: .75rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}

/* Drawer */
.mobile-drawer{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: min(320px, 85vw);
  background: #fff;
  border-right: 1px solid rgba(0,0,0,.08);
  padding: 1rem;
  transform: translateX(-105%);
  transition: transform .2s ease;
  z-index: 60;
}

/* Backdrop */
.backdrop{
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.45);
  opacity: 0;
  pointer-events: none;
  transition: opacity .2s ease;
  z-index: 55;
}

/* Links en móvil */
.mobile-link{
  display: block;
  padding: .75rem .9rem;
  border-radius: .75rem;
  text-decoration: none;
  color: #111;
  font-weight: 800;
}

.mobile-link:hover{
  background: rgba(0,0,0,.06);
}

/* Abrir */
.nav-toggle:checked ~ .mobile-drawer{
  transform: translateX(0);
}

.nav-toggle:checked ~ .backdrop{
  opacity: 1;
  pointer-events: auto;
}

/* Responsive: mostramos burger en móvil */
@media (max-width: 900px){
  .nav-burger{ display: inline-flex; }
}`}</code>
                </pre>

                <div className="callout warn">
                  En producción, el cierre con backdrop y la gestión de foco suele hacerse con JS.
                  Pero como lección de CSS es muy potente para entender patrones.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Patrón B: colapsar la topnav (solo CSS)</summary>
              <div className="dd-body">
                <p>
                  Otra opción simple: en móvil, ocultas la lista horizontal y muestras un menú vertical
                  con details/summary.
                </p>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 7) ESTADO ACTUAL ================= */}
      <section className="doc-section" id="estado-actual">
        <details className="dd" open>
          <summary>7) “Dónde estoy”: marcar activo y reforzar orientación</summary>
          <div className="dd-body">
            <div className="callout tip">
              Señales recomendadas:
              <ul style={{ marginBottom: 0 }}>
                <li>Menú: <code>aria-current="page"</code> + estilo visible</li>
                <li>Sidebar: subapartado activo</li>
                <li>Breadcrumbs: ruta jerárquica</li>
                <li>H1: título claro y consistente</li>
              </ul>
            </div>

            <pre>
              <code>{`/* Patrón activo genérico (para links) */
.link-active,
a[aria-current="page"],
a[aria-current="true"]{
  background: rgba(228,77,38,.12);
  color: #E44D26;
  font-weight: 900;
}`}</code>
            </pre>

            <div className="callout">
              Consejo: no te quedes en “cambio de color”. Añade fondo o borde para que sea obvio.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 8) BREADCRUMBS ================= */}
      <section className="doc-section" id="breadcrumbs">
        <details className="dd" open>
          <summary>8) Migas de pan PRO (semántica + CSS)</summary>
          <div className="dd-body">
            <p>
              Las migas de pan son un componente de orientación. Se usan cuando hay jerarquía:
              <strong>Inicio → Sección → Sub-sección → Página actual</strong>.
            </p>

            <details className="dd dd-nested" open>
              <summary>HTML semántico recomendado</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<nav class="breadcrumbs" aria-label="Migas de pan">
  <ol class="crumbs">
    <li class="crumb"><a class="crumb-link" href="/">Inicio</a></li>
    <li class="crumb"><a class="crumb-link" href="/componentes">Componentes</a></li>
    <li class="crumb"><a class="crumb-link" href="/componentes/navegacion">Navegación</a></li>
    <li class="crumb" aria-current="page"><span class="crumb-current">Migas de pan</span></li>
  </ol>
</nav>`}</code>
                </pre>

                <div className="callout tip">
                  Usar <code>&lt;ol&gt;</code> es ideal: es una secuencia de niveles.
                  El último elemento debe ser el actual (no un enlace).
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>CSS breadcrumbs (separadores, overflow y responsive)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Breadcrumbs */
.breadcrumbs{
  margin: 0 0 1rem 0;
}

.crumbs{
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  color: #444;
  font-weight: 650;
  font-size: .95rem;
}

.crumb{
  display: inline-flex;
  align-items: center;
  gap: .4rem;
}

/* Separador visual */
.crumb:not(:last-child)::after{
  content: "›";
  opacity: .6;
}

/* Enlaces */
.crumb-link{
  text-decoration: none;
  color: #E44D26;
  border-radius: .4rem;
  padding: .2rem .35rem;
}

.crumb-link:hover{
  background: rgba(228,77,38,.12);
}

.crumb-link:focus{ outline:none; }
.crumb-link:focus-visible{
  outline: 3px solid rgba(0,0,0,.85);
  outline-offset: 3px;
}

/* Actual */
.crumb-current{
  color: #111;
  font-weight: 900;
}

/* Responsive: en móvil, a veces interesa truncar */
@media (max-width: 520px){
  .crumbs{
    font-size: .9rem;
  }
}`}</code>
                </pre>

                <div className="callout warn">
                  Error típico: poner todas las migas como enlaces, incluido el “actual”.
                  La página actual debe marcarse como actual y normalmente no enlazarse.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 9) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>9) Errores comunes y depuración (nivel pro)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Fixed tapa contenido</strong>: si usas fixed, compensa con padding-top.
              </li>
              <li>
                <strong>Sticky no funciona</strong>: revisa ancestros con overflow/transform.
              </li>
              <li>
                <strong>Activo solo por color</strong>: añade fondo/borde/peso.
              </li>
              <li>
                <strong>Menú móvil sin foco</strong>: en producción, gestiona foco (JS).
              </li>
              <li>
                <strong>Demasiados items en topnav</strong>: en móvil, prioriza y agrupa.
              </li>
            </ul>

            <div className="callout">
              Debug pro: abre DevTools, inspecciona el elemento sticky/fixed y mira qué padre tiene overflow.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 10) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>10) Retos prácticos (con soluciones)</summary>
          <div className="dd-body">
            <div className="callout">
              Hazlos por orden. Si un alumno puede construir esto, domina navegación real.
            </div>

            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1: menú superior con estado activo + focus-visible</summary>
              <div className="dd-body">
                <details className="dd dd-nested">
                  <summary>✅ Solución (CSS base)</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`.topnav{ display:flex; gap:.35rem; }
.topnav-link{ padding:.55rem .85rem; border-radius:.65rem; text-decoration:none; font-weight:700; }
.topnav-link:hover{ background:rgba(0,0,0,.06); }
.topnav-link[aria-current="page"]{ background:rgba(228,77,38,.12); color:#E44D26; font-weight:900; }
.topnav-link:focus{ outline:none; }
.topnav-link:focus-visible{ outline:3px solid rgba(0,0,0,.85); outline-offset:3px; }`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>🟡 Reto 2: sidebar sticky con enlaces a secciones</summary>
              <div className="dd-body">
                <details className="dd dd-nested">
                  <summary>✅ Solución (CSS sticky)</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`.sidebar{ position:sticky; top:76px; padding:1rem; border:1px solid rgba(0,0,0,.08); border-radius:.9rem; }
.sidenav{ display:grid; gap:.35rem; }
.sidenav-link{ padding:.55rem .7rem; border-radius:.6rem; text-decoration:none; }
.sidenav-link:hover{ background:rgba(0,0,0,.06); }`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>🔴 Reto 3: breadcrumbs con separador y último elemento no enlace</summary>
              <div className="dd-body">
                <details className="dd dd-nested">
                  <summary>✅ Solución (HTML + CSS)</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`<nav class="breadcrumbs" aria-label="Migas de pan">
  <ol class="crumbs">
    <li class="crumb"><a class="crumb-link" href="/">Inicio</a></li>
    <li class="crumb"><a class="crumb-link" href="/seccion">Sección</a></li>
    <li class="crumb" aria-current="page"><span class="crumb-current">Actual</span></li>
  </ol>
</nav>`}</code>
                    </pre>
                    <pre>
                      <code>{`.crumbs{ display:flex; flex-wrap:wrap; gap:.4rem; list-style:none; padding:0; margin:0; }
.crumb:not(:last-child)::after{ content:"›"; opacity:.6; margin-left:.4rem; }
.crumb-link{ text-decoration:none; color:#E44D26; padding:.2rem .35rem; border-radius:.4rem; }
.crumb-link:hover{ background:rgba(228,77,38,.12); }
.crumb-current{ font-weight:900; color:#111; }`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            <div className="callout tip">
              Si superas estos 3 retos: ya sabes montar navegación real en webs y documentación.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 11) TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>11) Test final (con feedback)</summary>
          <div className="dd-body">
            <form onSubmit={submit}>
              {questions.map((q, i) => {
                const picked = answers[q.id];
                const ok = submitted && picked === q.correct;
                const bad = submitted && picked && picked !== q.correct;

                return (
                  <div className="card" key={q.id} style={{ marginTop: "1rem" }}>
                    <h3 style={{ marginTop: 0 }}>
                      {i + 1}. {q.q}
                    </h3>

                    <div className="test-question" role="group" aria-label={`Pregunta ${i + 1}`}>
                      {q.options.map((opt) => (
                        <label key={opt}>
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={picked === opt}
                            onChange={() => choose(q.id, opt)}
                            disabled={submitted}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>

                    {submitted && (
                      <div className={`callout ${ok ? "tip" : "warn"}`}>
                        {ok && (
                          <>
                            ✅ Correcta. <strong>{q.why}</strong>
                          </>
                        )}
                        {bad && (
                          <>
                            ❌ Incorrecta. Correcta: <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                        {!picked && (
                          <>
                            ⚠️ Sin responder. Correcta: <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="doc-next" style={{ gap: ".6rem" }}>
                {!submitted ? (
                  <button className="btn btn-primary" type="submit">
                    Corregir test
                  </button>
                ) : (
                  <>
                    <div className="badge" aria-live="polite">
                      Resultado: {score}/{questions.length}
                    </div>
                    <button className="btn" type="button" onClick={reset}>
                      Reintentar
                    </button>
                  </>
                )}
              </div>

              {submitted && (
                <div
                  className={`callout ${
                    score >= questions.length * 0.85
                      ? "tip"
                      : score >= questions.length * 0.65
                      ? ""
                      : "warn"
                  }`}
                  style={{ marginTop: "1rem" }}
                >
                  {score === questions.length && (
                    <>
                      🏆 <strong>Excelente.</strong> Ya entiendes orientación, estados activos,
                      responsive y breadcrumbs como un profesional.
                    </>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>
                      🎯 <strong>Muy bien.</strong> Repasa sticky y aria-current: son claves.
                    </>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>
                      📚 <strong>Buen nivel.</strong> Practica el menú móvil y el patrón colapsable.
                    </>
                  )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Aún no.</strong> Vuelve a “Principios” y “Dónde estoy”. La navegación
                      profesional empieza por orientación clara.
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </details>
      </section>

      {/* ================= CIERRE ================= */}
      <section className="doc-section">
        <div className="callout tip">
          ✅ Cierre PRO:
          <br />
          La navegación no se mide por “lo bonita que está”, sino por
          <strong> cuánto reduce la incertidumbre</strong>.
          Si el usuario siempre sabe dónde está, cómo moverse y cómo volver,
          tu interfaz ya juega en primera división.
        </div>

        <div className="doc-next">
          <a href="#" className="btn btn-primary">
            Siguiente lección → Formularios y validación visual
          </a>
        </div>
      </section>
    </main>
  );
}
