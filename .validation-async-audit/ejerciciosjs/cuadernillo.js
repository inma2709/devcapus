const D={
while:['Bucles · while','Cuenta del 1 al 4 con while','Muestra los números del 1 al 4. El contador debe aumentar en cada vuelta y detenerse antes de llegar a 5.','Distinguir valor inicial, condición y actualización.',['Declara contador con 1.','Usa contador < 5.','Actualiza con contador++.'],`let contador = 1;
while (contador < 5) {
  console.log('Contador: ' + contador);
  contador++;
}`],
dowhile:['Bucles · do...while','La diferencia entre while y do...while','Comprueba con una condición inicialmente falsa qué bucle ejecuta su cuerpo al menos una vez.','Entender que do...while comprueba su condición al final.',['Prueba con numero = 15.','Comprueba numero < 10.','do...while termina en punto y coma.'],`let numero = 15;
do { console.log('Se muestra una vez'); }
while (numero < 10);

while (numero < 10) { console.log('No se muestra'); }`],
for:['Bucles · for','Contar en un intervalo con for','Introduce un inicio y un final; muestra todas las vueltas, incluidos ambos valores.','Practicar inicialización, condición y actualización en un for.',['Convierte las entradas con Number().','El contador empieza en inicio.','Usa <= para incluir final.'],`for (let x = inicio; x <= final; x++) {
  console.log('Vuelta nº ' + x);
}`],
escalera:['Bucles · for','Escalera de símbolos','Crea una escalera: la primera fila tiene un símbolo y cada fila siguiente tiene uno más.','Construir texto acumulándolo en cada iteración.',['Empieza linea como cadena vacía.','El bucle va de 1 a altura.','Usa linea += "😊".'],`let linea = '';
for (let i = 1; i <= altura; i++) {
  linea += '😊';
  console.log(linea);
}`],
triangulo:['Bucles · for anidados','Triángulo alineado','Dibuja un triángulo: cada fila tiene un asterisco más y un espacio menos.','Combinar bucles o repeticiones para construir patrones.',['El bucle exterior representa las filas.','Los espacios son altura - i.','Los asteriscos son i.'],`for (let i = 1; i <= altura; i++) {
  console.log(' '.repeat(altura - i) + '*'.repeat(i));
}`],
forof:['Arrays · for...of','Recorre una lista de frutas','Muestra cada fruta del array sin utilizar índices numéricos.','Usar for...of para leer directamente los elementos.',['Crea un array de frutas.','La variable recibe un elemento cada vez.','Sintaxis: for (const fruta of frutas).'],`const frutas = ['manzana', 'plátano', 'cereza'];
for (const fruta of frutas) console.log(fruta);`],
cajas:['Arrays · DOM y for...of','Frutas en cajas','Crea una caja visual por cada fruta de un array.','Recorrer datos y crear elementos del DOM de forma segura.',['Selecciona el contenedor una vez.','Crea un div con createElement().','Añádelo con append().'],`for (const fruta of frutas) {
  const caja = document.createElement('div');
  caja.textContent = fruta;
  contenedor.append(caja);
}`],
edad:['Condicionales · if / else','Edad y ahorro para el carnet','Indica si una persona es mayor de edad y, si lo es, evalúa sus ahorros para un carnet de 500 €.','Encadenar decisiones y convertir entradas de texto a números.',['Primero compara edad >= 18.','Después compara ahorro con 500.','Calcula lo que falta: 500 - ahorro.'],`if (edad >= 18) {
  if (ahorro >= 500) mensaje = 'Puedes pagarlo';
  else mensaje = 'Aún necesitas ahorrar';
} else mensaje = 'Debes ser mayor de edad';`],
estudios:['Condicionales · if / else if','Acceso a un curso','Menor de 16: no accede; de 16 a 17: autorización; desde 18: Bachillerato o Grado.','Resolver una regla con varios caminos y normalizar texto.',['Evalúa primero edad < 16.','Después edad < 18.','Usa trim().toLowerCase().'],`if (edad < 16) mensaje = 'No puedes acceder';
else if (edad < 18) mensaje = 'Necesitas autorización';
else if (['bachillerato', 'grado'].includes(estudios.trim().toLowerCase()))
  mensaje = 'Puedes acceder';`],
operadores:['Operadores · asignación','Actualiza una variable','Parte de n1 = 6, réstale 2 con un operador de asignación y muestra ambos valores.','Relacionar n1 -= 2 con n1 = n1 - 2.',['Muestra el valor inicial.','Usa -= para restar y guardar.','El resultado es 4.'],`let n1 = 6;
console.log(n1);
n1 -= 2;
console.log(n1); // 4`],
logicos:['Operadores lógicos','Comprueba condiciones combinadas','Decide si un número está entre 6 y 9, ambos incluidos.','Aplicar && cuando dos comparaciones deben cumplirse a la vez.',['Una comparación sola no basta.','Con && ambas deben ser verdaderas.','Prueba 7, 5 y 10.'],`const n = 7;
if (n > 5 && n < 10) {
  console.log('Está entre 6 y 9');
}`],
switch:['Condicionales · switch','Califica una nota','Clasifica una nota entre 0 y 10 en Insuficiente, Suficiente, Bien, Notable o Sobresaliente.','Usar switch(true) para agrupar condiciones y validar entradas.',['Convierte la nota a Number().','Cada case termina en break.','Valida antes el intervalo.'],`switch (true) {
  case nota < 0 || nota > 10: r = 'Incorrecta'; break;
  case nota < 5: r = 'Insuficiente'; break;
  case nota <= 6: r = 'Suficiente o Bien'; break;
  case nota <= 8: r = 'Notable'; break;
  default: r = 'Sobresaliente';
}`],
aleatorio:['Proyecto · bucles y condicionales','Adivina el número secreto','El programa genera un número entre 1 y 100. Cada intento indica si el secreto es más alto o más bajo hasta acertarlo.','Integrar Math.random(), conversiones, condicionales y repetición.',['Math.floor(Math.random() * 100) + 1.','Cuenta cada intento válido.','Al acertar, detén la repetición.'],`const secreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
while (numero !== secreto) {
  intentos++;
  console.log(numero < secreto ? 'Más alto' : 'Más bajo');
}
console.log('¡Correcto! ' + intentos + ' intentos.');`]
};
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;');
function fields(id){if(id==='for')return '<input id="a" type="number" placeholder="Inicio"><input id="b" type="number" placeholder="Final">';if(['escalera','triangulo'].includes(id))return '<input id="a" type="number" min="1" max="20" placeholder="Altura (1–20)">';if(id==='edad')return '<input id="a" type="number" placeholder="Edad"><input id="b" type="number" placeholder="Ahorros (€)">';if(id==='estudios')return '<input id="a" type="number" placeholder="Edad"><input id="b" placeholder="ESO, bachillerato o grado">';if(id==='switch')return '<input id="a" type="number" min="0" max="10" placeholder="Nota (0–10)">';if(id==='aleatorio')return '<input id="a" type="number" min="1" max="100" placeholder="Número del 1 al 100">';return ''} 
function run(id,out){let a=document.querySelector('#a')?.value,b=document.querySelector('#b')?.value,n=Number(a);if(id==='while')out.innerHTML='Contador: 1<br>Contador: 2<br>Contador: 3<br>Contador: 4';else if(id==='dowhile')out.innerHTML='do...while: se ejecuta una vez.<br>while: no se ejecuta porque 15 &lt; 10 es falso.';else if(id==='for')out.textContent=Number(a)<=Number(b)?Array.from({length:Number(b)-Number(a)+1},(_,i)=>'Vuelta nº '+(Number(a)+i)).join(' · '):'Introduce un intervalo válido.';else if(['escalera','triangulo'].includes(id))out.innerHTML=n>0&&n<=20?'<span class="patron">'+Array.from({length:n},(_,i)=>id==='escalera'?'😊'.repeat(i+1):' '.repeat(n-i-1)+'*'.repeat(i+1)).join('\n')+'</span>':'Elige una altura entre 1 y 20.';else if(id==='forof')out.textContent='Fruta: manzana · Fruta: plátano · Fruta: cereza · Fruta: naranja';else if(id==='cajas')out.innerHTML=['manzana','plátano','cereza','naranja','kiwi','mango'].map(x=>'<span class="etiqueta">'+x+'</span>').join(' ');else if(id==='operadores')out.textContent='Valor inicial: 6 → tras n1 -= 2: 4';else if(id==='logicos')out.textContent='Con n = 7: n > 5 && n < 10 es verdadero.';else if(id==='edad')out.textContent=n<18?'Eres menor de edad.':Number(b)>=500?'Eres mayor de edad y puedes pagarlo.':500-Number(b)<300?'Estás cerca: te faltan '+(500-Number(b))+' €.':'Aún necesitas ahorrar.';else if(id==='estudios')out.textContent=n<16?'No puedes acceder.':n<18?'Necesitas autorización.':['bachillerato','grado'].includes(b.trim().toLowerCase())?'Puedes acceder al curso.':'No cumples el nivel requerido.';else if(id==='switch')out.textContent=!Number.isFinite(n)||n<0||n>10?'Nota incorrecta.':n<5?'Insuficiente':n===5?'Suficiente':n===6?'Bien':n<=8?'Notable':'Sobresaliente'}
function mount(){let id=document.body.dataset.ejercicio,d=D[id];document.title=d[1]+' | Cuadernillo JS';document.body.innerHTML='<main class="contenedor"><a class="volver" href="index.html">← Volver al cuadernillo</a><header class="cabecera"><span class="etiqueta">'+d[0]+'</span><h1>'+d[1]+'</h1><p class="intro">'+d[2]+'</p></header><section class="bloques"><article class="bloque"><h2>Objetivo de aprendizaje</h2><p>'+d[3]+'</p></article><article class="bloque"><h2>Antes de empezar</h2><p>Identifica los datos, escribe una primera versión y pruébala con varios casos.</p></article><article class="bloque"><h2>Consejo docente</h2><p>Explica en voz alta qué ocurre en cada vuelta o condición.</p></article></section><section class="practica"><h2>Pruébalo</h2><p class="nota">Esta zona ejecuta una versión interactiva del ejercicio.</p><div class="controles">'+fields(id)+'<button>Ejecutar</button></div><div class="salida" aria-live="polite">El resultado aparecerá aquí.</div></section><section class="pistas bloque"><h2>Pistas progresivas</h2><ol>'+d[4].map(x=>'<li>'+x+'</li>').join('')+'</ol></section><details class="solucion"><summary>Ver una posible solución</summary><pre><code>'+esc(d[5])+'</code></pre><p class="nota">Compárala con tu intento: puede haber otras soluciones correctas.</p></details></main>';let out=document.querySelector('.salida');document.querySelector('button').onclick=()=>run(id,out);if(id==='aleatorio'){let secret=Math.floor(Math.random()*100)+1,tries=0;document.querySelector('button').onclick=()=>{let x=Number(document.querySelector('#a').value);if(!Number.isInteger(x)||x<1||x>100)return out.textContent='Introduce un entero entre 1 y 100.';tries++;out.textContent=x===secret?'¡Correcto! Lo has adivinado en '+tries+' intentos.':x<secret?'El número secreto es más alto.':'El número secreto es más bajo.'}}}document.addEventListener('DOMContentLoaded',mount);
