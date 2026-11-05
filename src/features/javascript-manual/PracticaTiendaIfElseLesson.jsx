const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;

export default function PracticaTiendaIfElseLesson(){return <>
  <p className="jsm-subtitle">La mini tienda evoluciona: en lugar de mostrar <code>true</code> o <code>false</code>, ahora dará mensajes útiles gracias a <code>if...else</code>.</p>
  <section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>Usar operadores lógicos dentro de <code>if...else</code> para decidir qué mensaje mostrar en una página.</p></section>
  <section className="jsm-section"><h2>Del booleano al mensaje</h2><p>En la práctica anterior calculabas si había envío gratis y si el cupón era aplicable. El resultado era un booleano. Ahora JavaScript elegirá entre dos mensajes para cada resultado.</p><div className="jsm-flow"><span>datos</span><b>→</b><span>condición</span><b>→</b><span><code>if...else</code></span><b>→</b><span>mensaje visible</span></div><aside className="jsm-callout"><h3>Reglas de la tienda</h3><p>El envío es gratis si la persona es premium <strong>o</strong> compra al menos 50 €, y su dirección no está bloqueada. El cupón se aplica si no está caducado y la persona es nueva o compra al menos 30 €.</p></aside></section>
  <section className="jsm-section"><h2>1. Prepara el HTML</h2><p>Crea una nueva carpeta para esta práctica y dentro un archivo <code>index.html</code>. Los dos <code>span</code> vacíos recibirán los mensajes desde JavaScript.</p><Code>{`<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi mini tienda</title>
    <script src="app.js" defer></script>
  </head>
  <body>
    <main>
      <h1>Mi mini tienda</h1>
      <p>Total de compra: <span id="total"></span> €</p>

      <h2>Resultado de tu compra</h2>
      <p id="envio"></p>
      <p id="cupon"></p>
    </main>
  </body>
</html>`}</Code></section>
  <section className="jsm-section"><h2>2. Crea los datos y muestra el total</h2><p>En <code>app.js</code>, copia los datos de la compra. Usamos <code>let</code> para el total porque lo cambiarás al hacer pruebas.</p><Code>{`const premium = false;
let total = 42;
const bloqueoDireccion = false;

const cuponExpirado = false;
const nuevoCliente = true;

document.getElementById("total").textContent = total;`}</Code><p>Abre la página: ya debería aparecer el total 42. Si no aparece, revisa que <code>app.js</code> esté conectado con <code>defer</code> y que el id sea exactamente <code>total</code>.</p></section>
  <section className="jsm-section"><h2>3. Decide el envío con <code>if...else</code></h2><p>Primero escribe la condición. Dentro de <code>if</code> mostramos el mensaje para envío gratuito; en <code>else</code>, el mensaje contrario.</p><Code>{`if ((premium || total >= 50) && !bloqueoDireccion) {
  document.getElementById("envio").textContent =
    "¡Tu compra tiene envío gratuito!";
} else {
  document.getElementById("envio").textContent =
    "Lo siento, tu envío no es gratis.";
}`}</Code><p>Con el total en 42, se ejecuta <code>else</code>. La persona no es premium y todavía no alcanza 50 €.</p><details><summary>Otra forma de escribirlo: guardar el elemento HTML en una variable</summary><p>También puedes localizar el párrafo una vez y guardar una referencia a ese elemento HTML.</p><Code>{`const envio = document.getElementById("envio");

if ((premium || total >= 50) && !bloqueoDireccion) {
  envio.textContent = "¡Tu compra tiene envío gratuito!";
} else {
  envio.textContent = "Lo siento, tu envío no es gratis.";
}`}</Code><p><code>document.getElementById("envio")</code> busca el elemento HTML cuyo id es <code>envio</code>. La variable <code>envio</code> guarda una referencia a ese elemento, no el texto del párrafo.</p><p>Ese elemento ya está representado como un objeto del DOM. No hemos creado el objeto con <code>const</code>: el navegador ya lo representó al leer el HTML y <code>getElementById()</code> permite localizarlo. <code>textContent</code> es una propiedad del elemento HTML, no de la variable en sí.</p><p>Como <code>envio</code> se refiere al elemento, podemos acceder a sus propiedades con el punto: <code>envio.textContent</code>.</p><Code>{`// Sin guardar el elemento
document.getElementById("envio").textContent = "Envío gratis";

// Guardando el elemento
const envio = document.getElementById("envio");
envio.textContent = "Envío gratis";`}</Code><p>Las dos formas producen el mismo resultado. Guardar el elemento es útil si vas a trabajar varias veces con él y quieres evitar repetir <code>document.getElementById()</code>.</p></details><details><summary>Pista</summary><p>La condición completa va entre los paréntesis de <code>if</code>. No escribas <code>if (envioGratis)</code> si todavía no has creado una variable con ese nombre.</p></details></section>
  <section className="jsm-section"><h2>4. Decide el cupón con <code>if...else</code></h2><p>Repite el mismo patrón para el cupón. Las reglas son diferentes, por eso su condición también lo es.</p><Code>{`if (!cuponExpirado && (nuevoCliente || total >= 30)) {
  document.getElementById("cupon").textContent =
    "Puedes utilizar tu cupón.";
} else {
  document.getElementById("cupon").textContent =
    "Tu cupón no se puede aplicar.";
}`}</Code><p>Con los datos iniciales, se ejecuta el primer bloque: el cupón no está caducado y la persona es nueva.</p><details><summary>Pista</summary><p>Los paréntesis agrupan las dos posibilidades: ser cliente nuevo <strong>o</strong> alcanzar 30 €. Mantén la condición exactamente como aparece.</p></details></section>
  <section className="jsm-section jsm-challenge"><h2>5. Prueba y predice</h2><ol><li>Con <code>total = 42</code>, predice los dos mensajes antes de recargar.</li><li>Cambia el total a <code>55</code>.</li><li>Predice el nuevo mensaje de envío y el del cupón.</li><li>Guarda, recarga y comprueba en la página.</li></ol><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Total</th><th>Envío</th><th>Cupón</th></tr></thead><tbody><tr><td>42 €</td><td>«Lo siento, tu envío no es gratis.»</td><td>«Puedes utilizar tu cupón.»</td></tr><tr><td>55 €</td><td>«¡Tu compra tiene envío gratuito!»</td><td>«Puedes utilizar tu cupón.»</td></tr></tbody></table></div></section>
  <section className="jsm-section jsm-challenge"><h2>Solución completa</h2><p>Intenta completar cada paso antes de abrir la solución.</p><details><summary>Ver HTML completo · <code>index.html</code></summary><Code>{`<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi mini tienda</title>
    <script src="app.js" defer></script>
  </head>
  <body>
    <main>
      <h1>Mi mini tienda</h1>
      <p>Total de compra: <span id="total"></span> €</p>

      <h2>Resultado de tu compra</h2>
      <p id="envio"></p>
      <p id="cupon"></p>
    </main>
  </body>
</html>`}</Code></details><details><summary>Ver JavaScript completo · <code>app.js</code></summary><Code>{`const premium = false;
let total = 42;
const bloqueoDireccion = false;

const cuponExpirado = false;
const nuevoCliente = true;

document.getElementById("total").textContent = total;

if ((premium || total >= 50) && !bloqueoDireccion) {
  document.getElementById("envio").textContent =
    "¡Tu compra tiene envío gratuito!";
} else {
  document.getElementById("envio").textContent =
    "Lo siento, tu envío no es gratis.";
}

if (!cuponExpirado && (nuevoCliente || total >= 30)) {
  document.getElementById("cupon").textContent =
    "Puedes utilizar tu cupón.";
} else {
  document.getElementById("cupon").textContent =
    "Tu cupón no se puede aplicar.";
}`}</Code></details></section>
  <section className="jsm-recap"><h2>Qué has aprendido</h2><p><code>if...else</code> permite transformar una condición en una respuesta útil para la persona usuaria. La condición decide el camino; <code>textContent</code> muestra el mensaje elegido.</p></section>
  <section className="jsm-next"><h2>Lo siguiente</h2><p>Ahora que manejas dos caminos, aprenderás a decidir entre más de dos posibilidades con <code>else if</code>.</p></section>
</>}
