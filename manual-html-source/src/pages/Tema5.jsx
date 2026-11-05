import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed(array, seed) {
  const rng = mulberry32(seed);
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Tema5EtiquetasHTML() {
  const meta = {
    tema: "Tema 5",
    titulo: "Etiquetas HTML: estructura, contenido, semántica y buenas prácticas",
    kicker: "Tema 5 · Etiquetas HTML",
    lead:
      "Las etiquetas HTML son los bloques que dan forma a cualquier página web. En este tema aprenderás a leer y escribir HTML con criterio: cómo se construyen las etiquetas, cómo se clasifican, cuándo usar semántica y cómo evitar errores típicos que rompen accesibilidad, SEO y mantenimiento.",
  };

  const sections = useMemo(
    () => [
      { id: "inicio", label: "¿Qué es una etiqueta HTML?" },
      { id: "estructura-etiqueta", label: "Estructura y atributos" },
      { id: "clasificacion", label: "Clasificación de etiquetas" },
      { id: "semantica", label: "Semántica y estructura del documento" },
      { id: "contenido", label: "Etiquetas de contenido" },
      
      { id: "emmet", label: "Emmet: productividad" },
      { id: "compatibilidad", label: "Compatibilidad y validación" },
      { id: "buenas-practicas", label: "Buenas prácticas y estilo" },
      { id: "figma-ux", label: "Del proyecto al diseño (UX/Figma)" },
      { id: "test", label: "Test de repaso" },
    ],
    []
  );

  // =========================
  // TEST (4 opciones, 1 correcta)
  // =========================
  const questionsRaw = useMemo(
    () => [
      {
        id: 1,
        question: "¿Qué parte de una etiqueta HTML suele contener metadatos, enlaces a CSS y el título del documento?",
        options: ["<body>", "<main>", "<head>", "<section>"],
        correct: "<head>",
        explanation:
          "<head> agrupa metadatos (charset, viewport), enlaces a hojas de estilo, scripts y el <title>. No es contenido visible principal.",
      },
      {
        id: 2,
        question: "¿Cuál es la forma correcta de declarar HTML5?",
        options: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<doctype html5>", "<!HTML DOCTYPE>"],
        correct: "<!DOCTYPE html>",
        explanation:
          "La declaración correcta en HTML5 es <!DOCTYPE html>. Es simple y estandarizada.",
      },
      {
        id: 3,
        question: "¿Qué etiqueta es semánticamente adecuada para el contenido principal único del documento?",
        options: ["<div>", "<main>", "<aside>", "<footer>"],
        correct: "<main>",
        explanation:
          "<main> representa el contenido principal y único. Debe existir una sola vez por documento (salvo casos muy justificados).",
      },
      {
        id: 4,
        question: "¿Qué atributo es esencial en <img> para accesibilidad y SEO?",
        options: ["title", "alt", "loading", "width"],
        correct: "alt",
        explanation:
          "alt proporciona texto alternativo para lectores de pantalla y ayuda a buscadores a entender la imagen.",
      },
      {
        id: 5,
        question: "¿Cuál es una etiqueta vacía (sin cierre) típica en HTML?",
        options: ["<p>", "<article>", "<br>", "<section>"],
        correct: "<br>",
        explanation:
          "<br> es una etiqueta vacía: no envuelve contenido y no necesita etiqueta de cierre.",
      },
      {
        id: 6,
        question: "¿Qué etiqueta define un bloque de navegación principal (menú) de enlaces?",
        options: ["<header>", "<nav>", "<aside>", "<span>"],
        correct: "<nav>",
        explanation:
          "<nav> agrupa enlaces de navegación. No es obligatoria, pero mejora semántica y accesibilidad.",
      },
      {
        id: 7,
        question: "¿Qué etiqueta usarías para una pieza de contenido independiente, como una entrada de blog?",
        options: ["<article>", "<section>", "<div>", "<main>"],
        correct: "<article>",
        explanation:
          "<article> es autocontenida: tiene sentido por sí misma y puede reutilizarse o sindicarse.",
      },
      {
        id: 8,
        question: "¿Qué combinación crea una lista ordenada con elementos numerados?",
        options: ["<ul> + <li>", "<ol> + <li>", "<dl> + <dt>", "<table> + <tr>"],
        correct: "<ol> + <li>",
        explanation:
          "<ol> genera numeración automática y cada ítem se define con <li>.",
      },
      {
        id: 9,
        question: "¿Qué práctica mejora compatibilidad con caracteres (ñ, tildes, símbolos)?",
        options: ['Usar <meta charset="utf-8">', "Usar <meta name='lang'>", "Evitar <title>", "No usar DOCTYPE"],
        correct: 'Usar <meta charset="utf-8">',
        explanation:
          "UTF-8 evita problemas de codificación y es el estándar recomendado en la web.",
      },
      {
        id: 10,
        question: "¿Qué hace el atajo Emmet `ul>li*5`?",
        options: [
          "Crea un <ul> con cinco <li> dentro",
          "Crea cinco <ul> dentro de un <li>",
          "Crea un <ol> con cinco <li>",
          "Crea cinco enlaces <a> con un <ul>",
        ],
        correct: "Crea un <ul> con cinco <li> dentro",
        explanation:
          "Emmet usa una sintaxis parecida a selectores CSS: `>` anida, `*` repite. Resultado: <ul><li>… x5</li></ul>.",
      },
    ],
    []
  );

  // barajamos opciones de forma estable por pregunta (seed = id*999)
  const questions = useMemo(() => {
    return questionsRaw.map((q) => {
      const shuffled = shuffleWithSeed(q.options, q.id * 999);
      return {
        ...q,
        shuffledOptions: shuffled,
      };
    });
  }, [questionsRaw]);

  const [answers, setAnswers] = useState(() => ({}));
  const [result, setResult] = useState(null);

  function onChoose(qid, option) {
    setAnswers((prev) => ({ ...prev, [qid]: option }));
  }

  function gradeTest() {
    const details = questions.map((q) => {
      const chosen = answers[q.id];
      const ok = chosen === q.correct;
      return {
        id: q.id,
        question: q.question,
        chosen: chosen ?? null,
        correct: q.correct,
        ok,
        explanation: q.explanation,
      };
    });

    const total = details.length;
    const correctCount = details.filter((d) => d.ok).length;

    setResult({
      total,
      correctCount,
      percent: Math.round((correctCount / total) * 100),
      details,
    });
  }

  function resetTest() {
    setAnswers({});
    setResult(null);
  }

  // Función para manejar el scroll a las secciones
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  return (
    <>
    <main className="doc">
      {/* HERO */}
      <header className="doc-hero" aria-labelledby="tema-title">
        <p className="doc-kicker">{meta.kicker}</p>
        <h1 id="tema-title">
          {meta.tema}: {meta.titulo}
        </h1>
        <p className="doc-lead">{meta.lead}</p>

        <figure className="media" style={{ marginTop: ".5rem" }}>
          <img
            src={`${import.meta.env.BASE_URL}img/etiqueta.png`}
            alt="Aprender HTML: base de la estructura web"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="callout tip">
          <strong>Idea clave:</strong> HTML no “decora” (eso es CSS) ni “anima” (eso es JavaScript). HTML <em>estructura</em>: define qué es cada cosa.
        </div>
      </header>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice del tema">
        <h2>Índice</h2>
        <ol>
          {sections.map((s) => (
            <li key={s.id}>
              <a 
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(s.id);
                }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* =========================
          SECCIÓN 1: ¿Qué es una etiqueta?
         ========================= */}
      <section id="inicio" className="doc-section" aria-label="Qué es una etiqueta HTML">
        <h2>¿Qué es HTML5 y qué papel tienen las etiquetas?</h2>
        <p>
          HTML (<em>HyperText Markup Language</em>) es el lenguaje de marcas estándar para crear documentos web.
          HTML5 consolidó un enfoque moderno: más semántica, mejor soporte multimedia, formularios más potentes
          y un ecosistema coherente con APIs del navegador.
        </p>
        

        <details className="dd">
          <summary>Conceptos básicos que debes dominar</summary>
          <div className="dd-body">
            <ul>
              <li>
                Una <strong>etiqueta</strong> define un elemento: encabezado, párrafo, lista, imagen, tabla, etc.
              </li>
              <li>
                Un documento HTML tiene <strong>estructura global</strong>: <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>.
              </li>
              <li>
                La semántica (usar <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>…) mejora SEO,
                accesibilidad y mantenimiento.
              </li>
            </ul>

           
          </div>
        </details>

        <div className="callout warn">
          <strong>Error típico:</strong> confundir “verlo bien en mi navegador” con “estar bien hecho”.
          Un HTML correcto es <em>válido</em>, <em>semántico</em> y <em>accesible</em>.El navegador es flexible con tus errores 
          pero debes escribir buen código desde el principio.
        </div>
      </section>

      {/* =========================
          SECCIÓN 2: Estructura y atributos
         ========================= */}
      <section id="estructura-etiqueta" className="doc-section" aria-label="Estructura de etiquetas y atributos">
        <h2>Estructura de una etiqueta: apertura, contenido, cierre y atributos</h2>
        <p>
          La mayoría de elementos HTML siguen un patrón: etiqueta de apertura, contenido y etiqueta de cierre.
          Además, pueden incluir <strong>atributos</strong> que ajustan su comportamiento.Hay etiquetas que no se cierran porque no envuelven contenido (void elements).
        </p>

        <details className="dd">
          <summary>Forma general</summary>
          <div className="dd-body">
            <pre>
              <code>{`<etiqueta atributo="valor">Contenido</etiqueta>`}</code>
            </pre>
            <ul>
              <li>
                <strong>Apertura:</strong> <code>&lt;p&gt;</code>
              </li>
              <li>
                <strong>Contenido:</strong> el texto o elementos anidados
              </li>
              <li>
                <strong>Cierre:</strong> <code>&lt;/p&gt;</code>
              </li>
              <li>
                <strong>Atributos:</strong> información extra, por ejemplo <code>class</code>, <code>id</code>, <code>href</code>, <code>src</code>
              </li>
            </ul>
          </div>
        </details>

        <details className="dd dd-nested">
          <summary>Etiquetas vacías (void elements)</summary>
          <div className="dd-body">
            <p>
              Algunas etiquetas no envuelven contenido y no llevan cierre. Aun así, requieren atributos para ser útiles.
            </p>
            <ul>
              <li>
                <code>&lt;br&gt;</code> — salto de línea (úsalo con criterio, no para “maquetar”).
              </li>
              <li>
                <code>&lt;img&gt;</code> — imagen (imprescindible <code>alt</code>).
              </li>
              <li>
                <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code> — metadatos y enlaces a recursos (CSS).
              </li>
              <li>
                <code>&lt;input&gt;</code> — campos de formulario (normalmente se asocia con <code>&lt;label&gt;</code>).
              </li>
            </ul>
          </div>
        </details>

        <div className="callout tip">
          <strong>Regla profesional:</strong> si hay un atributo importante para accesibilidad (como <code>alt</code> en imágenes),
          se escribe siempre, aunque “parezca que no hace falta”.
        </div>
      </section>

      {/* =========================
          SECCIÓN 3: Clasificación
         ========================= */}
      <section id="clasificacion" className="doc-section" aria-label="Clasificación de etiquetas HTML">
        <h2>Clasificación de etiquetas y ejemplos</h2>
        <p>
          Entender categorías te permite pensar en HTML como un sistema: estructura, secciones, texto, enlaces,
          multimedia, listas, tablas, formularios…
        </p>

        <div className="table-wrap" role="region" aria-label="Tabla de categorías de etiquetas HTML">
          <table className="table">
            <thead>
              <tr>
                <th>Categoría</th>
                <th>Etiquetas</th>
                <th>Descripción / Uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Estructura global</strong></td>
                <td>
                  <code>&lt;!DOCTYPE&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>
                </td>
                <td>Define el tipo de documento y su estructura.</td>
              </tr>
              <tr>
                <td><strong>Metadatos</strong></td>
                <td><code>&lt;meta&gt;</code>, <code>&lt;title&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;style&gt;</code></td>
                <td>Información del documento, enlaces a CSS, etc.</td>
              </tr>
              <tr>
                <td><strong>Secciones</strong></td>
                <td>
                  <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>,{" "}
                  <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>
                </td>
                <td>Organiza el contenido con significado (semántica).</td>
              </tr>
              <tr>
                <td><strong>Texto</strong></td>
                <td><code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;blockquote&gt;</code>, <code>&lt;pre&gt;</code></td>
                <td>Encabezados, párrafos, citas y texto preformateado.</td>
              </tr>
              <tr>
                <td><strong>Estilo / Énfasis</strong></td>
                <td><code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;u&gt;</code>, <code>&lt;mark&gt;</code>, <code>&lt;br&gt;</code></td>
                <td>Énfasis y formatos (sin sustituir a CSS).</td>
              </tr>
              <tr>
                <td><strong>Enlaces</strong></td>
                <td><code>&lt;a&gt;</code></td>
                <td>Navegación e interconexión de recursos.</td>
              </tr>
              <tr>
                <td><strong>Multimedia</strong></td>
                <td><code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;source&gt;</code></td>
                <td>Imágenes, audio y vídeo nativo.</td>
              </tr>
              <tr>
                <td><strong>Listas</strong></td>
                <td><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>, <code>&lt;dl&gt;</code></td>
                <td>Listas desordenadas, ordenadas y de definición.</td>
              </tr>
              <tr>
                <td><strong>Tablas</strong></td>
                <td><code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code></td>
                <td>Datos tabulares (no para maquetar).</td>
              </tr>
              <tr>
                <td><strong>Formularios</strong></td>
                <td><code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;button&gt;</code></td>
                <td>Captura de datos y validación.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <details className="dd">
          <summary>Cómo pensar en categorías (sin memorizar “por lista”)</summary>
          <div className="dd-body">
            <p>
              No se trata de aprender 100 etiquetas sueltas, sino de entender “familias”. Cuando sabes qué familia
              necesitas (texto, navegación, multimedia…), reduces errores y trabajas con criterio.
            </p>
            <ul>
              <li><strong>¿Qué es esto?</strong> (título, párrafo, navegación, contenido independiente…)</li>
              <li><strong>¿Qué relación tiene?</strong> (parte principal, complemento, nota lateral…)</li>
              <li><strong>¿Cómo lo usaría un lector de pantalla?</strong> (estructura clara y navegable)</li>
            </ul>
          </div>
        </details>
      </section>

      {/* =========================
          SECCIÓN 4: Semántica
         ========================= */}
      <section id="semantica" className="doc-section" aria-label="Etiquetas semánticas">
        <h2>Etiquetas semánticas: estructura con significado</h2>
        <p>
          La semántica convierte tu HTML en un documento “legible” por personas, buscadores y tecnologías de asistencia.
          Es una de las diferencias más claras entre un HTML que simplemente funciona y un HTML sólido.
        </p>

        <div className="table-wrap" role="region" aria-label="Tabla de etiquetas semánticas y ejemplos">
          <table className="table">
            <thead>
              <tr>
                <th>Etiqueta</th>
                <th>Descripción</th>
                <th>Ejemplo de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>&lt;header&gt;</code></td>
                <td>Cabecera de documento o sección (logo, título, navegación principal).</td>
                <td><code>{`<header>...</header>`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;nav&gt;</code></td>
                <td>Conjunto de enlaces de navegación.</td>
                <td><code>{`<nav><ul>...</ul></nav>`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;main&gt;</code></td>
                <td>Contenido principal y único de la página.</td>
                <td><code>{`<main>...</main>`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;article&gt;</code></td>
                <td>Contenido independiente (post, noticia, tarjeta con sentido propio).</td>
                <td><code>{`<article>...</article>`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;section&gt;</code></td>
                <td>Sección temática (bloque con título y objetivo).</td>
                <td><code>{`<section>...</section>`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;aside&gt;</code></td>
                <td>Contenido relacionado pero secundario (barra lateral, nota, enlaces).</td>
                <td><code>{`<aside>...</aside>`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;footer&gt;</code></td>
                <td>Pie de documento o sección (autoría, contacto, legal).</td>
                <td><code>{`<footer>...</footer>`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;div&gt;</code></td>
                <td>Contenedor genérico (cuando no hay etiqueta semántica adecuada).</td>
                <td><code>{`<div class="contenedor">...</div>`}</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <details className="dd">
          <summary>Por qué la semántica importa (sin excusas)</summary>
          <div className="dd-body">
            <ul>
              <li><strong>SEO:</strong> el buscador entiende mejor la jerarquía y el propósito del contenido.</li>
              <li><strong>Accesibilidad:</strong> lectores de pantalla navegan por secciones y landmarks.</li>
              <li><strong>Mantenimiento:</strong> el código es más fácil de leer, revisar y ampliar.</li>
            </ul>
            <div className="callout tip">
              Si dudas entre <code>&lt;div&gt;</code> y una etiqueta semántica, normalmente la pregunta correcta es:
              <strong> “¿qué significa este bloque?”</strong>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          SECCIÓN 5: Contenido
         ========================= */}
      <section id="contenido" className="doc-section" aria-label="Etiquetas de contenido">
        <h2>Etiquetas de contenido: texto, listas, contenedores en línea</h2>
        <p>
          Las etiquetas de contenido construyen el “cuerpo” de la página: títulos, párrafos, listas, enlaces y elementos en línea.
          Aquí, el objetivo es escribir HTML legible y jerárquico.
        </p>

        <div className="table-wrap" role="region" aria-label="Tabla de etiquetas de contenido">
          <table className="table">
            <thead>
              <tr>
                <th>Etiqueta</th>
                <th>Descripción</th>
                <th>Ejemplo de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>&lt;p&gt;</code></td>
                <td>Define un párrafo (bloque de texto).</td>
                <td><code>{`<p>Este es un párrafo.</p>`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code></td>
                <td>Encabezados con jerarquía (estructura del documento).</td>
                <td><code>{`<h2>Sección</h2>`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;a&gt;</code></td>
                <td>Hipervínculo a recursos o secciones.</td>
                <td><code>{`<a href="...">Visitar</a>`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;img&gt;</code></td>
                <td>Inserta una imagen (void). Requiere <code>src</code> y <code>alt</code>.</td>
                <td><code>{`<img src="imagen.jpg" alt="Descripción">`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></td>
                <td>Listas desordenadas/ordenadas y sus ítems.</td>
                <td><code>{`<ul><li>Item</li></ul>`}</code></td>
              </tr>
              <tr>
                <td><code>&lt;span&gt;</code></td>
                <td>Contenedor en línea genérico (para pequeñas porciones).</td>
                <td><code>{`Texto <span class="resaltado">resaltado</span>`}</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <details className="dd">
          <summary>Jerarquía correcta de títulos (lo que realmente se evalúa)</summary>
          <div className="dd-body">
            <p>
              Los títulos no se eligen por tamaño visual (eso es CSS). Se eligen por jerarquía.
              Un documento sólido suele tener:
            </p>
            <ul>
              <li><code>&lt;h1&gt;</code> para el título principal del documento.</li>
              <li><code>&lt;h2&gt;</code> para secciones principales.</li>
              <li><code>&lt;h3&gt;</code> para subsecciones, y así sucesivamente.</li>
            </ul>
            <div className="callout warn">
              Saltar de <code>&lt;h1&gt;</code> a <code>&lt;h4&gt;</code> sin motivo suele romper la lectura estructural.
            </div>
          </div>
        </details>
      </section>


      {/* =========================
          SECCIÓN 8: Emmet
         ========================= */}
      <section id="emmet" className="doc-section" aria-label="Emmet en HTML y CSS">
        <h2>Emmet: escribir más rápido sin bajar calidad</h2>
        <p>
          Emmet acelera el marcado HTML y CSS con abreviaturas. Bien usado, reduce errores repetitivos y aumenta productividad.
          La clave es que no sustituye el criterio: lo hace más rápido.
        </p>

        <details className="dd">
          <summary>Atajos útiles y mentalidad</summary>
          <div className="dd-body">
            <ul>
              <li><strong>Sintaxis tipo selectores:</strong> <code>ul&gt;li*5</code> crea una lista con 5 elementos.</li>
              <li><strong>Anidación:</strong> <code>&gt;</code> coloca dentro; <strong>hermanos:</strong> <code>+</code>.</li>
              <li><strong>Clases e IDs:</strong> <code>section#proyectos.card</code> crea sección con id y clase.</li>
            </ul>

            <pre>
              <code>{`ul>li*5
header>nav>a*4
section#about.card>h2+p`}</code>
            </pre>

            <div className="media-video" aria-label="Vídeo sobre Emmet">
              <iframe
                src="https://www.youtube.com/embed/5E6MNRTREUg"
                title="Emmet: escribir código más rápido"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="muted">Prueba Emmet en VS Code: escribe la abreviatura y pulsa Tab.</p>
          </div>
        </details>
      </section>

      {/* =========================
          SECCIÓN 9: Compatibilidad y validación
         ========================= */}
      <section id="compatibilidad" className="doc-section" aria-label="Compatibilidad y validación HTML">
        <h2>Compatibilidad: cómo evitar sorpresas en navegadores y dispositivos</h2>
        <p>
          La compatibilidad significa que tu web se comporta de forma consistente en distintos navegadores, sistemas y tamaños.
          Esto no se “espera”: se diseña, se valida y se prueba.
        </p>

        <details className="dd">
          <summary>Checklist de compatibilidad</summary>
          <div className="dd-body">
            <ul>
              <li>Declara HTML5: <code>&lt;!DOCTYPE html&gt;</code>.</li>
              <li>
                Define caracteres: <code>&lt;meta charset="utf-8"&gt;</code>.
              </li>
              <li>
                Usa viewport: <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>.
              </li>
              <li>Prueba en varios navegadores y en móvil.</li>
            </ul>

            <div className="callout tip">
              Valida tu HTML con el validador del W3C:{" "}
              <a href="https://validator.w3.org/" target="_blank" rel="noopener">
                W3C Markup Validation Service
              </a>
              .
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          SECCIÓN 10: Buenas prácticas y estilo
         ========================= */}
      <section id="buenas-practicas" className="doc-section" aria-label="Buenas prácticas HTML">
        <h2>Buenas prácticas: legibilidad, mantenimiento y criterio</h2>
        <p>
          Un HTML de calidad no solo “pasa”. Se entiende. Se mantiene. Y escala sin romperse.
          Aquí entran la semántica, los nombres, el orden y el estilo del código.
        </p>

        <details className="dd">
          <summary>Buenas prácticas imprescindibles</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Comenta con intención:</strong> <code>{`<!-- Explico por qué existe este bloque -->`}</code>
              </li>
              <li>
                <strong>Nombres descriptivos:</strong> mejor <code>menu-principal</code> que <code>clase1</code>.
              </li>
              <li>
                <strong>Semántica antes que divitis:</strong> usa <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, etc.
              </li>
              <li>
                <strong>Indentación consistente:</strong> la jerarquía debe “verse” sin pensar.
              </li>
              <li>
                <strong>Atributos entre comillas dobles</strong> y orden lógico (id/class primero suele ser claro).
              </li>
            </ul>
            <div className="callout warn">
              La tabla es para datos. Si la usas para “colocar cosas”, estás mezclando estructura con presentación.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Estructura de proyecto (nombres y carpetas)</summary>
          <div className="dd-body">
            <p>
              Una estructura escalable te ahorra problemas: rutas claras, assets ordenados y crecimiento sin caos.
            </p>
            <pre>
              <code>{`mi-proyecto/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── modules/
│   │       ├── carousel.js
│   │       └── form-validator.js
│   └── img/
│       ├── logo.png
│       ├── favicon.ico
│       └── background.jpg
├── vendors/
│   ├── bootstrap.min.css
│   └── bootstrap.bundle.min.js
└── pages/
    ├── about.html
    ├── contact.html
    └── services.html`}</code>
            </pre>
          </div>
        </details>
      </section>

      {/* =========================
          SECCIÓN 11: Figma y UX
         ========================= */}
      <section id="figma-ux" className="doc-section" aria-label="Figma y UX">
        <h2>Del proyecto al diseño: UX, usabilidad y Figma</h2>
        <p>
          Antes de escribir código, define para quién es la web, qué tareas debe permitir y qué estructura hace que navegar sea natural.
          Aquí UX y usabilidad no son “extra”: son la base de una web que funciona en la práctica.
        </p>

        <details className="dd">
          <summary>UX y Usabilidad: conceptos que guían tu HTML</summary>
          <div className="dd-body">
            <p>
              UX es la experiencia global al usar tu web; usabilidad es la facilidad para completar tareas sin frustración.
              La semántica (landmarks, jerarquía de títulos, navegación clara) impacta directamente en ambos.
            </p>
            <ul>
              <li><strong>Menos errores:</strong> estructura clara y predecible.</li>
              <li><strong>Mejor orientación:</strong> navegación coherente y secciones identificables.</li>
              <li><strong>Más conversión:</strong> si el usuario entiende, actúa.</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>Figma: del plano visual al código</summary>
          <div className="dd-body">
            <p>
              Figma permite diseñar y prototipar en el navegador, colaborar en tiempo real y extraer medidas/estilos.
              Úsalo como plano para decidir secciones, jerarquía y componentes.
            </p>
            <ol>
              <li>Crea un frame (por ejemplo 1440px de ancho).</li>
              <li>Haz wireframes (bloques simples: header, main, secciones).</li>
              <li>Define tipografías, colores e imágenes.</li>
              <li>Exporta recursos (SVG/PNG) en tamaños adecuados.</li>
              <li>Traduce a HTML: semántica primero, estilo después.</li>
            </ol>

            <div className="media-video" aria-label="Vídeo sobre Figma">
              <iframe
                src="https://www.youtube.com/embed/xGL6wv4CmCk"
                title="Cómo usar Figma"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          SECCIÓN 12: TEST
         ========================= */}
      <section id="test" className="doc-section" aria-label="Test de repaso">
        <h2>Test de repaso: Etiquetas HTML</h2>
        <p>
          Responde y corrige al final. Al corregir obtendrás retroalimentación detallada por pregunta, incluyendo la respuesta correcta.
        </p>

        <div className="callout tip">
          Consejo: no “adivines”. Justifica mentalmente por qué esa etiqueta es la adecuada (semántica, rol y uso).
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            gradeTest();
          }}
        >
          {questions.map((q, idx) => (
            <fieldset key={q.id} className="card" style={{ marginTop: "1rem" }}>
              <legend style={{ fontWeight: 900 }}>
                {idx + 1}. {q.question}
              </legend>

              <div className="test-question" role="radiogroup" aria-label={`Pregunta ${idx + 1}`}>
                {q.shuffledOptions.map((opt) => {
                  const name = `q-${q.id}`;
                  const id = `q-${q.id}-${opt}`;
                  const checked = answers[q.id] === opt;

                  return (
                    <label key={opt} htmlFor={id}>
                      <input
                        id={id}
                        type="radio"
                        name={name}
                        value={opt}
                        checked={checked}
                        onChange={() => onChoose(q.id, opt)}
                      />
                      <span>{opt}</span>
                    </label>
                  );
                })}
              </div>

              {result && (
                <div className={`callout ${result.details.find((d) => d.id === q.id)?.ok ? "tip" : "warn"}`}>
                  <strong>
                    {result.details.find((d) => d.id === q.id)?.ok ? "Correcto" : "Revisar"}
                  </strong>
                  <div style={{ marginTop: ".35rem" }}>
                    <div>
                      <strong>Tu respuesta:</strong>{" "}
                      {result.details.find((d) => d.id === q.id)?.chosen ?? "No respondida"}
                    </div>
                    <div>
                      <strong>Correcta:</strong> {q.correct}
                    </div>
                    <p style={{ marginBottom: 0 }}>{q.explanation}</p>
                  </div>
                </div>
              )}
            </fieldset>
          ))}

          <div className="doc-next">
            {!result ? (
              <button type="submit" className="btn btn-primary">
                Corregir test
              </button>
            ) : (
              <button type="button" className="btn" onClick={resetTest}>
                Reiniciar test
              </button>
            )}
          </div>
        </form>

        {result && (
          <div className="card" style={{ marginTop: "1rem" }}>
            <h3 style={{ marginTop: 0 }}>Resultado</h3>
            <p>
              Aciertos: <strong>{result.correctCount}</strong> / {result.total} ·{" "}
              <strong>{result.percent}%</strong>
            </p>
            <div className="callout tip">
              <strong>Siguiente paso:</strong> revisa las preguntas falladas y escribe un mini ejemplo HTML real
              donde uses correctamente esas etiquetas (no basta con reconocerlas: hay que aplicarlas).
            </div>
          </div>
        )}
      </section>

      {/* CIERRE */}
      <section className="doc-section" aria-label="Cierre del tema">
        <h2>Ampliación y recursos recomendados</h2>
        <p>
          Si quieres profundizar con criterio, apóyate en documentación oficial y recursos de práctica guiada:
        </p>

        <div className="bonus-links">
          <div className="bonus-links__header">
            <h2>Recursos</h2>
            <p className="bonus-links__lead">Documentación sólida + aprendizaje práctico.</p>
          </div>

          <ul className="bonus-links__list">
            <li className="bonus-links__item">
              <a className="bonus-links__link" href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener">
                <span className="bonus-links__name">MDN Web Docs (HTML)</span>
                <span className="bonus-links__desc">Referencia de alta calidad para elementos, atributos y buenas prácticas.</span>
              </a>
            </li>
            <li className="bonus-links__item">
              <a className="bonus-links__link" href="https://www.w3schools.com/html/" target="_blank" rel="noopener">
                <span className="bonus-links__name">W3Schools (HTML)</span>
                <span className="bonus-links__desc">Ejemplos rápidos y ejercicios para practicar.</span>
              </a>
            </li>
            <li className="bonus-links__item">
              <a className="bonus-links__link" href="https://www.freecodecamp.org/learn/responsive-web-design/" target="_blank" rel="noopener">
                <span className="bonus-links__name">freeCodeCamp</span>
                <span className="bonus-links__desc">Ruta práctica: HTML + CSS + responsive con retos.</span>
              </a>
            </li>
            <li className="bonus-links__item">
              <a className="bonus-links__link" href="https://validator.w3.org/" target="_blank" rel="noopener">
                <span className="bonus-links__name">Validador W3C</span>
                <span className="bonus-links__desc">Detecta errores reales de marcado y mejora compatibilidad.</span>
              </a>
            </li>
          </ul>

          <p className="bonus-links__note">
            Si tu HTML es semántico, válido y accesible, tu CSS y tu JS serán más fáciles de escribir, mantener y ampliar.
          </p>
        </div>
      </section>
      <div className="doc-next">
        <Link className="btn btn-primary" to="/tema/6">
          Siguiente tema <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
    </>
  );
}
