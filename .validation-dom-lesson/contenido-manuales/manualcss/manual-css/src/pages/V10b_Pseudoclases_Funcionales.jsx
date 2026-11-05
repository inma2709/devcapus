import { useEffect, useMemo, useState } from "react";

// V10b · Pseudoclases funcionales modernas: :not(), :is(), :where(), :has()
// Prerrequisito: V10 (pseudoclases básicas) y V09 (selectores avanzados)
// Objetivo: entender cómo estas cuatro pseudoclases cambian lo que CSS puede hacer,
//           especialmente :has() que permite seleccionar padres por primera vez.

export default function V10b_Pseudoclases_Funcionales() {
  useEffect(() => {
    document.title = "V10b · :not() :is() :where() :has() — pseudoclases funcionales";
  }, []);

  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué hace el selector li:not(:last-child)?",
        options: [
          "Selecciona solo el último elemento de la lista",
          "Selecciona todos los li excepto el último",
          "Selecciona todos los li que no tengan hijos",
          "No es sintaxis CSS válida",
        ],
        correct: "Selecciona todos los li excepto el último",
        why:
          ":not() excluye los elementos que coinciden con el argumento. Li:not(:last-child) aplica a todos los li salvo el que cumple :last-child.",
      },
      {
        id: "q2",
        q: "¿Cuál es la diferencia clave entre :is() y :where()?",
        options: [
          ":where() solo acepta clases, :is() acepta cualquier selector",
          "Son idénticas — solo cambia el nombre",
          ":is() aporta la especificidad de su argumento más pesado; :where() tiene especificidad siempre 0",
          ":is() es más moderna y reemplaza a :where()",
        ],
        correct:
          ":is() aporta la especificidad de su argumento más pesado; :where() tiene especificidad siempre 0",
        why:
          ":where(header h1, .hero h1) tiene especificidad 0 — ideal para base styles que no quieres que pisen estilos del usuario. :is() en cambio hereda la especificidad del selector más específico de la lista.",
      },
      {
        id: "q3",
        q: "¿Por qué :has() fue tan revolucionario cuando llegó a CSS?",
        options: [
          "Porque permite animar cualquier propiedad",
          "Porque es el primer selector de CSS que puede mirar hacia arriba en el árbol DOM (seleccionar un padre)",
          "Porque sustituye completamente a :is() y :where()",
          "Porque genera CSS con menos especificidad que cualquier otro selector",
        ],
        correct:
          "Porque es el primer selector de CSS que puede mirar hacia arriba en el árbol DOM (seleccionar un padre)",
        why:
          "Desde CSS1 hasta 2022, CSS solo podía seleccionar descendientes. :has() rompe esa regla: .card:has(img) selecciona la tarjeta (el padre) si contiene una imagen (el hijo). Antes eso requería JavaScript.",
      },
      {
        id: "q4",
        q: "¿Qué hace form:has(input:invalid)?",
        options: [
          "Selecciona los input inválidos dentro del formulario",
          "Selecciona el form completo cuando alguno de sus input está en estado inválido",
          "Oculta el formulario si tiene errores",
          "Selecciona los formularios que no tienen input",
        ],
        correct:
          "Selecciona el form completo cuando alguno de sus input está en estado inválido",
        why:
          ":has() selecciona el elemento que contiene al selector del argumento. El form es el padre; input:invalid es la condición que debe cumplirse dentro de él.",
      },
      {
        id: "q5",
        q: "¿Cuándo usar :where() en lugar de :is()?",
        options: [
          "Cuando quiero que los estilos sean fáciles de sobreescribir desde cualquier otro sitio",
          "Cuando quiero mayor especificidad en el selector",
          "Solo en proyectos con Sass, no en CSS puro",
          ":where() no tiene ningún caso de uso real",
        ],
        correct:
          "Cuando quiero que los estilos sean fáciles de sobreescribir desde cualquier otro sitio",
        why:
          "Especificidad 0 significa que cualquier otra regla, por simple que sea, puede sobrescribirla. Perfecto para resets, estilos base y librerías de diseño.",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let ok = 0;
    for (const q of questions) if (answers[q.id] === q.correct) ok++;
    return ok;
  }, [answers, questions]);

  const choose = (id, opt) => setAnswers((p) => ({ ...p, [id]: opt }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ================= HERO ================= */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Selectores · V10b</p>
        <h1>
          Pseudoclases funcionales: <code>:not()</code> <code>:is()</code>{" "}
          <code>:where()</code> <code>:has()</code>
        </h1>

        <p className="doc-lead">
          Las pseudoclases que ya conoces (<code>:hover</code>,{" "}
          <code>:first-child</code>…) detectan estados simples. Estas cuatro
          son diferentes: aceptan <strong>selectores como argumento</strong> y
          permiten hacer cosas que antes eran imposibles en CSS puro, como
          seleccionar un elemento según lo que contiene.
        </p>

        <div className="callout tip">
          🎯 Prerequisito: haber visto las pseudoclases básicas (V10) y los
          selectores combinadores (V09). Estas cuatro funcionan <em>junto</em>{" "}
          a lo que ya sabes, no en lugar de ello.
        </div>

        <div className="callout">
          <strong>Lo que aprenderás:</strong>
          <ol style={{ marginBottom: 0 }}>
            <li>
              <code>:not()</code> — cómo excluir elementos sin CSS extra
            </li>
            <li>
              <code>:is()</code> — agrupar selectores y reducir repetición
            </li>
            <li>
              <code>:where()</code> — igual que <code>:is()</code> pero con
              especificidad cero, ideal para resets
            </li>
            <li>
              <code>:has()</code> — el primer selector de padre de CSS: 20 años
              de imposible, resuelto en 2022
            </li>
            <li>
              Cómo afectan a la especificidad (y por qué importa)
            </li>
            <li>Combinaciones potentes y casos de uso reales</li>
          </ol>
        </div>

        <nav className="doc-index" aria-label="Índice de la lección">
          <h2>🧭 Índice</h2>
          <ol>
            <li>
              <a href="#intro-funcionales">
                1) ¿Qué tienen en común estas cuatro pseudoclases?
              </a>
            </li>
            <li>
              <a href="#not">2) :not() — excluir elementos</a>
            </li>
            <li>
              <a href="#is">3) :is() — agrupar selectores</a>
            </li>
            <li>
              <a href="#where">4) :where() — agrupar sin especificidad</a>
            </li>
            <li>
              <a href="#has">5) :has() — el selector de padre</a>
            </li>
            <li>
              <a href="#especificidad">
                6) Cómo afectan a la especificidad
              </a>
            </li>
            <li>
              <a href="#combinaciones">7) Combinaciones útiles</a>
            </li>
            <li>
              <a href="#gotchas">8) Errores frecuentes</a>
            </li>
            <li>
              <a href="#test">9) Test de comprobación</a>
            </li>
          </ol>
        </nav>
      </header>

      {/* ========== 1) INTRO ========== */}
      <section className="doc-section" id="intro-funcionales">
        <details className="dd" open>
          <summary>1) ¿Qué tienen en común estas cuatro pseudoclases?</summary>
          <div className="dd-body">
            <p>
              Las pseudoclases básicas como <code>:hover</code> o{" "}
              <code>:first-child</code> describen un estado del elemento.
              Estas cuatro son <strong>funcionales</strong>: llevan paréntesis
              y aceptan uno o más selectores como argumento.
            </p>

            <pre>
              <code>{`/* Pseudoclase básica — sin argumento */
a:hover { color: red; }

/* Pseudoclase funcional — con selector como argumento */
a:not(.disabled) { color: blue; }
:is(h1, h2, h3) { font-weight: bold; }
:where(header, footer) a { color: white; }
.card:has(img) { padding: 0; }`}</code>
            </pre>

            <div className="callout tip">
              Las cuatro usan la misma sintaxis de paréntesis, pero hacen cosas
              muy distintas. Lo que une a <code>:is()</code> y{" "}
              <code>:where()</code> es que son{" "}
              <strong>listas perdonadoras</strong>: si un selector de la lista
              es inválido, el resto sigue funcionando. <code>:not()</code> y{" "}
              <code>:has()</code> también.
            </div>

            <p>
              Compatibilidad:{" "}
              <strong>
                las cuatro funcionan en todos los navegadores modernos
              </strong>{" "}
              (Chrome 88+, Firefox 78+, Safari 14+). <code>:has()</code> fue
              el último en llegar: se puede usar con seguridad desde 2023.
            </p>
          </div>
        </details>
      </section>

      {/* ========== 2) :NOT() ========== */}
      <section className="doc-section" id="not">
        <details className="dd" open>
          <summary>2) :not() — excluir uno o varios elementos</summary>
          <div className="dd-body">
            <p>
              <code>:not(selector)</code> selecciona todos los elementos que{" "}
              <strong>no coincidan</strong> con el argumento. Piensa en él como
              el operador "excepto".
            </p>

            <h3>2.1 Casos de uso más frecuentes</h3>
            <pre>
              <code>{`/* Todos los li excepto el último — para bordes entre items */
li:not(:last-child) {
  border-bottom: 1px solid #e5e7eb;
}

/* Todos los input excepto los de tipo submit o reset */
input:not([type="submit"]):not([type="reset"]) {
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
}

/* Párrafos que no tienen la clase .intro */
p:not(.intro) {
  color: #374151;
}

/* Imagen si NO tiene atributo alt (accesibilidad) */
img:not([alt]) {
  outline: 3px solid red; /* detecta imágenes sin alt */
}`}</code>
            </pre>

            <div className="callout tip">
              Puedes encadenar varios <code>:not()</code> seguidos:{" "}
              <code>input:not([type="submit"]):not([disabled])</code>
              selecciona los input que no son submit Y que no están deshabilitados.
            </div>

            <h3>2.2 :not() moderno — listas de selectores</h3>
            <p>
              En CSS moderno (nivel 4) <code>:not()</code> acepta una{" "}
              <strong>lista de selectores</strong> separados por coma:
            </p>
            <pre>
              <code>{`/* Versión antigua: había que encadenar */
a:not(.disabled):not(.external) { ... }

/* Versión moderna: lista directa */
a:not(.disabled, .external) { ... }`}</code>
            </pre>

            <div className="callout warn">
              La lista de selectores dentro de <code>:not()</code> no está
              soportada en Internet Explorer. Si necesitas compatibilidad con IE
              (muy raro hoy), usa el encadenamiento.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 3) :IS() ========== */}
      <section className="doc-section" id="is">
        <details className="dd" open>
          <summary>3) :is() — agrupar selectores y eliminar repetición</summary>
          <div className="dd-body">
            <p>
              <code>:is(A, B, C)</code> es una forma abreviada de escribir los
              mismos estilos para varios selectores. Antes de <code>:is()</code>{" "}
              tenías que repetir el resto del selector completo:
            </p>

            <h3>3.1 Antes y después de :is()</h3>
            <pre>
              <code>{`/* Sin :is() — mucho copy-paste */
header h1,
header h2,
header h3,
main h1,
main h2,
main h3,
footer h1,
footer h2,
footer h3 {
  font-family: "Inter", sans-serif;
}

/* Con :is() — limpio y claro */
:is(header, main, footer) :is(h1, h2, h3) {
  font-family: "Inter", sans-serif;
}`}</code>
            </pre>

            <h3>3.2 :is() es "perdonador" con selectores inválidos</h3>
            <pre>
              <code>{`/* Si uno de los selectores no existe o es inválido,
   el resto de la lista sigue funcionando */
:is(.card, .tile, :unknown-pseudo) {
  border-radius: 0.5rem;
}
/* .card y .tile funcionan — :unknown-pseudo se ignora sin romper nada */`}</code>
            </pre>

            <div className="callout tip">
              Esto contrasta con las listas de selectores normales (separadas
              por coma sin <code>:is()</code>), donde un selector inválido
              anula toda la regla.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 4) :WHERE() ========== */}
      <section className="doc-section" id="where">
        <details className="dd" open>
          <summary>4) :where() — como :is() pero con especificidad cero</summary>
          <div className="dd-body">
            <p>
              <code>:where()</code> hace exactamente lo mismo que{" "}
              <code>:is()</code> en cuanto a selección. La diferencia está en
              la especificidad:{" "}
              <strong>
                <code>:where()</code> siempre contribuye 0 de especificidad
              </strong>
              , sin importar lo que lleve dentro.
            </p>

            <h3>4.1 Comparación directa</h3>
            <pre>
              <code>{`/* :is() — hereda la especificidad del argumento más específico */
:is(#hero, .section) p {
  color: gray;
}
/* Especificidad: 1-0-0 (por #hero, el más específico de la lista) */

/* :where() — siempre especificidad 0 */
:where(#hero, .section) p {
  color: gray;
}
/* Especificidad: 0-0-1 (solo el p del final cuenta) */`}</code>
            </pre>

            <h3>4.2 ¿Cuándo usar :where() en la práctica?</h3>
            <p>
              <code>:where()</code> es la herramienta perfecta para
              escribir estilos base que{" "}
              <strong>cualquier otra regla pueda sobrescribir fácilmente</strong>:
            </p>
            <pre>
              <code>{`/* Reset de listas en cualquier contexto de contenido */
:where(article, section, aside) ul,
:where(article, section, aside) ol {
  padding-left: 1.5rem;
  list-style: revert;
}
/* Especificidad 0-0-1 — cualquier .card ul puede sobrescribirlo */

/* Biblioteca de componentes: estilos base sin "contaminar" especificidad */
:where(.btn) {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
/* El usuario puede hacer .btn { padding: 0 } con especificidad 0-1-0 y ya funciona */`}</code>
            </pre>

            <div className="callout">
              Regla práctica:{" "}
              <strong>
                usa <code>:is()</code> cuando quieres que la especificidad
                importa y <code>:where()</code> cuando quieres que los estilos
                sean fáciles de sobreescribir
              </strong>{" "}
              — por ejemplo en resets, estilos globales y librerías.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 5) :HAS() ========== */}
      <section className="doc-section" id="has">
        <details className="dd" open>
          <summary>5) :has() — el selector de padre que CSS no tenía</summary>
          <div className="dd-body">
            <p>
              Durante más de 20 años, CSS solo podía seleccionar hacia{" "}
              <strong>abajo</strong> en el árbol DOM: de padre a hijo, de
              ancestro a descendiente. Nunca al revés. <code>:has()</code>{" "}
              rompe esa limitación: selecciona un elemento{" "}
              <strong>según lo que contiene</strong>.
            </p>

            <div className="callout tip">
              <code>.card:has(img)</code> se lee así: "selecciona el{" "}
              <code>.card</code> que contiene una <code>img</code>". El{" "}
              <code>.card</code> es el elemento que recibe los estilos; la{" "}
              <code>img</code> es la condición.
            </div>

            <h3>5.1 Los casos de uso más potentes</h3>
            <pre>
              <code>{`/* Tarjeta sin padding si lleva imagen (la imagen ocupa todo el borde) */
.card:has(img) {
  padding: 0;
  overflow: hidden;
}

/* Formulario completo en rojo si tiene algún campo inválido */
form:has(input:invalid) {
  outline: 2px solid #ef4444;
  outline-offset: 4px;
}

/* Item de lista resaltado cuando su enlace está en hover */
li:has(a:hover) {
  background: #f0f9ff;
}

/* Sección con solo encabezado directo h2 (no en sub-divs) */
section:has(> h2) {
  border-left: 4px solid #2563eb;
}

/* Párrafo seguido de una lista (aplicar margen extra) */
p:has(+ ul) {
  margin-bottom: 0.25rem;
}`}</code>
            </pre>

            <h3>5.2 Lo que antes requería JavaScript</h3>
            <pre>
              <code>{`/* Antes — necesitabas JS para esto */
document.querySelectorAll('form').forEach(form => {
  if (form.querySelector('input:invalid')) {
    form.classList.add('has-error');
  }
});
/* Y luego en CSS: form.has-error { outline: 2px solid red; } */

/* Ahora — solo CSS */
form:has(input:invalid) {
  outline: 2px solid #ef4444;
}`}</code>
            </pre>

            <h3>5.3 :has() para layout condicional</h3>
            <p>
              Un uso muy práctico: cambiar el layout de un contenedor según
              cuántos o qué tipo de hijos tiene.
            </p>
            <pre>
              <code>{`/* Grid de 1 columna si solo hay 1 hijo, 2 si hay más */
.grid:has(> :only-child) {
  grid-template-columns: 1fr;
}
.grid:has(> :nth-child(2)) {
  grid-template-columns: 1fr 1fr;
}

/* Menú de navegación: cambiar fondo si hay un item activo */
nav:has(.active) {
  background: #1e293b;
}

/* Sección con vídeo: dar más espacio vertical */
.post:has(video) {
  padding-block: 3rem;
}`}</code>
            </pre>

            <div className="callout warn">
              <code>:has()</code> no funciona en Firefox antes de la versión 121
              (diciembre 2023). En la práctica, a fecha de hoy (2026) el soporte
              es universal en navegadores modernos. Si necesitas soporte antiguo,
              usa <code>@supports selector(:has(a))</code> como fallback.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 6) ESPECIFICIDAD ========== */}
      <section className="doc-section" id="especificidad">
        <details className="dd" open>
          <summary>6) Cómo afectan estas pseudoclases a la especificidad</summary>
          <div className="dd-body">
            <p>
              Una de las cosas más importantes de estas cuatro pseudoclases es
              cómo se comportan con la especificidad. No todas igual.
            </p>

            <div
              className="table-wrap"
              role="region"
              aria-label="Especificidad de pseudoclases funcionales"
              tabIndex={0}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Pseudoclase</th>
                    <th>Especificidad que aporta</th>
                    <th>Ejemplo</th>
                    <th>Especificidad resultante</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>:not()</code>
                    </td>
                    <td>La del argumento más específico</td>
                    <td>
                      <code>a:not(.disabled)</code>
                    </td>
                    <td>0-1-1 (clase + elemento)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>:is()</code>
                    </td>
                    <td>La del argumento más específico</td>
                    <td>
                      <code>:is(#id, .class) p</code>
                    </td>
                    <td>1-0-1 (#id domina)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>:where()</code>
                    </td>
                    <td>Siempre 0</td>
                    <td>
                      <code>:where(#id, .class) p</code>
                    </td>
                    <td>0-0-1 (solo el p)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>:has()</code>
                    </td>
                    <td>La del argumento más específico</td>
                    <td>
                      <code>.card:has(img)</code>
                    </td>
                    <td>0-1-1 (clase + elemento)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <pre>
              <code>{`/* Demostración práctica */

/* :is() — especificidad 1-0-1 (el #main domina) */
:is(#main, .section) p { color: red; }

/* :where() — especificidad 0-0-1 */
:where(#main, .section) p { color: blue; }

/* Resultado: el párrafo será ROJO,
   porque :is() tiene mayor especificidad */

/* Ahora, una clase simple puede vencer a :where() */
.text-green p { color: green; }     /* 0-1-1 > 0-0-1 — vence a :where() */
.text-green p { color: green; }     /* 0-1-1 < 1-0-1 — pierde ante :is(#main) */`}</code>
            </pre>
          </div>
        </details>
      </section>

      {/* ========== 7) COMBINACIONES ========== */}
      <section className="doc-section" id="combinaciones">
        <details className="dd" open>
          <summary>7) Combinaciones útiles en proyectos reales</summary>
          <div className="dd-body">
            <p>
              El verdadero potencial aparece cuando combinas estas cuatro
              pseudoclases entre sí o con los selectores que ya conocías.
            </p>

            <h3>7.1 :has() + :not() — layout condicional preciso</h3>
            <pre>
              <code>{`/* Cards SIN imagen: layout de texto con padding normal */
.card:not(:has(img)) {
  padding: 1.5rem;
}

/* Cards CON imagen: sin padding, imagen a sangre */
.card:has(img) {
  padding: 0;
  overflow: hidden;
}`}</code>
            </pre>

            <h3>7.2 :has() + :is() — formularios accesibles sin JS</h3>
            <pre>
              <code>{`/* Campo con error: cambiar el label y el borde del input */
.field:has(:is(input, textarea, select):invalid) label {
  color: #dc2626;
}
.field:has(:is(input, textarea, select):invalid) :is(input, textarea, select) {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px #fee2e2;
}`}</code>
            </pre>

            <h3>7.3 :where() para un reset moderno</h3>
            <pre>
              <code>{`/* Reset que no "pesa" especificidad — cualquier cosa puede sobrescribirlo */
:where(*, *::before, *::after) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:where(h1, h2, h3, h4, h5, h6) {
  font-size: revert;
  font-weight: revert;
}

:where(ul, ol) {
  list-style: none;
}

:where(a) {
  color: inherit;
  text-decoration: none;
}`}</code>
            </pre>

            <h3>7.4 :has() para modo oscuro sin clase en body</h3>
            <pre>
              <code>{`/* Activa modo oscuro si el checkbox #dark-toggle está marcado */
html:has(#dark-toggle:checked) {
  --bg: #0f172a;
  --text: #f8fafc;
  --surface: #1e293b;
}

/* En HTML solo necesitas: */
/* <input type="checkbox" id="dark-toggle"> */
/* ¡Sin JavaScript para el toggle visual! */`}</code>
            </pre>

            <div className="callout tip">
              Este patrón de "toggle sin JS" funciona porque <code>:has()</code>{" "}
              puede escuchar el estado de un <code>input:checked</code> en
              cualquier parte del documento y propagar el cambio a toda la página
              reescribiendo custom properties.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 8) GOTCHAS ========== */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>8) Errores frecuentes — lo que más confunde</summary>
          <div className="dd-body">
            <div className="callout warn">
              <strong>Error 1 — Confundir :is() con :where()</strong>
              <pre style={{ marginTop: "0.5rem" }}>
                <code>{`/* Problema: usas :is() con un ID sin darte cuenta,
   y ahora todos los estilos de ese bloque tienen especificidad 1-0-x */
:is(#app, .container) p { font-size: 1rem; }

/* Solución: si no quieres ese peso, usa :where() */
:where(#app, .container) p { font-size: 1rem; }`}</code>
              </pre>
            </div>

            <div className="callout warn" style={{ marginTop: "1rem" }}>
              <strong>
                Error 2 — :has() con pseudo-elementos (no funciona)
              </strong>
              <pre style={{ marginTop: "0.5rem" }}>
                <code>{`/* ❌ No válido — :has() no acepta pseudo-elementos como argumento */
div:has(::before) { ... }

/* ✅ Sí válido — :has() acepta pseudoclases */
div:has(:first-child) { ... }
div:has(p:empty) { ... }`}</code>
              </pre>
            </div>

            <div className="callout warn" style={{ marginTop: "1rem" }}>
              <strong>Error 3 — :not() con selector vacío o inválido</strong>
              <pre style={{ marginTop: "0.5rem" }}>
                <code>{`/* ❌ :not() vacío no es válido */
a:not() { ... }

/* ❌ :not() con pseudo-elemento tampoco */
p:not(::first-line) { ... }

/* ✅ Correcto */
a:not([href]) { opacity: 0.5; }
p:not(:first-child) { margin-top: 1rem; }`}</code>
              </pre>
            </div>

            <div className="callout warn" style={{ marginTop: "1rem" }}>
              <strong>
                Error 4 — Usar :has() en el mismo elemento que quieres cambiar
              </strong>
              <pre style={{ marginTop: "0.5rem" }}>
                <code>{`/* ⚠️ Esto selecciona .card si contiene img,
   y aplica estilos a .card (el padre) ✅ */
.card:has(img) { padding: 0; }

/* ❌ Error de lógica: si quieres cambiar la img, no necesitas :has() */
.card:has(img) img { width: 100%; }  /* funciona pero es redundante */

/* ✅ Más simple para el hijo: */
.card img { width: 100%; }`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* ========== 9) TEST ========== */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>9) Test — comprueba que lo has entendido</summary>
          <div className="dd-body">
            <form onSubmit={submit}>
              {questions.map((q, i) => {
                const picked = answers[q.id];
                const ok = submitted && picked === q.correct;
                const bad = submitted && picked && picked !== q.correct;

                return (
                  <div className="card" key={q.id} style={{ marginTop: "1rem" }}>
                    <h3 style={{ marginTop: 0 }}>
                      {i + 1}. {q.q}
                    </h3>

                    <div
                      className="test-question"
                      role="group"
                      aria-label={`Pregunta ${i + 1}`}
                    >
                      {q.options.map((opt) => (
                        <label key={opt}>
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={picked === opt}
                            onChange={() => choose(q.id, opt)}
                            disabled={submitted}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>

                    {submitted && (
                      <div className={`callout ${ok ? "tip" : "warn"}`}>
                        {ok && (
                          <>
                            ✅ Correcta. <strong>{q.why}</strong>
                          </>
                        )}
                        {bad && (
                          <>
                            ❌ Incorrecta. Correcta:{" "}
                            <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                        {!picked && (
                          <>
                            ⚠️ Sin responder. Correcta:{" "}
                            <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="doc-next" style={{ gap: ".6rem" }}>
                {!submitted ? (
                  <button className="btn btn-primary" type="submit">
                    Corregir test
                  </button>
                ) : (
                  <>
                    <div className="badge" aria-live="polite">
                      Resultado: {score}/{questions.length}
                    </div>
                    <button className="btn" type="button" onClick={reset}>
                      Reintentar
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </details>
      </section>

      {/* ========== CIERRE ========== */}
      <section className="doc-section">
        <div className="callout tip">
          ✅ Resumen del tema:
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>:not()</strong> — excluye elementos sin añadir clases al
              HTML.
            </li>
            <li>
              <strong>:is()</strong> — agrupa selectores; hereda la
              especificidad del más pesado.
            </li>
            <li>
              <strong>:where()</strong> — igual que <code>:is()</code> pero con
              especificidad 0, perfecto para resets y bases sobreescribibles.
            </li>
            <li>
              <strong>:has()</strong> — el primer selector de padre de CSS;
              selecciona un elemento según lo que contiene.
            </li>
            <li>
              Combinadas entre sí resuelven problemas que antes requerían{" "}
              JavaScript o clases extra en el HTML.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
