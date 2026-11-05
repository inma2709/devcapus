import CodeExample from '../components/CodeExample'; import KnowledgeCheck from '../components/KnowledgeCheck'; import LessonLayout from '../components/LessonLayout'; import Practice from '../components/Practice';
const code = `async function mostrarPedido() {
  try {
    const mensaje = await seguirPedido(true);
    console.log(mensaje);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Consulta finalizada');
  }
}

await mostrarPedido();`;
export default function AsyncAwaitErrores({ chapter }) { return <LessonLayout chapter={chapter}><section className="mt-10 space-y-7 text-lg leading-8 text-slate-700"><h2 className="text-3xl font-bold text-brand-purple">Leer promesas en orden</h2><p>Una función <code>async</code> siempre devuelve una promesa. Dentro de ella, <code>await</code> espera el resultado de otra promesa antes de continuar esa función; no bloquea todo Node. <code>try/catch/finally</code> mantiene juntos éxito, error y limpieza.</p><CodeExample file="async-pedido.js" output={'Pedido preparado\nConsulta finalizada'}>{code}</CodeExample><p>Con ESM, Node moderno permite top-level await como la última línea del ejemplo. Úsalo con moderación en el punto de entrada; dentro de funciones reutilizables suele ser más claro usar <code>async</code>.</p><h2 className="text-3xl font-bold text-brand-purple">La misma intención, tres sintaxis</h2><p>Callback: entregas una función para después. Promesa: devuelves el resultado futuro y encadenas <code>then/catch</code>. Async/await: consumes esa misma promesa con una escritura lineal. Ninguna cambia que el trabajo sea asíncrono.</p></section><Practice title="Tres versiones de una consulta" checks={['Implementas callback, then/catch y async/await.', 'Los tres casos tratan el error.', 'Explicas que async/await usa promesas.']} hints={<p>Reutiliza una única función que devuelva Promise para las dos últimas versiones.</p>} solution={<p>No conviertas el callback en una promesa sin explicarlo: compara qué recibe cada estilo y dónde se maneja el error.</p>}> <p>Representa la disponibilidad de una cita con las tres sintaxis.</p></Practice><KnowledgeCheck title="async/await" questions={[{id:'await',question:'¿Qué necesita await?',options:['Una promesa o valor esperable','Un servidor Express','Un DOM'],answer:'Una promesa o valor esperable',feedback:'await es sintaxis para consumir promesas.'}]} /></LessonLayout>; }
