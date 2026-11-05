import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function EjercicioFinalRepasoHTML() {
  useEffect(() => {
    document.title = "UF1841 · Ejercicio final · Repaso HTML (solo HTML)";
  }, []);

  return (
    <main className="doc" id="contenido">
      {/* HERO */}
      <header className="doc-hero" aria-labelledby="ej-title">
        <p className="doc-kicker">UF1841 · HTML</p>
        <h1 id="ej-title">Ejercicio final · Replica una página profesional solo con HTML</h1>
        <p className="doc-lead">
          Vas a crear una web completa en un solo archivo <strong>repasoFinal.html</strong>, sin CSS y sin
          JavaScript. Este ejercicio es un repaso global de <strong>estructura</strong>,{" "}
          <strong>semántica</strong>, <strong>accesibilidad</strong>, <strong>tablas</strong> y{" "}
          <strong>formularios</strong>.
        </p>

        <div className="callout">
          Regla principal: tu HTML debe llevar <strong>comentarios</strong>{" "}
          <code>{`<!-- ... -->`}</code> explicando qué hace cada bloque importante (head, header, nav, main,
          secciones, tabla, formulario, footer).
        </div>
       
      </header>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice del ejercicio">
        <h2>Contenido del ejercicio</h2>
        <ol>
          <li>
            <a href="#objetivo">Objetivo y archivo</a>
          </li>
          <li>
            <a href="#parte1">1) Estructura del documento (head + metadatos)</a>
          </li>
          <li>
            <a href="#parte2">2) Body semántico completo (skip link + header + nav + main)</a>
          </li>
          <li>
            <a href="#parte3">3) Secciones obligatorias dentro de main</a>
          </li>
          <li>
            <a href="#parte4">4) Footer profesional</a>
          </li>
          <li>
            <a href="#entrega">Reglas de entrega (checklist)</a>
          </li>
          <li>
            <a href="#plantilla">Plantilla inicial (para copiar)</a>
          </li>
        </ol>
      </nav>

      {/* OBJETIVO */}
      <section className="doc-section" id="objetivo">
        <h2>Objetivo y archivo</h2>
        <p>
          Crea un archivo llamado <strong>repaso-final.html</strong>. Tu misión es construir una página completa
          y realista (tipo web de curso/empresa), pero usando <strong>solo HTML</strong>.
        </p>

        <div className="callout tip">
          Piensa como profesional: no basta con que “se vea”. Debe estar <strong>bien estructurado</strong>,
          ser <strong>navegable</strong> y <strong>comprensible</strong> leyendo el código.
        </div>
      </section>

      {/* PARTE 1 */}
      <section className="doc-section" id="parte1">
        <h2>1) Estructura del documento (head + metadatos)</h2>
        <p>
          En la parte superior del HTML debes incluir la estructura completa del documento y metadatos básicos.
        </p>

        <details className="dd" open>
          <summary>Qué tienes que crear en el &lt;head&gt;</summary>
          <div className="dd-body">
            <ul>
              <li>
                <code>{`<!DOCTYPE html>`}</code> y <code>{`<html lang="es">`}</code>
              </li>
              <li>
                <code>{`<meta charset="UTF-8">`}</code> (codificación)
              </li>
              <li>
                <code>{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</code>{" "}
                (adaptación a móviles)
              </li>
              <li>
                <code>{`<title>`}</code> con algo tipo <strong>“Repaso final · UF1841”</strong>
              </li>
              <li>
                <code>{`<meta name="description" content="...">`}</code> con una frase descriptiva
              </li>
            </ul>

            <div className="callout warn">
              Importante: añade comentarios <code>{`<!-- ... -->`}</code> explicando para qué sirve cada meta.
            </div>
          </div>
        </details>
      </section>

      {/* PARTE 2 */}
      <section className="doc-section" id="parte2">
        <h2>2) Body semántico completo</h2>
        <p>
          Dentro del <code>{`<body>`}</code> debes construir una estructura semántica real: enlace de salto,
          cabecera con navegación y un <code>{`<main>`}</code> con secciones.
        </p>

        <details className="dd" open>
          <summary>Estructura obligatoria del body</summary>
          <div className="dd-body">
            <ol>
              <li>
                <strong>Skip link (accesibilidad):</strong> un enlace para saltar al contenido{" "}
                <code>{`href="#contenido"`}</code>.
              </li>
              <li>
                <strong>Header del sitio:</strong> <code>{`<header>`}</code> con <code>{`<h1>`}</code> y un{" "}
                <code>{`<p>`}</code>.
              </li>
              <li>
                <strong>Navegación principal:</strong> <code>{`<nav aria-label="...">`}</code> con{" "}
                <code>{`<ul><li><a>...`}</code> a secciones internas.
              </li>
              <li>
                <strong>Main:</strong> <code>{`<main id="contenido">`}</code> con secciones reales.
              </li>
            </ol>

            <div className="callout tip">
              Los enlaces del menú deben ir a anclas reales: por ejemplo{" "}
              <code>{`#inicio, #temario, #horario, #recursos, #contacto, #pie`}</code>.
            </div>
          </div>
        </details>
      </section>

      {/* PARTE 3 */}
      <section className="doc-section" id="parte3">
        <h2>3) Secciones obligatorias dentro de main</h2>
        <p>
          Dentro del <code>{`<main>`}</code> debes incluir estas secciones. Cada una debe tener su{" "}
          <code>{`id`}</code> para que el menú funcione.
        </p>

        <details className="dd">
          <summary>A) Sección “Inicio” (texto + énfasis)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <code>{`<section id="inicio">`}</code> + <code>{`<h2>`}</code>
              </li>
              <li>2 párrafos</li>
              <li>
                Usa <code>{`<strong>`}</code> y <code>{`<em>`}</code> dentro del texto
              </li>
              <li>Comentarios explicativos</li>
              <li>Incluye una imagen, un video embebido y un audio</li>
              <li> No olvides los atributos alt, controls y otros para accesibilidad</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>B) Sección “Temario” (lista + 2 artículos)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <code>{`<section id="temario">`}</code> + <code>{`<h2>`}</code>
              </li>
              <li>Una lista con 5 puntos del temario</li>
              <li>
                Dos <code>{`<article>`}</code> con <code>{`<h3>`}</code>, un <code>{`<p>`}</code> y una mini lista
              </li>
              <li>Comentarios: por qué un article “tiene sentido solo”</li>
            </ul>
          </div>
        </details>

        <details className="dd" open>
          <summary>C) Sección “Horario” (tabla completa y accesible)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <code>{`<section id="horario">`}</code> + <code>{`<h2>`}</code>
              </li>
              <li>
                <code>{`<table>`}</code> con <code>{`<caption>`}</code>, <code>{`<thead>`}</code>,{" "}
                <code>{`<tbody>`}</code> y (opcional) <code>{`<tfoot>`}</code>
              </li>
              <li>
                Encabezados con <code>{`<th scope="col">`}</code> y <code>{`<th scope="row">`}</code>
              </li>
              <li>
                Una fila con <code>{`colspan`}</code> (por ejemplo un descanso)
              </li>
              <li>Comentarios: caption, th vs td y scope</li>
            </ul>

            <div className="callout tip">
              Recuerda: sin CSS, la tabla se verá “simple”, pero lo importante aquí es la{" "}
              <strong>semántica</strong>.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>D) Sección “Recursos” (enlaces internos, externos, mailto y tel)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <code>{`<section id="recursos">`}</code> + <code>{`<h2>`}</code>
              </li>
              <li>Lista de enlaces con:</li>
              <li>
                ✅ Un enlace externo al validador W3C (con <code>{`target="_blank"`}</code> y{" "}
                <code>{`rel="noopener noreferrer"`}</code>)
              </li>
              <li>✅ Un enlace interno a una sección tuya (ancla)</li>
              <li>
                ✅ Un <code>{`mailto:`}</code> a un correo (puede ser ficticio)
              </li>
              <li>
                ✅ Un <code>{`tel:`}</code> (ficticio)
              </li>
              <li>Comentarios: qué hace cada tipo de enlace</li>
            </ul>
          </div>
        </details>

        <details className="dd" open>
          <summary>E) Sección “Contacto” (formulario accesible completo)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <code>{`<section id="contacto">`}</code> + <code>{`<h2>`}</code>
              </li>
              <li>
                <code>{`<form>`}</code> con <code>{`<fieldset>`}</code> + <code>{`<legend>`}</code>
              </li>
              <li>
                Campos con <code>{`<label for>`}</code> y <code>{`id`}</code>:
                <ul>
                  <li>Nombre (text)</li>
                  <li>Email (email, required)</li>
                  <li>Teléfono (tel)</li>
                  <li>Tema (select + option)</li>
                  <li>Mensaje (textarea)</li>
                  <li>Checkbox de términos (required)</li>
                </ul>
              </li>
              <li>Botones: submit y reset</li>
              <li>Comentarios: label, required, fieldset/legend</li>
            </ul>

            <div className="callout warn">
              No dependas solo del placeholder: el campo debe tener <strong>label</strong>.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>F) Bloque extra obligatorio: details/summary + pre/code</summary>
          <div className="dd-body">
            <ul>
              <li>
                Dentro de una sección, añade <code>{`<details>`}</code> + <code>{`<summary>`}</code>
              </li>
              <li>
                Dentro pon un texto y un ejemplo de código con <code>{`<pre><code>`}</code>
              </li>
              <li>Comentarios: para qué sirve (contenido plegable)</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>Extra opcional (nota alta): figure + img + figcaption</summary>
          <div className="dd-body">
            <p>
              Añade una imagen con <code>{`<figure>`}</code>, <code>{`<img alt="...">`}</code> y{" "}
              <code>{`<figcaption>`}</code>. La imagen puede llamarse <code>formulario.png</code>.
            </p>
            <div className="callout tip">
              Importante: explica en comentarios la diferencia entre <code>alt</code> (describir la imagen) y{" "}
              <code>figcaption</code> (dar contexto visible).
            </div>
          </div>
        </details>
      </section>

      {/* PARTE 4 */}
      <section className="doc-section" id="parte4">
        <h2>4) Footer profesional</h2>
        <p>
          Al final del documento crea un <code>{`<footer id="pie">`}</code> con navegación secundaria, enlace a
          contacto y redes externas.
        </p>

        <details className="dd" open>
          <summary>Qué debe incluir el footer</summary>
          <div className="dd-body">
            <ul>
              <li>Texto de copyright</li>
              <li>
                <code>{`<nav>`}</code> secundario con enlaces a Privacidad, Cookies y Contacto (ancla a tu
                formulario)
              </li>
              <li>
                Redes externas con <code>{`target="_blank"`}</code> + <code>{`rel="noopener noreferrer"`}</code>
              </li>
              <li>Comentarios explicando por qué se usan footer/nav y por qué rel es importante</li>
            </ul>
          </div>
        </details>
      </section>

      {/* ENTREGA */}
      <section className="doc-section" id="entrega">
        <h2>Reglas de entrega</h2>
        <ul>
          <li>✅ Solo HTML (sin CSS, sin JS).</li>
          <li>
            ✅ Comentarios <code>{`<!-- ... -->`}</code> explicando cada bloque importante.
          </li>
          <li>✅ Menú con enlaces internos funcionando.</li>
          <li>✅ Tabla completa con caption + thead/tbody + th scope.</li>
          <li>✅ Formulario accesible con labels y fieldset/legend.</li>
          <li>✅ Al menos 1 bloque details/summary con pre/code.</li>
        </ul>

        <div className="callout">
          Consejo final: antes de entregar, pasa tu HTML por el validador W3C (lo enlazas en la sección Recursos).
        </div>
      </section>

      {/* PLANTILLA 
      <section className="doc-section" id="plantilla" aria-label="Plantilla base del ejercicio">
        <h2>Plantilla inicial (copia y rellena)</h2>
        <p>
          Copia este esqueleto en <strong>repaso-final.html</strong> y ve completando cada parte. Mantén los
          comentarios y añade los tuyos.
        </p>

        <details className="dd" open>
          <summary>Ver plantilla base</summary>
          <div className="dd-body">
            <pre style={{ overflow: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
              <code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Meta: codificación de caracteres -->
  <meta charset="UTF-8">

  <!-- Meta: adaptar a móviles (responsive) -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Título que aparece en la pestaña -->
  <title>Repaso final · UF1841</title>

  <!-- Descripción para buscadores (SEO básico) -->
  <meta name="description" content="Página de repaso final de HTML (UF1841) con estructura semántica, tablas y formularios.">
</head>

<body>
  <!-- Skip link: mejora accesibilidad (teclado / lector de pantalla) -->
  <a href="#contenido">Saltar al contenido</a>

  <!-- Header: cabecera del sitio -->
  <header id="top">
    <h1>Repaso final · UF1841</h1>
    <p>Una página de ejemplo para repasar HTML profesional sin CSS.</p>

    <!-- Nav: navegación principal -->
    <nav aria-label="Navegación principal">
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#horario">Horario</a></li>
        <li><a href="#recursos">Recursos</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#pie">Footer</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main: contenido principal -->
  <main id="contenido">
    <!-- Sección Inicio -->
    <section id="inicio">
      <h2>Inicio</h2>
      <p>Texto de bienvenida con <strong>strong</strong> y <em>em</em>.</p>
      <p>Otro párrafo explicando el propósito.</p>
    </section>

    <!-- Sección Temario -->
    <section id="temario">
      <h2>Temario</h2>
      <ul>
        <li>Semántica HTML5</li>
        <li>Enlaces y navegación</li>
        <li>Imágenes y accesibilidad (alt)</li>
        <li>Tablas con caption y scope</li>
        <li>Formularios con label y validación</li>
      </ul>

      <!-- Article: bloque con sentido propio -->
      <article>
        <h3>Tema destacado 1</h3>
        <p>Explica por qué este tema es importante.</p>
        <ol>
          <li>Punto 1</li>
          <li>Punto 2</li>
        </ol>
      </article>

      <article>
        <h3>Tema destacado 2</h3>
        <p>Explica por qué este tema es importante.</p>
        <ul>
          <li>Punto 1</li>
          <li>Punto 2</li>
        </ul>
      </article>

      <!-- Details/Summary: contenido desplegable -->
      <details>
        <summary>Ver ejemplo de código</summary>
        <p>Explica qué muestra el ejemplo.</p>
        <pre><code>&lt;p&gt;Hola HTML&lt;/p&gt;</code></pre>
      </details>
    </section>

    <!-- Sección Horario (tabla) -->
    <section id="horario">
      <h2>Horario</h2>
      <table>
        <caption>Horario semanal (ejemplo)</caption>

        <thead>
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miércoles</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">09:00</th>
            <td>HTML</td>
            <td>Enlaces</td>
            <td>Tablas</td>
          </tr>

          <tr>
            <th scope="row">10:00</th>
            <td>Formularios</td>
            <td>Accesibilidad</td>
            <td>Repaso</td>
          </tr>

          <tr>
            <th scope="row">11:00</th>
            <td colspan="3">Descanso</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colspan="4">* Tabla de ejemplo para practicar caption y scope.</td>
          </tr>
        </tfoot>
      </table>
    </section>

    <!-- Sección Recursos (enlaces) -->
    <section id="recursos">
      <h2>Recursos</h2>
      <ul>
        <li>
          <a href="https://validator.w3.org/" target="_blank" 
             rel="noopener noreferrer">
            Validador W3C (se abre en nueva pestaña)
          </a>
        </li>
        <li><a href="#contacto">Ir a la sección Contacto (enlace interno)</a></li>
        <li><a href="mailto:tuemail@gmail.com">Enviar email (mailto)</a></li>
        <li><a href="tel:+34900111222">Llamar por teléfono (tel)</a></li>
      </ul>
    </section>

    <!-- Sección Contacto (formulario) -->
    <section id="contacto">
      <h2>Contacto</h2>

      <form action="#" method="post">
        <fieldset>
          <legend>Datos de contacto</legend>

          <p>
            <label for="nombre">Nombre</label><br>
            <input id="nombre" name="nombre" type="text" required>
          </p>

          <p>
            <label for="email">Email</label><br>
            <input id="email" name="email" type="email" required>
          </p>

          <p>
            <label for="tel">Teléfono</label><br>
            <input id="tel" name="tel" type="tel">
          </p>

          <p>
            <label for="tema">Tema</label><br>
            <select id="tema" name="tema" required>
              <option value="">Selecciona…</option>
              <option value="html">HTML</option>
              <option value="tablas">Tablas</option>
              <option value="formularios">Formularios</option>
            </select>
          </p>

          <p>
            <label for="mensaje">Mensaje</label><br>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
          </p>

          <p>
            <input id="ok" name="ok" type="checkbox" required>
            <label for="ok">Acepto los términos</label>
          </p>

          <p>
            <button type="submit">Enviar</button>
            <button type="reset">Limpiar</button>
          </p>
        </fieldset>
      </form>
    </section>
  </main>

  <!-- Footer: pie del sitio -->
  <footer id="pie">
    <p>© 2026 UF1841 · Inma Contreras</p>

    <nav aria-label="Navegación secundaria">
      <ul>
        <li><a href="#top">Volver arriba</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#">Privacidad</a></li>
        <li><a href="#">Cookies</a></li>
      </ul>
    </nav>

    <ul aria-label="Redes sociales">
      <li><a href="https://github.com/" target="_blank" 
          rel="noopener noreferrer">GitHub</a></li>
      <li><a href="https://www.linkedin.com/" target="_blank" 
          rel="noopener noreferrer">LinkedIn</a></li>
    </ul>
  </footer>
</body>
</html>`}</code>
            </pre>

            <div className="callout tip">
              Esta plantilla está pensada para que el alumno la complete y añada comentarios propios. Pídeles que
              no borren los comentarios: deben ampliarlos.
            </div>
          </div>
        </details>
      </section>

      {/* NEXT */}
      <div className="doc-next">
        <Link className="btn btn-primary" to="/tema/14">
          Siguiente tema <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
