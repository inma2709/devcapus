const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;

export default function ArithmeticLesson(){return <>
  <p className="jsm-subtitle">Los operadores permiten trabajar con los valores que guardamos en variables: calcular, cambiar un dato o comprobar algo.</p>
  <section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>Hacer cálculos básicos con variables y actualizar un valor con operadores de asignación.</p></section>
  <section className="jsm-section"><h2>¿Qué son los operadores?</h2><p>Los operadores son símbolos especiales que indican a JavaScript qué debe hacer con unos valores. Si las variables son cajas que guardan datos, los operadores son las herramientas para trabajar con esas cajas.</p><ul><li><strong>Sumar</strong> dos valores.</li><li><strong>Restar</strong>, multiplicar o dividir.</li><li><strong>Cambiar</strong> el valor guardado en una variable.</li><li><strong>Comparar</strong> o verificar algo; lo estudiaremos en las próximas lecciones.</li></ul></section>
  <section className="jsm-section"><h2>Vídeo · Operadores en JavaScript</h2><div className="jsm-video"><iframe src="https://www.youtube.com/embed/A9TBH7tKwVk" title="Operadores en JavaScript" loading="lazy" allowFullScreen></iframe></div><p>Después de verlo, vuelve aquí y ejecuta cada ejemplo en Console. Cambia los números para comprobar cómo afecta cada operador.</p></section>
  <section className="jsm-section"><h2>Operadores aritméticos</h2><p>Son las operaciones matemáticas básicas. Funcionan como una calculadora, pero los resultados se pueden guardar en variables.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Operador</th><th>Nombre</th><th>Qué hace</th><th>Ejemplo</th></tr></thead><tbody><tr><td><code>+</code></td><td>Suma</td><td>Suma dos números</td><td><code>5 + 3</code> → 8</td></tr><tr><td><code>-</code></td><td>Resta</td><td>Resta dos números</td><td><code>10 - 4</code> → 6</td></tr><tr><td><code>*</code></td><td>Multiplicación</td><td>Multiplica dos números</td><td><code>6 * 7</code> → 42</td></tr><tr><td><code>/</code></td><td>División</td><td>Divide dos números</td><td><code>15 / 3</code> → 5</td></tr><tr><td><code>%</code></td><td>Resto o módulo</td><td>Da el sobrante de una división</td><td><code>17 % 5</code> → 2</td></tr><tr><td><code>**</code></td><td>Potencia</td><td>Eleva un número a una potencia</td><td><code>2 ** 3</code> → 8</td></tr></tbody></table></div></section>
  <section className="jsm-section"><h2>Ejemplo paso a paso</h2><Code>{`// Operaciones básicas
const precio = 25;
const cantidad = 3;
const descuento = 5;

// Suma: solo para practicar el operador +
const suma = precio + descuento;
console.log("Suma:", suma); // 30

// Resta: aplicar descuento a un precio
const precioConDescuento = precio - descuento;
console.log("Precio con descuento:", precioConDescuento); // 20

// Multiplicación: total a pagar por tres unidades
const totalAPagar = precioConDescuento * cantidad;
console.log("Total a pagar:", totalAPagar); // 60

// División: repartir el total entre dos personas
const precioPorPersona = totalAPagar / 2;
console.log("Precio por persona:", precioPorPersona); // 30

// Módulo: obtenemos el resto
const numero = 17;
const resto = numero % 2;
console.log("17 dividido entre 2 da resto:", resto); // 1

// Potencia: área de un cuadrado
const lado = 4;
const area = lado ** 2;
console.log("Área del cuadrado:", area); // 16`}</Code><section className="jsm-challenge"><h3>Micropráctica · Cambia y predice</h3><ol><li>Cambia <code>cantidad</code> a 4. ¿Qué total esperas?</li><li>Cambia <code>lado</code> a 6 y calcula el área antes de ejecutar.</li><li>Crea <code>mitad</code> con la mitad de 18 usando <code>/</code>.</li></ol></section></section>
  <section className="jsm-section"><h2>El módulo <code>%</code> no es un porcentaje</h2><p>El módulo devuelve lo que sobra después de una división. Por ejemplo, <code>10 % 3</code> da 1 porque 10 dividido entre 3 deja 1 de resto.</p><Code>{`console.log(10 % 3); // 1
console.log(15 % 4); // 3
console.log(17 % 2); // 1`}</Code><aside className="jsm-callout"><h3>Para más adelante</h3><p>El resto permite saber si un número es par: si al dividir entre 2 el resto es 0, es par. Aprenderemos a comprobarlo con condiciones en otro bloque del manual.</p></aside></section>
  <section className="jsm-section"><h2>Operadores de asignación</h2><p>Sirven para calcular y guardar el resultado en la misma variable. Son una forma corta de escribir una reasignación.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Operador</th><th>Qué hace</th><th>Equivale a</th></tr></thead><tbody><tr><td><code>=</code></td><td>Guarda un valor</td><td><code>x = 5</code></td></tr><tr><td><code>+=</code></td><td>Suma y guarda</td><td><code>x = x + 3</code></td></tr><tr><td><code>-=</code></td><td>Resta y guarda</td><td><code>x = x - 2</code></td></tr><tr><td><code>*=</code></td><td>Multiplica y guarda</td><td><code>x = x * 4</code></td></tr><tr><td><code>/=</code></td><td>Divide y guarda</td><td><code>x = x / 2</code></td></tr></tbody></table></div></section>
  <section className="jsm-section"><h2>Ejemplo · Contador de puntos</h2><Code>{`// Simulamos un videojuego con puntos
let puntos = 0;
console.log("Puntos iniciales:", puntos); // 0

puntos += 10;
console.log("Después de enemigo pequeño:", puntos); // 10

puntos += 50;
console.log("Después del jefe:", puntos); // 60

puntos -= 15;
console.log("Después de perder vida:", puntos); // 45

puntos *= 2;
console.log("Con bonus doble:", puntos); // 90

puntos /= 3;
console.log("Puntos por persona:", puntos); // 30`}</Code><section className="jsm-challenge"><h3>Micropráctica · Tu marcador</h3><p>Crea <code>vidas</code> con el valor 3. Resta una vida con <code>-=</code>, añade dos con <code>+=</code> y muestra el resultado en Console. Después prueba con <code>puntos</code>: añade 25 y duplica el total.</p></section></section>
  <section className="jsm-recap"><h2>Recuerda</h2><p>Guarda cada resultado en una variable con un nombre claro. Utiliza <code>let</code> cuando ese valor vaya a cambiar, como los puntos de un juego, y <code>const</code> cuando no se reasigne.</p></section>
  <section className="jsm-next"><h2>Lo siguiente</h2><p>Ya puedes calcular. A continuación compararemos valores para responder preguntas como «¿es mayor?» o «¿son iguales?».</p></section>
</>}
