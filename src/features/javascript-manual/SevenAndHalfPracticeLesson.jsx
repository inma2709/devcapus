const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Step=({title,children,solution,why})=><section className="jsm-section jsm-challenge"><h2>{title}</h2>{children}<details><summary>Ver solución explicada</summary><Code>{solution}</Code><p><strong>Por qué funciona:</strong> {why}</p></details></section>;

const css=`body { background-color: #f3f0e6; color: #1e2a20; font-family: Arial, sans-serif; margin: 0; padding: 24px; text-align: center; }
.juego { background-color: #0d4a32; border: 4px solid #d7b85b; border-radius: 16px; color: white; margin: 0 auto; max-width: 620px; padding: 24px; }
.puntuacion, #resultado { background-color: #ffffff; border-radius: 8px; color: #1e2a20; margin: 12px 0; padding: 12px; }
button { border: 0; border-radius: 6px; cursor: pointer; font-family: Arial, sans-serif; margin: 6px; padding: 10px 14px; }
.pedir { background-color: #f4d35e; } .plantar { background-color: #f39c6b; } .nueva { background-color: #b9e3c6; } button:hover { background-color: #ffffff; }`;

const html=`<main class="juego">
  <h1>Juego de las siete y media</h1>
  <p id="cartaJugador">Tu última carta: —</p>
  <p id="puntosJugador" class="puntuacion">Tus puntos: 0</p>
  <p id="cartaBanca">Carta de la banca: —</p>
  <p id="puntosBanca" class="puntuacion">Puntos de la banca: 0</p>
  <p id="resultado">La partida está preparada.</p>
  <button class="pedir" onclick="pedirCarta()">Pedir carta</button>
  <button class="plantar" onclick="plantarse()">Plantarse</button>
  <button class="nueva" onclick="nuevaPartida()">Nueva partida</button>
</main>`;

const app=`let puntosJugador = 0;
let puntosBanca = 0;
let partidaActiva = true;

// Pide una carta para el jugador y actualiza sus puntos.
function pedirCarta() {
  if (!partidaActiva) {
    return;
  }

  const carta = Math.floor(Math.random() * 10) + 1;
  let valor;
  if (carta <= 7) {
    valor = carta;
  } else {
    valor = 0.5;
  }

  puntosJugador += valor;
  document.getElementById("cartaJugador").textContent = "Tu última carta: " + carta;
  document.getElementById("puntosJugador").textContent = "Tus puntos: " + puntosJugador;

  if (puntosJugador > 7.5) {
    plantarse();
  }
}

// Compara los puntos y devuelve el resultado.
function comprobarGanador(jugador, banca) {
  // Si el jugador supera 7,5, pierde.
  if (jugador > 7.5) {
    return "Has superado 7,5. Gana la banca.";
  }

  // Si la banca supera 7,5, gana el jugador.
  if (banca > 7.5) {
    return "¡Ganas la partida!";
  }

  // Si el jugador tiene más puntos, gana.
  if (jugador > banca) {
    return "¡Ganas la partida!";
  }

  // Si la banca tiene más puntos o hay empate, gana la banca.
  return "Gana la banca.";
}

// Da una única carta a la banca y termina la partida.
function plantarse() {
  if (!partidaActiva) {
    return;
  }

  const carta = Math.floor(Math.random() * 10) + 1;
  let valor;
  if (carta <= 7) {
    valor = carta;
  } else {
    valor = 0.5;
  }

  puntosBanca = valor;
  document.getElementById("cartaBanca").textContent = "Carta de la banca: " + carta;
  document.getElementById("puntosBanca").textContent = "Puntos de la banca: " + puntosBanca;
  const mensaje = comprobarGanador(puntosJugador, puntosBanca);
  document.getElementById("resultado").textContent = mensaje;

  partidaActiva = false;
}

// Reinicia los datos de la partida actual.
function nuevaPartida() {
  puntosJugador = 0;
  puntosBanca = 0;
  partidaActiva = true;
  document.getElementById("cartaJugador").textContent = "Tu última carta: —";
  document.getElementById("puntosJugador").textContent = "Tus puntos: 0";
  document.getElementById("cartaBanca").textContent = "Carta de la banca: —";
  document.getElementById("puntosBanca").textContent = "Puntos de la banca: 0";
  document.getElementById("resultado").textContent = "Nueva partida preparada.";
}`;

export default function SevenAndHalfPracticeLesson(){return <>
  <p className="jsm-subtitle">Actividad práctica breve para aplicar funciones, <code>return</code>, condicionales y números aleatorios.</p>
  <section className="jsm-goal"><h2>Actividad 13 · Juego de las siete y media</h2><p>Vas a crear un juego de cartas contra el ordenador utilizando JavaScript.</p></section>
  <section className="jsm-section"><h2>Reglas</h2><ul><li>Las cartas van del 1 al 10. Del 1 al 7 valen su número; 8, 9 y 10 valen medio punto.</li><li>Puedes pedir más cartas o plantarte. Cuando termina tu turno, la banca recibe una sola carta.</li><li>Gana quien tenga más puntos sin superar 7,5. Si hay empate, gana la banca.</li></ul><p><strong>Tu programa debe permitir:</strong> pedir cartas y sumar puntos, plantarte y conocer el resultado, y comenzar otra partida.</p><p>Crearás <code>index.html</code> y <code>app.js</code>. El CSS ya está preparado.</p><details><summary>Copiar styles.css</summary><Code>{css}</Code></details></section>

  <Step title="Paso 1 · Crear la pantalla del juego" solution={html} why="Cada ID es único y permite actualizar el texto correcto. Los botones usan onclick para llamar a las funciones."><p><strong>Qué debes hacer:</strong> crea el título, carta y puntuación del jugador, carta y puntuación de la banca, resultado y tres botones.</p><p>Usa estos IDs: <code>cartaJugador</code>, <code>puntosJugador</code>, <code>cartaBanca</code>, <code>puntosBanca</code> y <code>resultado</code>. Los botones llaman a <code>pedirCarta()</code>, <code>plantarse()</code> y <code>nuevaPartida()</code>.</p><details><summary>Pista</summary><p>Un párrafo inicial puede escribirse como <code>&lt;p id="puntosJugador"&gt;Tus puntos: 0&lt;/p&gt;</code>.</p></details><p><strong>Comprueba:</strong> se ve la mesa y los tres botones.</p></Step>

  <Step title="Paso 2 · Programar las funciones del juego" solution={app} why="Solo hay cuatro funciones. pedirCarta y plantarse generan sus cartas donde las necesitan; comprobarGanador compara y devuelve texto; nuevaPartida prepara el siguiente turno."><p><strong>Qué debes hacer:</strong> declara <code>puntosJugador</code>, <code>puntosBanca</code> y <code>partidaActiva</code>. Crea únicamente <code>pedirCarta()</code>, <code>comprobarGanador(jugador, banca)</code>, <code>plantarse()</code> y <code>nuevaPartida()</code>.</p><p>Al pedir carta usa <code>Math.floor(Math.random() * 10) + 1</code> y un <code>if...else</code> para sumar carta o 0,5. Si superas 7,5, llama a <code>plantarse()</code>. Esta función da una carta a la banca y muestra el mensaje final.</p><details><summary>Pista</summary><p>Guarda el texto de <code>comprobarGanador()</code> en una variable antes de escribirlo con <code>textContent</code>.</p></details><p><strong>Comprueba:</strong> las figuras suman 0,5; al acabar aparece una sola carta de banca y pedir carta deja de cambiar los puntos.</p></Step>

  <Step title="Paso 3 · Nueva partida" solution={`function nuevaPartida() {
  puntosJugador = 0;
  puntosBanca = 0;
  partidaActiva = true;
  document.getElementById("cartaJugador").textContent = "Tu última carta: —";
  document.getElementById("puntosJugador").textContent = "Tus puntos: 0";
  document.getElementById("cartaBanca").textContent = "Carta de la banca: —";
  document.getElementById("puntosBanca").textContent = "Puntos de la banca: 0";
  document.getElementById("resultado").textContent = "Nueva partida preparada.";
}`} why="Una nueva partida necesita reiniciar las variables y los textos que representan su estado anterior."><p><strong>Qué debes hacer:</strong> reinicia los puntos, reactiva el juego y limpia las cartas y el resultado anteriores.</p><details><summary>Pista</summary><p>La variable que bloquea pedir más cartas debe volver a <code>true</code>.</p></details><p><strong>Comprueba:</strong> termina una partida, pulsa Nueva partida y vuelve a pedir carta. Los puntos deben empezar otra vez en 0.</p></Step>

  <section className="jsm-section jsm-recap"><h2>Solución completa · Consulta al terminar</h2><p>La solución incluye exactamente cuatro funciones y coincide con los tres pasos.</p><details><summary>Ver index.html completo</summary><Code>{`<!doctype html>
<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Siete y media</title><link rel="stylesheet" href="styles.css"><script src="app.js" defer></script></head><body>
${html}
</body></html>`}</Code></details><details><summary>Ver app.js completo</summary><Code>{app}</Code></details><p><strong>Reto opcional:</strong> cuando domines el juego, añade por tu cuenta contadores de victorias y derrotas.</p></section>
</>}
