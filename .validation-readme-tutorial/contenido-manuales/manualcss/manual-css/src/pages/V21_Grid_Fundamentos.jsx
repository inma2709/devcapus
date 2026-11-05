import { useEffect } from "react";
import { Link } from "react-router-dom";
const pre={background:"#f8fafc",color:"#0f172a",padding:"1rem",borderRadius:".5rem",overflowX:"auto"};
export default function V21_Grid_Fundamentos(){useEffect(()=>{document.title="V21 · Grid I: una cuadrícula";},[]);return <main className="doc" id="contenido"><header className="doc-hero"><p className="doc-kicker">V21 · Layout</p><h1>Grid I · Una cuadrícula para filas y columnas</h1><p className="doc-lead">Flexbox organiza principalmente una fila o una columna. Grid es útil cuando necesitamos pensar a la vez en columnas y filas: una galería, un panel o una página con zonas.</p><div className="callout tip"><strong>Idea clave:</strong> Grid es bidimensional. Primero dibujamos la rejilla; después el navegador coloca sus hijos directos.</div></header><section className="card"><h2>1. Activar una cuadrícula</h2><pre style={pre}><code>{`<section class="galeria">
  <article>1</article><article>2</article><article>3</article>
</section>

.galeria {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}`}</code></pre><p>El padre es el <strong>grid container</strong>. Sus hijos directos son <strong>grid items</strong>. <code>grid-template-columns</code> define las columnas y <code>gap</code> separa las celdas.</p><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:".6rem",padding:".75rem",background:"#eff6ff",borderRadius:".6rem"}}>{[1,2,3,4,5,6].map(n=><div key={n} style={{padding:".85rem",background:"white",color:"#0f172a",borderRadius:".3rem",textAlign:"center"}}>{n}</div>)}</div></section><section className="card"><h2>2. Filas, columnas y celdas</h2><div className="table-wrap"><table className="table"><thead><tr><th>Nombre</th><th>Imagen mental</th></tr></thead><tbody><tr><td>Columna</td><td>Una franja vertical.</td></tr><tr><td>Fila</td><td>Una franja horizontal.</td></tr><tr><td>Celda</td><td>El cruce de una fila y una columna.</td></tr><tr><td>Track</td><td>Cualquier fila o columna definida.</td></tr></tbody></table></div><pre style={pre}><code>{`.panel {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  gap: 1rem;
}`}</code></pre><p>La primera columna ocupa una parte del espacio disponible y la segunda ocupa dos. La primera fila se adapta al contenido; la segunda usa el resto disponible.</p></section><section className="card"><h2>3. <code>repeat()</code>: escribe patrones sin repetir</h2><pre style={pre}><code>{`/* Equivalen a tres columnas iguales */
.grid { grid-template-columns: 1fr 1fr 1fr; }
.grid { grid-template-columns: repeat(3, 1fr); }`}</code></pre><div className="callout">Empieza por <code>display: grid</code>, columnas y <code>gap</code>. No necesitas colocar cada ítem a mano para crear una galería sencilla: Grid los distribuye automáticamente.</div></section><section className="card"><h2>¿Grid o Flexbox?</h2><p>Usa Flexbox para una fila o columna de controles. Usa Grid cuando el resultado depende de filas <strong>y</strong> columnas, o cuando varias piezas deben alinearse como una cuadrícula.</p><pre style={pre}><code>{`/* Fila de enlaces */
.menu { display: flex; gap: 1rem; }

/* Galería de tarjetas */
.galeria { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }`}</code></pre></section><section className="card"><h2>Micropráctica</h2><ol><li>Crea seis tarjetas dentro de un contenedor.</li><li>Activa <code>display: grid</code>.</li><li>Prueba <code>repeat(2, 1fr)</code> y después <code>repeat(3, 1fr)</code>.</li><li>Añade <code>gap: 1rem</code> y observa que el espacio lo controla el padre.</li></ol><Link className="btn btn-primary" to="/css-grid-2">Continuar con fracciones y adaptación →</Link></section></main>}
