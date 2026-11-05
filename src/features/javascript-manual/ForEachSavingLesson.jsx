const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
function Activity({title,children,hint,solution,why}){return <section className="jsm-section jsm-challenge"><h2>{title}</h2>{children}<details><summary>Pista</summary><p>{hint}</p></details><details><summary>Ver solución explicada</summary><Code>{solution}</Code><p><strong>Por qué funciona:</strong> {why}</p></details></section>}

export default function ForEachSavingLesson(){return <><p className="jsm-subtitle"><code>forEach()</code> ejecuta una acción por cada elemento; lo que ocurra con los datos depende de las instrucciones que escribamos.</p><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>Calcular, mostrar, modificar o guardar resultados de un recorrido con <code>forEach()</code>.</p></section><section className="jsm-section"><h2>Una acción por cada precio</h2><p>Una tienda quiere calcular y mostrar el IVA de todos sus productos.</p><Code>{`let precios = [10, 20, 50];

precios.forEach(function(precio) {
  let precioConIVA = precio * 1.21;
  console.log(precioConIVA);
});`}</Code><p>La función se ejecuta tres veces. <code>precio</code> recibe un valor diferente en cada vuelta. Puede llamarse callback porque <code>forEach()</code> la ejecuta por nosotros; lo importante es que realiza una acción por cada elemento.</p></section><Activity title="Actividad · Numerar una lista" hint="forEach entrega primero el valor y después el índice. Suma 1 solo para mostrar el número al usuario." solution={`const tareas = ["Estudiar", "Practicar", "Descansar"];

tareas.forEach(function (tarea, indice) {
  console.log((indice + 1) + ". " + tarea);
});`} why="La lista no cambia: forEach solo ejecuta console.log una vez por tarea."><p><strong>Enunciado:</strong> muestra cada tarea precedida por su número de posición visible.</p></Activity><Activity title="Actividad · Aplicar un descuento a los productos" hint="Aplicar un descuento del 10 % equivale a multiplicar por 0.90." solution={`let precios = [10, 20, 50];

precios.forEach(function(precio) {
  let precioConDescuento = precio * 0.90;
  console.log(precioConDescuento);
});

console.log(precios);`} why="forEach recorre los tres elementos y precio recibe un valor diferente cada vez. Calculamos y mostramos el descuento, pero no asignamos los resultados a ninguna posición del array; por eso precios conserva [10, 20, 50]. forEach no modifica el original automáticamente, aunque una función podría hacerlo expresamente."><p><strong>Enunciado:</strong> una tienda tiene precios de 10 €, 20 € y 50 €. Utiliza <code>forEach()</code> para calcular un descuento del 10 % y mostrar los nuevos importes. Después, muestra el array original. ¿Han cambiado sus valores?</p><Code>{`let precios = [10, 20, 50];`}</Code><p><strong>Resultado esperado:</strong> 9 €, 18 € y 45 €; el array original sigue siendo <code>[10, 20, 50]</code>.</p></Activity><section className="jsm-section"><h2>¿Por qué no cambian los precios?</h2><p>Calcular y mostrar un valor no significa guardarlo. <code>precioRebajado</code> existe en cada ejecución, pero no sustituye ningún elemento de <code>precios</code>.</p></section><section className="jsm-section"><h2>Modificar el array original</h2><Code>{`let precios = [10, 20, 50];

precios.forEach(function(precio, indice) {
  precios[indice] = precio * 0.90;
});

console.log(precios);
// [9, 18, 45]`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Índice</th><th>Precio original</th><th>Nuevo precio</th></tr></thead><tbody><tr><td>0</td><td>10</td><td>9</td></tr><tr><td>1</td><td>20</td><td>18</td></tr><tr><td>2</td><td>50</td><td>45</td></tr></tbody></table></div><p><code>precio</code> recibe el valor, <code>indice</code> su posición y <code>precios[indice]</code> el elemento original. La asignación guarda el nuevo valor. Es la misma idea de modificar mediante índice que ya conoces con <code>for</code>.</p></section><section className="jsm-section"><h2>Conservar los originales y guardar otros resultados</h2><Code>{`let precios = [10, 20, 50];
let preciosConDescuento = [];

precios.forEach(function(precio) {
  let precioRebajado = precio * 0.90;
  preciosConDescuento.push(precioRebajado);
});

console.log(precios);              // [10, 20, 50]
console.log(preciosConDescuento);  // [9, 18, 45]`}</Code><ol><li>Creamos <code>preciosConDescuento</code> vacío.</li><li>forEach recorre los originales.</li><li>Calculamos el nuevo precio.</li><li><code>push()</code> añade cada resultado al segundo array.</li></ol><div className="jsm-flow"><span>A · console.log<br/>original [10, 20, 50]</span><b>→</b><span>9, 18, 45 mostrados</span></div><div className="jsm-flow"><span>B · índice<br/>[10, 20, 50]</span><b>→</b><span>original [9, 18, 45]</span></div><div className="jsm-flow"><span>C · push<br/>original [10, 20, 50]</span><b>→</b><span>nuevo [9, 18, 45]</span></div></section><section className="jsm-section"><h2>La siguiente herramienta</h2><p>Si queremos crear un nuevo array, ¿debemos preparar siempre una lista vacía y llamar a <code>push()</code>? <code>map()</code> automatiza esa operación.</p><Code>{`let precios = [10, 20, 50];

let preciosConDescuento = precios.map(function(precio) {
  return precio * 0.90;
});`}</Code><p>map recorre los elementos, el <code>return</code> entrega cada valor transformado y el método construye el nuevo array. Lo veremos paso a paso en la siguiente lección.</p></section><section className="jsm-section"><h2>Resumen de decisiones</h2><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Necesidad</th><th>Solución</th><th>Resultado</th></tr></thead><tbody><tr><td>Calcular y mostrar</td><td>forEach + console.log</td><td>No guarda cálculos</td></tr><tr><td>Modificar original</td><td>forEach + índice y asignación</td><td>Cambia valores originales</td></tr><tr><td>Crear otro manualmente</td><td>forEach + push</td><td>Conserva el original y crea otro</td></tr><tr><td>Crear otro directamente</td><td>map()</td><td>Devuelve el array transformado</td></tr></tbody></table></div></section><Activity title="Actividad · Guardar precios con un aumento del 5 %" hint="Crea un array vacío; un aumento del 5 % se calcula multiplicando por 1.05; push guarda cada resultado." solution={`let precios = [20, 40, 60];
let preciosAumentados = [];

precios.forEach(function(precio) {
  let precioAumentado = precio * 1.05;
  preciosAumentados.push(precioAumentado);
});

console.log(precios);            // [20, 40, 60]
console.log(preciosAumentados);  // [21, 42, 63]`} why="Cada aumento se guarda con push() en el segundo array, sin asignar nada en precios."><p><strong>Enunciado:</strong> una tienda tiene <code>[20, 40, 60]</code>. Usa <code>forEach()</code> y <code>push()</code> para crear otro array con un aumento del 5 %, sin modificar los originales.</p></Activity></>}
