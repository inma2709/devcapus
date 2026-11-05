import { useEffect, useMemo, useState } from "react";
import { manualAsset } from "../utils/manualAsset";

const heroImage = manualAsset("css.png");
const pre = { background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: ".5rem", overflowX: "auto" };
const code = (lines) => lines.join("\n");

export default function V27_Fondos_Gradientes() {
  useEffect(() => { document.title = "CSS · Fondos y gradientes"; }, []);
  const questions = useMemo(() => [
    { id: "color", q: "¿Qué propiedad pinta el color de fondo de una caja?", options: ["color", "background-color", "font-color"], correct: "background-color", why: "background-color pinta la superficie de la caja; color controla el texto." },
    { id: "repeat", q: "¿Qué valor evita que una imagen de fondo se repita?", options: ["repeat", "no-repeat", "contain"], correct: "no-repeat", why: "no-repeat muestra una sola copia de la imagen." },
    { id: "cover", q: "¿Qué prioriza background-size: cover?", options: ["Ver toda la imagen", "Llenar toda la caja", "Repetir la imagen"], correct: "Llenar toda la caja", why: "cover llena la caja aunque deba recortar los bordes de la imagen." },
    { id: "gradient", q: "¿Cuál es la diferencia básica entre linear-gradient y radial-gradient?", options: ["No hay diferencia", "El primero sigue una dirección y el segundo se expande desde un punto", "El radial necesita una fotografía"], correct: "El primero sigue una dirección y el segundo se expande desde un punto", why: "Los dos son imágenes generadas por CSS, pero su transición tiene una forma distinta." },
    { id: "image", q: "¿Cuándo conviene usar img en vez de background-image?", options: ["Cuando la imagen transmite contenido importante", "Nunca", "Solo para gradientes"], correct: "Cuando la imagen transmite contenido importante", why: "Una imagen informativa necesita texto alternativo; el fondo se reserva principalmente para decoración." },
  ], []);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.filter((q) => answers[q.id] === q.correct).length;
  const preview = { minHeight: "10rem", padding: "1.5rem", borderRadius: ".75rem", display: "grid", alignContent: "center", gap: ".5rem" };
  const photo = "url(" + heroImage + ")";
  const overlay = "linear-gradient(rgba(15,23,42,.58), rgba(15,23,42,.58)), url(" + heroImage + ")";

  return <main className="doc" id="contenido">
    <header className="doc-hero">
      <p className="doc-kicker">Aspectos visuales</p>
      <h1>Fondos y gradientes</h1>
      <p className="doc-lead">Una misma estructura HTML puede parecer completamente distinta según lo que haya detrás de sus cajas. Aquí aprenderás a decidir ese fondo con intención.</p>
      <div className="callout tip"><strong>Ruta de trabajo:</strong> problema → decisión → propiedad → resultado. El fondo debe apoyar al contenido, no competir con él.</div>
    </header>

    <section className="card">
      <h2>1. El reto visual: el mismo HTML, tres resultados</h2>
      <p>Los tres bloques contienen el mismo contenido. ¿Por qué parecen interfaces diferentes?</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        <div style={{ ...preview, minHeight: "8rem", background: "white", border: "1px solid #cbd5e1" }}><strong>A · Sin decisión de fondo</strong><span>Curso de CSS</span></div>
        <div style={{ ...preview, minHeight: "8rem", background: "#eff6ff", color: "#1e3a8a", border: "1px solid #bfdbfe" }}><strong>B · Fondo suave</strong><span>Curso de CSS</span></div>
        <div style={{ ...preview, minHeight: "8rem", color: "white", textShadow: "0 1px 3px #0f172a", backgroundImage: overlay, backgroundPosition: "center", backgroundSize: "cover" }}><strong>C · Fotografía y capa oscura</strong><span>Curso de CSS</span></div>
      </div>
      <div className="callout">En este tema controlamos <strong>qué hay detrás del contenido de una caja</strong>: color, imagen, gradiente o varias capas.</div>
    </section>

    <section className="card">
      <h2>2. El fondo pertenece a la caja</h2>
      <pre style={pre}><code>{code([
        "┌──────────────────────────────┐",
        "│          background          │",
        "│                              │",
        "│     ┌────────────────┐       │",
        "│     │    contenido    │       │",
        "│     └────────────────┘       │",
        "│                              │",
        "└──────────────────────────────┘",
      ])}</code></pre>
      <p><code>background</code> no crea un elemento nuevo: pinta el fondo de una caja existente. Por eso <code>background-color</code>, <code>background-image</code>, <code>background-position</code> y <code>background-size</code> controlan el mismo espacio.</p>
    </section>

    <section className="card">
      <h2>3. Problema: diferenciar una tarjeta sin llamar demasiado la atención</h2>
      <h3>HTML</h3>
      <pre style={pre}><code>{code([
        "<section class=\"tarjeta\">",
        "  <h2>Curso de CSS</h2>",
        "  <p>Aprende a diseñar interfaces modernas.</p>",
        "</section>",
      ])}</code></pre>
      <p><strong>Prueba antes de mirar el código:</strong> si solo quieres separarla del fondo de página, ¿usarías un color muy oscuro, muy saturado o un tono suave?</p>
      <h3>Decisión: fondo suave y texto oscuro</h3>
      <pre style={pre}><code>{code([
        ".tarjeta {",
        "  background-color: #f8fafc;",
        "  color: #1e293b;",
        "  padding: 1.5rem;",
        "}",
      ])}</code></pre>
      <div style={{ ...preview, background: "#f8fafc", color: "#1e293b", border: "1px solid #cbd5e1" }}><h3 style={{ margin: 0 }}>Curso de CSS</h3><p style={{ margin: 0 }}>Aprende a diseñar interfaces modernas.</p></div>
      <p><code>background-color</code> pinta la superficie y <code>color</code> controla el texto. Las dos decisiones van juntas.</p>
    </section>

    <section className="card">
      <h2>4. Gran pregunta: ¿esta imagen es contenido o decoración?</h2>
      <div className="table-wrap"><table className="table"><thead><tr><th>La imagen…</th><th>Usa</th></tr></thead><tbody>
        <tr><td>Aporta información o es contenido del artículo.</td><td><code>&lt;img&gt;</code></td></tr>
        <tr><td>Necesita texto alternativo.</td><td><code>&lt;img&gt;</code></td></tr>
        <tr><td>Solo decora, crea ambiente o queda detrás del contenido.</td><td><code>background-image</code></td></tr>
      </tbody></table></div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
        <div><h3>Producto: es contenido</h3><pre style={pre}><code>{"<img src=\"zapato.jpg\" alt=\"Zapatilla deportiva azul\" />"}</code></pre></div>
        <div><h3>Hero: puede ser decoración</h3><pre style={pre}><code>{code([".hero {", "  background-image: url(\"images/aula.jpg\");", "}"])}</code></pre></div>
      </div>
      <div className="callout warn">Si una fotografía transmite información importante, utiliza <code>&lt;img&gt;</code> y un <code>alt</code> útil. El fondo se reserva principalmente para decoración.</div>
    </section>

    <section className="card">
      <h2>5. Las cuatro preguntas de una imagen de fondo</h2>
      <pre style={pre}><code>{code([
        "¿QUÉ IMAGEN?       background-image",
        "¿SE REPITE?        background-repeat",
        "¿DÓNDE SE COLOCA?  background-position",
        "¿QUÉ TAMAÑO TIENE? background-size",
      ])}</code></pre>
      <p>No memorices propiedades aisladas. Mira el problema y responde estas preguntas en orden.</p>

      <h3>¿Se repite?</h3>
      <p><strong>Predice:</strong> si una imagen pequeña entra en una caja grande y no indicas nada, el navegador puede repetirla para cubrir el fondo.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(185px, 1fr))", gap: ".75rem" }}>
        <div style={{ ...preview, minHeight: "6rem", color: "#0f172a", backgroundImage: photo, backgroundSize: "42px", backgroundRepeat: "repeat" }}><strong>repeat</strong><span>▧ ▧ ▧ ▧</span></div>
        <div style={{ ...preview, minHeight: "6rem", color: "#0f172a", backgroundImage: photo, backgroundSize: "42px", backgroundRepeat: "repeat-x" }}><strong>repeat-x</strong><span>▧ ▧ ▧ ▧</span></div>
        <div style={{ ...preview, minHeight: "6rem", color: "#0f172a", backgroundImage: photo, backgroundSize: "42px", backgroundRepeat: "repeat-y" }}><strong>repeat-y</strong><span>▧</span></div>
        <div style={{ ...preview, minHeight: "6rem", color: "#0f172a", backgroundImage: photo, backgroundSize: "42px", backgroundRepeat: "no-repeat" }}><strong>no-repeat</strong><span>▧</span></div>
      </div>

      <h3>¿Dónde se coloca?</h3>
      <p><code>background-position</code> decide qué zona de la imagen usamos como referencia. Con <code>cover</code>, <code>center</code> intenta mantener visible el centro; <code>top</code> puede ser mejor si lo importante está arriba.</p>
      <pre style={pre}><code>{code([
        "top left       top        top right",
        "",
        "left           center     right",
        "",
        "bottom left    bottom     bottom right",
      ])}</code></pre>

      <h3>¿Qué tamaño tiene?</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1rem" }}>
        <div><h4><code>cover</code></h4><div style={{ ...preview, color: "white", minHeight: "9rem", backgroundImage: photo, backgroundPosition: "center", backgroundSize: "cover" }}>Llena toda la caja; puede recortar.</div><p><strong>Objetivo:</strong> que no quede ningún hueco.</p></div>
        <div><h4><code>contain</code></h4><div style={{ ...preview, color: "#0f172a", minHeight: "9rem", backgroundColor: "#e2e8f0", backgroundImage: photo, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>Muestra toda la imagen; puede dejar espacio.</div><p><strong>Objetivo:</strong> ver la imagen completa.</p></div>
      </div>
      <div className="callout tip"><strong>Regla para recordar:</strong> <code>cover</code> prioriza la caja; <code>contain</code> prioriza la imagen.</div>
    </section>

    <section className="card">
      <h2>6. Construimos un hero paso a paso</h2>
      <p>Partimos de una fotografía. Antes de copiar cinco propiedades, detecta los problemas: puede repetirse, quedar mal colocada, no cubrir la caja y dejar el texto sin contraste.</p>
      <h3>HTML</h3>
      <pre style={pre}><code>{code([
        "<section class=\"hero\">",
        "  <h1>Aprende CSS</h1>",
        "  <p>Diseña interfaces más claras y atractivas.</p>",
        "</section>",
      ])}</code></pre>
      <pre style={pre}><code>{code([
        ".hero {",
        "  background-image: url(\"images/hero.jpg\");",
        "  background-repeat: no-repeat;  /* no quiero copias */",
        "  background-position: center;   /* conservo el centro */",
        "  background-size: cover;        /* quiero cubrir la caja */",
        "}",
      ])}</code></pre>
      <div style={{ ...preview, minHeight: "15rem", color: "white", textShadow: "0 1px 3px #0f172a", backgroundImage: photo, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}><h3 style={{ margin: 0 }}>Aprende CSS</h3><p style={{ margin: 0 }}>Diseña interfaces más claras y atractivas.</p></div>
    </section>

    <section className="card">
      <h2>7. Gradientes: imágenes generadas por CSS</h2>
      <p>Un gradiente no es un color. Para CSS es una <strong>imagen generada por el navegador</strong>, por eso puede utilizarse como fondo.</p>
      <p>Un gradiente lineal responde a dos preguntas: <strong>¿hacia dónde?</strong> y <strong>¿entre qué colores?</strong></p>
      <pre style={pre}><code>{code([
        "background: linear-gradient(",
        "  to right,",
        "  #7c3aed,",
        "  #06b6d4",
        ");",
      ])}</code></pre>
      <div style={{ ...preview, color: "white", background: "linear-gradient(to right, #7c3aed, #06b6d4)" }}>Gradiente lineal: de izquierda a derecha</div>
      <p>Para experimentar visualmente, puedes usar <a href="https://cssgradient.io/" target="_blank" rel="noreferrer">CSS Gradient</a>, generar un gradiente y leer el código que produce. No copies sin observar qué dirección, colores y paradas has elegido.</p>

      <h3>Laboratorio de gradientes</h3>
      <pre style={pre}><code>{code([
        ".demo {",
        "  background: linear-gradient(to right, #7c3aed, #06b6d4);",
        "}",
      ])}</code></pre>
      <ol>
        <li>Cambia solo <code>to right</code> por <code>to bottom</code>. ¿Qué cambia?</li>
        <li>Prueba <code>45deg</code> como dirección.</li>
        <li>Añade un tercer color: <code>purple, blue, cyan</code>.</li>
        <li>Mueve las paradas: <code>purple 0%, blue 30%, cyan 100%</code>. ¿Ocupa ahora el azul más o menos espacio?</li>
      </ol>
      <div style={{ ...preview, color: "white", background: "linear-gradient(45deg, purple 0%, blue 30%, cyan 100%)" }}>Modifica una sola decisión cada vez.</div>

      <h3>Un radial, sin complicarlo</h3>
      <pre style={pre}><code>{code([
        "background: radial-gradient(",
        "  circle,",
        "  white,",
        "  #c4b5fd",
        ");",
      ])}</code></pre>
      <div style={{ ...preview, color: "#312e81", background: "radial-gradient(circle, white, #c4b5fd)" }}>Un radial se expande desde un punto.</div>
      <p><code>linear-gradient()</code> avanza en una dirección. <code>radial-gradient()</code> se expande desde un punto.</p>
    </section>

    <section className="card">
      <h2>8. Problema real: la foto es bonita, pero el texto no se lee</h2>
      <p>No hace falta cambiar la fotografía. Podemos colocar una capa entre ella y el texto.</p>
      <pre style={pre}><code>{code([
        ".hero {",
        "  background-color: #1e293b;  /* red de seguridad */",
        "  color: white;",
        "  background:",
        "    linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)),",
        "    url(\"images/hero.jpg\") center / cover no-repeat;",
        "}",
      ])}</code></pre>
      <div style={{ ...preview, minHeight: "15rem", color: "white", background: overlay + " center / cover no-repeat" }}><h3 style={{ margin: 0 }}>DevCampus</h3><p style={{ margin: 0 }}>Formación práctica y progresiva.</p><button type="button" className="btn" style={{ width: "fit-content", background: "white", color: "#0f172a" }}>Ver cursos</button></div>
      <pre style={pre}><code>{code([
        "CAPA 1  gradiente oscuro  → queda más cerca del usuario",
        "CAPA 2  fotografía",
        "CAPA 3  color de fondo, si la imagen no carga",
      ])}</code></pre>
      <div className="callout tip">Con varios fondos, <strong>el primero que escribimos queda encima</strong>. El gradiente mejora el contraste sin modificar el archivo original.</div>
    </section>

    <section className="card">
      <h2>9. Al final: la abreviatura <code>background</code></h2>
      <p>Primero aprende las propiedades por separado. Después puedes escribir una versión abreviada cuando siga siendo fácil de leer.</p>
      <pre style={pre}><code>{code([
        ".hero {",
        "  background-image: url(\"hero.jpg\");",
        "  background-position: center;",
        "  background-size: cover;",
        "  background-repeat: no-repeat;",
        "}",
        "",
        ".hero {",
        "  background: url(\"hero.jpg\") center / cover no-repeat;",
        "}",
      ])}</code></pre>
      <pre style={pre}><code>{"center / cover\n   ↑       ↑\nposition  size"}</code></pre>
    </section>

    <section className="card">
      <h2>10. Cuando algo no funciona</h2>
      <div className="table-wrap"><table className="table"><thead><tr><th>Lo que observas</th><th>Qué revisar primero</th></tr></thead><tbody>
        <tr><td>La imagen se repite.</td><td><code>background-repeat: no-repeat</code></td></tr>
        <tr><td>La imagen no llena la caja.</td><td><code>background-size: cover</code></td></tr>
        <tr><td>Se ha cortado una parte importante.</td><td><code>background-position</code> o si realmente necesitas <code>contain</code></td></tr>
        <tr><td>El texto no se lee.</td><td>Cambia color, posición o añade una capa de gradiente.</td></tr>
        <tr><td>No aparece la imagen.</td><td>Revisa primero la ruta dentro de <code>url(...)</code>.</td></tr>
      </tbody></table></div>
    </section>

    <section className="card">
      <h2>11. Microdecisiones para practicar</h2>
      <ol>
        <li><strong>Elige el fondo:</strong> crea una tarjeta con fondo claro, oscuro o suave. Justifica en una frase por qué.</li>
        <li><strong>¿Repeat o no-repeat?</strong> prueba una textura pequeña y una fotografía grande. Decide cuál debe repetirse.</li>
        <li><strong>Cover o contain:</strong> prueba ambos valores sobre la misma imagen. ¿Cuál llena la caja? ¿Cuál muestra toda la imagen?</li>
        <li><strong>Cambia una sola variable:</strong> modifica solo la dirección de un <code>linear-gradient()</code> y observa el resultado.</li>
        <li><strong>Rescata el texto:</strong> parte de una foto clara con texto blanco y añade una capa hasta que sea legible.</li>
      </ol>
    </section>

    <section className="card">
      <h2>Reto · Hero de DevCampus</h2>
      <pre style={pre}><code>{code([
        "<section class=\"hero\">",
        "  <h1>DevCampus</h1>",
        "  <p>Aprende desarrollo web paso a paso.</p>",
        "  <a href=\"#\">Ver cursos</a>",
        "</section>",
      ])}</code></pre>
      <p>El hero debe ocupar una zona destacada, usar una fotografía decorativa, no repetirla, cubrir el espacio, conservar una zona importante visible y permitir leer título, texto y botón.</p>
      <div className="callout tip"><strong>Tú decides las propiedades.</strong><br />¿Imagen? → <code>background-image</code><br />¿Se repite? → <code>background-repeat</code><br />¿Dónde? → <code>background-position</code><br />¿Tamaño? → <code>background-size</code><br />¿No se lee? → piensa en una capa.</div>
    </section>

    <section className="card">
      <h2>Acabamos de ver · Fondos</h2>
      <pre style={pre}><code>{code([
        "QUIERO DISEÑAR EL FONDO DE UNA CAJA",
        "                  │",
        "        ┌─────────┴─────────┐",
        "        ↓                   ↓",
        "      COLOR               IMAGEN",
        "background-color      background-image",
        "                            │",
        "              ┌─────────────┼─────────────┐",
        "              ↓             ↓             ↓",
        "           ¿repite?      ¿dónde?       ¿tamaño?",
        "            repeat       position        size",
        "                                            │",
        "                                   cover ↔ contain",
        "",
        "TRANSICIÓN DE COLOR → linear-gradient() / radial-gradient()",
        "IMAGEN + TEXTO NO SE LEE → gradiente + imagen",
      ])}</code></pre>
      <div className="callout tip"><strong>Idea final:</strong> no empieces por una propiedad. Describe qué quieres que ocurra detrás del contenido, elige la herramienta y observa el resultado.</div>
    </section>

    <section className="card" id="test">
      <h2>Mini-test</h2>
      <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
        {questions.map((q) => <fieldset key={q.id} style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid " + (submitted ? (answers[q.id] === q.correct ? "#86efac" : "#fca5a5") : "#cbd5e1"), borderRadius: ".5rem" }}>
          <legend style={{ fontWeight: 700 }}>{q.q}</legend>
          {q.options.map((option) => <label key={option} style={{ display: "block", marginTop: ".35rem" }}><input type="radio" name={q.id} checked={answers[q.id] === option} onChange={() => setAnswers((current) => ({ ...current, [q.id]: option }))} disabled={submitted} /> {option}</label>)}
          {submitted && <p>💡 {q.why}</p>}
        </fieldset>)}
        {!submitted ? <button className="btn btn-primary" disabled={Object.keys(answers).length !== questions.length}>Comprobar respuestas</button> : <div className="callout"><strong>Resultado: {score}/{questions.length}.</strong> <button type="button" className="btn" onClick={() => { setAnswers({}); setSubmitted(false); }}>Repetir</button></div>}
      </form>
    </section>
  </main>;
}
