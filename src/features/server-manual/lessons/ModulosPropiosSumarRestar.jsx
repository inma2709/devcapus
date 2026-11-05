import CodeExample from '../components/CodeExample';
import KnowledgeCheck from '../components/KnowledgeCheck';
import LessonLayout from '../components/LessonLayout';
import Practice from '../components/Practice';

const suma = `// sumar.js
export function sumar(a, b) {
  return a + b;
}

// app.js
import { sumar } from './sumar.js';

const resultado = sumar(4, 7);
console.log('Resultado de la suma:', resultado);`;

export default function ModulosPropiosSumarRestar({ chapter }) {
  return <LessonLayout chapter={chapter}>
    <section className="mt-10 space-y-7 text-lg leading-8 text-slate-700">
      <h2 className="text-3xl font-bold text-brand-purple">Un módulo propio es código que decides reutilizar</h2>
      <p>Un módulo propio es un archivo JavaScript creado por ti que ofrece una función, un dato o una clase a otros archivos del mismo proyecto. En vez de repetir una operación cada vez que la necesitas, la defines una vez, la exportas y la importas donde haga falta.</p>
      <h2 className="text-3xl font-bold text-brand-purple">Primero exportamos; después importamos</h2>
      <p><code>export</code> hace visible una función fuera de su archivo. <code>import</code> pide esa exportación mediante una ruta relativa. La extensión <code>.js</code> es necesaria en importaciones relativas de ES Modules para Node. El archivo <code>app.js</code> no conoce cómo se calcula la suma: solo coordina el programa y muestra el resultado.</p>
      <CodeExample file="sumar.js y app.js" output={'Resultado de la suma: 11'}>{suma}</CodeExample>
      <ol className="list-decimal space-y-2 pl-6"><li>Crea una carpeta vacía y ejecuta <code>npm init -y</code>.</li><li>Añade <code>"type": "module"</code> a <code>package.json</code>.</li><li>Crea <code>sumar.js</code> y <code>app.js</code> con el ejemplo.</li><li>Ejecuta <code>node app.js</code>.</li></ol>
      <h2 className="text-3xl font-bold text-brand-purple">Entendemos el recorrido</h2>
      <p>Node empieza en <code>app.js</code>. Al encontrar <code>import</code>, carga <code>sumar.js</code>, obtiene la función exportada y vuelve a <code>app.js</code>. Solo al llamar <code>sumar(4, 7)</code> se ejecuta el <code>return a + b</code>. Exportar una función no la ejecuta automáticamente.</p>
      <h2 className="text-3xl font-bold text-brand-purple">CommonJS como lectura de compatibilidad</h2>
      <p>En proyectos antiguos podrías encontrar <code>module.exports = sumar</code> y <code>require('./sumar.cjs')</code>. Es CommonJS. Funciona, pero los ejercicios nuevos de este manual usan ESM y no mezclan ambas sintaxis en los mismos archivos.</p>
    </section>
    <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-slate-700"><h2 className="text-2xl font-bold text-brand-purple">Errores frecuentes</h2><ul className="mt-4 list-disc space-y-2 pl-5"><li><strong>Cannot use import statement outside a module:</strong> añade <code>"type": "module"</code> al proyecto.</li><li><strong>Cannot find module:</strong> comprueba <code>./</code>, la extensión <code>.js</code> y el nombre exacto.</li><li><strong>does not provide an export named:</strong> el nombre importado entre llaves no coincide con el exportado.</li></ul></section>
    <Practice title="Nivel 1 - El módulo sumar" checks={['sumar.js contiene una exportación nombrada.', 'app.js importa sumar.', 'La terminal muestra 11.', 'Has probado otros valores.']} hints={<p>Escribe primero <code>export function sumar(a, b)</code>. No olvides <code>return</code>.</p>} solution={<p>La solución es el ejemplo principal: <code>sumar.js</code> exporta y <code>app.js</code> importa mediante <code>./sumar.js</code>.</p>}> <p>Reproduce el ejemplo y predice qué resultado aparecerá antes de ejecutar.</p></Practice>
    <Practice kind="Nivel 2 - Semiguiado" title="El módulo restar" checks={['Existe restar.js.', 'La función devuelve a - b.', 'app.js importa sumar y restar.', 'Ambos resultados son correctos.']} hints={<p>Copia la estructura de <code>sumar.js</code> y cambia solamente la operación devuelta.</p>} solution={<p><code>restar.js</code> exporta <code>{'function restar(a, b) { return a - b; }'}</code>. Importa el nombre exacto desde <code>app.js</code>.</p>}> <p>Crea un módulo para restar y úsalo junto con el de sumar.</p></Practice>
    <Practice kind="Nivel 3 - Autónomo" title="Mini calculadora modular" checks={['Hay tres módulos de operaciones.', 'Cada archivo tiene una responsabilidad.', 'app.js coordina las llamadas.', 'Explicas la diferencia entre ESM y CommonJS.']} hints={<p>Añade una operación sin duplicar el cálculo en <code>app.js</code>. Diseña primero los nombres de los archivos.</p>} solution={<p>Separa sumar, restar y multiplicar en módulos. <code>app.js</code> importa los tres y presenta los resultados. ESM usa <code>import/export</code>; CommonJS usa <code>require/module.exports</code>.</p>}> <p>Añade multiplicación y escribe una comparación breve entre los dos sistemas de módulos.</p></Practice>
    <KnowledgeCheck title="Módulos propios" questions={[{ id: 'export', question: '¿Qué hace export?', options: ['Hace disponible un valor para otro archivo', 'Ejecuta siempre la función', 'Instala una dependencia'], answer: 'Hace disponible un valor para otro archivo', feedback: 'La función se ejecuta solo cuando otro código la llama.' }, { id: 'extension', question: '¿Qué debe aparecer en una importación relativa ESM de Node?', options: ['La extensión .js', 'El puerto 3000', 'Una URL HTTP'], answer: 'La extensión .js', feedback: 'Node necesita resolver el archivo concreto de la importación relativa.' }]} />
  </LessonLayout>;
}
