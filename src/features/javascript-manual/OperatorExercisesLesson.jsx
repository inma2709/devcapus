const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Exercise=({number,title,operator,task,expected,solution})=><section className="jsm-section jsm-challenge"><h2>{number}) {title}</h2><p><strong>Operador que debes practicar:</strong> <code>{operator}</code></p><p><strong>Tu tarea:</strong> {task}</p><p><strong>Comprueba en Console:</strong> debe aparecer <code>{expected}</code>.</p><details><summary>Ver solución</summary><Code>{solution}</Code></details></section>;

export default function OperatorExercisesLesson(){return <>
  <p className="jsm-subtitle">Colección de ejercicios de operadores. Cada actividad te dice qué operador usar, qué datos tienes y qué resultado debes comprobar.</p>
  <section className="jsm-goal"><h2>Objetivo</h2><p>Practicar operadores aritméticos, de comparación y lógicos sin tener que adivinar el enunciado.</p></section>
  <section className="jsm-section"><h2>Cómo trabajar esta colección</h2><ol><li>Lee el operador que vas a practicar.</li><li>Escribe el código siguiendo la tarea.</li><li>Ejecuta <code>console.log()</code> y compara con el resultado esperado.</li><li>Abre la solución solo para revisar tu trabajo.</li></ol><aside className="jsm-callout"><h3>Una regla sencilla</h3><p>Usa <code>const</code> cuando el valor no se reasigna. En esta colección todos los resultados pueden crearse con <code>const</code>, salvo que el enunciado diga que debes cambiar un valor.</p></aside></section>
  <section className="jsm-section"><h2>1. Operadores aritméticos y texto</h2><p>En los ejercicios 1 a 6, crea una variable llamada <code>resultado</code> y muestra su valor con <code>console.log(resultado)</code>.</p></section>
  <Exercise number="1" title="Suma" operator="+" task={<>Crea <code>resultado</code> con la suma de 3 y 7.</>} expected="10" solution={`const resultado = 3 + 7;
console.log(resultado); // 10`}/>
  <Exercise number="2" title="Resta" operator="-" task={<>Crea <code>resultado</code> restando 4 a 10.</>} expected="6" solution={`const resultado = 10 - 4;
console.log(resultado); // 6`}/>
  <Exercise number="3" title="Multiplicación" operator="*" task={<>Crea <code>resultado</code> multiplicando 5 por 6.</>} expected="30" solution={`const resultado = 5 * 6;
console.log(resultado); // 30`}/>
  <Exercise number="4" title="División" operator="/" task={<>Crea <code>resultado</code> dividiendo 20 entre 4.</>} expected="5" solution={`const resultado = 20 / 4;
console.log(resultado); // 5`}/>
  <Exercise number="5" title="Resto de una división" operator="%" task={<>Crea <code>resultado</code> con el resto de dividir 17 entre 5.</>} expected="2" solution={`const resultado = 17 % 5;
console.log(resultado); // 2`}/>
  <Exercise number="6" title="Potencia" operator="**" task={<>Crea <code>resultado</code> elevando 2 a la potencia 4.</>} expected="16" solution={`const resultado = 2 ** 4;
console.log(resultado); // 16`}/>
  <Exercise number="7" title="Unir dos textos" operator="+" task={<>Crea <code>resultado</code> uniendo <code>"Hola"</code>, un espacio y <code>"Mundo"</code>.</>} expected="Hola Mundo" solution={`const resultado = "Hola" + " " + "Mundo";
console.log(resultado); // "Hola Mundo"`}/>
  <section className="jsm-section"><h2>2. Comparaciones</h2><p>Las comparaciones devuelven un booleano: <code>true</code> o <code>false</code>. Copia los valores exactamente como se indican, incluidas las comillas.</p></section>
  <Exercise number="8" title="Mayor que" operator="&gt;" task={<>Crea <code>resultado</code> para responder si 5 es mayor que 2.</>} expected="true" solution={`const resultado = 5 > 2;
console.log(resultado); // true`}/>
  <Exercise number="9" title="Igualdad estricta" operator="===" task={<>Crea <code>resultado</code> para comparar el string <code>"5"</code> con el número <code>5</code> usando igualdad estricta.</>} expected="false" solution={`const resultado = "5" === 5;
console.log(resultado); // false`}/>
  <Exercise number="10" title="Negación" operator="!" task={<>Crea <code>resultado</code> con la negación de <code>true</code>.</>} expected="false" solution={`const resultado = !true;
console.log(resultado); // false`}/>
  <Exercise number="11" title="Dos comparaciones" operator="&gt; y &lt;" task={<>Crea <code>a</code> para comprobar <code>8 &gt; 3</code> y <code>b</code> para comprobar <code>2 &lt; 1</code>. Muestra ambos valores.</>} expected="true false" solution={`const a = 8 > 3;
const b = 2 < 1;
console.log(a, b); // true false`}/>
  <Exercise number="12" title="Mayor o igual y menor o igual" operator="&gt;= y &lt;=" task={<>Crea <code>r1</code> para <code>5 &gt;= 5</code> y <code>r2</code> para <code>4 &lt;= 3</code>. Muestra ambos valores.</>} expected="true false" solution={`const r1 = 5 >= 5;
const r2 = 4 <= 3;
console.log(r1, r2); // true false`}/>
  <Exercise number="13" title="Igualdad simple y estricta" operator="== y ===" task={<>Compara <code>"10"</code> con <code>10</code> dos veces: primero con <code>==</code> y después con <code>===</code>. Guarda los resultados en <code>igualdadSimple</code> e <code>igualdadEstricta</code>.</>} expected="true false" solution={`const igualdadSimple = "10" == 10;
const igualdadEstricta = "10" === 10;
console.log(igualdadSimple, igualdadEstricta); // true false`}/>
  <Exercise number="14" title="Distinto y estrictamente distinto" operator="!= y !==" task={<>Compara el número <code>7</code> con el string <code>"7"</code> usando <code>!=</code> y <code>!==</code>. Guarda los resultados en dos variables.</>} expected="false true" solution={`const distintoSimple = 7 != "7";
const distintoEstricto = 7 !== "7";
console.log(distintoSimple, distintoEstricto); // false true`}/>
  <Exercise number="15" title="Comparar dos precios" operator="&lt;" task={<>Crea <code>precio1</code> con 12.5 y <code>precio2</code> con 12.99. Guarda en <code>esMasBarato</code> si el primer precio es menor que el segundo.</>} expected="true" solution={`const precio1 = 12.5;
const precio2 = 12.99;
const esMasBarato = precio1 < precio2;
console.log(esMasBarato); // true`}/>
  <section className="jsm-section"><h2>3. Operadores lógicos</h2><p>Primero crea los booleanos indicados. Después combínalos con el operador que se señala.</p></section>
  <Exercise number="16" title="Dos requisitos obligatorios" operator="&&" task={<>Crea <code>tieneDni</code> con <code>true</code> y <code>tieneCita</code> con <code>false</code>. Guarda en <code>puedeEntrar</code> si se cumplen ambos requisitos.</>} expected="false" solution={`const tieneDni = true;
const tieneCita = false;
const puedeEntrar = tieneDni && tieneCita;
console.log(puedeEntrar); // false`}/>
  <Exercise number="17" title="Una de dos posibilidades" operator="||" task={<>Crea <code>esFestivo</code> con <code>false</code> y <code>esDomingo</code> con <code>true</code>. Guarda en <code>hayDescanso</code> si al menos una condición es verdadera.</>} expected="true" solution={`const esFestivo = false;
const esDomingo = true;
const hayDescanso = esFestivo || esDomingo;
console.log(hayDescanso); // true`}/>
  <Exercise number="18" title="Valor contrario" operator="!" task={<>Crea <code>encendido</code> con <code>true</code>. Crea <code>apagado</code> con el valor contrario.</>} expected="false" solution={`const encendido = true;
const apagado = !encendido;
console.log(apagado); // false`}/>
  <Exercise number="19" title="Nota y asistencia" operator="&gt;= y &&" task={<>Crea <code>nota</code> con 70 y <code>asistencia</code> con 80. Guarda en <code>aprueba</code> si la nota es al menos 50 <strong>y</strong> la asistencia es al menos 75.</>} expected="true" solution={`const nota = 70;
const asistencia = 80;
const aprueba = (nota >= 50) && (asistencia >= 75);
console.log(aprueba); // true`}/>
  <Exercise number="20" title="Saldo, crédito y bloqueo" operator="&gt;, ||, && y !" task={<>Crea <code>saldo</code> con 0, <code>tieneCredito</code> con <code>true</code> y <code>bloqueado</code> con <code>false</code>. Guarda en <code>puedeComprar</code> si hay saldo positivo <strong>o</strong> crédito y, además, no está bloqueado.</>} expected="true" solution={`const saldo = 0;
const tieneCredito = true;
const bloqueado = false;
const puedeComprar = (saldo > 0 || tieneCredito) && !bloqueado;
console.log(puedeComprar); // true`}/>
  <section className="jsm-section jsm-challenge"><h2>Extra · Calculadora básica</h2><p><strong>Datos:</strong> <code>a</code> vale 12 y <code>b</code> vale 4. Crea cuatro resultados: suma, resta, multiplicación y división. Muestra cada operación con un <code>console.log()</code> distinto.</p><details><summary>Ver solución</summary><Code>{`const a = 12;
const b = 4;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);`}</Code></details></section>
  <section className="jsm-section jsm-challenge"><h2>Reto final · Mini tienda</h2><p><strong>Datos de partida:</strong> usa cinco variables de entrada: <code>premium = false</code>, <code>total = 42</code>, <code>bloqueoDireccion = false</code>, <code>cuponExpirado = false</code> y <code>nuevoCliente = true</code>.</p><ol><li>Crea <code>envioGratis</code>: debe ser <code>true</code> si es premium <strong>o</strong> el total llega a 50 €, y la dirección no está bloqueada.</li><li>Crea <code>cuponAplicable</code>: debe ser <code>true</code> si el cupón no está caducado y la persona es nueva <strong>o</strong> el total llega a 30 €.</li><li>Muestra los dos resultados en Console.</li><li>Cambia solo <code>total</code> de 42 a 55 y vuelve a comprobar.</li></ol><p><strong>Resultado esperado con total 42:</strong> envío <code>false</code> y cupón <code>true</code>. Con total 55: ambos <code>true</code>.</p><details><summary>Ver solución</summary><Code>{`const premium = false;
let total = 42;
const bloqueoDireccion = false;
const cuponExpirado = false;
const nuevoCliente = true;

const envioGratis = (premium || total >= 50) && !bloqueoDireccion;
const cuponAplicable = !cuponExpirado && (nuevoCliente || total >= 30);

console.log("¿Envío gratis?", envioGratis); // false
console.log("¿Cupón aplicable?", cuponAplicable); // true`}</Code></details></section>
  <section className="jsm-next"><h2>Lo siguiente</h2><p>Ya sabes obtener resultados booleanos. En el siguiente bloque aprenderás a usar esos resultados para decidir qué debe hacer un programa con <code>if</code>.</p></section>
</>}
