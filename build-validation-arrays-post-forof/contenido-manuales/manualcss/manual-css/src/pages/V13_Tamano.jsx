import { Link } from "react-router-dom";

const decisionMap = `TAMAÑO
│
├── Quiero fijar un tamaño
│   ├── width
│   └── height
│
├── Quiero poner un límite máximo
│   ├── max-width
│   └── max-height
│
├── Quiero poner un límite mínimo
│   ├── min-width
│   └── min-height
│
└── Quiero que se adapte
    ├── %
    ├── unidades relativas
    └── tamaño adaptable + límites`;

const finalMap = `¿CUÁNTO DEBE OCUPAR?
│
├── Necesito un tamaño concreto
│   └── width / height
│
├── Necesito poner límites
│   ├── max-width / max-height
│   └── min-width / min-height
│
└── Necesito que pueda adaptarse
    ├── %
    ├── unidades relativas
    └── tamaño adaptable + límites`;

export default function V13_Tamano() {
  return (
    <article className="doc">
      <header className="doc-hero">
        <p className="doc-kicker">Aspectos visuales · Tamaño</p>
        <h1>Tamaño · ¿Cuánto debe ocupar?</h1>
        <p className="doc-lead">No todos los problemas de tamaño se resuelven fijando <code>width</code> o <code>height</code>.</p>
        <div className="callout tip">
          <strong>Pregunta guía:</strong> si mañana esta caja se muestra en una pantalla más estrecha, ¿podrá adaptarse o estoy obligándola a conservar su tamaño?
        </div>
      </header>

      <section className="card">
        <h2>Empieza por el problema</h2>
        <p>En “Pensar en CSS” aprendiste a diagnosticar antes de buscar una herramienta. Haz lo mismo aquí: identifica qué ocurre con el tamaño y formula una pregunta. Después decide si necesitas fijar una medida, poner un límite o permitir adaptación.</p>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Situación</th><th>Pregunta que te ayuda</th></tr></thead>
            <tbody>
              <tr><td>Esta caja ocupa demasiado ancho.</td><td>¿Quiero darle un ancho concreto o solo limitarla?</td></tr>
              <tr><td>Esta imagen se sale de su contenedor.</td><td>¿Quiero impedir que supere el espacio disponible?</td></tr>
              <tr><td>Este componente se hace demasiado pequeño.</td><td>¿Necesita un tamaño mínimo?</td></tr>
              <tr><td>Esta sección cambia según la pantalla.</td><td>¿Debe tener un tamaño fijo o adaptable?</td></tr>
            </tbody>
          </table>
        </div>
        <div className="callout">Antes de elegir una propiedad, decide qué tipo de problema de tamaño tienes.</div>
      </section>

      <section className="card">
        <h2>Mapa para decidir</h2>
        <pre><code>{decisionMap}</code></pre>
        <p>No necesitas memorizar este mapa. Úsalo para decidir qué tipo de solución necesitas cuando aparezca un problema de tamaño.</p>
      </section>

      <section className="card">
        <h2>1. Quiero controlar cuánto ancho ocupa una caja</h2>
        <p><strong>Problema:</strong> una tarjeta necesita un ancho concreto.</p>
        <p><strong>Pregunta:</strong> ¿quiero que esta tarjeta mida siempre lo mismo?</p>
        <p>Si la respuesta es sí, <code>width</code> indica el ancho deseado.</p>
        <pre><code>{`<article class="tarjeta">
  <h2>Curso de CSS</h2>
  <p>Aprende a diseñar con intención.</p>
</article>

.tarjeta {
  width: 320px;
}`}</code></pre>
        <p><strong>Qué ocurre:</strong> la tarjeta intenta medir 320px. Puede ser válido cuando realmente necesitas un tamaño concreto, pero puede convertirse en un problema si el espacio disponible es menor.</p>
        <div className="callout warn">Antes de fijar un ancho, pregúntate si el elemento debe medir siempre 320px. Una unidad no decide por sí sola si un diseño se adapta: <code>width: 20rem</code> también establece un ancho concreto.</div>
      </section>

      <section className="card">
        <h2>Tamaño y responsividad: ¿qué ocurre cuando cambia el espacio?</h2>
        <p><strong>Pregunta guía:</strong> ¿qué ocurrirá con este elemento si su contenedor se hace más pequeño?</p>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Tamaño rígido</th><th>Tamaño adaptable con límite</th></tr></thead>
            <tbody><tr>
              <td><pre><code>{`.tarjeta {
  width: 320px;
}`}</code></pre><p>La tarjeta intenta conservar 320px.</p></td>
              <td><pre><code>{`.tarjeta {
  width: 100%;
  max-width: 320px;
}`}</code></pre><p>Ocupa el espacio disponible, pero no supera 320px.</p></td>
            </tr></tbody>
          </table>
        </div>
        <p><code>width: 100%</code> permite ocupar el espacio disponible; <code>max-width: 320px</code> evita que la tarjeta sea más ancha de ese límite. Juntas forman un patrón frecuente para una tarjeta adaptable.</p>
        <div className="callout tip">Un diseño responsive no significa evitar <code>px</code>. Significa que los elementos que necesitan adaptarse no pueden depender únicamente de tamaños rígidos.</div>
      </section>

      <section className="card">
        <h2>Tamaños de pantalla: la misma web, distintos espacios</h2>
        <p>La misma página puede abrirse con muy poco ancho, en una tablet, en un portátil o en una pantalla grande. Rangos como <code>320–480px</code>, <code>768–1023px</code> o <code>1280px o más</code> son referencias para aprender, no tamaños obligatorios ni modelos concretos de dispositivo.</p>
        <img src="tamano-responsive-espacio-disponible.png" alt="Guía visual de tamaños de pantalla y comparación entre una tarjeta rígida y otra adaptable con límite" style={{ display: "block", width: "100%", height: "auto", marginBlock: "1rem" }} />
        <p>CSS no necesita saber si alguien usa un móvil o un ordenador: trabaja con el espacio disponible. Por eso, en lugar de preguntar «¿qué tamaño tiene este dispositivo?», pregunta «¿qué debe hacer este elemento cuando tiene menos espacio?».</p>
        <div className="callout"><strong>Idea clave:</strong> responsive no consiste en memorizar tamaños de pantalla; consiste en construir un diseño capaz de responder cuando cambia el espacio disponible.</div>
      </section>

      <section className="card">
        <h2>3. Poner un límite: no crecer demasiado</h2>
        <p><strong>Problema:</strong> el contenido ocupa demasiado ancho en pantallas grandes.</p>
        <p><strong>Pregunta:</strong> ¿quiero que pueda ser más pequeño, pero no más grande de un límite?</p>
        <pre><code>{`<main class="contenido">
  <h2>Sobre mí</h2>
  <p>Este texto debe tener una anchura cómoda de lectura.</p>
</main>

.contenido {
  max-width: 900px;
}`}</code></pre>
        <p><code>max-width</code> pone un techo: el elemento puede ser más pequeño, pero no superar ese máximo. Si quieres que además ocupe el ancho disponible, combínalo con <code>width: 100%</code>.</p>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Código</th><th>Qué estoy decidiendo</th></tr></thead>
            <tbody>
              <tr><td><code>width: 320px</code></td><td>Quiero un ancho concreto.</td></tr>
              <tr><td><code>width: 100%</code></td><td>Quiero ocupar el espacio disponible.</td></tr>
              <tr><td><code>max-width: 320px</code></td><td>No quiero superar ese ancho.</td></tr>
              <tr><td><code>width: 100%; max-width: 320px</code></td><td>Quiero adaptarme, pero con un límite.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="card">
        <h2>4. Quiero evitar que se haga demasiado pequeño</h2>
        <p><strong>Problema:</strong> una tarjeta o un botón se comprime demasiado.</p>
        <p><strong>Pregunta:</strong> ¿quiero permitir que crezca, pero proteger un tamaño mínimo?</p>
        <pre><code>{`<a class="boton" href="#contacto">Contactar</a>

.boton {
  min-width: 160px;
}`}</code></pre>
        <p><code>min-width</code> establece el ancho mínimo que quieres conservar. El elemento puede crecer si lo necesita, pero no debería bajar de ese límite.</p>
        <div className="callout warn">Un mínimo demasiado grande puede dificultar que el diseño se adapte a pantallas estrechas. El límite debe responder a una necesidad real.</div>
      </section>

      <section className="card">
        <h2>5. Altura y límites verticales: con cuidado</h2>
        <p><strong>Problema:</strong> una caja decorativa necesita una altura concreta.</p>
        <p><strong>Pregunta:</strong> ¿su contenido puede crecer, cambiar de tamaño o mostrarse en otro dispositivo?</p>
        <pre><code>{`.aviso {
  height: 200px;
}`}</code></pre>
        <p><strong>Qué ocurre:</strong> <code>height</code> solicita una altura concreta. En bloques con texto variable puede dejar poco espacio cuando aumenta el contenido o el tamaño de letra, así que úsala solo cuando responda a una necesidad de diseño clara.</p>
        <p><code>max-height</code> pone un límite vertical superior y <code>min-height</code> conserva una altura mínima. Por ahora basta con reconocer su función; más adelante verás cómo tratar contenido que no cabe.</p>
      </section>

      <section className="card">
        <h2>6. ¿Tamaño fijo o tamaño adaptable?</h2>
        <p>La misma pregunta de tamaño puede tener respuestas distintas según el contexto.</p>
        <pre><code>{`<!-- Una tarjeta de tamaño concreto -->
<article class="tarjeta">...</article>

<!-- Un bloque que se adapta a su contenedor -->
<section class="destacado">...</section>

.tarjeta {
  width: 300px;
}

.destacado {
  width: 80%;
}`}</code></pre>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Pregunta</th><th>Idea</th></tr></thead>
            <tbody>
              <tr><td>¿Debe medir siempre lo mismo?</td><td>Valora un tamaño concreto.</td></tr>
              <tr><td>¿Debe adaptarse al espacio disponible?</td><td>Valora un tamaño relativo.</td></tr>
            </tbody>
          </table>
        </div>
        <p>En <code>width: 80%</code>, el porcentaje se calcula respecto al espacio disponible de su contenedor. Más adelante estudiarás otras unidades y estrategias de adaptación.</p>
      </section>

      <section className="card">
        <h2>7. Quiero que ocupe el ancho disponible</h2>
        <p><strong>Problema:</strong> un elemento debe ocupar todo el ancho que su contenedor le ofrece.</p>
        <p><strong>Pregunta:</strong> ¿quiero que se adapte al ancho disponible de su contenedor?</p>
        <pre><code>{`<section class="panel">
  <img class="foto" src="perfil.jpg" alt="Retrato de Laura" />
</section>

.foto {
  width: 100%;
}`}</code></pre>
        <p>El <code>100%</code> se calcula respecto al espacio disponible de su contenedor. Por eso esta idea es útil para entender imágenes y bloques adaptables.</p>
      </section>

      <section className="card">
        <h2>8. Un patrón real: ancho disponible con límite de lectura</h2>
        <p><strong>Problema:</strong> quiero que el contenido aproveche el espacio disponible, pero no que las líneas de texto sean interminables.</p>
        <pre><code>{`<main class="contenido-principal">
  <h1>Mi portfolio</h1>
  <p>Presentación de mi trabajo y experiencia.</p>
</main>

.contenido-principal {
  width: 100%;
  max-width: 900px;
}`}</code></pre>
        <p>Estas dos herramientas responden a dos necesidades distintas: ocupar el espacio disponible y no superar un límite. Juntas forman un patrón habitual para contenido legible.</p>
        <div className="callout">Una necesidad no siempre tiene una única herramienta. El contexto decide qué combinación tiene sentido.</div>
      </section>

      <section className="card">
        <h2>Microdiagnóstico</h2>
        <p>Lee cada situación. No pienses todavía en el código: identifica primero el tipo de necesidad.</p>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Situación</th><th>Diagnóstico</th></tr></thead>
            <tbody>
              <tr><td>Una tarjeta mide demasiado en pantallas grandes, pero debe poder reducirse.</td><td>Límite máximo.</td></tr>
              <tr><td>Un botón se hace demasiado estrecho.</td><td>Límite mínimo.</td></tr>
              <tr><td>Un bloque debe ocupar todo el ancho de su contenedor.</td><td>Tamaño adaptable.</td></tr>
              <tr><td>Una sección debe medir exactamente 400px de alto.</td><td>Tamaño concreto.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="card">
        <h2>Aplica Tamaño a tu plan de CSS</h2>
        <p>Vuelve al plan que creaste en “Pensar en CSS”. Busca los elementos cuyo problema pertenezca a la familia <strong>Tamaño</strong> y completa esta parte de tu plan.</p>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Elemento</th><th>Problema de tamaño</th><th>Pregunta</th><th>Herramienta probable</th></tr></thead>
            <tbody>
              <tr><td><code>main</code></td><td>Ocupa demasiado ancho.</td><td>¿Necesita un máximo?</td><td><code>max-width</code></td></tr>
              <tr><td>Imagen</td><td>Puede salirse del contenedor.</td><td>¿Debe limitarse al espacio disponible?</td><td><code>max-width</code></td></tr>
              <tr><td>Tarjeta</td><td>Debe tener un ancho estable.</td><td>¿Quiero un tamaño concreto?</td><td><code>width</code></td></tr>
              <tr><td>Botón</td><td>No debe comprimirse demasiado.</td><td>¿Necesita un mínimo?</td><td><code>min-width</code></td></tr>
            </tbody>
          </table>
        </div>
        <div className="callout tip"><strong>Tu tarea:</strong> añade al menos dos decisiones de Tamaño a tu propio plan. Escribe primero el problema y la pregunta; el código será la herramienta que probarás después.</div>
      </section>

      <section className="card">
        <h2>Comprobación</h2>
        <ol>
          <li>¿Qué diferencia hay entre <code>width: 300px</code> y <code>max-width: 300px</code>?</li>
          <li>Si una tarjeta debe poder hacerse más pequeña en móvil, ¿qué solución parece más adecuada?</li>
          <li>¿Usar <code>rem</code> hace automáticamente que un diseño sea responsive?</li>
          <li>¿Qué significa <code>width: 100%; max-width: 900px</code>?</li>
          <li>Antes de fijar un tamaño, ¿qué pregunta deberías hacerte sobre una pantalla más estrecha?</li>
        </ol>
        <div className="callout"><strong>Idea final:</strong> diagnostica primero si necesitas un tamaño, un límite o capacidad de adaptación; después elige la propiedad CSS.</div>
      </section>

      <section className="card">
        <h2>Mapa final</h2>
        <pre><code>{finalMap}</code></pre>
        <p><strong>Recuerda:</strong> no preguntes primero «¿qué propiedad toca?». Pregunta «¿cuánto debe ocupar y con qué límites?».</p>
        <div className="doc-next">
          <Link className="btn btn-primary" to="/css-espacio">Siguiente tema: Espacio · ¿Dentro o fuera de la caja? →</Link>
        </div>
      </section>
    </article>
  );
}
