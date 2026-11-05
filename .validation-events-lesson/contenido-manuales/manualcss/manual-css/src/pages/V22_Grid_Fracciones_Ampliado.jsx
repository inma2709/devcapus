import { useEffect } from "react";
import { Link } from "react-router-dom";

const pre = { background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: ".5rem", overflowX: "auto" };
const item = { padding: "1rem", background: "#dbeafe", color: "#0f172a", borderRadius: ".35rem", textAlign: "center" };

export default function V22_Grid_Fracciones_Ampliado() {
  useEffect(() => { document.title = "V22 · Grid II: fracciones y adaptación"; }, []);
  return <main className="doc" id="contenido">
    <header className="doc-hero"><p className="doc-kicker">V22 · Layout</p><h1>Grid II · Fracciones y cuadrículas que se adaptan</h1><p className="doc-lead">Ya sabes crear una rejilla. Ahora aprenderás a darle proporciones, proteger el tamaño mínimo de las tarjetas y dejar que Grid elija cuántas columnas caben sin escribir una media query para cada caso.</p><div className="callout tip"><strong>Pregunta guía:</strong> ¿quiero repartir el espacio, fijar una zona, o permitir que las tarjetas se reorganicen solas?</div></header>

    <section className="card"><h2>1. <code>fr</code>: repartir lo que queda</h2><p>Una fracción no significa «un porcentaje de toda la pantalla». Grid primero descuenta los tamaños fijos y los <code>gap</code>; después reparte el espacio restante entre las fracciones.</p><pre style={pre}><code>{`.layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
}`}</code></pre><div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: ".5rem", padding: ".5rem", background: "#f8fafc", borderRadius: ".5rem" }}>{["1fr", "2fr", "1fr"].map((value, index) => <div key={index} style={item}>{value}</div>)}</div><p>Hay cuatro fracciones en total. La columna central recibe dos partes; cada lateral recibe una. Por eso la relación es 25% · 50% · 25% aproximadamente, después de descontar los huecos.</p></section>

    <section className="card"><h2>2. Tres maneras de definir columnas</h2><div className="table-wrap"><table className="table"><thead><tr><th>Necesidad</th><th>CSS</th><th>Resultado</th></tr></thead><tbody><tr><td>Columnas iguales</td><td><code>repeat(3, 1fr)</code></td><td>Tres partes iguales.</td></tr><tr><td>Una zona fija y otra flexible</td><td><code>220px 1fr</code></td><td>Sidebar fija, contenido adaptable.</td></tr><tr><td>Columna según contenido</td><td><code>auto 1fr auto</code></td><td>Laterales según su contenido y centro flexible.</td></tr></tbody></table></div><pre style={pre}><code>{`/* Página con navegación lateral */
.pagina {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 1rem;
}`}</code></pre><div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: ".5rem", padding: ".5rem", background: "#f8fafc" }}><div style={{ ...item, background: "#ddd6fe" }}>220px<br />sidebar</div><div style={{ ...item, background: "#dcfce7" }}>1fr<br />contenido</div></div></section>

    <section className="card"><h2>3. <code>repeat()</code>: expresa el patrón</h2><p><code>repeat()</code> evita repetir valores y hace visible la intención de la cuadrícula.</p><pre style={pre}><code>{`/* Estas dos líneas hacen lo mismo */
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-columns: repeat(4, 1fr);

/* También puede repetir un patrón */
grid-template-columns: repeat(3, 120px 1fr);`}</code></pre><div className="callout">Empieza siempre por la forma más legible. Para cuatro columnas iguales, <code>repeat(4, 1fr)</code> comunica mejor la idea que repetir cuatro veces <code>1fr</code>.</div></section>

    <section className="card"><h2>4. <code>minmax()</code>: un mínimo seguro y un máximo flexible</h2><p>Una tarjeta no debería hacerse tan estrecha que su contenido sea ilegible. <code>minmax()</code> define un intervalo: primero el mínimo que aceptamos y después cuánto puede crecer.</p><pre style={pre}><code>{`.tarjetas {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 1rem;
}`}</code></pre><p>Con <code>minmax(220px, 1fr)</code>, cada columna no baja de 220px y puede crecer hasta recibir una fracción del espacio. Si tres columnas de 220px no caben, todavía necesitamos decidir qué hacer: ahí entra <code>auto-fit</code>.</p></section>

    <section className="card"><h2>5. Tarjetas que se adaptan con <code>auto-fit</code></h2><pre style={pre}><code>{`.tarjetas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}`}</code></pre><p>Grid calcula cuántas columnas de al menos 220px caben. Si el contenedor se estrecha, pasa de tres a dos y después a una columna. Si sobra espacio, las columnas crecen con <code>1fr</code>.</p><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: ".6rem", padding: ".6rem", border: "1px dashed #94a3b8", borderRadius: ".5rem" }}>{["HTML", "CSS", "Grid", "Responsive"].map((name) => <article key={name} style={item}><strong>{name}</strong><br /><small>Tarjeta flexible</small></article>)}</div><div className="callout tip"><strong>Lectura completa:</strong> <code>repeat</code> repite · <code>auto-fit</code> calcula cuántas caben · <code>minmax</code> limita el tamaño · <code>1fr</code> reparte sobrante.</div></section>

    <section className="card"><h2>6. <code>auto-fit</code> y <code>auto-fill</code></h2><p>Los dos crean tantas columnas como pueden. Para empezar, usa <code>auto-fit</code>: las pistas vacías se colapsan y las tarjetas existentes aprovechan mejor el ancho. <code>auto-fill</code> mantiene pistas potenciales vacías, útil en casos más concretos.</p><pre style={pre}><code>{`.con-auto-fit  { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.con-auto-fill { grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }`}</code></pre></section>

    <section className="card"><h2>7. Destacar una pieza usando líneas</h2><p>Grid numera las líneas que delimitan las columnas y filas. No necesitas usar coordenadas para todo, pero son útiles cuando un hero o una tarjeta debe abarcar más espacio.</p><pre style={pre}><code>{`.destacada {
  grid-column: 1 / 3; /* desde línea 1 hasta línea 3: dos columnas */
}

.ancha { grid-column: span 2; }
.completa { grid-column: 1 / -1; } /* hasta la última línea */`}</code></pre><div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: ".5rem", padding: ".5rem", background: "#f8fafc" }}><div style={{ ...item, gridColumn: "span 2", background: "#fde68a" }}>Destacada · span 2</div><div style={item}>3</div><div style={item}>4</div><div style={item}>5</div><div style={item}>6</div></div><p><code>grid-row</code> funciona igual, pero evita fijar muchas alturas sin necesidad: deja que el contenido determine las filas normales.</p></section>

    <section className="card"><h2>8. Ejemplo completo: galería de cursos</h2><pre style={pre}><code>{`<section class="cursos">
  <article class="curso curso--destacado">CSS desde cero</article>
  <article class="curso">Flexbox</article>
  <article class="curso">Grid</article>
  <article class="curso">Responsive</article>
</section>

.cursos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.curso { padding: 1rem; border: 1px solid #cbd5e1; }
.curso--destacado { grid-column: span 2; }`}</code></pre><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: ".6rem" }}><article style={{ ...item, gridColumn: "span 2", background: "#bfdbfe" }}>CSS desde cero<br /><small>Destacado</small></article>{["Flexbox", "Grid", "Responsive"].map(name => <article key={name} style={item}>{name}</article>)}</div><div className="callout warn">Si una tarjeta destacada no cabe en una pantalla estrecha, el propio Grid puede colocarla en una nueva línea. Comprueba siempre el resultado a distintos anchos.</div></section>

    <section className="card"><h2>Microprácticas</h2><ol><li>Construye una cuadrícula con <code>1fr 2fr 1fr</code> y explica qué columna obtiene más espacio.</li><li>Crea una sidebar con <code>220px 1fr</code>.</li><li>Convierte una galería fija de tres columnas en <code>repeat(auto-fit, minmax(220px, 1fr))</code>.</li><li>Haz que una tarjeta ocupe dos columnas con <code>span 2</code>.</li><li>Reduce la ventana y anota cuándo la cuadrícula pasa de varias columnas a una.</li></ol><details className="dd"><summary>Pista para depurar</summary><div className="dd-body"><pre style={pre}><code>{`.grid { outline: 2px dashed #f97316; }
.grid > * { outline: 1px solid #64748b; }`}</code></pre><p>Ver las cajas ayuda a saber si el problema está en el contenedor, en el mínimo elegido o en un ítem destacado.</p></div></details><Link className="btn btn-primary" to="/css-grid-areas">Continuar con Grid Areas →</Link></section>
  </main>;
}
