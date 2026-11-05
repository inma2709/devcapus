import { useEffect } from "react";
const pre={background:"#f8fafc",color:"#0f172a",padding:"1rem",borderRadius:".5rem",overflowX:"auto"};
export default function V23_Grid_Areas(){useEffect(()=>{document.title="V23 · Grid Areas: planos legibles";},[]);return <main className="doc" id="contenido"><header className="doc-hero"><p className="doc-kicker">V23 · Layout</p><h1>Grid Areas · Diseñar un plano con nombres</h1><p className="doc-lead">Cuando una página tiene zonas claras —cabecera, navegación, contenido y pie— los números de línea dejan de explicar la intención. Grid Areas permite dibujar ese plano con palabras.</p><div className="callout tip"><strong>Idea clave:</strong> un área no es contenido nuevo; es el nombre que damos a una zona rectangular de la rejilla.</div></header><section className="card"><h2>1. Del plano a las piezas</h2><pre style={pre}><code>{`.pagina {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas:
    "cabecera cabecera"
    "menu     contenido"
    "pie      pie";
  gap: 1rem;
}
.cabecera { grid-area: cabecera; }
.menu { grid-area: menu; }
.contenido { grid-area: contenido; }
.pie { grid-area: pie; }`}</code></pre><p>Cada fila entre comillas tiene el mismo número de nombres que columnas. Repetir <code>cabecera</code> hace que ocupe ambas columnas. Los nombres deben coincidir exactamente con <code>grid-area</code>.</p><div style={{display:"grid",gridTemplateColumns:"120px 1fr",gridTemplateAreas:'"h h" "m c" "f f"',gap:".4rem",padding:".5rem",background:"#f8fafc"}}><div style={{gridArea:"h",padding:".6rem",background:"#bfdbfe",color:"#0f172a"}}>cabecera</div><div style={{gridArea:"m",padding:".6rem",background:"#ddd6fe",color:"#0f172a"}}>menu</div><div style={{gridArea:"c",padding:".6rem",background:"#dcfce7",color:"#0f172a"}}>contenido</div><div style={{gridArea:"f",padding:".6rem",background:"#fde68a",color:"#0f172a"}}>pie</div></div></section><section className="card"><h2>2. Por qué son importantes</h2><ul><li>El CSS explica la estructura de la página como un plano, no como coordenadas crípticas.</li><li>Es más fácil reorganizar zonas en responsive sin tocar el HTML.</li><li>El DOM puede conservar un orden semántico lógico para teclado y lectores de pantalla.</li></ul><div className="callout warn">Cada nombre debe formar un rectángulo continuo. Un área en forma de L no es válida. Usa <code>.</code> solo para un hueco intencionado.</div></section><section className="card"><h2>3. Cambiar el plano en móvil</h2><pre style={pre}><code>{`@media (max-width: 700px) {
  .pagina {
    grid-template-columns: 1fr;
    grid-template-areas:
      "cabecera"
      "menu"
      "contenido"
      "pie";
  }
}`}</code></pre><p>El HTML no cambia: Grid solo redefine dónde se dibuja cada zona. Mantén el HTML en un orden que siga teniendo sentido sin CSS.</p></section><section className="card"><h2>4. Errores que puedes comprobar</h2><ol><li>¿El padre tiene <code>display: grid</code>?</li><li>¿Cada fila de áreas tiene el mismo número de palabras?</li><li>¿Los nombres y <code>grid-area</code> coinciden?</li><li>¿Cada área es rectangular?</li><li>¿El elemento es hijo directo del grid?</li></ol><pre style={pre}><code>{`.pagina { outline: 2px dashed #f97316; }
.pagina > * { outline: 2px solid #64748b; }`}</code></pre></section><section className="card"><h2>Reto guiado</h2><p>Crea una landing de academia con <code>header</code>, <code>nav</code>, <code>main</code>, <code>aside</code> y <code>footer</code>. En escritorio usa dos o tres columnas; en móvil dibuja una sola columna. Después explica qué cambia: el plano CSS, no el contenido HTML.</p><details className="dd"><summary>Plano inicial</summary><div className="dd-body"><pre style={pre}><code>{`grid-template-areas:
  "header header"
  "nav    main"
  "aside  main"
  "footer footer";`}</code></pre></div></details></section></main>}
