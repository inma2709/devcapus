import { useEffect, useMemo, useState } from "react";

export default function PseudoelementosCSS() {
  useEffect(() => {
    document.title = "CSS · Pseudoelementos";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "¿Para qué se usa principalmente ::before y ::after?", options: ["Para añadir atributos HTML desde CSS", "Para añadir decoración o contenido visual sin modificar el HTML", "Para crear elementos interactivos solo con CSS", "Para seleccionar el primer y último hijo"], correct: "Para añadir decoración o contenido visual sin modificar el HTML", why: "::before y ::after generan un elemento virtual antes/después del contenido. Útiles para iconos decorativos, comillas, flechas u overlays." },
    { id: "q2", q: "¿Qué propiedad es imprescindible en ::before y ::after?", options: ["display: block", "z-index: 1", "content (aunque sea content: '')", "position: absolute"], correct: "content (aunque sea content: '')", why: "Sin content, el pseudoelemento no existe en el DOM renderizado. Con content: '' aparece sin texto pero puede tener dimensiones y estilos." },
    { id: "q3", q: "¿Cómo se posiciona un ::before como capa overlay sobre su padre?", options: ["Solo con display: block", "Con position: absolute en ::before y position: relative en el padre", "Con float: left en ::before", "Con top: 0 sin más ajustes"], correct: "Con position: absolute en ::before y position: relative en el padre", why: "Para que ::before cubra todo el padre: position:relative en el padre, position:absolute + inset:0 en ::before." },
    { id: "q4", q: "¿Puede ::before ser visible sin texto en content?", options: ["No, siempre necesita texto", "Sí, con content: '' y width/height o background definidos", "Solo si tiene display: block", "Solo en Chrome"], correct: "Sí, con content: '' y width/height o background definidos", why: "content: '' es la forma estándar para pseudoelementos puramente decorativos. Con un background y dimensiones se convierten en formas visuales." },
    { id: "q5", q: "¿Qué pseudoelemento selecciona la primera letra de un párrafo?", options: ["::first-child", "::first-letter", "::first-line", "::before"], correct: "::first-letter", why: "::first-letter selecciona el primer carácter de un bloque de texto. Muy usado en tipografía editorial para capitulares (drop caps)." },
  ], []);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = useMemo(() => questions.filter((q) => answers[q.id] === q.correct).length, [answers, questions]);
  const choose = (id, opt) => setAnswers((p) => ({ ...p, [id]: opt }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <main className="doc" id="contenido">
      {/* =========================
          INTRODUCCIÓN
      ========================== */}
      <section className="card">
        <h1>CSS · Pseudoelementos</h1>

        <p>
          Los <strong>pseudoelementos</strong> permiten aplicar estilos a
          <strong> partes concretas de un elemento</strong>, o incluso
          <strong> crear contenido visual</strong> que no existe en el HTML,
          usando solo CSS.
        </p>

        <div className="callout tip">
          Idea clave: un pseudoelemento no describe un estado,
          describe <strong>una parte del elemento</strong>.
        </div>

        <div className="callout info" style={{ marginTop: '1rem', backgroundColor: '#f0f9ff', borderColor: '#0ea5e9' }}>
          <strong>🎯 Para principiantes:</strong> Si las pseudoclases eran "sensores", los pseudoelementos son como "pinceles mágicos" 
          que pueden pintar o añadir cosas a partes específicas de tus elementos sin tocar el HTML. 
          ¿Quieres una estrella antes del título? ¿La primera letra más grande? ¿Un decorado después del párrafo? 
          Los pseudoelementos lo hacen posible.
        </div>

        <div style={{ marginTop: '1.5rem', backgroundColor: '#fef7ff', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #c084fc' }}>
          <h3 style={{ marginTop: 0, color: '#7c3aed' }}>🎨 Analogía del mundo real</h3>
          <p style={{ margin: '0.8rem 0' }}>
            Imagina que tienes un libro y quieres decorarlo:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: '#6b21a8' }}>
            <li><strong>Letra capital decorada</strong> al inicio del capítulo (como <code>::first-letter</code>)</li>
            <li><strong>Viñeta bonita</strong> antes de cada párrafo (como <code>::before</code>)</li>
            <li><strong>Decorado elegante</strong> al final de cada sección (como <code>::after</code>)</li>
            <li><strong>Resaltado especial</strong> cuando seleccionas texto (como <code>::selection</code>)</li>
          </ul>
          <p style={{ margin: '0.8rem 0 0 0', fontStyle: 'italic' }}>
            Los pseudoelementos funcionan igual: <strong>decoran y añaden detalles sin cambiar el contenido original</strong>.
          </p>
        </div>
      </section>

      {/* =========================
          QUÉ ES UN PSEUDOELEMENTO
      ========================== */}
      <section className="card">
        <h2>¿Qué es un pseudoelemento?</h2>

        <p>
          Un pseudoelemento es una palabra clave que se añade a un selector
          mediante <code>::</code> y que permite seleccionar:
        </p>

        <ul>
          <li>una parte específica del contenido</li>
          <li>una zona “virtual” antes o después del elemento</li>
          <li>un fragmento interno que no existe como etiqueta</li>
        </ul>

        <pre>
          <code>{`p::first-line{
  font-weight: bold;
}`}</code>
        </pre>

        <div className="callout">
          CSS actúa como si esa parte del elemento fuera seleccionable,
          aunque no exista como nodo HTML.
        </div>
      </section>

      {/* =========================
          DIFERENCIAS CLAVE
      ========================== */}
      <section className="card">
        <h2>Diferencias importantes</h2>

        <details className="dd" open>
          <summary>1) Pseudoelementos vs pseudoclases</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Pseudoclases</strong> → estado del elemento
                (<code>:hover</code>, <code>:focus</code>)
              </li>
              <li>
                <strong>Pseudoelementos</strong> → parte del elemento
                (<code>::before</code>, <code>::after</code>)
              </li>
            </ul>

            <pre>
              <code>{`/* pseudoclase */
a:hover{}

/* pseudoelemento */
a::after{}`}</code>
            </pre>

            <div className="callout warn">
              Regla visual: <strong>:</strong> estado · <strong>::</strong> parte del elemento
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2) ¿Por qué no son selectores normales?</summary>
          <div className="dd-body">
            <p>
              Un selector normal apunta a un elemento real del HTML.
              Un pseudoelemento apunta a algo que <strong>no existe como etiqueta</strong>.
            </p>

            <div className="callout">
              No puedes añadir un pseudoelemento en el HTML,
              solo existe desde CSS.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          DOCUMENTACIÓN + VIDEO
      ========================== */}
      <section className="card">
        <h2>Documentación y vídeo</h2>

        <div className="doc-link-card">
          <a
            href="https://www.w3schools.com/cssref/css_ref_pseudo_elements.php"
            target="_blank"
            rel="noreferrer"
          >
            W3Schools · CSS Pseudo-elements Reference
          </a>
          <p className="doc-link-card__desc">
            Referencia completa de pseudoelementos con ejemplos claros.
            Útil como chuleta mientras practicas.
          </p>
        </div>

        <div className="callout tip">
          En este vídeo se explican los pseudoelementos más importantes,
          especialmente <code>::before</code> y <code>::after</code>.
        </div>

        {/* VIDEO EMBEBIDO */}
        <div className="media" style={{ maxWidth: 900 }}>
          <iframe
            width="900"
            height="506"
            src="https://www.youtube.com/embed/zGiirUiWslI"
            title="CSS Pseudoelementos: before y after"
            frameBorder="0"
            loading="lazy"
            allowFullScreen
            style={{ borderRadius: "0.75rem", width: "100%" }}
          />
        </div>
      </section>

      {/* =========================
          PSEUDOELEMENTOS MÁS USADOS
      ========================== */}
      <section className="card">
        <h2>Pseudoelementos más usados (los imprescindibles)</h2>

        {/* NUEVA SECCIÓN: CATEGORÍAS VISUALES */}
        <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          
          <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #22c55e' }}>
            <h3 style={{ marginTop: 0, color: '#166534' }}>🎨 Creadores de contenido</h3>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#15803d' }}>::before</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Añadir algo ANTES del contenido"</p>
                <code style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>.icon::before {'{ content: "★"; }'}</code>
              </div>
              <div>
                <h4 style={{ marginTop: 0, color: '#15803d' }}>::after</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Añadir algo DESPUÉS del contenido"</p>
                <code style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>.link::after {'{ content: " →"; }'}</code>
              </div>
            </div>
            <div className="callout tip" style={{ marginTop: '1rem', fontSize: '0.9em' }}>
              <strong>⚠️ Regla de oro:</strong> Sin <code>content</code> no aparecen. Siempre pon <code>content: "";</code> aunque esté vacío.
            </div>
          </div>

          <div style={{ backgroundColor: '#fefce8', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #facc15' }}>
            <h3 style={{ marginTop: 0, color: '#ca8a04' }}>📝 Modificadores de texto</h3>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#a16207' }}>::first-letter</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Solo la primera letra"</p>
                <code style={{ backgroundColor: '#fef3c7', color: '#a16207', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>p::first-letter {'{ font-size: 3em; }'}</code>
              </div>
              <div>
                <h4 style={{ marginTop: 0, color: '#a16207' }}>::first-line</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Solo la primera línea visible"</p>
                <code style={{ backgroundColor: '#fef3c7', color: '#a16207', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>p::first-line {'{ font-weight: bold; }'}</code>
              </div>
            </div>
            <div className="callout warn" style={{ marginTop: '1rem', fontSize: '0.9em' }}>
              <strong>📊 Importante:</strong> <code>::first-line</code> cambia según el ancho de pantalla. Es dinámico.
            </div>
          </div>

          <div style={{ backgroundColor: '#fef2f2', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #fca5a5' }}>
            <h3 style={{ marginTop: 0, color: '#dc2626' }}>🎨 Interacción visual</h3>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#b91c1c' }}>::selection</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"Cuando el usuario selecciona texto"</p>
                <code style={{ backgroundColor: '#fecaca', color: '#b91c1c', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>::selection {'{ background: yellow; }'}</code>
              </div>
              <div>
                <h4 style={{ marginTop: 0, color: '#b91c1c' }}>::placeholder</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9em' }}>"El texto placeholder de inputs"</p>
                <code style={{ backgroundColor: '#fecaca', color: '#b91c1c', padding: '0.25rem', borderRadius: '0.3rem', fontSize: '0.8em' }}>input::placeholder {'{ color: gray; }'}</code>
              </div>
            </div>
          </div>
        </div>

        {/* CASOS DE USO PROFESIONALES */}
        <div style={{ marginTop: '2rem', backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #0ea5e9' }}>
          <h3 style={{ marginTop: 0, color: '#0c4a6e' }}>🏆 Casos de uso profesionales</h3>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div>
              <h4 style={{ marginTop: 0, color: '#075985' }}>Iconos sin HTML extra</h4>
              <pre style={{ backgroundColor: '#1e1b4b', color: '#e0e7ff', padding: '0.8rem', borderRadius: '0.5rem', fontSize: '0.8em' }}>
                <code>{`.email::before {
  content: "📧 ";
}

.pdf::after {
  content: " 📄";
}`}</code>
              </pre>
            </div>
            
            <div>
              <h4 style={{ marginTop: 0, color: '#075985' }}>Efectos tipográficos</h4>
              <pre style={{ backgroundColor: '#1e1b4b', color: '#e0e7ff', padding: '0.8rem', borderRadius: '0.5rem', fontSize: '0.8em' }}>
                <code>{`.article::first-letter {
  float: left;
  font-size: 4em;
  line-height: 0.8;
}`}</code>
              </pre>
            </div>
          </div>
          
          <div className="callout tip" style={{ marginTop: '1rem' }}>
            <strong>💡 Ventaja principal:</strong> Añades elementos visuales sin ensuciar el HTML. 
            El contenido sigue siendo limpio y semántico.
          </div>
        </div>

      </section>

      {/* =========================
          BUENAS PRÁCTICAS
      ========================== */}
      <section className="card">
        <h2>Buenas prácticas con pseudoelementos</h2>

        <ul>
          <li>Úsalos para <strong>decoración</strong>, no para contenido importante</li>
          <li>No sustituyen al HTML semántico</li>
          <li>Perfectos para iconos, separadores y detalles visuales</li>
        </ul>

        <div className="callout warn">
          No pongas información esencial solo en <code>::before</code> o
          <code>::after</code> (accesibilidad).
        </div>
      </section>
      {/* ========================================
    PRÁCTICA GUIADA · PSEUDOELEMENTOS
========================================= */}
<section className="card">
  <h2>Práctica guiada: tu laboratorio de pseudoelementos</h2>

  <p>
    Copia este ejemplo en <strong>CodePen</strong> (HTML y CSS).
    No toques nada al principio: <strong>observa</strong> cómo CSS actúa
    sobre partes del contenido que no existen como etiquetas.
  </p>

  {/* NUEVA SECCIÓN: PREPARACIÓN METODOLÓGICA */}
  <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #38bdf8' }}>
    <h3 style={{ marginTop: 0, color: '#0c4a6e' }}>🚀 Estrategia: cómo dominar los pseudoelementos</h3>
    
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
      <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
        <h4 style={{ marginTop: 0, color: '#075985' }}>🔍 Paso 1: Observar lo invisible</h4>
        <p style={{ margin: 0, fontSize: '0.9em' }}>
          Mira el HTML: ¿ves estrellas o decorados? No están ahí. Pero aparecen en pantalla. 
          <strong>Eso es magia de pseudoelementos.</strong>
        </p>
      </div>
      
      <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
        <h4 style={{ marginTop: 0, color: '#075985' }}>⚡ Paso 2: Cambiar el ancho</h4>
        <p style={{ margin: 0, fontSize: '0.9em' }}>
          Redimensiona la ventana del navegador. ¿Ves cómo <code>::first-line</code> 
          cambia automáticamente? Es dinámico.
        </p>
      </div>
      
      <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
        <h4 style={{ marginTop: 0, color: '#075985' }}>🎨 Paso 3: Experimentar sin miedo</h4>
        <p style={{ margin: 0, fontSize: '0.9em' }}>
          Cambia <code>content</code>, colores, tamaños. Borra la propiedad <code>content</code> 
          de un ::before y mira qué pasa.
        </p>
      </div>
    </div>
    
    <div className="callout tip" style={{ marginTop: '1rem' }}>
      <strong>💡 Truco de debugging:</strong> En DevTools, los pseudoelementos aparecen como nodos 
      dentro del elemento que los contiene. Puedes hacer clic en ellos e inspeccionar sus estilos.
    </div>
  </div>

  <details className="dd" open>
    <summary>HTML (copiar y pegar)</summary>
    <div className="dd-body">
      <pre>
        <code>{`<main class="demo">
  <h1>Pseudoelementos en CSS</h1>

  <section class="box">
    <h2 class="title">Título con before y after</h2>
    <p class="intro">
      Este párrafo sirve para probar first-letter y first-line.
      Ajusta el ancho de la pantalla para ver cómo cambia la primera línea.
    </p>
  </section>

  <section class="box">
    <p class="text">
      Selecciona este texto con el ratón para ver el pseudoelemento selection.
    </p>
  </section>
</main>`}</code>
      </pre>
    </div>
  </details>

  <details className="dd">
    <summary>CSS (copiar y pegar)</summary>
    <div className="dd-body">
      <pre>
        <code>{`/* ESTILO BASE */
body{
  font-family: system-ui, sans-serif;
  background: #f8fafc;
}

.demo{
  max-width: 720px;
  margin: 2rem auto;
}

.box{
  background: white;
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}

/* ======================
   ::before y ::after
====================== */

.title::before{
  content: "★ ";
  color: #f59e0b;
}

.title::after{
  content: " ★";
  color: #f59e0b;
}

/* ======================
   ::first-letter
====================== */

.intro::first-letter{
  font-size: 2.5rem;
  font-weight: bold;
  color: #2563eb;
}

/* ======================
   ::first-line
====================== */

.intro::first-line{
  text-transform: uppercase;
}

/* ======================
   ::selection
====================== */

::selection{
  background: #fde047;
  color: #1f2937;
}`}</code>
      </pre>
    </div>
  </details>

  <div className="callout tip">
    Prueba esto: cambia el tamaño de la ventana, selecciona texto con el ratón
    y observa qué parte del contenido cambia.
  </div>

  <details className="dd">
    <summary>Retos progresivos - ¡Hazlos en orden!</summary>
    <div className="dd-body">
      
      <div style={{ backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #fbbf24' }}>
        <h4 style={{ marginTop: 0, color: '#92400e' }}>🎯 Retos básicos (entender cada pseudoelemento)</h4>
        <ol style={{ paddingLeft: '1.2rem' }}>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Experimentar con content:</strong> Cambia el símbolo del <code>::before</code> por estos: "🎯", "▶", "•". 
            ¿Cuál te gusta más?
            <em style={{ display: 'block', color: '#7c2d12', fontSize: '0.9em', marginTop: '0.3rem' }}>
              💡 Puedes usar emojis, símbolos Unicode, o texto normal
            </em>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Colores independientes:</strong> Haz que el <code>::after</code> tenga un color completamente diferente al <code>::before</code>. 
            Prueba con colores que contrasten.
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Tamaño de first-letter:</strong> Ajusta el <code>::first-letter</code> para que sea más grande o más pequeño. 
            Prueba valores desde <code>1.5em</code> hasta <code>4em</code>.
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Experimento de visibilidad:</strong> Quita el <code>::first-line</code> (comenta la regla) y observa qué desaparece. 
            ¿Entiendes la diferencia con <code>::first-letter</code>?
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Selection personalizado:</strong> Cambia los colores del <code>::selection</code> por una combinación tuya: 
            fondo morado y texto blanco, por ejemplo.
          </li>
        </ol>
      </div>

      <div style={{ backgroundColor: '#f3e8ff', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #a855f7' }}>
        <h4 style={{ marginTop: 0, color: '#6b21a8' }}>🔥 Retos intermedios (combinaciones y casos reales)</h4>
        <ol start="6" style={{ paddingLeft: '1.2rem' }}>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Iconos temáticos:</strong> Crea estas reglas nuevas:
            <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li><code>.warning::before</code> con "⚠️" y color amarillo</li>
              <li><code>.success::after</code> con "✅" y color verde</li>
              <li><code>.info::before</code> con "ℹ️" y color azul</li>
            </ul>
            Luego añade estas clases a párrafos en el HTML.
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Drop cap profesional:</strong> Mejora el <code>::first-letter</code>:
            <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>Hazlo flotar a la izquierda: <code>float: left;</code></li>
              <li>Ajusta la altura de línea: <code>line-height: 0.8;</code></li>
              <li>Añade un margin-right: <code>margin-right: 8px;</code></li>
            </ul>
            <em style={{ display: 'block', color: '#7c2d12', fontSize: '0.9em', marginTop: '0.3rem' }}>
              💡 Esto crea el efecto "letra capital" de revistas
            </em>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Enlaces con indicadores:</strong> Añade nuevos enlaces al HTML y crea reglas:
            <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>Enlaces externos: <code>a[href^="http"]::after {'{ content: " ↗"; }'}</code></li>
              <li>Enlaces a PDFs: <code>a[href$=".pdf"]::after {'{ content: " 📄"; }'}</code></li>
              <li>Enlaces de email: <code>a[href^="mailto"]::before {'{ content: "📧 "; }'}</code></li>
            </ul>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Contenido vacío útil:</strong> Crea elementos decorativos usando <code>content: "";</code> (vacío) pero añádeles:
            <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>Fondo de color: <code>background: red;</code></li>
              <li>Tamaño: <code>width: 20px; height: 20px;</code></li>
              <li>Display: <code>display: inline-block;</code></li>
            </ul>
          </li>
        </ol>
      </div>

      <div style={{ backgroundColor: '#fde2e8', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem', border: '1px solid #f43f5e' }}>
        <h4 style={{ marginTop: 0, color: '#be123c' }}>⚡ Retos avanzados (para expertos)</h4>
        <ol start="10" style={{ paddingLeft: '1.2rem' }}>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Sistema de etiquetas:</strong> Crea un sistema completo donde:
            <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>Los elementos con clase <code>.new</code> tengan "NUEVO" antes</li>
              <li>Los elementos con clase <code>.hot</code> tengan "🔥 HOT" después</li>
              <li>Los elementos con clase <code>.sale</code> tengan "💰 OFERTA" antes y después</li>
            </ul>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Tooltip puro CSS:</strong> Usando <code>::after</code> y posicionamiento:
            <pre style={{ backgroundColor: '#1e1b4b', color: '#e0e7ff', padding: '0.5rem', borderRadius: '0.3rem', fontSize: '0.8em', marginTop: '0.5rem' }}>
              <code>{`.tooltip {
  position: relative;
}

.tooltip::after {
  content: "Soy un tooltip";
  position: absolute;
  top: -30px;
  left: 0;
  background: black;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover::after {
  opacity: 1;
}`}</code>
            </pre>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Numeración automática:</strong> Usa CSS counters con pseudoelementos:
            <pre style={{ backgroundColor: '#1e1b4b', color: '#e0e7ff', padding: '0.5rem', borderRadius: '0.3rem', fontSize: '0.8em', marginTop: '0.5rem' }}>
              <code>{`.numbered-list {
  counter-reset: item;
}

.numbered-list li::before {
  counter-increment: item;
  content: counter(item) ". ";
  font-weight: bold;
}`}</code>
            </pre>
          </li>
        </ol>
      </div>

      <div className="callout tip">
        <strong>📚 Para tu ejercicio de repaso:</strong> Documenta cada pseudoelemento explicando QUÉ parte del elemento afecta. 
        Ejemplo: <code>{'/* h2::before - añade contenido ANTES del texto del h2 */'}</code>
      </div>

      <div className="callout warn">
        <strong>🏆 Desafío final:</strong> ¿Puedes crear una página que use SOLO pseudoelementos para todos los iconos y decorados? 
        Sin imágenes, sin SVG, solo <code>::before</code>, <code>::after</code> y caracteres especiales.
      </div>

      <div style={{ marginTop: '1.5rem', backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #22c55e' }}>
        <h4 style={{ marginTop: 0, color: '#166534' }}>✅ Lista de verificación de aprendizaje</h4>
        <p style={{ margin: '0.5rem 0', color: '#15803d' }}>Marca lo que ya dominas:</p>
        <ul style={{ paddingLeft: '1.2rem', color: '#166534' }}>
          <li>□ Entiendo que :: selecciona PARTES, no estados</li>
          <li>□ Sé usar content para crear contenido visual</li>
          <li>□ Puedo usar ::before y ::after para iconos</li>
          <li>□ Entiendo cómo ::first-line cambia con el ancho</li>
          <li>□ Uso ::selection para mejorar la experiencia</li>
          <li>□ Combino pseudoelementos con selectores avanzados</li>
          <li>□ Sé cuándo usar pseudoelementos vs HTML real</li>
          <li>□ Puedo crear decorados sin ensuciar el HTML</li>
        </ul>
      </div>
    </div>
  </details>

  <div className="callout">
    Si entiendes este ejemplo, ya entiendes los <strong>pseudoelementos fundamentales</strong>.
    Recuerda: <code>::</code> indica <em>parte del elemento</em>, no estado.
  </div>
</section>

{/* NUEVA SECCIÓN: ACTIVIDAD PRÁCTICA ESTRUCTURADA */}
<section className="card">
  <h2>🎯 Actividad práctica: Crea tu primera página con pseudoelementos</h2>

  <p>
    Ahora que entiendes los conceptos, vamos a crear algo más realista paso a paso.
    Esta actividad te ayudará a <strong>aplicar pseudoelementos en un contexto real</strong>.
  </p>

  {/* PREPARACIÓN DE LA ACTIVIDAD */}
  <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #22c55e' }}>
    <h3 style={{ marginTop: 0, color: '#166534' }}>🚀 Objetivo de la actividad</h3>
    <p style={{ margin: '0.8rem 0', color: '#15803d' }}>
      Crear una <strong>página de artículo de blog</strong> usando pseudoelementos para:
    </p>
    <ul style={{ paddingLeft: '1.5rem', color: '#15803d', marginBottom: '0.8rem' }}>
      <li>Iconos decorativos sin imágenes</li>
      <li>Efectos tipográficos profesionales</li>
      <li>Indicadores visuales inteligentes</li>
      <li>Experiencia de usuario mejorada</li>
    </ul>
    <div className="callout tip" style={{ fontSize: '0.9em' }}>
      <strong>🎨 Lo mejor:</strong> Todo el diseño visual se hará con CSS puro, 
      manteniendo el HTML limpio y semántico.
    </div>
  </div>

  <details className="dd" open>
    <summary>Paso 1: HTML base (estructura semántica)</summary>
    <div className="dd-body">
      <p><strong>Crea este HTML</strong> (nota cómo está limpio, sin decoración):</p>
      <pre>
        <code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Artículo con Pseudoelementos</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <article class="blog-post">
    <header>
      <h1>Los secretos del CSS moderno</h1>
      <div class="meta">
        <span class="author">Por Juan Pérez</span>
        <span class="date">15 de enero, 2024</span>
        <span class="reading-time">5 min de lectura</span>
      </div>
    </header>

    <section class="content">
      <p class="intro">Este artículo te enseñará las técnicas más avanzadas 
      de CSS que todo desarrollador debería conocer en 2024.</p>
      
      <h2>Introducción</h2>
      <p>El desarrollo web ha evolucionado muchísimo en los últimos años. 
      Nuevas propiedades y técnicas nos permiten crear efectos impresionantes.</p>
      
      <h2>Técnicas avanzadas</h2>
      <p>Entre las técnicas más útiles están los pseudoelementos, 
      que nos permiten decorar sin ensuciar el HTML.</p>

      <blockquote class="quote">
        "El buen CSS es invisible para el usuario, 
        pero hace toda la diferencia en la experiencia."
      </blockquote>

      <div class="links">
        <p>Enlaces útiles:</p>
        <ul>
          <li><a href="https://developer.mozilla.org" class="external">MDN Web Docs</a></li>
          <li><a href="manual.pdf" class="pdf">Manual CSS (PDF)</a></li>
          <li><a href="mailto:contacto@ejemplo.com" class="email">Contactar autor</a></li>
        </ul>
      </div>
    </section>

    <footer class="article-footer">
      <p>Espero que este artículo te haya sido útil.</p>
    </footer>
  </article>
</body>
</html>`}</code>
      </pre>
      
      <div className="callout info" style={{ marginTop: '1rem' }}>
        <strong>🔍 Observa:</strong> El HTML es 100% semántico. No hay decoración, iconos o efectos visuales. 
        ¡Todo eso lo añadiremos con pseudoelementos!
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Paso 2: CSS base (estilos fundamentales)</summary>
    <div className="dd-body">
      <p>Antes de los pseudoelementos, necesitamos <strong>estilos base legibles</strong>:</p>
      <pre>
        <code>{`/* RESET Y BASE */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Georgia', serif;
  line-height: 1.6;
  color: #333;
  background: #f9f9f9;
  padding: 2rem;
}

.blog-post {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* TIPOGRAFÍA BASE */
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

h2 {
  font-size: 1.8rem;
  margin: 2rem 0 1rem 0;
  color: #34495e;
}

p {
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
}

.meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #eee;
  font-size: 0.9rem;
  color: #666;
}

.intro {
  font-size: 1.3rem;
  font-style: italic;
  color: #555;
  margin-bottom: 2rem;
}

.quote {
  background: #f8f9fa;
  border-left: 4px solid #007bff;
  padding: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  font-size: 1.2rem;
}

.links {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.links ul {
  list-style: none;
  margin-top: 1rem;
}

.links li {
  margin-bottom: 0.5rem;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.article-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  text-align: center;
  color: #666;
}`}</code>
      </pre>
      
      <div className="callout tip">
        <strong>📈 Progreso:</strong> Con este CSS ya tienes una página legible y bien estructurada. 
        Ahora viene la magia de los pseudoelementos.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Paso 3: Pseudoelementos decorativos (iconos y símbolos)</summary>
    <div className="dd-body">
      <p>Ahora <strong>añadamos iconos inteligentes</strong> sin tocar el HTML:</p>
      <pre>
        <code>{`/* ICONOS CON PSEUDOELEMENTOS */

/* Icono de autor */
.author::before {
  content: "👤 ";
  margin-right: 0.3rem;
}

/* Icono de fecha */
.date::before {
  content: "📅 ";
  margin-right: 0.3rem;
}

/* Icono de tiempo de lectura */
.reading-time::before {
  content: "🕰️ ";
  margin-right: 0.3rem;
}

/* Enlaces externos */
.external::after {
  content: " ↗️";
  font-size: 0.8em;
}

/* Enlaces a PDF */
.pdf::after {
  content: " 📄";
}

/* Enlaces de email */
.email::before {
  content: "📧 ";
}

/* Decoración de citas */
.quote::before {
  content: """;
  font-size: 4rem;
  color: #007bff;
  position: absolute;
  margin-left: -2rem;
  margin-top: -1rem;
  opacity: 0.3;
}

.quote {
  position: relative; /* Para el pseudo absoluto */
}`}</code>
      </pre>
      
      <div className="callout success" style={{ backgroundColor: '#f0fdf4', borderColor: '#22c55e' }}>
        <strong>✨ Resultado:</strong> ¡Tu página ya tiene iconos profesionales sin una sola imagen! 
        Todo con caracteres Unicode y pseudoelementos.
      </div>
    </div>
  </details>

  {/* Continuaría con más pasos... pero para mantener la longitud controlada, 
      añado el resumen y retos */}
  
  <div style={{ marginTop: '2rem', backgroundColor: '#fef7ff', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #c084fc' }}>
    <h3 style={{ marginTop: 0, color: '#7c3aed' }}>🧠 Reflexiona sobre lo aprendido</h3>
    
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
      <div>
        <h4 style={{ marginTop: 0, color: '#6b21a8' }}>📝 Qué hicimos:</h4>
        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', color: '#8b5cf6' }}>
          <li>Iconos sin imágenes</li>
          <li>Efectos tipográficos</li>
          <li>Decorados inteligentes</li>
          <li>HTML semántico intacto</li>
        </ul>
      </div>
      
      <div>
        <h4 style={{ marginTop: 0, color: '#6b21a8' }}>⚡ Qué no tocamos:</h4>
        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', color: '#8b5cf6' }}>
          <li>HTML (siguió limpio)</li>
          <li>JavaScript</li>
          <li>Imágenes externas</li>
          <li>Librerías de iconos</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* NUEVA SECCIÓN: ACTIVIDAD PRÁCTICA ESTRUCTURADA */}
<section className="card">
  <h2>🎯 Actividad práctica: Crea tu primera página con pseudoelementos</h2>

  <p>
    Ahora que entiendes los conceptos, vamos a crear algo más realista paso a paso.
    Esta actividad te ayudará a <strong>aplicar pseudoelementos en un contexto real</strong>.
  </p>

  {/* PREPARACIÓN DE LA ACTIVIDAD */}
  <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #22c55e' }}>
    <h3 style={{ marginTop: 0, color: '#166534' }}>🚀 Objetivo de la actividad</h3>
    <p style={{ margin: '0.8rem 0', color: '#15803d' }}>
      Crear una <strong>página de artículo de blog</strong> usando pseudoelementos para:
    </p>
    <ul style={{ paddingLeft: '1.5rem', color: '#15803d', marginBottom: '0.8rem' }}>
      <li>Iconos decorativos sin imágenes</li>
      <li>Efectos tipográficos profesionales</li>
      <li>Indicadores visuales inteligentes</li>
      <li>Experiencia de usuario mejorada</li>
    </ul>
    <div className="callout tip" style={{ fontSize: '0.9em' }}>
      <strong>🎨 Lo mejor:</strong> Todo el diseño visual se hará con CSS puro, 
      manteniendo el HTML limpio y semántico.
    </div>
  </div>

  <details className="dd" open>
    <summary>Paso 1: HTML base (estructura semántica)</summary>
    <div className="dd-body">
      <p><strong>Crea este HTML</strong> (nota cómo está limpio, sin decoración):</p>
      <pre>
        <code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Artículo con Pseudoelementos</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <article class="blog-post">
    <header>
      <h1>Los secretos del CSS moderno</h1>
      <div class="meta">
        <span class="author">Por Juan Pérez</span>
        <span class="date">15 de enero, 2024</span>
        <span class="reading-time">5 min de lectura</span>
      </div>
    </header>

    <section class="content">
      <p class="intro">Este artículo te enseñará las técnicas más avanzadas 
      de CSS que todo desarrollador debería conocer en 2024.</p>
      
      <h2>Introducción</h2>
      <p>El desarrollo web ha evolucionado muchísimo en los últimos años. 
      Nuevas propiedades y técnicas nos permiten crear efectos impresionantes.</p>
      
      <h2>Técnicas avanzadas</h2>
      <p>Entre las técnicas más útiles están los pseudoelementos, 
      que nos permiten decorar sin ensuciar el HTML.</p>

      <blockquote class="quote">
        "El buen CSS es invisible para el usuario, 
        pero hace toda la diferencia en la experiencia."
      </blockquote>

      <div class="links">
        <p>Enlaces útiles:</p>
        <ul>
          <li><a href="https://developer.mozilla.org" class="external">MDN Web Docs</a></li>
          <li><a href="manual.pdf" class="pdf">Manual CSS (PDF)</a></li>
          <li><a href="mailto:contacto@ejemplo.com" class="email">Contactar autor</a></li>
        </ul>
      </div>
    </section>

    <footer class="article-footer">
      <p>Espero que este artículo te haya sido útil.</p>
    </footer>
  </article>
</body>
</html>`}</code>
      </pre>
      
      <div className="callout info" style={{ marginTop: '1rem' }}>
        <strong>🔍 Observa:</strong> El HTML es 100% semántico. No hay decoración, iconos o efectos visuales. 
        ¡Todo eso lo añadiremos con pseudoelementos!
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Paso 2: CSS base (estilos fundamentales)</summary>
    <div className="dd-body">
      <p>Antes de los pseudoelementos, necesitamos <strong>estilos base legibles</strong>:</p>
      <pre>
        <code>{`/* RESET Y BASE */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Georgia', serif;
  line-height: 1.6;
  color: #333;
  background: #f9f9f9;
  padding: 2rem;
}

.blog-post {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* TIPOGRAFÍA BASE */
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

h2 {
  font-size: 1.8rem;
  margin: 2rem 0 1rem 0;
  color: #34495e;
}

p {
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
}

.meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #eee;
  font-size: 0.9rem;
  color: #666;
}

.intro {
  font-size: 1.3rem;
  font-style: italic;
  color: #555;
  margin-bottom: 2rem;
}

.quote {
  background: #f8f9fa;
  border-left: 4px solid #007bff;
  padding: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  font-size: 1.2rem;
}

.links {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.links ul {
  list-style: none;
  margin-top: 1rem;
}

.links li {
  margin-bottom: 0.5rem;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.article-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  text-align: center;
  color: #666;
}`}</code>
      </pre>
      
      <div className="callout tip">
        <strong>📈 Progreso:</strong> Con este CSS ya tienes una página legible y bien estructurada. 
        Ahora viene la magia de los pseudoelementos.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Paso 3: Pseudoelementos decorativos (iconos y símbolos)</summary>
    <div className="dd-body">
      <p>Ahora <strong>añadamos iconos inteligentes</strong> sin tocar el HTML:</p>
      <pre>
        <code>{`/* ICONOS CON PSEUDOELEMENTOS */

/* Icono de autor */
.author::before {
  content: "👤 ";
  margin-right: 0.3rem;
}

/* Icono de fecha */
.date::before {
  content: "📅 ";
  margin-right: 0.3rem;
}

/* Icono de tiempo de lectura */
.reading-time::before {
  content: "🕰️ ";
  margin-right: 0.3rem;
}

/* Enlaces externos */
.external::after {
  content: " ↗️";
  font-size: 0.8em;
}

/* Enlaces a PDF */
.pdf::after {
  content: " 📄";
}

/* Enlaces de email */
.email::before {
  content: "📧 ";
}

/* Decoración de citas */
.quote::before {
  content: "“";
  font-size: 4rem;
  color: #007bff;
  position: absolute;
  margin-left: -2rem;
  margin-top: -1rem;
  opacity: 0.3;
}

.quote {
  position: relative; /* Para el pseudo absoluto */
}`}</code>
      </pre>
      
      <div className="callout success" style={{ backgroundColor: '#f0fdf4', borderColor: '#22c55e' }}>
        <strong>✨ Resultado:</strong> ¡Tu página ya tiene iconos profesionales sin una sola imagen! 
        Todo con caracteres Unicode y pseudoelementos.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Paso 4: Efectos tipográficos avanzados</summary>
    <div className="dd-body">
      <p>Hagamos que el texto se vea <strong>editorial y profesional</strong>:</p>
      <pre>
        <code>{`/* EFECTOS TIPOGRÁFICOS */

/* Letra capital en la introducción */
.intro::first-letter {
  float: left;
  font-size: 4rem;
  line-height: 0.8;
  margin-right: 8px;
  margin-top: 4px;
  color: #007bff;
  font-weight: bold;
}

/* Primera línea en versalitas */
.intro::first-line {
  font-variant: small-caps;
  letter-spacing: 1px;
}

/* Títulos con línea decorativa */
h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #007bff, #00c6ff);
  margin-top: 0.5rem;
}

/* Selección personalizada */
::selection {
  background: #007bff;
  color: white;
  text-shadow: none;
}

/* Separadores de sección */
.content > p:nth-child(4)::after {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background: #007bff;
  border-radius: 50%;
  margin: 2rem auto;
  opacity: 0.3;
}`}</code>
      </pre>
      
      <div className="callout warn" style={{ fontSize: '0.9em' }}>
        <strong>🔍 Nota técnica:</strong> Fijáte en <code>float: left</code> para la letra capital y 
        <code>display: block</code> para crear formas geométricas con <code>content: ""</code>.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Paso 5: Toques finales y pulimiento</summary>
    <div className="dd-body">
      <p>Los <strong>últimos detalles</strong> que hacen la diferencia:</p>
      <pre>
        <code>{`/* TOQUES FINALES */

/* Placeholder personalizado (si añades un form) */
input::placeholder {
  color: #999;
  font-style: italic;
  transition: color 0.3s;
}

input:focus::placeholder {
  color: #ccc;
}

/* Footer con adorno */
.article-footer::before {
  content: "❦ ❦ ❦";
  display: block;
  text-align: center;
  color: #ddd;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* Contador de secciones automático */
.content {
  counter-reset: section;
}

.content h2 {
  counter-increment: section;
}

.content h2::before {
  content: counter(section, decimal) ". ";
  color: #007bff;
  font-weight: bold;
}

/* Efecto hover en enlaces */
a::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #007bff;
  transition: width 0.3s;
}

a:hover::after {
  width: 100%;
}`}</code>
      </pre>
      
      <div className="callout success" style={{ backgroundColor: '#f0fdf4', borderColor: '#22c55e' }}>
        <strong>🏆 ¡Completado!</strong> Tienes una página profesional con efectos avanzados, 
        numeración automática y transiciones, todo con pseudoelementos.
      </div>
    </div>
  </details>

  {/* REFLEXIÓN Y APRENDIZAJE */}
  <div style={{ marginTop: '2rem', backgroundColor: '#fef7ff', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #c084fc' }}>
    <h3 style={{ marginTop: 0, color: '#7c3aed' }}>🧐 Reflexiona sobre lo aprendido</h3>
    
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
      <div>
        <h4 style={{ marginTop: 0, color: '#6b21a8' }}>📝 Qué hicimos:</h4>
        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', color: '#8b5cf6' }}>
          <li>Iconos sin imágenes</li>
          <li>Efectos tipográficos</li>
          <li>Numeración automática</li>
          <li>Decorados inteligentes</li>
        </ul>
      </div>
      
      <div>
        <h4 style={{ marginTop: 0, color: '#6b21a8' }}>✨ Qué no tocamos:</h4>
        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', color: '#8b5cf6' }}>
          <li>HTML (siguió limpio)</li>
          <li>JavaScript</li>
          <li>Imágenes externas</li>
          <li>Librerías de iconos</li>
        </ul>
      </div>
    </div>
    
    <div className="callout tip" style={{ marginTop: '1rem', fontSize: '0.9em' }}>
      <strong>💡 Ventaja clave:</strong> Si maiana necesitas cambiar los iconos o efectos, 
      solo modificas el CSS. El HTML permanece intacto y semántico.
    </div>
  </div>

  {/* RETOS ADICIONALES */}
  <div style={{ marginTop: '2rem', backgroundColor: '#fde2e8', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #f43f5e' }}>
    <h3 style={{ marginTop: 0, color: '#be123c' }}>🏅 Retos adicionales (opcional)</h3>
    
    <ol style={{ paddingLeft: '1.2rem', color: '#be123c' }}>
      <li style={{ marginBottom: '0.8rem' }}>
        <strong>Modo oscuro:</strong> Crea una versión oscura cambiando colores en pseudoelementos
      </li>
      <li style={{ marginBottom: '0.8rem' }}>
        <strong>Responsive:</strong> Ajusta los efectos para móvil (reduce tamaños, oculta algunos decorados)
      </li>
      <li style={{ marginBottom: '0.8rem' }}>
        <strong>Animaciones:</strong> Añade <code>@keyframes</code> a algunos pseudoelementos
      </li>
      <li style={{ marginBottom: '0.8rem' }}>
        <strong>Accesibilidad:</strong> Asegúrate de que todos los efectos mejoran la experiencia
      </li>
    </ol>
  </div>
</section>


      {/* =========================
          CIERRE
      ========================== */}
      <section className="card">
        <h2>Cierre del tema</h2>

        <p>
          Los pseudoelementos permiten enriquecer el diseño
          <strong>sin tocar el HTML</strong>.
          Son una herramienta clave del CSS moderno,
          pero deben usarse con criterio.
        </p>

        <div className="callout tip">
          Ahora que dominas pseudoclases y pseudoelementos,
          tienes el control total de la interacción y el detalle visual con CSS.
        </div>
      </section>

      {/* NUEVA SECCIÓN: ERRORES COMUNES */}
      <section className="card">
        <h2>❌ Errores típicos con pseudoelementos (¡evítalos!)</h2>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          
          <div style={{ backgroundColor: '#fef2f2', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #fca5a5' }}>
            <h3 style={{ marginTop: 0, color: '#dc2626' }}>🚫 Error #1: Olvidar la propiedad content</h3>
            
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#7f1d1d' }}>❌ No aparece nada</h4>
                <pre style={{ backgroundColor: '#7f1d1d', color: '#fecaca', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.85em' }}>
                  <code>{`/* SIN content = NO APARECE */
.icon::before {
  color: red;
  font-size: 2em;
  /* ¡Falta content! */
}`}</code>
                </pre>
              </div>
              
              <div>
                <h4 style={{ marginTop: 0, color: '#166534' }}>✅ Aparece correctamente</h4>
                <pre style={{ backgroundColor: '#166534', color: '#dcfce7', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.85em' }}>
                  <code>{`.icon::before {
  content: "★"; /* ¡Imprescindible! */
  color: red;
  font-size: 2em;
}`}</code>
                </pre>
              </div>
            </div>
            
            <p style={{ color: '#7f1d1d', fontSize: '0.9em', margin: '0.8rem 0 0 0' }}>
              <strong>Regla de oro:</strong> Sin <code>content</code>, <code>::before</code> y <code>::after</code> no existen. 
              Aunque esté vacío, pon <code>content: "";</code>
            </p>
          </div>

          <div style={{ backgroundColor: '#fffbeb', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #fbbf24' }}>
            <h3 style={{ marginTop: 0, color: '#d97706' }}>⚠️ Error #2: Usar pseudoelementos para contenido importante</h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ marginTop: 0, color: '#92400e' }}>😱 Problemático para accesibilidad:</h4>
              <pre style={{ backgroundColor: '#451a03', color: '#fed7aa', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.85em' }}>
                <code>{`/* ¡MAL! Información importante en pseudoelementos */
.price::before {
  content: "Precio: ";
}

.required::after {
  content: " (obligatorio)";
}`}</code>
              </pre>
            </div>
            
            <div>
              <h4 style={{ marginTop: 0, color: '#166534' }}>✅ Mejor en HTML semántico:</h4>
              <pre style={{ backgroundColor: '#166534', color: '#dcfce7', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.85em' }}>
                <code>{`<span class="price">
  <span class="label">Precio:</span> $50
</span>

<input required>
<label>Campo obligatorio</label>`}</code>
              </pre>
            </div>
            
            <p style={{ color: '#92400e', fontSize: '0.9em', margin: '0.8rem 0 0 0' }}>
              <strong>Principio:</strong> Pseudoelementos para decoración, HTML para información esencial.
            </p>
          </div>

          <div style={{ backgroundColor: '#f0fdf4', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #22c55e' }}>
            <h3 style={{ marginTop: 0, color: '#16a34a' }}>✅ Error #3: No entender cuándo usar inline-block</h3>
            
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#dc2626' }}>😭 Width/height no funciona</h4>
                <pre style={{ backgroundColor: '#7f1d1d', color: '#fecaca', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.8em' }}>
                  <code>{`.dot::before {
  content: "";
  width: 20px;    /* ¡No funciona! */
  height: 20px;   /* ¡No funciona! */
  background: red;
}`}</code>
                </pre>
              </div>
              
              <div>
                <h4 style={{ marginTop: 0, color: '#166534' }}>😊 Funciona perfectamente</h4>
                <pre style={{ backgroundColor: '#166534', color: '#dcfce7', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.8em' }}>
                  <code>{`.dot::before {
  content: "";
  display: inline-block; /* ¡Clave! */
  width: 20px;
  height: 20px;
  background: red;
}`}</code>
                </pre>
              </div>
            </div>
            
            <div className="callout tip" style={{ marginTop: '1rem' }}>
              <strong>📏 Cuándo usar display:</strong> Si necesitas width, height, margin/padding específicos en un pseudoelemento, 
              añade <code>display: inline-block;</code> o <code>display: block;</code>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: GUÍA DE USO PRÁCTICO */}
      <section className="card">
        <h2>🎯 Guía rápida: ¿Cuándo usar cada pseudoelemento?</h2>
        
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          
          <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #64748b' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>🎨 Creadores de contenido</h3>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0, color: '#475569' }}>
              <li><strong>::before</strong> → Iconos, viñetas, prefijos</li>
              <li><strong>::after</strong> → Indicadores, sufijos, flechas</li>
              <li><strong>content: ""</strong> → Formas geométricas, decorados</li>
            </ul>
            <div style={{ marginTop: '0.8rem', fontSize: '0.85em', color: '#64748b' }}>
              <strong>Casos típicos:</strong> Iconos sin imágenes, badges, indicadores de estado
            </div>
          </div>
          
          <div style={{ backgroundColor: '#fefce8', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #facc15' }}>
            <h3 style={{ marginTop: 0, color: '#a16207' }}>📝 Modificadores de texto</h3>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0, color: '#ca8a04' }}>
              <li><strong>::first-letter</strong> → Drop caps, letras capitales</li>
              <li><strong>::first-line</strong> → Destacar primeras líneas</li>
              <li><strong>::selection</strong> → Personalizar selección</li>
            </ul>
            <div style={{ marginTop: '0.8rem', fontSize: '0.85em', color: '#a16207' }}>
              <strong>Casos típicos:</strong> Artículos, blogs, textos editoriales
            </div>
          </div>
          
          <div style={{ backgroundColor: '#fef7ff', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #c084fc' }}>
            <h3 style={{ marginTop: 0, color: '#7c3aed' }}>🎛️ Especializados</h3>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0, color: '#8b5cf6' }}>
              <li><strong>::placeholder</strong> → Estilar placeholders de inputs</li>
              <li><strong>::marker</strong> → Personalizar viñetas de listas</li>
              <li><strong>::backdrop</strong> → Fondo de modales/diálogos</li>
            </ul>
            <div style={{ marginTop: '0.8rem', fontSize: '0.85em', color: '#7c3aed' }}>
              <strong>Casos típicos:</strong> Formularios, listas personalizadas, interfaces complejas
            </div>
          </div>
        </div>

        <div className="callout info" style={{ marginTop: '1.5rem' }}>
          <strong>🧠 Para recordar fácil:</strong> 
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
            <li><strong>¿Necesitas añadir algo que no existe?</strong> → ::before / ::after</li>
            <li><strong>¿Quieres decorar parte del texto?</strong> → ::first-letter / ::first-line</li>
            <li><strong>¿Mejorar la interacción?</strong> → ::selection / ::placeholder</li>
          </ul>
        </div>

        <div style={{ marginTop: '1.5rem', backgroundColor: '#f1f5f9', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #64748b' }}>
          <h3 style={{ marginTop: 0, color: '#334155' }}>🎨 Casos de uso profesionales comunes</h3>
          
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div><strong>Navegación:</strong> <code>nav a::after</code> para flechas o indicadores de submenú</div>
            <div><strong>Formularios:</strong> <code>input::placeholder</code>, iconos con <code>label::before</code></div>
            <div><strong>Artículos:</strong> <code>article p::first-letter</code> para drop caps elegantes</div>
            <div><strong>Enlaces:</strong> <code>a[href^="http"]::after</code> para indicar enlaces externos</div>
            <div><strong>Listas:</strong> <code>li::before</code> para viñetas personalizadas sin imágenes</div>
          </div>
        </div>

        {/* REGLAS DE ORO FINALES */}
        <div style={{ marginTop: '1.5rem', backgroundColor: '#ecfccb', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #65a30d' }}>
          <h3 style={{ marginTop: 0, color: '#365314' }}>🏆 Reglas de oro para usar pseudoelementos</h3>
          
          <div style={{ display: 'grid', gap: '0.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#16a34a', fontSize: '1.2em' }}>✅</span>
              <span><strong>SÍ:</strong> Decoración, iconos, efectos visuales</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#16a34a', fontSize: '1.2em' }}>✅</span>
              <span><strong>SÍ:</strong> Elementos que si desaparecen no afectan al contenido</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#dc2626', fontSize: '1.2em' }}>❌</span>
              <span><strong>NO:</strong> Información esencial o importante para accesibilidad</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#dc2626', fontSize: '1.2em' }}>❌</span>
              <span><strong>NO:</strong> Contenido que debe ser seleccionable/copiable</span>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: SEGUNDA ACTIVIDAD - PROYECTO COLABORATIVO */}
      <section className="card">
        <h2>🚀 Proyecto final: "Galería de componentes con pseudoelementos"</h2>

        <p>
          Para consolidar todo lo aprendido, vamos a crear un <strong>proyecto más ambicioso</strong> 
          que combina todos los conceptos y te prepara para situaciones profesionales reales.
        </p>

        {/* DESCRIPCIÓN DEL PROYECTO */}
        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #0ea5e9' }}>
          <h3 style={{ marginTop: 0, color: '#0c4a6e' }}>🎯 Objetivo del proyecto</h3>
          <p style={{ color: '#075985', marginBottom: '1rem' }}>
            Crear una <strong>galería de componentes web</strong> donde cada componente demuestre 
            un uso diferente y creativo de pseudoelementos.
          </p>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h4 style={{ marginTop: 0, color: '#075985' }}>Componentes a crear:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0 }}>
                <li>Tarjetas de perfil</li>
                <li>Botones animados</li>
                <li>Timeline vertical</li>
                <li>Tags/etiquetas</li>
                <li>Tooltips CSS</li>
                <li>Progress bars</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h4 style={{ marginTop: 0, color: '#075985' }}>Restricciones del reto:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0 }}>
                <li>❌ Sin imágenes</li>
                <li>❌ Sin JavaScript</li>
                <li>❌ Sin librerías externas</li>
                <li>✅ Solo HTML + CSS</li>
                <li>✅ Máximo uso de pseudoelementos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COMPONENTES ESPECÍFICOS */}
        <details className="dd" open>
          <summary>Componente 1: Tarjeta de perfil con pseudoelementos</summary>
          <div className="dd-body">
            <p><strong>HTML mínimo:</strong></p>
            <pre>
              <code>{`<div class="profile-card">
  <div class="avatar" data-initials="JP"></div>
  <h3>Juan Pérez</h3>
  <p class="title">Desarrollador Frontend</p>
  <div class="social">
    <a href="#" class="github">GitHub</a>
    <a href="#" class="linkedin">LinkedIn</a>
    <a href="#" class="twitter">Twitter</a>
  </div>
</div>`}</code>
            </pre>
            
            <p><strong>Retos con pseudoelementos:</strong></p>
            <ul>
              <li><strong>Avatar:</strong> Usar <code>::before</code> para crear un círculo de fondo y las iniciales</li>
              <li><strong>Iconos sociales:</strong> <code>::before</code> con emojis o símbolos Unicode</li>
              <li><strong>Decoración:</strong> <code>::after</code> para líneas divisorias</li>
              <li><strong>Hover effects:</strong> Combinar pseudoclases con pseudoelementos</li>
            </ul>
            
            <div className="callout tip">
              <strong>💡 Pista avanzada:</strong> Usa <code>attr()</code> en <code>content</code> para leer 
              el atributo <code>data-initials</code> y mostrarlo en el pseudoelemento.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Componente 2: Timeline vertical con eventos</summary>
          <div className="dd-body">
            <p><strong>HTML base:</strong></p>
            <pre>
              <code>{`<div class="timeline">
  <div class="event">
    <h4>2024 - Aprendí CSS Grid</h4>
    <p>Dominé el layout moderno con CSS Grid y Flexbox.</p>
  </div>
  <div class="event">
    <h4>2023 - Primer proyecto React</h4>
    <p>Creé mi primera aplicación con React y hooks.</p>
  </div>
  <div class="event">
    <h4>2022 - Empecé en desarrollo</h4>
    <p>Mis primeros pasos en el mundo del desarrollo web.</p>
  </div>
</div>`}</code>
            </pre>
            
            <p><strong>Efectos con pseudoelementos:</strong></p>
            <ul>
              <li><strong>Línea vertical:</strong> <code>.timeline::before</code> para la línea principal</li>
              <li><strong>Puntos de evento:</strong> <code>.event::before</code> para círculos indicadores</li>
              <li><strong>Flechas conectoras:</strong> <code>.event::after</code> para señalar dirección</li>
              <li><strong>Numeración automática:</strong> CSS counters con pseudoelementos</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>Componente 3: Sistema de tooltips inteligente</summary>
          <div className="dd-body">
            <p><strong>HTML semántico:</strong></p>
            <pre>
              <code>{`<div class="tooltip-container">
  <button class="tooltip" data-tip="Este botón guarda tus cambios">
    Guardar
  </button>
  
  <span class="tooltip" data-tip="Información adicional sobre este campo">
    Campo con ayuda
  </span>
  
  <a href="#" class="tooltip" data-tip="Enlace externo" data-position="bottom">
    Visitar sitio
  </a>
</div>`}</code>
            </pre>
            
            <p><strong>Sistema completo con pseudoelementos:</strong></p>
            <ul>
              <li><strong>Tooltip básico:</strong> <code>::after</code> para el contenido del tooltip</li>
              <li><strong>Flecha:</strong> <code>::before</code> para la flecha que apunta al elemento</li>
              <li><strong>Posicionamiento dinámico:</strong> Diferentes posiciones (top, bottom, left, right)</li>
              <li><strong>Animaciones:</strong> <code>opacity</code> y <code>transform</code> en <code>:hover</code></li>
            </ul>
            
            <div className="callout warn">
              <strong>🤔 Desafío:</strong> ¿Puedes hacer que el tooltip respete los bordes de la pantalla 
              y cambie de posición automáticamente?
            </div>
          </div>
        </details>

        {/* EVALUACIÓN Y ENTREGA */}
        <div style={{ marginTop: '2rem', backgroundColor: '#ecfccb', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #65a30d' }}>
          <h3 style={{ marginTop: 0, color: '#365314' }}>🏆 Cómo serás evaluado</h3>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div>
              <h4 style={{ marginTop: 0, color: '#4d7c0f' }}>✅ Criterios de evaluación:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', color: '#65a30d', marginBottom: 0 }}>
                <li>HTML semántico y limpio</li>
                <li>Uso creativo de pseudoelementos</li>
                <li>Código CSS organizado</li>
                <li>Responsive design</li>
                <li>Accesibilidad básica</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ marginTop: 0, color: '#4d7c0f' }}>🎆 Puntos extra por:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', color: '#65a30d', marginBottom: 0 }}>
                <li>Animaciones suaves</li>
                <li>Efectos hover creativos</li>
                <li>Uso de CSS custom properties</li>
                <li>Componentes reutilizables</li>
                <li>Documentación en comentarios</li>
              </ul>
            </div>
          </div>
          
          <div className="callout success" style={{ marginTop: '1rem', fontSize: '0.9em', backgroundColor: '#f0fdf4', borderColor: '#22c55e' }}>
            <strong>📝 Entrega:</strong> Sube tu proyecto a CodePen o GitHub Pages. 
            Incluye un README explicando qué pseudoelemento hace qué en cada componente.
          </div>
        </div>

        {/* ACTIVIDAD COLABORATIVA */}
        <div style={{ marginTop: '2rem', backgroundColor: '#fef7ff', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #c084fc' }}>
          <h3 style={{ marginTop: 0, color: '#7c3aed' }}>🤝 Actividad colaborativa (opcional)</h3>
          
          <p style={{ color: '#8b5cf6', marginBottom: '1rem' }}>
            Si estás en un grupo o clase, haz esto como <strong>proyecto colaborativo</strong>:
          </p>
          
          <ol style={{ paddingLeft: '1.2rem', color: '#8b5cf6' }}>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>División de trabajo:</strong> Cada persona se encarga de 1-2 componentes
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>Estilo unificado:</strong> Definid juntos colores, tipografía y espaciado base
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>Review cruzado:</strong> Revisad el código de otros y aprended de sus soluciones
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>Presentación final:</strong> Cada uno explica cómo usó los pseudoelementos en sus componentes
            </li>
          </ol>
          
          <div className="callout tip" style={{ fontSize: '0.9em' }}>
            <strong>💡 Beneficio:</strong> Ver cómo otros resuelven los mismos problemas 
            te dará nuevas ideas y perspectivas sobre pseudoelementos.
          </div>
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
