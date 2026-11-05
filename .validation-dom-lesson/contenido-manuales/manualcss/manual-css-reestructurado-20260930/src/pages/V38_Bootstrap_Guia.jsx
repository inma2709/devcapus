import { useEffect } from "react";
import { Link } from "react-router-dom";

const bootstrapCss = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css";
const bootstrapJs = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";

export default function V38_Bootstrap_Guia() {
  useEffect(() => {
    document.title = "Bootstrap 5 · CSS que ya conoces, listo para usar";
  }, []);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">Saltar al contenido</a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ampliación práctica · Bootstrap 5 · Jornada de 6 horas</p>
        <h1>Bootstrap: un gran ayudante para el CSS que ya sabes</h1>
        <p className="doc-lead">
          Bootstrap no sustituye HTML, CSS, Flexbox, Grid ni la accesibilidad. Es una biblioteca
          de CSS y JavaScript preparada para crear interfaces consistentes más rápido. Tú sigues
          tomando las decisiones de estructura, diseño y calidad.
        </p>
        <div className="callout tip">
          <strong>Idea clave:</strong> una clase Bootstrap es CSS escrito por otra persona. Si
          entiendes el CSS que hay detrás, podrás usarla, adaptarla y saber cuándo no usarla.
        </div>
        <nav className="doc-index" aria-label="Recorrido del tema Bootstrap">
          <h2>🧭 Recorrido</h2>
          <ol>
            <li><a href="#no-magia">Bootstrap no es magia</a></li>
            <li><a href="#importar">Importar: CDN, orden y npm</a></li>
            <li><a href="#contenedor">Container</a></li>
            <li><a href="#grid">Grid responsive</a></li>
            <li><a href="#utilities">Utilities</a></li>
            <li><a href="#componentes">Componentes y tu CSS</a></li>
            <li><a href="#ruta">Práctica y reto final</a></li>
          </ol>
        </nav>
      </header>

      <section className="doc-section" id="no-magia">
        <details className="dd" open>
          <summary>1 · Bootstrap no es magia: conecta HTML con CSS preparado</summary>
          <div className="dd-body">
            <p>Compara estos dos botones:</p>
            <pre><code>{`<button>Comprar</button>

<button class="btn btn-primary">Comprar</button>`}</code></pre>
            <p>
              El segundo no cambia porque HTML tenga superpoderes. Cambia porque el archivo CSS
              de Bootstrap contiene reglas para <code>.btn</code> y <code>.btn-primary</code>.
            </p>
            <pre><code>{`.btn { /* padding, borde y estados preparados */ }
.btn-primary { /* color, fondo y contraste preparados */ }`}</code></pre>
            <div className="callout">
              <strong>Esto ya lo conoces:</strong> una clase en HTML selecciona un elemento y
              aplica reglas CSS. Bootstrap te entrega muchas clases coherentes y reutilizables.
            </div>
            <div className="table-wrap" role="region" aria-label="Bootstrap y CSS equivalente" tabIndex={0}>
              <table className="table">
                <thead><tr><th>CSS que ya conoces</th><th>Bootstrap</th></tr></thead>
                <tbody>
                  <tr><td><code>display: flex</code></td><td><code>d-flex</code></td></tr>
                  <tr><td><code>justify-content: center</code></td><td><code>justify-content-center</code></td></tr>
                  <tr><td><code>text-align: center</code></td><td><code>text-center</code></td></tr>
                  <tr><td><code>margin-top</code></td><td><code>mt-*</code></td></tr>
                  <tr><td><code>padding</code></td><td><code>p-*</code></td></tr>
                  <tr><td><code>width: 100%</code></td><td><code>w-100</code></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section" id="importar">
        <details className="dd" open>
          <summary>2 · Importar Bootstrap: primero Bootstrap, después tu CSS</summary>
          <div className="dd-body">
            <p>Para aprender, el CDN es la vía más directa: el navegador descarga Bootstrap desde una URL. Copia este archivo completo y pruébalo:</p>
            <pre><code>{`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mi primera web con Bootstrap</title>

  <!-- 1. CSS preparado por Bootstrap -->
  <link href="${bootstrapCss}" rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
        crossorigin="anonymous">

  <!-- 2. Mi CSS: se carga después y puede personalizar Bootstrap -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <button class="btn btn-primary">Comprar</button>

  <!-- Solo para componentes interactivos: navbar, modal, dropdown... -->
  <script src="${bootstrapJs}"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossorigin="anonymous"></script>
</body>
</html>`}</code></pre>
            <div className="callout tip">
              <strong>Conexión con la cascada:</strong> Bootstrap carga primero y
              <code> styles.css</code> después. Tus reglas pueden personalizar la base sin usar
              <code> !important</code>.
            </div>
            <h3>¿Qué importa cada archivo?</h3>
            <ul>
              <li><strong>CSS:</strong> grid, utilities y apariencia de componentes.</li>
              <li><strong>JavaScript bundle:</strong> comportamiento de navbar, modal, dropdown y tooltip; incluye Popper.</li>
              <li><strong>Tu CSS:</strong> identidad visual y reglas específicas del proyecto.</li>
            </ul>
            <details className="dd dd-nested">
              <summary>Profundiza · Importar con npm en Vite o React</summary>
              <div className="dd-body">
                <pre><code>{`npm install bootstrap

// main.js o main.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";`}</code></pre>
                <p>Con npm el bundler incorpora los archivos, pero el orden sigue siendo el mismo: Bootstrap y después tu CSS.</p>
              </div>
            </details>
          </div>
        </details>
      </section>

      <section className="doc-section" id="contenedor">
        <details className="dd" open>
          <summary>3 · Antes del grid: decide dónde vive tu contenido</summary>
          <div className="dd-body">
            <pre><code>{`<div class="container">
  <h1>Contenido centrado y con ancho máximo</h1>
</div>

<div class="container-fluid">
  <h1>Contenido a todo el ancho disponible</h1>
</div>`}</code></pre>
            <div className="callout">
              <strong>Pregunta de diseño:</strong> ¿quiero un bloque legible y centrado o una sección que ocupe toda la pantalla? Empieza solo con <code>.container</code> y <code>.container-fluid</code>.
            </div>
            <pre><code>{`PÁGINA
└── CONTAINER
    └── ROW
        └── COLUMNAS`}</code></pre>
          </div>
        </details>
      </section>

      <section className="doc-section" id="grid">
        <details className="dd" open>
          <summary>4 · Grid responsive: container → row → col</summary>
          <div className="dd-body">
            <p>El grid divide una fila en 12 partes. Prueba primero dos columnas iguales:</p>
            <pre><code>{`<div class="container">
  <div class="row">
    <div class="col-6">Izquierda</div>
    <div class="col-6">Derecha</div>
  </div>
</div>`}</code></pre>
            <p>Reduce la ventana: ¿queremos realmente dos columnas estrechas en un móvil?</p>
            <pre><code>{`<div class="row">
  <div class="col-12 col-md-6">Izquierda</div>
  <div class="col-12 col-md-6">Derecha</div>
</div>`}</code></pre>
            <div className="callout tip">
              Lee <code>col-12 col-md-6</code> como una frase: <strong>en móvil ocupa 12 columnas; desde md, ocupa 6</strong>. Eso es mobile-first: primero diseñas para móvil y luego amplías desde un breakpoint.
            </div>
            <pre><code>{`col-12 col-sm-6 col-md-4 col-lg-3

Por defecto: 12 columnas
Desde sm:     6 columnas
Desde md:     4 columnas
Desde lg:     3 columnas`}</code></pre>
            <p>Primero decide cuándo debe cambiar el diseño; consulta los píxeles después. No conviertas Bootstrap en una lista para memorizar.</p>
            <details className="dd dd-nested">
              <summary>Referencia · Breakpoints de Bootstrap 5</summary>
              <div className="dd-body">
                <div className="table-wrap" role="region" aria-label="Breakpoints Bootstrap 5" tabIndex={0}>
                  <table className="table"><thead><tr><th>Prefijo</th><th>Desde</th><th>Uso orientativo</th></tr></thead><tbody>
                    <tr><td>sin prefijo</td><td>0 px</td><td>Móvil, punto de partida</td></tr>
                    <tr><td><code>sm</code></td><td>576 px</td><td>Móvil grande</td></tr>
                    <tr><td><code>md</code></td><td>768 px</td><td>Tablet</td></tr>
                    <tr><td><code>lg</code></td><td>992 px</td><td>Escritorio pequeño</td></tr>
                    <tr><td><code>xl</code></td><td>1200 px</td><td>Escritorio</td></tr>
                    <tr><td><code>xxl</code></td><td>1400 px</td><td>Pantalla grande</td></tr>
                  </tbody></table>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      <section className="doc-section" id="utilities">
        <details className="dd" open>
          <summary>5 · Utilities: resolver problemas con el CSS que ya conoces</summary>
          <div className="dd-body">
            <p>Las utilities son clases pequeñas. Úsalas para ajustes locales; no sustituyen comprender CSS.</p>
            <div className="table-wrap" role="region" aria-label="Utilities de Bootstrap" tabIndex={0}>
              <table className="table"><thead><tr><th>Necesito…</th><th>Bootstrap</th><th>CSS</th></tr></thead><tbody>
                <tr><td>espacio interior</td><td><code>p-3</code>, <code>px-4</code></td><td><code>padding</code></td></tr>
                <tr><td>separar por arriba</td><td><code>mt-4</code></td><td><code>margin-top</code></td></tr>
                <tr><td>centrar con Flexbox</td><td><code>d-flex justify-content-center align-items-center</code></td><td><code>display: flex</code> y alineación</td></tr>
                <tr><td>ocultar desde un tamaño</td><td><code>d-none d-md-block</code></td><td><code>display</code> y media query</td></tr>
              </tbody></table>
            </div>
            <div className="callout"><strong>Cómo leer spacing:</strong> <code>m</code> es margin y <code>p</code> es padding; <code>t</code>, <code>b</code>, <code>s</code> y <code>e</code> indican top, bottom, start y end.</div>
          </div>
        </details>
      </section>

      <section className="doc-section" id="componentes">
        <details className="dd" open>
          <summary>6 · Componentes: reutilizar, entender y hacerlos tuyos</summary>
          <div className="dd-body">
            <p>En esta jornada bastan <strong>button, card, navbar y alert</strong>. La metodología es: <strong>buscar → copiar → entender → modificar</strong>.</p>
            <pre><code>{`<article class="card">
  <div class="card-body">
    <h2 class="card-title">Curso de CSS</h2>
    <p class="card-text">HTML semántico + clases Bootstrap.</p>
    <a class="btn btn-primary" href="#inscripcion">Inscribirme</a>
  </div>
</article>`}</code></pre>
            <div className="callout warn">
              Un componente no garantiza accesibilidad por sí solo. Conserva HTML semántico, nombres accesibles, contraste, foco visible y prueba el teclado. Navbar, modal y dropdown necesitan el JavaScript bundle.
            </div>
            <h3>Bootstrap pone la base; tu CSS decide el diseño</h3>
            <pre><code>{`<button class="btn btn-primary boton-contacto">Contactar</button>

/* styles.css */
.boton-contacto {
  border-radius: 2rem;
  padding-inline: 2rem;
}`}</code></pre>
            <p>Bootstrap aporta una base consistente y tu clase expresa una decisión del proyecto. No hay que escoger entre Bootstrap y CSS: trabajan juntos.</p>
          </div>
        </details>
      </section>

      <section className="doc-section" id="ruta">
        <details className="dd" open>
          <summary>7 · Practica en orden: de una fila a una landing</summary>
          <div className="dd-body">
            <ol>
              <li><Link to="/ejercicios/e11-bootstrap-grid">E11 · Grid y breakpoints</Link></li>
              <li><Link to="/ejercicios/e13-bootstrap-cards">E13 · Utilities, cards y botones</Link></li>
              <li><Link to="/ejercicios/e12-bootstrap-navbar">E12 · Navbar y JavaScript de Bootstrap</Link></li>
              <li><Link to="/ejercicios/e14-bootstrap-forms">E14 · Formularios y validación</Link></li>
              <li><Link to="/ejercicios/e15-bootstrap-landing">E15 · Landing final</Link></li>
            </ol>
            <h3>Reto final · Landing de un negocio</h3>
            <ol>
              <li>Bootstrap por CDN y una hoja <code>styles.css</code> posterior.</li>
              <li>Navbar, hero, footer y al menos dos <code>row</code>.</li>
              <li>Grid responsive con <code>col-12</code> y <code>col-md-*</code>.</li>
              <li>Tres cards, botones y cinco utilities.</li>
              <li>Una clase CSS propia que personalice Bootstrap.</li>
              <li>Una comprobación en móvil, escritorio y con teclado.</li>
            </ol>
            <div className="callout tip"><strong>Al terminar:</strong> debes poder explicar qué aporta Bootstrap, qué conocías ya en CSS y qué regla propia has añadido para hacer la interfaz tuya.</div>
          </div>
        </details>
      </section>
    </main>
  );
}
