const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;

export function ForOfNotebookActivity(){return <section className="jsm-section jsm-challenge"><h2>Actividad práctica · El cuaderno de notas del profesor</h2><h3>A. Enunciado</h3><p>Eres un profesor que necesita registrar los nombres y las notas de cinco alumnos. Guardarás ambos datos en dos arrays y, al terminar, mostrarás un listado como «Ana ha sacado un 8».</p><h3>B. Paso 1: construir el HTML</h3><p>Crea <code>index.html</code> con un título, un input de nombre, otro de nota, los botones «Guardar alumno» y «Mostrar notas», y elementos para el contador, el listado y los mensajes. Los botones llaman a funciones con <code>onclick</code>.</p><Code>{`<main class="cuaderno">
  <h1>Cuaderno de notas</h1>
  <label>Nombre <input id="nombre" type="text"></label>
  <label>Nota <input id="nota" type="number"></label>
  <button onclick="guardarAlumno()">Guardar alumno</button>
  <p id="contador">Alumnos registrados: 0</p>
  <button onclick="mostrarNotas()">Mostrar notas</button>
  <p id="mensaje"></p>
  <p id="resultado"></p>
</main>`}</Code><h3>C. Paso 2: crear los arrays</h3><Code>{`const alumnos = [];
const notas = [];`}</Code><p><code>alumnos</code> guarda nombres y <code>notas</code> guarda calificaciones. La misma posición representa a la misma persona.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Índice</th><th>alumnos</th><th>notas</th></tr></thead><tbody><tr><td>0</td><td>Ana</td><td>8</td></tr><tr><td>1</td><td>Luis</td><td>4</td></tr><tr><td>2</td><td>Marta</td><td>7</td></tr></tbody></table></div><h3>D. Paso 3: programar guardarAlumno()</h3><p>Lee el nombre y la nota con <code>Number()</code>. Primero comprueba que el nombre no esté vacío, que la nota no sea una nota vacía y que esté entre 0 y 10. Después verifica que aún no haya cinco alumnos. Si algo falla, muestra un mensaje y usa <code>return</code> para terminar la función.</p><p>Cuando los datos sean válidos, usa dos <code>push()</code> en la misma ejecución: uno para el nombre y otro para su nota. Así los dos arrays no se descoordinan. Recuerda que 0 es una nota válida, por eso no comprobamos simplemente <code>if (!nota)</code>.</p><h3>E. Paso 4: programar mostrarNotas()</h3><p>Solo muestra el listado cuando haya cinco alumnos. Crea una variable de texto y recorre las posiciones con un <code>for</code> tradicional. Añade cada línea con <code>+=</code> y muéstrala con <code>textContent</code>.</p><aside className="jsm-callout"><h3>¿Por qué no usamos for...of aquí?</h3><p><code>for...of</code> es perfecto cuando solo necesitamos cada alumno. Ahora necesitamos a la vez <code>alumnos[i]</code> y <code>notas[i]</code>, que comparten índice. Primera vuelta: posiciones 0 y 0; segunda: 1 y 1; tercera: 2 y 2. <strong>No existe un bucle siempre mejor: elegimos según los datos que necesitamos.</strong></p></aside><h3>F. Paso 5: probar</h3><p>Registra Ana—8, Luis—4, Marta—7, Pedro—9 y Lucía—6. Comprueba que aparecen relacionados correctamente.</p><details><summary>Necesito una pista para validar</summary><p>Para comprobar la nota vacía, lee primero el texto del input. Después conviértelo con <code>Number()</code> y valida el número entre 0 y 10.</p></details><details><summary>Necesito una pista para el bucle</summary><p>Empieza con <code>let texto = ""</code>. Dentro del bucle añade <code>alumnos[i] + " ha sacado un " + notas[i] + "\\n"</code>.</p></details><details><summary>Ver solución completa</summary><h4>index.html</h4><Code>{`<main class="cuaderno">
  <h1>Cuaderno de notas</h1>
  <label>Nombre <input id="nombre" type="text"></label>
  <label>Nota <input id="nota" type="number"></label>
  <button onclick="guardarAlumno()">Guardar alumno</button>
  <p id="contador">Alumnos registrados: 0</p>
  <button onclick="mostrarNotas()">Mostrar notas</button>
  <p id="mensaje"></p>
  <p id="resultado"></p>
</main>`}</Code><h4>styles.css</h4><Code>{`.cuaderno {
  background-color: white;
  color: #17325c;
  padding: 24px;
  margin: 24px auto;
  border: 1px solid #d5dce8;
  border-radius: 12px;
  width: 90%;
  max-width: 540px;
  text-align: center;
}
.cuaderno input, .cuaderno button {
  padding: 10px;
  margin: 6px;
  border: 1px solid #17325c;
  border-radius: 6px;
}
#resultado { white-space: pre-line; }`}</Code><h4>app.js</h4><Code>{`const alumnos = [];
const notas = [];

function guardarAlumno() {
  const nombre = document.getElementById("nombre").value;
  const textoNota = document.getElementById("nota").value;
  const nota = Number(textoNota);

  if (nombre === "") {
    document.getElementById("mensaje").textContent = "Escribe un nombre.";
    return;
  }
  if (textoNota === "" || nota < 0 || nota > 10) {
    document.getElementById("mensaje").textContent = "Escribe una nota entre 0 y 10.";
    return;
  }
  if (alumnos.length >= 5) {
    document.getElementById("mensaje").textContent = "Ya hay cinco alumnos registrados.";
    return;
  }

  alumnos.push(nombre);
  notas.push(nota);
  document.getElementById("contador").textContent =
    "Alumnos registrados: " + alumnos.length;
  document.getElementById("mensaje").textContent = "Alumno guardado.";
  document.getElementById("nombre").value = "";
  document.getElementById("nota").value = "";
}

function mostrarNotas() {
  if (alumnos.length !== 5) {
    document.getElementById("mensaje").textContent =
      "Registra los cinco alumnos antes de mostrar las notas.";
    return;
  }

  let texto = "";
  for (let i = 0; i < alumnos.length; i++) {
    texto += alumnos[i] + " ha sacado un " + notas[i] + "\\n";
  }
  document.getElementById("resultado").textContent = texto;
}`}</Code><p><code>white-space: pre-line</code> permite que los saltos <code>\n</code> del texto se vean como líneas distintas en la página.</p></details><h3>Preguntas de reflexión</h3><details><summary>Ver respuestas</summary><ol><li><strong>¿Por qué dos push()?</strong> Porque guardamos el nombre en un array y la nota en otro.</li><li><strong>¿Qué ocurre si guardamos un nombre sin su nota?</strong> Los arrays se descoordinan y sus posiciones dejarían de representar correctamente la relación.</li><li><strong>¿Por qué usamos for tradicional?</strong> Porque necesitamos el mismo índice para acceder a un elemento de cada array.</li></ol></details></section>}
