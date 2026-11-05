const Code = ({ children }) => (
  <pre className="jsm-code">
    <code>{children}</code>
  </pre>
);

export default function NamingConventionsLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        Un buen nombre ayuda a entender el código antes incluso de ejecutarlo.
      </p>
      <section className="jsm-goal">
        <h2>Al terminar serás capaz de…</h2>
        <p>
          Reconocer <code>kebab-case</code>, <code>camelCase</code>,{" "}
          <code>PascalCase</code> y <code>UPPER_SNAKE_CASE</code>, y elegir una
          forma coherente para los nombres que usarás durante el curso.
        </p>
      </section>
      <section className="jsm-section">
        <h2>Antes de escribir código: organiza tu proyecto</h2>
        <p>
          Un proyecto pequeño no necesita muchas carpetas. Empezaremos con una
          estructura fácil de entender y ampliaremos solo cuando haya una
          necesidad real.
        </p>
        <Code>{`mi-primer-proyecto/\n├── index.html\n├── styles.css\n├── app.js\n└── assets/\n    ├── images/\n    └── icons/`}</Code>
        <div className="jsm-grid">
          <section>
            <h3>¿Qué carpetas debe tener?</h3>
            <p>
              Al inicio, ninguna es obligatoria. Crea <code>assets</code> cuando
              tengas recursos que guardar y dentro usa carpetas claras como{" "}
              <code>images</code>, <code>icons</code> o <code>fonts</code>.
              Cuando el proyecto crezca, podremos añadir <code>css</code>,{" "}
              <code>js</code> o <code>pages</code>; no hace falta crearlas
              vacías desde el primer día.
            </p>
          </section>
          <section>
            <h3>¿Cuántas hojas de estilo?</h3>
            <p>
              Para los primeros ejercicios usaremos una sola:{" "}
              <code>styles.css</code>. Es más fácil encontrar y revisar los
              estilos. Un proyecto puede tener varias hojas si tiene una razón
              clara —por ejemplo, estilos comunes y estilos de una página
              concreta—, pero cada archivo adicional debe estar enlazado en el
              HTML que lo necesite.
            </p>
          </section>
          <section>
            <h3>¿Puede haber varios HTML?</h3>
            <p>
              Sí. Una web con varias páginas puede tener <code>index.html</code>
              , <code>contacto.html</code> y <code>sobre-mi.html</code>. Cada
              archivo HTML representa una página o documento distinto y puede
              enlazar el mismo <code>styles.css</code> y <code>app.js</code>{" "}
              cuando comparten diseño o comportamiento.
            </p>
          </section>
          <section>
            <h3>
              ¿Cuántos <code>index.html</code>?
            </h3>
            <p>
              Normalmente habrá un <code>index.html</code> en la carpeta
              principal: es la puerta de entrada habitual del sitio. Puede
              existir otro <code>index.html</code> dentro de una subcarpeta, por
              ejemplo <code>proyecto/galeria/index.html</code>, porque cada
              carpeta puede tener su propia portada. No deben convivir dos
              archivos llamados <code>index.html</code> dentro de la misma
              carpeta.
            </p>
          </section>
        </div>
        <aside className="jsm-callout jsm-callout--accent">
          <h3>Regla práctica</h3>
          <p>
            Empieza sencillo. Crea un archivo o carpeta nuevos cuando ayuden a
            encontrar mejor el contenido y ten clara la lógica de organización.
          </p>
        </aside>
      </section>
      <section className="jsm-section">
        <h2>Empezar por una necesidad real</h2>
        <p>
          Imagina que necesitas encontrar el archivo de un formulario dentro de
          un proyecto.
        </p>
        <div className="jsm-grid">
          <section>
            <h3>Difícil de localizar</h3>
            <Code>{`Trabajo Final.js\ntrabajofinalnuevo2.js\nCOSAS.js\narchivo definitivo bueno.js`}</Code>
          </section>
          <section>
            <h3>Claro y previsible</h3>
            <Code>{`app.js\nmenu.js\nformulario-contacto.js`}</Code>
          </section>
        </div>
        <p>
          En programación ponemos nombres constantemente: carpetas, archivos,
          variables, funciones y más adelante otras estructuras. Si seguimos
          unas convenciones, el proyecto se vuelve más fácil de leer, buscar y
          mantener.
        </p>
      </section>
      <section className="jsm-section">
        <h2>¿Qué es una convención?</h2>
        <p>
          Una convención es una forma acordada de escribir nombres. No siempre
          es obligatoria para que el programa funcione, pero hace que el código
          sea comprensible para quien lo escribe y para quien lo lee después.
        </p>
        <div className="jsm-grid">
          <section>
            <h3>Sintaxis</h3>
            <p>
              El lenguaje obliga. En JavaScript, por ejemplo, el guion{" "}
              <code>-</code> no separa palabras en identificadores: es el
              operador de resta o signo negativo. Por eso <code>mi-variable</code>{" "}
              se interpreta como <code>mi - variable</code> y no como un único
              nombre de variable. En variables no debemos usar guion medio;
              conviene usar <code>camelCase</code> (por ejemplo,
              <code>miVariable</code>) o <code>snake_case</code> (por ejemplo,
              <code>mi_variable</code>).
            </p>
          </section>
          <section>
            <h3>Convención</h3>
            <p>
              Los desarrolladores acuerdan una forma habitual de trabajar.
              Usaremos <code>app.js</code> para el archivo JavaScript principal,
              aunque podría tener otro nombre válido.
            </p>
          </section>
        </div>
      </section>
      <section className="jsm-section">
        <h2>Cuatro formas que verás continuamente</h2>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Convención</th>
                <th>Aspecto</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>kebab-case</code>
                </td>
                <td>Palabras separadas por guiones</td>
                <td>
                  <code>formulario-contacto</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>camelCase</code>
                </td>
                <td>
                  Primera palabra minúscula; las siguientes empiezan en
                  mayúscula
                </td>
                <td>
                  <code>nombreUsuario</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>PascalCase</code>
                </td>
                <td>Cada palabra empieza en mayúscula</td>
                <td>
                  <code>UsuarioPremium</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>UPPER_SNAKE_CASE</code>
                </td>
                <td>
                  Mayúsculas separadas por <code>_</code>
                </td>
                <td>
                  <code>MAX_INTENTOS</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="jsm-section">
        <h2>
          <code>kebab-case</code> · Carpetas, archivos y HTML/CSS
        </h2>
        <p>
          Es habitual para carpetas, archivos de varias palabras, clases CSS e
          IDs HTML. Las palabras quedan unidas por guiones, como piezas
          enlazadas.
        </p>
        <Code>{`gestor-tareas/\nformulario-contacto.js\npagina-inicio.html\n\n<section id="formulario-contacto">\n.boton-enviar {\n}`}</Code>
        <p>
          Si el nombre tiene una sola palabra, las minúsculas son suficientes:{" "}
          <code>index.html</code>, <code>styles.css</code> y <code>app.js</code>
          . Cuando tiene varias, usaremos preferentemente{" "}
          <code>kebab-case</code>.
        </p>
      </section>
      <section className="jsm-section">
        <h2>
          <code>camelCase</code> · Los nombres dentro de JavaScript
        </h2>
        <Code>{`nombreUsuario\nprecioFinal\nnumeroPlazas\nmensajeBienvenida`}</Code>
        <p>
          La primera palabra empieza en minúscula y las siguientes en mayúscula:{" "}
          <code>nombre</code> + <code>Usuario</code> se convierte en{" "}
          <code>nombreUsuario</code>. Más adelante verás instrucciones como{" "}
          <code>const nombreUsuario = 'Ana';</code>; ahora solo fíjate en el
          nombre.
        </p>
        <aside className="jsm-callout">
          <h3>
            ¿Por qué no <code>nombre-usuario</code>?
          </h3>
          <p>
            En JavaScript, <code>-</code> representa una resta. El lenguaje
            podría leer <code>nombre - usuario</code> como una operación. Por
            eso utilizaremos principalmente <code>camelCase</code> para nombres
            dentro de JavaScript.
          </p>
        </aside>
      </section>
      <section className="jsm-section">
        <h2>El nombre debe explicar su intención</h2>
        <p>
          Un formato correcto no basta si el nombre no cuenta qué representa.
          Prefiere nombres semánticos: reducen la necesidad de investigar el
          resto del código.
        </p>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Evita</th>
                <th>Mejor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>a</code>
                </td>
                <td>
                  <code>edadUsuario</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>cosa</code>
                </td>
                <td>
                  <code>productoSeleccionado</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>datos1</code>
                </td>
                <td>
                  <code>datosUsuario</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>funcion1()</code>
                </td>
                <td>
                  <code>calcularTotal()</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <aside className="jsm-callout jsm-callout--accent">
          <h3>Regla de oro</h3>
          <p>El nombre debe explicar su intención.</p>
        </aside>
      </section>
      <section className="jsm-section">
        <h2>Pistas que hacen el código más legible</h2>
        <div className="jsm-grid">
          <section>
            <h3>Datos de sí o no</h3>
            <p>
              Cuando un nombre expresa una pregunta, suelen ayudar{" "}
              <code>es...</code>, <code>esta...</code>, <code>tiene...</code>,{" "}
              <code>hay...</code> o <code>puede...</code>:{" "}
              <code>hayPlazas</code>, <code>tieneDescuento</code>,{" "}
              <code>esValido</code>.
            </p>
          </section>
          <section>
            <h3>Uno o varios</h3>
            <p>
              Si representa una colección, el plural suele aclararlo:{" "}
              <code>productos</code>, <code>usuarios</code>,{" "}
              <code>horarios</code>. Para una entidad individual, suele resultar
              natural el singular: <code>producto</code> o <code>usuario</code>.
            </p>
          </section>
          <section>
            <h3>Acciones</h3>
            <p>
              Las funciones suelen empezar con un verbo:{" "}
              <code>calcularTotal()</code>, <code>mostrarMensaje()</code>,{" "}
              <code>abrirMenu()</code> o <code>validarFormulario()</code>.
              Aprenderás qué significan los paréntesis más adelante.
            </p>
          </section>
          <section>
            <h3>Otros formatos</h3>
            <p>
              Usaremos <code>PascalCase</code> cuando lleguemos a clases, como{" "}
              <code>UsuarioPremium</code>. <code>UPPER_SNAKE_CASE</code> queda
              para constantes conceptuales o configuración, como{" "}
              <code>MAX_INTENTOS</code> o <code>IVA_GENERAL</code>; no para
              todas las variables creadas con <code>const</code>.
            </p>
          </section>
        </div>
      </section>
      <section className="jsm-section">
        <h2>HTML/CSS y JavaScript: misma idea, escritura distinta</h2>
        <p>
          Ya has usado convenciones sin llamarlas así. Para un elemento de HTML
          y CSS escribiremos:
        </p>
        <Code>{`HTML/CSS → productos-destacados\nJavaScript → productosDestacados`}</Code>
        <p>
          El nombre conserva la intención; cambia el formato que es habitual en
          cada contexto.
        </p>
      </section>
      <section className="jsm-section">
        <h2>Referencia rápida de nomenclatura</h2>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Convención recomendada</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carpetas</td>
                <td>kebab-case</td>
                <td>
                  <code>gestor-tareas</code>
                </td>
              </tr>
              <tr>
                <td>Archivos de una palabra</td>
                <td>Minúsculas</td>
                <td>
                  <code>app.js</code>
                </td>
              </tr>
              <tr>
                <td>Archivos de varias palabras</td>
                <td>kebab-case</td>
                <td>
                  <code>formulario-contacto.js</code>
                </td>
              </tr>
              <tr>
                <td>Variables</td>
                <td>camelCase</td>
                <td>
                  <code>nombreUsuario</code>
                </td>
              </tr>
              <tr>
                <td>Datos sí/no</td>
                <td>camelCase semántico</td>
                <td>
                  <code>hayPlazas</code>
                </td>
              </tr>
              <tr>
                <td>Colecciones</td>
                <td>Plural cuando ayude</td>
                <td>
                  <code>productos</code>
                </td>
              </tr>
              <tr>
                <td>Funciones</td>
                <td>Verbo + camelCase</td>
                <td>
                  <code>calcularTotal()</code>
                </td>
              </tr>
              <tr>
                <td>Clases</td>
                <td>PascalCase</td>
                <td>
                  <code>UsuarioPremium</code>
                </td>
              </tr>
              <tr>
                <td>Constantes conceptuales</td>
                <td>UPPER_SNAKE_CASE</td>
                <td>
                  <code>MAX_INTENTOS</code>
                </td>
              </tr>
              <tr>
                <td>IDs y clases HTML/CSS</td>
                <td>kebab-case</td>
                <td>
                  <code>boton-enviar</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="jsm-section">
        <h2>¿Qué nombre elegirías?</h2>
        <ol>
          <li>
            Para una carpeta de un gestor de tareas:{" "}
            <code>Gestor de tareas</code>, <code>gestor-tareas</code> o{" "}
            <code>gestorTareas</code>.
          </li>
          <li>
            Para un dato que guarda el nombre de una persona:{" "}
            <code>nombre-usuario</code>, <code>nombreUsuario</code> o{" "}
            <code>NombreUsuario</code>.
          </li>
          <li>
            Para una acción que calcula un precio: <code>precio()</code>,{" "}
            <code>calcularPrecio()</code> o <code>calcular-precio()</code>.
          </li>
          <li>
            Para varios productos: <code>producto</code>, <code>productos</code>{" "}
            o <code>lista1</code>.
          </li>
        </ol>
        <details>
          <summary>Ver propuestas razonadas</summary>
          <p>
            <code>gestor-tareas</code> usa el formato de carpeta;{" "}
            <code>nombreUsuario</code> usa camelCase;{" "}
            <code>calcularPrecio()</code> expresa una acción; y{" "}
            <code>productos</code> comunica que hay varios elementos.
          </p>
        </details>
      </section>
      <section className="jsm-section jsm-challenge">
        <h2>Microreto · Pon orden al proyecto</h2>
        <p>Transforma estos nombres para que sean coherentes:</p>
        <Code>{`Mi Proyecto/\nINDEX.HTML\nMis Estilos.css\nMi Codigo JavaScript.js\n\nNombre Usuario\nPRECIOproducto\nnumero-plazas\nProductos`}</Code>
        <details>
          <summary>Ver una solución posible</summary>
          <Code>{`mi-proyecto/\n├── index.html\n├── styles.css\n└── app.js\n\nnombreUsuario\nprecioProducto\nnumeroPlazas\nproductos`}</Code>
          <p>
            La carpeta y los archivos usan minúsculas y guiones cuando hay
            varias palabras. Los nombres de JavaScript usan camelCase y la
            colección queda en plural.
          </p>
        </details>
      </section>
      <section className="jsm-section jsm-recap">
        <h2>Acabamos de ver</h2>
        <p>
          Las convenciones son herramientas de comunicación, no una lista de
          reglas absolutas. Un buen nombre reduce la cantidad de código que
          necesitamos explicar.
        </p>
        <ul>
          <li>
            Carpeta: <code>kebab-case</code>.
          </li>
          <li>
            Archivo: minúsculas o <code>kebab-case</code>.
          </li>
          <li>
            Nombre de JavaScript: <code>camelCase</code>.
          </li>
          <li>
            Dato sí/no: una pregunta como <code>hayPlazas</code>.
          </li>
          <li>Colección: plural si mejora la lectura.</li>
          <li>
            Acción: verbo, como <code>calcularTotal()</code>.
          </li>
        </ul>
      </section>
      <section className="jsm-next">
        <h2>Lo siguiente</h2>
        <p>
          Ya sabemos cómo vamos a organizar y nombrar nuestro proyecto. Ahora
          vamos a crear <code>app.js</code> y conectarlo por primera vez con{" "}
          <code>index.html</code>.
        </p>
      </section>
    </>
  );
}
