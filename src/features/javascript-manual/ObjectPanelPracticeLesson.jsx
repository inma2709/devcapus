const Code = ({ children }) => (
  <pre className="jsm-code">
    <code>{children}</code>
  </pre>
);
const Practice = ({ title, children, solution }) => (
  <section className="jsm-section jsm-challenge">
    <h2>{title}</h2>
    {children}
    <details>
      <summary>Ver solución</summary>
      <Code>{solution}</Code>
    </details>
  </section>
);

export default function ObjectPanelPracticeLesson() {
  return (
    <>
      <p className="jsm-subtitle">Actividad integradora · Panel de cursos</p>
      <section className="jsm-goal">
        <h2>Al terminar serás capaz de…</h2>
        <p>
          Consultar, modificar y mostrar un array de objetos usando las
          propiedades y recorridos que acabas de aprender.
        </p>
      </section>
      <section className="jsm-section">
        <h2>Situación</h2>
        <p>
          Un centro necesita consultar sus cursos. Cada curso es un objeto y el
          panel trabaja con varios cursos, así que usamos un array de objetos.
        </p>
        <Code>{`const cursos = [
  { nombre: "HTML", plazas: 8, activo: true },
  { nombre: "CSS", plazas: 0, activo: false },
  { nombre: "JavaScript", plazas: 5, activo: true }
];`}</Code>
        <p>
          Recuerda: <code>cursos[0]</code> devuelve el primer objeto y{" "}
          <code>cursos[0].nombre</code> devuelve su nombre.
        </p>
      </section>
      <Practice
        title="Misión 1 · Consulta un curso"
        solution={`console.log(cursos[0].nombre);
console.log(cursos[0].plazas); // 8`}
      >
        <p>
          Consulta el nombre y las plazas del primer curso. El resultado
          esperado es «HTML» y <code>8</code>.
        </p>
      </Practice>
      <Practice
        title="Misión 2 · Actualiza sus plazas"
        solution={`cursos[0].plazas = 7;
cursos[0].nivel = "inicial";
console.log(cursos[0]);`}
      >
        <p>
          Cambia las plazas de HTML a 7 y añade la propiedad <code>nivel</code>{" "}
          con el valor «inicial». Muestra el objeto completo.
        </p>
        <p>
          <strong>Pista:</strong> modificar una propiedad y añadir una nueva
          usan la misma sintaxis: <code>objeto.propiedad = valor</code>.
        </p>
      </Practice>
      <Practice
        title="Misión 3 · Recorre las propiedades"
        solution={`for (const propiedad in cursos[0]) {
  console.log(propiedad + ": " + cursos[0][propiedad]);
}`}
      >
        <p>
          Usa <code>for...in</code> para mostrar cada propiedad y su valor del
          primer curso. Como la clave está en la variable <code>propiedad</code>
          , utiliza corchetes.
        </p>
      </Practice>
      <Practice
        title="Misión 4 · Recorre todos los cursos"
        solution={`for (const curso of cursos) {
  console.log(curso.nombre + " · plazas: " + curso.plazas);
}`}
      >
        <p>
          Usa <code>for...of</code> para mostrar el nombre y las plazas de cada
          curso. Aquí <code>curso</code> contiene un objeto completo en cada
          vuelta.
        </p>
      </Practice>
      <section className="jsm-section jsm-challenge">
        <h2>Misión 5 · Muéstralo en HTML</h2>
        <p>
          Prepara un <code>&lt;div id="panel-cursos"&gt;</code> y crea una ficha
          controlada con el primer curso. Usa <code>textContent</code> para el
          nombre y las plazas. Si construyes una ficha con{" "}
          <code>innerHTML</code>, utiliza solo los datos preparados del
          ejercicio.
        </p>
        <Code>{`const panel = document.querySelector("#panel-cursos");
panel.textContent =
  cursos[0].nombre + " · Plazas: " + cursos[0].plazas;`}</Code>
        <p>
          Resultado esperado: <strong>HTML · Plazas: 7</strong>.
        </p>
      </section>
      <section className="jsm-section jsm-recap">
        <h2>Qué has consolidado</h2>
        <p>
          Has combinado objetos, arrays, punto, corchetes, asignación,{" "}
          <code>for...in</code>, <code>for...of</code> y{" "}
          <code>textContent</code>. Esta forma de representar datos será útil
          más adelante con el DOM, <code>localStorage</code>, JSON y datos de
          servicios externos.
        </p>
      </section>
    </>
  );
}
