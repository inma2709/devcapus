const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Goal=({children})=><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>{children}</p></section>;

const starterHtml=`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora de notas</title>
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer></script>
</head>
<body>
  <h1>Evaluador de calificaciones</h1>

  <label for="nombre">Nombre del alumno:</label>
  <input type="text" id="nombre">

  <label for="nota">Introduce la nota:</label>
  <input type="number" id="nota" min="0" max="10" step="0.1">

  <button type="button" onclick="evaluarNota()">
    Evaluar nota
  </button>

  <h2>Resultado de la evaluación</h2>
  <p id="resultado"></p>

  <h3>Mensaje para el alumno</h3>
  <p id="mensaje"></p>
</body>
</html>`;

const starterCss=`/* Estilos generales */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f6f9;
  color: #333;
  max-width: 500px;
  margin: 50px auto;
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

/* Título */
h1 {
  color: #2456a6;
  text-align: center;
}

/* Etiquetas */
label {
  display: block;
  margin-top: 20px;
  margin-bottom: 8px;
  font-weight: bold;
}

/* Campos de entrada */
input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

/* Botón */
button {
  background-color: #2456a6;
  color: white;
  border: none;
  padding: 12px 20px;
  margin-top: 25px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #173c78;
}

/* Resultados */
h2 {
  margin-top: 30px;
  color: #2456a6;
}

#resultado,
#mensaje {
  font-weight: bold;
  color: #2456a6;
}`;

const starterScript=`/*
  PRÁCTICA: EVALUADOR DE CALIFICACIONES

  Completa los apartados indicados.
  Utilizaremos IF, ELSE IF, ELSE y SWITCH.

  La función evaluarNota() ya está preparada.
  No necesitas modificarla ni entender todavía
  cómo se crean las funciones.
*/

function evaluarNota() {
  // 1. OBTENER LOS DATOS DEL HTML
  const nombre = document.getElementById("nombre").value;
  const notaTexto = document.getElementById("nota").value;
  const nota = Number(notaTexto);

  // 2. DECLARAR VARIABLES
  let calificacion = "";
  let mensaje = "";

  // 3. COMPROBAR QUE LA NOTA ES VÁLIDA
  // Esta parte ya está resuelta.
  if (notaTexto.trim() === "" || nota < 0 || nota > 10) {
    document.getElementById("resultado").textContent =
      "Introduce una nota válida entre 0 y 10.";
    document.getElementById("mensaje").textContent = "";
    return;
  }

  // 4. TU TURNO: IF...ELSE IF...ELSE
  // Escribe aquí las condiciones para asignar calificacion.

  // 5. TU TURNO: SWITCH
  // Escribe aquí los casos para asignar mensaje.

  // 6. MOSTRAR RESULTADOS EN HTML
  // Esta parte ya está resuelta.
  document.getElementById("resultado").textContent =
    nombre + ", has obtenido un " + calificacion +
    " con una nota de " + nota + ".";
  document.getElementById("mensaje").textContent = mensaje;
}`;

const ifSolution=`if (nota < 5) {
  calificacion = "Suspenso";
} else if (nota < 6) {
  calificacion = "Suficiente";
} else if (nota < 7) {
  calificacion = "Bien";
} else if (nota < 9) {
  calificacion = "Notable";
} else {
  calificacion = "Sobresaliente";
}`;

const switchSolution=`switch (calificacion) {
  case "Suspenso":
    mensaje = "Necesitas seguir practicando.";
    break;
  case "Suficiente":
    mensaje = "Has conseguido aprobar.";
    break;
  case "Bien":
    mensaje = "Buen trabajo.";
    break;
  case "Notable":
    mensaje = "Muy buen resultado.";
    break;
  case "Sobresaliente":
    mensaje = "Excelente trabajo.";
    break;
  default:
    mensaje = "No se ha podido obtener el mensaje.";
}`;

const completeScript=`function evaluarNota() {
  const nombre = document.getElementById("nombre").value;
  const notaTexto = document.getElementById("nota").value;
  const nota = Number(notaTexto);

  let calificacion = "";
  let mensaje = "";

  if (notaTexto.trim() === "" || nota < 0 || nota > 10) {
    document.getElementById("resultado").textContent =
      "Introduce una nota válida entre 0 y 10.";
    document.getElementById("mensaje").textContent = "";
    return;
  }

  if (nota < 5) {
    calificacion = "Suspenso";
  } else if (nota < 6) {
    calificacion = "Suficiente";
  } else if (nota < 7) {
    calificacion = "Bien";
  } else if (nota < 9) {
    calificacion = "Notable";
  } else {
    calificacion = "Sobresaliente";
  }

  switch (calificacion) {
    case "Suspenso":
      mensaje = "Necesitas seguir practicando.";
      break;
    case "Suficiente":
      mensaje = "Has conseguido aprobar.";
      break;
    case "Bien":
      mensaje = "Buen trabajo.";
      break;
    case "Notable":
      mensaje = "Muy buen resultado.";
      break;
    case "Sobresaliente":
      mensaje = "Excelente trabajo.";
      break;
    default:
      mensaje = "No se ha podido obtener el mensaje.";
  }

  document.getElementById("resultado").textContent =
    nombre + ", has obtenido un " + calificacion +
    " con una nota de " + nota + ".";
  document.getElementById("mensaje").textContent = mensaje;
}`;

export default function GradeEvaluatorPracticeLesson(){return <>
  <p className="jsm-subtitle">Vamos a crear una pequeña aplicación que permite introducir el nombre de un alumno y su nota. Al pulsar «Evaluar nota», JavaScript comprobará la calificación y mostrará un mensaje personalizado.</p>
  <Goal>Obtener datos de campos HTML, convertir texto en número, usar <code>if...else if</code> y <code>switch</code>, y mostrar un resultado en la página.</Goal>
  <section className="jsm-section"><h2>Qué vas a construir</h2><p>Usaremos las decisiones que ya conoces. <code>if...else if</code> determinará la calificación y <code>switch</code> seleccionará el mensaje de motivación.</p><div className="jsm-grid"><section><h3>Nombre</h3><p>Lucía</p></section><section><h3>Nota</h3><p>8</p></section><section><h3>Resultado</h3><p>Lucía, has obtenido un Notable con una nota de 8.</p></section><section><h3>Mensaje</h3><p>Muy buen resultado.</p></section></div><p>Recibirás parte del código preparada. Solo completarás los dos apartados señalados en <code>app.js</code>.</p></section>

  <section className="jsm-section"><h2>Paso 1 · Prepara tus archivos</h2><Code>{`evaluador-notas/
├── notas.html
├── styles.css
└── app.js`}</Code><p>Conserva estos nombres y comprueba que los tres archivos están en la misma carpeta. El HTML y la plantilla de JavaScript se proporcionan como punto de partida; el CSS solo da estilo a la actividad.</p><details><summary>Ver el archivo inicial <code>notas.html</code></summary><Code>{starterHtml}</Code></details><details><summary>Ver el archivo inicial <code>styles.css</code></summary><Code>{starterCss}</Code></details><details><summary>Ver la plantilla inicial <code>app.js</code></summary><Code>{starterScript}</Code></details><p>El botón ya está preparado: al pulsarlo ejecuta el código que hay dentro de <code>evaluarNota()</code>. Por ahora trabaja solo dentro de esa función; aprenderás funciones y eventos más adelante.</p></section>

  <section className="jsm-section"><h2>Paso 2 · ¿Qué es un input?</h2><p>Un <code>input</code> es un elemento HTML donde la persona que usa la página puede escribir información.</p><Code>{`<label for="nombre">Nombre del alumno:</label>
<input type="text" id="nombre">`}</Code><ul><li><code>label</code> indica qué dato solicitamos.</li><li><code>for="nombre"</code> relaciona la etiqueta con el campo.</li><li><code>input</code> crea el campo para escribir.</li><li><code>type="text"</code> indica que esperamos texto.</li><li><code>id="nombre"</code> permite localizarlo desde JavaScript.</li></ul><Code>{`<label for="nota">Introduce la nota:</label>
<input type="number" id="nota" min="0" max="10" step="0.1">`}</Code><p><code>type="number"</code> indica un campo numérico; <code>min</code>, <code>max</code> y <code>step</code> ayudan a configurarlo. Aun así, JavaScript debe comprobar los datos.</p></section>

  <section className="jsm-section"><h2>Paso 3 · Recoge y convierte el dato</h2><p>Localizar un elemento no es lo mismo que obtener lo que ha escrito una persona. La propiedad <code>.value</code> permite obtener el valor actual de un campo.</p><Code>{`const nombre = document.getElementById("nombre").value;
console.log(nombre);`}</Code><p>Si la persona escribió «Lucía», la variable <code>nombre</code> guardará ese texto. Para la nota, hacemos primero lo mismo:</p><Code>{`const notaTexto = document.getElementById("nota").value;`}</Code><p>Aunque el campo sea <code>type="number"</code>, <code>.value</code> devuelve texto. Si escribes 8, <code>notaTexto</code> contiene <code>"8"</code>, no el número <code>8</code>.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Valor obtenido</th><th>Tipo</th><th>Sirve para comparar una nota</th></tr></thead><tbody><tr><td><code>"8"</code></td><td>Texto</td><td>Aún no es lo ideal.</td></tr><tr><td><code>8</code></td><td>Número</td><td>Sí, podemos usar <code>&gt;=</code> o <code>&lt;</code>.</td></tr></tbody></table></div><Code>{`const notaTexto = document.getElementById("nota").value;
const nota = Number(notaTexto);

console.log(nota);
console.log(nota >= 5);`}</Code><p><code>Number()</code> es una herramienta que JavaScript ya proporciona: intenta convertir el texto en un número. Una conversión incorrecta puede producir <code>NaN</code>; la validación básica de esta práctica ya está preparada.</p><details><summary>Cómo pasa el dato del input a JavaScript y se convierte</summary><ol><li>La persona escribe, por ejemplo, <code>8</code> en el <code>&lt;input id="nota"&gt;</code> de <code>notas.html</code>.</li><li><code>document.getElementById("nota")</code> localiza ese campo desde <code>app.js</code>.</li><li><code>.value</code> obtiene lo escrito, pero como texto: <code>"8"</code>.</li><li><code>Number(notaTexto)</code> convierte ese texto en el número <code>8</code>.</li><li>La variable <code>nota</code> ya puede compararse con <code>5</code>, <code>6</code>, <code>7</code> o <code>9</code> para elegir una calificación.</li></ol></details></section>

  <section className="jsm-section"><h2>Paso 4 · Evalúa la nota con <code>if...else if</code></h2><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Nota</th><th>Calificación</th></tr></thead><tbody><tr><td>Desde 0 hasta menos de 5</td><td>Suspenso</td></tr><tr><td>Desde 5 hasta menos de 6</td><td>Suficiente</td></tr><tr><td>Desde 6 hasta menos de 7</td><td>Bien</td></tr><tr><td>Desde 7 hasta menos de 9</td><td>Notable</td></tr><tr><td>Desde 9 hasta 10</td><td>Sobresaliente</td></tr></tbody></table></div><p>Necesitamos comparar rangos, por eso usaremos <code>if...else if...else</code>. El primer caso empieza así:</p><Code>{`if (nota < 5) {
  calificacion = "Suspenso";
}`}</Code><p><code>nota &lt; 5</code> es la condición. Si se cumple, guardamos «Suspenso». Si no, JavaScript continúa con el siguiente límite.</p><h3>Tu turno</h3><p><strong>Abre <code>app.js</code> y busca el apartado 4: «TU TURNO: IF...ELSE IF...ELSE».</strong> Completa los límites restantes. La nota ya ha sido validada, así que aquí solo trabajas con valores entre 0 y 10.</p><details><summary>Necesito una pista</summary><Code>{`if (nota < 5) {
  // ...
} else if (nota < 6) {
  // ...
} else {
  // último caso
}`}</Code><p>Como los casos anteriores ya no se cumplen, basta con comparar el límite superior de cada intervalo.</p></details><details><summary>Ver solución de este paso</summary><Code>{ifSolution}</Code></details></section>

  <section className="jsm-section"><h2>Paso 5 · Elige un mensaje con <code>switch</code></h2><p>Ahora ya tenemos un valor concreto en <code>calificacion</code>, como «Notable». No comparamos rangos: elegimos un mensaje según ese texto, así que <code>switch</code> encaja bien.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Calificación</th><th>Mensaje</th></tr></thead><tbody><tr><td>Suspenso</td><td>Necesitas seguir practicando.</td></tr><tr><td>Suficiente</td><td>Has conseguido aprobar.</td></tr><tr><td>Bien</td><td>Buen trabajo.</td></tr><tr><td>Notable</td><td>Muy buen resultado.</td></tr><tr><td>Sobresaliente</td><td>Excelente trabajo.</td></tr></tbody></table></div><p>El primer caso ya te muestra el modelo:</p><Code>{`switch (calificacion) {
  case "Suspenso":
    mensaje = "Necesitas seguir practicando.";
    break;

  // Completa los demás casos.
}`}</Code><p><strong>En <code>app.js</code>, busca el apartado 5: «TU TURNO: SWITCH».</strong> Completa los casos restantes y añade <code>default</code>. Recuerda: <code>case</code> identifica un valor, <code>break</code> detiene el <code>switch</code> y <code>default</code> responde cuando no hay coincidencia.</p><details><summary>Necesito una pista</summary><p>Copia la forma del primer caso y cambia el texto de <code>case</code> y de <code>mensaje</code>. Termina cada caso con <code>break</code>.</p></details><details><summary>Ver solución de este paso</summary><Code>{switchSolution}</Code></details></section>

  <section className="jsm-section"><h2>Paso 6 · Los resultados ya están preparados</h2><Code>{`document.getElementById("resultado").textContent =
  nombre + ", has obtenido un " + calificacion +
  " con una nota de " + nota + ".";

document.getElementById("mensaje").textContent = mensaje;`}</Code><p>El primer <code>getElementById()</code> localiza el párrafo de la calificación; el segundo, el mensaje de motivación. <code>textContent</code> cambia el texto visible. No necesitas modificar estas instrucciones.</p><div className="jsm-flow"><span><code>if</code> → calificación</span><b>→</b><span><code>switch</code> → mensaje</span><b>→</b><span><code>textContent</code> → página</span></div></section>

  <section className="jsm-section"><h2>Paso 7 · Prueba tu aplicación</h2><p>Antes de pulsar «Evaluar nota», predice la calificación y el mensaje. Después comprueba el resultado.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Nota que debes probar</th><th>Tu predicción</th></tr></thead><tbody><tr><td>3</td><td></td></tr><tr><td>5</td><td></td></tr><tr><td>6.5</td><td></td></tr><tr><td>8</td><td></td></tr><tr><td>9.5</td><td></td></tr><tr><td>12</td><td></td></tr></tbody></table></div><p>Haz dos comprobaciones más: deja la nota vacía e introduce un número negativo. El mensaje de validación ya estaba preparado en la plantilla; no necesitas modificarlo.</p></section>

  <section className="jsm-section jsm-recap"><h2>Solución completa</h2><details><summary>Ver solución completa</summary><h3>notas.html</h3><Code>{starterHtml}</Code><h3>app.js</h3><Code>{completeScript}</Code><p>La función preparada obtiene y valida los datos. Después, <code>if...else if</code> guarda la calificación, <code>switch</code> selecciona el mensaje y <code>textContent</code> muestra ambos resultados en el HTML.</p></details></section>
</>}
