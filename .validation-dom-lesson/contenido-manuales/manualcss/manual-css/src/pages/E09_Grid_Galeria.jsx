import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E09 · Grid básico: galería responsive
// Objetivo: entender CSS Grid con repeat(), auto-fill,
// auto-fit y minmax() para crear una galería que se
// adapta a cualquier ancho sin media queries.
// =====================================================

const fotos = [
  { emoji: "🏔️", alt: "Montaña nevada", color: "#dbeafe" },
  { emoji: "🌊", alt: "Olas del mar", color: "#e0f2fe" },
  { emoji: "🌲", alt: "Bosque verde", color: "#dcfce7" },
  { emoji: "🌅", alt: "Atardecer", color: "#fef9c3" },
  { emoji: "🏙️", alt: "Ciudad nocturna", color: "#f3e8ff" },
  { emoji: "🌸", alt: "Flores primaverales", color: "#fce7f3" },
  { emoji: "🦋", alt: "Mariposa", color: "#e0e7ff" },
  { emoji: "🌵", alt: "Desierto", color: "#fef3c7" },
  { emoji: "🐋", alt: "Ballena en el océano", color: "#cffafe" },
];

export default function E09_Grid_Galeria() {
  useEffect(() => {
    document.title = "E09 · Grid: galería responsive — Ejercicios CSS";
  }, []);

  const [columnas, setColumnas] = useState("auto-fill");
  const [minTarjeta, setMinTarjeta] = useState(180);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E09 · Nivel intermedio · CSS Grid</p>
        <h1>Grid básico: galería responsive</h1>
        <p className="doc-lead">
          CSS Grid es el sistema de layout más potente de CSS. Con <strong>tres
          palabras</strong> — <code>repeat(auto-fill, minmax(...))</code> — creas
          una galería completamente responsive sin una sola media query.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> <code>display: grid</code>,{" "}
          <code>grid-template-columns</code>, <code>repeat()</code>,{" "}
          <code>auto-fill</code> vs <code>auto-fit</code>, <code>minmax()</code> y{" "}
          <code>gap</code> en Grid.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · display: grid — activar el modo</a></li>
            <li><a href="#paso-2">Paso 2 · grid-template-columns — definir columnas</a></li>
            <li><a href="#paso-3">Paso 3 · repeat() — no repetir código</a></li>
            <li><a href="#paso-4">Paso 4 · minmax() — tamaño mínimo y máximo</a></li>
            <li><a href="#paso-5">Paso 5 · auto-fill vs auto-fit</a></li>
            <li><a href="#paso-6">Paso 6 · Demo interactiva (solo para explorar)</a></li>
            <li><a href="#paso-7">Paso 7 · Tu código HTML+CSS: cópialo y practica</a></li>
            <li><a href="#paso-8">Paso 8 · Reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · display: grid — activar el modo</summary>
          <div className="dd-body">
            <p>
              Como Flexbox, Grid se activa en el <strong>padre</strong> y todos los
              hijos directos pasan a ser <em>grid items</em>.
            </p>

            <pre><code>{`/* HTML */
<div class="galeria">
  <img src="foto1.jpg" alt="..." />
  <img src="foto2.jpg" alt="..." />
  <!-- ... -->
</div>

/* CSS */
.galeria {
  display: grid;
  /* Sin definir columnas, Grid pone todo en UNA sola columna */
}`}</code></pre>

            <h3>Grid vs Flexbox: ¿cuándo usar cada uno?</h3>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead><tr><th>Situación</th><th>Usar</th></tr></thead>
                <tbody>
                  <tr><td>Layout de página completa (header, sidebar, main)</td><td><strong>Grid</strong></td></tr>
                  <tr><td>Galería de ítems en múltiples filas y columnas</td><td><strong>Grid</strong></td></tr>
                  <tr><td>Barra de navegación (elementos en fila)</td><td><strong>Flexbox</strong></td></tr>
                  <tr><td>Centrar un elemento</td><td><strong>Flexbox</strong></td></tr>
                  <tr><td>Alinear texto e iconos</td><td><strong>Flexbox</strong></td></tr>
                  <tr><td>Necesitas controlar filas Y columnas a la vez</td><td><strong>Grid</strong></td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              La regla de oro: <strong>Flexbox es unidimensional</strong> (una fila O una
              columna). <strong>Grid es bidimensional</strong> (filas Y columnas al mismo
              tiempo). Ambos coexisten perfectamente — Grid para el layout externo,
              Flexbox para el contenido interno de los ítems.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · grid-template-columns — definir columnas</summary>
          <div className="dd-body">
            <p>
              <code>grid-template-columns</code> define el <strong>número y tamaño</strong>{" "}
              de las columnas. Cada valor es el ancho de una columna:
            </p>

            <pre><code>{`.galeria {
  display: grid;
  grid-template-columns: 200px 200px 200px;  /* 3 columnas fijas de 200px */
  grid-template-columns: 1fr 1fr 1fr;        /* 3 columnas iguales (fr = fracción) */
  grid-template-columns: 1fr 2fr 1fr;        /* la del medio es el doble */
  grid-template-columns: 250px 1fr;          /* 1 fija + 1 que ocupa el resto */
}`}</code></pre>

            {/* Demo visual de columnas */}
            {[
              { cols: "1fr", label: "1fr — una sola columna" },
              { cols: "1fr 1fr", label: "1fr 1fr — dos iguales" },
              { cols: "1fr 1fr 1fr", label: "1fr 1fr 1fr — tres iguales" },
              { cols: "1fr 2fr 1fr", label: "1fr 2fr 1fr — la central doble" },
            ].map(({ cols, label }) => (
              <div key={cols} style={{ marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
                  grid-template-columns: <strong>{cols}</strong>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: cols, gap: "0.4rem" }}>
                  {Array.from({ length: 4 }, (_, i) => (
                    <div key={i} style={{ background: i % 2 === 0 ? "#6366f1" : "#8b5cf6", color: "white", padding: "0.5rem", borderRadius: "6px", fontSize: "0.8rem", textAlign: "center", fontWeight: 700 }}>
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: "0.2rem" }}><em>{label}</em></div>
              </div>
            ))}
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · repeat() — sin repetir código</summary>
          <div className="dd-body">
            <p>
              En lugar de escribir <code>1fr 1fr 1fr 1fr</code>, usa{" "}
              <code>repeat()</code>:
            </p>

            <pre><code>{`/* Sin repeat (verboso) */
grid-template-columns: 1fr 1fr 1fr 1fr;

/* Con repeat (limpio) */
grid-template-columns: repeat(4, 1fr);
/* repeat(número de veces, tamaño de cada una) */

/* Más ejemplos */
grid-template-columns: repeat(3, 200px);   /* 3 columnas de 200px */
grid-template-columns: repeat(2, 1fr 2fr); /* Patrón repetido: 1fr 2fr 1fr 2fr */`}</code></pre>

            <div className="callout">
              <code>repeat()</code> no solo acepta un número fijo — también acepta{" "}
              <code>auto-fill</code> y <code>auto-fit</code> para crear columnas
              automáticamente según el espacio disponible. Eso lo vemos en el Paso 5.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · minmax() — tamaño mínimo y máximo</summary>
          <div className="dd-body">
            <p>
              <code>minmax(min, max)</code> define un rango de tamaño para una pista
              (columna o fila). La columna <strong>nunca será menor que min</strong> y{" "}
              <strong>nunca mayor que max</strong>.
            </p>

            <pre><code>{`grid-template-columns: minmax(200px, 1fr);
/* La columna tiene mínimo 200px y máximo el espacio sobrante (1fr) */

/* Combinaciones habituales */
minmax(200px, 320px)   /* Mínimo 200px, máximo 320px */
minmax(200px, 1fr)     /* Mínimo 200px, máximo "todo lo que queda" */
minmax(0, 1fr)         /* Mínimo 0, máximo 1 fracción (para columnas colapsables) */
minmax(min-content, max-content) /* Se ajusta al contenido */`}</code></pre>

            <div className="callout tip">
              La combinación mágica para galerías responsivas:{" "}
              <strong><code>minmax(200px, 1fr)</code></strong>. La columna crece hasta
              llenar el espacio disponible, pero nunca se encoge por debajo de 200px
              — cuando no cabe, salta a la siguiente fila.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · auto-fill vs auto-fit</summary>
          <div className="dd-body">
            <p>
              Combinado con <code>repeat()</code>, en lugar de un número fijo de columnas
              le decimos a Grid que <strong>cree automáticamente todas las columnas que
              quepan</strong>:
            </p>

            <pre><code>{`/* auto-fill: crea columnas vacías para mantener el tamaño mínimo */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* auto-fit: estira los ítems para llenar el espacio (no crea vacíos) */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`}</code></pre>

            <h3>¿Cuál es la diferencia?</h3>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead><tr><th>Valor</th><th>Con pocos ítems</th><th>Ideal para</th></tr></thead>
                <tbody>
                  <tr>
                    <td><code>auto-fill</code></td>
                    <td>Los ítems mantienen su ancho mínimo; el hueco queda vacío</td>
                    <td>Galerías donde el tamaño importa más que llenar el ancho</td>
                  </tr>
                  <tr>
                    <td><code>auto-fit</code></td>
                    <td>Los ítems se estiran para llenar toda la fila</td>
                    <td>Layouts donde quieres que los ítems siempre ocupen todo el ancho</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              Para la mayoría de galerías usa <strong><code>auto-fill</code></strong>: mantiene
              los tamaños consistentes independientemente del número de ítems.{" "}
              Usa <code>auto-fit</code> cuando quieras que 1 o 2 tarjetas llenen toda la fila.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 — DEMO INTERACTIVA ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Demo interactiva — experimenta sin escribir código</summary>
          <div className="dd-body">
            <div className="callout warn">
              🔬 <strong>Esta demo es solo para explorar el concepto.</strong> Usa React
              internamente para cambiar los valores en tiempo real — tú{" "}
              <strong>no tienes que replicar esta parte</strong>. Tu ejercicio real está
              en el <a href="#paso-7">Paso 7</a>: código HTML+CSS puro que puedes
              copiar y editar en cualquier editor.
            </div>
            <p>Cambia los parámetros y observa cómo responde el grid:</p>

            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginBottom: "1.25rem", padding: "1rem", background: "#f8fafc", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <div>
                <label htmlFor="ctrl-columnas" style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                  Modo de columnas
                </label>
                <select
                  id="ctrl-columnas"
                  value={columnas}
                  onChange={e => setColumnas(e.target.value)}
                  style={{ padding: "0.45rem 0.75rem", borderRadius: "6px", border: "1.5px solid #cbd5e1", fontFamily: "inherit", fontSize: "0.875rem" }}
                >
                  <option value="auto-fill">auto-fill</option>
                  <option value="auto-fit">auto-fit</option>
                </select>
              </div>
              <div>
                <label htmlFor="ctrl-min" style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                  Ancho mínimo de tarjeta: <strong>{minTarjeta}px</strong>
                </label>
                <input
                  id="ctrl-min"
                  type="range"
                  min="100"
                  max="300"
                  step="10"
                  value={minTarjeta}
                  onChange={e => setMinTarjeta(Number(e.target.value))}
                  style={{ width: "200px" }}
                />
              </div>
            </div>

            <div style={{ fontSize: "0.75rem", fontFamily: "monospace", background: "#1e293b", color: "#a5f3fc", padding: "0.75rem 1rem", borderRadius: "8px", marginBottom: "1rem" }}>
              grid-template-columns: repeat(<strong style={{ color: "#fde68a" }}>{columnas}</strong>, minmax(<strong style={{ color: "#fde68a" }}>{minTarjeta}px</strong>, 1fr))
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columnas}, minmax(${minTarjeta}px, 1fr))`,
              gap: "0.75rem",
              border: "2px dashed var(--border-medium)",
              borderRadius: "12px",
              padding: "1rem",
              background: "#f8fafc",
            }}>
              {fotos.map((f, i) => (
                <div key={i} style={{ background: f.color, borderRadius: "10px", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem", minHeight: "100px", border: "1px solid rgba(0,0,0,.06)" }}>
                  <span style={{ fontSize: "2rem" }}>{f.emoji}</span>
                  <span style={{ fontSize: "0.72rem", color: "#475569", fontWeight: 600, textAlign: "center" }}>{f.alt}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginTop: "0.5rem" }}>
              Redimensiona la ventana mientras cambias los valores para ver el comportamiento responsive.
            </p>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 — CÓDIGO COPIABLE ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Tu código HTML+CSS — cópialo y practica</summary>
          <div className="dd-body">
            <p>
              Esto es lo que <strong>tú realmente vas a construir</strong>: un archivo
              HTML y su CSS. Cópialo en tu editor, ábrelo en el navegador y empieza
              a experimentar cambiando los valores.
            </p>

            <h3>El HTML</h3>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Galería con CSS Grid</title>
  <link rel="stylesheet" href="estilos.css" />
</head>
<body>

  <section class="galeria">

    <figure class="galeria__foto">
      <img src="https://picsum.photos/seed/mountain/600/400" alt="Montaña nevada" />
      <figcaption class="galeria__caption">Montaña nevada</figcaption>
    </figure>

    <figure class="galeria__foto">
      <img src="https://picsum.photos/seed/ocean/600/400" alt="Océano" />
      <figcaption class="galeria__caption">Océano</figcaption>
    </figure>

    <figure class="galeria__foto">
      <img src="https://picsum.photos/seed/forest/600/400" alt="Bosque" />
      <figcaption class="galeria__caption">Bosque</figcaption>
    </figure>

    <figure class="galeria__foto">
      <img src="https://picsum.photos/seed/sunset/600/400" alt="Atardecer" />
      <figcaption class="galeria__caption">Atardecer</figcaption>
    </figure>

    <figure class="galeria__foto">
      <img src="https://picsum.photos/seed/city/600/400" alt="Ciudad" />
      <figcaption class="galeria__caption">Ciudad nocturna</figcaption>
    </figure>

    <figure class="galeria__foto">
      <img src="https://picsum.photos/seed/flower/600/400" alt="Flores" />
      <figcaption class="galeria__caption">Flores primaverales</figcaption>
    </figure>

    <figure class="galeria__foto">
      <img src="https://picsum.photos/seed/butterfly/600/400" alt="Mariposa" />
      <figcaption class="galeria__caption">Mariposa</figcaption>
    </figure>

    <figure class="galeria__foto">
      <img src="https://picsum.photos/seed/desert/600/400" alt="Desierto" />
      <figcaption class="galeria__caption">Desierto</figcaption>
    </figure>

    <figure class="galeria__foto">
      <img src="https://picsum.photos/seed/whale/600/400" alt="Ballena" />
      <figcaption class="galeria__caption">Ballena en el océano</figcaption>
    </figure>

  </section>

</body>
</html>`}</code></pre>

            <div className="callout tip">
              <strong>¿Qué es <code>{"<figure>"}</code> y <code>{"<figcaption>"}</code>?</strong>
              <ul style={{ marginBottom: 0 }}>
                <li><code>{"<figure>"}</code> es el contenedor semántico para contenido
                multimedia (imagen, ilustración, diagrama). Es como un <code>{"<div>"}</code>
                pero con significado: le dice al navegador "aquí hay una figura".</li>
                <li><code>{"<figcaption>"}</code> es el <strong>pie de foto</strong> — la
                descripción o leyenda que acompaña a la figura. En inglés
                <em>caption</em> significa exactamente eso: leyenda o pie de foto.</li>
                <li>Juntos forman el par semántico correcto para cualquier imagen con
                descripción. Los lectores de pantalla los anuncian como una unidad.</li>
              </ul>
            </div>

            <h3>El CSS (<code>estilos.css</code>)</h3>
            <pre><code>{`/* ── Reset mínimo ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #f1f5f9; }

/* ── La cuadrícula ── */
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ── Cada foto ── */
.galeria__foto {
  border-radius: 12px;
  overflow: hidden;          /* esconde lo que sobresalga del border-radius */
  aspect-ratio: 4 / 3;      /* siempre proporción 4:3, sin importar el ancho */
  position: relative;        /* necesario para el caption en posición absoluta */
  cursor: pointer;
}

.galeria__foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;         /* rellena sin deformar, recorta si es necesario */
  display: block;
  transition: transform 0.35s ease;
}

/* ── El caption (pie de foto) ── */
/* Está siempre en el DOM pero escondido bajo la foto */
.galeria__caption {
  position: absolute;        /* sale del flujo, se coloca encima de la imagen */
  bottom: 0;                 /* pegado al borde inferior */
  left: 0;
  right: 0;
  padding: 1.5rem 1rem 0.75rem;

  /* Degradado de negro transparente → negro opaco:
     el texto se lee bien sobre cualquier imagen */
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0.72)
  );

  color: white;
  font-size: 0.875rem;
  font-weight: 600;

  /* Empieza fuera de la foto (100% hacia abajo) */
  transform: translateY(100%);
  transition: transform 0.35s ease;
}

/* ── Efectos al pasar el ratón ── */
.galeria__foto:hover img {
  transform: scale(1.06);    /* zoom suave */
}

.galeria__foto:hover .galeria__caption {
  transform: translateY(0);  /* el caption sube y se hace visible */
}

/* ── Accesibilidad: foco con teclado ── */
.galeria__foto:focus-within .galeria__caption {
  transform: translateY(0);  /* mismo efecto al navegar con Tab */
}`}</code></pre>

            <h3>Vista previa del efecto caption</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", border: "2px dashed var(--border-medium)", borderRadius: "12px", padding: "1rem", background: "#f8fafc" }}>
              {fotos.slice(0, 3).map((f, i) => (
                <div
                  key={i}
                  style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "4/3", position: "relative", background: f.color, cursor: "pointer" }}
                  onMouseEnter={e => { e.currentTarget.querySelector(".cap").style.transform = "translateY(0)"; e.currentTarget.querySelector(".img").style.transform = "scale(1.06)"; }}
                  onMouseLeave={e => { e.currentTarget.querySelector(".cap").style.transform = "translateY(100%)"; e.currentTarget.querySelector(".img").style.transform = "scale(1)"; }}
                >
                  <div className="img" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", transition: "transform 0.35s ease" }}>
                    {f.emoji}
                  </div>
                  <div className="cap" style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem 0.75rem 0.6rem", background: "linear-gradient(transparent, rgba(0,0,0,.72))", color: "white", fontSize: "0.8rem", fontWeight: 600, transform: "translateY(100%)", transition: "transform 0.35s ease" }}>
                    {f.alt}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginTop: "0.5rem" }}>
              Pasa el ratón por encima — el caption sube desde abajo con CSS puro, sin JavaScript.
            </p>

            <div className="callout tip">
              ✅ <strong>Qué has practicado:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li><code>display: grid</code> en el contenedor</li>
                <li><code>grid-template-columns</code> con <code>repeat(auto-fill, minmax())</code></li>
                <li><code>aspect-ratio</code> para proporciones constantes</li>
                <li><code>object-fit: cover</code> para imágenes sin deformar</li>
                <li><code>position: relative/absolute</code> para el caption sobre la imagen</li>
                <li>Efecto hover con <code>transform: translateY()</code> y <code>transition</code></li>
                <li>Semántica correcta: <code>{"<figure>"}</code> + <code>{"<figcaption>"}</code></li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 8 — RETO ════════════ */}
      <section className="doc-section" id="paso-8">
        <details className="dd" open>
          <summary>Paso 8 · Reto extra</summary>
          <div className="dd-body">
            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Foto destacada:</strong> haz que la primera foto ocupe 2 columnas con <code>grid-column: span 2</code> y que en móvil vuelva a ocupar 1.</li>
                <li><strong>Galería tipo masonry:</strong> usa <code>grid-row: span 2</code> en algunas fotos para que ocupen el doble de alto.</li>
                <li><strong>Caption siempre visible en móvil:</strong> en pantallas pequeñas, el caption debería estar siempre visible (sin necesitar hover). Usa <code>@media (hover: none)</code> para detectar pantallas táctiles.</li>
                <li><strong>Cambia a <code>auto-fit</code>:</strong> sustituye <code>auto-fill</code> por <code>auto-fit</code> y observa qué pasa cuando hay pocas fotos — ¿cuándo preferirías uno u otro?</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e08-formulario" className="btn">← E08 Formulario</Link>
          <Link to="/ejercicios/e10-grid-layout" className="btn btn-primary">Siguiente: E10 Grid Layout →</Link>
        </div>
      </section>
    </main>
  );
}
