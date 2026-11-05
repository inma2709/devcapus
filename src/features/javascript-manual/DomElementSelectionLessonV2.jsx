import encontrarElementosDom from '../../assets/encontrar-elementos-dom.png';

const Code = ({ children }) => <pre className="jsm-code"><code>{children}</code></pre>;
const Goal = ({ children }) => <section className="jsm-goal"><h2>Al terminar serás capaz de…</h2>{children}</section>;
const Next = ({ children }) => <section className="jsm-next"><h2>Lo siguiente</h2><p>{children}</p></section>;

export default function DomElementSelectionLessonV2() {
  return <>
    <p className="jsm-subtitle">Tenemos una página HTML y queremos cambiar uno de sus mensajes utilizando JavaScript.</p>

    <figure className="jsm-infographic">
      <img src={encontrarElementosDom} alt="Infografía sobre cómo encontrar elementos del DOM mediante id, selectores CSS y recorridos." />
      <figcaption>Guía visual de consulta: compara las formas de localizar uno o varios elementos HTML.</figcaption>
    </figure>

    <Goal><ul>
      <li>Encontrar un elemento mediante su <code>id</code>.</li>
      <li>Guardar ese elemento en una variable y cambiar su texto.</li>
      <li>Distinguir entre <code>getElementById()</code>, <code>querySelector()</code> y <code>querySelectorAll()</code>.</li>
    </ul></Goal>

    <section className="jsm-section">
      <h2>1. Un mensaje que queremos cambiar</h2>
      <p>HTML ya muestra el mensaje, pero JavaScript necesita encontrar el párrafo concreto antes de poder trabajar con él.</p>
      <Code>{'<!-- index.html -->\n<h1>Mi primera página interactiva</h1>\n<p id="mensaje">Bienvenido a nuestra web</p>\n\n<script src="app.js" defer></script>'}</Code>
      <p>El atributo <code>id="mensaje"</code> da un nombre único a ese párrafo. <code>defer</code> hace que el archivo JavaScript espere a que exista el HTML.</p>
      <Code>{'// app.js\nconst mensaje = document.getElementById("mensaje");'}</Code>
      <p><code>document</code> representa la página. <code>getElementById</code> busca por id, <code>"mensaje"</code> es el id que buscamos y <code>mensaje</code> es la variable donde guardamos el elemento encontrado.</p>
      <Code>{'mensaje.textContent = "¡Hola desde JavaScript!";'}</Code>
      <p>Al recargar, el texto visible cambia. <code>textContent</code> permite escribir texto dentro de un elemento; lo estudiaremos con más detalle en la siguiente lección.</p>
    </section>

    <aside className="jsm-callout">
      <h2>¿Puedo utilizar siempre getElementById()?</h2>
      <p>Sí. En las aplicaciones sencillas que estamos construyendo puedes usar <code>getElementById()</code> siempre que el elemento tenga un id único.</p>
      <ul><li>Los ids deben ser únicos dentro del documento.</li><li>Es cómodo para formularios, botones, mensajes y contadores concretos.</li><li>Para varios elementos con la misma clase necesitaremos otra herramienta.</li></ul>
      <p>No es obligatorio usar <code>querySelector()</code> si ya puedes seleccionar el elemento por su id. Ambos métodos son válidos.</p>
    </aside>

    <section className="jsm-section">
      <h2>2. querySelector() es otra posibilidad</h2>
      <p>Las dos instrucciones siguientes encuentran el mismo párrafo:</p>
      <Code>{'document.getElementById("mensaje");\ndocument.querySelector("#mensaje");'}</Code>
      <p><code>querySelector()</code> utiliza selectores CSS. El símbolo <code>#</code> significa id. También puede seleccionar el primer elemento de una clase:</p>
      <Code>{'document.querySelector(".destacado");'}</Code>
      <p>Esta instrucción encuentra el primer elemento que tenga la clase <code>destacado</code>.</p>
    </section>

    <section className="jsm-section">
      <h2>3. ¿Qué ocurre si necesitamos varios elementos?</h2>
      <p>Queremos seleccionar tres productos sin poner un id diferente a cada uno.</p>
      <Code>{'<!-- index.html -->\n<p class="producto">Ratón</p>\n<p class="producto">Teclado</p>\n<p class="producto">Monitor</p>'}</Code>
      <Code>{'// app.js\nconst productos = document.querySelectorAll(".producto");\n\nfor (const producto of productos) {\n  console.log(producto.textContent);\n}'}</Code>
      <p><code>querySelectorAll()</code> devuelve una colección llamada <code>NodeList</code>. Podemos recorrerla con <code>for...of</code>, igual que una lista. Contiene las coincidencias que existían cuando hicimos la consulta.</p>
    </section>

    <section className="jsm-section jsm-challenge">
      <h2>Práctica 1 · Cambia un mensaje</h2>
      <p><strong>Objetivo:</strong> localizar un párrafo, guardarlo en una variable y cambiar su texto.</p>
      <Code>{'<!-- index.html -->\n<h1>Mi primera página interactiva</h1>\n<p id="mensaje">Bienvenido a nuestra web</p>\n<script src="app.js" defer></script>'}</Code>
      <ol><li>Localiza el párrafo con su id.</li><li>Guárdalo en una variable.</li><li>Cambia el texto y comprueba el resultado en el navegador.</li></ol>
      <details><summary>Pista 1 · ¿Por dónde empiezo?</summary><p>Conoces el id del párrafo, así que puedes usar <code>document.getElementById()</code>.</p></details>
      <details><summary>Pista 2 · Ayuda con el código</summary><Code>{'const mensaje = document.getElementById("mensaje");\nmensaje.textContent = "Escribe aquí tu nuevo mensaje";'}</Code></details>
      <details><summary>Ver solución explicada</summary><Code>{'const mensaje = document.getElementById("mensaje");\nmensaje.textContent = "¡Hola desde JavaScript!";'}</Code><p>Primero guardamos el párrafo y después cambiamos únicamente el texto que contiene.</p></details>
    </section>

    <section className="jsm-section jsm-challenge">
      <h2>Práctica 2 · Actualiza los productos</h2>
      <p><strong>Objetivo:</strong> seleccionar varios elementos, contar cuántos hay y cambiar el texto de cada uno.</p>
      <Code>{'<!-- index.html -->\n<p class="producto">Ratón</p>\n<p class="producto">Teclado</p>\n<p class="producto">Monitor</p>'}</Code>
      <ol><li>Selecciona todos los productos.</li><li>Comprueba su cantidad con <code>productos.length</code>.</li><li>Recórrelos con <code>for...of</code>.</li><li>Añade <code>" - Disponible"</code> al contenido de cada uno.</li></ol>
      <p><strong>Resultado esperado:</strong> Ratón - Disponible, Teclado - Disponible y Monitor - Disponible.</p>
      <details><summary>Pista 1 · ¿Por dónde empiezo?</summary><p>Necesitas <code>querySelectorAll(".producto")</code> porque hay varios elementos con la misma clase.</p></details>
      <details><summary>Pista 2 · Ayuda con el código</summary><Code>{'for (const producto of productos) {\n  producto.textContent = producto.textContent + " - Disponible";\n}'}</Code></details>
      <details><summary>Ver solución explicada</summary><Code>{'const productos = document.querySelectorAll(".producto");\nconsole.log(productos.length);\n\nfor (const producto of productos) {\n  producto.textContent = producto.textContent + " - Disponible";\n}'}</Code><p>La colección reúne los tres párrafos. El bucle toma uno cada vez y actualiza su texto.</p></details>
    </section>

    <section className="jsm-section">
      <h2>Resumen</h2>
      <div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Método</th><th>Cuándo utilizarlo</th></tr></thead><tbody>
        <tr><td><code>getElementById()</code></td><td>Buscar un elemento con un id conocido.</td></tr>
        <tr><td><code>querySelector()</code></td><td>Buscar el primer elemento que coincide con un selector CSS.</td></tr>
        <tr><td><code>querySelectorAll()</code></td><td>Buscar todos los elementos que coinciden con un selector CSS.</td></tr>
      </tbody></table></div>
    </section>

    <section className="jsm-section"><h2>Errores habituales</h2><ul>
      <li><strong>Escribir <code>#</code> con getElementById:</strong> usa <code>getElementById("mensaje")</code>, sin <code>#</code>.</li>
      <li><strong>Olvidar <code>#</code> o <code>.</code> con querySelector:</strong> usa <code>"#mensaje"</code> para un id y <code>".producto"</code> para una clase.</li>
      <li><strong>Buscar antes de que exista el HTML:</strong> carga el script con <code>defer</code>.</li>
    </ul></section>

    <Next>Ya sabes localizar uno o varios elementos y realizar un primer cambio visible. En la siguiente lección veremos más formas de modificar elementos HTML.</Next>
  </>;
}
