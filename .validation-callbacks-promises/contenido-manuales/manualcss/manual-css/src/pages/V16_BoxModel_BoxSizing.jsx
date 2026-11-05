import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { manualAsset } from "../utils/manualAsset";

const pre = { background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" };
const lines = (items) => items.join("\n");
const boxModelGuideImage = manualAsset("box-model-guia-visual.png");

export default function V16_BoxModel_BoxSizing() {
  useEffect(() => { document.title = "V16 · Box Model y Box-Sizing: la base invisible del diseño web"; }, []);
  const questions = useMemo(() => [
    { id: "q1", question: "Con content-box, width: 200px, padding: 20px y border: 5px ocupa visualmente...", answer: "250px", options: ["200px", "220px", "250px", "260px"], explain: "200px de contenido + 40px de padding + 10px de borde = 250px." },
    { id: "q2", question: "El texto de una tarjeta toca demasiado su borde. ¿Qué necesitas?", answer: "padding", options: ["margin", "padding", "border", "overflow"], explain: "Padding crea aire dentro de la caja." },
    { id: "q3", question: "¿Qué hace que width incluya contenido, padding y border?", answer: "box-sizing: border-box", options: ["box-sizing: content-box", "box-sizing: border-box", "overflow: auto", "max-width"], explain: "Con border-box, el ancho declarado es el ancho total visible." },
    { id: "q4", question: "¿Qué valor de overflow añade scroll solo si hace falta?", answer: "auto", options: ["visible", "hidden", "scroll", "auto"], explain: "Auto se adapta a si el contenido cabe o no." },
    { id: "q5", question: "¿Qué propiedad limita el crecimiento de una caja?", answer: "max-width", options: ["width", "margin", "max-width", "border"], explain: "Max-width establece hasta dónde puede crecer." },
  ], []);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.filter((item) => answers[item.id] === item.answer).length;

  return <main className="doc" id="contenido">
    <a className="skip-link" href="#contenido-real">Saltar al contenido</a>
    <header className="doc-hero" id="contenido-real">
      <p className="doc-kicker">V16 · Layout · punto de partida</p>
      <h1>Box Model y Box-Sizing · La base invisible del diseño web</h1>
      <p className="doc-lead">Todo elemento HTML participa en la página como una caja. Descubre qué partes tiene, cuánto ocupa realmente y dónde actuar cuando necesitas espacio.</p>
      <div className="callout tip"><strong>Objetivo:</strong> mirar una caja y explicar qué parte estás modificando y por qué.</div>
    </header>

    <section className="doc-section">
      <h2>Guía visual · Las partes y el tamaño de una caja</h2>
      <p>Antes de escribir código, usa este mapa para localizar qué parte de la caja quieres modificar. Es la base sobre la que construiremos todo el layout.</p>
      <img src={boxModelGuideImage} alt="Guía visual del modelo de cajas CSS: content, padding, border, margin, content-box y border-box." style={{ width: "100%", height: "auto", border: "1px solid #dbeafe", borderRadius: "0.75rem" }} />
      <div className="callout tip"><strong>En este primer tema de layout:</strong> céntrate en <code>content</code>, <code>padding</code>, <code>border</code>, <code>margin</code> y <code>box-sizing</code>. La guía también anticipa ideas que veremos después: <code>gap</code> se trabajará en Flexbox y el comportamiento de los márgenes verticales, en Display y flujo.</div>
    </section>

    <nav className="doc-index" aria-label="Índice del tema"><h2>Índice</h2><ol>
      <li><a href="#caja">Todo elemento es una caja</a></li><li><a href="#paso">Construimos una caja</a></li><li><a href="#calculo">El tamaño real</a></li><li><a href="#espacio">Primer vistazo al espacio</a></li><li><a href="#overflow">Cuando el contenido no cabe</a></li><li><a href="#limites">Width y max-width</a></li><li><a href="#practica">Prácticas y reto</a></li><li><a href="#repaso">Acabamos de aprender</a></li><li><a href="#test">Mini-test</a></li>
    </ol></nav>

    <section className="doc-section" id="caja">
      <h2>1. Todo elemento es una caja</h2>
      <p>Un párrafo, una imagen, un botón o una tarjeta tienen contenido y ocupan espacio. CSS los representa con cuatro capas.</p>
      <pre style={pre}><code>{lines(["              MARGIN", "     espacio respecto a otras cajas", "", "     ┌──────────────────────────┐", "     │         BORDER           │", "     │   ┌──────────────────┐   │", "     │   │     PADDING      │   │", "     │   │  ┌────────────┐  │   │", "     │   │  │  CONTENT   │  │   │", "     │   │  └────────────┘  │   │", "     │   └──────────────────┘   │", "     └──────────────────────────┘"])}</code></pre>
      <div className="grid-2"><div className="card"><h3>Content</h3><p>Lo que contiene la caja: texto, imagen o iconos.</p></div><div className="card"><h3>Padding</h3><p>Aire <strong>dentro</strong>, entre contenido y borde.</p></div><div className="card"><h3>Border</h3><p>El límite visual de la caja; también ocupa espacio.</p></div><div className="card"><h3>Margin</h3><p>Aire <strong>fuera</strong>, entre esta caja y otras.</p></div></div>
      <div className="callout"><strong>Piensa en una caja de regalo:</strong> el regalo es el content, el relleno protector es padding, las paredes son border y la distancia hasta otra caja es margin.</div>
    </section>

    <section className="doc-section" id="paso">
      <h2>2. Construimos una caja paso a paso</h2><p>Trabajaremos siempre sobre la misma caja para observar qué modifica cada propiedad.</p>
      <h3>HTML</h3><pre style={pre}><code>{lines(["<div class=\"caja\">", "  Soy una caja", "</div>"])}</code></pre>
      <h3>Punto de partida</h3><pre style={pre}><code>{lines([".caja {", "  width: 200px;", "  background-color: #e0f2fe;", "}"])}</code></pre>
      <div style={{ width: "200px", background: "#e0f2fe", color: "#0c4a6e" }}>Soy una caja</div>
      <h3>Paso 1 · El contenido está pegado al límite</h3><p><strong>Pregunta:</strong> ¿dónde debe aparecer el aire? Dentro de la caja.</p><pre style={pre}><code>{".caja { padding: 20px; }"}</code></pre>
      <h3>Paso 2 · Quiero ver dónde termina</h3><p>El borde hace visible el límite.</p><pre style={pre}><code>{".caja { border: 4px solid #2563eb; }"}</code></pre>
      <h3>Paso 3 · Quiero separarla de otra caja</h3><p>Ese aire está fuera, así que usamos margen.</p><pre style={pre}><code>{".caja { margin-bottom: 30px; }"}</code></pre>
      <div style={{ width: "200px", padding: "20px", border: "4px solid #2563eb", marginBottom: "30px", background: "#e0f2fe", color: "#0c4a6e" }}>Soy una caja</div><div style={{ width: "200px", padding: "20px", border: "4px solid #94a3b8", background: "#f8fafc" }}>Otra caja</div>
      <div className="callout tip"><strong>Observación:</strong> padding crea aire dentro; border dibuja el límite; margin separa una caja de la siguiente.</div>
    </section>

    <section className="doc-section" id="calculo">
      <h2>3. ¿Cuánto ocupa realmente?</h2><p>Hemos escrito <code>width: 200px</code>. Antes de abrir el navegador, predice: ¿la caja completa seguirá midiendo 200px?</p>
      <pre style={pre}><code>{lines([".caja {", "  width: 200px;", "  padding: 20px;", "  border: 5px solid #2563eb;", "}"])}</code></pre>
      <p>Por defecto, <code>content-box</code> hace que <code>width</code> mida solo el contenido.</p><pre style={pre}><code>{lines(["content   200px", "padding    40px", "border     10px", "──────────────", "TOTAL     250px"])}</code></pre>
      <div className="grid-2"><div className="card"><h3><code>content-box</code></h3><div style={{ width: "200px", padding: "20px", border: "5px solid #f59e0b", background: "#fef3c7", textAlign: "center", margin: "1rem auto" }}>200px de content</div><p>La caja visible mide <strong>250px</strong>.</p></div><div className="card"><h3><code>border-box</code></h3><div style={{ width: "200px", padding: "20px", border: "5px solid #22c55e", background: "#dcfce7", boxSizing: "border-box", textAlign: "center", margin: "1rem auto" }}>200px totales</div><p>Padding y borde entran dentro de los <strong>200px</strong>.</p></div></div>
      <h3>La solución para un tamaño predecible</h3><pre style={pre}><code>{lines([".caja {", "  width: 200px;", "  padding: 20px;", "  border: 5px solid #2563eb;", "  box-sizing: border-box;", "}"])}</code></pre>
      <p>Con <code>border-box</code>, el ancho declarado incluye content, padding y border.</p>
      <details className="dd"><summary>Práctica segura: reset de <code>box-sizing</code></summary><div className="dd-body"><pre style={pre}><code>{lines(["*, *::before, *::after {", "  box-sizing: border-box;", "}"])}</code></pre><p>Hace que los tamaños sean más previsibles en todo el proyecto.</p></div></details>
    </section>

    <section className="doc-section" id="espacio">
      <h2>4. Primer vistazo al espacio de la caja</h2><p>El modelo de caja ya nos permite reconocer dos decisiones, sin entrar todavía en todos los casos de uso.</p>
      <pre style={pre}><code>{lines(["DENTRO de la caja → padding", "FUERA de la caja  → margin"])}</code></pre>
      <div className="table-wrap"><table className="table"><thead><tr><th>Problema</th><th>Decisión</th><th>Herramienta</th></tr></thead><tbody><tr><td>El texto toca el borde.</td><td>Falta aire dentro.</td><td><code>padding</code></td></tr><tr><td>Dos secciones están juntas.</td><td>Falta aire fuera.</td><td><code>margin</code></td></tr></tbody></table></div>
      <p>En el siguiente tema practicarás esta decisión con problemas visuales reales. Más adelante, Flexbox y Grid añadirán otra idea: el espacio uniforme entre varios hijos de un contenedor.</p>
    </section>


    <section className="doc-section" id="overflow">
      <h2>6. Cuando el contenido no cabe: <code>overflow</code></h2><p>Una caja puede ser más pequeña que su contenido. Decide qué quieres que ocurra con lo que sobra.</p>
      <pre style={pre}><code>{lines(["CAJA PEQUEÑA", "┌──────────────┐", "│ mucho texto  │", "│ mucho texto  │", "└──────────────┘", "  texto fuera"])}</code></pre>
      <div className="table-wrap"><table className="table"><thead><tr><th>Valor</th><th>Idea</th></tr></thead><tbody><tr><td><code>visible</code></td><td>El contenido puede salir.</td></tr><tr><td><code>hidden</code></td><td>Lo que sobra se recorta.</td></tr><tr><td><code>auto</code></td><td>Aparece scroll solo si hace falta.</td></tr><tr><td><code>scroll</code></td><td>Fuerza barras de desplazamiento.</td></tr></tbody></table></div>
      <pre style={pre}><code>{lines([".caja {", "  width: 250px;", "  height: 100px;", "  overflow: auto;", "}"])}</code></pre>
    </section>

    <section className="doc-section" id="limites"><h2>7. Controlar el crecimiento: <code>width</code> y <code>max-width</code></h2><p><code>width: 100%</code> permite usar el espacio disponible. <code>max-width</code> marca hasta dónde puede crecer una caja.</p><pre style={pre}><code>{lines([".contenedor {", "  width: 100%;", "  max-width: 1200px;", "}"])}</code></pre><div className="callout">Las formas avanzadas de establecer mínimos y máximos se verán después en Responsive y Grid.</div></section>

    <section className="doc-section" id="practica">
      <h2>8. Microprácticas: observa, predice y decide</h2>
      <details className="dd" open><summary>1 · Construye una caja</summary><div className="dd-body"><pre style={pre}><code>{"<div class=\"caja\">Estoy aprendiendo el Box Model</div>"}</code></pre><p>Añade en orden: <code>background-color</code>, <code>width</code>, <code>padding</code>, <code>border</code> y <code>margin</code>. ¿Qué creó espacio dentro, fuera y el límite?</p></div></details>
      <details className="dd"><summary>2 · Predice antes de ejecutar</summary><div className="dd-body"><pre style={pre}><code>{lines([".caja {", "  width: 200px;", "  padding: 20px;", "  border: 5px solid;", "}"])}</code></pre><p>¿La caja completa mide exactamente 200px? Compruébalo después.</p></div></details>
      <details className="dd"><summary>3 · Activa <code>border-box</code></summary><div className="dd-body"><pre style={pre}><code>{".caja { box-sizing: border-box; }"}</code></pre><p>¿Qué cambió en el tamaño total?</p></div></details>
      <details className="dd"><summary>4 · ¿Padding o margin?</summary><div className="dd-body"><ol><li>El texto toca el borde de una tarjeta.</li><li>Dos tarjetas están demasiado juntas.</li><li>Un botón necesita aire interior.</li><li>Dos secciones necesitan separarse.</li></ol><p><strong>Solución:</strong> padding, margin, padding, margin.</p></div></details>
      <details className="dd"><summary>5 · El contenido no cabe</summary><div className="dd-body"><p>Crea una caja de <code>width: 250px</code> y <code>height: 100px</code>, añade texto largo y prueba <code>visible</code>, <code>hidden</code> y <code>auto</code>.</p></div></details>
      <h3>Reto · Una tarjeta que respira</h3><pre style={pre}><code>{lines(["<article class=\"tarjeta\">", "  <h2>Curso de CSS</h2>", "  <p>Aprende a controlar el diseño de una página web.</p>", "  <a href=\"#\">Ver curso</a>", "</article>"])}</code></pre><p>Consigue ancho controlado, aire interior, borde, separación exterior y un tamaño predecible.</p><pre style={pre}><code>{lines(["¿Cuánto mide? → width / max-width", "¿Toca el borde? → padding", "¿Marco? → border", "¿Separación exterior? → margin", "¿Tamaño predecible? → box-sizing"])}</code></pre><details className="dd"><summary>Ver solución orientativa</summary><div className="dd-body"><pre style={pre}><code>{lines([".tarjeta {", "  width: 100%;", "  max-width: 360px;", "  padding: 20px;", "  border: 2px solid #2563eb;", "  margin: 24px 0;", "  box-sizing: border-box;", "}"])}</code></pre></div></details>
    </section>

    <section className="doc-section" id="repaso">
      <h2>Acabamos de aprender · Box Model</h2><p>Cada elemento HTML participa en la página como una caja. Antes de cambiar valores al azar, identifica qué parte necesitas controlar.</p>
      <pre style={pre}><code>{lines(["CONTENT → ¿Qué contiene la caja?", "        ↓", "PADDING → ¿Cuánto aire necesita por dentro?", "        ↓", "BORDER → ¿Dónde está su límite?", "        ↓", "MARGIN → ¿Cuánto espacio necesita respecto a otras cajas?"])}</code></pre>
      <div className="table-wrap"><table className="table"><thead><tr><th>Si necesito...</th><th>Me pregunto...</th><th>Utilizo</th></tr></thead><tbody><tr><td>Definir el ancho</td><td>¿Cuánto debe medir?</td><td><code>width</code></td></tr><tr><td>Limitar crecimiento</td><td>¿Hasta cuánto puede crecer?</td><td><code>max-width</code></td></tr><tr><td>Aire al contenido</td><td>¿Falta espacio dentro?</td><td><code>padding</code></td></tr><tr><td>Ver el límite</td><td>¿Quiero enmarcar?</td><td><code>border</code></td></tr><tr><td>Separar cajas</td><td>¿Falta espacio fuera?</td><td><code>margin</code></td></tr><tr><td>Tamaño predecible</td><td>¿Padding y border entran en width?</td><td><code>box-sizing: border-box</code></td></tr><tr><td>Contenido que sobresale</td><td>¿Qué pasa si no cabe?</td><td><code>overflow</code></td></tr></tbody></table></div>
      <div className="grid-2"><div className="card"><h3><code>content-box</code></h3><pre style={pre}><code>{lines(["width      200px", "padding    +40px", "border     +10px", "───────────────", "total      250px"])}</code></pre></div><div className="card"><h3><code>border-box</code></h3><pre style={pre}><code>{lines(["200px TOTAL", "┌────────────────────────────┐", "│ border + padding + content │", "└────────────────────────────┘"])}</code></pre></div></div>
      <div className="callout tip"><strong>Con <code>border-box</code>, el tamaño declarado incluye content, padding y border.</strong></div><div className="callout"><strong>No elijas margin o padding por prueba y error.</strong><br />Primero identifica la parte de la caja: DENTRO → padding &nbsp; | &nbsp; FUERA → margin.</div>
    </section>

    <section className="doc-section" id="test"><h2>9. Mini-test</h2><p>Comprueba si puedes observar, decidir y explicar.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>{questions.map((item, index) => { const correct = submitted && answers[item.id] === item.answer; return <div className="card" key={item.id} style={{ marginTop: "1rem" }}><h3>{index + 1}. {item.question}</h3><div className="test-question" role="group" aria-label={"Pregunta " + (index + 1)}>{item.options.map((option) => <label key={option}><input type="radio" name={item.id} value={option} checked={answers[item.id] === option} disabled={submitted} onChange={() => setAnswers((old) => ({ ...old, [item.id]: option }))} /><span>{option}</span></label>)}</div>{submitted && <div className={"callout " + (correct ? "tip" : "warn")}>{correct ? "Correcta. " : "La respuesta correcta es " + item.answer + ". "}{item.explain}</div>}</div>; })}<div className="doc-next" style={{ gap: ".6rem" }}>{!submitted ? <button className="btn btn-primary" type="submit">Corregir test</button> : <><div className="badge" aria-live="polite">Resultado: {score}/{questions.length}</div><button className="btn" type="button" onClick={() => { setAnswers({}); setSubmitted(false); }}>Reintentar</button></>}</div></form></section>
    <section className="doc-section"><h2>Siguiente paso: controla el tamaño de la caja</h2><p>Ya sabes qué partes tiene una caja y cómo influye <code>box-sizing</code>. Ahora decidirás cuánto debe ocupar y qué límites necesita antes de trabajar el espacio.</p><div className="doc-next"><Link className="btn btn-primary" to="/css-tamano">Continuar con Dimensiones y límites →</Link></div></section>
  </main>;
}
