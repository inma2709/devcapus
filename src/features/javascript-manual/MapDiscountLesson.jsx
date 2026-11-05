const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Activity=({children})=><section className="jsm-section jsm-challenge">{children}</section>;

export default function MapDiscountLesson(){return <><p className="jsm-subtitle">¿Cómo podemos guardar los precios con descuento en otro array sin modificar los precios originales?</p><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>Distinguir calcular y mostrar descuentos con <code>forEach()</code>, modificar una lista con <code>for</code> y crear otra lista mediante <code>map()</code>.</p></section><section className="jsm-section"><h2>La situación B: conservar originales y guardar rebajados</h2><p>Reiniciamos el ejemplo para no aplicar el descuento dos veces. Ahora no queremos modificar <code>precios</code>: necesitamos otra lista para los nuevos importes.</p><Code>{`let precios = [10, 20, 50];

let preciosConDescuento = precios.map(function(precio) {
  return precio * 0.90;
});

console.log(precios);
// [10, 20, 50]

console.log(preciosConDescuento);
// [9, 18, 45]`}</Code><p><code>map()</code> recibe una función porque necesita saber qué nuevo valor debe producir para cada elemento. La función se ejecuta tres veces; <code>precio</code> recibe 10, 20 y 50. Cada <code>return</code> entrega el valor que se coloca en el nuevo array.</p><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Vuelta</th><th>precio</th><th>return</th><th>preciosConDescuento</th></tr></thead><tbody><tr><td>1</td><td>10</td><td>9</td><td>[9]</td></tr><tr><td>2</td><td>20</td><td>18</td><td>[9, 18]</td></tr><tr><td>3</td><td>50</td><td>45</td><td>[9, 18, 45]</td></tr></tbody></table></div><p>El original sigue igual porque no asignamos nada en sus posiciones. <code>forEach()</code> sirve para realizar una acción, como mostrar descuentos; <code>map()</code> es apropiado cuando necesitamos guardar el resultado de cada transformación.</p></section><section className="jsm-section"><h2>Tres necesidades, tres resultados</h2><div className="jsm-table-wrap"><table className="jsm-table"><thead><tr><th>Herramienta</th><th>Qué hacemos</th><th>Resultado</th></tr></thead><tbody><tr><td><code>forEach()</code></td><td>Calcular y mostrar cada descuento</td><td>El array original sigue igual</td></tr><tr><td><code>for</code> con índices</td><td>Calcular y guardar en cada posición</td><td>El original se modifica</td></tr><tr><td><code>map()</code></td><td>Calcular y devolver cada nuevo precio</td><td>Se crea otro array</td></tr></tbody></table></div><div className="jsm-flow"><span>forEach: [10, 20, 50]</span><b>→</b><span>muestra 9, 18, 45</span><b>→</b><span>original igual</span></div><div className="jsm-flow"><span>for: [10, 20, 50]</span><b>→</b><span>guarda en índices</span><b>→</b><span>[9, 18, 45]</span></div><div className="jsm-flow"><span>map: [10, 20, 50]</span><b>→</b><span>return de cada descuento</span><b>→</b><span>nuevo [9, 18, 45]</span></div><p><code>forEach()</code> también puede modificar elementos si programamos asignaciones dentro de su función. <code>map()</code> tampoco impide otros cambios, aunque su uso habitual sea crear una lista transformada.</p></section><Activity><h2>Actividad · Guardar precios rebajados</h2><p><strong>Enunciado:</strong> crea y muestra otro array con el descuento del 10 %, conservando <code>precios</code>.</p><details><summary>Pista</summary><p>Con <code>map()</code> debes devolver cada precio multiplicado por <code>0.90</code> y guardar el resultado en otra variable.</p></details><details><summary>Ver solución explicada</summary><Code>{`let precios = [10, 20, 50];

let preciosConDescuento = precios.map(function(precio) {
  return precio * 0.90;
});

console.log(precios);              // [10, 20, 50]
console.log(preciosConDescuento);  // [9, 18, 45]`}</Code><p><strong>Por qué funciona:</strong> <code>map()</code> construye una lista nueva con los valores devueltos; <code>precios</code> nunca recibe una asignación.</p></details></Activity></>}
