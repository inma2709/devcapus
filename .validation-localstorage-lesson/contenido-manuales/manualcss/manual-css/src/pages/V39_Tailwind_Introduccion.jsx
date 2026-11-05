import { useEffect, useMemo, useState } from "react";

/**
 * EXTRA · E03 — Tailwind CSS desde cero hasta uso con criterio
 * ✅ Enfoque manual: utility-first, instalación con CDN y npm, espaciado,
 *    colores, tipografía, flex, grid, responsive, estados interactivos,
 *    @apply, personalización y comparativa Bootstrap vs Tailwind.
 *
 * Público: alumnos que dominan HTML, CSS y JS básico (sin React).
 * Los ejemplos son HTML puro para ser copiados y probados directamente.
 */
export default function V39_Tailwind_Introduccion() {
  useEffect(() => {
    document.title =
      "V39 · Tailwind CSS: utility-first de cero a nivel profesional";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Cuál es la filosofía principal de Tailwind CSS?",
        options: [
          "Proporcionar componentes visuales predefinidos",
          "Escribir estilos directamente como clases utilitarias en el HTML",
          "Generar CSS automáticamente sin clases",
          "Reemplazar completamente el CSS",
        ],
        correct: "Escribir estilos directamente como clases utilitarias en el HTML",
        why:
          "Tailwind es utility-first: en lugar de .btn o .card, usas clases como p-4 bg-blue-500 rounded directamente en los elementos.",
      },
      {
        id: "q2",
        q: "¿Qué herramienta de Tailwind permite probarlo sin instalar nada?",
        options: [
          "tailwind.config.js",
          "PostCSS",
          "Play CDN (cdn.tailwindcss.com)",
          "Tailwind CLI",
        ],
        correct: "Play CDN (cdn.tailwindcss.com)",
        why:
          "El Play CDN de Tailwind es un script que puedes añadir al <head> de cualquier HTML para empezar a usar Tailwind al instante, sin instalación.",
      },
      {
        id: "q3",
        q: "¿Qué significa la clase 'md:flex' en Tailwind?",
        options: [
          "Aplica display:flex en todos los tamaños",
          "Aplica display:flex solo en pantallas medianas (≥ 768px)",
          "Aplica display:flex solo en móvil",
          "Es un alias de 'flex' sin diferencia",
        ],
        correct: "Aplica display:flex solo en pantallas medianas (≥ 768px)",
        why:
          "Los prefijos de breakpoint en Tailwind (sm:, md:, lg:, xl:) son mobile-first: aplican la utilidad desde ese tamaño hacia arriba.",
      },
      {
        id: "q4",
        q: "¿Para qué sirve @apply en Tailwind?",
        options: [
          "Instalar Tailwind en el proyecto",
          "Agrupar varias clases utilitarias bajo un selector CSS reutilizable",
          "Añadir animaciones automáticas",
          "Compilar el CSS final",
        ],
        correct: "Agrupar varias clases utilitarias bajo un selector CSS reutilizable",
        why:
          "@apply te permite crear componentes CSS reutilizables (como .btn-primary) que internamente usan clases de Tailwind, evitando repetición en el HTML.",
      },
      {
        id: "q5",
        q: "¿Cuál es la principal diferencia entre Bootstrap y Tailwind?",
        options: [
          "Bootstrap es más moderno que Tailwind",
          "Tailwind solo funciona con React",
          "Bootstrap da componentes listos; Tailwind da herramientas para construirlos tú",
          "Tailwind no tiene sistema de grid",
        ],
        correct: "Bootstrap da componentes listos; Tailwind da herramientas para construirlos tú",
        why:
          "Bootstrap: componentes predefinidos + utilities. Tailwind: solo utilities, tú construyes los componentes. Más control, más trabajo inicial.",
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
        <p className="doc-kicker">Extra · E03</p>
        <h1>Tailwind CSS: el enfoque utility-first explicado con criterio</h1>

        <p className="doc-lead">
          Tailwind CSS da la vuelta a la forma de escribir estilos: en lugar de
          crear clases CSS propias, asignas pequeñas clases utilitarias directamente
          en el HTML. El resultado es un flujo más rápido, sin cambiar de archivo
          constantemente y sin CSS muerto en producción.
        </p>

        {/* ---- Cuadro comparativo rápido ---- */}
        <div className="table-wrap" role="region" aria-label="Comparativa rápida Tailwind vs Bootstrap" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th>¿Qué buscas?</th>
                <th>Bootstrap</th>
                <th>Tailwind</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Componentes listos (botón, navbar, modal…)</td>
                <td>✅ Incluidos</td>
                <td>❌ Los construyes tú</td>
              </tr>
              <tr>
                <td>Clases utilitarias (flex, padding, color…)</td>
                <td>✅ Incluidas</td>
                <td>✅ Es su especialidad</td>
              </tr>
              <tr>
                <td>Velocidad para prototipar en minutos</td>
                <td>🚀 Muy rápido</td>
                <td>⚙️ Más lento al inicio</td>
              </tr>
              <tr>
                <td>Diseño 100% personalizado sin pelea</td>
                <td>⚠️ Requiere esfuerzo</td>
                <td>✅ Nativo</td>
              </tr>
              <tr>
                <td>CSS final en producción</td>
                <td>~30 KB (framework completo)</td>
                <td>Solo las clases usadas (a veces &lt;5 KB)</td>
              </tr>
              <tr>
                <td>Responsive integrado</td>
                <td>✅ Breakpoints col-md-*</td>
                <td>✅ Prefijos md: lg: xl:…</td>
              </tr>
              <tr>
                <td>Dark mode</td>
                <td>⚠️ Configuración extra</td>
                <td>✅ Prefijo dark: nativo</td>
              </tr>
              <tr>
                <td>Curva de aprendizaje</td>
                <td>✅ Baja (copias y adaptas)</td>
                <td>⚠️ Media (memorizar convenciones)</td>
              </tr>
              <tr>
                <td>Ideal con React / Vue / Next.js</td>
                <td>✅ Sí</td>
                <td>✅ Muy potente</td>
              </tr>
              <tr>
                <td>Mejor para</td>
                <td>MVPs, dashboards, equipos grandes</td>
                <td>Diseños custom, proyectos a largo plazo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="callout tip">
          🎯 Objetivo del tema: que entiendas la filosofía utility-first, puedas
          construir interfaces completas con Tailwind y sepas cuándo elegirlo frente
          a Bootstrap u otro enfoque.
        </div>

        <div className="callout">
          <strong>Lo que aprenderás en este tema:</strong>
          <ol style={{ marginBottom: 0 }}>
            <li>Qué es Tailwind y por qué es diferente a Bootstrap</li>
            <li>Cómo usarlo sin instalar nada (Play CDN) y con npm</li>
            <li>Las familias de utilidades esenciales: spacing, color, tipografía</li>
            <li>Layout con Tailwind: flex y grid en la práctica</li>
            <li>Responsive: los 5 breakpoints y cómo usarlos</li>
            <li>Estados interactivos: hover, focus, active, dark mode</li>
            <li>Reutilizar estilos con @apply sin perder control</li>
            <li>Personalizar Tailwind con tailwind.config.js</li>
            <li>Comparativa Bootstrap vs Tailwind para elegir con criterio</li>
          </ol>
        </div>

        <div className="callout warn">
          Tailwind no es "escribir CSS en línea". Es un sistema de diseño con
          escala fija, paleta coherente y responsive integrado.{" "}
          <strong>Entiéndelo así y todo tiene sentido.</strong>
        </div>

        <nav className="doc-index" aria-label="Índice de Tailwind">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#intro-tailwind">0) Introducción: qué es y cómo instalarlo</a></li>
            <li><a href="#filosofia">1) Filosofía utility-first: el cambio de mentalidad</a></li>
            <li><a href="#utilidades-core">2) Las familias de utilidades esenciales</a></li>
            <li><a href="#layout">3) Layout: flex y grid con Tailwind</a></li>
            <li><a href="#responsive">4) Responsive: breakpoints y prefijos</a></li>
            <li><a href="#estados">5) Estados interactivos (hover, focus, dark…)</a></li>
            <li><a href="#reutilizar">6) Reutilización con @apply y componentes</a></li>
            <li><a href="#config">7) Personalización con tailwind.config.js</a></li>
            <li><a href="#comparativa">8) Bootstrap vs Tailwind: guía de decisión</a></li>
            <li><a href="#gotchas">9) Errores típicos y cómo evitarlos</a></li>
            <li><a href="#retos">10) Retos prácticos</a></li>
            <li><a href="#test">11) Test final</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= BLOQUE INTRODUCTORIO ================= */}
      <section className="doc-section" id="intro-tailwind">
        <h2>¿Qué es Tailwind CSS y cómo se instala?</h2>

        <p>
          <strong>Tailwind CSS</strong> es un framework de utilidades que te permite
          diseñar directamente en el HTML usando clases pequeñas y predecibles.
          No viene con botones, cards ni navbars preparadas: tú los construyes
          combinando clases.
        </p>

        <p>
          Fue creado por Adam Wathan en 2017. En 2024-2026 es el framework CSS
          más popular en proyectos modernos con React, Next.js y Vite.
        </p>

        <div className="callout tip">
          <strong>La diferencia clave con Bootstrap:</strong> Bootstrap te da un{" "}
          <code>.btn</code> listo para usar. Tailwind te da las herramientas para
          que <strong>tú construyas tu propio botón</strong> exactamente como
          necesitas.
        </div>

        <h3 style={{ marginTop: "1.5rem" }}>¿Cómo se instala / importa?</h3>
        <p>Tienes dos formas principales:</p>

        <h4>Opción A — Play CDN (ideal para aprender y hacer demos)</h4>
        <p>
          Añade <strong>una sola línea</strong> al <code>&lt;head&gt;</code> de tu HTML y Tailwind
          funciona al instante, sin npm, sin terminal:
        </p>
        <pre>
          <code>{`<!-- En el <head> de tu HTML -->
<script src="https://cdn.tailwindcss.com"></script>`}</code>
        </pre>

        <p>Un HTML completo mínimo quedaría así:</p>
        <pre>
          <code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Mi página con Tailwind</title>
</head>
<body class="bg-gray-100 p-8">

  <h1 class="text-3xl font-bold text-blue-600">¡Hola, Tailwind!</h1>
  <p class="mt-2 text-gray-600">Esto ya usa Tailwind sin instalar nada.</p>

</body>
</html>`}</code>
        </pre>

        <div className="callout warn">
          El Play CDN es perfecto para aprender, pero <strong>no usar en producción</strong>:
          carga todas las utilidades posibles (MB de CSS). En producción se usa npm
          para que Tailwind <em>purgue</em> solo las clases que usas.
        </div>

        <h4>Opción B — npm + CLI (proyectos reales)</h4>
        <pre>
          <code>{`# 1. Instalar Tailwind y sus dependencias
npm install -D tailwindcss postcss autoprefixer

# 2. Crear el archivo de configuración
npx tailwindcss init

# 3. En tailwind.config.js, indicar qué archivos escanear:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],   // ajusta a tu estructura
  theme: { extend: {} },
  plugins: [],
}

# 4. En tu archivo CSS principal (ej: styles.css):
@tailwind base;
@tailwind components;
@tailwind utilities;

# 5. Compilar en modo watch (mientras desarrollas):
npx tailwindcss -i ./src/styles.css -o ./dist/output.css --watch`}</code>
        </pre>

        <div className="callout tip">
          Con <strong>Vite</strong> el proceso es más simple todavía con el plugin oficial.
          Pero si estás aprendiendo solo con HTML/CSS/JS, Opción A (CDN) es suficiente
          para dominar todas las utilidades del tema.
        </div>

        <div className="callout">
          <strong>Regla de oro:</strong> en Tailwind el CSS lo genera el framework
          a partir de las clases que usas en el HTML. Nunca escribas CSS donde
          un prefijo de utilidad puede hacer lo mismo.
        </div>
      </section>

      {/* ================= 1) FILOSOFÍA ================= */}
      <section className="doc-section" id="filosofia">
        <details className="dd" open>
          <summary>1) Filosofía utility-first: el cambio de mentalidad</summary>
          <div className="dd-body">
            <p>
              El enfoque tradicional de CSS es crear clases semánticas y escribir
              las propiedades dentro:
            </p>
            <pre>
              <code>{`/* CSS tradicional */
.card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}

/* HTML */
<div class="card">Contenido</div>`}</code>
            </pre>

            <p>Con Tailwind, las propiedades <strong>son las clases</strong>:</p>
            <pre>
              <code>{`<!-- Tailwind: las propiedades van directamente como clases -->
<div class="p-4 bg-white rounded-lg shadow-md">Contenido</div>`}</code>
            </pre>

            <div className="callout tip">
              <strong>¿No es eso "estilos en línea"?</strong> No exactamente.
              Las utilidades de Tailwind tienen una <strong>escala fija y coherente</strong>
              (p-4 siempre es 1rem, no un valor arbitrario), paleta de colores
              predefinida, responsive integrado y estados como hover. Un{" "}
              <code>style="padding: 16px"</code> no tiene nada de eso.
            </div>

            <details className="dd dd-nested" open>
              <summary>Ventajas del enfoque utility-first</summary>
              <div className="dd-body">
                <div className="table-wrap" role="region" aria-label="Ventajas y desventajas" tabIndex={0}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Aspecto</th>
                        <th>CSS tradicional / BEM</th>
                        <th>Tailwind utility-first</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nombrar clases</td>
                        <td>Debes inventar nombres consistentes</td>
                        <td>No necesitas nombrar nada</td>
                      </tr>
                      <tr>
                        <td>Cambiar estilos</td>
                        <td>Editas el CSS (otro archivo)</td>
                        <td>Editas el HTML directamente</td>
                      </tr>
                      <tr>
                        <td>CSS muerto</td>
                        <td>Fácil acumular CSS que no se usa</td>
                        <td>Solo genera las clases que usas</td>
                      </tr>
                      <tr>
                        <td>Consistencia visual</td>
                        <td>Depende de la disciplina del equipo</td>
                        <td>Integrada en la escala del framework</td>
                      </tr>
                      <tr>
                        <td>Curva de aprendizaje</td>
                        <td>Baja al inicio</td>
                        <td>Media: memorizar convenciones</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 2) UTILIDADES CORE ================= */}
      <section className="doc-section" id="utilidades-core">
        <details className="dd" open>
          <summary>2) Las familias de utilidades esenciales</summary>
          <div className="dd-body">
            <p>
              Tailwind tiene cientos de clases, pero el 80% de lo que usarás
              pertenece a estas familias. Una vez dominas la convención de nombres,
              deduces el resto.
            </p>

            <details className="dd dd-nested" open>
              <summary>2.1 Espaciado: padding y margin</summary>
              <div className="dd-body">
                <p>
                  Tailwind usa una <strong>escala numérica</strong> donde cada número
                  equivale a un múltiplo de 0.25rem (4px). Así es predecible y consistente:
                </p>
                <div className="table-wrap" role="region" aria-label="Escala de espaciado" tabIndex={0}>
                  <table className="table">
                    <thead>
                      <tr><th>Clase</th><th>Valor</th><th>Equivale a</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><code>p-0</code></td><td>0px</td><td>Sin padding</td></tr>
                      <tr><td><code>p-1</code></td><td>4px</td><td>0.25rem</td></tr>
                      <tr><td><code>p-2</code></td><td>8px</td><td>0.5rem</td></tr>
                      <tr><td><code>p-4</code></td><td>16px</td><td>1rem</td></tr>
                      <tr><td><code>p-8</code></td><td>32px</td><td>2rem</td></tr>
                      <tr><td><code>p-16</code></td><td>64px</td><td>4rem</td></tr>
                    </tbody>
                  </table>
                </div>
                <pre>
                  <code>{`<!-- p = padding todos los lados  m = margin todos los lados -->
<!-- px = padding eje X (izq+der)  py = padding eje Y (top+bot) -->
<!-- pt = padding-top  pr = padding-right  pb = bottom  pl = left -->
<!-- mt = margin-top  mx = margin auto (centrar)  etc. -->

<div class="p-4 mb-6 px-8">
  Padding 1rem en todos los lados,
  padding-inline 2rem,
  margin-bottom 1.5rem
</div>

<!-- Centrar un elemento horizontalmente: -->
<div class="mx-auto max-w-lg">Contenido centrado</div>`}</code>
                </pre>
                <div className="callout tip">
                  El patrón es: <em>propiedad-lado-valor</em>. Ejemplos:
                  <code>mt-4</code> (margin-top 1rem), <code>px-6</code> (padding-inline 1.5rem),
                  <code>my-8</code> (margin-top + margin-bottom 2rem).
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>2.2 Colores</summary>
              <div className="dd-body">
                <p>
                  Tailwind incluye una <strong>paleta semántica</strong> con tonos del
                  50 (muy claro) al 950 (muy oscuro):
                </p>
                <pre>
                  <code>{`<!-- Color de texto -->
<p class="text-gray-700">Texto gris oscuro</p>
<p class="text-blue-600">Texto azul medio</p>
<p class="text-red-500">Texto rojo</p>

<!-- Color de fondo -->
<div class="bg-slate-100">Fondo gris suave</div>
<div class="bg-emerald-500">Fondo verde</div>

<!-- Color de borde -->
<div class="border border-gray-300">Con borde gris</div>

<!-- Con opacidad: -->
<div class="bg-blue-500/50">Fondo azul al 50% de opacidad</div>`}</code>
                </pre>
                <div className="callout">
                  <strong>Paleta estándar:</strong> slate, gray, zinc, neutral, stone,
                  red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky,
                  blue, indigo, violet, purple, fuchsia, pink, rose.
                  Cada uno del 50 al 950.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>2.3 Tipografía</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Tamaño de fuente -->
<p class="text-sm">14px — texto pequeño</p>
<p class="text-base">16px — texto base</p>
<p class="text-lg">18px — ligeramente mayor</p>
<p class="text-xl">20px</p>
<p class="text-2xl">24px</p>
<p class="text-4xl">36px — títulos grandes</p>

<!-- Peso de fuente -->
<p class="font-light">light (300)</p>
<p class="font-normal">normal (400)</p>
<p class="font-semibold">semibold (600)</p>
<p class="font-bold">bold (700)</p>

<!-- Alineación -->
<p class="text-left">Izquierda</p>
<p class="text-center">Centro</p>
<p class="text-right">Derecha</p>

<!-- Interlineado -->
<p class="leading-tight">líneas juntas</p>
<p class="leading-relaxed">líneas cómodas</p>

<!-- Tracking (espaciado entre letras) -->
<p class="tracking-wide">un poco más de espacio</p>
<p class="tracking-widest">máximo espacio</p>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>2.4 Bordes, sombras y opacidad</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Bordes -->
<div class="border">borde 1px por defecto</div>
<div class="border-2 border-blue-400">borde 2px azul</div>
<div class="border-t border-gray-200">solo borde superior</div>

<!-- Border radius -->
<div class="rounded">4px — suave</div>
<div class="rounded-lg">8px — estándar</div>
<div class="rounded-xl">12px — generoso</div>
<div class="rounded-full">pill / círculo</div>

<!-- Sombras -->
<div class="shadow-sm">sombra pequeña</div>
<div class="shadow">sombra estándar</div>
<div class="shadow-lg">sombra grande</div>
<div class="shadow-xl">sombra muy grande</div>

<!-- Opacidad del elemento -->
<div class="opacity-50">al 50%</div>
<div class="opacity-75">al 75%</div>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>2.5 Tamaño (width y height)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Width fija con escala numérica -->
<div class="w-32">128px (8rem)</div>
<div class="w-64">256px (16rem)</div>

<!-- Width en fracciones -->
<div class="w-full">100%</div>
<div class="w-1/2">50%</div>
<div class="w-1/3">33.33%</div>
<div class="w-2/3">66.66%</div>

<!-- Max-width (muy usado para centrar contenido) -->
<div class="max-w-sm">640px máximo</div>
<div class="max-w-md">768px máximo</div>
<div class="max-w-xl">1280px máximo</div>
<div class="max-w-screen-lg">ancho de pantalla lg</div>

<!-- Height -->
<div class="h-16">64px</div>
<div class="h-screen">100vh (altura completa del viewport)</div>
<div class="min-h-screen">mínimo 100vh</div>`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 3) LAYOUT ================= */}
      <section className="doc-section" id="layout">
        <details className="dd" open>
          <summary>3) Layout con Tailwind: flex y grid</summary>
          <div className="dd-body">
            <p>
              Tailwind no tiene un "sistema de grid propio" como Bootstrap.
              En su lugar, expone todo Flexbox y CSS Grid como utilidades directas.
              Es más flexible pero requiere entender esas propiedades previamente.
            </p>

            <details className="dd dd-nested" open>
              <summary>3.1 Flexbox</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Contenedor flex básico -->
<div class="flex gap-4">
  <div class="p-4 bg-blue-100 rounded">Item 1</div>
  <div class="p-4 bg-blue-100 rounded">Item 2</div>
  <div class="p-4 bg-blue-100 rounded">Item 3</div>
</div>

<!-- Dirección -->
<div class="flex flex-row">horizontal (por defecto)</div>
<div class="flex flex-col">vertical</div>

<!-- Alineación principal (justify-content) -->
<div class="flex justify-start">izquierda</div>
<div class="flex justify-center">centro</div>
<div class="flex justify-between">espacio entre</div>
<div class="flex justify-around">espacio alrededor</div>

<!-- Alineación secundaria (align-items) -->
<div class="flex items-start">arriba</div>
<div class="flex items-center">centro vertical</div>
<div class="flex items-end">abajo</div>

<!-- Ejemplo real: barra de navegación -->
<nav class="flex items-center justify-between px-6 py-4 bg-white shadow">
  <a href="#" class="text-xl font-bold text-blue-600">Logo</a>
  <ul class="flex gap-6 list-none">
    <li><a href="#" class="text-gray-600 hover:text-blue-600">Inicio</a></li>
    <li><a href="#" class="text-gray-600 hover:text-blue-600">Sobre mí</a></li>
    <li><a href="#" class="text-gray-600 hover:text-blue-600">Contacto</a></li>
  </ul>
</nav>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>3.2 CSS Grid</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Grid básico de 3 columnas iguales -->
<div class="grid grid-cols-3 gap-4">
  <div class="p-4 bg-green-100 rounded">Col 1</div>
  <div class="p-4 bg-green-100 rounded">Col 2</div>
  <div class="p-4 bg-green-100 rounded">Col 3</div>
</div>

<!-- Grid responsive: 1 col en móvil, 2 en md, 3 en lg -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="p-4 border rounded">Card 1</div>
  <div class="p-4 border rounded">Card 2</div>
  <div class="p-4 border rounded">Card 3</div>
</div>

<!-- Un elemento que ocupa 2 columnas -->
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2 p-4 bg-yellow-100 rounded">Ocupa 2 cols</div>
  <div class="p-4 bg-yellow-100 rounded">1 col</div>
</div>`}</code>
                </pre>
                <div className="callout tip">
                  <code>grid-cols-N</code> divide el contenedor en N columnas iguales.
                  <code>gap-N</code> pone el mismo espacio entre filas y columnas.
                  <code>gap-x-N</code> solo entre columnas, <code>gap-y-N</code> solo entre filas.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>3.3 Display y posicionamiento básico</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Display -->
<div class="block">display: block</div>
<span class="inline-block">display: inline-block</span>
<div class="hidden">display: none (oculto)</div>
<div class="flex">display: flex</div>
<div class="grid">display: grid</div>

<!-- Position -->
<div class="relative">position: relative</div>
<div class="absolute top-0 right-0">position: absolute, arriba-derecha</div>
<div class="fixed bottom-4 right-4">fijo en esquina inferior derecha</div>
<div class="sticky top-0">sticky al hacer scroll</div>

<!-- Z-index -->
<div class="z-10">z-index: 10</div>
<div class="z-50">z-index: 50</div>`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 4) RESPONSIVE ================= */}
      <section className="doc-section" id="responsive">
        <details className="dd" open>
          <summary>4) Responsive con Tailwind: breakpoints y prefijos</summary>
          <div className="dd-body">
            <p>
              Tailwind es <strong>mobile-first</strong>: las clases sin prefijo
              aplican a todos los tamaños. Los prefijos añaden el estilo{" "}
              <em>desde ese breakpoint en adelante</em>.
            </p>

            <div className="table-wrap" role="region" aria-label="Breakpoints de Tailwind" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Prefijo</th>
                    <th>Ancho mínimo</th>
                    <th>Uso típico</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>sm:</code></td>
                    <td>≥ 640 px</td>
                    <td>Mobile grande / phablet</td>
                  </tr>
                  <tr>
                    <td><code>md:</code></td>
                    <td>≥ 768 px</td>
                    <td>Tablet</td>
                  </tr>
                  <tr>
                    <td><code>lg:</code></td>
                    <td>≥ 1024 px</td>
                    <td>Laptop / desktop pequeño</td>
                  </tr>
                  <tr>
                    <td><code>xl:</code></td>
                    <td>≥ 1280 px</td>
                    <td>Desktop normal</td>
                  </tr>
                  <tr>
                    <td><code>2xl:</code></td>
                    <td>≥ 1536 px</td>
                    <td>Pantallas grandes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <details className="dd dd-nested" open>
              <summary>Ejemplo práctico: layout responsive completo</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- En móvil: apilado. En md: 2 columnas. En lg: 3 columnas -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  <div class="bg-white p-6 rounded-xl shadow">Card A</div>
  <div class="bg-white p-6 rounded-xl shadow">Card B</div>
  <div class="bg-white p-6 rounded-xl shadow">Card C</div>
</div>

<!-- Texto que cambia tamaño según pantalla -->
<h1 class="text-2xl md:text-4xl lg:text-5xl font-bold">Título responsivo</h1>

<!-- Elemento visible solo en desktop -->
<aside class="hidden lg:block">Solo visible en lg+</aside>

<!-- Elemento visible solo en móvil -->
<button class="block md:hidden">Menú móvil</button>

<!-- Padding que crece con el viewport -->
<section class="px-4 md:px-8 lg:px-16 py-8 md:py-16">`}</code>
                </pre>
                <div className="callout tip">
                  El patrón es siempre: <em>clase-base</em> primero (móvil),
                  luego <em>prefijo:clase</em> para tamaños mayores.
                  Escríbelo siempre de menor a mayor breakpoint.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 5) ESTADOS ================= */}
      <section className="doc-section" id="estados">
        <details className="dd" open>
          <summary>5) Estados interactivos: hover, focus, active y dark mode</summary>
          <div className="dd-body">
            <p>
              Tailwind aplica estados CSS (<code>:hover</code>, <code>:focus</code>…)
              con el mismo sistema de prefijos que el responsive. Solo añades el
              prefijo de estado antes de la utilidad:
            </p>

            <details className="dd dd-nested" open>
              <summary>5.1 Hover y focus</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- Botón con hover -->
<button class="bg-blue-500 text-white px-6 py-2 rounded-lg
               hover:bg-blue-700 hover:shadow-lg
               transition-colors duration-200">
  Pásame el ratón
</button>

<!-- Link con hover -->
<a href="#" class="text-gray-600 hover:text-blue-600 hover:underline
                   transition-colors">
  Enlace con hover
</a>

<!-- Input con focus -->
<input type="text"
       class="border border-gray-300 px-4 py-2 rounded
              focus:outline-none focus:ring-2 focus:ring-blue-500
              focus:border-transparent">

<!-- Tarjeta con hover: escala + sombra -->
<div class="p-6 bg-white rounded-xl shadow
            hover:shadow-xl hover:scale-105
            transition-all duration-300 cursor-pointer">
  Tarjeta interactiva
</div>`}</code>
                </pre>
                <div className="callout tip">
                  <code>transition-colors</code>, <code>transition-all</code> y
                  <code>duration-200</code> añaden la transición CSS para suavizar
                  el cambio. Sin ellas el cambio es instantáneo.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>5.2 Focus-visible y active</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- focus-visible: SOLO visible al navegar con teclado (mejor para a11y) -->
<button class="focus-visible:outline focus-visible:outline-2
               focus-visible:outline-blue-500 focus-visible:outline-offset-2">
  Botón accesible
</button>

<!-- active: estilo al hacer clic -->
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-800
               active:scale-95 transition-all">
  Click me
</button>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>5.3 Dark mode</summary>
              <div className="dd-body">
                <p>
                  Tailwind soporta <strong>dark mode</strong> automático (según preferencia
                  del sistema) con el prefijo <code>dark:</code>:
                </p>
                <pre>
                  <code>{`<!-- Para activar dark mode por clase del navegador,
     en tailwind.config.js pon: darkMode: 'class'
     Para modo automático del sistema: darkMode: 'media' -->

<!-- Componente con dark mode -->
<div class="bg-white dark:bg-gray-900
            text-gray-900 dark:text-gray-100
            p-6 rounded-xl">
  <h2 class="text-xl font-bold">Título</h2>
  <p class="text-gray-600 dark:text-gray-400">Descripción</p>
</div>`}</code>
                </pre>
                <div className="callout warn">
                  Para que el Play CDN soporte dark mode por clase necesitas añadir
                  configuración inline. Con npm es más sencillo: añades{" "}
                  <code>darkMode: 'media'</code> al config y se activa automáticamente
                  con la preferencia del sistema operativo del usuario.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 6) REUTILIZAR ================= */}
      <section className="doc-section" id="reutilizar">
        <details className="dd" open>
          <summary>6) Reutilización: @apply y el dilema del HTML repetido</summary>
          <div className="dd-body">
            <p>
              La crítica más común a Tailwind es que el HTML queda lleno de clases.
              Cuando repites mucho las mismas combinaciones, tienes dos opciones:
            </p>

            <details className="dd dd-nested" open>
              <summary>6.1 @apply: extraer utilidades a una clase CSS</summary>
              <div className="dd-body">
                <p>
                  <code>@apply</code> te permite crear una clase CSS propia que
                  agrupa utilidades de Tailwind. Se escribe en tu archivo CSS:
                </p>
                <pre>
                  <code>{`/* styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Crear componentes reutilizables con @apply */
@layer components {
  .btn {
    @apply px-6 py-2 rounded-lg font-semibold transition-colors duration-200
           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
  }

  .btn-primary {
    @apply btn bg-blue-600 text-white hover:bg-blue-700
           focus-visible:outline-blue-600;
  }

  .btn-secondary {
    @apply btn bg-gray-200 text-gray-800 hover:bg-gray-300;
  }

  .card {
    @apply bg-white rounded-xl shadow-md p-6;
  }
}

/* En el HTML: */
/* <button class="btn-primary">Enviar</button>
   <button class="btn-secondary">Cancelar</button>
   <div class="card">Contenido</div> */`}</code>
                </pre>
                <div className="callout tip">
                  Usa <code>@apply</code> para componentes que se repiten muchas veces
                  (botones, tarjetas, badges). <strong>No abuses</strong>: si lo usas
                  para todo, pierdes la ventaja de Tailwind.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>6.2 Sin @apply: el enfoque HTML con fragmentos</summary>
              <div className="dd-body">
                <p>
                  En proyectos donde usarás un framework de componentes (React, Vue…),
                  la solución no es <code>@apply</code> sino <strong>crear componentes
                  reutilizables</strong> que encapsulan el HTML con sus clases.
                  Por ahora, con HTML puro, puedes usar fragmentos copiados o plantillas:
                </p>
                <pre>
                  <code>{`<!-- Botón que siempre tiene el mismo aspecto -->
<!-- Cópialo donde lo necesites o extráelo con @apply -->
<button class="inline-flex items-center gap-2 bg-blue-600 text-white
               px-5 py-2.5 rounded-lg text-sm font-medium
               hover:bg-blue-700 active:scale-95
               transition-all duration-150">
  Acción principal
</button>`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 7) CONFIG ================= */}
      <section className="doc-section" id="config">
        <details className="dd" open>
          <summary>7) Personalización con tailwind.config.js</summary>
          <div className="dd-body">
            <p>
              Cuando instalas Tailwind con npm, el archivo <code>tailwind.config.js</code>
              es donde ajustas el framework a tu proyecto:
              tus colores, tipografías, tamaños propios y más.
            </p>

            <details className="dd dd-nested" open>
              <summary>7.1 Añadir colores de marca</summary>
              <div className="dd-body">
                <pre>
                  <code>{`// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {               // "extend" añade sin reemplazar los defaults
      colors: {
        brand: {
          50:  "#eff6ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
        primary: "#16c264",  // color único con nombre propio
      },
    },
  },
  plugins: [],
};

/* Uso en HTML: */
/* <div class="bg-brand-500 text-white">...</div>  */
/* <div class="bg-primary text-white">...</div>     */`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>7.2 Fuentes personalizadas</summary>
              <div className="dd-body">
                <pre>
                  <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],  // reemplaza la fuente base
        display: ["Cal Sans", "sans-serif"],          // fuente extra para títulos
      },
    },
  },
};

/* Uso: */
/* <h1 class="font-display text-5xl">Título</h1> */
/* <p class="font-sans">Texto normal</p>          */`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>7.3 Play CDN: configuración inline</summary>
              <div className="dd-body">
                <p>
                  Sin npm también puedes personalizar Tailwind añadiendo un script
                  de configuración justo después del CDN:
                </p>
                <pre>
                  <code>{`<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#16c264",
        },
      },
    },
  };
</script>`}</code>
                </pre>
              </div>
            </details>

            <div className="callout tip">
              Usa siempre <code>extend</code> dentro de <code>theme</code> para añadir
              valores <strong>sin perder</strong> los que trae Tailwind por defecto.
              Si escribes directamente en <code>theme</code> sin <code>extend</code>,
              reemplazas la configuración completa.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 8) COMPARATIVA ================= */}
      <section className="doc-section" id="comparativa">
        <details className="dd" open>
          <summary>8) Bootstrap vs Tailwind: guía de decisión</summary>
          <div className="dd-body">
            <p>
              No hay un ganador absoluto. La elección depende del proyecto,
              el equipo y el objetivo. Esta tabla te ayuda a decidir:
            </p>

            <div className="table-wrap" role="region" aria-label="Comparativa Bootstrap vs Tailwind" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Criterio</th>
                    <th>Bootstrap</th>
                    <th>Tailwind</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Filosofía</strong></td>
                    <td>Componentes predefinidos + utilities</td>
                    <td>Solo utilities, tú construyes</td>
                  </tr>
                  <tr>
                    <td><strong>Velocidad inicial</strong></td>
                    <td>🚀 Muy rápido: copia el HTML del componente</td>
                    <td>⚙️ Más lento al inicio: construyes desde cero</td>
                  </tr>
                  <tr>
                    <td><strong>Personalización</strong></td>
                    <td>⚠️ Moderada: Sass o CSS variables</td>
                    <td>✅ Total: escala, colores, fuentes propias</td>
                  </tr>
                  <tr>
                    <td><strong>CSS en producción</strong></td>
                    <td>⚠️ Todo el framework (~30KB gzip)</td>
                    <td>✅ Solo las clases usadas (a veces &lt;5KB)</td>
                  </tr>
                  <tr>
                    <td><strong>Consistencia visual</strong></td>
                    <td>✅ Alta: los componentes ya son coherentes</td>
                    <td>✅ Alta: la escala es fija y global</td>
                  </tr>
                  <tr>
                    <td><strong>Curva de aprendizaje</strong></td>
                    <td>✅ Baja: copia, pega, modifica</td>
                    <td>⚠️ Media: memorizar convenciones</td>
                  </tr>
                  <tr>
                    <td><strong>Dark mode</strong></td>
                    <td>⚠️ Requiere configuración extra</td>
                    <td>✅ Integrado con prefijo dark:</td>
                  </tr>
                  <tr>
                    <td><strong>Con React / Vue</strong></td>
                    <td>✅ Funciona bien</td>
                    <td>✅ Especialmente potente (componentes)</td>
                  </tr>
                  <tr>
                    <td><strong>Ideal para</strong></td>
                    <td>MVPs, dashboards, prototipos rápidos</td>
                    <td>Diseños custom, proyectos a largo plazo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              <strong>Regla práctica:</strong> si necesitas algo funcional
              en pocas horas → Bootstrap. Si el proyecto tiene identidad visual
              propia y va a crecer → Tailwind. En el mundo real,{" "}
              <strong>muchos equipos usan los dos</strong>: Tailwind para el CSS
              base y alguna librería de componentes encima.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 9) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>9) Errores típicos al aprender Tailwind</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>"Las clases no se aplican con npm"</strong> → el archivo
                de configuración <code>content</code> no incluye tus archivos HTML/JS.
                Tailwind purga las clases que no encuentra en esos paths.
              </li>
              <li>
                <strong>"Quiero un color que no existe"</strong> → usa valores
                arbitrarios con corchetes: <code>bg-[#1a2b3c]</code>,{" "}
                <code>text-[22px]</code>, <code>w-[340px]</code>. Tailwind los
                genera al vuelo.
              </li>
              <li>
                <strong>"El HTML queda muy largo"</strong> → normal al empezar.
                Solución: <code>@apply</code> para componentes que se repiten
                mucho, o componentes HTML reutilizables (incluye, templates…).
              </li>
              <li>
                <strong>"No funciona el hover / responsive"</strong> → revisa que
                no haya espacios entre el prefijo y la clase: <code>hover:bg-blue-600</code>
                (correcto) vs <code>hover: bg-blue-600</code> (incorrecto).
              </li>
              <li>
                <strong>"El dark mode no funciona"</strong> → activa{" "}
                <code>darkMode: 'media'</code> o <code>'class'</code> en{" "}
                <code>tailwind.config.js</code>. Por defecto está desactivado.
              </li>
              <li>
                <strong>"El CDN va lento / me da errores en prod"</strong> → el
                Play CDN no es para producción. Usa npm + CLI o Vite.
              </li>
            </ul>

            <div className="callout tip">
              <strong>Tip de depuración:</strong> instala la extensión oficial{" "}
              <em>Tailwind CSS IntelliSense</em> en VS Code. Te autocompleta
              las clases, te muestra el CSS generado al pasar el ratón y
              detecta errores de tipado.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 10) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>10) Retos prácticos (con HTML puro)</summary>
          <div className="dd-body">
            <p>
              Todos estos retos se resuelven con un archivo HTML y el Play CDN.
              No necesitas instalar nada.
            </p>

            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1: Tarjeta de perfil</summary>
              <div className="dd-body">
                <p>
                  Crea una tarjeta de perfil con: avatar (usa un div con{" "}
                  <code>rounded-full bg-gray-300 w-20 h-20</code>), nombre en negrita,
                  subtítulo en gris, y un botón "Seguir". El fondo de la página debe
                  ser <code>bg-gray-100</code> y la tarjeta centrada con{" "}
                  <code>mx-auto max-w-sm</code>.
                </p>
                <div className="callout">
                  Utilidades clave: <code>flex flex-col items-center</code>,{" "}
                  <code>rounded-full</code>, <code>font-bold text-xl</code>,{" "}
                  <code>text-gray-500 text-sm</code>, <code>btn-primary</code> (o créalo con Tailwind).
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>🟢 Reto 2: Grid de productos</summary>
              <div className="dd-body">
                <p>
                  Maqueta 6 tarjetas de producto con imagen placeholder, nombre,
                  precio y botón "Añadir". El grid debe ser:
                  1 columna en móvil, 2 en <code>sm</code>, 3 en <code>lg</code>.
                  Cada tarjeta debe tener hover con sombra aumentada.
                </p>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>🟡 Reto 3: Navbar responsive</summary>
              <div className="dd-body">
                <p>
                  Crea una barra de navegación con logo a la izquierda y links a la
                  derecha. En móvil los links deben ocultarse (<code>hidden md:flex</code>)
                  y mostrar un botón de menú. Añade un fondo blanco con sombra y
                  <code>sticky top-0</code> para que se quede fija al hacer scroll.
                </p>
                <div className="callout warn">
                  El menú móvil funcional requiere JavaScript para alternar{" "}
                  <code>hidden</code>/<code>block</code>. Es un buen ejercicio para
                  combinar Tailwind + JS básico.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>🔴 Reto 4: Landing page completa</summary>
              <div className="dd-body">
                <p>
                  Construye una landing page con:
                </p>
                <ol>
                  <li>Navbar con sticky</li>
                  <li>Hero con título grande, subtítulo y 2 botones (primary + outline)</li>
                  <li>Sección de 3 features con icono emoji, título y descripción</li>
                  <li>CTA final con fondo de color y botón centrado</li>
                  <li>Footer simple</li>
                </ol>
                <p>
                  Objetivo: <strong>cero CSS propio</strong>, solo Tailwind.
                  Todo responsive mobile-first.
                </p>
              </div>
            </details>

            <div className="callout tip">
              Cuando termines los retos, compara tu solución con la documentación
              oficial de Tailwind (<a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">tailwindcss.com/docs</a>).
              Es la mejor documentación de cualquier framework CSS: ejemplos visuales,
              buscador y playground integrado.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 11) TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>11) Test final (con feedback)</summary>
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
                          <>✅ Correcta. <strong>{q.why}</strong></>
                        )}
                        {bad && (
                          <>❌ Incorrecta. Correcta: <strong>{q.correct}</strong>. {q.why}</>
                        )}
                        {!picked && (
                          <>⚠️ Sin responder. Correcta: <strong>{q.correct}</strong>. {q.why}</>
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
                    <>🏆 <strong>Perfecto.</strong> Entiendes Tailwind como herramienta profesional: utility-first, responsive, estados y personalización.</>
                  )}
                  {score >= questions.length * 0.85 && score < questions.length && (
                    <>🎯 <strong>Muy bien.</strong> Refuerza la comparativa Bootstrap vs Tailwind y la personalización con config.</>
                  )}
                  {score >= questions.length * 0.65 && score < questions.length * 0.85 && (
                    <>📚 <strong>Buen avance.</strong> Haz los retos prácticos y repasa breakpoints + @apply.</>
                  )}
                  {score < questions.length * 0.65 && (
                    <>🔥 <strong>Repaso necesario.</strong> Vuelve a: filosofía utility-first, breakpoints y estados.</>
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
          ✅ Con Bootstrap y Tailwind en tu cinturón de herramientas, puedes abordar
          cualquier proyecto de interfaz web con criterio: sabes cuándo cada uno
          aporta más valor y cómo usarlos sin convertirlos en un problema.
         
        </div>

       
      </section>
    </main>
  );
}
