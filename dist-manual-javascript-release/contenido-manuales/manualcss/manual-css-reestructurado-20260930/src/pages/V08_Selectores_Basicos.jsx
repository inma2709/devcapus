import { useEffect, useMemo, useState } from "react";

export default function SelectoresBasicos() {
  useEffect(() => {
    document.title = "CSS · Selectores básicos";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "¿Cuál es la diferencia entre selector de clase y de etiqueta?", options: ["No hay diferencia", "El selector de etiqueta aplica a todos los elementos de ese tipo; el de clase solo a los que tienen esa clase", "La clase tiene más especificidad que el ID", "El selector de etiqueta va con punto"], correct: "El selector de etiqueta aplica a todos los elementos de ese tipo; el de clase solo a los que tienen esa clase", why: "p {} aplica a todos los <p>. .intro {} solo aplica a los elementos que tienen class='intro', sin importar su etiqueta." },
    { id: "q2", q: "¿Cuándo conviene usar selector de ID en lugar de clase?", options: ["Siempre que quieras más especificidad", "Cuando el elemento es único en la página y necesita identificación puntual", "Para estilos compartidos por varios elementos", "Para cualquier elemento de lista"], correct: "Cuando el elemento es único en la página y necesita identificación puntual", why: "Los IDs son únicos por página. Para estilos reutilizables siempre se prefieren clases. El ID tiene mayor especificidad y puede causar conflictos." },
    { id: "q3", q: "¿Qué selecciona .card .title?", options: ["El elemento que tiene a la vez clase 'card' y clase 'title'", "Cualquier elemento con clase 'title' dentro de un elemento con clase 'card'", "Solo el hijo directo con clase 'title' de .card", "Todos los .card del documento"], correct: "Cualquier elemento con clase 'title' dentro de un elemento con clase 'card'", why: "El espacio entre selectores es el combinador descendiente: selecciona .title en cualquier nivel de profundidad dentro de .card." },
    { id: "q4", q: "¿Qué selecciona [type='text']?", options: ["Solo los <input> de tipo texto", "Todos los elementos con atributo type", "Todos los elementos cuyo atributo type sea 'text'", "Solo los <textarea>"], correct: "Todos los elementos cuyo atributo type sea 'text'", why: "Los selectores de atributo [attr='valor'] seleccionan cualquier elemento con ese atributo y ese valor exacto, no solo inputs." },
    { id: "q5", q: "Si dos reglas CSS tienen la misma especificidad, ¿cuál prevalece?", options: ["La que aparece primero en el CSS", "La que aparece después en el CSS", "Siempre gana la clase sobre la etiqueta", "La que usa más propiedades"], correct: "La que aparece después en el CSS", why: "Cuando la especificidad es idéntica, la cascada aplica la última regla definida. El orden en el archivo importa." },
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
          HERO / INTRODUCCIÓN
      ========================== */}
      <section className="card hero">
        <p className="doc-kicker">CSS · Selectores</p>
        <h1>Selectores básicos: cómo une CSS el HTML</h1>
        <p className="doc-lead">
          Esta es una de las primeras ideas realmente importantes en CSS:
          <strong> el navegador no inventa qué elemento debe estilizar</strong>.
          Tú se lo indicas con un selector. Por eso, antes de memorizar muchos
          selectores, hay que entender bien <strong>cómo se relacionan HTML y CSS</strong>.
        </p>

        <div className="callout tip">
          Idea central del tema: <strong>HTML aporta la estructura</strong> y
          <strong> CSS apunta a esa estructura para aplicarle estilos</strong>.
        </div>
      </section>

      {/* =========================
          ÍNDICE
      ========================== */}
      <section className="doc-index">
        <h2>Índice del tema</h2>
        <ol>
          <li>
            <a href="#union-html-css">Cómo se unen HTML y CSS</a>
          </li>
          <li>
            <a href="#estructura-regla">Estructura de una regla CSS</a>
          </li>
          <li>
            <a href="#tres-selectores">Los tres selectores que debes dominar primero</a>
          </li>
          <li>
            <a href="#otros-selectores">Otros selectores básicos</a>
          </li>
          <li>
            <a href="#especificidad">Recordatorio de especificidad</a>
          </li>
          <li>
            <a href="#practica">Práctica guiada</a>
          </li>
        </ol>
      </section>

      {/* =========================
          CÓMO SE UNEN HTML Y CSS
      ========================== */}
      <section className="doc-section" id="union-html-css">
        <h2>1) Cómo se unen HTML y CSS</h2>

        <p>
          El alumno suele ver HTML y CSS como dos cosas separadas, pero en realidad
          funcionan juntas todo el tiempo:
        </p>

        <ul>
          <li>
            <strong>HTML</strong> crea los elementos: títulos, párrafos, menús,
            bloques, enlaces, botones.
          </li>
          <li>
            <strong>CSS</strong> busca esos elementos y les da estilo: color,
            tamaño, fondo, borde, separación, tipografía.
          </li>
        </ul>

        <div className="callout">
          CSS no trabaja “en el aire”. Siempre necesita un elemento del HTML al
          que poder apuntar.
        </div>

        <details className="dd" open>
          <summary>Ejemplo mínimo: un HTML y una regla CSS</summary>
          <div className="dd-body">
            <p>Observa esta relación directa:</p>

            <pre>
              <code>{`<h1>Título principal</h1>
<p>Este es un párrafo.</p>`}</code>
            </pre>

            <pre>
              <code>{`h1{
  color: blue;
}

p{
  color: #334155;
}`}</code>
            </pre>

            <p>
              En este ejemplo, CSS busca la etiqueta <code>h1</code> y la etiqueta
              <code> p</code> del HTML y les aplica estilos distintos.
            </p>

            <div className="callout tip">
              Traducción mental correcta:
              <br />
              <strong>
                “Busca este elemento del HTML y aplícale estas propiedades CSS”.
              </strong>
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Qué problema resuelve un selector</summary>
          <div className="dd-body">
            <p>
              En una página real puede haber muchos párrafos, varios enlaces,
              distintas tarjetas y diferentes zonas de contenido. El selector sirve
              para resolver esta pregunta:
            </p>

            <div className="callout">
              <strong>¿A qué elemento o grupo de elementos del HTML quiero aplicar este estilo?</strong>
            </div>

            <p>
              Sin selectores, CSS no sabría si quieres estilizar todos los párrafos,
              solo una tarjeta concreta o los enlaces que están dentro de un menú.
            </p>
          </div>
        </details>

        <figure className="media">
          <img
            src="/selectores.png"
            alt="Esquema visual de selectores CSS"
            width="900"
            height="420"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            El selector es la parte que apunta al HTML. El bloque de declaraciones
            indica qué estilos se aplican.
          </figcaption>
        </figure>
      </section>

      {/* =========================
          ESTRUCTURA DE LA REGLA
      ========================== */}
      <section className="doc-section" id="estructura-regla">
        <h2>2) Estructura de una regla CSS</h2>

        <details className="dd" open>
          <summary>1) La forma general de una regla CSS</summary>
          <div className="dd-body">
            <p>Toda regla CSS sigue siempre esta estructura:</p>

            <pre>
              <code>{`selector{
  propiedad: valor;
  propiedad: valor;
}`}</code>
            </pre>

            <ul>
              <li>
                <strong>Selector</strong>: indica a qué elemento o elementos del HTML
                se aplica la regla.
              </li>
              <li>
                <strong>Propiedad</strong>: el aspecto que quieres cambiar.
              </li>
              <li>
                <strong>Valor</strong>: el cambio concreto que aplicas.
              </li>
            </ul>

            <div className="callout tip">
              Fórmula mental útil:
              <strong> selector = a quién</strong> y
              <strong> declaraciones = qué le haces</strong>.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2) Error común: confundir selector y propiedad</summary>
          <div className="dd-body">
            <p>
              Un error muy frecuente al empezar es no distinguir entre la parte que
              selecciona y la parte que estiliza.
            </p>

            <pre>
              <code>{`/* ❌ Incorrecto */
color{
  red: true;
}`}</code>
            </pre>

            <pre>
              <code>{`/* ✅ Correcto */
p{
  color: red;
}`}</code>
            </pre>

            <div className="callout">
              <strong>color</strong> no es un selector. Es una propiedad.
              <br />
              <strong>p</strong> sí es un selector, porque apunta a elementos del HTML.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3) Cómo leer una regla CSS en voz alta</summary>
          <div className="dd-body">
            <p>
              Un buen hábito es leer las reglas como si estuvieras describiendo al
              navegador lo que debe hacer.
            </p>

            <pre>
              <code>{`p{
  color: #334155;
}`}</code>
            </pre>

            <p>
              Se lee así:
              <em> “A todos los párrafos, aplícales color gris azulado”.</em>
            </p>

            <div className="callout tip">
              Si sabes leer una regla con naturalidad, empiezas a entender CSS de verdad.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          TRES SELECTORES BÁSICOS
      ========================== */}
      <section className="doc-section" id="tres-selectores">
        <h2>3) Los tres selectores que debes dominar primero</h2>

        <p>
          Antes de introducir más variedad, aquí están los tres selectores que
          sostienen casi todo el aprendizaje inicial:
        </p>

        <ol>
          <li>Selector de etiqueta o categoría</li>
          <li>Selector de clase</li>
          <li>Selector de ID</li>
        </ol>

        <div className="callout tip">
          Si estos tres quedan claros, luego entenderás mucho mejor el resto.
        </div>

        <details className="dd" open>
          <summary>1) Selector de etiqueta o categoría</summary>
          <div className="dd-body">
            <p>
              Selecciona <strong>todas las etiquetas de un mismo tipo</strong>:
              <code> p</code>, <code>h1</code>, <code>button</code>, <code>ul</code>, etc.
            </p>

            <pre>
              <code>{`p{
  color: #334155;
}`}</code>
            </pre>

            <p>
              Esto significa: “todos los párrafos de la página tendrán este color”.
            </p>

            <pre>
              <code>{`<p>Primer párrafo</p>
<p>Segundo párrafo</p>
<p>Tercer párrafo</p>`}</code>
            </pre>

            <div className="callout">
              El selector de etiqueta es útil cuando quieres dar un estilo general
              a todos los elementos del mismo tipo.
            </div>

            <div className="callout warn">
              Ojo: es un selector amplio. Si lo usas, afectará a todos los elementos
              de esa etiqueta dentro del alcance de la regla.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2) Selector de clase</summary>
          <div className="dd-body">
            <p>
              El selector de clase empieza por <code>.</code> y selecciona cualquier
              elemento que tenga esa clase.
            </p>

            <pre>
              <code>{`.card{
  padding: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: .75rem;
}`}</code>
            </pre>

            <pre>
              <code>{`<div class="card">Tarjeta 1</div>
<div class="card">Tarjeta 2</div>
<section class="card">Tarjeta 3</section>`}</code>
            </pre>

            <p>
              Aquí la misma clase <code>card</code> se reutiliza en varios elementos.
              Eso es precisamente lo que hace tan importante a la clase en CSS.
            </p>

            <p>
              A diferencia del <code>id</code>, una <strong>clase sí puede repetirse</strong>
              tantas veces como haga falta. Por eso es la opción más común en proyectos
              reales: permite construir estilos reutilizables y coherentes.
            </p>

            <div className="callout tip">
              Regla muy útil:
              <strong> si un estilo se repite, normalmente debe ir en una clase</strong>.
            </div>

            <div className="callout">
              Una clase no describe un elemento HTML concreto, sino una función visual
              o semántica que puede repetirse.
            </div>
          </div>
        </details>

       <details className="dd">
  <summary>3) Selector de ID</summary>
  <div className="dd-body">
    <p>
      El selector de ID empieza por <code>#</code> y selecciona un elemento
      que tenga ese identificador concreto.
    </p>

    <pre>
      <code>{`#hero{
  padding: 2rem;
}`}</code>
    </pre>

    <pre>
      <code>{`<section id="hero">
  <h1>Zona principal</h1>
</section>`}</code>
    </pre>

    <p>
      El atributo <code>id</code> debe ser <strong>único</strong> dentro de la página.
      No puede haber dos elementos con el mismo ID.
    </p>

    <p>
      Esto significa que el ID sirve para identificar un elemento muy concreto,
      no para estilos repetidos.
    </p>

    <details className="dd">
      <summary>¿Qué pasa si repites un ID?</summary>
      <div className="dd-body">
        <p>
          Es una duda muy habitual: si pones el mismo <code>id</code> en varios elementos,
          <strong> CSS sí aplicará los estilos a todos</strong>.
        </p>

        <pre>
          <code>{`<div id="card">Uno</div>
<div id="card">Dos</div>`}</code>
        </pre>

        <pre>
          <code>{`#card{
  border: 1px solid black;
}`}</code>
        </pre>

        <p>
          En este caso, los dos elementos tendrán borde. Entonces, ¿por qué no usarlo?
        </p>

        <p>
          Porque rompe la lógica del HTML y genera problemas importantes:
        </p>

        <ul>
          <li>
            <strong>JavaScript:</strong> <code>getElementById</code> solo devuelve un elemento.
          </li>
          <li>
            <strong>Anclas:</strong> los enlaces <code>#id</code> no funcionan correctamente si hay varios.
          </li>
          <li>
            <strong>Accesibilidad:</strong> herramientas como lectores de pantalla esperan IDs únicos.
          </li>
          <li>
            <strong>Mantenimiento:</strong> el código se vuelve confuso y difícil de escalar.
          </li>
        </ul>

        <div className="callout">
          El problema no es que CSS falle, sino que el documento deja de tener una estructura coherente.
        </div>

        <p>
          Cuando necesitas aplicar el mismo estilo a varios elementos, la solución correcta es usar
          <code> class</code>.
        </p>

        <pre>
          <code>{`<div class="card">Uno</div>
<div class="card">Dos</div>`}</code>
        </pre>

        <pre>
          <code>{`.card{
  border: 1px solid black;
}`}</code>
        </pre>
      </div>
    </details>

    <div className="callout warn">
      En CSS moderno, el ID se usa poco para estilos porque tiene mucha
      especificidad. Es mejor reservarlo para anclas, accesibilidad o casos
      muy concretos, y usar clases para la mayor parte del estilo.
    </div>
  </div>
</details>

       <details className="dd">
  <summary>4) Comparación clara: etiqueta, clase e ID</summary>
  <div className="dd-body">
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Selector</th>
            <th>Sintaxis</th>
            <th>Qué selecciona</th>
            <th>Cuándo usarlo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Etiqueta</td>
            <td><code>p</code></td>
            <td>Todos los elementos de ese tipo</td>
            <td>Estilos generales</td>
          </tr>
          <tr>
            <td>Clase</td>
            <td><code>.card</code></td>
            <td>Todos los elementos con esa clase</td>
            <td>Estilos reutilizables</td>
          </tr>
          <tr>
            <td>ID</td>
            <td><code>#hero</code></td>
            <td>Un único elemento (conceptualmente)</td>
            <td>Casos concretos y excepcionales</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="callout tip">
      Primera regla práctica del manual:
      <strong> piensa primero en clases</strong>. Usa etiqueta para base
      general e ID solo cuando realmente lo necesites.
    </div>

    <div className="callout warn">
      <strong>Recordatorio clave: especificidad</strong>
      <p style={{ marginTop: ".5rem" }}>
        No todos los selectores tienen la misma “fuerza”. Cuando varias reglas afectan al mismo elemento:
      </p>
      <ul>
        <li><strong>ID (#)</strong> → más fuerte</li>
        <li><strong>Clase (.)</strong> → nivel intermedio</li>
        <li><strong>Etiqueta</strong> → más débil</li>
      </ul>

      <pre>
        <code>{`p{ color: green; }
.card{ color: blue; }
#hero{ color: red; }`}</code>
      </pre>

      <p>
        Si un elemento cumple las tres condiciones, el color será <strong>rojo</strong>,
        porque el selector de <code>ID</code> tiene mayor especificidad.
      </p>

      <p>
        Si dos reglas tienen la misma fuerza, gana la que esté <strong>más abajo</strong> en el CSS.
      </p>
    </div>
  </div>
</details>
      </section>

      {/* =========================
          OTROS SELECTORES
      ========================== */}
      <section className="doc-section" id="otros-selectores">
        <h2>4) Otros selectores básicos que debes conocer después</h2>

        <p>
          Una vez entendidos etiqueta, clase e ID, ya tiene sentido ampliar el mapa.
          Ahora sí podemos introducir otros selectores relevantes sin mezclarlo todo
          desde el principio.
        </p>

        <details className="dd" open>
          <summary>1) Selector universal (*)</summary>
          <div className="dd-body">
            <p>
              El selector universal selecciona <strong>todos los elementos</strong>.
            </p>

            <pre>
              <code>{`*{
  box-sizing: border-box;
}`}</code>
            </pre>

            <div className="callout tip">
              Se usa a menudo para ajustes globales, como el box model.
            </div>

            <div className="callout warn">
              No conviene abusar de él para estilos pesados porque afecta a toda la página.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2) Selector por agrupación (,)</summary>
          <div className="dd-body">
            <p>
              Permite aplicar el mismo bloque de estilos a varios selectores separados por coma.
            </p>

            <pre>
              <code>{`h1, h2, h3{
  letter-spacing: .2px;
}`}</code>
            </pre>

            <div className="callout">
              Sirve para evitar duplicar reglas cuando varios elementos comparten estilo.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3) Selector descendiente (espacio)</summary>
          <div className="dd-body">
            <p>
              Selecciona elementos que estén <strong>dentro</strong> de otros.
            </p>

            <pre>
              <code>{`.menu a{
  text-decoration: none;
}`}</code>
            </pre>

            <p>
              Se lee así:
              <em> “Selecciona todos los enlaces que estén dentro de .menu”.</em>
            </p>

            <div className="callout tip">
              Este selector ya introduce una idea importante: CSS no solo mira el
              elemento, también puede mirar su posición dentro del HTML.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>4) Selector compuesto: varias condiciones a la vez</summary>
          <div className="dd-body">
            <p>
              Un selector puede exigir más de una condición al mismo tiempo.
            </p>

            <pre>
              <code>{`.menu a.active{
  border-bottom: 2px solid currentColor;
}`}</code>
            </pre>

            <p>Esto significa:</p>
            <ol>
              <li>Busca enlaces <code>a</code></li>
              <li>Que estén dentro de <code>.menu</code></li>
              <li>Y que además tengan la clase <code>active</code></li>
            </ol>

            <div className="callout">
              Aquí ya no hablamos de un selector simple, sino de un selector más preciso.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>5) Qué otras partes puede tener un selector</summary>
          <div className="dd-body">
            <p>
              Más adelante estudiarás otros tipos de selectores y mecanismos:
            </p>

            <ul>
              <li>
                <strong>Combinadores</strong>: espacio, <code>&gt;</code>, <code>+</code>
              </li>
              <li>
                <strong>Pseudoclases</strong>: <code>:hover</code>, <code>:first-child</code>
              </li>
              <li>
                <strong>Pseudoelementos</strong>: <code>::before</code>, <code>::after</code>
              </li>
              <li>
                <strong>Selectores de atributos</strong>
              </li>
            </ul>

            <div className="callout tip">
              No hace falta dominar todo hoy. Lo importante en esta lección es salir
              sabiendo con seguridad cómo se enlaza HTML y CSS y cómo funcionan
              etiqueta, clase e ID.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>6) Cómo se lee un selector más complejo</summary>
          <div className="dd-body">
            <p>
              Un buen hábito es verbalizar el selector para comprobar que entiendes
              lo que pide.
            </p>

            <pre>
              <code>{`.menu a.active{
  color: red;
}`}</code>
            </pre>

            <p>
              Lectura correcta:
              <em>
                {" "}
                “Selecciona los enlaces que están dentro de .menu y que además tienen la clase active”.
              </em>
            </p>

            <div className="callout">
              Si no puedes leer el selector con palabras normales, probablemente
              aún no lo entiendes del todo o es demasiado complejo para ese momento.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          ESPECIFICIDAD
      ========================== */}
      <section className="doc-section" id="especificidad">
        <h2>5) Recordatorio importante: especificidad</h2>

        <p>
          Cuando varias reglas apuntan al mismo elemento, el navegador decide cuál
          gana usando la <strong>cascada</strong> y la <strong>especificidad</strong>.
        </p>

        <div className="callout tip">
          Regla rápida:
          <strong> ID &gt; clase &gt; etiqueta</strong>.
          <br />
          Si empatan, normalmente gana la regla que está más abajo en el archivo CSS.
        </div>

        <details className="dd" open>
          <summary>Mini ejemplo: tres reglas en conflicto</summary>
          <div className="dd-body">
            <pre>
              <code>{`p{ color: green; }       /* etiqueta */
.note{ color: blue; }    /* clase */
#intro{ color: red; }    /* ID */`}</code>
            </pre>

            <p>
              Si un elemento tiene <code>id="intro"</code> y <code>class="note"</code>,
              el texto será <strong>rojo</strong>, porque el selector de ID es más específico.
            </p>
          </div>
        </details>

        <div className="callout warn">
          Consejo profesional: evita pelearte con la especificidad. Prioriza clases
          y estructura el CSS con lógica para no depender de IDs ni de selectores
          excesivamente largos.
        </div>
      </section>

      {/* =========================
          RECURSOS
      ========================== */}
      <section className="doc-section">
        <h2>6) Recursos de apoyo</h2>

        <p>
          Úsalos como refuerzo después de trabajar la explicación y la práctica:
        </p>

        <ul>
          <li>
            📘 Documentación:
            {" "}
            <a
              href="https://www.w3schools.com/css/css_selectors.asp"
              target="_blank"
              rel="noreferrer"
            >
              CSS Selectors
            </a>
          </li>
          <li>
            🎥 Vídeo:
            {" "}
            <a
              href="https://www.youtube.com/watch?v=o4srpChv-eg"
              target="_blank"
              rel="noreferrer"
            >
              Selectores básicos en CSS
            </a>
          </li>
        </ul>

        <div className="callout">
          Método recomendado: abre la documentación en una pestaña y el editor en otra.
          Prueba cada selector y escribe con tus palabras qué selecciona.
        </div>

        <div className="media" style={{ maxWidth: 900 }}>
          <iframe
            width="900"
            height="506"
            src="https://www.youtube.com/embed/o4srpChv-eg"
            title="Vídeo: selectores básicos en CSS"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: "0.75rem", width: "100%" }}
          />
        </div>
      </section>

      {/* =========================
          PRÁCTICA
      ========================== */}
      <section className="doc-section" id="practica">
        <h2>7) Práctica guiada</h2>

        <p>
          Vamos a practicar en el orden correcto: primero etiqueta, clase e ID;
          después descendiente y selector compuesto.
        </p>

        <details className="dd" open>
          <summary>HTML para practicar</summary>
          <div className="dd-body">
            <pre>
              <code>{`<main>
  <h1 id="intro" class="title">Título principal</h1>

  <nav class="menu">
    <a href="#">Inicio</a>
    <a href="#" class="active">Cursos</a>
    <a href="#">Contacto</a>
  </nav>

  <section class="card-demo">
    <h2 class="subtitle">Tarjeta</h2>
    <p class="note">Un párrafo dentro de una tarjeta.</p>
  </section>

  <p class="note">Un párrafo fuera de la tarjeta.</p>
</main>`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>CSS para practicar, paso a paso</summary>
          <div className="dd-body">
            <pre>
              <code>{`/* 1) Etiqueta: afecta a todos los párrafos */
p{
  color: #334155;
}

/* 2) Clase: afecta a todos los elementos con class="note" */
.note{
  font-weight: 700;
}

/* 3) ID: afecta solo al elemento con id="intro" */
#intro{
  text-transform: uppercase;
}

/* 4) Descendiente: enlaces dentro de .menu */
.menu a{
  text-decoration: none;
  padding: .25rem .5rem;
  display: inline-block;
}

/* 5) Selector compuesto: enlaces activos dentro del menú */
.menu a.active{
  border-bottom: 2px solid currentColor;
}`}</code>
            </pre>

            <div className="callout tip">
              Método correcto de aprendizaje:
              <strong> comenta una regla, recarga, observa y explica qué ha cambiado</strong>.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Qué debes comprobar en esta práctica</summary>
          <div className="dd-body">
            <ol>
              <li>Que todos los <code>p</code> cambian con el selector de etiqueta.</li>
              <li>
                Que la clase <code>.note</code> afecta tanto al párrafo de dentro
                como al de fuera de la tarjeta.
              </li>
              <li>
                Que el ID <code>#intro</code> solo afecta al título principal.
              </li>
              <li>
                Que <code>.menu a</code> solo estiliza enlaces del menú, no cualquier
                enlace de la página.
              </li>
              <li>
                Que <code>.menu a.active</code> añade un estilo extra solo al enlace activo.
              </li>
            </ol>
          </div>
        </details>

        <details className="dd">
          <summary>Retos de ampliación</summary>
          <div className="dd-body">
            <ol>
              <li>
                Cambia el selector <code>p</code> por <code>.card-demo p</code> y
                explica qué párrafo deja de cambiar.
              </li>
              <li>
                Añade la clase <code>note</code> a un enlace del menú. Explica qué
                estilos recibe y por qué.
              </li>
              <li>
                Haz que solo el <code>h2</code> de la tarjeta tenga otro color usando
                una clase.
              </li>
              <li>
                Escribe dos reglas que se contradigan y explica cuál gana por
                especificidad o por orden.
              </li>
              <li>
                Crea otro contenedor con clase <code>card-demo</code> y comprueba
                cómo se reutiliza el estilo.
              </li>
              <li>
                Crea una segunda clase, por ejemplo <code>card-demo grande</code>,
                y haz que el texto sea 3px mayor que en la tarjeta normal.
              </li>
            </ol>

            <div className="callout tip">
              El objetivo no es solo que funcione, sino que puedas decir con claridad
              <strong> por qué se aplica cada regla</strong>.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CIERRE
      ========================== */}
      <section className="card">
        <h2>Cierre</h2>
        <p>
          En esta lección no se trata de memorizar muchos selectores, sino de fijar
          una idea estructural:
          <strong> CSS se conecta con HTML a través de selectores</strong>.
        </p>

        <p>
          Si entiendes bien <strong>etiqueta</strong>, <strong>clase</strong> e
          <strong> ID</strong>, el resto ya no se estudia como una lista suelta,
          sino como una ampliación lógica de esa base.
        </p>

        <div className="callout tip">
          La mejor señal de que lo has entendido es esta: eres capaz de mirar un HTML
          y decidir con criterio si te conviene usar una etiqueta, una clase o un ID.
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