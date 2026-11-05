import CodeExample from '../components/CodeExample'; import KnowledgeCheck from '../components/KnowledgeCheck'; import LessonLayout from '../components/LessonLayout'; import Practice from '../components/Practice';
const code = `function seguirPedido(existe) {
  return new Promise((resolve, reject) => {
    setTimeout(() => existe ? resolve('Pedido preparado') : reject(new Error('Pedido no encontrado')), 300);
  });
}

seguirPedido(true)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error.message))
  .finally(() => console.log('Consulta finalizada'));`;
export default function PromesasPedidos({ chapter }) { return <LessonLayout chapter={chapter}><section className="mt-10 space-y-7 text-lg leading-8 text-slate-700"><h2 className="text-3xl font-bold text-brand-purple">Un resultado que llegará después</h2><p>Una Promise representa una operación futura. Empieza pendiente y termina una sola vez: cumplida con <code>resolve</code> o rechazada con <code>reject</code>. <code>then</code> recibe el éxito, <code>catch</code> gestiona el rechazo y <code>finally</code> se ejecuta en ambos casos.</p><CodeExample file="pedido.js" output={'Pedido preparado\nConsulta finalizada'}>{code}</CodeExample><p>Ejecuta <code>node pedido.js</code>; cambia <code>true</code> por <code>false</code>. No llames a <code>resolve</code> y <code>reject</code> para el mismo pedido: tras el primer estado final, el resto se ignora.</p></section><Practice title="Seguimiento de un pedido" checks={['La promesa resuelve y rechaza según el caso.', 'Usas then, catch y finally.', 'Pruebas los dos resultados.']} hints={<p>El valor de <code>existe</code> decide qué función invocar dentro del temporizador.</p>} solution={<p>El código de la lección es una solución completa. Amplíalo con número de pedido sin cambiar el flujo de control.</p>}> <p>Recupera el ejercicio del PDF: simula el seguimiento de un pedido de servicio.</p></Practice><KnowledgeCheck title="Promesas" questions={[{id:'states',question:'¿Qué estados finales tiene una promesa?',options:['Cumplida o rechazada','Pendiente o repetida','HTML o JSON'],answer:'Cumplida o rechazada',feedback:'Pendiente es el estado inicial; una promesa se liquida una vez.'}]} /></LessonLayout>; }
