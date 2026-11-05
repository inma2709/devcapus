import { useEffect } from "react";

export default function EspaciadoCSS() {
  useEffect(() => {
    document.title = "CSS · Espaciado: margin, padding y gap";
  }, []);

  return (
    <main className="doc" id="contenido">

      {/* =========================
          INTRO
      ========================== */}
      <section className="card">
        <h1>CSS · El espacio: margin, padding y gap</h1>

        <p>
          Antes de entender el <strong>box model</strong>, es imprescindible dominar
          cómo funciona el <strong>espacio en CSS</strong>. Gran parte del diseño web
          no consiste en colores o tipografía, sino en cómo se separan y organizan
          los elementos.
        </p>

        <p>
          CSS trabaja con tres formas principales de gestionar el espacio:
        </p>

        <ul>
          <li><strong>padding</strong> → espacio interno</li>
          <li><strong>margin</strong> → espacio externo</li>
          <li><strong>gap</strong> → espacio entre elementos en layouts</li>
        </ul>

        <div className="callout tip">
          Idea clave: diseñar bien no es “poner cosas”, es <strong>gestionar el espacio</strong>.
        </div>

        <figure className="media">
          <img
            src="/spacing.png"
            alt="Espaciado en CSS: margin padding gap"
            width="900"
            height="420"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            El espacio en CSS se divide en interior (padding), exterior (margin)
            y separación entre elementos (gap).
          </figcaption>
        </figure>
      </section>

      {/* =========================
          PADDING
      ========================== */}
      <section className="card">
        <h2>1) Padding — espacio interno</h2>

        <details className="dd" open>
          <summary>Qué es padding</summary>
          <div className="dd-body">
            <p>
              El <code>padding</code> es el espacio entre el contenido y el borde
              del elemento.
            </p>

            <pre>
              <code>{`.box{
  padding: 20px;
}`}</code>
            </pre>

            <div className="callout">
              El padding empuja el contenido hacia dentro.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Cómo se aplica</summary>
          <div className="dd-body">
            <pre>
              <code>{`padding: 20px;        /* todos los lados */
padding: 10px 20px;   /* vertical | horizontal */
padding: 10px 20px 30px 40px; /* top right bottom left */`}</code>
            </pre>

            <div className="callout tip">
              Regla mental: empieza arriba y sigue en sentido horario.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Cuándo usarlo</summary>
          <div className="dd-body">
            <ul>
              <li>Para dar aire al contenido</li>
              <li>Para mejorar la legibilidad</li>
              <li>Para hacer botones más cómodos</li>
            </ul>
          </div>
        </details>
      </section>

      {/* =========================
          MARGIN
      ========================== */}
      <section className="card">
        <h2>2) Margin — espacio externo</h2>

        <details className="dd" open>
          <summary>Qué es margin</summary>
          <div className="dd-body">
            <p>
              El <code>margin</code> es el espacio que separa un elemento de otros.
            </p>

            <pre>
              <code>{`.box{
  margin: 20px;
}`}</code>
            </pre>

            <div className="callout">
              El margin separa elementos entre sí.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Diferencia clave con padding</summary>
          <div className="dd-body">
            <ul>
              <li><strong>padding</strong> → espacio dentro</li>
              <li><strong>margin</strong> → espacio fuera</li>
            </ul>

            <div className="callout tip">
              Si quieres separar contenido interno → padding  
              Si quieres separar bloques → margin
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Uso típico</summary>
          <div className="dd-body">
            <pre>
              <code>{`h2{
  margin-bottom: 1rem;
}`}</code>
            </pre>

            <p>
              Muy común para separar títulos, secciones o bloques verticalmente.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          GAP
      ========================== */}
      <section className="card">
        <h2>3) Gap — espacio entre elementos en layouts</h2>

        <details className="dd" open>
          <summary>Qué es gap</summary>
          <div className="dd-body">
            <p>
              <code>gap</code> se usa en <strong>flex</strong> y <strong>grid</strong>
              para separar elementos hijos automáticamente.
            </p>

            <pre>
              <code>{`.container{
  display: flex;
  gap: 20px;
}`}</code>
            </pre>

            <div className="callout">
              Gap crea espacio entre elementos sin usar margin.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Por qué es importante</summary>
          <div className="dd-body">
            <p>
              Antes se usaba <code>margin</code> para separar elementos, lo que
              generaba problemas (último elemento, colapsos, etc.).
            </p>

            <div className="callout tip">
              Gap es más limpio, más predecible y más moderno.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          COMPARATIVA
      ========================== */}
      <section className="card">
        <h2>Comparación clara</h2>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Tipo de espacio</th>
                <th>Actúa sobre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>padding</td>
                <td>Interno</td>
                <td>Dentro del elemento</td>
              </tr>
              <tr>
                <td>margin</td>
                <td>Externo</td>
                <td>Separación entre elementos</td>
              </tr>
              <tr>
                <td>gap</td>
                <td>Entre elementos</td>
                <td>Contenedores flex/grid</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="callout tip">
          Regla rápida: contenido → padding | bloques → margin | layouts → gap
        </div>
      </section>

      {/* =========================
          PRÁCTICA
      ========================== */}
      <section className="card">
        <h2>Práctica guiada</h2>

        <details className="dd" open>
          <summary>HTML</summary>
          <div className="dd-body">
            <pre>
              <code>{`<div class="container">
  <div class="box">Uno</div>
  <div class="box">Dos</div>
  <div class="box">Tres</div>
</div>`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>CSS</summary>
          <div className="dd-body">
            <pre>
              <code>{`.container{
  display: flex;
  gap: 20px;
}

.box{
  background: #e2e8f0;
  padding: 20px;
  margin: 10px;
}`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>Retos</summary>
          <div className="dd-body">
            <ol>
              <li>Quita el gap y usa margin → ¿qué cambia?</li>
              <li>Duplica el padding → ¿cómo afecta?</li>
              <li>Elimina margin → ¿qué ocurre?</li>
              <li>Combina margin y gap → analiza el resultado</li>
            </ol>
          </div>
        </details>
      </section>
      <section className="card">
  <h2>Entender el espacio con una analogía real</h2>

  <details className="dd" open>
    <summary>Imagina que estás diseñando una casa</summary>
    <div className="dd-body">
      <p>
        Para entender <code>padding</code>, <code>margin</code> y <code>gap</code>,
        vamos a salir del código y pensar en algo físico: una casa.
      </p>

      <p>
        Cada elemento HTML es como una <strong>habitación</strong>.
      </p>

      <div className="callout tip">
        No estás moviendo código, estás organizando espacio.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>1) Padding → el espacio dentro de la habitación</summary>
    <div className="dd-body">
      <p>
        El <code>padding</code> es el espacio entre los muebles y las paredes.
      </p>

      <ul>
        <li>Si no hay padding → todo está pegado a la pared</li>
        <li>Si hay padding → hay aire dentro</li>
      </ul>

      <div className="callout">
        Padding = comodidad interior
      </div>

      <p>
        En CSS:
      </p>

      <pre>
        <code>{`.box{
  padding: 20px;
}`}</code>
      </pre>

      <p>
        👉 Estás haciendo la habitación más cómoda por dentro.
      </p>
    </div>
  </details>

  <details className="dd">
    <summary>2) Margin → el espacio entre habitaciones</summary>
    <div className="dd-body">
      <p>
        El <code>margin</code> es el espacio entre una habitación y otra.
      </p>

      <ul>
        <li>Define la separación exterior</li>
        <li>No afecta al interior</li>
      </ul>

      <div className="callout">
        Margin = distancia entre habitaciones
      </div>

      <pre>
        <code>{`.box{
  margin: 20px;
}`}</code>
      </pre>

      <p>
        👉 Estás separando las habitaciones entre sí.
      </p>
    </div>
  </details>

  <details className="dd">
    <summary>3) Gap → el pasillo entre varias habitaciones</summary>
    <div className="dd-body">
      <p>
        El <code>gap</code> es el espacio uniforme entre varias habitaciones
        cuando están organizadas dentro de un mismo plano.
      </p>

      <ul>
        <li>No se define en cada habitación</li>
        <li>Se define en el contenedor (el plano de la casa)</li>
      </ul>

      <div className="callout">
        Gap = el pasillo que separa todas las habitaciones
      </div>

      <pre>
        <code>{`.container{
  display: flex;
  gap: 20px;
}`}</code>
      </pre>

      <p>
        👉 No estás tocando las habitaciones, estás definiendo el espacio entre ellas.
      </p>
    </div>
  </details>

  <details className="dd">
    <summary>Comparación final (la clave que debes recordar)</summary>
    <div className="dd-body">
      <ul>
        <li><strong>Padding</strong> → dentro de la habitación</li>
        <li><strong>Margin</strong> → fuera de la habitación</li>
        <li><strong>Gap</strong> → entre habitaciones dentro de un plano</li>
      </ul>

      <div className="callout tip">
        Si cambias padding → cambia el interior  
        Si cambias margin → separas elementos  
        Si usas gap → organizas un conjunto
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Error típico que debes evitar</summary>
    <div className="dd-body">
      <p>
        Pensar que <code>padding</code> y <code>gap</code> hacen lo mismo.
      </p>

      <p>
        No lo hacen:
      </p>

      <ul>
        <li>Padding actúa sobre <strong>un elemento</strong></li>
        <li>Gap actúa sobre <strong>varios elementos</strong></li>
      </ul>

     
    </div>
  </details>
</section>

      {/* =========================
          CIERRE
      ========================== */}
      <section className="card">
        <h2>Conclusión</h2>

        <p>
          Antes de aprender el box model, debes tener clara esta idea:
        </p>

        <ul>
          <li>El diseño depende del espacio</li>
          <li>Padding y margin no son intercambiables</li>
          <li>Gap simplifica layouts modernos</li>
        </ul>

        <div className="callout">
          Si entiendes esto, el box model será mucho más fácil de asimilar.
        </div>
      </section>

    </main>
  );
}