const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;

export default function ArrayIntroLesson(){return <>
  <p className="jsm-subtitle">Un array permite guardar varios valores relacionados dentro de una misma lista.</p>
  <section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>Crear un array sencillo y explicar por qué resulta más útil que crear muchas variables para datos relacionados.</p></section>
  <figure className="jsm-infographic"><img src="/recursos/guia-arrays-javascript.png" alt="Guía visual de arrays en JavaScript: listas de datos, índices, lectura, modificación, métodos y recorridos."/><figcaption>Guía visual de consulta: reúne las ideas que practicarás en el bloque de listas y arrays.</figcaption></figure>
  <section className="jsm-section"><h2>Una lista de datos relacionados</h2><Code>{"const alumno1 = \"Ana\";\nconst alumno2 = \"Luis\";\nconst alumno3 = \"Marta\";"}</Code><p>Estas tres variables guardan información parecida. Si la lista crece, resulta más claro agruparla en un array.</p><Code>{"const alumnos = [\"Ana\", \"Luis\", \"Marta\"];"}</Code><p>Los corchetes <code>[]</code> indican una lista y las comas separan cada elemento. En las próximas lecciones aprenderás a leer posiciones, modificar la lista y recorrerla.</p></section>
  <section className="jsm-next"><h2>Lo siguiente</h2><p>Para encontrar cada elemento dentro de un array necesitamos conocer su posición: el índice.</p></section>
</>}
