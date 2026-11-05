import CodeExample from '../components/CodeExample'; import KnowledgeCheck from '../components/KnowledgeCheck'; import LessonLayout from '../components/LessonLayout'; import Practice from '../components/Practice';
const code = `import http from 'node:http';
const servidor = http.createServer((req, res) => {
  if (req.method !== 'POST' || req.url !== '/api/citas') { res.writeHead(404); return res.end(); }
  let body = '';
  req.on('data', (chunk) => { body += chunk; });
  req.on('end', () => {
    try {
      const cita = JSON.parse(body);
      if (!cita.nombre || !cita.servicio) { res.writeHead(400); return res.end(JSON.stringify({ error: 'nombre y servicio son obligatorios' })); }
      res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' }); res.end(JSON.stringify({ id: 1, ...cita }));
    } catch { res.writeHead(400); res.end(JSON.stringify({ error: 'JSON inválido' })); }
  });
});
servidor.listen(3000);`;
export default function ApiPostStreamsJson({chapter}) { return <LessonLayout chapter={chapter}><section className="mt-10 space-y-7 text-lg leading-8 text-slate-700"><h2 className="text-3xl font-bold text-brand-purple">El cuerpo llega como stream</h2><p>Un objeto JavaScript vive en memoria. JSON es texto, por ejemplo <code>{'{"nombre":"Ana"}'}</code>. El cuerpo es la información que viaja en una petición HTTP. No debe suponerse que llega de una vez: <code>req</code> es un stream y emite fragmentos llamados chunks. Acumulamos cada chunk y solo parseamos cuando llega <code>end</code>.</p><CodeExample file="api-post.js" output={'POST /api/citas con JSON válido → 201'}>{code}</CodeExample><p>Ejecuta <code>node api-post.js</code>. En Postman usa POST, URL <code>http://localhost:3000/api/citas</code>, cabecera <code>Content-Type: application/json</code> y cuerpo <code>{'{"nombre":"Ana","servicio":"Corte"}'}</code>. El recorrido es cliente → chunks → body de texto → JSON.parse → validación → respuesta JSON.</p><h2 className="text-3xl font-bold text-brand-purple">Errores que sí son respuestas</h2><p><code>JSON.parse</code> falla con texto malformado; devolvemos 400, no 500. También devolvemos 400 si faltan datos. 201 indica que la cita se creó. Más adelante persistiremos datos; por ahora viven solo durante el proceso.</p></section><Practice title="POST con validación" checks={['Un JSON válido recibe 201.', 'JSON malformado recibe 400.', 'Faltar nombre o servicio recibe 400.', 'Comprendes data, chunk y end.']} hints={<p>No ejecutes <code>JSON.parse</code> dentro de data: aún pueden faltar chunks.</p>} solution={<p>Acumula <code>body += chunk</code>, parsea una vez en end y usa try/catch. Valida antes de enviar 201.</p>}> <p>Prueba los tres casos en Postman y anota estado y cuerpo.</p></Practice><KnowledgeCheck title="POST y streams" questions={[{id:'end',question:'¿Cuándo debe ejecutarse JSON.parse(body)?',options:['Al recibir end','En cada data','Antes de recibir datos'],answer:'Al recibir end',feedback:'Solo entonces se sabe que el cuerpo completo ha llegado.'}]} /></LessonLayout>; }
