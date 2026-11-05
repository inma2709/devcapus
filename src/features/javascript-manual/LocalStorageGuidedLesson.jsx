import persistenciaLocalStorageJson from "../../assets/persistencia-localstorage-json.png";

const Code = ({ children }) => (
  <pre className="jsm-code">
    <code>{children}</code>
  </pre>
);
const Goal = ({ children }) => (
  <section className="jsm-goal">
    <h2>Al terminar serás capaz de…</h2>
    {children}
  </section>
);
const Next = ({ children }) => (
  <section className="jsm-next">
    <h2>Lo siguiente</h2>
    <p>{children}</p>
  </section>
);

export default function LocalStorageGuidedLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        Nuestro carrito de TecnoAula ya funciona. Ahora conseguiremos que
        recuerde los productos incluso después de actualizar la página.
      </p>
      <figure className="jsm-infographic">
        <img
          src={persistenciaLocalStorageJson}
          alt="Infografía del flujo entre un array, JSON y localStorage."
        />
        <figcaption>
          Guía visual: el array se convierte en texto para guardarlo y se
          recupera antes de volver a mostrarlo.
        </figcaption>
      </figure>
      <Goal>
        <ul>
          <li>Explicar por qué un array se pierde al recargar.</li>
          <li>
            Guardar y recuperar textos con <code>localStorage</code>.
          </li>
          <li>Convertir un carrito entre array y JSON.</li>
          <li>Hacer que TecnoAula recuerde su carrito.</li>
        </ul>
      </Goal>
      <section className="jsm-section">
        <h2>1. ¿Por qué desaparece nuestro carrito?</h2>
        <p>
          En TecnoAula podemos añadir productos, quitarlos y calcular el total.
          Pero al recargar JavaScript comienza de nuevo:
        </p>
        <Code>{"const carrito = []; "}</Code>
        <p>
          Se crea otro array vacío y se pierden los productos que habíamos
          seleccionado. <code>localStorage</code> permite guardar una copia
          local en el navegador para recuperarla más tarde. No es un servidor:
          los datos pertenecen a este navegador y a esta web.
        </p>
        <div className="jsm-flow">
          <span>array mientras se ejecuta JavaScript</span>
          <b>→</b>
          <span>recargar</span>
          <b>→</b>
          <span>array vacío otra vez</span>
        </div>
      </section>
      <section className="jsm-section">
        <h2>
          2. ¿Qué es <code>localStorage</code>?
        </h2>
        <p>
          Guarda textos mediante pares de clave y valor. Para recuperar algo
          debes utilizar la misma clave.
        </p>
        <Code>
          {
            'localStorage.setItem("tienda", "TecnoAula");\n\nconst nombre = localStorage.getItem("tienda");\nconsole.log(nombre); // TecnoAula\n\nlocalStorage.removeItem("tienda");'
          }
        </Code>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Método</th>
                <th>Para qué sirve</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>setItem(clave, valor)</code>
                </td>
                <td>Guardar un texto.</td>
              </tr>
              <tr>
                <td>
                  <code>getItem(clave)</code>
                </td>
                <td>
                  Recuperar el texto, o <code>null</code> si no existe.
                </td>
              </tr>
              <tr>
                <td>
                  <code>removeItem(clave)</code>
                </td>
                <td>Eliminar esa clave y su valor.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <aside className="jsm-callout">
          <p>
            <code>localStorage.clear()</code> elimina todas las claves de esta
            web. Es una referencia útil, pero no lo uses en los ejercicios.
          </p>
        </aside>
        <details>
          <summary>Micropráctica · Prueba un texto en Console</summary>
          <p>
            Ejecuta{" "}
            <code>localStorage.setItem("saludo", "Hola desde TecnoAula")</code>.
            Recarga y consulta <code>localStorage.getItem("saludo")</code>.
            Después elimina solo ese dato con <code>removeItem("saludo")</code>.
          </p>
        </details>
      </section>
      <section className="jsm-section">
        <h2>3. Nuestro carrito es un array: necesitamos JSON</h2>
        <p>
          <code>localStorage</code> guarda texto, pero el carrito contiene un
          array de objetos.
        </p>
        <Code>
          {
            'const carrito = [\n  { id: 1, nombre: "Teclado", precio: 35 },\n  { id: 2, nombre: "Ratón", precio: 20 }\n];\n\nconst texto = JSON.stringify(carrito);\nconst recuperado = JSON.parse(texto);'
          }
        </Code>
        <p>
          <code>JSON.stringify()</code> convierte datos JavaScript en texto
          JSON. <code>JSON.parse()</code> hace el recorrido inverso. Convertir
          no es guardar: quien almacena el texto es{" "}
          <code>localStorage.setItem()</code>.
        </p>
        <div className="jsm-flow">
          <span>Array</span>
          <b>→</b>
          <span>
            <code>JSON.stringify()</code>
          </span>
          <b>→</b>
          <span>texto JSON</span>
          <b>→</b>
          <span>
            <code>setItem()</code>
          </span>
        </div>
        <div className="jsm-flow">
          <span>
            <code>getItem()</code>
          </span>
          <b>→</b>
          <span>texto JSON</span>
          <b>→</b>
          <span>
            <code>JSON.parse()</code>
          </span>
          <b>→</b>
          <span>Array</span>
        </div>
        <details>
          <summary>Comprobación</summary>
          <p>
            ¿<code>JSON.stringify(carrito)</code> guarda el carrito en el
            navegador o solo lo convierte en texto?
          </p>
        </details>
        <details>
          <summary>Ver respuesta</summary>
          <p>
            Solo lo convierte en texto. Debemos entregar ese texto a{" "}
            <code>localStorage.setItem()</code> para almacenarlo.
          </p>
        </details>
      </section>
      <section className="jsm-section">
        <h2>4. Guardamos el carrito de TecnoAula</h2>
        <p>
          No vamos a rehacer la tienda. Añadimos una función pequeña al código
          que ya tienes:
        </p>
        <Code>
          {
            'function guardarCarrito() {\n  localStorage.setItem("tecnoaula_carrito", JSON.stringify(carrito));\n}'
          }
        </Code>
        <p>
          Después de cambiar el array, guardamos su estado actualizado. Mostrar
          la pantalla sigue siendo una operación distinta.
        </p>
        <Code>
          {
            "function agregarCarrito(id) {\n  const producto = productos.find(producto => producto.id === id);\n\n  if (producto) {\n    carrito.push(producto);\n    guardarCarrito(); // nuevo\n  }\n\n  mostrarCarrito();\n  calcularTotal();\n}\n\nfunction eliminarCarrito(posicion) {\n  carrito.splice(posicion, 1);\n  guardarCarrito(); // nuevo\n  mostrarCarrito();\n  calcularTotal();\n}"
          }
        </Code>
        <div className="jsm-flow">
          <span>
            Modificar array
            <br />
            <small>
              <code>push()</code> / <code>splice()</code>
            </small>
          </span>
          <b>→</b>
          <span>
            Guardar datos
            <br />
            <small>
              <code>guardarCarrito()</code>
            </small>
          </span>
          <b>→</b>
          <span>Actualizar DOM</span>
        </div>
      </section>
      <section className="jsm-section">
        <h2>5. Recuperamos el carrito al abrir la página</h2>
        <p>
          Sustituye la declaración original <code>const carrito = []</code> por
          este inicio:
        </p>
        <Code>
          {
            'let carrito = [];\n\nconst guardado = localStorage.getItem("tecnoaula_carrito");\n\nif (guardado !== null) {\n  carrito = JSON.parse(guardado);\n}'
          }
        </Code>
        <p>
          Usamos <code>let</code> porque, si existen datos guardados, vamos a
          asignar a <code>carrito</code> el array recuperado. Si no existe la
          clave, <code>getItem()</code> devuelve <code>null</code> y mantenemos
          el array vacío. Este ejemplo asume que nuestra aplicación ha guardado
          JSON válido.
        </p>
        <Code>{"mostrarCarrito();\ncalcularTotal();"}</Code>
        <p>
          Recuperar el array no actualiza el HTML automáticamente. Estas dos
          funciones vuelven a dibujar los productos y su total al abrir la
          página.
        </p>
      </section>
      <section className="jsm-section jsm-challenge">
        <h2>6. Práctica final · TecnoAula recuerda tu carrito</h2>
        <p>
          <strong>Objetivo:</strong> añade un Teclado y un Ratón, actualiza la
          página y comprueba que siguen en el carrito con un total de 55 €.
          Después elimina el Ratón, recarga y confirma que ya no vuelve.
        </p>
        <Code>
          {
            '// PASO 1 · Permite recuperar un array nuevo.\nlet carrito = [];\n\n// PASO 2 · Recupera el texto con getItem().\n// Si existe, conviértelo en array con JSON.parse().\n\n// PASO 3 · Completa esta función.\nfunction guardarCarrito() {\n  // Convierte carrito con JSON.stringify()\n  // y guárdalo con la clave "tecnoaula_carrito".\n}\n\n// PASO 4 · Tras push() o splice(), llama a guardarCarrito().\n\n// PASO 5 · Al cargar: mostrarCarrito(); y calcularTotal();'
          }
        </Code>
        <details>
          <summary>Pista conceptual</summary>
          <p>
            El flujo al abrir es recuperar → reconstruir array → mostrar. El
            flujo cuando cambia es modificar array → guardar → mostrar.
          </p>
        </details>
        <details>
          <summary>Pista de sintaxis</summary>
          <Code>
            {
              'const guardado = localStorage.getItem("tecnoaula_carrito");\nif (guardado !== null) {\n  carrito = JSON.parse(guardado);\n}\n\nlocalStorage.setItem("tecnoaula_carrito", JSON.stringify(carrito));'
            }
          </Code>
        </details>
        <details>
          <summary>Ver solución de la parte nueva</summary>
          <Code>
            {
              'let carrito = [];\n\nconst guardado = localStorage.getItem("tecnoaula_carrito");\nif (guardado !== null) {\n  carrito = JSON.parse(guardado);\n}\n\nfunction guardarCarrito() {\n  localStorage.setItem("tecnoaula_carrito", JSON.stringify(carrito));\n}\n\n// Dentro de agregarCarrito(), después de push():\nguardarCarrito();\n\n// Dentro de eliminarCarrito(), después de splice():\nguardarCarrito();\n\nmostrarCarrito();\ncalcularTotal();'
            }
          </Code>
          <p>
            La única novedad es conservar el array tras cada modificación y
            recuperarlo antes de representarlo. Las funciones de carrito que ya
            conocías siguen haciendo su mismo trabajo.
          </p>
        </details>
      </section>
      <section className="jsm-section jsm-recap">
        <h2>Resumen</h2>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Instrucción</th>
                <th>Qué hace</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>setItem()</code>
                </td>
                <td>Guarda un texto.</td>
              </tr>
              <tr>
                <td>
                  <code>getItem()</code>
                </td>
                <td>
                  Recupera un texto o <code>null</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>JSON.stringify()</code>
                </td>
                <td>Convierte datos JavaScript en texto JSON.</td>
              </tr>
              <tr>
                <td>
                  <code>JSON.parse()</code>
                </td>
                <td>Convierte texto JSON en datos JavaScript.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          La idea esencial es: modificamos el array, lo guardamos en el
          navegador y, al volver a abrir la tienda, lo recuperamos para
          mostrarlo de nuevo. <code>localStorage</code> no sustituye a una base
          de datos y no debe guardar contraseñas ni información sensible.
        </p>
      </section>
      <Next>
        El siguiente bloque profundiza en cómo se coordina el código cuando
        algunas tareas no terminan inmediatamente.
      </Next>
    </>
  );
}
