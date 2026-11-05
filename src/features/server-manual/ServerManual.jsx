import { Link, Navigate, useParams } from 'react-router-dom';
import { courseStructure, getChapter } from './courseStructure';
import DelNavegadorAlBackend from './lessons/DelNavegadorAlBackend';
import QueEsNode from './lessons/QueEsNode';
import InstalacionNode from './lessons/InstalacionNode';
import NpmYModulos from './lessons/NpmYModulos';
import ModulosPropiosSumarRestar from './lessons/ModulosPropiosSumarRestar';
import FsLeerEscribirArchivos from './lessons/FsLeerEscribirArchivos';
import PathRutasArchivos from './lessons/PathRutasArchivos';
import EventLoopTimers from './lessons/EventLoopTimers';
import CallbacksCallbackHell from './lessons/CallbacksCallbackHell';
import PromesasPedidos from './lessons/PromesasPedidos';
import AsyncAwaitErrores from './lessons/AsyncAwaitErrores';
import HttpUrlPuertos from './lessons/HttpUrlPuertos';
import PrimerServidorHttp from './lessons/PrimerServidorHttp';
import RespuestasHtmlJsonEndpoints from './lessons/RespuestasHtmlJsonEndpoints';
import ApiPostStreamsJson from './lessons/ApiPostStreamsJson';
import PuertosProcesos from './lessons/PuertosProcesos';
import PrimerasPruebasPostman from './lessons/PrimerasPruebasPostman';
import ExpressPrimerServidor from './lessons/ExpressPrimerServidor';
import RutasRespuestasExpress from './lessons/RutasRespuestasExpress';
import ManualHome from './components/ManualHome';

const pathFor = (slug) => `/manuales/node-fundamentos/lecciones/${slug}`;

const lessons = {
  'del-navegador-al-backend': DelNavegadorAlBackend,
  'que-es-node': QueEsNode,
  'instalacion-node-entorno': InstalacionNode,
  'npm-package-json-modulos': NpmYModulos,
  'modulos-propios-sumar-restar': ModulosPropiosSumarRestar,
  'fs-leer-escribir-archivos': FsLeerEscribirArchivos,
  'path-rutas-archivos': PathRutasArchivos,
  'event-loop-timers': EventLoopTimers,
  'callbacks-callback-hell': CallbacksCallbackHell,
  'promesas-pedidos': PromesasPedidos,
  'async-await-errores': AsyncAwaitErrores,
  'http-url-localhost-puertos': HttpUrlPuertos,
  'primer-servidor-node-http': PrimerServidorHttp,
  'respuestas-html-json-endpoints': RespuestasHtmlJsonEndpoints,
  'api-post-streams-json': ApiPostStreamsJson,
  'puertos-procesos-errores': PuertosProcesos,
  'primeras-pruebas-postman': PrimerasPruebasPostman,
  'express-primer-servidor': ExpressPrimerServidor,
  'rutas-respuestas-express': RutasRespuestasExpress,
};

export function LegacyHome() {
  return <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6"><p className="font-bold uppercase tracking-widest text-brand-blue">MF0492_3 · Manual 1 · 30 horas previstas</p><h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-brand-purple sm:text-5xl">Node.js desde cero: servidores, Express y Postman</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Un recorrido de iniciación al backend para comprender cómo una petición viaja desde un cliente hasta una aplicación Node y construir una primera API de servicios y citas.</p><section className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6"><h2 className="text-xl font-bold text-brand-purple">Estado del desarrollo</h2><p className="mt-2 leading-7 text-slate-700">Las Jornadas 1 y 2 están disponibles. Las jornadas 3 a 6 forman parte del itinerario de 30 horas, pero sus capítulos aún están en preparación.</p></section><section className="mt-10"><h2 className="text-3xl font-bold text-brand-purple">Índice del manual</h2><p className="mt-3 leading-7 text-slate-600">Las jornadas orientan la planificación docente; el alumno navega por conceptos. Solo los capítulos disponibles abren una lección.</p><div className="mt-7 space-y-6">{courseStructure.map((group) => <section className="rounded-2xl border border-slate-200 bg-white p-6" key={group.day}><header className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-bold text-brand-purple">{group.day}</h3><span className="font-semibold text-brand-blue">{group.duration}</span></header><ol className="mt-5 divide-y divide-slate-100">{group.chapters.map((chapter) => <li className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between" key={chapter.slug}><div className="flex gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-lavender font-bold text-brand-purple">{chapter.number}</span><div><h4 className="font-bold text-slate-900">{chapter.title}</h4><p className="mt-1 text-sm text-slate-600">{chapter.duration} · Previos: {chapter.prerequisites}</p></div></div>{chapter.status === 'Disponible' ? <Link className="shrink-0 font-bold text-brand-blue hover:text-brand-purple" to={pathFor(chapter.slug)}>Abrir capítulo →</Link> : <span className="shrink-0 text-sm font-bold text-slate-500">En preparación</span>}</li>)}</ol></section>)}</div></section></main>;
}

export default function ServerManual() {
  const { lessonSlug } = useParams();
  if (!lessonSlug) return <ManualHome />;
  const chapter = getChapter(lessonSlug);
  const Lesson = lessons[lessonSlug];
  if (!chapter || chapter.status !== 'Disponible' || !Lesson) return <Navigate to="/manuales/node-fundamentos" replace />;
  return <Lesson chapter={chapter} />;
}
