import { useEffect, useMemo, useState } from "react";

export default function V07_TipografiaCSS() {
  useEffect(() => {
    document.title = "V07 · Tipografía en CSS: fundamentos, fuentes y sistemas tipográficos";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "¿Cuál es la diferencia principal entre rem y em?", options: ["rem se basa en el padre; em en el root", "rem se basa en el root (:html); em se basa en el elemento padre", "Son idénticos, solo cambia la sintaxis", "em siempre es más grande que rem"], correct: "rem se basa en el root (:html); em se basa en el elemento padre", why: "rem ('root em') toma como referencia el font-size del <html>. em toma el font-size del padre, por lo que puede acumularse en elementos anidados." },
    { id: "q2", q: "¿Para qué se usa la regla @font-face?", options: ["Para cambiar el tamaño de fuente globalmente", "Para cargar fuentes propias alojadas en el servidor", "Para importar variables de fuente", "Para activar Google Fonts automáticamente"], correct: "Para cargar fuentes propias alojadas en el servidor", why: "@font-face permite descargar y usar fuentes custom sin depender de servicios externos como Google Fonts." },
    { id: "q3", q: "¿Qué es un font stack (pila tipográfica)?", options: ["Una regla para ordenar tamaños de títulos", "Una lista de fuentes alternativas en orden de prioridad", "Un sistema de variables tipográficas", "El número de fuentes permitidas por página"], correct: "Una lista de fuentes alternativas en orden de prioridad", why: "font-family acepta múltiples valores separados por coma. El navegador usa la primera fuente disponible, terminando siempre con una familia genérica." },
    { id: "q4", q: "¿Qué hace font-display: swap?", options: ["Carga la fuente antes que el CSS", "Muestra el texto con fuente del sistema mientras carga la web font", "Oculta el texto hasta que la fuente esté lista", "Intercambia fuentes aleatoriamente"], correct: "Muestra el texto con fuente del sistema mientras carga la web font", why: "swap evita el FOIT (texto invisible): el texto aparece de inmediato con una fuente del sistema y se reemplaza cuando la web font termina de cargar." },
    { id: "q5", q: "¿Qué ventaja ofrece clamp(mín, ideal, máx) en tipografía?", options: ["Aplica la fuente solo en un rango de pantallas", "Define un tamaño fluido que escala entre un mínimo y un máximo sin media queries", "Limita el número de caracteres visibles", "Reemplaza completamente a las media queries"], correct: "Define un tamaño fluido que escala entre un mínimo y un máximo sin media queries", why: "clamp(1rem, 2.5vw, 2rem) nunca será menor de 1rem ni mayor de 2rem, escalando suavemente según el viewport." },
  ], []);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = useMemo(() => questions.filter((q) => answers[q.id] === q.correct).length, [answers, questions]);
  const choose = (id, opt) => setAnswers((p) => ({ ...p, [id]: opt }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <main className="doc" id="contenido">
      {/* ========================================
          HERO / INTRO
      ========================================= */}
      <header className="doc-hero">
        <p className="doc-kicker">V07 · CSS Avanzado</p>
        <h1>Tipografía en CSS: fundamentos, fuentes y sistemas tipográficos</h1>
         <figure className="media">
              <img
                src="fuentes.png"
                alt="Fundamentos de tipografía web y sistemas de fuentes"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">
               Tipografía web moderna: desde Google Fonts hasta sistemas de design tokens
              </figcaption>
            </figure>
        <p className="doc-lead">
          Domina la tipografía web desde cero: unidades de medida escalables, jerarquías tipográficas, 
          integración de Google Fonts, fuentes propias con @font-face y creación de sistemas tipográficos robustos 
          con design tokens.
        </p>

        <div className="callout tip">
          Objetivo: que el alumnado deje de “poner tamaños a ojo” y empiece a construir un{" "}
          <strong>sistema tipográfico coherente</strong> y fácil de mantener.
        </div>
      </header>

      {/* ========================================
          ÍNDICE
      ========================================= */}
      <nav className="doc-index" aria-label="Índice del tema">
        <h2>Índice</h2>
        <ol>
          <li>
            <a href="#s4-1">Tamaños de fuente y escalas tipográficas</a>
          </li>
          <li>
            <a href="#s-unidades">Unidades de medida para el texto en CSS</a>
          </li>
          <li>
            <a href="#s-texto-fundamentos">Fundamentos del texto y fuentes tipográficas</a>
          </li>
          <li>
            <a href="#s9">Tipografía web: Google Fonts y fuentes propias</a>
          </li>
          <li>
            <a href="#video-tipografia">Vídeo recomendado y práctica</a>
          </li>
        </ol>
      </nav>

      {/* ========================================
          4.1 TAMAÑOS Y ESCALAS
      ========================================= */}
      <section className="doc-section" id="s4-1">
        <h2>1. Tamaños de fuente y escalas tipográficas</h2>

        <p>
          El tamaño del texto no se elige “a ojo”. Define la jerarquía visual, la comodidad de lectura y la accesibilidad. Un
          buen sistema tipográfico se apoya en <strong>unidades escalables</strong> y <strong>relaciones coherentes</strong>, no
          en píxeles aislados.
        </p>

        <details className="dd" open>
          <summary>font-size: cómo pensar el tamaño del texto</summary>
          <div className="dd-body">
            <p>
              La propiedad <code>font-size</code> define el tamaño del texto. En proyectos modernos se recomienda evitar valores
              fijos y trabajar con unidades que escalen correctamente.
            </p>

            <ul>
              <li>
                <strong>px</strong>: tamaño fijo, no responde a preferencias del usuario
              </li>
              <li>
                <strong>em</strong>: relativo al tamaño del elemento padre
              </li>
              <li>
                <strong>rem</strong>: relativo al tamaño raíz (<code>&lt;html&gt;</code>) → <strong>recomendado</strong>
              </li>
              <li>
                <strong>clamp()</strong>: tamaño fluido entre mínimos y máximos
              </li>
            </ul>

            <div className="callout tip">
              Regla general: usa <code>rem</code> para texto base y <code>clamp()</code> para títulos. Evita depender solo de{" "}
              <code>px</code>.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Base tipográfica recomendada (escala limpia)</summary>
          <div className="dd-body">
            <pre>
              <code>{`/* Tamaño base del documento */
html{
  font-size: 100%; /* 16px por defecto del navegador */
}

body{
  font-size: 1rem;      /* texto base */
  line-height: 1.65;    /* lectura cómoda */
}

/* Jerarquía de títulos */
h1{
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 800;
  line-height: 1.15;
}

h2{
  font-size: clamp(1.4rem, 2.2vw, 1.9rem);
  font-weight: 700;
}

p{
  font-size: 1rem;
}`}</code>
            </pre>

            <div className="callout">
              Observa que los tamaños no son arbitrarios: cada nivel tiene una relación clara con el texto base.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Por qué <code>rem</code> es clave para accesibilidad</summary>
          <div className="dd-body">
            <p>
              Cuando el usuario aumenta el tamaño del texto desde el navegador o el sistema operativo, los valores en{" "}
              <code>rem</code> respetan esa preferencia.
            </p>

            <p>
              En cambio, valores fijos en <code>px</code> pueden romper la experiencia de lectura para personas con dificultades
              visuales.
            </p>

            <div className="callout warn">
              Un diseño que no escala el texto correctamente <strong>no es accesible</strong>, aunque se vea “bonito”.
            </div>
          </div>
        </details>
      </section>

      {/* ========================================
          UNIDADES (TABLA + EXPLICACIÓN)
      ========================================= */}
      <section className="doc-section" id="s-unidades">
        <h2>2. Unidades de medida para el texto en CSS</h2>

        <p>
          El tamaño del texto en CSS no se elige al azar ni solo por estética. Las <strong>unidades de medida</strong>{" "}
          determinan cómo escala la tipografía, cómo se comporta en distintos dispositivos y si el diseño respeta las
          preferencias del usuario.
        </p>

        <p>
          Aunque <code>font-size</code> puede usar muchas unidades, en la práctica profesional hay un conjunto reducido que se
          utiliza de forma habitual por razones de <strong>legibilidad</strong>, <strong>mantenibilidad</strong> y{" "}
          <strong>accesibilidad</strong>.
        </p>

        <div className="callout">
          Idea clave: una buena tipografía no se basa en valores fijos, sino en <strong>relaciones proporcionales</strong>.
        </div>

        <div className="table-wrap" tabIndex={0} aria-label="Tabla de unidades de medida para el tamaño del texto en CSS">
          <table className="table table-zebra">
            <caption>
              Unidades de medida más usadas para <code>font-size</code>
            </caption>
            <thead>
              <tr>
                <th scope="col">Unidad</th>
                <th scope="col">Relativa a…</th>
                <th scope="col">Ventajas</th>
                <th scope="col">Inconvenientes</th>
                <th scope="col">Uso recomendado</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">px</th>
                <td>Tamaño fijo (píxeles)</td>
                <td>Precisión absoluta y resultados previsibles.</td>
                <td>No respeta preferencias del usuario ni escala bien.</td>
                <td>Casos puntuales: bordes, iconos, ajustes muy concretos.</td>
              </tr>

              <tr>
                <th scope="row">em</th>
                <td>Tamaño de fuente del elemento padre</td>
                <td>Muy flexible; permite escalar componentes completos.</td>
                <td>Los cálculos se complican con anidamientos profundos.</td>
                <td>Componentes reutilizables, márgenes y paddings relativos al texto.</td>
              </tr>

              <tr>
                <th scope="row">rem</th>
                <td>
                  Tamaño de fuente del elemento raíz (<code>html</code>)
                </td>
                <td>Escalable, predecible y fácil de mantener.</td>
                <td>Depende de una buena definición del tamaño base.</td>
                <td>Tamaños de texto globales y jerarquía tipográfica.</td>
              </tr>

              <tr>
                <th scope="row">%</th>
                <td>Tamaño del elemento padre</td>
                <td>Intuitivo en algunos contextos.</td>
                <td>Poco usado hoy para tipografía; menos claro que rem.</td>
                <td>Ajustes muy concretos o heredados.</td>
              </tr>

              <tr>
                <th scope="row">clamp()</th>
                <td>Mínimo · valor ideal · máximo</td>
                <td>Tipografía fluida sin media queries.</td>
                <td>Requiere entender bien el concepto.</td>
                <td>Títulos y encabezados responsive.</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={5}>
                  Recomendación general: usa <strong>rem</strong> como base y <strong>clamp()</strong> para títulos. Evita
                  depender solo de <code>px</code>.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <details className="dd" open>
          <summary>
            Cómo funciona realmente <code>em</code> y por qué puede complicarse
          </summary>
          <div className="dd-body">
            <p>
              La unidad <code>em</code> es relativa al tamaño de fuente del elemento padre. Esto permite escalar bloques
              completos, pero también puede generar cálculos complejos cuando hay muchos niveles anidados.
            </p>

            <pre>
              <code>{`/* Tamaño base del documento: 16px */
article{
  font-size: 1.5em; /* 24px */
}

article p{
  font-size: 0.8333em; /* 20px → 20 / 24 */
}`}</code>
            </pre>

            <div className="callout warn">
              Si varios contenedores cambian su <code>font-size</code>, el cálculo mental se vuelve poco práctico. Por eso se
              recomienda usar <code>rem</code> siempre que sea posible.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>
            Por qué <code>rem</code> simplifica todo
          </summary>
          <div className="dd-body">
            <p>
              <code>rem</code> siempre toma como referencia el tamaño de fuente del elemento raíz (<code>&lt;html&gt;</code>).
              Esto hace que todos los tamaños sean coherentes y fáciles de calcular.
            </p>

            <pre>
              <code>{`html{
  font-size: 10px; /* base cómoda para cálculos */
}

h1{
  font-size: 2.6rem; /* 26px */
}

p{
  font-size: 1.4rem; /* 14px */
}`}</code>
            </pre>

           <div className="callout tip">
  Definir la base tipográfica en <strong>10px</strong> no es obligatorio, pero facilita mucho la lectura y el cálculo de los
  valores en <code>rem</code>, especialmente en proyectos educativos.  
  Si no se define ningún tamaño base, el navegador establece por defecto
  <strong>16px</strong> en el elemento <code>&lt;html&gt;</code>.
  <br /><br />
  Desde un punto de vista profesional, es preferible definir la base como
  <code>62.5%</code> en lugar de <code>10px</code>, ya que mantiene el respeto a las
  preferencias del usuario y a la configuración del navegador. De este modo,
  <code>1rem</code> equivale aproximadamente a <strong>10px</strong> sin imponer un
  tamaño fijo.
</div>
<pre>
  <code>{`/* Base tipográfica recomendada */
html{
  font-size: 62.5%; /* ≈10px (62.5% de 16px) */
}

body{
  font-size: 1.6rem; /* 16px reales */
  line-height: 1.65;
}

/* Jerarquía de títulos */
h1{
  font-size: 3.2rem; /* 32px */
}

h2{
  font-size: 2.4rem; /* 24px */
}

p{
  font-size: 1.6rem; /* 16px */
}`}</code>
</pre>

          </div>
        </details>

      <details className="dd">
  <summary>
    Tipografía fluida con <code>clamp()</code>
  </summary>

  <div className="dd-body">
    <p>
      La función <code>clamp()</code> es una herramienta clave del CSS moderno para crear
      <strong>tipografía fluida y responsive</strong> sin necesidad de usar media queries.
      Permite que el tamaño del texto se adapte automáticamente al ancho de la pantalla,
      pero siempre dentro de unos <strong>límites controlados</strong>.
    </p>

    <p>
      A diferencia de usar solo <code>rem</code> (tamaño fijo pero accesible) o solo
      <code>vw</code> (tamaño fluido pero sin control), <code>clamp()</code> combina
      <strong>lo mejor de ambos enfoques</strong>.
    </p>

    <div className="callout tip">
      Idea clave: <code>clamp()</code> no sustituye a <code>rem</code>.  
      Se usa como complemento para títulos y elementos destacados.
    </div>

    {/* =========================
        CÓMO FUNCIONA CLAMP
       ========================= */}

    <p>
      <code>clamp()</code> recibe <strong>tres valores</strong>, siempre en este orden:
    </p>

    <ul>
      <li>
        <strong>Valor mínimo</strong> → tamaño más pequeño permitido (normalmente en <code>rem</code>)
      </li>
      <li>
        <strong>Valor ideal</strong> → tamaño fluido, normalmente con <code>vw</code>
      </li>
      <li>
        <strong>Valor máximo</strong> → tamaño máximo permitido (en <code>rem</code>)
      </li>
    </ul>

    <pre>
      <code>{`/* Sintaxis general */
font-size: clamp(mínimo, ideal, máximo);

/* Ejemplo real */
h1{
  font-size: clamp(2.4rem, 5vw, 3.6rem);
}`}</code>
    </pre>

    <p>
      En este ejemplo:
    </p>

    <ul>
      <li>
        <code>2.4rem</code> asegura que el título sea legible incluso en móviles pequeños.
      </li>
      <li>
        <code>5vw</code> hace que el texto crezca de forma proporcional al ancho de la pantalla.
      </li>
      <li>
        <code>3.6rem</code> evita que el título se vuelva exageradamente grande en pantallas muy anchas.
      </li>
    </ul>
<p>
  El valor central de <code>clamp()</code> no indica “cada cuánto crece”,
  sino el <strong>tamaño ideal que el navegador intenta usar respecto al tamaño del viewport</strong>.Por ejemplo en un movil
  pequeño, ese valor ideal puede ser menor que el mínimo, por lo que se aplicará el mínimo que en este caso será 2.4 rem. 
  Si ese valor es demasiado pequeño o demasiado grande según los límites
  definidos, el navegador aplica automáticamente el mínimo o el máximo.
</p>

    <div className="callout">
      El resultado es un texto que <strong>crece cuando tiene sentido</strong>
      y se detiene antes de romper la jerarquía visual.
    </div>

    {/* =========================
        CUÁNDO USAR CLAMP
       ========================= */}

    <h4>¿Cuándo usar <code>clamp()</code>?</h4>

    <ul>
      <li>✔️ Títulos principales (<code>h1</code>, <code>h2</code>)</li>
      <li>✔️ Hero sections</li>
      <li>✔️ Portadas o cabeceras destacadas</li>
      <li>✔️ Elementos donde la jerarquía visual es importante</li>
    </ul>

    <h4>¿Cuándo NO usar <code>clamp()</code>?</h4>

    <ul>
      <li>❌ Texto de párrafo (<code>p</code>, <code>li</code>)</li>
      <li>❌ Formularios y textos funcionales</li>
      <li>❌ Cuando la accesibilidad es prioritaria y no se controla bien</li>
    </ul>

    <div className="callout warn">
      El texto base debe definirse en <code>rem</code>.  
      <code>clamp()</code> es para destacar, no para todo.
    </div>

    {/* =========================
        REGLA DIDÁCTICA
       ========================= */}

    <div className="callout tip">
      Regla de oro:  
      <strong>nunca uses <code>vw</code> solo</strong>.  
      Si aparece <code>vw</code>, debe estar dentro de <code>clamp()</code>
      y limitado por valores en <code>rem</code>.
    </div>

    {/* =========================
        VIDEO
       ========================= */}

    <div className="callout tip">
      En este vídeo se explica de forma visual cómo funciona <code>clamp()</code>,
      cómo responde al tamaño del viewport y por qué es preferible a usar
      solo <code>vw</code> o media queries para tipografía fluida.
    </div>

    <div className="media" style={{ maxWidth: 900 }}>
      <iframe
        width="900"
        height="506"
        src="https://www.youtube.com/embed/OvU0urFYv0U"
        title="CSS clamp(): tipografía fluida y responsive"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        style={{ borderRadius: "0.75rem", width: "100%" }}
      />
    </div>
    <p>
  La unidad <code>vw</code> representa una fracción del ancho de la pantalla
  (viewport width). Todos los dispositivos, desde un móvil hasta un monitor
  grande, se dividen siempre en <strong>100 partes iguales</strong>, llamadas
  <code>vw</code>. Esto significa que <code>100vw</code> es siempre el ancho
  completo de la pantalla y que <code>1vw</code> equivale al 1 % de ese ancho.
  Lo que cambia entre dispositivos no es el número de <code>vw</code>, sino
  cuántos píxeles mide cada uno: en un móvil cada <code>vw</code> es pequeño,
  y en una pantalla grande es mayor. Por eso, <code>vw</code> permite que los
  tamaños se adapten al espacio disponible, pero debe usarse con límites cuando
  se aplica a texto.
</p>


    <div className="callout">
      Con <code>clamp()</code>, la tipografía deja de ser rígida y se convierte
      en un sistema <strong>fluido, accesible y controlado</strong>.
    </div>
  </div>
</details>


        <details className="dd">
          <summary>Fuentes seguras (web safe fonts)</summary>
          <div className="dd-body">
            <p>
              Las <strong>fuentes seguras</strong> son aquellas que suelen estar instaladas por defecto en la mayoría de sistemas
              operativos. Usarlas garantiza que el texto se renderice correctamente sin necesidad de descargas.
            </p>

            <ul>
              <li>
                <strong>Sans-serif</strong>: Arial, Helvetica, Verdana
              </li>
              <li>
                <strong>Serif</strong>: Times New Roman, Georgia
              </li>
              <li>
                <strong>Monospace</strong>: Courier New, Consolas
              </li>
            </ul>

            <pre>
              <code>{`body{
  font-family: Helvetica, Arial, sans-serif;
}`}</code>
            </pre>

            <div className="callout tip">
              Las fuentes seguras son una excelente base. Incluso cuando usas Google Fonts, siempre deben aparecer como{" "}
              <em>fallback</em> en <code>font-family</code>.
            </div>
          </div>
        </details>

        <div className="callout">
          Conclusión: dominar las unidades de medida es dominar cómo se <strong>lee</strong> una web. Elige unidades que escalen
          bien, mantengan coherencia y respeten al usuario.
        </div>

        <div className="callout tip">
          <strong>🎯 Próximo paso:</strong> Una vez que dominas las unidades, es hora de entender 
          cómo funciona el sistema tipográfico completo: fuentes, propiedades y jerarquías visuales.
        </div>
      </section>

      {/* ========================================
          FUNDAMENTOS (MDN APLICADO)
      ========================================= */}
      <section className="doc-section" id="s-texto-fundamentos">
        <h2>3. Fundamentos de texto y fuentes tipográficas (MDN aplicado)</h2>

        <p>
          Cuando aplicas estilo al texto en CSS, en realidad trabajas con <strong>dos familias de propiedades</strong>:
        </p>

        <ul>
          <li>
            <strong>Estilo del tipo de letra</strong>: qué fuente se usa, tamaño, peso, cursiva, etc.
          </li>
          <li>
            <strong>Disposición del texto</strong>: alineación, interlineado, espaciado entre letras/palabras y otros ajustes de
            “maquetación” del texto dentro de su caja.
          </li>
        </ul>

        <div className="callout tip">
          Idea clave: el texto vive dentro de la “caja” del elemento. CSS no “toca letras sueltas” a menos que delimites ese
          texto con elementos (<code>&lt;span&gt;</code>) o uses pseudoelementos como <code>::first-letter</code>,{" "}
          <code>::first-line</code> o <code>::selection</code>.
        </div>

        <details className="dd" open>
          <summary>1) Fuentes seguras (web safe fonts) y por qué importan</summary>
          <div className="dd-body">
            <p>
              Una <strong>fuente segura</strong> es una tipografía que suele estar instalada en la mayoría de sistemas
              operativos. Ventaja: no necesitas descargar nada y el texto se renderiza rápido. Inconveniente: limita la
              identidad visual.
            </p>

            <div className="table-wrap" tabIndex={0} aria-label="Tabla de fuentes seguras habituales en la web">
              <table className="table table-zebra">
                <caption>Fuentes seguras habituales (y su familia genérica)</caption>
                <thead>
                  <tr>
                    <th scope="col">Fuente</th>
                    <th scope="col">Genérica</th>
                    <th scope="col">Notas de uso</th>
                    <th scope="col">Cuándo usar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Arial</th>
                    <td>sans-serif</td>
                    <td>
                      Muy común. A menudo se acompaña de <code>Helvetica</code> como alternativa “cercana”.
                    </td>
                    <td>Interfaces simples, textos funcionales, proyectos educativos.</td>
                  </tr>
                  <tr>
                    <th scope="row">Helvetica</th>
                    <td>sans-serif</td>
                    <td>Muy valorada visualmente, pero no siempre está en todos los sistemas (por eso va como fallback).</td>
                    <td>Como opción preferente en una pila antes de Arial si está disponible.</td>
                  </tr>
                  <tr>
                    <th scope="row">Verdana</th>
                    <td>sans-serif</td>
                    <td>Buena legibilidad en pantalla, x-height generosa.</td>
                    <td>Textos largos y lectura cómoda.</td>
                  </tr>
                  <tr>
                    <th scope="row">Georgia</th>
                    <td>serif</td>
                    <td>Serif muy usable en pantalla, suele verse elegante.</td>
                    <td>Artículos, blogs, textos con tono editorial.</td>
                  </tr>
                  <tr>
                    <th scope="row">Times New Roman</th>
                    <td>serif</td>
                    <td>Muy extendida, aspecto “documento”.</td>
                    <td>Fallback serif o estilos tradicionales.</td>
                  </tr>
                  <tr>
                    <th scope="row">Courier New</th>
                    <td>monospace</td>
                    <td>Monoespaciada clásica, útil para código si no hay otra.</td>
                    <td>Bloques de código, ejemplos técnicos.</td>
                  </tr>
                  <tr>
                    <th scope="row">Trebuchet MS</th>
                    <td>sans-serif</td>
                    <td>Puede fallar en móviles. Úsala con cautela y prueba.</td>
                    <td>Solo si aceptas variación y tienes fallbacks fuertes.</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={4}>
                      Consejo: siempre termina tu lista con una familia genérica (<code>sans-serif</code>, <code>serif</code>,{" "}
                      <code>monospace</code>) para garantizar un resultado razonable si fallan las fuentes anteriores.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <pre>
              <code>{`/* Pila (font stack) recomendada para texto general */
body{
  font-family: "Helvetica", Arial, Verdana, sans-serif;
}`}</code>
            </pre>

            <div className="callout warn">
              No existe “la fuente perfecta que todos tienen”. Por eso se usa <strong>una lista</strong> y al final una{" "}
              <strong>familia genérica</strong>.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2) Propiedades básicas de tipografía (font)</summary>
          <div className="dd-body">
            <p>Estas propiedades cambian “cómo se ve” el texto:</p>

            <div className="table-wrap" tabIndex={0} aria-label="Tabla de propiedades tipográficas básicas">
              <table className="table table-zebra">
                <caption>Propiedades clave para tipografía</caption>
                <thead>
                  <tr>
                    <th scope="col">Propiedad</th>
                    <th scope="col">Qué controla</th>
                    <th scope="col">Valores típicos</th>
                    <th scope="col">Consejo profesional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <code>font-family</code>
                    </th>
                    <td>La fuente (o lista de fuentes)</td>
                    <td>
                      <code>"Inter"</code>, <code>Arial</code>, <code>sans-serif</code>
                    </td>
                    <td>Siempre con fallbacks y familia genérica al final.</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>font-size</code>
                    </th>
                    <td>Tamaño del texto</td>
                    <td>
                      <code>1rem</code>, <code>1.125rem</code>, <code>clamp()</code>
                    </td>
                    <td>
                      Usa <code>rem</code> para base y <code>clamp()</code> para títulos.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>font-weight</code>
                    </th>
                    <td>Grosor</td>
                    <td>
                      <code>400</code>, <code>600</code>, <code>700</code>
                    </td>
                    <td>Menos es más: 2–3 pesos suelen bastar en una UI.</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>font-style</code>
                    </th>
                    <td>Cursiva</td>
                    <td>
                      <code>normal</code>, <code>italic</code>, <code>oblique</code>
                    </td>
                    <td>Evita forzar cursiva “falsa”; úsala con intención.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <pre>
              <code>{`/* Base tipográfica sensata */
body{
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  font-weight: 400;
}`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>3) Disposición del texto: alineación, interlineado y espaciados</summary>
          <div className="dd-body">
            <p>
              Estas propiedades no cambian la fuente, pero sí <strong>cómo se distribuye el texto</strong> dentro de su caja.
              Son claves para legibilidad.
            </p>

            <ul>
              <li>
                <code>text-align</code>: alinea el texto (<code>left</code>, <code>right</code>, <code>center</code>,{" "}
                <code>justify</code>).
              </li>
              <li>
                <code>line-height</code>: separación entre líneas (lo más cómodo es usar un número sin unidad, p.ej.{" "}
                <code>1.6</code>).
              </li>
              <li>
                <code>letter-spacing</code> y <code>word-spacing</code>: separación entre letras y palabras (con moderación).
              </li>
            </ul>

            <pre>
              <code>{`/* Disposición típica para lectura */
.article{
  text-align: left;
  line-height: 1.7;
}

.article p{
  max-width: 65ch;      /* ancho cómodo de lectura */
}

/* Ejemplo: primera línea con un efecto (didáctico) */
.article p::first-line{
  letter-spacing: .02em;
  word-spacing: .08em;
}`}</code>
            </pre>

            <div className="callout warn">
              <code>justify</code> puede producir “ríos” de espacio si hay palabras largas. Si lo usas, pruébalo bien en móvil y
              considera <code>hyphens</code> (separación silábica) cuando proceda.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>
            4) La propiedad abreviada <code>font</code> (shorthand)
          </summary>
          <div className="dd-body">
            <p>
              CSS permite escribir varias propiedades de tipografía en una sola línea con <code>font</code>. Es útil, pero exige
              un orden correcto.
            </p>

            <pre>
              <code>{`/* Orden típico: style weight size/line-height family */
h1{
  font: italic 800 2.2rem/1.15 "Helvetica", Arial, sans-serif;
}`}</code>
            </pre>

            <div className="callout tip">
              Si algo “no aplica”, revisa el orden y recuerda que <code>font-size</code> y <code>font-family</code> son
              esenciales.
            </div>
          </div>
        </details>
        <section className="doc-section" id="video-tipografia">
        <h2>5. Vídeo recomendado · Tipografía y texto en CSS</h2>

  <p>
    Antes de practicar, conviene ver un ejemplo completo donde se conecten las ideas:
    <strong>fuentes</strong>, <strong>tamaños</strong>, <strong>unidades</strong> y
    <strong>propiedades de disposición</strong> (alineación, interlineado y espaciados).
  </p>

  <div className="callout tip">
    En este vídeo se repasan conceptos clave de tipografía en CSS: cómo elegir una <strong>familia tipográfica</strong>,
    cómo ajustar <code>font-size</code> con unidades escalables (<code>rem</code>, <code>em</code>),
    y cómo mejorar la legibilidad con <code>line-height</code> y <code>text-align</code>.
  </div>

  {/* VIDEO EMBEBIDO */}
  <div className="media" style={{ maxWidth: 900 }}>
    <iframe
      width="900"
      height="506"
      src="https://www.youtube.com/embed/EMhuYyEsKqE"
      title="Tipografía y texto en CSS"
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ borderRadius: "0.75rem", width: "100%" }}
    />
  </div>

  <div className="callout">
    Modo laboratorio: mientras lo ves, pausa y apunta 3 decisiones tipográficas del ejemplo (tamaño base, jerarquía de títulos
    y line-height). Luego intenta replicarlas en tu propia página.
  </div>
</section>


        <h3>Lectura recomendada (MDN)</h3>

        <div className="doc-link-card">
          <a
            href="https://developer.mozilla.org/es/docs/Learn_web_development/Core/Text_styling/Fundamentals"
            target="_blank"
            rel="noreferrer"
          >
            MDN · Fundamentos de texto y fuentes tipográficas
          </a>
          <p className="doc-link-card__desc">
            Guía completa para entender cómo se comporta el texto en su caja, propiedades de tipografía y propiedades de
            disposición (alineación, interlineado, espaciados), además de conceptos como fuentes seguras y listas de fuentes.
          </p>
        </div>

        <div className="callout">
          Cierre: un texto “bonito” no es el objetivo. El objetivo es <strong>texto legible y consistente</strong>, con una
          jerarquía clara y fallbacks fiables.
        </div>
      </section>

      <div className="callout tip">
        <strong>🚀 Siguiente nivel:</strong> Ya conoces las unidades y propiedades fundamentales. 
        Ahora vamos a integrar fuentes personalizadas y crear sistemas tipográficos profesionales.
      </div>
         {/* 9 */}
      <section className="doc-section" id="s9">
        <h2>4. 🔤 Tipografía web: Google Fonts y fuentes propias</h2>
        
        <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #22c55e' }}>
          <h3 style={{ marginTop: 0, color: '#14532d' }}>📚 Analogía de la biblioteca personal</h3>
          <p style={{ color: '#166534', marginBottom: '1rem' }}>
            Imagina que tienes una biblioteca personal. Puedes usar libros que ya tienes (fuentes del sistema), 
            pedir prestados libros de una biblioteca pública (Google Fonts), o comprar libros específicos para tu colección (fuentes propias):
          </p>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
              <h4 style={{ marginTop: 0, color: '#059669', fontSize: '1rem' }}>🏠 Fuentes del sistema:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#047857' }}>
                <li><strong>Siempre disponibles</strong></li>
                <li><strong>Carga instantánea</strong></li>
                <li><strong>Limitada variedad</strong></li>
                <li><strong>Diferencias entre SO</strong></li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
              <h4 style={{ marginTop: 0, color: '#059669', fontSize: '1rem' }}>🌐 Google Fonts:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#047857' }}>
                <li><strong>Gran variedad gratuita</strong></li>
                <li><strong>Optimizadas para web</strong></li>
                <li><strong>Requieren conexión</strong></li>
                <li><strong>CDN rápido de Google</strong></li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
              <h4 style={{ marginTop: 0, color: '#059669', fontSize: '1rem' }}>💎 Fuentes propias:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#047857' }}>
                <li><strong>Control total del diseño</strong></li>
                <li><strong>Identidad única</strong></li>
                <li><strong>Requiere gestión de archivos</strong></li>
                <li><strong>Considera el rendimiento</strong></li>
              </ul>
            </div>
          </div>
        </div>
        
        <p>
          La tipografía define la <strong>personalidad y legibilidad</strong> de tu proyecto. Elegir las fuentes correctas 
          es tan importante como elegir los colores, y debe formar parte del sistema de diseño.
        </p>

        <details className="dd">
          <summary>🌐 Google Fonts: el método más popular</summary>
          <div className="dd-body">
            <p>
              Google Fonts ofrece más de 1400 familias tipográficas gratuitas, optimizadas para web 
              y servidas desde su CDN global ultra-rápido.
            </p>
            
            <h4>Método 1: Enlace en el HTML (más común)</h4>
            <ol>
              <li>Ve a <strong>fonts.google.com</strong> y elige tu fuente</li>
              <li>Selecciona los pesos que necesitas (no todos para optimizar carga)</li>
              <li>Copia el enlace en el <code>&lt;head&gt;</code> de tu HTML</li>
              <li>Usa la fuente en tu CSS con <code>font-family</code></li>
            </ol>

            <pre style={{ fontSize: '0.85em', marginBottom: '1.5rem' }}>
              <code>{`<!-- En el <head> del HTML -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">

/* En el CSS */
:root {
  --font-primary: 'Inter', system-ui, sans-serif;
  --font-display: 'Playfair Display', Georgia, serif;
}

body {
  font-family: var(--font-primary);
}

h1, h2 {
  font-family: var(--font-display);
}`}</code>
            </pre>

            <h4>Método 2: @import en CSS (menos eficiente)</h4>
            <pre style={{ fontSize: '0.85em', marginBottom: '1.5rem' }}>
              <code>{`/* Al inicio del archivo CSS */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Usar igual que el método anterior */
body {
  font-family: 'Inter', system-ui, sans-serif;
}`}</code>
            </pre>

            <div className="callout tip">
              <strong>💡 Consejo de rendimiento:</strong> Solo carga los pesos que realmente uses. 
              Cada peso adicional añade tiempo de carga. Usa <code>font-display: swap</code> para mostrar texto 
              inmediatamente con fuente fallback.
            </div>

            <div className="callout warn">
              <strong>⚠️ Cuidado:</strong> <code>@import</code> bloquea la renderización. 
              Prefiere siempre el método de enlace en HTML para mejor rendimiento.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>💎 Fuentes propias: control total con @font-face</summary>
          <div className="dd-body">
            <p>
              Para usar fuentes que no están en Google Fonts o cuando necesitas control total sobre la carga, 
              usa <code>@font-face</code> para definir fuentes propias.
            </p>

            <h4>Preparación: obtén los archivos de fuente</h4>
            <ul>
              <li><strong>.woff2:</strong> El formato más moderno y comprimido (primera opción)</li>
              <li><strong>.woff:</strong> Soporte amplio como fallback</li>
              <li><strong>.ttf/.otf:</strong> Fallback para navegadores muy antiguos</li>
            </ul>

            <pre style={{ fontSize: '0.85em', marginBottom: '1.5rem' }}>
              <code>{`/* Definir la fuente personalizada */
@font-face {
  font-family: 'MiFuentePersonalizada';
  src: url('./fonts/mi-fuente.woff2') format('woff2'),
       url('./fonts/mi-fuente.woff') format('woff'),
       url('./fonts/mi-fuente.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Muestra texto inmediatamente */
}

/* Para diferentes pesos, define cada uno por separado */
@font-face {
  font-family: 'MiFuentePersonalizada';
  src: url('./fonts/mi-fuente-bold.woff2') format('woff2'),
       url('./fonts/mi-fuente-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Usar en el CSS */
:root {
  --font-brand: 'MiFuentePersonalizada', Arial, sans-serif;
}

.titulo-principal {
  font-family: var(--font-brand);
  font-weight: 700;
}`}</code>
            </pre>

            <h4>Organización recomendada de archivos:</h4>
            <pre style={{ fontSize: '0.85em', marginBottom: '1.5rem' }}>
              <code>{`proyecto/
├── css/
│   └── styles.css
├── fonts/
│   ├── mi-fuente-regular.woff2
│   ├── mi-fuente-regular.woff
│   ├── mi-fuente-bold.woff2
│   └── mi-fuente-bold.woff
└── index.html`}</code>
            </pre>

            <div className="callout tip">
              <strong>🛠️ Herramientas útiles:</strong><br />
              • <strong>Font Squirrel Webfont Generator:</strong> Convierte fuentes a formatos web<br />
              • <strong>Google Webfonts Helper:</strong> Descarga Google Fonts para hospedar localmente<br />
              • <strong>Subfont:</strong> Optimiza automáticamente las fuentes de tu proyecto
            </div>

            <div className="callout warn">
              <strong>⚠️ Licencias:</strong> Asegúrate de tener derecho a usar la fuente en web. 
              No todas las fuentes de escritorio tienen licencia web.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🏗️ Sistema tipográfico completo con tokens</summary>
          <div className="dd-body">
            <p>
              Igual que con los colores, la tipografía debe organizarse como un sistema con roles claros y tokens reutilizables.
            </p>

            <h4>Ejemplo de sistema tipográfico profesional:</h4>
            <pre style={{ fontSize: '0.85em', marginBottom: '1.5rem' }}>
              <code>{`:root {
  /* === FUENTES BASE === */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* === ROLES TIPOGRÁFICOS === */
  --font-primary: var(--font-sans);     /* Texto general */
  --font-display: var(--font-serif);    /* Títulos importantes */
  --font-code: var(--font-mono);        /* Código */

  /* === ESCALAS DE TAMAÑO === */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px - base */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */

  /* === PESOS === */
  --weight-light: 300;
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* === ALTURAS DE LÍNEA === */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}

/* === APLICACIÓN EN COMPONENTES === */
body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  font-weight: var(--weight-normal);
}

h1 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
}

h2 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-tight);
}

.code-block {
  font-family: var(--font-code);
  font-size: var(--text-sm);
}

.text-small {
  font-size: var(--text-xs);
  color: var(--text-tertiary);
}`}</code>
            </pre>

            <div className="token-showcase" style={{ marginTop: '2rem' }}>
              <div className="token-card">
                <h4 style={{ marginTop: 0, color: '#7c3aed', fontFamily: 'Georgia, serif' }}>🎭 Font Display</h4>
                <p style={{ margin: 0, fontSize: '1.125rem', fontFamily: 'Georgia, serif' }}>
                  Títulos y elementos destacados
                </p>
                <div className="token-code">var(--font-display)</div>
              </div>

              <div className="token-card">
                <h4 style={{ marginTop: 0, color: '#059669' }}>📄 Font Primary</h4>
                <p style={{ margin: 0 }}>
                  Texto de cuerpo y contenido general
                </p>
                <div className="token-code">var(--font-primary)</div>
              </div>

              <div className="token-card">
                <h4 style={{ marginTop: 0, color: '#dc2626', fontFamily: 'monospace' }}>💻 Font Code</h4>
                <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.9rem' }}>
                  console.log('Código y datos técnicos');
                </p>
                <div className="token-code">var(--font-code)</div>
              </div>
            </div>

            <div className="callout tip">
              <strong>🎯 Beneficio del sistema:</strong> Cambiar la fuente principal de toda tu aplicación 
              significa cambiar una sola línea: <code>--font-primary: 'Nueva Fuente', sans-serif;</code>
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>⚡ Optimización y mejores prácticas</summary>
          <div className="dd-body">
            <h4>Optimización de carga:</h4>
            <ul>
              <li><strong>Preconnect:</strong> Conecta anticipadamente a dominios de fuentes</li>
              <li><strong>Font-display: swap:</strong> Muestra contenido inmediatamente con fuente fallback</li>
              <li><strong>Subset fonts:</strong> Carga solo los caracteres que necesitas</li>
              <li><strong>Limit weights:</strong> Solo carga los pesos que realmente uses</li>
            </ul>

            <h4>HTML optimizado para fuentes:</h4>
            <pre style={{ fontSize: '0.8em' }}>
              <code>{`<!-- Preconnect para mejor rendimiento -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Solo caracteres latinos para español -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&subset=latin&display=swap" rel="stylesheet">

<!-- Preload para fuente crítica (opcional) -->
<link rel="preload" href="/fonts/titulo.woff2" as="font" type="font/woff2" crossorigin>`}</code>
            </pre>

            <h4>Stack de fuentes robusto:</h4>
            <pre style={{ fontSize: '0.8em' }}>
              <code>{`/* Siempre incluye fallbacks */
:root {
  /* Para contenido general */
  --font-primary: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 
                  'Segoe UI', Roboto, sans-serif;
  
  /* Para títulos */
  --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
  
  /* Para código */
  --font-code: 'JetBrains Mono', 'Fira Code', Consolas, 
               'Monaco', monospace;
}`}</code>
            </pre>

            <div className="callout warn">
              <strong>🐌 Evita estos errores comunes:</strong><br />
              • Cargar demasiados pesos y estilos<br />
              • Usar @import en lugar de &lt;link&gt;<br />
              • No incluir fuentes fallback<br />
              • No optimizar para móviles<br />
              • Olvidar font-display: swap
            </div>
          </div>
        </details>
      </section>

      {/* ========================================
          CONCLUSIÓN GENERAL
      ========================================= */}
      <section className="doc-section">
        <h2>🎯 Conclusión: de principiante a experto en tipografía</h2>
        
        <p>
          Felicidades, acabas de dominar los pilares fundamentales de la tipografía web. 
          Ya no eres la persona que "pone font-size: 18px a ojo" - ahora entiendes 
          <strong>por qué</strong> y <strong>cómo</strong> crear sistemas tipográficos robustos.
        </p>

        <div className="callout">
          <strong>🔑 Conceptos clave que acabas de dominar:</strong>
          <ul>
            <li><strong>Unidades escalables:</strong> rem y clamp() para tipografía que respeta al usuario</li>
            <li><strong>Jerarquías visuales:</strong> escalas tipográficas coherentes con meaning</li>
            <li><strong>Fuentes web:</strong> Google Fonts optimizado y fuentes propias con @font-face</li>
            <li><strong>Sistemas tipográficos:</strong> design tokens para mantenibilidad a largo plazo</li>
            <li><strong>Optimización:</strong> rendimiento, accesibilidad y fallbacks robustos</li>
          </ul>
        </div>

        <div className="callout tip">
          <strong>💡 El siguiente paso:</strong> Practica implementando un sistema tipográfico completo 
          en tu próximo proyecto. Empieza simple con 2-3 fuentes y expande gradualmente.
          <br /><br />
          <strong>🎯 Objetivo práctico:</strong> Crea una página que use Google Fonts, 
          tenga jerarquía clara con rem/clamp(), y mantenga legibilidad en móvil y escritorio.
        </div>

        <div className="callout">
          La tipografía no es solo hacer que el texto "se vea bien" - es crear 
          <strong>experiencias de lectura</strong> que respeten al usuario, sean accesibles 
          y mantengan coherencia visual en cualquier dispositivo.
        </div>
      </section>

      {/* MINI-TEST */}
      <section className="card">
        <h2>🧠 Mini-test: comprueba lo aprendido</h2>
        <p>Responde sin mirar. Cada pregunta tiene una sola respuesta correcta.</p>
        <form onSubmit={submit}>
          {questions.map((q) => (
            <div key={q.id} style={{ marginBottom: "1.5rem", padding: "1rem 1.25rem", background: submitted ? (answers[q.id] === q.correct ? "#f0fdf4" : "#fef2f2") : "#f8fafc", borderRadius: "0.5rem", border: `1px solid ${submitted ? (answers[q.id] === q.correct ? "#86efac" : "#fca5a5") : "#e2e8f0"}` }}>
              <p style={{ fontWeight: 600, margin: "0 0 0.5rem" }}>{q.q}</p>
              {q.options.map((opt) => (
                <label key={opt} style={{ display: "block", cursor: submitted ? "default" : "pointer", padding: "0.25rem 0", color: submitted && opt === q.correct ? "#16a34a" : submitted && opt === answers[q.id] && opt !== q.correct ? "#dc2626" : "inherit", fontWeight: submitted && opt === q.correct ? 700 : "normal" }}>
                  <input type="radio" name={q.id} value={opt} checked={answers[q.id] === opt} onChange={() => choose(q.id, opt)} disabled={submitted} style={{ marginRight: "0.5rem" }} />
                  {opt}
                </label>
              ))}
              {submitted && <p style={{ marginTop: "0.5rem", fontSize: "0.9em", color: "#475569", borderTop: "1px solid #e2e8f0", paddingTop: "0.5rem" }}>💡 {q.why}</p>}
            </div>
          ))}
          {!submitted ? (
            <button type="submit" className="btn btn-primary" disabled={Object.keys(answers).length < questions.length}>Comprobar respuestas</button>
          ) : (
            <div>
              <p style={{ fontWeight: 700, fontSize: "1.1em", margin: "0 0 1rem" }}>{score === questions.length ? "🏆 ¡Perfecto!" : score >= Math.ceil(questions.length * 0.7) ? "✅ Muy bien" : "📚 Repasa un poco más"} — {score}/{questions.length} correctas ({Math.round((score / questions.length) * 100)}%)</p>
              <button type="button" className="btn" onClick={reset}>Reintentar</button>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
