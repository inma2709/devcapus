const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
function Activity({title,children,hint,solution,why}){return <section className="jsm-section jsm-challenge"><h2>{title}</h2>{children}<details><summary>Pista</summary><p>{hint}</p></details><details><summary>Ver solución explicada</summary><Code>{solution}</Code><p><strong>Por qué funciona:</strong> {why}</p></details></section>}

export default function MapRebuiltLesson(){return <><p className="jsm-subtitle">¿Podemos crear una lista transformada sin preparar un array vacío y añadir manualmente cada resultado?</p><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>Usar <code>map()</code> para transformar una lista y comprender cómo los valores de <code>return</code> construyen otro array.</p></section><section className="jsm-section"><h2>Lo que ya sabemos hacer</h2><p>Con <code>forEach()</code> y <code>push()</code> ya podemos crear los precios rebajados. Esta solución funciona perfectamente.</p><Code>{`let precios = [10, 20, 50];
let preciosConDescuento = [];

precios.forEach(function(precio) {
  let precioRebajado = precio * 0.90;
  preciosConDescuento.push(precioRebajado);
});

console.log(preciosConDescuento);
// [9, 18, 45]`}</Code><p>Sabemos recorrer precios, calcular el descuento, crear un array vacío y usar <code>push()</code> para guardar cada resultado.</p><div className="jsm-flow"><span>¿Y si JavaScript pudiera crear el nuevo array por nosotros?</span></div><p>Queremos el mismo resultado sin escribir <code>let preciosConDescuento = []</code> ni llamar a <code>push()</code> en cada vuelta.</p></section><section className="jsm-section"><h2><code>map()</code> construye el nuevo array</h2><Code>{`let precios = [10, 20, 50];

let preciosConDescuento = precios.map(function(precio) {
  return precio * 0.90;
});

console.log(preciosConDescuento);
// [9, 18, 45]`}</Code><p><code>map()</code> recorre los tres elementos y ejecuta la función que recibe. La función calcula un valor y lo entrega con <code>return</code>. <code>map()</code> recoge esos valores y crea automáticamente el nuevo array. No tenemos que preparar una lista vacía ni usar <code>push()</code>.</p></section><section className="jsm-section"><h2>Dos formas correctas de llegar al mismo resultado</h2><div className="jsm-grid"><section><h3>Con <code>forEach()</code> y <code>push()</code></h3><Code>{`let preciosConDescuento = [];

precios.forEach(function(precio) {
  let precioRebajado = precio * 0.90;
  preciosConDescuento.push(precioRebajado);
});`}</Code></section><section><h3>Con <code>map()</code></h3><Code>{`let preciosConDescuento = precios.map(function(precio) {
  return precio * 0.90;
});`}</Code></section></div><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Con forEach()</th><th>Con map()</th></tr></thead><tbody><tr><td>Creamos el array vacío.</td><td>map() crea el nuevo array.</td></tr><tr><td>Calculamos cada descuento.</td><td>Calculamos cada descuento.</td></tr><tr><td>Guardamos cada resultado con push().</td><td>Devolvemos cada resultado con return.</td></tr><tr><td>Obtenemos [9, 18, 45].</td><td>Obtenemos [9, 18, 45].</td></tr></tbody></table></div><p>Ambos procedimientos son correctos. <code>map()</code> no hace algo imposible con <code>forEach()</code>: expresa de forma más directa que queremos transformar una lista en otra.</p></section><section className="jsm-section"><h2>Qué hace <code>return</code> en cada vuelta</h2><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>Precio recibido</th><th>Valor devuelto</th><th>Nuevo array</th></tr></thead><tbody><tr><td>1</td><td>10</td><td>9</td><td>[9]</td></tr><tr><td>2</td><td>20</td><td>18</td><td>[9, 18]</td></tr><tr><td>3</td><td>50</td><td>45</td><td>[9, 18, 45]</td></tr></tbody></table></div><p>En la primera ejecución <code>precio</code> vale 10; <code>return</code> entrega 9 y map lo coloca en la primera posición. En las dos siguientes vueltas ocurre lo mismo con 20 y 50. El original se conserva y el nuevo array mantiene una posición por cada precio.</p><Code>{`let resultado = precios.map(function(precio) {
  console.log(precio * 0.90);
});

console.log(resultado);
// [undefined, undefined, undefined]`}</Code><p><code>console.log()</code> muestra información, pero no devuelve el valor que map necesita guardar. Sin <code>return</code>, cada posición del resultado recibe <code>undefined</code>.</p><div className="jsm-flow"><span>Original [10, 20, 50]</span><b>→ cada precio × 0.90 →</b><span>return: 9 → 18 → 45</span><b>→</b><span>Nuevo [9, 18, 45]</span></div></section><section className="jsm-section"><h2>¿Cuándo elegir <code>map()</code>?</h2><p>Úsalo cuando quieras obtener una nueva lista transformada: precios con IVA, descuentos, temperaturas en otra unidad o importes con una subida. No modifica automáticamente el original, aunque una función podría programar cambios expresos.</p><h3>Otro ejemplo: temperaturas</h3><Code>{`let temperaturasCelsius = [0, 20, 30];

let temperaturasFahrenheit = temperaturasCelsius.map(function(temperatura) {
  return temperatura * 1.8 + 32;
});

console.log(temperaturasFahrenheit);
// [32, 68, 86]`}</Code><p>Conservamos las mediciones en Celsius y obtenemos otra lista para quien necesita Fahrenheit.</p></section><Activity title="Actividad 1 · Aplicar un descuento diferente" hint="Un descuento del 15 % deja el 85 % del precio: devuelve precio * 0.85." solution={`let precios = [20, 40, 60];

let preciosRebajados = precios.map(function(precio) {
  return precio * 0.85;
});

console.log(precios);           // [20, 40, 60]
console.log(preciosRebajados);  // [17, 34, 51]`} why="map devuelve un valor rebajado por cada precio y construye otro array sin cambiar el original."><p><strong>Enunciado:</strong> crea otro array con los precios rebajados un 15 %, sin modificar los originales.</p></Activity><Activity title="Actividad 2 · Elegir entre forEach() y map()" hint="Pregúntate si necesitas realizar una acción o guardar una lista nueva." solution={`// Situación A: forEach(), porque queremos mostrar cada precio con IVA.
precios.forEach(function(precio) {
  console.log(precio * 1.21);
});

// Situación B: map(), porque queremos otro array con esos precios.
let preciosConIVA = precios.map(function(precio) {
  return precio * 1.21;
});`} why="Ambas tareas admiten varias implementaciones, pero forEach expresa una acción y map expresa directamente la intención de obtener una lista transformada."><p><strong>Situación A:</strong> queremos mostrar en consola el precio con IVA de todos los productos. <strong>Situación B:</strong> queremos crear otro array con esos precios. Indica qué herramienta elegirías y por qué.</p></Activity><section className="jsm-next"><h2>Lo siguiente</h2><p>Con forEach() hemos aprendido a ejecutar acciones sobre los elementos. Con map() hemos aprendido a convertir una lista en otra. Pero ¿qué ocurre si no queremos transformar todos los elementos, sino quedarnos solamente con algunos? Lo veremos con filter(), find() e includes().</p></section></>}
