import { Link } from 'react-router-dom';
import CodeExample from '../components/CodeExample';
import KnowledgeCheck from '../components/KnowledgeCheck';
import LessonLayout from '../components/LessonLayout';
import Practice from '../components/Practice';

const apiExample = `import express from 'express';

const app = express();
const puerto = 3000;

const servicios = [
  { id: 1, nombre: 'Consulta general', duracion: 30 },
  { id: 2, nombre: 'Revisión', duracion: 20 },
];

app.get('/', (req, res) => {
  res.send('Bienvenida a la API de la clínica');
});

app.get('/health', (req, res) => {
  res.json({ estado: 'ok' });
});

app.get('/servicios', (req, res) => {
  res.json(servicios);
});

app.get('/contacto', (req, res) => {
  res.send('Contacto: clinica@example.com');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(puerto, () => {
  console.log(\`Servidor Express en http://localhost:\${puerto}\`);
});`;

export default function RutasRespuestasExpress({ chapter }) {
  return <LessonLayout chapter={chapter}>
    <section className="mt-10 space-y-7 text-lg leading-8 text-slate-700">
      <h2 className="text-3xl font-bold text-brand-purple">Una API se organiza en rutas</h2>
      <p>Una ruta indica qué debe hacer el servidor cuando recibe una petición con un método y una dirección concretos. En esta jornada trabajamos solo con <code>GET</code>: el cliente pide información y el servidor responde.</p>
      <p>En <code>app.get('/servicios', (req, res) =&gt; ...)</code>, <code>req</code> representa la petición recibida y <code>res</code> permite enviar la respuesta. La función no se ejecuta al escribirla: Express la guarda y la llama cuando llega una petición GET a esa ruta.</p>

      <h2 className="text-3xl font-bold text-brand-purple">Texto y JSON</h2>
      <p>Usamos <code>res.send()</code> para un mensaje de texto y <code>res.json()</code> para datos que otro programa debe entender. JSON transporta objetos y arrays; no crea una página visual. Para repasar estos datos puedes consultar <Link className="font-bold text-brand-blue underline" to="/manuales/javascript/objetos-dentro-de-arrays">objetos dentro de arrays</Link>.</p>
      <CodeExample file="app.js" output={'GET /health devuelve: { "estado": "ok" }'}>{`app.get('/', (req, res) => {
  res.send('Bienvenida a la API');
});

app.get('/health', (req, res) => {
  res.json({ estado: 'ok' });
});`}</CodeExample>

      <h2 className="text-3xl font-bold text-brand-purple">Servicios en memoria</h2>
      <p>Por ahora los datos se crean en el propio archivo y desaparecen al detener Node. Es suficiente para comprender la comunicación antes de introducir una base de datos.</p>
      <CodeExample file="app.js" output={'GET /servicios devuelve un array JSON con dos servicios.'}>{apiExample}</CodeExample>

      <h2 className="text-3xl font-bold text-brand-purple">Una respuesta para rutas desconocidas</h2>
      <p>Express evalúa las reglas de arriba abajo. El manejador final con <code>app.use()</code> debe ir después de las rutas conocidas: solo se ejecuta si ninguna ruta anterior ha respondido. El estado <code>404</code> indica que el servidor funciona, pero esa dirección no existe.</p>

      <Practice title="Práctica guiada: comprobar la API" checks={['GET /, /health, /servicios y /contacto responden.', 'GET /no-existe devuelve estado 404.', 'Distingues una respuesta de texto de una respuesta JSON.']} hints={<p>En la carpeta <code>examples/jornada4/mi-primer-express</code>, ejecuta primero <code>npm install</code> y después <code>npm start</code>. En Postman selecciona siempre el método GET.</p>} solution={<p>Prueba cada dirección con el servidor activo. <code>/servicios</code> devuelve el array con <code>res.json()</code>; <code>/no-existe</code> llega al último manejador y responde con el JSON de error.</p>}>
        <p>Usa Postman para enviar GET a <code>/</code>, <code>/health</code>, <code>/servicios</code>, <code>/contacto</code> y <code>/no-existe</code>.</p>
      </Practice>

      <Practice kind="Reto autónomo" title="Ruta de profesionales" checks={['Existe un array de profesionales.', 'GET /profesionales responde JSON.', 'Cada profesional tiene id, nombre y especialidad.']} hints={<p>Copia el patrón de <code>/servicios</code>, cambia el array y la ruta.</p>} solution={<p>Declara <code>const profesionales = [...]</code> y registra <code>app.get('/profesionales', (req, res) =&gt; res.json(profesionales))</code> antes del manejador 404.</p>}>
        <p>Añade <code>GET /profesionales</code> para devolver dos profesionales. Verifica en Postman que el resultado es un array JSON.</p>
      </Practice>
    </section>
    <KnowledgeCheck title="Rutas y respuestas con Express" questions={[
      { id: 'order', question: '¿Por qué el manejador 404 va al final?', options: ['Para que solo responda si ninguna ruta anterior coincide.', 'Porque app.use solo funciona después de app.listen.', 'Porque JSON no funciona en rutas GET.'], answer: 'Para que solo responda si ninguna ruta anterior coincide.', feedback: 'Express evalúa las reglas en orden; un 404 antes ocultaría las rutas válidas.' },
      { id: 'json', question: '¿Qué respuesta es adecuada para una lista de servicios?', options: ['res.json(servicios)', "res.send('servicios')", 'console.log(servicios)'], answer: 'res.json(servicios)', feedback: 'res.json envía los datos al cliente como JSON; console.log solo escribe en la terminal.' },
    ]} />
  </LessonLayout>;
}
