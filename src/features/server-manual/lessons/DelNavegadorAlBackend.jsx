
import KnowledgeCheck from "../components/KnowledgeCheck";
import LessonLayout from "../components/LessonLayout";
import Practice from "../components/Practice";

export default function DelNavegadorAlBackend({ chapter }) {
  return (
    <LessonLayout chapter={chapter}>
      <section className="mt-10 space-y-7 text-lg leading-8 text-slate-700">

        {/* INTRODUCCIÓN */}
        <h2 className="text-3xl font-bold text-brand-purple">
          1. Hasta ahora, nuestras aplicaciones funcionaban en el navegador
        </h2>

        <p>
          Durante el aprendizaje de desarrollo web hemos trabajado con tres
          tecnologías fundamentales:
        </p>

        <ul className="list-disc space-y-3 pl-7">
          <li>
            <strong>HTML:</strong> organiza el contenido de la página.
          </li>
          <li>
            <strong>CSS:</strong> controla su aspecto y distribución.
          </li>
          <li>
            <strong>JavaScript:</strong> añade comportamiento e interactividad.
          </li>
        </ul>

        <p>
          Con estas tecnologías hemos creado formularios, catálogos,
          carritos y gestores de citas. Incluso hemos conseguido
          conservar información utilizando <code>localStorage</code>.
        </p>

        <p>
          Pero imaginemos que nuestro gestor de citas deja de ser un
          ejercicio de clase y empieza a utilizarse en una peluquería real.
        </p>

        <div className="rounded-2xl border border-brand-lavender bg-brand-lavender/10 p-6">
          <h3 className="mb-3 text-xl font-bold text-brand-purple">
            Un problema que ya conocemos
          </h3>

          <p>
            Ana reserva una cita desde su ordenador. La cita se guarda
            en el localStorage de su navegador.
          </p>

          <p className="mt-3">
            Un segundo cliente entra desde su móvil e intenta reservar
            exactamente el mismo horario.
          </p>

          <p className="mt-3 font-semibold">
            ¿Cómo sabe el segundo cliente que ese horario ya está ocupado?
          </p>

          <p className="mt-3">
            Si cada navegador guarda sus propias citas, ninguno dispone
            automáticamente de la información del otro.
          </p>
        </div>

        {/* LIMITACIONES DEL NAVEGADOR */}
        <h2 className="text-3xl font-bold text-brand-purple">
          2. ¿Por qué necesitamos un backend?
        </h2>

        <p>
          <code>localStorage</code> permite guardar información en un
          navegador concreto. Es útil para preferencias personales,
          prácticas y aplicaciones sencillas, pero no funciona por sí
          solo como una base de datos compartida.
        </p>

        <p>
          Para construir una aplicación utilizada por diferentes personas,
          necesitamos una parte del sistema que centralice determinadas
          operaciones y permita trabajar con información compartida.
        </p>

        <p>
          Esa parte se denomina <strong>backend</strong>.
        </p>

        <h3 className="text-2xl font-bold text-brand-purple">
          ¿Qué aporta el backend?
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Datos compartidos",
              text: "Permite que distintos usuarios consulten y actualicen información común."
            },
            {
              title: "Persistencia centralizada",
              text: "Puede almacenar información en archivos o bases de datos del servidor."
            },
            {
              title: "Reglas de negocio",
              text: "Comprueba condiciones antes de aceptar una operación, como evitar dos reservas incompatibles."
            },
            {
              title: "Control de acceso",
              text: "Puede comprobar quién realiza una petición y qué operaciones tiene permiso para ejecutar."
            },
            {
              title: "Operaciones protegidas",
              text: "Mantiene en el servidor procesos y credenciales que no deben quedar expuestos al navegador."
            },
            {
              title: "Servicios y comunicación",
              text: "Ofrece funcionalidades que pueden utilizar una web, una aplicación móvil u otros programas."
            }
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-brand-lavender bg-white p-5"
            >
              <h4 className="mb-2 text-xl font-bold text-brand-purple">
                {item.title}
              </h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <p>
          Esto no significa que el navegador deje de ser importante.
          El frontend seguirá mostrando información, recogiendo datos
          y respondiendo a las acciones de las personas usuarias.
        </p>

        <p>
          Tampoco significa que el navegador no pueda comunicarse
          con servidores: JavaScript dispone de herramientas para
          realizar peticiones. Lo que necesitamos es un backend
          que procese las operaciones que correspondan al servidor.
        </p>

        {/* CONCEPTOS */}
        <h2 className="text-3xl font-bold text-brand-purple">
          3. Frontend, backend y servidor: no son lo mismo
        </h2>

        <p>
          Antes de continuar, debemos distinguir tres conceptos:
        </p>

        <ul className="list-disc space-y-4 pl-7">
          <li>
            <strong>Frontend:</strong> es la parte de la aplicación
            con la que interactúa el usuario. En nuestro caso,
            está construida con HTML, CSS y JavaScript.
          </li>
          <li>
            <strong>Backend:</strong> es el software que recibe
            peticiones, ejecuta operaciones, aplica reglas
            y proporciona respuestas.
          </li>
          <li>
            <strong>Servidor:</strong> puede referirse a la máquina
            donde se ejecuta un programa o al propio programa
            que permanece preparado para atender peticiones.
          </li>
        </ul>

        <div className="rounded-xl border-l-4 border-brand-purple bg-slate-50 p-5">
          <p>
            <strong>Importante:</strong> no necesitamos alquilar
            un servidor para aprender backend.
          </p>
          <p className="mt-2">
            Durante nuestras prácticas ejecutaremos Node.js en
            nuestro propio ordenador. Más adelante podremos
            publicar la aplicación en un servidor accesible
            desde Internet.
          </p>
        </div>

        {/* COMUNICACIÓN */}
        <h2 className="text-3xl font-bold text-brand-purple">
          4. ¿Cómo colaboran el frontend y el backend?
        </h2>

        <p>
          Supongamos que una persona pulsa el botón
          {" "}<strong>Consultar citas</strong>.
        </p>

        <div className="rounded-2xl border border-brand-lavender bg-white p-6">
          <div className="grid gap-3 text-center md:grid-cols-3">
            <div className="rounded-xl bg-teal-50 p-4">
              <p className="font-bold text-slate-900">FRONTEND</p>
              <p className="text-base">
                El navegador solicita las citas.
              </p>
            </div>

            <div className="rounded-xl bg-brand-lavender/30 p-4">
              <p className="font-bold text-brand-purple">
                PETICIÓN Y RESPUESTA
              </p>
              <p className="text-base">
                La información viaja mediante HTTP.
              </p>
            </div>

            <div className="rounded-xl bg-teal-50 p-4">
              <p className="font-bold text-slate-900">BACKEND</p>
              <p className="text-base">
                Consulta las citas y prepara la respuesta.
              </p>
            </div>
          </div>

          <p className="mt-5 text-center font-semibold text-brand-purple">
            Navegador → Petición → Backend
          </p>
          <p className="text-center font-semibold text-brand-purple">
            Navegador ← Respuesta ← Backend
          </p>
        </div>

        <p>
          El navegador no necesita conocer cómo se guardan
          internamente las citas. Solo necesita saber cómo
          solicitar esa información.
        </p>

        <p>
          Una <strong>API</strong> define cómo pueden comunicarse
          diferentes programas. Más adelante aprenderemos a
          crear una API utilizando Node.js.
        </p>

        {/* ESTRUCTURA DE CARPETAS */}
        <h2 className="text-3xl font-bold text-brand-purple">
          5. Cómo organizar un proyecto con frontend y backend
        </h2>

        <p>
          Hasta ahora nuestros proyectos eran bastante sencillos.
          Normalmente utilizábamos una estructura como esta:
        </p>

        <pre className="overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm leading-6 text-slate-100">
          <code>{`gestor-citas/
├── index.html
├── styles.css
├── app.js
└── images/
    └── logo.png`}</code>
        </pre>

        <p>
          Esta organización es válida para un proyecto pequeño
          que funciona únicamente en el navegador.
        </p>

        <p>
          Pero cuando incorporamos backend, es conveniente
          separar los archivos que se ejecutan en el navegador
          de aquellos que se ejecutan mediante Node.js.
        </p>

        <h3 className="text-2xl font-bold text-brand-purple">
          Una estructura sencilla para aprender
        </h3>

        <p>
          En este curso utilizaremos inicialmente dos carpetas
          principales: <code>frontend</code> y <code>backend</code>.
        </p>

        <pre className="overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm leading-6 text-slate-100">
          <code>{`gestor-citas/
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── images/
│       └── logo.png
│
├── backend/
│   ├── server.js
│   └── package.json
│
└── README.md`}</code>
        </pre>

        <p>
          Vamos a entender qué contiene cada carpeta.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-teal-200 bg-teal-50 p-5">
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              frontend/
            </h3>

            <p>
              Aquí colocamos los archivos que forman la
              interfaz utilizada por la persona usuaria.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li><code>index.html</code>: estructura.</li>
              <li><code>styles.css</code>: diseño.</li>
              <li><code>app.js</code>: interactividad.</li>
              <li><code>images/</code>: imágenes y recursos.</li>
            </ul>

            <p className="mt-4 font-semibold">
              Su JavaScript se ejecuta en el navegador.
            </p>
          </article>

          <article className="rounded-xl border border-brand-lavender bg-brand-lavender/20 p-5">
            <h3 className="mb-3 text-2xl font-bold text-brand-purple">
              backend/
            </h3>

            <p>
              Aquí colocamos los archivos que se ejecutan
              en el entorno de Node.js.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li><code>server.js</code>: código del servidor.</li>
              <li><code>package.json</code>: información y dependencias del proyecto Node.</li>
            </ul>

            <p className="mt-4 font-semibold">
              Su JavaScript se ejecuta con Node.js.
            </p>
          </article>
        </div>

        <h3 className="text-2xl font-bold text-brand-purple">
          Atención: ambos archivos pueden ser JavaScript
        </h3>

        <p>
          Podemos encontrar un archivo <code>app.js</code> en el
          frontend y un archivo <code>server.js</code> en el backend.
          Los dos están escritos en JavaScript, pero no se ejecutan
          en el mismo entorno.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-base">
            <thead>
              <tr className="bg-brand-lavender/30">
                <th className="border p-3">Frontend</th>
                <th className="border p-3">Backend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">JavaScript del navegador</td>
                <td className="border p-3">JavaScript ejecutado con Node.js</td>
              </tr>
              <tr>
                <td className="border p-3">Puede modificar el DOM</td>
                <td className="border p-3">Puede utilizar módulos como node:fs</td>
              </tr>
              <tr>
                <td className="border p-3">Responde a clics y formularios</td>
                <td className="border p-3">Procesa peticiones y aplica reglas</td>
              </tr>
              <tr>
                <td className="border p-3">Muestra resultados</td>
                <td className="border p-3">Prepara y devuelve datos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>No debemos confundir carpetas con repositorios:</strong>
          podemos mantener frontend y backend dentro de un mismo
          repositorio Git. Para empezar, esta opción facilita
          entender el proyecto completo.
        </p>

        <p>
          En proyectos profesionales también es posible mantenerlos
          en repositorios separados, pero no es una obligación.
        </p>

        {/* ORGANIZACIÓN Y SEGURIDAD */}
        <h2 className="text-3xl font-bold text-brand-purple">
          6. ¿Por qué es importante separar ambas partes?
        </h2>

        <p>
          La separación no es solamente una cuestión de orden.
          Nos ayuda a identificar qué código pertenece a cada entorno.
        </p>

        <ul className="list-disc space-y-3 pl-7">
          <li>
            <strong>Claridad:</strong> sabemos dónde buscar cada archivo.
          </li>
          <li>
            <strong>Mantenimiento:</strong> podemos modificar la interfaz
            sin mezclarla con la lógica del servidor.
          </li>
          <li>
            <strong>Trabajo en equipo:</strong> distintas personas
            pueden encargarse de diferentes partes.
          </li>
          <li>
            <strong>Despliegue:</strong> podemos preparar y publicar
            frontend y backend según sus necesidades.
          </li>
          <li>
            <strong>Seguridad:</strong> distinguimos los archivos
            que pueden enviarse al navegador de los que deben
            permanecer exclusivamente en el servidor.
          </li>
        </ul>

        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className="font-bold">
            Importante: nunca coloques contraseñas o claves privadas
            en el JavaScript que envías al navegador.
          </p>
          <p className="mt-2">
            Aunque el código esté en otro archivo o carpeta,
            cualquier persona puede inspeccionar los archivos
            que recibe su navegador.
          </p>
          <p className="mt-2">
            Las credenciales del servidor deben gestionarse
            de forma segura y no deben incluirse en archivos
            públicos ni subirse al repositorio.
          </p>
        </div>

        {/* EJEMPLO APLICADO */}
        <h2 className="text-3xl font-bold text-brand-purple">
          7. Ejemplo: nuestro gestor de citas
        </h2>

        <p>
          Pensemos ahora en cómo funcionaría una aplicación real.
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border p-5">
            <h3 className="font-bold text-brand-purple">
              Paso 1. El usuario escribe sus datos
            </h3>
            <p>
              El formulario HTML recoge nombre, servicio y horario.
              JavaScript puede comprobar que los campos estén completos.
            </p>
            <p className="mt-2 font-semibold">Responsable: frontend.</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-bold text-brand-purple">
              Paso 2. Se solicita la reserva
            </h3>
            <p>
              El frontend envía una petición HTTP al backend
              con los datos necesarios.
            </p>
            <p className="mt-2 font-semibold">
              Responsable: comunicación frontend/backend.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-bold text-brand-purple">
              Paso 3. Se comprueba la disponibilidad
            </h3>
            <p>
              El backend verifica si la reserva cumple las reglas
              y si el horario continúa disponible.
            </p>
            <p className="mt-2 font-semibold">Responsable: backend.</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-bold text-brand-purple">
              Paso 4. Se guarda la cita
            </h3>
            <p>
              Si la reserva es válida, el backend registra
              los datos en el almacenamiento compartido.
            </p>
            <p className="mt-2 font-semibold">Responsable: backend.</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-bold text-brand-purple">
              Paso 5. Se muestra una confirmación
            </h3>
            <p>
              El backend devuelve el resultado y el frontend
              muestra el mensaje correspondiente al usuario.
            </p>
            <p className="mt-2 font-semibold">
              Responsable: colaboración entre ambos.
            </p>
          </div>
        </div>

        <p>
          Más adelante construiremos esta comunicación con
          Node.js. Por ahora lo importante es comprender
          <strong> qué responsabilidad tiene cada parte</strong>.
        </p>

        {/* CIERRE */}
        <h2 className="text-3xl font-bold text-brand-purple">
          8. Qué debemos recordar
        </h2>

        <div className="rounded-2xl border border-brand-lavender bg-brand-lavender/10 p-6">
          <ul className="list-disc space-y-3 pl-6">
            <li>
              El frontend y el backend son partes de una misma aplicación.
            </li>
            <li>
              El frontend se ocupa principalmente de la interacción
              y presentación al usuario.
            </li>
            <li>
              El backend procesa operaciones y aplica reglas
              en un entorno controlado por el servidor.
            </li>
            <li>
              Ambos pueden estar escritos en JavaScript.
            </li>
            <li>
              Node.js nos permite ejecutar JavaScript fuera
              del navegador.
            </li>
            <li>
              Separar las carpetas frontend y backend
              facilita organizar nuestros proyectos.
            </li>
            <li>
              Podemos desarrollar ambas partes en un mismo
              repositorio Git.
            </li>
          </ul>
        </div>
      </section>

      {/* PRÁCTICA */}
      <Practice
        title="Organiza tu primer proyecto frontend y backend"
        checks={[
          "Has creado una carpeta principal para el proyecto.",
          "Has separado los archivos en frontend y backend.",
          "Has identificado qué código se ejecutará en cada entorno.",
          "Has explicado qué operaciones requieren colaboración.",
          "Distingues la estructura de carpetas del número de repositorios Git."
        ]}
        hints={
          <div className="space-y-3">
            <p>
              Recuerda que HTML, CSS y JavaScript del navegador
              pertenecen al frontend.
            </p>
            <p>
              El archivo server.js representa el código que
              ejecutaremos posteriormente con Node.js.
            </p>
            <p>
              No necesitas programar todavía el servidor.
              El objetivo es entender cómo organizar el proyecto.
            </p>
          </div>
        }
        solution={
          <div className="space-y-3">
            <p>Una organización posible es:</p>
            <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-slate-100">
              <code>{`mi-negocio/
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── backend/
│   ├── server.js
│   └── package.json
└── README.md`}</code>
            </pre>
            <p>
              El frontend recoge datos y muestra resultados.
              El backend comprueba reglas, procesa solicitudes
              y administra los datos compartidos.
            </p>
          </div>
        }
      >
        <div className="space-y-4">
          <p>
            Vas a preparar la estructura de un nuevo proyecto
            llamado <strong>mi-negocio</strong>.
          </p>

          <ol className="list-decimal space-y-3 pl-6">
            <li>
              Crea una carpeta principal llamada mi-negocio.
            </li>
            <li>
              Dentro crea las carpetas frontend y backend.
            </li>
            <li>
              En frontend crea index.html, styles.css y app.js.
            </li>
            <li>
              En backend crea server.js. De momento puede estar vacío.
            </li>
            <li>
              Identifica dónde irá package.json cuando
              configuremos Node.js.
            </li>
            <li>
              Explica por qué no colocamos todo el JavaScript
              en un único archivo.
            </li>
          </ol>

          <p className="font-semibold">
            Pregunta adicional:
          </p>

          <p>
            Si una persona reserva una cita desde su móvil,
            ¿qué parte debe comprobar que el horario
            está libre antes de confirmar la reserva?
          </p>
        </div>
      </Practice>

      {/* AUTOEVALUACIÓN */}
      <KnowledgeCheck
        title="Comprueba lo aprendido sobre frontend y backend"
        questions={[
          {
            id: "shared",
            question:
              "¿Por qué localStorage no funciona por sí solo como una agenda compartida?",
            options: [
              "Porque JavaScript no puede leer sus datos",
              "Porque los datos pertenecen a un navegador y origen concretos",
              "Porque únicamente permite guardar números"
            ],
            answer:
              "Porque los datos pertenecen a un navegador y origen concretos",
            feedback:
              "localStorage conserva información localmente, pero no sincroniza automáticamente los datos entre usuarios."
          },
          {
            id: "backend",
            question: "¿Qué describe mejor un backend?",
            options: [
              "El diseño visual de una página",
              "Software que procesa peticiones y aplica reglas",
              "Un ordenador que siempre debe estar en Internet"
            ],
            answer:
              "Software que procesa peticiones y aplica reglas",
            feedback:
              "El backend es software y podemos ejecutarlo localmente con Node.js durante el desarrollo."
          },
          {
            id: "folders",
            question:
              "¿Dónde colocarías inicialmente server.js en nuestro proyecto?",
            options: [
              "En frontend/",
              "En backend/",
              "Dentro de images/"
            ],
            answer: "En backend/",
            feedback:
              "server.js contiene el código que ejecutaremos con Node.js."
          },
          {
            id: "javascript",
            question:
              "¿Podemos utilizar JavaScript tanto en frontend como en backend?",
            options: [
              "No, JavaScript solo funciona en navegadores",
              "Sí, utilizando entornos de ejecución diferentes",
              "Sí, pero únicamente con HTML"
            ],
            answer:
              "Sí, utilizando entornos de ejecución diferentes",
            feedback:
              "El navegador ejecuta JavaScript del frontend y Node.js permite ejecutarlo fuera del navegador."
          },
          {
            id: "repositories",
            question:
              "¿Necesitamos obligatoriamente dos repositorios Git si tenemos frontend y backend?",
            options: [
              "Sí, uno para cada tecnología",
              "No, pueden convivir en un mismo repositorio",
              "Solo si utilizamos CSS"
            ],
            answer:
              "No, pueden convivir en un mismo repositorio",
            feedback:
              "Una estructura con dos carpetas no obliga a trabajar con dos repositorios."
          },
          {
            id: "availability",
            question:
              "¿Qué parte debe comprobar de forma fiable si una cita está disponible antes de guardarla?",
            options: [
              "Únicamente el CSS",
              "El backend",
              "Únicamente el HTML"
            ],
            answer: "El backend",
            feedback:
              "El frontend puede mostrar información, pero el backend debe aplicar las reglas compartidas antes de aceptar la reserva."
          }
        ]}
      />
    </LessonLayout>
  );
}
