import { useState } from 'react';

const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Goal=({children})=><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>{children}</p></section>;
const Micro=({title,children,hint,solution,reasoning})=><section className="jsm-section jsm-challenge"><h3>{title}</h3>{children}{hint&&<details><summary>Necesito una pista</summary><p>{hint}</p></details>}<details><summary>Ver solución</summary><Code>{solution}</Code><p><strong>Por qué funciona:</strong> {reasoning||'La solución mantiene un inicio, una condición que puede terminar y una actualización o decisión coherente con el resultado pedido. Ejecútala y compara Console con el criterio de comprobación.'}</p></details></section>;
const Next=({children})=><section className="jsm-next"><h2>Lo siguiente</h2><p>{children}</p></section>;

function WhileStepper(){const [step,setStep]=useState(0);const turns=[['Preparado','contador = 1','Aún no se ha comprobado la condición',''],['Vuelta 1','contador = 1','1 <= 3 → true','Console: 1'],['Vuelta 2','contador = 2','2 <= 3 → true','Console: 1, 2'],['Vuelta 3','contador = 3','3 <= 3 → true','Console: 1, 2, 3'],['Final','contador = 4','4 <= 3 → false','El bucle termina']];const current=turns[step];return <section className="jsm-section"><h3>Visualización paso a paso</h3><p>Esta simulación no ejecuta código del alumno: solo representa las vueltas del ejemplo.</p><div className="jsm-grid"><section><strong>{current[0]}</strong><p>{current[1]}</p></section><section><strong>Condición</strong><p>{current[2]}</p></section><section><strong>Console</strong><p>{current[3]||'Sin salida todavía'}</p></section></div><button type="button" className="jsm-primary" onClick={()=>setStep(Math.min(step+1,turns.length-1))} disabled={step===turns.length-1}>Siguiente paso</button>{' '}<button type="button" onClick={()=>setStep(0)}>Reiniciar</button></section>}

export function WhyLoopsLesson(){return <>
  <p className="jsm-subtitle">Un bucle evita escribir la misma instrucción una y otra vez cuando necesitamos repetir una tarea.</p><Goal>Explicar qué problema resuelve un bucle y reconocer una iteración, una condición y un final.</Goal>
  <figure className="jsm-infographic"><img src="/recursos/infografia-bucles-javascript.png" alt="Infografía de bucles en JavaScript que compara for, while y do while, su sintaxis, cuándo utilizarlos y errores frecuentes."/><figcaption>Guía visual de consulta: úsala para relacionar el inicio, la condición y la actualización antes de practicar cada tipo de bucle.</figcaption></figure>
  <section className="jsm-section"><h2>¿Por qué repetir instrucciones?</h2><p>Una tienda prepara pedidos. Sin un bucle, escribiríamos una línea por cada pedido:</p><Code>{`console.log("Preparando pedido 1");
console.log("Preparando pedido 2");
console.log("Preparando pedido 3");
console.log("Preparando pedido 4");
console.log("Preparando pedido 5");`}</Code><p>¿Y si fueran 100 pedidos? Un bucle permite ejecutar un bloque varias veces mientras se cumple una condición.</p><Code>{`for (let i = 1; i <= 5; i++) {
  console.log("Preparando pedido " + i);
}`}</Code><div className="jsm-flow"><span>empieza</span><b>→</b><span>comprueba</span><b>→</b><span>ejecuta una vuelta</span><b>→</b><span>actualiza</span><b>→</b><span>termina</span></div><p>Una <strong>iteración</strong> es una vuelta completa. Por ahora observa el patrón; en las siguientes lecciones lo separaremos con calma.</p></section>
  <Micro title="Micropráctica 1 · Predice" solution={'Preparando pedido 1\nPreparando pedido 2\nPreparando pedido 3'}><p><strong>Objetivo:</strong> contar vueltas. Con este código, ¿cuántas veces aparece el mensaje en Console?</p><Code>{`for (let i = 1; i <= 3; i++) {
  console.log("Preparando pedido " + i);
}`}</Code><p>Ejecuta el código y compara tu predicción.</p></Micro>
  <Micro title="Micropráctica 2 · Modifica" hint="El límite está en la condición: cambia solo el 5." solution={'for (let i = 1; i <= 3; i++) {\n  console.log("Preparando pedido " + i);\n}'}><p><strong>Objetivo:</strong> preparar solo tres pedidos. Parte del ejemplo principal y cambia el número 5 por 3. Deben aparecer los pedidos 1, 2 y 3.</p></Micro>
  <Micro title="Micropráctica 3 · Experimenta" hint="No cambies el contador. Solo cambia el texto entre comillas." solution={'for (let i = 1; i <= 5; i++) {\n  console.log("Alumno registrado " + i);\n}'}><p><strong>Objetivo:</strong> comprobar que la instrucción, no el bucle, puede cambiar. Sustituye «Preparando pedido» por «Alumno registrado» y observa las cinco líneas.</p></Micro>
  <Next>Primero aprenderás una forma de repetir que expresa claramente: «mientras ocurra esto».</Next>
</>}

export function WhileLoopLesson(){return <>
  <p className="jsm-subtitle"><code>while</code> repite un bloque mientras su condición sea verdadera.</p><Goal>Controlar un bucle <code>while</code> con un contador que cambia en cada vuelta.</Goal>
  <section className="jsm-section"><h2>Repetir mientras se cumpla una condición</h2><Code>{`let contador = 1;

while (contador <= 3) {
  console.log(contador);
  contador++;
}`}</Code><div className="jsm-grid"><section><h3>Antes</h3><p><code>let contador = 1</code> inicia el valor. En este patrón lo declaramos antes para conservarlo entre vueltas.</p></section><section><h3>Condición</h3><p><code>contador &lt;= 3</code> decide si debe continuar.</p></section><section><h3>Dentro</h3><p><code>console.log()</code> muestra el valor actual.</p></section><section><h3>Actualización</h3><p><code>contador++</code> equivale a <code>contador = contador + 1</code>.</p></section></div><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>Contador</th><th>Condición</th><th>Resultado</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>true</td><td>Muestra 1</td></tr><tr><td>2</td><td>2</td><td>true</td><td>Muestra 2</td></tr><tr><td>3</td><td>3</td><td>true</td><td>Muestra 3</td></tr><tr><td>Comprobación final</td><td>4</td><td>false</td><td>Termina</td></tr></tbody></table></div></section><WhileStepper />
  <Micro title="Micropráctica 1 · Predice" solution={'1\n2\n3\n4'}><p><strong>Objetivo:</strong> seguir el contador. ¿Qué números muestra un <code>while</code> que empieza en 1 y termina en 4? Escríbelos antes de ejecutarlo.</p><Code>{`let contador = 1;
while (contador <= 4) {
  console.log(contador);
  contador++;
}`}</Code></Micro>
  <Micro title="Micropráctica 2 · Modifica" hint="Cambia solo el valor inicial; la condición puede seguir igual." solution={'let contador = 2;\nwhile (contador <= 4) {\n  console.log(contador);\n  contador++;\n}'}><p><strong>Objetivo:</strong> empezar en 2. Cambia el valor inicial del ejemplo anterior. Deben aparecer 2, 3 y 4.</p></Micro>
  <Micro title="Micropráctica 3 · Completa" hint="La condición debe ser verdadera para 1, 2 y 3; usa contador <= 3." solution={'let contador = 1;\nwhile (contador <= 3) {\n  console.log(contador);\n  contador++;\n}'}><p><strong>Objetivo:</strong> completar la condición para mostrar del 1 al 3.</p><Code>{`let contador = 1;
while (________________) {
  console.log(contador);
  contador++;
}`}</Code></Micro>
  <Micro title="Micropráctica 4 · Construye" hint="Empieza en 5, continúa mientras contador sea mayor o igual que 1 y usa contador--." solution={'let contador = 5;\nwhile (contador >= 1) {\n  console.log(contador);\n  contador--;\n}'}><p><strong>Objetivo:</strong> mostrar 5, 4, 3, 2 y 1. Ahora <code>contador--</code> equivale a <code>contador = contador - 1</code>. Declara el contador, escribe el <code>while</code>, muestra el valor y redúcelo.</p></Micro>
  <Next>Cuando conocemos el contador y el patrón de repetición, <code>for</code> reúne esas tres partes en una línea.</Next>
</>}

export function ForLoopLesson(){return <>
  <p className="jsm-subtitle"><code>for</code> reúne inicio, condición y actualización para repetir con un contador.</p><Goal>Leer y escribir un bucle <code>for</code> sencillo con un contador.</Goal>
  <section className="jsm-section"><h2>Las tres partes de un <code>for</code></h2><Code>{`for (let i = 1; i <= 5; i++) {
  console.log(i);
}`}</Code><div className="jsm-grid"><section><h3>1 · Inicialización</h3><p><code>let i = 1</code><br/>¿Dónde comenzamos?</p></section><section><h3>2 · Condición</h3><p><code>i &lt;= 5</code><br/>¿Hasta cuándo continuamos?</p></section><section><h3>3 · Actualización</h3><p><code>i++</code><br/>¿Cómo cambia después de cada vuelta?</p></section></div><p>Las tres partes se separan con punto y coma. Usamos <code>let</code> porque <code>i</code> es el contador de este bloque: solo lo necesitamos dentro del bucle.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>i</th><th>Salida</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>2</td><td>2</td><td>2</td></tr><tr><td>3</td><td>3</td><td>3</td></tr><tr><td>4</td><td>4</td><td>4</td></tr><tr><td>5</td><td>5</td><td>5</td></tr></tbody></table></div><Code>{`for (let i = 6; i <= 5; i++) {
  console.log(i);
}
// No muestra nada: la condición ya es false al empezar.`}</Code></section>
  <Micro title="Micropráctica 1 · Predice" solution={'Se ejecuta 3 veces y muestra: 1, 2 y 3.'}><p><strong>Objetivo:</strong> identificar cuántas vueltas hay.</p><Code>{`for (let i = 1; i <= 3; i++) {
  console.log(i);
}`}</Code></Micro>
  <Micro title="Micropráctica 2 · Modifica" hint="La condición decide el último valor que aparece." solution={'for (let i = 1; i <= 7; i++) {\n  console.log(i);\n}'}><p><strong>Objetivo:</strong> mostrar del 1 al 7. Cambia el límite del ejemplo anterior y ejecuta.</p></Micro>
  <Micro title="Micropráctica 3 · Completa" hint="Para incluir el 5, usa <=." solution={'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}'}><p><strong>Objetivo:</strong> completar el operador para que aparezca también el 5.</p><Code>{`for (let i = 1; i ___ 5; i++) {
  console.log(i);
}`}</Code></Micro>
  <Micro title="Micropráctica 4 · Construye" hint="i += 2 equivale a i = i + 2. Empieza en 2 y continúa hasta 10." solution={'for (let i = 2; i <= 10; i += 2) {\n  console.log(i);\n}'}><p><strong>Objetivo:</strong> mostrar 2, 4, 6, 8 y 10. Escribe un <code>for</code> que empiece en 2 y avance de dos en dos.</p></Micro>
  <Next>Existe una variante que realiza una primera vuelta antes de comprobar si debe continuar: <code>do...while</code>.</Next>
</>}

export function CountersAccumulatorsLesson(){return <>
  <p className="jsm-subtitle">Una variable de control decide las vueltas; un contador registra cuántas veces ocurre algo; un acumulador conserva una cantidad que va cambiando.</p><Goal>Distinguir variable de control, contador y acumulador, y usarlos para resolver cálculos repetidos.</Goal>
  <section className="jsm-section"><h2>Un contador no tiene por qué contar todas las vueltas</h2><p>En este ejemplo <code>i</code> controla cinco vueltas. <code>aprobados</code> es otro contador: solo aumenta cuando se cumple la condición.</p><Code>{`let aprobados = 0;

for (let i = 1; i <= 5; i++) {
  const nota = i === 2 || i === 4 ? 4 : 7;

  if (nota >= 5) {
    aprobados++;
  }
}

console.log(aprobados); // 3`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>i controla</th><th>Nota</th><th>¿Aprueba?</th><th>aprobados</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>7</td><td>Sí</td><td>1</td></tr><tr><td>2</td><td>2</td><td>4</td><td>No</td><td>1</td></tr><tr><td>3</td><td>3</td><td>7</td><td>Sí</td><td>2</td></tr><tr><td>4</td><td>4</td><td>4</td><td>No</td><td>2</td></tr><tr><td>5</td><td>5</td><td>7</td><td>Sí</td><td>3</td></tr></tbody></table></div><p>La finalidad marca la diferencia: <code>i</code> organiza el bucle; <code>aprobados</code> registra un hecho concreto.</p></section>
  <section className="jsm-section"><h2>Un acumulador guarda un resultado progresivo</h2><Code>{`let total = 0;

for (let pedido = 1; pedido <= 3; pedido++) {
  const precio = pedido * 10;
  total += precio;
}

console.log(total); // 60`}</Code><p><code>total += precio</code> equivale a <code>total = total + precio</code>. Se declara antes y empieza en 0 porque todavía no hemos sumado ningún precio.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>Precio actual</th><th>Total anterior</th><th>Operación</th><th>Nuevo total</th></tr></thead><tbody><tr><td>1</td><td>10</td><td>0</td><td>0 + 10</td><td>10</td></tr><tr><td>2</td><td>20</td><td>10</td><td>10 + 20</td><td>30</td></tr><tr><td>3</td><td>30</td><td>30</td><td>30 + 30</td><td>60</td></tr></tbody></table></div></section>
  <section className="jsm-section"><h2>Usarlos juntos · Calcular una media</h2><Code>{`let suma = 0;
let cantidad = 0;

for (let nota = 6; nota <= 9; nota++) {
  suma += nota;
  cantidad++;
}

const media = suma / cantidad;
console.log(media); // 7.5`}</Code><p><code>suma</code> acumula 6 + 7 + 8 + 9. <code>cantidad</code> cuenta cuatro datos. Dividimos la suma entre la cantidad solo después de terminar las vueltas.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Nota</th><th>Suma anterior</th><th>Nueva suma</th><th>Cantidad</th></tr></thead><tbody><tr><td>6</td><td>0</td><td>6</td><td>1</td></tr><tr><td>7</td><td>6</td><td>13</td><td>2</td></tr><tr><td>8</td><td>13</td><td>21</td><td>3</td></tr><tr><td>9</td><td>21</td><td>30</td><td>4</td></tr></tbody></table></div><p>Más adelante, al estudiar arrays, podrás aplicar este mismo patrón a una lista de notas.</p></section>
  <Micro title="Micropráctica 1 · Predice un contador" hint="aprobados solo aumenta en las vueltas con nota 7." solution={'let aprobados = 0;\nfor (let i = 1; i <= 5; i++) {\n  const nota = i === 2 || i === 4 ? 4 : 7;\n  if (nota >= 5) aprobados++;\n}\nconsole.log(aprobados); // 3'} reasoning="El contador no copia i: aumenta tres veces porque solo tres notas cumplen la condición."><p><strong>Objetivo:</strong> distinguir el contador de la variable de control. Predice cuántos aprobados hay antes de ejecutar el primer ejemplo.</p></Micro>
  <Micro title="Micropráctica 2 · Completa un acumulador" hint="La operación debe conservar el total anterior y sumar el precio actual." solution={'let total = 0;\nfor (let pedido = 1; pedido <= 4; pedido++) {\n  total += 12;\n}\nconsole.log(total); // 48'} reasoning="Cada vuelta añade 12 al valor que ya tenía total; por eso el resultado final es 48 y no 12."><p><strong>Objetivo:</strong> calcular cuatro productos de 12 €. Completa la línea que se repite dentro del bucle.</p><Code>{`let total = 0;
for (let pedido = 1; pedido <= 4; pedido++) {
  total __________________;
}`}</Code></Micro>
  <Micro title="Micropráctica 3 · Detecta el reinicio" hint="Un acumulador debe vivir antes del bucle para no volver a cero en cada vuelta." solution={'let total = 0;\nfor (let i = 1; i <= 3; i++) {\n  total += 10;\n}\nconsole.log(total); // 30'} reasoning="Al declarar total fuera, el resultado de una vuelta se conserva para la siguiente."><p><strong>Objetivo:</strong> corregir un total que siempre acaba en 10. Explica por qué no debe declararse <code>total</code> dentro del bucle.</p><Code>{`for (let i = 1; i <= 3; i++) {
  let total = 0;
  total += 10;
}`}</Code></Micro>
  <Micro title="Micropráctica 4 · Construye una media" hint="Necesitas suma = 0 y cantidad = 0 antes del bucle. Después suma cada nota y aumenta cantidad." solution={'let suma = 0;\nlet cantidad = 0;\nfor (let nota = 6; nota <= 9; nota++) {\n  suma += nota;\n  cantidad++;\n}\nconst media = suma / cantidad;\nconsole.log(media); // 7.5'} reasoning="La suma reúne los valores y cantidad registra cuántos se han usado; por eso dividir 30 entre 4 produce 7.5."><p><strong>Objetivo:</strong> reconstruir el ejemplo de la media y comprobar que resulta 7.5.</p></Micro>
  <Next>Ya sabes guardar resultados entre vueltas. Ahora verás cómo salir o saltar una vuelta cuando una condición lo requiere.</Next>
</>}

export function DoWhileLesson(){return <>
  <p className="jsm-subtitle"><code>do...while</code> ejecuta primero y comprueba después.</p><Goal>Distinguir cuándo un <code>while</code> puede ejecutarse cero veces y cuándo un <code>do...while</code> se ejecuta al menos una vez.</Goal>
  <section className="jsm-section"><h2>Comprobar antes o después</h2><Code>{`let numero = 10;

while (numero < 5) {
  console.log(numero);
  numero++;
}
// No muestra nada.`}</Code><p>La condición ya es falsa, así que el cuerpo no se ejecuta.</p><Code>{`let numero = 10;

do {
  console.log(numero);
  numero++;
} while (numero < 5);
// Muestra 10 una vez.`}</Code><p>Al llegar a un <code>do...while</code>, su cuerpo se ejecuta al menos una vez. Después se comprueba la condición.</p><div className="jsm-flow"><span><code>while</code></span><b>→</b><span>comprueba</span><b>→</b><span>ejecuta si es true</span></div><div className="jsm-flow"><span><code>do...while</code></span><b>→</b><span>ejecuta</span><b>→</b><span>comprueba</span></div></section>
  <Micro title="Micropráctica 1 · Predice while" solution={'No muestra ningún número.'}><p><strong>Objetivo:</strong> decidir si se ejecuta. Con <code>numero = 10</code> y condición <code>numero &lt; 5</code>, ¿aparece algo?</p></Micro>
  <Micro title="Micropráctica 2 · Predice do...while" solution={'Muestra 10 una vez.'}><p><strong>Objetivo:</strong> comparar la variante anterior. Usa el segundo ejemplo y comprueba por qué sí aparece 10.</p></Micro>
  <Micro title="Micropráctica 3 · Modifica" hint="Empieza en 1 y continúa mientras numero sea menor que 3." solution={'let numero = 1;\ndo {\n  console.log(numero);\n  numero++;\n} while (numero <= 3);'}><p><strong>Objetivo:</strong> adaptar un <code>do...while</code> para mostrar 1, 2 y 3.</p></Micro>
  <Micro title="Micropráctica 4 · Completa" hint="La condición se escribe después de while y debe permitir las vueltas 1 y 2." solution={'let contador = 1;\ndo {\n  console.log(contador);\n  contador++;\n} while (contador <= 2);'}><p><strong>Objetivo:</strong> completar la condición para mostrar 1 y 2.</p><Code>{`let contador = 1;
do {
  console.log(contador);
  contador++;
} while (________________);`}</Code></Micro>
  <Next>Ya conoces las tres estructuras básicas. Ahora usarás variables que guardan resultados de varias vueltas: contadores y acumuladores.</Next>
</>}

export function BreakContinueLesson(){return <>
  <p className="jsm-subtitle"><code>break</code> y <code>continue</code> modifican el recorrido normal de un bucle: una detiene todas las vueltas; la otra omite solo una.</p><Goal>Decidir cuándo detener un bucle con <code>break</code> y cuándo saltar una iteración con <code>continue</code>, entendiendo qué ocurre con el contador.</Goal>
  <section className="jsm-section"><h2>¿Para qué sirven?</h2><p>Imagina que revisas una lista de productos. Si encuentras el producto buscado, ya no necesitas seguir: usarías <code>break</code>. Si un producto está agotado, lo ignoras y sigues revisando los demás: usarías <code>continue</code>.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Instrucción</th><th>Qué hace</th><th>Qué ocurre después</th></tr></thead><tbody><tr><td><code>break</code></td><td>Interrumpe el bucle completamente.</td><td>El programa continúa después del bucle.</td></tr><tr><td><code>continue</code></td><td>Omite el resto de la vuelta actual.</td><td>Pasa a la siguiente iteración, si corresponde.</td></tr></tbody></table></div><p><code>break</code> también se utiliza en <code>switch</code>; aquí estudiamos qué ocurre cuando aparece dentro de un bucle.</p></section>
  <section className="jsm-section"><h2>Comprende <code>break</code> paso a paso</h2><Code>{`for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

console.log("Búsqueda terminada");`}</Code><ol><li><code>let i = 1</code> indica el valor inicial.</li><li><code>i &lt;= 5</code> es la condición para continuar.</li><li><code>i++</code> actualiza el contador al final de una vuelta normal.</li><li><code>if (i === 3)</code> detecta el valor que detiene la búsqueda.</li><li><code>break</code> abandona inmediatamente el bucle.</li></ol><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Valor de i</th><th>¿Se ejecuta break?</th><th>¿Se muestra en Console?</th></tr></thead><tbody><tr><td>1</td><td>No</td><td>1</td></tr><tr><td>2</td><td>No</td><td>2</td></tr><tr><td>3</td><td>Sí</td><td>No</td></tr></tbody></table></div><p><strong>Resultado:</strong> 1, 2 y después «Búsqueda terminada». Cuando se ejecuta <code>break</code>, no se ejecuta el resto de esa iteración ni la actualización <code>i++</code> del <code>for</code>. El programa no termina: continúa tras el bucle.</p></section>
  <section className="jsm-section"><h2>Comprende <code>continue</code> paso a paso</h2><Code>{`for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}`}</Code><p>Las partes del <code>for</code> son las mismas. La diferencia está en que <code>continue</code> no termina el bucle: omite las instrucciones que quedan en esa vuelta.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Valor de i</th><th>¿Se ejecuta continue?</th><th>¿Se muestra en Console?</th></tr></thead><tbody><tr><td>1</td><td>No</td><td>1</td></tr><tr><td>2</td><td>No</td><td>2</td></tr><tr><td>3</td><td>Sí</td><td>No</td></tr><tr><td>4</td><td>No</td><td>4</td></tr><tr><td>5</td><td>No</td><td>5</td></tr></tbody></table></div><p><strong>Resultado:</strong> 1, 2, 4 y 5. En un <code>for</code>, tras <code>continue</code> JavaScript ejecuta la actualización <code>i++</code> y vuelve a comprobar la condición. Por eso llega a 4 y 5.</p></section>
  <section className="jsm-section"><h2>La diferencia visual</h2><div className="jsm-grid"><section><h3><code>break</code></h3><div className="jsm-flow"><span>Inicio de vuelta</span><b>→</b><span>condición especial</span><b>→</b><span><code>break</code></span><b>→</b><span>salida del bucle</span></div><Code>{`if (i === 3) {
  break;
}`}</Code></section><section><h3><code>continue</code></h3><div className="jsm-flow"><span>Inicio de vuelta</span><b>→</b><span>condición especial</span><b>→</b><span><code>continue</code></span><b>→</b><span>siguiente vuelta</span></div><Code>{`if (i === 3) {
  continue;
}`}</Code></section></div><p>En ambos ejemplos solo cambia una palabra. Con <code>break</code> la salida es 1, 2; con <code>continue</code> es 1, 2, 4, 5.</p></section>
  <section className="jsm-section"><h2>También con <code>while</code> y <code>do...while</code></h2><p>Ambas instrucciones pueden usarse en <code>for</code>, <code>while</code> y <code>do...while</code>. En un <code>while</code>, tras <code>continue</code> se vuelve directamente a comprobar la condición.</p><aside className="jsm-callout"><h3>Atención con continue en while</h3><p>No ejecutes este ejemplo incorrecto: cuando <code>contador</code> vale 3, <code>continue</code> impide llegar a <code>contador++</code>. La condición sigue siendo verdadera y el bucle puede ser infinito.</p><Code>{`let contador = 1;

while (contador <= 5) {
  if (contador === 3) {
    continue;
  }
  console.log(contador);
  contador++;
}`}</Code><p>Actualiza antes de poder continuar:</p><Code>{`let contador = 1;

while (contador <= 5) {
  if (contador === 3) {
    contador++;
    continue;
  }
  console.log(contador);
  contador++;
}`}</Code></aside><p>En un <code>do...while</code> ocurre lo mismo: <code>break</code> sale del bucle y <code>continue</code> pasa a la comprobación escrita después de <code>while (...)</code>.</p></section>
  <section className="jsm-section"><h2>Aplicaciones reales</h2><h3>Buscar un producto con break</h3><Code>{`const productos = ["Cuaderno", "Lápiz", "Mochila", "Regla"];

for (const producto of productos) {
  if (producto === "Mochila") {
    console.log("Producto encontrado: " + producto);
    break;
  }
}`}</Code><p>Tras encontrar «Mochila», seguir recorriendo la lista ya no aporta nada.</p><h3>Ignorar productos agotados con continue</h3><Code>{`const productos = [
  { nombre: "Cuaderno", disponible: true },
  { nombre: "Lápiz", disponible: false },
  { nombre: "Mochila", disponible: true }
];

for (const producto of productos) {
  if (!producto.disponible) {
    continue;
  }
  console.log(producto.nombre);
}
// Cuaderno, Mochila`}</Code><p><code>continue</code> evita mostrar el lápiz agotado, pero deja que el bucle revise los demás productos.</p></section>
  <Micro title="Práctica 1 · Predice break" hint="Cuando i llega a 3, break se ejecuta antes de console.log(i)." solution={'Muestra 1 y 2. Al llegar a 3, break abandona el bucle y no se muestra el 3 ni valores posteriores.'}><p><strong>Objetivo:</strong> interpretar el punto exacto en que termina un bucle.</p><p>Con el primer ejemplo de la lección, indica qué números aparecen y explica por qué.</p></Micro>
  <Micro title="Práctica 2 · Modifica el corte" hint="Cambia solo el valor de la comparación. El número que provoca break no se muestra." solution={'for (let i = 1; i <= 5; i++) {\n  if (i === 4) {\n    break;\n  }\n  console.log(i);\n}\n// 1, 2, 3'}><p><strong>Objetivo:</strong> detener el bucle antes del número 4. Cambia el valor que provoca <code>break</code> y comprueba que aparecen 1, 2 y 3.</p></Micro>
  <Micro title="Práctica 3 · Detecta la diferencia" hint="En los dos casos i vale 3. Pregunta: ¿la instrucción sale del bucle o solo omite esta vuelta?" solution={'// Con break: 1, 2\nfor (let i = 1; i <= 5; i++) {\n  if (i === 3) break;\n  console.log(i);\n}\n\n// Con continue: 1, 2, 4, 5\nfor (let i = 1; i <= 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}'}><p><strong>Objetivo:</strong> comparar dos bucles idénticos. Predice ambas salidas: uno usa <code>break</code> y el otro <code>continue</code>.</p></Micro>
  <Micro title="Práctica 4 · Omite un valor" hint="Dentro del for, comprueba si i es 5. Si lo es, usa continue antes de console.log(i)." solution={'for (let i = 1; i <= 10; i++) {\n  if (i === 5) {\n    continue;\n  }\n  console.log(i);\n}'}><p><strong>Objetivo:</strong> mostrar del 1 al 10 excepto el 5. Ejecuta y confirma que 6, 7, 8, 9 y 10 siguen apareciendo.</p></Micro>
  <Micro title="Práctica 5 · Detecta y corrige el error" hint="El contador debe cambiar incluso cuando se omite el 3. Actualízalo antes de continue." solution={'let contador = 1;\nwhile (contador <= 5) {\n  if (contador === 3) {\n    contador++;\n    continue;\n  }\n  console.log(contador);\n  contador++;\n}\n// 1, 2, 4, 5'}><p><strong>Objetivo:</strong> evitar un bucle infinito. Explica por qué el ejemplo incorrecto de la sección anterior se queda en 3 y corrígelo. No ejecutes la versión incorrecta.</p></Micro>
  <Micro title="Práctica 6 · Reto aplicado" hint="Primero usa continue para no mostrar los agotados. Después de mostrar una mochila disponible, usa break." solution={'const productos = [\n  { nombre: "Cuaderno", disponible: true },\n  { nombre: "Lápiz", disponible: false },\n  { nombre: "Mochila", disponible: true },\n  { nombre: "Regla", disponible: true }\n];\n\nfor (const producto of productos) {\n  if (!producto.disponible) {\n    continue;\n  }\n  console.log("Disponible: " + producto.nombre);\n  if (producto.nombre === "Mochila") {\n    break;\n  }\n}\n// Disponible: Cuaderno\n// Disponible: Mochila'}><p><strong>Objetivo:</strong> recorrer los productos, mostrar solo los disponibles y detenerte al encontrar «Mochila». Parte de los datos del ejemplo anterior. Comprueba que no se muestra «Lápiz» ni «Regla».</p></Micro>
  <section className="jsm-section"><h2>Errores frecuentes</h2><div className="jsm-grid"><section><h3>Confundirlas</h3><p><code>break</code> termina el bucle; <code>continue</code> no lo termina.</p></section><section><h3>El orden importa</h3><p>Un <code>console.log()</code> después de <code>continue</code> se omite en esa vuelta. Antes de <code>break</code> sí se ejecutaría.</p></section><section><h3>Contador sin cambio</h3><p>En <code>while</code>, un <code>continue</code> puede impedir la actualización y crear un bucle infinito.</p></section><section><h3>Fuera de un bucle</h3><p>No puedes usar <code>continue</code> fuera de un bucle, ni <code>break</code> fuera de un bucle o <code>switch</code>.</p></section><section><h3>No termina el programa</h3><p><code>break</code> solo abandona la estructura más cercana; el código posterior sigue ejecutándose.</p></section></div></section>
  <section className="jsm-section jsm-recap"><h2>Autoevaluación</h2><details><summary>1. Si break se ejecuta con i igual a 3, ¿por qué no se muestra 3?</summary><p>Porque <code>break</code> abandona inmediatamente el bucle antes de llegar al <code>console.log(i)</code>.</p></details><details><summary>2. ¿Por qué continue permite que se muestren 4 y 5?</summary><p>Porque solo salta la vuelta donde i vale 3. En un <code>for</code> se actualiza i y el bucle continúa.</p></details><details><summary>3. ¿Qué instrucciones dejan de ejecutarse después de continue?</summary><p>Las instrucciones que quedan dentro de la iteración actual, situadas después de <code>continue</code>.</p></details><details><summary>4. ¿Por qué continue puede ser peligroso en while?</summary><p>Si impide actualizar el contador, la condición puede permanecer verdadera y el bucle no terminar.</p></details><details><summary>5. ¿Cuándo usarías cada instrucción?</summary><p>Usa <code>break</code> al encontrar un resultado y no necesitar más vueltas. Usa <code>continue</code> cuando una vuelta concreta no debe procesarse, pero sí las siguientes.</p></details></section>
  <Next>Para usar bucles con seguridad conviene reconocer algunos errores típicos antes de que aparezcan.</Next>
</>}

export function LoopDebuggingLesson(){return <>
  <p className="jsm-subtitle">Depurar un bucle consiste en comprobar el inicio, la condición y la actualización.</p><Goal>Reconocer errores frecuentes en bucles y corregirlos sin ejecutar código que pueda bloquear la página.</Goal>
  <section className="jsm-section"><h2>Los errores más comunes</h2><div className="jsm-grid"><section><h3>Olvidar actualizar</h3><p>Si un <code>while</code> mantiene verdadera la condición, podría repetirse indefinidamente. No ejecutes el ejemplo incorrecto: revisa dónde debe cambiar el contador.</p></section><section><h3><code>&lt;</code> o <code>&lt;=</code></h3><p><code>i &lt; 5</code> muestra hasta 4; <code>i &lt;= 5</code> incluye el 5.</p></section><section><h3>Inicio incorrecto</h3><p>Empezar en 0 no es igual que empezar en 1. Decide primero qué valores necesitas mostrar.</p></section><section><h3>Dirección incorrecta</h3><p>Si quieres bajar, usa una condición y actualización que hagan bajar el contador.</p></section><section><h3>Contador y acumulador</h3><p><code>contador++</code> cuenta vueltas; <code>total += precio</code> suma cantidades.</p></section></div></section>
  <Micro title="Micropráctica 1 · Detecta la actualización" hint="Falta cambiar contador dentro del bloque. Añade contador++." solution={'let contador = 1;\nwhile (contador <= 3) {\n  console.log(contador);\n  contador++;\n}'}><p><strong>Problema:</strong> este ejemplo no debe ejecutarse tal como está porque el contador no cambia. Explica qué falta y escribe la corrección.</p><Code>{`let contador = 1;
while (contador <= 3) {
  console.log(contador);
}`}</Code></Micro>
  <Micro title="Micropráctica 2 · Incluye el último número" hint="Cambia < por <=." solution={'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}'}><p><strong>Problema:</strong> el código muestra 1, 2, 3 y 4, pero necesitamos que muestre también 5. Corrige un carácter.</p><Code>{`for (let i = 1; i < 5; i++) {
  console.log(i);
}`}</Code></Micro>
  <Micro title="Micropráctica 3 · Empieza donde corresponde" hint="Para mostrar 1 primero, inicializa i con 1." solution={'for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}'}><p><strong>Problema:</strong> necesitamos 1, 2 y 3, pero este código empieza en 0. Corrige la inicialización.</p><Code>{`for (let i = 0; i <= 3; i++) {
  console.log(i);
}`}</Code></Micro>
  <Micro title="Micropráctica 4 · Baja, no subas" hint="Para llegar de 5 a 1, usa i >= 1 e i--." solution={'for (let i = 5; i >= 1; i--) {\n  console.log(i);\n}'}><p><strong>Problema:</strong> queremos una cuenta atrás, pero el contador aumenta. Corrige la condición y la actualización.</p><Code>{`for (let i = 5; i <= 1; i++) {
  console.log(i);
}`}</Code></Micro>
  <Next>Aplicarás todo el bloque en una práctica donde una tienda procesa pedidos uno a uno.</Next>
</>}

export function StoreOrdersPracticeLesson(){const fullSolution=`const importeInicial = 20;
const numeroPedidos = 5;
const aumentoPorPedido = 10;
const porcentajeDescuento = 0.10;
let totalTienda = 0;
let pedidosConDescuento = 0;

for (let pedido = 1; pedido <= numeroPedidos; pedido++) {
  const importe = importeInicial + (pedido - 1) * aumentoPorPedido;
  let importeFinal = importe;

  if (importe > 40) {
    importeFinal = importe - importe * porcentajeDescuento;
    pedidosConDescuento++;
    console.log("Pedido " + pedido + ": " + importe + " € → descuento → " + importeFinal + " €");
  } else {
    console.log("Pedido " + pedido + ": " + importe + " € → sin descuento");
  }

  totalTienda += importeFinal;
}

console.log("Total de la tienda: " + totalTienda + " €");
console.log("Pedidos con descuento: " + pedidosConDescuento);`;return <>
  <p className="jsm-subtitle">Práctica final · Una tienda procesa cinco pedidos y debe calcular importes, descuentos y un total.</p><Goal>Combinar variables, un bucle, condiciones, contador, acumulador y <code>console.log()</code> en un problema guiado.</Goal>
  <section className="jsm-section"><h2>La situación</h2><p>El primer pedido cuesta 20 €. Cada pedido siguiente cuesta 10 € más. Los pedidos con importe superior a 40 € reciben un 10 % de descuento. Trabajarás solo en <code>script.js</code> y comprobarás todo en Console.</p><p><strong>Resultado esperado:</strong> los importes son 20, 30, 40, 50 y 60 €. Reciben descuento los pedidos 4 y 5. El total final es 189 € y hay 2 pedidos con descuento.</p></section>
  <Micro title="Fase 1 · Prepara los datos" hint="El total y el contador deben empezar en 0 porque todavía no se ha procesado ningún pedido." solution={'const importeInicial = 20;\nconst numeroPedidos = 5;\nconst aumentoPorPedido = 10;\nconst porcentajeDescuento = 0.10;\nlet totalTienda = 0;\nlet pedidosConDescuento = 0;'}><p><strong>Objetivo:</strong> declara el importe inicial, el número de pedidos, el aumento, el descuento, el total y el contador de pedidos con descuento.</p></Micro>
  <Micro title="Fase 2 · Crea el bucle" hint="El contador pedido debe empezar en 1 y llegar hasta numeroPedidos." solution={'for (let pedido = 1; pedido <= numeroPedidos; pedido++) {\n  console.log("Pedido " + pedido);\n}'}><p><strong>Objetivo:</strong> crea un <code>for</code> que muestre «Pedido 1» hasta «Pedido 5» en Console.</p></Micro>
  <Micro title="Fase 3 · Calcula importes" hint="El primer pedido suma (1 - 1) * 10; por eso conserva el importe inicial." solution={'const importe = importeInicial + (pedido - 1) * aumentoPorPedido;\nconsole.log("Pedido " + pedido + ": " + importe + " €");'}><p><strong>Objetivo:</strong> dentro del bucle, calcula el importe del pedido actual. Añade estas líneas después de crear el bucle. Comprueba que aparecen 20, 30, 40, 50 y 60.</p></Micro>
  <Micro title="Fase 4 · Aplica el descuento" hint="Crea importeFinal igual a importe antes del if. Si importe > 40, resta importe * porcentajeDescuento y aumenta el contador." solution={'let importeFinal = importe;\n\nif (importe > 40) {\n  importeFinal = importe - importe * porcentajeDescuento;\n  pedidosConDescuento++;\n  console.log("Pedido " + pedido + " tiene descuento");\n} else {\n  console.log("Pedido " + pedido + " no tiene descuento");\n}'}><p><strong>Objetivo:</strong> aplica el 10 % solo a los pedidos que superan 40 €. Deben tener descuento los pedidos 4 y 5.</p></Micro>
  <Micro title="Fase 5 · Acumula resultados" hint="Después del if, añade importeFinal a totalTienda. Cuando el bucle termina, muestra las dos variables." solution={'totalTienda += importeFinal;\n\n// Después del bucle:\nconsole.log("Total de la tienda: " + totalTienda + " €");\nconsole.log("Pedidos con descuento: " + pedidosConDescuento);'}><p><strong>Objetivo:</strong> suma cada importe final y muestra el total al terminar. Espera 189 € y 2 pedidos con descuento.</p></Micro>
  <section className="jsm-section"><h2>Fase 6 · Comprueba</h2><p>Ejecuta el programa y compara Console con los resultados esperados. Si el total no es 189, revisa si sumas <code>importeFinal</code>, no <code>importe</code>. Si el contador no es 2, revisa que aumente solo dentro del <code>if</code>.</p><details><summary>Ver solución completa</summary><Code>{fullSolution}</Code></details></section>
  <Next>Ya sabes repetir instrucciones y controlar cada vuelta. A continuación aprenderás a reutilizar instrucciones con funciones.</Next>
</>}
