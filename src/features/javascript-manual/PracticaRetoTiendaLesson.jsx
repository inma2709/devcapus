const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;

export default function PracticaRetoTiendaLesson(){return <>
  <p className="jsm-subtitle">Crea una mini tienda y usa variables, operadores y JavaScript para mostrar resultados en una página real.</p>
  <section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>Calcular el importe de una compra, comprobar dos promociones y mostrar los resultados en HTML.</p></section>
  <section className="jsm-section"><h2>Qué vas a hacer</h2><p>Recibirás el HTML ya preparado. Tu trabajo consiste en crear <code>app.js</code>, declarar las variables, calcular los resultados y escribirlos en los <code>span</code> correspondientes.</p><div className="jsm-flow"><span>variables</span><b>→</b><span>cálculos y condiciones</span><b>→</b><span>Console</span><b>→</b><span>HTML</span></div><aside className="jsm-callout"><h3>Importante</h3><p>No calcules cuánto dinero se descuenta. Solo comprueba si el cliente cumple cada promoción: el resultado será <code>true</code> o <code>false</code>.</p></aside></section>
  <section className="jsm-section"><h2>1. HTML inicial</h2><p>Crea una carpeta para la práctica y guarda este archivo como <code>index.html</code>. Los <code>span</code> vacíos son los lugares donde aparecerán los resultados.</p><Code>{`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practicando operadores</title>
    <script src="app.js" defer></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Mi primera tienda con JavaScript</h1>
        <p>Vamos a utilizar variables y operadores para calcular el importe de una compra y comprobar si el cliente tiene derecho a descuentos.</p>
    </header>
    <main>
        <section>
            <h2>1. Calcula el precio de la compra</h2>
            <p>Nuestro cliente ha comprado:</p>
            <ul>
                <li>2 pantalones de 30 € cada uno.</li>
                <li>1 camiseta de 15 €.</li>
            </ul>
            <p>Declara las variables necesarias en JavaScript y calcula el importe total de los productos.</p>
            <p class="resultado">El importe de la compra es: <strong><span id="total"></span> €</strong></p>
        </section>
        <section>
            <h2>2. Añade los gastos de envío</h2>
            <p>La tienda cobra 5 € de gastos de envío por cada pedido.</p>
            <p class="resultado">El total con gastos de envío es: <strong><span id="totalConEnvio"></span> €</strong></p>
        </section>
        <section>
            <h2>3. Comprueba si tiene descuento</h2>
            <p>Hay descuento si el importe de productos supera 100 € o si compra más de 3 artículos.</p>
            <p class="resultado">¿Tiene derecho al descuento? <strong><span id="descuento"></span></strong></p>
        </section>
        <section>
            <h2>4. Comprueba el descuento adicional</h2>
            <p>Hay descuento adicional si pertenece al club de fidelidad y hoy es viernes.</p>
            <p>Para esta compra, el cliente pertenece al club de fidelidad y hoy es viernes.</p>
            <p class="resultado">¿Tiene derecho al descuento adicional? <strong><span id="descuentoAdicional"></span></strong></p>
        </section>
        <section>
            <h2>5. Comprueba tu programa</h2>
            <p>Declara las variables, realiza los cálculos, comprueba las promociones y muestra los resultados con <code>getElementById()</code> y <code>textContent</code>.</p>
        </section>
        <section>
            <h2>Para seguir practicando</h2>
            <p>Modifica las cantidades, precios y datos del cliente para conseguir que los dos descuentos devuelvan true. Después cambia un dato para que el descuento adicional devuelva false.</p>
        </section>
    </main>
</body>
</html>`}</Code></section>
  <section className="jsm-section"><h2>Estilos opcionales</h2><p>Si quieres aplicar el diseño propuesto, crea <code>styles.css</code> en la misma carpeta. Puedes desplegar este bloque y copiarlo; el trabajo de JavaScript es tuyo.</p><details><summary>Ver estilos sugeridos · <code>styles.css</code></summary><Code>{`/* Estilos generales */
:root {
    --primary-color: #042054;
    --secondary-color: #db17cb;
    --background-color: #f3f5f9;
    --text-color: #273449;
    --result-background-color: #edf4ff;
    --result-border-color: #3174c7;
}

body {
    margin: 10px auto;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    border: 1px solid #253b63;
    width: 80%;
    text-align: center;
}

/* Cabecera */
header {
    background-color: var(--primary-color);
    color: white;
    text-align: center;
    padding: 35px 20px;
    border-bottom: 3px solid var(--secondary-color);
    border-top: 1px solid var(--secondary-color);
}

header h1 { margin: 0 0 10px; }
header p { margin: 0; }

/* Contenido principal */
main {
    max-width: 850px;
    margin: 30px auto;
    padding: 0 20px;
}

/* Secciones */
section {
    background-color: white;
    padding: 25px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid #e0e5ed;
}

h2 {
    color: var(--secondary-color);
    margin-top: 0;
    font-size: 1.3rem;
}

/* Listas */
li {
    margin-bottom: 8px;
    list-style-type: none;
}

/* Resultados */
.resultado {
    background-color: var(--result-background-color);
    padding: 15px;
    border-left: 4px solid var(--result-border-color);
    border-radius: 5px;
}

span {
    font-weight: bold;
    color: var(--primary-color);
}

/* Adaptación a móviles */
@media (max-width: 600px) {
    main {
        margin: 15px auto;
        padding: 0 12px;
    }

    section { padding: 18px; }
    header { padding: 25px 15px; }
}`}</Code></details></section>
  <section className="jsm-section"><h2>2. Crea <code>app.js</code></h2><p>El HTML ya conecta <code>app.js</code> con <code>defer</code>. Crea ese archivo y escribe tú el JavaScript: no hay solución para copiar.</p><ol><li>Declara variables para la cantidad y precio de los pantalones, el precio de la camiseta y los gastos de envío.</li><li>Calcula el importe de los productos. Recuerda que hay dos pantalones.</li><li>Suma los gastos de envío y obtén un segundo total.</li><li>Calcula cuántos artículos se han comprado.</li><li>Crea un booleano para el primer descuento: superar 100 € <strong>o</strong> comprar más de 3 artículos.</li><li>Declara los booleanos de club de fidelidad y viernes, y crea el resultado del descuento adicional usando «y».</li><li>Muestra los cuatro resultados en <code>total</code>, <code>totalConEnvio</code>, <code>descuento</code> y <code>descuentoAdicional</code>.</li></ol></section>
  <section className="jsm-section"><h2>3. Calcula, comprueba y muestra</h2><div className="jsm-grid"><section><h3>Calcula</h3><p>Usa variables y operadores para obtener los dos importes y los dos booleanos.</p></section><section><h3>Comprueba</h3><p>Usa <code>console.log()</code> para revisar los resultados en Console.</p></section><section><h3>Muestra</h3><p>Usa <code>getElementById()</code> y <code>textContent</code> para colocarlos en el HTML.</p></section></div><aside className="jsm-callout"><h3>Orden recomendado</h3><p>Primero calcula. Después comprueba en Console. Cuando los valores sean correctos, muéstralos en la página.</p></aside></section>
  <section className="jsm-section jsm-challenge"><h2>4. Pistas de revisión</h2><details><summary>Ver pistas</summary><ul><li>El importe de los productos no incluye todavía los gastos de envío.</li><li>El primer descuento necesita al menos una condición verdadera: usa <code>||</code>.</li><li>El descuento adicional necesita sus dos condiciones verdaderas: usa <code>&amp;&amp;</code>.</li><li>Los ids del JavaScript deben coincidir exactamente con los ids del HTML.</li></ul></details><p>Con los valores iniciales, revisa primero los resultados en Console y después comprueba que aparecen en cada <code>span</code>.</p></section>
  <section className="jsm-section jsm-challenge"><h2>Reto final</h2><p>Consigue que los dos descuentos sean <code>true</code>. Después cambia un solo dato para que el descuento adicional pase a <code>false</code>, sin alterar el primer descuento.</p><p>Explica qué dato cambiaste y por qué el operador lógico produce un resultado distinto.</p></section>
  <section className="jsm-next"><h2>Lo siguiente</h2><p>En el bloque de decisiones aprenderás a usar <code>if</code> para convertir estos booleanos en mensajes útiles para la persona usuaria.</p></section>
</>}
