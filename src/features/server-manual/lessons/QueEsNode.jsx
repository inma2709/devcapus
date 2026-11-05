import CodeExample from "../components/CodeExample";
import KnowledgeCheck from "../components/KnowledgeCheck";
import LessonLayout from "../components/LessonLayout";
import Practice from "../components/Practice";

export default function QueEsNode({ chapter }) {
  const sample =
    'const servicio = "Corte de pelo";\nconst precio = 15;\n\nconsole.log(`Servicio: ${servicio}`);\nconsole.log(`Precio: ${precio} €`);';
  return (
    <LessonLayout chapter={chapter}>
      <section className="mt-10 space-y-7 text-lg leading-8 text-slate-700">
        <h2 className="text-3xl font-bold text-brand-purple">
          JavaScript es el lenguaje; el entorno cambia
        </h2>
        <p>
          JavaScript no pertenece exclusivamente al navegador. Variables,
          condiciones, arrays y funciones mantienen su significado fuera de una
          página. Lo que cambia es el entorno de ejecución: el programa que
          interpreta el código y las herramientas disponibles.
        </p>
        <p>
          Node.js es un entorno de ejecución para JavaScript. No es un lenguaje
          nuevo, un navegador, una base de datos ni un framework. Express será
          un framework que instalaremos más adelante; Node será quien ejecute
          nuestra aplicación.
        </p>
        <h2 className="text-3xl font-bold text-brand-purple">
          Qué aporta Node.js
        </h2>
        <p>
          Node permite ejecutar programas desde la terminal, trabajar con
          archivos, usar módulos, comunicarse por red y crear servidores. Hoy
          ejecutaremos scripts sencillos; cada capacidad se desarrollará cuando
          sea necesaria.
        </p>
        <h2 className="text-3xl font-bold text-brand-purple">
          Diferencias con el navegador
        </h2>
        <p>
          <code>console.log</code> existe en ambos entornos. En cambio,{" "}
          <code>window</code> y <code>document</code> pertenecen al navegador y
          representan una ventana y una página HTML. Node no abre una página
          para ejecutarse, por eso <code>document</code> no está disponible
          directamente.
        </p>
        <h2 className="text-3xl font-bold text-brand-purple">
          Tu primer archivo Node
        </h2>
        <p>
          Crea <code>saludo.js</code>, guárdalo y ejecuta{" "}
          <code>node saludo.js</code> desde una terminal situada en esa carpeta.
          Guardar y ejecutar son operaciones distintas: Node lee la última
          versión guardada.
        </p>
        <CodeExample
          file="saludo.js"
          output={"Servicio: Corte de pelo\nPrecio: 15 €"}
        >
          {sample}
        </CodeExample>
        <p>
          Las constantes guardan datos. Las comillas invertidas permiten
          insertar valores dentro del texto. Al finalizar la última instrucción,
          este programa termina: todavía no está esperando peticiones ni es un
          servidor.
        </p>
        <h2 className="text-3xl font-bold text-brand-purple">
          Errores frecuentes
        </h2>
        <p>
          <strong>ReferenceError</strong> suele indicar un nombre no declarado o
          escrito de forma distinta. <strong>SyntaxError</strong> indica una
          instrucción que Node no puede interpretar, por ejemplo por una comilla
          o paréntesis ausente. <code>document is not defined</code> indica que
          se pidió una API del navegador en Node. La consola de DevTools tampoco
          sustituye a la terminal: ejecuta código dentro del navegador.
        </p>
      </section>
      <Practice
        title="Ficha de un servicio"
        checks={[
          "El archivo está guardado como ficha-servicio.js.",
          "La terminal muestra profesional, servicio, duración, precio y disponibilidad.",
          "Has cambiado un dato y ejecutado de nuevo.",
        ]}
        hints={
          <p>
            Declara una constante por dato. Usa <code>true</code> o{" "}
            <code>false</code> para disponibilidad y plantillas con comillas
            invertidas para los mensajes.
          </p>
        }
        solution={
          <CodeExample
            file="ficha-servicio.js"
            output={
              "Profesional: Lucía\nServicio: Corte de pelo\nDuración: 30 minutos\nPrecio: 15 €\nDisponible: true"
            }
          >
            {
              'const profesional = "Lucía";\nconst servicio = "Corte de pelo";\nconst duracion = 30;\nconst precio = 15;\nconst disponible = true;\n\nconsole.log(`Profesional: ${profesional}`);\nconsole.log(`Servicio: ${servicio}`);\nconsole.log(`Duración: ${duracion} minutos`);\nconsole.log(`Precio: ${precio} €`);\nconsole.log(`Disponible: ${disponible}`);'
            }
          </CodeExample>
        }
      >
        {" "}
        <p>
          Crea una ficha con profesional, servicio, duración, precio y
          disponibilidad. Antes de ejecutar, predice la salida.
        </p>
      </Practice>
      <KnowledgeCheck
        title="Node.js y el primer programa"
        questions={[
          {
            id: "node",
            question: "¿Qué es Node.js?",
            options: [
              "Un lenguaje distinto de JavaScript",
              "Un entorno que ejecuta JavaScript fuera del navegador",
              "Un navegador sin interfaz gráfica",
            ],
            answer: "Un entorno que ejecuta JavaScript fuera del navegador",
            feedback:
              "El lenguaje sigue siendo JavaScript; Node aporta otro entorno y APIs.",
          },
          {
            id: "document",
            question: "¿Por qué document no está disponible en un script Node?",
            options: [
              "Porque document solo existe en una página representada por el navegador",
              "Porque Node no permite variables",
              "Porque falta Express",
            ],
            answer:
              "Porque document solo existe en una página representada por el navegador",
            feedback:
              "document representa el DOM creado por el navegador, no una capacidad de Node.",
          },
        ]}
      />
    </LessonLayout>
  );
}
