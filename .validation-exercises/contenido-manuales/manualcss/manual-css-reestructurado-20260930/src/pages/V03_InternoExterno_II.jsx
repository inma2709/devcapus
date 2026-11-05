import { useEffect, useMemo, useState } from "react";

export default function BaseCSSProyecto() {
  useEffect(() => {
    document.title = "CSS · Base del proyecto y selector universal";
  }, []);

  const questions = useMemo(() => [
    { id: "q1", q: "¿Qué problema principal resuelve un CSS reset?", options: ["Hace que el CSS cargue más rápido", "Elimina estilos por defecto del navegador que difieren entre browsers", "Añade estilos modernos automáticamente", "Corrige errores de sintaxis CSS"], correct: "Elimina estilos por defecto del navegador que difieren entre browsers", why: "Cada navegador aplica márgenes, paddings y tipografías distintos. El reset los borra para partir de cero con un diseño consistente." },
    { id: "q2", q: "¿Qué efecto tiene box-sizing: border-box?", options: ["Muestra un borde en todos los elementos", "El padding y el borde se incluyen dentro del ancho/alto declarado", "Elimina el box model por defecto", "Desactiva el margin collapse"], correct: "El padding y el borde se incluyen dentro del ancho/alto declarado", why: "Con border-box, un div de width:200px con padding:20px sigue midiendo 200px en total, no 240px." },
    { id: "q3", q: "¿Qué selecciona el selector universal *?", options: ["Solo los elementos directos del body", "Solo los elementos visibles en pantalla", "Todos los elementos HTML del documento", "Solo elementos sin clase ni ID"], correct: "Todos los elementos HTML del documento", why: "El selector * aplica a todos los nodos del DOM, por eso es ideal para resetear box-sizing globalmente." },
    { id: "q4", q: "¿Cuál es la diferencia entre un CSS reset y normalize.css?", options: ["Son exactamente lo mismo", "El reset elimina todos los estilos; normalize los iguala manteniendo los útiles", "Normalize es obsoleto", "El reset es solo para imágenes"], correct: "El reset elimina todos los estilos; normalize los iguala manteniendo los útiles", why: "Un reset pone todo a cero. Normalize.css mantiene los estilos útiles y corrige inconsistencias entre navegadores sin destruirlos." },
    { id: "q5", q: "¿Por qué aplicar box-sizing: border-box desde el inicio del proyecto?", options: ["Porque es obligatorio en HTML5", "Para que padding y border no rompan los cálculos de layout", "Para que las imágenes sean siempre responsive", "Porque lo exige Bootstrap"], correct: "Para que padding y border no rompan los cálculos de layout", why: "Los cálculos de grid, flex y anchos fijos son más predecibles cuando el padding no suma al ancho declarado." },
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
          INTRODUCCIÓN DIDÁCTICA
      ========================================= */}
      <section className="card">
        <h1>🏗️ Base del proyecto y selector universal</h1>
        
        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #0ea5e9' }}>
          <h2 style={{ marginTop: 0, color: '#0c4a6e' }}>🎯 Analogía del constructor</h2>
          <p style={{ color: '#075985', marginBottom: '1rem' }}>
            Imagina que vas a construir una casa. Antes de empezar a diseñar la cocina 
            o el salón, necesitas <strong>preparar el terreno</strong>:
          </p>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h3 style={{ marginTop: 0, color: '#075985', fontSize: '1rem' }}>🏠 Construcción real:</h3>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#0c4a6e' }}>
                <li>Limpiar el terreno</li>
                <li>Nivelar el suelo</li>
                <li>Poner cimientos</li>
                <li>Definir reglas básicas</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h3 style={{ marginTop: 0, color: '#075985', fontSize: '1rem' }}>💻 CSS de base:</h3>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#0c4a6e' }}>
                <li>Eliminar estilos "sucios"</li>
                <li>Normalizar diferencias</li>
                <li>Configurar box-sizing</li>
                <li>Definir reglas globales</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="callout tip">
          <strong>💡 Concepto clave:</strong> Los estilos de base no diseñan tu web, 
          solo preparan un <strong>terreno limpio y consistente</strong> para que puedas diseñar sin sorpresas.
        </div>
      </section>

    {/* ========================================
    ESTILOS POR DEFECTO DEL NAVEGADOR
========================================= */}
<section className="card">
  <h2>🎨 Los estilos por defecto del navegador (default styles)</h2>

  <div style={{ backgroundColor: '#fef3c7', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #f59e0b' }}>
    <h3 style={{ marginTop: 0, color: '#92400e' }}>🤔 ¿Sabías que...?</h3>
    <p style={{ color: '#d97706', marginBottom: 0 }}>
      Aunque no escribas ni una sola línea de CSS, los navegadores ya aplican
      <strong> estilos por defecto</strong> a los elementos HTML.
      Es como si cada navegador tuviera una "hoja de estilos invisible" aplicada automáticamente.
    </p>
  </div>

  <h3>🔍 Ejemplos que puedes ver ahora mismo:</h3>
  
  <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginBottom: '1.5rem' }}>
    <div style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #d1d5db' }}>
      <h4 style={{ marginTop: 0, color: '#374151' }}>📏 Espaciado:</h4>
      <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0 }}>
        <li>El <code>body</code> tiene márgenes de 8px</li>
        <li>Los <code>h1, h2, p</code> tienen márgenes verticales</li>
        <li>Las listas tienen padding-left</li>
      </ul>
    </div>
    
    <div style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #d1d5db' }}>
      <h4 style={{ marginTop: 0, color: '#374151' }}>🎯 Tipografía:</h4>
      <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0 }}>
        <li><code>h1</code> = 32px, negrita</li>
        <li><code>h2</code> = 24px, negrita</li>
        <li><code>p</code> = 16px, normal</li>
      </ul>
    </div>
    
    <div style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #d1d5db' }}>
      <h4 style={{ marginTop: 0, color: '#374151' }}>🎨 Apariencia:</h4>
      <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0 }}>
        <li>Enlaces: azules (#0000EE) y subrayados</li>
        <li>Listas: viñetas • o números 1, 2, 3...</li>
        <li>Botones: fondos grises, bordes 3D</li>
      </ul>
    </div>
  </div>

  <div className="callout">
    <strong>🎭 Estos estilos son como un "maquillaje por defecto":</strong> el navegador los aplica 
    automáticamente para que HTML sin CSS sea legible, pero no siempre coinciden con nuestro diseño.
  </div>
  
  {/* EJERCICIO PRÁCTICO */}
  <div style={{ backgroundColor: '#ecfdf5', padding: '1.5rem', borderRadius: '0.75rem', marginTop: '1.5rem', border: '2px solid #10b981' }}>
    <h3 style={{ marginTop: 0, color: '#047857' }}>🧪 Experimenta ahora mismo:</h3>
    <ol style={{ paddingLeft: '1.2rem', color: '#059669' }}>
      <li>Abre las DevTools (F12) en esta página</li>
      <li>Ve a la pestaña "Elements" o "Elementos"</li>
      <li>Busca cualquier <code>&lt;h2&gt;</code> y mira sus "Computed" styles</li>
      <li>Verás estilos que <strong>no están en tu CSS</strong> → ¡esos son los del navegador!</li>
    </ol>
    
    <div className="callout tip" style={{ marginTop: '1rem', fontSize: '0.9em' }}>
      <strong>💡 Pista:</strong> Busca "user agent stylesheet" en los estilos computados.
    </div>
  </div>

  {/* =========================
      POR QUÉ EXISTEN
  ========================== */}
  <details className="dd" open>
    <summary>¿Por qué los navegadores traen estilos por defecto?</summary>
    <div className="dd-body">
      <p>
        Los estilos por defecto existen por una razón histórica y práctica:
      </p>

      <ul>
        <li>para que una página sea legible sin CSS</li>
        <li>para garantizar accesibilidad básica</li>
        <li>para que HTML funcione como documento estructurado</li>
      </ul>

      <p>
        Gracias a esto, un HTML sin CSS sigue siendo usable.
        El problema aparece cuando empezamos a <strong>diseñar</strong>.
      </p>
    </div>
  </details>

  {/* =========================
      EL PROBLEMA REAL
  ========================== */}
  <details className="dd">
    <summary>El problema real: inconsistencias entre navegadores</summary>
    <div className="dd-body">
      <p>
        Cada navegador tiene su propia hoja de estilos interna
        (conocida como <em>user agent stylesheet</em>).
      </p>

      <p>
        Eso significa que:
      </p>

      <ul>
        <li>los márgenes pueden variar</li>
        <li>los tamaños de texto no coinciden exactamente</li>
        <li>los formularios se ven distintos</li>
      </ul>

      <div className="callout warn">
        Aunque tu CSS esté bien escrito, el resultado puede variar
        si no controlas los estilos de partida.
      </div>
    </div>
  </details>

  {/* =========================
      POR QUÉ SE ANULAN
  ========================== */}
  <details className="dd">
    <summary>¿Por qué es necesario anular o normalizar estos estilos?</summary>
    <div className="dd-body">
      <p>
        En proyectos reales, no queremos que el navegador decida el diseño.
        Queremos partir de una base:
      </p>

      <ul>
        <li>predecible</li>
        <li>coherente entre navegadores</li>
        <li>bajo nuestro control</li>
      </ul>

      <p>
        Por eso usamos un <strong>reset</strong>, un <strong>normalize</strong>
        o una solución intermedia como la base CSS que has visto en el tema anterior.
      </p>

      <div className="callout tip">
        Anular estilos del navegador no es “romper HTML”,
        es tomar el control del diseño.
      </div>
    </div>
  </details>

  {/* =========================
      DOCUMENTACIÓN
  ========================== */}
  <h3>Documentación recomendada</h3>

  <div className="doc-link-card">
    <a
      href="https://www.w3schools.com/cssref/css_default_values.php"
      target="_blank"
      rel="noreferrer"
    >
      W3Schools · CSS Default Values
    </a>
    <p className="doc-link-card__desc">
      Lista completa de los valores por defecto que los navegadores aplican
      a cada elemento HTML. Muy útil para entender
      <em>qué está pasando antes de que escribas tu CSS</em>.
    </p>
  </div>

  <div className="callout tip">
    Recomendación: no memorices esta lista.
    Úsala como referencia cuando algo “no se comporta como esperas”.
  </div>

  {/* =========================
      IDEA CLAVE
  ========================== */}
  <div className="callout">
    Idea clave: los estilos por defecto existen para ayudar,
    pero en diseño web profesional deben ser
    <strong>controlados o normalizados</strong>.
  </div>
</section>


      {/* ========================================
          EL SELECTOR UNIVERSAL
      ========================================= */}
      <section className="card">
        <h2>El selector universal (<code>*</code>)</h2>

        <p>
          El selector universal <code>*</code> selecciona
          <strong> absolutamente todos los elementos</strong> del documento HTML.
        </p>

        <pre>
          <code>{`*{
  box-sizing: border-box;
}`}</code>
        </pre>

        <p>
          En esta etapa del proyecto, el selector universal
          <strong> no se utiliza para diseñar</strong>,
          sino para aplicar reglas técnicas que deben cumplirse en toda la página.
        </p>

        <div className="callout tip">
          Piensa en el selector <code>*</code> como la “preparación del terreno”
          antes de construir la casa.
        </div>
      </section>

      {/* ========================================
          RESET VS NORMALIZE
      ========================================= */}
      <section className="card">
        <h2>🔄 Anular los estilos del navegador: Reset y Normalize</h2>

        <div style={{ backgroundColor: '#fef7ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #c084fc' }}>
          <h3 style={{ marginTop: 0, color: '#7c3aed' }}>🤔 El dilema del diseñador web</h3>
          <p style={{ color: '#8b5cf6', marginBottom: 0 }}>
            Imagina que quieres pintar un cuadro, pero el lienzo ya tiene <strong>manchas y dibujos</strong> 
            de otra persona. ¿Qué haces? <strong>¡Exactamente ese es el problema con los estilos del navegador!</strong>
          </p>
        </div>

        <h3>📋 Dos enfoques principales para tratar los estilos por defecto:</h3>

        <details className="dd" open>
          <summary>🧹 Reset completo: "Borrar todo y empezar desde cero"</summary>
          <div className="dd-body">
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginBottom: '1rem' }}>
              <div style={{ backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #fecaca' }}>
                <h4 style={{ marginTop: 0, color: '#dc2626' }}>❌ Reset = ELIMINAR TODO</h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#991b1b' }}>
                  <li>Margin: 0 en todo</li>
                  <li>Padding: 0 en todo</li>
                  <li>Sin viñetas en listas</li>
                  <li>Sin estilos en enlaces</li>
                </ul>
              </div>
              
              <div style={{ backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                <h4 style={{ marginTop: 0, color: '#059669' }}>✅ Resultado:</h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#047857' }}>
                  <li>Control absoluto</li>
                  <li>Consistencia total</li>
                  <li>Pero... hay que redefinir TODO</li>
                </ul>
              </div>
            </div>
            
            <div className="callout warn">
              <strong>⚠️ Cuidado:</strong> Con reset completo, un <code>&lt;h1&gt;</code> se ve igual que un <code>&lt;p&gt;</code> 
              hasta que tú le des estilos. ¡Puedes perder semántica visual!
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🔧 Normalize: "Arreglar inconsistencias sin borrar todo"</summary>
          <div className="dd-body">
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginBottom: '1rem' }}>
              <div style={{ backgroundColor: '#f0f9ff', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bfdbfe' }}>
                <h4 style={{ marginTop: 0, color: '#1d4ed8' }}>🔧 Normalize = CORREGIR</h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#1e40af' }}>
                  <li>Mantiene estilos útiles</li>
                  <li>Corrige inconsistencias</li>
                  <li>Los h1, h2... siguen siendo diferentes</li>
                  <li>Los enlaces siguen siendo azules</li>
                </ul>
              </div>
              
              <div style={{ backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                <h4 style={{ marginTop: 0, color: '#059669' }}>✅ Beneficio:</h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#047857' }}>
                  <li>Menos trabajo</li>
                  <li>Mantiene semántica</li>
                  <li>Buena base de partida</li>
                </ul>
              </div>
            </div>
          </div>
        </details>

        <div className="callout">
          <strong>🎯 Tendencia moderna:</strong> Usar una <strong>solución intermedia</strong> → 
          limpiar solo lo problemático sin borrar comportamientos útiles.
        </div>
      </section>

      {/* ========================================
          BLOQUE BASE RECOMENDADO
      ========================================= */}
      <section className="card">
        <h2>🛠️ Base CSS recomendada para empezar un proyecto limpio</h2>

        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #0ea5e9' }}>
          <h3 style={{ marginTop: 0, color: '#0c4a6e' }}>🎯 ¿Qué es esta "base CSS"?</h3>
          <p style={{ color: '#075985', marginBottom: 0 }}>
            Es como el <strong>"kit de herramientas básicas"</strong> que pones al inicio de tu proyecto. 
            No es para memorizar, sino para <strong>entender qué problemas específicos resuelve</strong> cada línea.
          </p>
        </div>

        <div className="callout tip">
          <strong>📂 Ubicación:</strong> Este bloque se coloca <strong>al inicio de la hoja CSS</strong> 
          o en un archivo separado (<code>base.css</code>) que importas primero.
        </div>

        <h3>🔧 Bloque completo con explicaciones paso a paso:</h3>

        <pre>
          <code>{`/* ============================================
   RESET / BASE RECOMENDADO PARA PROYECTOS LIMPIOS
   ============================================ */

/* 1) 📦 MODELO DE CAJA: anchos y altos incluyen padding y border */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2) 🧹 RESET DE ESPACIADO: eliminamos márgenes/paddings problemáticos */
html, body, h1, h2, h3, h4, h5, h6, p,
figure, blockquote, dl, dd, ul, ol, li, pre, fieldset {
  margin: 0;
  padding: 0;
}

/* 3) 📋 LISTAS Y TABLAS: comportamiento más limpio */
ul, ol {
  list-style: none; /* Sin viñetas por defecto */
}

table {
  border-collapse: collapse; /* Bordes unidos, no separados */
  border-spacing: 0;
}

/* 4) 🖼️ IMÁGENES Y MEDIOS: responsivos y en bloque */
img, picture, video, canvas, svg {
  display: block;        /* Sin espacios extraños debajo */
  max-width: 100%;       /* Nunca se salen del contenedor */
  height: auto;          /* Mantienen proporciones */
}

/* 5) 📝 FORMULARIOS: heredan tipografía del documento */
button, input, select, textarea {
  font: inherit;         /* Misma fuente que el resto */
  color: inherit;        /* Mismo color que el resto */
  background: transparent;
  border: none;
}

/* 6) 🔗 ENLACES: sin decoración por defecto */
a {
  color: inherit;        /* Color del texto padre */
  text-decoration: none; /* Sin subrayado automático */
}

/* 7) 📄 BASE DEL DOCUMENTO: altura completa disponible */
html, body {
  height: 100%;          /* Para layouts de altura completa */
}

body {
  line-height: 1.6;      /* Espaciado de línea más legible */
}`}</code>
        </pre>

        {/* EXPLICACIÓN DETALLADA */}
        <h3>🎯 ¿Qué hace cada sección exactamente?</h3>
        
        <details className="dd" open>
          <summary>📦 Sección 1: Modelo de caja consistente</summary>
          <div className="dd-body">
            <p><strong>Problema que resuelve:</strong></p>
            <p>Por defecto, si tienes un <code>div</code> de 200px de ancho y le añades 20px de padding, 
            el ancho total será 240px (200 + 20 + 20). Esto es confuso y problemático para layouts.</p>
            
            <p><strong>Solución:</strong></p>
            <p><code>box-sizing: border-box</code> hace que el padding y border se incluyan DENTRO 
            del ancho declarado. Un div de 200px será siempre 200px, sin importar el padding.</p>
            
            <div className="callout tip">
              <strong>💡 Ventaja:</strong> Los cálculos de layout son mucho más predecibles.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🧹 Sección 2: Reset de espaciado</summary>
          <div className="dd-body">
            <p><strong>Problema que resuelve:</strong></p>
            <p>Los navegadores aplican márgenes y paddings diferentes. Tu <code>h1</code> puede 
            tener 16px de margen en Chrome y 14px en Firefox.</p>
            
            <p><strong>Solución:</strong></p>
            <p>Ponemos margin y padding a 0 en los elementos más comunes. Después TÚ decides 
            exactamente cuánto espacio quieres.</p>
          </div>
        </details>

        <details className="dd">
          <summary>🖼️ Sección 4: Imágenes responsivas</summary>
          <div className="dd-body">
            <p><strong>Problemas que resuelve:</strong></p>
            <ul>
              <li><strong>Espacio misterioso debajo:</strong> Las imágenes son inline por defecto, lo que crea un espacio extraño debajo</li>
              <li><strong>Desbordamiento:</strong> Una imagen de 1000px puede romper tu diseño en una pantalla de 400px</li>
            </ul>
            
            <p><strong>Solución:</strong></p>
            <ul>
              <li><code>display: block</code> → Elimina el espacio extraño</li>
              <li><code>max-width: 100%</code> → La imagen nunca se sale del contenedor</li>
              <li><code>height: auto</code> → Mantiene las proporciones originales</li>
            </ul>
          </div>
        </details>

        {/* CONSEJO PRÁCTICO */}
        <div style={{ backgroundColor: '#ecfdf5', padding: '1.5rem', borderRadius: '0.75rem', marginTop: '1.5rem', border: '2px solid #10b981' }}>
          <h3 style={{ marginTop: 0, color: '#047857' }}>🚀 Consejo profesional</h3>
          <p style={{ color: '#059669', marginBottom: '1rem' }}>
            <strong>¡No copies y pegues este código sin entenderlo!</strong> Es mejor que entiendas 
            cada sección y la añadas a tu proyecto cuando la necesites.
          </p>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div>
              <h4 style={{ marginTop: 0, color: '#047857' }}>✅ Empieza con:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#065f46' }}>
                <li>box-sizing: border-box</li>
                <li>Reset básico de margins</li>
                <li>Imágenes responsivas</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ marginTop: 0, color: '#047857' }}>⏳ Añade después:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#065f46' }}>
                <li>Resets de formularios</li>
                <li>Configuración de enlaces</li>
                <li>Otras utilidades específicas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          ACCESIBILIDAD Y OUTLINE
      ========================================= */}
      <section className="card">
        <h2>Accesibilidad y el foco (<code>outline</code>)</h2>

        <p>
          Por defecto, los navegadores muestran un <strong>contorno visible</strong>
          cuando un elemento recibe el foco mediante teclado
          (por ejemplo, al navegar con TAB).
        </p>

        <p>
          Este contorno es <strong>fundamental para la accesibilidad</strong>.
          Si no lo modificas, el navegador ya hace un trabajo correcto.
        </p>

        <div className="callout tip">
          No eliminar <code>outline</code> es la opción más segura y correcta.
        </div>

        <p>
          El problema aparece cuando se elimina de forma global:
        </p>

        <pre>
          <code>{`/* ❌ Mala práctica */
*{
  outline: none;
}`}</code>
        </pre>

        <p>
          Esto hace que los usuarios que navegan con teclado
          <strong>pierdan la referencia visual</strong> de dónde están,
          lo que supone un problema serio de accesibilidad.
        </p>

        <div className="callout warn">
          Nunca elimines <code>outline</code> globalmente
          sin ofrecer una alternativa visible.
        </div>

        <p>
          Si deseas personalizar el foco, la práctica moderna y accesible es usar
          <code>:focus-visible</code>:
        </p>

        <pre>
          <code>{`/* ✅ Buena práctica */
:focus-visible{
  outline: 3px solid #fde047;
  outline-offset: 3px;
}`}</code>
        </pre>

        <div className="callout">
          Esto mantiene la accesibilidad y mejora la experiencia visual.
        </div>
      </section>

      {/* ========================================
          CIERRE Y PRÁCTICA
      ========================================= */}
      <section className="card">
        <h2>🎯 Resumen: Tu "checklist" de CSS base</h2>

        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #0ea5e9' }}>
          <h3 style={{ marginTop: 0, color: '#0c4a6e' }}>🏗️ Recuerda la analogía de la construcción</h3>
          <p style={{ color: '#075985', marginBottom: 0 }}>
            Esta base CSS <strong>no diseña la web</strong>. Es como preparar el terreno antes de construir: 
            garantiza que trabajas sobre una base <strong>consistente, predecible y accesible</strong>.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #22c55e' }}>
            <h3 style={{ marginTop: 0, color: '#14532d' }}>✅ Lo que SÍ has logrado:</h3>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#166534' }}>
              <li>Entender por qué existen los estilos del navegador</li>
              <li>Conocer la diferencia entre Reset y Normalize</li>
              <li>Dominar el selector universal <code>*</code> y sus combinaciones</li>
              <li>Saber preparar una base CSS sólida</li>
              <li>Mantener la accesibilidad con <code>outline</code></li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: '#fef3c7', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #f59e0b' }}>
            <h3 style={{ marginTop: 0, color: '#92400e' }}>🚀 Lo que viene después:</h3>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#d97706' }}>
              <li>Variables CSS para coherencia visual</li>
              <li>Selectores avanzados para control preciso</li>
              <li>Pseudoclases para interactividad</li>
              <li>Layouts modernos (Grid y Flexbox)</li>
              <li>Responsive design</li>
            </ul>
          </div>
        </div>

        <div className="callout tip">
          <strong>💡 Idea clave:</strong> A partir de aquí, ya puedes aplicar variables, selectores,
          pseudoclases, pseudoelementos y layouts sabiendo que el navegador
          <strong>no va a jugar en tu contra</strong>.
        </div>
      </section>

      {/* ========================================
          EJERCICIO PRÁCTICO FINAL
      ========================================= */}
      <section className="card">
        <h2>🧪 Ejercicio práctico: "Antes y después"</h2>

        <div style={{ backgroundColor: '#ecfdf5', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #10b981' }}>
          <h3 style={{ marginTop: 0, color: '#047857' }}>🎯 Tu misión</h3>
          <p style={{ color: '#059669' }}>
            Crear dos páginas HTML idénticas: una <strong>sin base CSS</strong> y otra <strong>con base CSS</strong>. 
            Vas a comprobar por ti mismo la diferencia que marca empezar con una base sólida.
          </p>
        </div>

        <details className="dd" open>
          <summary>Paso 1: HTML de prueba (copia este código)</summary>
          <div className="dd-body">
            <pre>
              <code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prueba de CSS Base</title>
  <!-- Aquí vas a poner tu CSS -->
</head>
<body>
  <h1>Mi primer proyecto web</h1>
  
  <p>Este es un párrafo de <a href="#">ejemplo con enlace</a> para probar estilos.</p>
  
  <ul>
    <li>Elemento de lista 1</li>
    <li>Elemento de lista 2</li>
    <li>Elemento de lista 3</li>
  </ul>
  
  <div style="width: 200px; padding: 20px; border: 2px solid red;">
    Esta caja debería tener 200px de ancho
  </div>
  
  <img src="https://picsum.photos/800/400" alt="Imagen de prueba">
  
  <form>
    <input type="text" placeholder="Escribe algo">
    <button>Enviar</button>
  </form>
</body>
</html>`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>Paso 2: Crear dos versiones</summary>
          <div className="dd-body">
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div style={{ backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #fecaca' }}>
                <h4 style={{ marginTop: 0, color: '#dc2626' }}>📄 Version 1: "sin-base.html"</h4>
                <p style={{ fontSize: '0.9em', margin: 0, color: '#991b1b' }}>
                  Sin CSS base. Solo el HTML. Guarda el archivo y ábrelo en el navegador.
                </p>
              </div>
              
              <div style={{ backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                <h4 style={{ marginTop: 0, color: '#059669' }}>📄 Version 2: "con-base.html"</h4>
                <p style={{ fontSize: '0.9em', margin: 0, color: '#047857' }}>
                  Con la base CSS del tema. Añade el CSS en el <code>&lt;style&gt;</code> del head.
                </p>
              </div>
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Paso 3: ¿Qué diferencias observas?</summary>
          <div className="dd-body">
            <p><strong>Fíjate especialmente en:</strong></p>
            <ul>
              <li>🎯 <strong>La caja roja:</strong> ¿Mide realmente 200px en ambas versiones?</li>
              <li>📏 <strong>Espaciados:</strong> ¿Los márgenes son iguales?</li>
              <li>🖼️ <strong>La imagen:</strong> ¿Se comporta igual en ambas?</li>
              <li>📋 <strong>La lista:</strong> ¿Las viñetas aparecen igual?</li>
              <li>🔗 <strong>Los enlaces:</strong> ¿El color y subrayado cambian?</li>
            </ul>
            
            <div className="callout">
              <strong>🤓 Reflexión:</strong> ¿Cuál de las dos versiones te da más control para diseñar exactamente lo que quieres?
            </div>
          </div>
        </details>

        <div style={{ backgroundColor: '#fef7ff', padding: '1.5rem', borderRadius: '0.75rem', marginTop: '1.5rem', border: '2px solid #c084fc' }}>
          <h3 style={{ marginTop: 0, color: '#7c3aed' }}>🏆 ¡Felicitaciones!</h3>
          <p style={{ color: '#8b5cf6', marginBottom: 0 }}>
            Si has completado este ejercicio, ya tienes una <strong>comprensión práctica</strong> 
            de por qué es importante empezar con una base CSS sólida. ¡Estás preparado/a para los siguientes temas!
          </p>
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
