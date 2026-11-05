const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Goal=({children})=><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>{children}</p></section>;
const Practice=({title,children,solution,why})=><section className="jsm-section jsm-challenge"><h2>{title}</h2>{children}<details><summary>Ver solución explicada</summary><Code>{solution}</Code><p><strong>Por qué funciona:</strong> {why}</p></details></section>;

export default function AnonymousFunctionsLesson(){return <>
  <p className="jsm-subtitle">Hasta ahora hemos creado funciones con <code>function</code> y un nombre. JavaScript también permite escribir una función sin darle un nombre propio: una función anónima.</p>
  <Goal>Reconocer una función anónima, guardarla y llamarla desde una constante, y comprender cuándo puede resultar cómoda frente a una función tradicional o flecha.</Goal>
  <section className="jsm-section"><h2>La misma operación, dos escrituras</h2><Code>{`function calcularDoble(numero) {
  return numero * 2;
}

console.log(calcularDoble(5)); // 10`}</Code><p>Esta función tiene un nombre: <code>calcularDoble</code>. La siguiente realiza lo mismo, pero la función no lleva un nombre escrito después de <code>function</code>.</p><Code>{`const calcularDoble = function(numero) {
  return numero * 2;
};

console.log(calcularDoble(5)); // 10`}</Code><p>Creamos una constante llamada <code>calcularDoble</code> y guardamos una función dentro. Anónima significa que no escribimos un nombre propio tras <code>function</code>; no significa que no podamos llamarla.</p></section>
  <section className="jsm-section"><h2>Las dos formas pueden reutilizarse</h2><p>Una función tradicional con nombre y una función anónima guardada en una constante pueden hacer exactamente el mismo trabajo. Las dos pueden recibir parámetros, devolver valores mediante <code>return</code> y ejecutarse tantas veces como necesitemos. La diferencia principal, por ahora, está en cómo las escribimos y en cuándo podemos utilizarlas dentro del programa.</p><Code>{`function calcularPrecio(precio) {
  return precio * 1.21;
}

console.log(calcularPrecio(20));
console.log(calcularPrecio(50));`}</Code><Code>{`const calcularPrecio = function(precio) {
  return precio * 1.21;
};

console.log(calcularPrecio(20));
console.log(calcularPrecio(50));`}</Code><p>Ambos ejemplos producen los mismos resultados y pueden reutilizarse. Sin paréntesis, <code>calcularPrecio</code> se refiere a la función; con paréntesis, <code>calcularPrecio(20)</code> la ejecuta.</p></section>
  <section className="jsm-section"><h2>Una función pequeña donde se necesita</h2><p>Imagina que queremos mostrar un mensaje en Console, pero después de dos segundos. <code>setTimeout()</code> recibe la función que debe ejecutar y el tiempo de espera en milisegundos.</p><Code>{`function mostrarMensaje() {
  console.log("¡Han pasado dos segundos!");
}

setTimeout(mostrarMensaje, 2000);`}</Code><p>Escribimos <code>mostrarMensaje</code> sin paréntesis porque queremos pasar la función para que se ejecute después, no ejecutarla inmediatamente.</p><Code>{`setTimeout(function() {
  console.log("¡Han pasado dos segundos!");
}, 2000);`}</Code><p>Ahora escribimos la función directamente dentro de <code>setTimeout()</code>. No necesitamos una declaración aparte porque esa instrucción pequeña solo se usa aquí. Una función anónima puede resultar útil cuando proporcionamos una función pequeña a otra función; la versión con nombre también sería correcta.</p><Code>{`setTimeout(() => {
  console.log("¡Han pasado dos segundos!");
}, 2000);`}</Code><p>La flecha sustituye <code>function()</code> por <code>() =&gt;</code> y hace exactamente lo mismo. Esta es una situación donde encontraremos funciones flecha con frecuencia.</p></section>
  <section className="jsm-section"><h2>Tres opciones en el mismo caso</h2><figure className="jsm-infographic"><img src="/recursos/3funciones.png" alt="Comparación visual entre una función con nombre, una función anónima y una función flecha."/><figcaption>Tres formas de escribir una función para una misma tarea sencilla.</figcaption></figure><div className="jsm-example-grid"><div><h3>Con nombre</h3><Code>{`function saludar() {
  console.log("Hola");
}
setTimeout(saludar, 2000);`}</Code></div><div><h3>Anónima</h3><Code>{`setTimeout(function() {
  console.log("Hola");
}, 2000);`}</Code></div><div><h3>Flecha</h3><Code>{`setTimeout(() => {
  console.log("Hola");
}, 2000);`}</Code></div></div><p>Las tres opciones son válidas. En un ejemplo pequeño, las formas anónima y flecha permiten escribir el código directamente donde se necesita, sin crear una declaración independiente. No es una regla obligatoria ni una forma siempre mejor.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Forma</th><th>Característica</th><th>Cuándo puede resultar cómoda</th></tr></thead><tbody><tr><td>Tradicional con nombre</td><td><code>function nombre()</code></td><td>Definir una operación independiente con un nombre descriptivo.</td></tr><tr><td>Anónima en <code>const</code></td><td>Una función sin nombre explícito guardada en constante.</td><td>Utilizar una expresión de función y conservarla para llamarla.</td></tr><tr><td>Anónima directa</td><td>Se escribe dentro de otra operación.</td><td>Una función pequeña solo necesaria ahí.</td></tr><tr><td>Flecha</td><td>Usa <code>=&gt;</code>.</td><td>Una sintaxis más breve adecuada al caso.</td></tr></tbody></table></div><p><strong>Estas situaciones son ejemplos de uso, no reglas obligatorias.</strong> Una función tradicional y una función anónima guardada en <code>const</code> pueden reutilizarse igualmente.</p></section>
  <section className="jsm-section"><h2>El orden de declaración importa</h2><Code>{`saludar();

function saludar() {
  console.log("Hola");
}`}</Code><p>Una función tradicional declarada así puede llamarse antes de su definición en el archivo.</p><Code>{`saludar(); // Error

const saludar = function() {
  console.log("Hola");
};`}</Code><p>Cuando guardamos una función en una constante, primero debemos inicializar esa constante y después utilizarla. Lo mismo sucede con las funciones flecha guardadas en <code>const</code>.</p></section>
  <Practice title="Ejercicio 1 · Reconoce una función anónima" solution={`// No hay nombre después de function.
// calcularTriple contiene una función.
// Console muestra 12.
const calcularTriple = function(numero) {
  return numero * 3;
};
console.log(calcularTriple(4)); // 12`} why="La constante permite llamar a la función aunque no haya un nombre escrito tras function."><p>¿Cómo sabemos que esta función es anónima?, ¿qué contiene <code>calcularTriple</code> y qué aparece en Console?</p><Code>{`const calcularTriple = function(numero) {
  return numero * 3;
};
console.log(calcularTriple(4));`}</Code></Practice>
  <Practice title="Ejercicio 2 · Transforma una función" solution={`const calcularMitad = function(numero) {
  return numero / 2;
};
console.log(calcularMitad(20)); // 10`} why="La constante guarda la función anónima y los paréntesis de la llamada ejecutan el cálculo."><p>Transforma <code>function calcularMitad(numero) {'{ return numero / 2; }'}</code> en una función anónima guardada en <code>calcularMitad</code>. Después llámala con 20.</p></Practice>
  <Practice title="Ejercicio 3 · Un mensaje que aparece después" solution={`setTimeout(function() {
  console.log("¡Tiempo terminado!");
}, 3000);`} why="La función se escribe dentro de setTimeout porque solo se utiliza ahí. 3000 milisegundos equivalen aproximadamente a tres segundos."><p>Transforma este programa para usar una función anónima directamente dentro de <code>setTimeout()</code>:</p><Code>{`function avisar() {
  console.log("¡Tiempo terminado!");
}
setTimeout(avisar, 3000);`}</Code><p><strong>Reflexiona:</strong> ¿sería incorrecto mantener la función con nombre? No. Ambas opciones son correctas; la anónima evita una declaración independiente cuando no la necesitamos.</p></Practice>
  <section className="jsm-section jsm-recap"><h2>Ideas clave</h2><ol><li>Una función anónima se escribe sin un nombre explícito después de <code>function</code>.</li><li>Una función anónima en una constante puede llamarse y reutilizarse igual que una tradicional.</li><li>También puede escribirse directamente dentro de otra función que la recibe como argumento.</li><li>Las funciones flecha ofrecen otra sintaxis para estas situaciones.</li><li>Elegimos la forma que hace el código más sencillo de entender.</li></ol><p><strong>No utilizamos funciones anónimas porque las funciones tradicionales no puedan hacer lo mismo. Las utilizamos porque en algunas situaciones nos permiten escribir una función pequeña directamente donde la necesitamos, sin crear una declaración independiente.</strong></p></section>
</>}
