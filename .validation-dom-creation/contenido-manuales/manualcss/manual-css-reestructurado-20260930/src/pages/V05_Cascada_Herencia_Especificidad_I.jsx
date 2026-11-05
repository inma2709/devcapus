import { Link } from "react-router-dom";
import Quiz from "../components/Quiz";

export default function V05_Cascada_Herencia_Especificidad_I() {
  return (
    <div className="doc">
      {/* HERO */}
      <section className="card hero">
        <p className="doc-kicker">Fundamentos</p>
        <h1>Cascada, herencia y especificidad</h1>
        <p className="doc-lead">
          CSS no aplica estilos al azar. Cada vez que el navegador “pinta” una
          página, sigue reglas muy precisas para decidir{" "}
          <strong>qué estilos se aplican</strong>, cuáles se <strong>heredan</strong>{" "}
          y cuáles se <strong>descartan</strong>.
        </p>
           <figure className="media">
          <img
            src="/cascada.png"
            alt="Fundamentos de CSS · Manual CSS"
            width="700"
            height="320"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Fundamentos de CSS · Herencia,cascada y especificidad.
          </figcaption>
        </figure>

       
      </section>

      {/* MAPA DE CONCEPTOS (PRIMERO CONCEPTOS CLAROS) */}
      <section className="card">
        <h2>Mapa del tema: 3 conceptos que explican el 80% de los “no funciona”</h2>

        
       <div className="card" id="video-fundamentos-css">
  <h3>Vídeo: Fundamentos de CSS — entender antes de memorizar</h3>

  <p>
    En este vídeo vamos a sentar las <strong>bases reales de CSS</strong>. No se trata
    de aprender propiedades sueltas, sino de entender <strong>cómo piensa el navegador</strong>
    cuando aplica estilos: a qué elementos se aplican, por qué a veces un estilo no
    funciona y cómo razonar los cambios.
  </p>

  <p>
    Este contenido es especialmente importante porque todo lo que veremos después
    (box model, <code>display</code>, <code>position</code>, Flexbox, Grid…) se apoya
    directamente en estos fundamentos.
  </p>

  <div className="callout tip">
    Objetivo del vídeo: que empieces a ver CSS como un sistema lógico de reglas y no
    como una lista de propiedades para memorizar.
  </div>

  <h4>Qué vas a aprender en este vídeo</h4>
  <ul>
    <li>
      Qué es CSS y cuál es su función dentro del desarrollo web.
    </li>
    <li>
      Cómo se conecta CSS con HTML (hoja externa, <code>&lt;style&gt;</code> y estilos
      en línea).
    </li>
    <li>
      Qué es un <strong>selector</strong> y por qué es tan importante “a quién” aplicas
      un estilo.
    </li>
    <li>
      Primer contacto con propiedades básicas: color, tipografía, fondo, bordes y
      espaciado.
    </li>
    <li>
      Errores típicos de principiante: escribir CSS correcto pero no ver cambios
      visibles.
    </li>
  </ul>

  <div className="callout warn">
    Consejo de estudio: no veas el vídeo del tirón. Pausa, prueba cada ejemplo y
    pregúntate siempre: <strong>¿qué elemento estoy seleccionando y por qué?</strong>
  </div>

  {/* VIDEO EMBEBIDO */}
  <div className="media" style={{ maxWidth: 900 }}>
    <iframe
      width="900"
      height="506"
      src="https://www.youtube.com/embed/kvYoOCzJwMc"
      title="Fundamentos de CSS"
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ borderRadius: "0.75rem", width: "100%" }}
    />
  </div>

  <h4>Cómo aprovechar este vídeo</h4>
  <ol>
    <li>
      Mira el vídeo con el código abierto en tu editor o en CodePen.
    </li>
    <li>
      Reproduce cada ejemplo cambiando solo <strong>una cosa cada vez</strong>.
    </li>
    <li>
      Intenta explicar en voz alta qué ha cambiado y por qué.
    </li>
  </ol>

  <div className="callout">
    Idea clave para llevarte de este vídeo:
    <strong>
      CSS no es magia: es selección + reglas + flujo del documento.
    </strong>
  </div>
</div>


        <p>
          Cuando un estilo no se aplica como esperas, casi siempre se debe a
          uno (o varios) de estos tres conceptos:
        </p>

        <ul>
          <li>
            <strong>Cascada</strong>: qué regla “gana” cuando varias compiten
          </li>
          <li>
            <strong>Herencia</strong>: qué estilos pasan de padres a hijos
          </li>
          <li>
            <strong>Especificidad</strong>: qué selector es más “fuerte”
          </li>
        </ul>

        <div className="callout tip">
          Objetivo del tema: que puedas explicar <strong>por qué</strong> un estilo
          se aplica (o no) sin recurrir a parches ni a “probar cosas”.
        </div>
      </section>

      {/* INTRO A SELECTORES (MINI) */}
      <details className="dd" open>
        <summary>Mini-introducción a los selectores (para entender el tema)</summary>
        <div className="dd-body">
          <p>
            Para hablar de cascada y especificidad, necesitas una idea básica:
            un <strong>selector</strong> es la parte de la regla CSS que indica
            <em> qué elementos</em> se van a estilizar.
          </p>

          <pre>
            <code>{`/* selector */  /* declaración */
p {              color: red; 
}`}</code>
          </pre>

          <p>Ejemplos típicos:</p>
          <ul>
            <li>
              <code>p</code> → selecciona todos los párrafos
            </li>
            <li>
              <code>.card</code> → selecciona elementos con la clase <code>card</code>
            </li>
            <li>
              <code>#header</code> → selecciona el elemento con id <code>header</code>
            </li>
            <li>
              <code>.card p</code> → selecciona <code>p</code> dentro de <code>.card</code>
            </li>
          </ul>

          <div className="callout">
            La especificidad depende del selector: no “pesan” lo mismo un{" "}
            <code>p</code>, una clase o un id.
          </div>
        </div>
      </details>

      {/* RELACIÓN HTML – CSS */}
      <section className="card">
        <h2>HTML y CSS: la estructura importa</h2>
        <p>
          HTML define una estructura jerárquica (padres e hijos). CSS se apoya en
          esa estructura para aplicar estilos y para que algunos de ellos se
          <strong>hereden</strong>.
        </p>

        <pre>
          <code>{`<main>
  <section class="article">
    <h1>Título</h1>
    <p>Texto</p>
  </section>
</main>`}</code>
        </pre>

        <div className="callout tip">
          Si entiendes el árbol HTML, entenderás mejor por qué heredan estilos
          y por qué ciertos selectores “ganan”.
        </div>
      </section>

      {/* HERENCIA (DESARROLLA CONCEPTO) */}
      <section className="card">
        <h2>1) Herencia: estilos que bajan de padres a hijos</h2>

        <p>
          La <strong>herencia</strong> es el mecanismo por el cual algunas
          propiedades definidas en un elemento padre pasan a sus elementos hijos.
        </p>

        <pre>
          <code>{`/* CSS */
body{
  color: #334155;
  font-family: system-ui, Arial, sans-serif;
}`}</code>
        </pre>

        <p>
          En este caso, el texto dentro del <code>&lt;body&gt;</code> heredará el
          color y la tipografía, salvo que una regla más específica los cambie.
        </p>

        <details className="dd" open>
          <summary>Propiedades que suelen heredarse</summary>
          <div className="dd-body">
            <ul>
              <li><code>color</code></li>
              <li><code>font-family</code></li>
              <li><code>font-size</code></li>
              <li><code>line-height</code></li>
              <li><code>text-align</code></li>
            </ul>

            <div className="callout tip">
              La herencia ayuda a no repetir: define “bases” arriba y deja que el
              contenido las herede.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Propiedades que normalmente NO se heredan</summary>
          <div className="dd-body">
            <ul>
              <li><code>margin</code></li>
              <li><code>padding</code></li>
              <li><code>border</code></li>
              <li><code>background</code></li>
              <li><code>width</code> / <code>height</code></li>
            </ul>

            <div className="callout warn">
              Error típico: “He puesto un fondo en el padre, ¿por qué el hijo no lo hereda?”  
              Porque <code>background</code> no se hereda normalmente.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Herencia vs regla directa</summary>
          <div className="dd-body">
            <p>
              La herencia funciona mientras el hijo no tenga una regla directa
              para esa propiedad.
            </p>

            <pre>
              <code>{`/* CSS */
body{ color: purple; }
p{ color: orange; }`}</code>
            </pre>

            <div className="callout">
              El <code>p</code> será naranja: una regla directa suele ganar frente a lo heredado.
            </div>
          </div>
        </details>
      </section>

      {/* CASCADA (DESARROLLA CONCEPTO) */}
      <section className="card">
        <h2>2) Cascada: cuando varias reglas compiten</h2>

        <p>
          La <strong>cascada</strong> es el sistema que usa CSS para decidir qué
          regla se aplica cuando varias afectan al mismo elemento y a la misma
          propiedad.
        </p>

        <p>Cuando hay conflicto, el navegador compara (en este orden):</p>
        <ol>
          <li><strong>Origen</strong> del estilo (externo, interno, inline)</li>
          <li><strong>Especificidad</strong> del selector</li>
          <li><strong>Orden</strong> (si empatan, gana la última regla)</li>
        </ol>

        <div className="callout tip">
          Si dos reglas “empatan”, no decide al azar: decide por orden.
        </div>

        <details className="dd" open>
          <summary>Ejemplo: misma especificidad, gana la última</summary>
          <div className="dd-body">
            <pre>
              <code>{`p{ color: blue; }
p{ color: red; } /* gana esta */`}</code>
            </pre>
            <p>
              Ambas reglas tienen la misma especificidad (<code>p</code>).  
              Gana la segunda por aparecer después.
            </p>
          </div>
        </details>

        <details className="dd">
          <summary>Ejemplo: origen del estilo (externo vs interno vs inline)</summary>
          <div className="dd-body">
            <pre>
              <code>{`<!-- HTML -->
<head>
  <link rel="stylesheet" href="styles.css" />
  <style>
    p{ color: red; }
  </style>
</head>
<body>
  <p style="color: blue;">Texto</p>
</body>`}</code>
            </pre>

            <div className="callout">
              Si compiten por la misma propiedad, el inline suele ganar por origen.
            </div>
          </div>
        </details>
      </section>

      {/* ESPECIFICIDAD (DESARROLLA CONCEPTO) */}
      <section className="card">
        <h2>3) Especificidad: la fuerza real de los selectores</h2>

        <p>
          La <strong>especificidad</strong> es el mecanismo que usa el navegador
          para decidir qué selector es más fuerte cuando dos reglas compiten.
        </p>

      <details className="dd" open>
    <summary>Jerarquía y especificidad en CSS (quién gana y por qué)</summary>
     <figure className="media">
        <img
          src="/especificidad.png"
          alt="Especificidad de selectores CSS"
          width="700"
          height="520"
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          Manual de CSS creado por Inma Contreras (@inmaco) para aprender CSS
          desde cero
        </figcaption>
      </figure>

    <div className="dd-body">

      <p>
        Cuando dos reglas CSS intentan aplicar estilos al mismo elemento y a la misma
        propiedad (por ejemplo dos <code>color</code> distintos),
        el navegador debe decidir cuál usar.
      </p>

      <div className="callout tip">
        Regla clave: <strong>gana el selector con mayor especificidad</strong>.
        Si empatan, gana el que aparece más abajo en el archivo CSS.
      </div>

      <h3>¿Qué es la especificidad?</h3>

      <p>
        La especificidad es una especie de “peso” que tiene cada selector.
        Cuanto más concreto es el selector, más peso tiene y más difícil es
        sobreescribirlo.
      </p>

      <h3>Orden de peso (de menor a mayor)</h3>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Tipo de selector</th>
              <th>Ejemplo</th>
              <th>Nivel de peso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Selector de tipo (etiqueta)</td>
              <td><code>p</code>, <code>h1</code>, <code>section</code></td>
              <td>Bajo</td>
            </tr>
            <tr>
              <td>Clase</td>
              <td><code>.card</code>, <code>.btn</code></td>
              <td>Medio</td>
            </tr>
            <tr>
              <td>ID</td>
              <td><code>#header</code></td>
              <td>Alto</td>
            </tr>
            <tr>
              <td>Estilo inline</td>
              <td><code>style="color:red"</code></td>
              <td>Muy alto</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Ejemplo práctico</h3>

      <pre>
        <code>{`p { color: blue; }
.card { color: green; }
#header { color: red; }`}</code>
      </pre>

      <pre>
        <code>{`<p id="header" class="card">Texto</p>`}</code>
      </pre>

      <p>
        ¿Qué color gana? <strong>Rojo</strong>, porque el selector por ID
        tiene mayor especificidad que la clase y que la etiqueta.
      </p>

      <h3>Importante: la especificidad se acumula</h3>

      <pre>
        <code>{`.card p { color: orange; }
p { color: blue; }`}</code>
      </pre>

      <p>
        En este caso, <code>.card p</code> es más específico que <code>p</code>,
        porque combina clase + etiqueta.
      </p>

      <div className="callout warn">
        Error típico: usar IDs para todo.
        Después es muy difícil sobreescribirlos sin aumentar aún más la especificidad.
      </div>

      <h3>Si empatan… gana el que está más abajo</h3>

      <pre>
        <code>{`.card { color: green; }
.card { color: black; }`}</code>
      </pre>

      <p>
        Gana <strong>black</strong> porque aparece después.
        Esto forma parte del concepto de <strong>cascada</strong>.
      </p>

      <div className="callout">
        Frase para memorizar:
        <strong> CSS es: especificidad + orden en la cascada.</strong>
      </div>

    </div>
  </details>
        <details className="dd" open>
          <summary>Ejemplo: una clase gana a un selector de tipo</summary>
          <div className="dd-body">
            <pre>
              <code>{`/* HTML */
<article class="article">
  <p>Texto</p>
</article>

/* CSS */
p{ color: blue; }
.article p{ color: green; } /* gana */`}</code>
            </pre>

            <div className="callout">
              <code>.article p</code> gana porque incluye una clase (más específico).
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Ejemplo: un id gana a una clase</summary>
          <div className="dd-body">
            <pre>
              <code>{`/* HTML */
<section id="principal" class="article">
  <p>Texto</p>
</section>

/* CSS */
.article p{ color: green; }
#principal p{ color: red; } /* gana */`}</code>
            </pre>

            <div className="callout warn">
              Usar muchos <code>id</code> para estilos suele dificultar el mantenimiento.
              En este manual aprenderás a evitarlos salvo necesidad.
            </div>
          </div>
        </details>
      </section>
      <h3>Cómo se calcula realmente la especificidad</h3>

<p>
  La especificidad no es solo “baja, media o alta”. En realidad se calcula
  como una combinación numérica en tres niveles:
</p>

<div className="callout tip">
  Se representa como: <strong>(IDs, clases, etiquetas)</strong>
</div>

<div className="table-wrap">
  <table className="table">
    <thead>
      <tr>
        <th>Selector</th>
        <th>Especificidad</th>
        <th>Explicación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>p</code></td>
        <td><strong>(0,0,1)</strong></td>
        <td>1 etiqueta</td>
      </tr>
      <tr>
        <td><code>.card</code></td>
        <td><strong>(0,1,0)</strong></td>
        <td>1 clase</td>
      </tr>
      <tr>
        <td><code>#header</code></td>
        <td><strong>(1,0,0)</strong></td>
        <td>1 ID</td>
      </tr>
      <tr>
        <td><code>.card p</code></td>
        <td><strong>(0,1,1)</strong></td>
        <td>1 clase + 1 etiqueta</td>
      </tr>
      <tr>
        <td><code>.article h1</code></td>
        <td><strong>(0,1,1)</strong></td>
        <td>1 clase + 1 etiqueta</td>
      </tr>
      <tr>
        <td><code>.article .title</code></td>
        <td><strong>(0,2,0)</strong></td>
        <td>2 clases</td>
      </tr>
      <tr>
        <td><code>#header .card p</code></td>
        <td><strong>(1,1,1)</strong></td>
        <td>ID + clase + etiqueta</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Cómo interpretar estos números</h3>

<p>
  No es un número decimal. Se compara por bloques de izquierda a derecha:
</p>

<ul>
  <li>Primero los <strong>IDs</strong></li>
  <li>Si empatan, se comparan las <strong>clases</strong></li>
  <li>Si siguen empatando, las <strong>etiquetas</strong></li>
</ul>

<div className="callout warn">
  <strong>(1,0,0)</strong> SIEMPRE gana a <strong>(0,999,999)</strong>.
  El ID domina completamente.
</div>

<figure className="media">
          <img
            src="/especificidades.png"
            alt="Fundamentos de CSS · Manual CSS"
            width="700"
            height="320"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Fundamentos de CSS · Herencia,cascada y especificidad.
          </figcaption>
        </figure>

      {/* RELACIÓN ENTRE LOS 3 */}
      <section className="card">
        <h2>Cómo se relacionan los tres (modelo mental)</h2>

        <ul>
          <li>
            <strong>Herencia</strong>: te “llegan” valores desde el padre
          </li>
          <li>
            <strong>Cascada</strong>: compiten reglas que afectan al elemento
          </li>
          <li>
            <strong>Especificidad</strong>: decide quién gana el conflicto
          </li>
        </ul>

        <div className="callout tip">
          Cuando algo no se ve como esperas, revisa:  
          <strong>¿se hereda?</strong> → <strong>¿lo pisa otra regla?</strong> →{" "}
          <strong>¿es más específica?</strong>
        </div>
      </section>

      {/* DOCUMENTACIÓN */}
      <section className="card">
        <h2>Documentación recomendada</h2>

        <p>
          Para reforzar lo que acabas de estudiar, esta guía de MDN explica con
          ejemplos cómo CSS maneja conflictos entre reglas:
        </p>

        <div className="doc-link-card">
          <a
            href="https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts"
            target="_blank"
            rel="noreferrer"
          >
            📘 MDN — Manejo de conflictos entre reglas CSS
          </a>
        </div>

        <div className="callout">
          Lectura recomendada: entiende “qué gana y por qué” con ejemplos reales.
        </div>
      </section>

      {/* VÍDEO */}
      <section className="resource-section resource-videos">
        <header className="resource-section__head">
          <h2 className="resource-section__title">
            Vídeo recomendado: cascada y especificidad
          </h2>
          <p className="resource-section__lead">
            Si quieres ver estos conceptos con ejemplos visuales paso a paso,
            este vídeo te ayudará a fijar ideas: por qué unas reglas se aplican y
            otras quedan anuladas.
          </p>
        </header>

        <div className="resource-grid">
          <article className="resource-card is-featured">
            <div className="resource-card__media">
              <iframe
                className="media-video"
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/Qp8YQnSbt6k"
                title="Cascada y especificidad en CSS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="resource-card__body">
              <p className="resource-card__kicker">CSS · Fundamentos</p>
              <h3 className="resource-card__name">
                Cómo funciona la cascada y la especificidad en CSS
              </h3>
              <p className="resource-card__desc">
                Verás conflictos reales, cómo se resuelven y qué pistas debes buscar
                cuando “no se aplica” un estilo.
              </p>
              <p className="resource-card__meta">
                Ideal para reforzar: cascada, orden, especificidad y primeros conflictos.
              </p>
              <div className="resource-card__actions">
                <a
                  className="btn btn-primary"
                  href="https://youtu.be/Qp8YQnSbt6k"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver en YouTube
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* EJEMPLOS EN CODEPEN (PROPONER) */}
      <section className="card">
  <h2>Prueba en CodePen (ejemplos, no ejercicios)</h2>

  <p>
    Ahora toca lo importante: <strong>probar</strong>. Copia cada ejemplo en
    CodePen y cambia una cosa cada vez (orden, selector, clase, id…).
  </p>

  <div className="callout tip">
    Método de aprendizaje: 1) predice el resultado → 2) ejecuta → 3) explica
    por qué ocurre.
  </div>

  <p>
    Puedes usar este enlace como base para tus pruebas:
  </p>

  <div className="callout">
    🔗{" "}
    <a
      href="https://codepen.io/IbanVeiss/pen/KJgbJE"
      target="_blank"
      rel="noreferrer"
    >
      Open CodePen — ejemplo base para practicar CSS
    </a>
  </div>

  <p>
    Abre el pen, pega los ejemplos que vimos en este tema y modifica cada
    parte: cambia el orden de las reglas, añade clases, usa ids, etc.  
    Observa cómo cambia el resultado y por qué.
  </p>

  <div className="callout tip">
    Consejo: abre la vista “Result” y “CSS” al mismo tiempo para ver el código
    y el resultado a la vez.
  </div>
</section>
      {/* EJEMPLOS (PROPONER) */}
      <section className="card">
        <h2>Ejemplos para practicar (analiza y predice)</h2>

        <p>
          Aquí tienes varios ejemplos que ilustran los conceptos vistos.  
          Copia cada uno en tu entorno de pruebas (CodePen u otro) y juega con
          ellos: cambia el orden, añade clases o ids, modifica estilos…
        </p>

        <div className="callout tip">
          Objetivo: que puedas <strong>predecir</strong> qué estilo gana y{" "}
          <strong>por qué</strong>.
        </div>
      </section>  

      <details className="dd" open>
        <summary>Ejemplo A — Cascada (empate) → gana la última regla</summary>
        <div className="dd-body">
          <pre>
            <code>{`/* HTML */
<p>Hola CSS</p>

/* CSS */
p{ color: blue; }
p{ color: red; }`}</code>
          </pre>

          <div className="callout tip">
            Cambia el orden de las dos reglas. ¿Qué color gana ahora?
          </div>
        </div>
      </details>

      <details className="dd">
        <summary>Ejemplo B — Herencia: el texto hereda desde el body</summary>
        <div className="dd-body">
          <pre>
            <code>{`/* HTML */
<main>
  <p>Texto heredado</p>
</main>

/* CSS */
body{
  color: #2563eb;
  font-family: Arial, sans-serif;
}`}</code>
          </pre>

          <div className="callout tip">
            Añade: <code>p {'{'} color: green; {'}'}</code> y observa cómo la herencia deja de ser relevante.
          </div>
        </div>
      </details>

      <details className="dd">
        <summary>Ejemplo C — Especificidad: clase gana a selector simple</summary>
        <div className="dd-body">
          <pre>
            <code>{`/* HTML */
<article class="card">
  <p>Texto</p>
</article>

/* CSS */
p{ color: blue; }
.card p{ color: green; }`}</code>
          </pre>

          <div className="callout warn">
            Consejo: no “subas” especificidad por impulso. Primero entiende por qué está ganando esa regla.
          </div>
        </div>
      </details>

      <details className="dd">
        <summary>Ejemplo D — Especificidad gana al orden</summary>
        <div className="dd-body">
          <pre>
            <code>{`/* HTML */
<section id="principal">
  <p>Texto</p>
</section>

/* CSS */
#principal p{ color: red; }
p{ color: blue; }`}</code>
          </pre>

          <div className="callout">
            Aunque <code>p</code> está después, gana <code>#principal p</code> por ser más específico.
          </div>
        </div>

      </details>
    <details className="dd">
  <summary>Ejemplo D — La especificidad gana a la cascada</summary>
  <div className="dd-body">
    <pre>
      <code>{`/* HTML */
<div id="element" class="container">
  Hola, estamos probando CSS
</div>

/* CSS */
#element {
  background: indigo;
  color: white;
}

.container {
  background: red;
  font-size: 34px;
}`}</code>
    </pre>

    <p>
      En este ejemplo, el elemento tiene <strong>un id</strong> y{" "}
      <strong>una clase</strong>, por lo que recibe estilos de ambos selectores.
    </p>

    <div className="callout tip">
      El selector <code>#element</code> es más específico que{" "}
      <code>.container</code>, por lo que <strong>gana</strong> en las
      propiedades que ambos definen.
    </div>

    <ul>
      <li>
        <code>background</code> → gana <code>#element</code> (indigo)
      </li>
      <li>
        <code>color</code> → gana <code>#element</code> (white)
      </li>
      <li>
        <code>font-size</code> → solo existe en <code>.container</code>, por lo
        que <strong>sí se aplica</strong>
      </li>
    </ul>

    <div className="callout warn">
      La especificidad solo compite <strong>propiedad a propiedad</strong>.
      Un selector no “gana todo”, solo gana donde hay conflicto.
    </div>
  </div>
</details>

      <details className="dd">
        <summary>Test de repaso </summary>
       

     <Quiz
  title="Test de repaso — Cascada, herencia y especificidad"
  lead="Lee con atención y razona cada respuesta. No ejecutes código: piensa cómo decide el navegador."
  passingScore={0.7}
  questions={[
    {
      id: "q1",
      text: "Si dos reglas tienen la misma especificidad y afectan a la misma propiedad, gana…",
      options: [
        { key: "A", label: "La primera que aparece" },
        { key: "B", label: "La última que aparece" },
        { key: "C", label: "La que esté en un archivo externo" },
      ],
      correct: "B",
      explain: "Con misma especificidad, la cascada decide por orden: gana la última regla."
    },
    {
      id: "q2",
      text: "¿Cuál de estas propiedades suele heredarse?",
      options: [
        { key: "A", label: "color" },
        { key: "B", label: "margin" },
        { key: "C", label: "border" },
      ],
      correct: "A",
      explain: "Las propiedades relacionadas con texto suelen heredarse."
    },
    {
      id: "q3",
      text: "¿Qué selector es más específico?",
      options: [
        { key: "A", label: "p" },
        { key: "B", label: ".box p" },
        { key: "C", label: "*" },
      ],
      correct: "B",
      explain: "Una clase combinada con un elemento tiene más peso que un selector simple."
    },
    {
      id: "q4",
      text: "Si compiten `#main p` y `.card p`, suele ganar…",
      options: [
        { key: "A", label: ".card p" },
        { key: "B", label: "#main p" },
        { key: "C", label: "El que esté más abajo" },
      ],
      correct: "B",
      explain: "Un id siempre pesa más que una clase."
    },
    {
      id: "q5",
      text: "La herencia se aplica…",
      options: [
        { key: "A", label: "Siempre, aunque haya reglas directas" },
        { key: "B", label: "Solo si el elemento no tiene una regla directa" },
        { key: "C", label: "Solo a contenedores" },
      ],
      correct: "B",
      explain: "La herencia actúa como valor por defecto."
    },
    {
      id: "q6",
      text: "¿Qué ocurre si un elemento tiene un color heredado y luego una regla directa?",
      options: [
        { key: "A", label: "Se mezclan ambos valores" },
        { key: "B", label: "Gana la herencia" },
        { key: "C", label: "Gana la regla directa" },
      ],
      correct: "C",
      explain: "Una regla directa siempre anula lo heredado."
    },
    {
      id: "q7",
      text: "¿Qué selector tiene MENOR especificidad?",
      options: [
        { key: "A", label: "*" },
        { key: "B", label: "p" },
        { key: "C", label: ".text" },
      ],
      correct: "A",
      explain: "El selector universal es el más débil."
    },
    {
      id: "q8",
      text: "¿Qué influye primero cuando el navegador decide un estilo?",
      options: [
        { key: "A", label: "El orden en el archivo" },
        { key: "B", label: "La especificidad" },
        { key: "C", label: "El origen del estilo" },
      ],
      correct: "C",
      explain: "Primero se tiene en cuenta el origen (externo, interno, inline)."
    },
    {
      id: "q9",
      text: "Un estilo inline suele…",
      options: [
        { key: "A", label: "Tener menos prioridad" },
        { key: "B", label: "Ganar frente a reglas externas e internas" },
        { key: "C", label: "Ser ignorado por la cascada" },
      ],
      correct: "B",
      explain: "Los estilos inline tienen un peso muy alto."
    },
    {
      id: "q10",
      text: "¿Cuál es una mala práctica habitual en CSS?",
      options: [
        { key: "A", label: "Usar herencia" },
        { key: "B", label: "Subir especificidad sin entenderla" },
        { key: "C", label: "Usar hojas externas" },
      ],
      correct: "B",
      explain: "Subir especificidad sin criterio genera CSS difícil de mantener."
    },
    {
      id: "q11",
      text: "Si dos reglas tienen distinta especificidad, decide…",
      options: [
        { key: "A", label: "La que esté más abajo" },
        { key: "B", label: "La más específica" },
        { key: "C", label: "La más antigua" },
      ],
      correct: "B",
      explain: "La especificidad tiene prioridad sobre el orden."
    },
    {
      id: "q12",
      text: "¿Cuál de estas propiedades NO se hereda normalmente?",
      options: [
        { key: "A", label: "font-size" },
        { key: "B", label: "line-height" },
        { key: "C", label: "background-color" },
      ],
      correct: "C",
      explain: "Los fondos no se heredan por defecto."
    },
    {
      id: "q13",
      text: "¿Por qué CSS puede parecer impredecible al principio?",
      options: [
        { key: "A", label: "Porque no tiene reglas" },
        { key: "B", label: "Porque no se entienden cascada y especificidad" },
        { key: "C", label: "Porque depende del navegador" },
      ],
      correct: "B",
      explain: "Cuando entiendes sus reglas, CSS deja de ser caótico."
    },
    {
      id: "q14",
      text: "¿Cuál es el orden correcto de decisión?",
      options: [
        { key: "A", label: "Especificidad → Orden → Origen" },
        { key: "B", label: "Origen → Especificidad → Orden" },
        { key: "C", label: "Orden → Herencia → Especificidad" },
      ],
      correct: "B",
      explain: "Ese es el flujo mental correcto para analizar conflictos."
    },
    {
      id: "q15",
      text: "Si entiendes cascada, herencia y especificidad, ¿qué ocurre?",
      options: [
        { key: "A", label: "CSS se memoriza más rápido" },
        { key: "B", label: "CSS se vuelve predecible y controlable" },
        { key: "C", label: "CSS deja de necesitar práctica" },
      ],
      correct: "B",
      explain: "El objetivo es entender, no memorizar."
    },
  ]}
/>
</details>
      

      {/* CIERRE */}
      <section className="card">
        <h2>Antes de continuar…</h2>
        <p>
          No memorices. Practica: predice, prueba, explica. Ahí es donde se fija de verdad.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/css-variables" className="btn btn-primary">
          Variables CSS
          </Link>
          
        </div>
      </section>
    </div>
  );
}
