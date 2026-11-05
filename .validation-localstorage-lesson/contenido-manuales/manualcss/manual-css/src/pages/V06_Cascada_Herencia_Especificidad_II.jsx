import { useEffect, useMemo, useState } from "react";
import { manualAsset } from "../utils/manualAsset";

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TemaColorCSS() {
  useEffect(() => {
    document.title = "Tema · El color en CSS: paletas, significado y control visual";
  }, []);

  
  const quizBase = [
    {
      id: "q1",
      q: "¿Qué representa el canal alfa en rgba( )?",
      options: [
        "La saturación del color",
        "La opacidad/transparencia del color",
        "El brillo máximo del color",
        "El tono (hue) del color",
      ],
      correctIndex: 1,
      explain:
        "El cuarto valor de rgba() es el canal alfa (0 a 1): 0 = transparente, 1 = opaco.",
    },
    {
      id: "q2",
      q: "¿Cuál es una ventaja real de HSL frente a RGB cuando ajustas un color?",
      options: [
        "Permite sumar colores como si fueran números",
        "Facilita variar el tono, la saturación o la luminosidad de forma controlada",
        "Hace que el color pese menos en el CSS",
        "Convierte automáticamente el color en degradado",
      ],
      correctIndex: 1,
      explain:
        "HSL separa tono/saturación/luminosidad, lo que hace muy directo aclarar, oscurecer o desaturar un color sin “romperlo”.",
    },
    {
      id: "q3",
      q: "En un sistema visual, ¿qué papel suelen tener los colores neutros (grises/blancos/negros)?",
      options: [
        "Solo decorar la cabecera",
        "Sustituir al color principal",
        "Soportar la legibilidad: fondos, texto, bordes y jerarquías",
        "Hacer que todo parezca más saturado",
      ],
      correctIndex: 2,
      explain:
        "Los neutros son el “pegamento” del diseño: controlan lectura, separaciones, fondos y estructura sin competir con el color de marca.",
    },
    {
      id: "q4",
      q: "¿Cuál es la forma más recomendable de reutilizar una paleta en todo un proyecto CSS moderno?",
      options: [
        "Copiar y pegar valores HEX en cada regla",
        "Definir variables CSS (custom properties) con roles de color",
        "Usar exclusivamente nombres de color (red, blue…)",
        "Guardar los colores en comentarios y recordarlos",
      ],
      correctIndex: 1,
      explain:
        "Las variables CSS permiten centralizar la paleta, mantener consistencia y cambiar el diseño sin modificar cientos de reglas.",
    },
    {
      id: "q5",
      q: "¿Qué afirmación describe mejor un degradado CSS frente a una imagen de fondo?",
      options: [
        "Siempre pesa más que una imagen",
        "No es responsive",
        "Escala sin pérdida, pesa cero y se adapta mejor al layout",
        "Solo funciona en pantallas grandes",
      ],
      correctIndex: 2,
      explain:
        "Los degradados son generados por el navegador: no se descargan como archivo y se adaptan a cualquier tamaño.",
    },
    {
      id: "q6",
      q: "¿Por qué los nombres de color (red, blue, etc.) son limitados en proyectos reales?",
      options: [
        "Porque no se ven en móviles",
        "Porque no permiten precisión ni coherencia de marca",
        "Porque solo sirven en HTML, no en CSS",
        "Porque no existen en los navegadores modernos",
      ],
      correctIndex: 1,
      explain:
        "Son útiles para aprender o prototipar, pero no garantizan una identidad exacta ni un sistema escalable y coherente.",
    },
    {
      id: "q7",
      q: "En accesibilidad visual, ¿qué es imprescindible cuando hay texto sobre un color de fondo?",
      options: [
        "Que el fondo sea bonito",
        "Que el contraste sea suficiente para leer cómodamente",
        "Que el color sea el de la marca",
        "Que el texto tenga sombra siempre",
      ],
      correctIndex: 1,
      explain:
        "Sin contraste suficiente, el texto pierde legibilidad. La estética no compensa la pérdida de comprensión.",
    },
    {
      id: "q8",
      q: "¿Qué define principalmente el 'hue' (tono) en HSL?",
      options: [
        "La cantidad de transparencia",
        "La familia del color (rojo, verde, azul...) en el círculo cromático",
        "El tamaño de la fuente",
        "La intensidad del color en pantalla",
      ],
      correctIndex: 1,
      explain:
        "El tono es el ángulo en el círculo cromático (0–360°) que determina si estás en rojos, verdes, azules, etc.",
    },
    {
      id: "q9",
      q: "¿Cuál es un error típico al elegir colores para una web?",
      options: [
        "Empezar por una paleta base",
        "Elegir colores sueltos por separado sin pensar en relaciones ni roles",
        "Usar neutros para texto y fondos",
        "Probar la paleta en contexto real",
      ],
      correctIndex: 1,
      explain:
        "El diseño funciona por relaciones: contraste, jerarquía y consistencia. Colores aislados suelen producir caos visual.",
    },
    {
      id: "q10",
      q: "¿Qué propósito suele tener un color de acento (accent) en un sistema visual?",
      options: [
        "Sustituir al color del texto",
        "Marcar acciones o elementos clave: botones, links destacados, estados",
        "Eliminar los neutros",
        "Evitar la jerarquía visual",
      ],
      correctIndex: 1,
      explain:
        "El acento se reserva para llamar la atención donde importa: acción principal, estado, énfasis o elementos interactivos.",
    },
  ];

  // Mezcla las preguntas una sola vez
  // quizBase se crea para esta lección y el cuestionario debe mezclarse una sola vez.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const quiz = useMemo(() => shuffleArray(quizBase), []);

  const [answers, setAnswers] = useState(() => {
    const init = {};
    quiz.forEach((it) => (init[it.id] = null));
    return init;
  });

  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let s = 0;
    quiz.forEach((it) => {
      if (answers[it.id] === it.correctIndex) s += 1;
    });
    return s;
  }, [answers, quiz]);

  function onChoose(qId, optionIndex) {
    setAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Lleva al feedback
    const el = document.getElementById("resultado-test");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function onReset() {
    const init = {};
    quiz.forEach((it) => (init[it.id] = null));
    setAnswers(init);
    setSubmitted(false);
    const el = document.getElementById("test");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="doc">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      {/* HERO */}
      <header className="doc-hero" id="contenido">
         <figure className="media">
              <img
                src={manualAsset("color.png")}
                alt="Página de referencia sobre principios del dise?o web"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">
                Psicología del color en diseño web.
              </figcaption>
            </figure>
        <p className="doc-kicker">Tema · CSS</p>
        <h1>🎨 El color en CSS: paletas, significado y control visual</h1>
        
        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #0ea5e9' }}>
          <h2 style={{ marginTop: 0, color: '#0c4a6e' }}>🎭 Analogía del director de cine</h2>
          <p style={{ color: '#075985', marginBottom: '1rem' }}>
            Imagina que eres el director de una película. El color no es solo "decoración" - es una <strong>herramienta narrativa</strong> que dice al espectador:
          </p>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h3 style={{ marginTop: 0, color: '#075985', fontSize: '1rem' }}>🎬 En el cine:</h3>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#0c4a6e' }}>
                <li>¿Dónde mirar primero?</li>
                <li>¿Qué emociones sentir?</li>
                <li>¿Cuál es lo importante?</li>
                <li>¿Qué atmósfera crear?</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #bae6fd' }}>
              <h3 style={{ marginTop: 0, color: '#075985', fontSize: '1rem' }}>💻 En tu web:</h3>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#0c4a6e' }}>
                <li>¿Dónde hacer clic?</li>
                <li>¿Qué transmite confianza?</li>
                <li>¿Qué es prioritario?</li>
                <li>¿Qué sensación crear?</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="doc-lead">
          El color en CSS no es un adorno: es una herramienta de{" "}
          <strong>jerarquía, lectura, intención y coherencia visual</strong>.
          Dominarlo significa controlar cómo se percibe tu interfaz y cómo se guía al usuario.
        </p>
        <div className="callout tip">
          <strong>💡 Objetivo del tema:</strong> aprender a elegir y construir una paleta base, traducirla a código con formatos reales
          (HEX/RGB/HSL/RGBA) y usarla en fondos y degradados con criterio profesional.
        </div>
      </header>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice del tema">
        <h2>Índice</h2>
        <ol>
          <li>
            <a href="#s1">Color en la web: percepción y código</a>
          </li>
          <li>
            <a href="#s2">Cómo se define un color en CSS</a>
          </li>
          <li>
            <a href="#s3">Referencia: tabla de colores (HTML Color Codes)</a>
          </li>
          <li>
            <a href="#s4">Paletas base: coherencia y sistema (Coolors)</a>
          </li>
          <li>
            <a href="#s5">🎯 Tokens reutilizables: el sistema profesional</a>
          </li>
          <li>
            <a href="#s6">Degradados: profundidad sin imágenes (Gradients)</a>
          </li>
          <li>
            <a href="#s7">Filosofía del color: intención y significado</a>
          </li>
          <li>
            <a href="#s8">Accesibilidad: contraste y responsabilidad</a>
          </li>
          <li>
            <a href="#s9">🔤 Tipografía web: Google Fonts y fuentes propias</a>
          </li>
          <li>
            <a href="#s10">Ejercicios</a>
          </li>
          <li>
            <a href="#test">Test de repaso</a>
          </li>
        </ol>
      </nav>

      {/* 1 */}
      <section className="doc-section" id="s1">
        <h2>1) Color en la web: percepción y código</h2>
        <p>
          El navegador no interpreta emociones; interpreta valores. Pero el usuario sí: el color impacta en{" "}
          <strong>confianza, urgencia, calma, orden</strong> y en cómo se recorren los contenidos. Por eso el color se diseña
          como un <strong>sistema</strong>, no como decisiones aisladas.
        </p>

        <details className="dd">
          <summary>El color como herramienta de jerarquía</summary>
          <div className="dd-body">
            <p>
              En un diseño bien construido, el color responde a preguntas prácticas:
            </p>
            <ul>
              <li>¿Qué es lo más importante en la pantalla?</li>
              <li>¿Qué es interactivo?</li>
              <li>¿Qué es secundario (apoyo, contexto, metadatos)?</li>
              <li>¿Dónde debe fijarse la mirada primero?</li>
            </ul>
            <div className="callout warn">
              Si usas demasiados colores “protagonistas”, compiten entre sí y el usuario pierde orientación.
            </div>
          </div>
        </details>
      </section>

      {/* 2 */}
      <section className="doc-section" id="s2">
        <h2>2) 🔧 Cómo se define un color en CSS</h2>
        
        <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #22c55e' }}>
          <h3 style={{ marginTop: 0, color: '#14532d' }}>🛠️ Analogía de la caja de herramientas</h3>
          <p style={{ color: '#166534', marginBottom: '1rem' }}>
            CSS te da varios "destornilladores" para el color. No se trata de memorizar todos, 
            sino de saber <strong>qué herramienta usar para cada trabajo</strong>:
          </p>
          
          <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', fontSize: '0.9em' }}>
            <div style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.4rem', border: '1px solid #bbf7d0' }}>
              <strong style={{ color: '#059669' }}>🔨 HEX:</strong> <span style={{ color: '#047857' }}>Para compartir con diseñadores</span>
            </div>
            <div style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.4rem', border: '1px solid #bbf7d0' }}>
              <strong style={{ color: '#059669' }}>🎨 HSL:</strong> <span style={{ color: '#047857' }}>Para ajustar tonos fácilmente</span>
            </div>
            <div style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.4rem', border: '1px solid #bbf7d0' }}>
              <strong style={{ color: '#059669' }}>👻 RGBA:</strong> <span style={{ color: '#047857' }}>Para transparencias y capas</span>
            </div>
            <div style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.4rem', border: '1px solid #bbf7d0' }}>
              <strong style={{ color: '#059669' }}>📝 Nombres:</strong> <span style={{ color: '#047857' }}>Para aprender y prototipar</span>
            </div>
          </div>
        </div>
        
        <p>
          CSS admite varios formatos. No se trata de memorizar, sino de saber{" "}
          <strong>qué formato te conviene según el problema</strong>.
        </p>

      <details className="dd">
  <summary>Formatos principales (con ejemplos, ventajas y uso profesional)</summary>
  <div className="dd-body">
    <p>
      CSS admite varios formatos para definir colores. No son “formas distintas de decir lo mismo”: cada formato{" "}
      <strong>te facilita un tipo de trabajo</strong> (precisión, transparencia, ajustes rápidos, coherencia de paleta, etc.).
      La clave profesional es elegir el formato según el objetivo:{" "}
      <strong>identidad</strong>, <strong>mantenimiento</strong>, <strong>accesibilidad</strong> y <strong>consistencia</strong>.
    </p>

    <div className="callout">
      Regla práctica: en proyectos reales, lo habitual es trabajar con <strong>paletas y roles</strong> (tokens/variables) y
      después expresar esos colores en <strong>HEX o HSL</strong>, usando <strong>RGBA</strong> cuando necesitas capas y
      transparencia.
    </div>

    {/* =========================
        TABLA VISUAL · FORMATOS
       ========================= */}

    <div className="table-wrap" tabIndex={0} aria-label="Tabla comparativa de formatos de color en CSS">
      <table className="table table-zebra">
        <caption>Comparativa de formatos de color en CSS</caption>
        <thead>
          <tr>
            <th scope="col">Formato</th>
            <th scope="col">Ejemplo</th>
            <th scope="col">Lo mejor de este formato</th>
            <th scope="col">Cuándo usarlo</th>
            <th scope="col">Limitación habitual</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">Nombres</th>
            <td>
              <code>red</code>, <code>steelblue</code>
            </td>
            <td>
              Muy legibles, rápidos para aprender y hacer prototipos sin pensar en códigos.
            </td>
            <td>
              Ejemplos educativos, pruebas rápidas, demostraciones de selectores y propiedades.
            </td>
            <td>
              Paleta limitada y poca precisión: no garantizan coherencia de marca ni un sistema escalable.
            </td>
          </tr>

          <tr>
            <th scope="row">HEX</th>
            <td>
              <code>#FF5733</code>
            </td>
            <td>
              Estándar de industria: fácil de compartir, copiar y pegar; muy usado en diseño y documentación.
            </td>
            <td>
              Definir paletas base, tokens de color, estilos de UI (botones, enlaces, cabeceras).
            </td>
            <td>
              Menos intuitivo para ajustar claridad/saturación sin herramientas (hay que recalcular).
            </td>
          </tr>

          <tr>
            <th scope="row">RGB</th>
            <td>
              <code>rgb(255, 87, 51)</code>
            </td>
            <td>
              Perfecto cuando piensas en “canales” (rojo/verde/azul) o cuando haces cálculos en JS o con variables.
            </td>
            <td>
              Animaciones, cálculos programáticos, conversiones, cuando recibes datos en RGB desde herramientas.
            </td>
            <td>
              Ajustar “a ojo” es incómodo: no expresa directamente tono/saturación/luminosidad.
            </td>
          </tr>

          <tr>
            <th scope="row">RGBA</th>
            <td>
              <code>rgba(255, 87, 51, 0.7)</code>
            </td>
            <td>
              Control de transparencia: ideal para overlays, glassmorphism, sombras suaves y capas visuales.
            </td>
            <td>
              Fondos semitransparentes, superposiciones, estados hover, tarjetas “cristal”, highlights.
            </td>
            <td>
              Si abusas, puede empeorar la legibilidad: el color final depende del fondo (contexto).
            </td>
          </tr>

          <tr>
            <th scope="row">HSL</th>
            <td>
              <code>hsl(10 100% 60%)</code>
            </td>
            <td>
              Muy intuitivo para diseñar: separa <strong>tono</strong> (qué color), <strong>saturación</strong> (intensidad) y{" "}
              <strong>luminosidad</strong> (claro/oscuro).
            </td>
            <td>
              Construir paletas coherentes, crear variantes (más claro/oscuro), diseñar estados (hover/focus) sin romper el color.
            </td>
            <td>
              Si no entiendes hue/saturation/lightness, al principio cuesta; pero una vez dominado es muy potente.
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={5}>
              <strong>Consejo:</strong> define la paleta como roles (variables CSS) y genera variantes con HSL o transparencias
              con RGBA. Eso hace tu CSS más mantenible y consistente.
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    {/* =========================
        DESARROLLO PROFESIONAL
       ========================= */}

    <details className="dd dd-nested">
      <summary>Cómo pensar HSL (sin memorizar: entendiendo el sistema)</summary>
      <div className="dd-body">
        <p>
          HSL divide el color en tres partes. Esto te permite ajustar un color de forma “quirúrgica”:
        </p>
        <ul>
          <li>
            <strong>Hue (Tono)</strong>: el color en el círculo cromático (0–360).{" "}
            <code>0</code> ≈ rojo, <code>120</code> ≈ verde, <code>240</code> ≈ azul.
          </li>
          <li>
            <strong>Saturation (Saturación)</strong>: intensidad del color. <code>0%</code> es gris; <code>100%</code> es
            color puro.
          </li>
          <li>
            <strong>Lightness (Luminosidad)</strong>: claridad. <code>0%</code> negro, <code>50%</code> “normal”,{" "}
            <code>100%</code> blanco.
          </li>
        </ul>

        <pre>
          <code>{`/* Misma familia (tono), cambiando solo luminosidad */
.base   { background: hsl(10 100% 55%); }
.clara  { background: hsl(10 100% 70%); }  /* más clara */
.oscura { background: hsl(10 100% 35%); }  /* más oscura */`}</code>
        </pre>

        <div className="callout tip">
          En un sistema UI, una técnica muy limpia es mantener el mismo <strong>tono</strong> y variar{" "}
          <strong>luminosidad</strong> para estados (hover/active) sin que el color “cambie de personalidad”.
        </div>
      </div>
    </details>

    <details className="dd dd-nested">
      <summary>RGBA con intención: transparencia no significa “decoración”</summary>
      <div className="dd-body">
        <p>
          <code>rgba()</code> añade el canal alfa: <strong>0</strong> (transparente) a <strong>1</strong> (opaco). Se usa para
          crear capas visuales y jerarquía, por ejemplo:
        </p>
        <ul>
          <li>Tarjetas encima de un fondo (efecto “cristal”)</li>
          <li>Overlays de modal</li>
          <li>Sombras suaves y realistas</li>
          <li>Fondos de avisos (callouts) sin perder el contexto</li>
        </ul>

        <pre>
          <code>{`/* Overlay típico de modal */
.overlay{
  background: rgba(0,0,0,.55);
}

/* Tarjeta “cristal” encima de un fondo */
.glass{
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(255,255,255,.55);
}`}</code>
        </pre>

        <div className="callout warn">
          Precaución: la transparencia depende del fondo. Si el fondo cambia (imagen, degradado, vídeo), la legibilidad puede
          romperse. Siempre prueba en contexto real.
        </div>
      </div>
    </details>

    <details className="dd dd-nested">
      <summary>Buenas decisiones en proyectos reales: un método rápido</summary>
      <div className="dd-body">
        <ol>
          <li>
            Elige una paleta base (por ejemplo en Coolors) y asigna <strong>roles</strong>: primary, secondary, accent, bg, text.
          </li>
          <li>
            Declara esos roles como <strong>variables CSS</strong> en <code>:root</code>.
          </li>
          <li>
            Genera variantes: para <strong>hover/active</strong> usa HSL (cambia luminosidad) o usa RGBA en overlays.
          </li>
          <li>
            Comprueba contraste y legibilidad antes de “cerrar” el diseño.
          </li>
        </ol>

        <pre>
          <code>{`/* Ejemplo de roles + uso */
:root{
  --primary: #E44D26;
  --text: #1f2937;
  --bg: #fff7ed;
  --surface: #ffffff;
}

.page{ background: var(--bg); color: var(--text); }
.btn-primary{ background: var(--primary); color:#fff; }`}</code>
        </pre>
      </div>
    </details>

    <div className="callout tip">
      Si estás ajustando claridad u oscuridad de un color, HSL suele ser más cómodo: cambias la luminosidad y el tono se mantiene
      estable. Para capas y overlays, RGBA es tu herramienta principal.
    </div>
  </div>
</details>

      </section>
      <section className="doc-section" id="s6">
        <h2>Videos para ampliar</h2>
        <div className="doc-link-card">
  <a
    href="https://www.youtube.com/watch?v=c2EY2E3ti80&t=334s"
    target="_blank"
    rel="noreferrer"
  >
    Curso CSS · Colores, formatos y teoría del color (vídeo)
  </a>
  <p className="doc-link-card__desc">
    Vídeo centrado en explicar cómo funcionan los colores en CSS desde una perspectiva práctica.
    Recorre los distintos formatos (<code>HEX</code>, <code>RGB</code>, <code>RGBA</code>, <code>HSL</code>) y muestra
    cómo influyen en el diseño real de una página web.
    Es especialmente útil para entender la relación entre teoría del color y código.
  </p>
</div>

<div className="doc-link-card">
  <a
    href="https://www.youtube.com/watch?v=TI-OVY11HD4&t=110s"
    target="_blank"
    rel="noreferrer"
  >
    CSS · HSL y control profesional del color (vídeo)
  </a>
  <p className="doc-link-card__desc">
    Vídeo enfocado en el uso de <code>HSL</code> como sistema para trabajar el color de forma coherente.
    Explica cómo variar luminosidad y saturación sin romper la identidad visual,
    una técnica clave para crear estados <em>hover</em>, variantes y sistemas de color mantenibles.
  </p>
</div>
      </section>

      {/* 3 */}
      <section className="doc-section" id="s3">
        <h2>3) Referencia: tabla de colores (HTML Color Codes)</h2>
        <p>
          Este recurso funciona como una “chuleta” visual: te ayuda a ver nombres, equivalencias y códigos sin perder tiempo.
        </p>

        <details className="dd">
          <summary>¿Qué hace esta página y cuándo usarla?</summary>
          <div className="dd-body">
            <p>
              La tabla de colores te muestra:
            </p>
            <ul>
              <li>Nombre del color (si existe como color reconocido)</li>
              <li>Código HEX</li>
              <li>Valores RGB</li>
              <li>Vista previa inmediata</li>
            </ul>
            <div className="callout">
              Úsala para aprender nomenclatura, comparar variantes rápidas o localizar un valor cuando estás estudiando o documentando.
            </div>
          </div>
        </details>

       {/* =========================
   RECURSOS DEL TEMA · COLOR
   ========================= */}

<div className="doc-link-card">
  <a
    href="https://htmlcolorcodes.com/es/tabla-de-colores/"
    target="_blank"
    rel="noreferrer"
  >
    HTML Color Codes · Tabla de colores
  </a>
  <p className="doc-link-card__desc">
    Tabla visual de colores reconocidos por los navegadores.
    Muestra nombres, valores HEX y RGB, ideal como referencia rápida
    para aprender el lenguaje del color en la web.
  </p>
</div>
<div className="doc-link-card">
  <a
    href="https://www.w3schools.com/css/css_colors_hsl.asp"
    target="_blank"
    rel="noreferrer"
  >
    W3Schools · CSS HSL Colors
  </a>
  <p className="doc-link-card__desc">
    Documentación práctica sobre el formato <code>HSL</code> en CSS.
    Explica qué son el tono (<em>hue</em>), la saturación y la luminosidad,
    con ejemplos interactivos que permiten ver cómo pequeños cambios
    afectan al color final. Muy útil para entender por qué HSL es clave
    en sistemas de color coherentes.
  </p>
</div>


<div className="doc-link-card">
  <a
    href="https://coolors.co/"
    target="_blank"
    rel="noreferrer"
  >
    Coolors · Generador de paletas de color
  </a>
  <p className="doc-link-card__desc">
    Herramienta profesional para crear paletas armónicas.
    Permite bloquear colores, generar variaciones y exportar
    valores en HEX, RGB y HSL.
  </p>
</div>

<div className="doc-link-card">
  <a
    href="https://gradients.app/es/gradient"
    target="_blank"
    rel="noreferrer"
  >
    Gradients · Generador de degradados CSS
  </a>
  <p className="doc-link-card__desc">
    Generador visual de <code>linear-gradient()</code> y
    <code>radial-gradient()</code>.
    Ideal para crear fondos modernos sin usar imágenes.
  </p>
</div>

      </section>

      {/* 4 */}
      <section className="doc-section" id="s4">
        <h2>4) Paletas base: coherencia y sistema (Coolors)</h2>
        <p>
          Elegir una paleta base significa definir un conjunto de colores que trabajen juntos con roles claros. En un proyecto
          profesional, el color no se decide “pantalla a pantalla”; se define como <strong>infraestructura</strong>.
        </p>

        <details className="dd">
          <summary>La lógica de una paleta base (roles)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Color principal</strong>: identidad. Se usa con intención (botones principales, títulos destacados, elementos clave).
              </li>
              <li>
                <strong>Color secundario</strong>: apoyo y contraste controlado.
              </li>
              <li>
                <strong>Color de acento</strong>: acciones o llamadas a la acción. Debe ser “escaso” para que funcione.
              </li>
              <li>
                <strong>Neutros</strong>: fondos, texto, bordes, separación y legibilidad.
              </li>
            </ul>

            <div className="callout warn">
              Un error típico es elegir 6 colores saturados “porque quedan bien”. El resultado suele ser ruido visual.
              La fuerza aparece cuando hay roles claros y repetición coherente.
            </div>
          </div>
        </details>

        <details className="dd dd-nested">
          <summary>Ejemplo de paleta como variables CSS (sistema reutilizable)</summary>
          <div className="dd-body">
            <pre>
              <code>{`/* Ejemplo de paleta con roles (ajusta a tu proyecto) */
:root{
  --c-primary: #E44D26;     /* identidad */
  --c-secondary: #F16529;   /* apoyo */
  --c-accent: #FFD400;      /* llamadas a la acción / foco */
  --c-bg: #fff7ed;          /* fondo */
  --c-surface: #ffffff;     /* tarjetas */
  --c-text: #1f2937;        /* texto principal */
  --c-muted: #374151;       /* texto secundario */
  --c-border: rgba(31,41,55,.12);
}

/* Uso */
.btn-primary{ background: var(--c-primary); color:#fff; }
.card{ background: var(--c-surface); border: 1px solid var(--c-border); }
`}</code>
            </pre>
            <div className="callout tip">
              Una paleta “bien pensada” reduce decisiones repetidas y hace que el proyecto escale sin perder identidad.
            </div>
          </div>
        </details>
      </section>

      {/* 5 */}
      <section className="doc-section" id="s5">
        <h2>5) 🎯 Tokens reutilizables: el sistema profesional</h2>
        
        <div style={{ backgroundColor: '#f0f4ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #6366f1' }}>
          <h3 style={{ marginTop: 0, color: '#3730a3' }}>🏗️ Analogía del arquitecto</h3>
          <p style={{ color: '#4338ca', marginBottom: '1rem' }}>
            Un arquitecto no decide cada ladrillo por separado. Crea <strong>especificaciones estándar</strong>: 
            "ventana tipo A", "puerta tipo B", "muro tipo C". Los tokens CSS son tus "especificaciones de diseño":
          </p>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #c7d2fe' }}>
              <h4 style={{ marginTop: 0, color: '#4338ca', fontSize: '1rem' }}>🏛️ En arquitectura:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#3730a3' }}>
                <li><strong>Especifica una vez</strong></li>
                <li><strong>Reutiliza en todo el edificio</strong></li>
                <li><strong>Cambios centralizados</strong></li>
                <li><strong>Coherencia garantizada</strong></li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #c7d2fe' }}>
              <h4 style={{ marginTop: 0, color: '#4338ca', fontSize: '1rem' }}>🎨 Con tokens CSS:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', margin: 0, color: '#3730a3' }}>
                <li><strong>Define una vez</strong></li>
                <li><strong>Usa en toda la interfaz</strong></li>
                <li><strong>Actualiza desde un lugar</strong></li>
                <li><strong>Mantén la marca consistente</strong></li>
              </ul>
            </div>
          </div>
        </div>
        
        <p>
          Los <strong>tokens de diseño</strong> son variables CSS que representan decisiones de diseño como roles, no como valores aislados.
          Es la diferencia entre pensar "este botón es #3B82F6" y pensar "este botón usa nuestro color primario interactivo".
        </p>

        <details className="dd">
          <summary>🏗️ Arquitectura de tokens: de primitivos a semánticos</summary>
          <div className="dd-body">
            <p>
              Un sistema profesional organiza los tokens en <strong>capas</strong>, desde valores brutos hasta roles específicos:
            </p>
            
            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#fef3c7', borderRadius: '0.75rem', border: '2px solid #f59e0b' }}>
                <h4 style={{ marginTop: 0, color: '#92400e', fontSize: '1.1rem' }}>📐 Capa 1: Tokens Primitivos</h4>
                <p style={{ color: '#a16207', marginBottom: '1rem', fontSize: '0.9em' }}>
                  Los "materiales en bruto": paletas de color sin roles asignados.
                </p>
                
                <div className="color-palette">
                  <div className="color-swatch">
                    <div className="color-preview" style={{ backgroundColor: '#c026d3' }}></div>
                    <div className="token-code">--color-primary-500</div>
                    <small style={{ fontSize: '0.75em', color: '#92400e' }}>#c026d3</small>
                  </div>
                  <div className="color-swatch">
                    <div className="color-preview" style={{ backgroundColor: '#a21caf' }}></div>
                    <div className="token-code">--color-primary-600</div>
                    <small style={{ fontSize: '0.75em', color: '#92400e' }}>#a21caf</small>
                  </div>
                  <div className="color-swatch">
                    <div className="color-preview" style={{ backgroundColor: '#86198f' }}></div>
                    <div className="token-code">--color-primary-700</div>
                    <small style={{ fontSize: '0.75em', color: '#92400e' }}>#86198f</small>
                  </div>
                  <div className="color-swatch">
                    <div className="color-preview" style={{ backgroundColor: '#334155' }}></div>
                    <div className="token-code">--color-neutral-700</div>
                    <small style={{ fontSize: '0.75em', color: '#92400e' }}>#334155</small>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '0.75rem', border: '2px solid #22c55e' }}>
                <h4 style={{ marginTop: 0, color: '#14532d', fontSize: '1.1rem' }}>🎯 Capa 2: Tokens Semánticos</h4>
                <p style={{ color: '#166534', marginBottom: '1rem', fontSize: '0.9em' }}>
                  Los "roles de interfaz": qué función cumple cada color en tu sistema.
                </p>
                
                <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                  <div style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                    <strong style={{ color: '#059669', fontSize: '0.9em' }}>--interactive-primary</strong>
                    <br />
                    <small style={{ color: '#047857', fontSize: '0.8em' }}>var(--color-primary-500)</small>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                    <strong style={{ color: '#059669', fontSize: '0.9em' }}>--text-primary</strong>
                    <br />
                    <small style={{ color: '#047857', fontSize: '0.8em' }}>var(--color-neutral-900)</small>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                    <strong style={{ color: '#059669', fontSize: '0.9em' }}>--feedback-success</strong>
                    <br />
                    <small style={{ color: '#047857', fontSize: '0.8em' }}>var(--color-success-500)</small>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                    <strong style={{ color: '#059669', fontSize: '0.9em' }}>--surface-elevated</strong>
                    <br />
                    <small style={{ color: '#047857', fontSize: '0.8em' }}>#ffffff</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="callout tip">
              <strong>💡 La clave:</strong> Los componentes usan tokens semánticos, nunca primitivos. 
              Si necesitas cambiar tu "color primario", cambias un token primitivo y se actualiza toda la interfaz.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🔧 Implementación práctica: cómo crear tu sistema de tokens</summary>
          <div className="dd-body">
            <h4>Paso 1: Define tokens primitivos (la paleta base)</h4>
            <pre style={{ fontSize: '0.85em', marginBottom: '1.5rem' }}>
              <code>{`:root {
  /* 🎨 Tokens primitivos - Paleta base */
  --color-primary-50: #fdf4ff;
  --color-primary-100: #fae8ff;
  --color-primary-500: #c026d3;  /* Principal */
  --color-primary-600: #a21caf;  /* Más oscuro */
  --color-primary-700: #86198f;  /* Hover/active */
  
  --color-neutral-100: #f1f5f9;
  --color-neutral-500: #64748b;
  --color-neutral-700: #334155;
  --color-neutral-900: #0f172a;
  
  --color-success-500: #22c55e;
  --color-error-500: #ef4444;
}`}</code>
            </pre>

            <h4>Paso 2: Crea tokens semánticos (roles)</h4>
            <pre style={{ fontSize: '0.85em', marginBottom: '1.5rem' }}>
              <code>{`  /* 🎯 Tokens semánticos - Roles de interfaz */
  --interactive-primary: var(--color-primary-500);
  --interactive-primary-hover: var(--color-primary-600);
  --interactive-primary-active: var(--color-primary-700);
  
  --text-primary: var(--color-neutral-900);
  --text-secondary: var(--color-neutral-700);
  --text-tertiary: var(--color-neutral-500);
  
  --surface-primary: var(--color-neutral-100);
  --surface-secondary: #ffffff;
  
  --feedback-success: var(--color-success-500);
  --feedback-error: var(--color-error-500);
}`}</code>
            </pre>

            <h4>Paso 3: Usa tokens en tus componentes</h4>
            <pre style={{ fontSize: '0.85em', marginBottom: '1.5rem' }}>
              <code>{`/* ❌ Mal - Valores hardcodeados */
.btn-primary {
  background: #c026d3;
  color: #ffffff;
}
.btn-primary:hover {
  background: #a21caf;
}

/* ✅ Bien - Usando tokens semánticos */
.btn-primary {
  background: var(--interactive-primary);
  color: var(--text-inverse);
}
.btn-primary:hover {
  background: var(--interactive-primary-hover);
}`}</code>
            </pre>

            <div className="callout warn">
              <strong>⚠️ Regla de oro:</strong> Los componentes <strong>nunca</strong> deben referenciar tokens primitivos directamente. 
              Siempre usa tokens semánticos para mantener la flexibilidad del sistema.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🚀 Sistema completo: espaciado, tipografía y más allá del color</summary>
          <div className="dd-body">
            <p>
              Un sistema de tokens maduro va más allá del color. Incluye <strong>espaciado</strong>, <strong>tipografía</strong>, 
              <strong>sombras</strong> y <strong>formas</strong>:
            </p>

            <div className="token-showcase">
              <div className="token-card">
                <h4 style={{ marginTop: 0, color: '#059669' }}>📏 Espaciado</h4>
                <div style={{ display: 'grid', gap: '0.5rem', fontSize: '0.85em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '0.25rem', height: '0.25rem', background: '#22c55e' }}></div>
                    <span className="token-code">--space-xs: 0.25rem</span> (4px)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '0.5rem', height: '0.5rem', background: '#22c55e' }}></div>
                    <span className="token-code">--space-sm: 0.5rem</span> (8px)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '1rem', height: '1rem', background: '#22c55e' }}></div>
                    <span className="token-code">--space-md: 1rem</span> (16px)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '1.5rem', height: '1.5rem', background: '#22c55e' }}></div>
                    <span className="token-code">--space-lg: 1.5rem</span> (24px)
                  </div>
                </div>
              </div>

              <div className="token-card">
                <h4 style={{ marginTop: 0, color: '#dc2626' }}>✍️ Tipografía</h4>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <div style={{ fontSize: '0.75rem' }}>
                    <span className="token-code">--font-size-xs</span> - Texto pequeño
                  </div>
                  <div style={{ fontSize: '1rem' }}>
                    <span className="token-code">--font-size-md</span> - Texto normal
                  </div>
                  <div style={{ fontSize: '1.25rem' }}>
                    <span className="token-code">--font-size-xl</span> - Texto grande
                  </div>
                  <div style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>
                    <span className="token-code" style={{ fontSize: '0.75rem' }}>--font-size-3xl + bold</span>
                  </div>
                </div>
              </div>

              <div className="token-card">
                <h4 style={{ marginTop: 0, color: '#7c3aed' }}>🔳 Formas y Sombras</h4>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: '#f3f4f6', borderRadius: '0.25rem' }}>
                    <span className="token-code">--radius-sm</span>
                  </div>
                  <div style={{ padding: '0.75rem', background: '#f3f4f6', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
                    <span className="token-code">--radius-lg + shadow-md</span>
                  </div>
                </div>
              </div>
            </div>

            <h4 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Ejemplo de implementación completa:</h4>
            <pre style={{ fontSize: '0.8em' }}>
              <code>{`:root {
  /* Espaciado */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  
  /* Tipografía */
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-weight-normal: 400;
  --font-weight-bold: 700;
  
  /* Formas */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
}

/* Uso en componentes */
.card {
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  font-size: var(--font-size-md);
}

.btn {
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-bold);
}`}</code>
            </pre>

            <div className="callout tip">
              <strong>💰 Beneficio real:</strong> Con este sistema, cambiar el "radio de esquinas" de toda tu interfaz 
              significa cambiar una sola línea: <code>--radius-md: 1rem;</code> ➜ <code>--radius-md: 0.25rem;</code>
            </div>
          </div>
        </details>
      </section>

      {/* 6 */}
      <section className="doc-section" id="s6">
        <h2>6) ✨ Degradados: profundidad sin imágenes (Gradients)</h2>
        
        <div style={{ backgroundColor: '#f0f4ff', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '2px solid #6366f1' }}>
          <h3 style={{ marginTop: 0, color: '#3730a3' }}>🏃‍♂️ Analogía del maquillador</h3>
          <p style={{ color: '#4338ca', marginBottom: '1rem' }}>
            Un maquillador profesional no usa un solo color plano. Crea <strong>transiciones suaves</strong> entre tonos 
            para dar volumen, profundidad y naturalidad. Los degradados CSS son tu "brocha digital":
          </p>
          
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #c7d2fe' }}>
              <h4 style={{ marginTop: 0, color: '#4338ca', fontSize: '1rem' }}>🎨 Linear-gradient:</h4>
              <p style={{ margin: 0, fontSize: '0.9em', color: '#3730a3' }}>
                Como pasar el pincel en <strong>línea recta</strong>. Perfecto para cabeceras, 
                barras de progreso, fondos direccionales.
              </p>
              <div style={{ 
                height: '40px', 
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', 
                borderRadius: '0.25rem', 
                marginTop: '0.5rem' 
              }}></div>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #c7d2fe' }}>
              <h4 style={{ marginTop: 0, color: '#4338ca', fontSize: '1rem' }}>🎯 Radial-gradient:</h4>
              <p style={{ margin: 0, fontSize: '0.9em', color: '#3730a3' }}>
                Como difuminar desde un <strong>punto central</strong>. Ideal para efectos de luz, 
                heroes con profundidad, "halos" sutiles.
              </p>
              <div style={{ 
                height: '40px', 
                background: 'radial-gradient(circle, #6366f1, #1e1b4b)', 
                borderRadius: '0.25rem', 
                marginTop: '0.5rem' 
              }}></div>
            </div>
          </div>
        </div>
        
        <p>
          Los degradados aportan <strong>volumen y modernidad</strong> sin cargar imágenes. Se generan en CSS, por lo que escalan a cualquier tamaño
          y no dependen de la resolución.
        </p>

        <details className="dd">
          <summary>Linear y radial: cuándo usar cada uno</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>linear-gradient()</strong>: transiciones direccionales (cabeceras, barras, fondos suaves).
              </li>
              <li>
                <strong>radial-gradient()</strong>: foco central o “halo” de luz (hero, fondo con profundidad).
              </li>
            </ul>

            <pre>
              <code>{`/* Degradado lineal */
.hero{
  background: linear-gradient(135deg, #E44D26, #F16529);
}

/* Degradado radial (halo suave) */
.fondo{
  background: radial-gradient(circle at top, rgba(228,77,38,.28), transparent 60%);
}
`}</code>
            </pre>

            <div className="callout tip">
              Buen criterio: usa degradados como soporte (atmósfera/estructura), no como protagonista absoluto.
            </div>
          </div>
        </details>
      </section>

      {/* 7 */}
      <section className="doc-section" id="s7">
        <h2>7) Filosofía del color: intención y significado</h2>
        <p>
          El color comunica antes que el texto. No existe un “diccionario universal” perfecto, pero sí asociaciones frecuentes que
          conviene conocer y aplicar con contexto.
        </p>

        <details className="dd">
          <summary>Asociaciones habituales (contexto, no reglas absolutas)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Azules</strong>: estabilidad, confianza, tecnología.
              </li>
              <li>
                <strong>Verdes</strong>: equilibrio, salud, éxito, naturaleza.
              </li>
              <li>
                <strong>Naranjas</strong>: energía, cercanía, acción.
              </li>
              <li>
                <strong>Rojos</strong>: urgencia, alerta, fuerza.
              </li>
              <li>
                <strong>Neutros</strong>: estructura, jerarquía, lectura, soporte.
              </li>
            </ul>

            <div className="callout warn">
              El significado no depende solo del color: depende del contraste, la cantidad, el contexto cultural y el uso dentro del sistema.
            </div>
          </div>
        </details>

        <details className="dd dd-nested">
          <summary>Regla de oro: el color es “relación”, no “valor”</summary>
          <div className="dd-body">
            <p>
              Dos colores pueden ser buenos por separado y fallar juntos. Lo que importa es:
            </p>
            <ul>
              <li>Contraste (lectura)</li>
              <li>Jerarquía (qué manda)</li>
              <li>Consistencia (repetición con roles)</li>
              <li>Moderación (cantidad de “colores protagonistas”)</li>
            </ul>
          </div>
        </details>
      </section>

      {/* 8 */}
      <section className="doc-section" id="s8">
        <h2>8) Accesibilidad: contraste y responsabilidad</h2>
        <p>
          Un color puede ser precioso y aun así fallar si el texto no se lee. La accesibilidad no es un “extra”: forma parte del
          trabajo profesional.
        </p>

        <details className="dd">
          <summary>Buenas prácticas esenciales</summary>
          <div className="dd-body">
            <ul>
              <li>Evita texto claro sobre fondos claros, o texto oscuro sobre fondos oscuros sin contraste suficiente.</li>
              <li>No uses solo color para explicar estados (añade iconos, texto o patrones cuando sea necesario).</li>
              <li>Prueba la interfaz con brillo bajo/alto y en pantallas distintas.</li>
            </ul>
            <div className="callout tip">
              Cuando la lectura es fácil, el diseño “desaparece” y el contenido gana. Ese es el objetivo.
            </div>
          </div>
        </details>
      </section>

   

      {/* 10 */}
      <section className="doc-section" id="s10">
        <h2>Ejercicios</h2>
        <p>
          Trabaja estos ejercicios como si estuvieras construyendo un sistema real. La clave no es “acertar”, sino{" "}
          <strong>justificar decisiones</strong> y comprobar resultados.
        </p>

        <details className="dd">
          <summary>Ejercicio 1 · Paleta base con roles</summary>
          <div className="dd-body">
            <ol>
              <li>Entra en Coolors y genera una paleta de 5 colores.</li>
              <li>Bloquea un color “identidad” y regenera el resto hasta que haya armonía.</li>
              <li>Define roles: <code>primary</code>, <code>secondary</code>, <code>accent</code>, <code>bg</code>, <code>text</code>.</li>
              <li>Declara las variables en <code>:root</code> y úsalas en una tarjeta y un botón.</li>
            </ol>
            <div className="callout">
              Entregable: captura de la paleta + bloque <code>:root</code> con variables + 2 reglas CSS usando esas variables.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Ejercicio 2 · Contraste y legibilidad</summary>
          <div className="dd-body">
            <ol>
              <li>Elige un fondo claro y un texto oscuro usando tu paleta.</li>
              <li>Crea un segundo diseño: fondo oscuro + texto claro.</li>
              <li>Comprueba cuál se lee mejor en móvil (simula con el tamaño del navegador).</li>
            </ol>
            <div className="callout warn">
              Si tienes que “forzar” sombras o contornos para leer, la combinación probablemente no está bien elegida.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Ejercicio 3 · Transparencia (RGBA) con intención</summary>
          <div className="dd-body">
            <ol>
              <li>Crea un banner (una sección) con un fondo de color fuerte.</li>
              <li>Añade encima una tarjeta con fondo <code>rgba()</code> para simular cristal (ligera transparencia).</li>
              <li>Ajusta el alfa hasta que la tarjeta sea legible sin perder el fondo.</li>
            </ol>
            <pre>
              <code>{`.banner{ background:#E44D26; padding:1.5rem; border-radius:16px; }
.banner .card{ background: rgba(255,255,255,.78); }`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>Ejercicio 4 · Degradado aplicable a un hero</summary>
          <div className="dd-body">
            <ol>
              <li>Entra en Gradients y elige un degradado que funcione como cabecera.</li>
              <li>Copia el <code>linear-gradient()</code> y aplícalo a una sección <code>.hero</code>.</li>
              <li>Asegura que el texto se lea: ajusta color de texto, o suaviza el degradado.</li>
            </ol>
            <div className="callout tip">
              Un degradado profesional suele ser “suave”: si grita demasiado, compite con el contenido.
            </div>
          </div>
        </details>
      </section>

      {/* TEST */}
      <section className="doc-section" id="test">
        <h2>Test de repaso</h2>
        <p>
          Responde y corrige. Al final verás retroalimentación con las respuestas correctas y el porqué.
        </p>

        <form onSubmit={onSubmit}>
          {quiz.map((it, idx) => (
            <fieldset className="test-question" key={it.id}>
              <legend>
                <strong>
                  {idx + 1}. {it.q}
                </strong>
              </legend>

              {it.options.map((opt, oi) => {
                const checked = answers[it.id] === oi;
                return (
                  <label key={oi}>
                    <input
                      type="radio"
                      name={it.id}
                      value={oi}
                      checked={checked}
                      onChange={() => onChoose(it.id, oi)}
                      disabled={submitted}
                    />
                    <span>{opt}</span>
                  </label>
                );
              })}
            </fieldset>
          ))}

          <div className="doc-next" style={{ justifyContent: "space-between" }}>
            <button type="button" className="btn" onClick={onReset}>
              Reiniciar
            </button>
            <button type="submit" className="btn btn-primary">
              Corregir test
            </button>
          </div>
        </form>

        <div id="resultado-test" style={{ marginTop: "1rem" }}>
          {submitted && (
            <div className="callout tip">
              <strong>Resultado:</strong> {score} / {quiz.length} correctas.
              <div style={{ marginTop: ".5rem" }}>
                {score === quiz.length ? (
                  <span>Dominio total: respuestas precisas y coherentes con un enfoque de sistema.</span>
                ) : score >= Math.ceil(quiz.length * 0.7) ? (
                  <span>Muy buen nivel: revisa las falladas y fíjate en el porqué de cada corrección.</span>
                ) : (
                  <span>
                    Repasa las secciones de paleta base y formatos (HEX/RGB/HSL/RGBA). El objetivo es pensar en roles y consistencia.
                  </span>
                )}
              </div>
            </div>
          )}

          {submitted && (
            <details className="dd" open>
              <summary>Retroalimentación: respuestas correctas y explicación</summary>
              <div className="dd-body">
                <ol>
                  {quiz.map((it) => {
                    const user = answers[it.id];
                    const ok = user === it.correctIndex;
                    return (
                      <li key={it.id} style={{ margin: ".75rem 0" }}>
                        <div style={{ display: "grid", gap: ".35rem" }}>
                          <div>
                            <strong>{it.q}</strong>
                          </div>
                          <div>
                            Tu respuesta:{" "}
                            <strong>{user === null ? "Sin responder" : it.options[user]}</strong>{" "}
                            {ok ? "✅" : "❌"}
                          </div>
                          <div>
                            Correcta: <strong>{it.options[it.correctIndex]}</strong>
                          </div>
                          <div className="callout" style={{ margin: ".5rem 0 0" }}>
                            {it.explain}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </details>
          )}
        </div>
      </section>

      <footer className="doc-section">
        <h2>Cierre</h2>
        <p>
          Dominar el color en CSS significa construir un <strong>sistema profesional</strong>: roles claros, repetición coherente, 
          contraste suficiente y una intención definida. Los <strong>tokens reutilizables</strong> llevan este sistema al siguiente nivel, 
          permitiendo escalabilidad, mantenimiento centralizado y coherencia de marca automática. Este es el estándar en equipos 
          de producto que crean interfaces duraderas y consistentes.
        </p>
        
        <div className="callout tip" style={{ marginTop: '1rem' }}>
          <strong>🚀 Próximos pasos recomendados:</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
            <li>Implementa un sistema básico de tokens en tu próximo proyecto</li>
            <li>Experimenta con las clases utilitarias que hemos agregado al CSS global</li>
            <li>Prueba herramientas como <strong>Figma Tokens</strong> o <strong>Style Dictionary</strong> para sistemas avanzados</li>
            <li>Investiga sobre <strong>Design Systems</strong> y cómo los tokens son su fundación técnica</li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
