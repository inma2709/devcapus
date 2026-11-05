import { useEffect } from "react";
import { Link } from "react-router-dom";
import { manualAsset } from "../utils/manualAsset";

const pre = { background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: ".5rem", overflowX: "auto", lineHeight: 1.55 };
const flexboxMapImage = manualAsset("flexbox-padre-vs-hijo.png");

const overview = [
  ["Padre", "¿Activo Flexbox?", "display: flex", "Convierte los hijos directos en ítems flex."],
  ["Padre", "¿Fila o columna?", "flex-direction", "La dirección del eje principal."],
  ["Padre", "¿Cómo reparto el grupo?", "justify-content", "La distribución de todos los hijos."],
  ["Padre", "¿Cómo los alineo en el otro eje?", "align-items", "La alineación de todos los hijos."],
  ["Padre", "¿Qué separación dejo?", "gap", "El espacio entre los hijos."],
  ["Padre", "¿Pueden pasar a otra línea?", "flex-wrap", "Si el grupo usa una o varias líneas."],
  ["Hijo", "¿Puede crecer si sobra espacio?", "flex-grow", "La capacidad de crecer de ese ítem."],
  ["Hijo", "¿Puede encogerse si falta espacio?", "flex-shrink", "La capacidad de encogerse de ese ítem."],
  ["Hijo", "¿Desde qué tamaño parte?", "flex-basis", "Su tamaño inicial antes de repartir espacio."],
  ["Hijo", "¿Se alinea distinto?", "align-self", "Una excepción a align-items."],
  ["Hijo", "¿Cambio su posición visual?", "order", "El orden visual del ítem."],
];

const mapRows = [
  ["Activar Flexbox", "display: flex", "—"], ["Dirección", "flex-direction", "—"],
  ["Distribución", "justify-content", "—"], ["Alineación", "align-items", "align-self"],
  ["Separación", "gap", "—"], ["Si no caben", "flex-wrap", "flex-shrink"],
  ["Si sobra espacio", "—", "flex-grow"], ["Tamaño inicial", "—", "flex-basis"],
  ["Orden", "—", "order"],
];

export default function V20_Flexbox_Mapa() {
  useEffect(() => { document.title = "V20 · Mapa de Flexbox: padre e hijo"; }, []);
  return <main className="doc" id="contenido">
    <header className="doc-hero">
      <p className="doc-kicker">V20 · Layout · Puente conceptual</p>
      <h1>Mapa de Flexbox · ¿Qué controla el padre y qué controla el hijo?</h1>
      <p className="doc-lead">Ya sabes activar Flexbox, poner elementos en fila y alinearlos. Antes de seguir, usa este mapa para decidir dónde escribir cada propiedad y qué problema resuelve.</p>
      <div className="callout tip"><strong>Regla principal:</strong> PADRE = organiza el conjunto. HIJO = controla su propio comportamiento dentro del conjunto.</div>
    </header>

    <section className="card"><h2>Vista rápida: padre frente a hijo</h2><p>Usa esta infografía como chuleta durante los ejercicios: te recuerda dónde escribir cada propiedad y cuál es la diferencia entre <code>wrap</code>, <code>grow</code> y <code>shrink</code>.</p><figure className="media"><img src={flexboxMapImage} alt="Infografía de Flexbox que diferencia las propiedades del padre, que organiza el conjunto, de las propiedades del hijo, que controla una caja." loading="lazy" decoding="async" /><figcaption>En Flexbox, primero decide si necesitas organizar a todos los elementos o cambiar el comportamiento de uno concreto.</figcaption></figure></section>

    <section className="card"><h2>La pregunta que evita memorizar propiedades</h2><p>Flexbox no tiene infinitas opciones. En cada caso empieza por una sola pregunta:</p><pre style={pre}><code>{"¿Quiero organizar a TODOS?\n        ↓\n      PADRE\n\n¿Quiero cambiar SOLO UNO?\n        ↓\n      HIJO"}</code></pre><p>Flexbox es un sistema <strong>unidimensional</strong>: el padre organiza los ítems en un eje principal y puede alinearlos en el eje cruzado. Grid llegará después para controlar filas y columnas a la vez.</p></section>

    <section className="card"><h2>Visión general: problema → propiedad</h2><div className="table-wrap"><table className="table"><thead><tr><th>¿Dónde se usa?</th><th>Pregunta que resuelve</th><th>Propiedad</th><th>Qué controla</th></tr></thead><tbody>{overview.map(([owner, question, property, control]) => <tr key={property}><td><strong>{owner}</strong></td><td>{question}</td><td><code>{property}</code></td><td>{control}</td></tr>)}</tbody></table></div></section>

    <section className="card"><h2>Tabla-mapa: padre frente a hijo</h2><div className="table-wrap"><table className="table"><thead><tr><th></th><th>PADRE: organiza el conjunto</th><th>HIJO: controla una caja</th></tr></thead><tbody>{mapRows.map(([label, parent, child]) => <tr key={label}><td>{label}</td><td>{parent === "—" ? parent : <code>{parent}</code>}</td><td>{child === "—" ? child : <code>{child}</code>}</td></tr>)}</tbody></table></div><div className="callout warn"><strong>No confundas estas dos propiedades:</strong> <code>flex-wrap</code> decide qué hace el <strong>grupo</strong> cuando no cabe en una línea; <code>flex-shrink</code> decide si <strong>un hijo</strong> puede encogerse cuando falta espacio.</div></section>

    <section className="card"><h2>Mapa mental para consultar durante los ejercicios</h2><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}><pre style={pre}><code>{"PADRE FLEX\n│\n├── Dirección → flex-direction\n├── Distribución → justify-content\n├── Alineación → align-items\n├── Separación → gap\n└── ¿Otra línea? → flex-wrap"}</code></pre><pre style={pre}><code>{"HIJO FLEX\n│\n├── ¿Crece? → flex-grow\n├── ¿Encoge? → flex-shrink\n├── ¿Tamaño inicial? → flex-basis\n├── ¿Se alinea distinto? → align-self\n└── ¿Cambia de orden? → order"}</code></pre></div></section>

    <section className="card"><h2>La comparación que más importa</h2><p>Cuando una fila cambia de tamaño, estas tres preguntas se parecen, pero no son la misma:</p><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}><article className="callout"><h3><code>flex-wrap</code></h3><p>¿Qué hace el <strong>grupo</strong> si no cabe?</p><pre style={pre}><code>{"A   B   C   D\n\nA   B\nC   D"}</code></pre></article><article className="callout"><h3><code>flex-grow</code></h3><p>¿Puede <strong>este hijo</strong> crecer si sobra espacio?</p><pre style={pre}><code>{"A   B   C   □\n    ↓\nA  BBBBBBB  C"}</code></pre></article><article className="callout"><h3><code>flex-shrink</code></h3><p>¿Puede <strong>este hijo</strong> encogerse si falta espacio?</p><pre style={pre}><code>{"[ A ][ B ][ C ]\n      ↓\n[ A ][B][ C ]"}</code></pre></article></div><p>En Flexbox II practicarás estas decisiones con código: primero el salto de línea, después el tamaño de partida y por último cómo crecen o se encogen los ítems.</p></section>

    <section className="card"><h2>De Flex I a Flex II</h2><p>Flex I te enseñó a organizar el conjunto con <code>display: flex</code>, <code>flex-direction</code>, <code>justify-content</code>, <code>align-items</code> y <code>gap</code>. Este mapa te permite reconocer el problema antes de tocar el CSS. En el siguiente tema aprenderás a controlar el comportamiento de los ítems sin mezclar sus responsabilidades con las del contenedor.</p><Link className="btn btn-primary" to="/css-flexbox-2">Continuar con Flexbox II · comportamiento de los ítems →</Link></section>
  </main>;
}
