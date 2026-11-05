import { useState } from 'react';

const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;

export function ArrowLessonAdditions(){
  const [answer,setAnswer]=useState('');
  return <><section className="jsm-section"><h2>Parámetros por defecto · ¿Qué ocurre si no enviamos un argumento?</h2><Code>{`function saludar(nombre = "Visitante") {
  console.log("Hola, " + nombre);
}

saludar("Ana"); // Hola, Ana
saludar();      // Hola, Visitante`}</Code><p>Un parámetro por defecto es el valor que JavaScript usa cuando no proporcionamos un argumento o enviamos <code>undefined</code>. Si enviamos un argumento, se usa el valor recibido.</p><Code>{`function calcularPrecio(precio, descuento = 0) {
  return precio - descuento;
}

console.log(calcularPrecio(100, 20)); // 80
console.log(calcularPrecio(100));     // 100`}</Code><details><summary>Micropráctica · Saludo personalizado</summary><p>Crea <code>presentarse()</code> para mostrar «Soy Ana» o, sin argumento, «Soy un estudiante de JavaScript».</p><Code>{`function presentarse(nombre = "un estudiante de JavaScript") {
  console.log("Soy " + nombre);
}

presentarse("Ana");
presentarse();`}</Code></details></section><section className="jsm-section"><h2>Comprueba las funciones flecha</h2><div className="jsm-challenge"><p><strong>¿Cuál es una función flecha correcta?</strong></p>{['const saludar = function => {}','const saludar = () => {}','function => saludar() {}'].map(option=><label key={option}><input type="radio" name="arrow" checked={answer===option} onChange={()=>setAnswer(option)}/> {option}</label>)}{answer&&<p aria-live="polite"><strong>{answer==='const saludar = () => {}'?'Correcto.':'Revisa la respuesta.'}</strong> La flecha aparece después de los paréntesis de parámetros.</p>}</div></section></>;
}
