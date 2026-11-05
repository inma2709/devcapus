import { useEffect } from "react";
import { Link } from "react-router-dom";
import { manualAsset } from "../utils/manualAsset";

const pre = { background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: ".5rem", overflowX: "auto" };
const flexboxGuideImage = manualAsset("flexbox-ii-guia.png");

export default function V20_Flexbox_Alineacion() {
  useEffect(() => { document.title = "V20 · Flexbox II: alineación y adaptación"; }, []);
  return <main className="doc" id="contenido">
    <header className="doc-hero"><p className="doc-kicker">Flexbox II · Layout</p><h1>Flexbox II · Adaptación y reparto de espacio</h1><p className="doc-lead">El mapa anterior te ha ayudado a distinguir lo que organiza el padre de lo que controla cada hijo. Ahora llega el problema real: ¿qué ocurre cuando una fila tiene que cambiar de dirección, dejar que los elementos salten de línea o repartir el espacio disponible entre ellos?</p><div className="callout tip"><strong>Continuidad:</strong> Flexbox I organiza y alinea; el mapa padre-hijo te ayuda a diagnosticar; Flexbox II adapta y reparte espacio. El orden de decisión es: dirección → salto de línea → tamaño base → crecimiento o encogimiento.</div></header>

    <section className="card"><h2>Guía visual: adaptar y repartir</h2><p>Esta síntesis reúne los cuatro problemas que resuelve Flexbox II. Vuelve a ella si dudas de qué propiedad elegir antes de cambiar el CSS.</p><figure className="media"><img src={flexboxGuideImage} alt="Infografía de Flexbox II sobre flex-direction, flex-wrap, flex-basis, flex-grow, flex-shrink, shorthand flex, align-self y márgenes automáticos" loading="lazy" decoding="async" /><figcaption>Antes de escribir una propiedad, identifica si necesitas cambiar dirección, saltar de línea, definir un tamaño de partida o repartir espacio.</figcaption></figure></section>

    <section className="card"><h2>Antes de escribir propiedades: diagnostica la fila</h2><div className="table-wrap"><table className="table"><thead><tr><th>Lo que observas</th><th>Pregunta útil</th><th>Primera herramienta</th></tr></thead><tbody><tr><td>El grupo debería apilarse</td><td>¿Sigue siendo una fila?</td><td><code>flex-direction</code></td></tr><tr><td>Los ítems ya no caben</td><td>¿Deben conservar tamaño y pasar a otra línea?</td><td><code>flex-wrap</code></td></tr><tr><td>Sobra espacio</td><td>¿Qué ítem puede ocuparlo?</td><td><code>flex-grow</code></td></tr><tr><td>Falta espacio</td><td>¿Cuál puede encogerse y desde qué tamaño?</td><td><code>flex-basis</code> y <code>flex-shrink</code></td></tr></tbody></table></div><div className="callout">No intentes resolver una fila que no cabe con posiciones absolutas o márgenes aleatorios. Primero identifica cuál de estas cuatro decisiones falta.</div></section>

    <section className="card"><h2>1. Cambiar la dirección con <code>flex-direction</code></h2><pre style={pre}><code>{`.columna {
  display: flex;
  flex-direction: column;
  gap: .75rem;
}`}</code></pre><p><code>row</code> es el valor inicial: organiza en fila. <code>column</code> organiza en columna. Los valores <code>row-reverse</code> y <code>column-reverse</code> invierten solo el orden visual; úsalos con cuidado porque el orden de teclado sigue el HTML.</p><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1rem" }}><div><strong>row</strong><div style={{ display: "flex", gap: ".5rem", padding: ".75rem", background: "#eff6ff" }}><span>1</span><span>2</span><span>3</span></div></div><div><strong>column</strong><div style={{ display: "flex", flexDirection: "column", gap: ".5rem", padding: ".75rem", background: "#f0fdf4" }}><span>1</span><span>2</span><span>3</span></div></div></div><div className="callout">Al cambiar a columna, el eje principal pasa a ser vertical. Por eso <code>justify-content</code> reparte arriba y abajo, y <code>align-items</code> trabaja horizontalmente.</div></section>

    <section className="card"><h2>2. Evitar filas aplastadas con <code>flex-wrap</code></h2><p>Por defecto Flexbox usa <code>nowrap</code>: intenta mantener todos los ítems en una única línea. Cuando una fila de tarjetas no cabe, <code>wrap</code> permite crear nuevas líneas.</p><pre style={pre}><code>{`.tarjetas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}`}</code></pre><div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", padding: ".75rem", border: "1px dashed #94a3b8", borderRadius: ".5rem" }}>{["HTML", "CSS", "JavaScript", "Accesibilidad", "Responsive"].map((item) => <span key={item} style={{ padding: ".55rem .8rem", background: "#ede9fe", color: "#4c1d95", borderRadius: ".35rem" }}>{item}</span>)}</div><p><code>wrap-reverse</code> invierte el orden de las líneas y rara vez es necesario al empezar. Quédate con <code>wrap</code> hasta que necesites un caso concreto.</p></section>

    <section className="card"><h2>3. Tamaño flexible: <code>flex-basis</code>, crecer y encoger</h2><p>Antes de repartir espacio, cada ítem necesita un tamaño de partida. <code>flex-basis</code> lo indica; <code>flex-grow</code> decide si usa espacio sobrante y <code>flex-shrink</code> si puede encogerse cuando falta espacio.</p><pre style={pre}><code>{`.tarjeta {
  flex-basis: 220px; /* tamaño inicial deseado */
  flex-grow: 1;      /* puede ocupar espacio libre */
  flex-shrink: 1;    /* puede encogerse si no cabe */
}`}</code></pre><div className="table-wrap"><table className="table"><thead><tr><th>Propiedad</th><th>Pregunta que responde</th><th>Valor inicial útil</th></tr></thead><tbody><tr><td><code>flex-basis</code></td><td>¿Desde qué tamaño empiezo?</td><td><code>220px</code></td></tr><tr><td><code>flex-grow</code></td><td>¿Puedo ocupar sobrante?</td><td><code>1</code></td></tr><tr><td><code>flex-shrink</code></td><td>¿Puedo encogerme?</td><td><code>1</code></td></tr></tbody></table></div><pre style={pre}><code>{`/* Atajo: grow shrink basis */
.tarjeta { flex: 1 1 220px; }
.barra-lateral { flex: 0 0 260px; }
.contenido { flex: 1; min-width: 0; }`}</code></pre><p><code>flex: 1 1 220px</code> es un patrón excelente para tarjetas: empiezan cerca de 220px, se adaptan y pasan a otra línea gracias a <code>wrap</code>.</p></section>

    <section className="card"><h2>4. Alinear un ítem distinto</h2><p><code>align-self</code> cambia la alineación de un solo hijo y sobrescribe <code>align-items</code> del contenedor.</p><pre style={pre}><code>{`.fila { display: flex; align-items: center; }
.accion { align-self: flex-end; }`}</code></pre><p>También puedes usar un margen automático como separador elástico en el eje principal:</p><pre style={pre}><code>{`.barra { display: flex; gap: 1rem; }
.acciones { margin-left: auto; }`}</code></pre><div className="callout warn"><strong>Orden visual:</strong> <code>order</code> puede mover una caja visualmente, pero no cambia el orden lógico del HTML. No lo uses para corregir una estructura que debería estar bien ordenada desde el inicio.</div></section>

    <section className="card"><h2>Ejercicio 1 · Cuatro ítems que se adaptan</h2><p>Parte de cuatro cajas en una fila. El objetivo es observar cómo cambia <strong>el comportamiento de cada ítem</strong>, no diseñar una interfaz completa.</p><ol><li>Da a todos los ítems <code>flex: 1 1 140px</code>: podrán crecer, encoger y partir de 140px.</li><li>Añade <code>flex-wrap: wrap</code> al contenedor y estrecha la ventana hasta que una caja salte de línea.</li><li>Haz que la caja B ocupe el doble de espacio libre con <code>flex-grow: 2</code>.</li><li>Evita que la caja C se encoja con <code>flex-shrink: 0</code> y observa la diferencia cuando falte espacio.</li><li>Mueve visualmente la caja D al principio con <code>order: -1</code>. El HTML debe conservar su orden original.</li></ol><pre style={pre}><code>{`<div class="fila-ejercicio">
  <div class="item item-a">A</div>
  <div class="item item-b">B</div>
  <div class="item item-c">C</div>
  <div class="item item-d">D</div>
</div>`}</code></pre><details className="dd"><summary>Ver una posible solución</summary><div className="dd-body"><pre style={pre}><code>{`.fila-ejercicio {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.item { flex: 1 1 140px; }
.item-b { flex-grow: 2; }
.item-c { flex-shrink: 0; }
.item-d { order: -1; }`}</code></pre><p><code>flex: 1 1 140px</code> equivale a <code>flex-grow: 1</code>, <code>flex-shrink: 1</code> y <code>flex-basis: 140px</code>. Usa <code>order</code> solo para ajustes visuales: el orden del HTML sigue siendo el que leen teclado y lectores de pantalla.</p></div></details></section>

    <section className="card"><h2>Ejemplos de layout</h2><h3>Tarjetas que se adaptan</h3><pre style={pre}><code>{`.tarjetas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.tarjeta { flex: 1 1 260px; }`}</code></pre><div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>{["HTML", "CSS", "JavaScript"].map((title) => <article key={title} style={{ flex: "1 1 150px", padding: "1rem", background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: ".5rem" }}><strong>{title}</strong><p style={{ marginBottom: 0 }}>Tarjeta flexible.</p></article>)}</div><h3>Sidebar y contenido</h3><pre style={pre}><code>{`.layout { display: flex; gap: 1rem; }
.sidebar { flex: 0 0 240px; }
.contenido { flex: 1; min-width: 0; }

@media (max-width: 700px) {
  .layout { flex-direction: column; }
}`}</code></pre><p>En pantallas estrechas, una columna suele ser más cómoda. La media query se estudia en Responsive; aquí observa cómo <code>flex-direction</code> cambia el layout sin cambiar el HTML.</p></section>

    <section className="card"><h2>Siguiente paso: combinar decisiones</h2><p>Ya sabes qué hace el grupo cuando no cabe y cómo puede comportarse cada hijo. En Flexbox III aplicarás el mismo diagnóstico a una navbar, un hero, tarjetas y un footer responsive.</p><ol><li>Convierte una lista de cinco etiquetas en fila con <code>wrap</code> y <code>gap</code>.</li><li>Crea tres tarjetas con <code>flex: 1 1 220px</code> y reduce la ventana para ver el salto de línea.</li><li>Crea una barra lateral de 240px y un contenido con <code>flex: 1</code>.</li><li>Convierte ese layout en columna con <code>flex-direction: column</code>.</li></ol><details className="dd"><summary>Comprobación</summary><div className="dd-body"><p>Si tus tarjetas se desbordan, revisa primero: ¿el padre tiene <code>flex-wrap: wrap</code>? ¿cada tarjeta tiene un <code>flex-basis</code> razonable?</p></div></details><Link className="btn btn-primary" to="/css-flexbox-3">Continuar con Flexbox III · layouts reales →</Link></section>
  </main>;
}
