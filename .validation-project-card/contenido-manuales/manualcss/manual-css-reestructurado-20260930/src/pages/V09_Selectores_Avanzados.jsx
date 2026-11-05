import { useEffect, useMemo, useState } from "react";

export default function SelectoresAvanzadosCombinadoresYAtributos() {
  useEffect(() => {
    document.title = "CSS · Selectores avanzados (combinadores y atributos)";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "¿Qué hace el combinador hermano adyacente +?", options: ["Selecciona todos los hermanos siguientes", "Selecciona el primer hermano inmediato siguiente del mismo padre", "Selecciona todos los descendientes", "Une dos clases en un mismo selector"], correct: "Selecciona el primer hermano inmediato siguiente del mismo padre", why: "h2 + p selecciona el primer <p> que viene justo después de un <h2>, siempre que sean hermanos directos." },
    { id: "q2", q: "¿Qué selecciona [href^='https']?", options: ["Todos los href que contienen 'https'", "Todos los enlaces cuyo href empieza por 'https'", "Solo los enlaces con href='https'", "Todos los elementos con cualquier href"], correct: "Todos los enlaces cuyo href empieza por 'https'", why: "El operador ^ en selectores de atributo significa 'empieza por'. Ideal para estilar todos los enlaces externos HTTPS." },
    { id: "q3", q: "¿Cuál es la diferencia entre los combinadores + y ~?", options: ["Son idénticos", "+ selecciona solo el hermano inmediato; ~ selecciona todos los hermanos siguientes", "~ selecciona hermanos anteriores; + los siguientes", "+ es para ID; ~ para clases"], correct: "+ selecciona solo el hermano inmediato; ~ selecciona todos los hermanos siguientes", why: "h2 + p captura solo el primer <p> tras h2. h2 ~ p captura todos los <p> que vengan después del h2 en el mismo nivel." },
    { id: "q4", q: "¿Qué hace [class*='btn']?", options: ["Selecciona elementos con clase exactamente 'btn'", "Selecciona elementos cuyo atributo class contiene 'btn' en cualquier posición", "Solo funciona con botones <button>", "Selecciona elementos cuya clase empieza por 'btn'"], correct: "Selecciona elementos cuyo atributo class contiene 'btn' en cualquier posición", why: "El operador * significa 'contiene'. [class*='btn'] captura btn, btn-primary, icon-btn, my-btn, etc." },
    { id: "q5", q: "¿Para qué sirve [href$='.pdf']?", options: ["Para URL que empieza por '.pdf'", "Para cualquier atributo que contenga 'pdf'", "Para enlaces cuyo href termina en '.pdf'", "Para deshabilitar PDFs"], correct: "Para enlaces cuyo href termina en '.pdf'", why: "El operador $ significa 'termina por'. Útil para añadir un icono o estilos especiales a todos los enlaces que apuntan a archivos PDF." },
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
          HERO / INTRO
      ========================== */}
      <section className="card">
        <h1>Selectores avanzados (hijos, hermanos, combinados…)</h1>

        <p>
          Cuando dominas los selectores básicos (etiqueta, clase, id), el siguiente salto es aprender a
          <strong> seleccionar por relación</strong> dentro del HTML: “hijos directos”, “elementos dentro de”,
          “hermanos”, etc. A esto se le llama <strong>combinadores</strong>.
        </p>

        <div className="callout tip">
          Objetivo del tema: aprender a escribir selectores que describan la estructura del HTML sin caer en
          selectores “larguísimos” o frágiles.
        </div>

       

       {/* =========================
    DOCUMENTACIÓN (estilo doc-link-card)
========================= */}
<section className="card">
  <h2>Documentación recomendada (para estudiar y repasar)</h2>

  <p>
    Aquí tienes dos referencias clave: una tipo “chuleta” rápida y otra más completa y profesional.
    Úsalas así: <strong>lee → prueba en CodePen → vuelve a leer</strong>.
  </p>

  <div className="doc-link-card">
    <a
      href="https://www.w3schools.com/cssref/css_ref_combinators.php"
      target="_blank"
      rel="noreferrer"
    >
      W3Schools · CSS Combinators Reference
    </a>
    <p className="doc-link-card__desc">
      Referencia rápida de combinadores (<code> </code>, <code>&gt;</code>, <code>+</code>, <code>~</code>).
      Ideal como “chuleta” cuando estás practicando y quieres comprobar la sintaxis en 10 segundos.
    </p>
  </div>

  <div className="doc-link-card">
    <a
      href="https://developer.mozilla.org/es/docs/Web/CSS/Guides/Selectors"
      target="_blank"
      rel="noreferrer"
    >
      MDN · Guía de selectores CSS
    </a>
    <p className="doc-link-card__desc">
      Guía completa y más “pro” de MDN. Explica selectores básicos, combinadores, atributos y mucho más,
      con detalle y ejemplos. Perfecta para entender el porqué y no solo memorizar.
    </p>
  </div>

  <div className="callout tip">
    Truco: cuando algo no te sale, busca primero en esta guía de MDN la parte exacta del selector y
    compárala con tu HTML (estructura real: padres, hijos y hermanos).
  </div>
</section>


        <div className="callout">
          <strong>Importante:</strong> en tu curso tendremos temas aparte para <strong>pseudoclases</strong> y{" "}
          <strong>pseudoelementos</strong>. Aquí nos centramos en <strong>combinadores</strong> y (sí){" "}
          <strong>selectores de atributos</strong>, que también son “avanzados”.
        </div>
        <div className="callout info" style={{ marginTop: '1rem', backgroundColor: '#f0f9ff', borderColor: '#0ea5e9' }}>
          <strong>🎯 Para principiantes:</strong> Si es la primera vez que ves estos selectores, tranquilo. 
          Piénsalo así: hasta ahora seleccionabas "qué elemento" (div, .clase, #id). 
          Ahora vas a aprender a seleccionar "qué elemento y dónde está en relación con otros". 
          Es como dar direcciones más precisas: "la casa azul que está al lado de la farmacia".
        </div>      </section>

      {/* =========================
          ¿QUÉ SON LOS “AVANZADOS”?
      ========================== */}
      <section className="card">
        <h2>¿Cuáles son los selectores avanzados?</h2>

        <p>
          En la práctica, solemos llamar “avanzados” a los selectores que van más allá de etiqueta/clase/id y
          te permiten afinar por <strong>relaciones</strong>, <strong>estados</strong> o{" "}
          <strong>atributos</strong>.
        </p>

        <details className="dd" open>
          <summary>Mapa rápido (para que veas el temario completo)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Combinadores</strong> (este tema):{" "}
                <code> </code>(descendiente), <code>&gt;</code>(hijo), <code>+</code>(hermano adyacente),{" "}
                <code>~</code>(hermanos generales)
              </li>
              <li>
                <strong>Selectores de atributos</strong> (este tema): <code>[attr]</code>, <code>[attr=value]</code>,{" "}
                <code>^</code>, <code>$</code>, <code>*</code>, etc.
              </li>
              <li>
                <strong>Pseudoclases</strong> (tema siguiente): <code>:hover</code>, <code>:focus</code>,{" "}
                <code>:first-child</code>, <code>:nth-child()</code>…
              </li>
              <li>
                <strong>Pseudoelementos</strong> (tema siguiente): <code>::before</code>, <code>::after</code>,{" "}
                <code>::first-line</code>…
              </li>
            </ul>

            <div className="callout tip">
              Si separas bien estos tres bloques (combinadores / atributos / pseudo-*) aprendes más rápido y
              evitas mezclar conceptos.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>¿En este tema entran los selectores de atributos?</summary>
          <div className="dd-body">
            <p>
              <strong>Sí</strong>. Aunque a veces se enseñan aparte, los selectores de atributos encajan
              perfectamente aquí porque son una forma de <strong>seleccionar con más precisión</strong> sin
              depender de IDs o de clases extra.
            </p>

            <div className="callout warn">
              Eso sí: los atributos hay que usarlos con cabeza. Si puedes resolverlo con una clase clara,
              muchas veces la clase es más legible. Pero para formularios, enlaces y componentes reutilizables,
              <strong>son oro</strong>.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          COMBINADORES (RELACIONES)
      ========================== */}
      <section className="card">
        <h2>Combinadores: selectores por relación</h2>

        <p>
          Un combinador describe la relación entre dos partes del selector. Te dice cosas como:
          “dentro de”, “hijo directo de”, “justo después de”, “cualquier hermano después de…”.
        </p>

        <details className="dd" open>
          <summary>1) Descendiente (espacio): A B</summary>
          <div className="dd-body">
            <p>
              Selecciona <strong>B</strong> si está <strong>en cualquier nivel</strong> dentro de <strong>A</strong>.
              No importa si está a 1 nivel o a 5 niveles de profundidad.
            </p>

            <pre>
              <code>{`.menu a{
  text-decoration: none;
}`}</code>
            </pre>

            <div className="callout tip">
              Se lee: “cualquier <code>a</code> dentro de <code>.menu</code>”.
            </div>

            <div className="callout warn">
              Si abusas del descendiente, puedes seleccionar más de lo que querías. Úsalo con intención.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2) Hijo directo (&gt;): A &gt; B</summary>
          <div className="dd-body">
            <p>
              Selecciona <strong>B</strong> solo si es <strong>hijo directo</strong> de <strong>A</strong>.
              Es más estricto que el descendiente.
            </p>

            <pre>
              <code>{`.menu > a{
  font-weight: 700;
}`}</code>
            </pre>

            <div className="callout tip">
              Úsalo cuando quieras evitar que afecte a elementos anidados más profundo.
            </div>

            <details className="dd">
              <summary>Mini-ejemplo mental</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<nav class="menu">
  <a>✅ Hijo directo</a>
  <div>
    <a>❌ No es hijo directo</a>
  </div>
</nav>`}</code>
                </pre>
                <p>
                  Con <code>.menu &gt; a</code> solo se selecciona el primer enlace.
                </p>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>3) Hermano adyacente (+): A + B</summary>
          <div className="dd-body">
            <p>
              Selecciona <strong>B</strong> solo si está <strong>justo después</strong> de <strong>A</strong> y ambos son
              <strong> hermanos</strong> (mismo padre).
            </p>

            <pre>
              <code>{`h2 + p{
  margin-top: .25rem;
  color: var(--muted);
}`}</code>
            </pre>

            <div className="callout">
              Ideal para patrones “título + primer párrafo” o “label + input”, cuando están pegados.
            </div>

            <details className="dd">
              <summary>Mini-ejemplo mental</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<h2>Título</h2>
<p>✅ Seleccionado (está justo después)</p>
<p>❌ No seleccionado (ya no es adyacente)</p>`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>4) Hermanos generales (~): A ~ B</summary>
          <div className="dd-body">
            <p>
              Selecciona <strong>todos</strong> los <strong>B</strong> que aparezcan <strong>después</strong> de <strong>A</strong>
              dentro del mismo padre. No hace falta que estén pegados.
            </p>

            <pre>
              <code>{`h2 ~ p{
  color: #334155;
}`}</code>
            </pre>

            <div className="callout tip">
              Útil cuando “A” marca el inicio de una sección y quieres afectar a varios elementos que siguen.
            </div>

            <details className="dd">
              <summary>Mini-ejemplo mental</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<h2>Título</h2>
<p>✅ Seleccionado</p>
<div>...</div>
<p>✅ Seleccionado (sigue siendo hermano posterior)</p>`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>

        <div className="callout warn">
          Consejo pro: usa combinadores para describir estructura real, pero no te “cases” con el HTML.
          Si cambias el markup y tu CSS se rompe, el selector era demasiado frágil.
        </div>
        {/* NUEVA SECCIÓN: EJEMPLOS VISUALES PASO A PASO */}
        <div style={{ marginTop: '2rem', backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #e2e8f0' }}>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>🔍 Ejemplo visual paso a paso</h3>
          <p><strong>Situación:</strong> Tienes este HTML y quieres aplicar estilos diferentes según la relación entre elementos:</p>
          
          <pre style={{ backgroundColor: '#1e293b', color: '#f1f5f9', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.9em' }}>
            <code>{`<article class="blog-post">
  <h1>Mi artículo</h1>
  <p>Introducción del artículo</p>
  <div class="metadata">
    <span>Por: Juan</span>
    <span>Fecha: 2024</span>
  </div>
  <p>Contenido principal del artículo</p>
  <p>Más contenido del artículo</p>
</article>`}</code>
          </pre>

          <div className="callout tip">
            <strong>Analicemos cada combinador con este HTML:</strong>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li><code>.blog-post p</code> → ✅ Selecciona TODOS los párrafos (3 párrafos)</li>
              <li><code>.blog-post &gt; p</code> → ✅ Solo párrafos hijos directos (3 párrafos también, porque todos son hijos directos)</li>
              <li><code>h1 + p</code> → ✅ Solo el párrafo "Introducción" (está justo después del h1)</li>
              <li><code>h1 ~ p</code> → ✅ Todos los párrafos después del h1 (los 3 párrafos)</li>
              <li><code>.metadata + p</code> → ✅ Solo el párrafo "Contenido principal" (está justo después del div)</li>
            </ul>
          </div>

          <div className="callout warn">
            <strong>🤔 Pregunta para pensar:</strong> ¿Qué pasaría si movemos el div de metadata al final del artículo? 
            ¿Cuáles de estos selectores seguirían funcionando igual?
          </div>
        </div>      </section>

      {/* =========================
          SELECTORES DE ATRIBUTOS
      ========================== */}
      <section className="card">
        <h2>Selectores de atributos (muy útiles en formularios y enlaces)</h2>

        <p>
          Los selectores de atributos permiten seleccionar elementos por lo que tienen en el HTML, por ejemplo:
          <code> type</code>, <code> href</code>, <code> disabled</code>, <code> aria-*</code>, <code> data-*</code>…
        </p>

        <details className="dd" open>
          <summary>1) Presencia de atributo: [attr]</summary>
          <div className="dd-body">
            <p>
              Selecciona elementos que <strong>tengan</strong> ese atributo, sin importar su valor.
            </p>

            <pre>
              <code>{`input[disabled]{
  opacity: .6;
  cursor: not-allowed;
}`}</code>
            </pre>

            <div className="callout tip">
              Muy común con <code>[disabled]</code>, <code>[required]</code>, <code>[open]</code> (en details), etc.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2) Igualdad exacta: [attr="valor"]</summary>
          <div className="dd-body">
            <p>
              Selecciona elementos cuyo atributo sea <strong>exactamente</strong> ese valor.
            </p>

            <pre>
              <code>{`input[type="email"]{
  border: 2px solid #06b6d4;
}`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>3) Contiene palabra (~=) y prefijo de idioma (|=)</summary>
          <div className="dd-body">
            <p>
              <code>[attr~=valor]</code> busca <strong>una palabra completa</strong> en una lista separada por espacios.
              <br />
              <code>[attr|=valor]</code> se usa mucho con idiomas (ej: <code>en</code>, <code>en-US</code>).
            </p>

            <pre>
              <code>{`/* palabra completa dentro de class-like */
a[rel~="nofollow"]{ opacity: .8; }

/* idioma: "en" o "en-GB" */
html[lang|="es"] body{ letter-spacing: .1px; }`}</code>
            </pre>

            <div className="callout warn">
              Ojo: para clases reales usa <code>.clase</code>. Esto es más para atributos tipo <code>rel</code>, <code>lang</code>, etc.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>4) Empieza por (^=), termina en ($=), contiene (*=)</summary>
          <div className="dd-body">
            <p>Estos tres son especialmente prácticos en enlaces y recursos.</p>

            <pre>
              <code>{`/* empieza por */
a[href^="https://"]{ font-weight: 700; }

/* termina en */
a[href$=".pdf"]{ text-decoration: underline; }

/* contiene */
a[href*="docs"]{ border-bottom: 2px dashed currentColor; }`}</code>
            </pre>

            <div className="callout tip">
              Ejemplo típico: marcar enlaces externos (<code>https://</code>) o enlaces a PDF (<code>.pdf</code>).
            </div>
          </div>
        </details>

        <div className="callout">
          Los selectores de atributos forman parte del “tema avanzado” porque te permiten crear reglas inteligentes
          sin añadir clases extra, especialmente en <strong>formularios</strong> y <strong>enlaces</strong>.
        </div>
        {/* NUEVA SECCIÓN: CASOS PRÁCTICOS DE ATRIBUTOS */}
        <div style={{ marginTop: '2rem', backgroundColor: '#fefce8', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #fbbf24' }}>
          <h3 style={{ marginTop: 0, color: '#92400e' }}>💡 Casos prácticos donde brillan los selectores de atributos</h3>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div>
              <h4 style={{ marginTop: 0, color: '#7c3aed' }}>1. Formularios inteligentes</h4>
              <pre style={{ backgroundColor: '#1e293b', color: '#f1f5f9', padding: '0.8rem', borderRadius: '0.5rem', fontSize: '0.85em' }}>
                <code>{`/* Inputs obligatorios con borde rojo */
input[required] {
  border-left: 3px solid #ef4444;
}

/* Inputs deshabilitados grises */
input[disabled] {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

/* Checkboxes especiales */
input[type="checkbox"]:checked {
  accent-color: #22c55e;
}`}</code>
              </pre>
            </div>
            
            <div>
              <h4 style={{ marginTop: 0, color: '#7c3aed' }}>2. Enlaces inteligentes</h4>
              <pre style={{ backgroundColor: '#1e293b', color: '#f1f5f9', padding: '0.8rem', borderRadius: '0.5rem', fontSize: '0.85em' }}>
                <code>{`/* Enlaces externos con icono */
a[href^="http"]:not([href*="midominio.com"]) {
  padding-right: 1em;
  background: url("external-icon.svg") no-repeat right center;
}

/* Enlaces a archivos por tipo */
a[href$=".pdf"]:after { content: " 📄"; }
a[href$=".zip"]:after { content: " 📦"; }
a[href$=".doc"]:after { content: " 📃"; }`}</code>
              </pre>
            </div>
          </div>

          <div className="callout tip" style={{ marginTop: '1rem' }}>
            <strong>🎯 Ejercicio mental:</strong> Piensa en tu página web favorita. ¿Cómo crees que detectan si un enlace es externo para mostrar un icono? ¿Y cómo hacen que los botones "disabled" se vean grises? ¡Exacto, con selectores de atributos!
          </div>
        </div>      </section>

      {/* =========================
          ESPECIFICIDAD (RECORDATORIO)
      ========================== */}
      <section className="card">
        <h2>Recordatorio clave: especificidad con combinadores y atributos</h2>

        <p>
          Los combinadores (<code>&gt;</code>, <code>+</code>, <code>~</code> y el espacio) <strong>no suman</strong> por sí mismos,
          pero el selector completo sí puede volverse más específico si añades clases, IDs o atributos.
        </p>

        <details className="dd" open>
          <summary>Ejemplo rápido: ¿cuál gana?</summary>
          <div className="dd-body">
            <pre>
              <code>{`/* 1) etiqueta */
p{ color: green; }

/* 2) clase + etiqueta */
.card p{ color: blue; }

/* 3) atributo + etiqueta (cuenta como “clase”) */
p[title]{ color: purple; }`}</code>
            </pre>

            <p>
              Normalmente gana <code>.card p</code> o <code>p[title]</code> sobre <code>p</code>, porque clase/atributo
              es más específico que solo etiqueta. Si empatan, suele ganar el que esté <strong>más abajo</strong>.
            </p>

            <div className="callout tip">
              Regla pro: evita “subir” especificidad sin necesidad. Mantén selectores legibles.
            </div>
          </div>
        </details>

        <p style={{ marginTop: ".75rem" }}>
          📘 Repaso:{" "}
          <a
            href="https://www.w3schools.com/css/css_specificity.asp"
            target="_blank"
            rel="noreferrer"
          >
            CSS Specificity (W3Schools)
          </a>
        </p>
      </section>

      {/* =========================
          PRÁCTICA (SIN JS)
      ========================== */}
      <section className="card">
        <h2>Práctica guiada: tu primer laboratorio de selectores</h2>

        <p>
          Copia el HTML y el CSS en CodePen. Luego haz los retos. Aquí vas a "ver" hijos, hermanos y atributos.
        </p>

        {/* NUEVA SECCIÓN: ANTES DE LA PRÁCTICA */}
        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #38bdf8' }}>
          <h3 style={{ marginTop: 0, color: '#0c4a6e' }}>🚀 Preparación: cómo abordar esta práctica</h3>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h4 style={{ marginTop: 0, color: '#075985' }}>📝 Paso 1: Observar</h4>
              <p style={{ margin: 0, fontSize: '0.9em' }}>
                Antes de escribir CSS, lee el HTML completo. Identifica: ¿qué es hijo de qué? ¿qué elementos son hermanos?
              </p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h4 style={{ marginTop: 0, color: '#075985' }}>🔧 Paso 2: Experimentar</h4>
              <p style={{ margin: 0, fontSize: '0.9em' }}>
                Copia el código, aplica UN selector a la vez. Mira qué se selecciona. Coméntalo y descoméntalo.
              </p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h4 style={{ marginTop: 0, color: '#075985' }}>💡 Paso 3: Predecir</h4>
              <p style={{ margin: 0, fontSize: '0.9em' }}>
                Antes de probar un selector, intenta adivinar qué elementos afectará. Luego comprueba si acertaste.
              </p>
            </div>
          </div>
          
          <div className="callout tip" style={{ marginTop: '1rem' }}>
            <strong>⚡ Truco de debugging:</strong> En DevTools, haz clic derecho en un elemento → "Inspect". 
            Ve a la pestaña "Styles" y verás exactamente qué selectores le están afectando y con qué especificidad.
          </div>
        </div>

        <details className="dd" open>
          <summary>HTML para practicar</summary>
          <div className="dd-body">
            <pre>
              <code>{`<main class="wrap-demo">
  <nav class="menu">
    <a href="index.html">Inicio</a>
    <a href="docs.html" class="active">Docs</a>
    <a href="guia.pdf" title="PDF">Guía (PDF)</a>
    <div class="sub">
      <a href="https://example.com">Externo</a>
    </div>
  </nav>

  <section class="card">
    <h2>Título de sección</h2>
    <p>Primer párrafo (adyacente al h2)</p>
    <p>Segundo párrafo</p>
  </section>

  <section class="card">
    <h2>Otra sección</h2>
    <div>Bloque intermedio</div>
    <p>Este párrafo está después del h2, pero no pegado</p>
    <p>Otro párrafo</p>
  </section>

  <form class="form">
    <label>Email</label>
    <input type="email" placeholder="tu@email.com">

    <label>Nombre</label>
    <input type="text" placeholder="Tu nombre" disabled>
  </form>
</main>`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>CSS base (con combinadores y atributos)</summary>
          <div className="dd-body">
            <pre>
              <code>{`/* Base visual mínima */
.wrap-demo{ font-family: system-ui, sans-serif; padding: 1rem; }
.menu{ display: grid; gap: .25rem; margin-bottom: 1rem; }
.menu a{ padding: .35rem .5rem; border-radius: .5rem; display: inline-block; }
.card{ border: 1px solid #cbd5e1; padding: 1rem; border-radius: .75rem; margin-bottom: 1rem; }
.form{ display: grid; gap: .5rem; max-width: 520px; }
input{ padding: .5rem .6rem; border: 1px solid #cbd5e1; border-radius: .5rem; }

/* 1) hijo directo: solo enlaces directos del menú */
.menu > a{ font-weight: 700; }

/* 2) descendiente: enlaces en cualquier nivel dentro de .menu */
.menu a{ text-decoration: none; }

/* 3) hermano adyacente: solo el primer párrafo tras h2 */
h2 + p{ margin-top: .25rem; font-style: italic; }

/* 4) hermanos generales: todos los p tras h2 */
h2 ~ p{ color: #334155; }

/* 5) atributos: enlaces a pdf y enlaces externos */
a[href$=".pdf"]{ text-decoration: underline; }
a[href^="https://"]{ border-left: 4px solid currentColor; padding-left: .6rem; }

/* 6) atributos: inputs por tipo y disabled */
input[type="email"]{ border-width: 2px; }
input[disabled]{ opacity: .6; cursor: not-allowed; }`}</code>
            </pre>

            <div className="callout tip">
              Truco de aprendizaje: comenta una regla, recarga, observa qué cambia y explica por qué.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Retos (muy didácticos) - ¡Hazlos todos!</summary>
          <div className="dd-body">
            
            <div style={{ backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #fbbf24' }}>
              <h4 style={{ marginTop: 0, color: '#92400e' }}>🎯 Retos básicos (para entender la diferencia)</h4>
              <ol style={{ paddingLeft: '1.2rem' }}>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>Descendiente vs Hijo directo:</strong> Cambia <code>.menu &gt; a</code> por <code>.menu a</code>. 
                  ¿Qué enlaces pasan a verse en negrita y por qué? 
                  <em style={{ display: 'block', color: '#7c2d12', fontSize: '0.9em', marginTop: '0.3rem' }}>
                    💡 Pista: Mira si hay enlaces dentro de otros elementos dentro de .menu
                  </em>
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>Hermano adyacente:</strong> En la segunda tarjeta, mueve el <code>&lt;div&gt;</code> para que el primer <code>&lt;p&gt;</code> quede
                  justo después del <code>&lt;h2&gt;</code>. ¿Qué regla se activa?
                  <em style={{ display: 'block', color: '#7c2d12', fontSize: '0.9em', marginTop: '0.3rem' }}>
                    💡 Pista: Busca la regla <code>h2 + p</code> en el CSS
                  </em>
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>Selectores de atributos:</strong> Crea un selector que aplique estilo solo a <code>input[type="text"]</code> sin tocar el HTML.
                  <em style={{ display: 'block', color: '#7c2d12', fontSize: '0.9em', marginTop: '0.3rem' }}>
                    💡 Ejemplo: <code>input[type="text"] {'{ background-color: #f0f9ff; }'}</code>
                  </em>
                </li>
              </ol>
            </div>

            <div style={{ backgroundColor: '#f3e8ff', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #a855f7' }}>
              <h4 style={{ marginTop: 0, color: '#6b21a8' }}>🔥 Retos intermedios (para dominar los atributos)</h4>
              <ol start="4" style={{ paddingLeft: '1.2rem' }}>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>Enlaces inteligentes:</strong> Haz que los enlaces que contengan <code>docs</code> en su href se distingan con
                  <code> a[href*="docs"]</code>. Ponles un fondo amarillo claro.
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>Formularios accesibles:</strong> Crea reglas para que:
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
                    <li>Los inputs <code>[required]</code> tengan un borde azul grueso</li>
                    <li>Los inputs <code>[disabled]</code> tengan fondo gris y cursor "not-allowed"</li>
                    <li>Los inputs <code>[type="email"]</code> tengan un icono de @ (puedes usar ::after con content)</li>
                  </ul>
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>Enlaces por tipo de archivo:</strong> Añade estos nuevos enlaces al HTML y crea selectores para cada uno:
                  <pre style={{ backgroundColor: '#1e1b4b', color: '#e0e7ff', padding: '0.5rem', borderRadius: '0.3rem', fontSize: '0.8em', marginTop: '0.5rem' }}>
                    <code>{`<a href="manual.pdf">Manual en PDF</a>
<a href="codigo.zip">Descargar código</a>
<a href="https://github.com/usuario/repo">Ver en GitHub</a>`}</code>
                  </pre>
                </li>
              </ol>
            </div>

            <div style={{ backgroundColor: '#fde2e8', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem', border: '1px solid #f43f5e' }}>
              <h4 style={{ marginTop: 0, color: '#be123c' }}>⚡ Retos avanzados (para expertos)</h4>
              <ol start="7" style={{ paddingLeft: '1.2rem' }}>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>Batalla de especificidad:</strong> Escribe dos reglas que choquen (por ejemplo <code>a</code> y <code>.menu &gt; a</code>) 
                  y explica quién gana por especificidad / orden.
                  <em style={{ display: 'block', color: '#7f1d1d', fontSize: '0.9em', marginTop: '0.3rem' }}>
                    💡 Usa diferentes colores para ver quién gana
                  </em>
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>Selector complejo:</strong> Crea un selector que afecte solo a los párrafos que:
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
                    <li>Estén dentro de una tarjeta (.card)</li>
                    <li>Y vengan después de un h2</li>
                    <li>Pero que NO sean el primero después del h2</li>
                  </ul>
                  <em style={{ display: 'block', color: '#7f1d1d', fontSize: '0.9em', marginTop: '0.3rem' }}>
                    💡 Pista: Combina <code>h2 ~ p</code> con <code>:not(h2 + p)</code>
                  </em>
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>Formulario dinámico:</strong> Haz que cuando un input tenga el atributo <code>data-error="true"</code>, 
                  se vea con borde rojo y un mensaje de error usando <code>::after</code>.
                </li>
              </ol>
            </div>

            <div className="callout tip">
              <strong>📚 Para tu ejercicio de repaso:</strong> Cuando hagas estos retos, anota en comentarios HTML o CSS por qué cada selector funciona. 
              Por ejemplo: <code>{'/* h2 + p selecciona solo el primer párrafo después de h2 porque + es hermano adyacente */'}</code>
            </div>

            <div className="callout warn">
              <strong>🏆 Desafío final:</strong> Cuando domines estos retos, intenta crear una página completa usando SOLO selectores avanzados 
              (sin clases extra). ¿Puedes hacer un diseño bonito solo con combinadores y selectores de atributos?
            </div>
          </div>
        </details>

        <div className="callout warn">
          Nota para el curso: dejamos <strong>pseudoclases</strong> y <strong>pseudoelementos</strong> para los dos temas
          siguientes. Aquí te interesa dominar <strong>relaciones</strong> (combinadores) y{" "}
          <strong>atributos</strong>.
        </div>
      </section>

      {/* NUEVA SECCIÓN: ERRORES COMUNES Y CONSEJOS */}
      <section className="card">
        <h2>❌ Errores comunes de principiantes (¡evítalos!)</h2>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          
          <div style={{ backgroundColor: '#fef2f2', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #fca5a5' }}>
            <h3 style={{ marginTop: 0, color: '#dc2626' }}>🚫 Error #1: Confundir descendiente con hijo directo</h3>
            
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#7f1d1d' }}>❌ Incorrecto</h4>
                <pre style={{ backgroundColor: '#7f1d1d', color: '#fecaca', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.85em' }}>
                  <code>{`/* Quiero seleccionar solo los enlaces del menú principal */
.menu a { font-weight: bold; }

/* Problema: también selecciona enlaces de submenús */`}</code>
                </pre>
              </div>
              
              <div>
                <h4 style={{ marginTop: 0, color: '#166534' }}>✅ Correcto</h4>
                <pre style={{ backgroundColor: '#166534', color: '#dcfce7', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.85em' }}>
                  <code>{`/* Solo enlaces hijos directos del menú */
.menu > a { font-weight: bold; }

/* Ahora no afecta a submenús anidados */`}</code>
                </pre>
              </div>
            </div>
            
            <p style={{ color: '#7f1d1d', fontSize: '0.9em', margin: '0.8rem 0 0 0' }}>
              <strong>¿Por qué pasa?</strong> El espacio selecciona CUALQUIER nivel de anidamiento. El <code>&gt;</code> es más específico.
            </p>
          </div>

          <div style={{ backgroundColor: '#fffbeb', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #fbbf24' }}>
            <h3 style={{ marginTop: 0, color: '#d97706' }}>⚠️ Error #2: Olvidar que los hermanos deben tener el mismo padre</h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ marginTop: 0, color: '#92400e' }}>HTML problemático:</h4>
              <pre style={{ backgroundColor: '#451a03', color: '#fed7aa', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.85em' }}>
                <code>{`<div>
  <h2>Título</h2>
</div>
<div>
  <p>¿Soy hermano del h2?</p>  <!-- ❌ NO, tienen padres diferentes -->
</div>`}</code>
              </pre>
            </div>
            
            <p style={{ color: '#92400e', fontSize: '0.9em', margin: 0 }}>
              <strong>El selector <code>h2 + p</code> NO funcionará</strong> porque el h2 y el p no son hermanos (no comparten el mismo padre directo).
            </p>
          </div>

          <div style={{ backgroundColor: '#f0fdf4', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #22c55e' }}>
            <h3 style={{ marginTop: 0, color: '#16a34a' }}>✅ Error #3: Abusar de selectores muy largos</h3>
            
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div>
                <h4 style={{ marginTop: 0, color: '#dc2626' }}>😱 Pesadilla de mantenimiento</h4>
                <pre style={{ backgroundColor: '#7f1d1d', color: '#fecaca', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.8em' }}>
                  <code>{`.header nav ul li:nth-child(3) a:hover { 
  /* ¡Demasiado específico! */
}`}</code>
                </pre>
              </div>
              
              <div>
                <h4 style={{ marginTop: 0, color: '#166534' }}>😊 Más mantenible</h4>
                <pre style={{ backgroundColor: '#166534', color: '#dcfce7', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '0.8em' }}>
                  <code>{`.nav-item:hover {
  /* Simple y claro */
}`}</code>
                </pre>
              </div>
            </div>
            
            <div className="callout tip" style={{ marginTop: '1rem' }}>
              <strong>📏 Regla de oro:</strong> Si tu selector tiene más de 3-4 niveles, probablemente puedas simplificarlo con una clase bien nombrada.
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: CUÁNDO USAR QUÉ */}
      <section className="card">
        <h2>🎯 Guía rápida: ¿Cuándo usar cada selector?</h2>
        
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          
          <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #64748b' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>🔄 Combinadores</h3>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0 }}>
              <li><strong>Espacio ( )</strong>: Cuando quieres afectar elementos en cualquier nivel interior</li>
              <li><strong>Hijo (&gt;)</strong>: Para evitar afectar elementos muy anidados</li>
              <li><strong>Adyacente (+)</strong>: Para pares específicos como "título + párrafo"</li>
              <li><strong>Hermanos (~)</strong>: Para efectos que se aplican "después de cierto punto"</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: '#fefce8', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #facc15' }}>
            <h3 style={{ marginTop: 0, color: '#a16207' }}>🎛️ Selectores de atributos</h3>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0 }}>
              <li><strong>[attr]</strong>: Estados como [disabled], [required], [open]</li>
              <li><strong>[attr="valor"]</strong>: Tipos específicos como [type="email"]</li>
              <li><strong>[attr^="..."]</strong>: Enlaces externos, URLs https://</li>
              <li><strong>[attr$="..."]</strong>: Tipos de archivos (.pdf, .zip, .doc)</li>
              <li><strong>[attr*="..."]</strong>: Buscar palabras clave en URLs o clases</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: '#fef7ff', padding: '1.25rem', borderRadius: '0.75rem', border: '2px solid #c084fc' }}>
            <h3 style={{ marginTop: 0, color: '#7c3aed' }}>💡 Consejos de uso</h3>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0 }}>
              <li><strong>Formularios:</strong> Los atributos son tu mejor amigo</li>
              <li><strong>Navegación:</strong> Combinadores para diferentes niveles de menú</li>
              <li><strong>Blog/artículos:</strong> Hermanos para párrafos consecutivos</li>
              <li><strong>Componentes:</strong> Hijo directo para evitar efectos no deseados</li>
            </ul>
          </div>
        </div>

        <div className="callout info" style={{ marginTop: '1.5rem' }}>
          <strong>🧠 Para memorizar fácil:</strong> Los combinadores hablan de POSICIÓN (dónde está). 
          Los atributos hablan de CARACTERÍSTICAS (qué tiene). 
          ¡Es como describir a una persona por dónde vive vs cómo es!
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
