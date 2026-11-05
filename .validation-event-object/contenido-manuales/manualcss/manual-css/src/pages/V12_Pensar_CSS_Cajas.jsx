import { Link } from "react-router-dom";

const htmlExample = `<main>
  <section id="sobre-mi">
    <img src="foto.jpg" alt="Laura García" />
    <h2>Sobre mí</h2>
    <p>Desarrolladora web.</p>
  </section>
</main>`;

const boxMap = `PÁGINA
│
├── HEADER
│   ├── nombre
│   └── navegación
│
├── MAIN
│   └── SECTION
│       ├── imagen
│       ├── título
│       └── texto
│
└── FOOTER`;

const sketch = `┌─────────────────────────────┐
│ HEADER                      │
│ nombre       navegación     │
└─────────────────────────────┘

┌─────────────────────────────┐
│ SOBRE MÍ                    │
│ imagen · título · texto     │
└─────────────────────────────┘

┌─────────────────────────────┐
│ FOOTER                      │
└─────────────────────────────┘`;

const finalMap = `LEO MI HTML
      ↓
IDENTIFICO LAS CAJAS
      ↓
IMAGINO EL DISEÑO
      ↓
DESCRIBO QUÉ QUIERO CONSEGUIR
      ↓
DIAGNOSTICO EL PROBLEMA
      ↓
ME HAGO UNA PREGUNTA
      ↓
IDENTIFICO LA FAMILIA CSS
      ↓
DESPUÉS BUSCARÉ UNA HERRAMIENTA
      ↓
PROBARÉ UN VALOR
      ↓
OBSERVARÉ Y AJUSTARÉ`;

export default function V12_Pensar_CSS_Cajas() {
  return (
    <article className="doc">
      <header className="doc-hero">
        <p className="doc-kicker">Pensar en CSS · Actividad 1</p>
        <h1>De HTML a diseño: piensa en cajas</h1>
        <p className="doc-lead">Antes de buscar una propiedad CSS, decide qué quieres conseguir.</p>
        <div className="callout tip">
          <strong>Abre el HTML que ya has creado.</strong> Todavía no escribas CSS.
        </div>
      </header>

      <section className="card">
        <h2>Actividad guiada</h2>
        <p>Ya sabes escribir reglas CSS y seleccionar elementos. Ahora vas a aprender algo distinto: CSS resuelve problemas de presentación. Las propiedades son herramientas; antes de usar una, necesitas saber qué problema quieres resolver.</p>

        <h3>1. Observa tu HTML</h3>
        <p>Trabaja sobre <strong>tu propio HTML</strong>. El ejemplo solo sirve como referencia: cada página puede tener una estructura distinta.</p>
        <p>Localiza sus partes principales: cabecera, navegación, contenido, secciones, artículos, imágenes, enlaces y pie de página.</p>
        <pre><code>{htmlExample}</code></pre>

        <h3>2. Identifica las cajas que ocupan espacio</h3>
        <p>HTML sigue describiendo qué es cada contenido. Para estudiar su presentación con CSS, imagina el espacio que ocupa cada elemento como una caja.</p>
        <p>En el ejemplo, la <code>section</code>, la imagen, el título y el párrafo ocupan espacio. Esa idea no sustituye su significado HTML: solo te ayuda a pensar cómo se presentarán.</p>
        <pre><code>{boxMap}</code></pre>

        <h3>3. Decide cómo quieres que sea</h3>
        <p>Sin nombrar propiedades, escribe decisiones concretas sobre tu página.</p>
        <ul>
          <li>Quiero diferenciar la cabecera del resto.</li>
          <li>Quiero separar las secciones.</li>
          <li>Quiero controlar el tamaño de la imagen.</li>
          <li>Quiero organizar los enlaces del menú.</li>
          <li>Quiero que el texto sea fácil de leer.</li>
        </ul>
        <div className="callout warn">Evita frases vagas como «quiero que mi página quede más bonita». CSS necesita una decisión observable: qué quieres cambiar y dónde.</div>

        <h3>4. Haz un boceto funcional</h3>
        <p>Puede ser en papel, con un esquema sencillo, en Penpot o con cajas básicas.</p>
        <div className="callout"><strong>No se evalúa tu capacidad para dibujar ni para hacer diseño gráfico.</strong> El boceto solo sirve para decidir dónde estarán las partes principales y cómo quieres organizarlas.</div>
        <pre><code>{sketch}</code></pre>

        <h3>5. Describe al menos cinco decisiones</h3>
        <p>Elige cajas o elementos de tu HTML y escribe qué quieres conseguir con cada uno. Aún no busques nombres de propiedades.</p>
      </section>

      <section className="card">
        <h2>Antes de buscar una solución, diagnostica el problema</h2>
        <p>Cuando algo no se ve como quieres, no empieces preguntando «¿qué propiedad era?». Describe qué ocurre y hazte una pregunta que te ayude a entenderlo.</p>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Lo que observas o quieres</th><th>Pregunta que te ayuda</th><th>Tipo de necesidad</th></tr></thead>
            <tbody>
              <tr><td>«Está demasiado pegado»</td><td>¿Necesito espacio dentro o alrededor?</td><td><strong>Espacio</strong></td></tr>
              <tr><td>«Ocupa demasiado»</td><td>¿Cuánto debe ocupar?</td><td><strong>Tamaño</strong></td></tr>
              <tr><td>«No se distingue del resto»</td><td>¿Quiero cambiar su color o su fondo?</td><td><strong>Color y fondo</strong></td></tr>
              <tr><td>«Quiero colocarlos juntos»</td><td>¿Cómo quiero colocar varios elementos?</td><td><strong>Distribución</strong></td></tr>
              <tr><td>«Mi imagen se ve demasiado grande»</td><td>¿Cómo quiero que se muestre y cuánto debe ocupar?</td><td><strong>Imágenes / Tamaño</strong></td></tr>
            </tbody>
          </table>
        </div>
        <div className="callout tip"><strong>Problema → pregunta → familia CSS.</strong> Las preguntas son la herramienta principal; la familia solo te ayuda a localizar qué tipo de herramienta necesitarás después.</div>
      </section>

      <section className="card">
        <h2>Preguntas para orientarte</h2>
        <p>No necesitas memorizar esta clasificación. Úsala cuando tengas un problema: la pregunta te ayudará a localizar el tipo de necesidad.</p>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Pregunta</th><th>Familia CSS</th></tr></thead>
            <tbody>
              <tr><td>¿Cuánto debe ocupar?</td><td>Tamaño</td></tr>
              <tr><td>¿Necesito espacio dentro o alrededor?</td><td>Espacio</td></tr>
              <tr><td>¿Cómo quiero que se vea el texto?</td><td>Texto</td></tr>
              <tr><td>¿Quiero cambiar su color o su fondo?</td><td>Color y fondo</td></tr>
              <tr><td>¿Quiero cambiar su forma?</td><td>Forma</td></tr>
              <tr><td>¿Cómo quiero que se muestre una imagen?</td><td>Imágenes</td></tr>
              <tr><td>¿Cómo quiero colocar varios elementos?</td><td>Distribución</td></tr>
            </tbody>
          </table>
        </div>
        <p>Los problemas reales no siempre pertenecen a una sola familia. Una imagen demasiado grande puede requerir pensar en <strong>Imágenes</strong> y en <strong>Tamaño</strong>. Las preguntas orientan: no imponen una clasificación rígida.</p>
        <div className="callout">Una misma necesidad puede tener distintas soluciones CSS según el contexto. Primero identifica el problema; después aprenderás a elegir la herramienta adecuada.</div>
      </section>

      <section className="card">
        <h2>Tu plan de CSS</h2>
        <p><strong>Este es el resultado de la actividad.</strong> Completa una tabla como esta con tu propio HTML. Será tu hoja de ruta para los próximos temas.</p>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Caja o elemento</th><th>Qué quiero conseguir</th><th>Pregunta que me hago</th><th>Familia CSS</th></tr></thead>
            <tbody>
              <tr><td><code>header</code></td><td>Diferenciarlo del resto.</td><td>¿Cómo quiero que se vea?</td><td>Color y fondo</td></tr>
              <tr><td><code>header</code></td><td>Dejar espacio alrededor del contenido.</td><td>¿Necesito espacio dentro o alrededor?</td><td>Espacio</td></tr>
              <tr><td><code>nav</code></td><td>Organizar los enlaces.</td><td>¿Cómo quiero colocar varios elementos?</td><td>Distribución</td></tr>
              <tr><td><code>main</code></td><td>Controlar cuánto ocupa.</td><td>¿Cuánto debe ocupar?</td><td>Tamaño</td></tr>
              <tr><td><code>section</code></td><td>Separarlas entre sí.</td><td>¿Necesito espacio entre cajas?</td><td>Espacio</td></tr>
              <tr><td>Imagen</td><td>Controlar cómo se muestra.</td><td>¿Cómo quiero mostrarla?</td><td>Imágenes</td></tr>
              <tr><td><code>footer</code></td><td>Diferenciarlo visualmente.</td><td>¿Cómo quiero que se vea?</td><td>Color y fondo</td></tr>
            </tbody>
          </table>
        </div>
        <div className="callout tip">Al terminar debes tener: tus cajas principales identificadas, un boceto funcional, al menos cinco decisiones y tu propio plan de CSS con cada decisión clasificada.</div>
      </section>

      <section className="card">
        <h2>Lo que sigue</h2>
        <p>Has decidido que una sección necesita más espacio alrededor de su contenido. Ya has diagnosticado el tipo de problema: <strong>Espacio</strong>. En los siguientes temas aprenderás qué herramientas CSS permiten controlarlo.</p>
        <pre><code>{finalMap}</code></pre>
        <div className="callout tip"><strong>No memorices una propiedad.</strong> Entiende qué problema puede ayudarte a resolver.</div>
        <div className="doc-next">
          <Link className="btn btn-primary" to="/css-pensar-variables">Continuar: Tema 2 · Variables CSS →</Link>
        </div>
      </section>
    </article>
  );
}
