// Tema3.jsx
// Tema 3 · Lenguajes de marcado generales
// Introducción conceptual (sin entrar aún en HTML en detalle)

import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Tema3() {
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
    document.title = "UF1841 · Tema 3 · Lenguajes de marcado";
  }, []);
  return (
    <div className="doc">
      <header className="doc-hero">
        <p className="doc-kicker">Tema 3 · Lenguajes de marcado</p>
        <h1>Lenguajes de marcado: estructurar la información</h1>
        <p className="doc-lead">
          Antes de aprender a escribir código HTML, es fundamental entender qué son los lenguajes de marcado,
          para qué sirven y en qué se diferencian de los lenguajes de programación. Este tema sienta las bases
          conceptuales de todo lo que vendrá después.
        </p>

        <div className="callout tip">
          <strong>Objetivo del tema:</strong> comprender qué es un lenguaje de marcado, cómo organiza la información
          y por qué es clave en la estructura de una página web.
        </div>
      </header>

      <nav className="doc-index" aria-label="Índice del tema">
        <h2>Índice</h2>
        <ol>
          <li><a href="#concepto" onClick={(e) => handleIndexClick(e, 'concepto')}>Qué es un lenguaje de marcado</a></li>
          <li><a href="#para-que" onClick={(e) => handleIndexClick(e, 'para-que')}>Para qué sirven los lenguajes de marcado</a></li>
          <li><a href="#no-programacion" onClick={(e) => handleIndexClick(e, 'no-programacion')}>Lenguajes de marcado vs programación</a></li>
          <li><a href="#origen" onClick={(e) => handleIndexClick(e, 'origen')}>Origen: SGML y XML</a></li>
          <li><a href="#estructura" onClick={(e) => handleIndexClick(e, 'estructura')}>Estructura general de un documento</a></li>
          <li><a href="#ampliar" onClick={(e) => handleIndexClick(e, 'ampliar')}>Enlaces para ampliar conocimientos</a></li>
        </ol>
      </nav>

      {/* ===================================================== */}
     {/* ===================================================== */}
<section id="concepto" className="doc-section">
  <h2>1) Qué es un lenguaje de marcado</h2>

  <details open className="dd">
    <summary>Definición clara y funcional</summary>
    <div className="dd-body">
      <p>
        Cuando queremos crear una página web, se nos presentan múltiples herramientas,
        pero todas tienen algo en común: el uso de un <strong>lenguaje de marcas</strong>.
      </p>

      <p>
        Los lenguajes de marcado permiten <strong>codificar texto mediante etiquetas</strong>
        que indican cómo debe estructurarse y organizarse el contenido, independientemente
        del dispositivo en el que se visualice.
      </p>

      <div className="callout">
        <strong>Idea clave:</strong> el lenguaje de marcado define la estructura y el significado,
        no el aspecto visual final.
      </div>

      <details className="dd dd-nested">
        <summary>📖 Leer más sobre los lenguajes de marcado</summary>
        <div className="dd-body">
          <p>
            A lo largo del tiempo han existido distintos lenguajes de marcado generales,
            como <strong>GML</strong> o <strong>SGML</strong>, desarrollados para estructurar documentos
            complejos de forma estándar.
          </p>

          <p>
            En el entorno de Internet, los más relevantes son <strong>HTML</strong>,
            <strong> XML</strong> y <strong>XHTML</strong>. Aunque comparten similitudes,
            su finalidad y uso son distintos.
          </p>

          <p>
            <strong>HTML</strong> (HyperText Markup Language) es el lenguaje principal
            para crear páginas web. Utiliza etiquetas como <code>&lt;h1&gt;</code>,
            <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code> o <code>&lt;img&gt;</code>
            para dar estructura y significado al contenido que se muestra al usuario.
          </p>

          <p>
            <strong>XML</strong> (eXtensible Markup Language) se utiliza principalmente
            para el <strong>intercambio de información estructurada</strong>.
            Permite definir etiquetas propias, lo que lo hace muy flexible,
            pero no está pensado para mostrar contenido visual.
          </p>

          <p>
            <strong>XHTML</strong> es una versión de HTML con una sintaxis más estricta,
            basada en las normas de XML. Aunque fue importante durante un tiempo,
            actualmente ha sido sustituido en la práctica por HTML5.
          </p>

          <h3 className="subtitulo">🔍 1.1 Propiedades de los lenguajes de marcado</h3>

          <ul>
            <li>
              ✔️ <strong>Editables con cualquier editor de texto.</strong>  
              Un documento HTML o XML es texto plano, lo que lo hace universal.
            </li>
            <li>
              ✔️ <strong>Contenido y marcas conviven en el mismo archivo.</strong>  
              La estructura y la información se definen juntas.
            </li>
            <li>
              ✔️ <strong>Flexibles y reutilizables.</strong>  
              El mismo contenido puede adaptarse a distintos dispositivos.
            </li>
            <li>
              ✔️ <strong>Basados en estándares oficiales.</strong>  
              Definidos por organismos como el{" "}
              <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">
                W3C
              </a>
              , garantizando compatibilidad entre navegadores.
            </li>
          </ul>

          <div className="callout tip">
            <strong>Recuerda:</strong> HTML trabaja junto a <strong>CSS</strong> para el diseño
            y <strong>JavaScript</strong> para la interactividad. Los tres forman la base del
            desarrollo web moderno.
          </div>
        </div>
      </details>

      <figure className="media">
        <img
          src="../img/etiqueta.png"
          alt="Representación conceptual del lenguaje HTML y su estructura"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="muted">
          Los lenguajes de marcado estructuran la información antes de darle estilo o comportamiento.
        </figcaption>
      </figure>
    </div>
  </details>
</section>

      {/* ===================================================== */}
      <section id="para-que" className="doc-section">
        <h2>2) Para qué sirven los lenguajes de marcado</h2>

        <details open className="dd">
          <summary>Usos principales</summary>
          <div className="dd-body">
            <ul>
              <li>Estructurar documentos digitales.</li>
              <li>Separar contenido de presentación.</li>
              <li>Facilitar la visualización correcta de la información.</li>
              <li>Permitir el intercambio de datos entre sistemas.</li>
              <li>Hacer la información accesible y reutilizable.</li>
            </ul>

            <div className="callout tip">
              <strong>Ejemplo sencillo:</strong> una web no “sabe” qué es un título si no se lo marcas como tal.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="no-programacion" className="doc-section">
        <h2>3) Lenguajes de marcado ≠ lenguajes de programación</h2>

        <details open className="dd">
          <summary>Diferencia fundamental</summary>
          <div className="dd-body">
            <p>
              Es importante no confundir los lenguajes de marcado con los lenguajes de programación.
              Los primeros <strong>no tienen variables, condiciones ni cálculos</strong>.
            </p>

            <ul>
              <li>❌ No toman decisiones.</li>
              <li>❌ No ejecutan lógica.</li>
              <li>✔ Organizan información.</li>
              <li>✔ Definen estructura y significado.</li>
            </ul>

            <div className="callout warn">
              <strong>Importante:</strong> HTML y XML no son lenguajes de programación, aunque se usen en desarrollo web.
            </div>
          </div>
        </details>
      </section>

     {/* ===================================================== */}
<section id="origen" className="doc-section">
  <h2>4) Origen: SGML y XML (y cuándo usarlos)</h2>

  <details open className="dd">
    <summary>SGML: el origen de los lenguajes de marcado</summary>
    <div className="dd-body">
      <p>
        <strong>SGML</strong> (Standard Generalized Markup Language) es el antecesor de muchos lenguajes de marcado
        actuales. Fue diseñado para definir estructuras complejas de documentos, especialmente en entornos técnicos,
        industriales y académicos.
      </p>

      <p>
        No es un lenguaje pensado para el desarrollo web cotidiano, sino para <strong>definir otros lenguajes de marcado</strong>.
        De hecho, HTML y XML derivan conceptualmente de SGML.
      </p>

      <div className="callout">
        <strong>¿Para qué se usa SGML?</strong>
        <ul>
          <li>Documentación técnica de gran tamaño.</li>
          <li>Normativas, manuales industriales y documentación legal.</li>
          <li>Sistemas donde la estructura del documento es crítica.</li>
        </ul>
      </div>

      <div className="callout warn">
        <strong>Importante:</strong> hoy en día el alumno no va a usar SGML directamente.
        Se estudia para entender el origen y la evolución de los lenguajes de marcado.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>XML: estructura de datos e intercambio de información</summary>
    <div className="dd-body">
      <p>
        <strong>XML</strong> (Extensible Markup Language) nace como una versión más sencilla y práctica de SGML,
        orientada al intercambio de información entre sistemas y aplicaciones.
      </p>

      <p>
        A diferencia de HTML, XML no está pensado para mostrar contenido al usuario,
        sino para <strong>describir datos de forma estructurada</strong>.
      </p>

      <ul>
        <li>Basado en etiquetas definidas por el propio desarrollador.</li>
        <li>Estructura estricta y validable.</li>
        <li>Muy usado para intercambio de datos.</li>
        <li>Independiente de cómo se represente visualmente.</li>
      </ul>

      <div className="callout tip">
        XML responde a la pregunta: <strong>¿qué es este dato y cómo se organiza?</strong>
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>¿Cuándo usar XML (o lenguajes similares) en lugar de HTML?</summary>
    <div className="dd-body">
      <p>
        Esta es una pregunta clave para entender el papel de cada lenguaje.
        <strong>HTML no sirve para todo</strong>, y ahí es donde entran otros lenguajes de marcado.
      </p>

      <div className="callout">
        <strong>HTML se usa cuando:</strong>
        <ul>
          <li>Queremos mostrar información a personas.</li>
          <li>Importa el aspecto visual y la interacción.</li>
          <li>Estamos construyendo una página web.</li>
        </ul>
      </div>

      <div className="callout tip">
        <strong>XML (u otros lenguajes de marcado de datos) se usan cuando:</strong>
        <ul>
          <li>Necesitamos intercambiar información entre sistemas.</li>
          <li>Los datos deben ser leídos por máquinas, no por personas.</li>
          <li>La estructura es más importante que el diseño.</li>
          <li>Se trabaja con configuraciones, catálogos o información estructurada.</li>
        </ul>
      </div>

      <details className="dd dd-nested">
        <summary>Ejemplos reales para el alumno</summary>
        <div className="dd-body">
          <ul>
            <li>Archivos de configuración de aplicaciones.</li>
            <li>Intercambio de datos entre servidores.</li>
            <li>Feeds de información (RSS).</li>
            <li>Exportación de datos entre programas.</li>
            <li>Sistemas donde la web es solo una parte del proceso.</li>
          </ul>
        </div>
      </details>

      <div className="callout warn">
        <strong>Idea clave del tema:</strong>  
        HTML muestra información.  
        XML describe información.  
        No compiten: se complementan.
      </div>
    </div>
  </details>
</section>


      {/* ===================================================== */}
      <section id="estructura" className="doc-section">
        <h2>5) Estructura general de un documento</h2>

        <details open className="dd">
          <summary>La idea de estructura</summary>
          <div className="dd-body">
            <p>
              Todo documento basado en lenguajes de marcado sigue una estructura lógica:
              una jerarquía de elementos que organizan la información.
            </p>

            <ul>
              <li>Un elemento principal que contiene todo.</li>
              <li>Elementos secundarios que agrupan contenido.</li>
              <li>Relación clara entre partes.</li>
            </ul>

            <div className="callout">
              <strong>Esto será clave en HTML:</strong> entender estructura antes que estilo.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="ampliar" className="doc-section">
        <h2>6) Enlaces para ampliar conocimientos</h2>

        <details open className="dd">
          <summary>Recursos recomendados</summary>
          <div className="dd-body">
            <ul>
              <li>
                <a href="https://www.w3.org/standards/xml/" target="_blank" rel="noreferrer">
                  W3C — Estándares XML
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/es/docs/Glossary/Markup_language" target="_blank" rel="noreferrer">
                  MDN — Qué es un lenguaje de marcado
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/xml/xml_whatis.asp" target="_blank" rel="noreferrer">
                  W3Schools — Introducción a XML
                </a>
              </li>
              <li>
                <a href="https://www.ibm.com/docs/es/b2b-integrator/5.2?topic=concepts-xml-overview" target="_blank" rel="noreferrer">
                  IBM — Visión general de XML
                </a>
              </li>
            </ul>

            <div className="callout tip">
              <strong>Consejo:</strong> no memorices definiciones. Quédate con la idea de estructura y significado.
            </div>
          </div>
        </details>
      </section>

    <div className="doc-next">
  <Link className="btn btn-primary" to="/tema/4">
    Siguiente tema <span aria-hidden="true">→</span>
  </Link>
</div>
    </div>
  );
}
