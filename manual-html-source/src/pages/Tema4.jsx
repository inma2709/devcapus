// Tema4.jsx
// ✅ LISTO PARA PEGAR EN TU PROYECTO REACT
// 📌 Imagen sugerida:
// /public/img/tema4/estructura-html5.png
import { Link } from "react-router-dom";


export default function Tema4() {
  return (
    <div className="doc">
      <header className="doc-hero">
        <p className="doc-kicker">Tema 4 · Introducción a HTML</p>
        <h1>HTML: la base de toda página web</h1>
        <p className="doc-lead">
          En este tema empezamos a trabajar con el lenguaje que da forma a la web.
          HTML no es programación: es estructura, significado y orden.
          Entender bien este punto marcará la diferencia en todo lo que construyas después.
        </p>

        <div className="callout tip">
          <strong>Objetivo del tema:</strong> comprender qué es HTML, por qué HTML5 es el estándar actual
          y cómo se organiza correctamente una página web desde su base.
        </div>
      </header>

      {/* ===================================================== */}
      <section className="doc-section">
        <h2>1) ¿Qué es HTML?</h2>

        <details open className="dd">
          <summary>HTML como lenguaje de marcado o de etiquetas</summary>
          <div className="dd-body">
            <p>
              <strong>HTML</strong> (HyperText Markup Language) es un lenguaje de marcado que se utiliza
              para <strong>estructurar el contenido</strong> de una página web.
              Su función no es calcular ni programar, sino indicar qué es cada cosa:
              un título, un párrafo, una imagen, un enlace o una sección.
            </p>

            <div className="callout">
              HTML define <strong>qué es el contenido</strong>, no cómo se ve ni cómo se comporta.
            </div>

            <p>
              Gracias a HTML, el navegador sabe interpretar la información y mostrarla de forma coherente.
              Sin HTML, no existiría la web tal y como la conocemos.
            </p>
          </div>
        </details>
      </section>

     {/* ===================================================== */}
<section className="doc-section">
  <h2>2) HTML5: evolución y mejoras</h2>

  <details open className="dd">
    <summary>¿Qué es HTML y qué aporta HTML5?</summary>
    <div className="dd-body">
      <p>
        <strong>HTML (HyperText Markup Language)</strong> es el lenguaje de marcado
        fundamental de la web. Define la <strong>estructura y el contenido</strong>
        de una página web: textos, imágenes, enlaces, formularios, etc.
      </p>

      <p>
        Podemos pensar en HTML como el <strong>esqueleto</strong> de una página:
        no se encarga del diseño ni del comportamiento, sino de organizar la información.
      </p>

      <p>
        <strong>HTML5</strong> no es un lenguaje nuevo, sino una <strong>evolución</strong>
        del HTML clásico que introduce mejoras clave para crear páginas modernas,
        accesibles y preparadas para móviles.
      </p>

      <div className="callout tip">
        HTML define <strong>qué es cada cosa</strong>, no cómo se ve ni cómo se comporta.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Características clave de HTML5</summary>
    <div className="dd-body">
      <ul>
        <li>
          <strong>Elementos semánticos:</strong> nuevas etiquetas como
          <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>,
          <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> o <code>&lt;nav&gt;</code>
          que indican claramente la función de cada parte de la página.
        </li>

        <li>
          <strong>Multimedia nativa:</strong> permite insertar audio y vídeo directamente
          con <code>&lt;audio&gt;</code> y <code>&lt;video&gt;</code>, sin depender de plugins
          externos como Flash.
        </li>

        <li>
          <strong>Gráficos y efectos:</strong> incorpora <code>&lt;canvas&gt;</code> para
          gráficos dinámicos y <code>&lt;svg&gt;</code> para gráficos vectoriales escalables.
        </li>

        <li>
          <strong>Formularios mejorados:</strong> nuevos tipos de campos como
          <code>email</code>, <code>date</code>, <code>number</code> o <code>range</code>,
          que facilitan la validación y mejoran la experiencia del usuario.
        </li>

        <li>
          <strong>APIs avanzadas:</strong> incluye APIs nativas como geolocalización,
          almacenamiento local (<code>localStorage</code> y <code>sessionStorage</code>)
          o procesos en segundo plano (<em>Web Workers</em>).
        </li>
      </ul>

      <div className="callout tip">
        HTML5 permite crear aplicaciones web ricas sin depender de tecnologías externas.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Propiedades del lenguaje HTML</summary>
    <div className="dd-body">
      <ul>
        <li>
          ✔️ <strong>Simple y universal:</strong> un archivo HTML es texto plano,
          editable con cualquier editor.
        </li>
        <li>
          ✔️ <strong>Contenido y estructura juntos:</strong> el texto y las etiquetas
          conviven en el mismo documento, facilitando su lectura.
        </li>
        <li>
          ✔️ <strong>Flexible y adaptable:</strong> el mismo HTML puede verse correctamente
          en móviles, tablets y ordenadores.
        </li>
        <li>
          ✔️ <strong>Estándares abiertos:</strong> está respaldado por el W3C, lo que
          garantiza compatibilidad entre navegadores.
        </li>
      </ul>

      <div className="callout info">
        HTML es la base sobre la que se construye todo lo demás en la web.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>HTML no trabaja solo</summary>
    <div className="dd-body">
      <p>
        Aunque HTML es fundamental, <strong>no funciona de manera aislada</strong>.
        En el desarrollo web moderno trabaja junto a otras tecnologías:
      </p>

      <ul>
        <li>
          <strong>CSS:</strong> se encarga del diseño visual (colores, tamaños,
          distribución, tipografías).
        </li>
        <li>
          <strong>JavaScript:</strong> añade interactividad y comportamiento dinámico
          (formularios, botones, datos en tiempo real).
        </li>
      </ul>

      <div className="callout tip">
        HTML + CSS + JavaScript forman el <strong>trío básico del desarrollo web</strong>.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Estructura básica de una página HTML</summary>
    <div className="dd-body">
      <p>
        Toda página HTML sigue una estructura mínima que permite al navegador
        interpretar correctamente el contenido.
      </p>

      <ul>
        <li>
          <code>&lt;!DOCTYPE html&gt;</code>: indica que usamos HTML5.
        </li>
        <li>
          <code>&lt;html&gt;</code>: engloba todo el documento.
        </li>
        <li>
          <code>&lt;head&gt;</code>: contiene metadatos, título y enlaces a CSS.
        </li>
        <li>
          <code>&lt;body&gt;</code>: contiene todo lo visible para el usuario.
        </li>
      </ul>

      <pre>
        <code>{`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi primera web</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <p>Mi primera página HTML</p>
  </body>
</html>`}</code>
      </pre>

      <div className="callout warning">
        Sin esta estructura básica, el navegador puede interpretar mal la página.
      </div>
    </div>
  </details>
</section>

      {/* ===================================================== */}
      <section className="doc-section">
        <h2>3) HTML y el Frontend</h2>

        <details open className="dd">
          <summary>Relación entre HTML, CSS y JavaScript</summary>
          <div className="dd-body">
            <p>
              En el desarrollo frontend, cada tecnología tiene un papel claro:
            </p>

            <ul>
              <li><strong>HTML:</strong> estructura y significado del contenido.</li>
              <li><strong>CSS:</strong> apariencia visual (colores, tamaños, layout).</li>
              <li><strong>JavaScript:</strong> comportamiento e interacción.</li>
            </ul>

            <div className="callout">
              Piensa en HTML como el <strong>esqueleto</strong>, CSS como la <strong>piel</strong>
              y JavaScript como el <strong>movimiento</strong>.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section className="doc-section">
        <h2>4) Estructura básica de un documento HTML</h2>

        <details open className="dd">
          <summary>Partes fundamentales de una página HTML</summary>
          <div className="dd-body">
            <p>
              Todo documento HTML sigue una estructura clara que permite al navegador
              interpretar correctamente la información.
            </p>

            <ul>
              <li><strong>&lt;header&gt;</strong>: cabecera de la página o sección.</li>
              <li><strong>&lt;main&gt;</strong>: contenido principal.</li>
              <li><strong>&lt;section&gt;</strong>: agrupación temática de contenido.</li>
              <li><strong>&lt;article&gt;</strong>: contenido independiente.</li>
              <li><strong>&lt;aside&gt;</strong>: información complementaria.</li>
              <li><strong>&lt;footer&gt;</strong>: pie de página.</li>
            </ul>

            <figure className="media">
              <img
                src={`${import.meta.env.BASE_URL}img/estructura.png`}
                alt="Estructura semántica básica de un documento HTML5"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">
                Estructura semántica de una página HTML5: cada bloque tiene un significado concreto.
              </figcaption>
            </figure>

            <div className="callout tip">
              Usar bien estas etiquetas mejora la accesibilidad, el SEO y la claridad del código.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section className="doc-section">
        <h2>5) Cierre del tema</h2>

        <details open className="dd">
          <summary>Ideas clave que debes recordar</summary>
          <div className="dd-body">
            <ul>
              <li>HTML es estructura, no diseño ni programación.</li>
              <li>HTML5 aporta significado y orden.</li>
              <li>Una buena estructura facilita todo lo demás.</li>
              <li>Frontend empieza siempre por HTML bien hecho.</li>
            </ul>
 <figure className="media">
              <img
                src={`${import.meta.env.BASE_URL}img/estructura2.png`}
                alt="Estructura semántica básica de un documento HTML5"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">
                Estructura semántica de una página HTML5: cada bloque tiene un significado concreto.
              </figcaption>
            </figure>
            <div className="callout tip">
              <strong>Frase clave:</strong> una web bien estructurada se nota, aunque no se vea.
            </div>
          </div>
        </details>

       <div className="doc-next">
  <Link className="btn btn-primary" to="/tema/5">
    Siguiente tema <span aria-hidden="true">→</span>
  </Link>
</div>
      </section>
    </div>
  );
}
