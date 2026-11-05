// Tema1.jsx
// ✅ LISTO PARA PEGAR EN TU PROYECTO REACT
// 📌 Imágenes: copia/guarda tus imágenes en /public/img/tema1/ (o donde uses en tu proyecto)
// y respeta estos nombres (o cambia los src):
// /public/img/tema1/principios.png
// /public/img/tema1/diseño.png
// /public/img/tema1/color.png

import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";


export default function Tema1() {
  // Función para manejar clicks en enlaces del índice
  const handleIndexClick = (event, targetId) => {
    event.preventDefault();
    
    // Buscar el elemento objetivo
    const target = document.getElementById(targetId);
    if (target) {
      // Buscar el details padre más cercano y abrirlo
      const detailsParent = target.closest('details');
      if (detailsParent) {
        detailsParent.open = true;
      }
      
      // Hacer scroll al elemento después de un pequeño delay
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // useEffect para el título de la página
  useEffect(() => {
    document.title = "Diseño Web y Usabilidad | Tema 1 Curso HTML UF1841";
  }, []);
  
  return (
    <>
      <SEOHead 
        title="Diseño Web y Usabilidad - Fundamentos del Desarrollo Web"
        description="Aprende los principios fundamentales del diseño web y usabilidad en nuestro curso HTML. Conceptos esenciales para crear páginas web efectivas y accesibles."
        keywords={[
          'diseño web',
          'usabilidad web', 
          'principios diseño',
          'desarrollo web',
          'ux web',
          'accesibilidad web'
        ]}
        temaNumber="1"
        canonicalUrl="https://tu-dominio.com/tema1"
      />
    <div className="doc">
      <header className="doc-hero">
        <p className="doc-kicker">Tema 1 · Diseño web</p>
        <h1>Diseño web: pensar antes de construir</h1>
        <p>Nuestra primera actividad fue construir una web con Google Sites para entender la importancia del diseño antes de programar.
          Ya en esta unidad, profundizaremos en los principios de diseño web que todo desarrollador debe conocer.</p>
        
        <p className="doc-lead">
          Antes de escribir HTML, un profesional toma decisiones: qué quiere comunicar, a quién, con qué jerarquía y
          cómo lo va a entender alguien que entra por primera vez. Este tema te enseña a mirar una web con criterio:
          color, tipografía, composición, principios de usabilidad y enfoque mobile first.
        </p>

        <div className="callout tip">
          <strong>Objetivo del Tema 1:</strong> que puedas justificar decisiones de diseño (no “me gusta/no me gusta”),
          entender por qué unas webs se sienten claras y otras cansan, y preparar una idea visual sólida antes de
          empezar con HTML.
        </div>

        <div className="callout">
          <strong>Norma del curso:</strong> primero aprendemos a pensar y analizar. Luego, cuando programemos, tendrás un
          rumbo claro.
        </div>
      </header>

      <nav className="doc-index" aria-label="Índice del tema">
        <h2>Índice</h2>
        <ol>
          <li><a href="#que-es" onClick={(e) => handleIndexClick(e, 'que-es')}>Qué es el diseño web (de verdad)</a></li>
          <li><a href="#principios" onClick={(e) => handleIndexClick(e, 'principios')}>Principios básicos de diseño y usabilidad</a></li>
          <li><a href="#color" onClick={(e) => handleIndexClick(e, 'color')}>Color: armonía, contraste y significado</a></li>
          <li><a href="#tipografia" onClick={(e) => handleIndexClick(e, 'tipografia')}>Tipografía: legibilidad y jerarquía</a></li>
          <li><a href="#espaciado" onClick={(e) => handleIndexClick(e, 'espaciado')}>Espaciado y composición: el "aire" también diseña</a></li>
          <li><a href="#elementos" onClick={(e) => handleIndexClick(e, 'elementos')}>Colocación de elementos: guiar la mirada</a></li>
          <li><a href="#mobile" onClick={(e) => handleIndexClick(e, 'mobile')}>Mobile first: pensar primero en el móvil</a></li>
          <li><a href="#inspiracion" onClick={(e) => handleIndexClick(e, 'inspiracion')}>Páginas y herramientas para inspirarte (sin copiar)</a></li>
          <li><a href="#practica" onClick={(e) => handleIndexClick(e, 'practica')}>Práctica sin código</a></li>
          <li><a href="#cierre" onClick={(e) => handleIndexClick(e, 'cierre')}>Cierre y checklist</a></li>
        </ol>
      </nav>

      {/* ===================================================== */}
      <section id="que-es" className="doc-section">
        <h2>1) Qué es el diseño web</h2>

        <details open className="dd">
          <summary>1.1 · Diseño web no es “decorar”: es comunicar y facilitar</summary>
          <div className="dd-body">
            <p>
              El diseño web consiste en <strong>organizar información</strong> para que una persona:
              <strong> entienda</strong>, <strong>encuentre</strong> y <strong>haga</strong> lo que necesita
              con el menor esfuerzo posible.
            </p>

            <div className="callout">
              <strong>Idea clave:</strong> un buen diseño reduce dudas. Un mal diseño genera fricción.
            </div>

            <details className="dd dd-nested">
              <summary>Ejemplo rápido (mental)</summary>
              <div className="dd-body">
                <ul>
                  <li>Si no veo dónde está el menú → me pierdo.</li>
                  <li>Si el botón principal no destaca → no sé qué hacer.</li>
                  <li>Si la letra es pequeña o el contraste es bajo → me canso y abandono.</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="principios" className="doc-section">
        <h2>2) Principios básicos de diseño y usabilidad</h2>

        <details open className="dd">
          <summary>2.1 · Principios esenciales: claridad, jerarquía, consistencia y feedback</summary>
          <div className="dd-body">
            <p>
              Vamos a quedarnos con principios que funcionan en cualquier época (cambien las modas o no).
            </p>

            <ul>
              <li><strong>Claridad:</strong> que se entienda sin esfuerzo.</li>
              <li><strong>Jerarquía visual:</strong> que lo importante se vea primero.</li>
              <li><strong>Consistencia:</strong> patrones repetidos (botones, colores, estructura).</li>
              <li><strong>Feedback:</strong> que el usuario sepa si una acción “ha funcionado”.</li>
              <li><strong>Velocidad percibida:</strong> que no parezca lenta ni pesada.</li>
            </ul>

            <div className="callout tip">
              <strong>Regla práctica:</strong> si un usuario tiene que “pensar demasiado”, el diseño está fallando.
            </div>

            <figure className="media">
              <img
                src="../img/tema1/principios.png"
                alt="Página de referencia sobre principios del diseño web"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">
                Imagen de apoyo: principios generales del diseño web .
              </figcaption>
            </figure>
          </div>
        </details>

      <details className="dd">
  <summary>2.2 · Ley de Fitts (y por qué tus botones “fallan” si no la respetas)</summary>
  <div className="dd-body">
    <p>
      La <strong>Ley de Fitts</strong> explica algo muy práctico: <strong>tardarás menos</strong> en pulsar un elemento
      cuando ese objetivo es <strong>grande</strong> y está <strong>cerca</strong>. Si el objetivo es pequeño o está lejos,
      aumenta el esfuerzo, el tiempo y los errores.
    </p>

    <div className="callout">
      <strong>Idea en una frase:</strong> <em>tamaño + cercanía = facilidad</em>.  
      Por eso los botones “importantes” no deben ser pequeños ni estar escondidos.
    </div>

    <details className="dd dd-nested">
      <summary>Traducción directa a diseño (reglas rápidas)</summary>
      <div className="dd-body">
        <ul>
          <li>
            <strong>Acción principal (CTA):</strong> botón grande, visible y con buen contraste.
          </li>
          <li>
            <strong>Más espacio alrededor:</strong> el “aire” evita pulsaciones accidentales y mejora la precisión.
          </li>
          <li>
            <strong>Evita links pequeños</strong> (sobre todo en móvil): generan frustración.
          </li>
          <li>
            <strong>Coloca lo importante donde el usuario ya mira o llega fácil</strong> (zona “natural” de interacción).
          </li>
        </ul>
      </div>
    </details>

    <details className="dd dd-nested">
      <summary>Ejemplos típicos (lo que hacemos mal sin darnos cuenta)</summary>
      <div className="dd-body">
        <ul>
          <li>
            <strong>“Cerrar” o “Aceptar” en letra pequeña</strong> y pegado a otros enlaces → misclicks.
          </li>
          <li>
            <strong>Iconos sin etiqueta</strong> y muy pequeños → el usuario duda y falla.
          </li>
          <li>
            <strong>Enlaces demasiado juntos</strong> en un menú horizontal → se pulsa el equivocado.
          </li>
          <li>
            <strong>Botón principal escondido</strong> al final o en un rincón → baja la conversión.
          </li>
        </ul>

        <div className="callout tip">
          <strong>Mini-test:</strong> si tu madre o un amigo “no técnico” falla al clicar algo, casi siempre es un problema de
          tamaño/espacio/posición (Fitts).
        </div>
      </div>
    </details>

    <details className="dd dd-nested">
      <summary>Ley de Fitts + Ley de Hick (por qué se complementan)</summary>
      <div className="dd-body">
        <p>
          Fitts habla de <strong>lo rápido que llegas</strong> a un objetivo (tamaño y distancia).  
          Hick habla de <strong>lo rápido que decides</strong> (cuantas más opciones, más tarda el usuario en elegir).
        </p>

        <div className="callout">
          <strong>Combinación ganadora:</strong> pocas opciones claras (Hick) + botones grandes y accesibles (Fitts).
        </div>
{/* 🎬 VÍDEO (EMBEBIDO) */}
    <div className="media-video" aria-label="Vídeo sobre la Ley de Fitts">
      <iframe
        src="https://www.youtube-nocookie.com/embed/MmMB6yFWv_s"
        title="Ley de Fitts: explicación y ejemplos"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        allowFullScreen
      />
    </div>

    <p className="muted" style={{ marginTop: ".5rem" }}>
      Si no se carga el vídeo, ábrelo en nueva pestaña:{" "}
      <a
        href="https://www.youtube.com/watch?v=MmMB6yFWv_s"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver en YouTube
      </a>
      </p>
        <ul>
          <li><strong>Hick:</strong> reduce menús interminables y decisiones “sin guía”.</li>
          <li><strong>Fitts:</strong> asegúrate de que lo elegido sea fácil de pulsar.</li>
        </ul>
      </div>
    </details>

    <details className="dd dd-nested">
      <summary>Fitts en móvil (aquí se nota muchísimo)</summary>
      <div className="dd-body">
        <p>
          En móvil, el cursor no es una flecha precisa: <strong>es un dedo</strong>.  
          Y un dedo es <strong>más grande</strong>, tapa parte de la pantalla y es menos exacto. Resultado:
          los objetivos táctiles deben ser <strong>más grandes</strong> que en escritorio.
        </p>

        <div className="callout warn">
          <strong>Errores típicos en móvil:</strong> botones pequeños, pegados, o colocados arriba del todo (zona difícil de alcanzar).
        </div>

        <details className="dd dd-nested">
          <summary>Reglas prácticas para móvil (sin números raros)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>CTA en zona cómoda:</strong> si es la acción principal, colócala donde el pulgar llegue fácil
                (normalmente parte inferior).
              </li>
              <li>
                <strong>Botones “tocables”:</strong> si dudas, hazlos más grandes, no más pequeños.
              </li>
              <li>
                <strong>Separación:</strong> deja espacio entre acciones peligrosas (“Eliminar”) y acciones normales (“Guardar”).
              </li>
              <li>
                <strong>Listas y menús:</strong> filas altas y clicables (no solo el texto).
              </li>
            </ul>
          </div>
        </details>

        <details className="dd dd-nested">
          <summary>Uso con una sola mano (lo normal)</summary>
          <div className="dd-body">
            <p>
              Mucha gente usa el móvil con una mano y el pulgar. Eso limita el “alcance” real.
              Si pones acciones importantes arriba del todo, estás obligando a más esfuerzo (y más errores).
            </p>
            <div className="callout tip">
              <strong>Traducción:</strong> lo importante debe estar cómodo, no “correcto por costumbre”.
            </div>
          </div>
        </details>
      </div>
    </details>

    <details className="dd dd-nested">
      <summary>Checklist final (si cumples esto, estás aplicando Fitts)</summary>
      <div className="dd-body">
        <ul>
          <li>¿El botón principal destaca y se puede pulsar sin apuntar con precisión?</li>
          <li>¿Hay espacio suficiente alrededor de botones y enlaces?</li>
          <li>¿En móvil, las acciones importantes están en zona cómoda?</li>
          <li>¿Los iconos tienen tamaño y (mejor) texto que confirme su función?</li>
          <li>¿Has evitado opciones demasiado pequeñas o “pegadas”?</li>
        </ul>

        <div className="callout">
          <strong>Conclusión:</strong> si facilitas el clic, facilitas la experiencia. Y la experiencia decide si el usuario se queda.
        </div>
      </div>
    </details>
  </div>
</details>


        <details className="dd">
          <summary>2.3 · Reutilización (patrones conocidos) + scroll + velocidad</summary>
          <div className="dd-body">
            <p>
              Una web no es el lugar para “inventar” cosas que el usuario ya sabe usar. Los patrones conocidos
              (menú arriba, logo que vuelve a inicio, botones claros, formularios normales) reducen la confusión.
            </p>

            <ul>
              <li><strong>Patrones:</strong> mejor lo familiar que lo “original pero confuso”.</li>
              <li><strong>Scroll:</strong> se usa, pero lo importante debe ser visible y claro desde arriba.</li>
              <li><strong>Velocidad:</strong> si tarda, se abandona; menos peso y más simple suele ganar.</li>
            </ul>

           
            <figure className="media">
              <img
                src="../img/tema1/diseño .png"
                alt="Página de referencia sobre principios del diseño web"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">
                Imagen de apoyo: patrones de diseño web .
              </figcaption>
            </figure>
          </div>
        </details>
      </section>
      <section className="doc-section">
  <h2> 3) Arquitectura de una página web</h2>

  <p>
    La <strong>arquitectura de una página web</strong> hace referencia a cómo se organiza,
    estructura y conecta toda la información de un sitio web. No se trata solo del diseño
    visual, sino de decidir <strong>qué páginas existen, cómo se relacionan entre sí y cómo
    navega el usuario</strong> dentro del sitio.
  </p>

  <p>
    Una buena arquitectura web es clave para:
  </p>

  <ul>
    <li>Que el usuario encuentre la información fácilmente</li>
    <li>Que la web sea clara, usable y coherente</li>
    <li>Mejorar el posicionamiento SEO</li>
    <li>Facilitar el mantenimiento y crecimiento del sitio</li>
  </ul>

  <details className="dd">
    <summary>🏗️ Elementos básicos de la arquitectura web</summary>
    <div className="dd-body">
      <p>
        Toda página web, independientemente de su tamaño, se construye a partir de una
        estructura común:
      </p>

      <ul>
        <li><strong>Inicio (Home):</strong> página principal y punto de entrada</li>
        <li><strong>Páginas internas:</strong> servicios, contenidos, categorías…</li>
        <li><strong>Navegación:</strong> menús, enlaces y rutas internas</li>
        <li><strong>Contenido:</strong> textos, imágenes, vídeos, formularios</li>
        <li><strong>Pie de página (footer):</strong> información secundaria y legal</li>
      </ul>

      <p>
        Esta estructura permite que el usuario entienda rápidamente dónde está y qué puede
        hacer dentro del sitio.
      </p>
    </div>
  </details>

  <details className="dd">
    <summary>🧭 Organización jerárquica de las páginas</summary>
    <div className="dd-body">
      <p>
        La arquitectura web suele organizarse de forma <strong>jerárquica</strong>, es decir,
        de lo más general a lo más específico:
      </p>

      <ul>
        <li><strong>Nivel 1:</strong> Página de inicio</li>
        <li><strong>Nivel 2:</strong> Secciones principales (Servicios, Blog, Contacto…)</li>
        <li><strong>Nivel 3:</strong> Subpáginas o contenidos concretos</li>
      </ul>

      <p>
        Esta jerarquía ayuda tanto a los usuarios como a los buscadores a comprender la
        estructura del sitio y a navegarlo con facilidad.
      </p>
    </div>
  </details>

  <details className="dd">
    <summary>🧩 Arquitectura web aplicada a WordPress</summary>
    <div className="dd-body">
      <p>
        En WordPress, la arquitectura web se construye principalmente mediante:
      </p>

      <ul>
        <li><strong>Páginas:</strong> para contenidos fijos (Inicio, Contacto, Sobre mí)</li>
        <li><strong>Entradas:</strong> para contenidos dinámicos (blog, noticias)</li>
        <li><strong>Categorías y etiquetas:</strong> para organizar contenidos</li>
        <li><strong>Menús:</strong> para definir la navegación principal</li>
        <li><strong>Plantillas del tema:</strong> que controlan cómo se muestra cada tipo de página</li>
      </ul>

      <p>
        WordPress permite crear una arquitectura flexible, escalable y fácil de modificar
        sin necesidad de programar, siempre que se planifique bien desde el principio.
      </p>
    </div>
  </details>

  <details className="dd">
    <summary>⚠️ Errores comunes en la arquitectura de una web</summary>
    <div className="dd-body">
      <ul>
        <li>Demasiadas páginas sin jerarquía clara</li>
        <li>Menús confusos o sobrecargados</li>
        <li>Contenidos duplicados o mal organizados</li>
        <li>No pensar en el usuario, solo en el diseño</li>
      </ul>

      <p>
        Una mala arquitectura hace que el usuario se pierda y abandone la web, aunque el
        diseño sea atractivo.
      </p>
    </div>
  </details>

  <details className="dd">
    <summary>🎯 Idea clave</summary>
    <div className="dd-body">
      <p>
        <strong>Antes de diseñar una web, hay que pensar su estructura.</strong>
        La arquitectura web es el esqueleto del sitio: si está bien planteada, todo lo demás
        funciona mejor.
      </p>
    </div>
  </details>

  <div className="resource-section__head">
    <h2 className="resource-section__title">Arquitectura web: cómo se estructura una página</h2>
    <p className="resource-section__lead">
      Recurso complementario para comprender cómo se organiza una página web antes de empezar
      a diseñarla o desarrollarla.
    </p>
  </div>

  <div className="bonus-links">
    <ul className="bonus-links__list">
      <li className="bonus-links__item">
        <a
          href="https://es.wix.com/blog/arquitectura-web"
          target="_blank"
          rel="noopener noreferrer"
          className="bonus-links__link"
        >
          <span className="bonus-links__name">
            Arquitectura web: guía básica para estructurar una web
          </span>
          <span className="bonus-links__desc">
            Artículo divulgativo que explica de forma sencilla qué es la arquitectura web,
            cómo se organiza la información de un sitio y por qué es fundamental planificar
            la estructura antes de empezar a crear una página web.
          </span>
        </a>
      </li>
    </ul>

    <p className="bonus-links__note">
      💡 <strong>Consejo:</strong> No es necesario memorizar el contenido, pero sí entender
      la idea principal: <em>una buena web empieza por una buena estructura</em>.
    </p>
  </div>
</section>


      {/* ===================================================== */}
      <section id="color" className="doc-section">
        <h2>4) Color: armonía, contraste y significado</h2>

        <details open className="dd">
          <summary>4.1 · El color guía, resalta y crea identidad</summary>
          <div className="dd-body">
            <p>
              El color no está “para que quede bonito”. Está para <strong>guiar</strong> la mirada, <strong>resaltar</strong>
              acciones importantes y crear una sensación coherente. Una web puede ser simple y aun así sentirse
              profesional si el color está bien pensado.
            </p>

            <div className="callout warn">
              <strong>Ojo:</strong> color sin contraste = texto ilegible. La accesibilidad manda.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>4.2 · Armonía vs contraste</summary>
          <div className="dd-body">
            <ul>
              <li><strong>Armonía:</strong> colores relacionados que se sienten “del mismo mundo”.</li>
              <li><strong>Contraste:</strong> diferencia clara para destacar y leer bien.</li>
            </ul>

           
          </div>
        </details>

        <details className="dd">
          <summary>4.3 · Significado del color </summary>
          <div className="dd-body">
            <p>
              Los colores sugieren sensaciones, pero depende del contexto cultural y del conjunto. Lo importante es que
              la paleta sea coherente con el objetivo: confianza, energía, calma, seriedad, frescura…
            </p>

            <figure className="media">
              <img
                src="../img/tema1/color.png"
                alt="Referencia visual sobre el significado y efecto del color"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">
                Apoyo visual: cómo el color afecta la percepción.
              </figcaption>
            </figure>

            <div className="callout tip">
              <strong>Consejo práctico:</strong> define 3 roles: color principal (marca), color secundario (apoyo) y
              color de acento (CTA).
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="tipografia" className="doc-section">
        <h2>5) Tipografía: legibilidad y jerarquía</h2>

        <details open className="dd">
          <summary>5.1 · Regla simple: se lee o se abandona</summary>
          <div className="dd-body">
            <p>
              La tipografía es una de las razones más comunes por las que una web “cansa”. Títulos y cuerpo de texto no
              cumplen la misma función: deben diferenciarse sin exagerar.
            </p>

            <ul>
              <li>Usa pocas fuentes (1–2).</li>
              <li>Títulos con más presencia, cuerpo legible.</li>
              <li>Espaciado correcto (line-height) para respirar.</li>
            </ul>

            <figure className="media">
              <img
                src="../img/tema1/tipografia.png"
                alt="Referencia visual sobre tipografía en diseño web"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">Apoyo visual: títulos vs cuerpos de texto.</figcaption>
            </figure>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="espaciado" className="doc-section">
        <h2>6) Espaciado y composición</h2>

        <details open className="dd">
          <summary>6.1 · El espacio en blanco es diseño</summary>
          <div className="dd-body">
            <p>
              El “aire” entre elementos ayuda a entender la estructura. Sin espacio, todo compite por la atención y el
              usuario se agobia.
            </p>

            <ul>
              <li>No hagas líneas de texto eternas: cansa.</li>
              <li>Ni demasiado cortas: rompes el ritmo de lectura.</li>
              <li>Separa bloques por idea: cada bloque, una intención.</li>
            </ul>

            <figure className="media">
              <img
                src="../img/tema1/orden.png"
                alt="Referencia visual sobre espaciado y composición"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">Apoyo visual: legibilidad y ritmo visual.</figcaption>
            </figure>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="elementos" className="doc-section">
        <h2>7) Colocación de elementos: guiar la mirada</h2>

        <details open className="dd">
          <summary>7.1 · Diseñar es decidir qué se ve primero</summary>
          <div className="dd-body">
            <p>
              La composición organiza la atención. Un usuario escanea; no lee como un libro. Tu diseño tiene que
              “llevarle de la mano”: título → idea → acción.
            </p>

            <div className="callout">
              <strong>Jerarquía visual:</strong> tamaño, posición, color y espacio dicen “esto importa”.
            </div>

            <details className="dd dd-nested">
              <summary>Checklist rápido de jerarquía</summary>
              <div className="dd-body">
                <ul>
                  <li>¿Se entiende el objetivo en 5 segundos?</li>
                  <li>¿Hay un CTA claro (acción principal)?</li>
                  <li>¿Se diferencian bien títulos, subtítulos y texto?</li>
                  <li>¿Hay demasiado “ruido” visual?</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="mobile" className="doc-section">
        <h2>8) Mobile first</h2>

        <details open className="dd">
          <summary>8.1 · Primero móvil, luego escritorio (y tiene sentido)</summary>
          <div className="dd-body">
            <p>
              Mucha gente entra desde el móvil, con pantalla pequeña y poca paciencia. Mobile first significa diseñar
              con prioridades: qué es esencial, qué puede esperar y cómo se entiende con poco espacio.
            </p>

            <ul>
              <li>Menos elementos por pantalla.</li>
              <li>Botones cómodos de pulsar.</li>
              <li>Texto legible y aire suficiente.</li>
              <li>Menos peso (imágenes optimizadas, contenido claro).</li>
            </ul>

            <div className="callout tip">
              <strong>Regla mental:</strong> si funciona en móvil, suele funcionar en escritorio. Al revés, no siempre.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="inspiracion" className="doc-section">
        <h2>9) Páginas y herramientas para inspirarte (sin copiar)</h2>

        <details open className="dd">
          <summary>9.1 · Paletas de color y contraste</summary>
          <div className="dd-body">
            <ul>
              <li>
                <a href="https://coolors.co/" target="_blank" rel="noreferrer">
                  Coolors — generador de paletas (rápido y práctico)
                </a>
              </li>
              <li>
                <a href="https://colorhunt.co/" target="_blank" rel="noreferrer">
                  Color Hunt — paletas ya curadas por gente que diseña
                </a>
              </li>
              <li>
                <a href="https://color.adobe.com/" target="_blank" rel="noreferrer">
                  Adobe Color — teoría del color y armonías
                </a>
              </li>
              <li>
                <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noreferrer">
                  WebAIM Contrast Checker — comprueba contraste (accesibilidad)
                </a>
              </li>
            </ul>

            <div className="callout">
              <strong>Tarea mental:</strong> elige una paleta y justifica qué emoción transmite y por qué.
            </div>
          </div>
        </details>

        <details className="dd">
  <summary>9.2 · Tipografía y jerarquía (cómo elegirla y cómo se usa en HTML)</summary>
  <div className="dd-body">
    <p>
      La tipografía no es “qué letra queda bonita”. Es <strong>legibilidad</strong> + <strong>jerarquía</strong>:
      que el usuario entienda qué es título, qué es importante y qué es texto normal sin esfuerzo.
      Aquí tienes recursos para elegir fuentes y, sobre todo, <strong>cómo implementarlas correctamente</strong>.
    </p>

    <ul>
      <li>
        <a href="https://fonts.google.com/" target="_blank" rel="noreferrer">
          Google Fonts — fuentes web seguras y populares
        </a>
      </li>
      <li>
        <a href="https://type-scale.com/" target="_blank" rel="noreferrer">
          Type Scale — escalas tipográficas (jerarquía clara)
        </a>
      </li>
      <li>
        <a href="https://typescale.com/" target="_blank" rel="noreferrer">
          Typescale (alternativa) — ideas para tamaños y ritmos
        </a>
      </li>
      <li>
        <a href="https://fontpair.co/" target="_blank" rel="noreferrer">
          Fontpair — combinaciones de tipografías que funcionan
        </a>
      </li>
      <li>
        <a href="https://www.typewolf.com/" target="_blank" rel="noreferrer">
          Typewolf — inspiración real (qué fuentes usan webs reales)
        </a>
      </li>
    </ul>

    <div className="callout tip">
      <strong>Regla de oro:</strong> si dudas, usa una <strong>sans-serif</strong> legible para el cuerpo
      y una jerarquía simple (H1/H2/p). Menos fuentes = más coherencia.
    </div>

    <details className="dd dd-nested">
      <summary>Cómo elegir tipografías (criterio rápido, sin volverte loca)</summary>
      <div className="dd-body">
        <ul>
          <li>
            <strong>Objetivo:</strong> ¿serio, juvenil, elegante, técnico? La fuente debe acompañar el tono.
          </li>
          <li>
            <strong>Legibilidad primero:</strong> para cuerpo, evita fuentes “raras” o demasiado finas.
          </li>
          <li>
            <strong>Máximo 2 fuentes:</strong> 1 para texto + (opcional) 1 para títulos.
          </li>
          <li>
            <strong>Evita pesos extremos:</strong> 300 muy fino puede perderse; 900 puede gritar.
          </li>
          <li>
            <strong>Coherencia:</strong> si eliges una fuente con personalidad, compénsala con una muy neutra.
          </li>
        </ul>

        <div className="callout">
          <strong>Combinación típica que nunca falla:</strong> una sans-serif limpia para texto + una sans/serif con más carácter para títulos.
        </div>
      </div>
    </details>

    <details className="dd dd-nested">
      <summary>Tipografías en HTML: la jerarquía se hace con etiquetas (no con “poner grande”)</summary>
      <div className="dd-body">
        <p>
          En HTML, la jerarquía se expresa con etiquetas: <code>&lt;h1&gt;...&lt;/h1&gt;</code>,
          <code>&lt;h2&gt;</code>, <code>&lt;p&gt;</code>, etc.  
          Luego, el CSS decide cómo se ve.
        </p>

        <pre><code>{`<!-- Estructura recomendada -->
<h1>Título principal (solo 1 por página)</h1>
<p>Texto introductorio o lead.</p>

<h2>Sección importante</h2>
<p>Contenido normal.</p>

<h3>Subsección</h3>
<p>Más contenido.</p>`}</code></pre>

        <div className="callout warn">
          <strong>Importante:</strong> no uses <code>&lt;h4&gt;</code> o <code>&lt;h5&gt;</code> solo “porque se ve más pequeño”.
          Usa el nivel por significado (estructura), no por estética.
        </div>
      </div>
    </details>

    <details className="dd dd-nested">
      <summary>Cómo “meter” una fuente en tu web (Google Fonts) — 2 formas</summary>
      <div className="dd-body">
        <p>
          Cuando elijamos fuentes, normalmente las cargaremos desde Google Fonts.
          Hay dos formas comunes:
        </p>

        <details className="dd dd-nested">
          <summary>Opción A: con &lt;link&gt; en el &lt;head&gt; (HTML clásico)</summary>
          <div className="dd-body">
            <pre><code>{`<!-- En el <head> de tu HTML -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">`}</code></pre>

            <p>Luego aplicas en CSS:</p>
            <pre><code>{`body{
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}`}</code></pre>
          </div>
        </details>

        <details className="dd dd-nested">
          <summary>Opción B: con @import en CSS (útil, pero menos recomendable)</summary>
          <div className="dd-body">
            <pre><code>{`/* En tu CSS (arriba del todo) */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap");`}</code></pre>

            <p>Luego aplicas igual:</p>
            <pre><code>{`body{
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}`}</code></pre>

            <div className="callout">
              <strong>Consejo:</strong> solemos preferir <code>&lt;link&gt;</code> porque carga antes y es más eficiente.
            </div>
          </div>
        </details>
      </div>
    </details>

    <details className="dd dd-nested">
      <summary>Cómo elegir “dos tipos de letra” (títulos + texto) sin que choque</summary>
      <div className="dd-body">
        <p>
          Si vas a usar dos fuentes, esta es la estrategia más segura:
        </p>

        <ul>
          <li><strong>Texto:</strong> fuente muy legible y neutra (Inter, Roboto, Open Sans, Source Sans 3…).</li>
          <li><strong>Títulos:</strong> una con más carácter (Poppins, Montserrat, Playfair Display, Merriweather…).</li>
        </ul>

        <p>Ejemplo de aplicación en CSS:</p>
        <pre><code>{`:root{
  --font-body: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --font-headings: "Poppins", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}

body{ font-family: var(--font-body); }
h1,h2,h3{ font-family: var(--font-headings); }`}</code></pre>

        <div className="callout warn">
          <strong>Evita:</strong> dos fuentes “con personalidad fuerte” a la vez (se pelean).
          Mejor una protagonista y otra neutral.
        </div>
      </div>
    </details>

    <details className="dd dd-nested">
      <summary>Jerarquía tipográfica: cómo se consigue </summary>
      <div className="dd-body">
        <p>La jerarquía se construye con 4 cosas:</p>
        <ul>
          <li><strong>Tamaño:</strong> títulos más grandes que texto.</li>
          <li><strong>Peso:</strong> 700/800 para títulos, 400 para texto.</li>
          <li><strong>Espaciado:</strong> <code>line-height</code> y márgenes.</li>
          <li><strong>Contraste:</strong> títulos más oscuros o con más presencia.</li>
        </ul>

        <p>Ejemplo base (simple y efectivo):</p>
        <pre><code>{`body{ font-size: 16px; line-height: 1.6; }
h1{ font-size: clamp(2rem, 3vw, 3rem); line-height: 1.1; font-weight: 800; }
h2{ font-size: 1.6rem; line-height: 1.2; font-weight: 800; }
p{ max-width: 70ch; }`}</code></pre>

        <div className="callout tip">
          <strong>Truco :</strong> si no sabes qué tocar, toca solo <em>tamaño</em> y <em>peso</em>.  
          Con eso ya creas jerarquía sin romper nada.
        </div>
      </div>
    </details>
  </div>
</details>


       <details className="dd">
  <summary>9.3 · Inspiración de diseño (mirar con criterio)</summary>
  <div className="dd-body">
    <p>
      Buscar inspiración es buena idea, pero hay que hacerlo con <strong>criterio</strong>:
      no buscamos “copiar una web”, sino <strong>entender por qué funciona</strong> (estructura, jerarquía, espaciado,
      CTA, orden del contenido).
    </p>

    <div className="callout warn">
      <strong>Importante:</strong> inspirarse NO es copiar. Observa: paleta, jerarquía, espaciado, CTA, orden y
      cómo resuelve la navegación.
    </div>

    <h4>Plataformas de inspiración visual (alto nivel)</h4>
    <ul>
      <li>
        <a href="https://www.awwwards.com/" target="_blank" rel="noreferrer">
          Awwwards — inspiración (alto nivel visual)
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
          Dribbble — interfaces y componentes
        </a>
      </li>
      <li>
        <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
          Behance — proyectos completos (branding + UI)
        </a>
      </li>
      <li>
        <a href="https://www.lapa.ninja/" target="_blank" rel="noreferrer">
          Lapa Ninja — landing pages por sectores
        </a>
      </li>
      <li>
        <a href="https://www.mobbin.com/" target="_blank" rel="noreferrer">
          Mobbin — patrones mobile (pantallas reales)
        </a>
      </li>
    </ul>

    <h4>Dónde encontrar ideas y recursos “para aprender estructura”</h4>
    <p>
      Además de mirar webs bonitas, conviene visitar sitios donde puedas ver <strong>bloques de HTML</strong>,
      plantillas y proyectos reales. Esto te ayuda a aprender cómo se organiza una página completa:
      <em>header</em>, secciones, cards, formularios, y <em>footer</em>.
    </p>

    <ul>
      <li>
        <strong>Nice HTML:</strong> plantillas y bloques de HTML semántico listos para usar. Ideal para entender
        cómo se estructura una sección de forma profesional.{" "}
        <a href="https://nicepage.com/html-templates" target="_blank" rel="noreferrer">
          Visitar Nice HTML
        </a>
      </li>

      <li>
        <strong>Plantillas gratis HTML:</strong> plantillas modernas (gratuitas y de pago) con estructura completa.
        Útiles para analizar cómo organizan el contenido y la navegación.{" "}
        <a href="https://www.free-css.com/free-css-templates" target="_blank" rel="noreferrer">
          Ir a plantillas HTML
        </a>
      </li>

      <li>
        <strong>CodePen y JSFiddle:</strong> perfectos para explorar y modificar ejemplos reales de HTML/CSS/JS.
        Aquí aprendes por “experimentación”: cambias algo y ves el efecto al instante.{" "}
        <a href="https://codepen.io/" target="_blank" rel="noreferrer">
          Ir a CodePen
        </a>{" "}
        ·{" "}
        <a href="https://jsfiddle.net/" target="_blank" rel="noreferrer">
          Ir a JSFiddle
        </a>
      </li>

      <li>
        <strong>GitHub:</strong> busca repositorios de portafolios y proyectos open source para ver estructuras reales
        (carpetas, assets, README, etc.). Es inspiración + aprendizaje profesional a la vez.{" "}
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          Ir a GitHub
        </a>
      </li>
    </ul>

    <details className="dd dd-nested">
      <summary>Cómo “mirar con criterio” (checklist rápida)</summary>
      <div className="dd-body">
        <ul>
          <li><strong>Estructura:</strong> ¿qué secciones hay y en qué orden?</li>
          <li><strong>Jerarquía:</strong> ¿qué destaca primero y por qué?</li>
          <li><strong>CTA:</strong> ¿cuál es la acción principal y dónde está?</li>
          <li><strong>Espaciado:</strong> ¿hay “aire” o está todo apretado?</li>
          <li><strong>Consistencia:</strong> ¿botones y títulos se repiten con el mismo estilo?</li>
          <li><strong>Móvil:</strong> ¿se entiende igual en pantallas pequeñas?</li>
        </ul>

        <div className="callout tip">
          <strong>Consejo:</strong> elige 1 diseño, copia SOLO la estructura en un boceto (sin estilos),
          y luego crea tu propia versión con tu contenido.
        </div>
      </div>
    </details>

    <div className="callout">
      Recuerda: no hay una plantilla perfecta. El diseño es personal y depende de tu estilo y de tus necesidades.
      <strong> Busca inspiración y experimenta</strong> con diferentes estructuras y estilos.
    </div>
  </div>
</details>

      </section>

      {/* ===================================================== */}
      <section id="practica" className="doc-section">
        <h2>10) Práctica sin código</h2>

        <details open className="dd">
          <summary>Ejercicio 1 · “Radiografía” de una web (5 minutos)</summary>
          <div className="dd-body">
            <ol>
              <li>Elige una web de inspiración (Awwwards / Lapa / Behance).</li>
              <li>Identifica el <strong>mensaje principal</strong> (¿qué vende o comunica?).</li>
              <li>Marca mentalmente el <strong>CTA</strong> (acción principal).</li>
              <li>Describe la <strong>jerarquía</strong>: qué ves primero, segundo y tercero.</li>
              <li>¿La paleta es armónica? ¿Hay contraste suficiente?</li>
            </ol>

            <div className="callout tip">
              <strong>Objetivo:</strong> pasar de “me gusta” a “entiendo por qué funciona”.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Ejercicio 2 · Paleta + tipografía (decisión razonada)</summary>
          <div className="dd-body">
            <ol>
              <li>Entra en <strong>Coolors</strong> y genera una paleta de 5 colores.</li>
              <li>Elige 3 roles: <strong>principal</strong>, <strong>secundario</strong>, <strong>acento</strong>.</li>
              <li>Entra en <strong>Google Fonts</strong> y elige 1 fuente para el cuerpo.</li>
              <li>Justifica en 4 líneas por qué esa combinación “encaja”.</li>
            </ol>

            <div className="callout">
              <strong>Regla:</strong> no busco “perfecto”; busco que puedas explicar tu elección.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="cierre" className="doc-section">
        <h2>11) Cierre y checklist</h2>

        <details open className="dd">
          <summary>Checklist final</summary>
          <div className="dd-body">
            <ul>
              <li>Entiendo que el diseño web es comunicación y usabilidad, no decoración.</li>
              <li>Sé explicar qué es jerarquía visual y cómo se consigue.</li>
              <li>Sé diferenciar armonía y contraste, y por qué importan.</li>
              <li>Valoro tipografía y espaciado como parte de la legibilidad.</li>
              <li>Entiendo mobile first como priorizar lo esencial.</li>
              <li>Sé dónde buscar inspiración con criterio (sin copiar).</li>
            </ul>

            <div className="callout tip">
              <strong>Frase para recordar:</strong> una web buena se siente fácil. La facilidad no es casualidad: se diseña.
            </div>
          </div>
        </details>

       
      </section>
      {/* ===================== BONUS: ENLACES PARA AMPLIAR ===================== */}
<section className="bonus-links" aria-labelledby="bonus-links-title">
  <header className="bonus-links__header">
    <h2 id="bonus-links-title">Bonus · Enlaces para ampliar (recomendados)</h2>
    <p className="bonus-links__lead">
      No necesitas leerlo todo. Elige 1–2 recursos y vuelve con una idea práctica: una paleta, una tipografía o un patrón
      de layout que quieras probar.
    </p>
  </header>

  <ul className="bonus-links__list">
    <li className="bonus-links__item">
      <a className="bonus-links__link" href="https://coolors.co/" target="_blank" rel="noreferrer">
        <span className="bonus-links__name">Coolors</span>
        <span className="bonus-links__desc">Generador rápido de paletas (ideal para empezar).</span>
      </a>
    </li>

    <li className="bonus-links__item">
      <a className="bonus-links__link" href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noreferrer">
        <span className="bonus-links__name">WebAIM Contrast Checker</span>
        <span className="bonus-links__desc">Comprueba contraste y accesibilidad (imprescindible).</span>
      </a>
    </li>

    <li className="bonus-links__item">
      <a className="bonus-links__link" href="https://fonts.google.com/" target="_blank" rel="noreferrer">
        <span className="bonus-links__name">Google Fonts</span>
        <span className="bonus-links__desc">Fuentes web seguras + previsualización real.</span>
      </a>
    </li>

    <li className="bonus-links__item">
      <a className="bonus-links__link" href="https://type-scale.com/" target="_blank" rel="noreferrer">
        <span className="bonus-links__name">Type Scale</span>
        <span className="bonus-links__desc">Escalas tipográficas para jerarquía clara (H1/H2/p).</span>
      </a>
    </li>

    <li className="bonus-links__item">
      <a className="bonus-links__link" href="https://www.lapa.ninja/" target="_blank" rel="noreferrer">
        <span className="bonus-links__name">Lapa Ninja</span>
        <span className="bonus-links__desc">Landing pages por sectores (muy útil para ideas de estructura).</span>
      </a>
    </li>

    <li className="bonus-links__item">
      <a className="bonus-links__link" href="https://www.mobbin.com/" target="_blank" rel="noreferrer">
        <span className="bonus-links__name">Mobbin</span>
        <span className="bonus-links__desc">Patrones mobile con pantallas reales (móvil primero).</span>
      </a>
    </li>
  </ul>

  <div className="bonus-links__note">
    <strong>Mini-reto:</strong> elige 1 web y apunta 3 decisiones de diseño que ves claras (color, tipografía, jerarquía).
  </div>
  <div className="doc-next">
  <Link className="btn btn-primary" to="/tema/2">
    Siguiente tema <span aria-hidden="true">→</span>
  </Link>
</div>
</section>

    </div>
    </>
  );
}
