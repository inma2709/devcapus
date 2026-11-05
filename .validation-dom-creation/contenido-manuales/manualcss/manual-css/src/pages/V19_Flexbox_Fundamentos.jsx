import { useEffect } from "react";
import { Link } from "react-router-dom";
import { manualAsset } from "../utils/manualAsset";

const pre = { background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: ".5rem", overflowX: "auto" };
const flexboxGuideImage = manualAsset("flexbox-i-guia.png");

export default function V19_Flexbox_Fundamentos() {
  useEffect(() => { document.title = "V19 · Flexbox I: fundamentos"; }, []);
  return <main className="doc" id="contenido">
    <header className="doc-hero"><p className="doc-kicker">V19 · Layout</p><h1>Flexbox I · Una fila con intención</h1><p className="doc-lead">Hasta ahora has aprendido cómo participa una caja en el flujo. Ahora aparece otro problema: organizar varios elementos hijos como un conjunto. Flexbox convierte al padre en quien decide esa organización.</p><div className="callout tip"><strong>Mapa de la progresión:</strong> <code>display</code> decide cómo participa una caja; Flexbox, cómo un contenedor organiza a varios hijos. Grid llegará después para relaciones en dos dimensiones. <code>position</code> se reserva para necesidades de colocación específicas, después de dominar estos layouts.</div></header>

    <section className="card"><h2>Antes de escribir Flexbox: diagnostica el problema</h2><p>Flexbox no es una lista de propiedades para probar al azar. Antes de tocar el CSS, describe qué quieres conseguir y busca la propiedad que responde a esa pregunta.</p><div className="table-wrap"><table className="table"><thead><tr><th>Paso</th><th>Pregunta</th><th>Propiedad o decisión</th></tr></thead><tbody><tr><td>1</td><td>¿Qué elementos quiero ordenar juntos?</td><td>Buscar el <strong>padre</strong> común.</td></tr><tr><td>2</td><td>¿Quiero usar Flexbox?</td><td><code>display: flex</code></td></tr><tr><td>3</td><td>¿Fila o columna?</td><td><code>flex-direction</code></td></tr><tr><td>4</td><td>¿Cómo reparto en el eje principal?</td><td><code>justify-content</code></td></tr><tr><td>5</td><td>¿Cómo alineo en el eje cruzado?</td><td><code>align-items</code></td></tr><tr><td>6</td><td>¿Qué separación quiero?</td><td><code>gap</code></td></tr><tr><td>7</td><td>¿No caben?</td><td><code>flex-wrap</code> — lo ampliaremos en Flexbox II.</td></tr><tr><td>8</td><td>¿Quiero cambiar solo uno?</td><td>Propiedades del <strong>hijo</strong> — Flexbox II.</td></tr></tbody></table></div><div className="callout tip"><strong>Regla mental:</strong> PADRE = organiza el conjunto. HIJO = controla su propio comportamiento dentro del conjunto.<br /><strong>¿Quiero organizar a TODOS?</strong> Uso una propiedad del padre. <strong>¿Quiero cambiar SOLO UNO?</strong> Uso una propiedad del hijo.</div><pre style={pre}><code>{"¿QUÉ QUIERO HACER?\n\n1. Ordenar elementos juntos → busco el PADRE\n2. ¿Fila o columna? → flex-direction\n3. ¿Cómo reparto? → justify-content\n4. ¿Cómo alineo? → align-items\n5. ¿Qué separación? → gap\n6. ¿No caben? → flex-wrap\n7. ¿Quiero cambiar solo uno? → propiedades del HIJO (Flexbox II)"}</code></pre></section>

    <section className="card"><h2>Guía visual: una fila con intención</h2><p>Consulta esta síntesis mientras avanzas: parte del padre, identifica los hijos directos y usa los dos ejes para decidir distancia, reparto y alineación.</p><figure className="media"><img src={flexboxGuideImage} alt="Infografía de Flexbox I sobre flex container, flex items, ejes, gap, justify-content y align-items" loading="lazy" decoding="async" /><figcaption>Flexbox no consiste solo en poner elementos en horizontal: organiza varios hijos respecto a un eje principal y otro cruzado.</figcaption></figure></section>

    <section className="card"><h2>El modelo mental: no muevas hijos sueltos</h2><p>Con Flexbox no vas colocando cada elemento con <code>margin-left</code>, <code>top</code> o coordenadas. Declaras una regla en el padre y sus hijos directos se organizan como un grupo.</p><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1rem" }}><div style={{ padding: "1rem", border: "1px solid #fecaca", borderRadius: ".65rem", background: "#fff7f7" }}><strong>Antes: cajas independientes</strong><p style={{ marginBottom: 0 }}>El flujo decide el orden y tendemos a ajustar cada hijo por separado.</p></div><div style={{ padding: "1rem", border: "1px solid #93c5fd", borderRadius: ".65rem", background: "#eff6ff" }}><strong>Con Flexbox: un conjunto</strong><p style={{ marginBottom: 0 }}>El padre define el eje, la distancia y el reparto; los hijos responden a esa regla común.</p></div></div><p><strong>Solo cuentan los hijos directos.</strong> Si un <code>nav</code> contiene enlaces, los enlaces no se convierten en <em>flex items</em> del abuelo. Para organizarlos también en fila, ese <code>nav</code> necesitaría su propio <code>display: flex</code>.</p></section>

    <section className="card"><h2>1. El problema: los elementos se apilan</h2><pre style={pre}><code>{`<nav class="navegacion">
  <a href="#">Inicio</a>
  <a href="#">Cursos</a>
  <a href="#">Contacto</a>
</nav>`}</code></pre><p>Con el flujo normal, si los enlaces fueran bloques se colocarían uno debajo de otro. La primera regla de Flexbox cambia la forma en que el padre organiza a sus hijos directos:</p><pre style={pre}><code>{`.navegacion {
  display: flex;
}`}</code></pre><div style={{ display: "flex", gap: ".5rem", padding: "1rem", background: "#eff6ff", border: "1px solid #93c5fd", borderRadius: ".6rem" }}><span style={{ padding: ".45rem .7rem", background: "white", color: "#0f172a", borderRadius: ".3rem" }}>Inicio</span><span style={{ padding: ".45rem .7rem", background: "white", color: "#0f172a", borderRadius: ".3rem" }}>Cursos</span><span style={{ padding: ".45rem .7rem", background: "white", color: "#0f172a", borderRadius: ".3rem" }}>Contacto</span></div><p>El padre es el <strong>flex container</strong>; sus hijos directos son los <strong>flex items</strong>. Un nieto no se convierte en flex item automáticamente.</p></section>

    <section className="card"><h2>2. Dos ejes: no memorices “horizontal” y “vertical”</h2><p><code>flex-direction</code> decide el <strong>eje principal</strong>. <code>justify-content</code> trabaja en ese eje principal y <code>align-items</code> en el eje cruzado. Por eso no conviene asociarlas siempre con horizontal o vertical.</p><div className="table-wrap"><table className="table"><thead><tr><th>Dirección</th><th>Eje principal</th><th>Eje cruzado</th></tr></thead><tbody><tr><td><code>flex-direction: row</code></td><td>Horizontal → <code>justify-content</code></td><td>Vertical ↕ <code>align-items</code></td></tr><tr><td><code>flex-direction: column</code></td><td>Vertical ↕ <code>justify-content</code></td><td>Horizontal → <code>align-items</code></td></tr></tbody></table></div><pre style={pre}><code>{"flex-direction\n      ↓\ndecide el eje principal\n\njustify-content → trabaja en el eje principal\nalign-items     → trabaja en el eje cruzado"}</code></pre><div className="callout tip"><strong>La pregunta correcta:</strong> antes de usar una propiedad, identifica el eje. Así el modelo sigue funcionando aunque cambies de fila a columna.</div></section>

    <section className="card"><h2>3. Primero separa con <code>gap</code></h2><p>Hasta ahora usabas <code>margin</code> para el espacio exterior de una caja. Cuando quieres controlar una distancia uniforme entre varios hijos de un contenedor Flex, usa <code>gap</code> en el padre. No añade espacio en los extremos.</p><pre style={pre}><code>{`.navegacion {
  display: flex;
  gap: 1rem;
}`}</code></pre><div style={{ display: "flex", gap: "1rem", padding: "1rem", border: "1px dashed #94a3b8", borderRadius: ".6rem" }}>{["A", "B", "C"].map((item) => <span key={item} style={{ width: "2.25rem", padding: ".45rem", textAlign: "center", background: "#dbeafe", color: "#0f172a", borderRadius: ".3rem" }}>{item}</span>)}</div><pre style={pre}><code>{`/* Esto no separa los enlaces: */
a {
  gap: 4rem;
}

/* gap pertenece al contenedor: */
nav {
  display: flex;
  gap: 2rem;
}`}</code></pre><pre style={pre}><code>{`nav
│
├── a
├── a
├── a
└── a

gap se define en nav, no en a.`}</code></pre><div className="callout warn"><strong>Error frecuente:</strong> aplicar <code>gap</code> a un hijo. El hijo no está organizando un grupo; el padre Flex sí.</div></section>

    <section className="card"><h2>4. Repartir el espacio con <code>justify-content</code></h2><p>Esta propiedad actúa en el eje principal. Empieza por los valores que resolverán la mayoría de tus filas.</p><pre style={pre}><code>{`.barra { display: flex; justify-content: flex-start; }
.barra-centrada { justify-content: center; }
.barra-extremos { justify-content: space-between; }`}</code></pre><div style={{ display: "grid", gap: ".75rem" }}><div style={{ display: "flex", justifyContent: "flex-start", gap: ".4rem", padding: ".75rem", background: "#f8fafc" }}><strong style={{ marginRight: ".5rem" }}>start</strong><span>●</span><span>●</span></div><div style={{ display: "flex", justifyContent: "center", gap: ".4rem", padding: ".75rem", background: "#f8fafc" }}><strong style={{ position: "absolute", left: "1rem" }}>center</strong><span>●</span><span>●</span></div><div style={{ display: "flex", justifyContent: "space-between", padding: ".75rem", background: "#f8fafc" }}><strong>space-between</strong><span>●</span><span>●</span></div></div><div className="callout tip"><strong>Patrón frecuente:</strong> <code>space-between</code> sirve para colocar el logo al inicio y las acciones al final. Para una distancia constante entre varios enlaces, usa <code>gap</code>.</div></section>

    <section className="card"><h2>5. Alinear en el eje cruzado con <code>align-items</code></h2><p>Cuando los elementos tienen alturas distintas, <code>align-items</code> decide cómo se colocan respecto al eje cruzado.</p><pre style={pre}><code>{`.barra {
  display: flex;
  align-items: center;
  min-height: 5rem;
}`}</code></pre><div style={{ display: "flex", alignItems: "center", gap: ".6rem", minHeight: "5rem", padding: ".75rem", background: "#f0fdf4", borderRadius: ".6rem" }}><span style={{ padding: ".35rem", background: "#bbf7d0", color: "#14532d" }}>Bajo</span><span style={{ padding: "1rem .35rem", background: "#bbf7d0", color: "#14532d" }}>Alto</span><span style={{ padding: ".6rem .35rem", background: "#bbf7d0", color: "#14532d" }}>Medio</span></div><p>Prueba también <code>flex-start</code> y <code>flex-end</code>. Para que el cambio sea visible, el contenedor necesita altura disponible.</p></section>

    <section className="card"><h2>Ejemplo completo: navegación sencilla</h2><pre style={pre}><code>{`<header class="cabecera">
  <strong>DevCampus</strong>
  <nav class="menu">
    <a href="#">Cursos</a><a href="#">Proyectos</a><a href="#">Contacto</a>
  </nav>
</header>

.cabecera {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
.menu { display: flex; gap: 1rem; }`}</code></pre><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", padding: "1rem", border: "1px solid #cbd5e1", borderRadius: ".6rem" }}><strong>DevCampus</strong><div style={{ display: "flex", gap: ".7rem" }}><a href="#contenido">Cursos</a><a href="#contenido">Proyectos</a><a href="#contenido">Contacto</a></div></div></section>

    <section className="card"><h2>Micropráctica</h2><ol><li>Crea tres enlaces dentro de <code>nav</code> y activa <code>display: flex</code>.</li><li>Añade <code>gap: 1rem</code>.</li><li>Cambia <code>justify-content</code> entre <code>flex-start</code>, <code>center</code> y <code>space-between</code>.</li><li>Da altura a la barra y prueba <code>align-items: center</code>.</li></ol><details className="dd"><summary>Solución mínima</summary><div className="dd-body"><pre style={pre}><code>{`nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 4rem;
}`}</code></pre></div></details><Link className="btn btn-primary" to="/css-flexbox-mapa">Ver el mapa de Flexbox: padre e hijo →</Link></section>
    <section className="card"><h2>Ejercicio de diagnóstico: primero la pregunta, después el CSS</h2><p><strong>Problema visual:</strong> tienes tres elementos A, B y C. Los quieres en una fila, separados entre sí y centrados verticalmente dentro de una barra.</p><pre style={pre}><code>{"┌─────────────────────────────┐\n│ A             B          C  │\n└─────────────────────────────┘"}</code></pre><ol><li><strong>¿Qué quiero ordenar?</strong> A, B y C juntos.</li><li><strong>¿Quién los contiene?</strong> Su padre común: <code>.contenedor</code>.</li><li><strong>¿Qué necesito?</strong> Una fila, reparto en el eje principal, alineación en el eje cruzado y separación.</li><li><strong>¿Qué propiedades responden?</strong> <code>display</code>, <code>flex-direction</code>, <code>justify-content</code>, <code>align-items</code> y <code>gap</code>.</li></ol><pre style={pre}><code>{".contenedor {\n  display: flex;                    /* quiero ordenar sus hijos */\n  flex-direction: row;              /* quiero una fila */\n  justify-content: space-between;   /* quiero repartirlos en el eje principal */\n  align-items: center;              /* quiero centrarlos en el eje cruzado */\n  gap: 1rem;                        /* quiero separación entre ellos */\n}"}</code></pre><div className="callout warn"><strong>Regla didáctica:</strong> antes de escribir una propiedad Flexbox, explica qué problema visual quieres resolver. Estos comentarios sirven para aprender; cuando el razonamiento sea natural, no tendrás que dejarlos en tu CSS.</div></section>
  </main>;
}
