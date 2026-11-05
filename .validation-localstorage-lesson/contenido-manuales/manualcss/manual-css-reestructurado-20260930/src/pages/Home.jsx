import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="doc">
      {/* HERO */}
      <section className="card hero">
        <p className="doc-kicker">Manual CSS · React</p>
        <h1>CSS: del caos al control visual</h1>
        <p className="doc-lead">
          Este manual no va de memorizar propiedades. Va de{" "}
          <strong>entender cómo piensa CSS</strong> para diseñar interfaces
          claras, accesibles, mantenibles y profesionales. El objetivo es que
          CSS deje de parecer arbitrario y empiece a funcionar como un sistema
          lógico que sabes interpretar, usar y corregir.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="css-introduccion" className="btn btn-primary">
            Empezar el curso →
          </Link>

          <a
            href="https://developer.mozilla.org/es/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Ver CSS en MDN
          </a>
        </div>
      </section>

      {/* FOTO */}
      <figure className="media">
        <img
          src="/css.png"
          alt="Portada del Manual CSS de Inma Contreras"
          width="500"
          height="320"
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          Manual de CSS creado por Inma Contreras (@inmaco) para aprender CSS
          desde cero hasta un nivel técnico sólido.
        </figcaption>
      </figure>

      {/* ÍNDICE COMPLETO DEL CURSO */}
      <section className="card">
        <h2>🗺️ Índice del curso</h2>
        <p style={{ marginBottom: "1.25rem" }}>
          El manual cubre <strong>39 lecciones</strong> organizadas en 7 bloques
          progresivos más un bloque de 20 ejercicios prácticos.
          Puedes saltar a cualquier sección cuando quieras.
        </p>

        {[
          {
            icono: "🧱",
            bloque: "Fundamentos",
            lecciones: [
              { label: "Introducción a CSS", to: "css-introduccion" },
              { label: "CSS interno y externo", to: "css-interno-externo-1" },
              { label: "CSS base y reset", to: "css-interno-externo-2" },
              { label: "Cascada, herencia y especificidad ⭐", to: "css-cascada-1" },
              { label: "Cascada II: práctica", to: "css-cascada-2" },
              { label: "DevTools y depuración", to: "css-devtools" },
              { label: "Variables CSS", to: "css-variables" },
            ],
          },
          {
            icono: "🎯",
            bloque: "Selectores",
            lecciones: [
              { label: "Selectores básicos", to: "css-selectores-basicos" },
              { label: "Selectores avanzados", to: "css-selectores-avanzados" },
              { label: "Pseudoclases y pseudoelementos", to: "css-pseudoclases" },
              { label: "Pseudoclases funcionales", to: "css-pseudoclases-funcionales" },
              { label: "Práctica de selectores ⭐", to: "css-practica-selectores" },
            ],
          },
          {
            icono: "🍀",
            bloque: "Aspectos visuales",
            lecciones: [
              { label: "Texto I", to: "css-texto-1" },
              { label: "Texto II", to: "css-texto-2" },
              { label: "Tipografía y legibilidad ⭐", to: "css-tipografia" },
              { label: "Imágenes I", to: "css-imagenes-1" },
              { label: "Imágenes II", to: "css-imagenes-2" },
              { label: "Fondos y gradientes", to: "css-fondos" },
            ],
          },
          {
            icono: "📐",
            bloque: "Layout",
            lecciones: [
              { label: "Box model y box-sizing", to: "css-box-model" },
              { label: "Display y flujo", to: "css-display" },
              { label: "Overflow y contención", to: "css-overflow" },
              { label: "Flexbox I ⭐", to: "css-flexbox-1" },
              { label: "Flexbox II: alineación", to: "css-flexbox-2" },
              { label: "Grid I ⭐", to: "css-grid-1" },
              { label: "Grid II: fracciones", to: "css-grid-2" },
              { label: "Grid Areas ⭐", to: "css-grid-areas" },
            ],
          },
          {
            icono: "🧩",
            bloque: "Componentes",
            lecciones: [
              { label: "Botones y vínculos", to: "css-botones-vinculos" },
              { label: "Barra de navegación", to: "css-navbar" },
              { label: "Tablas", to: "css-tablas" },
              { label: "Formularios accesibles", to: "css-formularios" },
              { label: "Modales y diálogos", to: "css-modales" },
              { label: "Overlays y posicionamiento", to: "css-overlays" },
              { label: "Z-index y contexto de apilado", to: "css-zindex" },
            ],
          },
          {
            icono: "📱",
            bloque: "Responsive y accesibilidad",
            lecciones: [
              { label: "Media queries mobile-first ⭐", to: "css-media-queries" },
              { label: "Layout responsive con Grid y Flex", to: "css-responsive-layout" },
              { label: "Accesibilidad en CSS ⭐", to: "css-accesibilidad" },
            ],
          },
          {
            icono: "🚀",
            bloque: "Extra: herramientas",
            lecciones: [
              { label: "SCSS / Sass: introducción", to: "css-sass" },
              { label: "Bootstrap 5: de cero a profesional", to: "css-bootstrap" },
              { label: "Tailwind CSS: utility-first", to: "css-tailwind" },
            ],
          },
        ].map((b) => (
          <details key={b.bloque} className="dd" open>
            <summary>
              {b.icono} {b.bloque}{" "}
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  color: "var(--text-secondary, #64748b)",
                  marginLeft: "0.5rem",
                }}
              >
                {b.lecciones.length} lecciones
              </span>
            </summary>
            <div className="dd-body">
              <ol
                style={{
                  margin: 0,
                  padding: "0 0 0 1.25rem",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "0.25rem 1.5rem",
                }}
              >
                {b.lecciones.map((l) => (
                  <li key={l.to} style={{ fontSize: "0.9rem", padding: "0.2rem 0" }}>
                    <Link
                      to={l.to}
                      style={{ color: "var(--interactive-primary, #6366f1)", textDecoration: "none" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </details>
        ))}

        <div style={{ marginTop: "1rem" }}>
          <Link to="ejercicios" className="btn btn-primary">
            🌳 Ver los 20 ejercicios prácticos
          </Link>
        </div>
      </section>

      {/* BIENVENIDA */}
      <section className="card">
        <h2>Bienvenida/o al manual de CSS</h2>

        <p>
          Si estás empezando, es normal que CSS parezca imprevisible: elementos
          que no se colocan donde esperabas, márgenes que se comportan de forma
          extraña, alineaciones que “no funcionan” y soluciones improvisadas que
          terminan convirtiéndose en parches.
        </p>

        <p>
          Sin embargo, CSS no es magia ni un conjunto de trucos sueltos. Es un
          sistema con reglas. Cuando comprendes conceptos como la{" "}
          <strong>cascada</strong>, la <strong>herencia</strong>, la{" "}
          <strong>especificidad</strong>, el <strong>flujo del documento</strong>{" "}
          y los distintos <strong>modelos de layout</strong>, dejas de probar
          cosas al azar y empiezas a tomar decisiones con criterio.
        </p>

        <div className="callout tip">
          Aquí no vas a memorizar una lista infinita de propiedades: vas a
          aprender a interpretar cómo funciona CSS y a utilizarlo con lógica.
        </div>

        <p>
          Este manual está pensado para acompañarte desde una base inicial hasta
          una visión más profesional del estilo en frontend. No solo aprenderás
          a aplicar reglas, sino también a leer CSS existente, detectar errores,
          corregirlos y construir hojas de estilo más limpias y mantenibles.
        </p>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="card">
        <h2>¿Para quién es este manual?</h2>

        <ul>
          <li>
            Para quien empieza desde cero y necesita una base clara, ordenada y
            sin lagunas.
          </li>
          <li>
            Para quien ya ha usado CSS pero siente que todavía trabaja con dudas
            o por intuición.
          </li>
          <li>
            Para quien quiere llegar a un nivel profesional y escribir estilos
            con estructura, coherencia y criterio técnico.
          </li>
          <li>
            Para quien necesita entender CSS generado por otras personas o por
            herramientas de IA y quiere saber revisarlo correctamente.
          </li>
        </ul>

        <div className="callout">
          Este manual no está orientado solo a “hacer que algo se vea bonito”,
          sino a comprender la lógica visual y estructural de una interfaz web.
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="card">
        <h2>Qué vas a aprender</h2>

        <p>
          A lo largo del manual trabajarás desde los fundamentos hasta aspectos
          más avanzados del CSS moderno. La progresión está pensada para que
          cada tema se apoye en el anterior y puedas construir una comprensión
          sólida, no fragmentada.
        </p>

        <ul>
          <li>Entender qué papel cumple CSS dentro del desarrollo web</li>
          <li>Dominar la sintaxis, los selectores y la cascada</li>
          <li>Comprender el modelo de caja y el flujo normal del documento</li>
          <li>Trabajar con tipografía, color, fondos, bordes y espaciado</li>
          <li>Construir layouts con Flexbox y Grid</li>
          <li>Aplicar responsive design con criterio</li>
          <li>Usar variables CSS y funciones modernas</li>
          <li>Escribir estilos más mantenibles y reutilizables</li>
          <li>Leer, revisar y corregir CSS generado por IA</li>
          <li>Desarrollar criterio visual y técnico como profesional frontend</li>
        </ul>

        <div className="callout tip">
          El verdadero objetivo no es solo que un ejercicio funcione, sino que
          entiendas por qué funciona y seas capaz de reproducir esa lógica en
          otros proyectos.
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="card">
        <h2>Cómo vamos a trabajar</h2>

        <p>
          El aprendizaje de CSS exige práctica, observación y corrección. Por
          eso este manual sigue una metodología progresiva: explicar, mostrar,
          practicar, revisar y consolidar.
        </p>

        <ul>
          <li>Explicaciones claras, de lo simple a lo complejo</li>
          <li>Ejemplos comentados y con intención didáctica</li>
          <li>Ejercicios guiados para aplicar cada concepto</li>
          <li>Tests y repasos para consolidar lo aprendido</li>
          <li>Enfoque técnico orientado a proyectos reales</li>
        </ul>

        <div className="callout warn">
          Aviso honesto: CSS no se domina leyendo una vez. Se aprende probando,
          equivocándose, observando qué ocurre y entendiendo por qué ocurre.
        </div>
      </section>

      {/* QUÉ ES CSS */}
      <section className="card">
        <h2>¿Qué es CSS y por qué existe?</h2>

        <p>
          CSS (<strong>Cascading Style Sheets</strong>) es el lenguaje encargado
          de definir la <strong>presentación visual</strong> de los documentos
          HTML: colores, tipografías, tamaños, espacios, distribución y
          comportamiento visual en diferentes pantallas o dispositivos.
        </p>

        <p>
          Mientras que HTML describe la <strong>estructura y el significado</strong>{" "}
          del contenido, CSS define <strong>cómo se representa</strong>. Esa
          separación entre estructura y presentación es una de las bases del
          desarrollo web moderno.
        </p>

        <div className="callout tip">
          HTML dice qué es el contenido. CSS decide cómo se muestra.
        </div>

        <p>
          Esta división permite organizar mejor los proyectos, reutilizar
          estilos, mantener los sitios con más facilidad y crear interfaces más
          consistentes.
        </p>
      </section>

      {/* ORIGEN */}
      <section className="card">
        <h2>El origen de CSS: resolver un problema real</h2>

        <p>
          En los primeros años de la web, el diseño se hacía directamente en
          HTML mediante etiquetas y atributos de presentación como{" "}
          <code>&lt;font&gt;</code>, <code>&lt;center&gt;</code> o{" "}
          <code>bgcolor</code>. El problema era evidente: el contenido y el
          aspecto visual estaban mezclados.
        </p>

        <p>
          Eso generaba documentos difíciles de mantener, poco reutilizables y
          con una estructura cada vez más desordenada. Cambiar un color, una
          fuente o una alineación podía obligar a modificar muchas páginas una a
          una.
        </p>

        <p>
          En 1996, el W3C publica la primera especificación de CSS con varios
          objetivos fundamentales:
        </p>

        <ul>
          <li>Separar contenido y presentación</li>
          <li>Facilitar el mantenimiento de los sitios web</li>
          <li>Permitir estilos reutilizables</li>
          <li>Mejorar la coherencia visual entre páginas</li>
          <li>Dar control sobre la apariencia sin degradar el HTML</li>
        </ul>

        <div className="callout">
          CSS no nace para “decorar” páginas: nace para hacer la web más
          mantenible, escalable y coherente.
        </div>
      </section>

      {/* EVOLUCIÓN */}
      <section className="card">
        <h2>La evolución de CSS</h2>

        <p>
          CSS no es un lenguaje estático. Ha evolucionado de forma continua para
          responder a nuevas necesidades: diseño adaptable, accesibilidad,
          componentes complejos, sistemas de diseño y mejores herramientas de
          maquetación.
        </p>

        <details className="dd">
          <summary>Principales hitos en la evolución de CSS</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>CSS1 (1996)</strong>: colores, tipografía, márgenes y
                estilos básicos.
              </li>
              <li>
                <strong>CSS2 / CSS2.1</strong>: posicionamiento, z-index, media
                types y un mayor control visual.
              </li>
              <li>
                <strong>CSS3</strong>: el lenguaje empieza a organizarse en
                módulos independientes como animaciones, bordes redondeados,
                sombras, gradientes o flexbox.
              </li>
              <li>
                <strong>CSS moderno</strong>: Grid, variables CSS, funciones
                avanzadas, container queries, mejoras tipográficas y herramientas
                más potentes para layouts complejos.
              </li>
            </ul>

            <div className="callout tip">
              Hoy CSS ya no evoluciona por grandes “versiones cerradas”, sino por
              módulos que avanzan de forma independiente.
            </div>
          </div>
        </details>
      </section>

      {/* SASS */}
      <section className="card">
        <h2>¿Por qué surge SASS?</h2>

        <p>
          A medida que los proyectos crecían, CSS empezó a mostrar ciertas
          limitaciones prácticas: repetición de valores, archivos extensos,
          dificultad para organizar el código y ausencia de mecanismos para
          reutilizar patrones de forma más estructurada.
        </p>

        <p>
          Para resolver estas carencias aparece <strong>SASS</strong>, un
          preprocesador que añade utilidades extra antes de generar el CSS final
          que sí entiende el navegador.
        </p>

        <details className="dd">
          <summary>Qué aporta SASS frente a CSS tradicional</summary>
          <div className="dd-body">
            <ul>
              <li>Variables reutilizables</li>
              <li>Anidamiento de selectores</li>
              <li>Mixins y funciones</li>
              <li>División modular de archivos</li>
              <li>Mayor organización en proyectos grandes</li>
            </ul>

            <div className="callout">
              Durante bastante tiempo, SASS solucionó problemas reales de
              escalabilidad que CSS todavía no resolvía por sí solo.
            </div>
          </div>
        </details>

        <div className="callout warn">
          SASS no sustituye a CSS. El navegador no interpreta SASS: interpreta
          el CSS compilado que se genera a partir de él.
        </div>
      </section>

      {/* CSS MODERNO */}
      <section className="card">
        <h2>CSS moderno: muchas ideas antes externas ya son nativas</h2>

        <p>
          En los últimos años, CSS ha incorporado de forma nativa muchas de las
          ideas que hicieron popular a SASS y a otras herramientas. Esto ha
          reforzado mucho su capacidad para trabajar sin depender siempre de un
          preprocesador.
        </p>

        <details className="dd">
          <summary>Avances clave del CSS actual</summary>
          <div className="dd-body">
            <ul>
              <li>
                Variables CSS (<code>--custom-properties</code>)
              </li>
              <li>
                Layouts complejos con <strong>Flexbox</strong> y{" "}
                <strong>Grid</strong>
              </li>
              <li>
                Funciones como <code>calc()</code>, <code>min()</code>,{" "}
                <code>max()</code> y <code>clamp()</code>
              </li>
              <li>Media queries más expresivas</li>
              <li>Mejor soporte para accesibilidad y adaptación</li>
              <li>Animaciones y transiciones más refinadas</li>
            </ul>

            <div className="callout tip">
              Hoy se puede construir CSS muy potente con herramientas nativas, si
              se entiende bien el lenguaje.
            </div>
          </div>
        </details>
      </section>

      {/* FUTURO */}
      <section className="card">
        <h2>Últimas novedades y hacia dónde va CSS</h2>

        <p>
          CSS continúa evolucionando activamente. La tendencia actual apunta a un
          lenguaje más contextual, más modular y más cercano a los sistemas de
          diseño profesionales.
        </p>

        <details className="dd">
          <summary>Novedades recientes y en adopción</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Container Queries</strong>
              </li>
              <li>
                <strong>:has()</strong> como selector relacional
              </li>
              <li>
                <strong>Subgrid</strong>
              </li>
              <li>Funciones de color más avanzadas</li>
              <li>Mejor control tipográfico y de composición</li>
              <li>Capas de estilos y mayor control de la cascada</li>
            </ul>

            <div className="callout">
              CSS ya no es solo una hoja de estilos: es una herramienta madura de
              diseño, maquetación y organización visual.
            </div>
          </div>
        </details>
      </section>

      {/* IA */}
      <section className="card">
        <h2>¿Puedo usar la IA para generar CSS? Sí, pero con criterio</h2>

        <p>
          La inteligencia artificial puede ser un apoyo muy útil para generar
          código, proponer layouts o acelerar tareas repetitivas. Pero no
          sustituye el criterio técnico del desarrollador.
        </p>

        <p>
          La IA no conoce tu proyecto completo, no entiende por sí sola tu
          sistema de diseño, no toma decisiones de mantenibilidad y no asume la
          responsabilidad del resultado final.
        </p>

        <p>
          Tu papel no consiste en escribir absolutamente todo desde cero, pero
          tampoco en aceptar sin revisión lo que una herramienta te devuelve. El
          valor profesional está en <strong>dirigir, evaluar y corregir</strong>.
        </p>

        <details className="dd">
          <summary>1. Qué hace realmente la IA cuando genera CSS</summary>
          <div className="dd-body">
            <p>
              La IA trabaja reconociendo patrones y prediciendo código probable
              a partir de una instrucción. Eso puede producir resultados útiles,
              pero no garantiza que el código generado sea el mejor para tu caso.
            </p>

            <ul>
              <li>No conoce tu arquitectura completa</li>
              <li>No detecta siempre redundancias reales</li>
              <li>No optimiza por defecto</li>
              <li>No entiende automáticamente tus decisiones visuales</li>
            </ul>

            <div className="callout warn">
              Copiar y pegar sin comprensión suele generar deuda técnica: el
              código parece válido, pero después cuesta integrarlo, mantenerlo o
              depurarlo.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2. Tu rol profesional al usar IA</summary>
          <div className="dd-body">
            <p>
              El desarrollador no desaparece. Cambia de función: define objetivos,
              redacta instrucciones mejores, valida resultados y toma decisiones
              técnicas.
            </p>

            <ul>
              <li>Defines qué necesitas construir</li>
              <li>Indicas el comportamiento esperado</li>
              <li>Revisas el CSS generado</li>
              <li>Corriges lo que no encaja</li>
              <li>Integras el resultado en tu proyecto real</li>
            </ul>

            <div className="callout tip">
              La IA puede acelerar la ejecución. El criterio sigue siendo tuyo.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3. Cómo pedir CSS correctamente a una IA</summary>
          <div className="dd-body">
            <p>
              La calidad del resultado depende mucho del nivel de precisión de tu
              prompt. Pedidos vagos suelen devolver código genérico; pedidos
              específicos producen soluciones más útiles.
            </p>

            <p>
              <strong>Ejemplo deficiente:</strong>
            </p>

            <pre>
              <code>{`Hazme un layout bonito con CSS`}</code>
            </pre>

            <p>
              <strong>Ejemplo mejor planteado:</strong>
            </p>

            <pre>
              <code>{`Crea un layout con Flexbox para React:
- Header fijo arriba
- Sidebar izquierda de 250px
- Contenido flexible a la derecha
- Usa clases claras
- Evita reglas redundantes
- No uses selectores excesivamente específicos
- Mantén el CSS responsive`}</code>
            </pre>

            <ul>
              <li>Define la estructura</li>
              <li>Define el comportamiento esperado</li>
              <li>Define limitaciones y criterios de calidad</li>
              <li>Indica el contexto real: React, HTML semántico, responsive, etc.</li>
            </ul>

            <div className="callout">
              Cuanto más clara sea la petición, menos tiempo perderás corrigiendo
              después.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>4. Cómo leer y revisar el CSS generado</summary>
          <div className="dd-body">
            <p>
              No deberías utilizar un bloque de CSS si no puedes explicar, al
              menos de forma básica, qué hace cada regla y por qué está ahí.
            </p>

            <ul>
              <li>Identifica el modelo de layout utilizado</li>
              <li>Comprueba si hay propiedades redundantes</li>
              <li>Detecta valores rígidos innecesarios</li>
              <li>Verifica si la regla encaja con tu HTML real</li>
              <li>Comprueba si el comportamiento responsive tiene sentido</li>
            </ul>

            <pre>
              <code>{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}`}</code>
            </pre>

            <p>
              Ante un bloque como este, debes preguntarte qué eje principal está
              usando Flexbox, qué significa centrar en el eje principal y en el
              eje cruzado, y si realmente ese centrado responde a una necesidad
              del diseño o es simplemente una solución automática generada sin
              contexto.
            </p>

            <div className="callout warn">
              Si no puedes explicar una regla, todavía no la controlas.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>5. Errores típicos al usar IA para CSS</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>CSS duplicado</strong>: varias reglas resuelven el mismo
                problema de forma innecesaria
              </li>
              <li>
                <strong>Uso excesivo de <code>!important</code></strong>: suele
                esconder un problema de especificidad o estructura
              </li>
              <li>
                <strong>Selectores demasiado largos</strong>: hacen el código más
                frágil y menos reutilizable
              </li>
              <li>
                <strong>Valores rígidos</strong>: mucho píxel sin adaptación
              </li>
              <li>
                <strong>Naming inconsistente</strong>: clases poco claras o mal
                organizadas
              </li>
            </ul>

            <div className="callout warn">
              La IA suele priorizar una respuesta rápida. Tu trabajo consiste en
              convertir esa respuesta en una solución técnica correcta.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>6. Cómo corregir lo que no funciona</summary>
          <div className="dd-body">
            <p>
              Corregir bien implica localizar el problema exacto y aplicar el
              cambio mínimo necesario. En CSS, muchas veces un ajuste pequeño
              resuelve un conflicto importante.
            </p>

            <ul>
              <li>Usa DevTools para inspeccionar reglas activas</li>
              <li>Activa y desactiva propiedades para observar efectos</li>
              <li>Comprueba medidas reales, caja y alineación</li>
              <li>Analiza si el problema es de layout, tamaño o especificidad</li>
            </ul>

            <p>
              <strong>Ejemplo:</strong>
            </p>

            <pre>
              <code>{`/* Código demasiado rígido */
.box {
  width: 300px;
}

/* Versión más flexible */
.box {
  width: 100%;
  max-width: 300px;
}`}</code>
            </pre>

            <p>
              El primer bloque funciona en un caso concreto, pero limita la
              adaptabilidad. El segundo mantiene el límite visual sin romper el
              comportamiento responsive.
            </p>

            <div className="callout tip">
              Corregir no significa rehacerlo todo. Muchas veces significa
              entender mejor el problema.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>7. Flujo profesional de trabajo con IA</summary>
          <div className="dd-body">
            <ol>
              <li>Definir con claridad qué se quiere construir</li>
              <li>Describirlo con precisión a la herramienta</li>
              <li>Leer el CSS generado sin darlo por bueno automáticamente</li>
              <li>Eliminar reglas redundantes o innecesarias</li>
              <li>Ajustar el resultado a tu contexto real</li>
              <li>Integrarlo y probarlo en el proyecto</li>
            </ol>

            <div className="callout">
              El resultado profesional no nace del primer prompt, sino del
              proceso de revisión y decisión posterior.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>8. Idea clave que debes interiorizar</summary>
          <div className="dd-body">
            <p>
              Saber CSS no consiste en memorizar todas las propiedades, sino en
              entender cómo se comportan los elementos, cómo funciona la cascada,
              cómo se estructuran los layouts y cómo se toman decisiones
              sostenibles dentro de un proyecto.
            </p>

            <p>
              La IA puede producir código. La responsabilidad técnica sigue
              siendo del desarrollador.
            </p>

            <div className="callout tip">
              Copiar y pegar te vuelve dependiente. Entender, revisar y corregir
              te convierte en profesional.
            </div>
          </div>
        </details>
      </section>

      {/* IDEAS CLAVE */}
      <section className="card">
        <h2>Ideas clave para empezar con buen pie</h2>

        <p>
          CSS no es un lenguaje secundario ni un simple complemento visual. Es
          una pieza central del desarrollo frontend moderno y una de las bases de
          la experiencia de usuario.
        </p>

        <p>Entender su historia, su lógica y su evolución te permitirá:</p>

        <ul>
          <li>Comprender por qué existen ciertas reglas y comportamientos</li>
          <li>Usar herramientas como SASS con criterio</li>
          <li>Aprovechar el CSS moderno sin depender de parches</li>
          <li>Leer y revisar mejor el código de otros</li>
          <li>Usar la IA como apoyo sin perder control técnico</li>
          <li>Diseñar con una mentalidad más profesional y sostenible</li>
        </ul>

        <div className="callout tip">
          Aprender CSS hoy es aprender un sistema maduro, potente y en constante
          evolución.
        </div>
      </section>

      {/* DETAILS FINALES */}
      <details className="dd" open>
        <summary>Cómo está organizado cada tema</summary>
        <div className="dd-body">
          <p>Cada tema del manual seguirá una estructura didáctica estable:</p>
          <ol>
            <li>Explicación clara y progresiva</li>
            <li>Ejemplos comentados</li>
            <li>Ejercicios guiados</li>
            <li>Repaso o test final</li>
          </ol>

          <div className="callout">
            Si entiendes el <strong>por qué</strong>, el <strong>cómo</strong>{" "}
            deja de ser confuso.
          </div>
        </div>
      </details>

      <details className="dd">
        <summary>Qué vas a ser capaz de hacer al terminar</summary>
        <div className="dd-body">
          <ul>
            <li>
              Diseñar layouts con criterio, sin depender de copiar código sin
              entenderlo
            </li>
            <li>
              Leer CSS generado por otras personas o por IA y saber exactamente
              qué hace
            </li>
            <li>
              Pedir a una IA resultados más útiles y mejor formulados
            </li>
            <li>
              Detectar errores, redundancias y malas prácticas en hojas de estilo
            </li>
            <li>
              Corregir y ajustar código hasta que funcione como esperas
            </li>
            <li>
              Escribir CSS más mantenible cuando sea necesario y estructurarlo
              con mayor claridad
            </li>
          </ul>

          <div className="callout tip">
            El objetivo final no es producir muchas líneas de CSS, sino
            desarrollar criterio técnico: entender, pedir, evaluar y corregir.
          </div>

          <div className="callout warn">
            CSS no se aprende en un día. Pero con práctica constante, ejemplos
            bien elegidos y una buena guía, se puede dominar y utilizar con
            seguridad.
          </div>
        </div>
      </details>
    </div>
  );
}