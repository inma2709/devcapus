const Code = ({ children }) => (
  <pre className="jsm-code">
    <code>{children}</code>
  </pre>
);
const Goal = ({ children }) => (
  <section className="jsm-goal">
    <h2>Al terminar serás capaz de…</h2>
    <p>{children}</p>
  </section>
);
const Next = ({ children }) => (
  <section className="jsm-next">
    <h2>Lo siguiente</h2>
    <p>{children}</p>
  </section>
);

export function EventIntroLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        Una página se vuelve interactiva cuando JavaScript responde a algo que
        ha ocurrido.
      </p>
      <Goal>
        Explicar qué es un evento y conectar la acción de una persona con una
        respuesta de JavaScript.
      </Goal>
      <section className="jsm-section">
        <h2>En una página ocurren cosas</h2>
        <div className="jsm-grid">
          <section>
            <code>click</code>
            <p>Una persona pulsa «Ver horarios».</p>
          </section>
          <section>
            <code>input</code>
            <p>Una persona escribe en un buscador.</p>
          </section>
          <section>
            <code>submit</code>
            <p>Una persona intenta enviar un formulario.</p>
          </section>
          <section>
            <code>change</code>
            <p>Una persona selecciona una opción.</p>
          </section>
        </div>
        <p>
          JavaScript puede esperar a que ocurra una de esas acciones y ejecutar
          código como respuesta. Eso es un evento.
        </p>
        <div className="jsm-flow">
          <span>usuario hace algo</span>
          <b>↓</b>
          <span>evento</span>
          <b>↓</b>
          <span>JavaScript lo detecta</span>
          <b>↓</b>
          <span>ejecuta una función</span>
        </div>
      </section>
      <section className="jsm-section jsm-challenge">
        <h2>Piensa antes de escribir</h2>
        <p>
          ¿Qué evento elegirías para reaccionar mientras una persona escribe su
          nombre?
        </p>
        <details>
          <summary>Comprobar</summary>
          <p>
            <code>input</code>. En este bloque priorizaremos <code>click</code>{" "}
            e <code>input</code>; <code>submit</code> llegará con formularios.
          </p>
        </details>
      </section>
      <Next>Empezaremos por el evento más reconocible: click.</Next>
    </>
  );
}
export function ClickLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        <code>click</code> ocurre cuando la persona pulsa un elemento.
      </p>
      <Goal>
        Reconocer un clic como el momento que puede iniciar un cambio en la
        página.
      </Goal>
      <section className="jsm-section">
        <Code>
          {
            '<button id="boton-saludo">Saludar</button>\n\nconst boton = document.querySelector("#boton-saludo");\n\nboton.addEventListener("click", () => {\n  console.log("Has hecho clic");\n});'
          }
        </Code>
        <p>
          El botón existe gracias a HTML, pero no hace nada hasta que JavaScript
          escucha el clic. Cada pulsación ejecutará la función.
        </p>
        <div className="jsm-flow">
          <span>clic en botón</span>
          <b>→</b>
          <span>
            evento <code>click</code>
          </span>
          <b>→</b>
          <span>función</span>
          <b>→</b>
          <span>respuesta</span>
        </div>
      </section>
      <Next>
        Veremos con detalle cómo addEventListener registra esa respuesta.
      </Next>
    </>
  );
}
export function AddEventListenerLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        <code>addEventListener()</code> registra una función para que se ejecute
        después, cuando ocurra un evento.
      </p>
      <Goal>
        Usar <code>addEventListener()</code> y no ejecutar una función por error
        al registrarla.
      </Goal>
      <section className="jsm-section">
        <h2>Traducción de la sintaxis</h2>
        <Code>
          {
            'boton.addEventListener("click", () => {\n  console.log("Has hecho clic");\n});'
          }
        </Code>
        <div className="jsm-flow">
          <span>
            QUIÉN
            <br />
            <code>boton</code>
          </span>
          <b>→</b>
          <span>
            QUÉ ESPERAMOS
            <br />
            <code>\"click\"</code>
          </span>
          <b>→</b>
          <span>
            QUÉ HACEMOS
            <br />
            función
          </span>
        </div>
        <p>
          <strong>
            <code>addEventListener()</code> significa aproximadamente «cuando
            ocurra este evento, ejecuta esta función».
          </strong>
        </p>
      </section>
      <section className="jsm-section">
        <h2>Una función ahora o una función después</h2>
        <Code>
          {
            'function saludar() {\n  console.log("Hola");\n}\n\nsaludar(); // nosotros decidimos ejecutarla ahora\nboton.addEventListener("click", saludar); // se ejecutará al hacer clic'
          }
        </Code>
        <aside className="jsm-callout">
          <h3>Error frecuente</h3>
          <p>
            <code>addEventListener(\"click\", saludar())</code> ejecuta la
            función inmediatamente. Para entregarla al navegador usa{" "}
            <code>saludar</code>, sin paréntesis.
          </p>
        </aside>
      </section>
      <Next>
        El navegador también puede aportar información sobre lo que ha ocurrido.
      </Next>
    </>
  );
}
export function EventObjectLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        El parámetro <code>event</code> representa el evento que acaba de
        ocurrir.
      </p>
      <Goal>
        Reconocer <code>event</code> y consultar qué tipo de evento ha ocurrido.
      </Goal>
      <section className="jsm-section">
        <Code>
          {
            'boton.addEventListener("click", (event) => {\n  console.log(event);\n  console.log(event.type);\n});'
          }
        </Code>
        <p>
          El navegador entrega esa información a la función.{" "}
          <code>event.type</code> indica el tipo de evento: aquí,{" "}
          <code>\"click\"</code>.
        </p>
        <p>
          No necesitamos estudiar todavía todo el objeto. Más adelante será
          útil, por ejemplo, para <code>event.preventDefault()</code> en
          formularios.
        </p>
      </section>
      <section className="jsm-section jsm-challenge">
        <h2>Micropráctica · Inspecciona el evento</h2>
        <p>
          Añade <code>console.log(event.type)</code> al evento de un botón y
          pulsa varias veces.
        </p>
        <details>
          <summary>Qué debes observar</summary>
          <p>
            Console muestra <code>\"click\"</code>, el tipo de evento que se ha
            producido.
          </p>
        </details>
      </section>
      <Next>Ahora responderemos mientras la persona escribe.</Next>
    </>
  );
}
export function InputLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        <code>input</code> ocurre cuando cambia el contenido de un campo.
      </p>
      <Goal>
        Leer <code>.value</code> y cambiar la página mientras la persona
        escribe.
      </Goal>
      <section className="jsm-section">
        <Code>
          {
            '<label for="nombre">Tu nombre</label>\n<input id="nombre" type="text">\n<p id="saludo"></p>\n\nconst inputNombre = document.querySelector("#nombre");\nconst saludo = document.querySelector("#saludo");\n\ninputNombre.addEventListener("input", () => {\n  saludo.textContent = "Hola " + inputNombre.value;\n});'
          }
        </Code>
        <div className="jsm-flow">
          <span>input</span>
          <b>→</b>
          <span>
            <code>.value</code>
            <small>texto actual</small>
          </span>
          <b>→</b>
          <span>
            <code>textContent</code>
          </span>
          <b>→</b>
          <span>saludo visible</span>
        </div>
        <p>
          <code>inputNombre.value</code> es el valor actual escrito dentro del
          campo.
        </p>
      </section>
      <section className="jsm-section jsm-challenge">
        <h2>Práctica · Saludo en directo</h2>
        <h3>Objetivo</h3>
        <p>Mientras alguien escribe «Ana», la página muestra «Hola Ana».</p>
        <h3>Pasos</h3>
        <ol>
          <li>Selecciona input y párrafo.</li>
          <li>
            Escucha <code>input</code>.
          </li>
          <li>
            Lee <code>.value</code>.
          </li>
          <li>
            Actualiza <code>textContent</code>.
          </li>
        </ol>
        <details>
          <summary>Necesito una pista</summary>
          <p>
            Dentro de la función usa{" "}
            <code>saludo.textContent = \"Hola \" + inputNombre.value</code>.
          </p>
        </details>
        <details>
          <summary>Ver solución</summary>
          <Code>
            {
              'inputNombre.addEventListener("input", () => {\n  saludo.textContent = "Hola " + inputNombre.value;\n});'
            }
          </Code>
        </details>
      </section>
      <Next>
        Reuniremos eventos y DOM en tres patrones de interacción habituales.
      </Next>
    </>
  );
}
export function InteractionLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        Los eventos indican cuándo actuar; el DOM indica qué elemento cambia.
      </p>
      <Goal>
        Elegir el patrón básico adecuado para una pequeña interacción.
      </Goal>
      <section className="jsm-section">
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Evento</th>
                <th>Respuesta DOM</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>click</code>
                </td>
                <td>Cambiar texto</td>
                <td>Confirmar una acción</td>
              </tr>
              <tr>
                <td>
                  <code>click</code>
                </td>
                <td>Cambiar clase o atributo</td>
                <td>Abrir un menú</td>
              </tr>
              <tr>
                <td>
                  <code>input</code>
                </td>
                <td>Actualizar contenido</td>
                <td>Saludo en directo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="jsm-flow">
          <span>USUARIO</span>
          <b>↓</b>
          <span>EVENTO</span>
          <b>↓</b>
          <span>FUNCIÓN</span>
          <b>↓</b>
          <span>DOM CAMBIA</span>
        </div>
        <p>
          El DOM responde a «qué elemento quiero modificar». Los eventos
          responden a «cuándo quiero modificarlo».
        </p>
      </section>
      <Next>Aplicarás click para mostrar y ocultar horarios.</Next>
    </>
  );
}
export function SchedulesPracticeLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        Una interacción útil puede ser tan simple como mostrar información solo
        cuando alguien la pide.
      </p>
      <Goal>
        Mostrar y ocultar horarios usando <code>click</code> y{" "}
        <code>toggleAttribute()</code>.
      </Goal>
      <section className="jsm-section jsm-challenge">
        <h2>Práctica · Ver horarios</h2>
        <h3>Enunciado</h3>
        <Code>
          {
            '<button id="ver-horarios">Ver horarios</button>\n<div id="horarios" hidden>\n  <h2>Horarios</h2>\n  <p>Lunes a viernes: 09:00 - 21:00</p>\n  <p>Sábado: 10:00 - 14:00</p>\n</div>'
          }
        </Code>
        <h3>Lo que ya sabes</h3>
        <p>
          Buscar elementos, atributos <code>hidden</code>, <code>click</code> y{" "}
          <code>addEventListener()</code>.
        </p>
        <h3>Pasos</h3>
        <ol>
          <li>Encuentra el botón.</li>
          <li>Encuentra el bloque de horarios.</li>
          <li>
            Escucha <code>click</code>.
          </li>
          <li>
            Alterna el atributo <code>hidden</code>.
          </li>
          <li>Pulsa varias veces y observa qué ocurre.</li>
        </ol>
        <details>
          <summary>Necesito una pista</summary>
          <p>
            <code>toggleAttribute()</code> añade o elimina automáticamente un
            atributo.
          </p>
        </details>
        <details>
          <summary>Ver solución</summary>
          <Code>
            {
              'const boton = document.querySelector("#ver-horarios");\nconst horarios = document.querySelector("#horarios");\n\nboton.addEventListener("click", () => {\n  horarios.toggleAttribute("hidden");\n});'
            }
          </Code>
        </details>
        <p>
          <strong>Qué debes observar:</strong> cada clic cambia el estado del
          mismo elemento.
        </p>
      </section>
      <Next>Volveremos al menú para comprender por qué el clic lo abre.</Next>
    </>
  );
}
export function MenuEventPracticeLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        El menú hamburguesa ya usaba classList; ahora el centro es entender qué
        dispara ese cambio.
      </p>
      <Goal>Completar el código del evento que abre y cierra un menú.</Goal>
      <section className="jsm-section jsm-challenge">
        <h2>Práctica · Mostrar y ocultar menú</h2>
        <p>
          HTML y CSS ya están preparados. Completa solo JavaScript para que el
          clic alterne <code>abierto</code>.
        </p>
        <Code>
          {
            'const botonMenu = document.querySelector("#boton-menu");\nconst menu = document.querySelector("#menu-principal");\n\n// Completa el evento aquí'
          }
        </Code>
        <div className="jsm-flow">
          <span>click</span>
          <b>↓</b>
          <span>
            <code>addEventListener</code> detecta
          </span>
          <b>↓</b>
          <span>función se ejecuta</span>
          <b>↓</b>
          <span>
            <code>classList</code> cambia
          </span>
          <b>↓</b>
          <span>CSS responde</span>
        </div>
        <details>
          <summary>Necesito una pista</summary>
          <p>
            Escucha <code>\"click\"</code> en <code>botonMenu</code> y usa{" "}
            <code>menu.classList.toggle(\"abierto\")</code>.
          </p>
        </details>
        <details>
          <summary>Ver solución</summary>
          <Code>
            {
              'botonMenu.addEventListener("click", () => {\n  menu.classList.toggle("abierto");\n});'
            }
          </Code>
        </details>
      </section>
      <Next>
        El contador reunirá variables, operaciones, click y actualización
        visible.
      </Next>
    </>
  );
}
export function CounterPracticeLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        Un contador muestra con claridad que cada clic puede modificar un dato y
        volver a dibujar la interfaz.
      </p>
      <Goal>
        Actualizar un contador visible cada vez que se pulsa un botón.
      </Goal>
      <section className="jsm-section jsm-challenge">
        <h2>Práctica · Contador</h2>
        <Code>
          {
            '<section class="contador">\n  <h2>Contador</h2>\n  <p id="numero">0</p>\n  <button id="aumentar">+1</button>\n</section>\n\nlet contador = 0;'
          }
        </Code>
        <h3>Pasos</h3>
        <ol>
          <li>
            Selecciona <code>#numero</code> y <code>#aumentar</code>.
          </li>
          <li>
            Escucha <code>click</code>.
          </li>
          <li>
            Dentro del evento, suma uno: <code>contador = contador + 1</code>.
          </li>
          <li>
            Actualiza <code>numero.textContent</code>.
          </li>
          <li>
            Después reconoce <code>contador++</code> como abreviatura.
          </li>
        </ol>
        <details>
          <summary>Necesito una pista</summary>
          <p>
            El orden importa: primero cambia la variable; después muestra su
            valor nuevo.
          </p>
        </details>
        <details>
          <summary>Ver solución</summary>
          <Code>
            {
              'let contador = 0;\nconst numero = document.getElementById("numero");\nconst aumentar = document.getElementById("aumentar");\n\naumentar.addEventListener("click", () => {\n  contador = contador + 1;\n  numero.textContent = contador;\n});'
            }
          </Code>
        </details>
        <p>
          <strong>Qué debes observar:</strong> 0 → 1 → 2 → 3. La variable
          conserva el dato; el DOM lo muestra.
        </p>
      </section>
      <section className="jsm-section">
        <h2>Reto opcional</h2>
        <p>
          Añade botones <code>-1</code> y «Reiniciar». ¿Qué valor debe asignarse
          a <code>contador</code> al reiniciar?
        </p>
        <details>
          <summary>Pistas progresivas</summary>
          <p>
            Para restar usa <code>contador = contador - 1</code>. Para
            reiniciar, asigna <code>0</code> y vuelve a actualizar{" "}
            <code>numero.textContent</code>.
          </p>
        </details>
        <details>
          <summary>Ver una solución posible</summary>
          <Code>
            {
              'restar.addEventListener("click", () => {\n  contador = contador - 1;\n  numero.textContent = contador;\n});\n\nreiniciar.addEventListener("click", () => {\n  contador = 0;\n  numero.textContent = contador;\n});'
            }
          </Code>
        </details>
      </section>
      <section className="jsm-section jsm-recap">
        <h2>Referencia rápida y errores frecuentes</h2>
        <Code>
          {
            'elemento.addEventListener("click", () => {});\ncampo.addEventListener("input", () => {});\ncampo.value\nevent\nevent.type'
          }
        </Code>
        <div className="jsm-grid">
          <section>
            <h3>Comillas</h3>
            <p>
              <code>\"click\"</code> es texto; no escribas <code>click</code>{" "}
              sin comillas.
            </p>
          </section>
          <section>
            <h3>Función después</h3>
            <p>
              Usa <code>saludar</code>, no <code>saludar()</code>, al
              registrarla.
            </p>
          </section>
          <section>
            <h3>Selector real</h3>
            <p>Comprueba que el id buscado coincide exactamente con el HTML.</p>
          </section>
          <section>
            <h3>Evento y función</h3>
            <p>
              <code>click</code> es el evento; la función es la respuesta.
            </p>
          </section>
        </div>
        <h3>Preguntas de repaso</h3>
        <ol>
          <li>¿Qué es un evento?</li>
          <li>
            ¿Para qué sirve <code>addEventListener()</code>?
          </li>
          <li>
            ¿Qué información ofrece <code>event.type</code>?
          </li>
          <li>
            ¿Cuándo se dispara <code>input</code>?
          </li>
          <li>
            ¿Qué devuelve <code>.value</code>?
          </li>
          <li>¿Por qué una página con eventos es interactiva?</li>
        </ol>
      </section>
      <Next>
        HTML contiene la interfaz; JavaScript escucha acciones y responde. Ahora
        aprenderás a recoger varios datos del usuario de forma organizada:
        formularios.
      </Next>
    </>
  );
}
