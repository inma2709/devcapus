const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Goal=({children})=><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>{children}</p></section>;

const menuWithElseIf=`const opcion = 2;

if (opcion === 1) {
  console.log("Consultar productos");
} else if (opcion === 2) {
  console.log("Consultar pedidos");
} else if (opcion === 3) {
  console.log("Contactar con atención al cliente");
} else {
  console.log("Opción no reconocida");
}`;

const menuWithSwitch=`const opcion = 2;

switch (opcion) {
  case 1:
    console.log("Consultar productos");
    break;
  case 2:
    console.log("Consultar pedidos");
    break;
  case 3:
    console.log("Contactar con atención al cliente");
    break;
  default:
    console.log("Opción no reconocida");
}`;

const daysExample=`let dia = 0; // 0 representa el lunes

switch (dia) {
  case 0:
    console.log("Hoy es lunes");
    break;
  case 1:
    console.log("Hoy es martes");
    break;
  case 2:
    console.log("Hoy es miércoles");
    break;
  case 3:
    console.log("Hoy es jueves");
    break;
  case 4:
    console.log("Hoy es viernes");
    break;
  case 5:
    console.log("Hoy es sábado");
    break;
  case 6:
    console.log("Hoy es domingo");
    break;
  default:
    console.log("Día no reconocido");
}`;

const orderSolution=`const cliente = "Ana";
const estado = "pendiente";
let mensaje = "";

switch (estado) {
  case "pendiente":
    mensaje = "Estamos preparando tu pedido";
    break;
  case "enviado":
    mensaje = "Tu pedido está en camino";
    break;
  case "entregado":
    mensaje = "Tu pedido ha sido entregado";
    break;
  default:
    mensaje = "Estado desconocido";
}

console.log(\`\${cliente}, \${mensaje}\`);`;

const practiceHtml=`<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estado de mi pedido</title>
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1>Estado de mi pedido</h1>
    <p id="estadoPedido"></p>
  </body>
</html>`;

const practiceScript=`const estado = "pendiente";
let mensaje = "";

switch (estado) {
  case "pendiente":
    mensaje = "Estamos preparando tu pedido.";
    break;
  case "enviado":
    mensaje = "Tu pedido está en camino.";
    break;
  case "entregado":
    mensaje = "Tu pedido ha sido entregado.";
    break;
  case "cancelado":
    mensaje = "Tu pedido ha sido cancelado.";
    break;
  default:
    mensaje = "Estado no reconocido.";
}

document.getElementById("estadoPedido").textContent = mensaje;
console.log(mensaje);`;

export default function SwitchLesson(){return <>
  <p className="jsm-subtitle"><code>switch</code> permite elegir qué instrucciones ejecutar cuando una misma variable puede tener varios valores concretos.</p>
  <Goal>Usar <code>switch</code> para organizar decisiones con varias opciones concretas, <code>case</code>, <code>break</code> y <code>default</code>.</Goal>

  <section className="jsm-section"><h2>¿Qué problema resuelve <code>switch</code>?</h2><p>Imagina el menú de una tienda. Según la opción elegida, debemos hacer algo distinto: consultar productos, consultar pedidos o contactar con atención al cliente. Una opción distinta debe mostrar un aviso.</p><p>Podemos resolverlo con varios <code>else if</code>:</p><Code>{menuWithElseIf}</Code><p>También podemos escribir la misma decisión con <code>switch</code>:</p><Code>{menuWithSwitch}</Code><p>Ambas estructuras resuelven el mismo problema. <code>switch</code> puede resultar más fácil de leer cuando comparamos <strong>una misma expresión</strong> con varios valores concretos.</p></section>

  <section className="jsm-section"><h2>La estructura de <code>switch</code></h2><Code>{`switch (expresion) {
  case valor1:
    // Instrucciones
    break;

  case valor2:
    // Instrucciones
    break;

  default:
    // Instrucciones
}`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Parte</th><th>Para qué sirve</th></tr></thead><tbody><tr><td><code>switch</code></td><td>Evalúa una expresión, por ejemplo una variable.</td></tr><tr><td><code>case</code></td><td>Indica un valor posible para esa expresión.</td></tr><tr><td><code>break</code></td><td>Termina el <code>switch</code> después del caso elegido.</td></tr><tr><td><code>default</code></td><td>Se ejecuta si ningún caso coincide.</td></tr></tbody></table></div><p><code>switch</code> compara mediante igualdad estricta: <code>1</code> y <code>"1"</code> son valores distintos. El tipo también importa.</p></section>

  <section className="jsm-section"><h2>Ejemplo guiado · Días de la semana</h2><Code>{daysExample}</Code><p>Con <code>dia = 0</code>, ocurre esto:</p><ol><li>JavaScript evalúa la variable <code>dia</code>.</li><li>Busca un <code>case</code> cuyo valor coincida.</li><li>Encuentra <code>case 0</code>.</li><li>Ejecuta <code>console.log("Hoy es lunes")</code>.</li><li>Encuentra <code>break</code> y sale del <code>switch</code>.</li></ol><div className="jsm-flow"><span><code>dia</code> vale 0</span><b>→</b><span>coincide con <code>case 0</code></span><b>→</b><span>muestra «Hoy es lunes»</span><b>→</b><span><code>break</code></span></div><p><strong>Micropráctica:</strong> cambia <code>dia</code> a <code>4</code>. Predice el resultado antes de ejecutar. Después prueba con <code>9</code>: ¿qué parte del <code>switch</code> se ejecuta?</p></section>

  <section className="jsm-section"><h2>¿Por qué es importante <code>break</code>?</h2><p>Si no escribimos <code>break</code>, JavaScript continúa por las instrucciones de los siguientes casos. Este comportamiento se llama <em>fall-through</em>.</p><Code>{`let dia = 1;

switch (dia) {
  case 1:
    console.log("Martes");

  case 2:
    console.log("Miércoles");
    break;

  default:
    console.log("Día no reconocido");
}`}</Code><p>El resultado es:</p><Code>{`Martes
Miércoles`}</Code><p>Como <code>dia</code> vale <code>1</code>, entra en <code>case 1</code> y muestra «Martes». No hay <code>break</code>, así que continúa hasta <code>case 2</code>, muestra «Miércoles» y entonces se detiene.</p><p><strong>No olvides <code>break</code> cuando quieras que se ejecute únicamente el caso seleccionado.</strong> A veces se omite intencionadamente, pero por ahora usaremos un <code>break</code> en cada caso.</p></section>

  <section className="jsm-section"><h2>¿Cuándo usar <code>switch</code> y cuándo <code>if...else</code>?</h2><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Situación</th><th>Estructura recomendable</th></tr></thead><tbody><tr><td>Comparar una edad con <code>&gt;= 18</code></td><td><code>if</code></td></tr><tr><td>Comprobar varias condiciones con <code>&amp;&amp;</code> u <code>||</code></td><td><code>if...else</code></td></tr><tr><td>Comparar una opción con <code>1</code>, <code>2</code> o <code>3</code></td><td><code>switch</code></td></tr><tr><td>Comprobar distintos rangos de precios</td><td><code>if...else if</code></td></tr><tr><td>Mostrar un mensaje según el estado de un pedido</td><td><code>switch</code></td></tr></tbody></table></div><p><code>switch</code> no sustituye a todos los condicionales: es otra herramienta para tomar decisiones.</p></section>

  <section className="jsm-section"><h2>Recordatorio · Mensajes dinámicos</h2><p>En este ejemplo, <code>switch</code> elige el mensaje. Después, un template literal incorpora el nombre de la clienta.</p><Code>{orderSolution}</Code><ul><li><code>switch</code> determina qué mensaje corresponde.</li><li>La variable <code>mensaje</code> guarda el texto seleccionado.</li><li>El template literal incorpora el nombre de la clienta al resultado.</li></ul></section>

  <section className="jsm-section jsm-challenge"><h2>Práctica · El estado de mi pedido</h2><h3>Enunciado</h3><p>Una tienda online necesita mostrar información sobre el estado de un pedido. Crea <code>index.html</code> y <code>script.js</code> para mostrar el mensaje adecuado.</p><h3>Pasos</h3><ol><li>Conecta <code>script.js</code> con <code>defer</code>.</li><li>Añade un título y un párrafo con <code>id="estadoPedido"</code>.</li><li>Declara <code>estado</code> con el valor inicial <code>"pendiente"</code> y <code>mensaje</code> vacío.</li><li>Construye un <code>switch</code> para <code>"pendiente"</code>, <code>"enviado"</code>, <code>"entregado"</code> y <code>"cancelado"</code>.</li><li>Usa <code>default</code> para cualquier otro valor.</li><li>Muestra el mensaje con <code>document.getElementById("estadoPedido").textContent</code> y también con <code>console.log()</code>.</li></ol><details><summary>Necesito una pista</summary><p>Escribe primero <code>switch (estado)</code>. En cada <code>case</code>, asigna un texto a <code>mensaje</code> y termina con <code>break</code>.</p></details><h3>Pruebas</h3><p>Antes de ejecutar cada una, predice el mensaje. Cambia <code>estado</code> a <code>"enviado"</code>, <code>"entregado"</code>, <code>"cancelado"</code> y finalmente a un valor no reconocido.</p><details><summary>Ver solución completa</summary><h3>index.html</h3><Code>{practiceHtml}</Code><h3>script.js</h3><Code>{practiceScript}</Code><p><code>break</code> evita que se ejecuten los siguientes casos. <code>default</code> ofrece un mensaje seguro cuando el estado no está contemplado.</p></details></section>

  <section className="jsm-section jsm-recap"><h2>Comprueba lo que sabes</h2><details><summary>1. ¿Qué diferencia existe entre <code>switch</code> y <code>if...else if</code>?</summary><p>Ambos pueden elegir entre varias opciones. <code>switch</code> es útil cuando comparamos una misma expresión con valores concretos; <code>if...else if</code> es más adecuado para condiciones, rangos y operadores lógicos.</p></details><details><summary>2. ¿Para qué sirve <code>case</code>?</summary><p>Indica un valor posible de la expresión evaluada por <code>switch</code> y contiene las instrucciones que se ejecutan si coincide.</p></details><details><summary>3. ¿Qué puede ocurrir si olvidamos <code>break</code>?</summary><p>La ejecución puede continuar en los casos siguientes y mostrar o ejecutar más instrucciones de las previstas.</p></details><details><summary>4. ¿Cuándo se utiliza <code>default</code>?</summary><p>Cuando ningún <code>case</code> coincide con el valor evaluado.</p></details></section>
</>}
