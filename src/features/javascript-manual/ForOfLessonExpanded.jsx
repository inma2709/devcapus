import { useState } from 'react';
import { ForOfNotebookActivity } from './ForOfNotebookActivity';

const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Goal=({children})=><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>{children}</p></section>;
const Next=({children})=><section className="jsm-next"><h2>Lo siguiente</h2><p>{children}</p></section>;

export function ExpandedForOfLesson(){
  const alumnos=['Ana','Luis','Marta'];
  const [vuelta,setVuelta]=useState(0);
  const alumno=alumnos[vuelta];
  return <>
    <p className="jsm-subtitle"><code>for...of</code> permite recorrer un array recibiendo directamente cada valor, sin controlar sus índices.</p>
    <Goal>Explicar la diferencia entre recorrer posiciones y valores; usar <code>for...of</code> para mostrar los elementos de un array; y elegir entre <code>for</code> y <code>for...of</code>.</Goal>

    <section className="jsm-section"><h2>1. Recordamos el bucle <code>for</code></h2><p>Hasta ahora recorríamos un array utilizando <code>length</code>. Imagina esta lista de alumnos:</p><Code>{`const alumnos = ["Ana", "Luis", "Marta"];`}</Code><p>Para mostrar sus nombres usamos un contador y las posiciones:</p><Code>{`for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}`}</Code><h3>¿Qué está haciendo JavaScript?</h3><ol><li>Crea <code>i</code> con el valor 0.</li><li>Comprueba que <code>i</code> sea menor que la longitud del array.</li><li>Consulta el elemento de la posición <code>i</code>.</li><li>Incrementa <code>i</code> para pasar a la siguiente posición.</li><li>Repite hasta terminar el array.</li></ol><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Índice 0</th><th>Índice 1</th><th>Índice 2</th></tr></thead><tbody><tr><td>Ana</td><td>Luis</td><td>Marta</td></tr></tbody></table></div><p>El bucle usa primero el índice 0, después el 1 y finalmente el 2. No obtiene los nombres directamente: obtiene posiciones y usamos <code>alumnos[i]</code> para consultar el elemento correspondiente.</p></section>

    <section className="jsm-section"><h2>2. ¿Y si solo queremos los nombres?</h2><p>Para mostrar Ana, Luis y Marta no necesitamos saber los índices. Solo queremos cada nombre. En ese caso, <code>for...of</code> es una forma más sencilla.</p><Code>{`const alumnos = ["Ana", "Luis", "Marta"];

for (const alumno of alumnos) {
  console.log(alumno);
}`}</Code><p>El resultado es el mismo. Con <code>for</code> controlamos posiciones y usamos <code>alumnos[i]</code>. Con <code>for...of</code>, JavaScript nos entrega cada elemento directamente.</p></section>

    <section className="jsm-section"><h2>3. Comprendemos la sintaxis</h2><Code>{`for (const alumno of alumnos) {
  console.log(alumno);
}`}</Code><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Parte</th><th>¿Qué significa?</th></tr></thead><tbody><tr><td><code>for</code></td><td>Inicia un bucle.</td></tr><tr><td><code>const alumno</code></td><td>Variable que recibe un elemento en cada vuelta.</td></tr><tr><td><code>of</code></td><td>Indica que recorremos valores.</td></tr><tr><td><code>alumnos</code></td><td>Array que queremos recorrer.</td></tr><tr><td><code>{'{ }'}</code></td><td>Instrucciones que se ejecutan en cada vuelta.</td></tr></tbody></table></div><p>Podemos leerlo así: <strong>«Para cada alumno del array alumnos, muestra su nombre en la consola».</strong></p><h3>¿Qué sucede en cada vuelta?</h3><div className="jsm-challenge"><p><strong>Vuelta {vuelta + 1} de 3</strong></p><div className="jsm-flow">{alumnos.map((nombre,indice)=><span key={nombre} className={indice===vuelta?'is-active':''}>{nombre}</span>)}</div><p>Variable actual: <code>alumno = "{alumno}"</code></p><p>Salida: <code>{alumno}</code></p><button type="button" onClick={()=>setVuelta(Math.max(0,vuelta-1))} disabled={vuelta===0}>Anterior</button>{vuelta<2?<button type="button" onClick={()=>setVuelta(vuelta+1)}>Siguiente vuelta</button>:<button type="button" onClick={()=>setVuelta(0)}>Volver a empezar</button>}</div><p>Observa que no hemos creado un contador. JavaScript pasa al siguiente elemento automáticamente hasta terminar el array.</p><h3>¿Por qué usamos <code>const</code> si el valor cambia?</h3><p>En cada vuelta se crea una nueva variable <code>alumno</code> que recibe el elemento correspondiente. No estamos reasignando una única constante: cada iteración tiene su propia constante.</p></section>

    <section className="jsm-section"><h2>4. <code>for</code> frente a <code>for...of</code></h2><div className="jsm-grid"><div><h3>Con for</h3><Code>{`for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}`}</Code><p>Controlamos la posición mediante <code>i</code>.</p></div><div><h3>Con for...of</h3><Code>{`for (const alumno of alumnos) {
  console.log(alumno);
}`}</Code><p>Recibimos directamente cada alumno.</p></div></div><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Característica</th><th>for con length</th><th>for...of</th></tr></thead><tbody><tr><td>Necesita contador</td><td>Sí</td><td>No</td></tr><tr><td>Utiliza length</td><td>Habitualmente</td><td>No</td></tr><tr><td>Necesita array[i]</td><td>Para obtener el valor</td><td>No</td></tr><tr><td>Permite conocer el índice fácilmente</td><td>Sí</td><td>No directamente</td></tr><tr><td>Recorre todos los valores</td><td>Sí</td><td>Sí</td></tr><tr><td>Permite break y continue</td><td>Sí</td><td>Sí</td></tr></tbody></table></div><p>Ninguno es siempre mejor. Si solo muestras valores, <code>for...of</code> suele ser más sencillo. Si necesitas posiciones concretas o su número, el <code>for</code> tradicional es más adecuado.</p></section>

    <section className="jsm-section"><h2>5. Un caso donde sí necesitamos el índice</h2><p>Para mostrar «Alumno 1: Ana», «Alumno 2: Luis» y «Alumno 3: Marta», usamos el índice tanto para leer el array como para calcular el número visible.</p><Code>{`const alumnos = ["Ana", "Luis", "Marta"];

for (let i = 0; i < alumnos.length; i++) {
  console.log(\`Alumno \${i + 1}: \${alumnos[i]}\`);
}`}</Code><p>Aquí <code>i</code> sirve para acceder a cada elemento y para calcular su orden con <code>i + 1</code>. Con <code>for...of</code> no disponemos directamente de ese contador; añadirlo manualmente sería innecesario si ya tenemos un <code>for</code> que resuelve la tarea.</p></section>

    <section className="jsm-section"><h2>6. Ejemplo práctico: cinco evaluaciones</h2><p>Tenemos las notas de cinco evaluaciones. Solo queremos saber si cada valor está aprobado o suspenso, no su posición.</p><Code>{`const notas = [4, 7, 9, 3, 6];

for (const nota of notas) {
  if (nota >= 5) {
    console.log(\`Aprobado: \${nota}\`);
  } else {
    console.log(\`Suspenso: \${nota}\`);
  }
}`}</Code><p>El bucle recoge cada nota y el condicional comprueba si es mayor o igual que 5.</p><Code>{`Suspenso: 4
Aprobado: 7
Aprobado: 9
Suspenso: 3
Aprobado: 6`}</Code><p>Esta es una aplicación natural de <code>for...of</code>: hacer algo con cada elemento de una colección.</p></section>

    <section className="jsm-section jsm-challenge"><h2>7. Micropráctica · Lista de productos</h2><p><strong>Objetivo:</strong> recorre el array y muestra un mensaje para cada producto.</p><Code>{`const productos = ["Cuaderno", "Lápiz", "Mochila"];

// Escribe aquí tu bucle for...of`}</Code><details><summary>Necesito una pista</summary><p>Crea una variable singular: <code>for (const producto of productos)</code>. Dentro, muestra <code>"Producto: " + producto</code>.</p></details><details><summary>Ver solución explicada</summary><Code>{`const productos = ["Cuaderno", "Lápiz", "Mochila"];

for (const producto of productos) {
  console.log("Producto: " + producto);
}`}</Code><p>En cada vuelta, <code>producto</code> recibe un valor del array. No necesitamos índices porque solo queremos mostrar cada nombre.</p></details></section>
    <ForOfNotebookActivity />
    <Next>Un array también tiene métodos que recorren sus elementos mediante una función: forEach().</Next>
  </>;
}
