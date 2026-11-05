import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

// V37 · Introducción práctica a SCSS (Sass)
// Pensado para alumnado que empieza desde cero con CSS.
// Objetivo: entender QUÉ es, CUÁNDO se usa y 3 superpoderes básicos
// (variables, nesting y ficheros parciales) sin abrumar.

export default function V37_SASS_Introduccion() {
  useEffect(() => {
    document.title = "V37 · Introducción a SCSS (Sass) sin liarse";
  }, []);

  // ==== Mini test muy básico ==== 
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué es realmente SCSS (Sass) para el navegador?",
        options: [
          "Un tipo nuevo de CSS que solo entienden navegadores modernos",
          "Un preprocesador que se compila a CSS normal",
          "Una librería de JavaScript",
          "Un sustituto de HTML",
        ],
        correct: "Un preprocesador que se compila a CSS normal",
        why:
          "El navegador solo entiende CSS. Tú escribes SCSS, una herramienta lo convierte a .css y eso es lo que carga la página.",
      },
      {
        id: "q2",
        q: "¿Por qué no puedes usar Sass correctamente sin saber CSS primero?",
        options: [
          "Porque Sass solo funciona en proyectos con Node.js instalado",
          "Porque Sass genera CSS — si no entiendes el resultado, no puedes detectar ni corregir errores",
          "Porque Sass y CSS son lenguajes completamente distintos",
          "Porque el navegador puede leer directamente archivos .scss sin compilar",
        ],
        correct:
          "Porque Sass genera CSS — si no entiendes el resultado, no puedes detectar ni corregir errores",
        why:
          "Sass es un traductor: convierte tu SCSS en CSS. Si no conoces CSS, no puedes saber si el CSS generado es correcto, eficiente o si tiene problemas de especificidad.",
      },
      {
        id: "q3",
        q: "¿Para qué sirven las variables SCSS ($primary, $space-md…)?",
        options: [
          "Para guardar valores repetidos (colores, tamaños, etc.) en un solo sitio",
          "Para crear animaciones",
          "Para escribir comentarios",
          "Para evitar usar clases en HTML",
        ],
        correct:
          "Para guardar valores repetidos (colores, tamaños, etc.) en un solo sitio",
        why:
          "Con variables puedes cambiar un color o un espaciado en un solo lugar y se actualiza en todos los estilos que lo usan.",
      },
      {
        id: "q4",
        q: "¿Qué ventaja práctica tiene el nesting (anidación) en SCSS?",
        options: [
          "Que el CSS generado es siempre más pequeño",
          "Que puedes agrupar los estilos de un mismo componente de forma visual",
          "Que ya no necesitas clases en el HTML",
          "Ninguna, solo complica el código",
        ],
        correct:
          "Que puedes agrupar los estilos de un mismo componente de forma visual",
        why:
          "El nesting te permite ver de un vistazo todo lo que afecta a, por ejemplo, .card y sus partes internas.",
      },
      {
        id: "q5",
        q: "¿Cuál de estas frases es la más sana para empezar?",
        options: [
          "Voy a reescribir todo mi CSS en SCSS el primer día",
          "Usaré SCSS solo para unas pocas cosas: variables, nesting suave y parciales",
          "Usaré todas las características de Sass a la vez",
          "No voy a mirar nunca el CSS generado",
        ],
        correct:
          "Usaré SCSS solo para unas pocas cosas: variables, nesting suave y parciales",
        why:
          "Al principio, menos es más. Domina bien unas pocas ideas antes de complicar la arquitectura.",
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
        <p className="doc-kicker">Extra · V37</p>
        <h1>SCSS (Sass) para principiantes: una ayuda, no un lío</h1>

        <p className="doc-lead">
          CSS es un lenguaje <strong>moderno y muy potente</strong>: tiene variables
          nativas, nesting, grid, flexbox y mucho más. Sass no viene a sustituirlo{" "}
          —{" "}<strong>viene a ayudarte a organizarlo mejor</strong> cuando los
          proyectos crecen. Por eso en este manual CSS va primero: sin esa base,
          Sass no tiene sentido.
        </p>

        <div className="callout tip">
          🎯 Objetivo: entender que Sass se apoya <strong>sobre</strong> CSS (no lo
          reemplaza), ver qué problemas concretos resuelve y aprender las tres
          herramientas esenciales: variables, nesting y archivos parciales.
        </div>

        <div className="callout">
          <strong>Lo que aprenderás:</strong>
          <ol style={{ marginBottom: 0 }}>
            <li>Por qué CSS no es anticuado y Sass no lo reemplaza</li>
            <li>Por qué sin dominar CSS no puedes usar Sass correctamente</li>
            <li>Qué aporta Sass (y qué no aporta)</li>
            <li>Las dos sintaxis: <code>.sass</code> y <code>.scss</code> — cuál usar</li>
            <li>Cómo se compila SCSS a CSS y qué flujo de trabajo implica</li>
            <li>Variables con <code>$</code>: nombres, tipos y dónde guardarlas</li>
            <li>Nesting suave: cuándo usarlo y cuándo evitarlo</li>
            <li>Un ejemplo completo de principio a fin</li>
          </ol>
        </div>

        <nav className="doc-index" aria-label="Índice de la lección">
          <h2>🧭 Índice</h2>
          <ol>
            <li>
              <a href="#css-base">0) CSS no es antiguo: el orden importa</a>
            </li>
            <li>
              <a href="#que-es">1) Qué problema concreto resuelve Sass (y qué no resuelve)</a>
            </li>
            <li>
              <a href="#scss-sintaxis">2) SCSS vs CSS: se parecen muchísimo</a>
            </li>
            <li>
              <a href="#compilar">3) Cómo se usa: compilar SCSS → CSS</a>
            </li>
            <li>
              <a href="#variables">4) Variables sencillas con $color-primary</a>
            </li>
            <li>
              <a href="#nesting">5) Nesting suave para componentes</a>
            </li>
            <li>
              <a href="#ejemplo">6) Ejemplo completo: de SCSS a CSS real</a>
            </li>
            <li>
              <a href="#test">7) Test de comprobación</a>
            </li>
          </ol>
        </nav>
      </header>

      {/* ========== 0) CSS NO ES ANTIGUO ========== */}
      <section className="doc-section" id="css-base">
        <details className="dd" open>
          <summary>0) CSS no es antiguo — Sass se construye encima de él</summary>
          <div className="dd-body">
            <p>
              Antes de empezar con Sass hay que desmontar una idea equivocada muy
              frecuente:{" "}
              <strong>
                CSS no es un lenguaje viejo que hay que "superar con Sass"
              </strong>
              . Es todo lo contrario.
            </p>

            <div className="callout tip">
              CSS en 2025 tiene <strong>variables nativas</strong> (
              <code>--color-primary</code>), <strong>nesting nativo</strong> (ya
              soportado en todos los navegadores modernos),{" "}
              <strong>@layer</strong> para organizar el cascade,{" "}
              <strong>container queries</strong> para responsive por componente,{" "}
              <strong>:has()</strong> para selectores de padre... CSS es un
              lenguaje vivo que evoluciona muy rápido.
            </div>

            <h3>¿Qué es Sass entonces?</h3>
            <p>
              Sass es un <strong>preprocesador</strong>: una herramienta externa
              que toma tu código (escrito en formato SCSS) y lo{" "}
              <strong>convierte a CSS normal</strong>. El navegador{" "}
              <strong>nunca ve SCSS</strong> — solo ve el CSS resultante.
            </p>

            <pre>
              <code>{`Tu archivo .scss  →  herramienta Sass  →  archivo .css  →  navegador`}</code>
            </pre>

            <h3>¿Por qué no puedes usar Sass sin dominar CSS antes?</h3>
            <p>
              Porque Sass <strong>no añade layout, no enseña el modelo de
              caja, no mejora la especificidad ni crea sistemas responsive</strong>.
              Todo eso sigue siendo CSS puro. Sass es como una impresora: si el
              texto que le das está mal escrito, la impresora lo imprimirá igual
              de mal pero en papel bonito.
            </p>

            <div className="callout warn">
              💡 Ejemplo real: si no entiendes cómo funciona la{" "}
              <strong>especificidad</strong> en CSS, usar nesting profundo en
              SCSS generará selectores con especificidad altísima que romperán
              tu diseño y serán muy difíciles de depurar. Sass amplifica lo que
              ya sabes, <strong>para bien o para mal</strong>.
            </div>

            <div
              className="table-wrap"
              role="region"
              aria-label="CSS solo vs Sass encima"
              tabIndex={0}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Lo hace CSS (sin Sass)</th>
                    <th>Sass añade encima de CSS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Flexbox, Grid, posicionamiento</td>
                    <td>
                      Variables con lógica (<code>$breakpoint-md</code>)
                    </td>
                  </tr>
                  <tr>
                    <td>Cascade, herencia, especificidad</td>
                    <td>Nesting para agrupar un componente visualmente</td>
                  </tr>
                  <tr>
                    <td>Media queries, responsive design</td>
                    <td>Mixins reutilizables (p.ej. un mixin de media query)</td>
                  </tr>
                  <tr>
                    <td>
                      Custom properties (<code>--var</code>), animaciones
                    </td>
                    <td>
                      Archivos parciales para dividir el proyecto en módulos
                    </td>
                  </tr>
                  <tr>
                    <td>Selectores, pseudoclases, pseudoelementos</td>
                    <td>Bucles y funciones para generar CSS repetitivo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              Conclusión: <strong>estudias CSS porque es la base</strong> —
              lo que ve el navegador, lo que maqueta la página, lo que define
              cada propiedad visual. Sass es la capa de organización que se
              pone encima cuando el proyecto es lo suficientemente grande para
              necesitarla. Sin CSS bien aprendido, Sass no aporta nada útil.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 1) QUÉ PROBLEMA RESUELVE ========== */}
      <section className="doc-section" id="que-es">
        <details className="dd" open>
          <summary>1) ¿Qué problema concreto resuelve Sass (y qué NO resuelve)?</summary>
          <div className="dd-body">
            <p>
              Imagina un proyecto con 30 componentes. Usas el mismo color de
              marca en 200 líneas de CSS repartidas en 8 archivos. El cliente
              cambia el color. Sin Sass tienes que editar 200 líneas. Con Sass,
              cambias <strong>una variable</strong> y se actualiza todo.
            </p>

            <h3>Sin Sass — proyecto mediano</h3>
            <pre>
              <code>{`/* styles.css — todo en un archivo largo */
.btn         { background: #2563eb; }
.header      { background: #2563eb; }
.link:hover  { color: #2563eb; }
.badge       { border: 2px solid #2563eb; }
/* ... y otras 196 líneas con #2563eb ... */`}</code>
            </pre>

            <h3>Con Sass — mismo proyecto</h3>
            <pre>
              <code>{`// _variables.scss  ← cambias aquí y listo
$color-primary: #2563eb;

// _buttons.scss
.btn { background: $color-primary; }

// _header.scss
.header { background: $color-primary; }

// _links.scss
.link:hover { color: $color-primary; }`}</code>
            </pre>

            <div className="callout tip">
              Sass resuelve un <strong>problema de organización y
              mantenimiento</strong>, no un problema de maquetación.{" "}
              Si tu proyecto es pequeño (una página, pocos componentes), CSS
              puro puede ser perfectamente suficiente.
            </div>

            <h3>1.1 "Pero CSS ya tiene variables con <code>--color-primary</code>… ¿qué aporta Sass?</h3>
            <p>
              Esta es la pregunta clave. La respuesta corta:{" "}
              <strong>
                las variables CSS y las variables Sass son herramientas
                distintas que conviven
              </strong>
              , y Sass añade cosas que CSS nativo no puede hacer.
            </p>

            <div
              className="table-wrap"
              role="region"
              aria-label="CSS variables vs Sass variables"
              tabIndex={0}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Variable CSS nativa (<code>--color</code>)</th>
                    <th>Variable Sass (<code>$color</code>)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>El navegador la resuelve en tiempo real</td>
                    <td>Desaparece al compilar — el navegador nunca la ve</td>
                  </tr>
                  <tr>
                    <td>Se puede cambiar con JavaScript</td>
                    <td>No se puede cambiar en tiempo de ejecución</td>
                  </tr>
                  <tr>
                    <td>Se puede redefinir dentro de una media query</td>
                    <td>Solo existe en tiempo de compilación</td>
                  </tr>
                  <tr>
                    <td>No admite lógica ni operaciones matemáticas</td>
                    <td>
                      Sí admite lógica: <code>@if</code>, <code>@for</code>,
                      funciones como <code>lighten($color, 10%)</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Perfecta para temas dinámicos y modo oscuro</td>
                    <td>Perfecta para generar CSS repetitivo de forma inteligente</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Veámoslo con un ejemplo. Con CSS nativo puedes hacer esto:
            </p>
            <pre>
              <code>{`/* CSS: variable nativa — funciona en el navegador */
:root { --color-primary: #2563eb; }
.btn  { background: var(--color-primary); }

/* Puedes cambiarla con JS: */
document.documentElement.style.setProperty('--color-primary', '#e11d48');`}</code>
            </pre>

            <p>
              Eso es potente para temas dinámicos. Pero CSS nativo{" "}
              <strong>no puede hacer esto</strong>:
            </p>
            <pre>
              <code>{`// Sass: genera automáticamente 5 variantes de color
$sizes: (sm: 0.75rem, md: 1rem, lg: 1.5rem, xl: 2rem);

@each $name, $value in $sizes {
  .text-#{$name} { font-size: $value; }
}

// Resultado CSS generado:
// .text-sm { font-size: 0.75rem; }
// .text-md { font-size: 1rem; }
// .text-lg { font-size: 1.5rem; }
// .text-xl { font-size: 2rem; }`}</code>
            </pre>

            <pre>
              <code>{`// Sass: función que genera un color más claro automáticamente
$primary: #2563eb;
$primary-light: lighten($primary, 20%);  // #7da8f4 calculado por Sass

.btn-ghost { color: $primary-light; }`}</code>
            </pre>

            <div className="callout">
              Resumen claro:{" "}
              <strong>
                las variables CSS nativas son dinámicas (viven en el navegador,
                responden a JS y media queries)
              </strong>
              . Las variables Sass son{" "}
              <strong>
                estáticas y con lógica (Sass las usa para calcular y generar
                CSS antes de que llegue al navegador)
              </strong>
              . No son rivales — muchos proyectos usan las dos a la vez:
              Sass para la lógica de generación y CSS custom properties para
              los temas dinámicos.
            </div>

            <p>
              Y más allá de las variables, Sass aporta otras tres cosas que
              CSS nativo no tiene de forma tan completa:
            </p>
            <ul>
              <li>
                <strong>Mixins</strong>: bloques de estilos reutilizables que
                aceptan parámetros, como una función que escupe CSS.
              </li>
              <li>
                <strong>Archivos parciales (<code>@use</code>)</strong>: divide
                tu CSS en decenas de archivos pequeños y Sass los une en uno
                solo al compilar — sin HTTP extra.
              </li>
              <li>
                <strong>Lógica (<code>@if</code>, <code>@for</code>, <code>@each</code>)</strong>: genera
                CSS repetitivo (escalas de espaciado, variantes de color,
                grid automático) sin copiar y pegar.
              </li>
            </ul>

            <h3>¿Qué NO resuelve Sass?</h3>
            <p>
              Es igual de importante saber lo que Sass <em>no</em> hace:
            </p>
            <ul>
              <li>
                <strong>No enseña a maquetar.</strong> Flexbox, Grid y el
                modelo de caja son CSS — Sass no los toca ni los mejora.
              </li>
              <li>
                <strong>No mejora el rendimiento.</strong> El CSS que genera
                Sass puede ser tan grande o tan eficiente como el que escribirías
                a mano.
              </li>
              <li>
                <strong>No corrige errores de diseño.</strong> Si tu lógica de
                estilos está mal pensada, Sass la reproducirá tal cual.
              </li>
              <li>
                <strong>No es imprescindible.</strong> Muchos proyectos
                modernos usan CSS puro con custom properties y @layer sin
                necesitar Sass.
              </li>
            </ul>

            <div className="callout">
              En una frase:{" "}
              <strong>
                Sass te ayuda a organizar y escribir mejor el CSS que ya
                sabes
              </strong>
              , pero lo que acaba en el navegador sigue siendo CSS normal.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 2) SCSS VS CSS (SINTAXIS) ========== */}
      <section className="doc-section" id="scss-sintaxis">
        <details className="dd" open>
          <summary>2) SCSS frente a CSS: se parecen muchísimo</summary>
          <div className="dd-body">
            <p>
              La sintaxis que usaremos es <strong>SCSS</strong>. La idea clave es que
              <strong> cualquier CSS válido también es SCSS válido</strong>. Eso significa
              que puedes copiar tu CSS tal cual y empezar a añadir pequeñas mejoras.
            </p>

            <div className="table-wrap" role="region" aria-label="CSS vs SCSS" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>CSS</th>
                    <th>SCSS equivalente</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <pre>
                        <code>{`button {
  padding: 0.75rem 1rem;
  border-radius: 999px;
}`}</code>
                      </pre>
                    </td>
                    <td>
                      <pre>
                        <code>{`button {
  padding: 0.75rem 1rem;
  border-radius: 999px;
}`}</code>
                      </pre>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              No tienes que “aprender otro lenguaje”. Solo vas a añadir <strong>unos
              pocos extras</strong> sobre el CSS que ya conoces.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 3) COMPILAR SCSS → CSS ========== */}
      <section className="doc-section" id="compilar">
        <details className="dd" open>
          <summary>3) ¿Dónde encaja SCSS en el flujo de trabajo?</summary>
          <div className="dd-body">
            <p>
              El navegador <strong>no</strong> carga archivos <code>.scss</code>.
              Siempre cargas un <code>.css</code>. El paso intermedio es una pequeña
              herramienta que traduce SCSS → CSS.
            </p>

            <pre>
              <code>{`# Ejemplo muy sencillo (línea de comandos)
sass styles/main.scss styles/main.css

# Modo "watch" mientras trabajas
sass --watch styles/main.scss:styles/main.css`}</code>
            </pre>

            <div className="callout tip">
              En proyectos con React/Vite, esa traducción suele hacerla el propio
              sistema de build. Para aprender, piensa en ello como “guardar un
              .scss y que se actualice tu .css automáticamente”.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 4) VARIABLES SENCILLAS ========== */}
      <section className="doc-section" id="variables">
        <details className="dd" open>
          <summary>4) Variables SCSS: un solo sitio para tus colores y tamaños</summary>
          <div className="dd-body">
            <p>
              El primer superpoder útil son las <strong>variables</strong>. En SCSS
              se escriben con <code>$</code> al principio del nombre.
            </p>

            <pre>
              <code>{`// _tokens.scss (parcial)
$color-primary: #2563eb;
$color-accent: #f97316;
$radius-pill: 999px;

button {
  border-radius: $radius-pill;
  background: $color-primary;
}

button--secondary {
  background: $color-accent;
}`}</code>
            </pre>

            <div className="callout tip">
              Más adelante podrás combinar estas variables SCSS con <strong>CSS
              custom properties</strong>, pero para empezar, quédate con la idea:
              “no repitas valores importantes a mano”.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 5) NESTING SUAVE ========== */}
      <section className="doc-section" id="nesting">
        <details className="dd" open>
          <summary>5) Nesting: agrupar estilos de un componente sin pasarse</summary>
          <div className="dd-body">
            <p>
              El nesting te permite escribir los estilos de un componente juntos,
              sin repetir el selector todo el rato. Importante: <strong>no</strong>
              anides más de 2–3 niveles.
            </p>

            <pre>
              <code>{`.card {
  padding: 1rem;
  border-radius: 1rem;

  &__title {
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  &__actions {
    display: flex;
    gap: 0.5rem;
  }
}`}</code>
            </pre>

            <div className="callout warn">
              Si ves que empiezas a anidar 4, 5 o más niveles, normalmente el
              problema no es Sass, sino la <strong>estructura del HTML</strong> o
              la arquitectura del CSS.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 6) MINI EJEMPLO GUIADO ========== */}
      <section className="doc-section" id="ejemplo">
        <details className="dd" open>
          <summary>6) Ejemplo: de un pequeño SCSS a CSS real</summary>
          <div className="dd-body">
            <p>
              Vamos a ver de forma muy visual qué escribes tú y qué se genera.
            </p>

            <h3>6.1 Lo que tú escribes (SCSS)</h3>
            <pre>
              <code>{`// main.scss
$primary: #2563eb;

.btn {
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: none;
  background: $primary;
  color: white;

  &--outline {
    background: transparent;
    border: 2px solid $primary;
    color: $primary;
  }
}`}</code>
            </pre>

            <h3>6.2 Lo que ve el navegador (CSS generado)</h3>
            <pre>
              <code>{`.btn {
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: none;
  background: #2563eb;
  color: white;
}

.btn--outline {
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: 2px solid #2563eb;
  background: transparent;
  color: #2563eb;
}`}</code>
            </pre>

            <div className="callout">
              Fíjate en dos ideas clave:
              <ul style={{ marginBottom: 0 }}>
                <li>El navegador nunca ve <code>$primary</code>, solo el color final.</li>
                <li>
                  El nesting se transforma en selectores normales (.btn y
                  .btn--outline).
                </li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* ========== 7) TEST FINAL ========== */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>7) Test corto para comprobar que lo has pillado</summary>
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

                    <div className="test-question" role="group" aria-label={`Pregunta ${i + 1}`}>
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
                            ❌ Incorrecta. Correcta: <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                        {!picked && (
                          <>
                            ⚠️ Sin responder. Correcta: <strong>{q.correct}</strong>. {q.why}
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

      {/* ========== 8) CIERRE ========== */}
      <section className="doc-section">
        <div className="callout tip">
          ✅ Resumen rápido:
          <ul style={{ marginBottom: 0 }}>
            <li>Sass/SCSS es una <strong>ayuda opcional</strong> sobre tu CSS, no otro mundo.</li>
            <li>El navegador solo ve el <strong>CSS generado</strong>.</li>
            <li>Empieza usando solo <strong>variables</strong>, <strong>nesting suave</strong> y uno o dos archivos parciales.</li>
            <li>Cuando eso te resulte natural, podrás explorar mixins, funciones y arquitecturas más avanzadas.</li>
            <li>
              Código del manual en GitHub:{" "}
              <a
                href="https://github.com/inma2709/manualcss"
                target="_blank"
                rel="noreferrer noopener"
              >
                github.com/inma2709/manualcss
              </a>
            </li>
            <li>
              <Link to="/ejercicios">
                🏋️ 20 ejercicios progresivos: HTML, CSS, Bootstrap y Tailwind
              </Link>{" "}
              — practica todo lo del manual con retos reales.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
