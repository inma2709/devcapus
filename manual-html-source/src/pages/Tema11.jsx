import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TemaFooterHTML() {
  useEffect(() => {
    document.title = "UF1841 · Tema · Footer en HTML";
  }, []);

  return (
    <main className="doc" id="contenido">
      {/* HERO */}
      <header className="doc-hero" id="intro-footer">
        <p className="doc-kicker">Tema 11 · Footer en HTML</p>
        <h1>Footer en HTML: estructura, accesibilidad y buenas prácticas</h1>
        <p className="doc-lead">
          El <strong>footer</strong> es la “zona de cierre” de una página o sección. Sirve para ofrecer
          información útil (autoría, copyright, enlaces, contacto), mejorar la navegación y reforzar la
          confianza del usuario. Un footer bien hecho no es un “cajón desastre”: es una parte semántica
          clave del documento.
        </p>

        <div className="callout">
          Consejo: piensa el footer como un <strong>menú secundario</strong> + <strong>información legal</strong> +{" "}
          <strong>contacto</strong>. Simple, claro y fácil de navegar.
        </div>
      </header>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice del tema">
        <h2>Contenido</h2>
        <ol>
          <li>
            <a href="#que-es-footer">1. Qué es un footer y para qué sirve</a>
          </li>
          <li>
            <a href="#semantica-footer">2. Semántica: footer del sitio vs footer de sección</a>
          </li>
          <li>
            <a href="#contenido-footer">3. Qué debería incluir y qué evitar</a>
          </li>
          <li>
            <a href="#accesibilidad-footer">4. Accesibilidad: enlaces, foco y navegación</a>
          </li>
          <li>
            <a href="#footer-ejemplo">5. Ejemplo profesional listo para copiar</a>
          </li>
          <li>
            <a href="#checklist-footer">6. Checklist final</a>
          </li>
        </ol>
      </nav>

      {/* 1 */}
      <section className="doc-section" id="que-es-footer">
        <h2>1) ¿Qué es un footer y para qué sirve?</h2>
        <p>
          En HTML, <code>&lt;footer&gt;</code> representa el pie de una página o de una sección. Normalmente
          incluye:
        </p>
        <ul>
          <li>Información de autoría/copyright.</li>
          <li>Enlaces legales (privacidad, cookies, aviso legal).</li>
          <li>Contacto (email, teléfono, formulario).</li>
          <li>Ayuda (FAQ, soporte, accesibilidad).</li>
          <li>Redes sociales (enlaces claros y descriptivos).</li>
        </ul>

        <div className="callout tip">
          Regla práctica: si el usuario busca “contacto” o “privacidad”, muchas veces baja al final. Un footer
          ordenado reduce fricción.
        </div>
      </section>

      {/* 2 */}
      <section className="doc-section" id="semantica-footer">
        <h2>2) Semántica: footer del sitio vs footer de sección</h2>

        <details className="dd">
          <summary>Footer del sitio (global)</summary>
          <div className="dd-body">
            <p>
              Es el footer principal de la página. Suele ir al final del layout general y se repite en todas
              las páginas del sitio.
            </p>
            <pre>
              <code>{`<body>
  <header>...</header>
  <main>...</main>
  <footer>... footer global ...</footer>
</body>`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>Footer de una sección o artículo</summary>
          <div className="dd-body">
            <p>
              También puede aparecer dentro de <code>&lt;article&gt;</code> o <code>&lt;section&gt;</code> para
              información específica: autor, fecha, tags, enlaces relacionados.
            </p>
            <pre>
              <code>{`<article>
  <h2>Noticia</h2>
  <p>Contenido...</p>
  <footer>
    <p>Publicado el 21/12/2025</p>
  </footer>
</article>`}</code>
            </pre>

            <div className="callout warn">
              Ojo: el footer de un artículo <strong>no sustituye</strong> al footer global del sitio.
            </div>
          </div>
        </details>
      </section>

      {/* 3 */}
      <section className="doc-section" id="contenido-footer">
        <h2>3) Qué debería incluir y qué evitar</h2>

        <details className="dd" open>
          <summary>Contenido recomendado</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Marca</strong>: nombre del sitio o una frase breve (sin repetir demasiado).
              </li>
              <li>
                <strong>Enlaces legales</strong>: privacidad, cookies, aviso legal.
              </li>
              <li>
                <strong>Soporte</strong>: FAQ, contacto, accesibilidad.
              </li>
              <li>
                <strong>Redes</strong>: enlaces externos claros y descriptivos.
              </li>
            </ul>

            <div className="callout tip">
              Si tu web es educativa, funciona muy bien añadir enlaces tipo “Temario”, “Proyectos”, “Recursos”.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Qué evitar</summary>
          <div className="dd-body">
            <ul>
              <li>❌ Un footer infinito con información irrelevante.</li>
              <li>❌ Repetir el menú principal completo sin intención.</li>
              <li>❌ Texto minúsculo o con poco contraste.</li>
              <li>❌ Enlaces tipo “haz clic aquí” (sin decir a dónde llevan).</li>
            </ul>
          </div>
        </details>
      </section>

      {/* 4 */}
      <section className="doc-section" id="accesibilidad-footer">
        <h2>4) Accesibilidad: enlaces, foco y navegación</h2>
        <ul>
          <li>
            Agrupa enlaces en listas: <code>&lt;ul&gt;</code> + <code>&lt;li&gt;</code>.
          </li>
          <li>Usa textos descriptivos (“Política de privacidad”, no “Privacidad”).</li>
          <li>
            Asegúrate de que el <strong>foco</strong> se vea al tabular (tu CSS global debería hacerlo).
          </li>
          <li>
            En enlaces externos con nueva pestaña: <code>target="_blank"</code> +{" "}
            <code>rel="noopener noreferrer"</code>.
          </li>
        </ul>

        <div className="callout">
          Truco: <strong>tabula</strong> hasta el final. Si puedes recorrer el footer fácilmente solo con teclado,
          el diseño va bien.
        </div>
      </section>

   {/* 5 */}
<section className="doc-section" id="footer-ejemplo">
  <h2>5) Ejemplo de footer en HTML (estructura básica)</h2>

  <details className="dd" open>
    <summary>Footer en HTML (solo estructura, sin CSS)</summary>
    <div className="dd-body">
      <p>
        Este ejemplo muestra un <strong>footer creado únicamente con HTML</strong>.
        No hay estilos ni React: solo estructura y semántica.
      </p>

      <pre>
        <code>{`<footer role="contentinfo">

  <!-- Información del sitio -->
  <div>
    <p>UF1841 · Lenguajes de marcas</p>
    <p>Material didáctico para aprender HTML y CSS paso a paso.</p>
  </div>

  <!-- Navegación secundaria -->
  <nav aria-label="Enlaces del footer">
    
    <div>
      <h3>Curso</h3>
      <ul>
        <li><a href="/temario">Temario</a></li>
        <li><a href="/proyectos">Proyectos</a></li>
        <li><a href="/recursos">Recursos</a></li>
      </ul>
    </div>

    <div>
      <h3>Soporte</h3>
      <ul>
        <li><a href="/faq">Preguntas frecuentes</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/accesibilidad">Accesibilidad</a></li>
      </ul>
    </div>

    <div>
      <h3>Legal</h3>
      <ul>
        <li><a href="/privacidad">Política de privacidad</a></li>
        <li><a href="/cookies">Política de cookies</a></li>
        <li><a href="/aviso-legal">Aviso legal</a></li>
      </ul>
    </div>

  </nav>

  <!-- Copyright y redes -->
  <div>
    <p>© 2026 UF1841 · Inma Contreras</p>

    <ul aria-label="Redes sociales">
      <li>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
    </ul>
  </div>

</footer>`}</code>
      </pre>

      <div className="callout tip">
        Qué debe aprender el alumno de este ejemplo:
        <ul>
          <li><code>&lt;footer&gt;</code> es un elemento semántico.</li>
          <li>Los enlaces se agrupan con <code>&lt;nav&gt;</code>.</li>
          <li>Las listas organizan los enlaces de forma clara.</li>
          <li>Los enlaces externos usan <code>target="_blank"</code> y <code>rel</code> por seguridad.</li>
        </ul>
      </div>
    </div>
  </details>
</section>

      {/* 6 */}
      <section className="doc-section" id="checklist-footer">
        <h2>6) Checklist final</h2>
        <ul>
          <li>✅ Tiene estructura (marca + columnas + franja inferior).</li>
          <li>✅ Enlaces claros y agrupados en listas.</li>
          <li>✅ Foco visible al tabular.</li>
          <li>✅ Responsive (se apila en pantallas pequeñas).</li>
          <li>
            ✅ Enlaces externos con <code>rel="noopener noreferrer"</code>.
          </li>
        </ul>
      </section>

      {/* RESUMEN */}
      <div className="resumen-final">
        <p>
          <strong>Resumen:</strong> Un footer bien construido aporta confianza, mejora la navegación y cierra la
          experiencia del usuario. Debe ser semántico, accesible, organizado por secciones y responsive.
        </p>
      </div>

      <div className="doc-next">
        <Link className="btn btn-primary" to="/tema/12">
          Siguiente tema <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
