const Code = ({ children }) => (
  <pre className="jsm-code">
    <code>{children}</code>
  </pre>
);

export default function HtmlCssJavaScriptLesson() {
  return (
    <>
      <p className="jsm-subtitle">
        HTML construye, CSS presenta y JavaScript hace que la página responda.
        Juntas forman la base de muchas experiencias web.
      </p>

      <section className="jsm-goal">
        <h2>Al terminar serás capaz de…</h2>
        <p>
          Distinguir el trabajo de HTML, CSS y JavaScript, y decidir cuándo una
          interacción sencilla necesita JavaScript y cuándo no.
        </p>
      </section>

      <section className="jsm-section">
        <h2>Una página web tiene tres capas</h2>
        <p>
          Piensa en una web como una tienda. Necesita una estructura para saber
          qué hay, una presentación para que resulte clara y atractiva, y unas
          reglas para responder cuando alguien entra, busca o compra algo.
        </p>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Tecnología</th>
                <th>Su trabajo</th>
                <th>Pregunta que responde</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>HTML</strong></td>
                <td>Define el contenido y su significado.</td>
                <td>¿Qué hay en la página?</td>
              </tr>
              <tr>
                <td><strong>CSS</strong></td>
                <td>Decide el aspecto y la distribución.</td>
                <td>¿Cómo se ve?</td>
              </tr>
              <tr>
                <td><strong>JavaScript</strong></td>
                <td>Responde a acciones y aplica reglas.</td>
                <td>¿Qué ocurre ahora?</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="jsm-section">
        <h2>El mismo botón, visto por las tres tecnologías</h2>
        <p>
          Un botón para ver horarios ilustra bien el reparto. Ninguna de las
          tres tecnologías sustituye a las otras: cada una aporta una parte.
        </p>
        <div className="jsm-grid">
          <section>
            <h3>HTML: el elemento existe</h3>
            <Code>{`<button id="ver-horarios">
  Ver horarios
</button>

<div id="horarios" hidden>
  Lunes y miércoles, 18:00
</div>`}</Code>
            <p>HTML crea el botón y el lugar donde aparecerá la información.</p>
          </section>
          <section>
            <h3>CSS: el elemento se presenta</h3>
            <Code>{`.boton-principal {
  background: #f7df1e;
  padding: 12px 16px;
  border-radius: 8px;
}`}</Code>
            <p>CSS le da color, espacio, tamaño y una apariencia reconocible.</p>
          </section>
        </div>
        <h3>JavaScript: ocurre algo al pulsar</h3>
        <Code>{`const boton = document.querySelector('#ver-horarios');
const horarios = document.querySelector('#horarios');

boton.addEventListener('click', () => {
  horarios.hidden = false;
});`}</Code>
        <p>
          JavaScript espera el clic y cambia el estado de la información. Más
          adelante entenderás cada línea; por ahora observa la idea: acción,
          regla y respuesta.
        </p>
      </section>

      <section className="jsm-section">
        <h2>Cuándo sí necesitamos JavaScript</h2>
        <p>
          JavaScript es útil cuando la página debe reaccionar a una persona,
          usar datos o elegir una respuesta distinta según una condición.
        </p>
        <div className="jsm-example-grid">
          <p><strong>Carrusel:</strong> cambiar la foto visible al pulsar anterior o siguiente.</p>
          <p><strong>Menú móvil:</strong> abrir y cerrar la navegación al tocar su botón.</p>
          <p><strong>Filtro:</strong> mostrar solo los cursos que coinciden con una búsqueda.</p>
          <p><strong>Carrito:</strong> recalcular el total al añadir o quitar un producto.</p>
          <p><strong>Formulario:</strong> mostrar un aviso si falta un dato importante.</p>
          <p><strong>Preferencias:</strong> recordar que la persona eligió modo oscuro.</p>
        </div>
        <aside className="jsm-callout">
          <h3>JavaScript no es obligatorio para todo</h3>
          <p>
            Un enlace a otra página se hace con <code>&lt;a&gt;</code> y una
            animación decorativa sencilla puede hacerse con CSS. Añadimos
            JavaScript cuando hace falta comportamiento, datos o decisiones.
          </p>
        </aside>
      </section>

      <section className="jsm-section">
        <h2>Un filtro sencillo: datos y una decisión</h2>
        <p>
          Si una persona busca “css”, el filtro compara ese texto con el nombre
          de cada curso. Los que coinciden permanecen visibles; los demás se
          ocultan. Es una pequeña regla, pero es la misma idea que encontrarás
          en buscadores mucho más grandes.
        </p>
        <Code>{`buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();

  cursos.forEach((curso) => {
    const coincide = curso.textContent.toLowerCase().includes(texto);
    curso.hidden = !coincide;
  });
});`}</Code>
        <div className="jsm-flow jsm-flow--steps" aria-label="Funcionamiento de un filtro">
          <span>La persona escribe</span>
          <b>→</b>
          <span>JavaScript compara</span>
          <b>→</b>
          <span>La lista se actualiza</span>
        </div>
      </section>

      <section className="jsm-section">
        <h2>Primero HTML, después CSS y por último JavaScript</h2>
        <p>
          Este orden evita muchos problemas. Si el contenido no existe en HTML,
          JavaScript no tiene qué controlar. Si la interfaz no se entiende sin
          JavaScript, una persona puede quedar bloqueada si algo falla.
        </p>
        <ol className="jsm-path">
          <li>Escribe un HTML semántico que ya explique el contenido.</li>
          <li>Usa CSS para que sea claro, adaptable y cómodo de utilizar.</li>
          <li>Añade JavaScript a las acciones que necesiten respuesta o lógica.</li>
          <li>Prueba qué ocurre con clic, teclado, pantalla pequeña y errores.</li>
        </ol>
        <aside className="jsm-callout jsm-callout--accent">
          <h3>Una buena pregunta antes de programar</h3>
          <p>
            “¿Qué debe pasar exactamente cuando la persona haga esto?” Si puedes
            responderla con claridad, ya has definido la regla que JavaScript
            tendrá que aplicar.
          </p>
        </aside>
      </section>

      <section className="jsm-section jsm-challenge">
        <h2>Microreto: elige la herramienta</h2>
        <ol>
          <li>Crear el título “Cursos disponibles”.</li>
          <li>Colocar las tarjetas de curso en dos columnas.</li>
          <li>Mostrar solo los cursos de nivel inicial al marcar una casilla.</li>
          <li>Ir a la página de contacto al pulsar un enlace.</li>
          <li>Impedir continuar con una reserva sin aceptar las condiciones.</li>
        </ol>
        <details>
          <summary>Ver la solución razonada</summary>
          <p>
            1 usa HTML; 2 usa CSS; 3 necesita JavaScript porque cambia según una
            elección; 4 se resuelve con un enlace HTML; y 5 necesita JavaScript
            para comprobar una condición antes de continuar.
          </p>
        </details>
      </section>

      <section className="jsm-section jsm-recap">
        <h2>Acabamos de ver</h2>
        <ul>
          <li>HTML aporta contenido y estructura.</li>
          <li>CSS organiza la presentación visual.</li>
          <li>JavaScript añade respuestas, datos y reglas.</li>
          <li>La solución más simple suele ser la mejor: no todo necesita JavaScript.</li>
        </ul>
      </section>
    </>
  );
}
