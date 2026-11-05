import { useEffect, useMemo, useState } from "react";

export default function PracticaGuiadaSelectores() {
  useEffect(() => {
    document.title = "CSS · Práctica guiada 1 (Selectores y pseudo-*)";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "¿Cómo se escribe un selector de clase en CSS?", options: [".nombre-clase", "#nombre-clase", "@nombre-clase", "*nombre-clase"], correct: ".nombre-clase", why: "Los selectores de clase llevan un punto (.) delante del nombre. Los ID usan #." },
    { id: "q2", q: "¿Cuál es la diferencia entre `.card p` y `.card > p`?", options: ["Son idénticos", ".card p selecciona cualquier p dentro de .card; .card > p solo hijos directos", ".card > p selecciona todos los descendientes", ".card p solo selecciona el primer párrafo"], correct: ".card p selecciona cualquier p dentro de .card; .card > p solo hijos directos", why: "El espacio es el combinador descendiente (cualquier nivel). El > es el combinador hijo directo (un solo nivel de profundidad)." },
    { id: "q3", q: "¿Cuántas veces puede aparecer el mismo ID en una página HTML?", options: ["Tantas como se necesite", "Una sola vez", "Máximo tres veces", "Solo en archivos pequeños"], correct: "Una sola vez", why: "Los IDs deben ser únicos por página. Repetirlos genera HTML inválido y puede romper JavaScript y CSS." },
    { id: "q4", q: "¿Qué hace el selector a:hover?", options: ["Selecciona todos los enlaces del documento", "Aplica estilos cuando el cursor pasa sobre el enlace", "Selecciona enlaces visitados", "Activa el enlace al cargar la página"], correct: "Aplica estilos cuando el cursor pasa sobre el enlace", why: ":hover es una pseudoclase de estado que activa los estilos cuando el usuario sitúa el puntero sobre el elemento." },
    { id: "q5", q: "¿Cuál es la diferencia entre pseudoclase y pseudoelemento?", options: ["No hay diferencia, son sinónimos", "La pseudoclase selecciona un estado del elemento; el pseudoelemento crea o selecciona una parte del elemento", "Los pseudoelementos solo funcionan en imágenes", "Las pseudoclases requieren JavaScript"], correct: "La pseudoclase selecciona un estado del elemento; el pseudoelemento crea o selecciona una parte del elemento", why: ":hover es un estado (pseudoclase con :). ::before crea contenido virtual (pseudoelemento con ::). Los pseudoelementos llevan doble dos puntos." },
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
          INTRO
      ========================== */}
      <section className="card">
        <h1>Práctica guiada 1 · Selectores (tu primera práctica completa)</h1>

        <p>
          En esta práctica vas a construir un HTML sencillo y, paso a paso, aplicarás CSS usando{" "}
          <strong>todo lo que hemos visto</strong>. Además es necesario que comentes cada paso y justifiques las decisiones tomadas.
          
        </p>

        <ul>
          <li>selectores básicos (etiqueta, clase, ID, universal, agrupación)</li>
          <li>combinadores (descendiente, hijo directo, hermanos)</li>
          <li>selectores de atributos</li>
          <li>pseudoclases fundamentales</li>
          <li>pseudoelementos fundamentales</li>
          <li>
            y lo más importante: <strong>cascada, herencia y especificidad</strong>
          </li>
        </ul>

        <div className="callout warn">
          <strong>Regla de oro:</strong> en este ejercicio NO te doy el CSS hecho.  
          Tienes que buscar en tu manual y aplicar cada concepto.  
          Aquí te explico exactamente <strong>qué se espera</strong> en cada paso.
        </div>

        <div className="callout tip">
          Método: <strong>predice → escribe → guarda → observa → explica</strong>.  
          Si puedes explicarlo, lo has aprendido.
        </div>
      </section>

      {/* =========================
          PASO 0: HTML BASE
      ========================== */}
      <section className="card">
        <h2>Paso 0 · Crea este HTML (obligatorio)</h2>

        <p>
          Copia este HTML tal cual en CodePen o en tu proyecto. No lo modifiques por ahora.
          Lo usaremos para practicar selectores sobre una estructura real.
        </p>

        <pre>
          <code>{`<main class="wrap">
  <header class="hero" id="top">
    <h1 class="title">Mi primera práctica de CSS</h1>
    <p class="lead">Voy a practicar selectores, cascada, herencia y especificidad.</p>

    <nav class="menu">
      <a href="#seccion" class="link">Sección</a>
      <a href="#lista" class="link">Lista</a>
      <a href="guia.pdf" class="link" title="PDF">Guía PDF</a>
      <a href="https://example.com" class="link" target="_blank" rel="noreferrer">Externo</a>
    </nav>
  </header>

  <section class="card" id="seccion">
    <h2 class="card-title">Tarjeta</h2>
    <p class="note">Primer párrafo dentro de la tarjeta.</p>
    <p>Segundo párrafo dentro de la tarjeta.</p>

    <div class="panel">
      <p class="note">Párrafo dentro de panel (anidado).</p>
    </div>

    <button class="btn">Botón normal</button>
    <button class="btn" disabled>Botón deshabilitado</button>

    <label class="check">
      <input type="checkbox">
      <span>Acepto condiciones</span>
    </label>
  </section>

  <section class="card" id="lista">
    <h2 class="card-title">Lista</h2>
    <ul class="list">
      <li class="item">Elemento 1</li>
      <li class="item">Elemento 2</li>
      <li class="item">Elemento 3</li>
      <li class="item">Elemento 4</li>
    </ul>
  </section>

  <footer class="foot">
    <p>Fin de la práctica · vuelve arriba: <a href="#top">inicio</a></p>
  </footer>
</main>`}</code>
        </pre>

        <div className="callout">
          ✅ Si tu HTML es igual, podrás hacer todos los pasos sin problemas.
        </div>
      </section>

      {/* =========================
          PASO 1: BASE + HERENCIA
      ========================== */}
      <section className="card">
        <h2>Paso 1 · Base (etiquetas) y herencia</h2>

        <p>
          Escribe CSS usando selectores de <strong>etiqueta</strong> para definir una base:
          tipografía, color de texto y espaciado básico en párrafos y títulos.
        </p>

        <ul>
          <li>Tu <code>body</code> debe establecer la fuente y el color principal.</li>
          <li>Los <code>p</code> deben tener una separación coherente.</li>
          <li>Los <code>h1</code> y <code>h2</code> deben verse ordenados.</li>
        </ul>

        <div className="callout tip">
          Lo que debes comprobar: al poner el color en <code>body</code>, ¿por qué “baja” a casi todo?
          (pista: <strong>herencia</strong>).
        </div>
      </section>

      {/* =========================
          PASO 2: CLASES
      ========================== */}
      <section className="card">
        <h2>Paso 2 · Clases reutilizables</h2>

        <p>
          Crea estilos con <strong>clases</strong> para que la UI tenga forma:
        </p>

        <ul>
          <li>
            <code>.wrap</code> debe centrar el contenido y limitar el ancho.
          </li>
          <li>
            <code>.card</code> debe parecer una tarjeta (fondo, borde suave, padding y algo de sombra).
          </li>
          <li>
            <code>.hero</code> debe diferenciarse un poco del resto.
          </li>
        </ul>

        <div className="callout">
          💡 Regla pro: lo reutilizable casi siempre es <strong>clase</strong>, no etiqueta ni ID.
        </div>
      </section>

      {/* =========================
          PASO 3: COMBINADORES
      ========================== */}
      <section className="card">
        <h2>Paso 3 · Combinadores (descendiente y hijo directo)</h2>

        <p>
          Ahora vas a seleccionar enlaces dentro del menú usando combinadores.
        </p>

        <ol>
          <li>
            Aplica un estilo a <strong>todos</strong> los enlaces dentro de <code>.menu</code> (descendiente).
          </li>
          <li>
            Aplica un estilo extra solamente a los enlaces que sean <strong>hijos directos</strong> de{" "}
            <code>.menu</code> (hijo directo).
          </li>
        </ol>

        <div className="callout tip">
          Lo que debes poder explicar: diferencia entre <strong>espacio</strong> y <strong>&gt;</strong>.
        </div>
      </section>

      {/* =========================
          PASO 4: ATRIBUTOS
      ========================== */}
      <section className="card">
        <h2>Paso 4 · Selectores de atributos (sin tocar el HTML)</h2>

        <p>
          Usa selectores de atributos para distinguir enlaces e interfaces:
        </p>

        <ul>
          <li>
            Marca visualmente el enlace que apunta a un <strong>PDF</strong> (por ejemplo, el que termina en <code>.pdf</code>).
          </li>
          <li>
            Marca visualmente el enlace <strong>externo</strong> (por ejemplo, el que empieza por <code>https://</code>).
          </li>
          <li>
            Da un estilo diferente al botón con atributo <code>disabled</code>.
          </li>
        </ul>

        <div className="callout warn">
          No añadas clases nuevas: aquí el objetivo es aprender a seleccionar por <strong>atributos</strong>.
        </div>
      </section>

      {/* =========================
          PASO 5: PSEUDOCLASES
      ========================== */}
      <section className="card">
        <h2>Paso 5 · Pseudoclases fundamentales</h2>

        <p>
          Aplica estilos según el <strong>estado</strong> del elemento.
          Debes usar estas pseudoclases (todas):
        </p>

        <ul>
          <li>
            Enlaces: <code>:link</code>, <code>:visited</code>, <code>:hover</code>, <code>:active</code>
          </li>
          <li>
            Foco: <code>:focus</code> (en enlaces del menú y en el botón)
          </li>
          <li>
            Checkbox: <code>:checked</code> (debe cambiar el texto al marcarlo)
          </li>
          <li>
            Disabled: <code>:disabled</code> (ya lo aplicaste, aquí confirma que lo entiendes)
          </li>
        </ul>

        <div className="callout tip">
          Obligatorio: para enlaces respeta el orden <strong>LVHA</strong>:
          <code>:link</code> → <code>:visited</code> → <code>:hover</code> → <code>:active</code>.
        </div>

        <div className="callout">
          Pista de práctica: usa el teclado (TAB) para comprobar <code>:focus</code>.
        </div>
      </section>

      {/* =========================
          PASO 6: PSEUDOELEMENTOS
      ========================== */}
      <section className="card">
        <h2>Paso 6 · Pseudoelementos fundamentales</h2>

        <p>
          Añade detalles visuales sin tocar HTML usando estos pseudoelementos (todos):
        </p>

        <ul>
          <li>
            <code>::before</code> y <code>::after</code> (decora <code>.card-title</code>)
          </li>
          <li>
            <code>::first-letter</code> y <code>::first-line</code> (aplícalos sobre <code>.lead</code>)
          </li>
          <li>
            <code>::selection</code> (cambia el estilo al seleccionar texto con el ratón)
          </li>
        </ul>

        <div className="callout warn">
          Recuerda: <code>::before</code> y <code>::after</code> necesitan <code>content</code> para verse.
        </div>
      </section>

      {/* =========================
          PASO 7: CASCADA + ESPECIFICIDAD
      ========================== */}
      <section className="card">
        <h2>Paso 7 · Cascada y especificidad (el reto clave)</h2>

        <p>
          Vas a crear un conflicto real: <strong>tres reglas</strong> intentan cambiar el color de los párrafos.
          Debes lograr que:
        </p>

        <ul>
          <li>Todos los <code>p</code> tengan un color base (selector de etiqueta).</li>
          <li>Los <code>p</code> dentro de <code>.card</code> tengan otro color (clase + etiqueta).</li>
          <li>Solo los que tienen <code>.note</code> ganen por especificidad (selector más específico).</li>
        </ul>

        <div className="callout tip">
          Tu tarea no es solo hacerlo: debes poder explicar por qué gana una regla y no otra
          (pista: <strong>especificidad</strong> + <strong>orden en el CSS</strong>).
        </div>

        <div className="callout warn">
          Prohibido “arreglarlo” con <code>!important</code>. Aquí estamos entrenando cascada real.
        </div>
      </section>

      {/* =========================
          PASO 8: POSICIÓN
      ========================== */}
      <section className="card">
        <h2>Paso 8 · Pseudoclases de posición en la lista</h2>

        <p>
          En <code>.list</code> aplica estas pseudoclases:
        </p>

        <ul>
          <li><code>:first-child</code> para destacar el primero</li>
          <li><code>:last-child</code> para distinguir el último</li>
          <li><code>:nth-child()</code> para hacer un patrón (odd/even) y un elemento concreto (por ejemplo el 3º)</li>
        </ul>

        <div className="callout">
          Lo que debes comprobar: cambia <code>odd</code> por <code>even</code> y explica qué cambia y por qué.
        </div>
      </section>
      {/* ========================================
    AYUDA RÁPIDA · PROPIEDADES CSS PERMITIDAS
========================================= */}
<section className="card">
  <h2>Ayuda rápida: propiedades CSS que puedes usar</h2>

  <p>
    En esta práctica <strong>no se evalúa que sepas muchas propiedades CSS</strong>,
    sino que sepas <strong>seleccionar bien los elementos</strong>.
    Usa solo estas propiedades (son suficientes para todo el ejercicio).
  </p>

  <div className="table-wrap" tabIndex="0">
    <table className="table table-zebra">
      <caption>Propiedades CSS básicas permitidas en la práctica</caption>
      <thead>
        <tr>
          <th scope="col">Propiedad</th>
          <th scope="col">Para qué sirve</th>
          <th scope="col">Ejemplo simple</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">color</th>
          <td>Cambia el color del texto</td>
          <td><code>color: red;</code></td>
        </tr>

        <tr>
          <th scope="row">background</th>
          <td>Cambia el fondo del elemento</td>
          <td><code>background: #f1f5f9;</code></td>
        </tr>

        <tr>
          <th scope="row">border</th>
          <td>Añade un borde visible</td>
          <td><code>border: 1px solid black;</code></td>
        </tr>

        <tr>
          <th scope="row">padding</th>
          <td>Espacio interior del elemento</td>
          <td><code>padding: 0.5rem;</code></td>
        </tr>

        <tr>
          <th scope="row">margin</th>
          <td>Espacio exterior entre elementos</td>
          <td><code>margin: 0.5rem;</code></td>
        </tr>

       

        <tr>
          <th scope="row">text-decoration</th>
          <td>Subrayar o quitar subrayado</td>
          <td><code>text-decoration: none;</code></td>
        </tr>

        <tr>
          <th scope="row">outline</th>
          <td>Marcar el foco (accesibilidad)</td>
          <td><code>outline: 3px solid yellow;</code></td>
        </tr>

        <tr>
          <th scope="row">opacity</th>
          <td>Hace el elemento más claro u oscuro</td>
          <td><code>opacity: 0.5;</code></td>
        </tr>

        <tr>
          <th scope="row">cursor</th>
          <td>Cambia el cursor del ratón</td>
          <td><code>cursor: pointer;</code></td>
        </tr>

        <tr>
          <th scope="row">content</th>
          <td>
            Contenido de <code>::before</code> y <code>::after</code>
          </td>
          <td><code>content: "★";</code></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3">
            ✔️ Con estas propiedades puedes completar toda la práctica correctamente.
          </td>
        </tr>
      </tfoot>
    </table>
  </div>

  <div className="callout tip">
    Consejo: si un selector funciona, <strong>cualquier propiedad se aplicará</strong>.
    Aquí lo importante es <em>a qué</em> aplicas el estilo, no cuántas propiedades sabes.
  </div>

  <div className="callout warn">
    🚫 No uses propiedades que aún no hemos visto (como <code>font-size</code>,
    <code>position</code>, <code>flex</code>, etc.).  
    Esta práctica evalúa <strong>selectores, cascada y especificidad</strong>.
  </div>
</section>


      {/* =========================
          ENTREGA
      ========================== */}
      <section className="card">
        <h2>Entrega </h2>
        <p>Vamos por primera vez a usar gitHub. Colgarás el enlace de tu repositorio.</p>

        <ol>
          <li>
            Tu HTML es exactamente el del paso 0.
          </li>
          <li>
            Tu CSS usa: etiqueta, clase, ID, agrupación, combinadores, atributos, pseudoclases y pseudoelementos.
          </li>
          <li>
            Puedes explicar con palabras: <strong>herencia</strong>, <strong>cascada</strong> y <strong>especificidad</strong>.
          </li>
        </ol>

        <div className="callout tip">
          Si al final puedes explicar por qué un estilo se aplica (o no), has completado el tema con éxito.
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
