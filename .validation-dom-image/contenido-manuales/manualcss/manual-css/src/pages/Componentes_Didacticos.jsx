import { useEffect } from "react";

const pre = { background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: ".5rem", overflowX: "auto", lineHeight: 1.55 };
const lines = (...items) => items.join("\n");

const lessons = {
  buttons: {
    number: "Patrones I", title: "Botones y vínculos · ¿Acción o destino?",
    lead: "Antes de dar estilo, decide qué ocurre al activar el elemento. Esa decisión elige el HTML; el CSS solo comunica su papel visual.",
    question: "¿La persona va a otra página o realiza una acción aquí mismo?",
    decisions: [["Ir a una URL o sección", "<a>", "Vínculo"], ["Enviar, guardar, abrir o cerrar algo", "<button>", "Botón"], ["Necesito que parezca un botón", "CSS sobre el elemento correcto", "El aspecto no cambia su función"]],
    html: lines('<a href="/cursos">Ver cursos</a>', '<button type="button">Guardar cambios</button>'),
    css: lines(".accion {", "  display: inline-flex;", "  padding: .65rem 1rem;", "  border-radius: .5rem;", "}", "", ".accion:focus-visible {", "  outline: 3px solid #2563eb;", "}"),
    notes: ["Usa texto que explique la acción.", "El foco visible permite usar el componente con teclado.", "Un estilo secundario cambia jerarquía visual, no significado HTML."],
    practice: "Escribe una acción de navegación y una acción dentro de una página. Justifica por qué una es enlace y la otra es botón.",
    check: { html: lines('<a class="accion" href="/cursos">Ver cursos</a>', '<button class="accion" type="button">Guardar cambios</button>'), css: lines('.accion {', '  display: inline-flex;', '  padding: .65rem 1rem;', '}', '', '.accion:focus-visible {', '  outline: 3px solid #2563eb;', '}'), observations: ["Los dos controles pueden tener el mismo aspecto, pero «Ver cursos» lleva a otro destino y «Guardar cambios» realiza una acción.", "Al pulsar Tab aparece un contorno visible alrededor del control activo."], explains: [["href=\"/cursos\"", "convierte el primer elemento en una navegación hacia la página de cursos."], ["type=\"button\"", "evita que el segundo botón envíe un formulario por accidente."], ["display: inline-flex", "permite que el enlace y el botón se comporten como controles compactos."], [":focus-visible", "muestra el foco solo cuando se navega con teclado."]], questions: ["¿Qué control usarías para abrir una página de ayuda?", "¿Qué cambiaría si sustituyeras el botón por un enlace?", "¿Puedes llegar a ambos controles con Tab y reconocer cuál tiene el foco?"] }
  },
  navigation: {
    number: "Patrones II", title: "Navegación · Ayudar a encontrar un destino",
    lead: "Una navegación es un grupo de destinos que ayuda a saber dónde se puede ir y dónde se está.",
    question: "¿Qué destinos principales necesita encontrar la persona desde aquí?",
    decisions: [["Enlaces que llevan a otras secciones", "<nav> con <a>", "Navegación"], ["Página actual", 'aria-current="page"', "Orientación"], ["Demasiados destinos", "Agrupar o simplificar", "Evitar sobrecarga"]],
    html: lines('<nav aria-label="Principal">', '  <a href="/inicio">Inicio</a>', '  <a href="/cursos" aria-current="page">Cursos</a>', '  <a href="/contacto">Contacto</a>', "</nav>"),
    css: lines("nav {", "  display: flex;", "  flex-wrap: wrap;", "  gap: .75rem;", "}", "", '[aria-current="page"] { font-weight: 700; }'),
    notes: ["Flexbox organiza el grupo de enlaces.", "El estado actual debe ser visible.", "En móvil conserva primero los destinos prioritarios."],
    practice: "Define tres destinos de un sitio de cursos. Marca uno como actual y decide cuál eliminarías si el menú fuese demasiado largo.",
    check: { html: lines('<nav class="menu" aria-label="Principal">', '  <a href="/inicio">Inicio</a>', '  <a href="/cursos" aria-current="page">Cursos</a>', '  <a href="/contacto">Contacto</a>', '</nav>'), css: lines('.menu {', '  display: flex;', '  flex-wrap: wrap;', '  gap: .75rem;', '}', '', '[aria-current="page"] { font-weight: 700; }'), observations: ["Los enlaces aparecen agrupados y dejan espacio entre sí.", "Si reduces la ventana, los enlaces pueden pasar a otra línea en lugar de desbordarse.", "«Cursos» se distingue como la página actual."], explains: [["aria-label=\"Principal\"", "nombra el grupo de navegación para quien usa un lector de pantalla."], ["flex-wrap: wrap", "permite que los enlaces ocupen otra línea cuando no caben."], ["gap: .75rem", "separa los enlaces sin asignar márgenes a cada uno."], ["aria-current=\"page\"", "identifica el destino que ya está abierto."]], questions: ["¿Qué enlace conserva aria-current si visitas Contacto?", "¿Qué observas al estrechar la ventana?", "¿Qué destino quitarías primero si el menú tuviera demasiados enlaces?"] }
  },
  tables: {
    number: "Patrones III", title: "Tablas · Comparar datos relacionados",
    lead: "Una tabla sirve cuando necesitamos comparar valores en filas y columnas. Una colección de tarjetas no necesita una tabla.",
    question: "¿Necesito cruzar datos de filas y columnas?",
    decisions: [["Comparar datos relacionados", "<table>", "Tabla"], ["Título del conjunto", "<caption>", "Contexto"], ["Cabeceras", "<th>", "Relación entre datos"]],
    html: lines("<table>", "  <caption>Horarios del curso</caption>", "  <thead><tr><th scope=\"col\">Día</th><th scope=\"col\">Horario</th></tr></thead>", "  <tbody><tr><th scope=\"row\">Lunes</th><td>10:00</td></tr></tbody>", "</table>"),
    css: lines("table { width: 100%; border-collapse: collapse; }", "th, td { padding: .75rem; border-bottom: 1px solid #cbd5e1; }", "th { text-align: left; }", ".tabla-scroll { overflow-x: auto; }"),
    notes: ["El caption responde qué datos estamos viendo.", "Los th describen datos asociados.", "Si hay muchas columnas, permite desplazamiento horizontal."],
    practice: "Crea una tabla de tres cursos con duración y modalidad. Añade un caption y decide qué columna necesita una cabecera.",
    check: { html: lines('<div class="tabla-scroll">', '  <table>', '    <caption>Horarios del curso</caption>', '    <thead><tr><th scope="col">Día</th><th scope="col">Horario</th></tr></thead>', '    <tbody><tr><th scope="row">Lunes</th><td>10:00</td></tr></tbody>', '  </table>', '</div>'), css: lines('table { width: 100%; border-collapse: collapse; }', 'th, td { padding: .75rem; border-bottom: 1px solid #cbd5e1; }', '.tabla-scroll { overflow-x: auto; }'), observations: ["El título «Horarios del curso» explica el conjunto de datos.", "Las cabeceras quedan relacionadas con el día y la hora de la fila.", "En una pantalla estrecha, el contenedor permite desplazar una tabla ancha sin romper la página."], explains: [["<caption>", "da contexto al conjunto antes de leer sus celdas."], ["scope=\"col\" y scope=\"row\"", "indican si una cabecera describe una columna o una fila."], ["border-collapse: collapse", "une los bordes de las celdas para que no se dupliquen."], ["overflow-x: auto", "reserva el desplazamiento horizontal para tablas que no caben."]], questions: ["¿Qué información perderías si eliminas el caption?", "¿Qué celda describe el valor «10:00»?", "¿Puedes reducir la ventana sin que el contenido invada el borde de la página?"] }
  },
  forms: {
    number: "Patrones IV", title: "Formularios · Pedir datos con claridad",
    lead: "Un formulario explica qué dato se necesita, permite introducirlo y ayuda a corregirlo si hace falta.",
    question: "¿Qué dato necesito y cómo sabrá la persona qué debe introducir?",
    decisions: [["Nombre del dato", "<label>", "Instrucción asociada"], ["Información adicional", "aria-describedby", "Contexto"], ["Opciones relacionadas", "<fieldset> y <legend>", "Grupo comprensible"]],
    html: lines('<label for="correo">Correo electrónico</label>', '<input id="correo" name="correo" type="email" aria-describedby="ayuda-correo">', '<p id="ayuda-correo">Te enviaremos la confirmación.</p>'),
    css: lines("input { width: 100%; padding: .65rem; border: 1px solid #94a3b8; }", "input:focus-visible { outline: 3px solid #2563eb; outline-offset: 2px; }"),
    notes: ["El label conecta la pregunta con el campo.", "La ayuda explica formato o finalidad antes del error.", "El error debe indicar qué corregir."],
    practice: "Diseña un campo para solicitar el correo: escribe el label, una ayuda útil y el tipo de input. Después navega hasta él con Tab.",
    check: { html: lines('<label for="correo">Correo electrónico</label>', '<input id="correo" name="correo" type="email" aria-describedby="ayuda-correo">', '<p id="ayuda-correo">Te enviaremos la confirmación.</p>'), css: lines('input { width: 100%; padding: .65rem; border: 1px solid #94a3b8; }', 'input:focus-visible { outline: 3px solid #2563eb; outline-offset: 2px; }'), observations: ["El texto «Correo electrónico» identifica claramente el campo.", "Al enfocarlo con Tab aparece un contorno separado del borde.", "La ayuda explica para qué se solicita el dato antes de escribirlo."], explains: [["for=\"correo\" e id=\"correo\"", "conectan la etiqueta con su campo; al pulsar la etiqueta también se enfoca."], ["type=\"email\"", "indica que se espera una dirección de correo."], ["aria-describedby", "asocia la ayuda adicional al campo."], ["outline-offset: 2px", "separa el indicador de foco del borde para que se vea con claridad."]], questions: ["¿El campo recibe el foco al pulsar su etiqueta?", "¿Qué ayuda escucharías o leerías antes de escribir?", "¿Qué ocurriría si for e id no coincidieran?"] }
  },
  dialogs: {
    number: "Patrones V", title: "Diálogos · Pedir atención cuando es necesaria",
    lead: "Un diálogo interrumpe el flujo para confirmar, decidir o realizar una tarea breve. No es una caja para cualquier contenido.",
    question: "¿La persona debe resolver algo antes de continuar con la página?",
    decisions: [["Debe confirmar una acción", "<dialog>", "Atención temporal"], ["Puede leer sin interrumpir", "Sección o aviso normal", "Continuidad"], ["Puede cancelar", "Botón de cierre", "Control"]],
    html: lines('<dialog aria-labelledby="titulo-dialogo">', '  <h2 id="titulo-dialogo">Eliminar borrador</h2>', "  <p>Esta acción no se puede deshacer.</p>", '  <button type="button">Cancelar</button>', '  <button type="button">Eliminar</button>', "</dialog>"),
    css: lines("dialog { max-width: 32rem; padding: 1.25rem; }", "dialog::backdrop { background: rgb(15 23 42 / .55); }"),
    notes: ["El CSS define el aspecto; abrir, cerrar y gestionar el foco requiere JavaScript.", "Incluye título, explicación y una forma de cancelar.", "No uses diálogos para información que puede estar en la página."],
    practice: "Escribe dos situaciones: una que requiera confirmación mediante diálogo y otra que pueda resolverse con un aviso dentro de la página.",
    check: { html: lines('<button id="abrir-dialogo" type="button">Eliminar borrador</button>', '', '<dialog id="dialogo" aria-labelledby="titulo-dialogo">', '  <h2 id="titulo-dialogo">Eliminar borrador</h2>', '  <p>Esta acción no se puede deshacer.</p>', '  <div class="acciones">', '    <button id="cancelar" type="button">Cancelar</button>', '    <button type="button">Eliminar</button>', '  </div>', '</dialog>'), css: lines('dialog { max-width: 32rem; padding: 1.25rem; }', 'dialog::backdrop { background: rgb(15 23 42 / .55); }', '.acciones { display: flex; gap: 1rem; justify-content: flex-end; }'), js: lines('const dialogo = document.querySelector("#dialogo");', 'const abrir = document.querySelector("#abrir-dialogo");', 'const cancelar = document.querySelector("#cancelar");', '', 'abrir.addEventListener("click", () => dialogo.showModal());', 'cancelar.addEventListener("click", () => dialogo.close());'), observations: ["Al pulsar «Eliminar borrador», el diálogo aparece sobre la página.", "El fondo se oscurece y el contenido no ocupa un ancho excesivo.", "Las acciones se agrupan a la derecha y «Cancelar» cierra el diálogo."], explains: [["<dialog>", "aporta la semántica y el comportamiento nativo de un diálogo modal."], ["showModal() y close()", "abren y cierran el diálogo; este es el único JavaScript necesario para probarlo."], ["dialog::backdrop", "estiliza la capa detrás del diálogo y separa la tarea actual."], ["max-width: 32rem", "evita que el mensaje se extienda demasiado."], ["display: flex y gap", "agrupan y separan los botones sin márgenes individuales."]], questions: ["¿Qué ocurre si eliminas dialog::backdrop?", "¿Por qué se usa <dialog> en lugar de un <div> cualquiera?", "¿Qué propiedad coloca juntos los botones?", "¿En qué situación no usarías un diálogo?"] }
  },
  overlays: {
    number: "Patrones VI", title: "Ayudas contextuales · Tooltip, popover o contenido visible",
    lead: "No todo contenido pequeño necesita flotar. Decide si debe estar siempre visible, ser una ayuda breve o abrirse a petición.",
    question: "¿La persona necesita esta información para completar la tarea?",
    decisions: [["La necesita siempre", "Contenido visible", "No ocultar información esencial"], ["Ayuda muy breve", "Tooltip", "Descripción adicional"], ["Contenido opcional", "Popover", "Detalle bajo demanda"]],
    html: lines('<button type="button" popovertarget="ayuda-fecha">¿Cómo es el formato?</button>', '<div id="ayuda-fecha" popover>', "  Escribe el día, mes y año.", "</div>"),
    css: lines("[popover] {", "  padding: .75rem;", "  border: 1px solid #cbd5e1;", "  border-radius: .5rem;", "}"),
    notes: ["No escondas instrucciones obligatorias en un tooltip.", "Un popover necesita disparador claro y cierre.", "El efecto visual no sustituye una relación semántica correcta."],
    practice: "Clasifica estas frases: “Contraseña de al menos 8 caracteres”, “¿Qué significa IVA?” y “Más filtros”. Decide cuál debe ser visible, tooltip o popover.",
    check: { html: lines('<label for="fecha">Fecha</label>', '<p id="formato-fecha">Usa día, mes y año.</p>', '<input id="fecha" aria-describedby="formato-fecha">', '', '<button type="button" popovertarget="ayuda-fecha">¿Cómo es el formato?</button>', '<div id="ayuda-fecha" popover>Ejemplo: 04/10/2026.</div>'), css: lines('[popover] {', '  padding: .75rem;', '  border: 1px solid #cbd5e1;', '  max-width: 20rem;', '}'), observations: ["La instrucción necesaria se mantiene visible junto al campo.", "Al pulsar el botón se abre una ayuda adicional con un ejemplo.", "El popover tiene espacio interior y un ancho legible."], explains: [["aria-describedby", "relaciona la instrucción visible con el campo de fecha."], ["popovertarget=\"ayuda-fecha\"", "vincula el botón con el contenido opcional que abre."], ["popover", "permite al navegador tratar el bloque como contenido emergente."], ["max-width: 20rem", "evita líneas demasiado largas dentro de la ayuda."]], questions: ["¿Qué texto debe seguir visible aunque no se abra el popover?", "¿Qué botón abre la ayuda adicional?", "¿Por qué un requisito obligatorio no debería vivir solo dentro del popover?"] }
  }
};

function PatternLesson({ lesson }) {
  useEffect(() => { document.title = lesson.title; }, [lesson.title]);
  return <main className="doc" id="contenido">
    <header className="doc-hero"><p className="doc-kicker">{lesson.number} · Patrones de interfaz</p><h1>{lesson.title}</h1><p className="doc-lead">{lesson.lead}</p><div className="callout tip"><strong>Pregunta de partida:</strong> {lesson.question}</div></header>
    <section className="card"><h2>Antes de crear el patrón: decide su función</h2><div className="table-wrap"><table className="table"><thead><tr><th>Necesidad</th><th>Elemento o decisión</th><th>Qué resuelve</th></tr></thead><tbody>{lesson.decisions.map(([need, element, result]) => <tr key={need}><td>{need}</td><td><code>{element}</code></td><td>{result}</td></tr>)}</tbody></table></div><div className="callout">No copies una interfaz completa. Empieza por la necesidad, elige el elemento adecuado y después adapta el estilo a tu página.</div></section>
    <section className="card"><h2>Estructura mínima</h2><p>Estas son las piezas imprescindibles. Cambia contenido y nombres para responder a tu caso.</p><pre style={pre}><code>{lesson.html}</code></pre></section>
    <section className="card"><h2>Estilo base con una intención</h2><p>El estilo debe reforzar la función: separar, hacer legible y mostrar el foco o el estado de interacción.</p><pre style={pre}><code>{lesson.css}</code></pre><ul>{lesson.notes.map((note) => <li key={note}>{note}</li>)}</ul></section>
    <section className="card"><h2>Práctica: adapta el patrón</h2><p>{lesson.practice}</p><details className="dd"><summary>Comprobación</summary><div className="dd-body"><h3>1. Prueba este ejemplo</h3><p>Reproduce estas piezas en un archivo de prueba y modifica primero el contenido, no la estructura.</p><pre style={pre}><code>{lesson.check.html}</code></pre><pre style={pre}><code>{lesson.check.css}</code></pre>{lesson.check.js && <><p>En este caso, JavaScript solo activa el comportamiento que HTML y CSS no pueden iniciar por sí solos.</p><pre style={pre}><code>{lesson.check.js}</code></pre></>}<h3>2. Qué debes observar</h3><ul>{lesson.check.observations.map((item) => <li key={item}>{item}</li>)}</ul><h3>3. Qué está haciendo el código</h3><ul>{lesson.check.explains.map(([code, explanation]) => <li key={code}><code>{code}</code>: {explanation}</li>)}</ul><h3>4. Comprueba que...</h3><ul>{lesson.check.questions.map((question) => <li key={question}>{question}</li>)}</ul></div></details></section>
  </main>;
}

export const ComponentButtons = () => <PatternLesson lesson={lessons.buttons} />;
export const ComponentNavigation = () => <PatternLesson lesson={lessons.navigation} />;
export const ComponentTables = () => <PatternLesson lesson={lessons.tables} />;
export const ComponentForms = () => <PatternLesson lesson={lessons.forms} />;
export const ComponentDialogs = () => <PatternLesson lesson={lessons.dialogs} />;
export const ComponentOverlays = () => <PatternLesson lesson={lessons.overlays} />;
