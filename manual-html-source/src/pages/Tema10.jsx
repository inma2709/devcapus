import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const Code = ({ children }) => <pre><code>{children}</code></pre>;
const Step = ({ n, title, objective, code, meaning, check }) => <details className="dd" open={n === 1}><summary>Paso {n} — {title}</summary><div className="dd-body"><h3>Objetivo</h3><p>{objective}</p><h3>Código que añadimos</h3><Code>{code}</Code><h3>Qué significa</h3><p>{meaning}</p><div className="callout tip"><strong>Comprueba:</strong> {check}</div></div></details>;

export default function Tema10FormulariosHTML() {
  useEffect(() => { document.title = 'UF1841 · Tema 10 · Formularios en HTML'; }, []);
  const questions = useMemo(() => [
    ['Quieres pedir un correo. ¿Qué control eliges?', ['input type="text"', 'input type="email"', 'textarea', 'input type="tel"'], 1, 'type="email" comunica que esperamos un correo y ofrece validación básica.'],
    ['¿Para qué sirve label?', ['Guardar datos', 'Explicar y asociar un campo', 'Enviar un formulario', 'Dar estilos'], 1, 'label describe el campo y puede activar el control asociado.'],
    ['¿Qué deben compartir un label y su campo?', ['for e id', 'id y name', 'name y value', 'action y method'], 0, 'El valor de for debe coincidir con el id del control.'],
    ['¿Qué nombra el dato cuando se envía?', ['id', 'for', 'name', 'placeholder'], 2, 'name identifica el dato, por ejemplo nombre=Ana.'],
    ['Dos radio de un único grupo deben compartir…', ['id', 'name', 'placeholder', 'required'], 1, 'Cada radio tiene un id propio, pero todos comparten name.'],
    ['¿Para qué sirve required?', ['Guardar el dato', 'Evitar un campo vacío', 'Cifrar datos', 'Crear un backend'], 1, 'Es una validación básica realizada por el navegador.'],
    ['¿Qué indica action="/contacto"?', ['El estilo', 'La ruta que recibe los datos', 'Un campo obligatorio', 'El botón'], 1, 'action señala un destino preparado para recibir el formulario.'],
    ['¿Qué caso encaja con GET?', ['Buscar productos', 'Registrar una persona', 'Enviar un contacto', 'Comprar'], 0, 'GET se usa habitualmente para consultas, búsquedas y filtros.'],
    ['¿POST hace segura la información automáticamente?', ['Sí', 'No; también depende de HTTPS y del sistema receptor', 'Solo con email', 'Solo en móviles'], 1, 'POST no equivale a seguridad.'],
    ['¿Qué hace el backend?', ['Diseña los campos', 'Recibe, valida y procesa datos', 'Sustituye el label', 'Cambia el color'], 1, 'El backend es la parte del servidor que trata los datos recibidos.'],
  ].map(([question, options, correctIndex, explanation], i) => ({ id: `q${i}`, question, options, correctIndex, explanation })), []);
  const [answers, setAnswers] = useState({}); const [submitted, setSubmitted] = useState(false);
  const score = submitted ? questions.filter(q => answers[q.id] === q.correctIndex).length : 0;
  return <main className="doc" id="contenido">
    <header className="doc-hero"><p className="doc-kicker">Tema 10 · Formularios HTML</p><h1>Construye formularios HTML paso a paso</h1><p className="doc-lead">Construye un formulario progresivamente y entiende cómo encaja después en una aplicación web real.</p><div className="callout tip"><strong>Objetivo:</strong> comprender cada pieza de un formulario. No vamos a programar JavaScript ni backend todavía.</div></header>
    <nav className="doc-index" aria-label="Índice del tema"><h2>Contenido</h2><ol>
      <li><a href="#que-es">Qué es un formulario</a></li><li><a href="#primer-formulario">Nuestro primer formulario</a></li><li><a href="#ampliamos">Ampliamos el formulario</a></li><li><a href="#id-for-name">id, for y name</a></li><li><a href="#opciones">Elegir opciones</a></li><li><a href="#validacion">Validación HTML</a></li><li><a href="#organizar">Organizar campos</a></li><li><a href="#formulario-final">Formulario final</a></li><li><a href="#envio">Qué ocurre al enviar</a></li><li><a href="#action-method">action y method</a></li><li><a href="#get-post">GET y POST</a></li><li><a href="#aplicacion-real">Aplicación real</a></li><li><a href="#ampliacion">Ampliación</a></li><li><a href="#ejercicio">Ejercicio guiado</a></li><li><a href="#reto">Reto final</a></li><li><a href="#errores">Errores frecuentes</a></li><li><a href="#test">Test final</a></li>
    </ol></nav>
    <section className="doc-section" id="que-es"><h2>1. ¿Qué es un formulario?</h2><p>Un formulario permite al usuario introducir o seleccionar información. Aparece en contactos, inicios de sesión, registros, buscadores, reservas y compras.</p><p><code>&lt;form&gt;</code> es el contenedor que reúne los campos de una tarea. Primero aprenderemos a construirlo; más adelante veremos qué sistema recibe los datos.</p><div className="callout"><strong>Necesidad:</strong> recoger información. <strong>Herramienta:</strong> controles dentro de un formulario.</div></section>
    <section className="doc-section" id="primer-formulario"><h2>2. Nuestro primer formulario</h2><p>Empezamos solo pidiendo el nombre. No adelantamos validaciones, grupos ni destino de envío.</p><Code>{`<form>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">

  <button type="submit">Enviar</button>
</form>`}</Code><Code>{`form
  ├── label   → explica qué escribir
  ├── input   → permite escribir
  └── button  → intenta enviar`}</Code><p><code>label</code> explica el campo; <code>input</code> permite escribir; y <code>button</code> ofrece una acción. <code>type="submit"</code> intenta enviar el formulario, pero aún no hemos definido quién recibirá ni procesará la información.</p><div className="callout warn">Un botón «Enviar» no guarda datos por sí solo.</div></section>
    <section className="doc-section" id="ampliamos"><h2>3. Ampliamos el mismo formulario</h2><p>Añadimos cada campo porque aparece una necesidad nueva.</p><h3>Correo electrónico</h3><Code>{`<label for="email">Correo electrónico:</label>
<input type="email" id="email" name="email">`}</Code><p><code>email</code> expresa qué dato esperamos y aporta una comprobación básica de formato.</p><h3>Teléfono</h3><Code>{`<label for="telefono">Teléfono:</label>
<input type="tel" id="telefono" name="telefono">`}</Code><p>Un teléfono es un dato de contacto, no una cantidad: usamos <code>tel</code>, no <code>number</code>.</p><h3>Mensaje largo</h3><Code>{`<label for="mensaje">Mensaje:</label>
<textarea id="mensaje" name="mensaje"></textarea>`}</Code><p><code>textarea</code> permite varias líneas.</p><div className="table-wrap"><table className="table"><thead><tr><th>Necesito pedir…</th><th>Control</th></tr></thead><tbody><tr><td>Texto corto</td><td><code>input type="text"</code></td></tr><tr><td>Correo</td><td><code>input type="email"</code></td></tr><tr><td>Teléfono</td><td><code>input type="tel"</code></td></tr><tr><td>Texto largo</td><td><code>textarea</code></td></tr></tbody></table></div></section>
    <section className="doc-section" id="id-for-name"><h2>4. <code>id</code>, <code>for</code> y <code>name</code></h2><p>Se escriben cerca, pero cumplen funciones diferentes.</p><Code>{`<label for="email">Correo electrónico</label>
            │
            └──────────────┐
                           ↓
<input id="email" name="email">
        ↑             ↑
        │             │
 identifica       nombre del dato
 el elemento      que se enviará`}</Code><ul><li><code>id</code> identifica un elemento del documento.</li><li><code>for</code> conecta un <code>label</code> con el campo cuyo <code>id</code> coincide.</li><li><code>name</code> identifica el dato al enviarse.</li></ul><Code>{`name="nombre"  → "Ana"
name="email"   → "ana@email.com"
name="mensaje" → "Quiero información"`}</Code><div className="callout warn"><strong><code>id</code> y <code>name</code> no son lo mismo.</strong> El primero identifica el control; el segundo nombra el dato.</div><details className="dd"><summary>Prueba tú</summary><div className="dd-body"><Code>{`<label for="correo">Correo</label>
<input id="email" name="email">`}</Code><p>Hay un error: <code>for="correo"</code> no encuentra un <code>id="correo"</code>. Haz coincidir ambos valores.</p></div></details></section>
    <section className="doc-section" id="opciones"><h2>5. Elegir opciones</h2><h3>Lista cerrada: select</h3><Code>{`<label for="motivo">Motivo:</label>
<select id="motivo" name="motivo">
  <option value="informacion">Información</option>
  <option value="cita">Solicitar una cita</option>
</select>`}</Code><h3>Una única elección: radio</h3><Code>{`<input type="radio" id="online" name="modalidad" value="online">
<label for="online">Online</label>
<input type="radio" id="presencial" name="modalidad" value="presencial">
<label for="presencial">Presencial</label>`}</Code><p>Los radio comparten <code>name="modalidad"</code>, así el navegador entiende que forman un único grupo.</p><h3>Elección independiente: checkbox</h3><Code>{`<input type="checkbox" id="novedades" name="novedades">
<label for="novedades">Quiero recibir novedades</label>`}</Code><p>Un checkbox permite marcar una o varias opciones independientes, por ejemplo una aceptación de condiciones.</p></section>
    <section className="doc-section" id="validacion"><h2>6. Validación HTML básica</h2><p>Una vez construidos los campos, añadimos reglas sencillas que el navegador puede revisar.</p><Code>{`<input type="text" id="nombre" name="nombre"
       required minlength="3" maxlength="40">
<input type="email" id="email" name="email" required>
<input type="number" id="personas" name="personas" min="1" max="8">`}</Code><ul><li><code>required</code>: no permite dejar el campo vacío.</li><li><code>minlength</code> y <code>maxlength</code>: limitan un texto.</li><li><code>min</code> y <code>max</code>: limitan una cantidad o fecha.</li><li><code>type="email"</code>: comprueba una estructura básica de correo.</li></ul><div className="callout warn">HTML mejora la experiencia en el navegador; una aplicación real también debe validar en el servidor.</div><details className="dd"><summary>Saber más — Validaciones avanzadas sin JavaScript</summary><div className="dd-body"><p>HTML puede aplicar más reglas antes de enviar un formulario. Siguen siendo validaciones realizadas por el navegador: no requieren JavaScript, pero tampoco sustituyen la comprobación del servidor.</p><h3>Reglas que puedes combinar</h3><div className="table-wrap"><table className="table"><thead><tr><th>Necesidad</th><th>HTML</th><th>Ejemplo</th></tr></thead><tbody><tr><td>Una dirección web válida</td><td><code>type="url"</code></td><td><code>https://ejemplo.com</code></td></tr><tr><td>Fecha dentro de un periodo</td><td><code>type="date"</code>, <code>min</code>, <code>max</code></td><td><code>min="2026-01-01"</code></td></tr><tr><td>Cantidad en saltos concretos</td><td><code>step</code></td><td><code>step="2"</code> permite 2, 4, 6…</td></tr><tr><td>Varias direcciones de correo</td><td><code>multiple</code> con <code>email</code></td><td>Separa los correos con comas.</td></tr><tr><td>Formato muy específico</td><td><code>pattern</code></td><td>Un código o formato definido por la aplicación.</td></tr></tbody></table></div><Code>{`<label for="fecha">Fecha de reserva:</label>
<input type="date" id="fecha" name="fecha"
       min="2026-01-01" max="2026-12-31" required>

<label for="cantidad">Cantidad (de dos en dos):</label>
<input type="number" id="cantidad" name="cantidad" min="2" max="10" step="2">

<label for="sitio">Web:</label>
<input type="url" id="sitio" name="sitio">

<label for="codigo">Código:</label>
<input type="text" id="codigo" name="codigo" pattern="..." title="Consulta el formato solicitado">`}</Code><p><code>pattern</code> utiliza una expresión regular: una forma de describir un patrón de texto. No necesitas aprender a escribirlas ahora; cuando las uses, acompáñalas de una instrucción visible y de <code>title</code> para que la persona entienda qué se espera.</p><h3>Validar con HTML o con JavaScript</h3><div className="table-wrap"><table className="table"><thead><tr><th></th><th>Sin JavaScript: HTML</th><th>Con JavaScript</th></tr></thead><tbody><tr><td><strong>Ventajas</strong></td><td>Menos código, funciona incluso sin JS, validación integrada y mensajes del navegador.</td><td>Permite reglas entre varios campos, mensajes y comportamiento adaptado a la interfaz.</td></tr><tr><td><strong>Desventajas</strong></td><td>No cubre reglas complejas de negocio ni personaliza todo el comportamiento.</td><td>Exige más código, pruebas y accesibilidad; puede no ejecutarse o contener errores.</td></tr><tr><td><strong>Ejemplo adecuado</strong></td><td>Email obligatorio, longitud de nombre, fecha mínima o número en un rango.</td><td>Comprobar que dos contraseñas coinciden o mostrar campos según una elección.</td></tr></tbody></table></div><div className="callout tip"><strong>Buena decisión:</strong> empieza por HTML. Añade JavaScript solo cuando exista una necesidad que HTML no resuelva bien.</div><div className="callout warn"><strong>Regla profesional:</strong> HTML y JavaScript validan en el navegador para ayudar al usuario. El backend debe volver a validar siempre, porque cualquier validación del navegador se puede evitar o manipular.</div></div></details></section>
    <section className="doc-section" id="organizar"><h2>7. Organizar un formulario que ha crecido</h2><p>Ya tenemos muchos campos. Agrupamos los relacionados con <code>fieldset</code> y nombramos cada grupo con <code>legend</code>.</p><Code>{`<fieldset>
  <legend>Datos personales</legend>
  <!-- nombre, correo y teléfono -->
</fieldset>
<fieldset>
  <legend>Tu consulta</legend>
  <!-- motivo, modalidad y mensaje -->
</fieldset>`}</Code><p>Además de ordenar el formulario, esta estructura aporta información semántica y accesible.</p></section>
    <section className="doc-section" id="formulario-final"><h2>8. Formulario final</h2><p>Este código es la suma de los elementos que acabas de conocer.</p><Code>{`<form>
  <fieldset>
    <legend>Datos personales</legend>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required minlength="3" maxlength="40">
    <label for="email">Correo:</label>
    <input type="email" id="email" name="email" required>
    <label for="telefono">Teléfono:</label>
    <input type="tel" id="telefono" name="telefono">
  </fieldset>
  <fieldset>
    <legend>Tu consulta</legend>
    <label for="motivo">Motivo:</label>
    <select id="motivo" name="motivo" required><option value="">Selecciona una opción</option><option value="informacion">Información</option></select>
    <input type="radio" id="online" name="modalidad" value="online"><label for="online">Online</label>
    <input type="radio" id="presencial" name="modalidad" value="presencial"><label for="presencial">Presencial</label>
    <label for="mensaje">Mensaje:</label><textarea id="mensaje" name="mensaje" required minlength="10"></textarea>
    <input type="checkbox" id="condiciones" name="condiciones" required><label for="condiciones">Acepto las condiciones</label>
  </fieldset>
  <button type="submit">Enviar</button>
</form>`}</Code></section>
    <section className="doc-section" id="envio"><h2>9. ¿Qué ocurre al pulsar Enviar?</h2><p>HTML crea el formulario y recoge valores, pero normalmente otra parte de la aplicación decide qué hacer con ellos.</p><Code>{`NAVEGADOR
┌──────────────────────┐
│ Formulario HTML      │
│ Nombre: Ana          │
│ Email: ana@...       │
│ Mensaje: ...         │
└──────────┬───────────┘
           │ petición HTTP
           ▼
SERVIDOR
┌──────────────────────┐
│ Backend              │
│ recibe · valida      │
│ procesa              │
└──────────┬───────────┘
           ├──→ Base de datos
           ├──→ Email
           └──→ Respuesta`}</Code><div className="callout"><strong>HTML crea la interfaz del formulario.</strong><br /><strong>El backend puede recibir y procesar sus datos.</strong></div><p>El <strong>backend</strong> es la parte que se ejecuta en el servidor. Podría estar programada con Node.js, PHP, Java o Python; no vamos a programarla todavía.</p></section>
    <section className="doc-section" id="action-method"><h2>10. <code>action</code> y <code>method</code></h2><p>Ahora sí podemos señalar el lugar que recibirá el formulario.</p><Code>{`<form action="/contacto" method="post">`}</Code><ul><li><code>action</code> indica dónde se enviarán los datos.</li><li><code>method</code> indica cómo se realizará el envío.</li></ul><p><code>/contacto</code> representa una ruta del servidor preparada para recibir los datos, aunque todavía no sepamos programarla.</p></section>
    <section className="doc-section" id="get-post"><h2>11. GET y POST</h2><h3>GET</h3><p>Se usa principalmente para consultas, búsquedas y filtros. Sus datos pueden aparecer en la URL.</p><Code>{`/buscar?producto=portatil`}</Code><h3>POST</h3><p>Es habitual en contacto, registro o inicio de sesión. Los datos se envían dentro de la petición, no como parámetros visibles en la URL.</p><div className="callout warn"><strong>POST no hace los datos seguros automáticamente.</strong> La seguridad del transporte depende, entre otras cosas, de HTTPS.</div></section>
    <section className="doc-section" id="aplicacion-real"><h2>12. Cómo encaja en una aplicación real</h2><Code>{`HTML
  ↓
Formulario
  ↓
Petición HTTP
  ↓
Backend
  ↓
Validación
  ↓
Lógica de aplicación
  ↓
Base de datos / email / respuesta`}</Code><p>Tu responsabilidad en HTML es construir controles claros, accesibles y con validación básica. Las capas posteriores se estudiarán en desarrollo de servidor.</p></section>
    <section className="doc-section" id="ampliacion"><h2>13. Ampliación — Web estática sin backend</h2><p>Una web estática no tiene por sí misma un programa de servidor. Hay servicios externos que reciben formularios y los reenvían a un correo; Web3Forms es un ejemplo. No forma parte de HTML y no es necesario configurarlo para realizar este tema.</p><p><code>mailto:</code> abre el cliente de correo que tenga configurado la persona usuaria. No equivale a un procesamiento profesional del formulario.</p></section>
    <section className="doc-section" id="ejercicio"><h2>14. Ejercicio guiado: construye el formulario</h2><p>Construye un formulario de contacto de forma incremental. No copies el resultado final antes de probar cada cambio.</p><div className="media"><div className="media-video"><iframe src="https://www.youtube-nocookie.com/embed/bj7Xtdsjclk" title="Vídeo de apoyo: Formularios HTML paso a paso" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div><p className="muted">Vídeo de apoyo. Pausa cuando sea necesario y reproduce cada paso en tu propio archivo HTML.</p></div>
      <Step n={1} title="Crear form" objective="Marcar el contenedor." code={'<form>\n</form>'} meaning="form reunirá todos los controles." check="Todavía no aparece ningún campo; el contenedor está creado." />
      <Step n={2} title="Añadir nombre" objective="Pedir un texto corto con etiqueta." code={'<label for="nombre">Nombre:</label>\n<input type="text" id="nombre" name="nombre">'} meaning="for e id coinciden; name nombra el dato." check="Al pulsar la etiqueta, el cursor pasa al campo." />
      <Step n={3} title="Añadir email" objective="Pedir un correo." code={'<label for="email">Correo:</label>\n<input type="email" id="email" name="email">'} meaning="email comunica el tipo de dato." check="En móvil se muestra un teclado apropiado para correo." />
      <Step n={4} title="Añadir teléfono" objective="Pedir un contacto telefónico." code={'<label for="telefono">Teléfono:</label>\n<input type="tel" id="telefono" name="telefono">'} meaning="tel es más adecuado que number para un teléfono." check="El campo acepta un teléfono." />
      <Step n={5} title="Añadir mensaje" objective="Permitir varias líneas." code={'<label for="mensaje">Mensaje:</label>\n<textarea id="mensaje" name="mensaje"></textarea>'} meaning="textarea responde a un texto largo." check="Puedes escribir párrafos y saltos de línea." />
      <Step n={6} title="Añadir select" objective="Elegir un motivo de una lista." code={'<label for="motivo">Motivo:</label>\n<select id="motivo" name="motivo"><option>Información</option></select>'} meaning="select contiene opciones cerradas." check="Puedes desplegar y escoger una opción." />
      <Step n={7} title="Añadir radio o checkbox" objective="Elegir una única opción o una independiente." code={'<input type="radio" id="online" name="modalidad" value="online">\n<label for="online">Online</label>'} meaning="Los radio de un grupo comparten name." check="Al crear otro radio con ese name, solo puede quedar uno marcado." />
      <Step n={8} title="Añadir validaciones" objective="Evitar campos vacíos o demasiado cortos." code={'<input type="text" id="nombre" name="nombre" required minlength="3">'} meaning="required y minlength son reglas de HTML." check="Prueba a enviar dejando el nombre vacío." />
      <Step n={9} title="Organizar" objective="Agrupar campos relacionados." code={'<fieldset>\n  <legend>Datos personales</legend>\n</fieldset>'} meaning="fieldset agrupa; legend nombra el grupo." check="El grupo se presenta con un título comprensible." />
      <Step n={10} title="Añadir botón" objective="Ofrecer el envío." code={'<button type="submit">Enviar</button>'} meaning="Activa validaciones; aún no existe un backend que procese el resultado." check="El botón intenta enviar solo cuando las validaciones se cumplen." />
      <details className="dd"><summary>Comparar con la solución</summary><div className="dd-body"><p>Comprueba el <a href="#formulario-final">formulario final</a>: debe resultar familiar porque es la suma de los pasos anteriores.</p></div></details>
    </section>
    <section className="doc-section" id="reto"><h2>15. Reto final: formulario de reserva</h2><p>Crea un formulario con nombre, correo, teléfono, fecha, número de personas, tipo de reserva, observaciones, aceptación de condiciones y botón. Decide qué control corresponde a cada dato.</p><details className="dd"><summary>Pistas</summary><div className="dd-body"><ul><li>Correo: <code>email</code>; teléfono: <code>tel</code>.</li><li>Fecha: <code>date</code>; personas: <code>number</code> con <code>min</code> y <code>max</code>.</li><li>Tipo: <code>select</code>; observaciones: <code>textarea</code>.</li><li>Condiciones: <code>checkbox</code> con <code>required</code>.</li></ul></div></details><details className="dd"><summary>Ver una posible solución</summary><div className="dd-body"><Code>{`<form>
  <label for="reserva-nombre">Nombre:</label><input type="text" id="reserva-nombre" name="nombre" required>
  <label for="reserva-email">Correo:</label><input type="email" id="reserva-email" name="email" required>
  <label for="fecha">Fecha:</label><input type="date" id="fecha" name="fecha" required>
  <label for="personas">Personas:</label><input type="number" id="personas" name="personas" min="1" max="12">
  <label for="tipo">Tipo:</label><select id="tipo" name="tipo"><option>Comida</option><option>Cena</option></select>
  <label for="observaciones">Observaciones:</label><textarea id="observaciones" name="observaciones"></textarea>
  <input type="checkbox" id="condiciones-reserva" name="condiciones" required><label for="condiciones-reserva">Acepto las condiciones</label>
  <button type="submit">Enviar reserva</button>
</form>`}</Code></div></details></section>
    <section className="doc-section" id="errores"><h2>16. Errores frecuentes</h2><div className="table-wrap"><table className="table"><thead><tr><th>Error</th><th>Corrección</th></tr></thead><tbody><tr><td>Olvidar <code>form</code></td><td>Usa el contenedor del formulario.</td></tr><tr><td>Usar placeholder en lugar de label</td><td>Mantén un label visible y asociado.</td></tr><tr><td>for e id distintos</td><td>Haz coincidir ambos valores.</td></tr><tr><td>Confundir id y name</td><td>Control frente a dato enviado.</td></tr><tr><td>Usar siempre text</td><td>Elige el control que corresponde al dato.</td></tr><tr><td>Usar number para teléfono</td><td>Usa tel.</td></tr><tr><td>Olvidar name</td><td>El dato no tendrá un nombre de envío.</td></tr><tr><td>Radio con name distinto</td><td>Comparte name dentro del grupo.</td></tr><tr><td>Creer que HTML guarda datos</td><td>El backend los procesa.</td></tr><tr><td>Creer que POST es seguro</td><td>POST no sustituye HTTPS ni validación del servidor.</td></tr></tbody></table></div></section>
    <section className="doc-section" id="test"><h2>17. Test final de comprensión</h2><div className="callout tip">Responde según la situación y revisa el motivo de cada respuesta.</div>{questions.map((q, i) => <article className="card" key={q.id} style={{ marginTop: '1rem' }}><h3>{i + 1}. {q.question}</h3><div className="test-question" role="radiogroup" aria-label={q.question}>{q.options.map((option, oi) => <label key={option}><input type="radio" name={q.id} checked={answers[q.id] === oi} onChange={() => { setAnswers({ ...answers, [q.id]: oi }); setSubmitted(false); }} /> {option}</label>)}</div>{submitted && <div className={`callout ${answers[q.id] === q.correctIndex ? 'tip' : 'warn'}`}><strong>{answers[q.id] === q.correctIndex ? 'Correcto.' : 'Revisa esta respuesta.'}</strong> {q.explanation}</div>}</article>)}<div className="form-actions" style={{ marginTop: '1rem' }}><button className="btn btn-primary" type="button" onClick={() => setSubmitted(true)}>Corregir test</button><button className="btn" type="button" onClick={() => { setAnswers({}); setSubmitted(false); }}>Reiniciar</button></div>{submitted && <div className="callout tip"><strong>Resultado: {score} / {questions.length}.</strong> {score === questions.length ? 'Has comprendido las decisiones principales.' : 'Revisa las explicaciones y vuelve al apartado necesario.'}</div>}</section>
    <div className="doc-next"><Link className="btn btn-primary" to="/tema/11">Siguiente tema <span aria-hidden="true">→</span></Link></div>
  </main>;
}
