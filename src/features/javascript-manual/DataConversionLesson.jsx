const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;

export default function DataConversionLesson(){return <>
  <p className="jsm-subtitle">A veces un dato parece un número, pero JavaScript lo está tratando como texto. Convertirlo permite trabajar con él correctamente.</p>
  <section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>Reconocer cuándo necesitas convertir un dato y usar <code>Number()</code>, <code>String()</code> y <code>Boolean()</code> en casos sencillos.</p></section>
  <section className="jsm-section"><h2>El caso que ya conoces: <code>prompt()</code></h2><p>Cuando usamos <code>prompt()</code>, la persona escribe una respuesta. Aunque escriba <code>25</code>, JavaScript recibe el texto <code>"25"</code>, no el número <code>25</code>.</p><Code>{`const edad = prompt("¿Qué edad tienes?");

console.log(edad);         // por ejemplo: "25"
console.log(typeof edad);  // "string"`}</Code><p>Para mostrar una edad no hay problema. Pero si queremos calcular, necesitamos convertir ese texto en un número.</p></section>
  <section className="jsm-section"><h2>Qué ocurre si no convertimos</h2><Code>{`const primerNumero = prompt("Escribe un número");
const segundoNumero = prompt("Escribe otro número");

const resultado = primerNumero + segundoNumero;
console.log(resultado);`}</Code><p>Si escribes 2 y 3, Console mostrará <code>"23"</code>, no <code>5</code>. El operador <code>+</code> une textos cuando recibe strings.</p><aside className="jsm-callout"><h3>La pregunta útil</h3><p>Antes de hacer un cálculo, pregúntate: «¿Este valor es realmente un número o es texto que parece un número?».</p></aside></section>
  <section className="jsm-section"><h2><code>Number()</code> · Convertir a número</h2><p><code>Number()</code> recibe un valor y trata de convertirlo a número. Es la herramienta habitual cuando recoges una cantidad, una edad, un precio o una nota con <code>prompt()</code>.</p><Code>{`const primerNumero = prompt("Escribe un número");
const segundoNumero = prompt("Escribe otro número");

const suma = Number(primerNumero) + Number(segundoNumero);
console.log(suma); // si escribes 2 y 3, muestra 5`}</Code><p>También puedes convertir al guardar el dato:</p><Code>{`const edad = Number(prompt("¿Qué edad tienes?"));
const edadElAnoQueViene = edad + 1;

console.log(edadElAnoQueViene);`}</Code><section className="jsm-challenge"><h3>Micropráctica · Sumar dos edades</h3><p>Pide dos edades con <code>prompt()</code>, conviértelas con <code>Number()</code> y muestra la suma en Console. Prueba con 12 y 8: el resultado debe ser 20, no 128.</p><details><summary>Ver una posible solución</summary><Code>{`const edadUno = Number(prompt("Primera edad"));
const edadDos = Number(prompt("Segunda edad"));

console.log(edadUno + edadDos);`}</Code></details></section></section>
  <section className="jsm-section"><h2>Cuando no se puede convertir</h2><Code>{`const cantidad = Number("hola");
console.log(cantidad); // NaN`}</Code><p><code>NaN</code> significa «Not a Number»: JavaScript no pudo crear un número con ese texto. Por ahora basta con reconocerlo. Más adelante aprenderás a validar lo que escribe la persona.</p><Code>{`Number("25")    // 25
Number("12.5")  // 12.5
Number("")      // 0
Number("hola")  // NaN`}</Code><section className="jsm-challenge"><h3>Micropráctica · Predice</h3><p>Antes de ejecutar, decide qué devuelve <code>Number("7")</code>, <code>Number("7.5")</code> y <code>Number("siete")</code>.</p></section></section>
  <section className="jsm-section"><h2><code>String()</code> · Convertir a texto</h2><p><code>String()</code> convierte un valor en texto. Es útil cuando vas a construir un mensaje o cuando quieres ver claramente un número como caracteres.</p><Code>{`const plazas = 8;
const mensaje = "Quedan " + String(plazas) + " plazas";

console.log(mensaje); // "Quedan 8 plazas"
console.log(typeof String(plazas)); // "string"`}</Code><p>Al concatenar texto con <code>+</code>, JavaScript suele convertir el número automáticamente. Aun así, <code>String()</code> deja clara tu intención y funciona también con booleanos.</p><Code>{`String(25);    // "25"
String(true);  // "true"`}</Code></section>
  <section className="jsm-section"><h2><code>Boolean()</code> · Convertir a verdadero o falso</h2><p><code>Boolean()</code> convierte un valor en <code>true</code> o <code>false</code>. Es útil para entender qué considera JavaScript un valor presente o vacío.</p><Code>{`console.log(Boolean("Hola")); // true
console.log(Boolean(1));      // true
console.log(Boolean(""));     // false
console.log(Boolean(0));      // false`}</Code><p>Un texto con contenido y un número distinto de 0 son verdaderos. Una cadena vacía y el número 0 se convierten en falsos. No necesitas memorizar todos los casos ahora: la idea importante es que una conversión puede cambiar el tipo de dato.</p></section>
  <section className="jsm-section"><h2>Comprueba siempre el tipo</h2><p><code>typeof</code> te permite comprobar qué tipo de dato estás usando antes y después de convertirlo.</p><Code>{`const precioTexto = "19.99";
const precioNumero = Number(precioTexto);

console.log(typeof precioTexto);  // "string"
console.log(typeof precioNumero); // "number"`}</Code><section className="jsm-challenge"><h3>Micropráctica · De texto a número</h3><p>Crea <code>const descuentoTexto = "5"</code>. Convierte ese valor a número y réstalo de un precio de 25. Comprueba los tipos en Console.</p></section></section>
  <section className="jsm-section jsm-challenge"><h2>Actividad final · Calculadora de dos números</h2><p>Crea una página HTML pequeña. Pedirá dos números con <code>prompt()</code>, los convertirá y mostrará su suma en la página.</p><h3>HTML</h3><Code>{`<main>
  <h1>Mi suma</h1>
  <p id="resultado"></p>
</main>

<script src="app.js" defer></script>`}</Code><h3>JavaScript</h3><ol><li>Pide dos números con <code>prompt()</code>.</li><li>Convierte cada respuesta con <code>Number()</code>.</li><li>Suma los dos números.</li><li>Muestra el resultado con <code>textContent</code>.</li></ol><details><summary>Ver una posible solución</summary><Code>{`const primerNumero = Number(prompt("Escribe el primer número"));
const segundoNumero = Number(prompt("Escribe el segundo número"));
const suma = primerNumero + segundoNumero;

document.getElementById("resultado").textContent =
  "El resultado es: " + suma;`}</Code></details><p><strong>Reto:</strong> muestra también la resta y la multiplicación en otros dos párrafos.</p></section>
  <section className="jsm-section jsm-recap"><h2>Referencia rápida</h2><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Necesito…</th><th>Uso</th><th>Ejemplo</th></tr></thead><tbody><tr><td>Hacer cálculos con una respuesta de <code>prompt()</code></td><td><code>Number()</code></td><td><code>Number("25")</code> → 25</td></tr><tr><td>Tratar un valor como texto</td><td><code>String()</code></td><td><code>String(25)</code> → "25"</td></tr><tr><td>Obtener un booleano</td><td><code>Boolean()</code></td><td><code>Boolean(0)</code> → false</td></tr></tbody></table></div><p>Convierte solo cuando lo necesitas. Una edad para mostrar puede seguir siendo texto; una edad para sumar necesita convertirse a número.</p></section>
  <section className="jsm-next"><h2>Lo siguiente</h2><p>Ya puedes calcular con datos que escribe una persona. En la práctica siguiente reunirás variables, conversiones y operadores para resolver un precio.</p></section>
</>}
