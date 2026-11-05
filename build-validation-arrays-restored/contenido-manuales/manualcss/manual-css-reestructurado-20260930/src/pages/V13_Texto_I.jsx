import { useEffect, useMemo, useState } from "react";

export default function V13_Display_Position() {
  useEffect(() => {
    document.title = "V13 · Display y Position: el flujo y el control del layout";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué propiedad define cómo participa un elemento en el flujo del documento?",
        options: ["position", "display", "z-index", "overflow"],
        correct: "display",
        why: "display define el tipo de caja (block/inline/inline-block/...) y cómo se organiza respecto a sus hermanos en el flujo.",
      },
      {
        id: "q2",
        q: "¿Qué valor de position saca al elemento del flujo normal?",
        options: ["static", "relative", "absolute", "sticky"],
        correct: "absolute",
        why: "absolute (y fixed) salen del flujo: dejan de reservar hueco en el layout; el resto actúa como si no existieran.",
      },
      {
        id: "q3",
        q: "¿Qué ocurre con width/height en un elemento display:inline?",
        options: [
          "Se respetan siempre",
          "No suelen tener efecto",
          "Solo funciona height",
          "Solo funciona width",
        ],
        correct: "No suelen tener efecto",
        why: "inline se comporta como texto en línea: el tamaño lo marca el contenido, y width/height normalmente se ignoran.",
      },
      {
        id: "q4",
        q: "¿Cuál es la diferencia entre visibility:hidden y display:none?",
        options: [
          "Son iguales",
          "visibility:hidden oculta pero mantiene el hueco; display:none elimina el hueco",
          "display:none oculta pero mantiene el hueco; visibility:hidden elimina el hueco",
          "visibility:hidden solo funciona con position",
        ],
        correct:
          "visibility:hidden oculta pero mantiene el hueco; display:none elimina el hueco",
        why: "display:none elimina el elemento del render y del flujo; visibility:hidden lo oculta pero conserva su espacio.",
      },
      {
        id: "q5",
        q: "¿Cuál es el valor por defecto de position en la mayoría de elementos HTML?",
        options: ["relative", "absolute", "static", "fixed"],
        correct: "static",
        why: "Por defecto, position es static: el elemento sigue el flujo normal y no acepta offsets (top/left/right/bottom).",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let ok = 0;
    for (const q of questions) if (answers[q.id] === q.correct) ok++;
    return ok;
  }, [answers, questions]);

  const choose = (id, opt) => setAnswers((p) => ({ ...p, [id]: opt }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <main className="doc" id="contenido">
      {/* Skip link (si ya lo tienes global, puedes borrar esto) */}
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ================= HERO ================= */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">V13 · CSS Layout Fundamental</p>
        <h1>Display y position: flujo y control de la colocación</h1>
        
        <div style={{ backgroundColor: '#fef7ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #a855f7' }}>
          <h3 style={{ marginTop: 0, color: '#7c2d92' }}>🎭 Analogía del teatro y los actores</h3>
          <p style={{ color: '#86198f', marginBottom: '1rem' }}>
            Imagina que tu página web es un <strong>teatro</strong> donde cada elemento HTML es un <strong>actor</strong>:
          </p>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e9d5ff' }}>
              <h4 style={{ marginTop: 0, color: '#a855f7', fontSize: '0.9rem' }}>🎭 DISPLAY:</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#7c3aed' }}>El <strong>papel</strong> que representa cada actor (protagonista que ocupa todo el escenario, actor secundario que comparte espacio, o extra invisible)</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e9d5ff' }}>
              <h4 style={{ marginTop: 0, color: '#a855f7', fontSize: '0.9rem' }}>🎬 POSITION:</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#7c3aed' }}>Dónde se <strong>coloca</strong> el actor (en su marca del guión, movido un poco, volando por encima, o fijo en un lugar)</p>
            </div>
          </div>
          
          <div className="callout" style={{ marginTop: '1rem', backgroundColor: 'white' }}>
            <strong>🎯 Clave:</strong> <code>display</code> define el <strong>tipo de presencia</strong> en el flujo, 
            <code>position</code> define la <strong>colocación</strong> respecto a ese flujo.
          </div>
        </div>

        <p className="doc-lead">
          Estos son los dos "mandos maestros" del layout en CSS. Display controla cómo participa 
          un elemento en el flujo del documento, mientras que Position controla dónde se coloca 
          respecto a ese flujo. <strong>Domínalo y controlarás el 90% del layout web.</strong>
        </p>

        <div className="callout tip">
          🏆 <strong>Objetivo:</strong> Que puedas predecir exactamente cómo se comportará cualquier 
          elemento con solo ver su <code>display</code> y <code>position</code>.
        </div>

        {/* ================= ÍNDICE ================= */}
        <nav className="doc-index" aria-label="Índice del tema">
          <h2>🧭 Índice</h2>
          <ol>
            <li>
              <a href="#display-por-defecto">📱 Display por defecto y su efecto en width/height</a>
            </li>
            <li>
              <a href="#position-por-defecto">⚙️ Position por defecto: static explicado</a>
            </li>
            <li>
              <a href="#display-detallado">🎭 Display detallado: block, inline, inline-block</a>
            </li>
            <li>
              <a href="#position-detallado">🎬 Position detallado: relative, absolute, fixed, sticky</a>
            </li>
            <li>
              <a href="#ejemplos-interactivos">⚡ Ejemplos interactivos y demostraciones</a>
            </li>
            <li>
              <a href="#retos-practicos">🎮 Retos prácticos: del concepto al dominio</a>
            </li>
            <li>
              <a href="#videos-recursos">📹 Videos y recursos adicionales</a>
            </li>
            <li>
              <a href="#test">🏆 Test de evaluación con feedback</a>
            </li>
          </ol>
          
          <div className="callout" style={{ marginTop: '1.5rem' }}>
            🔥 <strong>Estrategia de estudio:</strong> Lee cada sección, experimenta con los ejemplos 
            en tu editor, resuelve los retos y valida tu aprendizaje con el test final.
          </div>
        </nav>

        {/* ================= BLOQUE 0: DISPLAY POR DEFECTO ================= */}
        <div className="card" id="display-por-defecto">
          <h3>1) 📱 Display por defecto en HTML y su efecto en width y height</h3>

          <div className="callout">
            💡 <strong>Concepto clave:</strong> Cada elemento HTML tiene un display por defecto 
            que determina si acepta dimensiones y cómo se comporta en el flujo.
          </div>

          <p>
            Todos los elementos HTML tienen un <strong>valor de <code>display</code> por defecto</strong>.
            Ese valor lo define el navegador y determina cómo se comporta el elemento en el{" "}
            <strong>flujo del documento</strong> (si ocupa una línea completa, si se comporta como texto, etc.).
          </p>

          <p>
            Esto es crucial porque <strong>no todos los elementos aceptan</strong>{" "}
            <code>width</code> y <code>height</code>. Si alguna vez has puesto{" "}
            <code>width: 300px</code> y “no pasa nada”, normalmente el motivo es que el
            elemento es <strong>inline</strong>.
          </p>

          <div className="callout tip">
            Idea clave: antes de usar <code>width</code> o <code>height</code>, pregúntate:
            <strong> ¿qué display tiene este elemento?</strong>
          </div>

          <h4>Displays por defecto más habituales</h4>
          <ul>
            <li>
              Elementos estructurales como <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code> o{" "}
              <code>&lt;section&gt;</code> suelen ser <strong>block</strong>.
            </li>
            <li>
              Elementos de texto como <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code> o{" "}
              <code>&lt;strong&gt;</code> suelen ser <strong>inline</strong>.
            </li>
            <li>
              Elementos como <code>&lt;button&gt;</code> o <code>&lt;img&gt;</code> suelen
              comportarse como <strong>inline-block</strong> (en línea, pero con tamaño).
            </li>
          </ul>

          <div className="callout warn">
            Regla de oro: <strong>inline no acepta width/height</strong>. Si necesitas
            tamaño, cambia a <code>inline-block</code> o <code>block</code>.
          </div>

          <h4>Tabla resumen de display (y si aceptan width/height)</h4>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>display</th>
                  <th>Ejemplos típicos</th>
                  <th>Comportamiento en el flujo</th>
                  <th>¿Acepta width / height?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>block</code></td>
                  <td><code>div</code>, <code>p</code>, <code>section</code></td>
                  <td>Ocupa toda la línea y se apila verticalmente</td>
                  <td>✅ Sí</td>
                </tr>
                <tr>
                  <td><code>inline</code></td>
                  <td><code>span</code>, <code>a</code>, <code>strong</code></td>
                  <td>En línea con el texto; ocupa solo el contenido</td>
                  <td>❌ No (normalmente se ignoran)</td>
                </tr>
                <tr>
                  <td><code>inline-block</code></td>
                  <td><code>button</code>, <code>img</code></td>
                  <td>En línea, pero es una caja con dimensiones</td>
                  <td>✅ Sí</td>
                </tr>
                <tr>
                  <td><code>none</code></td>
                  <td>Cualquier elemento</td>
                  <td>No se renderiza ni ocupa espacio</td>
                  <td>🚫 No aplica</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout">
            Si un elemento “no hace caso” a <code>width</code> o <code>height</code>,
            lo primero es revisar su <code>display</code>.
          </div>
        </div>

        {/* ================= BLOQUE 0.5: POSITION POR DEFECTO ================= */}
        <div className="card" id="position-por-defecto">
          <h3>2) ⚙️ ¿Los elementos tienen position por defecto? Sí: <code>position: static</code></h3>

          <div className="callout tip">
            🧠 <strong>Dato curioso:</strong> Todos los elementos empiezan con <code>position: static</code>, 
            que significa "sigue el flujo normal y no acepta offsets".
          </div>

          <p>
            Sí. Igual que existe un <code>display</code> por defecto, también existe una{" "}
            <strong>posición por defecto</strong>. En la mayoría de elementos HTML es:
            <strong> <code>position: static</code></strong>.
          </p>

          <p>
            <strong>¿Qué significa static?</strong> Que el elemento se coloca siguiendo el{" "}
            <strong>flujo normal del documento</strong> y <strong>no puedes moverlo</strong>{" "}
            con <code>top</code>, <code>left</code>, <code>right</code> o <code>bottom</code>.
          </p>

          <div className="callout warn">
            Si escribes <code>top: 20px</code> en un elemento <code>static</code>,{" "}
            <strong>no ocurre nada</strong>. Primero tendrías que cambiar su{" "}
            <code>position</code> a <code>relative</code>, <code>absolute</code>, etc.
          </div>

          <pre>
            <code>{`/* No hace nada si position es static (por defecto) */
.elemento{
  top: 20px;
  left: 20px;
}

/* Ahora sí puede moverse */
.elemento{
  position: relative;
  top: 20px;
  left: 20px;
}`}</code>
          </pre>

          <div className="callout tip">
            Idea clave: <strong>display</strong> define el tipo de caja;{" "}
            <strong>position</strong> define si esa caja se queda en el flujo o se mueve / se saca.
          </div>
        </div>
      </header>

      {/* ================= ÍNDICE ================= */}
      <nav className="doc-index" aria-label="Índice del tema">
        <h2>Índice</h2>
        <ol>
          <li><a href="#dif-clave">1) Diferencia clave: display vs position</a></li>
          <li><a href="#display">2) display: tipos, cuándo usarlo y ejemplos</a></li>
          <li><a href="#position">3) position: valores, flujo y usos reales</a></li>
          <li><a href="#gotchas">4) Gotchas: errores comunes</a></li>
          <li><a href="#tabla">5) Tablas resumen</a></li>
          <li><a href="#video-pseudoelementos">6) Vídeo extra: ::before y ::after</a></li>
          <li><a href="#doc-display">7) Documentación: display (W3Schools)</a></li>
          <li><a href="#ejemplos">8) Ejemplos mínimos</a></li>
          <li><a href="#test">9) Test de repaso</a></li>
        </ol>
      </nav>

      {/* ================= 1) DIFERENCIA CLAVE ================= */}
      <section className="doc-section" id="dif-clave">
        <details className="dd" open>
          <summary>1) Diferencia clave: display vs position (explicación didáctica)</summary>
          <div className="dd-body">
            <p>
              <strong>display</strong> define cómo un elemento participa en el{" "}
              <strong>flujo del documento</strong> (block, inline, inline-block, none...).
              Es el “tipo de caja”.
            </p>

            <p>
              <strong>position</strong> controla cómo se coloca un elemento respecto a su
              contenedor o al viewport (static, relative, absolute, fixed, sticky) y si
              permanece o sale del flujo normal.
            </p>

            <div className="callout">
              <strong>display</strong> afecta la caja y la relación entre hermanos.{" "}
              <strong>No</strong> saca al elemento del flujo por sí mismo.<br />
              <strong>position</strong> puede dejar al elemento en el flujo (static/relative) o
              extraerlo (absolute/fixed), permitiendo offsets y superposiciones.
            </div>

            <pre>
              <code>{`/* Display: controla flujo y comportamiento */
.elemento{ 
  display: inline-block; /* en línea pero acepta width/height */
}

/* Position: controla ubicación y flujo */
.referencia{ position: relative; } /* ancestro para absolutos */
.absoluto{
  position: absolute;
  top: 8px;
  right: 8px; /* fuera del flujo, se superpone */
}`}</code>
            </pre>

            <div className="callout tip">
              Regla práctica: <strong>primero</strong> piensa en el flujo (display),
              y <strong>después</strong> usa position si necesitas un comportamiento especial
              (superponer, fijar, sticky).
            </div>
          </div>
        </details>
      </section>

      {/* ================= 2) DISPLAY ================= */}
      <section className="doc-section" id="display">
        <details className="dd" open>
          <summary>2) display: tipos, cuándo y ejemplos prácticos</summary>
          <div className="dd-body">
            <p>
              <code>display</code> determina el comportamiento y el flujo del elemento:
              si ocupa toda la línea, si se coloca en línea con otros, si acepta
              <code> width</code>/<code>height</code>, si genera saltos de línea o si
              directamente no se muestra (<code>display:none</code>).
            </p>

            <details className="dd dd-nested" open>
              <summary>Qué hace display (lista rápida)</summary>
              <div className="dd-body">
                <ul>
                  <li>Determina el tipo de caja: inline / block / inline-block…</li>
                  <li>Decide si ocupa espacio en el flujo</li>
                  <li>Condiciona si width/height tienen efecto</li>
                  <li><code>display:none</code> elimina el elemento del render y del flujo</li>
                </ul>
              </div>
            </details>

            <pre>
              <code>{`/* display:inline-block: en línea pero con tamaño */
.item-inline{
  display: inline-block;
  width: 120px;
  height: 40px;
}`}</code>
            </pre>

            <div className="callout warn">
              Importante: un elemento <code>inline</code> suele ignorar <code>width</code> y{" "}
              <code>height</code>. Si necesitas tamaño, cambia el display.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 3) POSITION ================= */}
      <section className="doc-section" id="position">
        <details className="dd" open>
          <summary>3) position y flujo: static, relative, absolute, fixed, sticky</summary>
          <div className="dd-body">
            <p>
              <code>position</code> controla el posicionamiento visual respecto al flujo
              normal o respecto a un contenedor/viewport.
              Lo más importante al empezar es entender una idea:
              <strong> no todos los values salen del flujo</strong>.
            </p>

            <div className="callout tip">
              Solo <strong>static</strong> y <strong>relative</strong> se consideran “en el flujo”.
              <strong>absolute</strong> y <strong>fixed</strong> salen del flujo (no reservan hueco).
            </div>

            <details className="dd dd-nested" open>
              <summary>Resumen de valores (con explicación simple)</summary>
              <div className="dd-body">
                <ul>
                  <li><strong>static</strong>: por defecto. No offsets. Flujo normal.</li>
                  <li><strong>relative</strong>: flujo normal, pero puedes desplazar con top/left; mantiene hueco.</li>
                  <li><strong>absolute</strong>: fuera del flujo; se posiciona respecto al ancestro posicionado más cercano.</li>
                  <li><strong>fixed</strong>: fuera del flujo; respecto al viewport; se queda fijo al hacer scroll.</li>
                  <li><strong>sticky</strong>: se “pega” al hacer scroll dentro de su contenedor (si el entorno lo permite).</li>
                </ul>
              </div>
            </details>

            <pre>
              <code>{`/* Ancestro posicionado (referencia) */
.container{ position: relative; }

/* Elemento absoluto (fuera del flujo) */
.item-absoluta{
  position: absolute;
  top: 10px;
  left: 20px;
}`}</code>
            </pre>

            <div className="callout warn">
              Error común: usar <code>position:absolute</code> para alinear.
              Con absolute el elemento sale del flujo y el layout deja de ser “natural”.
            </div>

            <details className="dd dd-nested">
              <summary>Ejemplos típicos de uso correcto</summary>
              <div className="dd-body">
                <ul>
                  <li><strong>Badges/etiquetas</strong> dentro de tarjetas → absolute + padre relative</li>
                  <li><strong>Barras superiores</strong> que deben permanecer visibles → fixed</li>
                  <li><strong>Sidebar</strong> que se pega al hacer scroll → sticky</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 4) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>4) Interacciones y “gotchas” (errores comunes)</summary>
          <div className="dd-body">
            <ul>
              <li>
                Cambiar <code>position</code> <strong>no</strong> cambia <code>display</code>.
                Un <code>&lt;span&gt;</code> absoluto sigue “siendo” inline (aunque esté fuera del flujo).
              </li>
              <li>
                <code>display:inline</code> suele ignorar <code>width</code> y <code>height</code>.
              </li>
              <li>
                <code>position:absolute</code> sale del flujo: otros elementos no reservan hueco para él.
              </li>
              <li>
                <code>visibility:hidden</code> oculta pero mantiene el espacio; <code>display:none</code> elimina el espacio.
              </li>
              <li>
                <code>z-index</code> suele requerir <code>position</code> distinto de <code>static</code>.
              </li>
              <li>
                <code>sticky</code> puede fallar si el padre tiene cierto <code>overflow</code> o <code>transform</code>.
              </li>
            </ul>
          </div>
        </details>
      </section>

      {/* ================= 5) TABLAS RESUMEN ================= */}
      <section className="doc-section" id="tabla">
        <details className="dd" open>
          <summary>5) Tablas resumen (para estudiar y repasar)</summary>
          <div className="dd-body">
            <h3 style={{ marginTop: 0 }}>Comportamiento típico en el flujo normal</h3>

            <div
              className="table-wrap"
              role="region"
              aria-label="Tabla display por defecto"
              tabIndex={0}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Ejemplos</th>
                    <th>Comportamiento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Block-level</strong></td>
                    <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;p&gt;</code></td>
                    <td>Ocupa toda la línea y comienza en una nueva línea.</td>
                  </tr>
                  <tr>
                    <td><strong>Inline</strong></td>
                    <td><code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code></td>
                    <td>En línea con el texto; ocupa solo el contenido.</td>
                  </tr>
                  <tr>
                    <td><strong>Inline-block</strong></td>
                    <td><code>&lt;button&gt;</code>, <code>&lt;img&gt;</code></td>
                    <td>En línea, pero con caja (acepta width/height/padding).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Qué pasa cuando “cambias el flujo”</h3>
            <div
              className="table-wrap"
              role="region"
              aria-label="Tabla cambios de flujo"
              tabIndex={0}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Propiedad</th>
                    <th>Efecto principal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>float</code></td>
                    <td>Se aparta parcialmente del flujo y el texto fluye a su alrededor.</td>
                  </tr>
                  <tr>
                    <td><code>position: relative</code></td>
                    <td>Se mueve visualmente pero mantiene el hueco (sigue en el flujo).</td>
                  </tr>
                  <tr>
                    <td><code>position: absolute</code></td>
                    <td>Sale del flujo: no ocupa espacio y puede superponerse.</td>
                  </tr>
                  <tr>
                    <td><code>position: fixed</code></td>
                    <td>Sale del flujo y se fija respecto al viewport.</td>
                  </tr>
                  <tr>
                    <td><code>position: sticky</code></td>
                    <td>Se “pega” al hacer scroll dentro de su contenedor (si el entorno lo permite).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              Analogía: el flujo es una estantería. <code>position:absolute</code> es como sacar un libro del hueco y
              pegarlo en la pared: el hueco queda libre y los demás no se reorganizan.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 6) VIDEO ================= */}
      <section className="doc-section" id="video-pseudoelementos">
        <details className="dd" open>
          <summary>6) Vídeo: Pseudoelementos en CSS — ::before y ::after</summary>

          <div className="dd-body">
            <p>
              En este vídeo aprenderás qué son los <strong>pseudoelementos</strong>{" "}
              <code>::before</code> y <code>::after</code> y por qué son tan útiles: te
              permiten “crear” una cajita extra <strong>antes</strong> o{" "}
              <strong>después</strong> del contenido de un elemento <em>sin añadir HTML</em>.
            </p>

            <div className="callout tip">
              Idea clave del vídeo: <code>::before</code> y <code>::after</code>{" "}
              <strong>no existen si no defines</strong> <code>content</code>. Aunque sea{" "}
              <code>content: "";</code>.
            </div>

            <h4>Qué vas a ver</h4>
            <p>En este video vamos a ver las posiciones y displays en CSS, sus diferencias y usos prácticos.</p>

            <div className="media" style={{ maxWidth: 900 }}>
              <iframe
                width="900"
                height="506"
                src="https://www.youtube.com/watch?v=_e0ddNlc0Y8"
                title="Posicion y display en CSS - Diferencias y usos prácticos"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
                style={{ borderRadius: "0.75rem", width: "100%" }}
              />
            </div>

            <h4>Mini ejemplo para practicar</h4>
            <pre>
              <code>{`/* 1) Punto decorativo antes del título */
.titulo{
  padding-left: 1rem;
}

.titulo::before{
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: currentColor;
  margin-right: .5rem;
}

/* 2) Badge "Nuevo" decorativo */
.card{
  position: relative;
}

.card::after{
  content: "Nuevo";
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: .85rem;
  padding: .25rem .5rem;
  border-radius: 999px;
}`}</code>
            </pre>
          </div>

          <div className="card" id="video-position-completo">
  <h3>Vídeo: Position en CSS — static, relative, absolute, fixed y sticky</h3>

  <p>
    En este vídeo vamos a centrarnos exclusivamente en la propiedad{" "}
    <code>position</code>, que controla <strong>cómo se coloca un elemento</strong>{" "}
    dentro de la página y si <strong>permanece o no en el flujo normal</strong>{" "}
    del documento.
  </p>

  <p>
    Es un vídeo especialmente útil porque explica <strong>paso a paso</strong>{" "}
    todos los valores de <code>position</code>, con ejemplos claros y comparaciones
    directas entre ellos.
  </p>

  <div className="callout tip">
    Objetivo del vídeo: que entiendas{" "}
    <strong>cuándo un elemento ocupa espacio</strong>,{" "}
    <strong>cuándo deja de ocuparlo</strong> y{" "}
    <strong>respecto a qué se posiciona</strong>.
  </div>

  <h4>Contenido del vídeo (organizado por bloques)</h4>

<div className="table-wrap" role="region" aria-label="Contenido del vídeo sobre position" tabIndex={0}>
  <table className="table">
    <thead>
      <tr>
        <th>Bloque</th>
        <th>Qué se explica</th>
        <th>Idea clave</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Introducción</strong></td>
        <td>Qué es la propiedad <code>position</code> y para qué sirve</td>
        <td>No se usa para todo: sirve para casos concretos</td>
      </tr>

      <tr>
        <td><code>position: static</code></td>
        <td>Comportamiento por defecto de los elementos</td>
        <td>Sigue el flujo normal y no acepta offsets</td>
      </tr>

      <tr>
        <td><code>position: relative</code></td>
        <td>Desplazamiento respecto a su posición original</td>
        <td>Se mueve visualmente, pero mantiene su hueco</td>
      </tr>

      <tr>
        <td><code>top / right / bottom / left</code></td>
        <td>Cómo funcionan las propiedades de desplazamiento</td>
        <td>Solo actúan en elementos posicionados</td>
      </tr>

      <tr>
        <td>Espacio en <code>relative</code></td>
        <td>Qué ocurre con el espacio que ocupa el elemento</td>
        <td>El hueco original se respeta</td>
      </tr>

      <tr>
        <td><code>position: absolute</code></td>
        <td>Posicionamiento fuera del flujo normal</td>
        <td>Sale del flujo y puede superponerse</td>
      </tr>

      <tr>
        <td><code>position: fixed</code></td>
        <td>Posicionamiento respecto al viewport</td>
        <td>Permanece fijo al hacer scroll</td>
      </tr>

      <tr>
        <td><code>position: sticky</code></td>
        <td>Comportamiento híbrido entre relative y fixed</td>
        <td>Se “pega” al hacer scroll</td>
      </tr>

      <tr>
        <td>Position en línea</td>
        <td>Uso de <code>position</code> en elementos inline</td>
        <td>El display original sigue importando</td>
      </tr>

      <tr>
        <td><strong>Resumen final</strong></td>
        <td>Repaso general de todos los valores</td>
        <td>Cuándo usar cada tipo correctamente</td>
      </tr>
    </tbody>
  </table>
</div>


  <div className="callout warn">
    Idea importante: <code>position</code> <strong>no sirve para maquetar todo</strong>.
    La mayoría de layouts se hacen con <strong>display (Flexbox / Grid)</strong>.
    Usa <code>position</code> cuando necesites superponer, fijar o crear referencias.
  </div>

  {/* VIDEO */}
  <div className="media" style={{ maxWidth: 900 }}>
    <iframe
      width="900"
      height="506"
      src="https://www.youtube.com/embed/98aPbaVMORU"
      title="Position en CSS: static, relative, absolute, fixed y sticky"
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ borderRadius: "0.75rem", width: "100%" }}
    />
  </div>

  <h4>Cómo aprovechar este vídeo en el estudio</h4>
  <ol>
    <li>
      Mira el vídeo siguiendo el orden del índice (no lo saltes).
    </li>
    <li>
      Pausa en cada tipo de <code>position</code> y prueba un ejemplo pequeño.
    </li>
    <li>
      Pregúntate siempre:{" "}
      <strong>¿este elemento sigue en el flujo o ha salido?</strong>
    </li>
  </ol>

  <div className="callout">
    Frase clave para recordar:
    <strong>
      display organiza el flujo, position ajusta la colocación.
    </strong>
  </div>
</div>

        </details>
      </section>

      {/* ================= 7) DOC DISPLAY ================= */}
      <section className="doc-section" id="doc-display">
        <details className="dd" open>
          <summary>7) Documentación de referencia: la propiedad display (W3Schools)</summary>
          <div className="dd-body">
            <div className="card">
              <h3>
                Documentación de referencia: la propiedad <code>display</code>
              </h3>

              <p>
                La propiedad <code>display</code> define{" "}
                <strong>cómo se comporta un elemento en el flujo del documento</strong>:
                si ocupa toda una línea, si se coloca en línea con otros elementos,
                o si directamente no se muestra.
              </p>

              <p>
                Para consultar todos los valores disponibles, su sintaxis y ejemplos básicos,
                puedes visitar la documentación de referencia de W3Schools:
              </p>

              <div className="callout tip">
                📘 Documentación oficial (nivel introductorio y práctico):<br />
                <a
                  href="https://www.w3schools.com/cssref/pr_class_display.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.w3schools.com/cssref/pr_class_display.php
                </a>
              </div>

              <p>En esta página encontrarás:</p>

              <ul>
                <li>
                  La lista completa de valores de <code>display</code> (
                  <code>block</code>, <code>inline</code>, <code>inline-block</code>,{" "}
                  <code>none</code>, etc.).
                </li>
                <li>Ejemplos simples y visuales para cada caso.</li>
                <li>Notas sobre compatibilidad y comportamiento básico.</li>
              </ul>

              <div className="callout warn">
                Consejo didáctico: usa esta documentación para{" "}
                <strong>consultar valores</strong>, pero apóyate siempre en ejemplos
                propios para entender{" "}
                <strong>
                  cómo afecta <code>display</code> al flujo real del documento
                </strong>.
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* ================= 8) EJEMPLOS MÍNIMOS ================= */}
      <section className="doc-section" id="ejemplos">
        <details className="dd" open>
          <summary>8) Ejemplos mínimos (HTML + CSS) para ver la diferencia</summary>
          <div className="dd-body">
            <p>
              Estos ejemplos están diseñados para que se vea a simple vista:
              <strong> display</strong> (tipo de caja) y <strong>position</strong>{" "}
              (permanecer o salir del flujo).
            </p>

            <details className="dd dd-nested" open>
              <summary>Ejemplo A · Badge “Nuevo” con absolute (superposición)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- HTML -->
<div class="card-demo">
  <h4>Título</h4>
  <div class="badge">Nuevo</div>
  <p>Texto de ejemplo para ver la caja.</p>
</div>`}</code>
                </pre>

                <pre>
                  <code>{`/* CSS */
.card-demo{
  position: relative;   /* referencia */
  padding: 14px;
  border: 1px dashed rgba(0,0,0,.18);
}

.badge{
  position: absolute;   /* fuera del flujo */
  top: 8px;
  right: 8px;
  padding: 4px 8px;
  border-radius: 999px;
}`}</code>
                </pre>

                <div className="callout tip">
                  Este es un uso perfecto de <code>position:absolute</code>: un elemento
                  “pegado” a una esquina dentro de una tarjeta.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Ejemplo B · Flujo normal + absolute (se nota que “no ocupa”)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<!-- HTML -->
<div class="demo-flow">
  <p class="demo-parrafo">Párrafo: ocupa línea completa.</p>
  <button class="demo-boton">Botón</button>
  <img class="demo-imagen" src="#" alt="Imagen ejemplo">
  <span class="demo-span">Etiqueta inline</span>
</div>`}</code>
                </pre>

                <pre>
                  <code>{`/* CSS */
.demo-flow{
  position: relative; /* referencia para el absoluto */
  padding: 12px;
  min-height: 110px;
  border: 1px dashed rgba(0,0,0,0.18);
}

/* block */
.demo-parrafo{
  display: block;
  padding: 6px;
}

/* inline-block + relative */
.demo-boton{
  display: inline-block;
  position: relative;
  top: -6px;          /* se mueve pero mantiene hueco */
  padding: 6px 10px;
}

/* absolute: fuera del flujo */
.demo-imagen{
  display: inline-block;
  width: 70px;
  height: auto;
  position: absolute;
  top: 8px;
  right: 8px;
}

/* inline */
.demo-span{
  display: inline;
  margin-left: 8px;
}`}</code>
                </pre>

                <div className="callout warn">
                  Observa: la imagen está fuera del flujo. Por eso el párrafo, el botón
                  y el span no “se apartan” para dejarle hueco.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= RETOS PRÁCTICOS ================= */}
      <section className="doc-section" id="retos-practicos">
        <details className="dd" open>
          <summary>🎮 Retos prácticos: del concepto al dominio absoluto</summary>
          <div className="dd-body">
            
            <div className="callout">
              🚀 <strong>Desafío progresivo:</strong> Cada reto construye sobre el anterior. 
              ¡Intenta resolverlos sin mirar las soluciones primero!
            </div>

            {/* RETO 1 - PRINCIPIANTE */}
            <details className="dd dd-nested">
              <summary>🟢 RETO 1 - Principiante: Diagnóstica el problema</summary>
              <div className="dd-body">
                <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #22c55e' }}>
                  <h4 style={{ marginTop: 0, color: '#166534' }}>🎯 Tu misión:</h4>
                  <p style={{ color: '#166534', marginBottom: 0 }}>
                    Un desarrollador junior se queja: "¡Le puse width: 200px a mi &lt;span&gt; y no funciona!"
                    ¿Cuál es el problema y cómo lo solucionas?
                  </p>
                </div>

                <pre style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  <code>{`<!-- HTML problemático -->
<p>Este es un texto con una <span class="destacado">palabra destacada</span> que debería ser más ancha.</p>`}</code>
                </pre>

                <pre style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  <code>{`/* CSS que "no funciona" */
.destacado {
  width: 200px;
  background: yellow;
  padding: 5px;
}`}</code>
                </pre>

                <details className="dd dd-nested">
                  <summary>💡 Ver solución y explicación</summary>
                  <div className="dd-body">
                    <div style={{ padding: '1rem', backgroundColor: '#dcfce7', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                      <h6 style={{ marginTop: 0, color: '#166534' }}>🔍 Diagnóstico:</h6>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#15803d' }}>
                        <code>&lt;span&gt;</code> tiene <code>display: inline</code> por defecto. 
                        Los elementos inline <strong>ignoran width y height</strong> porque su tamaño 
                        lo determina su contenido.
                      </p>
                    </div>
                    
                    <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                      <h6 style={{ marginTop: 0, color: '#92400e' }}>⚡ Soluciones:</h6>
                      <pre style={{ fontSize: '0.8rem', margin: 0 }}>
                        <code>{`/* Opción 1: inline-block (mantiene en línea pero acepta dimensiones) */
.destacado {
  display: inline-block;
  width: 200px;
  background: yellow;
  padding: 5px;
}

/* Opción 2: block (ocupa toda la línea) */
.destacado {
  display: block;
  width: 200px;
  background: yellow;
  padding: 5px;
}`}</code>
                      </pre>
                    </div>

                    <div className="callout tip">
                      <strong>🧠 Lección clave:</strong> Antes de aplicar width/height, 
                      pregúntate: ¿qué display tiene este elemento?
                    </div>
                  </div>
                </details>
              </div>
            </details>

            {/* RETO 2 - INTERMEDIO */}
            <details className="dd dd-nested">
              <summary>🟡 RETO 2 - Intermedio: Crea un badge posicionado</summary>
              <div className="dd-body">
                <div style={{ backgroundColor: '#fffbeb', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #f59e0b' }}>
                  <h4 style={{ marginTop: 0, color: '#92400e' }}>🎯 Tu misión:</h4>
                  <p style={{ color: '#92400e', marginBottom: 0 }}>
                    Crea una tarjeta de producto con un badge "OFERTA" en la esquina superior derecha. 
                    El badge debe estar <strong>encima</strong> de la imagen, no desplazar el contenido.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h5>📋 Requisitos técnicos:</h5>
                  <ul>
                    <li>✅ La tarjeta debe mantener su flujo natural</li>
                    <li>✅ El badge no debe "empujar" otros elementos</li>
                    <li>✅ Debe funcionar si cambias el tamaño de la tarjeta</li>
                    <li>✅ El badge debe estar siempre visible por encima de todo</li>
                  </ul>
                </div>

                <details className="dd dd-nested">
                  <summary>💡 Ver solución profesional</summary>
                  <div className="dd-body">
                    <h6>HTML estructura:</h6>
                    <pre style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
                      <code>{`<article class="product-card">
  <div class="product-image">
    <img src="producto.jpg" alt="Producto">
    <span class="badge-offer">OFERTA</span>
  </div>
  <div class="product-info">
    <h3>Producto increíble</h3>
    <p class="price">€29.99</p>
  </div>
</article>`}</code>
                    </pre>

                    <h6>CSS solución:</h6>
                    <pre style={{ fontSize: '0.8rem' }}>
                      <code>{`/* Tarjeta base */
.product-card {
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Contenedor de imagen - CLAVE: position relative */
.product-image {
  position: relative; /* Crea contexto para el badge absoluto */
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

/* Badge - CLAVE: position absolute */
.badge-offer {
  position: absolute; /* Sale del flujo, no empuja nada */
  top: 10px;         /* Desde arriba */
  right: 10px;       /* Desde la derecha */
  background: #dc2626;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 1;        /* Por encima de la imagen */
}

/* Info del producto */
.product-info {
  padding: 1rem;
}

.product-info h3 {
  margin: 0 0 0.5rem 0;
}

.price {
  margin: 0;
  font-weight: bold;
  color: #059669;
}`}</code>
                    </pre>

                    <div className="callout tip">
                      <strong>🔑 Conceptos aplicados:</strong>
                      <ul style={{ marginBottom: 0 }}>
                        <li><strong>position: relative</strong> en el contenedor para crear referencia</li>
                        <li><strong>position: absolute</strong> en el badge para sacarlo del flujo</li>
                        <li><strong>z-index</strong> para controlar el apilamiento</li>
                        <li><strong>top/right</strong> para posicionamiento preciso</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </details>

            {/* RETO 3 - AVANZADO */}
            <details className="dd dd-nested">
              <summary>🔴 RETO 3 - Avanzado: Layout completo con header fijo</summary>
              <div className="dd-body">
                <div style={{ backgroundColor: '#fef2f2', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #dc2626' }}>
                  <h4 style={{ marginTop: 0, color: '#991b1b' }}>🎯 Tu misión:</h4>
                  <p style={{ color: '#991b1b', marginBottom: 0 }}>
                    Crea un layout web completo con header fijo que permanezca visible al hacer scroll, 
                    sidebar que se pegue al hacer scroll, y contenido principal que fluya normalmente.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h5>📋 Desafíos técnicos:</h5>
                  <ul>
                    <li>🚀 Header fijo que no tape el contenido inicial</li>
                    <li>🚀 Sidebar sticky que se pegue al header cuando llegue arriba</li>
                    <li>🚀 Contenido principal que respete el espacio del header</li>
                    <li>🚀 Footer que aparezca al final del scroll natural</li>
                  </ul>
                </div>

                <details className="dd dd-nested">
                  <summary>💡 Ver solución arquitectural completa</summary>
                  <div className="dd-body">
                    <h6>HTML estructura semántica:</h6>
                    <pre style={{ fontSize: '0.75rem', marginBottom: '1rem' }}>
                      <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Layout Avanzado</title>
</head>
<body>
  <header class="main-header">
    <h1>Mi Sitio Web</h1>
    <nav>
      <a href="#home">Inicio</a>
      <a href="#about">Acerca</a>
      <a href="#contact">Contacto</a>
    </nav>
  </header>

  <div class="layout-container">
    <aside class="sidebar">
      <h3>Navegación</h3>
      <ul>
        <li><a href="#section1">Sección 1</a></li>
        <li><a href="#section2">Sección 2</a></li>
        <li><a href="#section3">Sección 3</a></li>
      </ul>
    </aside>

    <main class="main-content">
      <article>
        <h2>Contenido Principal</h2>
        <p>Este bloque reúne el contenido principal de la página y se adapta al ancho disponible.</p>
        <p>En una página real, aquí colocarías artículos, tarjetas o secciones con texto semántico.</p>
      </article>
    </main>
  </div>

  <footer class="main-footer">
    <p>&copy; 2026 Mi Sitio Web</p>
  </footer>
</body>
</html>`}</code>
                    </pre>

                    <h6>CSS solución (arquitectura completa):</h6>
                    <pre style={{ fontSize: '0.75rem' }}>
                      <code>{`/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
}

/* HEADER FIJO - posición fixed */
.main-header {
  position: fixed;      /* Fijo en el viewport */
  top: 0;              /* Pegado arriba */
  left: 0;
  right: 0;
  height: 60px;
  background: #1f2937;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 100;        /* Por encima de todo */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-header nav a {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
}

/* LAYOUT CONTAINER - compensa el header fijo */
.layout-container {
  display: flex;
  margin-top: 60px;     /* Compensa altura del header fijo */
  min-height: calc(100vh - 60px);
}

/* SIDEBAR STICKY - se pega al header */
.sidebar {
  width: 250px;
  background: #f3f4f6;
  padding: 1rem;
  position: sticky;     /* Se pega durante scroll */
  top: 60px;           /* Se pega cuando llegue al header */
  height: fit-content;  /* Solo ocupa lo necesario */
  max-height: calc(100vh - 60px); /* No excede viewport */
  overflow-y: auto;     /* Scroll interno si es necesario */
}

.sidebar h3 {
  margin-bottom: 1rem;
  color: #374151;
}

.sidebar ul {
  list-style: none;
}

.sidebar li {
  margin-bottom: 0.5rem;
}

.sidebar a {
  color: #4b5563;
  text-decoration: none;
  display: block;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background 0.2s;
}

.sidebar a:hover {
  background: #e5e7eb;
}

/* CONTENIDO PRINCIPAL - flujo normal */
.main-content {
  flex: 1;              /* Ocupa espacio restante */
  padding: 2rem;
  background: white;
}

.main-content article {
  max-width: 800px;
}

.main-content h2 {
  margin-bottom: 1rem;
  color: #1f2937;
}

.main-content p {
  margin-bottom: 1rem;
  color: #4b5563;
}

/* FOOTER - flujo normal */
.main-footer {
  background: #1f2937;
  color: white;
  padding: 2rem;
  text-align: center;
}

/* RESPONSIVE - adaptación móvil */
@media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    position: static;    /* Pierde sticky en móvil */
    height: auto;
  }
}`}</code>
                    </pre>

                    <div className="callout tip">
                      <strong>🏆 Técnicas magistrales aplicadas:</strong>
                      <ul style={{ marginBottom: 0 }}>
                        <li><strong>position: fixed</strong> para header siempre visible</li>
                        <li><strong>position: sticky</strong> para sidebar que se pega</li>
                        <li><strong>margin-top</strong> para compensar header fijo</li>
                        <li><strong>z-index</strong> para jerarquía de apilamiento</li>
                        <li><strong>calc()</strong> para cálculos de altura precisos</li>
                        <li><strong>Flexbox</strong> para layout principal</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </details>

            <div className="callout" style={{ marginTop: '2rem' }}>
              🎯 <strong>¡Enhorabuena!</strong> Si has completado estos retos, ya dominas la base del layout web. 
              El salto a Flexbox, Grid y layouts avanzados será mucho más fácil.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 9) TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>🏆 Test de evaluación: valida tu dominio del layout</summary>
          <div className="dd-body">
            <div className="callout">
              🎯 <strong>Momento de la verdad:</strong> Responde estas preguntas para validar que 
              realmente dominas la diferencia entre display y position. ¡Sin mirar apuntes!
            </div>
            
            <p>El objetivo no es memorizar, sino poder <strong>predecir</strong> qué hará el navegador con cada elemento.</p>

            <form onSubmit={submit}>
              {questions.map((q, i) => {
                const picked = answers[q.id];
                const ok = submitted && picked === q.correct;
                const bad = submitted && picked && picked !== q.correct;

                return (
                  <div className="card" key={q.id} style={{ marginTop: "1rem" }}>
                    <h3 style={{ marginTop: 0 }}>
                      {i + 1}. {q.q}
                    </h3>

                    <div className="test-question" role="group" aria-label={`Pregunta ${i + 1}`}>
                      {q.options.map((opt) => (
                        <label key={opt}>
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={picked === opt}
                            onChange={() => choose(q.id, opt)}
                            disabled={submitted}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>

                    {submitted && (
                      <div className={`callout ${ok ? "tip" : "warn"}`}>
                        {ok && (
                          <>
                            ✅ Correcta. <strong>{q.why}</strong>
                          </>
                        )}
                        {bad && (
                          <>
                            ❌ Incorrecta. Correcta: <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                        {!picked && (
                          <>
                            ⚠️ Sin responder. Correcta: <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="doc-next" style={{ gap: ".6rem" }}>
                {!submitted ? (
                  <button className="btn btn-primary" type="submit">
                    Corregir test
                  </button>
                ) : (
                  <>
                    <div className="badge" aria-live="polite">
                      Resultado: {score}/{questions.length}
                    </div>
                    <button className="btn" type="button" onClick={reset}>
                      Reintentar
                    </button>
                  </>
                )}
              </div>

              {submitted && (
                <>
                  <div className={`callout ${score >= questions.length * 0.8 ? 'tip' : score >= questions.length * 0.6 ? '' : 'warn'}`} style={{ marginTop: "1rem" }}>
                    {score === questions.length && (
                      <>
                        🏆 <strong>¡Excelente! Dominas Display y Position.</strong> Tienes las bases sólidas 
                        para abordar Flexbox y Grid con total confianza. El layout web ya no tiene secretos para ti.
                      </>
                    )}
                    {score >= questions.length * 0.8 && score < questions.length && (
                      <>
                        🎯 <strong>¡Muy bien! Casi perfecto.</strong> Tienes muy clara la diferencia entre 
                        display y position. Una pequeña revisión y estarás listo para layouts avanzados.
                      </>
                    )}
                    {score >= questions.length * 0.6 && score < questions.length * 0.8 && (
                      <>
                        📚 <strong>Buen progreso.</strong> Entiendes los conceptos básicos, pero repasa 
                        las diferencias entre flujo normal y posicionamiento absoluto.
                      </>
                    )}
                    {score < questions.length * 0.6 && (
                      <>
                        🔥 <strong>¡Sigue practicando!</strong> Display y Position son conceptos clave - 
                        vale la pena dominarlos antes de pasar a Flexbox y Grid.
                      </>
                    )}
                  </div>
                  
                  <div className="callout" style={{ marginTop: "1rem", backgroundColor: '#f0f9ff', border: '2px solid #3b82f6' }}>
                    🚀 <strong>Tu próxima aventura:</strong> Ahora que entiendes el flujo y el posicionamiento, 
                    puedes abordar <strong>Flexbox</strong> (para alineación unidimensional) y <strong>Grid</strong> 
                    (para layouts bidimensionales) con una base sólida. ¡El layout web ya no tiene secretos para ti!
                  </div>
                </>
              )}
            </form>
          </div>
        </details>
      </section>

      {/* ================= CONCLUSIÓN MOTIVADORA ================= */}
      <section className="doc-section">
        <div className="callout" style={{ backgroundColor: '#f0f9ff', border: '2px solid #3b82f6', padding: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#1e40af' }}>🎯 ¡Felicitaciones! Has dominado Display y Position</h3>
          <p style={{ color: '#1e40af', marginBottom: '1rem' }}>
            Acabas de conquistar dos de los conceptos más importantes del CSS. Ya no eres la persona que 
            "pone position: absolute para todo" o que no entiende por qué un width no funciona.
          </p>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginBottom: '1.5rem' }}>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <h4 style={{ marginTop: 0, color: '#2563eb' }}>🎭 Display masterizado</h4>
              <ul style={{ color: '#1e40af', marginBottom: 0, fontSize: '0.9rem' }}>
                <li>✅ Sabes cuándo usar block, inline, inline-block</li>
                <li>✅ Entiendes por qué width no funciona en inline</li>
                <li>✅ Dominas display: none vs visibility: hidden</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <h4 style={{ marginTop: 0, color: '#2563eb' }}>🎬 Position conquistado</h4>
              <ul style={{ color: '#1e40af', marginBottom: 0, fontSize: '0.9rem' }}>
                <li>✅ Diferencias entre static, relative, absolute</li>
                <li>✅ Cuándo usar fixed vs sticky</li>
                <li>✅ Cómo crear referencias con relative</li>
              </ul>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '2px solid #60a5fa' }}>
            <strong style={{ color: '#1d4ed8' }}>🚀 Tu próximo superpoder: Layout Avanzado</strong>
            <p style={{ color: '#1e40af', margin: '0.5rem 0 0 0', fontSize: '0.95rem' }}>
              Con esta base sólida, estás listo para dominar <strong>Flexbox</strong> (layout unidimensional), 
              <strong>Grid</strong> (layout bidimensional) y técnicas avanzadas de posicionamiento. 
              El salto de calidad será espectacular.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
