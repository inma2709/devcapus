import { useEffect } from "react";
import { Link } from "react-router-dom";
import { manualAsset } from "../utils/manualAsset";

const image = manualAsset("css.png");
const containersImage = manualAsset("imagenes-contenedores-html.png");
const imageStyle = { display: "block", background: "#e2e8f0" };
const pre = { background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" };

export default function V24_Imagenes_I() {
  useEffect(() => { document.title = "V24 · Imágenes I: tamaño, contenedor y proporción"; }, []);
  return <main className="doc" id="contenido">
    <header className="doc-hero"><p className="doc-kicker">V24 · Layout</p><h1>Imágenes I · Tamaño, contenedor y proporción</h1><p className="doc-lead">Una imagen es contenido, pero también una caja dentro del layout. Antes de decorarla, necesitamos controlar cuánto espacio ocupa y cómo se adapta a ese espacio.</p><div className="callout tip"><strong>Objetivo:</strong> que una imagen local o remota se adapte al espacio disponible sin deformarse.</div></header>

    <section className="card">
      <h2>Vídeo de apoyo: tamaño y proporción de imágenes</h2>
      <p>
        Míralo con una pregunta en mente: ¿necesito que la imagen se adapte a su
        contenedor, que llene una caja o que conserve toda su proporción visible?
      </p>
      <div className="media" style={{ maxWidth: 900 }}>
        <iframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/4YlVOyH0ENk"
          title="Vídeo de apoyo sobre tamaño y proporción de imágenes en CSS"
          frameBorder="0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>

    <section className="card"><h2>1. Problema: la imagen puede ser más grande que su contenedor</h2><p>Una fotografía conserva el tamaño de su archivo hasta que CSS indica otra cosa. Si entra en una columna o tarjeta estrecha, puede salirse de ella.</p><pre style={pre}><code>{"<img src=\"images/perro.jpg\" alt=\"Perro sentado en un parque\">"}</code></pre><p>La regla responsive básica evita ese desbordamiento:</p><pre style={pre}><code>{"img {\n  max-width: 100%;\n  height: auto;\n}"}</code></pre><p><code>max-width: 100%</code> significa: <strong>«no seas más ancha que el espacio disponible de tu contenedor»</strong>. Ese 100% no es el ancho de toda la pantalla; depende de dónde esté la imagen.</p><div className="table-wrap"><table className="table"><thead><tr><th>Declaración</th><th>Resultado</th></tr></thead><tbody><tr><td><code>max-width: 100%</code></td><td>La imagen deja de desbordar su contenedor.</td></tr><tr><td><code>height: auto</code></td><td>La altura se calcula para conservar la proporción original.</td></tr></tbody></table></div><div className="callout"><strong>Regla práctica:</strong> para una imagen de contenido, empieza por <code>max-width: 100%</code> y <code>height: auto</code>.</div></section>

    <section className="card">
      <h2>2. Antes de medir la imagen: ¿cuál es su contenedor?</h2>
      <p>Una imagen siempre está dentro de un elemento HTML. Ese elemento padre es su <strong>contenedor</strong>: aporta significado y condiciona el espacio disponible. No existe un único contenedor correcto.</p>
      <img src={containersImage} alt="Infografía sobre tamaño, proporción, recorte y contenedores HTML de una imagen" style={{ width: "100%", height: "auto", borderRadius: "0.75rem", border: "1px solid #dbeafe" }} />
      <div className="callout"><strong>El HTML decide qué significa el contenedor. CSS decide cómo se presenta.</strong></div>

      <h3>Una imagen puede estar directamente en una sección</h3>
      <pre style={pre}><code>{["<section>", "  <h2>Nuestros cursos</h2>", "  <img src=\"aula.jpg\" alt=\"Alumnos trabajando en un aula\" />", "</section>"].join("\n")}</code></pre>
      <p>Aquí forma parte del contenido de esa sección. Para que no supere el espacio disponible:</p>
      <pre style={pre}><code>{["section img {", "  max-width: 100%;", "  height: auto;", "}"].join("\n")}</code></pre>

      <div className="grid-2">
        <div>
          <h3><code>figure</code>: imagen con contenido relacionado</h3>
          <pre style={pre}><code>{["<figure>", "  <img src=\"perro.jpg\" alt=\"Perro corriendo por un parque\" />", "  <figcaption>Actividad al aire libre.</figcaption>", "</figure>"].join("\n")}</code></pre>
          <pre style={pre}><code>{["figure", "│", "├── img", "└── figcaption"].join("\n")}</code></pre>
          <p>Úsalo cuando la imagen forma una unidad de contenido, especialmente si necesita un pie: una foto, ilustración, gráfico, captura o diagrama.</p>
          <p><strong>Importante:</strong> <code>figure</code> no hace la imagen adaptable por sí solo; el tamaño sigue controlándose con CSS.</p>
          <pre style={pre}><code>{["figure img {", "  max-width: 100%;", "  height: auto;", "}"].join("\n")}</code></pre>
        </div>
        <div>
          <h3><code>div</code>: una caja visual genérica</h3>
          <pre style={pre}><code>{["<div class=\"tarjeta\">", "  <img src=\"css.jpg\" alt=\"Código CSS en una pantalla\" />", "  <h3>Curso de CSS</h3>", "  <p>Aprende a diseñar interfaces.</p>", "</div>"].join("\n")}</code></pre>
          <pre style={pre}><code>{["div.tarjeta", "│", "├── img", "├── h3", "└── p"].join("\n")}</code></pre>
          <p>Úsalo cuando solo necesitas agrupar visualmente elementos. Si la tarjeta es un contenido independiente, <code>article</code> puede expresar mejor su significado.</p>
          <pre style={pre}><code>{[".tarjeta { width: 320px; }", ".tarjeta img {", "  width: 100%;", "  height: auto;", "}"].join("\n")}</code></pre>
        </div>
      </div>

      <h3>Elegir el contenedor según el papel de la imagen</h3>
      <div className="table-wrap"><table className="table"><thead><tr><th>Contenedor</th><th>Cuándo usarlo</th></tr></thead><tbody><tr><td><code>figure</code></td><td>La imagen es una unidad de contenido, normalmente con explicación o <code>figcaption</code>.</td></tr><tr><td><code>div</code></td><td>Necesitas una caja visual genérica para organizar o diseñar.</td></tr><tr><td><code>section</code></td><td>Imagen y contenido pertenecen a una sección temática.</td></tr><tr><td><code>article</code></td><td>La imagen forma parte de contenido independiente, como una noticia o tarjeta de curso.</td></tr><tr><td><code>a</code></td><td>La imagen funciona como enlace.</td></tr></tbody></table></div>

      <h3>La imagen también puede ser el enlace</h3>
      <pre style={pre}><code>{["<a href=\"curso-css.html\">", "  <img src=\"css.jpg\" alt=\"Acceder al curso de CSS\" />", "</a>"].join("\n")}</code></pre>
      <pre style={pre}><code>{["a", "└── img", "", "a img {", "  max-width: 100%;", "  height: auto;", "}"].join("\n")}</code></pre>

      <details><summary>Microdecisión: ¿qué contenedor elegirías?</summary><ul><li>Fotografía de una noticia con pie explicativo: <code>figure</code>.</li><li>Tarjeta de curso con imagen, título, texto y botón: <code>article</code> o <code>div</code>, según su significado.</li><li>Imagen decorativa dentro de una sección: puede ir directamente en <code>section</code> o resolverse como fondo CSS si no aporta contenido.</li><li>Miniatura que lleva a otra página: <code>a</code> puede envolver a <code>img</code>.</li></ul></details>
    </section>

    <section className="card"><h2>3. ¿100% de qué?</h2><p>Primero mira la caja que contiene a la imagen. Si una tarjeta mide 300px, el 100% de su ancho son 300px:</p><pre style={pre}><code>{".tarjeta { width: 300px; }\n.tarjeta img { width: 100%; }"}</code></pre><pre style={pre}><code>{".tarjeta → 300px\n└── img → 100% de 300px → 300px"}</code></pre><p>Esta relación es la razón por la que las imágenes se adaptan al tamaño de una tarjeta, columna o cuadrícula.</p><div style={{ width: "min(300px, 100%)", padding: "1rem", border: "1px solid #cbd5e1", background: "#fff" }}><img src={image} alt="Ilustración local de CSS dentro de una tarjeta de ejemplo" style={{ ...imageStyle, width: "100%", height: "auto" }} /><h3>Tarjeta de 300px</h3><p style={{ marginBottom: 0 }}>La imagen ocupa exactamente el ancho de esta caja.</p></div></section>

    <section className="card"><h2>4. Decisión: <code>max-width</code> o <code>width</code></h2><p>Tenemos un contenedor de 500px y una imagen original de 200px. Las dos reglas resuelven problemas distintos:</p><div className="table-wrap"><table className="table"><thead><tr><th>Regla</th><th>Qué ordena</th><th>En este ejemplo</th></tr></thead><tbody><tr><td><code>max-width: 100%</code></td><td>No superes el ancho disponible.</td><td>La imagen puede seguir en 200px porque ya cabe.</td></tr><tr><td><code>width: 100%</code></td><td>Ocupa todo el ancho disponible.</td><td>La imagen pasa a 500px.</td></tr></tbody></table></div><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}><div><h3>Máximo disponible</h3><pre style={pre}><code>{"img { max-width: 100%; }"}</code></pre><img src={image} alt="Demostración de una imagen que no supera el contenedor" style={{ ...imageStyle, width: "180px", maxWidth: "100%", height: "auto" }} /><p>Una imagen pequeña no tiene por qué crecer.</p></div><div><h3>Todo el ancho</h3><pre style={pre}><code>{"img { width: 100%; }"}</code></pre><img src={image} alt="Demostración de una imagen que llena el contenedor" style={{ ...imageStyle, width: "100%", height: "auto" }} /><p>La imagen llena la caja aunque su archivo original fuese más pequeño.</p></div></div><div className="callout tip"><strong>Decisión:</strong> usa <code>max-width: 100%</code> para impedir desbordamientos; usa <code>width: 100%</code> cuando quieres que la imagen llene su tarjeta o columna.</div></section>

    <section className="card"><h2>5. Problema: fijo ancho y alto, y la fotografía se deforma</h2><p>Al escribir ancho y alto creamos una caja con dimensiones concretas. Si la fotografía tiene una proporción distinta, puede estirarse para encajar.</p><pre style={pre}><code>{".foto {\n  width: 300px;\n  height: 200px;\n}"}</code></pre><pre style={pre}><code>{"width + height → crean la caja\nobject-fit → decide cómo entra la fotografía en esa caja"}</code></pre><p><code>object-fit</code> aparece como respuesta al problema de una fotografía cuya proporción no coincide con la caja.</p></section>

    <section className="card"><h2>6. <code>object-fit</code>: llenar o mostrar todo</h2><pre style={pre}><code>{".foto {\n  width: 300px;\n  height: 200px;\n  object-fit: cover;\n}"}</code></pre><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1rem" }}><div><h3><code>cover</code></h3><img src={image} alt="Demostración de object-fit cover" style={{ ...imageStyle, width: "100%", height: "130px", objectFit: "cover" }} /><p>Llena toda la caja sin deformar, pero puede recortar lo que sobra.</p></div><div><h3><code>contain</code></h3><img src={image} alt="Demostración de object-fit contain" style={{ ...imageStyle, width: "100%", height: "130px", objectFit: "contain" }} /><p>Muestra toda la imagen sin deformar, pero puede dejar huecos en la caja.</p></div></div><div className="callout tip"><strong>Decisión:</strong> elige <code>cover</code> para una portada o avatar cuando la caja debe quedar llena; elige <code>contain</code> para un logotipo o imagen que no puede perder ninguna parte.</div></section>

    <section className="card"><h2>7. <code>cover</code> recorta: ¿qué zona quiero conservar?</h2><p>El recorte de <code>cover</code> resuelve que la caja quede llena, pero puede ocultar la parte importante. <code>object-position</code> decide qué zona priorizar.</p><pre style={pre}><code>{".portada { object-fit: cover; object-position: center; }\n.portada-arriba { object-position: top; }"}</code></pre><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem" }}>{[["center", "Centro"], ["top", "Arriba"], ["left", "Izquierda"]].map(([position, label]) => <div key={position}><strong>{label}</strong><img src={image} alt={"Demostración de object-position " + position} style={{ ...imageStyle, width: "100%", height: "115px", objectFit: "cover", objectPosition: position }} /></div>)}</div><p><strong>Regla práctica:</strong> si usas <code>cover</code>, revisa el recorte real y coloca con <code>object-position</code> la parte que no quieres perder.</p></section>

    <section className="card"><h2>8. Una proporción estable con <code>aspect-ratio</code></h2><p><code>aspect-ratio</code> expresa una relación entre ancho y alto. No es otro tamaño: ayuda a que una caja conserve una forma aunque cambie su ancho.</p><pre style={pre}><code>{".foto { width: 300px; aspect-ratio: 1; }"}</code></pre><p>Resultado: una caja de <strong>300 × 300px</strong>.</p><pre style={pre}><code>{".portada { width: 320px; aspect-ratio: 16 / 9; }"}</code></pre><p>Resultado aproximado: una caja de <strong>320 × 180px</strong>. Si la imagen debe llenarla sin deformarse, añadimos <code>object-fit: cover</code>.</p><img src={image} alt="Imagen en una caja cuadrada creada con aspect-ratio" style={{ ...imageStyle, width: "8rem", aspectRatio: 1, objectFit: "cover" }} /></section>

    <section className="card"><h2>9. <code>alt</code> describe; CSS presenta</h2><pre style={pre}><code>{"<img src=\"perro-guia.jpg\" alt=\"Perro guía caminando junto a una persona\">\n\n<!-- Solo si no aporta información -->\n<img src=\"decoracion.png\" alt=\"\">"}</code></pre><p>El texto alternativo pertenece al HTML: describe el contenido a quien no puede ver la imagen. CSS controla su tamaño, proporción y recorte, pero no sustituye una descripción útil.</p></section>

    <section className="card"><h2>Microprácticas: predice antes de probar</h2><ol><li><strong>Desbordamiento:</strong> una tarjeta mide 400px. Antes de probar, predice qué hará una imagen grande con <code>max-width: 100%</code>.</li><li><strong>Crecer o no:</strong> la imagen original mide 200px y su contenedor 400px. Predice el resultado con <code>width: 100%</code> y con <code>max-width: 100%</code>.</li><li><strong>Tarjeta:</strong> crea una tarjeta de 320px y haz que su imagen llene el ancho con <code>width: 100%</code>.</li><li><strong>Recorte:</strong> cambia <code>cover</code> por <code>contain</code> y decide cuál usarías en una portada y cuál en un logotipo.</li><li><strong>Proporción:</strong> crea una caja 16:9 con <code>aspect-ratio</code> y una fotografía que la llene sin deformarse.</li></ol><details className="dd"><summary>Una posible solución para la tarjeta</summary><div className="dd-body"><pre style={pre}><code>{".tarjeta { width: 320px; }\n.tarjeta img {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n}"}</code></pre></div></details></section>

    <details className="card layer advanced"><summary><span className="layer-badge">Avanzado</span> Cargar el archivo adecuado con <code>srcset</code> y <code>sizes</code></summary><div className="dd-body"><p>Estas propiedades HTML ayudan al navegador a elegir la versión del archivo más adecuada para el espacio que la imagen ocupará. No cambian el layout: primero domina el tamaño en CSS.</p><pre style={pre}><code>{"<img src=\"paisaje-800.jpg\"\n  srcset=\"paisaje-400.jpg 400w, paisaje-800.jpg 800w\"\n  sizes=\"(max-width: 600px) 100vw, 800px\"\n  alt=\"Paisaje\">"}</code></pre></div></details>

    <section className="card"><h2>Acabamos de aprender · Imágenes I</h2><p>Antes de escribir CSS para una imagen, pregúntate: <strong>¿dónde está?, ¿cuánto debe ocupar?, ¿debe crecer?, ¿debe conservar toda su proporción y tiene que llenar una caja?</strong></p><h3>Mapa de decisiones</h3><pre style={pre}><code>{["IMAGEN EN CSS", "│", "├── ¿Dónde está?", "│   ├── figure → imagen como unidad de contenido", "│   ├── article / section → forma parte de un contenido", "│   ├── div → contenedor visual genérico", "│   └── a → la imagen funciona como enlace", "│", "├── ¿Cuánto espacio debe ocupar?", "│   ├── max-width: 100% → no supera el ancho disponible", "│   └── width: 100% → ocupa todo el ancho disponible", "│", "├── ¿Debe conservar su proporción?", "│   ├── height: auto", "│   └── aspect-ratio", "│", "└── ¿Cómo entra en una caja?", "    ├── object-fit: cover → llena y puede recortar", "    ├── object-fit: contain → muestra todo y puede dejar huecos", "    └── object-position → decide qué zona conservar"].join("\n")}</code></pre><h3>Tabla rápida de decisiones</h3><table><thead><tr><th>Quiero conseguir...</th><th>Me pregunto...</th><th>Herramienta</th></tr></thead><tbody><tr><td>Elegir el contenedor</td><td>¿Qué papel tiene la imagen?</td><td><code>figure</code>, <code>article</code>, <code>section</code>, <code>div</code> o <code>a</code></td></tr><tr><td>Evitar que desborde</td><td>¿Puede ser más ancha que su caja?</td><td><code>max-width: 100%</code></td></tr><tr><td>Llenar el ancho</td><td>¿Debe ocupar todo el contenedor?</td><td><code>width: 100%</code></td></tr><tr><td>Mantener la proporción</td><td>¿Debe conservar su relación ancho/alto?</td><td><code>height: auto</code></td></tr><tr><td>Crear una forma estable</td><td>¿Quiero una caja cuadrada o 16:9?</td><td><code>aspect-ratio</code></td></tr><tr><td>Llenar una caja</td><td>¿Acepto que se recorte?</td><td><code>object-fit: cover</code></td></tr><tr><td>Mostrar toda la imagen</td><td>¿No quiero perder ninguna parte?</td><td><code>object-fit: contain</code></td></tr><tr><td>Controlar el recorte</td><td>¿Qué zona debe quedar visible?</td><td><code>object-position</code></td></tr><tr><td>Describir la imagen</td><td>¿Aporta información?</td><td><code>alt</code></td></tr></tbody></table><h3>Dos ideas que debes recordar</h3><p><strong>1. <code>100%</code> depende del contenedor.</strong></p><pre style={pre}><code>{[".tarjeta → 320px", "└── img → width: 100% → 320px"].join("\n")}</code></pre><p><strong>2. <code>cover</code> y <code>contain</code> resuelven problemas distintos.</strong></p><pre style={pre}><code>{["cover", "→ llena la caja", "→ puede recortar", "", "contain", "→ muestra toda la imagen", "→ puede dejar espacio"].join("\n")}</code></pre><h3>Regla práctica</h3><pre style={pre}><code>{["img {", "  max-width: 100%;", "  height: auto;", "}"].join("\n")}</code></pre><p>Es una buena base para imágenes de contenido. Si necesitas una caja concreta, añade:</p><pre style={pre}><code>{[".foto {", "  width: 100%;", "  aspect-ratio: 16 / 9;", "  object-fit: cover;", "}"].join("\n")}</code></pre><div className="callout"><strong>Primero decide el papel de la imagen y el espacio que debe ocupar. Después elige la propiedad CSS.</strong><br />No empieces por <code>cover</code>, <code>width</code> o <code>aspect-ratio</code> porque se suelen usar: empieza por el problema que necesitas resolver.</div><Link className="btn btn-primary" to="/css-imagenes-2">Continuar con recorte, marcos y efectos →</Link></section>
  </main>;
}
