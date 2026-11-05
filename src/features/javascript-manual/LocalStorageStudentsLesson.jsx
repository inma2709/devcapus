import flujoLocalStorage from "../../assets/flujo-localstorage.png";

import imagenLocal from "../../assets/persistencia-localstorage-json.png";

const Code = ({ children }) => (

  <pre className="jsm-code"><code>{children}</code></pre>

);

const Check = ({ q, a }) => (

  <details>

    <summary>{q}</summary>

    <p>{a}</p>

  </details>

);

const stepsStyle = {

  backgroundColor: "#eff6ff",

  borderLeft: "5px solid #0b69c6",

  borderRadius: "10px",

  padding: "25px 25px 25px 45px",

  lineHeight: 1.8,

  color: "#1e293b",

};

const listItemStyle = { marginBottom: "12px" };

export default function LocalStorageStudentsLesson() {

  return (

    <>

      <p className="jsm-subtitle">

        Recuperar → mostrar → modificar → guardar → actualizar la pantalla.

      </p>

      <section className="jsm-goal">

        <h2>Al terminar serás capaz de…</h2>

        <p>

          Crear una lista de alumnos persistente y reutilizar sus funciones

          independientes en TecnoAula.

        </p>

        <p>

          Diferenciar el array de JavaScript, la copia guardada en localStorage

          y los elementos que mostramos en el DOM.

        </p>

      </section>

      <section className="jsm-section">

        <h2>Resumen visual del flujo</h2>

        <p>

          Consúltalo antes de empezar el ejercicio: guardar no muestra

          automáticamente la pantalla y recuperar tampoco la actualiza por sí solo.
         Tenemos tres pasos: primero recuperamos los datos guardados si existen, después los mostramos y finalmente, cuando modificamos el array, guardamos la copia actualizada y volvemos a mostrarla.  

        </p>

        <figure className="jsm-infographic">

          <img

            src={imagenLocal}

            alt="Infografía del flujo de localStorage para guardar y recuperar datos."

          />

          <figcaption>

            JavaScript modifica el array, localStorage conserva una copia de

            texto JSON y el DOM muestra los datos cuando ejecutamos la función

            de representación.

          </figcaption>

        </figure>

      </section>

      <section className="jsm-section jsm-challenge">
        <h2>Parte 1 · Guardamos y recuperamos nuestra lista de alumnos</h2>
        <p>
          Tenemos tres alumnos: Juan, María y Pedro. Si añadimos a Luis al array,
          aparece en la página, pero al recargar desaparece. Vamos a aprender a
          conservar esos datos en el navegador y recuperarlos cuando abramos la aplicación.
          ¿Cómo? Con <code>localStorage</code> y <code>JSON</code>.
        </p>

        <h3>Antes de empezar · El viaje de los datos</h3>
        <p>
          <strong>Son dos viajes diferentes:</strong> uno para guardar y otro para recuperar.
          Observa el orden de las instrucciones; no necesitamos memorizar más operaciones.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "16px", margin: "18px 0" }}>
          <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "12px", borderTop: "5px solid #2563eb", color: "#172554" }}>
            <h3 style={{ marginTop: 0 }}>GUARDAR · Del array al navegador</h3>
            <div className="jsm-flow">
              <span>Array alumnos</span><b>↓</b>
              <span><code>JSON.stringify()</code></span><b>↓</b>
              <span>Texto JSON</span><b>↓</b>
              <span><code>localStorage.setItem()</code></span><b>↓</b>
              <span>Datos guardados</span>
            </div>
          </div>
          <div style={{ background: "#f0fdf4", padding: "20px", borderRadius: "12px", borderTop: "5px solid #16a34a", color: "#14532d" }}>
            <h3 style={{ marginTop: 0 }}>RECUPERAR · Del navegador al array</h3>
            <div className="jsm-flow">
              <span>Datos guardados</span><b>↓</b>
              <span><code>localStorage.getItem()</code></span><b>↓</b>
              <span>Texto JSON</span><b>↓</b>
              <span><code>JSON.parse()</code></span><b>↓</b>
              <span>Array alumnos</span>
            </div>
          </div>
        </div>
        <p backgroundColor="#deeee5" style={{ padding: "20px", borderRadius: "12px", borderTop: "5px solid #f59e0b", color: "#78350f",
          borderBottom: "5px solid #f59e0b"
         }}>
          <strong>Fíjate: <code>stringify()</code> convierte el array en texto
          para guardarlo; <code>parse()</code> reconstruye el array a partir del texto
          recuperado. <code>setItem()</code> guarda y <code>getItem()</code> lee.
          Estos son los cuatro pasos que necesitamos para conservar los datos en el navegador y recuperarlos cuando abramos la aplicación.
          Todos son metódos de objetos: <code>JSON</code> y <code>localStorage</code>. El DOM es otro paso: después de recuperar el array, necesitamos mostrarlo en HTML.</strong>
        </p>
        <figure className="jsm-infographic">
          <img src={flujoLocalStorage} alt="Esquema del recorrido para guardar y recuperar datos con localStorage y JSON." />
          <figcaption>El DOM es otro paso: después de recuperar el array, necesitamos mostrarlo en HTML.</figcaption>
        </figure>

        <h3>Paso 1 · Preparamos el array y mostramos los alumnos</h3>
        <p>Comenzamos con el mismo array de objetos que ya conocemos:</p>
        <Code>{`let alumnos = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 21 }
];

const listaAlumnos = document.getElementById("alumnos");`}</Code>
        <p>
          Recorremos el array con <code>for...of</code> porque necesitamos sus elementos,
          no los índices. Antes de dibujar vaciamos el contenedor para evitar duplicados.
        </p>
        <Code>{`function mostrarAlumnos() {
  listaAlumnos.innerHTML = "";

  for (const alumno of alumnos) {
    listaAlumnos.innerHTML +=
      \`<p>\${alumno.nombre} : \${alumno.edad} años</p>\`;
  }
}`}</Code>
        <p>
          El HTML debe tener un elemento con <code>id="alumnos"</code> y cargar
          <code> app.js</code> con <code>defer</code>. También podríamos recorrer el array
          con un <code>for</code> clásico si necesitáramos los índices.
        </p>

        <h3>Paso 2 · GUARDAR: explicación y código</h3>
        <ol style={stepsStyle}>
          <li style={listItemStyle}>
            <strong>Convertimos el array en texto.</strong> localStorage solo guarda
            cadenas de texto. <code>JSON.stringify(alumnos)</code> transforma nuestro
            array de objetos en un texto JSON.
          </li>
          <li style={listItemStyle}>
            <strong>Guardamos ese texto.</strong> Usamos <code>localStorage.setItem()</code>
            y elegimos una clave, <code>"alumnosGuardadosLocal"</code>, que identifica
            esta copia dentro del navegador.
          </li>
          <li>
            <strong>Creamos una función.</strong> La llamamos
            <code> guardarAlumnosLocal()</code> para reconocer que guarda datos
            en localStorage.
          </li>
        </ol>
        <Code>{`function guardarAlumnosLocal() {
  // 1. Convertimos el array a texto JSON.
  const alumnosJSON = JSON.stringify(alumnos);

  // 2. Guardamos ese texto con una clave elegida por nosotros.
  localStorage.setItem("alumnosGuardadosLocal", alumnosJSON);
}

// También podría escribirse en una sola línea:
// localStorage.setItem("alumnosGuardadosLocal", JSON.stringify(alumnos));`}</Code>
        <p>
          <strong>No confundas:</strong> <code>alumnos</code> es el array de JavaScript;
          <code> alumnosJSON</code> es una variable que contiene texto;
          <code> "alumnosGuardadosLocal"</code> es la clave de almacenamiento,
          no el nombre de una variable.
        </p>
        <p>
          <strong>Comprueba el guardado:</strong> llama temporalmente a
          <code> guardarAlumnosLocal()</code> y observa la clave en DevTools →
          Application → Local Storage. <strong>Después comenta o elimina esa llamada de prueba.</strong>
          Guardar automáticamente el array inicial antes de recuperar podría sobrescribir
          los alumnos añadidos anteriormente.
        </p>

        <h3>Paso 3 · RECUPERAR: explicación y código</h3>
        <ol style={stepsStyle}>
          <li style={listItemStyle}>
            <strong>Leemos los datos guardados.</strong> <code>localStorage.getItem()</code>
            busca la misma clave usada al guardar. Devuelve texto o <code>null</code>
            cuando no encuentra la clave.
          </li>
          <li style={listItemStyle}>
            <strong>Comprobamos si hay datos.</strong> Con un <code>if</code> evitamos
            intentar convertir un valor inexistente.
          </li>
          <li style={listItemStyle}>
            <strong>Reconstruimos el array.</strong> <code>JSON.parse()</code> convierte
            el texto JSON recuperado en un array de objetos.
          </li>
          <li>
            <strong>Actualizamos nuestra variable.</strong> Asignamos directamente
            ese array a <code>alumnos</code>. En esta versión no necesitamos
            devolver ningún valor: la función modifica el array externo.
          </li>
        </ol>
        <Code>{`function recuperarAlumnosLocal() {
  // 1. Recuperamos el texto guardado.
  const alumnosGuardados = localStorage.getItem("alumnosGuardadosLocal");

  // 2. Si existen datos, convertimos el texto y actualizamos el array.
  if (alumnosGuardados !== null) {
    alumnos = JSON.parse(alumnosGuardados);
  }
}`}</Code>
        <p>
          Si todavía no existen datos guardados, conservamos a Juan, María y Pedro.
          Si existe una copia anterior, el array <code>alumnos</code> se sustituye
          por los datos recuperados. <strong>Guardar y recuperar deben usar exactamente
          la misma clave.</strong>
        </p>
     

        <h3>Paso 4 · Al abrir la página: recuperar y mostrar</h3>
        <p>
          <strong>Primero recuperamos los datos y después los mostramos.</strong>
          Recuperar no dibuja nada por sí solo: <code>mostrarAlumnos()</code> es
          quien actualiza el DOM.
        </p>
        <Code>{`// Al iniciar la aplicación:
recuperarAlumnosLocal();
mostrarAlumnos();`}</Code>
        <div className="jsm-flow">
          <span>Array inicial</span><b>↓</b>
          <span>recuperarAlumnosLocal()</span><b>↓</b>
          <span>Actualizar array si hay copia</span><b>↓</b>
          <span>mostrarAlumnos()</span>
        </div>

        <h3>Paso 5 · Al añadir un alumno: modificar, guardar y mostrar</h3>
        <p>
          La función <code>agregarAlumno()</code> sigue la misma lógica de nuestra
          agenda de tareas: <code>push()</code> modifica el array;
          <code> guardarAlumnosLocal()</code> conserva una copia actualizada;
          <code> mostrarAlumnos()</code> actualiza la pantalla.
        </p>
        <Code>{`function agregarAlumno() {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = document.getElementById("edad").value;

  if (nombre && edad) {
    alumnos.push({ nombre: nombre, edad: Number(edad) });
    guardarAlumnosLocal();
    mostrarAlumnos();
  } else {
    alert("Por favor, complete todos los campos.");
  }
}`}</Code>
        <div className="jsm-flow">
          <span>alumnos.push()</span><b>↓</b>
          <span>guardarAlumnosLocal()</span><b>↓</b>
          <span>mostrarAlumnos()</span>
        </div>
       

        <h3>Paso 6 · Comprobamos que funciona</h3>
        <ol>
          <li>Abre la página: deben mostrarse Juan, María y Pedro.</li>
          <li>Añade a Luis, 34 años.</li>
          <li>Comprueba la clave en Local Storage y recarga: deben aparecer los cuatro.</li>
          <li>Añade otro alumno, vuelve a recargar y confirma que permanece.</li>
        </ol>
        <Check
          q="¿Qué pasa si hago push() sin guardar?"
          a="Modifico el array actual, pero al recargar recuperaré la copia antigua del navegador."
        />
        <Check
          q="¿Qué diferencia hay entre getItem() y setItem()?"
          a="getItem() lee y devuelve texto o null; setItem() guarda texto. Ambos usan la misma clave para acceder a la copia guardada."
        />
        <Check
          q="¿Qué diferencia hay entre parse y stringify?"
          a="Parse lo usamos para transformar texto JSON en un array de objetos; stringify hace lo contrario: convierte un array de objetos en texto JSON.
          Parse se usa al recuperar y stringify al guardar."
        />
         <p backgroundColor="#deeee5" style={{ padding: "20px", borderRadius: "12px", borderTop: "5px solid #f59e0b", color: "#78350f",
          borderBottom: "5px solid #f59e0b"
         }}>
          <strong>RECUERDA:</strong>  <code>JSON.stringify()</code> convierte el array en texto para guardarlo en localStorage conservando su estructura; <code>JSON.parse()</code> reconstruye el array a partir del texto recuperado. <br/><code>localStorage.setItem()</code> guarda y <code>localStorage.getItem()</code> lee.
          <p>Estos son los cuatro pasos que necesitamos para conservar los datos en el navegador y recuperarlos cuando abramos la aplicación. Todos son metódos de objetos: <code>JSON</code> y <code>localStorage</code>. El DOM es otro paso: después de recuperar el array, necesitamos mostrarlo en HTML.</p>
          <p>Ejemplo:</p>
          <Code>{`// Guardar
localStorage.setItem("alumnosGuardadosLocal", JSON.stringify(alumnos));

// Recuperar
const alumnosGuardados = localStorage.getItem("alumnosGuardadosLocal");
if (alumnosGuardados !== null) {
  alumnos = JSON.parse(alumnosGuardados);
}`}</Code>
      

        </p>


      </section>

      <section className="jsm-section">

        <h2>Parte 2 · Aplicamos la misma lógica a TecnoAula</h2>

        <p>

          No vamos a rehacer la tienda. Cambiamos el array de alumnos por el

          array <code>carrito</code> y conservamos el mismo esquema de funciones:

          recuperar, guardar y mostrar. Las funciones actuales de TecnoAula

          continúan haciendo su trabajo.

        </p>

        <table>

          <thead><tr><th>Lista de alumnos</th><th>TecnoAula</th></tr></thead>

          <tbody>

            <tr><td><code>alumnos</code></td><td><code>carrito</code></td></tr>

            <tr><td><code>guardarAlumnosLocal()</code></td><td><code>guardarCarrito()</code></td></tr>

            <tr><td><code>recuperarAlumnosLocal()</code></td><td><code>recuperarCarrito()</code></td></tr>

            <tr><td><code>mostrarAlumnos()</code></td><td><code>mostrarCarrito()</code></td></tr>

          </tbody>

        </table>

        <h3>Reto 7 · Recuperar</h3>

        <Code>{`function recuperarCarrito() {

  const guardado = localStorage.getItem("tecnoaula_carrito");

  if (guardado !== null) {
    carrito = JSON.parse(guardado);
  }

}`}</Code>

        <Code>{`let carrito = [];

recuperarCarrito();

mostrarCarrito();

calcularTotal();`}</Code>

        <p>

          Al abrir la página, actualizamos primero el array <code>carrito</code>

          con los datos guardados, si existen, y después llamamos a las funciones

          que ya tenemos para mostrar el carrito y su total.

          Coloca estas llamadas en el punto adecuado de la inicialización, cuando

          sus elementos del DOM estén disponibles.

        </p>

        <h3>Reto 8 · Guardar después de modificar</h3>

        <Code>{`function guardarCarrito() {

  localStorage.setItem(

    "tecnoaula_carrito",

    JSON.stringify(carrito)

  );

}`}</Code>

        <p>

          Dentro de <code>agregarCarrito(id)</code>, llama a

          <code> guardarCarrito()</code> después de

          <code> carrito.push(producto)</code>. Dentro de

          <code> eliminarCarrito(posicion)</code>, llámala después de

          <code> carrito.splice(posicion, 1)</code>.

        </p>

        <p>

          También al eliminar hay que guardar: de lo contrario, al recargar

          recuperaríamos una copia anterior que todavía contiene el producto.

        </p>

        <h3>Reto 9 · Prueba</h3>

        <ol>

          <li>Añade Teclado y Ratón: total 55 €.</li>

          <li>Recarga: ambos productos continúan.</li>

          <li>Elimina Ratón y recarga: queda Teclado, total 35 €.</li>

        </ol>

      </section>

      <section className="jsm-section">

        <h2>Errores frecuentes y autoevaluación</h2>

        <Check q="¿Qué pasa si hago push() sin guardar?" a="Al recargar se recupera la copia anterior." />

        <Check q="¿Qué pasa si recupero sin JSON.parse()?" a="Obtengo texto o null, no un array." />

        <Check q="¿Qué falta tras recuperar?" a="Mostrar el array en el DOM." />

        <Check q="¿Qué pasa si elimino sin guardar?" a="El producto reaparece tras recargar." />

        <Check

          q="¿Qué ocurre si setItem() y getItem() utilizan claves distintas?"

          a="getItem() no encontrará la copia guardada con la otra clave y devolverá null."

        />

      </section>

      <section className="jsm-section jsm-recap">

        <h2>Resumen</h2>

        <p>

          <strong>

            JavaScript trabaja con el array. localStorage conserva una copia. El

            DOM muestra el resultado.

          </strong>

        </p>

      </section>

    </>

  );

}
