export default function FirstLessonContent() {
  return (
    <>
      <p className="jsm-subtitle">
        Hasta ahora has construido páginas. Ahora vamos a conseguir que
        respondan.
      </p>
      <section className="jsm-goal">
        <h2>Al terminar serás capaz de…</h2>
        <p>
          Explicar qué aporta JavaScript a una web y reconocer situaciones en
          las que necesitamos interacción o lógica.
        </p>
      </section>
      <section className="jsm-section">
        <h2>El siguiente paso después de HTML y CSS</h2>
        <p>
          Con HTML ya sabes decidir qué hay en una página: títulos, textos,
          imágenes, formularios o botones. Con CSS puedes darle una apariencia
          clara y cuidada. Eso ya permite crear webs muy útiles.
        </p>
        <p>
          Pero hay momentos en los que una página necesita reaccionar: mostrar
          información al pulsar,  actualizar un total en un carrito o
          recordar una elección. Ahí aparece JavaScript.
        </p>
      </section>
      <section className="jsm-section">
        <h2>¿Qué significa que una web sea interactiva?</h2>
        <p>
          Una web es interactiva cuando responde a algo que hace la persona o a
          un cambio dentro de la propia aplicación. No se limita a presentar
          información: escucha una situación y decide qué mostrar o qué hacer
          después.
        </p>
        <div
          className="jsm-flow"
          aria-label="Acción de la persona, respuesta de la página"
        >
          <span>La persona hace algo</span>
          <b>→</b>
          <span>La página responde</span>
        </div>
        <p>
          Por ejemplo: una persona pulsa “Ver horarios” y la página muestra las
          horas disponibles. La acción no cambia el contenido por sí sola; hace
          falta una regla que indique cuál debe ser la respuesta.
        </p>
      </section>
      <section className="jsm-section">
        <h2>Web estática y web interactiva</h2>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Web estática</th>
                <th>Web interactiva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Muestra información preparada.</td>
                <td>También responde a acciones o cambios.</td>
              </tr>
              <tr>
                <td>
                  Una página de presentación, un artículo o una carta de
                  restaurante.
                </td>
                <td>
                  Un buscador, una reserva, un carrito o una lista de tareas.
                </td>
              </tr>
              <tr>
                <td>HTML y CSS pueden ser suficientes.</td>
                <td>Necesita comportamiento y, a menudo, lógica.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          “Estática” no significa peor. Si una página solo tiene que informar,
          HTML y CSS pueden ser exactamente lo que necesita. JavaScript se
          incorpora cuando queremos que ocurra algo.
        </p>
        <aside className="jsm-callout">
          <h3>Una precisión importante</h3>
          <p>
            HTML ya incluye algunas interacciones sencillas, como desplegar una
            explicación o enviar un formulario. No todo movimiento o respuesta
            necesita JavaScript. Lo usaremos cuando la interacción requiera una
            decisión, un cambio de datos o un comportamiento propio.
          </p>
        </aside>
      </section>
      <section className="jsm-section">
        <h2>Un caso real: “Ver horarios”</h2>
        <p>
          Imagina la web de un centro deportivo. Al principio muestra una
          explicación breve. Una persona elige una actividad y pulsa “Ver
          horarios”. La página debe identificar esa elección y mostrar
          únicamente los horarios correspondientes.
        </p>
        <div className="jsm-flow jsm-flow--steps">
          <span>Elegir actividad</span>
          <b>→</b>
          <span>Pulsar “Ver horarios”</span>
          <b>→</b>
          <span>Mostrar la respuesta adecuada</span>
        </div>
        <p>
          JavaScript es la parte que conecta esos pasos. No vamos a escribirlo
          todavía: primero necesitamos aprender a mirar la web como un sistema
          de datos, decisiones y respuestas.
        </p>
      </section>
      <section className="jsm-section">
        <h2>El reparto de trabajo</h2>
        <div className="jsm-table-wrap">
          <table className="jsm-table">
            <thead>
              <tr>
                <th>Tecnología</th>
                <th>Pregunta que responde</th>
                <th>Ejemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>HTML</strong>
                </td>
                <td>¿Qué hay?</td>
                <td>Un botón, un título, un formulario.</td>
              </tr>
              <tr>
                <td>
                  <strong>CSS</strong>
                </td>
                <td>¿Cómo se presenta?</td>
                <td>Colores, tamaños, espacios y orden visual.</td>
              </tr>
              <tr>
                <td>
                  <strong>JavaScript</strong>
                </td>
                <td>¿Qué ocurre?</td>
                <td>Abrir, calcular, cambiar, validar o actualizar.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="jsm-section">
        <h2>Situaciones que ya conoces</h2>
        <div className="jsm-example-grid">
          <p>
            <strong>Navegación e interfaz:</strong> abrir un menú, cambiar una
            pestaña o cerrar un aviso.
          </p>
          <p>
            <strong>Formularios:</strong> avisar si falta un dato antes de
            enviar.
          </p>
          <p>
            <strong>Compras y reservas:</strong> actualizar el precio, las
            plazas o el carrito.
          </p>
          <p>
            <strong>Contenido:</strong> filtrar resultados, buscar productos o
            cargar más elementos.
          </p>
          <p>
            <strong>Herramientas:</strong> una calculadora, una agenda o una
            galería.
          </p>
          <p>
            <strong>Preferencias:</strong> recordar un tema visual o una opción
            elegida.
          </p>
        </div>
      </section>
      <section className="jsm-section">
        <h2>Acciones, datos y decisiones</h2>
        <p>
          Usaremos la palabra <strong>evento</strong> de forma sencilla: es algo
          que ocurre, como pulsar, escribir, enviar, seleccionar o terminar de
          cargar una página. JavaScript puede esperar esos momentos y responder.
        </p>
        <p>
          Además, muchas respuestas dependen de datos. Si quedan tres plazas, la
          web puede avisar “Últimas plazas”. Si alguien elige tres entradas de
          veinte euros, la web puede obtener el total. Esas reglas son la lógica
          de una aplicación.
        </p>
      </section>
      <section className="jsm-section">
        <h2>El recorrido que vamos a seguir</h2>
        <ol className="jsm-path">
          <li>Entender datos y valores.</li>
          <li>Tomar decisiones.</li>
          <li>Crear instrucciones reutilizables.</li>
          <li>Trabajar con listas y objetos.</li>
          <li>Cambiar partes de la página.</li>
          <li>Responder a las acciones de las personas.</li>
        </ol>
        <p>
          Cada parte prepara la siguiente. Así, cuando lleguemos a una interfaz
          real, entenderás de dónde sale cada respuesta.
        </p>
      </section>
      <section className="jsm-section">
        <h2>¿Qué es una aplicación web?</h2>
        <p>
          Una aplicación web no tiene que ser enorme. Es una página con reglas y
          respuestas: una calculadora, una lista de tareas, una reserva, un
          buscador, un carrito, una agenda o una galería pueden serlo.
        </p>
        <p>
          En este manual empezaremos solo con HTML, CSS y JavaScript. No
          necesitas base de datos, servidor ni framework para aprender a
          construir estas primeras interacciones.
        </p>
        <aside className="jsm-callout jsm-callout--accent">
          <h3>Una palabra útil: frontend</h3>
          <p>
            El frontend es la parte que ve y usa la persona: la interfaz, sus
            cambios y sus respuestas. Este manual se centra en esa experiencia.
          </p>
        </aside>
      </section>
      <section className="jsm-section">
        <h2>Aprenderás probando</h2>
        <p>
          Programar consiste en probar una idea, observar el resultado, cambiar
          algo y volver a comprobarlo. Equivocarse forma parte del proceso: te
          permite descubrir qué regla faltaba o qué respuesta no era la
          esperada.
        </p>
        <p>
          Más adelante tendrás una norma sencilla: cambia algo en cada ejemplo y
          observa qué efecto produce.
        </p>
      </section>
      <section className="jsm-section">
        <h2>Actividad breve: mira una web con ojos de programador</h2>
        <ol>
          <li>Abre una web que uses habitualmente.</li>
          <li>
            Encuentra tres cosas que respondan a una acción: un menú, un filtro,
            un formulario, una búsqueda o una galería.
          </li>
          <li>Para cada una, describe la acción y la respuesta que esperas.</li>
          <li>
            Piensa si podría funcionar solo con HTML y CSS o si parece necesitar
            JavaScript.
          </li>
        </ol>
      </section>
      <section className="jsm-section jsm-challenge">
        <h2>Microreto: ¿qué tecnología falta?</h2>
        <p>Antes de mirar las soluciones, decide qué usarías en cada caso.</p>
        <ol>
          <li>Mostrar un título y un botón.</li>
          <li>Dar color, tamaño y espacio a ese botón.</li>
          <li>Desplegar una información sencilla ya incluida en la página.</li>
          <li>Actualizar el total al añadir un producto.</li>
          <li>Avisar de que faltan datos antes de enviar una reserva.</li>
          <li>Filtrar una lista de cursos según una búsqueda.</li>
        </ol>
        <details>
          <summary>Ver solución razonada</summary>
          <p>
            1: HTML, porque define qué existe. 2: CSS, porque decide cómo se
            presenta. 3: HTML puede resolverlo con una interacción nativa. 4, 5
            y 6: JavaScript, porque hace falta responder con datos,
            comprobaciones o cambios según una acción.
          </p>
        </details>
      </section>
      <section className="jsm-section jsm-recap">
        <h2>Acabamos de ver</h2>
        <ul>
          <li>HTML construye el contenido y CSS lo presenta.</li>
          <li>JavaScript aporta comportamiento, respuestas y lógica.</li>
          <li>
            No toda web necesita JavaScript; lo usamos cuando hay una necesidad
            real de interacción.
          </li>
          <li>
            Una aplicación web se entiende como un conjunto de datos, reglas y
            respuestas.
          </li>
        </ul>
      </section>
      <section className="jsm-next">
        <h2>Lo siguiente</h2>
        <p>
          Ahora veremos con más precisión cómo se relacionan HTML, CSS y
          JavaScript antes de preparar la conexión de JavaScript con una página.
        </p>
      </section>
    </>
  );
}
