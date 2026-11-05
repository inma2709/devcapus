import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tema13BuenasPracticasHTML() {
  useEffect(() => {
    document.title = "UF1841 · Tema 13 · Buenas prácticas en HTML";
  }, []);

  return (
    <main className="doc" id="contenido">
      {/* HERO */}
      <header className="doc-hero" aria-labelledby="tema-title">
        <p className="doc-kicker">Tema 13 · Buenas prácticas en HTML</p>
        <h1 id="tema-title">Tema 13 · Buenas prácticas en HTML</h1>
        <p className="doc-lead">
          Escribir HTML profesional no es solo que “funcione”. Es que sea{" "}
          <strong>claro, correcto, accesible y mantenible</strong>. Este tema es tu
          checklist real para que tu código se entienda hoy y dentro de 6 meses.
        </p>

        <div className="callout tip">
          Un HTML bien escrito se entiende incluso meses después de haberlo creado.
        </div>
      </header>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice del tema 13">
        <h2>Contenido</h2>
        <ol>
          <li>
            <a href="#bp1">1) HTML es contenido, no diseño</a>
          </li>
          <li>
            <a href="#bp2">2) Usa etiquetas semánticas siempre que existan</a>
          </li>
          <li>
            <a href="#bp3">3) La jerarquía de encabezados importa</a>
          </li>
          <li>
            <a href="#bp4">4) Todas las imágenes deben tener alt</a>
          </li>
          <li>
            <a href="#bp5">5) Usa enlaces claros y comprensibles</a>
          </li>
          <li>
            <a href="#bp6">6) Formularios accesibles desde el principio</a>
          </li>
          <li>
            <a href="#bp7">7) No uses tablas para maquetar</a>
          </li>
          <li>
            <a href="#bp8">8) Indenta y ordena tu código</a>
          </li>
          <li>
            <a href="#bp9">9) Valida siempre tu HTML</a>
          </li>
          <li>
            <a href="#bp10">10) Checklist final de buen HTML</a>
          </li>
        </ol>
      </nav>

      {/* 1 */}
      <section className="doc-section" id="bp1">
        <h2>1) HTML es contenido, no diseño</h2>

        <p>
          HTML sirve para <strong>estructurar contenido</strong>. El diseño (colores,
          posiciones, tamaños) pertenece a CSS.
        </p>

        <details className="dd" open>
          <summary>Ejemplo: “esto funciona” vs “esto es profesional”</summary>
          <div className="dd-body">
            <pre>
              <code>{`<!-- ❌ Incorrecto -->
<p style="color:red; font-size:30px;">Título</p>

<!-- ✅ Correcto -->
<h1>Título</h1>`}</code>
            </pre>

            <div className="callout">
              Si estás usando HTML para “colocar cosas”, probablemente estás haciendo CSS sin saberlo.
            </div>
          </div>
        </details>
      </section>

      {/* 2 */}
      <section className="doc-section" id="bp2">
        <h2>2) Usa etiquetas semánticas siempre que existan</h2>

        <p>
          Las etiquetas semánticas describen el significado del contenido, no su aspecto visual.
        </p>

        <details className="dd">
          <summary>Divs por todas partes vs HTML semántico</summary>
          <div className="dd-body">
            <pre>
              <code>{`<!-- ❌ Todo con div -->
<div>Cabecera</div>
<div>Contenido</div>
<div>Pie</div>

<!-- ✅ HTML semántico -->
<header>Cabecera</header>
<main>Contenido</main>
<footer>Pie</footer>`}</code>
            </pre>

            <div className="callout tip">
              Esto mejora accesibilidad, SEO y comprensión del código.
            </div>
          </div>
        </details>
      </section>

      {/* 3 */}
      <section className="doc-section" id="bp3">
        <h2>3) La jerarquía de encabezados importa</h2>

        <p>
          Los encabezados (<code>h1</code> a <code>h6</code>) deben seguir un orden lógico.
        </p>

        <details className="dd">
          <summary>Ejemplo de jerarquía correcta</summary>
          <div className="dd-body">
            <pre>
              <code>{`<!-- ❌ Incorrecto -->
<h1>Título</h1>
<h4>Subtema</h4>

<!-- ✅ Correcto -->
<h1>Título</h1>
<h2>Subtema</h2>`}</code>
            </pre>

            <div className="callout warn">
              No elijas un heading por su tamaño visual, sino por su nivel.
            </div>
          </div>
        </details>
      </section>

      {/* 4 */}
      <section className="doc-section" id="bp4">
        <h2>4) Todas las imágenes deben tener alt</h2>

        <p>
          El atributo <code>alt</code> describe la imagen cuando no se ve o cuando se usa un lector de pantalla.
        </p>

        <details className="dd">
          <summary>Ejemplos de alt correcto</summary>
          <div className="dd-body">
            <pre>
              <code>{`<!-- ❌ Incorrecto -->
<img src="foto.png">

<!-- ✅ Correcto -->
<img src="foto.png" alt="Vista frontal del edificio">`}</code>
            </pre>

            <div className="callout tip">
              Si la imagen es decorativa, el <code>alt</code> debe existir pero estar vacío: <code>alt=""</code>.
            </div>
          </div>
        </details>
      </section>

      {/* 5 */}
      <section className="doc-section" id="bp5">
        <h2>5) Usa enlaces claros y comprensibles</h2>

        <p>El texto de un enlace debe indicar claramente a dónde lleva.</p>

        <details className="dd">
          <summary>Ejemplos: enlace malo vs enlace bueno</summary>
          <div className="dd-body">
            <pre>
              <code>{`<!-- ❌ Incorrecto -->
<a href="info.html">Haz clic aquí</a>

<!-- ✅ Correcto -->
<a href="info.html">Más información sobre el curso</a>`}</code>
            </pre>

            <div className="callout">
              Los lectores de pantalla leen listas de enlaces sin contexto.
            </div>
          </div>
        </details>
      </section>

      {/* 6 */}
      <section className="doc-section" id="bp6">
        <h2>6) Formularios accesibles desde el principio</h2>

        <details className="dd" open>
          <summary>Reglas mínimas (si no las cumples, no es profesional)</summary>
          <div className="dd-body">
            <ul>
              <li>
                Usa siempre <code>&lt;label&gt;</code>.
              </li>
              <li>
                Conecta <code>label</code> con <code>id</code>.
              </li>
              <li>
                No dependas solo de <code>placeholder</code>.
              </li>
            </ul>

            <pre>
              <code>{`<label for="email">Correo</label>
<input id="email" type="email" required>`}</code>
            </pre>

            <div className="callout warn">
              Un formulario sin labels puede “funcionar”, pero no es profesional.
            </div>
          </div>
        </details>
      </section>

      {/* 7 */}
      <section className="doc-section" id="bp7">
        <h2>7) No uses tablas para maquetar</h2>

        <p>Las tablas son solo para datos tabulares, nunca para diseño.</p>

        <details className="dd">
          <summary>Ejemplo de error típico</summary>
          <div className="dd-body">
            <pre>
              <code>{`<!-- ❌ Incorrecto -->
<table>
  <tr>
    <td>Menú</td>
    <td>Contenido</td>
  </tr>
</table>`}</code>
            </pre>

            <div className="callout tip">
              Hoy el diseño se hace con CSS (Flexbox, Grid).
            </div>
          </div>
        </details>
      </section>

      {/* 8 */}
      <section className="doc-section" id="bp8">
        <h2>8) Indenta y ordena tu código</h2>

        <p>El HTML se escribe para personas, no solo para navegadores.</p>

        <details className="dd">
          <summary>Ejemplo: legibilidad</summary>
          <div className="dd-body">
            <pre>
              <code>{`<!-- ❌ Difícil de leer -->
<ul><li>Uno</li><li>Dos</li></ul>

<!-- ✅ Legible -->
<ul>
  <li>Uno</li>
  <li>Dos</li>
</ul>`}</code>
            </pre>
          </div>
        </details>
      </section>

      {/* 9 */}
      <section className="doc-section" id="bp9">
        <h2>9) Valida siempre tu HTML</h2>

        <p>
          Existen herramientas oficiales para comprobar errores y advertencias en tu HTML.
        </p>

        <details className="dd" open>
          <summary>Herramientas recomendadas</summary>
          <div className="dd-body">
            <ul>
              <li>
                ✅ <strong>Validador W3C:</strong>{" "}
                <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">
                  https://validator.w3.org/
                </a>
              </li>
              <li>
                ✅ <strong>WAVE (accesibilidad):</strong>{" "}
                <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">
                  https://wave.webaim.org/
                </a>
              </li>
              <li>
                ✅ <strong>Lighthouse (Chrome DevTools):</strong> Auditoría de accesibilidad y buenas prácticas
              </li>
            </ul>

            <div className="callout tip">
              Validar no es opcional en proyectos profesionales.
            </div>
          </div>
        </details>
      </section>

      {/* 10 */}
      <section className="doc-section" id="bp10">
        <h2>10) Checklist final de buen HTML</h2>

        <details className="dd" open>
          <summary>Checklist (si cumples esto, tu HTML es “pro”)</summary>
          <div className="dd-body">
            <ul>
              <li>✔️ HTML semántico</li>
              <li>✔️ Encabezados bien jerarquizados</li>
              <li>✔️ Imágenes con alt</li>
              <li>✔️ Formularios accesibles</li>
              <li>✔️ Código limpio y validado</li>
            </ul>

            <div className="callout">
              Si cumples esta lista, tu HTML es correcto y profesional.
            </div>
          </div>
        </details>
      </section>

      {/* RESUMEN */}
      <div className="resumen-final">
        <p>
          <strong>Resumen:</strong> escribir buen HTML no es solo saber etiquetas, sino aplicar semántica,
          accesibilidad, orden y validación. Estas buenas prácticas son la base de cualquier proyecto web profesional.
        </p>
      </div>

      <div className="doc-next">
        <Link className="btn btn-primary" to="/tema/14">
          Siguiente tema <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
