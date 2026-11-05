import { useEffect, useMemo, useState } from "react";

/**
 * Tema: Box Model + Espaciado (base para Flex/Grid/Position)
 * Estilos: usa las clases del manual (doc, doc-hero, dd, callout, table, etc.)
 * Estructura: summary + secciones + test con corrección y feedback.
 *
 * Basado en la estructura y el estilo del manual. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}
 */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function V16_BoxModel_BoxSizing() {
  useEffect(() => {
    document.title = "V16 · Box Model y Box-Sizing: la base invisible del diseño web";
  }, []);

  // ===== Test (opciones aleatorias) =====
  const testBase = useMemo(
    () => [
      {
        id: "q1",
        question:
          "Si un elemento tiene width: 300px; padding: 20px; border: 2px; y box-sizing: content-box, ¿cuál es su ancho total visible?",
        correct: "344px",
        options: ["300px", "340px", "344px", "364px"],
        explain:
          "Con content-box, el width solo mide el contenido: 300 + (20*2) + (2*2) = 344px.",
      },
      {
        id: "q2",
        question:
          "¿Qué propiedad hace que width/height incluyan padding y border dentro del tamaño declarado?",
        correct: "box-sizing: border-box",
        options: [
          "box-sizing: content-box",
          "box-sizing: border-box",
          "overflow: auto",
          "display: block",
        ],
        explain:
          "border-box mete padding y border dentro del ancho/alto declarado, evitando cálculos y sorpresas.",
      },
      {
        id: "q3",
        question:
          "¿Cuál de estas afirmaciones sobre gap es correcta en Flex/Grid?",
        correct:
          "gap separa elementos hijos sin colapsar y sin afectar el borde del contenedor",
        options: [
          "gap crea márgenes que colapsan verticalmente",
          "gap solo funciona en display: block",
          "gap separa elementos hijos sin colapsar y sin afectar el borde del contenedor",
          "gap aumenta el tamaño del contenido como padding",
        ],
        explain:
          "gap es separación entre items (hijos) en flex/grid. No colapsa como margin y no es espacio interno como padding.",
      },
      {
        id: "q4",
        question:
          "Dos bloques apilados: el primero tiene margin-bottom: 30px y el segundo margin-top: 20px. ¿Qué separación vertical resultará (en flujo normal, sin bordes/padding entre ellos)?",
        correct: "30px",
        options: ["50px", "30px", "20px", "10px"],
        explain:
          "Margin collapse: los márgenes verticales adyacentes se fusionan y gana el mayor (30px).",
      },
      {
        id: "q5",
        question:
          "¿Qué valor de overflow muestra barras de desplazamiento solo si el contenido se desborda?",
        correct: "auto",
        options: ["visible", "hidden", "scroll", "auto"],
        explain:
          "auto es adaptativo: solo aparece scroll si hace falta.",
      },
      {
        id: "q6",
        question:
          "Si quieres que una imagen nunca se salga del contenedor en responsive, ¿qué regla es la más habitual?",
        correct: "max-width: 100%; height: auto;",
        options: [
          "width: 1200px;",
          "max-width: 100%; height: auto;",
          "overflow: visible;",
          "position: fixed;",
        ],
        explain:
          "max-width:100% hace que la imagen no exceda el ancho del contenedor; height:auto mantiene proporción.",
      },
    ],
    []
  );

  const test = useMemo(() => {
    // Barajar opciones por pregunta (orden aleatorio)
    return testBase.map((q) => ({
      ...q,
      options: shuffle(q.options),
    }));
  }, [testBase]);

  const [answers, setAnswers] = useState(() => ({}));
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let ok = 0;
    for (const q of test) {
      if (answers[q.id] === q.correct) ok++;
    }
    return ok;
  }, [answers, test]);

  const handleChoose = (qid, value) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <main className="doc" id="contenido">
      {/* Skip link (si tu app ya lo tiene, puedes borrar este) */}
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* HERO */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">V16 · CSS Fundamental</p>
        <h1>Box Model y Box-Sizing: la base invisible del diseño web</h1>
        
        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #0ea5e9' }}>
          <h3 style={{ marginTop: 0, color: '#0c4a6e' }}>🎁 Analogía de la caja de regalo</h3>
          <p style={{ color: '#075985', marginBottom: '1rem' }}>
            Imagina que cada elemento HTML es una <strong>caja de regalo</strong>:
          </p>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h4 style={{ marginTop: 0, color: '#0284c7', fontSize: '0.9rem' }}>🎁 CONTENT:</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#0369a1' }}>El regalo dentro de la caja</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h4 style={{ marginTop: 0, color: '#0284c7', fontSize: '0.9rem' }}>🛡️ PADDING:</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#0369a1' }}>El papel de burbujas protector</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h4 style={{ marginTop: 0, color: '#0284c7', fontSize: '0.9rem' }}>📦 BORDER:</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#0369a1' }}>Las paredes de la caja</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h4 style={{ marginTop: 0, color: '#0284c7', fontSize: '0.9rem' }}>🌟 MARGIN:</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#0369a1' }}>El espacio hasta la próxima caja</p>
            </div>
          </div>
        </div>
        
        <p className="doc-lead">
          Domina el modelo de cajas y entenderás por qué algunos elementos "no caben", 
          por qué aparecen scrollbars inesperados y cómo controlar el espacio de forma predecible.
          <strong>Esta es la base de Flexbox, Grid y Position.</strong>
        </p>

        <div className="callout tip">
          🎯 <strong>Objetivo del tema:</strong> Que puedas <strong>predecir exactamente</strong> 
          cuánto espacio ocupará cualquier elemento antes de ver el resultado en el navegador.
        </div>
      </header>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice del tema">
        <h2>🧮 Índice</h2>
        <ol>
          <li>
            <a href="#bm-que-es">Qué es el Box Model</a>
          </li>
          <li>
            <a href="#bm-calculo">Cálculo de tamaños: content-box vs border-box</a>
          </li>
          <li>
            <a href="#espaciado">Espaciado: margin, padding, gap y box-sizing</a>
          </li>
          <li>
            <a href="#margin-collapse">Margin collapse: cómo funciona y cómo evitarlo</a>
          </li>
          <li>
            <a href="#overflow">Overflow: qué pasa cuando el contenido “se sale”</a>
          </li>
          <li>
            <a href="#minmax">max-width / min-width y patrones reales</a>
          </li>
          <li>
            <a href="#tabla">Tabla detallada de propiedades clave</a>
          </li>
          <li>
            <a href="#ejercicios">Ejercicios (práctica real)</a>
          </li>
          <li>
            <a href="#test">Test de repaso (con corrección)</a>
          </li>
        </ol>
      </nav>

      {/* ===== 1) Qué es el Box Model ===== */}
      <section className="doc-section" id="bm-que-es">
        <h2>1) 📦 El Box Model: todo es una caja</h2>

        <details className="dd" open>
          <summary>Definición operativa (la que se usa al maquetar)</summary>
          <div className="dd-body">
            <p>
              En CSS, cada elemento del documento se representa como una{" "}
              <strong>caja rectangular</strong>. Esa caja no es solo “el contenido”:
              tiene capas que determinan <strong>tamaño</strong>, <strong>separación</strong> y{" "}
              <strong>colisión</strong> con otras cajas.
            </p>

            <ul>
              <li>
                <strong>Content</strong>: el área donde vive el contenido (texto, imagen, etc.).
              </li>
              <li>
                <strong>Padding</strong>: espacio interior entre el contenido y el borde (agranda la caja visual).
              </li>
              <li>
                <strong>Border</strong>: el borde (también ocupa espacio).
              </li>
              <li>
                <strong>Margin</strong>: espacio exterior (separa cajas; no es “tamaño interior”).
              </li>
            </ul>

           <figure className="media">
              <img
                src="orden.png"
                alt="el modelo de caja en css: content, padding, border y margin"
                width="400"
                height="200"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">
                El modelo de caja en CSS: content, padding, border y margin.
              </figcaption>
            </figure>

            <div className="callout warn">
              Si defines un <code>width</code> “a ojo” sin pensar en padding y border,
              aparecen “misterios”: elementos que no caben, saltos de línea inesperados,
              barras de scroll horizontales, etc.
            </div>
          </div>
        </details>
      </section>

      {/* ===== DEMOSTRADOR INTERACTIVO ===== */}
      <section className="doc-section" id="box-sizing-demo">
        <h2>2) ⚙️ Demostrador interactivo: content-box vs border-box</h2>
        
        <div className="callout tip">
          🎯 <strong>Aprende haciendo:</strong> Usa los controles para ver en tiempo real 
          cómo box-sizing cambia el cálculo del tamaño final.
        </div>

        <div style={{ 
          display: 'grid', 
          gap: '2rem', 
          gridTemplateColumns: '1fr 1fr',
          marginBottom: '2rem',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr'
          }
        }}>
          {/* CONTENT-BOX */}
          <div style={{ padding: '1.5rem', backgroundColor: '#fef3c7', borderRadius: '0.75rem', border: '2px solid #f59e0b' }}>
            <h3 style={{ marginTop: 0, color: '#92400e' }}>🟡 content-box (por defecto)</h3>
            <div style={{
              width: '200px',
              padding: '20px',
              border: '5px solid #f59e0b',
              backgroundColor: '#fbbf24',
              color: '#92400e',
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '1rem auto'
            }}>
              Content
            </div>
            <div style={{ fontSize: '0.9rem', color: '#92400e' }}>
              <strong>Cálculo del ancho total:</strong><br />
              • Content: 200px<br />
              • Padding: 20px × 2 = 40px<br />
              • Border: 5px × 2 = 10px<br />
              <strong>Total visual: 250px</strong>
            </div>
            <pre style={{ fontSize: '0.8rem', backgroundColor: 'white', padding: '0.5rem', borderRadius: '0.25rem', marginTop: '1rem' }}>
              <code>{`.caja {
  width: 200px;
  padding: 20px;
  border: 5px solid orange;
  box-sizing: content-box;
}
/* Ancho total = 250px */`}</code>
            </pre>
          </div>

          {/* BORDER-BOX */}
          <div style={{ padding: '1.5rem', backgroundColor: '#dcfce7', borderRadius: '0.75rem', border: '2px solid #22c55e' }}>
            <h3 style={{ marginTop: 0, color: '#166534' }}>🟢 border-box (recomendado)</h3>
            <div style={{
              width: '200px',
              padding: '20px',
              border: '5px solid #22c55e',
              backgroundColor: '#4ade80',
              color: '#166534',
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '1rem auto',
              boxSizing: 'border-box'
            }}>
              Content
            </div>
            <div style={{ fontSize: '0.9rem', color: '#166534' }}>
              <strong>Cálculo del ancho total:</strong><br />
              • Total fijo: 200px<br />
              • Content: 200px - 40px - 10px = 150px<br />
              • Padding y border incluidos<br />
              <strong>Total visual: 200px</strong>
            </div>
            <pre style={{ fontSize: '0.8rem', backgroundColor: 'white', padding: '0.5rem', borderRadius: '0.25rem', marginTop: '1rem' }}>
              <code>{`.caja {
  width: 200px;
  padding: 20px;
  border: 5px solid green;
  box-sizing: border-box;
}
/* Ancho total = 200px */`}</code>
            </pre>
          </div>
        </div>

        <div className="callout">
          🔑 <strong>Conclusión práctica:</strong> Con <code>border-box</code>, el width que escribes 
          es el width que ves. Es más predecible y por eso se usa en prácticamente todos los proyectos modernos.
        </div>

        <details className="dd">
          <summary>🛠️ Reset recomendado para todos tus proyectos</summary>
          <div className="dd-body">
            <p>
              Añade esto al inicio de tu CSS para que todos los elementos usen <code>border-box</code> por defecto:
            </p>
            <pre>
              <code>{`/* Reset recomendado */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Alternativa más específica */
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}`}</code>
            </pre>
            <div className="callout tip">
              Este reset hace que <strong>todos los elementos</strong> usen border-box, 
              evitando sorpresas y cálculos mentales complicados.
            </div>
          </div>
        </details>
      </section>

      {/* ===== 2) Cálculo: content-box vs border-box ===== */}
      <section className="doc-section" id="bm-calculo">
        <h2>3) Cálculo de tamaños: content-box vs border-box</h2>

        <details className="dd" open>
          <summary>Cómo se calcula el ancho real de una caja</summary>
          <div className="dd-body">
            <p>
              El punto crítico es esto: cuando escribes <code>width</code>, ¿estás
              midiendo solo el contenido o la caja completa? Depende de{" "}
              <code>box-sizing</code>.
            </p>

            <ul>
              <li>
                <code>box-sizing: content-box</code> (por defecto): <code>width</code> mide{" "}
                <strong>solo content</strong>. Padding y border se suman por fuera.
              </li>
              <li>
                <code>box-sizing: border-box</code>: <code>width</code> mide{" "}
                <strong>content + padding + border</strong>. El contenido se adapta por dentro.
              </li>
            </ul>

            <pre>
              <code>{`/* Ejemplo: cálculo práctico */
.caja{
  width: 300px;           /* ancho declarado */
  padding: 20px;          /* +40px si es content-box */
  border: 2px solid #333; /* +4px si es content-box */
  margin: 16px;           /* fuera de la caja (separación) */
}

/* Con content-box:
   ancho total = 300 + (20*2) + (2*2) = 344px

   Con border-box:
   ancho total = 300px exactos (el content se ajusta) */`}</code>
            </pre>

            <div className="callout tip">
              Patrón profesional: aplicar <code>*&#123; box-sizing: border-box; &#125;</code>{" "}
              desde el inicio reduce incidencias en layouts responsive.
            </div>
          </div>
        </details>
      </section>

      {/* ===== 3) Espaciado: margin, padding, gap, box-sizing ===== */}
      <section className="doc-section" id="espaciado">
        <h2>4) 📏 Espaciado: margin, padding, gap y box-sizing</h2>

        <details className="dd" open>
          <summary>Qué hace cada uno (y cuándo usarlo)</summary>
          <div className="dd-body">
            <p>
              El espaciado no es un “detalle estético”: es parte del layout. La clave
              es distinguir <strong>espacio interno</strong>, <strong>externo</strong> y{" "}
              <strong>entre items</strong>.
            </p>

            <ul>
              <li>
                <strong>padding</strong>: espacio <em>dentro</em> de la caja (aumenta el área interior y la zona clicable).
              </li>
              <li>
                <strong>margin</strong>: espacio <em>fuera</em> de la caja (separa elementos en el flujo).
              </li>
              <li>
                <strong>gap</strong>: espacio <em>entre hijos</em> cuando el padre es{" "}
                <code>display:flex</code> o <code>display:grid</code>.
              </li>
              <li>
                <strong>box-sizing</strong>: decide si <code>width/height</code> incluye padding y border.
              </li>
            </ul>

          <section className="card" id="padding-margin-gap">
  <h2>Padding, Margin y Gap: crean espacio, pero no en el mismo lugar</h2>

  <p>
    Esta es una de las dudas más comunes en CSS porque <strong>las tres propiedades crean espacio</strong>,
    pero lo hacen en <strong>niveles distintos del diseño</strong>. La clave está en entender
    <strong>dónde aparece ese espacio</strong>: dentro del elemento, fuera del elemento o entre elementos hijos.
  </p>

  <div className="callout tip">
    Regla práctica:
    <strong> padding</strong> para el espacio dentro del componente,
    <strong> margin</strong> para separar componentes entre sí,
    <strong> gap</strong> para separar elementos hijos en layouts Flex o Grid.
  </div>

  {/* ================= PADDING ================= */}
  <h3>1) Padding: el espacio interior</h3>
  <p>
    El <strong>padding</strong> es el espacio que existe entre el contenido
    (texto, imagen, iconos…) y el borde del propio elemento.
    Es un espacio <strong>interno</strong>.
  </p>

  <ul>
    <li>
      <strong>Metáfora:</strong> es como el <strong>relleno de un abrigo</strong>.
      Está dentro y hace que todo vaya cómodo.
    </li>
    <li>
      <strong>Cuándo usarlo:</strong> cuando no quieres que el contenido
      toque las “paredes” del componente y quieres que el fondo
      se vea alrededor del texto.
    </li>
  </ul>

  {/* ================= MARGIN ================= */}
  <h3>2) Margin: el espacio exterior</h3>
  <p>
    El <strong>margin</strong> es el espacio vacío que rodea a un elemento
    por fuera de su borde. Sirve para <strong>separar un componente de otro</strong>.
  </p>

  <ul>
    <li>
      <strong>Metáfora:</strong> tu <strong>espacio personal</strong>.
      No es tu ropa (el componente), es la distancia con los demás.
    </li>
    <li>
      <strong>Cuándo usarlo:</strong> para separar una card de otra,
      un botón de un texto o una sección de la siguiente.
      Este espacio es <strong>transparente</strong> (no tiene fondo).
    </li>
  </ul>

  {/* ================= GAP ================= */}
  <h3>3) Gap: el espacio entre elementos (layouts)</h3>
  <p>
    <strong>gap</strong> es una propiedad moderna que solo funciona cuando
    el contenedor padre usa <code>display: flex</code> o <code>display: grid</code>.
    Controla el espacio <strong>entre los hijos</strong> de ese contenedor.
  </p>

  <ul>
    <li>
      <strong>Metáfora:</strong> el <strong>cemento entre los ladrillos</strong>.
      Solo existe donde hay dos elementos uno junto a otro.
    </li>
    <li>
      <strong>Cuándo usarlo:</strong> es mejor que <code>margin</code> para listas
      y rejillas porque no añade espacio extra en los bordes,
      solo entre los elementos.
    </li>
  </ul>

  {/* ================= TABLA ================= */}
  <h3>Tabla comparativa rápida</h3>

  <div className="table-wrap">
    <table className="table">
      <thead>
        <tr>
          <th>Propiedad</th>
          <th>Dónde actúa</th>
          <th>¿Se ve el fondo?</th>
          <th>Uso principal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>padding</code></td>
          <td>Dentro del elemento</td>
          <td>Sí</td>
          <td>Dar aire al contenido</td>
        </tr>
        <tr>
          <td><code>margin</code></td>
          <td>Fuera del elemento</td>
          <td>No</td>
          <td>Separar componentes</td>
        </tr>
        <tr>
          <td><code>gap</code></td>
          <td>Entre hijos (Flex/Grid)</td>
          <td>No</td>
          <td>Crear filas o rejillas limpias</td>
        </tr>
      </tbody>
    </table>
  </div>

  
  

  <div className="callout warn">
    Error común: usar <code>margin</code> para todo.
    En layouts modernos con Flex o Grid, <code>gap</code> suele ser más limpio,
    predecible y fácil de mantener.
  </div>
</section>


            <details className="dd dd-nested">
              <summary>Margin shorthand (lectura precisa)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`margin: 20px;                 /* 20 en los 4 lados */
margin: 10px 20px;            /* arriba/abajo 10 · derecha/izquierda 20 */
margin: 10px 20px 30px;       /* arriba 10 · izq/der 20 · abajo 30 */
margin: 10px 20px 30px 40px;  /* arriba · derecha · abajo · izquierda */`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Variables de espaciado (patrón mantenible)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`:root{
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
}

.toolbar{
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}

.card{
  padding: var(--space-md);
}

.cards-grid{
  display: grid;
  gap: var(--space-lg);
}`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ===== 4) Margin collapse ===== */}
      <section className="doc-section" id="margin-collapse">
        <h2>4) Margin collapse: por qué “no se suma” el margen</h2>

        <details className="dd" open>
          <summary>Qué ocurre y cómo controlarlo</summary>
          <div className="dd-body">
            <p>
              En flujo normal vertical, los <strong>márgenes verticales</strong> de
              elementos bloque adyacentes pueden <strong>colapsar</strong>: en lugar de
              sumarse, el navegador toma <strong>solo el mayor</strong>.
            </p>

            <pre>
              <code>{`.primera{ margin-bottom: 50px; }
.segunda{ margin-top: 100px; }

/* separación real = 100px (no 150px) */`}</code>
            </pre>

            <div className="callout tip">
              Flex y Grid suelen “apagar” este problema: si el contenedor padre es{" "}
              <code>display:flex</code> o <code>display:grid</code>, los márgenes entre hijos{" "}
              no colapsan como en el flujo normal.
            </div>

            <details className="dd dd-nested">
              <summary>Cuándo NO colapsan (lista útil de diagnóstico)</summary>
              <div className="dd-body">
                <ul>
                  <li>Si hay <strong>border</strong> o <strong>padding</strong> entre ellos.</li>
                  <li>Si hay contenido “real” entre ambos (texto, imagen, etc.).</li>
                  <li>Si el elemento tiene <code>overflow</code> distinto de <code>visible</code> (p.ej. <code>auto</code>).</li>
                  <li>Si hay <code>position</code> (absolute/fixed) o <code>float</code>.</li>
                  <li>Si el contenedor usa <code>display:flex</code> o <code>display:grid</code>.</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ===== 5) Overflow ===== */}
      <section className="doc-section" id="overflow">
        <h2>5) Overflow: cuando el contenido “se sale”</h2>

        <details className="dd" open>
          <summary>Qué controla overflow y por qué importa</summary>
          <div className="dd-body">
            <p>
              <code>overflow</code> define qué hace el navegador cuando el contenido
              excede el tamaño de su caja. Esto afecta a scrolls, recortes, y a veces
              incluso a comportamientos de margen y formato visual.
            </p>

            <div className="table-wrap" role="region" aria-label="Tabla overflow" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Valor</th>
                    <th>Qué hace</th>
                    <th>Cuándo usarlo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>visible</code>
                    </td>
                    <td>El contenido puede sobresalir fuera de la caja (por defecto).</td>
                    <td>Casos raros; útil para elementos decorativos, pero puede romper layout.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>hidden</code>
                    </td>
                    <td>Recorta el contenido que se sale (no hay scroll).</td>
                    <td>Tarjetas con recorte limpio, máscaras, imágenes, efectos.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>scroll</code>
                    </td>
                    <td>Muestra barras de desplazamiento siempre.</td>
                    <td>Cuando quieres estabilidad visual (sin “saltos” al aparecer scroll).</td>
                  </tr>
                  <tr>
                    <td>
                      <code>auto</code>
                    </td>
                    <td>Scroll solo si hace falta.</td>
                    <td>Listas, paneles, tablas en contenedores, etc.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout warn">
              Si aparece scroll horizontal “misterioso”, sospecha de:{" "}
              <strong>anchos fijos</strong>, padding/border sin border-box, imágenes sin{" "}
              <code>max-width:100%</code>, o elementos con <code>position</code> fuera de su contenedor.
            </div>
          </div>
        </details>
      </section>

      {/* ===== 6) min/max width ===== */}
      <section className="doc-section" id="minmax">
        <h2>6) max-width / min-width: control fino sin romper responsive</h2>

        <details className="dd" open>
          <summary>Patrones que se usan en proyectos reales</summary>
          <div className="dd-body">
            <p>
              <code>max-width</code> limita el ancho máximo para mejorar legibilidad y
              evitar líneas interminables de texto. <code>min-width</code> protege
              componentes para que no colapsen y mantengan usabilidad.
            </p>

            <pre>
              <code>{`/* Contenedor centrado, fluido y legible */
.container{
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
}

/* Card que no debe colapsar */
.card{
  min-width: 260px;
  width: 100%;
}

/* Grid responsive: mínimo y máximo por columna */
.grid-responsive{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Rango fluido con clamp() */
.hero{
  width: clamp(320px, 60vw, 1200px);
}`}</code>
            </pre>

            <div className="callout tip">
              <code>minmax()</code> en Grid y <code>clamp()</code> en tamaños fluidos son
              dos herramientas de “control de daños”: dejan que el diseño respire sin
              perder límites.
            </div>
          </div>
        </details>
      </section>

      {/* ===== 7) Tabla detallada ===== */}
      <section className="doc-section" id="tabla">
        <h2>7) Tabla detallada: propiedades CSS clave del Box Model y layout</h2>

        <p>
          Esta tabla reúne las propiedades que más influyen en el tamaño real, el
          espacio y el comportamiento de las cajas (las que de verdad necesitas tener en
          la cabeza al maquetar).
        </p>

        <div className="table-wrap" role="region" aria-label="Tabla de propiedades clave" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Qué controla</th>
                <th>Afecta al tamaño total</th>
                <th>Notas de comportamiento</th>
                <th>Uso típico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>width</code> / <code>height</code></td>
                <td>Tamaño declarado del elemento</td>
                <td>Depende de <code>box-sizing</code></td>
                <td>En responsive suele combinarse con <code>max-width</code></td>
                <td>Definir anchos de componentes, contenedores</td>
              </tr>
              <tr>
                <td><code>padding</code></td>
                <td>Espacio interior (contenido → borde)</td>
                <td>Sí (si no usas border-box, suma)</td>
                <td>No colapsa; aumenta área clicable</td>
                <td>Botones, cards, formularios</td>
              </tr>
              <tr>
                <td><code>border</code></td>
                <td>Línea alrededor de la caja</td>
                <td>Sí (ocupa espacio)</td>
                <td>Útil para “ver” cajas al depurar</td>
                <td>Separación visual, estados, depuración</td>
              </tr>
              <tr>
                <td><code>margin</code></td>
                <td>Espacio exterior (separa cajas)</td>
                <td>No (no entra en width/height)</td>
                <td><strong>Colapsa</strong> verticalmente en bloque (a veces)</td>
                <td>Separar secciones y componentes</td>
              </tr>
              <tr>
                <td><code>box-sizing</code></td>
                <td>Modelo de cálculo</td>
                <td>Indirecto (decide qué incluye)</td>
                <td><code>border-box</code> simplifica layout</td>
                <td>Reset global y componentes</td>
              </tr>
              <tr>
                <td><code>gap</code></td>
                <td>Espacio entre hijos en flex/grid</td>
                <td>No “engorda” items; separa</td>
                <td>No colapsa; no crea cajas extra</td>
                <td>Listas, toolbars, grids de cards</td>
              </tr>
              <tr>
                <td><code>min-width</code> / <code>max-width</code></td>
                <td>Rangos de ancho</td>
                <td>Sí (limitan el tamaño final)</td>
                <td>Evitan colapso / exceso de ancho</td>
                <td>Legibilidad, cards, layouts fluidos</td>
              </tr>
              <tr>
                <td><code>overflow</code></td>
                <td>Qué pasa si se desborda</td>
                <td>No, pero cambia scroll/recorte</td>
                <td><code>auto</code> y <code>hidden</code> son frecuentes</td>
                <td>Paneles, tablas, recortes</td>
              </tr>
              <tr>
                <td><code>display</code></td>
                <td>Cómo participa en el layout</td>
                <td>Indirecto</td>
                <td>Flex/Grid cambian el juego (gap, colapso, alineación)</td>
                <td>Base para Flex/Grid</td>
              </tr>
              <tr>
                <td><code>position</code></td>
                <td>Posicionamiento respecto al flujo</td>
                <td>Indirecto</td>
                <td><code>absolute</code> saca del flujo; puede provocar solapes</td>
                <td>UI fija, badges, overlays</td>
              </tr>
              <tr>
                <td><code>outline</code></td>
                <td>Contorno (no ocupa espacio)</td>
                <td>No</td>
                <td>No altera tamaño; ideal para foco accesible</td>
                <td>Accesibilidad (focus visible)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="callout tip">
          Técnica rápida de depuración: añade <code>outline: 2px solid</code> temporalmente
          para ver cajas sin modificar el layout (a diferencia de <code>border</code>).
        </div>
      </section>
<section class="card" id="box-model-ejemplo">
 
  <details class="dd dd-nested">

  <summary>Ejemplo visual del Box Model (content, padding, border y margin)</summary>

  <p>
    Para entender de verdad el <strong>Box Model</strong>, no basta con la teoría:
    hay que <strong>ver</strong> cómo se comportan las cajas.
    En este ejemplo vamos a trabajar con <strong>cajas dentro de cajas</strong>,
    usando colores para distinguir cada parte.
  </p>

  <div class="callout tip">
    Recuerda:
    <strong>content</strong> es lo que define el <code>width</code>,
    <strong>padding</strong> crea espacio interior,
    <strong>border</strong> marca el límite,
    <strong>margin</strong> separa unas cajas de otras.
  </div>

  <h3>HTML del ejemplo</h3>
  <p>
    Tenemos una <strong>caja exterior</strong> que contiene dos
    <strong>cajas interiores</strong>.
  </p>

  <pre><code>{`<div class="caja-externa">
  Caja exterior

  <div class="caja-interna">
    Caja interna 1
  </div>

  <div class="caja-interna">
    Caja interna 2
  </div>
</div>`}</code></pre>

  <h3>CSS del ejemplo</h3>
  <p>
    Usamos colores y comentarios para identificar visualmente
    cada parte del modelo de caja.
  </p>

  <pre><code>{`/* Modelo de caja por defecto */
*{
  box-sizing: content-box;
}

/* =========================
   CAJA EXTERIOR
   ========================= */
.caja-externa{
  width: 400px;                 /* CONTENT */
  background-color: #d0ebff;    /* azul: content */

  padding: 20px;                /* espacio INTERIOR */
  border: 6px solid #1c7ed6;    /* borde */
  margin: 40px;                 /* espacio EXTERIOR */

  color: #033;
}

/* =========================
   CAJAS INTERIORES
   ========================= */
.caja-interna{
  width: 200px;                 /* CONTENT */
  background-color: #ffd8a8;    /* naranja: content */

  padding: 16px;                /* aire interior */
  border: 4px solid #e8590c;    /* borde */
  margin: 20px 0;               /* separación entre cajas */

  color: #4a2c00;
}`}</code></pre>

  <h3>Qué debe observar el alumno</h3>
  <ul>
    <li>
      El <strong>width</strong> solo afecta al <strong>content</strong>,
      no incluye ni padding ni border.
    </li>
    <li>
      El <strong>padding</strong> empuja el contenido hacia dentro y
      <strong>sí tiene color de fondo</strong>.
    </li>
    <li>
      El <strong>border</strong> rodea al contenido y al padding,
      marcando el límite visible de la caja.
    </li>
    <li>
      El <strong>margin</strong> crea espacio alrededor de la caja,
      pero <strong>no tiene color</strong>.
    </li>
  </ul>

  <div class="callout warn">
    Error típico: pensar que <code>width</code> es el tamaño total de la caja.
    En <code>content-box</code>, el tamaño final es:
    content + padding + border.
  </div>

  <h3>Prueba y experimenta</h3>
  <p>
    Modifica el CSS y observa qué ocurre:
  </p>
  <ol>
    <li>Quita el <code>padding</code> y observa cómo el texto toca el borde.</li>
    <li>Aumenta el <code>border</code> y fíjate en el tamaño visual.</li>
    <li>Pon <code>margin: 0</code> y observa cómo las cajas se pegan.</li>
    <li>Cambia el <code>width</code> y comprueba qué parte se ve afectada.</li>
  </ol>

  <div class="callout">
    Dominar el Box Model es imprescindible antes de aprender
    <strong>Flexbox</strong>, <strong>Grid</strong> o <strong>position</strong>.
    Todo el layout moderno se apoya en estos conceptos.
  </div>
  <p>
  Una vez entendido este ejemplo, realiza una pequeña modificación clave:
  añade la propiedad <code>box-sizing: border-box</code> a las cajas.
  Observa cómo, al hacerlo, el <code>width</code> pasa a representar
  <strong>el tamaño total de la caja</strong>, incluyendo el padding y el borde.
  Este cambio no altera la apariencia general, pero sí la forma en que el
  navegador calcula los tamaños, haciendo el diseño más predecible.
  En proyectos reales, este enfoque evita cálculos mentales y problemas de
  desbordamiento, por lo que es una práctica muy habitual en CSS moderno.
</p>
  </details>


</section>

      {/* ===== RETOS PRÁCTICOS ===== */}
      <section className="doc-section" id="retos-practicos">
        <h2>7) 🎮 Retos prácticos: de principiante a experto</h2>

        <div className="callout">
          🔥 <strong>Desafío progresivo:</strong> Cada reto construye sobre el anterior. 
          ¡No mires las soluciones hasta intentarlo tú mismo!
        </div>

        {/* RETO 1 - NIVEL PRINCIPIANTE */}
        <details className="dd">
          <summary>🟢 RETO 1 - Principiante: Predice el tamaño sin calcular</summary>
          <div className="dd-body">
            <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #22c55e' }}>
              <h4 style={{ marginTop: 0, color: '#166534' }}>🎯 Tu misión:</h4>
              <p style={{ color: '#166534', marginBottom: 0 }}>
                Sin usar calculadora ni DevTools, predice el ancho total visible de cada caja:
              </p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr 1fr', marginBottom: '1.5rem' }}>
              <div>
                <h5>Caja A (content-box):</h5>
                <pre style={{ fontSize: '0.85rem' }}>
                  <code>{`.caja-a {
  width: 200px;
  padding: 15px;
  border: 3px solid blue;
  box-sizing: content-box;
}`}</code>
                </pre>
              </div>
              
              <div>
                <h5>Caja B (border-box):</h5>
                <pre style={{ fontSize: '0.85rem' }}>
                  <code>{`.caja-b {
  width: 200px;
  padding: 15px;
  border: 3px solid red;
  box-sizing: border-box;
}`}</code>
                </pre>
              </div>
            </div>

            <details className="dd dd-nested">
              <summary>💡 Ver solución y explicación</summary>
              <div className="dd-body">
                <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
                  <div style={{ padding: '1rem', backgroundColor: '#dbeafe', borderRadius: '0.5rem' }}>
                    <h6 style={{ marginTop: 0, color: '#1d4ed8' }}>Caja A - content-box:</h6>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#1e40af' }}>
                      200px (content) + 30px (padding) + 6px (border) = <strong>236px</strong>
                    </p>
                  </div>
                  <div style={{ padding: '1rem', backgroundColor: '#fee2e2', borderRadius: '0.5rem' }}>
                    <h6 style={{ marginTop: 0, color: '#dc2626' }}>Caja B - border-box:</h6>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#b91c1c' }}>
                      200px total (padding y border incluidos) = <strong>200px</strong>
                    </p>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </details>

        {/* RETO 2 - NIVEL INTERMEDIO */}
        <details className="dd">
          <summary>🟡 RETO 2 - Intermedio: Margin collapse en acción</summary>
          <div className="dd-body">
            <div style={{ backgroundColor: '#fffbeb', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #f59e0b' }}>
              <h4 style={{ marginTop: 0, color: '#92400e' }}>🎯 Tu misión:</h4>
              <p style={{ color: '#92400e', marginBottom: 0 }}>
                Crea esta estructura HTML y predice la separación vertical entre las cajas:
              </p>
            </div>

            <pre style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              <code>{`<div class="container">
  <div class="caja primera">Caja 1</div>
  <div class="caja segunda">Caja 2</div>
  <div class="caja tercera">Caja 3</div>
</div>`}</code>
            </pre>

            <pre style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              <code>{`.primera { margin-bottom: 40px; }
.segunda { 
  margin-top: 25px; 
  margin-bottom: 60px; 
}
.tercera { margin-top: 30px; }`}</code>
            </pre>

            <p><strong>Pregunta:</strong> ¿Cuál es la separación entre cada par de cajas?</p>

            <details className="dd dd-nested">
              <summary>💡 Ver solución paso a paso</summary>
              <div className="dd-body">
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
                    <h6 style={{ marginTop: 0 }}>Entre Caja 1 y Caja 2:</h6>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>
                      margin-bottom: 40px vs margin-top: 25px → <strong>40px</strong> (gana el mayor)
                    </p>
                  </div>
                  <div style={{ padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
                    <h6 style={{ marginTop: 0 }}>Entre Caja 2 y Caja 3:</h6>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>
                      margin-bottom: 60px vs margin-top: 30px → <strong>60px</strong> (gana el mayor)
                    </p>
                  </div>
                </div>
                
                <div className="callout tip" style={{ marginTop: '1rem' }}>
                  <strong>🧠 Concepto clave:</strong> Los márgenes verticales adyacentes se "colapsan" 
                  y el resultado es el mayor de los dos, no la suma.
                </div>
              </div>
            </details>
          </div>
        </details>

        {/* RETO 3 - NIVEL AVANZADO */}
        <details className="dd">
          <summary>🔴 RETO 3 - Avanzado: Diseña un sistema de cards responsivo</summary>
          <div className="dd-body">
            <div style={{ backgroundColor: '#fef2f2', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #dc2626' }}>
              <h4 style={{ marginTop: 0, color: '#991b1b' }}>🎯 Tu misión:</h4>
              <p style={{ color: '#991b1b', marginBottom: 0 }}>
                Crea un sistema de tarjetas que funcione perfectamente en móvil y desktop, 
                usando todos los conceptos del Box Model:
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h5>📋 Requisitos técnicos:</h5>
              <ul>
                <li>✅ Usar <code>border-box</code> para cálculos predecibles</li>
                <li>✅ Imágenes que nunca se salgan del contenedor</li>
                <li>✅ Separación consistente con <code>gap</code> (no margin)</li>
                <li>✅ Contenido que maneje overflow correctamente</li>
                <li>✅ Al menos 3 cards que se adapten al espacio disponible</li>
              </ul>
            </div>

            <details className="dd dd-nested">
              <summary>💡 Ver solución profesional comentada</summary>
              <div className="dd-body">
                <h6>HTML estructura:</h6>
                <pre style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
                  <code>{`<div class="cards-container">
  <article class="card">
    <img src="imagen1.jpg" alt="Descripción" class="card-image">
    <div class="card-content">
      <h3 class="card-title">Título de la tarjeta</h3>
      <p class="card-description">Descripción que puede ser larga...</p>
      <button class="card-button">Leer más</button>
    </div>
  </article>
  <!-- Repetir para más cards -->
</div>`}</code>
                </pre>

                <h6>CSS solución:</h6>
                <pre style={{ fontSize: '0.8rem' }}>
                  <code>{`/* Reset global recomendado */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Container de las cards */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem; /* Separación limpia sin margin collapse */
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Card individual */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Evita que contenido se salga */
  display: flex;
  flex-direction: column;
}

/* Imagen responsive */
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover; /* Mantiene proporción */
  display: block; /* Elimina espacio inferior */
}

/* Contenido interno */
.card-content {
  padding: 1.5rem;
  flex: 1; /* Ocupa espacio disponible */
  display: flex;
  flex-direction: column;
}

/* Título */
.card-title {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  line-height: 1.3;
}

/* Descripción con overflow controlado */
.card-description {
  margin: 0 0 1.5rem 0;
  flex: 1; /* Crece para empujar botón abajo */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

/* Botón */
.card-button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  align-self: flex-start; /* No ocupa ancho completo */
  transition: background 0.2s;
}

.card-button:hover {
  background: #2563eb;
}`}</code>
                </pre>

                <div className="callout tip">
                  <strong>🏆 Conceptos aplicados:</strong>
                  <ul style={{ marginBottom: 0 }}>
                    <li><strong>border-box:</strong> Tamaños predecibles</li>
                    <li><strong>gap:</strong> Separación limpia sin colapsos</li>
                    <li><strong>overflow: hidden:</strong> Control de contenido</li>
                    <li><strong>max-width:</strong> Imágenes responsivas</li>
                    <li><strong>object-fit:</strong> Proporción de imágenes</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </details>

        <div className="callout" style={{ marginTop: '2rem' }}>
          🎯 <strong>Siguiente paso:</strong> Practica estos retos en tu editor. 
          El dominio del Box Model es la diferencia entre "hacer que funcione" y 
          <strong>"hacer que funcione de forma predecible"</strong>.
        </div>
      </section>

      {/* ===== 8) Ejercicios ===== */}
      <section className="doc-section" id="ejercicios">
        <h2>8) Ejercicios adicionales: del concepto al control real</h2>

        <details className="dd" open>
          <summary>Ejercicio 1 · Calcula el tamaño total (sin mirar)</summary>
          <div className="dd-body">
            <p>
              Sin ejecutar nada, calcula el ancho total visible de cada caja:
            </p>
            <pre>
              <code>{`.a{
  width: 240px;
  padding: 16px;
  border: 4px solid #000;
  box-sizing: content-box;
}

.b{
  width: 240px;
  padding: 16px;
  border: 4px solid #000;
  box-sizing: border-box;
}`}</code>
            </pre>
            <ul>
              <li>
                ¿Cuál es el ancho total de <code>.a</code>?
              </li>
              <li>
                ¿Cuál es el ancho total de <code>.b</code>?
              </li>
              <li>
                Explica qué cambia (con una frase técnica).
              </li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>Ejercicio 2 · Margin collapse (provócalo y elimínalo)</summary>
          <div className="dd-body">
            <p>
              Crea dos <code>&lt;div&gt;</code> apilados. Pon a uno{" "}
              <code>margin-bottom: 40px</code> y al otro{" "}
              <code>margin-top: 30px</code>. Observa la separación real.
            </p>
            <ul>
              <li>
                Luego evita el colapso de 2 formas distintas:
                <ol>
                  <li>Añadiendo <code>padding</code> o <code>border</code> a un contenedor padre.</li>
                  <li>Convirtiendo el padre en <code>display: flex</code> (columna) o <code>display: grid</code>.</li>
                </ol>
              </li>
              <li>Escribe cuál método te parece más “limpio” y por qué.</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>Ejercicio 3 · Gap vs margin (misma estética, distinto control)</summary>
          <div className="dd-body">
            <p>
              Crea una lista horizontal de 4 botones. Primero sepáralos con{" "}
              <code>margin-right</code>. Después repite usando un contenedor{" "}
              <code>display:flex</code> + <code>gap</code>.
            </p>
            <ul>
              <li>¿Qué método se adapta mejor si cambias el orden de los botones?</li>
              <li>¿Cuál evita “márgenes sobrantes” en el último elemento?</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>Ejercicio 4 · Overflow controlado (scroll solo cuando toca)</summary>
          <div className="dd-body">
            <p>
              Crea una caja de altura fija (<code>height: 140px</code>) y mete un texto
              largo o una lista de 20 elementos.
            </p>
            <ul>
              <li>Prueba <code>overflow: visible</code>, <code>hidden</code>, <code>scroll</code>, <code>auto</code>.</li>
              <li>Describe una situación real donde cada valor tenga sentido.</li>
            </ul>
          </div>
        </details>
      </section>

      {/* ===== 9) Test ===== */}
      <section className="doc-section" id="test">
        <h2>9) Test de repaso (con corrección y feedback)</h2>

        <p>
          Responde y corrige al final. El objetivo no es memorizar: es poder{" "}
          <strong>predecir</strong> el comportamiento del navegador.
        </p>

        <form onSubmit={handleSubmit}>
          {test.map((q, idx) => {
            const chosen = answers[q.id];
            const isCorrect = submitted && chosen === q.correct;
            const isWrong = submitted && chosen && chosen !== q.correct;

            return (
              <div className="card" key={q.id} style={{ marginTop: "1rem" }}>
                <h3 style={{ marginTop: 0 }}>
                  {idx + 1}. {q.question}
                </h3>

                <div className="test-question" role="group" aria-label={`Pregunta ${idx + 1}`}>
                  {q.options.map((opt) => (
                    <label key={opt}>
                      <input
                        type="radio"
                        name={q.id}
                        value={opt}
                        checked={chosen === opt}
                        onChange={() => handleChoose(q.id, opt)}
                        disabled={submitted}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>

                {submitted && (
                  <div className={`callout ${isCorrect ? "tip" : "warn"}`}>
                    {isCorrect && (
                      <>
                        ✅ Correcta. <strong>{q.explain}</strong>
                      </>
                    )}
                    {isWrong && (
                      <>
                        ❌ Incorrecta. La respuesta correcta es{" "}
                        <strong>{q.correct}</strong>. {q.explain}
                      </>
                    )}
                    {submitted && !chosen && (
                      <>
                        ⚠️ Sin responder. La respuesta correcta es{" "}
                        <strong>{q.correct}</strong>. {q.explain}
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
                  Resultado: {score}/{test.length}
                </div>
                <button className="btn" type="button" onClick={handleReset}>
                  Reintentar
                </button>
              </>
            )}
          </div>

          {submitted && (
            <div className="callout tip" style={{ marginTop: "1rem" }}>
              Siguiente paso natural (cuando esto esté claro):{" "}
              <strong>Flexbox</strong> y <strong>Grid</strong> dejan de ser “propiedades”
              y pasan a ser “herramientas controladas”, porque ya sabes cómo se calculan
              las cajas y sus separaciones.
            </div>
          )}
        </form>
        
        <div className="callout" style={{ marginTop: "2rem", backgroundColor: '#f0f9ff', border: '2px solid #3b82f6', padding: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#1e40af' }}>🎯 ¡Felicitaciones! Has completado el Box Model</h3>
          <p style={{ color: '#1e40af', marginBottom: '1rem' }}>
            Acabas de dominar uno de los conceptos más importantes del CSS. Ahora entiendes:
          </p>
          <ul style={{ color: '#1e40af', marginBottom: '1.5rem' }}>
            <li>✅ Por qué los elementos ocupan el espacio que ocupan</li>
            <li>✅ Cómo predecir el tamaño final de cualquier elemento</li>
            <li>✅ La diferencia entre content-box y border-box</li>
            <li>✅ Cómo controlar el espaciado de forma inteligente</li>
            <li>✅ Cuándo usar margin, padding o gap</li>
          </ul>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <strong style={{ color: '#1d4ed8' }}>🚀 Próximos pasos recomendados:</strong>
            <ol style={{ color: '#1e40af', marginBottom: 0, marginTop: '0.5rem' }}>
              <li><strong>Flexbox:</strong> Ahora que dominas las cajas, aprende a alinearlas</li>
              <li><strong>Grid:</strong> Crea layouts bidimensionales con confianza</li>
              <li><strong>Position:</strong> Controla elementos fuera del flujo normal</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
