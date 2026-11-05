import { useEffect, useMemo, useState } from "react";
import { manualAsset } from "../utils/manualAsset";

const googleCode = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">`;

export default function V14_TextoII() {
  useEffect(() => { document.title = "V14 · Texto y tipografía: profundización"; }, []);
  const questions = useMemo(() => [
    { id: "tracking", q: "¿Qué propiedad separa caracteres individuales?", options: ["word-spacing", "letter-spacing", "line-height", "text-shadow"], correct: "letter-spacing", why: "letter-spacing controla el espacio entre letras; word-spacing controla el espacio entre palabras." },
    { id: "transform", q: "¿Qué hace text-transform: uppercase?", options: ["Cambia el HTML", "Muestra el texto en mayúsculas visualmente", "Aumenta el peso", "Carga una fuente"], correct: "Muestra el texto en mayúsculas visualmente", why: "La transformación es visual: el contenido original no se modifica." },
    { id: "link", q: "Si se quita el subrayado a un enlace, ¿qué debe conservarse?", options: ["Ningún indicador", "Un indicador visual claro de que es enlace", "Solo un texto más pequeño", "Una sombra intensa"], correct: "Un indicador visual claro de que es enlace", why: "Los vínculos deben poder reconocerse sin depender únicamente del color." },
    { id: "measure", q: "¿Qué unidad resulta útil para limitar la longitud de una línea de texto?", options: ["65ch", "65vh", "65deg", "65s"], correct: "65ch", why: "ch se relaciona con el ancho del carácter 0 de la fuente actual; max-width: 65ch es una buena referencia de lectura." },
    { id: "font", q: "¿Qué conviene mantener tras una fuente externa como Inter?", options: ["Un fallback, por ejemplo sans-serif", "Solo el nombre de Inter", "text-transform", "Una URL de imagen"], correct: "Un fallback, por ejemplo sans-serif", why: "La pila ofrece una alternativa si la fuente externa no se descarga o todavía está cargando." },
  ], []);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.filter((q) => answers[q.id] === q.correct).length;

  return <main className="doc" id="contenido">
    <header className="doc-hero">
      <p className="doc-kicker">V14 · Aspectos visuales</p>
      <h1>Texto y tipografía · Profundización</h1>
      <p className="doc-lead">Ya sabemos elegir familia, tamaño, peso e interlineado. Ahora refinamos el ritmo, los detalles visuales y la lectura para que una decisión decorativa no perjudique al contenido.</p>
      <div className="callout tip"><strong>Idea guía:</strong> los ajustes pequeños tienen mucho efecto. Úsalos para apoyar la jerarquía y la legibilidad, no para dificultarlas.</div>
    </header>

    <section className="card">
      <h2>1. Ajustar el ritmo: letras y palabras</h2>
      <p><code>letter-spacing</code> separa letras. <code>word-spacing</code> separa palabras. Son ajustes puntuales: un valor exagerado hace más difícil reconocer las palabras.</p>
      <pre><code>{`.etiqueta {
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.cita { word-spacing: 0.08em; }`}</code></pre>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
        <div style={{ padding: "1rem", border: "1px solid #bae6fd", borderRadius: "0.5rem" }}><strong>Etiqueta</strong><p style={{ textTransform: "uppercase", letterSpacing: "0.12em", color: "#0369a1", marginBottom: 0 }}>programa intensivo</p></div>
        <div style={{ padding: "1rem", border: "1px solid #bbf7d0", borderRadius: "0.5rem" }}><strong>Cita breve</strong><p style={{ wordSpacing: "0.08em", fontStyle: "italic", marginBottom: 0 }}>Aprender paso a paso permite entender mejor.</p></div>
      </div>
      <div className="callout">El interlineado pertenece a los fundamentos: mantenlo normalmente entre <code>1.4</code> y <code>1.6</code> para párrafos. Aquí evitamos repetirlo y nos centramos en los refinamientos.</div>
    </section>

    <section className="card">
      <h2>2. Transformar, decorar y dar relieve</h2>
      <p>Estas propiedades cambian la apariencia, no el significado del HTML. Conviene aplicarlas con moderación.</p>
      <pre><code>{`.eyebrow { text-transform: uppercase; }

a {
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

.titulo-destacado {
  text-shadow: 0 2px 8px rgba(15, 23, 42, 0.18);
}`}</code></pre>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        <div style={{ padding: "1rem", borderRadius: "0.5rem", background: "#f8fafc" }}><p style={{ textTransform: "uppercase", letterSpacing: "0.08em", margin: 0, color: "#475569", fontWeight: 700 }}>novedad del curso</p></div>
        <div style={{ padding: "1rem", borderRadius: "0.5rem", background: "#f8fafc" }}><a href="#test" style={{ textUnderlineOffset: "0.18em" }}>Ver el programa completo</a></div>
        <div style={{ padding: "1rem", borderRadius: "0.5rem", background: "#f8fafc" }}><strong style={{ fontSize: "1.35rem", textShadow: "0 2px 8px rgba(15, 23, 42, 0.18)" }}>Diseño con intención</strong></div>
      </div>
      <div className="callout tip"><strong>Accesibilidad:</strong> no quites el subrayado de un enlace si no añades otro indicador claro, también al pasar el cursor y al navegar con teclado. El color por sí solo no basta.</div>
    </section>

    <section className="card">
      <h2>3. La longitud de línea también diseña la lectura</h2>
      <p>En un párrafo ancho, el ojo recorre demasiado para encontrar la línea siguiente. Una medida aproximada de 45 a 75 caracteres suele funcionar bien; <code>65ch</code> es una referencia práctica.</p>
      <pre><code>{`.lectura {
  max-width: 65ch;
  line-height: 1.6;
}`}</code></pre>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
        <p style={{ margin: 0, padding: "1rem", border: "1px solid #fecaca", borderRadius: "0.5rem", lineHeight: 1.6 }}>Una columna demasiado ancha puede hacer que el ojo viaje demasiado de izquierda a derecha y que sea más difícil retomar la línea siguiente al leer.</p>
        <p style={{ margin: 0, padding: "1rem", border: "1px solid #86efac", borderRadius: "0.5rem", lineHeight: 1.6, maxWidth: "65ch" }}>Una columna limitada favorece un ritmo de lectura más estable. El tamaño, contraste y espacio entre líneas siguen importando.</p>
      </div>
    </section>

    <section className="card">
      <h2>4. Elegir entre fuentes del sistema y Google Fonts</h2>
      <p>Una <strong>system font stack</strong> usa fuentes ya presentes en el dispositivo: carga rápido y encaja con el sistema. Google Fonts aporta una familia concreta, pero requiere una descarga y siempre debe tener fallback.</p>
      <div className="table-wrap"><table className="table"><thead><tr><th>Opción</th><th>Ventaja</th><th>Atención</th></tr></thead><tbody><tr><td>System font stack</td><td>Rendimiento y aspecto nativo.</td><td>El resultado cambia un poco según el sistema.</td></tr><tr><td>Google Fonts</td><td>Más control de la identidad tipográfica.</td><td>Seleccionar solo los pesos necesarios y mantener fallback.</td></tr></tbody></table></div>
      <h3>System font stack</h3>
      <pre><code>{`body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
}`}</code></pre>
      <h3>Google Fonts: una fuente web, no la única forma de usar tipografía</h3>
      <p>Google Fonts ofrece fuentes que el navegador descarga cuando visita la página. Es útil si deseas una familia concreta que no puedes dar por instalada en el dispositivo, pero no sustituye las fuentes locales ni elimina la necesidad de una pila de fallback.</p>
      <div className="callout tip"><strong>Antes de usar Google Fonts:</strong> decide si una fuente local o <code>system-ui</code> resuelve el diseño. Una fuente web es una elección de identidad visual con un coste de descarga.</div>
      <h4>1. Elegir solo la familia y los pesos necesarios</h4>
      <p>Una fuente puede incluir muchos pesos. Cada peso adicional puede implicar más archivos que descargar. Para una página sencilla suelen bastar <code>400</code> para el texto, <code>600</code> para énfasis y <code>700</code> para títulos.</p>
      <div className="table-wrap"><table className="table"><thead><tr><th>Peso</th><th>Uso habitual</th><th>Ejemplo</th></tr></thead><tbody><tr><td><code>400</code></td><td>Texto normal</td><td>Párrafos</td></tr><tr><td><code>600</code></td><td>Énfasis moderado</td><td>Etiquetas y enlaces destacados</td></tr><tr><td><code>700</code></td><td>Jerarquía alta</td><td>Títulos</td></tr></tbody></table></div>
      <h4>2. Cargarla desde el <code>&lt;head&gt;</code></h4>
      <p>Google Fonts genera este código al seleccionar una familia y sus pesos. Colócalo en el <code>&lt;head&gt;</code>, antes o junto a tu hoja de estilos, para que el navegador pueda comenzar la descarga pronto.</p>
      <pre><code>{googleCode}</code></pre>
      <p>Los dos enlaces <code>preconnect</code> preparan la conexión con los servidores de fuentes. El último enlace carga la hoja que contiene Inter en los pesos <code>400</code>, <code>600</code> y <code>700</code>.</p>
      <h4>3. Usar la familia en tu CSS, con alternativas</h4>
      <pre><code>{`body {
  font-family: "Inter", Arial, sans-serif;
}

h1 { font-weight: 700; }
.destacado { font-weight: 600; }
p { font-weight: 400; }`}</code></pre>
      <p>Las comillas son necesarias porque <code>Inter</code> es el nombre de una fuente; se vuelven imprescindibles si su nombre contiene espacios. La lista se lee de izquierda a derecha: primero Inter, después Arial y, por último, cualquier sans-serif disponible.</p>
      <div className="callout"><strong>El fallback es obligatorio por diseño:</strong> si Inter se descarga lentamente, falla la red o no está disponible, el navegador seguirá con <code>Arial</code> o una <code>sans-serif</code>. <code>font-family</code> no instala una fuente por sí sola.</div>
      <h4>4. Comprobar que funciona</h4>
      <ol><li>Abre la página y compara el texto con la familia de fallback.</li><li>Inspecciona el elemento con DevTools y revisa la propiedad <code>font-family</code>.</li><li>Comprueba que no has pedido pesos que no usas en el CSS.</li></ol>
      <details className="dd"><summary>Micropráctica: añade una fuente externa con seguridad</summary><div className="dd-body"><p>Selecciona Inter en Google Fonts con los pesos 400 y 700. Inserta el código de carga en <code>&lt;head&gt;</code> y aplica esta pila al cuerpo:</p><pre><code>{`body {
  font-family: "Inter", system-ui, sans-serif;
}

h1 { font-weight: 700; }
p { font-weight: 400; }`}</code></pre><p>Después desconecta temporalmente la red o elimina el enlace de Google Fonts: la página debe seguir siendo legible con <code>system-ui</code> o <code>sans-serif</code>.</p></div></details>
    </section>

    <section className="card">
      <h2>Ejemplo completo: bloque de lectura de una academia</h2>
      <pre><code>{`<article class="programa">
  <p class="eyebrow">Programa intensivo</p>
  <h2>Aprende con una base sólida</h2>
  <p>Clases prácticas para construir proyectos web paso a paso.</p>
  <a href="#inscripcion">Consultar fechas</a>
</article>

.programa {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  max-width: 65ch;
  line-height: 1.6;
}
.eyebrow { text-transform: uppercase; letter-spacing: 0.12em; }
.programa a { text-underline-offset: 0.18em; }`}</code></pre>
      <div style={{ maxWidth: "65ch", padding: "1.25rem", border: "1px solid #cbd5e1", borderRadius: "0.75rem", lineHeight: 1.6, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}><p style={{ textTransform: "uppercase", letterSpacing: "0.12em", color: "#475569", fontWeight: 700, marginTop: 0 }}>Programa intensivo</p><h3 style={{ lineHeight: 1.15 }}>Aprende con una base sólida</h3><p>Clases prácticas para construir proyectos web paso a paso.</p><a href="#test" style={{ textUnderlineOffset: "0.18em" }}>Consultar fechas</a></div>
    </section>

    <section className="card"><h2>Microprácticas: pule una tarjeta informativa</h2><p>Haz una modificación, observa el resultado y después prueba la siguiente. Así se aprecia qué propiedad causa cada cambio.</p><ol><li><strong>Etiqueta:</strong> crea una etiqueta en mayúsculas con <code>letter-spacing: 0.1em</code>.</li><li><strong>Lectura:</strong> limita el texto de la tarjeta con <code>max-width: 65ch</code>.</li><li><strong>Enlace:</strong> subráyalo y sepáralo con <code>text-underline-offset</code>.</li><li><strong>Fuente:</strong> elige una system font stack o carga una Google Font con solo los pesos 400 y 700.</li></ol><details className="dd"><summary>Ver un ejemplo de solución</summary><div className="dd-body"><pre><code>{`.tarjeta {
  font-family: system-ui, sans-serif;
  max-width: 65ch;
  line-height: 1.6;
}

.tarjeta__tipo {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
}

.tarjeta a {
  text-decoration: underline;
  text-underline-offset: 0.18em;
}`}</code></pre><p><strong>Variación:</strong> cambia solo <code>letter-spacing</code> a <code>0.2em</code>. Compáralo con <code>0.1em</code> y decide cuál sigue siendo cómodo de leer.</p></div></details></section>

    <section className="card">
      <h2>Acabamos de ver · Texto y tipografía</h2>
      <p>Antes de escribir CSS, no pienses primero en propiedades. Piensa qué quieres conseguir con el texto. Después elige la propiedad adecuada.</p>
      <figure className="media">
        <img
          src={manualAsset("guia-estilo-texto.png")}
          alt="Mapa visual para dar estilo al texto: identidad con font-family, jerarquía con font-size, font-weight y font-style, y legibilidad con line-height, text-align, max-width, letter-spacing y word-spacing."
          width="1536"
          height="1024"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Mapa de decisiones: primero decide si buscas identidad, jerarquía o legibilidad.</figcaption>
      </figure>
      <div className="table-wrap">
        <table className="table">
          <thead><tr><th>Si quiero decidir…</th><th>Me pregunto…</th><th>Propiedad CSS</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr><td>Qué letra utilizar</td><td>¿Qué tipografía quiero y cuál será el respaldo?</td><td><code>font-family</code></td><td><code>"Lato", Arial, sans-serif</code></td></tr>
            <tr><td>El tamaño</td><td>¿Es texto normal, secundario o un título?</td><td><code>font-size</code></td><td><code>1rem</code>, <code>2rem</code></td></tr>
            <tr><td>El grosor</td><td>¿Necesito texto normal, destacado o título?</td><td><code>font-weight</code></td><td><code>400</code>, <code>600</code>, <code>700</code></td></tr>
            <tr><td>La inclinación</td><td>¿Necesito cursiva para un énfasis puntual?</td><td><code>font-style</code></td><td><code>italic</code></td></tr>
            <tr><td>El espacio entre líneas</td><td>¿El párrafo respira y se lee cómodamente?</td><td><code>line-height</code></td><td><code>1.5</code>, <code>1.6</code></td></tr>
            <tr><td>La alineación</td><td>¿Dónde debe colocarse el texto dentro de su caja?</td><td><code>text-align</code></td><td><code>left</code>, <code>center</code></td></tr>
            <tr><td>El espacio entre letras</td><td>¿Necesito separar ligeramente los caracteres?</td><td><code>letter-spacing</code></td><td><code>0.08em</code></td></tr>
            <tr><td>El espacio entre palabras</td><td>¿Necesito modificar puntualmente su separación?</td><td><code>word-spacing</code></td><td><code>0.08em</code></td></tr>
            <tr><td>Mayúsculas o minúsculas visuales</td><td>¿Quiero transformar su apariencia?</td><td><code>text-transform</code></td><td><code>uppercase</code></td></tr>
            <tr><td>La decoración</td><td>¿Es un enlace o necesita subrayado?</td><td><code>text-decoration</code></td><td><code>underline</code></td></tr>
            <tr><td>La anchura de lectura</td><td>¿La línea es demasiado larga?</td><td><code>max-width</code></td><td><code>65ch</code></td></tr>
          </tbody>
        </table>
      </div>
    </section>


    <section className="card" id="test"><h2>Mini-test</h2><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>{questions.map((q) => <fieldset key={q.id} style={{ margin: "0 0 1rem", padding: "1rem", border: `1px solid ${submitted ? (answers[q.id] === q.correct ? "#86efac" : "#fca5a5") : "#cbd5e1"}`, borderRadius: "0.5rem" }}><legend style={{ fontWeight: 700 }}>{q.q}</legend>{q.options.map((option) => <label key={option} style={{ display: "block", marginTop: "0.4rem" }}><input type="radio" name={q.id} checked={answers[q.id] === option} onChange={() => setAnswers((current) => ({ ...current, [q.id]: option }))} disabled={submitted} /> {option}</label>)}{submitted && <p style={{ marginBottom: 0 }}>💡 {q.why}</p>}</fieldset>)}{!submitted ? <button type="submit" className="btn btn-primary" disabled={Object.keys(answers).length !== questions.length}>Comprobar respuestas</button> : <div className="callout"><strong>Resultado: {score}/{questions.length}.</strong> <button type="button" className="btn" onClick={() => { setAnswers({}); setSubmitted(false); }}>Repetir</button></div>}</form></section>
  </main>;
}
