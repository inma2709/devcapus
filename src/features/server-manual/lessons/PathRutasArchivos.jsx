import CodeExample from '../components/CodeExample';
import KnowledgeCheck from '../components/KnowledgeCheck';
import LessonLayout from '../components/LessonLayout';
import Practice from '../components/Practice';

const ejemplo = `import { appendFile, readFile } from 'node:fs/promises';
import path from 'node:path';

const archivo = path.join('datos', 'citas.txt');
const rutaAbsoluta = path.resolve(archivo);

await appendFile(archivo, '11:00 - Marta - Manicura\\n', 'utf8');
const contenido = await readFile(archivo, 'utf8');

console.log('Ruta absoluta:', rutaAbsoluta);
console.log(contenido);`;

export default function PathRutasArchivos({ chapter }) {
  return <LessonLayout chapter={chapter}>
    <section className="mt-10 space-y-7 text-lg leading-8 text-slate-700">
      <h2 className="text-3xl font-bold text-brand-purple">Una ruta de archivo no es una ruta HTTP</h2>
      <p><code>/servicios</code> puede identificar una dirección que un servidor HTTP atiende. <code>datos/citas.txt</code> identifica un archivo en el disco. Ambas parecen rutas, pero no son intercambiables: <code>readFile</code> solo entiende ubicaciones del sistema de archivos.</p>
      <h2 className="text-3xl font-bold text-brand-purple">Construir rutas con node:path</h2>
      <p>Escribir separadores manualmente puede funcionar en un sistema y fallar en otro. <code>path.join()</code> une carpeta y archivo usando el separador apropiado. <code>path.resolve()</code> muestra la ubicación absoluta que Node obtiene a partir de la carpeta actual del proceso.</p>
      <CodeExample file="gestionar-citas.js" output={'Ruta absoluta: C:\\...\\datos\\citas.txt\n11:00 - Marta - Manicura'}>{ejemplo}</CodeExample>
      <p>Crea primero <code>datos/citas.txt</code>. Ejecuta <code>node gestionar-citas.js</code> desde la carpeta del proyecto. La ruta absoluta será distinta en cada equipo: debe acabar en <code>datos/citas.txt</code>.</p>
      <h2 className="text-3xl font-bold text-brand-purple">Relativas, absolutas y portables</h2>
      <p>Una ruta relativa depende de desde dónde se inicia Node; una absoluta describe el destino completo en un ordenador concreto. Un proyecto compartido debe construir rutas relativas con <code>path.join()</code> y mostrar <code>path.resolve()</code> solo para diagnosticar problemas.</p>
    </section>
    <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-slate-700"><h2 className="text-2xl font-bold text-brand-purple">Errores frecuentes</h2><ul className="mt-4 list-disc space-y-2 pl-5"><li><strong>ENOENT aunque el archivo existe:</strong> imprime <code>path.resolve()</code>; quizá arrancaste Node desde otra carpeta.</li><li><strong>Barras escritas a mano:</strong> usa <code>path.join()</code> para unir segmentos.</li><li><strong>Confundir rutas:</strong> <code>/api/citas</code> no es un archivo que <code>readFile</code> pueda abrir.</li></ul></section>
    <Practice title="Nivel 1 - Tu brújula de archivos" checks={['Muestras una ruta con path.join.', 'Muestras su equivalente absoluto.', 'Explicas por qué no es una URL.']} hints={<p>Importa <code>path</code> desde <code>node:path</code> y prueba con <code>datos</code> y <code>nota.txt</code>.</p>} solution={<p><code>path.join('datos', 'nota.txt')</code> forma la ruta relativa. <code>path.resolve('datos', 'nota.txt')</code> muestra dónde intentaría encontrarla Node.</p>}> <p>Crea <code>ruta.js</code> y muestra ambas formas de localizar un archivo de tu práctica.</p></Practice>
    <Practice kind="Nivel 2 - Semiguiado" title="Combinar fs y path" checks={['La carpeta datos existe.', 'El programa añade una cita.', 'Después lee todo el archivo.', 'No escribe barras de Windows a mano.']} hints={<p>Guarda <code>path.join('datos', 'citas.txt')</code> en una variable y reutilízala en <code>appendFile</code> y <code>readFile</code>.</p>} solution={<p><code>path</code> construye la ubicación y <code>fs</code> lee o escribe allí. Reutilizar una sola variable evita que dos rutas se desincronicen.</p>}> <p>Añade una cita a un archivo en una subcarpeta y muestra todas las citas con el mismo programa.</p></Practice>
    <Practice kind="Nivel 3 - Autónomo" title="Registro portátil de servicios" checks={['Funciona sin una ruta fija del ordenador.', 'Usa path.join.', 'Lee o añade datos.', 'Gestiona errores y diferencia ruta relativa de absoluta.']} hints={<p>Diseña el formato de una línea y utiliza una subcarpeta creada previamente. Imprime la ruta absoluta solo para depurar.</p>} solution={<p>Una solución usa <code>path.join('datos', 'servicios.txt')</code> y <code>appendFile</code>. El diagnóstico puede mostrar <code>path.resolve(archivo)</code>, sin guardar esa ruta absoluta en el código.</p>}> <p>Construye un registro de servicios que pueda copiarse a otro equipo sin cambiar una ruta personal.</p></Practice>
    <KnowledgeCheck title="node:path" questions={[{ id: 'join', question: '¿Para qué sirve path.join?', options: ['Unir segmentos de una ruta de archivo de forma portable', 'Crear una ruta GET', 'Instalar fs'], answer: 'Unir segmentos de una ruta de archivo de forma portable', feedback: 'path.join evita depender del separador de un sistema operativo.' }, { id: 'resolve', question: '¿Qué ayuda a diagnosticar path.resolve?', options: ['La ubicación absoluta que Node intenta usar', 'Un código HTTP', 'El JSON de un archivo'], answer: 'La ubicación absoluta que Node intenta usar', feedback: 'Así se detecta desde qué carpeta se resuelve una ruta relativa.' }]} />
  </LessonLayout>;
}
