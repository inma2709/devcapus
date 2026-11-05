/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E01 · Tarjeta de perfil
// Objetivo: entender el box-model, padding, border,
// border-radius y cómo se "construye" un componente
// real paso a paso, sin Flexbox todavía.
// =====================================================

export default function E01_Tarjeta_Perfil() {
  useEffect(() => {
    document.title = "E01 · Tarjeta de perfil — Ejercicios CSS";
  }, []);

  const [paso, setPaso] = useState(1);
  const totalPasos = 6;

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ── HERO ── */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E01 · Nivel inicial</p>
        <h1>Tarjeta de perfil</h1>
        <p className="doc-lead">
          Vamos a construir una tarjeta de perfil paso a paso. No usaremos Flexbox ni Grid —
          eso viene después. El objetivo es que<strong> entiendas el box-model</strong>:{" "}
          cómo el padding, el borde y el margen forman el espacio visual de cualquier elemento.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> <code>padding</code>, <code>margin</code>,
          <code>border</code>, <code>border-radius</code>, <code>background</code>,
          <code>color</code>, <code>text-align</code> y <code>width</code>/<code>max-width</code>.
          Todo sin frameworks.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · El HTML base</a></li>
            <li><a href="#paso-2">Paso 2 · La caja: fondo, borde y redondeo</a></li>
            <li><a href="#paso-3">Paso 3 · El avatar circular</a></li>
            <li><a href="#paso-4">Paso 4 · Tipografía y colores</a></li>
            <li><a href="#paso-5">Paso 5 · Centrar la tarjeta en la página</a></li>
            <li><a href="#paso-6">Paso 6 · Resultado final + reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · El HTML base — estructura antes que estilos</summary>
          <div className="dd-body">
            <p>
              Antes de escribir una sola línea de CSS, construimos el HTML. La regla de oro es:{" "}
              <strong>estructura semántica primero, aspecto visual después</strong>.
            </p>
            <p>
              Una tarjeta de perfil necesita: una imagen (avatar), un nombre, un rol o
              descripción breve, y quizás una bio. Usamos{" "}
              <code>&lt;article&gt;</code> porque la tarjeta es contenido independiente.
            </p>

            <pre><code>{`<!-- index.html -->
<article class="tarjeta">

  <img
    class="tarjeta__avatar"
    src="https://i.pravatar.cc/120"
    alt="Avatar de Ana García"
    width="120"
    height="120"
  />

  <h2 class="tarjeta__nombre">Ana García</h2>
  <p  class="tarjeta__rol">Desarrolladora Front-end</p>

  <p class="tarjeta__bio">
    Apasionada del CSS, la accesibilidad y los
    interfaces que realmente funcionan.
  </p>

</article>`}</code></pre>

            <div className="callout">
              💡 <strong>¿Por qué <code>article</code>?</strong> Porque una tarjeta de perfil tiene
              sentido por sí sola, independientemente del resto de la página. <code>article</code>
              es el elemento semántico correcto para contenido autónomo.
            </div>
            <div className="callout warn">
              ⚠️ Fíjate en el <code>alt</code> de la imagen: describe a la persona, no la imagen
              técnica. "Avatar de Ana García" le dice al lector de pantalla exactamente qué ve.
            </div>

            {/* Vista previa paso 1 */}
            <h3>Vista previa — solo HTML, sin CSS</h3>
            <p>Así se ve sin estilos. Feo, ¿verdad? Eso está bien: el contenido existe, ahora lo vestimos.</p>
            <div style={{ border: "2px dashed var(--border-medium)", padding: "1rem", borderRadius: "8px" }}>
              <article>
                <img src="https://i.pravatar.cc/120" alt="Avatar de Ana García" width="120" height="120" />
                <h2 style={{ margin: "0.25rem 0", fontSize: "1.25rem" }}>Ana García</h2>
                <p style={{ margin: "0.25rem 0", color: "#555" }}>Desarrolladora Front-end</p>
                <p style={{ margin: "0.5rem 0" }}>
                  Apasionada del CSS, la accesibilidad y los interfaces que realmente funcionan.
                </p>
              </article>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · La caja: fondo, borde y redondeo</summary>
          <div className="dd-body">
            <p>
              Ahora damos forma a la tarjeta. Cada elemento HTML es una <strong>caja rectangular</strong>.
              Con CSS controlamos: el <strong>contenido</strong>, el <strong>padding</strong> (espacio interior),
              el <strong>borde</strong> y el <strong>margen</strong> (espacio exterior).
            </p>

            <pre><code>{`/* styles.css */

/* ➊ La tarjeta */
.tarjeta {
  background-color: white;      /* fondo blanco */
  border: 1px solid #e2e8f0;   /* borde sutil (gris claro) */
  border-radius: 16px;          /* esquinas redondeadas */
  padding: 2rem;                /* espacio interior: 32px en todos los lados */
}`}</code></pre>

            <div className="callout tip">
              <strong>Truco mental para el box-model:</strong><br />
              Imagina una caja de regalo: el <em>contenido</em> es el regalo,
              el <em>padding</em> es el relleno de papel, el <em>border</em> es la caja
              y el <em>margin</em> es el espacio que dejas entre esa caja y las demás.
            </div>

            <h3>¿Qué hace <code>border-radius: 16px</code>?</h3>
            <p>
              Redondea las 4 esquinas de la caja con un radio de 16px. Cuanto mayor el valor, más
              redondo. Con <code>50%</code> obtienes un círculo perfecto (lo usaremos en el avatar).
            </p>

            {/* Vista previa paso 2 */}
            <h3>Vista previa — tarjeta con caja</h3>
            <div style={{ border: "2px dashed var(--border-medium)", padding: "1rem", borderRadius: "8px" }}>
              <article style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem", display: "inline-block" }}>
                <img src="https://i.pravatar.cc/120" alt="Avatar de Ana García" width="120" height="120" />
                <h2 style={{ margin: "0.25rem 0", fontSize: "1.25rem" }}>Ana García</h2>
                <p style={{ margin: "0.25rem 0", color: "#555" }}>Desarrolladora Front-end</p>
                <p style={{ margin: "0.5rem 0" }}>
                  Apasionada del CSS, la accesibilidad y los interfaces que realmente funcionan.
                </p>
              </article>
            </div>
            <p style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--text-tertiary)" }}>
              Ya existe la caja. El avatar todavía es cuadrado, lo arreglamos en el paso 3.
            </p>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · El avatar circular</summary>
          <div className="dd-body">
            <p>
              La imagen ahora es un rectángulo. Vamos a hacerla circular con dos propiedades clave:
            </p>

            <pre><code>{`/* ➋ El avatar */
.tarjeta__avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;        /* ← esto convierte cualquier caja en círculo */
  object-fit: cover;         /* ← la imagen llena el círculo sin deformarse */
  display: block;            /* ← evita el espacio en blanco bajo la imagen */
  margin-bottom: 1rem;       /* ← separación del texto inferior */
}`}</code></pre>

            <div className="callout tip">
              <strong><code>border-radius: 50%</code></strong> redondea las esquinas al <em>50% del ancho/alto</em>
              de la caja — exactamente lo necesario para hacer un círculo
              cuando el elemento es cuadrado ({" "}<code>width === height</code>).
            </div>
            <div className="callout">
              <strong><code>object-fit: cover</code></strong> hace que la imagen
              llene su contenedor manteniendo proporciones. Sin esto, la imagen
              podría aplastarse o quedarse pequeña dentro del círculo.
            </div>

            {/* Vista previa paso 3 */}
            <h3>Vista previa — avatar circular</h3>
            <div style={{ border: "2px dashed var(--border-medium)", padding: "1rem", borderRadius: "8px" }}>
              <article style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem", display: "inline-block" }}>
                <img
                  src="https://i.pravatar.cc/120"
                  alt="Avatar de Ana García"
                  style={{ width: "96px", height: "96px", borderRadius: "50%", objectFit: "cover", display: "block", marginBottom: "1rem" }}
                />
                <h2 style={{ margin: "0.25rem 0", fontSize: "1.25rem" }}>Ana García</h2>
                <p style={{ margin: "0.25rem 0", color: "#555" }}>Desarrolladora Front-end</p>
                <p style={{ margin: "0.5rem 0" }}>
                  Apasionada del CSS, la accesibilidad y los interfaces que realmente funcionan.
                </p>
              </article>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · Tipografía y colores</summary>
          <div className="dd-body">
            <p>
              Ahora le damos personalidad. Ajustamos <strong>tamaños, pesos y colores</strong> del texto
              para crear jerarquía visual: el nombre destaca, el rol es secundario, la bio es discreta.
            </p>

            <pre><code>{`/* ➌ Nombre: el elemento más importante */
.tarjeta__nombre {
  font-size: 1.25rem;      /* más grande que el párrafo */
  font-weight: 700;        /* negrita */
  color: #1e293b;          /* gris muy oscuro, casi negro */
  margin: 0 0 0.25rem;    /* solo margen abajo */
}

/* ➍ Rol: texto secundario */
.tarjeta__rol {
  font-size: 0.875rem;     /* más pequeño */
  color: #6366f1;          /* color de acento (violeta) */
  font-weight: 600;
  margin: 0 0 1rem;
}

/* ➎ Bio: texto de apoyo, discreta */
.tarjeta__bio {
  font-size: 0.875rem;
  color: #64748b;          /* gris medio */
  line-height: 1.6;        /* más espacio entre líneas: más legible */
  margin: 0;
}`}</code></pre>

            <div className="callout tip">
              <strong>Jerarquía visual con 3 niveles de gris:</strong><br />
              — <code>#1e293b</code> para lo más importante (nombre)<br />
              — <code>#6366f1</code> como acento (rol)<br />
              — <code>#64748b</code> para texto de apoyo (bio)<br />
              Un lector escanea la tarjeta y sabe en segundos quién es y qué hace.
            </div>
            <div className="callout">
              <strong><code>line-height: 1.6</code></strong> significa que el interlineado
              es 1.6 veces el tamaño de la fuente. Para textos largos, el mínimo
              recomendado es 1.5 (WCAG AA de accesibilidad).
            </div>

            {/* Vista previa paso 4 */}
            <h3>Vista previa — con tipografía</h3>
            <div style={{ border: "2px dashed var(--border-medium)", padding: "1rem", borderRadius: "8px" }}>
              <article style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem", display: "inline-block", minWidth: "260px" }}>
                <img
                  src="https://i.pravatar.cc/120"
                  alt="Avatar de Ana García"
                  style={{ width: "96px", height: "96px", borderRadius: "50%", objectFit: "cover", display: "block", marginBottom: "1rem" }}
                />
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1e293b", margin: "0 0 0.25rem" }}>Ana García</h2>
                <p style={{ fontSize: "0.875rem", color: "#6366f1", fontWeight: 600, margin: "0 0 1rem" }}>Desarrolladora Front-end</p>
                <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                  Apasionada del CSS, la accesibilidad y los interfaces que realmente funcionan.
                </p>
              </article>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Centrar la tarjeta en la página</summary>
          <div className="dd-body">
            <p>
              La tarjeta existe pero ocupa todo el ancho. Necesitamos limitarla y centrarla usando
              el truco clásico de CSS: <code>max-width</code> + <code>margin: auto</code>.
            </p>

            <pre><code>{`.tarjeta {
  /* lo que ya teníamos... */
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;    /* ← centra el contenido interno */

  /* ➏ Centrar la tarjeta en la página */
  max-width: 320px;      /* nunca más ancha de 320px */
  margin: 4rem auto;     /* arriba/abajo: 4rem; izquierda/derecha: auto = centra */
}`}</code></pre>

            <div className="callout tip">
              <strong><code>margin: auto</code> en los lados</strong> es el truco más
              usado para centrar un bloque en CSS. Funciona porque el navegador reparte
              equitativamente el espacio sobrante entre el margen izquierdo y derecho.{" "}
              <strong>Requisito:</strong> el elemento debe tener un <code>width</code> o
              <code>max-width</code> que sea menor que su contenedor.
            </div>
            <div className="callout">
              <strong><code>max-width</code> vs <code>width</code>:</strong> Con{" "}
              <code>width: 320px</code> la tarjeta siempre mide 320px aunque la pantalla
              sea de 280px → se saldría. Con <code>max-width: 320px</code> nunca supera
              320px pero puede ser más estrecha si el espacio no alcanza. Siempre usa
              <code>max-width</code> para componentes que deben ser responsivos.
            </div>

            {/* Vista previa paso 5 */}
            <h3>Vista previa — tarjeta centrada</h3>
            <div style={{ border: "2px dashed var(--border-medium)", padding: "1.5rem", borderRadius: "8px", background: "#f8fafc" }}>
              <article style={{
                background: "white", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem",
                textAlign: "center", maxWidth: "320px", margin: "0 auto"
              }}>
                <img
                  src="https://i.pravatar.cc/120"
                  alt="Avatar de Ana García"
                  style={{ width: "96px", height: "96px", borderRadius: "50%", objectFit: "cover", display: "block", margin: "0 auto 1rem" }}
                />
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1e293b", margin: "0 0 0.25rem" }}>Ana García</h2>
                <p style={{ fontSize: "0.875rem", color: "#6366f1", fontWeight: 600, margin: "0 0 1rem" }}>Desarrolladora Front-end</p>
                <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                  Apasionada del CSS, la accesibilidad y los interfaces que realmente funcionan.
                </p>
              </article>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 — RESULTADO FINAL ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Código final completo + reto extra</summary>
          <div className="dd-body">
            <h3>HTML final</h3>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tarjeta de Perfil</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <article class="tarjeta">
    <img
      class="tarjeta__avatar"
      src="https://i.pravatar.cc/120"
      alt="Avatar de Ana García"
      width="120" height="120"
    />
    <h2 class="tarjeta__nombre">Ana García</h2>
    <p  class="tarjeta__rol">Desarrolladora Front-end</p>
    <p  class="tarjeta__bio">
      Apasionada del CSS, la accesibilidad y los
      interfaces que realmente funcionan.
    </p>
  </article>

</body>
</html>`}</code></pre>

            <h3>CSS final</h3>
            <pre><code>{`/* styles.css */

body {
  background-color: #f1f5f9;  /* fondo gris muy suave para la página */
  font-family: system-ui, sans-serif;
}

.tarjeta {
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  max-width: 320px;
  margin: 4rem auto;
}

.tarjeta__avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 1rem;
}

.tarjeta__nombre {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.25rem;
}

.tarjeta__rol {
  font-size: 0.875rem;
  color: #6366f1;
  font-weight: 600;
  margin: 0 0 1rem;
}

.tarjeta__bio {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}`}</code></pre>

            <div className="callout tip">
              ✅ <strong>Qué has practicado en este ejercicio:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li><strong>box-model:</strong> padding, border, margin</li>
                <li><strong>border-radius:</strong> esquinas redondeadas y círculos</li>
                <li><strong>object-fit: cover:</strong> imágenes que llenan su contenedor</li>
                <li><strong>Jerarquía tipográfica:</strong> 3 niveles de color y tamaño</li>
                <li><strong>max-width + margin auto:</strong> centrar un bloque</li>
                <li><strong>HTML semántico:</strong> article, img con alt, h2</li>
              </ul>
            </div>

            <h3>🔥 Reto extra — ponlo a prueba</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li>
                  <strong>Añade un borde de color al avatar:</strong>{" "}
                  <code>border: 3px solid #6366f1;</code> en <code>.tarjeta__avatar</code>.
                </li>
                <li>
                  <strong>Añade una sombra a la tarjeta:</strong>{" "}
                  <code>box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);</code>.
                </li>
                <li>
                  <strong>Añade dos botones</strong> (Seguir / Mensaje) debajo de la bio y
                  estílalos sin Flexbox: usa <code>display: inline-block</code>,{" "}
                  <code>padding</code> y <code>border-radius</code>.
                </li>
                <li>
                  <strong>Cambia el fondo de la tarjeta</strong> a un gradiente suave:{" "}
                  <code>background: linear-gradient(135deg, #fff, #f0f4ff);</code>.
                </li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      {/* Navegación */}
      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios" className="btn">← Volver a ejercicios</Link>
          <Link to="/ejercicios/e02-tipografia" className="btn btn-primary">
            Siguiente: E02 Tipografía →
          </Link>
        </div>
      </section>
    </main>
  );
}
