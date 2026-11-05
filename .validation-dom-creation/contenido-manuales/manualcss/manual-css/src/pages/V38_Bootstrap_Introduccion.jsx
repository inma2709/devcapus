import { useEffect, useMemo, useState } from "react";

/**
 * EXTRA · E02 — Bootstrap (5.x) desde cero hasta uso profesional
 * ✅ Enfoque manual: qué es, cuándo usarlo, cómo integrarlo, grid, utilidades,
 *    componentes, accesibilidad, personalización, theming, Bootstrap + tu CSS,
 *    y patrones reales (navbar, layout docs, formularios, modales).
 *
 * Nota: Bootstrap evoluciona; la idea del tema es sólida aunque cambien detalles menores.
 * En clase, lo importante es dominar: grid, utilities, componentes y personalización.
 */
export default function V38_Bootstrap_Introduccion() {
  useEffect(() => {
    document.title =
      "V38 · Bootstrap: de cero a nivel profesional (grid, utilities, componentes y personalización)";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué es Bootstrap en esencia?",
        options: [
          "Un lenguaje de programación",
          "Un framework de UI basado en CSS/JS con sistema de grid, utilidades y componentes",
          "Un CMS",
          "Un motor de base de datos",
        ],
        correct:
          "Un framework de UI basado en CSS/JS con sistema de grid, utilidades y componentes",
        why:
          "Bootstrap es una biblioteca de estilos y componentes listos para usar con un sistema de layout consistente.",
      },
      {
        id: "q2",
        q: "¿Cuál es el principio que hace que Bootstrap sea rápido de prototipar?",
        options: [
          "Usar floats",
          "Usar clases utilitarias y componentes predefinidos",
          "No usar CSS",
          "Usar solo tablas",
        ],
        correct: "Usar clases utilitarias y componentes predefinidos",
        why:
          "Las utilities y componentes te evitan escribir CSS repetido y te dan consistencia visual.",
      },
      {
        id: "q3",
        q: "En el grid de Bootstrap, ¿qué significa col-md-6?",
        options: [
          "Siempre 6 columnas",
          "En ≥ md ocupa 6 de 12 (mitad), en < md se apila por defecto",
          "En móviles ocupa la mitad",
          "Crea 6 filas",
        ],
        correct:
          "En ≥ md ocupa 6 de 12 (mitad), en < md se apila por defecto",
        why:
          "Bootstrap es mobile-first: col-md-* se aplica desde md hacia arriba; por debajo vuelve al comportamiento base.",
      },
      {
        id: "q4",
        q: "¿Cuál es una regla PRO para mezclar Bootstrap con CSS propio?",
        options: [
          "Sobrescribir todo con !important",
          "Cambiar CSS en línea",
          "Usar variables/Sass de Bootstrap o una capa propia de tokens y añadir componentes encima",
          "Eliminar las utilities",
        ],
        correct:
          "Usar variables/Sass de Bootstrap o una capa propia de tokens y añadir componentes encima",
        why:
          "Mantienes coherencia y evitas una guerra de especificidad. Personalizas sin romper el framework.",
      },
      {
        id: "q5",
        q: "¿Qué consejo es clave para accesibilidad al usar componentes Bootstrap?",
        options: [
          "Quitar aria-* para simplificar",
          "Conservar estructura/atributos recomendados y probar teclado/foco",
          "Usar solo color para indicar estados",
          "Desactivar el foco para estética",
        ],
        correct:
          "Conservar estructura/atributos recomendados y probar teclado/foco",
        why:
          "Bootstrap ya trae patrones accesibles si respetas su estructura y validas interacción con teclado y lector.",
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
        <p className="doc-kicker">Extra · E02</p>
        <h1>Bootstrap PRO: del “copiar-pegar” a usarlo con criterio profesional</h1>

        <p className="doc-lead">
          Bootstrap es una herramienta potentísima para construir interfaces consistentes
          con rapidez. Pero el salto a nivel profesional ocurre cuando entiendes:
          <strong> grid, utilities, componentes, accesibilidad, personalización</strong>{" "}
          y cómo integrarlo con tu propio diseño sin pelearte con el CSS.
        </p>

        <div className="callout tip">
          🎯 Objetivo del tema: que puedas usar Bootstrap en proyectos reales (empresa/producción)
          sin caer en “Frankenstein CSS”.
        </div>

       

       

        <nav className="doc-index" aria-label="Índice de Bootstrap">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#intro-bootstrap">0) Introducción: qué es, los 3 pilares y cómo instalarlo</a></li>
            <li><a href="#que-es">1) Qué es Bootstrap y cuándo conviene</a></li>
            <li><a href="#instalacion">2) Cómo integrarlo (CDN, npm, bundlers)</a></li>
            <li><a href="#filosofia">3) Filosofía: mobile-first, utilities y componentes</a></li>
            <li><a href="#grid">4) El Grid (la columna vertebral)</a></li>
            <li><a href="#utilidades">5) Utilities: spacing, flex, display, sizing…</a></li>
            <li><a href="#componentes">6) Componentes clave (buttons, nav, cards, alerts…)</a></li>
            <li><a href="#forms">7) Formularios (validación, estados, UX)</a></li>
            <li><a href="#navbars">8) Navbar y navegación responsive</a></li>
            <li><a href="#modals">9) Modales, dropdowns y tooltips (JS + A11y)</a></li>
            <li><a href="#accesibilidad">10) Accesibilidad en Bootstrap (lo que debes revisar)</a></li>
            <li><a href="#custom">11) Personalización PRO (variables, Sass, theming)</a></li>
            <li><a href="#integracion">12) Bootstrap + tu CSS: estrategia sin guerras</a></li>
            <li><a href="#patrones">13) Patrones reales de layout (landing y dashboard)</a></li>
            <li><a href="#gotchas">14) Errores típicos y cómo depurar</a></li>
            <li><a href="#retos">15) Retos prácticos</a></li>
            <li><a href="#test">16) Test final</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= BLOQUE INTRODUCTORIO ================= */}
      <section className="doc-section" id="intro-bootstrap">
        <h2>¿Qué es Bootstrap y cómo se usa?</h2>

        <p>
          <strong>Bootstrap</strong> es el framework CSS más popular del mundo. Creado por Twitter
          en 2011, ofrece un conjunto de estilos, utilidades y componentes listos para usar que
          permiten construir interfaces web <strong>consistentes y responsivas</strong> sin escribir
          CSS desde cero.
        </p>

        <p>
          Se basa en tres pilares fundamentales:
        </p>

        <ul>
          <li>
            <strong>Sistema de Grid</strong>: layout de 12 columnas con breakpoints responsivos
            (xs, sm, md, lg, xl, xxl).
          </li>
          <li>
            <strong>Utilidades</strong>: clases de una sola responsabilidad para espaciado,
            colores, flexbox, tipografía… (<code>m-3</code>, <code>d-flex</code>,
            <code>text-center</code>…).
          </li>
          <li>
            <strong>Componentes</strong>: piezas de UI preconstruidas: navbar, card, modal,
            alert, button, form, tooltip…
          </li>
        </ul>

        <div className="callout tip">
          <strong>Bootstrap 5</strong> (versión actual) eliminó la dependencia de jQuery.
          Funciona con JavaScript nativo del navegador.
        </div>

        {/* --- Instalación --- */}
        <h3 style={{ marginTop: "1.5rem" }}>¿Cómo se instala / importa?</h3>

        <p>Tienes dos formas principales:</p>

        <h4>Opción A — CDN (ideal para aprender y hacer demos rápidas)</h4>
        <p>
          Son <strong>exactamente dos líneas</strong> que añades a tu HTML:
        </p>
        <pre>
          <code>{`<!-- LÍNEA 1: CSS → dentro del <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

<!-- LÍNEA 2: JS → justo antes de cerrar </body> -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`}</code>
        </pre>

        <p>Y ya está. En contexto dentro de un HTML completo quedaría así:</p>
        <pre>
          <code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">  <!-- obligatorio para responsive -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body>

  <!-- Tu contenido aquí -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}</code>
        </pre>

        <div className="callout warn">
          El <code>&lt;meta name="viewport"&gt;</code> es <strong>obligatorio</strong>:
          sin él el responsive no funciona correctamente en móviles.
        </div>

        <div className="callout">
          <strong>¿Qué es Popper?</strong> Es una librería externa que Bootstrap usa
          internamente para calcular la <strong>posición</strong> de elementos flotantes:
          dropdowns, tooltips y popovers. Sin ella esos componentes no saben dónde
          situarse en pantalla. El archivo <code>bootstrap.bundle.min.js</code> ya
          la lleva dentro (de ahí el nombre <em>bundle</em>), así que no tienes que
          importarla por separado.
        </div>

        <h4>Opción B — npm + bundler (proyectos reales con Vite, Webpack…)</h4>
        <p>Instala el paquete y luego impórtalo en tu punto de entrada:</p>
        <pre>
          <code>{`# 1. Instalar
npm install bootstrap

# 2. En tu archivo de entrada (main.js / main.jsx / index.js)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";`}</code>
        </pre>

        <div className="callout tip">
          Con Vite puedes también importar el Sass fuente de Bootstrap para personalizarlo
          con variables:{" "}
          <code>import "bootstrap/scss/bootstrap.scss"</code> (requiere{" "}
          <code>npm install sass</code>).
        </div>

        <div className="callout">
          <strong>Regla de oro:</strong> el CSS siempre debe cargarse <em>antes</em> que tu
          propio CSS para que puedas sobrescribir estilos de Bootstrap sin problemas de
          especificidad.
        </div>
      </section>

      {/* ================= 1) QUÉ ES ================= */}
      <section className="doc-section" id="que-es">
        <details className="dd" open>
          <summary>1) Qué es Bootstrap y cuándo conviene (criterio profesional)</summary>
          <div className="dd-body">
            <p>
              Bootstrap es un framework de interfaz que ofrece:
              <strong> sistema de grid</strong>, <strong>utilities</strong> y{" "}
              <strong>componentes</strong> preconstruidos con un diseño consistente.
              Te permite montar una UI funcional rápidamente, sobre todo en equipos.
            </p>

            <div className="table-wrap" role="region" aria-label="Cuándo usar Bootstrap" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Situación</th>
                    <th>Bootstrap encaja</th>
                    <th>Quizá NO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Prototipo rápido / MVP</td>
                    <td>✅ Mucho</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>Panel admin / backoffice</td>
                    <td>✅ Muy común</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>Equipo grande (consistencia)</td>
                    <td>✅ Ayuda muchísimo</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>Diseño ultra custom (branding extremo)</td>
                    <td>⚠️ Sí, pero con Sass/variables y disciplina</td>
                    <td>✅ Si no quieres depender del framework</td>
                  </tr>
                  <tr>
                    <td>Aprender CSS “puro” desde cero</td>
                    <td>⚠️ Úsalo después de dominar base</td>
                    <td>✅ Si aún no controlas layout</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              Bootstrap es ideal cuando priorizas <strong>consistencia y velocidad</strong>.
              El uso PRO está en personalizarlo y no pelearte con él.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 2) INSTALACIÓN ================= */}
      <section className="doc-section" id="instalacion">
        <details className="dd" open>
          <summary>2) Cómo integrarlo (CDN, npm, bundlers)</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>2.1 CDN (rápido para clase y demos)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- CSS (head) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

<!-- JS bundle (antes de cerrar body) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`}</code>
                </pre>
                <div className="callout warn">
                  CDN es perfecto para aprender, pero en producción solemos preferir npm/bundler
                  por control de versiones y builds reproducibles.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>2.2 NPM (proyectos reales)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`npm i bootstrap

/* En tu entrypoint (ej: main.js o main.scss) */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";`}</code>
                </pre>
              </div>
            </details>

            <div className="callout tip">
              Consejo didáctico: para este manual, puedes empezar con CDN
              y luego enseñar npm cuando el alumno ya entienda el framework.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 3) FILOSOFÍA ================= */}
      <section className="doc-section" id="filosofia">
        <details className="dd" open>
          <summary>3) Filosofía Bootstrap: mobile-first, utilities y componentes</summary>
          <div className="dd-body">
            <p>
              Bootstrap se entiende mejor si lo ves como 3 capas:
            </p>

            <ul>
              <li>
                <strong>Layout</strong> (Grid): estructura de página, columnas, contenedores.
              </li>
              <li>
                <strong>Utilities</strong>: clases pequeñas que hacen 1 cosa (m-3, p-2, d-flex…).
              </li>
              <li>
                <strong>Componentes</strong>: piezas completas (navbar, card, modal, alert…).
              </li>
            </ul>

            <div className="callout">
              Mobile-first en Bootstrap significa:
              <ul style={{ marginBottom: 0 }}>
                <li>Las clases sin breakpoint aplican a móvil.</li>
                <li><code>-sm</code>, <code>-md</code>, <code>-lg</code>… “mejoran” desde ese tamaño hacia arriba.</li>
              </ul>
            </div>

            <details className="dd dd-nested" open>
              <summary>📐 Tabla de breakpoints de Bootstrap 5 (referencia esencial)</summary>
              <div className="dd-body">
                <p>Bootstrap define <strong>6 breakpoints</strong>. Memorizarlos te ahorrará consultar la documentación constantemente:</p>
                <div className="table-wrap" role="region" aria-label="Breakpoints de Bootstrap 5" tabIndex={0}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Prefijo de clase</th>
                        <th>Ancho mínimo</th>
                        <th>Uso típico</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Extra small</td>
                        <td><code>col-</code> (sin prefijo)</td>
                        <td>&lt; 576 px</td>
                        <td>Mobile muy pequeño (por defecto)</td>
                      </tr>
                      <tr>
                        <td>Small</td>
                        <td><code>col-sm-</code></td>
                        <td>≥ 576 px</td>
                        <td>Mobile normal (≥ iPhone SE)</td>
                      </tr>
                      <tr>
                        <td>Medium</td>
                        <td><code>col-md-</code></td>
                        <td>≥ 768 px</td>
                        <td>Tablet</td>
                      </tr>
                      <tr>
                        <td>Large</td>
                        <td><code>col-lg-</code></td>
                        <td>≥ 992 px</td>
                        <td>Desktop pequeño / laptop</td>
                      </tr>
                      <tr>
                        <td>Extra large</td>
                        <td><code>col-xl-</code></td>
                        <td>≥ 1200 px</td>
                        <td>Desktop normal</td>
                      </tr>
                      <tr>
                        <td>Extra extra large</td>
                        <td><code>col-xxl-</code></td>
                        <td>≥ 1400 px</td>
                        <td>Pantallas grandes / TV</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="callout tip">
                  Los mismos prefijos sirven para <strong>todas las utilities responsive</strong>:
                  <code>d-md-none</code>, <code>text-lg-start</code>, <code>p-xl-5</code>…
                  El patrón es siempre: <em>propiedad-breakpoint-valor</em>.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 4) GRID ================= */}
      <section className="doc-section" id="grid">
        <details className="dd" open>
          <summary>4) El Grid de Bootstrap (la columna vertebral)</summary>
          <div className="dd-body">
            <p>
              El grid de Bootstrap se basa en:
              <code> container</code> → <code> row</code> → <code> col-*</code>.
              El sistema estándar divide el ancho en <strong>12 columnas</strong>.
            </p>

            <details className="dd dd-nested" open>
              <summary>4.1 Ejemplo mínimo: 1 columna en móvil, 2 en md</summary>
              <div className="dd-body">
                <p>
                  La estructura siempre sigue este orden estricto:
                  <code>container</code> → <code>row</code> → <code>col</code>.
                  Si saltas un nivel el grid no funciona bien.
                </p>
                <pre>
                  <code>{`<!-- 1. container: centra el contenido y añade padding lateral -->
<div class="container">

  <!-- 2. row: crea la fila y gestiona el espacio entre columnas -->
  <!--    g-3 = gap de 1rem (escala del 0 al 5) entre cols y filas -->
  <div class="row g-3">

    <!-- 3. col: col-12 → ocupa 12/12 = 100% en móvil (se apila) -->
    <!--         col-md-6 → desde 768px ocupa 6/12 = 50% (lado a lado) -->
    <div class="col-12 col-md-6">
      <div class="p-3 border rounded">Columna A</div>
    </div>

    <div class="col-12 col-md-6">
      <div class="p-3 border rounded">Columna B</div>
    </div>

  </div>
</div>`}</code>
                </pre>

                <div className="callout tip">
                  <strong>La matemática del grid:</strong> las columnas de una fila deben sumar 12
                  (o menos, si quieres espacio sobrante). Ejemplos comunes:
                  <ul style={{ marginBottom: 0 }}>
                    <li><code>col-12</code> → 1 columna (100%)</li>
                    <li><code>col-6 col-6</code> → 2 iguales (50% + 50%)</li>
                    <li><code>col-4 col-4 col-4</code> → 3 iguales (33,3% cada una)</li>
                    <li><code>col-8 col-4</code> → contenido + aside (66% + 33%)</li>
                  </ul>
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>4.2 Contenedores: container vs container-fluid</summary>
              <div className="dd-body">
                <div className="table-wrap" role="region" aria-label="Contenedores Bootstrap" tabIndex={0}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Clase</th>
                        <th>Qué hace</th>
                        <th>Uso típico</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>.container</code></td>
                        <td>Ancho centrado con max-width por breakpoints</td>
                        <td>Contenido principal, páginas normales</td>
                      </tr>
                      <tr>
                        <td><code>.container-fluid</code></td>
                        <td>Ocupa 100% del ancho siempre</td>
                        <td>Secciones full width, hero, fondos</td>
                      </tr>
                      <tr>
                        <td><code>.container-lg</code> (etc.)</td>
                        <td>Fluido hasta ese breakpoint, luego centrado</td>
                        <td>Control fino de layout</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>4.3 Alineación y orden en el grid</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<div class="row align-items-center">
  <div class="col-12 col-lg-7 order-2 order-lg-1">Texto</div>
  <div class="col-12 col-lg-5 order-1 order-lg-2">Imagen</div>
</div>`}</code>
                </pre>

                <div className="callout warn">
                  El orden visual no debe romper la lógica del DOM si afecta a accesibilidad.
                  Úsalo con criterio (y prueba teclado/lector).
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 5) UTILITIES ================= */}
      <section className="doc-section" id="utilidades">
        <details className="dd" open>
          <summary>5) Utilities: productividad sin inflar tu CSS</summary>
          <div className="dd-body">
            <p>
              Las utilities son clases pequeñas para tareas comunes. Si un alumno entiende estas 5 familias,
              ya puede maquetar casi todo:
            </p>

            <div className="table-wrap" role="region" aria-label="Utilities Bootstrap" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Familia</th>
                    <th>Ejemplos</th>
                    <th>Para qué</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Spacing</td>
                    <td><code>m-3</code>, <code>mt-4</code>, <code>p-2</code>, <code>px-3</code></td>
                    <td>Márgenes y padding</td>
                  </tr>
                  <tr>
                    <td>Display</td>
                    <td><code>d-none</code>, <code>d-flex</code>, <code>d-lg-block</code></td>
                    <td>Mostrar/ocultar y tipos de display</td>
                  </tr>
                  <tr>
                    <td>Flex</td>
                    <td><code>justify-content-between</code>, <code>gap-2</code>, <code>flex-wrap</code></td>
                    <td>Alineación rápida</td>
                  </tr>
                  <tr>
                    <td>Text</td>
                    <td><code>text-center</code>, <code>fw-bold</code>, <code>text-muted</code></td>
                    <td>Tipografía y alineación</td>
                  </tr>
                  <tr>
                    <td>Color/Background</td>
                    <td><code>bg-light</code>, <code>text-primary</code></td>
                    <td>Semántica visual rápida</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              Regla PRO: usa utilities para lo común y CSS propio para componentes reutilizables del proyecto.
            </div>

            <details className="dd dd-nested">
              <summary>💡 Ejemplo combinado: una tarjeta de producto con solo utilities</summary>
              <div className="dd-body">
                <p>
                  Este ejemplo muestra cómo encadenar utilities para construir
                  un elemento complejo <strong>sin escribir una sola línea de CSS propio</strong>:
                </p>
                <pre>
                  <code>{`<!-- Tarjeta de producto solo con utilities Bootstrap -->
<div class="d-flex flex-column gap-2 p-3 border rounded bg-white shadow-sm" style="max-width: 280px;">

  <!-- Imagen placeholder -->
  <div class="bg-light rounded d-flex align-items-center justify-content-center" style="height: 160px;">
    <span class="text-muted fs-5">🖼️ Imagen</span>
  </div>

  <!-- Contenido -->
  <span class="badge text-bg-success align-self-start">Nuevo</span>
  <h3 class="h6 fw-bold mb-0">Nombre del producto</h3>
  <p class="text-muted small mb-0">Descripción breve del artículo en venta.</p>

  <!-- Precio + botón -->
  <div class="d-flex align-items-center justify-content-between mt-auto">
    <span class="fw-bold fs-5">29,99 €</span>
    <button class="btn btn-primary btn-sm">Añadir</button>
  </div>

</div>`}</code>
                </pre>
                <div className="callout">
                  Fíjate en el patrón: primero define la <strong>estructura</strong> con
                  <code>d-flex</code> y luego afinas con spacing (<code>gap</code>,
                  <code>p-3</code>), tipografía (<code>fw-bold</code>, <code>small</code>)
                  y color (<code>text-muted</code>, <code>text-bg-success</code>).
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 6) COMPONENTES ================= */}
      <section className="doc-section" id="componentes">
        <details className="dd" open>
          <summary>6) Componentes clave (lo que más se usa)</summary>
          <div className="dd-body">
            <p>
              Los componentes de Bootstrap siguen siempre el mismo patrón de clases:
              una <strong>clase base</strong> que define el tipo de componente y una
              <strong>clase modificadora</strong> que define su variante. Por ejemplo:
              <code>btn</code> (base) + <code>btn-primary</code> (variante de color),
              o <code>alert</code> (base) + <code>alert-warning</code> (variante).
              Una vez interiorices ese patrón, todos los componentes te resultan familiares.
            </p>

            <details className="dd dd-nested" open>
              <summary>6.1 Buttons</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-secondary">Outline</button>
<button class="btn btn-success btn-sm">Small</button>
<button class="btn btn-danger" disabled>Disabled</button>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>6.2 Cards</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<div class="card">
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Texto…</p>
    <a class="btn btn-primary" href="#">Acción</a>
  </div>
</div>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>6.3 Alerts y badges</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<div class="alert alert-warning" role="alert">
  Atención: revisa los campos.
</div>

<span class="badge text-bg-primary">Nuevo</span>`}</code>
                </pre>
              </div>
            </details>

            <div className="callout">
              Consejo didáctico: enseña que el alumno no debe memorizar todo Bootstrap,
              sino aprender a <strong>leer la documentación</strong> y reconocer patrones.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 7) FORMS ================= */}
      <section className="doc-section" id="forms">
        <details className="dd" open>
          <summary>7) Formularios: estructura, validación y usabilidad</summary>
          <div className="dd-body">
            <p>
              Bootstrap tiene un sistema de formularios completo. Lo profesional es:
              <strong> mantener semántica HTML</strong> (label, fieldset, legend) y
              usar clases Bootstrap para estilo/feedback.
            </p>

            <details className="dd dd-nested" open>
              <summary>7.1 Form básico accesible</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input id="email" type="email" class="form-control" required>
    <div class="invalid-feedback">Introduce un email válido.</div>
  </div>

  <button class="btn btn-primary" type="submit">Enviar</button>
</form>`}</code>
                </pre>

                <div className="callout tip">
                  <code>invalid-feedback</code> es visible cuando el campo está invalidado.
                  En producción, se controla con validación (JS o framework).
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>7.2 Layout de formularios con grid</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<div class="row g-3">
  <div class="col-12 col-md-6">
    <label class="form-label" for="name">Nombre</label>
    <input class="form-control" id="name">
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label" for="surname">Apellidos</label>
    <input class="form-control" id="surname">
  </div>
</div>`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 8) NAVBAR ================= */}
      <section className="doc-section" id="navbars">
        <details className="dd" open>
          <summary>8) Navbar y navegación responsive (patrón estrella)</summary>
          <div className="dd-body">
            <p>
              La navbar es el componente que más se valora en Bootstrap porque resuelve el responsive:
              en desktop es horizontal, en móvil colapsa con botón (toggler).
            </p>

            <pre>
              <code>{`<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">MiManual</a>

    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navMain"
      aria-controls="navMain" aria-expanded="false" aria-label="Abrir navegación">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navMain">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Temas</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contacto</a></li>
      </ul>
    </div>
  </div>
</nav>`}</code>
            </pre>

            <div className="callout tip">
              Fíjate: <code>aria-current="page"</code> marca la página actual (usabilidad + accesibilidad).
            </div>

            <div className="callout warn">
              Para que el toggler funcione necesitas el <strong>bootstrap.bundle</strong> (incluye Popper).
            </div>
          </div>
        </details>
      </section>

      {/* ================= 9) MODALS / DROPDOWNS ================= */}
      <section className="doc-section" id="modals">
        <details className="dd" open>
          <summary>9) Modales, dropdowns y tooltips (JS + accesibilidad)</summary>
          <div className="dd-body">
            <p>
              Estos componentes requieren JS. Lo profesional es respetar la estructura,
              probar foco y asegurarse de que se pueden cerrar.
            </p>

            <details className="dd dd-nested" open>
              <summary>9.1 Modal mínimo</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Botón -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#demoModal">
  Abrir modal
</button>

<!-- Modal -->
<div class="modal fade" id="demoModal" tabindex="-1" aria-labelledby="demoModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="demoModalLabel">Título</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        Contenido del modal…
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>`}</code>
                </pre>
              </div>
            </details>

            <div className="callout tip">
              Bootstrap suele gestionar focus/escape/scroll. Aun así, prueba con teclado y móvil.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 10) A11Y ================= */}
      <section className="doc-section" id="accesibilidad">
        <details className="dd" open>
          <summary>10) Accesibilidad en Bootstrap: qué debes revisar siempre</summary>
          <div className="dd-body">
            <div className="callout">
              Checklist rápida al usar Bootstrap:
              <ul style={{ marginBottom: 0 }}>
                <li>¿Foco visible en links, botones, inputs?</li>
                <li>¿Navbar: toggler accesible (aria-label, aria-expanded)?</li>
                <li>¿Modal: se cierra con ESC y tiene botón cerrar visible?</li>
                <li>¿Estados no dependen solo del color? (alertas, validación)</li>
                <li>¿Targets táctiles (44px aprox.) en móvil?</li>
              </ul>
            </div>

            <div className="callout warn">
              Error típico: customizar colores y perder contraste. Si cambias theme, revisa contrastes.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 11) PERSONALIZACIÓN ================= */}
      <section className="doc-section" id="custom">
        <details className="dd" open>
          <summary>11) Personalización PRO: variables, Sass y theming</summary>
          <div className="dd-body">
            <p>
              El uso profesional de Bootstrap no es “meter el CSS y ya”.
              Es personalizarlo para que encaje en tu marca y tus componentes.
            </p>

            <details className="dd dd-nested" open>
              <summary>11.1 CSS Custom Properties (sin Sass, funciona con CDN)</summary>
              <div className="dd-body">
                <p>
                  Bootstrap 5 expone sus colores y tokens como <strong>variables CSS nativas</strong>.
                  Esto significa que puedes personalizarlo <em>sin Sass</em>,
                  simplemente sobreescribiendo las variables en tu CSS propio:
                </p>
                <pre>
                  <code>{`/* tu-styles.css — carga DESPUÉS de bootstrap.css */
:root {
  --bs-primary: #16c264;           /* color primario */
  --bs-primary-rgb: 22, 194, 100;  /* necesario para utilidades con opacidad */
  --bs-border-radius: 14px;        /* radio de borde global */
  --bs-font-sans-serif: 'Inter', sans-serif; /* tipografía */
  --bs-body-bg: #f8f9fa;           /* fondo general */
}

/* También puedes sobrescribir componentes concretos: */
.btn-primary {
  --bs-btn-bg: #16c264;
  --bs-btn-border-color: #16c264;
  --bs-btn-hover-bg: #12a454;
}`}</code>
                </pre>
                <div className="callout tip">
                  <strong>¿Cuándo usar CSS variables vs Sass?</strong><br />
                  CSS variables → cambios rápidos sin pipeline de build, ideal para aprender o CDN.<br />
                  Sass → control total de tokens, tree-shaking, proyectos grandes en producción.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>11.2 La idea Sass: cambiar variables antes de compilar</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* main.scss (concepto) */
$primary: #16c264;
$border-radius: 14px;

@import "bootstrap/scss/bootstrap"; /* (si trabajas con Sass) */`}</code>
                </pre>

                <div className="callout warn">
                  Nota didáctica: en Bootstrap moderno se recomienda usar Sass y su sistema.
                  En este manual nos importa el concepto: “tocar tokens/variables” para personalizar.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>11.2 Personalizar sin Sass: tu capa encima</summary>
              <div className="dd-body">
                <p>
                  Si no compilas Bootstrap, personalizas añadiendo CSS propio encima:
                  mantén el CSS propio en una capa clara y no sobrescribas todo.
                </p>
                <pre>
                  <code>{`/* tu-styles.css (carga después de bootstrap.css) */
.btn-primary{
  font-weight: 800;
}

.card{
  border-radius: 14px;
}`}</code>
                </pre>

                <div className="callout tip">
                  Mejor aún: crea componentes propios que usen utilities y minimicen overrides.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 12) INTEGRACIÓN ================= */}
      <section className="doc-section" id="integracion">
        <details className="dd" open>
          <summary>12) Bootstrap + tu CSS: estrategia sin guerras</summary>
          <div className="dd-body">
            <p>
              Mezclar Bootstrap con CSS propio se hace bien si sigues una estrategia:
            </p>

            <div className="card">
              <h3 style={{ marginTop: 0 }}>Estrategia recomendada</h3>
              <ol style={{ marginBottom: 0 }}>
                <li>
                  Usa Bootstrap para: <strong>grid</strong>, <strong>utilities</strong>, componentes base.
                </li>
                <li>
                  Define tu “capa de marca”: tokens (colores, radius, sombras) y 5–10 componentes clave.
                </li>
                <li>
                  Evita sobrescribir estilos internos de componentes complejos; compón encima.
                </li>
                <li>
                  Documenta reglas: cuándo utility, cuándo componente propio.
                </li>
              </ol>
            </div>

            <div className="callout warn">
              Si cada pantalla tiene overrides distintos, el proyecto se vuelve inmantenible.
              El nivel PRO es la consistencia.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 13) PATRONES REALES ================= */}
      <section className="doc-section" id="patrones">
        <details className="dd" open>
          <summary>13) Patrones reales: landing y dashboard (plantillas mentalmente “reutilizables”)</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>13.1 Landing: hero + features + CTA</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<header class="py-5 bg-light">
  <div class="container">
    <div class="row align-items-center g-4">
      <div class="col-12 col-lg-6">
        <h1 class="display-5 fw-bold">Construye tu landing en minutos</h1>
        <p class="lead text-muted">Grid + utilities + componentes listos.</p>
        <div class="d-flex gap-2 flex-wrap">
          <a class="btn btn-primary btn-lg" href="#">Empezar</a>
          <a class="btn btn-outline-secondary btn-lg" href="#">Ver demo</a>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="p-4 border rounded bg-white">Imagen/Mockup</div>
      </div>
    </div>
  </div>
</header>

<section class="py-5">
  <div class="container">
    <div class="row g-3">
      <div class="col-12 col-md-4"><div class="card"><div class="card-body">Feature 1</div></div></div>
      <div class="col-12 col-md-4"><div class="card"><div class="card-body">Feature 2</div></div></div>
      <div class="col-12 col-md-4"><div class="card"><div class="card-body">Feature 3</div></div></div>
    </div>
  </div>
</section>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>13.2 Dashboard: sidebar + header + main</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<div class="container-fluid">
  <div class="row">
    <aside class="col-12 col-lg-2 p-3 border-end">
      <nav class="nav flex-column">
        <a class="nav-link active" aria-current="page" href="#">Panel</a>
        <a class="nav-link" href="#">Usuarios</a>
        <a class="nav-link" href="#">Ajustes</a>
      </nav>
    </aside>

    <main class="col-12 col-lg-10 p-4">
      <h1 class="h3 mb-4">Dashboard</h1>
      <div class="row g-3">
        <div class="col-12 col-md-6 col-xl-3">
          <div class="card"><div class="card-body">KPI 1</div></div>
        </div>
        <div class="col-12 col-md-6 col-xl-3">
          <div class="card"><div class="card-body">KPI 2</div></div>
        </div>
      </div>
    </main>
  </div>
</div>`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 14) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>14) Errores típicos y depuración (nivel pro)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>“No se ve nada, Bootstrap no parece cargarse”</strong> → abre DevTools (F12 → Network).
                Si el CSS o el JS tienen error 404, la ruta del CDN es incorrecta o el archivo local no existe.
              </li>
              <li>
                <strong>“El responsive no funciona en móvil”</strong> → falta el viewport meta en el{" "}
                <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>.{" "}
                Sin él el móvil simula el ancho de escritorio y los breakpoints no tienen efecto.
              </li>
              <li>
                <strong>“No funciona el navbar-toggler”</strong> → falta <code>bootstrap.bundle</code>.
              </li>
              <li>
                <strong>“Se ve todo igual”</strong> → falta jerarquía tipográfica (usa <code>display-*</code>, <code>lead</code>, spacing).
              </li>
              <li>
                <strong>“He sobrescrito y rompí el componente”</strong> → demasiados overrides; compón con utilities o personaliza vía variables.
              </li>
              <li>
                <strong>“Accesibilidad pobre”</strong> → no probar teclado, quitar outlines, estados solo con color.
              </li>
              <li>
                <strong>“Layout raro en móvil”</strong> → entender mobile-first: sin breakpoint = móvil.
              </li>
            </ul>

            <div className="callout tip">
              DevTools: inspecciona clases aplicadas y revisa el orden de carga de CSS (bootstrap primero, tu capa después).
            </div>
          </div>
        </details>
      </section>

      {/* ================= 15) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>15) Retos prácticos (para certificar que lo dominas)</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1: Landing completa</summary>
              <div className="dd-body">
                <p>
                  Construye hero + 3 features + CTA final usando solo grid + utilities + buttons.
                  Objetivo: 0 CSS propio.
                </p>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>🟡 Reto 2: Navbar responsive con active</summary>
              <div className="dd-body">
                <p>
                  Implementa navbar-expand-lg con toggler y marca la página actual con <code>aria-current="page"</code>.
                </p>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>🔴 Reto 3: Modal + formulario con validación</summary>
              <div className="dd-body">
                <p>
                  Crea un modal con un formulario dentro (email + checkbox).
                  Debe poder cerrarse y ser usable con teclado.
                </p>
              </div>
            </details>

            <div className="callout tip">
              Si resuelves estos 3 retos, ya usas Bootstrap como se usa en proyectos reales.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 16) TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>16) Test final (con feedback)</summary>
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

              {submitted && (
                <div
                  className={`callout ${
                    score >= questions.length * 0.85
                      ? "tip"
                      : score >= questions.length * 0.65
                      ? ""
                      : "warn"
                  }`}
                  style={{ marginTop: "1rem" }}
                >
                  {score === questions.length && (
                    <>
                      🏆 <strong>Perfecto.</strong> Entiendes Bootstrap como herramienta profesional: layout + utilities + componentes + personalización.
                    </>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>
                      🎯 <strong>Muy bien.</strong> Refuerza grid + estrategia de personalización sin overrides agresivos.
                    </>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>
                      📚 <strong>Buen avance.</strong> Haz los retos y repasa navbar + modales (JS + accesibilidad).
                    </>
                  )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Repaso necesario.</strong> Vuelve a: grid, utilities y cuándo usar cada componente.
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </details>
      </section>

      {/* ================= CIERRE ================= */}
      <section className="doc-section">
        <div className="callout tip">
          ✅ Conclusión final del curso:
          <br />
          Ya tienes base sólida de CSS (layout, componentes, responsive, accesibilidad) y ahora una herramienta de productividad (SASS) y un framework industrial (Bootstrap).
          El nivel experto llega cuando aplicas <strong>criterio</strong>: consistencia, accesibilidad, escalabilidad y depuración.
        </div>

        <div className="doc-next">
          <a href="#" className="btn btn-primary">
            Fin del bloque → Proyecto final: landing + docs + componentes (Bootstrap + tu estilo)
          </a>
        </div>
      </section>
    </main>
  );
}
