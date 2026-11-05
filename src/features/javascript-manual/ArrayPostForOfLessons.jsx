const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Goal=({children})=><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>{children}</p></section>;
function Activity({title,children,hint,solution,why}){return <section className="jsm-section jsm-challenge"><h2>{title}</h2>{children}<details><summary>Pista</summary><p>{hint}</p></details><details><summary>Ver solución explicada</summary><Code>{solution}</Code><p><strong>Por qué funciona:</strong> {why}</p></details></section>}

export function ForEachDevelopedLesson(){return <><p className="jsm-subtitle">Antes de elegir un recorrido conviene saber si necesitamos solo el valor o también su posición.</p><Goal>Explicar cuándo hace falta un índice y usar <code>forEach()</code> para ejecutar una acción por cada elemento.</Goal><section className="jsm-section"><h2>¿Cuándo necesito el índice?</h2><p>Para mostrar solamente nombres, <code>for...of</code> es suficiente: recibimos directamente cada valor.</p><Code>{`const alumnos = ["Ana", "Luis", "Marta"];

for (const alumno of alumnos) {
  console.log(alumno);
}`}</Code><p>Pero si queremos mostrar el puesto de cada participante, la posición importa. El índice interno empieza en 0 y el puesto visible para una persona empieza en 1.</p><Code>{`const participantes = ["Ana", "Luis", "Marta"];

for (let i = 0; i < participantes.length; i++) {
  console.log("Puesto " + (i + 1) + ": " + participantes[i]);
}`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Índice</th><th>0</th><th>1</th><th>2</th></tr></thead><tbody><tr><th>Valor</th><td>Ana</td><td>Luis</td><td>Marta</td></tr><tr><th>Puesto mostrado</th><td>1</td><td>2</td><td>3</td></tr></tbody></table></div><p>El índice también permite modificar el lugar exacto del array. Con <code>precios[i]</code> cambiamos el elemento guardado; cambiar solo la variable <code>precio</code> de un <code>for...of</code> no cambia el array.</p><Code>{`const precios = [10, 20, 30];

for (let i = 0; i < precios.length; i++) {
  precios[i] = precios[i] * 1.21;
}

console.log(precios); // [12.1, 24.2, 36.3]`}</Code><div className="jsm-flow"><span>índice 0</span><b>→</b><span>precios[0]</span><b>→</b><span>10 × 1.21</span><b>→</b><span>12.1 se guarda en índice 0</span></div></section><section className="jsm-section"><h2><code>forEach()</code>: una acción por cada elemento</h2><p>En una tienda queremos calcular y mostrar el precio con IVA de todos los productos. No necesitamos cambiar ni guardar otra lista: solo mostrar un resultado por cada precio.</p><Code>{`const precios = [10, 20, 50];

precios.forEach(function (precio) {
  let precioConIVA = precio * 1.21;
  console.log(precioConIVA);
});

// 12.1
// 24.2
// 60.5`}</Code><ol><li><code>forEach()</code> recorre <code>precios</code>.</li><li>Ejecuta la función una vez por cada elemento: tres veces.</li><li>En cada ejecución, <code>precio</code> recibe el valor actual.</li><li>La función no necesita nombre porque se usa solo aquí; por eso es anónima.</li></ol><p>A esta función se la puede llamar <strong>callback</strong>: una función que <code>forEach()</code> ejecuta por nosotros. El nombre técnico no cambia lo importante: recibe un precio y realiza la acción indicada.</p><Code>{`precios.forEach(function (precio, indice) {
  console.log("Producto " + (indice + 1) + ": " + precio + " €");
});`}</Code><p>El segundo parámetro opcional es el índice. Es útil cuando la posición tiene una finalidad, como numerar los productos. La versión con flecha expresa lo mismo: <code>precios.forEach((precio) =&gt; console.log(precio))</code>.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Herramienta</th><th>Úsala cuando…</th><th>Resultado</th></tr></thead><tbody><tr><td><code>for</code></td><td>necesitas índice o control de posiciones</td><td>tú controlas el recorrido</td></tr><tr><td><code>for...of</code></td><td>solo necesitas cada valor</td><td>valor por vuelta</td></tr><tr><td><code>forEach()</code></td><td>quieres ejecutar una acción por valor</td><td><code>undefined</code></td></tr></tbody></table></div><p><code>forEach()</code> no modifica automáticamente el array original ni crea uno nuevo.</p></section><Activity title="Actividad · Numerar una lista" hint="forEach entrega primero el valor y después el índice. Suma 1 solo para mostrar el número al usuario." solution={`const tareas = ["Estudiar", "Practicar", "Descansar"];

tareas.forEach(function (tarea, indice) {
  console.log((indice + 1) + ". " + tarea);
});`} why="La lista no cambia: forEach solo ejecuta console.log una vez por tarea."><p><strong>Enunciado:</strong> muestra cada tarea precedida por su número de posición visible.</p></Activity><Activity title="Actividad · Aplicar un descuento a los productos" hint="Un descuento del 10 % equivale a multiplicar cada precio por 0.90." solution={`let precios = [10, 20, 50];

precios.forEach(function(precio) {
  let precioConDescuento = precio * 0.90;
  console.log(precioConDescuento);
});

console.log(precios);`} why="forEach recorre los tres precios y precio recibe un valor distinto cada vez. Calculamos y mostramos el descuento, pero no asignamos ningún resultado a una posición del array; por eso precios conserva [10, 20, 50]. forEach no modifica el original automáticamente, aunque una función podría hacerlo si incluyera una asignación expresa."><p><strong>Enunciado:</strong> una tienda tiene precios de 10 €, 20 € y 50 €. Utiliza <code>forEach()</code> para calcular un descuento del 10 % y mostrar los nuevos importes. Después muestra el array original: ¿han cambiado sus valores?</p><Code>{`let precios = [10, 20, 50];`}</Code><p><strong>Resultado esperado:</strong> se muestran 9 €, 18 € y 45 €; el array original sigue siendo <code>[10, 20, 50]</code>.</p></Activity><section className="jsm-section"><h2>¿Y si queremos guardar los precios con descuento?</h2><p>Hasta ahora hemos calculado y mostrado importes. Ahora aparecen dos necesidades distintas: <strong>Situación A</strong>, modificar los precios que ya están en el array; y <strong>Situación B</strong>, conservar los originales y crear otro array con los rebajados.</p><p>Para la situación A ya conocemos una solución válida: el índice y el bucle <code>for</code>.</p><Code>{`let precios = [10, 20, 50];

for (let i = 0; i < precios.length; i++) {
  precios[i] = precios[i] * 0.90;
}

console.log(precios);
// [9, 18, 45]`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Índice</th><th>Antes</th><th>Después</th></tr></thead><tbody><tr><td>0</td><td>10</td><td>9</td></tr><tr><td>1</td><td>20</td><td>18</td></tr><tr><td>2</td><td>50</td><td>45</td></tr></tbody></table></div><p>El contador <code>i</code> señala una posición; <code>precios[i]</code> accede a ella y <code>=</code> guarda el nuevo valor. Es una solución conocida y perfectamente válida cuando queremos modificar el array original.</p></section></>}

export function MapDevelopedLesson(){return <><p className="jsm-subtitle"><code>map()</code> sirve cuando una acción debe producir otra lista con los resultados.</p><Goal>Distinguir mostrar precios con IVA de crear y guardar una lista nueva de precios con IVA.</Goal><section className="jsm-section"><h2>Del mismo problema a una necesidad nueva</h2><p>Con <code>forEach()</code> mostramos los precios con IVA, pero <code>precios</code> seguía igual. Ahora queremos conservar los originales y guardar los resultados para usarlos después.</p><Code>{`const precios = [10, 20, 50];

const preciosConIVA = precios.map(function (precio) {
  return precio * 1.21;
});

console.log(precios);       // [10, 20, 50]
console.log(preciosConIVA); // [12.1, 24.2, 60.5]`}</Code><p><code>map()</code> llama a la función una vez por precio. Cada <code>return</code> aporta un valor a la nueva lista, en la misma posición. Sin <code>return</code>, no tendría el valor que debe guardar.</p><div className="jsm-flow"><span>[10, 20, 50]</span><b>→</b><span>cada precio × 1.21</span><b>→</b><span>[12.1, 24.2, 60.5]</span></div><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>precio</th><th>return</th><th>Nuevo array</th></tr></thead><tbody><tr><td>1</td><td>10</td><td>12.1</td><td>[12.1]</td></tr><tr><td>2</td><td>20</td><td>24.2</td><td>[12.1, 24.2]</td></tr><tr><td>3</td><td>50</td><td>60.5</td><td>[12.1, 24.2, 60.5]</td></tr></tbody></table></div><p>Elige <code>forEach()</code> para una acción como mostrar un mensaje. Elige <code>map()</code> cuando necesites una lista nueva transformada. La forma flecha equivalente se verá después de entender esta versión: <code>precios.map((precio) =&gt; precio * 1.21)</code>.</p></section><Activity title="Actividad · Aplicar un descuento" hint="El descuento del 10 % deja el 90 % del precio: precio * 0.9. Debes devolver ese resultado." solution={`const precios = [30, 50, 80];

const preciosRebajados = precios.map(function (precio) {
  return precio * 0.9;
});

console.log(preciosRebajados); // [27, 45, 72]`} why="map crea preciosRebajados con un resultado por cada precio y no modifica precios."><p><strong>Enunciado:</strong> crea un array nuevo con el 10 % de descuento para cada precio.</p></Activity></>}

export function SearchDevelopedLesson(){return <><p className="jsm-subtitle">Buscar no siempre significa obtener lo mismo: a veces necesitamos todos los resultados, uno solo o una respuesta sí/no.</p><Goal>Elegir <code>filter()</code>, <code>find()</code> o <code>includes()</code> según la pregunta.</Goal><section className="jsm-section"><h2>La misma tienda, tres preguntas</h2><Code>{`const precios = [10, 25, 50, 15, 40];`}</Code><h3>Todos los precios superiores a 20 €: <code>filter()</code></h3><Code>{`const caros = precios.filter(function (precio) {
  return precio > 20;
});
// [25, 50, 40]`}</Code><p>La función devuelve <code>true</code> para conservar un precio y <code>false</code> para descartarlo. Siempre devuelve un array: si nada cumple, devuelve <code>[]</code>.</p><h3>El primer precio superior a 20 €: <code>find()</code></h3><Code>{`const primerCaro = precios.find(function (precio) {
  return precio > 20;
});
// 25`}</Code><p><code>find()</code> se detiene en la primera coincidencia. Si no encuentra ninguna, devuelve <code>undefined</code>.</p><h3>¿Existe exactamente 50 €?: <code>includes()</code></h3><Code>{`const existePrecio50 = precios.includes(50);
console.log(existePrecio50); // true`}</Code><p><code>includes()</code> no recibe una función: comprueba un valor exacto y devuelve <code>true</code> o <code>false</code>.</p><div className="jsm-flow"><span>10 ✕</span><b>·</b><span>25 ✓</span><b>·</b><span>50 ✓</span><b>·</b><span>15 ✕</span><b>·</b><span>40 ✓</span></div><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Pregunta</th><th>Herramienta</th><th>Devuelve</th></tr></thead><tbody><tr><td>¿Cuáles cumplen?</td><td><code>filter()</code></td><td>Array de coincidencias</td></tr><tr><td>¿Cuál es el primero?</td><td><code>find()</code></td><td>Elemento o undefined</td></tr><tr><td>¿Existe este valor exacto?</td><td><code>includes()</code></td><td>true o false</td></tr></tbody></table></div></section><Activity title="Actividad · Elegir la búsqueda" hint="Si necesitas todos los precios, filter. Si solo necesitas comprobar un número concreto, includes." solution={`const precios = [10, 25, 50, 15, 40];
const baratos = precios.filter(function (precio) {
  return precio < 20;
});
const existe30 = precios.includes(30);

console.log(baratos); // [10, 15]
console.log(existe30); // false`} why="filter reúne todas las coincidencias y includes responde una pregunta de existencia exacta."><p><strong>Enunciado:</strong> obtén todos los precios menores de 20 € y comprueba si existe uno de 30 €.</p></Activity></>}

export function ReduceDevelopedLesson(){return <><p className="jsm-subtitle"><code>reduce()</code> expresa una acumulación: muchos precios se convierten en un único total.</p><Goal>Relacionar el acumulador que ya conoces con <code>reduce()</code> y seguir su resultado vuelta a vuelta.</Goal><section className="jsm-section"><h2>Primero, la solución conocida</h2><p>Para saber cuánto cuesta una compra, ya sabemos iniciar un total y sumarle cada precio.</p><Code>{`const precios = [10, 20, 50];
let total = 0;

for (const precio of precios) {
  total = total + precio;
}

console.log(total); // 80`}</Code><p><code>total</code> es un acumulador: guarda el resultado de la vuelta anterior. <code>reduce()</code> realiza la misma idea con una función que recibe el acumulador y el elemento actual.</p><Code>{`const precios = [10, 20, 50];

const total = precios.reduce(function (acumulador, precio) {
  return acumulador + precio;
}, 0);

console.log(total); // 80`}</Code><ul><li><code>acumulador</code> empieza con el <code>0</code> final.</li><li><code>precio</code> recibe un precio distinto en cada vuelta.</li><li>El <code>return</code> se convierte en el acumulador de la siguiente vuelta.</li><li>Al acabar, <code>reduce()</code> devuelve un único resultado: 80.</li></ul><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>Acumulador anterior</th><th>Precio</th><th>Nuevo acumulador</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>10</td><td>10</td></tr><tr><td>2</td><td>10</td><td>20</td><td>30</td></tr><tr><td>3</td><td>30</td><td>50</td><td>80</td></tr></tbody></table></div><div className="jsm-flow"><span>0</span><b>+ 10 →</b><span>10</span><b>+ 20 →</b><span>30</span><b>+ 50 →</b><span>80</span></div><p><code>reduce()</code> no sustituye obligatoriamente al bucle: el <code>for...of</code> puede ser más fácil de leer. Úsalo cuando quieras expresar claramente que el objetivo es acumular un resultado único.</p></section><Activity title="Actividad · Total del carrito" hint="El valor inicial es 0 y el return debe sumar el acumulador con el precio actual." solution={`const carrito = [12, 8, 5];

const total = carrito.reduce(function (acumulador, precio) {
  return acumulador + precio;
}, 0);

console.log(total); // 25`} why="Cada vuelta entrega una suma que reduce reutiliza como acumulador de la siguiente."><p><strong>Enunciado:</strong> calcula el total de un carrito con tres precios usando <code>reduce()</code>.</p></Activity></>}

export function SpliceDevelopedLesson(){return <>
  <p className="jsm-subtitle"><code>splice()</code> modifica una lista a partir de una posición: puede eliminar, insertar o sustituir.</p>
  <Goal>Utilizar splice() para eliminar, insertar y sustituir elementos de un array, comprendiendo cómo funcionan sus parámetros y cómo cambia la lista original.</Goal>
  <section className="jsm-section"><h2>El problema: modificar el centro del carrito</h2><p>Ya sabes que <code>push()</code> y <code>unshift()</code> añaden en los extremos, y <code>pop()</code> y <code>shift()</code> eliminan en ellos. ¿Qué ocurre si necesitamos modificar un producto que está en medio?</p><Code>{`let carrito = ["Pan", "Leche", "Huevos"];`}</Code><p><code>splice()</code> recibe una posición y nos permite eliminar, insertar o sustituir desde ella.</p></section>
  <section className="jsm-section"><h2>1. Eliminar un elemento</h2><Code>{`let carrito = ["Pan", "Leche", "Huevos"];

carrito.splice(1, 1);

console.log(carrito);
// ["Pan", "Huevos"]`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Índice</th><th>0</th><th>1</th><th>2</th></tr></thead><tbody><tr><th>Antes</th><td>Pan</td><td>Leche · se elimina</td><td>Huevos</td></tr><tr><th>Después</th><td>Pan</td><td>Huevos</td><td>—</td></tr></tbody></table></div><p>El primer <code>1</code> es la posición desde la que comenzamos. El segundo <code>1</code> indica que eliminamos un elemento. «Huevos» pasa del índice 2 al índice 1.</p></section>
  <section className="jsm-section"><h2>2. Insertar un elemento</h2><p>El cliente ya tiene Pan y Huevos, pero quiere colocar Leche entre ambos.</p><Code>{`let carrito = ["Pan", "Huevos"];

carrito.splice(1, 0, "Leche");

console.log(carrito);
// ["Pan", "Leche", "Huevos"]`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Índice</th><th>0</th><th>1</th><th>2</th></tr></thead><tbody><tr><th>Antes</th><td>Pan</td><td>Huevos</td><td>—</td></tr><tr><th>Después</th><td>Pan</td><td>Leche · se inserta</td><td>Huevos se desplaza</td></tr></tbody></table></div><p>El primer argumento <code>1</code> indica dónde insertar. El segundo, <code>0</code>, indica que no eliminamos nada. El tercero, <code>"Leche"</code>, es el valor añadido. Usamos 0 precisamente para no sustituir «Huevos».</p></section>
  <section className="jsm-section"><h2>3. Sustituir un elemento</h2><p>Ahora el cliente prefiere Queso en lugar de Leche.</p><Code>{`let carrito = ["Pan", "Leche", "Huevos"];

carrito.splice(1, 1, "Queso");

console.log(carrito);
// ["Pan", "Queso", "Huevos"]`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Índice</th><th>0</th><th>1</th><th>2</th></tr></thead><tbody><tr><th>Antes</th><td>Pan</td><td>Leche · se elimina</td><td>Huevos</td></tr><tr><th>Después</th><td>Pan</td><td>Queso · se inserta</td><td>Huevos</td></tr></tbody></table></div><p>El primer <code>1</code> señala el índice, el segundo elimina un elemento y «Queso» ocupa ese lugar. Para cambiar un único valor de una posición conocida, la asignación directa es más sencilla:</p><Code>{`carrito[1] = "Queso";`}</Code><p>Las dos formas dan el mismo resultado aquí; no es necesario usar <code>splice()</code> siempre que sustituimos un solo valor.</p></section>
  <section className="jsm-section"><h2>La regla que decide la operación</h2><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Necesito…</th><th>Instrucción</th><th>¿Qué hace?</th></tr></thead><tbody><tr><td>Eliminar</td><td><code>splice(1, 1)</code></td><td>Elimina un elemento desde el índice 1.</td></tr><tr><td>Insertar</td><td><code>splice(1, 0, "Leche")</code></td><td>Inserta Leche sin eliminar ninguno.</td></tr><tr><td>Sustituir</td><td><code>splice(1, 1, "Queso")</code></td><td>Elimina uno e introduce Queso.</td></tr></tbody></table></div><p><strong>El segundo argumento determina cuántos elementos se eliminan. Si vale 0, podemos insertar sin borrar.</strong></p></section>
  <section className="jsm-section"><h2>Qué modifica y qué devuelve</h2><Code>{`let carrito = ["Pan", "Leche", "Huevos"];
let eliminados = carrito.splice(1, 1);

console.log(carrito);    // ["Pan", "Huevos"]
console.log(eliminados); // ["Leche"]`}</Code><p><code>splice()</code> modifica directamente <code>carrito</code> y devuelve otro array con los elementos eliminados. <code>eliminados</code> es un array aunque contenga solo «Leche». Si insertamos sin eliminar, devuelve <code>[]</code>.</p></section>
  <Activity title="Actividad 1 · Eliminar un producto" hint="«Fruta» está en el índice 2; elimina una sola posición." solution={`let carrito = ["Pan", "Leche", "Fruta", "Huevos"];
carrito.splice(2, 1);

console.log(carrito); // ["Pan", "Leche", "Huevos"]`} why="splice(2, 1) comienza en el índice 2 y retira exactamente un elemento."><p><strong>Enunciado:</strong> elimina «Fruta» del carrito sin afectar al resto.</p></Activity>
  <Activity title="Actividad 2 · Insertar un producto" hint="Leche debe ir en el índice 1 y el segundo argumento debe ser 0." solution={`let carrito = ["Pan", "Huevos", "Agua"];
carrito.splice(1, 0, "Leche");

console.log(carrito); // ["Pan", "Leche", "Huevos", "Agua"]`} why="El 0 no elimina productos; Huevos y Agua se desplazan para dejar espacio."><p><strong>Enunciado:</strong> inserta Leche entre Pan y Huevos sin eliminar ningún producto.</p></Activity>
  <Activity title="Actividad 3 · Sustituir un producto" hint="Empieza en el índice 1, elimina uno e introduce el producto nuevo." solution={`let carrito = ["Pan", "Leche", "Huevos"];
carrito.splice(1, 1, "Queso");

console.log(carrito); // ["Pan", "Queso", "Huevos"]`} why="Se elimina Leche en el índice 1 y Queso ocupa ese mismo lugar."><p><strong>Enunciado:</strong> sustituye Leche por Queso utilizando <code>splice()</code>.</p></Activity>
</>}

export function ArrayDecisionLesson(){return <><p className="jsm-subtitle">Elegir bien una herramienta empieza por formular la pregunta que necesitas responder.</p><Goal>Relacionar cada necesidad con una estructura de control o método de arrays.</Goal><section className="jsm-section"><h2>¿Qué herramienta necesito?</h2><figure className="jsm-infographic"><img src="/recursos/herramienta.png" alt="Guía visual para elegir la herramienta adecuada al trabajar con arrays."/><figcaption>Antes de escribir código, identifica qué resultado necesitas obtener.</figcaption></figure><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Necesidad</th><th>Herramienta</th><th>Devuelve</th><th>¿Modifica?</th><th>Ejemplo</th></tr></thead><tbody><tr><td>Controlar índice</td><td><code>for</code> (estructura)</td><td>—</td><td>No por sí solo</td><td>Puestos</td></tr><tr><td>Leer valores</td><td><code>for...of</code> (estructura)</td><td>—</td><td>No por sí solo</td><td>Mostrar nombres</td></tr><tr><td>Hacer una acción</td><td><code>forEach()</code></td><td>undefined</td><td>No por sí solo</td><td>Mostrar precios</td></tr><tr><td>Nueva lista transformada</td><td><code>map()</code></td><td>Array nuevo</td><td>No</td><td>Precios con IVA</td></tr><tr><td>Varios que cumplen</td><td><code>filter()</code></td><td>Array nuevo</td><td>No</td><td>Precios baratos</td></tr><tr><td>Primer resultado</td><td><code>find()</code></td><td>Elemento/undefined</td><td>No</td><td>Primer precio alto</td></tr><tr><td>Comprobar valor</td><td><code>includes()</code></td><td>Booleano</td><td>No</td><td>¿Existe 50?</td></tr><tr><td>Un total</td><td><code>reduce()</code></td><td>Un resultado</td><td>No</td><td>Total compra</td></tr><tr><td>Añadir/quitar extremos</td><td><code>push/pop/shift/unshift</code></td><td>Longitud o eliminado</td><td>Sí</td><td>Cola</td></tr><tr><td>Quitar por posición</td><td><code>splice()</code></td><td>Array de eliminados</td><td>Sí</td><td>Quitar producto</td></tr></tbody></table></div><h3>Tabla comparativa del bloque</h3><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Herramienta</th><th>¿Para qué sirve?</th><th>¿Cuándo la utilizaría?</th><th>¿Modifica el array original?</th><th>¿Qué devuelve?</th></tr></thead><tbody><tr><td>Índice <code>lista[i]</code></td><td>Consultar o cambiar una posición.</td><td>Conoces el lugar del dato.</td><td>Solo al asignar <code>lista[i] = valor</code>.</td><td>El valor de esa posición.</td></tr><tr><td><code>length</code></td><td>Contar elementos.</td><td>Necesitas el tamaño o el último índice.</td><td>No.</td><td>Un número.</td></tr><tr><td><code>for</code></td><td>Recorrer con índice.</td><td>La posición importa.</td><td>No por sí mismo.</td><td>No devuelve un resultado del recorrido.</td></tr><tr><td><code>for...of</code></td><td>Recorrer valores.</td><td>Solo necesitas cada elemento.</td><td>No por sí mismo.</td><td>No devuelve un resultado del recorrido.</td></tr><tr><td><code>forEach()</code></td><td>Ejecutar una acción por valor.</td><td>Quieres mostrar, modificar la página o realizar una tarea por elemento.</td><td>No por sí mismo.</td><td><code>undefined</code>.</td></tr><tr><td><code>push()</code></td><td>Añadir al final.</td><td>Un dato nuevo llega al final.</td><td>Sí.</td><td>Nueva longitud.</td></tr><tr><td><code>pop()</code></td><td>Eliminar el último.</td><td>El último dato debe salir.</td><td>Sí.</td><td>Elemento eliminado.</td></tr><tr><td><code>unshift()</code></td><td>Añadir al principio.</td><td>Un dato debe tener prioridad al inicio.</td><td>Sí.</td><td>Nueva longitud.</td></tr><tr><td><code>shift()</code></td><td>Eliminar el primero.</td><td>Trabajas con una cola.</td><td>Sí.</td><td>Elemento eliminado.</td></tr></tbody></table></div><p>Esta tabla resume las herramientas básicas. En este mismo bloque también has estudiado <code>map()</code>, <code>filter()</code>, <code>find()</code> y <code>reduce()</code> para transformar, seleccionar, buscar o acumular resultados.</p></section><Activity title="Actividad · Decide antes de escribir" hint="Lee qué resultado se pide: lista nueva, un elemento, booleano o total." solution={`// Participantes: for...of
// Puestos: for
// Descuento en otra lista: map()
// Todos los precios < 15: filter()
// Primer precio > 100: find()
// ¿Existe 50?: includes(50)
// Total: reduce()`} why="No hay un método 'mejor' siempre: el resultado que necesitamos determina la elección."><p><strong>Situaciones:</strong> mostrar participantes; mostrar sus puestos; guardar precios con descuento; seleccionar precios menores de 15 €; encontrar el primer precio superior a 100 €; comprobar si existe 50 €; calcular un total.</p></Activity></>}

export function SimpleCartPracticeLesson(){return <><p className="jsm-subtitle">Práctica integradora · Un carrito sencillo con valores, sin objetos.</p><Goal>Aplicar recorridos, búsquedas, transformación, acumulación y eliminación en pequeñas funciones comprensibles.</Goal><section className="jsm-section"><h2>Carrito de compra: datos sencillos</h2><p>Trabajaremos solo con precios. Cada función tiene una tarea concreta; no necesitas usar todos los métodos a la vez.</p><Code>{`const carrito = [10, 25, 50];

function mostrarPrecios() {
  carrito.forEach(function (precio, indice) {
    console.log("Producto " + (indice + 1) + ": " + precio + " €");
  });
}

function calcularTotal() {
  return carrito.reduce(function (acumulador, precio) {
    return acumulador + precio;
  }, 0);
}`}</Code><ol><li>Muestra los productos con <code>forEach()</code>.</li><li>Crea una lista con IVA mediante <code>map()</code>.</li><li>Obtén los precios superiores a 20 € con <code>filter()</code>.</li><li>Busca el primer precio superior a 20 € con <code>find()</code>.</li><li>Comprueba si existe 50 € con <code>includes()</code>.</li><li>Calcula el total con <code>reduce()</code>.</li><li>Elimina el segundo producto con <code>splice(1, 1)</code>.</li></ol></section><Activity title="Reto · Completa las funciones" hint="Cada función debe responder a una única pregunta. Reutiliza el mismo carrito." solution={`const carrito = [10, 25, 50];

const conIVA = carrito.map(function (precio) {
  return precio * 1.21;
});
const caros = carrito.filter(function (precio) {
  return precio > 20;
});
const primerCaro = carrito.find(function (precio) {
  return precio > 20;
});
const existe50 = carrito.includes(50);
const total = carrito.reduce(function (acumulador, precio) {
  return acumulador + precio;
}, 0);
carrito.splice(1, 1);`} why="Cada método responde a una necesidad distinta. map, filter y reduce no modifican carrito; splice sí lo hace."><p><strong>Enunciado:</strong> completa las seis operaciones indicadas arriba y comprueba el resultado de cada una en consola.</p></Activity><section className="jsm-section jsm-recap"><h2>Material conservado</h2><p>La práctica original de mini tienda con productos como objetos sigue guardada en el proyecto para revisarla más adelante, cuando estudiemos objetos. Esta práctica no la sustituye ni la elimina.</p></section></>}
