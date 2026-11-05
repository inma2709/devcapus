import { useEffect } from "react";
import { Link } from "react-router-dom";
import { manualAsset } from "../utils/manualAsset";

const pre = { background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: ".5rem", overflowX: "auto" };
const lines = (items) => items.join("\n");
const displayFlowImage = manualAsset("display-flujo-normal.png");
const normalFlow = "h1\n↓\np\n↓\na   a";
const finalMap = "¿CÓMO PARTICIPA ESTA CAJA?\n│\n├── El navegador ya la coloca\n│   └── flujo normal\n│\n├── Quiero que ocupe una línea\n│   └── display: block\n│\n├── Quiero que siga dentro del texto\n│   └── display: inline\n│\n├── Quiero que siga en línea y tenga tamaño controlable\n│   └── display: inline-block\n│\n└── Quiero organizar un grupo de cajas\n    └── Flexbox o Grid";

function DemoBox({ children, style = {} }) {
  return <span style={{ display: "inline-block", padding: ".45rem .7rem", border: "1px solid #94a3b8", borderRadius: ".4rem", background: "#f8fafc", color: "#0f172a", ...style }}>{children}</span>;
}

export default function V17_DisplayFlujo() {
  useEffect(() => { document.title = "V17 · Display y flujo normal: dónde se coloca cada caja"; }, []);

  return (
    <article className="doc">
      <header className="doc-hero">
        <p className="doc-kicker">V17 · Layout</p>
        <h1>Display y flujo normal: ¿dónde se coloca cada caja?</h1>
        <p className="doc-lead">El navegador ya coloca las cajas aunque no escribas CSS. Antes de cambiar algo, observa cómo participa cada una en el flujo.</p>
        <div className="callout tip"><strong>Pregunta guía:</strong> ¿quiero cambiar cómo participa la caja en el flujo o colocarla respecto a una referencia?</div>
      </header>

      <section className="card">
        <h2>Mapa visual · Display y flujo normal</h2>
        <p>Úsalo como referencia mientras avanzas: antes de elegir una propiedad, observa cómo participa ya la caja y qué comportamiento necesitas.</p>
        <img src={displayFlowImage} alt="Infografía sobre flujo normal y los comportamientos block, inline e inline-block en CSS" style={{ width: "100%", height: "auto", borderRadius: ".75rem", border: "1px solid #dbeafe" }} />
      </section>

    <section className="card">
      <h2>Vídeo de apoyo: flujo, display y posición</h2>
      <p>
        Antes de continuar, observa este vídeo con una pregunta en mente: ¿la caja
        está siguiendo el flujo normal o se está colocando respecto a una referencia?
      </p>
      <div className="media" style={{ maxWidth: 900 }}>
        <iframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/UCc0bJfqsmk"
          title="Vídeo de apoyo sobre display, flujo y posición en CSS"
          frameBorder="0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>

      <section className="card">
        <h2>1. ¿Qué ocurre si no escribo CSS?</h2>
        <p>Abre este HTML sin añadir reglas CSS y observa antes de buscar una explicación.</p>
        <pre style={pre}><code>{`<h1>Mi tienda</h1>

<p>
  Tenemos productos para
  <strong>perros y gatos</strong>.
</p>

<a href="#productos">Ver productos</a>
<a href="#contacto">Contacto</a>`}</code></pre>
        <ul>
          <li>El <code>h1</code> empieza una línea nueva.</li>
          <li>El párrafo aparece debajo.</li>
          <li><code>strong</code> sigue dentro de la línea de texto.</li>
          <li>Los enlaces pueden continuar uno junto a otro si hay espacio.</li>
        </ul>
        <p>¿Quién ha decidido esto? El navegador, mediante sus estilos iniciales y el <strong>flujo normal</strong>.</p>
        <pre style={pre}><code>{normalFlow}</code></pre>
      </section>

      <section className="card">
        <h2>2. El flujo normal es el punto de partida</h2>
        <p>El flujo normal es la forma en que el navegador coloca los elementos de una página cuando no hemos cambiado su distribución con CSS.</p>
        <p>Las cajas no aparecen al azar: unas ocupan su propia línea y otras participan dentro de una línea. Cada caja en el flujo afecta a dónde podrá aparecer la siguiente.</p>
        <div className="callout">Antes de organizar una página, observa primero qué está haciendo ya el navegador.</div>
      </section>

      <section className="card">
        <h2>Observa el flujo: cada caja reserva su lugar</h2>
        <pre style={pre}><code>{`<div class="caja">A</div>
<div class="caja">B</div>
<div class="caja">C</div>

.caja {
  padding: 1rem;
  border: 2px solid #2563eb;
}`}</code></pre>
        <div style={{ display: "grid", gap: ".5rem", maxWidth: "300px" }}>
          {["A", "B", "C"].map((letter) => <div key={letter} style={{ padding: "1rem", border: "2px solid #2563eb", borderRadius: ".4rem", textAlign: "center", background: "#eff6ff" }}>{letter}</div>)}
        </div>
        <pre style={pre}><code>{`┌──────────────┐
│      A       │
└──────────────┘
       ↓
┌──────────────┐
│      B       │
└──────────────┘
       ↓
┌──────────────┐
│      C       │
└──────────────┘`}</code></pre>
        <div className="callout tip">Cada caja reserva un lugar. La siguiente se coloca teniendo en cuenta el espacio ocupado por la anterior.</div>
      </section>

      <section className="card">
        <h2>3. ¿Qué es realmente <code>display</code>?</h2>
        <p><code>display</code> indica cómo se comporta la caja de un elemento dentro del layout y cómo participa en el flujo respecto a las cajas que la rodean.</p>
        <pre style={pre}><code>{`<a href="#contacto">Contacto</a>

a {
  display: block;
}`}</code></pre>
        <p>El elemento sigue siendo un enlace. HTML conserva su significado; CSS cambia su presentación y comportamiento visual.</p>
        <div className="callout tip"><strong>Display</strong> responde: «¿cómo participa esta caja en el flujo?».</div>
      </section>

      <section className="card">
        <h2>4. Quiero que cada caja ocupe su propia línea</h2>
        <p><strong>Problema:</strong> quiero que cada elemento empiece en una línea nueva.</p>
        <p>Una caja <code>block</code> normalmente empieza una nueva línea, ocupa el ancho disponible por defecto y empuja la siguiente caja hacia abajo.</p>
        <pre style={pre}><code>{`<div>Primera caja</div>
<div>Segunda caja</div>

div {
  display: block;
}`}</code></pre>
        <div style={{ display: "grid", gap: ".6rem", maxWidth: "360px" }}><DemoBox>Primera caja</DemoBox><DemoBox>Segunda caja</DemoBox></div>
        <p>Elementos como <code>div</code>, <code>p</code>, <code>h1</code>, <code>section</code> y <code>article</code> suelen tener este comportamiento inicial.</p>
      </section>

      <section className="card">
        <h2>5. Quiero que forme parte de una línea</h2>
        <p><strong>Problema:</strong> quiero que un elemento acompañe al texto, sin romper la línea.</p>
        <pre style={pre}><code>{`<p>
  Aprende <strong>CSS</strong> paso a paso.
</p>

strong {
  display: inline;
}`}</code></pre>
        <p style={{ padding: ".75rem", border: "1px solid #cbd5e1", borderRadius: ".5rem" }}>Aprende <strong>CSS</strong> paso a paso.</p>
        <p>Una caja <code>inline</code> participa dentro de una línea, ocupa aproximadamente lo que necesita su contenido y permite que otros elementos inline continúen a su lado. No se comporta como una caja block para controlar anchura y altura.</p>
      </section>

      <section className="card">
        <h2>6. Quiero cajas en línea, pero con dimensiones controlables</h2>
        <p><strong>Problema:</strong> quiero etiquetas juntas, pero necesito que se comporten más como cajas.</p>
        <pre style={pre}><code>{`<span class="etiqueta">HTML</span>
<span class="etiqueta">CSS</span>

.etiqueta {
  display: inline-block;
  width: 120px;
  padding: 10px;
}`}</code></pre>
        <p><DemoBox style={{ width: "120px", textAlign: "center" }}>HTML</DemoBox>{" "}<DemoBox style={{ width: "120px", textAlign: "center" }}>CSS</DemoBox></p>
        <p><code>inline-block</code> conserva la participación en línea, pero permite controlar mejor las dimensiones de la caja.</p>
        <div className="table-wrap"><table className="table"><thead><tr><th>Necesidad</th><th>Comportamiento</th></tr></thead><tbody>
          <tr><td>Quiero una nueva línea.</td><td><code>block</code></td></tr>
          <tr><td>Quiero seguir dentro de una línea.</td><td><code>inline</code></td></tr>
          <tr><td>Quiero seguir en línea con dimensiones controlables.</td><td><code>inline-block</code></td></tr>
        </tbody></table></div>
      </section>

      <section className="card">
        <h2>Micropráctica: un enlace también es una caja</h2>
        <p>Observa primero este grupo de enlaces. El problema no es todavía organizarlos como un menú: queremos entender por qué el espacio vertical no se ve como esperamos.</p>
        <pre style={pre}><code>{`<nav>
  <a href="#formacion">Formación</a>
  <a href="#experiencia">Experiencia</a>
  <a href="#proyectos">Proyectos</a>
  <a href="#contacto">Contacto</a>
</nav>

a {
  margin-top: 2rem;
  margin-bottom: 4rem;
}`}</code></pre>
        <p><strong>Pregunta:</strong> ¿por qué no aparece el espacio vertical como esperabas?</p>
        <p>Por defecto, <code>&lt;a&gt;</code> participa como una caja <code>inline</code>: forma parte de la línea de texto. <code>margin</code> sigue siendo espacio exterior, pero el efecto visible depende de cómo participa la caja en el flujo.</p>
        <pre style={pre}><code>{`a {
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 4rem;
}`}</code></pre>
        <div className="callout tip"><strong>Idea clave:</strong> no has cambiado el significado de <code>margin</code>; has cambiado el comportamiento de la caja para que pueda mostrar ese espacio vertical de la forma que necesitas.</div>
      </section>

      <section className="card">
        <h2>Observación posterior: márgenes verticales de bloques</h2>
        <p>Cuando dos cajas <code>block</code> consecutivas están en flujo normal, sus márgenes verticales a veces no se suman: puede conservarse el mayor.</p>
        <pre style={pre}><code>{`.uno { margin-bottom: 30px; }
.dos { margin-top: 20px; }

/* separación posible: 30px, no 50px */`}</code></pre>
        <div className="callout warn">Se llama <strong>margin collapse</strong>. No es una regla para memorizar ahora: reconócelo si dos cajas block parecen tener menos separación vertical de la prevista.</div>
      </section>

      <section className="card">
        <h2>Experimento: las mismas etiquetas, tres participaciones</h2>
        <pre style={pre}><code>{`<span class="etiqueta">HTML</span>
<span class="etiqueta">CSS</span>
<span class="etiqueta">JavaScript</span>`}</code></pre>
        <div className="grid-2">
          <div><h3><code>inline</code></h3><pre style={pre}><code>{".etiqueta { display: inline; }"}</code></pre><p>HTML &nbsp; CSS &nbsp; JavaScript</p></div>
          <div><h3><code>block</code></h3><pre style={pre}><code>{".etiqueta { display: block; }"}</code></pre><div style={{ display: "grid", gap: ".3rem" }}><DemoBox>HTML</DemoBox><DemoBox>CSS</DemoBox><DemoBox>JavaScript</DemoBox></div></div>
        </div>
        <h3><code>inline-block</code></h3><pre style={pre}><code>{lines([".etiqueta {", "  display: inline-block;", "  width: 120px;", "  padding: 10px;", "}"])}</code></pre>
        <p><DemoBox style={{ width: "120px", textAlign: "center" }}>HTML</DemoBox>{" "}<DemoBox style={{ width: "120px", textAlign: "center" }}>CSS</DemoBox>{" "}<DemoBox style={{ width: "120px", textAlign: "center" }}>JavaScript</DemoBox></p>
        <div className="callout"><strong>El HTML no ha cambiado.</strong> Lo que cambia es la forma en que esas cajas participan en el flujo.</div>
        <details className="dd"><summary>¿Por qué no basta <code>inline</code>?</summary><div className="dd-body"><pre style={pre}><code>{`span {
  display: inline;
  width: 300px;
}`}</code></pre><p>En un elemento <code>inline</code>, <code>width</code> y <code>height</code> no se comportan como en una caja block. Si necesitas seguir en línea y controlar el tamaño, <code>inline-block</code> responde a ese problema.</p></div></details>
      </section>

      <section className="card">
        <h2>7. El comportamiento inicial depende del elemento</h2>
        <div className="table-wrap"><table className="table"><thead><tr><th>Elemento</th><th>Comportamiento habitual</th></tr></thead><tbody>
          <tr><td><code>div</code>, <code>p</code>, <code>h1</code>, <code>section</code>, <code>article</code></td><td>block</td></tr>
          <tr><td><code>span</code>, <code>strong</code>, <code>a</code></td><td>inline</td></tr>
        </tbody></table></div>
        <p>No memorices una lista: observa el resultado y recuerda que CSS puede cambiar su presentación sin cambiar el significado HTML.</p>
      </section>

      <section className="card">
        <h2>8. ¿Y si quiero organizar varias cajas como grupo?</h2>
        <p>Cuando el problema ya no es una sola caja sino organizar varios hijos en filas, columnas o rejillas, entran en juego otros valores de <code>display</code>.</p>
        <pre style={pre}><code>{`.contenedor {
  display: flex;
}

.galeria {
  display: grid;
}`}</code></pre>
        <p>Flexbox y Grid son herramientas para organizar grupos de cajas. Tendrán sus propios temas: aquí basta con reconocer cuándo el problema pasa de participación individual a distribución de un conjunto.</p>
      </section>

      <section className="card">
        <h2>9. Dos formas de ocultar: ¿debe conservarse el hueco?</h2>
        <p>Esta pregunta sigue perteneciendo al flujo. No basta con pensar «no quiero verlo»: decide también qué ocurrirá con el espacio que ocupaba.</p>
        <div className="table-wrap"><table className="table"><thead><tr><th>Regla</th><th>¿Se ve?</th><th>¿Conserva su hueco?</th></tr></thead><tbody>
          <tr><td><code>display: none</code></td><td>No</td><td>No</td></tr>
          <tr><td><code>visibility: hidden</code></td><td>No</td><td>Sí</td></tr>
        </tbody></table></div>
        <div className="callout tip"><strong>Razona:</strong> si el aviso desaparece y los elementos de alrededor deben recolocarse, piensa en <code>display: none</code>. Si solo debe quedar invisible conservando el espacio, piensa en <code>visibility: hidden</code>.</div>
      </section>

      <section className="card">
        <h2>10. El límite del tema: participación o referencia</h2>
        <p>Hasta aquí hemos respondido preguntas sobre cómo una caja participa en el flujo: nueva línea, dentro del texto, tamaño controlable, ocultar o distribuir un grupo.</p>
        <div className="table-wrap"><table className="table"><thead><tr><th>Si preguntas…</th><th>Herramienta que sigue</th></tr></thead><tbody>
          <tr><td>¿Cómo participa esta caja en el flujo?</td><td><code>display</code></td></tr>
          <tr><td>¿Cómo distribuyo varios hijos?</td><td>Flexbox o Grid</td></tr>
          <tr><td>¿Respecto a qué referencia quiero colocarla?</td><td><code>position</code> — lo veremos después de los layouts</td></tr>
        </tbody></table></div>
        <div className="callout warn">No uses <code>position</code> para resolver un problema de flujo. Antes aprenderás a organizar grupos con Flexbox y Grid; después veremos cómo elegir una referencia de posicionamiento de forma consciente.</div>
      </section>

      <section className="card">
        <h2>11. Reto corto: elige antes de escribir</h2>
        <p>Para cada caso, escribe primero la pregunta sobre el flujo y después la regla más probable.</p>
        <ol>
          <li>Un enlace de navegación debe ocupar toda la fila clicable.</li>
          <li>Tres tecnologías deben aparecer juntas como etiquetas de igual ancho.</li>
          <li>Un aviso temporal debe desaparecer y dejar que el contenido suba.</li>
          <li>Una galería debe repartir sus tarjetas en filas y columnas.</li>
        </ol>
        <details className="dd"><summary>Comprueba tu razonamiento</summary><div className="dd-body"><p>Piensa, respectivamente, en <code>block</code>, <code>inline-block</code>, <code>display: none</code> y Grid. La respuesta útil empieza por el comportamiento que necesitas, no por memorizar una propiedad.</p></div></details>
      </section>

      <section className="card">
        <h2>12. Antes de elegir una propiedad, nombra el problema</h2>
        <div className="table-wrap"><table className="table"><thead><tr><th>Quiero conseguir...</th><th>Pregunta</th><th>Herramienta inicial</th></tr></thead><tbody>
          <tr><td>Empezar en otra línea.</td><td>¿Cómo participa la caja?</td><td><code>display: block</code></td></tr>
          <tr><td>Seguir dentro de una línea.</td><td>¿Cómo participa la caja?</td><td><code>inline</code></td></tr>
          <tr><td>Etiquetas en línea con anchura controlable.</td><td>¿Cómo participa la caja?</td><td><code>inline-block</code></td></tr>
          <tr><td>Organizar varios elementos.</td><td>¿Es un grupo de cajas?</td><td>Flexbox o Grid</td></tr>
          <tr><td>Ocultar un aviso y eliminar su hueco.</td><td>¿Debe seguir ocupando espacio?</td><td><code>display: none</code></td></tr>
        </tbody></table></div>
      </section>

      <section className="card">
        <h2>Microdiagnóstico</h2>
        <ol>
          <li>Tres párrafos deben aparecer uno debajo de otro. ¿Necesitas <code>position</code>? <strong>No:</strong> ya siguen el flujo normal.</li>
          <li>Tres etiquetas deben estar juntas y tener anchura controlable. ¿Display o position? <strong><code>display: inline-block</code></strong>.</li>
          <li>Un enlace debe ocupar todo el ancho de su contenedor. ¿Qué cambia: el significado HTML o su participación visual? <strong>Su participación visual: <code>display: block</code></strong>.</li>
          <li>Un aviso no debe verse ni conservar su hueco. ¿Qué regla responde a ambas condiciones? <strong><code>display: none</code></strong>.</li>
          <li>Diez tarjetas deben repartirse como una cuadrícula adaptable. ¿Es un problema de posición individual? <strong>No: es un grupo; piensa en Grid.</strong></li>
        </ol>
      </section>

      <section className="card">
        <h2>Acabamos de aprender · Display y flujo normal</h2>
        <p>El navegador ya coloca las cajas antes de que escribas CSS. Primero entiende el flujo; después cambia solo la participación que realmente necesitas.</p>
        <pre style={pre}><code>{finalMap}</code></pre>
        <div className="callout tip"><strong>Primero pregunta:</strong> ¿el problema es de flujo individual, de distribución de un grupo o de una referencia espacial?</div>
        <div className="table-wrap"><table className="table"><thead><tr><th>Quiero conseguir...</th><th>Pienso primero en...</th><th>Solución inicial</th></tr></thead><tbody><tr><td>Una caja por línea</td><td>Participación en el flujo</td><td><code>display: block</code></td></tr><tr><td>Elementos dentro de una línea</td><td>Participación en el flujo</td><td><code>display: inline</code></td></tr><tr><td>Elementos en línea con tamaño controlable</td><td>Participación en el flujo</td><td><code>inline-block</code></td></tr><tr><td>Ocultar y eliminar el hueco</td><td>Participación en el flujo</td><td><code>display: none</code></td></tr><tr><td>Organizar varias cajas</td><td>Distribución del grupo</td><td>Flexbox o Grid</td></tr><tr><td>Colocar una caja respecto a otra</td><td>Referencia espacial</td><td>Position — después de los layouts</td></tr></tbody></table></div>
        <p>El siguiente tema parte de un problema que el flujo normal no resuelve por sí solo: organizar los hijos de un contenedor en una dirección.</p>
        <div className="doc-next"><Link className="btn btn-primary" to="/css-flexbox-1">Continuar con Flexbox I →</Link></div>
      </section>
    </article>
  );
}
