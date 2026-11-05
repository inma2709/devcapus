import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

export default function V02_InternoExterno_I() {
  const questions = useMemo(() => [
    { id: "q1", q: "¿Cuáles son las tres formas de aplicar CSS en HTML?", options: ["Externo, interno e inline", "Archivo, función y clase", "Bootstrap, Tailwind y CSS puro", "inline-block, block e inline"], correct: "Externo, interno e inline", why: "CSS puede incluirse mediante un archivo .css externo (link), una etiqueta <style> interna o el atributo style directamente en el elemento HTML." },
    { id: "q2", q: "¿Cuál es la ventaja principal del CSS externo?", options: ["Se carga más rápido que el inline", "Se puede reutilizar en varios HTML con un solo archivo", "Tiene mayor especificidad que el interno", "El navegador lo ignora si hay errores"], correct: "Se puede reutilizar en varios HTML con un solo archivo", why: "Un archivo .css externo se enlaza desde múltiples páginas. Un solo cambio en el archivo CSS se refleja en todo el sitio." },
    { id: "q3", q: "¿Cómo se enlaza correctamente una hoja de estilo externa?", options: ["<style src='estilos.css'>", "<link rel='stylesheet' href='estilos.css'>", "<css file='estilos.css'>", "<import url='estilos.css'>"], correct: "<link rel='stylesheet' href='estilos.css'>", why: "El elemento <link> con rel='stylesheet' y href apuntando al archivo es la forma estándar de enlazar CSS externo en el <head>." },
    { id: "q4", q: "Si styles.css está junto a index.html, ¿qué valor debe tener href?", options: ["href='/styles.css'", "href='styles.css'", "href='head/styles.css'", "href='<style>.css'"], correct: "href='styles.css'", why: "Una ruta relativa sin barra inicial busca el archivo desde la carpeta del HTML. Una barra inicial apunta a la raíz del sitio." },
    { id: "q5", q: "¿Cuándo tiene sentido usar CSS interno (<style> en el <head>)?", options: ["En proyectos grandes con muchos archivos", "Solo en frameworks como React o Vue", "En una prueba breve, una página aislada o un email HTML", "Siempre, porque es más rápido"], correct: "En una prueba breve, una página aislada o un email HTML", why: "El CSS interno puede ser útil en casos puntuales; para un sitio mantenible se prefiere un archivo externo." },
  ], []);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = useMemo(() => questions.filter((q) => answers[q.id] === q.correct).length, [answers, questions]);
  const choose = (id, opt) => setAnswers((p) => ({ ...p, [id]: opt }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <div className="doc">
      {/* HERO */}
      <section className="card hero">
        <p className="doc-kicker">Esencial · Fundamentos</p>
        <h1>Conectar CSS: de HTML sin estilos a tu primera regla</h1>
        <p className="doc-lead">
          Antes de hablar de colores, layouts o tipografías, hay una pregunta
          fundamental:{" "}
          <strong>¿cómo llega el CSS a afectar realmente a un documento HTML?</strong>
        </p>
      </section>

      <section className="card">
        <h2>1. El problema: tenemos HTML, pero aún no tiene estilos</h2>
        <p>Este HTML tiene contenido, pero el navegador todavía no sabe qué archivo CSS debe leer.</p>
        <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi web</title>
</head>
<body>
  <h1>Mi primera página</h1>
</body>
</html>`}</code></pre>
        <p>Vamos a crear un archivo llamado <code>styles.css</code> y a conectarlo. Esa es la forma normal de separar estructura (HTML) y presentación (CSS).</p>
      </section>

      {/* INTRO CONCEPTUAL */}
      <section className="card">
        <h2>Por qué este tema es clave</h2>
        <p>
          Uno de los errores más comunes al empezar con CSS es pensar que el
          problema está en las propiedades, cuando en realidad el navegador{" "}
          <strong>ni siquiera está leyendo tu CSS</strong>.
        </p>

        <p>
          Si no entiendes cómo se enlaza y se aplica una hoja de estilos, todo lo
          demás falla: reglas que “no funcionan”, estilos que no se aplican o
          comportamientos que parecen aleatorios.
        </p>

        <div className="callout tip">
          Antes de aprender a escribir buen CSS, asegúrate de que el navegador
          sabe dónde está tu CSS y cuándo debe aplicarlo.
        </div>
      </section>

      {/* CONCEPTO GENERAL (DETAILS) */}
      <details className="dd" open>
        <summary>Cómo aplica CSS el navegador</summary>
        <div className="dd-body">
          <p>
            El navegador no “adivina” tus estilos. Solo aplica CSS cuando se lo
            indicas explícitamente. Para ello, HTML y CSS deben estar{" "}
            <strong>correctamente conectados</strong>.
          </p>

          <p>
            Existen <strong>tres formas principales</strong> de aplicar CSS a un
            documento HTML. Todas funcionan, pero no todas son igual de adecuadas
            para un proyecto real.
          </p>

          <div className="callout">
            Piensa en esto como la “puerta de entrada”: si el CSS no está bien
            enlazado, nada de lo demás importa.
          </div>
        </div>
      </details>

      {/* MÉTODOS (DETAILS) */}
      <details className="dd" open>
        <summary>1) Hoja de estilos externa (la forma recomendada)</summary>
        <div className="dd-body">
          <p>
            Es la forma más común, más limpia y más profesional de trabajar con
            CSS. Los estilos se escriben en un archivo <code>.css</code> separado y
            se enlazan desde el HTML mediante la etiqueta <code>&lt;link&gt;</code>{" "}
            dentro del <code>&lt;head&gt;</code>.
          </p>

          <pre>
            <code>{`<!-- Enlace en el HTML -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>`}</code>
          </pre>

          <h3>Qué significa cada parte</h3>
          <ul>
            <li><code>link</code> crea una conexión con otro archivo.</li>
            <li><code>rel="stylesheet"</code> indica que ese archivo es una hoja de estilos.</li>
            <li><code>href="styles.css"</code> indica dónde está el archivo.</li>
            <li>El enlace se coloca dentro de <code>&lt;head&gt;</code>, antes de que el navegador muestre el contenido del <code>&lt;body&gt;</code>.</li>
          </ul>

          <pre>
            <code>{`/* Código en styles.css */
body {
  background-color: lightblue;
}`}</code>
          </pre>

          <h3>Ventajas</h3>
          <ul>
            <li>✔️ Separa estructura (HTML) y presentación (CSS)</li>
            <li>✔️ Facilita el mantenimiento y la lectura del código</li>
            <li>✔️ Permite reutilizar estilos en múltiples páginas</li>
            <li>✔️ Mejora el rendimiento gracias a la caché del navegador</li>
          </ul>

          <div className="callout tip">
            En proyectos reales, la hoja de estilos externa no es “una opción”:
            es el estándar.
          </div>
        </div>
      </details>

      <details className="dd" open>
        <summary>La estructura de archivos y un ejemplo completo</summary>
        <div className="dd-body">
          <pre><code>{`mi-proyecto/
├── index.html
└── styles.css`}</code></pre>
          <p>Como ambos archivos están en la misma carpeta, la ruta relativa es simplemente <code>styles.css</code>.</p>
          <pre><code>{`<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi web</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Mi primera página</h1>
</body>
</html>

/* styles.css */
h1 {
  color: blue;
}`}</code></pre>
          <p>Si el CSS estuviera dentro de una carpeta llamada <code>css</code>, escribirías <code>href="css/styles.css"</code>. No uses una barra inicial salvo que quieras buscar desde la raíz del sitio.</p>
        </div>
      </details>

      <details className="dd">
        <summary>2) Estilos internos (dentro del HTML)</summary>
        <div className="dd-body">
          <p>
            Los estilos internos se declaran directamente en el documento HTML,
            dentro de la etiqueta <code>&lt;style&gt;</code> ubicada en el{" "}
            <code>&lt;head&gt;</code>.
          </p>

          <pre>
            <code>{`<head>
  <style>
    h1 {
      color: maroon;
    }
  </style>
</head>`}</code>
          </pre>

          <p>
            Es útil en situaciones concretas (por ejemplo, una sola página o
            pruebas), pero escala mal cuando el proyecto crece.
          </p>

          <h3>Cuándo puede tener sentido</h3>
          <ul>
            <li>✔️ Prototipos rápidos</li>
            <li>✔️ Ejemplos educativos</li>
            <li>✔️ Páginas HTML aisladas</li>
          </ul>

          <div className="callout warn">
            En cuanto una web crece, los estilos internos se vuelven difíciles
            de mantener y estandarizar.
          </div>
        </div>
      </details>

      <details className="dd">
        <summary>3) Estilos en línea (inline)</summary>
        <div className="dd-body">
          <p>
            Los estilos en línea se aplican directamente a un elemento HTML
            usando el atributo <code>style</code>.
          </p>

          <pre>
            <code>{`<h2 style="color: blue; font-size: 20px;">
  Título azul
</h2>`}</code>
          </pre>

          <p>
            Aunque funcionan, rompen la separación entre contenido y presentación
            y suelen generar conflictos de mantenimiento.
          </p>

          <h3>Problemas frecuentes</h3>
          <ul>
            <li>❌ Difíciles de mantener</li>
            <li>❌ No reutilizables</li>
            <li>❌ Complican la lectura del HTML</li>
            <li>❌ Generan conflictos de especificidad</li>
          </ul>

          <div className="callout warn">
            En desarrollo web profesional, los inline se evitan salvo casos muy
            concretos (por ejemplo, emails HTML).
          </div>
        </div>
      </details>

      <details className="dd" open>
        <summary>Cómo saber si el CSS está conectado</summary>
        <div className="dd-body">
          <p>Haz una prueba visible y pequeña en <code>styles.css</code>:</p>
          <pre><code>{`h1 {
  color: blue;
}`}</code></pre>
          <p>Guarda los dos archivos y recarga la página. Si el título no cambia, revisa primero estas causas frecuentes:</p>
          <ol>
            <li>El archivo no se llama exactamente <code>styles.css</code> (por ejemplo, puede ser <code>styles.css.txt</code>).</li>
            <li>El valor de <code>href</code> no coincide con la carpeta real.</li>
            <li>El <code>link</code> está fuera del <code>head</code> o tiene un error de escritura.</li>
            <li>No has guardado el HTML o el CSS antes de recargar.</li>
          </ol>
          <div className="callout tip">
            <strong>Comprobación mínima con DevTools:</strong> abre las herramientas del navegador,
            ve a <em>Elements</em> o <em>Inspector</em>, selecciona el <code>h1</code> y busca la
            regla <code>h1 &#123; color: blue; &#125;</code>. Si no aparece, el navegador no ha cargado
            esa hoja o la regla no coincide con el elemento.
          </div>
        </div>
      </details>

      {/* PRIORIDAD (DETAILS) */}
      <details className="dd" open>
        <summary>¿Qué forma de enlazar CSS tiene prioridad?</summary>
        <div className="dd-body">
          <p>
            Cuando un mismo elemento recibe estilos desde diferentes lugares, el
            navegador necesita decidir cuál aplicar. El primer criterio es la{" "}
            <strong>procedencia del estilo</strong>.
          </p>

          <h3>Orden de prioridad (de menor a mayor)</h3>
          <ol>
            <li>
              <strong>Hoja de estilos externa</strong> (menor prioridad)
            </li>
            <li>
              <strong>Estilos internos</strong>
            </li>
            <li>
              <strong>Estilos en línea (inline)</strong> (mayor prioridad, en general)
            </li>
          </ol>

          <div className="callout tip">
            Si el mismo elemento tiene estilos externos, internos e inline para
            la misma propiedad, el inline suele ser el que se aplique.
          </div>

          <h3>Ejemplo básico</h3>
          <pre>
            <code>{`<!-- HTML -->
<head>
  <link rel="stylesheet" href="styles.css">

  <style>
    h1 {
      color: red;
    }
  </style>
</head>

<body>
  <h1 style="color: blue;">Título</h1>
</body>`}</code>
          </pre>

          <pre>
            <code>{`/* styles.css */
h1 {
  color: green;
}`}</code>
          </pre>

          <p>
            En este caso, el texto se mostrará en <strong>azul</strong>.
          </p>

          <h3>La excepción importante: la especificidad</h3>
          <p>
            Ojo: esto no significa que “el interno siempre gana al externo”.
            Existe una excepción fundamental: la <strong>especificidad</strong>.
          </p>

          <p>
            Si el CSS externo usa un selector mucho más específico, puede
            sobrescribir un selector interno más débil.
          </p>

          <div className="callout warn">
            Esto confunde mucho: “¿cómo puede ganar el externo?”.  
            Respuesta: por la especificidad del selector.
          </div>

          <pre>
            <code>{`/* CSS externo */
#cabecera h1 {
  color: green;
}

/* CSS interno */
h1 {
  color: red;
}`}</code>
          </pre>

          <p>
            Si el <code>&lt;h1&gt;</code> está dentro de un elemento con{" "}
            <code>id="cabecera"</code>, se aplicará <strong>verde</strong> porque{" "}
            <code>#cabecera h1</code> es más específico.
          </p>

          <div className="callout tip">
            Idea clave: primero importa el origen, pero después el navegador
            compara la fuerza real de los selectores (especificidad).
          </div>
        </div>
      </details>

      {/* RESUMEN */}
      <section className="card">
        <h2>Resumen comparativo</h2>

        <ul>
          <li><strong>CSS externo</strong> → limpio, escalable, profesional</li>
          <li><strong>CSS interno</strong> → útil solo en casos puntuales</li>
          <li><strong>CSS inline</strong> → excepción, no norma</li>
        </ul>

        <div className="callout">
          Aprender CSS también es aprender a tomar buenas decisiones técnicas.
        </div>
      </section>

      {/* MINI-TEST */}
      <section className="card">
        <h2>🧠 Mini-test: comprueba lo aprendido</h2>
        <p>Responde sin mirar. Cada pregunta tiene una sola respuesta correcta.</p>
        <form onSubmit={submit}>
          {questions.map((q) => (
            <div key={q.id} style={{ marginBottom: "1.5rem", padding: "1rem 1.25rem", background: submitted ? (answers[q.id] === q.correct ? "#f0fdf4" : "#fef2f2") : "#f8fafc", borderRadius: "0.5rem", border: `1px solid ${submitted ? (answers[q.id] === q.correct ? "#86efac" : "#fca5a5") : "#e2e8f0"}` }}>
              <p style={{ fontWeight: 600, margin: "0 0 0.5rem" }}>{q.q}</p>
              {q.options.map((opt) => (
                <label key={opt} style={{ display: "block", cursor: submitted ? "default" : "pointer", padding: "0.25rem 0", color: submitted && opt === q.correct ? "#16a34a" : submitted && opt === answers[q.id] && opt !== q.correct ? "#dc2626" : "inherit", fontWeight: submitted && opt === q.correct ? 700 : "normal" }}>
                  <input type="radio" name={q.id} value={opt} checked={answers[q.id] === opt} onChange={() => choose(q.id, opt)} disabled={submitted} style={{ marginRight: "0.5rem" }} />
                  {opt}
                </label>
              ))}
              {submitted && <p style={{ marginTop: "0.5rem", fontSize: "0.9em", color: "#475569", borderTop: "1px solid #e2e8f0", paddingTop: "0.5rem" }}>💡 {q.why}</p>}
            </div>
          ))}
          {!submitted ? (
            <button type="submit" className="btn btn-primary" disabled={Object.keys(answers).length < questions.length}>Comprobar respuestas</button>
          ) : (
            <div>
              <p style={{ fontWeight: 700, fontSize: "1.1em", margin: "0 0 1rem" }}>{score === questions.length ? "🏆 ¡Perfecto!" : score >= Math.ceil(questions.length * 0.7) ? "✅ Muy bien" : "📚 Repasa un poco más"} — {score}/{questions.length} correctas ({Math.round((score / questions.length) * 100)}%)</p>
              <button type="button" className="btn" onClick={reset}>Reintentar</button>
            </div>
          )}
        </form>
      </section>

      {/* CIERRE */}
      <section className="card">
        <h2>Qué debes tener claro antes de continuar</h2>

        <p>
          A partir de ahora trabajaremos principalmente con{" "}
          <strong>hojas de estilo externas</strong>. Entender bien este punto te
          evitará muchos errores y frustraciones en los siguientes temas.
        </p>

        <p>
          En el próximo apartado entraremos en el corazón de CSS:{" "}
          <strong>cascada y especificidad</strong>.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/css-interno-externo-2" className="btn btn-primary">
            Continuar tema siguiente (II)
          </Link>
          
        </div>
      </section>
    </div>
  );
}
