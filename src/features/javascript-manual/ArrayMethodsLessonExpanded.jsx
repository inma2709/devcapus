const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Goal=({children})=><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>{children}</p></section>;
const Next=({children})=><section className="jsm-next"><h2>Lo siguiente</h2><p>{children}</p></section>;
import { ArrayMethodsPremiumAdditions } from './ArrayMethodsPremiumAdditions';

export function ExpandedArrayMethodsLesson(){return <>
  <p className="jsm-subtitle">Los métodos de un array son funciones preparadas. Nos ayudan a añadir o quitar datos de una lista, sabiendo siempre qué posición cambia.</p>
  <Goal>Usar <code>push()</code>, <code>pop()</code>, <code>unshift()</code> y <code>shift()</code>; distinguir modificar una lista de recibir un valor devuelto; y crear una cola de atención sencilla.</Goal>

  <section className="jsm-section"><h2>Dos extremos de una lista</h2><Code>{`PRINCIPIO                         FINAL
   ↓                               ↓
["Ana", "Luis", "Marta", "Pedro"]`}</Code><p><code>unshift()</code> y <code>shift()</code> trabajan al principio. <code>push()</code> y <code>pop()</code> trabajan al final.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Método</th><th>Acción</th><th>¿Modifica el array?</th><th>Devuelve</th></tr></thead><tbody><tr><td><code>push(valor)</code></td><td>Añade al final.</td><td>Sí</td><td>Nueva longitud.</td></tr><tr><td><code>pop()</code></td><td>Elimina el último.</td><td>Sí</td><td>Elemento eliminado.</td></tr><tr><td><code>unshift(valor)</code></td><td>Añade al principio.</td><td>Sí</td><td>Nueva longitud.</td></tr><tr><td><code>shift()</code></td><td>Elimina el primero.</td><td>Sí</td><td>Elemento eliminado.</td></tr></tbody></table></div></section>

  <section className="jsm-section"><h2><code>push()</code> añade al final</h2><p>Es útil cuando llega una nueva persona a una lista de espera. Antes hay dos alumnos; después, Marta queda al final. No creamos otro array: cambiamos el que ya existe.</p><Code>{`const alumnos = ["Ana", "Luis"];
// Antes: ["Ana", "Luis"]

alumnos.push("Marta");

console.log(alumnos);
// Después: ["Ana", "Luis", "Marta"]`}</Code><p>Además de modificar el array, <code>push()</code> devuelve su nueva longitud, no el elemento añadido.</p><Code>{`const alumnos = ["Ana", "Luis"];
const total = alumnos.push("Marta");

console.log(total);    // 3
console.log(alumnos);  // ["Ana", "Luis", "Marta"]`}</Code></section>

  <section className="jsm-section"><h2><code>pop()</code> elimina el último</h2><p>Puede servir para retirar la última tarea añadida. El método cambia la lista y devuelve la tarea que ha salido.</p><Code>{`const tareas = ["Estudiar", "Practicar", "Descansar"];
// Antes: ["Estudiar", "Practicar", "Descansar"]

const ultimaTarea = tareas.pop();

console.log(ultimaTarea); // Descansar
console.log(tareas);      // ["Estudiar", "Practicar"]`}</Code></section>

  <section className="jsm-section"><h2><code>unshift()</code> añade al principio</h2><p>Úsalo cuando un nuevo elemento debe colocarse delante de los demás, como un aviso urgente.</p><Code>{`const avisos = ["Revisar correo", "Preparar clase"];
// Antes: ["Revisar correo", "Preparar clase"]

avisos.unshift("Aviso urgente");

console.log(avisos);
// Después: ["Aviso urgente", "Revisar correo", "Preparar clase"]`}</Code><p>Como <code>push()</code>, modifica el array y devuelve su nueva longitud: en este caso, 3.</p></section>

  <section className="jsm-section"><h2><code>shift()</code> elimina el primero</h2><p>Una cola de atención atiende primero a quien llegó antes; por eso usamos <code>shift()</code>.</p><Code>{`const cola = ["Ana", "Luis", "Marta"];
// Antes: ["Ana", "Luis", "Marta"]

const atendida = cola.shift();

console.log(atendida); // Ana
console.log(cola);     // ["Luis", "Marta"]`}</Code><ol><li><code>shift()</code> elimina el primer elemento.</li><li>El array queda modificado.</li><li>El método devuelve el elemento eliminado.</li><li>Guardamos ese valor en <code>atendida</code> para poder usarlo.</li></ol><p>Es la misma idea que conoces de <code>return</code>: una función realiza una tarea y entrega un resultado. Aquí la tarea cambia la cola y el resultado es la persona retirada.</p></section>

  <section className="jsm-section jsm-challenge"><h2>Actividad práctica · Gestionamos la cola de atención</h2><p><strong>Enunciado:</strong> construye una página que añada personas al final de una cola y atienda siempre a la primera.</p><h3>Resultado esperado</h3><p>Al pulsar «Añadir persona», el nombre se incorpora al final. Al pulsar «Atender siguiente», se muestra quién sale y la lista se actualiza. Si no queda nadie, se muestra «No hay personas esperando».</p><h3>HTML inicial</h3><Code>{`<main class="cola-app">
  <h1>Gestión de la cola</h1>
  <p id="lista-cola"></p>
  <input id="nombre" type="text" placeholder="Escribe un nombre">
  <button onclick="anadirPersona()">Añadir persona</button>
  <button onclick="atenderPersona()">Atender siguiente</button>
  <p id="mensaje"></p>
</main>`}</Code><h3>JavaScript paso a paso</h3><ol><li>Crea <code>const cola = ["Ana", "Luis", "Marta"]</code>.</li><li>Escribe <code>mostrarCola()</code>. Debe actualizar el párrafo con <code>cola.join(", ")</code>. <code>join()</code> convierte los elementos en un texto separado por comas.</li><li>En <code>anadirPersona()</code>, lee <code>.value</code>, comprueba que no esté vacío, usa <code>push()</code>, llama a <code>mostrarCola()</code> y limpia el input.</li><li>En <code>atenderPersona()</code>, comprueba que haya personas, guarda <code>cola.shift()</code>, muestra un mensaje y llama a <code>mostrarCola()</code>.</li></ol><details><summary>Necesito una pista</summary><p>Para atender, comprueba <code>cola.length &gt; 0</code>. Si se cumple, guarda <code>const atendida = cola.shift()</code>.</p></details><details><summary>Ver solución completa</summary><h4>JavaScript</h4><Code>{`const cola = ["Ana", "Luis", "Marta"];

function mostrarCola() {
  document.getElementById("lista-cola").textContent =
    "Esperando: " + cola.join(", ");
}

function anadirPersona() {
  const nombre = document.getElementById("nombre").value;

  if (nombre !== "") {
    cola.push(nombre);
    document.getElementById("mensaje").textContent =
      nombre + " se ha añadido a la cola.";
    document.getElementById("nombre").value = "";
    mostrarCola();
  } else {
    document.getElementById("mensaje").textContent =
      "Escribe un nombre antes de añadirlo.";
  }
}

function atenderPersona() {
  if (cola.length > 0) {
    const atendida = cola.shift();
    document.getElementById("mensaje").textContent =
      "Se ha atendido a " + atendida;
    mostrarCola();
  } else {
    document.getElementById("mensaje").textContent =
      "No hay personas esperando.";
  }
}

mostrarCola();`}</Code><h4>CSS</h4><Code>{`.cola-app {
  background-color: white;
  color: #17325c;
  padding: 24px;
  margin: 24px auto;
  border: 1px solid #d5dce8;
  border-radius: 12px;
  width: 90%;
  max-width: 520px;
  text-align: center;
}

.cola-app input, .cola-app button {
  padding: 10px;
  margin: 6px;
  border: 1px solid #17325c;
  border-radius: 6px;
}`}</Code><p><strong>Cómo colaboran las funciones:</strong> añadir y atender cambian <code>cola</code> y luego llaman a <code>mostrarCola()</code>. Así reutilizan una misma tarea en vez de repetir código.</p></details></section>

  <section className="jsm-section"><h2>Comprueba lo aprendido</h2><details><summary>Ver respuestas</summary><ol><li><strong>¿Por qué push() y no unshift()?</strong> Porque una cola añade a las personas al final para respetar el orden de llegada.</li><li><strong>¿Qué ocurriría con pop() en vez de shift()?</strong> Atenderíamos a la última persona, no a la primera.</li><li><strong>¿Por qué guardamos el resultado de shift()?</strong> Porque devuelve el nombre de la persona retirada y lo usamos en el mensaje.</li></ol></details></section>
  <ArrayMethodsPremiumAdditions />
  <Next>Ahora sabes añadir y eliminar elementos. El siguiente paso será recorrer todos los elementos de un array utilizando un bucle.</Next>
</>}
