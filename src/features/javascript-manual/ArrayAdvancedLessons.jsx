const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Goal=({children})=><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>{children}</p></section>;
const Practice=({title,children,solution})=><section className="jsm-section jsm-challenge"><h2>{title}</h2>{children}<details><summary>Ver solución</summary><Code>{solution}</Code></details></section>;

export function ArrayCallbacksTransitionLesson(){return <>
  <p className="jsm-subtitle">De un bucle que ejecutas tú a una función que un método ejecuta por ti.</p>
  <Goal>Entender qué es un callback, quién lo llama, qué recibe y por qué se escribe <code>mostrarNumero</code> en vez de <code>mostrarNumero()</code>.</Goal>
  <section className="jsm-section"><h2>Primero: el bucle conocido</h2><Code>{`const numeros = [10, 20, 30];

for (const numero of numeros) {
  console.log(numero);
}`}</Code><p>El <code>for...of</code> visita cada elemento y ejecuta el bloque. Ahora sacamos la acción del bloque y la guardamos en una función.</p><Code>{`function mostrarNumero(numero) {
  console.log(numero);
}

mostrarNumero(10);
mostrarNumero(20);
mostrarNumero(30);`}</Code><p>La función necesita un argumento cada vez. En lugar de llamarla manualmente tres veces, podemos entregársela a <code>forEach()</code>.</p><Code>{`numeros.forEach(mostrarNumero);`}</Code><p><code>mostrarNumero</code> significa «entrega la función». <code>mostrarNumero()</code> significa «ejecútala ahora» y no es lo que queremos: el propio <code>forEach()</code> llama al callback una vez por elemento.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>Callback recibe</th><th>Acción</th></tr></thead><tbody><tr><td>1</td><td>10</td><td>muestra 10</td></tr><tr><td>2</td><td>20</td><td>muestra 20</td></tr><tr><td>3</td><td>30</td><td>muestra 30</td></tr></tbody></table></div><p>La misma callback puede escribirse anónima, sin nombre:</p><Code>{`numeros.forEach(function (numero) {
  console.log(numero);
});`}</Code><p>Y después como función flecha:</p><Code>{`numeros.forEach((numero) => {
  console.log(numero);
});`}</Code></section>
  <Practice title="Micropráctica · Identifica el callback" solution={`const nombres = ["Ana", "Luis"];

function saludar(nombre) {
  console.log("Hola, " + nombre);
}

nombres.forEach(saludar);
// Hola, Ana
// Hola, Luis`}><p>Escribe una función tradicional <code>saludar</code> y entrégala a <code>forEach()</code> para mostrar dos nombres. Después transforma solo la callback en una función flecha.</p></Practice>
</>}

export function ArrayMethodsTransitionLesson(){return <>
  <p className="jsm-subtitle">El mismo array puede necesitar una acción, una búsqueda, una selección o una transformación.</p>
  <Goal>Elegir entre <code>forEach()</code>, <code>find()</code>, <code>filter()</code> y <code>map()</code> según el resultado que necesitas.</Goal>
  <section className="jsm-section"><h2>Un mismo array, cuatro preguntas</h2><Code>{`const notas = [4, 7, 3, 8];`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Necesidad</th><th>Método</th><th>La callback devuelve</th><th>Resultado</th><th>¿Modifica?</th></tr></thead><tbody><tr><td>Mostrar cada nota</td><td><code>forEach()</code></td><td>No necesitas devolver</td><td><code>undefined</code></td><td>No</td></tr><tr><td>Encontrar la primera aprobada</td><td><code>find()</code></td><td><code>true</code>/<code>false</code></td><td><code>7</code></td><td>No</td></tr><tr><td>Conservar todas las aprobadas</td><td><code>filter()</code></td><td><code>true</code> conserva</td><td><code>[7, 8]</code></td><td>No</td></tr><tr><td>Crear una lista con un punto extra</td><td><code>map()</code></td><td>Nuevo valor</td><td><code>[5, 8, 4, 9]</code></td><td>No</td></tr></tbody></table></div><Code>{`notas.forEach((nota) => console.log(nota));

const primera = notas.find((nota) => nota >= 5);
const aprobadas = notas.filter((nota) => nota >= 5);
const conPunto = notas.map((nota) => nota + 1);`}</Code><p>Los cuatro métodos reciben una función. <code>forEach()</code> realiza una acción; <code>find()</code> se detiene en la primera coincidencia; <code>filter()</code> conserva varias; <code>map()</code> produce un valor nuevo por posición. El array <code>notas</code> continúa siendo <code>[4, 7, 3, 8]</code>.</p></section>
  <Practice title="Micropráctica · Elige el método" solution={`const precios = [8, 15, 22, 5];

const primeroMayorDeDiez = precios.find((precio) => precio > 10);
const todosMayoresDeDiez = precios.filter((precio) => precio > 10);
const preciosConIva = precios.map((precio) => precio * 1.21);

console.log(primeroMayorDeDiez); // 15
console.log(todosMayoresDeDiez); // [15, 22]`}><p>Decide qué método usarías para obtener el primer precio mayor de 10, todos los precios mayores de 10 y una lista con IVA. Escribe las tres expresiones.</p></Practice>
</>}

export function ReduceLesson(){return <>
  <p className="jsm-subtitle"><code>reduce()</code> convierte muchas posiciones en un único resultado siguiendo la lógica de un acumulador.</p>
  <Goal>Pasar de un acumulador en un bucle a una callback de <code>reduce()</code>, entendiendo el valor inicial y el retorno de cada vuelta.</Goal>
  <section className="jsm-section"><h2>El problema: sumar precios</h2><Code>{`const precios = [10, 20, 5];
let total = 0;

for (const precio of precios) {
  total = total + precio;
}

console.log(total); // 35`}</Code><p><code>total</code> es el acumulador: conserva el resultado anterior. <code>precio</code> es el elemento actual. <code>reduce()</code> expresa la misma colaboración mediante una función.</p><h3>Función tradicional con nombre</h3><Code>{`function sumar(acumulador, precio) {
  return acumulador + precio;
}

const total = precios.reduce(sumar, 0);`}</Code><p>El <code>0</code> es el valor inicial. En cada vuelta, <code>reduce()</code> pasa el acumulador y el elemento actual a la función. El valor que devuelve la función se convierte en el acumulador de la vuelta siguiente.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>Acumulador antes</th><th>Precio actual</th><th>return</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>10</td><td>10</td></tr><tr><td>2</td><td>10</td><td>20</td><td>30</td></tr><tr><td>3</td><td>30</td><td>5</td><td>35</td></tr></tbody></table></div><h3>La misma lógica, paso a paso</h3><Code>{`precios.reduce(function (acumulador, precio) {
  return acumulador + precio;
}, 0);

precios.reduce((acumulador, precio) => {
  return acumulador + precio;
}, 0);

precios.reduce((acumulador, precio) => acumulador + precio, 0);`}</Code><p>Primero quitamos el nombre y usamos una función anónima. Después cambiamos a flecha con llaves y <code>return</code>. Al final abreviamos una única expresión. Las tres versiones devuelven <code>35</code> y no modifican <code>precios</code>.</p><p>Indicar el valor inicial es recomendable: hace explícito el punto de partida y permite que un array vacío produzca <code>0</code> en este ejemplo, en vez de intentar usar una posición inexistente.</p></section>
  <Practice title="Micropráctica · Suma con reduce()" solution={`const puntos = [3, 6, 9];

const total = puntos.reduce((acumulador, punto) => {
  return acumulador + punto;
}, 0);

console.log(total); // 18`}><p>Suma <code>[3, 6, 9]</code> con <code>reduce()</code>, usando primero una función con llaves y <code>return</code>. Después escribe su versión abreviada.</p></Practice>
</>}

export function SpliceLesson(){return <>
  <p className="jsm-subtitle"><code>splice()</code> permite eliminar elementos concretos utilizando su posición.</p>
  <Goal>Eliminar un elemento del centro de un array, comprender los argumentos de <code>splice()</code> y utilizar el array que devuelve.</Goal>
  <section className="jsm-section"><h2>Eliminar una posición concreta</h2><Code>{`const productos = ["Cuaderno", "Lápiz", "Regla"];

// índice:          0          1        2
const eliminados = productos.splice(1, 1);

console.log(productos);   // ["Cuaderno", "Regla"]
console.log(eliminados);  // ["Lápiz"]`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Antes</th><th>Índice inicial</th><th>Cantidad</th><th>Después</th></tr></thead><tbody><tr><td>Cuaderno, Lápiz, Regla</td><td>1</td><td>1</td><td>Cuaderno, Regla</td></tr></tbody></table></div><p>El primer argumento indica desde qué índice empezar. El segundo indica cuántos elementos eliminar. <code>splice()</code> modifica el array original y devuelve otro array con los elementos retirados. <code>pop()</code> solo elimina el último; <code>splice()</code> puede eliminar uno situado en medio.</p></section>
  <Practice title="Micropráctica · Quita una tarea" solution={`const tareas = ["Estudiar", "Practicar", "Descansar"];
const eliminadas = tareas.splice(1, 1);

console.log(tareas); // ["Estudiar", "Descansar"]
console.log(eliminadas); // ["Practicar"]`}><p>Elimina «Practicar» usando su índice y guarda el resultado de <code>splice()</code>. Comprueba ambos arrays.</p></Practice>
  <section className="jsm-section"><h2>Conexión con la minitienda</h2><p>En el carrito, una futura ampliación podría eliminar un producto mediante su índice: <code>carrito.splice(indice, 1)</code> y después volver a mostrar el carrito. La práctica actual no incorpora todavía esa ampliación.</p></section>
</>}
