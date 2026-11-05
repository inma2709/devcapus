import { useState } from "react";

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
const Practice = ({ title, children, solution, why }) => (
  <section className="jsm-section jsm-challenge">
    <h2>{title}</h2>
    {children}
    <details>
      <summary>Ver solución explicada</summary>
      <Code>{solution}</Code>
      <p>
        <strong>Por qué funciona:</strong> {why}
      </p>
    </details>
  </section>
);

export function FunctionIntroLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        Una función guarda una tarea con nombre para reutilizarla sin copiar
        instrucciones.
      </p>
      <Goal>
        Explicar qué es una función, distinguir declaración y llamada, y crear
        una función sin parámetros.
      </Goal>
      <figure className="jsm-infographic">
        <img
          src="/recursos/guia-funciones-javascript.png"
          alt="Guía visual sobre reutilización, parámetros y return en las funciones de JavaScript."
        />
        <figcaption>
          Guía visual para relacionar la declaración, las llamadas, los
          parámetros y el valor devuelto.
        </figcaption>
      </figure>
      <section className="jsm-section">
        <h2>Del código repetido a una tarea reutilizable</h2>
        <Code>{`console.log("Hola");
console.log("Hola");
console.log("Hola");

function saludar() {
  console.log("Hola");
}

saludar();
saludar();
saludar();`}</Code>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Parte</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>function</code>
                </td>
                <td>Indica que vamos a declarar una función.</td>
              </tr>
              <tr>
                <td>
                  <code>saludar</code>
                </td>
                <td>Es el nombre de la tarea; debe explicar qué hace.</td>
              </tr>
              <tr>
                <td>
                  <code>()</code>
                </td>
                <td>Por ahora no recibe datos: no hay parámetros.</td>
              </tr>
              <tr>
                <td>
                  <code>{"{ ... }"}</code>
                </td>
                <td>Guarda las instrucciones que se ejecutarán después.</td>
              </tr>
              <tr>
                <td>
                  <code>saludar()</code>
                </td>
                <td>Es la llamada: ahora se ejecuta el código interior.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Declarar <code>saludar</code> no muestra nada. Cada llamada{" "}
          <code>saludar()</code> ejecuta una vez lo que hay entre llaves.
        </p>
      </section>
      <Practice
        title="Práctica guiada · Predice las llamadas"
        solution={`function avisar() {
  console.log("Listo");
}

avisar();
avisar();
// Console muestra "Listo" dos veces.`}
        why="La declaración prepara la función; hay dos llamadas y, por tanto, dos ejecuciones."
      >
        <p>¿Cuántas veces muestra “Listo” el siguiente programa?</p>
        <Code>{`function avisar() {
  console.log("Listo");
}
avisar();
avisar();`}</Code>
      </Practice>
    </>
  );
}

export function HtmlFunctionsLesson() {
  const [name, setName] = useState("Ana");
  const [message, setMessage] = useState("Aquí aparecerá el saludo.");
  const greet = () =>
    setMessage(
      name.trim()
        ? `Hola, ${name.trim()}.`
        : "Escribe tu nombre para saludarte.",
    );
  return (
    <>
      <p className="jsm-subtitle">
        La misma función puede ejecutarse desde un botón y escribir un resultado
        visible en HTML.
      </p>
      <Goal>
        Conectar un input, un botón y un resultado con <code>onclick</code>,{" "}
        <code>getElementById()</code>, <code>.value</code> y{" "}
        <code>textContent</code>.
      </Goal>
      <section className="jsm-section">
        <h2>Del input al resultado</h2>
        <p>
          Un botón con <code>onclick</code> indica la función que debe
          ejecutarse. La función lee el texto del input mediante{" "}
          <code>.value</code> y escribe un mensaje con <code>textContent</code>.
          No presentamos <code>addEventListener()</code> en esta etapa.
        </p>
        <Code>{`<input id="nombre" />
<button onclick="saludarInicial()">Saludar</button>
<p id="saludo"></p>

function saludarInicial() {
  const nombre = document.getElementById("nombre").value;
  document.getElementById("saludo").textContent = "Hola, " + nombre;
}`}</Code>
        <div className="jsm-flow">
          <span>input</span>
          <b>→</b>
          <span>botón</span>
          <b>→</b>
          <span>función</span>
          <b>→</b>
          <span>resultado HTML</span>
        </div>
        <div className="jsm-demo">
          <label>
            Tu nombre
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <button type="button" onClick={greet}>
            Saludar
          </button>
          <p aria-live="polite">{message}</p>
        </div>
      </section>
      <Practice
        title="Práctica guiada · Limpia el saludo"
        solution={`function limpiarSaludo() {
  document.getElementById("saludo").textContent = "";
}`}
        why="textContent recibe una cadena vacía y elimina solo el texto que muestra el párrafo."
      >
        <p>
          <strong>Objetivo:</strong> crea un segundo botón con{" "}
          <code>onclick="limpiarSaludo()"</code>.
        </p>
      </Practice>
    </>
  );
}

export function AgeFunctionLesson() {
  const [age, setAge] = useState("17");
  const [result, setResult] = useState("La edad aparecerá aquí.");
  const showAge = () =>
    setResult(age === "" ? "Escribe una edad." : `Tienes ${age} años.`);
  return (
    <>
      <p className="jsm-subtitle">
        Dos funciones pequeñas pueden tener responsabilidades distintas dentro
        de la misma página.
      </p>
      <Goal>
        Crear una función independiente que lea una edad y muestre su resultado
        usando identificadores HTML únicos.
      </Goal>
      <section className="jsm-section">
        <h2>Una segunda tarea</h2>
        <p>
          Usar IDs distintos evita que JavaScript confunda un resultado con
          otro. Una función puede saludar; otra puede ocuparse solo de la edad.
        </p>
        <Code>{`function mostrarEdad() {
  const edad = document.getElementById("edad").value;
  document.getElementById("resultadoEdad").textContent =
    "Tienes " + edad + " años.";
}`}</Code>
        <div className="jsm-demo">
          <label>
            Edad
            <input
              type="number"
              min="0"
              step="1"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
          <button type="button" onClick={showAge}>
            Mostrar edad
          </button>
          <p aria-live="polite">{result}</p>
        </div>
      </section>
      <Practice
        title="Ejercicio autónomo · Un tercer resultado"
        solution={`function mostrarDespedida() {
  document.getElementById("resultadoDespedida").textContent =
    "Hasta pronto";
}`}
        why="El nuevo resultado necesita su propio ID para que la función encuentre exactamente ese elemento."
      >
        <p>
          Crea <code>mostrarDespedida()</code> y un párrafo{" "}
          <code>id="resultadoDespedida"</code>.
        </p>
      </Practice>
    </>
  );
}

export function FunctionsLoopsProjectLesson() {
  const [name, setName] = useState("Ana");
  const [result, setResult] = useState("Aquí se verán las tres líneas.");
  const repeat = () => {
    if (!name.trim()) {
      setResult("Escribe tu nombre primero.");
      return;
    }
    let text = "";
    for (let i = 0; i < 3; i++) text += `Hola de nuevo, ${name.trim()}.\n`;
    setResult(text);
  };
  return (
    <>
      <p className="jsm-subtitle">
        Un bucle dentro de una función permite repetir una tarea sin copiar tres
        veces el mismo código.
      </p>
      <Goal>
        Usar un contador, <code>+=</code> y <code>\n</code> para construir un
        saludo repetido.
      </Goal>
      <section className="jsm-section">
        <h2>Saludar tres veces</h2>
        <Code>{`function repetirSaludo(nombre) {
  let veces = 3;
  let mensaje = "";

  for (let i = 0; i < veces; i++) {
    mensaje += "Hola de nuevo, " + nombre + "\\n";
  }

  document.getElementById("saludoRepetido").textContent = mensaje;
}`}</Code>
        <ul>
          <li>
            <code>i</code> es el contador: toma los valores 0, 1 y 2.
          </li>
          <li>
            La condición <code>i &lt; veces</code> permite exactamente tres
            vueltas.
          </li>
          <li>
            <code>+=</code> conserva el texto anterior y añade el nuevo saludo.
          </li>
          <li>
            <code>\n</code> representa un salto de línea. El resultado necesita{" "}
            <code>white-space: pre-line</code> en CSS para mostrarlo.
          </li>
        </ul>
        <div className="jsm-demo">
          <label>
            Nombre
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <button type="button" onClick={repeat}>
            Saludar tres veces
          </button>
          <p className="jsm-demo__multiline" aria-live="polite">
            {result}
          </p>
        </div>
      </section>
      <Practice
        title="Ejercicio autónomo · Numera los saludos"
        solution={`mensaje += "Saludo " + (i + 1) + ": Hola, " + nombre + "\\n";`}
        why="El contador empieza en 0, así que se suma 1 solo para mostrar una numeración humana."
      >
        <p>
          Modifica la línea de acumulación para que aparezcan “Saludo 1”,
          “Saludo 2” y “Saludo 3”.
        </p>
      </Practice>
    </>
  );
}

export function FunctionsConditionsProjectLesson() {
  const [age, setAge] = useState("17");
  const [result, setResult] = useState("Aquí aparecerá el resultado.");
  const check = () => {
    const value = Number(age);
    setResult(
      age === "" || Number.isNaN(value) || value < 0
        ? "Escribe una edad válida."
        : value >= 18
          ? "Eres mayor de edad."
          : "Eres menor de edad.",
    );
  };
  return (
    <>
      <p className="jsm-subtitle">
        Una función puede recibir un dato, decidir con if...else y escribir una
        respuesta útil en la página.
      </p>
      <Goal>
        Combinar <code>Number()</code>, un condicional y{" "}
        <code>textContent</code> al comprobar una edad.
      </Goal>
      <section className="jsm-section">
        <h2>Decidir según la edad</h2>
        <Code>{`function comprobarEdadDirecta() {
  const edad = Number(document.getElementById("edad").value);
  let mensaje;

  if (edad >= 18) {
    mensaje = "Eres mayor de edad.";
  } else {
    mensaje = "Eres menor de edad.";
  }

  document.getElementById("resultadoEdad").textContent = mensaje;
}`}</Code>
        <p>
          Los inputs entregan texto. <code>Number()</code> convierte ese texto
          antes de compararlo. El bloque <code>if</code> elige un camino y{" "}
          <code>else</code> el otro.
        </p>
        <div className="jsm-demo">
          <label>
            Edad
            <input
              type="number"
              min="0"
              step="1"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
          <button type="button" onClick={check}>
            Comprobar edad
          </button>
          <p aria-live="polite">{result}</p>
        </div>
      </section>
      <Practice
        title="Ejercicio autónomo · Estado de una nota"
        solution={`function estadoNota(nota) {
  if (nota >= 5) return "Aprobado";
  return "Pendiente";
}`}
        why="Cada camino devuelve un texto. Otra instrucción podrá mostrarlo más adelante."
      >
        <p>
          Escribe <code>estadoNota(nota)</code> para devolver “Aprobado” desde
          5.
        </p>
      </Practice>
    </>
  );
}

export function ReturnProjectLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        Return aparece ahora para transformar las funciones del proyecto en
        piezas que entregan resultados reutilizables.
      </p>
      <Goal>
        Distinguir una función que actúa directamente sobre HTML de otra que
        devuelve un valor y aprender a mostrar ese valor después.
      </Goal>
      <section className="jsm-section">
        <h2>Primero: escribir directamente</h2>
        <Code>{`function saludar(nombre) {
  document.getElementById("saludo").textContent = "Hola, " + nombre;
}`}</Code>
        <h2>Después: devolver el saludo</h2>
        <Code>{`function saludar(nombre) {
  return "Hola, " + nombre;
}

const mensaje = saludar("Ana");
document.getElementById("saludo").textContent = mensaje;`}</Code>
        <p>
          <code>return</code> entrega un valor a la llamada, pero no lo muestra.{" "}
          <code>console.log()</code> muestra algo en consola, pero no lo
          entrega. Una función sin retorno explícito devuelve{" "}
          <code>undefined</code>; al ejecutar <code>return</code>, esa función
          termina.
        </p>
        <Code>{`function calcularDoble(numero) {
  return numero * 2;
}

const doble = calcularDoble(5);
const resultado = doble + 3; // 13`}</Code>
      </section>
      <Practice
        title="Ejercicio autónomo · Devuelve la suma"
        solution={`function sumar(a, b) {
  return a + b;
}

const total = sumar(2, 3); // 5`}
        why="La llamada se comporta como el valor devuelto, por eso puede guardarse en total."
      >
        <p>
          Cambia un <code>console.log(a + b)</code> por lo necesario para que
          una variable pueda guardar el resultado.
        </p>
      </Practice>
    </>
  );
}

export function FunctionsCollaborationLesson() {
  const [name, setName] = useState("Ana"),
    [age, setAge] = useState("17"),
    [result, setResult] = useState("Introduce tus datos y pulsa el botón.");
  const greet = (name) => `Hola, ${name}.`;
  const ageMessage = (age) =>
    Number.isNaN(age) || age < 0
      ? "Edad no válida."
      : age >= 18
        ? "Eres mayor de edad."
        : "Eres menor de edad.";
  const show = () => {
    if (!name.trim()) {
      setResult("Escribe tu nombre para mostrar tus datos.");
      return;
    }
    setResult(`${greet(name.trim())}\n${ageMessage(Number(age))}`);
  };
  return (
    <>
      <p className="jsm-subtitle">
        Una función coordinadora puede leer la página y delegar tareas en
        funciones auxiliares que devuelven resultados.
      </p>
      <Goal>
        Construir <code>mostrarDatos()</code> para coordinar saludo,
        comprobación de edad y salida en HTML.
      </Goal>
      <section className="jsm-section">
        <h2>Un botón, tres funciones</h2>
        <Code>{`function saludar(nombre) {
  return "Hola, " + nombre;
}

function comprobarEdad(edad) {
  if (edad >= 18) return "Eres mayor de edad.";
  return "Eres menor de edad.";
}

function mostrarDatos() {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = Number(document.getElementById("edad").value);
  const saludo = saludar(nombre);
  const mensajeEdad = comprobarEdad(edad);
  document.getElementById("resultado").textContent = saludo + "\\n" + mensajeEdad;
}`}</Code>
        <div className="jsm-flow">
          <span>inputs</span>
          <b>→</b>
          <span>mostrarDatos()</span>
          <b>→</b>
          <span>funciones auxiliares</span>
          <b>→</b>
          <span>return</span>
          <b>→</b>
          <span>HTML</span>
        </div>
        <p>
          Un botón único no obliga a usar <code>return</code>. Lo usamos porque{" "}
          <code>saludar()</code> y <code>comprobarEdad()</code> pueden
          reutilizarse sin conocer los IDs de la página.
        </p>
        <div className="jsm-demo">
          <label>
            Nombre
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Edad
            <input
              type="number"
              min="0"
              step="1"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
          <button type="button" onClick={show}>
            Mostrar mis datos
          </button>
          <p className="jsm-demo__multiline" aria-live="polite">
            {result}
          </p>
        </div>
      </section>
      <Practice
        title="Ejercicio autónomo · Valida antes de comparar"
        solution={`if (Number.isNaN(edad) || edad < 0) {
  return "Edad no válida.";
}`}
        why="La validación debe ocurrir antes de decidir si la persona es mayor o menor de edad."
      >
        <p>
          Añade un primer camino a <code>comprobarEdad(edad)</code> para edades
          no válidas.
        </p>
      </Practice>
    </>
  );
}

export function ArrowAndErrorsLesson() {
  const [answers, setAnswers] = useState({});
  const questions = [
    {
      id: "suma",
      code: "const sumar = (a, b) => a + b;\\n\\nconsole.log(sumar(3, 5));",
      options: ["3 y 5", "8", "undefined"],
      correct: "8",
      why: "La llamada entrega 3 y 5; la expresión devuelve 8.",
    },
    {
      id: "return",
      code: "const duplicar = (n) => {\\n  n * 2;\\n};\\n\\nconsole.log(duplicar(4));",
      options: ["8", "4", "undefined"],
      correct: "undefined",
      why: "Al usar llaves necesitamos return para devolver el resultado.",
    },
    {
      id: "llamada",
      code: 'const saludar = () => "Hola";',
      options: ["saludar()", "const saludar", "=> saludar"],
      correct: "saludar()",
      why: "Los paréntesis de la llamada ejecutan la función.",
    },
  ];
  return (
    <>
      <p className="jsm-subtitle">
        Ya sabemos crear funciones con <code>function</code>, pasarles datos y
        recoger resultados con <code>return</code>. Ahora conoceremos otra forma
        de escribirlas: las funciones flecha.
      </p>
      <figure className="jsm-infographic">
        <img
          src="/recursos/flecha.png"
          alt="Ilustración de apoyo para aprender funciones flecha en JavaScript."
        />
        <figcaption>
          Las funciones flecha son otra forma de escribir funciones que ya sabes
          utilizar.
        </figcaption>
      </figure>
      <Goal>
        Crear, llamar y comprender funciones flecha con cero, uno o varios
        parámetros; diferenciar retorno explícito (return) e implícito; y usar una
        condición dentro de una función.
      </Goal>

      <section className="jsm-section">
        <h2>De una función tradicional a una función flecha</h2>
        <p>
          Vamos a transformar una función que ya conoces. Recibe dos números,
          los suma y devuelve el resultado.
        </p>
        <div className="jsm-grid">
          <div>
            <h3>Función tradicional</h3>
            <Code>{`function sumar(a, b) {
  return a + b;
}`}</Code>
          </div>
          <div>
            <h3>Función flecha</h3>
            <Code>{`const sumar = (a, b) => {
  return a + b;
};`}</Code>
          </div>
        </div>
        <p>
          <code>const</code> guarda la función; <code>sumar</code> es su nombre;{" "}
          <code>(a, b)</code> son los parámetros; <code>=&gt;</code> indica la
          función flecha; las llaves contienen instrucciones y{" "}
          <code>return</code> devuelve el resultado.
        </p>
        <aside className="jsm-callout">
          <h3>Idea importante</h3>
          <p>
            <strong>
              La función sigue haciendo exactamente lo mismo. Solo hemos
              cambiado la manera de escribirla.
            </strong>
          </p>
        </aside>
      </section>

      <section className="jsm-section">
        <h2>Llamarla funciona exactamente igual</h2>
        <Code>{`const sumar = (a, b) => {
  return a + b;
};

let resultado = sumar(4, 6);
console.log(resultado); // 10`}</Code>
        <ol>
          <li>
            Creamos <code>sumar</code>.
          </li>
          <li>
            La llamamos con <code>sumar(4, 6)</code>.
          </li>
          <li>
            <code>a</code> recibe 4 y <code>b</code> recibe 6.
          </li>
          <li>
            La función calcula 4 + 6 y <code>return</code> entrega 10.
          </li>
          <li>
            Guardamos ese valor en <code>resultado</code> y lo mostramos.
          </li>
        </ol>
        <div className="jsm-flow">
          <span>sumar(4, 6)</span>
          <b>→</b>
          <span>a = 4, b = 6</span>
          <b>→</b>
          <span>return 10</span>
          <b>→</b>
          <span>resultado = 10</span>
        </div>
        <Code>{`console.log(sumar(2, 3)); // 5
console.log(sumar(5, 5)); // 10
console.log(sumar(8, 4)); // 12`}</Code>
        <aside className="jsm-callout">
          <p>
            <strong>Crear una función no significa ejecutarla.</strong> Para
            utilizarla tenemos que llamarla.
          </p>
        </aside>
      </section>

      <section className="jsm-section">
        <h2>Uno, varios o ningún parámetro</h2>
        <h3>Un parámetro</h3>
        <Code>{`const duplicar = (numero) => {
  return numero * 2;
};
let resultado = duplicar(5);
console.log(resultado); // 10`}</Code>
        <p>
          <code>numero</code> recibe 5, lo multiplica por dos y devuelve 10.
        </p>
        <h3>Dos parámetros</h3>
        <Code>{`const multiplicar = (a, b) => {
  return a * b;
};
console.log(multiplicar(3, 4)); // 12`}</Code>
        <p>Esta función necesita dos números para multiplicarlos.</p>
        <h3>Sin parámetros</h3>
        <Code>{`const saludar = () => {
  return "¡Hola!";
};
console.log(saludar()); // ¡Hola!`}</Code>
        <p>
          Sin parámetros escribimos <code>()</code>; con uno podemos escribir{" "}
          <code>(numero)</code> o <code>numero</code>; con varios usamos{" "}
          <code>(a, b)</code>. Por ahora, mantener los paréntesis facilita la
          lectura.
        </p>
      </section>

      <section className="jsm-section">
        <h2>La forma corta: retorno implícito</h2>
        <p>
          Hasta ahora hemos usado llaves y <code>return</code>. Si solo
          necesitamos devolver una expresión, JavaScript permite abreviarla.
        </p>
        <div className="jsm-grid">
          <div>
            <h3>Retorno explícito</h3>
            <Code>{`const duplicar = (numero) => {
  return numero * 2;
};`}</Code>
          </div>
          <div>
            <h3>Retorno implícito</h3>
            <Code>{`const duplicar = numero => numero * 2;`}</Code>
          </div>
        </div>
        <p>
          Primero quitamos los paréntesis porque hay un único parámetro
          sencillo. Después quitamos llaves y <code>return</code>: JavaScript
          devuelve automáticamente esa expresión. Ambas formas devuelven 10 al
          recibir 5.
        </p>
        <aside className="jsm-callout">
          <p>
            <strong>No es obligatorio abreviar.</strong> Elige la forma que
            resulte más fácil de comprender.
          </p>
        </aside>
      </section>

      <section className="jsm-section">
        <h2>Funciones flecha con condicionales</h2>
        <p>
          También pueden tomar decisiones con <code>if</code> y{" "}
          <code>else</code>.
        </p>
        <Code>{`const comprobarEdad = (edad) => {
  if (edad >= 18) {
    return "Puedes entrar";
  } else {
    return "No puedes entrar";
  }
};

let mensaje = comprobarEdad(20);
console.log(mensaje); // Puedes entrar`}</Code>
        <p>
          La función recibe una edad, el condicional la compara con 18 y cada
          camino devuelve un mensaje. Mantenemos llaves porque hay varias
          instrucciones y necesitamos <code>return</code> para devolver cada
          resultado.
        </p>
      </section>

      <section className="jsm-section">
        <h2>¿Y con botones HTML?</h2>
        <p>
          Las funciones flecha pueden responder a acciones, pero primero debemos
          saber cómo conectamos JavaScript y HTML.
        </p>
        <Code>{`<button onclick="saludar()">Saludar</button>

function saludar() {
  console.log("¡Hola!");
}`}</Code>
        <p>
          Cuando usamos <code>onclick</code> directamente en HTML, resulta más
          sencillo mantener funciones tradicionales. Una flecha guardada con{" "}
          <code>const</code> no queda disponible automáticamente para ese{" "}
          <code>onclick</code> en un script clásico. Más adelante conectarás
          botones con <code>addEventListener</code>; por ahora llama las flechas
          desde JavaScript.
        </p>
      </section>

      <Practice
        title="Ejercicio 1 · Convierte y ejecuta una función"
        solution={`const triple = (numero) => {
  return numero * 3;
};

let resultado = triple(8);
console.log(resultado); // 24`}
        why="La función recibe 8, calcula su triple, devuelve 24 y guardamos ese valor en resultado."
      >
        <p>
          Convierte la función tradicional en una flecha. Después llámala con 8,
          guarda el resultado y muéstralo.
        </p>
        <Code>{`function triple(numero) {
  return numero * 3;
}`}</Code>
        <details>
          <summary>Pista</summary>
          <p>
            Empieza por <code>const triple = (numero) =&gt;</code> y conserva
            las llaves y <code>return</code>.
          </p>
        </details>
      </Practice>
      <Practice
        title="Ejercicio 2 · Escribe una función más corta"
        solution={`const aplicarDescuento = precio => precio * 0.9;

let precioFinal = aplicarDescuento(100);
console.log(precioFinal); // 90`}
        why="Solo devolvemos una multiplicación; por eso podemos eliminar llaves y return."
      >
        <p>
          Simplifica la función con retorno implícito. Llámala con el precio 100
          y muestra el resultado.
        </p>
        <Code>{`const aplicarDescuento = (precio) => {
  return precio * 0.9;
};`}</Code>
        <details>
          <summary>Pista</summary>
          <p>Hay un solo parámetro y una sola expresión que devolver.</p>
        </details>
      </Practice>
      <Practice
        title="Ejercicio 3 · Una función que toma decisiones"
        solution={`const comprobarNota = (nota) => {
  if (nota >= 5) {
    return "Aprobado";
  } else {
    return "Suspenso";
  }
};

console.log(comprobarNota(7)); // Aprobado
console.log(comprobarNota(3)); // Suspenso`}
        why="El condicional decide qué mensaje devuelve. Con varias instrucciones mantenemos llaves y return."
      >
        <p>
          Crea <code>comprobarNota</code>: debe devolver «Aprobado» si la nota
          es 5 o más, y «Suspenso» en caso contrario. Pruébala con 7 y con 3.
        </p>
        <details>
          <summary>Pista</summary>
          <p>
            Usa una flecha con llaves, un <code>if</code> y un <code>else</code>
            .
          </p>
        </details>
      </Practice>

      <section className="jsm-section">
        <h2>Errores frecuentes</h2>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Error</th>
                <th>Corrección</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crear la función y no llamarla</td>
                <td>
                  Escribe <code>sumar(4, 6)</code> para ejecutarla.
                </td>
              </tr>
              <tr>
                <td>
                  Olvidar <code>=&gt;</code>
                </td>
                <td>La flecha es obligatoria en esta sintaxis.</td>
              </tr>
              <tr>
                <td>
                  Olvidar <code>return</code> con llaves
                </td>
                <td>
                  Si quieres devolver un valor, escribe <code>return</code>.
                </td>
              </tr>
              <tr>
                <td>Confundir devolver con mostrar</td>
                <td>
                  <code>return</code> devuelve; <code>console.log()</code>{" "}
                  muestra.
                </td>
              </tr>
              <tr>
                <td>Quitar paréntesis con varios parámetros</td>
                <td>
                  Escribe <code>(a, b) =&gt;</code>.
                </td>
              </tr>
              <tr>
                <td>Llamar antes de declarar con const</td>
                <td>Declara la función antes de llamarla.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="jsm-section" aria-labelledby="comprobacion-flechas">
        <h2 id="comprobacion-flechas">Comprueba lo aprendido</h2>
        <p>Elige una respuesta y después revisa la explicación.</p>
        {questions.map((question) => (
          <div className="jsm-challenge" key={question.id}>
            <Code>{question.code}</Code>
            <fieldset>
              <legend>¿Cuál es la respuesta correcta?</legend>
              {question.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={question.id}
                    checked={answers[question.id] === option}
                    onChange={() =>
                      setAnswers({ ...answers, [question.id]: option })
                    }
                  />{" "}
                  {option}
                </label>
              ))}
            </fieldset>
            {answers[question.id] && (
              <p aria-live="polite">
                <strong>
                  {answers[question.id] === question.correct
                    ? "Correcto."
                    : "Todavía no."}
                </strong>{" "}
                {question.why}
              </p>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export function PreparedJavaScriptToolsLesson() {
  const [name, setName] = useState("  Ana  ");
  const [nameResult, setNameResult] = useState(
    "Aquí aparecerá el nombre preparado.",
  );
  const [randomResult, setRandomResult] = useState(
    "Pulsa el botón para generar un número.",
  );
  const prepareName = () => {
    const cleanName = name.trim();
    setNameResult(
      cleanName
        ? cleanName.toUpperCase()
        : "Escribe un nombre antes de prepararlo.",
    );
  };
  const generateNumber = () => Math.floor(Math.random() * 10) + 1;
  const showRandomNumber = () =>
    setRandomResult(`Número generado: ${generateNumber()}`);

  return (
    <>
      <p className="jsm-subtitle">
        JavaScript incluye herramientas listas para convertir datos, transformar
        textos y obtener números aleatorios. Las usaremos dentro de las
        funciones que ya sabes crear.
      </p>
      <Goal>
        Distinguir funciones propias, funciones incorporadas y métodos;
        convertir texto en número de forma segura; y combinar herramientas
        preparadas con <code>return</code>.
      </Goal>

      <section className="jsm-section">
        <h2>Funciones propias y herramientas de JavaScript</h2>
        <p>
          Una <strong>función propia</strong> la escribimos para resolver una
          tarea de nuestra página. JavaScript también trae funciones
          incorporadas, como <code>Number()</code>, y métodos, como{" "}
          <code>toUpperCase()</code>, que se usan sobre un valor concreto.
        </p>
        <Code>{`function crearSaludo(nombre) {
  return "Hola, " + nombre;
}

const edad = Number("18");
const nombreEnMayusculas = "ana".toUpperCase();`}</Code>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Herramienta</th>
                <th>Quién la prepara</th>
                <th>Cómo se usa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Función propia</td>
                <td>Nosotros</td>
                <td>
                  <code>crearSaludo("Ana")</code>
                </td>
              </tr>
              <tr>
                <td>Función incorporada</td>
                <td>JavaScript</td>
                <td>
                  <code>Number("18")</code>
                </td>
              </tr>
              <tr>
                <td>Método</td>
                <td>JavaScript, sobre un valor</td>
                <td>
                  <code>"ana".toUpperCase()</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Las tres se llaman con paréntesis porque ejecutan una tarea. La
          diferencia es dónde están: nuestra función tiene un nombre que
          elegimos; <code>Number()</code> está disponible directamente;{" "}
          <code>toUpperCase()</code> se coloca después de un texto y un punto.
        </p>
      </section>

      <section className="jsm-section">
        <h2>
          Convertir datos con <code>Number()</code>
        </h2>
        <p>
          Los valores que llegan desde <code>prompt()</code> y desde{" "}
          <code>.value</code> son texto. Aunque el usuario escriba 12,
          JavaScript recibe <code>"12"</code>. Para sumar, restar o comparar una
          cantidad numérica con claridad, primero la convertimos.
        </p>
        <Code>{`const textoEdad = document.getElementById("edad").value;
const edad = Number(textoEdad);

const total = edad + 2;`}</Code>
        <p>
          Si <code>textoEdad</code> vale <code>"18"</code>, <code>edad</code>{" "}
          vale el número 18 y <code>total</code> vale 20. Sin conversión,{" "}
          <code>"18" + 2</code> produce el texto <code>"182"</code>.
        </p>
        <Code>{`Number("24");    // 24
Number("hola");  // NaN: no es un número
Number("");      // 0

const respuesta = prompt("Escribe tu edad");

if (respuesta === null) {
  console.log("La persona canceló el cuadro.");
} else if (respuesta.trim() === "") {
  console.log("No se escribió ningún dato.");
} else {
  const edad = Number(respuesta);
  console.log(edad);
}`}</Code>
        <p>
          <code>NaN</code> significa “no es un número”. Una entrada vacía y una
          cancelación no deben tratarse como una edad: <code>Number("")</code>{" "}
          da 0 y <code>Number(null)</code> también da 0. Por eso comprobamos
          primero si <code>prompt()</code> devolvió <code>null</code> y si el
          texto está vacío. Después de convertir,{" "}
          <code>Number.isNaN(edad)</code> permite detectar si el texto no
          contenía un número válido.
        </p>
      </section>

      <section className="jsm-section">
        <h2>Métodos habituales de texto</h2>
        <p>
          Un string tiene herramientas preparadas. Los métodos siguientes
          devuelven un texto o una comprobación sin cambiar la variable
          original: guarda el resultado si lo necesitas después.
        </p>
        <Code>{`const nombreConEspacios = "  Ana López  ";
const nombreLimpio = nombreConEspacios.trim();
const grito = nombreLimpio.toUpperCase();
const minusculas = grito.toLowerCase();
const tieneAna = nombreLimpio.includes("Ana");

const mensaje = "Hola, Ana";
const mensajeNuevo = mensaje.replace("Ana", "Luis");`}</Code>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Método</th>
                <th>Qué devuelve</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>trim()</code>
                </td>
                <td>El texto sin espacios al principio ni al final.</td>
                <td>
                  <code>" Ana ".trim()</code> → <code>"Ana"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>toUpperCase()</code>
                </td>
                <td>El texto en mayúsculas.</td>
                <td>
                  <code>"ana".toUpperCase()</code> → <code>"ANA"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>toLowerCase()</code>
                </td>
                <td>El texto en minúsculas.</td>
                <td>
                  <code>"ANA".toLowerCase()</code> → <code>"ana"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>includes()</code>
                </td>
                <td>
                  <code>true</code> o <code>false</code>.
                </td>
                <td>
                  <code>"Ana".includes("n")</code> → <code>true</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>replace()</code>
                </td>
                <td>Una copia con la primera coincidencia sustituida.</td>
                <td>
                  <code>"Hola Ana".replace("Ana", "Luis")</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <code>replace()</code> es una ampliación útil: no modifica el texto
          original; crea y devuelve otro. Más adelante podrás conocer otras
          formas de reemplazar coincidencias.
        </p>
      </section>

      <section className="jsm-section">
        <h2>Propiedades y métodos no se escriben igual</h2>
        <Code>{`const nombre = "Ana";

console.log(nombre.length);        // 3
console.log(nombre.toUpperCase()); // ANA`}</Code>
        <p>
          <code>.length</code> es una <strong>propiedad</strong>: consulta un
          dato que el texto ya tiene, por eso no lleva paréntesis.{" "}
          <code>.toUpperCase()</code> es un <strong>método</strong>: ejecuta una
          tarea y por eso lleva <code>()</code>. De momento usamos métodos
          preparados; crear métodos propios dentro de objetos se verá más
          adelante.
        </p>
      </section>

      <section className="jsm-section">
        <h2>Trabajar con números aleatorios</h2>
        <p>
          <code>Math.random()</code> devuelve un decimal desde 0 incluido hasta
          1 sin incluir. Cada llamada puede devolver un valor diferente.
        </p>
        <Code>{`Math.random(); // por ejemplo: 0.372819
Math.floor(4.9); // 4: redondea hacia abajo
Math.round(4.5); // 5: redondea al entero más cercano`}</Code>
        <p>
          <code>Math.floor()</code> siempre baja al entero anterior.{" "}
          <code>Math.round()</code> elige el entero más cercano; es útil para
          redondear una cantidad, pero para obtener un rango aleatorio usaremos{" "}
          <code>floor</code> para que cada entero tenga el mismo intervalo.
        </p>
        <Code>{`const decimal = Math.random();      // desde 0 hasta menos de 1
const porDiez = decimal * 10;       // desde 0 hasta menos de 10
const deCeroANueve = Math.floor(porDiez); // 0, 1, 2, ... 9
const delUnoAlDiez = deCeroANueve + 1;   // 1, 2, 3, ... 10`}</Code>
        <p>
          Podemos reunir esos pasos en una función. Para un dado cambia 10 por
          6: antes de sumar 1 obtenemos los enteros de 0 a 5.
        </p>
        <Code>{`function generarNumeroDelUnoAlDiez() {
  return Math.floor(Math.random() * 10) + 1;
}

function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}`}</Code>
      </section>

      <section className="jsm-section">
        <h2>Práctica de textos · Preparar un nombre</h2>
        <p>
          La función lee el input, elimina espacios con <code>trim()</code>,
          convierte el resultado a mayúsculas y lo muestra. El botón usa{" "}
          <code>onclick</code>, como en las prácticas anteriores.
        </p>
        <Code>{`<input id="nombrePreparado" />
<button onclick="prepararNombre()">Preparar nombre</button>
<p id="resultadoNombre"></p>

function prepararNombre() {
  const nombre = document.getElementById("nombrePreparado").value;
  const nombreLimpio = nombre.trim();
  const nombreEnMayusculas = nombreLimpio.toUpperCase();

  document.getElementById("resultadoNombre").textContent =
    nombreEnMayusculas;
}`}</Code>
        <div className="jsm-demo">
          <label>
            Nombre
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <button type="button" onClick={prepareName}>
            Preparar nombre
          </button>
          <p aria-live="polite">{nameResult}</p>
        </div>
      </section>

      <section className="jsm-section">
        <h2>Práctica de números aleatorios · Generador del 1 al 10</h2>
        <p>
          Separamos responsabilidades: una función devuelve el número y otra se
          ocupa de escribirlo en la página. Esta organización reaprovecha lo que
          aprendiste sobre <code>return</code>.
        </p>
        <Code>{`<button onclick="mostrarNumeroAleatorio()">Generar número</button>
<p id="resultadoAleatorio"></p>

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

function mostrarNumeroAleatorio() {
  const numero = generarNumeroAleatorio();
  document.getElementById("resultadoAleatorio").textContent =
    "Número generado: " + numero;
}`}</Code>
        <div className="jsm-demo">
          <button type="button" onClick={showRandomNumber}>
            Generar número
          </button>
          <p aria-live="polite">{randomResult}</p>
        </div>
      </section>

      <Practice
        title="Ejercicio autónomo · Valida una cantidad"
        solution={`function leerCantidad() {
  const texto = document.getElementById("cantidad").value;

  if (texto.trim() === "") {
    return "Escribe una cantidad.";
  }

  const cantidad = Number(texto);

  if (Number.isNaN(cantidad)) {
    return "La cantidad no es válida.";
  }

  return "Cantidad: " + cantidad;
}`}
        why="Primero distinguimos una entrada vacía. Después convertimos el texto y comprobamos NaN antes de devolver un mensaje con el número."
      >
        <p>
          Escribe una función que lea <code>cantidad</code> desde un input. Debe
          devolver un mensaje diferente si está vacío, si no puede convertirse
          en número y si es válido.
        </p>
        <details>
          <summary>Pista</summary>
          <p>
            Lee primero <code>.value</code> en una variable de texto. Comprueba
            los espacios antes de llamar a <code>Number()</code>.
          </p>
        </details>
      </Practice>

      <Practice
        title="Ejercicio autónomo · Un dado reutilizable"
        solution={`function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function mostrarDado() {
  const dado = tirarDado();
  document.getElementById("resultadoDado").textContent =
    "Ha salido: " + dado;
}`}
        why="tirarDado devuelve un entero de 1 a 6. mostrarDado usa ese retorno y solo se encarga de actualizar el HTML."
      >
        <p>
          Crea dos funciones para un dado: una debe devolver un entero del 1 al
          6 y la otra debe mostrar el resultado en un elemento con{" "}
          <code>id="resultadoDado"</code>.
        </p>
        <details>
          <summary>Pista</summary>
          <p>
            Antes de sumar 1 necesitas obtener seis posibilidades enteras: de 0
            a 5. Recuerda qué función devuelve hacia abajo el decimal.
          </p>
        </details>
      </Practice>
    </>
  );
}
