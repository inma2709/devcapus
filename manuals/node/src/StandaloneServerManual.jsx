import { Navigate, useParams } from 'react-router-dom';
import { getNodeChapter } from '../../../src/features/server-manual/nodeCourseStructure.js';
import ManualHome from '../../../src/features/server-manual/components/ManualHome.jsx';
import DelNavegadorAlBackend from '../../../src/features/server-manual/lessons/DelNavegadorAlBackend.jsx';
import QueEsNode from '../../../src/features/server-manual/lessons/QueEsNode.jsx';
import InstalacionNode from '../../../src/features/server-manual/lessons/InstalacionNode.jsx';
import NpmYModulos from '../../../src/features/server-manual/lessons/NpmYModulos.jsx';
import ModulosPropiosSumarRestar from '../../../src/features/server-manual/lessons/ModulosPropiosSumarRestar.jsx';
import FsLeerEscribirArchivos from '../../../src/features/server-manual/lessons/FsLeerEscribirArchivos.jsx';
import PathRutasArchivos from '../../../src/features/server-manual/lessons/PathRutasArchivos.jsx';
import EventLoopTimers from '../../../src/features/server-manual/lessons/EventLoopTimers.jsx';
import CallbacksCallbackHell from '../../../src/features/server-manual/lessons/CallbacksCallbackHell.jsx';
import PromesasPedidos from '../../../src/features/server-manual/lessons/PromesasPedidos.jsx';
import AsyncAwaitErrores from '../../../src/features/server-manual/lessons/AsyncAwaitErrores.jsx';
import HttpUrlPuertos from '../../../src/features/server-manual/lessons/HttpUrlPuertos.jsx';
import PrimerServidorHttp from '../../../src/features/server-manual/lessons/PrimerServidorHttp.jsx';
import RespuestasHtmlJsonEndpoints from '../../../src/features/server-manual/lessons/RespuestasHtmlJsonEndpoints.jsx';
import ApiPostStreamsJson from '../../../src/features/server-manual/lessons/ApiPostStreamsJson.jsx';
import PuertosProcesos from '../../../src/features/server-manual/lessons/PuertosProcesos.jsx';
import PrimerasPruebasPostman from '../../../src/features/server-manual/lessons/PrimerasPruebasPostman.jsx';

const lessons = {
  'del-navegador-al-backend': DelNavegadorAlBackend, 'que-es-node': QueEsNode,
  'instalacion-node-entorno': InstalacionNode, 'npm-package-json-modulos': NpmYModulos,
  'modulos-propios-sumar-restar': ModulosPropiosSumarRestar, 'fs-leer-escribir-archivos': FsLeerEscribirArchivos,
  'path-rutas-archivos': PathRutasArchivos, 'event-loop-timers': EventLoopTimers,
  'callbacks-callback-hell': CallbacksCallbackHell, 'promesas-pedidos': PromesasPedidos,
  'async-await-errores': AsyncAwaitErrores, 'http-url-localhost-puertos': HttpUrlPuertos,
  'primer-servidor-node-http': PrimerServidorHttp, 'respuestas-html-json-endpoints': RespuestasHtmlJsonEndpoints,
  'api-post-streams-json': ApiPostStreamsJson, 'puertos-procesos-errores': PuertosProcesos,
  'primeras-pruebas-postman': PrimerasPruebasPostman,
};
export default function StandaloneServerManual() { const { lessonSlug } = useParams(); if (!lessonSlug) return <ManualHome />; const chapter = getNodeChapter(lessonSlug); const Lesson = lessons[lessonSlug]; return !chapter || chapter.status !== 'Disponible' || !Lesson ? <Navigate to="/" replace /> : <Lesson chapter={chapter} />; }
