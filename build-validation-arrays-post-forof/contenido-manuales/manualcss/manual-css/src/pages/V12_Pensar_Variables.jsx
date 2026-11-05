import { useState } from "react";
import { Link } from "react-router-dom";

const repeatedCss = [
  "header { background-color: #2563eb; }",
  "h2 { color: #2563eb; }",
  ".boton { background-color: #2563eb; }",
  "footer { border-top: 3px solid #2563eb; }",
].join("\n\n");

const variableCss = [
  ":root {",
  "  --color-principal: #2563eb;",
  "}",
  "",
  "header { background-color: var(--color-principal); }",
  "h2 { color: var(--color-principal); }",
  ".boton { background-color: var(--color-principal); }",
  "footer { border-top: 3px solid var(--color-principal); }",
].join("\n");

const refactorBefore = [
  "body { background-color: #f5f5f5; color: #222; }",
  "h1, h2 { color: #2563eb; }",
  ".boton {",
  "  background-color: #2563eb;",
  "  color: white;",
  "  padding: 10px 20px;",
  "  border-radius: 8px;",
  "}",
  ".tarjeta { padding: 20px; border-radius: 8px; }",
].join("\n");

const refactorAfter = [
  ":root {",
  "  --color-principal: #2563eb;",
  "  --radio: 8px;",
  "}",
  "",
  "body { background-color: #f5f5f5; color: #222; }",
  "h1, h2 { color: var(--color-principal); }",
  ".boton {",
  "  background-color: var(--color-principal);",
  "  color: white;",
  "  padding: 10px 20px;",
  "  border-radius: var(--radio);",
  "}",
  ".tarjeta { padding: 20px; border-radius: var(--radio); }",
].join("\n");

const practiceStart = [
  "header { background-color: #7c3aed; padding: 20px; }",
  "h1 { color: #7c3aed; }",
  ".boton {",
  "  background-color: #7c3aed;",
  "  padding: 10px;",
  "  border-radius: 6px;",
  "}",
  ".tarjeta { padding: 20px; border-radius: 6px; }",
].join("\n");

const practiceSolution = [
  ":root {",
  "  --color-principal: #7c3aed;",
  "  --espacio-medio: 20px;",
  "  --radio: 6px;",
  "}",
  "",
  "header {",
  "  background-color: var(--color-principal);",
  "  padding: var(--espacio-medio);",
  "}",
  "h1 { color: var(--color-principal); }",
  ".boton {",
  "  background-color: var(--color-principal);",
  "  padding: 10px;",
  "  border-radius: var(--radio);",
  "}",
  ".tarjeta {",
  "  padding: var(--espacio-medio);",
  "  border-radius: var(--radio);",
  "}",
].join("\n");

const pre = { background: "#f8fafc", color: "#0f172a", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" };

export default function V12_Pensar_Variables() {
  const [isGreen, setIsGreen] = useState(false);
  const color = isGreen ? "#16a34a" : "#2563eb";

  return (
    <article className="doc">
      <header className="doc-hero">
        <p className="doc-kicker">Pensar en CSS · Tema 2</p>
        <h1>Variables CSS: escribe una vez, reutiliza en toda la web</h1>
        <p className="doc-lead">Cuando un mismo valor representa una decisión de diseño, ponerle nombre evita repetirlo y hace que tu CSS sea más fácil de mantener.</p>
        <div className="callout tip"><strong>Idea central:</strong> si un valor se repite porque representa la misma decisión de diseño, probablemente conviene convertirlo en una variable.</div>
      </header>

      <section className="card">
        <h2>1. El problema: repetir valores</h2>
        <p>Este CSS funciona. El mismo azul aparece en una cabecera, un título, un botón y el pie de página.</p>
        <pre style={pre}><code>{repeatedCss}</code></pre>
        <p>Ahora el color principal debe pasar a verde. Tendrías que localizar y cambiar cada aparición de <code>#2563eb</code>, sin olvidar ninguna.</p>
        <div className="callout warn"><strong>Funcionar no significa que el código sea fácil de mantener.</strong> Cuantos más lugares modificas para una misma decisión, más fácil es cometer un error.</div>
      </section>

      <section className="card">
        <h2>2. La solución: guardar el valor</h2>
        <p>Las variables CSS se llaman técnicamente <strong>propiedades personalizadas</strong>. En la práctica solemos llamarlas variables CSS: ponemos un nombre a un valor para reutilizarlo después.</p>
        <pre style={pre}><code>{":root {\n  --color-principal: #2563eb;\n}"}</code></pre>
        <div className="table-wrap"><table className="table"><thead><tr><th>Parte</th><th>Qué significa</th></tr></thead><tbody><tr><td><code>--color-principal</code></td><td>El nombre de la decisión.</td></tr><tr><td><code>#2563eb</code></td><td>El valor que guardamos.</td></tr></tbody></table></div>
        <div className="callout">Piensa que estamos poniendo una etiqueta a un valor. En vez de recordar siempre un código de color, podemos pedir <strong>el color principal</strong>.</div>
      </section>

      <section className="card">
        <h2>3. Recuperar el valor con <code>var()</code></h2>
        <p>Definir y usar no son la misma acción:</p>
        <pre style={pre}><code>{"--color-principal: #2563eb;      /* crea o define */\ncolor: var(--color-principal);   /* recupera y utiliza */"}</code></pre>
        <p>Ahora el CSS anterior expresa la misma decisión sin repetir el valor:</p>
        <pre style={pre}><code>{variableCss}</code></pre>
        <div className="callout tip"><strong>Regla para recordar:</strong> <code>--nombre: valor;</code> guarda. <code>var(--nombre)</code> recupera.</div>
      </section>

      <section className="card">
        <h2>Ejemplo breve: guardar y reutilizar</h2>
        <p>Podemos guardar un valor dentro de una variable y darle un nombre que explique para qué sirve.</p>
        <pre style={pre}><code>{":root {\n  --color-principal: #2563eb;\n  --espacio-medio: 16px;\n  --radio: 8px;\n}"}</code></pre>
        <ul>
          <li><code>--color-principal</code> es el nombre de la variable.</li>
          <li><code>#2563eb</code> es el valor que guarda.</li>
          <li>Las variables CSS empiezan siempre por <code>--</code>.</li>
          <li>En este nivel las declaramos en <code>:root</code> para reutilizarlas en toda la página.</li>
        </ul>
        <pre style={pre}><code>{"--color-principal: #2563eb;\n        ↓              ↓\n      nombre          valor"}</code></pre>
        <p>Para utilizar el valor guardado, escribimos <code>var()</code> y dentro indicamos el nombre de la variable.</p>
        <pre style={pre}><code>{"h1 {\n  color: var(--color-principal);\n}"}</code></pre>
        <p>CSS sustituye <code>var(--color-principal)</code> por el valor que hemos guardado: <code>#2563eb</code>.</p>
        <details className="dd">
          <summary>Ver el mismo conjunto de valores utilizado en dos reglas</summary>
          <div className="dd-body">
            <pre style={pre}><code>{":root {\n  --color-principal: #2563eb;\n  --espacio-medio: 16px;\n  --radio: 8px;\n}\n\nh1 {\n  color: var(--color-principal);\n}\n\n.boton {\n  background-color: var(--color-principal);\n  padding: var(--espacio-medio);\n  border-radius: var(--radio);\n}"}</code></pre>
          </div>
        </details>
        <pre style={{ ...pre, marginTop: "1rem" }}><code>{":root\n   ↓\nguarda los valores\n\n--color-principal: #2563eb;\n--espacio-medio: 16px;\n--radio: 8px;\n\n   ↓\n\nvar(--color-principal)\nvar(--espacio-medio)\nvar(--radio)\n\n   ↓\n\nse utilizan en las reglas CSS"}</code></pre>
        <p>Si ahora cambias solo esto:</p>
        <pre style={pre}><code>{":root {\n  --color-principal: #16a34a;\n}"}</code></pre>
        <div className="callout tip"><strong>CAMBIAMOS UNA VEZ → SE ACTUALIZA EN TODOS SUS USOS.</strong> Todos los elementos que utilicen <code>var(--color-principal)</code> pasarán a usar el nuevo color.</div>
      </section>

      <section className="card">
        <h2>4. La ventaja real: cambiar una vez</h2>
        <p>Cambia el valor guardado y todos los lugares que usan esa variable se actualizan. Pruébalo:</p>
        <button type="button" className="btn btn-primary" onClick={() => setIsGreen((current) => !current)}>Cambiar color principal a {isGreen ? "azul" : "verde"}</button>
        <div style={{ marginTop: "1rem", border: "1px solid " + color, borderRadius: ".75rem", overflow: "hidden", background: "white" }}>
          <div style={{ padding: ".8rem 1rem", background: color, color: "white", fontWeight: 700 }}>Cabecera</div>
          <div style={{ padding: "1rem" }}><h3 style={{ marginTop: 0, color }}>Un mismo color, varios elementos</h3><p>El título, el botón y el borde usan la misma decisión.</p><button type="button" style={{ border: 0, borderRadius: ".4rem", padding: ".55rem .8rem", background: color, color: "white", fontWeight: 700 }}>Botón</button></div>
          <div style={{ borderTop: "3px solid " + color, padding: ".7rem 1rem", color: "#475569" }}>Pie de página</div>
        </div>
        <pre style={{ ...pre, marginTop: "1rem" }}><code>{":root {\n  --color-principal: " + color + ";\n}"}</code></pre>
        <div className="callout tip"><strong>UN CAMBIO → MUCHOS ELEMENTOS ACTUALIZADOS.</strong> Esta es la verdadera ventaja cuando existe una decisión compartida.</div>
      </section>

      <section className="card">
        <h2>5. Las variables no sirven solo para colores</h2>
        <p>También pueden guardar espacios, radios, sombras, tamaños, grosores y otros valores reutilizables.</p>
        <h3>HTML</h3>
        <pre style={pre}><code>{"<article class=\"tarjeta\">\n  <h2>Curso CSS</h2>\n  <p>Aprende a diseñar interfaces web.</p>\n</article>"}</code></pre>
        <h3>CSS</h3>
        <pre style={pre}><code>{":root {\n  --color-principal: #2563eb;\n  --color-texto: #1f2937;\n  --color-fondo: #f8fafc;\n  --espacio-pequeno: 8px;\n  --espacio-medio: 16px;\n  --espacio-grande: 32px;\n  --radio-tarjeta: 8px;\n  --sombra: 0 4px 12px rgb(0 0 0 / 10%);\n}\n\n.tarjeta {\n  padding: var(--espacio-medio);\n  margin-bottom: var(--espacio-grande);\n  color: var(--color-texto);\n  background-color: var(--color-fondo);\n  border-radius: var(--radio-tarjeta);\n  box-shadow: var(--sombra);\n}"}</code></pre>
        <div className="callout">No es necesario convertir todo en variable. Úsalas cuando aporten reutilización y claridad.</div>
      </section>

      <section className="card">
        <h2>6. ¿Por qué usamos <code>:root</code>?</h2>
        <p><code>:root</code> representa la raíz del documento. Es un lugar práctico para declarar variables que queremos utilizar en toda la página.</p>
        <pre style={pre}><code>{":root {\n  --color-principal: #2563eb;\n}\n\nh1 { color: var(--color-principal); }\nbutton { background-color: var(--color-principal); }\nfooter { border-color: var(--color-principal); }"}</code></pre>
        <p>Ya conoces la herencia. De momento basta con esta idea: una variable definida en <code>:root</code> puede estar disponible para toda la página.</p>
        <div className="callout warn">Todavía no necesitamos declarar variables dentro de tarjetas, botones o componentes. Primero domina una lista global y clara en <code>:root</code>.</div>
      </section>

      <section className="card">
        <h2>7. Dar nombres que expliquen la intención</h2>
        <p>Es mejor nombrar una variable por la función que cumple que por el valor que tiene hoy.</p>
        <div className="table-wrap"><table className="table"><thead><tr><th>Nombre</th><th>Si el azul cambia a verde</th></tr></thead><tbody><tr><td><code>--azul: #16a34a;</code></td><td>El nombre deja de describir el valor.</td></tr><tr><td><code>--color-principal: #16a34a;</code></td><td>Sigue explicando su función.</td></tr></tbody></table></div>
        <pre style={pre}><code>{":root {\n  --color-principal: #2563eb;\n  --color-secundario: #64748b;\n  --color-texto: #1f2937;\n  --color-fondo: #f8fafc;\n  --espacio-pequeno: 8px;\n  --espacio-medio: 16px;\n  --espacio-grande: 32px;\n  --radio-tarjeta: 8px;\n}"}</code></pre>
      </section>

      <section className="card">
        <h2>8. Antes y después: refactorizar CSS</h2>
        <p><strong>Refactorizar</strong> significa mejorar la organización del código sin cambiar lo que hace. ¿Qué valores se repiten aquí?</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          <div><h3>Antes: repetición</h3><pre style={pre}><code>{refactorBefore}</code></pre></div>
          <div><h3>Después: decisiones con nombre</h3><pre style={pre}><code>{refactorAfter}</code></pre></div>
        </div>
        <p>El resultado visual no cambia. Sí mejora el mantenimiento: una decisión importante está centralizada y se actualiza desde un único lugar.</p>
      </section>

      <section className="card">
        <h2>9. ¿Cuándo merece la pena crear una variable?</h2>
        <p>Las variables son una herramienta de organización, no una obligación. Tiene sentido crearlas cuando:</p>
        <ul><li>un valor aparece varias veces;</li><li>representa una decisión importante del diseño;</li><li>probablemente vaya a cambiar;</li><li>ayuda a mantener coherencia visual.</li></ul>
        <pre style={pre}><code>{".aviso {\n  margin-top: 3px;\n}"}</code></pre>
        <p>Si un valor aparece una sola vez y no es una decisión reutilizable, como este margen, probablemente no necesita variable.</p>
      </section>

      <section className="card">
        <h2>10. Errores frecuentes</h2>
        <div className="table-wrap"><table className="table"><thead><tr><th>Error</th><th>Corrección</th></tr></thead><tbody><tr><td><code>color-principal: blue;</code><br />Faltan los dos guiones.</td><td><code>--color-principal: blue;</code></td></tr><tr><td><code>color: --color-principal;</code><br />Falta recuperar el valor.</td><td><code>color: var(--color-principal);</code></td></tr><tr><td><code>var(--color-primary)</code><br />No coincide con el nombre definido.</td><td>Usa exactamente <code>var(--color-principal)</code>.</td></tr></tbody></table></div>
      </section>

      <section className="card">
        <h2>11. Mini práctica guiada</h2>
        <p>Este CSS tiene decisiones repetidas. Intenta organizarlo antes de abrir una posible solución.</p>
        <pre style={pre}><code>{practiceStart}</code></pre>
        <ol><li>Detecta los valores repetidos.</li><li>Crea las variables necesarias dentro de <code>:root</code>.</li><li>Sustituye los valores repetidos por <code>var()</code>.</li><li>Cambia después solo las variables.</li><li>Observa qué partes de la interfaz se actualizan.</li></ol>
        <details className="dd"><summary>Ver una posible solución</summary><div className="dd-body"><pre style={pre}><code>{practiceSolution}</code></pre><p><code>10px</code> aparece una sola vez en el botón, por eso puede quedarse como está. El violeta, <code>20px</code> y <code>6px</code> sí representan decisiones repetidas.</p></div></details>
      </section>

      <section className="card">
        <h2>Mapa mental final</h2>
        <pre style={pre}><code>{"VALOR REPETIDO\n      ↓\n¿Representa la misma decisión de diseño?\n      ↓ sí\nDECLARAR EN :root\n--nombre-con-intencion: valor;\n      ↓\nUSAR DONDE HAGA FALTA\npropiedad: var(--nombre-con-intencion);\n      ↓\nCAMBIAR UNA VEZ\n      ↓\nINTERFAZ COHERENTE Y MÁS FÁCIL DE MANTENER"}</code></pre>
        <div className="callout tip"><strong>Conclusión:</strong> las variables CSS nos permiten poner nombre a decisiones de diseño y reutilizarlas, evitando repetir valores y facilitando el mantenimiento de la web.</div>
        <div className="doc-next"><Link className="btn btn-primary" to="/css-tamano">Continuar: Tamaño · ¿Cuánto debe ocupar? →</Link></div>
      </section>
    </article>
  );
}
