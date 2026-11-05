import { useEffect, useMemo, useState } from "react";
import { manualAsset } from "../utils/manualAsset";
import { Link } from "react-router-dom";

export default function V13_Unidades_Medida() {
  useEffect(() => { document.title = "CSS · Unidades de medida"; }, []);
  const questions = useMemo(() => [
    { id: "px", q: "¿Qué unidad es útil para un borde fino y predecible?", options: ["fr", "px", "vh"], correct: "px", why: "Un borde de 1px es un detalle pequeño y preciso." },
    { id: "rem", q: "¿Respecto a qué se calcula rem?", options: ["Al elemento raíz", "Al padre inmediato", "Al viewport"], correct: "Al elemento raíz", why: "rem significa root em: todos comparten la referencia del elemento html." },
    { id: "em", q: "¿Cuándo aporta valor em?", options: ["Cuando el espacio debe escalar con el texto del componente", "Para repartir Grid", "Para un borde"], correct: "Cuando el espacio debe escalar con el texto del componente", why: "em toma como referencia el tamaño de fuente del contexto." },
    { id: "percent", q: "¿Qué referencia usa normalmente width: 80%?", options: ["El contenedor", "La altura de pantalla", "La raíz"], correct: "El contenedor", why: "El porcentaje relaciona esa anchura con el espacio disponible de su contexto." },
    { id: "fr", q: "¿Para qué se utiliza fr?", options: ["Repartir espacio disponible en Grid", "Cambiar texto", "Medir viewport"], correct: "Repartir espacio disponible en Grid", why: "fr representa una fracción del espacio disponible en una cuadrícula." },
  ], []);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = useMemo(() => questions.filter((q) => answers[q.id] === q.correct).length, [answers, questions]);
  const demo = { padding: "1rem", borderRadius: ".75rem", border: "1px solid #cbd5e1", background: "#f8fafc" };

  return <main className="doc" id="contenido">
    <header className="doc-hero"><p className="doc-kicker">Aspectos visuales · Primer tema</p><h1>Unidades de medida en CSS</h1><p className="doc-lead">En CSS medimos tamaños constantemente, pero no todas las medidas significan lo mismo. La pregunta útil no es «¿qué unidad es mejor?», sino «¿respecto a qué quiero que cambie esta medida?».</p></header>

    <section className="card">
      <h2>Vídeo: cómo elegir una unidad de medida</h2>
      <p>Utiliza este vídeo como apoyo antes o después de probar los ejemplos del tema.</p>
      <div className="media" style={{ maxWidth: 900 }}>
        <iframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/_ZncLVKqQVI"
          title="Unidades de medida en CSS"
          frameBorder="0"
          loading="lazy"
          allowFullScreen
          style={{ borderRadius: "0.75rem", width: "100%" }}
        />
      </div>
    </section>

    <section className="card">
      <h2>Guía visual: qué medida elegir</h2>
      <p>Consulta este mapa antes de elegir una unidad. No memorices una lista: parte de qué elemento quieres adaptar y respecto a qué debe calcularse su tamaño.</p>
      <figure className="media">
        <img
          src={manualAsset("unidades-medida-guia.png")}
          alt="Guía visual para elegir unidades CSS: px para detalles precisos, rem para texto y espacios, em para componentes que escalan con su texto, porcentaje para contenedores, vw y vh para la pantalla."
          width="1491"
          height="1055"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Mapa de consulta rápida para relacionar cada unidad con la referencia que utiliza y los elementos donde suele ser útil.</figcaption>
      </figure>
    </section>

    <section className="card"><h2>Una misma tarjeta, necesidades distintas</h2><pre><code>{`<article class="tarjeta">
  <h2>Curso de CSS</h2>
  <p>Aprende a diseñar interfaces web.</p>
  <a class="boton" href="#">Ver curso</a>
</article>`}</code></pre><p>Quizá quieras un borde fino, una tarjeta que dependa de su contenedor, texto que siga la escala general, un botón que crezca con su texto, una sección tan alta como la pantalla o columnas que compartan espacio. No tiene sentido usar siempre la misma unidad.</p><pre><code>{`¿Qué quiero controlar?

Precisión              → px
Tamaño general         → rem
Escala del componente  → em
Tamaño del contenedor  → %
Tamaño de pantalla     → vw / vh
Espacio en Grid        → fr`}</code></pre></section>

    <section className="card"><h2><code>px</code>: precisión para detalles</h2><p><code>px</code> define un valor concreto. Es especialmente razonable para bordes, iconos, líneas y pequeños ajustes.</p><pre><code>{`.tarjeta { border: 1px solid #cbd5e1; }
.icono { width: 24px; height: 24px; }`}</code></pre><div style={{ ...demo, border: "2px solid navy" }}>Un borde de <code>2px</code> es una decisión pequeña y predecible.</div><p><strong>Regla práctica:</strong> px no está prohibido en diseño responsive; el problema es usarlo para todo sin pensar qué debería adaptarse.</p></section>

    <section className="card"><h2><code>%</code>: respecto al contenedor</h2><pre><code>{`.contenedor { width: 600px; }
.tarjeta { width: 80%; }

img { max-width: 100%; }`}</code></pre><p>Si el contenedor mide 600px, la tarjeta ocupa aproximadamente 480px. Si cambia el contenedor, cambia la tarjeta. Por eso % es útil para anchuras relativas y layouts fluidos.</p><div style={{ ...demo, background: "#e0f2fe" }}><div style={{ width: "80%", padding: ".75rem", background: "#38bdf8", color: "#082f49" }}>Esta caja ocupa 80% de su contenedor.</div></div></section>

    <section className="card"><h2><code>rem</code>: una escala general común</h2><p><code>rem</code> significa root em. Se calcula respecto al tamaño de fuente del elemento raíz <code>html</code>.</p><pre><code>{`html { font-size: 16px; }

1rem   = 16px
1.5rem = 24px
2rem   = 32px

body { font-size: 1rem; }
h1 { font-size: 2rem; }
.tarjeta { padding: 1.5rem; }`}</code></pre><p>Usa rem cuando busques una escala general y predecible: tipografía, márgenes, padding y espacios entre bloques.</p></section>

    <section className="card"><h2><code>em</code>: la escala del componente</h2><p><code>em</code> toma como referencia el tamaño tipográfico del contexto. Es útil cuando una medida debe crecer junto con el texto del componente.</p><pre><code>{`.boton { padding: 0.5em 1em; }
.pequeno { font-size: 14px; }
.grande { font-size: 28px; }`}</code></pre><div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}><button style={{ padding: ".5em 1em", fontSize: "14px" }}>Comprar</button><button style={{ padding: ".5em 1em", fontSize: "28px" }}>Comprar</button></div><p>El padding no cambia en el CSS, pero el segundo botón mantiene sus proporciones porque <code>em</code> depende de su propio texto.</p><div className="callout warn"><strong>em frente a rem:</strong> rem usa siempre la raíz; em usa el contexto y puede acumularse en elementos anidados. Reserva em para cuando ese comportamiento sea útil.</div></section>

    <section className="card"><h2><code>vw</code> y <code>vh</code>: respecto a la pantalla</h2><pre><code>{`1vw = 1% del ancho visible
1vh = 1% de la altura visible

.banner { width: 80vw; }
.hero { min-height: 100vh; }`}</code></pre><p>Úsalas cuando quieras depender de la pantalla, no del contenedor. Un hero con <code>min-height: 100vh</code> ocupa como mínimo la altura visible.</p><div style={{ ...demo, minHeight: "12vh", background: "linear-gradient(135deg, #dbeafe, #ede9fe)" }}>Un ejemplo de área relacionada con el viewport.</div><p><code>width: 80%</code> y <code>width: 80vw</code> no son intercambiables: el primero mira al contenedor y el segundo a la ventana.</p></section>

    <section className="card"><h2><code>fr</code>: una unidad que conocerás en Grid</h2><p>En Grid, <code>fr</code> representa una fracción del espacio disponible. Por ahora basta con reconocerla como una unidad propia de las columnas; la aplicarás cuando conozcas ese sistema de layout.</p><pre><code>{`grid-template-columns: 1fr 2fr;

1 parte + 2 partes`}</code></pre><p>La segunda columna recibe aproximadamente el doble de espacio disponible. Profundizarás en <code>fr</code> dentro del tema de Grid.</p></section>

    <section className="card"><h2>Un ejemplo real: combinar unidades</h2><pre><code>{`html { font-size: 16px; }
.hero { min-height: 100vh; }
.tarjeta {
  width: 80%;
  max-width: 600px;
  padding: 2rem;
  border: 1px solid #ccc;
}
.tarjeta h1 { font-size: 2rem; }
.boton { font-size: 1rem; padding: .5em 1em; }`}</code></pre><ul><li><code>100vh</code>: la sección depende de la pantalla.</li><li><code>80%</code>: la tarjeta depende de su contenedor.</li><li><code>600px</code>: un límite concreto evita que crezca indefinidamente.</li><li><code>2rem</code>: espaciado alineado con la escala general.</li><li><code>1px</code>: precisión para el borde.</li><li><code>.5em 1em</code>: botón proporcional a su texto.</li></ul></section>

    <section className="card"><h2>Guía rápida</h2><div className="table-wrap"><table className="table"><thead><tr><th>Quiero controlar</th><th>Unidad habitual</th><th>Ejemplo</th></tr></thead><tbody><tr><td>Bordes y detalles</td><td><code>px</code></td><td><code>border: 1px</code></td></tr><tr><td>Texto y espacios generales</td><td><code>rem</code></td><td><code>padding: 2rem</code></td></tr><tr><td>Escala local</td><td><code>em</code></td><td><code>padding: .5em 1em</code></td></tr><tr><td>Ancho del contenedor</td><td><code>%</code></td><td><code>width: 80%</code></td></tr><tr><td>Pantalla</td><td><code>vw / vh</code></td><td><code>min-height: 100vh</code></td></tr><tr><td>Grid</td><td><code>fr</code></td><td><code>1fr 2fr</code></td></tr></tbody></table></div><div className="callout tip">No existe una unidad universalmente mejor: la unidad adecuada depende de aquello respecto a lo que quieres que la medida se adapte.</div></section>

    <section className="card">
      <h2>Poner límites al tamaño: <code>min</code> y <code>max</code></h2>
      <p>No todos los problemas de tamaño se resuelven fijando una medida. A veces queremos que una caja se adapte, pero que no crezca demasiado o que no llegue a hacerse demasiado pequeña.</p>
      <div className="table-wrap"><table className="table"><thead><tr><th>Necesidad</th><th>Herramienta</th><th>Pregunta útil</th></tr></thead><tbody>
        <tr><td>No quiero que sea más ancha de un límite.</td><td><code>max-width</code></td><td>¿Hasta dónde puede crecer?</td></tr>
        <tr><td>No quiero que sea más estrecha de un límite.</td><td><code>min-width</code></td><td>¿Hasta dónde puede encogerse?</td></tr>
        <tr><td>No quiero que sea más alta de un límite.</td><td><code>max-height</code></td><td>¿Cuál es su altura máxima?</td></tr>
        <tr><td>No quiero que sea más baja de un límite.</td><td><code>min-height</code></td><td>¿Cuál es su altura mínima?</td></tr>
      </tbody></table></div>

      <h3>Un patrón muy habitual: contenido adaptable con un límite</h3>
      <pre><code>{[
        ".contenido {",
        "  width: 100%;",
        "  max-width: 42rem;",
        "}",
      ].join("\n")}</code></pre>
      <p>La caja puede ocupar el ancho disponible en una pantalla pequeña, pero no se estira más de <code>42rem</code> en una pantalla amplia. Es útil para un artículo, un formulario o una zona de lectura.</p>
      <div style={{ ...demo, maxWidth: "42rem", margin: "0 auto", background: "#e0f2fe" }}><strong>Contenido adaptable</strong><br />Puede crecer con su contenedor, pero tiene un límite de anchura.</div>

      <h3>Un mínimo evita que un componente se quede demasiado pequeño</h3>
      <pre><code>{[
        ".tarjeta {",
        "  min-width: 16rem;",
        "}",
      ].join("\n")}</code></pre>
      <p>La tarjeta podrá crecer si tiene espacio, pero intentará no bajar de <code>16rem</code>. Es una decisión útil cuando un componente necesita conservar un tamaño legible.</p>
      <div className="callout tip"><strong>Idea clave:</strong> <code>width</code> y <code>height</code> indican un tamaño; <code>min-*</code> y <code>max-*</code> indican límites. Primero pregunta: «¿quiero fijar el tamaño o permitir que se adapte dentro de unos límites?».</div>
      <p>En el tema <strong>Tamaño · ¿Cuánto debe ocupar?</strong> profundizarás en estas decisiones y en cómo afectan a cada tipo de caja.</p>
    </section>

    <section className="card"><h2>Ahora tú: elige la unidad</h2><ol><li>Un borde fino: <code>border: ___ solid black;</code></li><li>El tamaño general de un <code>h1</code>.</li><li>El espacio general de una tarjeta.</li><li>El padding de un botón que crece con su texto.</li><li>Una tarjeta que ocupa 80% de su contenedor.</li><li>Un hero con la altura de pantalla.</li><li>Dos columnas iguales en Grid.</li></ol><p>Respuestas esperadas: <code>px</code>, <code>rem</code>, <code>rem</code>, <code>em</code>, <code>%</code>, <code>vh</code>, <code>1fr 1fr</code>.</p></section>

    <section className="card"><h2>Mini-test</h2><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>{questions.map((q) => <fieldset key={q.id} style={{ marginBottom: "1rem", padding: "1rem", border: `1px solid ${submitted ? (answers[q.id] === q.correct ? "#86efac" : "#fca5a5") : "#cbd5e1"}`, borderRadius: ".5rem" }}><legend style={{ fontWeight: 700 }}>{q.q}</legend>{q.options.map((option) => <label key={option} style={{ display: "block", marginTop: ".35rem" }}><input type="radio" name={q.id} checked={answers[q.id] === option} onChange={() => setAnswers((current) => ({ ...current, [q.id]: option }))} disabled={submitted} /> {option}</label>)}{submitted && <p>💡 {q.why}</p>}</fieldset>)}{!submitted ? <button className="btn btn-primary" disabled={Object.keys(answers).length !== questions.length}>Comprobar respuestas</button> : <div className="callout"><strong>Resultado: {score}/{questions.length}.</strong> <button type="button" className="btn" onClick={() => { setAnswers({}); setSubmitted(false); }}>Repetir</button></div>}</form></section>
    <section className="card"><h2>Idea clave</h2><p>No elijas una unidad porque sea «la mejor». Elígela según aquello respecto a lo que quieres que la medida se adapte.</p><p>Ya puedes medir valores; el siguiente paso es comprender <strong>qué partes forman la caja</strong> a la que se los aplicas.</p><div className="doc-next"><Link className="btn btn-primary" to="/css-box-model">Continuar con Box Model →</Link></div></section>
  </main>;
}
