import { Link } from "react-router-dom";

const map = "¿DÓNDE NECESITO ESPACIO?\n│\n├── DENTRO DE LA CAJA\n│   └── padding\n│\n└── FUERA DE LA CAJA\n    └── margin";
const comparison = "SIN AIRE INTERIOR                 CON AIRE INTERIOR\n┌────────────────────────┐        ┌────────────────────────┐\n│Curso CSS               │        │                        │\n│Aprende diseño web.     │        │   Curso CSS            │\n└────────────────────────┘        │   Aprende diseño web.  │\n                                  │                        │\n                                  └────────────────────────┘";

export default function V27_Espacio() {
  return (
    <article className="doc">
      <header className="doc-hero">
        <p className="doc-kicker">Layout · Espacio</p>
        <h1>Espacio · ¿Dentro o fuera de la caja?</h1>
        <p className="doc-lead">Ya conoces las partes de una caja CSS. Ahora usa ese modelo para diagnosticar dónde falta aire antes de elegir una propiedad.</p>
        <div className="callout tip"><strong>Pregunta guía:</strong> ¿el espacio que necesito está dentro de la caja o fuera de ella?</div>
      </header>

      <section className="card">
        <h2>Guía visual: localiza el espacio</h2>
        <p>Usa este mapa como diagnóstico rápido antes de elegir una propiedad.</p>
        <pre><code>{map}</code></pre>
      </section>

      <section className="card">
        <h2>Empieza por el problema visual</h2>
        <div className="table-wrap"><table className="table"><thead><tr><th>Lo que observas</th><th>¿Dónde falta espacio?</th></tr></thead><tbody>
          <tr><td>El texto de una tarjeta está pegado a sus bordes.</td><td><strong>Dentro</strong> de la tarjeta.</td></tr>
          <tr><td>Dos secciones están demasiado juntas.</td><td><strong>Fuera</strong> de las secciones.</td></tr>
          <tr><td>Los enlaces de una navegación están amontonados.</td><td>Es un problema de organización del grupo; lo resolverás al estudiar Flexbox.</td></tr>
        </tbody></table></div>
        <p>El espacio no es simplemente un hueco. Ayuda a leer, separar grupos, crear jerarquía y dar ritmo visual.</p>
        <div className="callout"><strong>El espacio también forma parte del diseño.</strong></div>
      </section>

      <section className="card">
        <h2>El orden correcto de las preguntas</h2>
        <pre><code>{`1. ¿Qué observo?
2. ¿El aire falta dentro o fuera de una caja?
3. Solo entonces elijo padding o margin.`}</code></pre>
        <p>No necesitas memorizar este esquema. Úsalo como una pregunta de diagnóstico cuando notes que una parte de tu página está demasiado apretada.</p>
      </section>

      <section className="card">
        <h2>1. El contenido está pegado al límite de su caja</h2>
        <p><strong>Problema:</strong> el texto no tiene aire respecto al borde visual de la tarjeta.</p>
        <p><strong>Pregunta:</strong> ¿necesito espacio dentro del elemento?</p>
        <p>La herramienta básica para crear espacio interior es <code>padding</code>.</p>
        <pre><code>{`<article class="tarjeta">
  <h2>Curso CSS</h2>
  <p>Aprende a diseñar interfaces web.</p>
</article>

.tarjeta {
  border: 1px solid #cbd5e1;
  padding: 20px;
}`}</code></pre>
        <pre><code>{comparison}</code></pre>
        <p>El contenido no ha cambiado. Lo que cambia es el aire que tiene dentro de su tarjeta.</p>
        <div className="callout tip"><strong>Dentro → padding.</strong> Úsalo cuando quieras separar el contenido del límite visual de su propio elemento.</div>
      </section>

      <section className="card">
        <h2>2. Dos cajas están demasiado juntas</h2>
        <p><strong>Problema:</strong> dos secciones independientes necesitan separarse.</p>
        <p><strong>Pregunta:</strong> ¿necesito espacio fuera de los elementos?</p>
        <p>La herramienta básica para crear separación exterior es <code>margin</code>.</p>
        <pre><code>{`<section class="seccion">
  <h2>Sobre mí</h2>
  <p>Presentación personal.</p>
</section>

<section class="seccion">
  <h2>Formación</h2>
  <p>Estudios y cursos realizados.</p>
</section>

.seccion {
  margin-bottom: 32px;
}`}</code></pre>
        <div className="callout tip"><strong>Fuera → margin.</strong> Úsalo cuando la separación pertenece a la relación entre una caja y las que la rodean.</div>
      </section>

      <section className="card">
        <h2>3. No todas las soluciones de espacio sirven para lo mismo</h2>
        <div className="table-wrap"><table className="table"><thead><tr><th>Situación</th><th>Diagnóstico</th><th>Herramienta básica</th></tr></thead><tbody>
          <tr><td>El texto toca el borde de una tarjeta.</td><td>Falta espacio interior.</td><td><code>padding</code></td></tr>
          <tr><td>Dos secciones independientes están juntas.</td><td>Falta espacio exterior.</td><td><code>margin</code></td></tr>
        </tbody></table></div>
        <div className="callout warn"><strong>Error frecuente:</strong> añadir <code>margin</code> a una tarjeta cuando el problema real es que su texto toca los bordes. El margen separa tarjetas; no crea aire dentro de ellas.</div>
      </section>

      <section className="card">
        <h2>4. Lee <code>margin</code> y <code>padding</code> sin memorizar</h2>
        <p>Las dos propiedades siguen el mismo orden. Léelo como un recorrido alrededor de la caja.</p>
        <pre><code>{`1 valor  → todos los lados
margin: 2rem;

2 valores → vertical | horizontal
margin: 2rem 3rem;

3 valores → arriba | horizontal | abajo
margin: 2rem 3rem 4rem;

4 valores → arriba | derecha | abajo | izquierda
margin: 2rem 3rem 4rem 5rem;`}</code></pre>
        <p>La misma lectura sirve para <code>padding</code>. Cambia solo la pregunta: <strong>¿el aire está fuera o dentro?</strong></p>
      </section>

      <section className="card">
        <h2>5. Microdiagnóstico</h2>
        <p>Responde primero con la ubicación del espacio; después piensa en la herramienta.</p>
        <div className="table-wrap"><table className="table"><thead><tr><th>Situación</th><th>Respuesta</th></tr></thead><tbody>
          <tr><td>El texto de un botón toca sus bordes.</td><td>Dentro → <code>padding</code>.</td></tr>
          <tr><td>Dos bloques de contenido están demasiado juntos.</td><td>Fuera → <code>margin</code>.</td></tr>
          <tr><td>Una tarjeta tiene mucho espacio exterior, pero su texto sigue pegado al borde.</td><td>Dentro → el margen no resuelve este problema.</td></tr>
        </tbody></table></div>
      </section>

      <section className="card">
        <h2>6. Tu plan de espacio</h2>
        <p>Vuelve al plan que creaste en “Pensar en CSS”. Completa esta tabla con tu propio HTML; será la evidencia de que sabes diagnosticar el espacio antes de escribir CSS.</p>
        <div className="table-wrap"><table className="table"><thead><tr><th>Elemento</th><th>Qué ocurre</th><th>¿Dónde necesito espacio?</th><th>Herramienta</th></tr></thead><tbody>
          <tr><td><code>header</code></td><td>El texto está muy pegado a los extremos.</td><td>Dentro</td><td><code>padding</code></td></tr>
          <tr><td><code>section</code></td><td>Está junto a la siguiente sección.</td><td>Fuera</td><td><code>margin</code></td></tr>
          <tr><td><code>.tarjeta</code></td><td>El contenido toca el borde.</td><td>Dentro</td><td><code>padding</code></td></tr>
        </tbody></table></div>
        <div className="callout tip"><strong>Tu tarea:</strong> añade al menos tres decisiones de espacio sobre tu propia página. Escribe primero dónde falta aire; solo después elige la herramienta.</div>
      </section>

      <section className="card">
        <h2>Lo que sigue</h2>
        <p>Ya sabes elegir entre <code>padding</code> y <code>margin</code>. Ahora aplicarás el tamaño, la proporción y el modelo de caja a un contenido muy habitual: las imágenes.</p>
        <div className="doc-next"><Link className="btn btn-primary" to="/css-imagenes-1">Continuar con Imágenes I →</Link></div>
      </section>
    </article>
  );
}
