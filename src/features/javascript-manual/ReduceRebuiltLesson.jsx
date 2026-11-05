const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
function Activity({title,children,hint,solution,why}){return <section className="jsm-section jsm-challenge"><h2>{title}</h2>{children}<details><summary>Pista</summary><p>{hint}</p></details><details><summary>Ver solución explicada</summary><Code>{solution}</Code><p><strong>Por qué funciona:</strong> {why}</p></details></section>}
export default function ReduceRebuiltLesson(){return <><p className="jsm-subtitle">reduce() recorre una lista para obtener un resultado acumulado.</p><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>Relacionar un acumulador conocido con <code>reduce()</code> y seguir cómo <code>return</code> entrega el resultado de una vuelta a la siguiente.</p></section><section className="jsm-section"><h2>El total de un carrito: la solución conocida</h2><Code>{`const precios = [10, 20, 50];
let total = 0;

for (const precio of precios) {
  total = total + precio;
}

console.log(total); // 80`}</Code><p><code>total</code> empieza en 0, suma un precio en cada vuelta y conserva el resultado para la siguiente. La tabla resume ese acumulador.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>Total anterior</th><th>Precio</th><th>Total nuevo</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>10</td><td>10</td></tr><tr><td>2</td><td>10</td><td>20</td><td>30</td></tr><tr><td>3</td><td>30</td><td>50</td><td>80</td></tr></tbody></table></div></section><section className="jsm-section"><h2>¿Podemos indicar al array cómo acumular?</h2><p><code>reduce()</code> realiza el recorrido; nosotros proporcionamos una función que combina el acumulador con el siguiente elemento.</p><Code>{`const precios = [10, 20, 50];

const total = precios.reduce(function(acumulador, precio) {
  return acumulador + precio;
}, 0);

console.log(total); // 80`}</Code><p>Obtenemos exactamente el mismo resultado. No es siempre mejor ni necesariamente más fácil que un bucle: expresa directamente que queremos acumular los valores de una colección.</p><h3>Las partes de la instrucción</h3><ol><li><code>precios</code>: el array que recorremos.</li><li><code>.reduce()</code>: método que recorre y mantiene un resultado acumulado.</li><li><code>function(acumulador, precio)</code>: indica cómo actualizarlo.</li><li><code>acumulador</code>: resultado de la vuelta anterior.</li><li><code>precio</code>: elemento actual.</li><li><code>return</code>: entrega el nuevo acumulador.</li><li><code>0</code>: valor inicial; no es un índice ni pertenece al array. En una suma empezamos en 0 porque todavía no hemos sumado ningún importe.</li></ol></section><section className="jsm-section"><h2>Cómo viaja el acumulador</h2><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>Acumulador anterior</th><th>Precio</th><th>Operación</th><th>Return</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>10</td><td>0 + 10</td><td>10</td></tr><tr><td>2</td><td>10</td><td>20</td><td>10 + 20</td><td>30</td></tr><tr><td>3</td><td>30</td><td>50</td><td>30 + 50</td><td>80</td></tr></tbody></table></div><div className="jsm-flow"><span>0 + 10 = 10<br/>return 10</span><b>→ acumulador</b><span>10 + 20 = 30<br/>return 30</span><b>→ acumulador</b><span>30 + 50 = 80<br/>return 80</span><b>→</b><span>reduce devuelve 80</span></div><p>La función calcula y <code>return</code> entrega el resultado a reduce. Reduce lo conserva y lo entrega como <code>acumulador</code> en la vuelta siguiente. Por eso no escribimos <code>acumulador = ...</code>: el valor devuelto ocupa ese papel.</p><Code>{`const total = precios.reduce(function(acumulador, precio) {
  console.log(acumulador + precio);
});
// Error: no hay return; la siguiente vuelta recibe undefined.`}</Code><p>Un error frecuente es mostrar el cálculo con <code>console.log()</code> sin devolverlo. Si no devolvemos el nuevo acumulador, reduce recibe <code>undefined</code> en la siguiente ejecución.</p></section><section className="jsm-section"><h2>reduce() frente a otros métodos</h2><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Método</th><th>Necesidad con precios</th><th>Resultado</th></tr></thead><tbody><tr><td>map()</td><td>Aplicar IVA a todos</td><td>Array nuevo</td></tr><tr><td>filter()</td><td>Quedarnos con precios altos</td><td>Array nuevo</td></tr><tr><td>find()</td><td>Primer precio alto</td><td>Un elemento</td></tr><tr><td>reduce()</td><td>Calcular el total</td><td>Un resultado acumulado</td></tr></tbody></table></div><p>reduce no está limitado a números, pero aquí nos centramos en acumulaciones numéricas para comprenderlo bien.</p></section><section className="jsm-section"><h2>Otro acumulador: contar productos caros</h2><Code>{`const precios = [10, 25, 50, 15, 40];

const cantidad = precios.reduce(function(contador, precio) {
  if (precio > 20) {
    return contador + 1;
  }

  return contador;
}, 0);

console.log(cantidad); // 3`}</Code><p>Ahora el acumulador es una cantidad de productos, no dinero. Si un precio supera 20, aumentamos el contador; si no, devolvemos el contador anterior. También podríamos usar <code>filter()</code> y <code>length</code>; reduce no es obligatorio.</p></section><Activity title="Actividad 1 · Calcular el total del carrito" hint="El valor inicial es 0 y return debe sumar el acumulador con el precio actual." solution={`const carrito = [12, 8, 5];

const total = carrito.reduce(function(acumulador, precio) {
  return acumulador + precio;
}, 0);

console.log(total); // 25`} why="Cada return se convierte en el acumulador de la siguiente vuelta; el último es el total."><p><strong>Enunciado:</strong> calcula el total de <code>[12, 8, 5]</code> mediante reduce.</p></Activity><Activity title="Actividad 2 · Total con descuento" hint="El acumulador suma el precio actual después de multiplicarlo por 0.90." solution={`const precios = [20, 40, 60];

const total = precios.reduce(function(acumulador, precio) {
  return acumulador + precio * 0.90;
}, 0);

console.log(total); // 108`} why="En cada vuelta se descuenta el 10 % al elemento actual y se suma el resultado al acumulador."><p><strong>Enunciado:</strong> calcula el total de los precios después de aplicar un 10 % de descuento. El resultado debe ser 108.</p></Activity><Activity title="Actividad 3 · Elegir la herramienta" hint="Piensa si el resultado esperado es una lista nueva o un único importe." solution={`// A: map(), porque necesitamos otro array con los precios rebajados.
// B: reduce(), porque necesitamos un único total acumulado.`} why="map transforma cada elemento y devuelve una lista; reduce combina los elementos para devolver un resultado."><p><strong>A:</strong> obtener un nuevo array con precios rebajados. <strong>B:</strong> obtener el importe total de una compra. Decide entre map y reduce y justifica.</p></Activity><section className="jsm-section"><h2>Bucle y reduce: dos opciones</h2><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Bucle con acumulador</th><th>reduce()</th></tr></thead><tbody><tr><td>Declaramos una variable acumuladora.</td><td>Indicamos el valor inicial.</td></tr><tr><td>Programamos el recorrido.</td><td>reduce realiza el recorrido.</td></tr><tr><td>Actualizamos el acumulador.</td><td>Devolvemos el nuevo acumulador.</td></tr><tr><td>Consultamos la variable al terminar.</td><td>reduce devuelve el resultado.</td></tr></tbody></table></div><p><strong>reduce() no es imprescindible para calcular un total. Es una herramienta que expresa directamente la intención de acumular valores de una colección.</strong></p></section></>}
