const Code = ({ children }) => <pre className="jsm-code"><code>{children}</code></pre>;

const Goal = ({ children }) => <section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>{children}</p></section>;

function Activity({ title, children, hint, solution, explanation }) {
  return <section className="jsm-section jsm-challenge"><h2>{title}</h2>{children}<details><summary>Pista</summary><p>{hint}</p></details><details><summary>Ver solución explicada</summary><Code>{solution}</Code><p><strong>Por qué funciona:</strong> {explanation}</p></details></section>;
}

export function WhyArraysLesson() {
  return <>
    <p className="jsm-subtitle">Un array guarda varios datos relacionados en una sola variable y conserva su orden.</p>
    <Goal>Reconocer el problema que resuelve un array, crear una lista y leer un dato por su índice.</Goal>
    <figure className="jsm-infographic"><img src="/recursos/guia-arrays-javascript.png" alt="Guía visual de arrays en JavaScript." /><figcaption>Guía visual del bloque: úsala como apoyo mientras practicas.</figcaption></figure>
    <section className="jsm-section"><h2>El problema: cinco notas, cinco variables</h2>
      <p>Imagina que queremos guardar las notas de cinco alumnos. Con variables separadas podemos hacerlo, pero pronto resulta incómodo: hay que recordar cinco nombres y no podemos recorrerlas con un bucle.</p>
      <Code>{`const notaAna = 7;
const notaLuis = 5;
const notaMarta = 8;

// ¿Cómo mostraríamos todas si llegaran 30 alumnos?`}</Code>
      <p>Un array agrupa esos valores que pertenecen a la misma lista.</p>
      <Code>{`const notas = [7, 5, 8, 6, 9];

console.log(notas); // [7, 5, 8, 6, 9]`}</Code>
      <p>Los corchetes crean el array; cada valor separado por comas es un <strong>elemento</strong>. La lista mantiene el orden: cada elemento ocupa una posición.</p>
      <h3>Las posiciones empiezan en 0</h3>
      <Code>{`const notas = [7, 5, 8];
// índice:        0  1  2

console.log(notas[0]); // 7
console.log(notas[2]); // 8
console.log(notas[3]); // undefined`}</Code>
      <p>El número entre corchetes es el <strong>índice</strong>. El primer elemento usa el índice 0. Si pides una posición que no existe, el resultado es <code>undefined</code>.</p>
    </section>
    <Activity title="Actividad · Crea y consulta una lista" hint="Escribe los valores entre corchetes y recuerda que el segundo elemento tiene índice 1." solution={`const compra = ["pan", "leche", "fruta"];

console.log(compra[1]); // leche`} explanation="compra es una única lista y compra[1] consulta su segunda posición."><p><strong>Enunciado:</strong> crea un array llamado <code>compra</code> con tres productos y muestra el segundo en la consola.</p><p><strong>Necesitas:</strong> corchetes, comas e índices.</p></Activity>
  </>;
}

export function ConsultArraysLesson() {
  return <>
    <p className="jsm-subtitle">Podemos consultar una posición, cambiarla y saber cuántos elementos hay.</p>
    <Goal>Modificar un elemento concreto y usar <code>length</code> para conocer el tamaño de una lista.</Goal>
    <section className="jsm-section"><h2>Actualizar una posición</h2><p>La misma sintaxis de índice sirve para reemplazar un dato que ya existe.</p>
      <Code>{`const tareas = ["Estudiar", "Descansar", "Leer"];

tareas[1] = "Practicar";
console.log(tareas); // ["Estudiar", "Practicar", "Leer"]`}</Code>
      <p>Solo cambia el elemento del índice 1. El array es una variable <code>const</code>, pero sus elementos sí pueden modificarse.</p>
      <h2>¿Cuántos elementos hay?</h2>
      <Code>{`const tareas = ["Estudiar", "Practicar", "Leer"];

console.log(tareas.length); // 3
console.log(tareas[tareas.length - 1]); // Leer`}</Code>
      <p><code>length</code> es una <strong>propiedad</strong>, no un método: informa y no lleva paréntesis. Si hay tres elementos, el último índice es 2; por eso para leer el último usamos <code>length - 1</code>.</p>
    </section>
    <Activity title="Actividad · Corrige y cuenta" hint="El segundo elemento usa el índice 1. length se escribe sin paréntesis." solution={`const turnos = ["09:00", "10:00", "12:00"];
turnos[1] = "10:30";

console.log(turnos.length); // 3
console.log(turnos); // ["09:00", "10:30", "12:00"]`} explanation="La asignación sustituye solo la posición 1 y length consulta cuántas posiciones contiene el array."><p><strong>Enunciado:</strong> en la lista de turnos, cambia «10:00» por «10:30» y muestra el número de turnos.</p><p><strong>Necesitas:</strong> índice, <code>=</code> y <code>length</code>.</p></Activity>
  </>;
}

export function ChangeArraysLesson() {
  return <>
    <p className="jsm-subtitle">Añadir o eliminar depende de si el dato debe entrar o salir por el principio o por el final.</p>
    <Goal>Elegir entre <code>push()</code>, <code>pop()</code>, <code>unshift()</code> y <code>shift()</code>.</Goal>
    <section className="jsm-section"><h2>Una lista de espera como ejemplo conductor</h2><p>Una persona nueva llega al final de la cola; la siguiente en ser atendida sale por el principio.</p>
      <Code>{`const cola = ["Ana", "Luis"];

cola.push("Marta");       // añade al final
const atendida = cola.shift(); // elimina y devuelve el primero

console.log(atendida); // Ana
console.log(cola); // ["Luis", "Marta"]`}</Code>
      <div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Necesito…</th><th>Herramienta</th><th>Resultado</th></tr></thead><tbody><tr><td>Añadir al final</td><td><code>push(valor)</code></td><td>Nueva longitud</td></tr><tr><td>Eliminar el último</td><td><code>pop()</code></td><td>Elemento eliminado</td></tr><tr><td>Añadir al principio</td><td><code>unshift(valor)</code></td><td>Nueva longitud</td></tr><tr><td>Eliminar el primero</td><td><code>shift()</code></td><td>Elemento eliminado</td></tr></tbody></table></div>
      <p>Los cuatro métodos <strong>modifican el array original</strong>. Usa <code>push()</code> y <code>shift()</code> para una cola; <code>unshift()</code> y <code>pop()</code> cuando el principio de la lista sea la zona importante.</p>
    </section>
    <Activity title="Actividad · Decide la operación" hint="Quien llega a una cola se añade al final; quien es atendido sale del principio." solution={`const cola = ["Noa", "Iker"];
cola.push("Sara");
const atendida = cola.shift();

console.log(atendida); // Noa
console.log(cola); // ["Iker", "Sara"]`} explanation="push conserva el orden de llegada y shift retira exactamente a la primera persona."><p><strong>Enunciado:</strong> añade «Sara» a una cola y atiende a la primera persona, guardándola en <code>atendida</code>.</p><p><strong>Necesitas:</strong> <code>push()</code> y <code>shift()</code>.</p></Activity>
  </>;
}

export function TraverseArraysLesson() {
  const example = `const productos = ["Cuaderno", "Lápiz", "Regla"];`;
  return <>
    <p className="jsm-subtitle">Hay varias formas correctas de recorrer una lista: elige según necesites índice, valor o una acción por elemento.</p>
    <Goal>Comparar <code>for</code>, <code>for...of</code> y <code>forEach()</code> con el mismo problema.</Goal>
    <section className="jsm-section"><h2>El mismo resultado, tres herramientas</h2><p>Queremos mostrar cada producto de esta misma lista:</p><Code>{example}</Code>
      <h3>1. <code>for</code>: cuando necesitas controlar la posición</h3><Code>{`for (let i = 0; i < productos.length; i++) {
  console.log(i + ": " + productos[i]);
}`}</Code><p><code>i</code> toma los índices 0, 1 y 2. Usa <code>&lt;</code>, no <code>&lt;=</code>, para no intentar leer una posición inexistente.</p>
      <h3>2. <code>for...of</code>: cuando solo necesitas el valor</h3><Code>{`for (const producto of productos) {
  console.log(producto);
}`}</Code><p>Es la opción más directa para leer cada valor. El nombre singular <code>producto</code> recibe un elemento distinto en cada vuelta.</p>
      <h3>3. <code>forEach()</code>: una acción para cada elemento</h3><Code>{`productos.forEach(function (producto) {
  console.log(producto);
});`}</Code><p><code>forEach()</code> ejecuta la función que le damos una vez por cada elemento. Esa función recibe el valor actual. A veces se llama <em>callback</em>, pero basta recordar quién hace el trabajo: <code>forEach()</code> la ejecuta por nosotros.</p><p>Elige <code>for</code> si necesitas el índice o controlar el recorrido; <code>for...of</code> si quieres leer valores con claridad; y <code>forEach()</code> si quieres expresar una acción por cada elemento. Las tres formas muestran los productos, ninguna es siempre mejor.</p>
    </section>
    <Activity title="Actividad · Elige cómo recorrer" hint="Para mostrar solo las notas, for...of es suficiente. Para mostrar también su posición, usa for." solution={`const notas = [6, 8, 5];

for (let i = 0; i < notas.length; i++) {
  console.log("Nota " + i + ": " + notas[i]);
}`} explanation="Necesitamos tanto el índice como el valor, por eso el for tradicional es una elección adecuada."><p><strong>Enunciado:</strong> muestra las notas junto a su posición: «Nota 0: 6», «Nota 1: 8»…</p><p><strong>Necesitas:</strong> <code>for</code>, índice y <code>length</code>.</p></Activity>
  </>;
}

export function ArraySummaryPracticeLesson() {
  return <>
    <p className="jsm-subtitle">Repasa qué aporta cada herramienta antes de combinar varias operaciones sencillas.</p>
    <Goal>Elegir una operación de arrays según el problema y resolver una pequeña lista de tareas.</Goal>
    <section className="jsm-section"><h2>Tabla comparativa del bloque</h2><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Herramienta</th><th>¿Para qué sirve?</th><th>¿Cuándo la utilizaría?</th><th>¿Modifica el array original?</th><th>¿Qué devuelve?</th></tr></thead><tbody>
      <tr><td>Índice <code>lista[i]</code></td><td>Consultar o cambiar una posición.</td><td>Conoces el lugar del dato.</td><td>Solo al asignar <code>lista[i] = valor</code>.</td><td>El valor de esa posición.</td></tr>
      <tr><td><code>length</code></td><td>Contar elementos.</td><td>Necesitas el tamaño o el último índice.</td><td>No.</td><td>Un número.</td></tr>
      <tr><td><code>for</code></td><td>Recorrer con índice.</td><td>La posición importa.</td><td>No por sí mismo.</td><td>No devuelve un resultado del recorrido.</td></tr>
      <tr><td><code>for...of</code></td><td>Recorrer valores.</td><td>Solo necesitas cada elemento.</td><td>No por sí mismo.</td><td>No devuelve un resultado del recorrido.</td></tr>
      <tr><td><code>forEach()</code></td><td>Ejecutar una acción por valor.</td><td>Quieres mostrar, modificar la página o realizar una tarea por elemento.</td><td>No por sí mismo.</td><td><code>undefined</code>.</td></tr>
      <tr><td><code>push()</code></td><td>Añadir al final.</td><td>Un dato nuevo llega al final.</td><td>Sí.</td><td>Nueva longitud.</td></tr>
      <tr><td><code>pop()</code></td><td>Eliminar el último.</td><td>El último dato debe salir.</td><td>Sí.</td><td>Elemento eliminado.</td></tr>
      <tr><td><code>unshift()</code></td><td>Añadir al principio.</td><td>Un dato debe tener prioridad al inicio.</td><td>Sí.</td><td>Nueva longitud.</td></tr>
      <tr><td><code>shift()</code></td><td>Eliminar el primero.</td><td>Trabajas con una cola.</td><td>Sí.</td><td>Elemento eliminado.</td></tr>
    </tbody></table></div><p>Más adelante, en consolidación, veremos <code>map()</code> para crear una lista nueva transformada, y <code>find()</code>, <code>filter()</code> y <code>reduce()</code>. Todavía no los necesitas para trabajar con listas básicas.</p></section>
    <Activity title="Práctica integradora · Lista de tareas" hint="Primero añade la tarea con push(). Para mostrar todas, for...of evita trabajar con índices." solution={`const tareas = ["Preparar mochila", "Repasar JavaScript"];

tareas.push("Enviar actividad");
const terminada = tareas.shift();

console.log("Terminada: " + terminada);
for (const tarea of tareas) {
  console.log("Pendiente: " + tarea);
}

// Terminada: Preparar mochila
// Pendiente: Repasar JavaScript
// Pendiente: Enviar actividad`} explanation="push añade la nueva tarea al final, shift retira la primera y for...of muestra directamente las que siguen pendientes."><p><strong>Enunciado:</strong> parte de una lista con dos tareas. Añade «Enviar actividad», marca como terminada la primera y muestra las que quedan pendientes.</p><p><strong>Decisión:</strong> antes de escribir código, indica qué herramienta usarías para añadir, eliminar y recorrer.</p></Activity>
  </>;
}
