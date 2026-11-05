import { useEffect } from "react";
import { Link } from "react-router-dom";
import { manualAsset } from "../utils/manualAsset";
const pre={background:"#f8fafc",color:"#0f172a",padding:"1rem",borderRadius:".5rem",overflowX:"auto"};
const cell=(background)=>({padding:".75rem",background,color:"#0f172a",borderRadius:".3rem",minHeight:"3rem"});
const gridAreasGuideImage=manualAsset("grid-iv-areas-guia.png");
export default function V23_Grid_Areas_Ampliado(){useEffect(()=>{document.title="Grid IV · Areas: planos con nombres";},[]);return <main className="doc" id="contenido"><header className="doc-hero"><p className="doc-kicker">Grid IV · Layout</p><h1>Grid IV · Grid Areas: diseña un plano con nombres</h1><p className="doc-lead">Grid I construye la rejilla; Grid II la adapta; Grid III coloca piezas con líneas y <code>span</code>. Ahora Grid Areas resuelve otra necesidad: explicar con nombres qué zona ocupa cada parte de una página y reorganizar el plano sin modificar el HTML.</p><div className="callout tip"><strong>Idea central:</strong> lee <code>grid-template-areas</code> como si fuera un pequeño plano de la página.</div></header>
<section className="card"><h2>Guía visual: áreas y layouts responsive</h2><p>Consulta esta infografía para seguir el proceso completo: dibujar las zonas en el padre, asignar cada hijo por nombre y redibujar el plano para móvil sin cambiar el HTML.</p><figure className="media"><img src={gridAreasGuideImage} alt="Infografía de Grid Areas sobre planos con nombres, grid-template-areas, grid-area, layouts responsive, huecos y buenas prácticas." loading="lazy" decoding="async" /><figcaption>Grid Areas convierte el layout en un plano legible: cabecera, navegación, contenido, apartado y pie.</figcaption></figure></section>
<section className="card"><h2>Antes de usar Areas: decide qué problema tienes</h2><div className="table-wrap"><table className="table"><thead><tr><th>Pregunta</th><th>Herramienta</th></tr></thead><tbody><tr><td>¿Quiero destacar una tarjeta, un banner o una pieza puntual?</td><td>Grid III: líneas, <code>grid-column</code>, <code>grid-row</code> y <code>span</code>.</td></tr><tr><td>¿Estoy diseñando zonas reconocibles de una página —cabecera, menú, contenido y pie—?</td><td>Grid Areas: <code>grid-template-areas</code> y <code>grid-area</code>.</td></tr></tbody></table></div><div className="callout">Grid Areas no sustituye a Grid III: sustituye números por nombres cuando el layout completo necesita ser fácil de leer.</div></section>
<section className="card"><h2>1. Por qué los nombres son más claros que las coordenadas</h2><p>Para una tarjeta puntual, <code>grid-column: 1 / 3</code> funciona bien. Para una página con cabecera, menú, contenido y pie, los números dejan de explicar la intención.</p><pre style={pre}><code>{`/* Coordenadas: correctas, pero difíciles de leer en una página grande */
.cabecera { grid-column: 1 / 4; grid-row: 1 / 2; }

/* Área nombrada: el plano expresa la intención */
.cabecera { grid-area: cabecera; }`}</code></pre><div className="callout">Usa áreas cuando el layout tiene <strong>zonas reconocibles</strong>. Para galerías automáticas y tarjetas normales, sigue usando el Grid de los dos temas anteriores.</div></section>
<section className="card"><h2>2. Paso uno: dibujar el plano</h2><pre style={pre}><code>{`.pagina {
  display: grid;
  grid-template-columns: 220px 1fr 180px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "cabecera cabecera cabecera"
    "menu     contenido aparte"
    "pie      pie      pie";
  gap: 1rem;
}`}</code></pre><p>Cada línea entre comillas representa una fila. Cada palabra representa una columna. Repetir un nombre hace que el área ocupe varias celdas contiguas.</p><div style={{display:"grid",gridTemplateColumns:"110px 1fr 90px",gridTemplateAreas:'"h h h" "m c a" "f f f"',gap:".4rem",padding:".5rem",background:"#f8fafc",borderRadius:".5rem"}}><div style={{...cell("#bfdbfe"),gridArea:"h"}}>cabecera</div><div style={{...cell("#ddd6fe"),gridArea:"m"}}>menu</div><div style={{...cell("#dcfce7"),gridArea:"c"}}>contenido</div><div style={{...cell("#fde68a"),gridArea:"a"}}>aparte</div><div style={{...cell("#fecdd3"),gridArea:"f"}}>pie</div></div></section>
<section className="card"><h2>3. Paso dos: asignar los elementos</h2><pre style={pre}><code>{`<div class="pagina">
  <header class="cabecera">DevCampus</header>
  <nav class="menu">Cursos</nav>
  <main class="contenido">Contenido principal</main>
  <aside class="aparte">Recursos</aside>
  <footer class="pie">Contacto</footer>
</div>

.cabecera { grid-area: cabecera; }
.menu { grid-area: menu; }
.contenido { grid-area: contenido; }
.aparte { grid-area: aparte; }
.pie { grid-area: pie; }`}</code></pre><p>Los elementos deben ser hijos directos de <code>.pagina</code>. Los nombres de <code>grid-area</code> deben coincidir exactamente con los escritos en el plano.</p><div className="callout tip"><strong>Regla de accesibilidad:</strong> escribe el HTML en orden lógico —cabecera, navegación, contenido, pie—. Grid cambia la presentación, pero el orden de lectura y teclado procede del DOM.</div></section>
<section className="card"><h2>4. Reglas para que un plano sea válido</h2><div className="table-wrap"><table className="table"><thead><tr><th>Regla</th><th>Correcto</th><th>Error común</th></tr></thead><tbody><tr><td>Mismo número de celdas por fila</td><td><code>"a a"</code> y <code>"b c"</code></td><td>Una fila con más nombres que columnas.</td></tr><tr><td>Áreas rectangulares</td><td>Un bloque continuo de <code>contenido</code></td><td>Un área con forma de L.</td></tr><tr><td>Nombres idénticos</td><td><code>grid-area: menu</code></td><td><code>grid-area: menú</code> cuando el plano usa <code>menu</code>.</td></tr><tr><td>Hueco deliberado</td><td><code>.</code></td><td>Dejar un nombre sin elemento sin saber por qué.</td></tr></tbody></table></div><pre style={pre}><code>{`/* Hueco intencionado a la derecha */
grid-template-areas:
  "cabecera cabecera"
  "menu     contenido"
  ".        contenido"
  "pie      pie";`}</code></pre><p>El punto no es una clase ni un elemento: representa una celda vacía. Úsalo solo cuando el hueco contribuya al diseño.</p></section>
<section className="card"><h2>5. Responsive: redibujar sin tocar contenido</h2><p>En escritorio el menú y los recursos pueden estar a los lados. En móvil, una sola columna suele ser más legible. Cambiamos las columnas y el plano, no el HTML.</p><pre style={pre}><code>{`@media (max-width: 800px) {
  .pagina {
    grid-template-columns: 1fr;
    grid-template-areas:
      "cabecera"
      "menu"
      "contenido"
      "aparte"
      "pie";
  }
}`}</code></pre><div style={{display:"grid",gridTemplateColumns:"1fr",gap:".4rem",padding:".5rem",background:"#f8fafc",borderRadius:".5rem"}}>{[["cabecera","#bfdbfe"],["menu","#ddd6fe"],["contenido","#dcfce7"],["aparte","#fde68a"],["pie","#fecdd3"]].map(([name,color])=><div key={name} style={cell(color)}>{name}</div>)}</div><div className="callout">La ventaja no es solo ahorrar CSS: cualquier persona puede leer el plano de escritorio y el plano de móvil de un vistazo.</div></section>
<section className="card"><h2>6. Grid Areas y los demás controles de Grid</h2><p>Las áreas deciden <strong>dónde</strong> van las grandes zonas. Las propiedades del contenedor y de los ítems siguen siendo útiles para definir <strong>cómo</strong> se comportan.</p><pre style={pre}><code>{`.pagina {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas: "menu contenido";
  gap: 1rem;
  align-items: start; /* contenido de cada celda arriba */
}
.contenido { min-width: 0; } /* protege textos o tablas largas */`}</code></pre><p>No necesitas aprender todos los atajos de Grid a la vez. Para una página inicial, áreas + columnas + <code>gap</code> resuelven la mayor parte del problema.</p></section>
<section className="card"><h2>7. Depurar Grid Areas</h2><ol><li>Confirma <code>display: grid</code> en el padre.</li><li>Comprueba el mismo número de palabras en cada fila.</li><li>Revisa que cada área forme un rectángulo.</li><li>Comprueba los nombres de <code>grid-area</code>.</li><li>Activa el overlay de Grid en DevTools para ver las líneas y celdas.</li></ol><pre style={pre}><code>{`.pagina { outline: 2px dashed #f97316; }
.pagina > * { outline: 2px solid #64748b; }`}</code></pre></section>
<section className="card"><h2>Microprácticas y reto final</h2><ol><li>Dibuja un plano de dos columnas para <code>header</code>, <code>nav</code>, <code>main</code> y <code>footer</code>.</li><li>Asigna cada elemento con <code>grid-area</code>.</li><li>Añade un <code>aside</code> y conviértelo en tercera columna.</li><li>Redibuja el plano para móvil usando una sola columna.</li><li>Introduce un punto <code>.</code> como hueco y explica si mejora el diseño.</li></ol><details className="dd"><summary>Solución de inicio</summary><div className="dd-body"><pre style={pre}><code>{`.landing {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "nav    main"
    "footer footer";
  gap: 1rem;
}`}</code></pre></div></details><div className="callout tip"><strong>Siguiente paso:</strong> ya sabes construir el layout general con Grid. Ahora aprenderás Position para necesidades puntuales de referencia y superposición, no para sustituir este layout.</div><div className="doc-next"><Link className="btn btn-primary" to="/css-position">Continuar con Position y z-index →</Link></div></section></main>}
