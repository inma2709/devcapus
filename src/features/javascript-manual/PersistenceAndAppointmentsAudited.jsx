import persistenciaLocalStorageJson from '../../assets/persistencia-localstorage-json.png';

const Code = ({ children }) => <pre className="jsm-code"><code>{children}</code></pre>;
const Goal = ({ children }) => <section className="jsm-goal"><h2>Al terminar serás capaz de…</h2>{children}</section>;
const Next = ({ children }) => <section className="jsm-next"><h2>Lo siguiente</h2><p>{children}</p></section>;

const recoverTasks = `const clave = "devcampus_tareas";

function recuperarTareas() {
  const texto = localStorage.getItem(clave);
  if (texto === null) return [];

  try {
    const tareas = JSON.parse(texto);
    return Array.isArray(tareas) ? tareas : [];
  } catch (error) {
    console.warn("No se pudieron recuperar las tareas", error);
    return [];
  }
}

const tareas = recuperarTareas();`;

export function LocalStorageGuidedLesson() {
  return <>
    <p className="jsm-subtitle">Una variable se pierde al recargar. Con <code>localStorage</code> una página puede recuperar datos locales al volver a abrirse.</p>
    <figure className="jsm-infographic">
      <img src={persistenciaLocalStorageJson} alt="Infografía sobre persistencia con localStorage y JSON: guardar un array como texto, recuperarlo y actualizar una lista de tareas." />
      <figcaption>Guía visual de consulta: diferencia el array de trabajo, el texto JSON y el almacenamiento local del navegador.</figcaption>
    </figure>
    <Goal><ul><li>Guardar y recuperar datos del navegador.</li><li>Convertir arrays con JSON.</li><li>Entender qué hacer si un dato guardado está dañado.</li></ul></Goal>
    <section className="jsm-section"><h2>Antes de empezar: el array no se guarda solo</h2><p>Hemos creado una aplicación que añade tareas a un array y las muestra en HTML. Todo funciona, pero al actualizar la página desaparecen las tareas: el array vive en memoria mientras JavaScript se ejecuta y el código inicial vuelve a empezar al recargar.</p><p><code>localStorage</code> permite conservar una copia local en el navegador. No sustituye al array de trabajo: seguimos modificando el array y utilizamos el almacenamiento para recuperar su estado más tarde.</p></section>
    <section className="jsm-section"><h2>Comprobación inicial · Guardar un texto</h2><p>Antes de guardar una lista, probamos la herramienta con un texto sencillo.</p><Code>{`localStorage.setItem("devcampus_mensaje", "Repasar eventos");

const mensaje = localStorage.getItem("devcampus_mensaje");
console.log(mensaje);

localStorage.removeItem("devcampus_mensaje");
// localStorage.clear(); // borra todas las claves de este origen`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Método</th><th>Función</th></tr></thead><tbody><tr><td><code>setItem()</code></td><td>Guarda un texto asociado a una clave.</td></tr><tr><td><code>getItem()</code></td><td>Recupera el texto de una clave.</td></tr><tr><td><code>removeItem()</code></td><td>Elimina una clave y su valor.</td></tr><tr><td><code>clear()</code></td><td>Elimina todos los datos de este origen.</td></tr></tbody></table></div><p><strong>Comprueba:</strong> guarda el mensaje, actualiza la página y vuelve a recuperarlo; después elimínalo. En las herramientas de desarrollo abre <em>Application</em> o <em>Almacenamiento</em> y consulta Local Storage. No uses <code>clear()</code> en los ejercicios: afectaría a todas las claves de esta web.</p></section>
    <section className="jsm-section"><h2>El flujo normal: array, texto JSON y almacenamiento</h2><p><code>localStorage</code> almacena texto, no arrays. Por eso cada herramienta tiene una responsabilidad diferente:</p><div className="jsm-flow"><span>array JavaScript</span><b>→</b><span><code>JSON.stringify()</code></span><b>→</b><span>texto JSON</span><b>→</b><span><code>localStorage.setItem()</code></span></div><div className="jsm-flow"><span><code>localStorage.getItem()</code></span><b>→</b><span>texto JSON</span><b>→</b><span><code>JSON.parse()</code></span><b>→</b><span>array JavaScript</span></div><Code>{`const tareas = ["Repasar DOM", "Preparar ejercicio"];
const texto = JSON.stringify(tareas);
// texto: '["Repasar DOM","Preparar ejercicio"]'

localStorage.setItem("devcampus_tareas", texto);
const guardado = localStorage.getItem("devcampus_tareas");

if (guardado !== null) {
  const tareasRecuperadas = JSON.parse(guardado);
  console.log(tareasRecuperadas);
}`}</Code><p><code>JSON.stringify()</code> convierte; no guarda. <code>setItem()</code> almacena el texto. <code>getItem()</code> recupera una cadena o <code>null</code> y <code>JSON.parse()</code> reconstruye el array. Un array vacío guardado se recupera como <code>"[]"</code> y es un estado válido; <code>null</code> significa que no existe esa clave.</p></section>
    <section className="jsm-section"><h2>Funciones sencillas para guardar y recuperar</h2><p>Cuando sabemos que el JSON es válido, podemos agrupar el flujo normal en dos funciones.</p><Code>{`let tareas = [];

function guardarTareas() {
  localStorage.setItem("devcampus_tareas", JSON.stringify(tareas));
}

function cargarTareas() {
  const guardadas = localStorage.getItem("devcampus_tareas");

  if (guardadas !== null) {
    tareas = JSON.parse(guardadas);
  }
}`}</Code><p>Usamos <code>let</code> porque la recuperación puede asignar un array nuevo a <code>tareas</code>. Si todavía no hay datos, no entramos en el <code>if</code> y el array continúa vacío.</p><details><summary>Micropráctica · Guarda y recupera una lista</summary><p><strong>Problema:</strong> queremos practicar almacenamiento sin DOM. <strong>Objetivo:</strong> convierte, guarda, recupera y muestra dos tareas en Console.</p><details><summary>Pista conceptual</summary><p>El orden es array → stringify → setItem → getItem → parse. Comprueba primero que el valor recuperado no sea <code>null</code>.</p></details><details><summary>Pista de sintaxis</summary><Code>{`const texto = JSON.stringify(tareas);
localStorage.setItem("devcampus_tareas", texto);`}</Code></details><details><summary>Ver solución explicada</summary><Code>{`let tareas = ["Repasar JavaScript", "Preparar ejercicios"];
localStorage.setItem("devcampus_tareas", JSON.stringify(tareas));

const guardadas = localStorage.getItem("devcampus_tareas");
if (guardadas !== null) {
  tareas = JSON.parse(guardadas);
}
console.log(tareas);`}</Code><p><strong>Resultado esperado:</strong> Console muestra las dos tareas incluso después de recargar y volver a ejecutar la recuperación.</p></details></details></section>
    <section className="jsm-section"><h2>1. Una necesidad: no perder una lista</h2><p>Imagina una lista de tareas de estudio. El array funciona mientras la página está abierta, pero una recarga crea un array nuevo. Necesitamos conservar una copia en el navegador.</p><p><code>localStorage</code> guarda textos asociados a una clave para este navegador y esta web. No comparte información con otros dispositivos y no debe usarse para contraseñas ni datos personales sensibles.</p><Code>{`localStorage.setItem("devcampus_mensaje", "Repasar eventos");

const mensaje = localStorage.getItem("devcampus_mensaje");
localStorage.removeItem("devcampus_mensaje");
// localStorage.clear() borra todas las claves de esta web`}</Code></section>
    <section className="jsm-section"><h2>2. Guardar arrays con JSON</h2><p>localStorage solo guarda texto. <code>JSON.stringify()</code> convierte un array u objeto en texto y <code>JSON.parse()</code> lo recupera.</p><Code>{`const texto = JSON.stringify(["Repasar DOM", "Preparar ejercicio"]);
localStorage.setItem("devcampus_tareas", texto);

const guardado = localStorage.getItem("devcampus_tareas");
const tareas = guardado === null ? [] : JSON.parse(guardado);`}</Code><p>La última línea basta cuando sabemos que el texto es correcto. En una aplicación real también puede existir un valor escrito o alterado manualmente que no sea JSON válido. Entonces <code>JSON.parse()</code> produce un error y la página no debería dejar de funcionar.</p></section>
    <section className="jsm-section"><h2>3. Recuperar sin romper la página</h2><p>Usamos <code>try</code> para probar la conversión y <code>catch</code> para decidir qué hacer si falla. No borramos el valor dañado: solo empezamos con una lista vacía durante esta carga y avisamos en la consola.</p><Code>{recoverTasks}</Code><p>La comprobación <code>Array.isArray()</code> evita tratar como lista un JSON válido pero con otro tipo de dato, por ejemplo un objeto. Esta protección no sustituye a revisar los datos: permite que la pantalla siga funcionando.</p></section>
    <section className="jsm-section"><h2>4. Lista persistente</h2><Code>{`<!-- index.html -->
<input id="nueva-tarea" placeholder="Nueva tarea">
<button id="agregar" type="button">Añadir</button>
<ul id="lista"></ul>

// app.js: después de recuperarTareas()
const input = document.getElementById("nueva-tarea");
const lista = document.getElementById("lista");

function guardarTareas() {
  localStorage.setItem(clave, JSON.stringify(tareas));
}

function mostrarTareas() {
  lista.textContent = "";
  for (const texto of tareas) {
    const tarea = document.createElement("li");
    tarea.textContent = texto;
    lista.append(tarea);
  }
}

document.getElementById("agregar").addEventListener("click", function () {
  const texto = input.value.trim();
  if (texto === "") return;
  tareas.push(texto);
  guardarTareas();
  mostrarTareas();
  input.value = "";
});

mostrarTareas();`}</Code><p>El recorrido siempre es: <strong>cambiar el array → guardarlo → dibujar la pantalla</strong>. Añade dos tareas, recarga y confirma que siguen ahí. Después prueba a cambiar el valor de la clave desde las herramientas del navegador: la página debe mantenerse utilizable.</p></section>
    <section className="jsm-section"><h2>Cuándo necesitamos <code>try...catch</code></h2><p>La recuperación sencilla basta en un ejercicio con JSON válido y controlado. Pero si una persona cambia manualmente una clave y guarda <code>"texto incorrecto"</code>, <code>JSON.parse()</code> produce un <code>SyntaxError</code>. En ese caso, <code>try</code> intenta la conversión y <code>catch</code> decide cómo continuar sin detener la página.</p><Code>{`try {
  // Código que queremos intentar ejecutar
} catch (error) {
  // Qué hacemos si se produce una excepción
}`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Situación</th><th>¿Necesitamos try...catch?</th></tr></thead><tbody><tr><td>Ejercicio inicial con JSON válido y controlado.</td><td>No es imprescindible.</td></tr><tr><td>Información que podría estar dañada.</td><td>Recomendable.</td></tr><tr><td>Aplicación que debe seguir funcionando ante un error.</td><td>Conviene tratar las excepciones posibles.</td></tr></tbody></table></div><p><code>Array.isArray()</code>, presente en la función de recuperación segura anterior, comprueba además que el JSON válido representa realmente un array. <code>try...catch</code> no arregla datos ni valida toda su estructura por sí solo.</p><details><summary>Comprobación opcional · Datos incorrectos</summary><p>En Local Storage, cambia temporalmente <code>devcampus_tareas</code> por <code>texto incorrecto</code>. La recuperación sencilla fallará al analizarlo; la función protegida devuelve una lista vacía y deja un aviso en Console. Después restaura el valor guardando otra vez un array de tareas ficticias.</p></details></section>
    <section className="jsm-section jsm-challenge"><h2>Práctica breve · Una lista que recuerda sus tareas</h2><p><strong>Problema:</strong> una lista funciona mientras la página está abierta, pero debe conservar las tareas al recargar.</p><p><strong>Objetivo:</strong> añade dos tareas, actualiza el navegador y confirma que siguen ahí; añade una tercera y vuelve a comprobarlo.</p><p><strong>Flujo de inicio:</strong> recuperar almacenamiento → reconstruir array → mostrar DOM.</p><p><strong>Flujo al modificar:</strong> modificar array → guardar almacenamiento → actualizar DOM.</p><Code>{`tareas.push(texto);
guardarTareas();
mostrarTareas();`}</Code><p><code>push()</code> modifica el array, <code>guardarTareas()</code> conserva su estado actualizado y <code>mostrarTareas()</code> crea la representación visual. Ninguno de esos pasos actualiza automáticamente a los otros.</p><details><summary>Pista conceptual</summary><p>Ejecuta <code>cargarTareas()</code> antes del primer <code>mostrarTareas()</code>. Al añadir una tarea, conserva siempre el orden de las tres instrucciones.</p></details><details><summary>Pista de sintaxis</summary><Code>{`function eliminarUltimaTarea() {
  if (tareas.length === 0) return;
  tareas.pop();
  guardarTareas();
  mostrarTareas();
}`}</Code></details><details><summary>Comprobación</summary><p>Si completas el reto opcional, elimina la última tarea con <code>pop()</code>, guarda el array y actualiza el DOM. Después de recargar debe seguir eliminada.</p></details></section>
    <section className="jsm-section jsm-recap"><h2>Del listado de tareas a las citas</h2><p>Una lista de tareas contiene textos: <code>["Estudiar", "Comprar"]</code>. Un gestor de citas usa un array de objetos: <code>[&#123; cliente: "Ana", servicio: "Corte", precio: 20 &#125;]</code>. El proceso es exactamente el mismo: <code>JSON.stringify()</code> convierte el array en texto, <code>setItem()</code> lo guarda, <code>getItem()</code> lo recupera y <code>JSON.parse()</code> reconstruye los datos.</p></section>
    <Next>Ya puedes aplicar este ciclo en el proyecto guiado «Mi gestor de citas», disponible en la sección Proyectos.</Next>
  </>;
}

export default function AppointmentManagerAuditedLesson() {
  return <>
    <p className="jsm-subtitle">Construiremos un gestor de citas por fases. Cada fase añade una necesidad real a una base que ya funciona.</p>
    <Goal><ul><li>Crear, guardar, recuperar, editar y eliminar citas.</li><li>Usar un id para actuar sobre una cita concreta.</li><li>Mostrar una estadística sencilla a partir de los datos.</li></ul></Goal>
    <section className="jsm-section"><h2>Material común</h2><Code>{`<!-- index.html -->
<form id="formulario-cita">
  <label>Cliente <input id="cliente" required></label>
  <label>Servicio <input id="servicio" required></label>
  <label>Precio <input id="precio" type="number" min="0" step="0.01" required></label>
  <button type="submit">Guardar cita</button>
</form>
<p id="modo-edicion"></p>
<p id="estadisticas"></p>
<ul id="lista-citas"></ul>
<script src="app.js" defer></script>`}</Code></section>
    <section className="jsm-section"><h2>Fase 1 · Crear y mostrar</h2><p>Una peluquería anota cliente, servicio y precio. Primero necesitamos crear un objeto y ponerlo en un array; todavía no guardamos nada al recargar.</p><Code>{`const citas = [];

function agregarCita(cliente, servicio, precio) {
  citas.push({ cliente: cliente, servicio: servicio, precio: precio });
  mostrarCitas();
}`}</Code><p>Prueba tres citas, incluidos dos clientes con el mismo nombre: son citas distintas. Para poder editar o borrar solo una necesitaremos un identificador en la siguiente fase.</p></section>
    <section className="jsm-section"><h2>Fase 2 · Guardar y recuperar</h2><p>Ahora las citas deben sobrevivir a una recarga. Esta función protege la aplicación si el almacenamiento contiene texto corrupto o un JSON que no es un array.</p><Code>{`const clave = "devcampus_citas";

function recuperarCitas() {
  const texto = localStorage.getItem(clave);
  if (texto === null) return [];

  try {
    const datos = JSON.parse(texto);
    return Array.isArray(datos) ? datos : [];
  } catch (error) {
    console.warn("No se pudieron recuperar las citas", error);
    return [];
  }
}

const citas = recuperarCitas();

function guardarCitas() {
  localStorage.setItem(clave, JSON.stringify(citas));
}`}</Code><p>No llamamos a <code>removeItem()</code> en el error: perder datos no es una buena respuesta automática. Una vez reparado el valor desde las herramientas del navegador, la carga volverá a usarlo.</p></section>
    <section className="jsm-section"><h2>Fase 3 · Identificar, eliminar y editar</h2><p>Dos citas pueden tener el mismo cliente. Por eso el nombre no sirve para elegir una sola. Añadimos un <code>id</code> al crearla. Los navegadores actuales ofrecen <code>crypto.randomUUID()</code>; el pequeño respaldo evita bloquear una práctica en un entorno antiguo.</p><Code>{`function crearId() {
  if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
  return Date.now().toString() + Math.random().toString();
}

// Al crear una cita nueva:
{ id: crearId(), cliente: cliente, servicio: servicio, precio: precio }`}</Code><p><code>filter()</code> crea la lista sin la cita cuyo id coincide. <code>find()</code> localiza la cita que vamos a llevar al formulario para editarla.</p></section>
    <section className="jsm-section"><h2>Fase 4 · Solución completa</h2><p>Este código une las fases. Fíjate en que cada alta, edición o eliminación termina guardando y actualizando el DOM.</p><Code>{`const clave = "devcampus_citas";
const formulario = document.getElementById("formulario-cita");
const lista = document.getElementById("lista-citas");
const modo = document.getElementById("modo-edicion");
const estadisticas = document.getElementById("estadisticas");
let citaEditandoId = null;

function recuperarCitas() {
  const texto = localStorage.getItem(clave);
  if (texto === null) return [];
  try {
    const datos = JSON.parse(texto);
    return Array.isArray(datos) ? datos : [];
  } catch (error) {
    console.warn("No se pudieron recuperar las citas", error);
    return [];
  }
}

const citas = recuperarCitas();

function crearId() {
  if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
  return Date.now().toString() + Math.random().toString();
}

function guardarCitas() {
  localStorage.setItem(clave, JSON.stringify(citas));
}

function mostrarEstadisticas() {
  const importe = citas.reduce(function (total, cita) {
    return total + cita.precio;
  }, 0);
  estadisticas.textContent = "Citas: " + citas.length + " · Importe: " + importe.toFixed(2) + " €";
}

function mostrarCitas() {
  lista.textContent = "";
  for (const cita of citas) {
    const elemento = document.createElement("li");
    elemento.textContent = cita.cliente + " — " + cita.servicio + " — " + cita.precio + " € ";

    const editar = document.createElement("button");
    editar.textContent = "Editar";
    editar.addEventListener("click", function () { prepararEdicion(cita.id); });

    const borrar = document.createElement("button");
    borrar.textContent = "Eliminar";
    borrar.addEventListener("click", function () { eliminarCita(cita.id); });

    elemento.append(editar, borrar);
    lista.append(elemento);
  }
  mostrarEstadisticas();
}

function prepararEdicion(id) {
  const cita = citas.find(function (elemento) { return elemento.id === id; });
  if (!cita) return;
  document.getElementById("cliente").value = cita.cliente;
  document.getElementById("servicio").value = cita.servicio;
  document.getElementById("precio").value = cita.precio;
  citaEditandoId = id;
  modo.textContent = "Editando la cita de " + cita.cliente;
}

function eliminarCita(id) {
  const restantes = citas.filter(function (cita) { return cita.id !== id; });
  citas.length = 0;
  for (const cita of restantes) citas.push(cita);
  guardarCitas();
  mostrarCitas();
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const cliente = document.getElementById("cliente").value.trim();
  const servicio = document.getElementById("servicio").value.trim();
  const precio = Number(document.getElementById("precio").value);
  if (cliente === "" || servicio === "") return;

  if (citaEditandoId === null) {
    citas.push({ id: crearId(), cliente: cliente, servicio: servicio, precio: precio });
  } else {
    const cita = citas.find(function (elemento) { return elemento.id === citaEditandoId; });
    if (cita) {
      cita.cliente = cliente;
      cita.servicio = servicio;
      cita.precio = precio;
    }
    citaEditandoId = null;
    modo.textContent = "";
  }

  guardarCitas();
  mostrarCitas();
  formulario.reset();
});

mostrarCitas();`}</Code><p><strong>Comprueba:</strong> crea tres citas, dos con el mismo cliente; recarga; edita solo una; elimina otra; y recarga otra vez. Deben mantenerse las acciones y el importe total debe actualizarse.</p></section>
    <section className="jsm-section"><h2>Ahora te toca</h2><p>¿Qué ocurriría si eliminásemos usando el nombre en lugar del id? Explica el caso de dos citas de la misma persona. Después añade una cita de precio 0 y razona por qué sigue siendo válida.</p></section>
    <Next>Más adelante una API permitirá compartir estos datos entre dispositivos; por ahora funcionan únicamente en este navegador.</Next>
  </>;
}
