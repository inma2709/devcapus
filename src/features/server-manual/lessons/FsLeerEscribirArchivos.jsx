import CodeExample from '../components/CodeExample';
import KnowledgeCheck from '../components/KnowledgeCheck';
import LessonLayout from '../components/LessonLayout';
import Practice from '../components/Practice';

const lectura = `import fs from 'node:fs';

fs.readFile('datos.txt', 'utf8', (error, contenido) => {
  if (error) {
    console.error('No se pudo leer:', error.message);
    return;
  }

  console.log(contenido);
});`;

const escritura = `import { appendFile, writeFile } from 'node:fs/promises';

await writeFile('citas.txt', '09:00 - Ana - Corte\\n', 'utf8');
await appendFile('citas.txt', '10:00 - Luis - Peinado\\n', 'utf8');

console.log('Archivo actualizado.');`;

export default function FsLeerEscribirArchivos({ chapter }) {
  return <LessonLayout chapter={chapter}>
    <section className="mt-10 space-y-7 text-lg leading-8 text-slate-700">
      <h2 className="text-3xl font-bold text-brand-purple">Guardar datos fuera de las variables</h2>
      <p>Las variables desaparecen cuando termina <code>node app.js</code>. El sistema de archivos permite conservar notas, registros y configuraciones. <code>node:fs</code> es un módulo nativo: forma parte de Node y no se instala con npm. Antes de usar JSON o una base de datos, trabajaremos con texto para ver con claridad qué se lee y qué se escribe.</p>
      <h2 className="text-3xl font-bold text-brand-purple">Leer un archivo con fs.readFile</h2>
      <p>Acceder al disco puede tardar. <code>readFile</code> inicia la lectura y Node llama al callback cuando acaba. El primer parámetro es un posible error; el segundo contiene el resultado. La codificación <code>utf8</code> convierte los bytes en texto legible.</p>
      <CodeExample file="leer-archivo.js" output={'Primera nota del gestor de citas.'}>{lectura}</CodeExample>
      <ol className="list-decimal space-y-2 pl-6"><li>Crea <code>practica-fs</code>.</li><li>Dentro crea <code>datos.txt</code> con una frase.</li><li>Guarda el ejemplo como <code>leer-archivo.js</code>.</li><li>Desde esa carpeta ejecuta <code>node leer-archivo.js</code>.</li></ol>
      <p>Prueba a renombrar <code>datos.txt</code>. Debe aparecer el mensaje de error, sin intentar mostrar un contenido inexistente. Esta comprobación no es opcional: una ruta incorrecta es una situación habitual al trabajar con archivos.</p>
      <h2 className="text-3xl font-bold text-brand-purple">Crear, sustituir y añadir</h2>
      <p><code>writeFile</code> crea un archivo nuevo o sustituye todo lo que ya contiene. <code>appendFile</code> añade texto al final y conserva las líneas anteriores. Por eso un registro de citas suele necesitar <code>appendFile</code>, mientras que una exportación completa puede usar <code>writeFile</code>.</p>
      <CodeExample file="guardar-citas.js" output={'Archivo actualizado.'}>{escritura}</CodeExample>
      <p>La versión de promesas de <code>node:fs</code> permite usar <code>await</code>. Como este manual usa ES Modules, el ejemplo puede emplear top-level await. Tras ejecutarlo, abre <code>citas.txt</code>: debe tener dos líneas. Ejecutarlo otra vez reinicia la primera con <code>writeFile</code> y vuelve a añadir la segunda.</p>
      <h2 className="text-3xl font-bold text-brand-purple">Dos estilos, la misma espera</h2>
      <p>El callback recibe el resultado cuando termina la lectura. <code>await</code> expresa que el módulo necesita el resultado antes de continuar en ese punto. Los dos estilos son asíncronos: no convierten el acceso al disco en una tarea instantánea.</p>
    </section>
    <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-slate-700"><h2 className="text-2xl font-bold text-brand-purple">Errores frecuentes</h2><ul className="mt-4 list-disc space-y-2 pl-5"><li><strong>ENOENT:</strong> no existe el archivo o la carpeta. Comprueba desde qué carpeta ejecutas Node.</li><li><strong>El texto desaparece:</strong> se usó <code>writeFile</code> cuando se necesitaba <code>appendFile</code>.</li><li><strong>Contenido fuera del callback:</strong> se intenta usar un resultado antes de que termine la lectura.</li></ul></section>
    <Practice title="Nivel 1 - Leer un archivo" checks={['datos.txt está junto a leer-archivo.js.', 'La terminal muestra el texto.', 'Un archivo inexistente produce un mensaje claro.']} hints={<p>Importa <code>fs</code> desde <code>node:fs</code>. Dentro del callback, comprueba primero <code>error</code> y termina con <code>return</code>.</p>} solution={<p>Usa el patrón de <code>fs.readFile('datos.txt', 'utf8', callback)</code>. El contenido solo se muestra en la rama donde no hay error.</p>}> <p>Guarda la descripción de un servicio en <code>datos.txt</code>, léela desde Node y después registra qué ocurre al cambiar temporalmente el nombre del archivo.</p></Practice>
    <Practice kind="Nivel 2 - Semiguiado" title="Crear un archivo desde Node" checks={['registro.txt se crea desde el programa.', 'Incluye servicio, profesional y fecha.', 'Has comprobado el archivo fuera de la terminal.']} hints={<p>Importa <code>writeFile</code> desde <code>node:fs/promises</code>. Añade <code>try/catch</code> si encapsulas el código en una función async.</p>} solution={<p>Ejecuta <code>await writeFile('registro.txt', texto, 'utf8')</code>. Al repetir la ejecución el contenido se sustituye: es el comportamiento que debes comprobar y explicar.</p>}> <p>Crea <code>registro.txt</code> desde Node. Ejecútalo dos veces con textos distintos y explica por qué solo queda la última versión.</p></Practice>
    <Practice kind="Nivel 3 - Autónomo" title="Bitácora de citas con appendFile" checks={['Cada ejecución añade una línea.', 'Las citas previas se conservan.', 'Se usa un salto de línea.', 'Se gestiona un posible error.']} hints={<p>Construye una línea que termine en <code>\n</code>. Diseña antes qué información debe tener cada cita.</p>} solution={<p>Usa <code>appendFile</code> dentro de <code>try/catch</code>. A diferencia de <code>writeFile</code>, cada llamada agrega la cita al final.</p>}> <p>Ejecuta un programa tres veces para guardar tres citas. Abre el archivo final y comprueba que su orden coincide con las ejecuciones.</p></Practice>
    <KnowledgeCheck title="node:fs" questions={[{ id: 'native', question: '¿Por qué node:fs no requiere npm install?', options: ['Es un módulo nativo incluido con Node', 'Solo funciona en el navegador', 'writeFile lo descarga'], answer: 'Es un módulo nativo incluido con Node', feedback: 'Node entrega fs como parte de su API.' }, { id: 'overwrite', question: '¿Qué hace writeFile sobre un archivo existente?', options: ['Sustituye su contenido', 'Siempre añade al final', 'Lo convierte en JSON'], answer: 'Sustituye su contenido', feedback: 'appendFile es la API adecuada cuando debes conservar lo existente.' }, { id: 'callback', question: '¿Por qué el contenido se usa dentro del callback?', options: ['Porque la lectura termina después', 'Porque fs no admite variables', 'Porque solo lee números'], answer: 'Porque la lectura termina después', feedback: 'El callback recibe el resultado al finalizar la operación asíncrona.' }]} />
  </LessonLayout>;
}
