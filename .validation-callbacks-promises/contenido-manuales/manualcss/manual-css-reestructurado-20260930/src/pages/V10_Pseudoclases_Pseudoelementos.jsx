import { useEffect, useMemo, useState } from "react";

export default function PseudoclasesCSS() {
  useEffect(() => {
    document.title = "CSS · Pseudoclases";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "¿Cuántos dos puntos llevan los pseudoelementos en CSS moderno?", options: ["Uno (:)", "Dos (::)", "Ninguno, van sin :", "Depende del navegador"], correct: "Dos (::)", why: "Los pseudoelementos como ::before, ::after, ::first-line usan doble dos puntos (::) en CSS3. Las pseudoclases usan uno solo (:hover, :focus...)." },
    { id: "q2", q: "¿Qué selecciona :nth-child(2n)?", options: ["Solo el segundo hijo", "Todos los hijos en posición par (2, 4, 6...)", "Todos los hijos impares", "Solo el segundo tipo de elemento"], correct: "Todos los hijos en posición par (2, 4, 6...)", why: "2n genera el patrón 2, 4, 6... Equivale a :nth-child(even). Muy usado para filas alternas en tablas." },
    { id: "q3", q: "¿Cuál es la diferencia entre :hover y ::before?", options: ["Son equivalentes", ":hover es un estado del usuario; ::before crea contenido decorativo virtual", "::before solo funciona en imágenes", ":hover requiere JavaScript"], correct: ":hover es un estado del usuario; ::before crea contenido decorativo virtual", why: ":hover reacciona a la interacción (pseudoclase). ::before genera un elemento virtual antes del contenido del elemento (pseudoelemento)." },
    { id: "q4", q: "¿Qué propiedad es obligatoria para que ::before o ::after sean visibles?", options: ["display: block", "position: absolute", "content (aunque sea vacío: content: '')", "visibility: visible"], correct: "content (aunque sea vacío: content: '')", why: "Sin la propiedad content, los pseudoelementos no se renderizan en el DOM, aunque tengan width, height o background." },
    { id: "q5", q: "¿Cuándo se activa la pseudoclase :focus?", options: ["Cuando el cursor pasa por encima", "Cuando el elemento recibe el foco (clic o tabulación con teclado)", "Solo en inputs de formulario", "Cuando el elemento es el primero del DOM"], correct: "Cuando el elemento recibe el foco (clic o tabulación con teclado)", why: ":focus es esencial para la accesibilidad: permite a usuarios de teclado ver qué elemento está activo. Nunca elimines el outline de :focus sin reemplazarlo." },
  ], []);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = useMemo(() => questions.filter((q) => answers[q.id] === q.correct).length, [answers, questions]);
  const choose = (id, opt) => setAnswers((p) => ({ ...p, [id]: opt }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <main className="doc" id="contenido">
      {/* =========================
          INTRODUCCIÓN
      ========================== */}
      <section className="card">
        <h1>CSS · Pseudoclases</h1>

        <p>
          Las <strong>pseudoclases</strong> permiten aplicar estilos a los elementos
          <strong> según su estado, posición o interacción</strong>, sin necesidad
          de añadir clases extra en el HTML.
        </p>

        <div className="callout tip">
          Idea clave: una pseudoclase no selecciona “qué elemento es”, sino
          <strong> en qué situación se encuentra</strong>.
        </div>
        <div className="callout info" style={{ marginTop: '1rem', backgroundColor: '#f0f9ff', borderColor: '#0ea5e9' }}>
          <strong>🎯 Para principiantes:</strong> Piensa en las pseudoclases como "sensores" que detectan qué está pasando con un elemento. 
          ¿El usuario está pasando el ratón por encima? ¿Es el primer hijo de su padre? ¿Está deshabilitado un botón? 
          Las pseudoclases "sienten" esos estados y aplican estilos automáticamente.
        </div>

        <div style={{ marginTop: '1.5rem', backgroundColor: '#fef7ff', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #c084fc' }}>
          <h3 style={{ marginTop: 0, color: '#7c3aed' }}>🔍 Analogía del mundo real</h3>
          <p style={{ margin: '0.8rem 0' }}>
            Imagina que tienes una lámpara inteligente que cambia de color según lo que pasa:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: '#6b21a8' }}>
            <li><strong>Verde</strong> cuando alguien se acerca (como <code>:hover</code>)</li>
            <li><strong>Azul</strong> cuando alguien la toca (como <code>:active</code>)</li>
            <li><strong>Rojo</strong> cuando está apagada (como <code>:disabled</code>)</li>
          </ul>
          <p style={{ margin: '0.8rem 0 0 0', fontStyle: 'italic' }}>
            Las pseudoclases funcionan igual: <strong>detectan situaciones y reaccionan automáticamente</strong>.
          </p>
        </div>      </section>

      {/* =========================
          QUÉ SON LAS PSEUDOCLASES
      ========================== */}
      <section className="card">
        <h2>¿Qué es una pseudoclase?</h2>

        <p>
          Una pseudoclase es una palabra clave que se añade a un selector mediante
          <code> :</code> para indicar un <strong>estado especial</strong> del elemento.
        </p>

        <pre>
          <code>{`a:hover{
  color: red;
}`}</code>
        </pre>

        <p>
          Se lee así:
          <em>
            “Selecciona los enlaces cuando el usuario pasa el ratón por encima”.
          </em>
        </p>

        <div className="callout">
          Las pseudoclases existen desde CSS2 y son parte esencial del CSS moderno.
        </div>
      </section>

      {/* =========================
          DIFERENCIAS IMPORTANTES
      ========================== */}
      <section className="card">
        <h2>Pseudoclases vs otros selectores</h2>

        <details className="dd" open>
          <summary>1) Pseudoclases vs selectores normales</summary>
          <div className="dd-body">
            <p>
              Los selectores normales (etiqueta, clase, ID, atributos…) seleccionan
              elementos por <strong>lo que son</strong> o <strong>dónde están</strong>.
            </p>

            <p>
              Las pseudoclases seleccionan elementos por
              <strong> cómo están en ese momento</strong>.
            </p>

            <pre>
              <code>{`/* selector normal */
.button{}

/* pseudoclase */
.button:hover{}`}</code>
            </pre>

            <div className="callout tip">
              La pseudoclase no sustituye al selector: lo complementa.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2) Pseudoclases vs pseudoelementos</summary>
          <div className="dd-body">
            <p>
              Es una confusión muy habitual:
            </p>

            <ul>
              <li>
                <strong>Pseudoclases</strong> → <em>estado</em> del elemento
                (<code>:hover</code>, <code>:focus</code>, <code>:first-child</code>)
              </li>
              <li>
                <strong>Pseudoelementos</strong> → <em>parte</em> del elemento
                (<code>::before</code>, <code>::after</code>)
              </li>
            </ul>

            <pre>
              <code>{`/* pseudoclase */
a:hover{}

/* pseudoelemento */
p::first-line{}`}</code>
            </pre>

            <div className="callout warn">
              Regla visual: <strong>:</strong> estado · <strong>::</strong> parte del elemento
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          DOCUMENTACIÓN + VIDEO
      ========================== */}
      <section className="card">
        <h2>Documentación y vídeo</h2>

        <div className="doc-link-card">
          <a
            href="https://www.w3schools.com/cssref/css_ref_pseudo_classes.php"
            target="_blank"
            rel="noreferrer"
          >
            W3Schools · CSS Pseudo-classes Reference
          </a>
          <p className="doc-link-card__desc">
            Lista completa de pseudoclases con ejemplos sencillos.
            Útil como referencia rápida mientras practicas.
          </p>
        </div>

        <div className="callout tip">
          En este vídeo se muestran tres pseudoclases fundamentales:
          <code>:link</code>, <code>:visited</code> y <code>:hover</code>.
        </div>

        {/* VIDEO EMBEBIDO */}
        <div className="media" style={{ maxWidth: 900 }}>
          <iframe
            width="900"
            height="506"
            src="https://www.youtube.com/embed/DCE97Fz5RRc"
            title="Pseudoclases CSS: link, visited y hover"
            frameBorder="0"
            loading="lazy"
            allowFullScreen
            style={{ borderRadius: "0.75rem", width: "100%" }}
          />
        </div>
      </section>

      {/* =========================
          LAS MÁS USADAS
      ========================== */}
      <section className="card">
        <h2>Pseudoclases más usadas (las que debes dominar)</h2>

        <p>
          Aunque existen muchas pseudoclases, en la práctica profesional se repiten
          siempre las mismas. Estas son las imprescindibles.
        </p>

        {/* TABLA */}
        <div className="table-wrap" tabIndex="0">
          <table className="table table-zebra">
            <caption>Pseudoclases CSS más habituales</caption>
            <thead>
              <tr>
                <th scope="col">Pseudoclase</th>
                <th scope="col">¿Cuándo se aplica?</th>
                <th scope="col">Uso típico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">:hover</th>
                <td>Cuando el usuario pasa el ratón</td>
                <td>Botones, enlaces, tarjetas</td>
              </tr>
              <tr>
                <th scope="row">:active</th>
                <td>Mientras se hace clic</td>
                <td>Feedback visual al pulsar</td>
              </tr>
              <tr>
                <th scope="row">:focus</th>
                <td>Elemento con foco</td>
                <td>Accesibilidad, formularios</td>
              </tr>
              <tr>
                <th scope="row">:link</th>
                <td>Enlace no visitado</td>
                <td>Estados iniciales de enlaces</td>
              </tr>
              <tr>
                <th scope="row">:visited</th>
                <td>Enlace ya visitado</td>
                <td>Navegación del usuario</td>
              </tr>
              <tr>
                <th scope="row">:first-child</th>
                <td>Primer hijo</td>
                <td>Listas, tablas</td>
              </tr>
              <tr>
                <th scope="row">:last-child</th>
                <td>Último hijo</td>
                <td>Ajustes finales</td>
              </tr>
              <tr>
                <th scope="row">:nth-child()</th>
                <td>Posición concreta</td>
                <td>Filas alternas, patrones</td>
              </tr>
              <tr>
                <th scope="row">:checked</th>
                <td>Checkbox o radio marcado</td>
                <td>Formularios</td>
              </tr>
              <tr>
                <th scope="row">:disabled</th>
                <td>Elemento deshabilitado</td>
                <td>Inputs y botones</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="callout tip">
          Si dominas estas pseudoclases, cubres más del 90% de los casos reales.
        </div>

        {/* NUEVA SECCIÓN: CATEGORÍAS DE PSEUDOCLASES */}
        <div style={{ marginTop: '2rem', display: 'grid', gap: '1.5rem' }}>
          
          <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #22c55e' }}>
            <h3 style={{ marginTop: 0, color: '#166534' }}>🖱️ Interacción del usuario</h3>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#15803d' }}>:hover</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Cuando paso el ratón por encima"</p>
                <code style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>button:hover {'{ background: blue; }'}</code>
              </div>
              <div>
                <h4 style={{ marginTop: 0, color: '#15803d' }}>:active</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Mientras estoy haciendo clic"</p>
                <code style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>button:active {'{ transform: scale(0.95); }'}</code>
              </div>
              <div>
                <h4 style={{ marginTop: 0, color: '#15803d' }}>:focus</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Tengo el foco (teclado/click)"</p>
                <code style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>input:focus {'{ outline: 2px solid red; }'}</code>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#fefce8', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #facc15' }}>
            <h3 style={{ marginTop: 0, color: '#ca8a04' }}>📍 Posición en la estructura</h3>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#a16207' }}>:first-child</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Soy el primer hijo"</p>
                <code style={{ backgroundColor: '#fef3c7', color: '#a16207', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>li:first-child {'{ font-weight: bold; }'}</code>
              </div>
              <div>
                <h4 style={{ marginTop: 0, color: '#a16207' }}>:last-child</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Soy el último hijo"</p>
                <code style={{ backgroundColor: '#fef3c7', color: '#a16207', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>li:last-child {'{ margin-bottom: 0; }'}</code>
              </div>
              <div>
                <h4 style={{ marginTop: 0, color: '#a16207' }}>:nth-child(n)</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Estoy en la posición n"</p>
                <code style={{ backgroundColor: '#fef3c7', color: '#a16207', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>tr:nth-child(even) {'{ background: gray; }'}</code>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#fef2f2', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #fca5a5' }}>
            <h3 style={{ marginTop: 0, color: '#dc2626' }}>🎛️ Estados de formularios</h3>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#b91c1c' }}>:disabled</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Estoy deshabilitado"</p>
                <code style={{ backgroundColor: '#fecaca', color: '#b91c1c', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>input:disabled {'{ opacity: 0.5; }'}</code>
              </div>
              <div>
                <h4 style={{ marginTop: 0, color: '#b91c1c' }}>:checked</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Estoy marcado/seleccionado"</p>
                <code style={{ backgroundColor: '#fecaca', color: '#b91c1c', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>input:checked {'{ accent-color: green; }'}</code>
              </div>
              <div>
                <h4 style={{ marginTop: 0, color: '#b91c1c' }}>:required</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Soy un campo obligatorio"</p>
                <code style={{ backgroundColor: '#fecaca', color: '#b91c1c', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>input:required {'{ border-left: 3px solid red; }'}</code>
              </div>
            </div>
          </div>
        </div>

        {/* TRUCO MENTAL PARA RECORDAR */}
        <div style={{ marginTop: '1.5rem', backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #64748b' }}>
          <h3 style={{ marginTop: 0, color: '#334155' }}>🧠 Truco mental para recordar pseudoclases</h3>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div>
              <h4 style={{ marginTop: 0, color: '#475569' }}>Pregúntate siempre:</h4>
              <ul style={{ paddingLeft: '1.2rem', color: '#64748b' }}>
                <li><strong>"¿Qué está haciendo el usuario?"</strong> → :hover, :active, :focus</li>
                <li><strong>"¿Dónde está este elemento?"</strong> → :first-child, :last-child, :nth-child</li>
                <li><strong>"¿En qué estado está?"</strong> → :disabled, :checked, :required</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginTop: 0, color: '#475569' }}>Patrón común:</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9em' }}>
                <code>selector:situación</code><br/>
                Ejemplo: <code>button:hover</code> = "botón cuando se pasa el ratón"
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ========================================
    PRÁCTICA GUIADA · PSEUDOCLASES FUNDAMENTALES
========================================= */}
<section className="card">
  <h2>Práctica guiada: tu laboratorio de pseudoclases</h2>

  <p>
    Copia este ejemplo en <strong>CodePen</strong> (HTML y CSS).
    No cambies nada al principio: <strong>interactúa</strong> y observa qué pasa.
    Luego lee los comentarios y prueba a modificar valores.
  </p>

  {/* NUEVA SECCIÓN: PREPARACIÓN METODOLÓGICA */}
  <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #38bdf8' }}>
    <h3 style={{ marginTop: 0, color: '#0c4a6e' }}>🚀 Metodología: cómo aprovechar esta práctica al máximo</h3>
    
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
      <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
        <h4 style={{ marginTop: 0, color: '#075985' }}>📋 Paso 1: Observar sin tocar</h4>
        <p style={{ margin: 0, fontSize: '0.9em' }}>
          Copia el código, ábrelo en el navegador y <strong>juega con él</strong>: 
          pasa el ratón, haz clic, usa TAB, marca checkboxes. ¿Qué cambia y cuándo?
        </p>
      </div>
      
      <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
        <h4 style={{ marginTop: 0, color: '#075985' }}>🔍 Paso 2: Conectar CSS con HTML</h4>
        <p style={{ margin: 0, fontSize: '0.9em' }}>
          Lee cada regla CSS y trata de predecir qué elemento del HTML va a cambiar. 
          Luego pruébalo para confirmar.
        </p>
      </div>
      
      <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
        <h4 style={{ marginTop: 0, color: '#075985' }}>⚡ Paso 3: Experimentar y modificar</h4>
        <p style={{ margin: 0, fontSize: '0.9em' }}>
          Cambia colores, añade nuevas pseudoclases, comenta y descomenta líneas. 
          ¿Qué pasa si combinas varias pseudoclases?
        </p>
      </div>
    </div>
    
    <div className="callout tip" style={{ marginTop: '1rem' }}>
      <strong>💡 Truco de debugging:</strong> En DevTools, cuando inspecciones un elemento, 
      fíjate en que puedes simular pseudoclases (:hover, :focus, :active) haciendo clic en ":hov" en el panel de Styles.
    </div>
  </div>

  <details className="dd" open>
    <summary>HTML (copiar y pegar)</summary>
    <div className="dd-body">
      <pre>
        <code>{`<main class="demo">
  <h1>Pseudoclases en acción</h1>

  <!-- ENLACES -->
  <section class="box">
    <h2>Enlaces</h2>
    <p>
      <a href="https://example.com" target="_blank">Enlace A</a>
      <a href="https://www.w3schools.com" target="_blank">Enlace B</a>
    </p>
  </section>

  <!-- BOTÓN -->
  <section class="box">
    <h2>Botón</h2>
    <button>Botón de prueba</button>
    <button disabled>Botón deshabilitado</button>
  </section>

  <!-- FORMULARIO -->
  <section class="box">
    <h2>Formulario</h2>

    <label>
      Email
      <input type="email" placeholder="tu@email.com">
    </label>

    <label>
      Nombre (deshabilitado)
      <input type="text" disabled>
    </label>

    <label class="check">
      <input type="checkbox">
      Acepto las condiciones
    </label>
  </section>

  <!-- LISTA -->
  <section class="box">
    <h2>Lista</h2>
    <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
      <li>Elemento 4</li>
    </ul>
  </section>
</main>`}</code>
      </pre>
    </div>
  </details>

  <details className="dd">
    <summary>CSS (copiar y pegar)</summary>
    <div className="dd-body">
      <pre>
        <code>{`/* ESTILO BASE */
body{
  font-family: system-ui, sans-serif;
  background: #f8fafc;
}

.demo{
  max-width: 700px;
  margin: 2rem auto;
}

.box{
  background: white;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}

/* ======================
   ENLACES
====================== */

/* enlace normal */
a:link{
  color: #2563eb;
}

/* enlace visitado */
a:visited{
  color: #7c3aed;
}

/* al pasar el ratón */
a:hover{
  text-decoration: underline;
}

/* mientras haces clic */
a:active{
  color: red;
}

/* ======================
   BOTONES
====================== */

button{
  padding: .5rem .75rem;
  margin-right: .5rem;
}

/* ratón encima */
button:hover{
  background: #e5e7eb;
}

/* al pulsar */
button:active{
  transform: scale(.97);
}

/* foco (teclado) */
button:focus{
  outline: 3px solid #fde047;
}

/* deshabilitado */
button:disabled{
  opacity: .5;
}

/* ======================
   FORMULARIO
====================== */

/* input con foco */
input:focus{
  outline: 3px solid #22c55e;
}

/* input deshabilitado */
input:disabled{
  background: #f1f5f9;
}

/* checkbox marcado */
input:checked + span{
  font-weight: bold;
}

/* ======================
   LISTA
====================== */

/* primer elemento */
li:first-child{
  font-weight: bold;
}

/* último elemento */
li:last-child{
  font-style: italic;
}

/* posiciones impares */
li:nth-child(odd){
  background: #f1f5f9;
}`}</code>
      </pre>
    </div>
  </details>

  <div className="callout tip">
    Prueba esto: pasa el ratón, haz clic, usa TAB, marca el checkbox y observa
    cómo el estilo cambia según el <strong>estado</strong> del elemento.
  </div>

  <details className="dd">
    <summary>Retos progresivos - ¡Hazlos en orden!</summary>
    <div className="dd-body">
      
      <div style={{ backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #fbbf24' }}>
        <h4 style={{ marginTop: 0, color: '#92400e' }}>🎯 Retos básicos (entender cada pseudoclase)</h4>
        <ol style={{ paddingLeft: '1.2rem' }}>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Colores de interacción:</strong> Cambia el color de <code>:hover</code> en enlaces a naranja. 
            Luego haz que <code>:active</code> sea rojo oscuro.
            <em style={{ display: 'block', color: '#7c2d12', fontSize: '0.9em', marginTop: '0.3rem' }}>
              💡 Pista: Prueba a mantener presionado el clic para ver :active
            </em>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Focus visible:</strong> Haz que el botón tenga un borde grueso azul cuando esté en <code>:focus</code>.
            Pruébalo navegando con TAB.
            <em style={{ display: 'block', color: '#7c2d12', fontSize: '0.9em', marginTop: '0.3rem' }}>
              💡 Ejemplo: <code>button:focus {'{ border: 3px solid blue; }'}</code>
            </em>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Filas alternas:</strong> Cambia <code>nth-child(odd)</code> por <code>even</code> y observa. 
            ¿Qué filas se colorean ahora?
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Comprender timing:</strong> Explica con tus palabras qué diferencia hay entre <code>:hover</code> y <code>:active</code>. 
            ¿Cuál dura más tiempo? ¿Cuál necesita un clic?
          </li>
        </ol>
      </div>

      <div style={{ backgroundColor: '#f3e8ff', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #a855f7' }}>
        <h4 style={{ marginTop: 0, color: '#6b21a8' }}>🔥 Retos intermedios (combinar pseudoclases)</h4>
        <ol start="5" style={{ paddingLeft: '1.2rem' }}>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Checkbox personalizado:</strong> Haz que cuando un checkbox esté <code>:checked</code>, 
            el texto del label se vuelva verde y en negrita.
            <em style={{ display: 'block', color: '#7c2d12', fontSize: '0.9em', marginTop: '0.3rem' }}>
              💡 Pista: Usa el selector adyacente <code>input:checked + span</code>
            </em>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Estados múltiples:</strong> Crea estas reglas para inputs:
            <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>Normal: borde gris</li>
              <li>:focus: borde azul grueso</li>
              <li>:disabled: fondo gris claro y cursor "not-allowed"</li>
              <li>:required: borde izquierdo rojo de 4px</li>
            </ul>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Lista avanzada:</strong> Añade 2 elementos más a la lista y crea reglas para:
            <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>El primer elemento: borde superior azul</li>
              <li>El último elemento: borde inferior verde</li>
              <li>Los elementos en posiciones múltiplos de 3: fondo amarillo claro</li>
            </ul>
            <em style={{ display: 'block', color: '#7c2d12', fontSize: '0.9em', marginTop: '0.3rem' }}>
              💡 Pista: <code>:nth-child(3n)</code> selecciona cada 3 elementos
            </em>
          </li>
        </ol>
      </div>

      <div style={{ backgroundColor: '#fde2e8', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem', border: '1px solid #f43f5e' }}>
        <h4 style={{ marginTop: 0, color: '#be123c' }}>⚡ Retos avanzados (para expertos)</h4>
        <ol start="8" style={{ paddingLeft: '1.2rem' }}>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Combinación compleja:</strong> Crea un botón que:
            <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>Normal: fondo gris claro</li>
              <li>:hover: fondo azul + texto blanco</li>
              <li>:hover:active: se reduzca un 5% (transform: scale(0.95))</li>
              <li>:focus: tenga una sombra externa (box-shadow)</li>
            </ul>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Formulario dinámico:</strong> Añade al HTML inputs con estos atributos: <code>required</code>, <code>disabled</code>, <code>placeholder</code>. 
            Crea estilos que los distingan visualmente sin JavaScript.
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Tabla profesional:</strong> Crea una tabla HTML con 5 filas y aplica:
            <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>Filas pares: fondo gris claro</li>
              <li>Primera fila: texto en negrita</li>
              <li>Última fila: borde inferior grueso</li>
              <li>Al hacer :hover en una fila: fondo azul claro</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="callout tip">
        <strong>📚 Para tu ejercicio de repaso:</strong> Cuando hagas estos retos, documenta cada pseudoclase que uses. 
        Ejemplo: <code>{'/* li:first-child - selecciona el primer elemento de la lista */'}</code>
      </div>

      <div className="callout warn">
        <strong>🏆 Desafío final:</strong> ¿Puedes crear una página web completa que cambie de tema (colores) 
        usando solo pseudoclases como <code>:checked</code> y combinadores? Sin JavaScript, solo CSS inteligente.
      </div>

      <div style={{ marginTop: '1.5rem', backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #22c55e' }}>
        <h4 style={{ marginTop: 0, color: '#166534' }}>✅ Lista de verificación de aprendizaje</h4>
        <p style={{ margin: '0.5rem 0', color: '#15803d' }}>Marca lo que ya dominas:</p>
        <ul style={{ paddingLeft: '1.2rem', color: '#166534' }}>
          <li>□ Entiendo la diferencia entre :hover y :active</li>
          <li>□ Sé usar :focus para accesibilidad</li>
          <li>□ Puedo seleccionar primer/último hijo</li>
          <li>□ Manejo :nth-child() con números y palabras (odd/even)</li>
          <li>□ Uso :checked y :disabled en formularios</li>
          <li>□ Combino pseudoclases en un mismo selector</li>
          <li>□ Puedo explicar cuándo usar cada pseudoclase</li>
        </ul>
      </div>
    </div>
  </details>

  <div className="callout">
    Si entiendes este ejemplo, ya entiendes las <strong>pseudoclases básicas</strong>.
    En el siguiente tema veremos los <strong>pseudoelementos</strong>.
  </div>
</section>


      {/* =========================
          CIERRE DIDÁCTICO
      ========================== */}
      <section className="card">
        <h2>Idea clave antes de pasar al siguiente tema</h2>

        <p>
          Las pseudoclases permiten que CSS <strong>reaccione</strong> al usuario,
          a la estructura del HTML y al estado de los elementos,
          sin JavaScript y sin clases extra.
        </p>

        <div className="callout warn">
          En el siguiente tema veremos los <strong>pseudoelementos</strong>, que no
          dependen del estado, sino de <strong>partes internas</strong> del elemento.
        </div>
      </section>

      {/* NUEVA SECCIÓN: ERRORES COMUNES */}
      <section className="card">
        <h2>❌ Errores típicos con pseudoclases (¡evítalos!)</h2>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          
          <div style={{ backgroundColor: '#fef2f2', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #fca5a5' }}>
            <h3 style={{ marginTop: 0, color: '#dc2626' }}>🚫 Error #1: Confundir : con ::</h3>
            
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#7f1d1d' }}>❌ Incorrecto</h4>
                <pre style={{ backgroundColor: '#7f1d1d', color: '#fecaca', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.85em' }}>
                  <code>{`/* Mezclando pseudoclases con pseudoelementos */
button::hover { /* ¡MAL! */
  background: blue;
}

p:before { /* ¡MAL! */
  content: "→";
}`}</code>
                </pre>
              </div>
              
              <div>
                <h4 style={{ marginTop: 0, color: '#166534' }}>✅ Correcto</h4>
                <pre style={{ backgroundColor: '#166534', color: '#dcfce7', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.85em' }}>
                  <code>{`/* Estados con : */
button:hover {
  background: blue;
}

/* Partes con :: */
p::before {
  content: "→";
}`}</code>
                </pre>
              </div>
            </div>
            
            <p style={{ color: '#7f1d1d', fontSize: '0.9em', margin: '0.8rem 0 0 0' }}>
              <strong>Regla de oro:</strong> <code>:</code> para situaciones/estados, <code>::</code> para partes del elemento
            </p>
          </div>

          <div style={{ backgroundColor: '#fffbeb', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #fbbf24' }}>
            <h3 style={{ marginTop: 0, color: '#d97706' }}>⚠️ Error #2: Orden incorrecto de pseudoclases de enlaces</h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ marginTop: 0, color: '#92400e' }}>Orden que NO funciona:</h4>
              <pre style={{ backgroundColor: '#451a03', color: '#fed7aa', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.85em' }}>
                <code>{`a:hover { color: blue; }
a:visited { color: purple; } /* Se pisa con hover */
a:active { color: red; }
a:link { color: black; } /* No se aplicará nunca */`}</code>
              </pre>
            </div>
            
            <div>
              <h4 style={{ marginTop: 0, color: '#166534' }}>✅ Orden correcto (LoVeHA):</h4>
              <pre style={{ backgroundColor: '#166534', color: '#dcfce7', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.85em' }}>
                <code>{`a:link { color: black; }    /* L */
a:visited { color: purple; } /* V */  
a:hover { color: blue; }     /* H */
a:active { color: red; }     /* A */`}</code>
              </pre>
            </div>
            
            <p style={{ color: '#92400e', fontSize: '0.9em', margin: '0.8rem 0 0 0' }}>
              <strong>Truco nemotécnico:</strong> <strong>L</strong>o<strong>V</strong>e <strong>H</strong><strong>A</strong>te (Link → Visited → Hover → Active)
            </p>
          </div>

          <div style={{ backgroundColor: '#f0fdf4', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #22c55e' }}>
            <h3 style={{ marginTop: 0, color: '#16a34a' }}>✅ Error #3: Usar pseudoclases cuando necesitas clases normales</h3>
            
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#dc2626' }}>😭 Problemático</h4>
                <pre style={{ backgroundColor: '#7f1d1d', color: '#fecaca', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.8em' }}>
                  <code>{`/* Intentar marcar elementos "especiales" */
div:first-child {
  font-size: 2rem; /* ¿Y si cambio el HTML? */
}

li:nth-child(3) {
  color: red; /* ¿Y si hay más elementos? */
}`}</code>
                </pre>
              </div>
              
              <div>
                <h4 style={{ marginTop: 0, color: '#166534' }}>😊 Más robusto</h4>
                <pre style={{ backgroundColor: '#166534', color: '#dcfce7', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.8em' }}>
                  <code>{`/* Mejor usar clases semánticas */
.hero-title {
  font-size: 2rem;
}

.featured-item {
  color: red;
}`}</code>
                </pre>
              </div>
            </div>
            
            <div className="callout tip" style={{ marginTop: '1rem' }}>
              <strong>📏 Cuándo usar cada uno:</strong> Pseudoclases para patrones consistentes (primer/último, alternas). 
              Clases normales para elementos únicos o semánticamente diferentes.
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: GUÍA DE USO PRÁCTICO */}
      <section className="card">
        <h2>🎯 Guía rápida: ¿Cuándo usar cada pseudoclase?</h2>
        
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          
          <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #64748b' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>🖱️ Interacción del usuario</h3>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0, color: '#475569' }}>
              <li><strong>:hover</strong> → Feedback visual, botones, enlaces</li>
              <li><strong>:active</strong> → Mostrar que se está pulsando</li>
              <li><strong>:focus</strong> → Accesibilidad, navegación por teclado</li>
              <li><strong>:visited</strong> → Navegación web, enlaces visitados</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: '#fefce8', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #facc15' }}>
            <h3 style={{ marginTop: 0, color: '#a16207' }}>📍 Posición estructural</h3>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0, color: '#ca8a04' }}>
              <li><strong>:first-child</strong> → Primeros elementos de listas/tablas</li>
              <li><strong>:last-child</strong> → Quitar márgenes finales</li>
              <li><strong>:nth-child()</strong> → Patrones (filas alternas, cada 3...)</li>
              <li><strong>:only-child</strong> → Cuando hay un solo elemento</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: '#fef7ff', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #c084fc' }}>
            <h3 style={{ marginTop: 0, color: '#7c3aed' }}>📝 Estados de formularios</h3>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0, color: '#8b5cf6' }}>
              <li><strong>:checked</strong> → Checkboxes/radios marcados</li>
              <li><strong>:disabled</strong> → Campos/botones deshabilitados</li>
              <li><strong>:required</strong> → Campos obligatorios</li>
              <li><strong>:valid/:invalid</strong> → Validación de formularios</li>
            </ul>
          </div>
        </div>

        <div className="callout info" style={{ marginTop: '1.5rem' }}>
          <strong>🧠 Para recordar fácil:</strong> 
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
            <li><strong>Interacción:</strong> Lo que hace el usuario</li>
            <li><strong>Posición:</strong> Dónde está en relación con sus hermanos</li>
            <li><strong>Estado:</strong> Cómo está configurado el elemento</li>
          </ul>
        </div>

        <div style={{ marginTop: '1.5rem', backgroundColor: '#f1f5f9', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #64748b' }}>
          <h3 style={{ marginTop: 0, color: '#334155' }}>🎨 Casos de uso profesionales comunes</h3>
          
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div><strong>Navegación:</strong> <code>nav a:hover</code>, <code>nav a:focus</code> para accesibilidad</div>
            <div><strong>Tablas:</strong> <code>tr:nth-child(even)</code> para filas alternas</div>
            <div><strong>Formularios:</strong> <code>input:focus</code>, <code>input:invalid</code> para validación visual</div>
            <div><strong>Listas:</strong> <code>li:first-child</code>, <code>li:last-child</code> para márgenes especiales</div>
            <div><strong>Botones:</strong> <code>:hover</code>, <code>:active</code>, <code>:disabled</code> para todos los estados</div>
          </div>
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
    </main>
  );
}
