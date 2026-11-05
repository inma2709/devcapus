const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Goal=({children})=><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>{children}</p></section>;
const Mission=({title,children,conceptHint,syntaxHint,solution,reasoning})=><section className="jsm-section jsm-challenge"><h2>{title}</h2>{children}<details><summary>Pista 1 · Idea para resolverlo</summary><p>{conceptHint}</p></details><details><summary>Pista 2 · Recuerda la sintaxis</summary><Code>{syntaxHint}</Code></details><details><summary>Ver solución explicada</summary><Code>{solution}</Code><p><strong>Por qué funciona:</strong> {reasoning}</p></details></section>;

const html=`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi reto de ahorro | JavaScript</title>
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer></script>
</head>
<body>
  <main class="contenedor">
    <header class="cabecera">
      <span class="etiqueta">PROYECTO JAVASCRIPT</span>
      <h1>Mi reto de ahorro</h1>
      <p>Descubre cuántas semanas necesitas para conseguir tu objetivo.</p>
    </header>

    <section class="tarjeta">
      <h2>Configura tu objetivo</h2>
      <div class="formulario">
        <label>¿Cuánto dinero tienes ahora?<input type="number" id="inicial" value="40" min="0" step="0.01"></label>
        <label>¿Cuánto ahorrarás cada semana?<input type="number" id="semanal" value="15" min="0.01" step="0.01"></label>
        <label>¿Cuánto dinero necesitas?<input type="number" id="objetivo" value="250" min="0.01" step="0.01"></label>
        <label>¿Cuántas semanas tienes como máximo?<input type="number" id="maxSemanas" value="20" min="1" max="520" step="1"></label>
        <button type="button" onclick="calcularAhorro()">Calcular mi ahorro</button>
      </div>
    </section>

    <section class="tarjeta resultados">
      <h2>Resultado de tu simulación</h2>
      <p id="resultado" class="mensaje">Introduce los datos y pulsa el botón.</p>
      <p>Semanas utilizadas: <strong id="semanasResultado">—</strong></p>
      <p>Dinero conseguido: <strong id="totalResultado">—</strong></p>
    </section>

    <section class="tarjeta">
      <h2>Tu ahorro semana a semana</h2>
      <pre id="historial" class="historial">Todavía no hay datos.</pre>
    </section>
  </main>
</body>
</html>`;

const css=`:root { --primario: #2563eb; --fondo: #f1f5f9; --blanco: #fff; --texto: #263238; --gris: #64748b; --borde: #e2e8f0; }
* { box-sizing: border-box; }
body { margin: 0; padding: 30px 15px; font-family: Arial, sans-serif; background: var(--fondo); color: var(--texto); line-height: 1.6; }
.contenedor { max-width: 760px; margin: auto; }
.cabecera { text-align: center; margin-bottom: 30px; }
.etiqueta { display: inline-block; background: #fef3c7; color: #92400e; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: bold; }
.tarjeta { background: var(--blanco); padding: 25px; margin-bottom: 20px; border: 1px solid var(--borde); border-radius: 12px; }
.formulario, .resumen { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
label { display: flex; flex-direction: column; gap: 6px; font-weight: bold; font-size: 14px; }
input, button { width: 100%; padding: 12px; border-radius: 8px; font-size: 16px; }
input { border: 1px solid #cbd5e1; }
button { grid-column: 1 / -1; border: 0; background: var(--primario); color: white; cursor: pointer; }
button:focus-visible, input:focus { outline: 3px solid #f59e0b; outline-offset: 2px; }
.mensaje { background: #eff6ff; padding: 15px; border-radius: 8px; color: #1e40af; font-weight: bold; }
.historial { background: #0f172a; color: white; padding: 20px; border-radius: 8px; white-space: pre-wrap; overflow-wrap: anywhere; }
@media (max-width: 600px) { .formulario, .resumen { grid-template-columns: 1fr; } .tarjeta { padding: 20px; } }`;

const starter=`function calcularAhorro() {
  const inicialTexto = document.getElementById("inicial").value;
  const semanalTexto = document.getElementById("semanal").value;
  const objetivoTexto = document.getElementById("objetivo").value;
  const maxSemanasTexto = document.getElementById("maxSemanas").value;

  const inicial = Number(inicialTexto);
  const semanal = Number(semanalTexto);
  const objetivo = Number(objetivoTexto);
  const maxSemanas = Number(maxSemanasTexto);

  if (inicialTexto.trim() === "" || semanalTexto.trim() === "" ||
      objetivoTexto.trim() === "" || maxSemanasTexto.trim() === "" ||
      !Number.isFinite(inicial) || !Number.isFinite(semanal) ||
      !Number.isFinite(objetivo) || !Number.isInteger(maxSemanas) ||
      inicial < 0 || semanal <= 0 || objetivo <= 0 ||
      maxSemanas < 1 || maxSemanas > 520) {
    document.getElementById("resultado").textContent = "Revisa los datos introducidos.";
    document.getElementById("semanasResultado").textContent = "—";
    document.getElementById("totalResultado").textContent = "—";
    document.getElementById("historial").textContent = "";
    return;
  }

  let total = inicial;
  let semanas = 0;
  let historial = "";
  let mensaje = "";

  // MISIÓN 1: escribe aquí el while.

  // MISIÓN 2: escribe aquí el if...else.

  // MISIÓN 3: escribe aquí el for que crea historial.

  document.getElementById("resultado").textContent = mensaje;
  document.getElementById("semanasResultado").textContent = semanas;
  document.getElementById("totalResultado").textContent = total.toFixed(2) + " €";
  document.getElementById("historial").textContent = historial;
}`;

const whileSolution=`while (total < objetivo && semanas < maxSemanas) {
  total += semanal;
  semanas++;
}`;
const ifSolution=`if (total >= objetivo) {
  mensaje = "¡Objetivo conseguido!";
} else {
  mensaje = "No has alcanzado tu objetivo.";
}`;
const forSolution=`if (semanas === 0) {
  historial = "El objetivo ya estaba conseguido.";
} else {
  let ahorroHistorial = inicial;

  for (let i = 1; i <= semanas; i++) {
    ahorroHistorial += semanal;
    historial += "Semana " + i + ": " + ahorroHistorial + " €\n";
  }
}`;
const fullSolution=`function calcularAhorro() {
  const inicialTexto = document.getElementById("inicial").value;
  const semanalTexto = document.getElementById("semanal").value;
  const objetivoTexto = document.getElementById("objetivo").value;
  const maxSemanasTexto = document.getElementById("maxSemanas").value;
  const inicial = Number(inicialTexto);
  const semanal = Number(semanalTexto);
  const objetivo = Number(objetivoTexto);
  const maxSemanas = Number(maxSemanasTexto);

  if (inicialTexto.trim() === "" || semanalTexto.trim() === "" || objetivoTexto.trim() === "" || maxSemanasTexto.trim() === "" || !Number.isFinite(inicial) || !Number.isFinite(semanal) || !Number.isFinite(objetivo) || !Number.isInteger(maxSemanas) || inicial < 0 || semanal <= 0 || objetivo <= 0 || maxSemanas < 1 || maxSemanas > 520) {
    document.getElementById("resultado").textContent = "Revisa los datos introducidos.";
    document.getElementById("semanasResultado").textContent = "—";
    document.getElementById("totalResultado").textContent = "—";
    document.getElementById("historial").textContent = "";
    return;
  }

  let total = inicial;
  let semanas = 0;
  let historial = "";
  let mensaje = "";

  while (total < objetivo && semanas < maxSemanas) {
    total += semanal;
    semanas++;
  }

  if (total >= objetivo) {
    mensaje = "¡Objetivo conseguido!";
  } else {
    mensaje = "No has alcanzado tu objetivo.";
  }

  if (semanas === 0) {
    historial = "El objetivo ya estaba conseguido.";
  } else {
    let ahorroHistorial = inicial;
    for (let i = 1; i <= semanas; i++) {
      ahorroHistorial += semanal;
    historial += "Semana " + i + ": " + ahorroHistorial + " €\n";
    }
  }

  document.getElementById("resultado").textContent = mensaje;
  document.getElementById("semanasResultado").textContent = semanas;
  document.getElementById("totalResultado").textContent = total.toFixed(2) + " €";
  document.getElementById("historial").textContent = historial;
}`;

export default function SavingsChallengeLesson(){return <>
  <p className="jsm-subtitle">Construye un simulador que calcule cuántas semanas necesitas para alcanzar un objetivo económico.</p>
  <Goal>Aplicar variables, operadores, condiciones, <code>while</code>, <code>for</code>, contador, acumulador y resultados visibles en una aplicación completa.</Goal>
  <section className="jsm-section"><h2>¿Qué vas a construir?</h2><p>La aplicación recibe dinero inicial, ahorro semanal, objetivo y un máximo de semanas. Al pulsar el botón, JavaScript simula cada semana, se detiene al conseguir la meta o al agotar el límite y muestra también un historial.</p><div className="jsm-flow"><span>inputs</span><b>→</b><span>while calcula semanas</span><b>→</b><span>if decide el mensaje</span><b>→</b><span>for crea historial</span></div><p>Recibirás tres archivos preparados. No necesitas diseñar la interfaz ni crear la función o el botón: trabajarás solo en los tres apartados señalados de <code>app.js</code>.</p></section>
  <section className="jsm-section"><h2>Prepara los archivos</h2><Code>{`mi-reto-ahorro/\n├── ahorro.html\n├── styles.css\n└── app.js`}</Code><p>Guárdalos en la misma carpeta. El HTML conecta el CSS y <code>app.js</code> usando <code>defer</code>. El botón ya ejecuta <code>calcularAhorro()</code>.</p><details><summary>Copiar ahorro.html</summary><Code>{html}</Code></details><details><summary>Copiar styles.css</summary><Code>{css}</Code></details><details><summary>Copiar app.js inicial</summary><Code>{starter}</Code></details></section>
  <Mission title="Misión 1 · Simula el ahorro con while" conceptHint="La repetición solo debe continuar si todavía falta dinero y aún quedan semanas disponibles. total es el acumulador; semanas es el contador." syntaxHint={'while (total < objetivo && semanas < maxSemanas) {\n  total += semanal;\n  semanas++;\n}'} solution={whileSolution} reasoning="while es apropiado porque la simulación termina al cumplirse una condición: alcanzar la meta o llegar al máximo. Si el dinero inicial ya alcanza el objetivo, la condición es falsa desde el inicio y no hay ninguna vuelta."><p><strong>Qué vas a conseguir:</strong> calcular el total y las semanas usadas. En <code>app.js</code>, completa «MISIÓN 1».</p><ol><li>Escribe un <code>while</code> con las dos condiciones.</li><li>Dentro, suma <code>semanal</code> a <code>total</code>.</li><li>Aumenta <code>semanas</code> una unidad.</li></ol><p><strong>Comprueba:</strong> con inicial 40, semanal 15, objetivo 250 y máximo 20, deben resultar 14 semanas y 250 €.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Semana</th><th>Total después de ahorrar</th></tr></thead><tbody><tr><td>1</td><td>55 €</td></tr><tr><td>2</td><td>70 €</td></tr><tr><td>…</td><td>…</td></tr><tr><td>14</td><td>250 €</td></tr></tbody></table></div></Mission>
  <Mission title="Misión 2 · Comprueba el objetivo" conceptHint="Después del while, total contiene el dinero final. Compara ese valor con objetivo para elegir uno de dos mensajes." syntaxHint={'if (total >= objetivo) {\n  mensaje = "...";\n} else {\n  mensaje = "...";\n}'} solution={ifSolution} reasoning="El bucle ya ha terminado, por lo que esta decisión solo necesita comprobar su resultado final. >= incluye el caso exacto de llegar al objetivo."><p><strong>Qué vas a conseguir:</strong> informar si se consiguió la meta. Completa «MISIÓN 2» con <code>if...else</code>.</p><p><strong>Comprueba:</strong> con máximo 20 se muestra «¡Objetivo conseguido!». Con máximo 10, el total es 190 € y se muestra «No has alcanzado tu objetivo.»</p></Mission>
  <Mission title="Misión 3 · Crea el historial con for" conceptHint="El while descubre cuántas semanas hicieron falta. El for vuelve a recorrer exactamente esas semanas para dibujar la evolución desde el dinero inicial." syntaxHint={'let ahorroHistorial = inicial;\nfor (let i = 1; i <= semanas; i++) {\n  ahorroHistorial += semanal;\n  historial += "Semana " + i + ": " + ahorroHistorial + " €\\n";\n}'} solution={forSolution} reasoning="El límite es semanas, no maxSemanas, porque el historial debe mostrar solo las semanas que se utilizaron realmente. ahorroHistorial es un acumulador separado para reconstruir la evolución sin modificar el resultado final."><p><strong>Qué vas a conseguir:</strong> listar el ahorro semana a semana. Completa «MISIÓN 3».</p><ol><li>Si <code>semanas === 0</code>, guarda «El objetivo ya estaba conseguido.»</li><li>En caso contrario, crea <code>ahorroHistorial</code> con el dinero inicial.</li><li>Usa un <code>for</code> desde 1 hasta <code>semanas</code>.</li><li>En cada vuelta suma el ahorro y añade una línea usando <code>\\n</code>.</li></ol><p><strong>Comprueba:</strong> la primera línea debe ser «Semana 1: 55 €» y la última «Semana 14: 250 €».</p></Mission>
  <section className="jsm-section"><h2>Misión 4 · Prueba tu aplicación</h2><p>Antes de pulsar el botón, predice el resultado. Después comprueba el mensaje, semanas, total e historial.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Inicial</th><th>Semanal</th><th>Objetivo</th><th>Máximo</th><th>Resultado</th></tr></thead><tbody><tr><td>40</td><td>15</td><td>250</td><td>20</td><td>14 semanas, 250 €, conseguido</td></tr><tr><td>0</td><td>10</td><td>50</td><td>10</td><td>5 semanas, 50 €, conseguido</td></tr><tr><td>10</td><td>5</td><td>100</td><td>8</td><td>8 semanas, 50 €, pendiente</td></tr><tr><td>120</td><td>10</td><td>100</td><td>10</td><td>0 semanas, 120 €, conseguido</td></tr></tbody></table></div><p>Prueba también campos vacíos, ahorro semanal 0, números negativos y un máximo de semanas no válido. La validación ya está resuelta: no la modifiques.</p></section>
  <section className="jsm-section"><h2>Reto extra · Sustituye while por for y break</h2><p>Esta ampliación es opcional. Un <code>for</code> puede recorrer el máximo de semanas y <code>break</code> puede detenerlo justo al alcanzar el objetivo. Comprueba primero que el objetivo no estaba alcanzado inicialmente.</p><details><summary>Pista</summary><Code>{`if (total < objetivo) {\n  for (let i = 1; i <= maxSemanas; i++) {\n    // suma, cuenta y comprueba\n  }\n}`}</Code></details><details><summary>Ver solución del reto</summary><Code>{`if (total < objetivo) {\n  for (let i = 1; i <= maxSemanas; i++) {\n    total += semanal;\n    semanas++;\n\n    if (total >= objetivo) {\n      break;\n    }\n  }\n}`}</Code><p><code>break</code> evita seguir sumando semanas una vez conseguida la meta.</p></details></section>
  <section className="jsm-section jsm-recap"><h2>Solución completa</h2><details><summary>Ver app.js completo</summary><Code>{fullSolution}</Code><p><code>total</code> acumula dinero; <code>semanas</code> cuenta vueltas. El <code>while</code> calcula cuándo parar, el <code>if</code> interpreta el resultado y el <code>for</code> construye las líneas del historial. Si el objetivo ya estaba conseguido, no se suma ninguna semana.</p></details></section>
</>}
