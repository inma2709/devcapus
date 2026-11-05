import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const cssBase = `body {
  font-family: Arial, Helvetica, sans-serif;
  color: #334155;
}

.presentacion h1 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.15;
}

.presentacion p {
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
}`;

export default function V13_Texto_I() {
  useEffect(() => { document.title = "V13 · Texto y tipografía: fundamentos"; }, []);
  const questions = useMemo(() => [
    { id: "family", q: "¿Para qué sirve la última familia genérica en una pila de fuentes?", options: ["Para cargar Google Fonts", "Como alternativa si no se encuentra la fuente anterior", "Para poner negrita", "Para cambiar el tamaño"], correct: "Como alternativa si no se encuentra la fuente anterior", why: "sans-serif es el fallback genérico: el navegador elegirá una fuente sans-serif disponible." },
    { id: "size", q: "¿Qué propiedad cambia el tamaño, no el grosor, del texto?", options: ["font-size", "font-weight", "font-style", "line-height"], correct: "font-size", why: "font-size controla el tamaño. font-weight controla el peso o grosor." },
    { id: "weight", q: "¿Qué indica normalmente font-weight: 700?", options: ["Cursiva", "Un texto más grueso", "Un tamaño de 700 px", "Interlineado amplio"], correct: "Un texto más grueso", why: "700 suele corresponder a bold, siempre que esa variante exista en la fuente elegida." },
    { id: "line", q: "¿Qué valor es una buena base para el interlineado de un párrafo?", options: ["line-height: 1.5", "line-height: 0", "font-style: 1.5", "text-align: 1.5"], correct: "line-height: 1.5", why: "Un valor sin unidad, entre 1.4 y 1.6, suele facilitar la lectura y se adapta al tamaño del texto." },
    { id: "align", q: "¿Qué propiedad centra un título dentro de su caja?", options: ["text-align: center", "align: center", "font-center: true", "justify-content: center"], correct: "text-align: center", why: "text-align controla la alineación horizontal del contenido de texto." },
  ], []);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.filter((q) => answers[q.id] === q.correct).length;

  return <main className="doc" id="contenido">
    <header className="doc-hero">
      <p className="doc-kicker">V13 · Aspectos visuales</p>
      <h1>Texto y tipografía · Fundamentos</h1>
      <p className="doc-lead">Una web ya puede tener contenido correcto y, aun así, resultar difícil de leer. Aquí aprendemos a tomar las primeras decisiones tipográficas con una pregunta útil: ¿qué aspecto del texto quiero controlar?</p>
      <div className="callout tip"><strong>Objetivo:</strong> elegir una fuente con alternativa, cambiar tamaño, peso, estilo, interlineado y alineación sin confundir unas decisiones con otras.</div>
    </header>

    <section className="card">
      <h2>Vídeo de apoyo: texto y tipografía</h2>
      <p>
        Míralo con una pregunta concreta: ¿qué decisión tipográfica mejora la lectura
        y cuál solo cambia la apariencia del texto?
      </p>
      <div className="media" style={{ maxWidth: 900 }}>
        <iframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/liGpFP7KOE4"
          title="Vídeo de apoyo sobre texto y tipografía en CSS"
          frameBorder="0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>

    <section className="card">
      <h2>El problema: el texto necesita una jerarquía legible</h2>
      <p>Partimos de un título y un párrafo. El HTML expresa qué es cada pieza; CSS decide cómo se leerá.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
        <div style={{ padding: "1.25rem", border: "1px solid #cbd5e1", borderRadius: "0.75rem" }}><strong style={{ color: "#64748b" }}>SIN DECISIONES</strong><h3>Aprende desarrollo web</h3><p>HTML estructura el contenido y CSS controla su presentación.</p></div>
        <div style={{ padding: "1.25rem", border: "1px solid #93c5fd", borderRadius: "0.75rem", background: "#eff6ff", color: "#1e3a8a", fontFamily: "Arial, Helvetica, sans-serif" }}><strong style={{ color: "#1d4ed8" }}>CON JERARQUÍA</strong><h3 style={{ fontSize: "2rem", lineHeight: 1.15, margin: "0.55rem 0" }}>Aprende desarrollo web</h3><p style={{ lineHeight: 1.6, marginBottom: 0 }}>HTML estructura el contenido y CSS controla su presentación.</p></div>
      </div>
      <pre><code>{cssBase}</code></pre>
    </section>

    <section className="card">
      <h2>1. Elegir una familia: la fuente y su plan B</h2>
      <p>Si no escribes <code>font-family</code>, el navegador usa sus estilos predeterminados —que pueden depender del navegador, del sistema y de la configuración de la persona usuaria—. No has elegido una fuente concreta.</p>
      <p>Con <code>font-family</code> sí haces una elección. La propiedad pide una fuente, pero no garantiza que esté instalada: por eso escribimos una <strong>pila</strong>, de la opción preferida a una familia genérica segura.</p>
      <pre><code>{`body {
  font-family: Arial, Helvetica, sans-serif;
}`}</code></pre>
      <div className="table-wrap"><table className="table"><thead><tr><th>Parte</th><th>Qué hace</th><th>Ejemplos</th></tr></thead><tbody>
        <tr><td>Fuente concreta</td><td>Se usa si está disponible.</td><td><code>Arial</code>, <code>Georgia</code>, <code>"Segoe UI"</code></td></tr>
        <tr><td>Fallback concreto</td><td>Segunda opción cuando falta la primera.</td><td><code>Helvetica</code></td></tr>
        <tr><td>Familia genérica</td><td>Último recurso del navegador.</td><td><code>sans-serif</code>, <code>serif</code>, <code>monospace</code></td></tr>
      </tbody></table></div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}>
        <p style={{ margin: 0, padding: "1rem", border: "1px solid #cbd5e1", borderRadius: "0.5rem", fontFamily: "Arial, Helvetica, sans-serif" }}>Sans-serif: limpia y habitual para interfaz.</p>
        <p style={{ margin: 0, padding: "1rem", border: "1px solid #cbd5e1", borderRadius: "0.5rem", fontFamily: "Georgia, 'Times New Roman', serif" }}>Serif: con remates, útil en un tono editorial.</p>
        <p style={{ margin: 0, padding: "1rem", border: "1px solid #cbd5e1", borderRadius: "0.5rem", fontFamily: "Consolas, monospace" }}>Monospace: cada carácter ocupa el mismo ancho.</p>
      </div>
      <div className="callout"><strong>Fuentes disponibles sin descargar nada:</strong> Arial, Georgia, Verdana o las fuentes del sistema pueden funcionar en muchos equipos, pero no en todos. La pila y la familia genérica hacen que el resultado siga siendo razonable.</div>
      <h3>Una alternativa moderna: <code>system-ui</code></h3>
      <pre><code>{`body {
  font-family: system-ui, sans-serif;
}`}</code></pre>
      <p><code>system-ui</code> pide expresamente una fuente apropiada para la interfaz del sistema operativo. No es necesariamente la misma fuente que aparece cuando no definimos <code>font-family</code>: en ese caso decide el estilo predeterminado del navegador o del usuario.</p>
      <div className="callout tip"><strong>Idea clave:</strong> <code>font-family</code> no instala ni descarga fuentes. Si <code>"Mi Fuente"</code> no existe en el dispositivo ni se ha cargado como fuente web, el navegador continúa con la siguiente alternativa: <code>"Mi Fuente", Arial, sans-serif</code>.</div>
    </section>

    <section className="card">
      <h2>Comprende mejor: fuente concreta o familia genérica</h2>
      <p>Observa esta regla:</p>
      <pre><code>{["p {", "  font-family: \"Lato\", sans-serif;", "}"].join("\n")}</code></pre>
      <p><strong>¿Son <code>"Lato"</code> y <code>sans-serif</code> lo mismo?</strong> No. Cumplen papeles distintos dentro de la lista.</p>

      <h3>Una fuente concreta</h3>
      <p><code>"Lato"</code> es el nombre de una tipografía específica. También lo son <code>Arial</code>, <code>Verdana</code>, <code>Roboto</code>, <code>Georgia</code> y <code>"Times New Roman"</code>.</p>
      <p>Para que el navegador pueda usar una fuente concreta, debe estar instalada en el dispositivo, cargarse desde la web o proporcionarse con archivos de fuente y <code>@font-face</code>.</p>
      <pre><code>{["p {", "  font-family: \"Lato\";", "}"].join("\n")}</code></pre>
      <div className="callout warn"><strong>Escribir el nombre de una fuente no hace que el navegador la descargue automáticamente.</strong> Esta regla no garantiza que la persona usuaria vea Lato.</div>

      <h3>Una familia genérica</h3>
      <p><code>sans-serif</code> no es el nombre de una fuente concreta: es una <strong>familia genérica de CSS</strong>. Le indica al navegador: «si tienes que elegir una fuente, utiliza una disponible de este tipo».</p>
      <pre><code>{["p {", "  font-family: sans-serif;", "}"].join("\n")}</code></pre>
      <p>Las familias genéricas son palabras clave estándar que los navegadores reconocen. No instalamos una fuente llamada <code>sans-serif</code>: el navegador elige una fuente apropiada disponible en el sistema.</p>
      <div className="callout tip"><strong>La familia genérica está garantizada como concepto CSS; la fuente concreta que utilizará el navegador puede variar</strong> según navegador, sistema operativo, dispositivo y configuración de la persona usuaria.</div>

      <h3>Las familias genéricas principales</h3>
      <div className="table-wrap"><table className="table"><thead><tr><th>Familia genérica</th><th>Característica</th><th>Ejemplos de fuentes concretas</th></tr></thead><tbody>
        <tr><td><code>serif</code></td><td>Tiene remates; aspecto clásico o editorial.</td><td>Georgia, Times New Roman, Garamond</td></tr>
        <tr><td><code>sans-serif</code></td><td>Sin remates; aspecto limpio y habitual en interfaces.</td><td>Arial, Helvetica, Verdana, Roboto, Lato</td></tr>
        <tr><td><code>monospace</code></td><td>Los caracteres ocupan aproximadamente el mismo ancho.</td><td>Consolas, Courier New, Monaco</td></tr>
        <tr><td><code>cursive</code></td><td>Apariencia manuscrita o caligráfica.</td><td>Depende del sistema</td></tr>
        <tr><td><code>fantasy</code></td><td>Aspecto decorativo o expresivo.</td><td>Depende del sistema</td></tr>
        <tr><td><code>system-ui</code></td><td>Fuente habitual de la interfaz del sistema operativo.</td><td>Depende del sistema operativo</td></tr>
      </tbody></table></div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}>
        <div className="callout" style={{ margin: 0, fontFamily: "Georgia, 'Times New Roman', serif" }}><strong>Serif</strong><br />Texto con remates.</div>
        <div className="callout" style={{ margin: 0, fontFamily: "Arial, sans-serif" }}><strong>Sans-serif</strong><br />Texto sin remates.</div>
        <div className="callout" style={{ margin: 0, fontFamily: "Consolas, 'Courier New', monospace" }}><strong>Monospace</strong><br />Código: 123 == abc</div>
      </div>
      <pre><code>{[
        "p { font-family: Georgia, serif; }",
        "body { font-family: \"Lato\", Arial, sans-serif; }",
        "code { font-family: Consolas, \"Courier New\", monospace; }",
        ".firma { font-family: cursive; }",
        ".titulo-decorativo { font-family: fantasy; }",
        "body { font-family: system-ui, sans-serif; }",
      ].join("\n")}</code></pre>
      <p><code>cursive</code> y <code>fantasy</code> sirven para un ejemplo conceptual o un elemento puntual, pero no suelen ser adecuadas para texto general. <code>system-ui</code> es práctica en interfaces: no requiere descargar una fuente externa, suele integrarse con el sistema y tiene buen rendimiento.</p>

      <h3>La lista de respaldo se lee de izquierda a derecha</h3>
      <pre><code>{["body {", "  font-family: \"Lato\", Arial, sans-serif;", "}"].join("\n")}</code></pre>
      <pre><code>{[
        "1. ¿Está disponible Lato?",
        "        ↓",
        "      Sí → usa Lato",
        "        ↓ No",
        "2. ¿Está disponible Arial?",
        "        ↓",
        "      Sí → usa Arial",
        "        ↓ No",
        "3. Usa una fuente sans-serif disponible",
      ].join("\n")}</code></pre>
      <p><code>font-family</code> funciona como una lista de preferencias. El navegador intenta la primera fuente y, si no puede, continúa con la siguiente. Por eso es recomendable terminar con una familia genérica y no escribir solo <code>"Lato"</code>.</p>

      <h3>Relación con Google Fonts</h3>
      <p>Si escribimos <code>font-family: "Lato", sans-serif;</code> pero Lato no está instalada ni se ha cargado desde la web, el navegador llegará a <code>sans-serif</code>. Si antes cargamos Lato desde Google Fonts o con <code>@font-face</code>, sí podrá utilizarla aunque no exista en el dispositivo.</p>
      <div className="callout warn"><strong>Declarar una fuente ≠ cargar una fuente.</strong></div>

      <h3>Un ejemplo comparativo</h3>
      <pre><code>{[
        ".titulo { font-family: \"Lato\", Arial, sans-serif; }",
        ".texto { font-family: Georgia, \"Times New Roman\", serif; }",
        ".codigo { font-family: Consolas, \"Courier New\", monospace; }",
      ].join("\n\n")}</code></pre>
      <div className="callout tip"><strong>Idea final:</strong> una fuente concreta es una tipografía específica, como Lato, Arial o Georgia. Una familia genérica, como <code>sans-serif</code>, <code>serif</code> o <code>monospace</code>, describe un tipo de fuente y deja que el navegador elija una disponible.<br /><br /><code>"Lato"</code> → fuente concreta preferida<br /><code>Arial</code> → fuente concreta de respaldo<br /><code>sans-serif</code> → familia genérica de último recurso</div>
    </section>

    <section className="card">
      <h2>2. Tamaño, peso y estilo no son lo mismo</h2>
      <p><code>font-size</code> cambia cuánto ocupa la letra. <code>font-weight</code> cambia su grosor. <code>font-style</code> solicita una variante como la cursiva.</p>
      <pre><code>{`h1 { font-size: 2rem; font-weight: 700; }
.nota { font-style: italic; }`}</code></pre>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "0.75rem" }}>
        <div className="callout" style={{ margin: 0 }}><span style={{ fontSize: "1.55rem" }}>Mismo texto, mayor tamaño</span><br /><code>font-size: 1.55rem</code></div>
        <div className="callout" style={{ margin: 0 }}><span style={{ fontWeight: 700 }}>Mismo texto, mayor peso</span><br /><code>font-weight: 700</code></div>
        <div className="callout" style={{ margin: 0 }}><span style={{ fontStyle: "italic" }}>Mismo texto, cursiva</span><br /><code>font-style: italic</code></div>
      </div>
      <p>Los valores de peso van normalmente de <code>100</code> a <code>900</code>. Pero solo se verá un peso real si la familia lo ofrece; el navegador puede aproximarlo si no existe.</p>
    </section>

    <section className="card">
      <h2>Mapa de decisiones: propiedades y valores</h2>
      <p>Esta tabla no es una lista para memorizar. Sirve para relacionar una intención visual con la propiedad que la controla.</p>
      <div className="table-wrap"><table className="table"><thead><tr><th>Quiero cambiar…</th><th>Propiedad</th><th>Valores iniciales útiles</th><th>Uso prudente</th></tr></thead><tbody>
        <tr><td>La letra</td><td><code>font-family</code></td><td><code>Arial, sans-serif</code>, <code>system-ui, sans-serif</code></td><td>Termina la pila con una familia genérica.</td></tr>
        <tr><td>El tamaño</td><td><code>font-size</code></td><td><code>1rem</code>, <code>2rem</code></td><td>Usa una diferencia clara entre título y texto.</td></tr>
        <tr><td>El grosor</td><td><code>font-weight</code></td><td><code>400</code>, <code>600</code>, <code>700</code></td><td>Comprueba que la fuente incluya ese peso.</td></tr>
        <tr><td>La inclinación</td><td><code>font-style</code></td><td><code>normal</code>, <code>italic</code></td><td>Reserva la cursiva para énfasis breve.</td></tr>
        <tr><td>El aire entre líneas</td><td><code>line-height</code></td><td><code>1.4</code>, <code>1.6</code></td><td>Prefiere valores sin unidad en párrafos.</td></tr>
        <tr><td>La alineación</td><td><code>text-align</code></td><td><code>left</code>, <code>center</code>, <code>right</code></td><td>El cuerpo largo suele leerse mejor a la izquierda.</td></tr>
        <tr><td>La separación de caracteres</td><td><code>letter-spacing</code></td><td><code>0</code>, <code>0.08em</code></td><td>Úsala en etiquetas o títulos cortos.</td></tr>
      </tbody></table></div>
    </section>

    <section className="card">
      <h2>3. Dar aire y dirección a la lectura</h2>
      <p><code>line-height</code> separa líneas; <code>text-align</code> coloca el texto dentro de su caja. Para texto largo, empezar alineado a la izquierda suele ser la opción más cómoda.</p>
      <pre><code>{`p { line-height: 1.6; }
.centrado { text-align: center; }`}</code></pre>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
        <p style={{ padding: "1rem", margin: 0, border: "1px solid #fecaca", borderRadius: "0.5rem", lineHeight: 1.05 }}>Interlineado muy cerrado: cuesta localizar la siguiente línea cuando el texto continúa varias frases.</p>
        <p style={{ padding: "1rem", margin: 0, border: "1px solid #86efac", borderRadius: "0.5rem", lineHeight: 1.6 }}>Interlineado equilibrado: deja respirar el párrafo sin separar demasiado sus ideas.</p>
      </div>
      <div className="callout tip"><strong>Variación:</strong> los títulos suelen admitir un <code>line-height</code> más compacto, por ejemplo <code>1.1</code>; los párrafos suelen necesitar entre <code>1.4</code> y <code>1.6</code>.</div>
    </section>

    <section className="card">
      <h2>Micropráctica: presenta una academia</h2>
      <p>Con una sección que contenga un <code>h1</code> y un <code>p</code>, crea una presentación legible:</p>
      <ol><li>Aplica <code>font-family: Arial, Helvetica, sans-serif</code> al contenedor.</li><li>Da al título <code>font-size: 2rem</code>, <code>font-weight: 700</code> y <code>line-height: 1.15</code>.</li><li>Da al párrafo <code>line-height: 1.6</code> y mantenlo alineado a la izquierda.</li><li>Añade una clase <code>.nota</code> con <code>font-style: italic</code>.</li></ol>
      <details className="dd"><summary>Ver una posible solución</summary><div className="dd-body"><pre><code>{cssBase}</code></pre></div></details>
      <h3>Variaciones breves para experimentar</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
        <div className="callout" style={{ margin: 0 }}><strong>Etiqueta</strong><pre><code>{`.etiqueta {
  text-transform: uppercase;
  letter-spacing: 0.08em;
}`}</code></pre></div>
        <div className="callout" style={{ margin: 0 }}><strong>Nota secundaria</strong><pre><code>{`.nota {
  font-style: italic;
  color: #475569;
}`}</code></pre></div>
      </div>
    </section>

    <section className="card" id="test"><h2>Mini-test</h2><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>{questions.map((q) => <fieldset key={q.id} style={{ margin: "0 0 1rem", padding: "1rem", border: `1px solid ${submitted ? (answers[q.id] === q.correct ? "#86efac" : "#fca5a5") : "#cbd5e1"}`, borderRadius: "0.5rem" }}><legend style={{ fontWeight: 700 }}>{q.q}</legend>{q.options.map((option) => <label key={option} style={{ display: "block", marginTop: "0.4rem" }}><input type="radio" name={q.id} checked={answers[q.id] === option} onChange={() => setAnswers((current) => ({ ...current, [q.id]: option }))} disabled={submitted} /> {option}</label>)}{submitted && <p style={{ marginBottom: 0 }}>💡 {q.why}</p>}</fieldset>)}{!submitted ? <button type="submit" className="btn btn-primary" disabled={Object.keys(answers).length !== questions.length}>Comprobar respuestas</button> : <div className="callout"><strong>Resultado: {score}/{questions.length}.</strong> <button type="button" className="btn" onClick={() => { setAnswers({}); setSubmitted(false); }}>Repetir</button></div>}</form></section>
    <section className="card"><h2>Siguiente paso</h2><p>Ya controlas la base tipográfica. Ahora aprenderás las unidades con las que medirás texto, tamaños y espacios.</p><div className="doc-next"><Link className="btn btn-primary" to="/css-unidades">Continuar con Unidades de medida →</Link></div><p>La profundización tipográfica queda disponible como ampliación cuando necesites afinar la lectura y las fuentes.</p></section>
  </main>;
}
