import { useEffect, useMemo, useState } from "react";

const didacticQuestions = [
  ["Fundamento", "¿Qué comunica <!DOCTYPE html> al navegador?", null, ["Un título visible", "Que el documento usa HTML moderno", "El contenido principal", "Una hoja de estilos"], 1, "Indica el tipo de documento para que el navegador use el modo estándar. No es contenido visible ni sustituye a <html>."],
  ["Interpretar código", "¿Qué relación es correcta en esta estructura?", `<!DOCTYPE html>\n<html lang="es">\n  <head>...</head>\n  <body>...</body>\n</html>`, ["head y body están dentro de html", "body contiene html", "head es contenido visible", "html va dentro de body"], 0, "<html> es el elemento raíz. <head> contiene información sobre el documento y <body> contiene el contenido visible."],
  ["Interpretar código", "¿Qué pertenece mejor a <head>?", `<head>\n  <meta charset="UTF-8">\n  <title>Recetas de Ana</title>\n</head>`, ["El menú de la página", "El título de la pestaña y metadatos", "Una receta completa", "El pie visible"], 1, "<head> reúne información para el navegador, como metadatos, título y enlaces a recursos. El contenido de la página va en <body>."],
  ["Detectar errores", "¿Cómo corriges este fragmento?", `<body>\n  <title>Mi portfolio</title>\n  <h1>Portfolio de Lucía</h1>\n</body>`, ["Mover title a head", "Cambiar title por header", "Eliminar h1", "Mover title a main"], 0, "<title> identifica el documento y pertenece a <head>; <h1> es el encabezado visible dentro de <body>. Cumplen funciones distintas."],
  ["Situación práctica", "¿Qué estructura expresa mejor una academia con cabecera, menú, curso y pie?", null, ["<body><main><header>...</header><nav>...</nav></main></body>", "<body><header>...</header><nav>...</nav><main>...</main><footer>...</footer></body>", "<main><body>...</body></main>", "<head><main>...</main></head>"], 1, "<body> contiene el contenido del documento y puede incluir header, nav, main y footer. Idea clave: <main> está dentro de <body>; no lo sustituye."],
  ["Concepto", "¿Cuál es la diferencia entre <head> y <header>?", null, ["Son lo mismo", "head contiene información del documento; header es contenido visible", "header va dentro de head", "head solo contiene imágenes"], 1, "<head> contiene metadatos, título y recursos. <header> organiza una cabecera visible de la página o de una sección."],
  ["Concepto", "¿Qué resume mejor el papel de HTML?", null, ["Da colores y posiciones", "Estructura y aporta significado al contenido", "Programa lógica compleja", "Guarda datos"], 1, "HTML es un lenguaje de marcado: organiza el contenido y expresa su significado. No se usa principalmente para estilos ni para lógica."],
  ["Concepto", "¿Qué aporta HTML5 de forma útil?", null, ["Obliga a usar tablas", "Elementos semánticos y mejores controles de formulario", "Sustituye las hojas de estilo", "Impide usar multimedia"], 1, "HTML5 incorpora semántica, multimedia nativa y tipos de input expresivos como email. Ayuda a describir mejor una página."],
  ["Situación práctica", "Enlaces a Inicio, Carta, Reservas y Contacto de un restaurante. ¿Qué elemento los describe mejor?", null, ["<div>", "<nav>", "<aside>", "<footer>"], 1, "<nav> comunica que ese bloque sirve para navegar. Un div puede agrupar, pero no explica la función del contenido."],
  ["Situación práctica", "Una noticia puede compartirse y seguir teniendo sentido por sí sola. ¿Qué elemento es adecuado?", null, ["<article>", "<span>", "<br>", "<nav>"], 0, "<article> representa contenido independiente o reutilizable, como una noticia o entrada de blog."],
  ["Detectar errores", "¿Qué problema hay en esta jerarquía?", `<h1>Mi viaje a Lisboa</h1>\n<h4>Qué visitar</h4>`, ["Ninguno", "Salta niveles sin organizar la sección", "h1 va en head", "h4 no existe"], 1, "Los encabezados expresan jerarquía, no tamaños. Tras un h1, una sección como “Qué visitar” normalmente debería empezar con h2."],
  ["Comparar soluciones", "¿Qué uso expresa mejor una advertencia importante?", null, ["<em>Importante:</em> guarda una copia", "<strong>Importante:</strong> guarda una copia", "<br>Importante</br>", "<h6>Importante</h6>"], 1, "<strong> indica importancia; <em> indica énfasis. No son herramientas para cambiar el aspecto del texto."],
  ["Situación práctica", "Quieres mostrar pasos que deben seguirse en orden. ¿Qué estructura eliges?", null, ["<ul><li>Crear</li><li>Escribir</li></ul>", "<ol><li>Crear</li><li>Escribir</li></ol>", "<p>1. Crear<br>2. Escribir</p>", "<table><tr><td>Crear</td></tr></table>"], 1, "<ol> representa una lista ordenada: cambiar el orden cambia el proceso. <ul> es para colecciones sin orden relevante."],
  ["Interpretar código", "¿Qué ocurrirá al activar este enlace?", `<a href="#contacto">Ir a contacto</a>\n<section id="contacto"><h2>Contacto</h2></section>`, ["Abrirá un correo", "Irá a la sección contacto", "Descargará un archivo", "Cambiará el título"], 1, "href=\"#contacto\" apunta al elemento cuyo id es contacto. Ambos valores deben coincidir exactamente."],
  ["Detectar errores", "¿Qué enlace externo es más completo?", null, ["<a href=" + '"https://ejemplo.com"' + ">Recurso</a>", "<a target=" + '"_blank"' + ">Recurso</a>", "<a href=" + '"https://ejemplo.com"' + " target=" + '"_blank"' + " rel=" + '"noopener noreferrer"' + ">Recurso externo</a>", "<link href=" + '"https://ejemplo.com"' + ">"], 2, "href indica el destino. Con target=_blank, rel=noopener noreferrer protege la ventana original. Además, un texto descriptivo orienta mejor."],
  ["Situación práctica", "Una foto de una tarta aporta información al artículo. ¿Qué alt es adecuado?", null, ["alt=\"imagen\"", "alt=\"\"", "alt=\"Tarta de chocolate terminada con fresas\"", "alt=\"foto123.png\""], 2, "El alt debe describir la información que aporta la imagen en ese contexto. Un nombre de archivo o “imagen” no ayuda."],
  ["Situación práctica", "Una imagen decorativa no añade información porque el texto ya la explica. ¿Qué debe llevar?", null, ["alt=\"\"", "alt=\"decoración importante\"", "No debe llevar alt", "alt=\"imagen\""], 0, "Una imagen decorativa debe tener alt vacío. Así no añade ruido a quien usa un lector de pantalla."],
  ["Interpretar código", "La página se desplaza al cargar una imagen. ¿Qué atributos ayudan a reservar espacio?", `<img src="equipo.webp" alt="Equipo del proyecto">`, ["href y target", "width y height", "for e id", "action y method"], 1, "width y height permiten prever el espacio de la imagen. También conviene optimizar el archivo; loading=lazy ayuda con imágenes que están más abajo."],
  ["Concepto", "¿Qué ventaja suele aportar WebP?", null, ["Convierte la imagen en tabla", "Suele reducir peso con buena calidad", "Elimina la necesidad de alt", "Hace imágenes decorativas"], 1, "WebP suele ofrecer una buena relación entre calidad y tamaño. Sigue siendo necesario un texto alternativo cuando la imagen informa."],
  ["Interpretar código", "¿Qué relación hace funcionar este mapa de imagen?", `<img src="campus.png" usemap="#zonas" alt="Plano">\n<map name="zonas"><area href="biblioteca.html" alt="Biblioteca"></map>`, ["usemap coincide con name", "alt coincide con href", "src coincide con area", "map sustituye alt"], 0, "usemap conecta la imagen con el map cuyo name tiene el mismo valor. Cada zona clicable necesita destino y texto alternativo."],
  ["Situación práctica", "Quieres mostrar notas por alumno y asignatura. ¿Tiene sentido usar una tabla?", null, ["No, las tablas son solo para menús", "Sí, son datos en filas y columnas", "Sí, para colocar menú y contenido", "No, son antiguas"], 1, "Las tablas sirven para datos tabulares. No son una herramienta general para distribuir el diseño visual de la página."],
  ["Detectar errores", "¿Qué decisión es incorrecta?", null, ["Usar table para precios y cantidades", "Usar table para poner menú a la izquierda y contenido a la derecha", "Usar caption para describir una tabla", "Usar th con scope"], 1, "Una tabla representa datos, no la maquetación. HTML debe expresar la estructura y el significado antes que la distribución visual."],
  ["Interpretar código", "¿Qué mejora aporta esta tabla?", `<table><caption>Horario de tutorías</caption>\n<tr><th scope="col">Día</th><th scope="col">Hora</th></tr>\n<tr><td>Lunes</td><td>10:00</td></tr></table>`, ["caption decora", "scope relaciona encabezados y caption explica la tabla", "th sustituye table", "td crea enlaces"], 1, "caption da contexto a la tabla. scope ayuda a asociar cada dato con el encabezado correspondiente."],
  ["Detectar errores", "¿Cómo haces que al pulsar “Correo” se active el campo?", `<label for="correo">Correo</label>\n<input id="email" type="email" name="correo">`, ["Cambiar name por for", "Hacer coincidir for=correo con id=correo", "Eliminar label", "Cambiar type por password"], 1, "for e id deben coincidir. name nombra el dato al enviarlo. Idea clave: for ↔ id conecta etiqueta y control."],
  ["Interpretar código", "¿Qué ayuda ofrece este input antes de enviar?", `<input type="email" id="correo" name="correo" required>`, ["Guarda el correo", "Pide formato de correo y evita vacío", "Cifra el correo", "Envía siempre por POST"], 1, "type=email solicita un formato básico y required evita un envío vacío en el navegador. El servidor debe validar también los datos."],
  ["Situación práctica", "Un formulario tiene Datos personales y Preferencias del curso. ¿Qué combinación organiza los grupos?", null, ["fieldset y legend", "br y hr", "table y caption", "nav y a"], 0, "fieldset agrupa controles relacionados y legend nombra ese grupo. Mejora la estructura y la comprensión del formulario."],
  ["Interpretar código", "¿Qué significa action=\"/registro\"?", `<form action="/registro" method="post">...</form>`, ["El color", "La ruta que recibe los datos", "Un campo obligatorio", "El id del botón"], 1, "action señala el destino que recibirá los datos al enviar. El formulario organiza controles; otra parte puede procesar la información."],
  ["Situación práctica", "Una página permite buscar cursos y mostrar el término en la URL. ¿Qué método suele encajar?", null, ["GET", "POST", "alt", "lazy"], 0, "GET suele enviar parámetros en la URL y es útil para búsquedas y filtros. POST envía datos en el cuerpo de la petición."],
  ["Concepto", "¿Qué afirmación sobre POST es correcta?", null, ["Siempre cifra", "Sustituye HTTPS", "Envía datos en el cuerpo, pero no los protege automáticamente", "Solo funciona con textarea"], 2, "POST no cifra por sí solo. HTTPS protege la transmisión y el servidor debe comprobar siempre los datos recibidos."],
  ["Situación práctica", "El nombre de usuario necesita al menos 3 caracteres. ¿Qué atributo lo expresa?", null, ["minlength=\"3\"", "pattern=\"3\"", "scope=\"3\"", "loading=\"3\""], 0, "minlength establece una longitud mínima. pattern se usa para pedir un formato concreto, no para sustituir todas las reglas."],
  ["Interpretar código", "¿Para qué sirve pattern en este campo?", `<input id="codigo" pattern="[A-Z]{3}-[0-9]{2}" title="Tres letras, guion y dos números">`, ["Aplicar colores", "Pedir un formato concreto", "Crear un menú", "Sustituir validación del servidor"], 1, "pattern permite definir un formato esperado. Un texto de ayuda explica qué se pide. La validación HTML guía, pero el servidor vuelve a comprobar."],
  ["Situación práctica", "¿Qué control permite escribir un mensaje de varias líneas?", null, ["textarea", "select", "input type=email", "legend"], 0, "textarea está pensado para texto de varias líneas. select sirve para elegir opciones cerradas."],
  ["Situación práctica", "Una reserva permite Presencial, En línea o Mixta. ¿Qué control evita errores de escritura?", null, ["textarea", "select con option", "img", "hr"], 1, "Cuando las opciones son conocidas, select con option permite elegir una sin escribirla manualmente."],
  ["Detectar errores", "¿Qué falta para que este formulario sea usable y accesible?", `<form><input type="text" placeholder="Tu nombre"><button>Enviar</button></form>`, ["Un label asociado y un name si se envía el dato", "Un h6 en el botón", "Una tabla", "Quitar el botón"], 0, "placeholder no sustituye una etiqueta visible. label explica el campo y se asocia con id mediante for; name identifica el dato enviado."],
  ["Situación práctica", "¿Qué herramienta ayuda a detectar problemas en el marcado HTML antes de publicar?", null, ["W3C HTML Validator", "Editor de imágenes", "Mapa de imagen", "Atributo alt"], 0, "El validador de la W3C analiza el marcado y ayuda a detectar errores. No sustituye pensar la estructura, pero es una revisión útil."],
];

export default function Tema14TestHTML() {
  useEffect(() => { document.title = "UF1841 · Tema 14 · Test de repaso HTML"; }, []);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = useMemo(() => submitted ? didacticQuestions.filter((q) => answers[`d${q[0]}${q[1]}`] === q[4]).length : 0, [answers, submitted]);
  const allAnswered = useMemo(() => didacticQuestions.every((q) => typeof answers[`d${q[0]}${q[1]}`] === "number"), [answers]);
  const reset = () => { setAnswers({}); setSubmitted(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return <main className="doc" id="contenido"><section className="estructura-formativa" id="test-html"><header className="doc-hero"><p className="doc-kicker">Tema 14 · Test de repaso HTML</p><h1>Comprueba cómo entiendes HTML</h1><p className="doc-lead">{didacticQuestions.length} situaciones para interpretar código, detectar errores y elegir soluciones HTML con sentido.</p></header><div className="callout tip">No busques memorizar etiquetas: lee cada caso y usa las explicaciones para aprender de cada error.</div><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{didacticQuestions.map((q, index) => { const key = `d${q[0]}${q[1]}`; const selected = answers[key]; const correct = submitted && selected === q[4]; const wrong = submitted && typeof selected === "number" && !correct; return <article key={key} className="card" style={{ marginTop: "1rem", border: submitted ? wrong ? "2px solid rgba(220, 38, 38, .55)" : correct ? "2px solid rgba(22, 163, 74, .55)" : undefined : undefined }}><p className="doc-kicker" style={{ marginBottom: ".35rem" }}>{q[0]}</p><h3 style={{ marginTop: 0 }}>{index + 1}. {q[1]}</h3>{q[2] && <pre><code>{q[2]}</code></pre>}<div role="radiogroup" aria-label={q[1]} className="test-question">{q[3].map((option, optionIndex) => { const optionCorrect = submitted && optionIndex === q[4]; const optionWrong = submitted && selected === optionIndex && !optionCorrect; return <label key={option} style={{ display: "flex", gap: ".65rem", alignItems: "flex-start", padding: ".35rem", borderRadius: "10px", background: submitted ? optionWrong ? "rgba(220, 38, 38, .10)" : optionCorrect ? "rgba(22, 163, 74, .10)" : "transparent" : "transparent" }}><input type="radio" name={key} checked={selected === optionIndex} onChange={() => { setAnswers((current) => ({ ...current, [key]: optionIndex })); setSubmitted(false); }} /><span>{option} {submitted && optionCorrect && <strong aria-label="respuesta correcta">✓</strong>} {submitted && optionWrong && <strong aria-label="respuesta incorrecta">✗</strong>}</span></label>; })}</div>{submitted && <details className="dd" open style={{ marginTop: ".75rem" }}><summary>{correct ? "Respuesta correcta y por qué" : "Respuesta correcta y explicación"}</summary><div className="dd-body"><div className={`callout ${correct ? "tip" : "warn"}`}><strong>{correct ? "Bien razonado." : `La respuesta correcta es: ${q[3][q[4]]}.`}</strong> {q[5]}</div></div></details>}</article>; })}<div className="form-actions" style={{ marginTop: "1.25rem" }}><button className="btn btn-primary" type="submit" disabled={!allAnswered}>Corregir test</button><button className="btn" type="button" onClick={reset}>Reiniciar</button></div>{!allAnswered && <div className="callout warn" style={{ marginTop: "1rem" }}>Responde todas las preguntas para corregir el test y leer las explicaciones.</div>}{submitted && <div className="resumen-final" style={{ marginTop: "1rem" }}><p><strong>Resultado: {score}/{didacticQuestions.length}.</strong> {score === didacticQuestions.length ? "Excelente: has aplicado los conceptos con precisión." : score >= 28 ? "Muy bien: revisa las explicaciones de los errores." : score >= 20 ? "Vas por buen camino: repasa estructura, semántica y formularios." : "Revisa las explicaciones y vuelve a practicar con los temas correspondientes."}</p></div>}</form></section></main>;
}

/* Test anterior retirado: se conserva temporalmente como referencia interna.
export function LegacyTema14TestHTML() {
  useEffect(() => {
    document.title = "UF1841 · Tema 14 · Test de repaso HTML";
  }, []);

  const questions = useMemo(
    () => [
      {
        id: "q1",
        question: "¿Para qué sirve HTML?",
        options: [
          "Para dar estilos a una web",
          "Para crear la estructura y el contenido de una web",
          "Para programar lógica",
          "Para gestionar bases de datos",
        ],
        correctIndex: 1,
        explanation:
          "HTML define la estructura y el contenido. CSS da estilos y JavaScript aporta interactividad y lógica.",
      },
      {
        id: "q2",
        question: "¿Qué declaración indica que el documento es HTML5?",
        options: ["<html5>", "<doctype>", "<!DOCTYPE html>", "<meta charset>"],
        correctIndex: 2,
        explanation:
          "<!DOCTYPE html> activa el modo estándar y declara HTML5.",
      },
      {
        id: "q3",
        question: "¿Qué etiqueta contiene metadatos como charset y title?",
        options: ["<body>", "<header>", "<head>", "<main>"],
        correctIndex: 2,
        explanation:
          "<head> contiene metadatos: title, meta charset, viewport, enlaces a CSS, etc.",
      },
      {
        id: "q4",
        question: "¿Para qué sirve el atributo lang en <html>?",
        options: [
          "Para traducir la web automáticamente",
          "Para indicar el idioma principal del documento",
          "Para cambiar el idioma del navegador",
          "Para aplicar estilos según idioma",
        ],
        correctIndex: 1,
        explanation:
          "lang ayuda a lectores de pantalla, corrección ortográfica y SEO (por ejemplo lang='es').",
      },
      {
        id: "q5",
        question: "¿Qué etiqueta representa el contenido principal de una página?",
        options: ["<section>", "<main>", "<article>", "<div>"],
        correctIndex: 1,
        explanation:
          "<main> contiene el contenido principal y debe ser único por documento.",
      },

      // Texto y semántica
      {
        id: "q6",
        question: "¿Qué etiqueta se usa para un párrafo?",
        options: ["<span>", "<p>", "<div>", "<text>"],
        correctIndex: 1,
        explanation: "<p> representa un párrafo de texto.",
      },
      {
        id: "q7",
        question: "¿Qué etiqueta marca énfasis semántico?",
        options: ["<b>", "<i>", "<em>", "<mark>"],
        correctIndex: 2,
        explanation:
          "<em> indica énfasis semántico. <b> y <i> son más presentacionales.",
      },
      {
        id: "q8",
        question: "¿Qué etiqueta marca importancia semántica?",
        options: ["<strong>", "<b>", "<u>", "<small>"],
        correctIndex: 0,
        explanation:
          "<strong> indica importancia semántica. No es solo “negrita”.",
      },
      {
        id: "q9",
        question: "¿Cuál es la forma correcta de crear un salto de línea?",
        options: ["<hr>", "<br>", "<line>", "<p>"],
        correctIndex: 1,
        explanation: "<br> inserta un salto de línea.",
      },
      {
        id: "q10",
        question: "¿Qué etiqueta se usa para una separación temática (línea horizontal)?",
        options: ["<br>", "<hr>", "<line>", "<separator>"],
        correctIndex: 1,
        explanation:
          "<hr> representa un cambio de tema o separación de contenido.",
      },

      // Enlaces
      {
        id: "q11",
        question: "¿Qué etiqueta se usa para crear un enlace?",
        options: ["<link>", "<a>", "<href>", "<nav>"],
        correctIndex: 1,
        explanation:
          "<a href='...'>Texto</a> crea un enlace clicable.",
      },
      {
        id: "q12",
        question: "¿Qué atributo indica el destino del enlace?",
        options: ["src", "href", "target", "rel"],
        correctIndex: 1,
        explanation: "href contiene la URL de destino.",
      },
      {
        id: "q13",
        question: "¿Qué combinación es recomendada al usar target=\"_blank\"?",
        options: [
          'rel="nofollow"',
          'rel="external"',
          'rel="noopener noreferrer"',
          'rel="blank"',
        ],
        correctIndex: 2,
        explanation:
          "noopener noreferrer mejora seguridad y privacidad al abrir en nueva pestaña.",
      },
      {
        id: "q14",
        question: "¿Qué es un enlace ancla en la misma página?",
        options: [
          "Un enlace a otra web",
          "Un enlace a un id con #",
          "Un enlace a una imagen",
          "Un enlace que abre nueva pestaña",
        ],
        correctIndex: 1,
        explanation:
          "Apunta a un elemento con id: href=\"#seccion\".",
      },

      // Imágenes
      {
        id: "q15",
        question: "¿Qué etiqueta se usa para insertar una imagen?",
        options: ["<image>", "<img>", "<picture>", "<media>"],
        correctIndex: 1,
        explanation:
          "<img> inserta una imagen mediante src y debe incluir alt.",
      },
      {
        id: "q16",
        question: "¿Qué atributo es clave para accesibilidad en imágenes?",
        options: ["title", "alt", "width", "loading"],
        correctIndex: 1,
        explanation:
          "alt describe la imagen. Si es decorativa, se usa alt=\"\".",
      },
      {
        id: "q17",
        question: "¿Qué hace loading=\"lazy\" en una imagen?",
        options: [
          "Convierte la imagen a WebP",
          "Hace que cargue con más calidad",
          "Retrasa la carga hasta que se aproxima al viewport",
          "Evita que la imagen se descargue",
        ],
        correctIndex: 2,
        explanation:
          "Lazy loading mejora rendimiento cargando imágenes cuando hacen falta.",
      },
      {
        id: "q18",
        question: "¿Por qué se recomienda poner width y height en <img>?",
        options: [
          "Para que pese menos",
          "Para evitar saltos de layout (CLS) mientras carga",
          "Para que se vea más nítida",
          "Para que el alt funcione",
        ],
        correctIndex: 1,
        explanation:
          "Reservan el espacio y evitan que el contenido “salte” al cargar la imagen.",
      },

      // Listas
      {
        id: "q19",
        question: "¿Qué etiqueta crea una lista desordenada?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correctIndex: 1,
        explanation: "<ul> es lista con viñetas (sin orden numérico).",
      },
      {
        id: "q20",
        question: "¿Qué etiqueta crea una lista ordenada?",
        options: ["<ol>", "<ul>", "<li>", "<order>"],
        correctIndex: 0,
        explanation: "<ol> es lista numerada.",
      },
      {
        id: "q21",
        question: "¿Qué etiqueta representa un elemento de lista?",
        options: ["<li>", "<ul>", "<ol>", "<item>"],
        correctIndex: 0,
        explanation: "<li> es cada ítem dentro de ul/ol.",
      },

      // Tablas
      {
        id: "q22",
        question: "¿Para qué se deben usar tablas en HTML?",
        options: [
          "Para maquetar páginas",
          "Para mostrar datos tabulares (filas/columnas)",
          "Para crear menús",
          "Para hacer formularios",
        ],
        correctIndex: 1,
        explanation:
          "Tablas solo para datos estructurados en filas y columnas.",
      },
      {
        id: "q23",
        question: "¿Qué etiqueta define una fila en una tabla?",
        options: ["<td>", "<tr>", "<th>", "<row>"],
        correctIndex: 1,
        explanation: "<tr> define una fila.",
      },
      {
        id: "q24",
        question: "¿Qué etiqueta define una celda de encabezado?",
        options: ["<td>", "<tr>", "<th>", "<thead>"],
        correctIndex: 2,
        explanation:
          "<th> es encabezado, ayuda a accesibilidad y lectura de datos.",
      },
      {
        id: "q25",
        question: "¿Qué etiqueta describe el contenido de la tabla?",
        options: ["<caption>", "<title>", "<summary>", "<legend>"],
        correctIndex: 0,
        explanation:
          "<caption> se anuncia antes que la tabla por lectores de pantalla.",
      },
      {
        id: "q26",
        question: "¿Qué atributo mejora accesibilidad en <th>?",
        options: ['scope="col"', 'role="th"', 'type="head"', 'alt="..."'],
        correctIndex: 0,
        explanation:
          'scope="col" o scope="row" ayuda a asociar encabezados con celdas.',
      },

      // Mapas de imágenes
      {
        id: "q27",
        question: "¿Qué atributo conecta una imagen con un mapa de imágenes?",
        options: ["map", "usemap", "srcmap", "imagemap"],
        correctIndex: 1,
        explanation:
          "usemap=\"#nombreMapa\" enlaza la imagen con <map name=\"...\">.",
      },
      {
        id: "q28",
        question: "¿Qué etiqueta define el contenedor del mapa de imágenes?",
        options: ["<map>", "<area>", "<imgmap>", "<figure>"],
        correctIndex: 0,
        explanation: "<map name=\"...\"> contiene las áreas clicables.",
      },
      {
        id: "q29",
        question: "¿Qué etiqueta define cada zona clicable del mapa?",
        options: ["<zone>", "<area>", "<click>", "<link>"],
        correctIndex: 1,
        explanation: "<area> define shape, coords, href y alt.",
      },
      {
        id: "q30",
        question: "¿Qué valor de shape define un círculo?",
        options: ["circle", "round", "oval", "ball"],
        correctIndex: 0,
        explanation: 'shape="circle" usa coords="cx,cy,r".',
      },

      // Formularios
      {
        id: "q31",
        question: "¿Qué etiqueta envuelve un formulario?",
        options: ["<form>", "<input>", "<fieldset>", "<label>"],
        correctIndex: 0,
        explanation: "<form> agrupa los campos y define el envío.",
      },
      {
        id: "q32",
        question: "¿Qué atributo indica a dónde se envían los datos?",
        options: ["method", "action", "target", "name"],
        correctIndex: 1,
        explanation: "action es la URL destino del envío.",
      },
      {
        id: "q33",
        question: "¿Cuál es la diferencia principal entre GET y POST?",
        options: [
          "GET es más seguro que POST",
          "POST muestra los datos en la URL",
          "GET envía datos en la URL; POST los envía en el cuerpo",
          "POST solo se usa con textarea",
        ],
        correctIndex: 2,
        explanation:
          "GET añade querystring a la URL; POST envía en el body y es mejor para acciones y datos sensibles.",
      },
      {
        id: "q34",
        question: "¿Qué etiqueta agrupa campos relacionados de un formulario?",
        options: ["<group>", "<fieldset>", "<section>", "<div>"],
        correctIndex: 1,
        explanation:
          "<fieldset> agrupa y <legend> describe el grupo.",
      },
      {
        id: "q35",
        question: "¿Qué etiqueta nombra un fieldset?",
        options: ["<title>", "<caption>", "<legend>", "<label>"],
        correctIndex: 2,
        explanation: "<legend> describe el grupo del fieldset.",
      },
      {
        id: "q36",
        question: "En React, ¿qué atributo se usa en label para enlazar con un input?",
        options: ["for", "id", "htmlFor", "target"],
        correctIndex: 2,
        explanation:
          "En JSX se usa htmlFor (en HTML normal es for).",
      },

      // Inputs y validación
      {
        id: "q37",
        question: "¿Qué tipo de input activa validación de email nativa?",
        options: ['type="text"', 'type="mail"', 'type="email"', 'type="contact"'],
        correctIndex: 2,
        explanation: 'type="email" valida formato y mejora teclado móvil.',
      },
      {
        id: "q38",
        question: "¿Qué atributo hace un campo obligatorio?",
        options: ["required", "must", "validate", "important"],
        correctIndex: 0,
        explanation: "required obliga a completar antes de enviar.",
      },
      {
        id: "q39",
        question: "¿Qué atributo limita el número mínimo de caracteres en un input?",
        options: ["min", "minlength", "minimum", "length-min"],
        correctIndex: 1,
        explanation: "minLength/minlength controla el mínimo de caracteres.",
      },
      {
        id: "q40",
        question: "¿Qué atributo valida un patrón con expresión regular?",
        options: ["pattern", "regex", "format", "match"],
        correctIndex: 0,
        explanation: "pattern valida el formato mediante regex.",
      },
      {
        id: "q41",
        question: "¿Qué control usarías para un texto largo de varias líneas?",
        options: ["<input type='text'>", "<textarea>", "<select>", "<output>"],
        correctIndex: 1,
        explanation: "<textarea> sirve para mensajes largos.",
      },
      {
        id: "q42",
        question: "¿Qué control es mejor para opciones cerradas (lista fija)?",
        options: ["<textarea>", "<select>", "<p>", "<legend>"],
        correctIndex: 1,
        explanation: "<select> evita errores de escritura libre.",
      },

      // Buenas prácticas / accesibilidad
      {
        id: "q43",
        question: "¿Qué afirmación es correcta sobre la validación HTML5?",
        options: [
          "Sustituye la validación del servidor",
          "Solo funciona en Chrome",
          "Mejora UX, pero el servidor debe validar siempre",
          "Solo valida si hay JavaScript",
        ],
        correctIndex: 2,
        explanation:
          "HTML5 ayuda, pero backend siempre valida por seguridad.",
      },
      {
        id: "q44",
        question: "¿Cuál es un buen texto para un enlace accesible?",
        options: [
          "Haz clic aquí",
          "Más",
          "Ver",
          "Ver horarios del curso UF1841",
        ],
        correctIndex: 3,
        explanation:
          "El enlace debe tener sentido por sí solo (sin contexto).",
      },
      {
        id: "q45",
        question: "¿Cuándo usarías alt=\"\" en una imagen?",
        options: [
          "Nunca",
          "Cuando la imagen es decorativa",
          "Cuando la imagen es muy grande",
          "Cuando la imagen es un logo",
        ],
        correctIndex: 1,
        explanation:
          "Si la imagen es decorativa, alt vacío evita ruido en lector de pantalla.",
      },
      {
        id: "q46",
        question: "¿Qué práctica es incorrecta?",
        options: [
          "Usar <main> para el contenido principal",
          "Usar tablas para diseño",
          "Usar labels en formularios",
          "Usar alt en imágenes",
        ],
        correctIndex: 1,
        explanation:
          "No se usan tablas para maquetación. Para diseño se usa CSS.",
      },

      // Recursos y rendimiento
      {
        id: "q47",
        question: "¿Qué formato suele comprimir mejor que JPG/PNG manteniendo calidad?",
        options: ["GIF", "BMP", "WebP", "TIFF"],
        correctIndex: 2,
        explanation:
          "WebP suele ofrecer mejor compresión con buena calidad (y es muy usado en la web).",
      },
      {
        id: "q48",
        question: "¿Qué mejora al usar imágenes optimizadas y lazy loading?",
        options: [
          "La base de datos",
          "El rendimiento de carga (especialmente en móvil)",
          "El número de etiquetas HTML",
          "La semántica del texto",
        ],
        correctIndex: 1,
        explanation:
          "Menos peso + carga diferida = web más rápida y mejor experiencia.",
      },

      // Extras útiles
      {
        id: "q49",
        question: "¿Qué etiqueta es más semántica para un bloque de navegación?",
        options: ["<div>", "<nav>", "<section>", "<aside>"],
        correctIndex: 1,
        explanation: "<nav> indica navegación.",
      },
      {
        id: "q50",
        question: "¿Qué herramienta oficial permite validar si tu HTML tiene errores?",
        options: [
          "Figma",
          "W3C HTML Validator",
          "Photoshop",
          "Notion",
        ],
        correctIndex: 1,
        explanation:
          "El validador de la W3C ayuda a detectar errores y malas prácticas en HTML.",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    if (!submitted) return 0;
    let s = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correctIndex) s++;
    }
    return s;
  }, [submitted, answers, questions]);

  const allAnswered = useMemo(() => {
    return questions.every((q) => typeof answers[q.id] === "number");
  }, [answers, questions]);

  return (
    <main className="doc">
      <section className="estructura-formativa" id="ud02-t8">
        <header className="doc-hero">
          <p className="doc-kicker">Tema 15. Test de repaso HTML</p>
          <h1>Test de repaso de HTML (50 preguntas)</h1>
          <p className="doc-lead">
            Responde las 50 preguntas. Al final pulsa <strong>Corregir</strong>.
            Tras corregir, verás qué respuestas están bien o mal y podrás leer la explicación.
          </p>
        </header>

        <div className="callout tip">
          Consejo: contesta primero y corrige al final. Si fallas, vuelve al tema correspondiente
          (tablas, formularios, imágenes, buenas prácticas…).
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {questions.map((q, index) => {
            const selected = answers[q.id];
            const isCorrect = submitted && selected === q.correctIndex;
            const isWrong = submitted && typeof selected === "number" && selected !== q.correctIndex;

            return (
              <article
                key={q.id}
                className="card"
                style={{
                  marginTop: "1rem",
                  border: submitted
                    ? isWrong
                      ? "2px solid rgba(220, 38, 38, .55)"
                      : isCorrect
                      ? "2px solid rgba(22, 163, 74, .55)"
                      : undefined
                    : undefined,
                }}
              >
                <h3 style={{ marginTop: 0 }}>
                  {index + 1}. {q.question}
                </h3>

                <div role="radiogroup" aria-label={q.question} className="test-question">
                  {q.options.map((opt, i) => {
                    const checked = selected === i;
                    const optionCorrect = submitted && i === q.correctIndex;
                    const optionWrong = submitted && checked && i !== q.correctIndex;

                    return (
                      <label
                        key={opt}
                        style={{
                          display: "flex",
                          gap: ".65rem",
                          alignItems: "flex-start",
                          padding: ".35rem .35rem",
                          borderRadius: "10px",
                          background: submitted
                            ? optionWrong
                              ? "rgba(220, 38, 38, .10)"
                              : optionCorrect
                              ? "rgba(22, 163, 74, .10)"
                              : "transparent"
                            : "transparent",
                        }}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          checked={checked || false}
                          onChange={() => {
                            setAnswers((prev) => ({ ...prev, [q.id]: i }));
                          }}
                        />
                        <span>
                          {opt}{" "}
                          {submitted && optionCorrect && <strong aria-label="correcta">✅</strong>}
                          {submitted && optionWrong && <strong aria-label="incorrecta">❌</strong>}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {submitted && (
                  <details className="dd" open style={{ marginTop: ".75rem" }}>
                    <summary>Ver solución</summary>
                    <div className="dd-body">
                      <div className={`callout ${isCorrect ? "tip" : "warn"}`}>
                        <strong>{isCorrect ? "Correcto." : "Incorrecto."}</strong>{" "}
                        {q.explanation}
                      </div>
                    </div>
                  </details>
                )}
              </article>
            );
          })}

          <div className="form-actions" style={{ marginTop: "1.25rem" }}>
            <button className="btn btn-primary" type="submit" disabled={!allAnswered}>
              Corregir test
            </button>

            <button
              className="btn"
              type="button"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Reiniciar
            </button>
          </div>

          {!allAnswered && (
            <div className="callout warn" style={{ marginTop: "1rem" }}>
              Te faltan preguntas por responder. Responde todas para poder corregir.
            </div>
          )}

          {submitted && (
            <div className="resumen-final" style={{ marginTop: "1rem" }}>
              <p>
                <strong>Resultado:</strong> {score} / {questions.length}.{" "}
                {score === questions.length
                  ? "Perfecto: dominas HTML."
                  : score >= 35
                  ? "Muy bien: revisa los fallos y repite."
                  : score >= 25
                  ? "Aprobado justo: repasa imágenes, tablas y formularios."
                  : "Necesitas repasar: vuelve al Tema 13 (buenas prácticas) y a los temas 8–10."}
              </p>
            </div>
          )}
        </form>

        <hr className="separador-verde" />
      </section>
    </main>
  );
}
*/
