const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;

export default function LogicalOperatorsLesson(){return <>
  <p className="jsm-subtitle">Los operadores lógicos unen preguntas que ya sabemos responder con <code>true</code> o <code>false</code>.</p>
  <section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>Combinar comparaciones con «y», «o» y «no», y leer el resultado de una condición compuesta.</p></section>
  <section className="jsm-section"><h2>De una pregunta a varias</h2><p>Una comparación responde una sola pregunta: <code>edad &gt;= 18</code>. Muchas situaciones reales necesitan varias: «¿tiene dinero <strong>y</strong> la tienda está abierta?» o «¿es fin de semana <strong>o</strong> estoy de vacaciones?».</p><p>Los operadores lógicos son las palabras <strong>Y</strong>, <strong>O</strong> y <strong>NO</strong> escritas en JavaScript.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Operador</th><th>Nombre</th><th>Qué hace</th><th>Cuándo da <code>true</code></th></tr></thead><tbody><tr><td><code>&amp;&amp;</code></td><td>AND · Y</td><td>Une dos condiciones</td><td>Cuando ambas son <code>true</code></td></tr><tr><td><code>||</code></td><td>OR · O</td><td>Ofrece dos posibilidades</td><td>Cuando al menos una es <code>true</code></td></tr><tr><td><code>!</code></td><td>NOT · NO</td><td>Invierte un booleano</td><td>Cuando el valor inicial era <code>false</code></td></tr></tbody></table></div></section>
  <section className="jsm-section"><h2><code>&amp;&amp;</code> · AND significa «Y»</h2><p>Con <code>&amp;&amp;</code> las dos condiciones deben cumplirse. Como necesitar una llave <strong>y</strong> un código para abrir una puerta.</p><Code>{`const tieneLlave = true;
const conoceElCodigo = true;

const puedeAbrir = tieneLlave && conoceElCodigo;
console.log(puedeAbrir); // true`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>A</th><th>B</th><th>A <code>&amp;&amp;</code> B</th></tr></thead><tbody><tr><td>true</td><td>true</td><td><strong>true</strong></td></tr><tr><td>true</td><td>false</td><td>false</td></tr><tr><td>false</td><td>true</td><td>false</td></tr><tr><td>false</td><td>false</td><td>false</td></tr></tbody></table></div><Code>{`const tieneDinero = true;
const tiendaAbierta = false;

const puedeComprar = tieneDinero && tiendaAbierta;
console.log(puedeComprar); // false`}</Code><section className="jsm-challenge"><h3>Micropráctica · Acceso a un curso</h3><p>Crea <code>estaRegistrado</code> y <code>haPagado</code>. Combínalos en <code>puedeAcceder</code>. Prueba los cuatro resultados posibles.</p></section></section>
  <section className="jsm-section"><h2><code>||</code> · OR significa «O»</h2><p>Con <code>||</code> basta una condición verdadera. Como poder pagar con efectivo <strong>o</strong> con tarjeta.</p><Code>{`const tieneEfectivo = false;
const tieneTarjeta = true;

const puedePagar = tieneEfectivo || tieneTarjeta;
console.log(puedePagar); // true`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>A</th><th>B</th><th>A <code>||</code> B</th></tr></thead><tbody><tr><td>true</td><td>true</td><td>true</td></tr><tr><td>true</td><td>false</td><td>true</td></tr><tr><td>false</td><td>true</td><td><strong>true</strong></td></tr><tr><td>false</td><td>false</td><td>false</td></tr></tbody></table></div><Code>{`const esFinDeSemana = false;
const estoyDeVacaciones = true;

const puedoDormirTarde = esFinDeSemana || estoyDeVacaciones;
console.log(puedoDormirTarde); // true`}</Code><section className="jsm-challenge"><h3>Micropráctica · Entrada al evento</h3><p>Crea <code>tieneEntrada</code> y <code>estaEnLaLista</code>. Usa <code>||</code> para saber si puede entrar. Cambia los valores y predice el resultado.</p></section></section>
  <section className="jsm-section"><h2><code>!</code> · NOT significa «NO»</h2><p>El signo <code>!</code> invierte un valor lógico. Si algo es <code>true</code>, al negarlo pasa a ser <code>false</code>.</p><Code>{`const estaLloviendo = false;
const puedoSalirSinParaguas = !estaLloviendo;

console.log(puedoSalirSinParaguas); // true`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>A</th><th><code>!A</code></th></tr></thead><tbody><tr><td>true</td><td>false</td></tr><tr><td>false</td><td><strong>true</strong></td></tr></tbody></table></div><section className="jsm-challenge"><h3>Micropráctica · Interruptor</h3><p>Crea <code>luzEncendida = true</code> y una variable <code>luzApagada</code> que guarde el valor contrario. Muéstralas en Console.</p></section></section>
  <section className="jsm-section"><h2>Ejemplos reales: combinar datos</h2><p>Primero guardamos o calculamos cada respuesta; después las unimos con un operador lógico.</p><Code>{`const edad = 20;
const tieneEntrada = true;
const esMayorDeEdad = edad >= 18;

const puedeEntrarAlConcierto = esMayorDeEdad && tieneEntrada;
console.log(puedeEntrarAlConcierto); // true

const stock = 0;
const hayStock = stock > 0;
const productoAgotado = !hayStock;
console.log(productoAgotado); // true`}</Code><section className="jsm-challenge"><h3>Micropráctica · Reserva de plaza</h3><p>Usa <code>const quedanPlazas = 3</code> y <code>const pagoRealizado = true</code>. Crea <code>hayPlazas</code> comparando si quedan más de 0 y después combina ambos valores en <code>reservaConfirmada</code>.</p><details><summary>Ver una posible solución</summary><Code>{`const quedanPlazas = 3;
const pagoRealizado = true;
const hayPlazas = quedanPlazas > 0;

const reservaConfirmada = hayPlazas && pagoRealizado;
console.log(reservaConfirmada); // true`}</Code></details></section></section>
  <section className="jsm-section"><h2>Prioridad: el orden importa</h2><p>JavaScript evalúa primero <code>!</code>, después <code>&amp;&amp;</code> y al final <code>||</code>. Si una expresión mezcla varios operadores, los paréntesis hacen explícita la intención.</p><Code>{`const tengoTiempo = true;
const tengoExamen = false;
const permisoPadres = false;

const resultado1 = tengoTiempo || tengoExamen && permisoPadres;
// Se lee como: tengoTiempo || (tengoExamen && permisoPadres)
// true || (false && false) → true

const resultado2 = (tengoTiempo || tengoExamen) && permisoPadres;
// (true || false) && false → false`}</Code><aside className="jsm-callout"><h3>Una buena costumbre</h3><p>Aunque conozcas la prioridad, usa paréntesis cuando combinas <code>&amp;&amp;</code> y <code>||</code>. Así otra persona —o tú dentro de unos días— entiende la lógica de un vistazo.</p></aside><section className="jsm-challenge"><h3>Micropráctica · Predice antes de ejecutar</h3><p>Con <code>const a = false</code>, <code>const b = true</code> y <code>const c = true</code>, predice <code>a || b &amp;&amp; c</code>. Después compara con <code>(a || b) &amp;&amp; c</code>.</p></section></section>
  <section className="jsm-section jsm-challenge"><h2>Actividad final · Estado de una tienda</h2><p>Construye un HTML pequeño que muestre si una tienda puede aceptar un pedido. Por ahora no mostramos mensajes distintos: solo el booleano resultante.</p><h3>HTML</h3><Code>{`<main>
  <h1>Estado del pedido</h1>
  <p>¿Se puede aceptar el pedido? <strong id="resultado"></strong></p>
</main>`}</Code><h3>JavaScript</h3><ol><li>Crea <code>const hayStock = true</code> y <code>const tiendaAbierta = true</code>.</li><li>Combínalos con <code>&amp;&amp;</code> en <code>puedeAceptarPedido</code>.</li><li>Muestra el resultado en el elemento con id <code>resultado</code>.</li><li>Cambia uno de los valores a <code>false</code> y observa qué ocurre.</li></ol><details><summary>Ver una posible solución</summary><Code>{`const hayStock = true;
const tiendaAbierta = true;
const puedeAceptarPedido = hayStock && tiendaAbierta;

document.getElementById("resultado").textContent = puedeAceptarPedido;`}</Code></details><p><strong>Reto:</strong> añade <code>tieneReservaPrevia</code> y permite el pedido si la tienda está abierta <em>o</em> existe una reserva previa.</p></section>
  <section className="jsm-section jsm-recap"><h2>Referencia rápida</h2><Code>{`condicionA && condicionB  // las dos deben ser true
condicionA || condicionB  // al menos una debe ser true
!condicionA               // invierte true / false`}</Code><p>Los operadores lógicos combinan booleanos. En el siguiente bloque usaremos ese resultado para decidir qué instrucciones debe ejecutar la página.</p></section>
  <section className="jsm-next"><h2>Lo siguiente</h2><p>Ya sabemos formular preguntas simples y combinadas. Ahora aprenderás a usar su resultado para tomar decisiones con <code>if</code>.</p></section>
</>}
