import { ChevronDown, Code2, Menu, X } from 'lucide-react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from 'react';
import { allTopics, courseStructure, getTopic, levels, topicPath } from './courseStructure';
import FirstLessonContent from './FirstLessonContent';
import HtmlCssJavaScriptLesson from './HtmlCssJavaScriptLesson';
import NamingConventionsLesson from './NamingConventionsLesson';
import ConnectingJavaScriptLesson from './ConnectingJavaScriptLesson';
import ConsoleAndDevToolsLesson from './ConsoleAndDevToolsLesson';
import { VariablesLesson, ConstAndLetLesson, DataTypesLesson, TemplateLiteralsLesson, DataInPagePracticeLesson } from './DataStorageLessons';
import ArithmeticLesson from './ArithmeticLesson';
import ComparisonLesson from './ComparisonLesson';
import LogicalOperatorsLesson from './LogicalOperatorsLesson';
import DataConversionLesson from './DataConversionLesson';
import OperatorExercisesLesson from './OperatorExercisesLesson';
import PracticaRetoTiendaLesson from './PracticaRetoTiendaLesson';
import { DecisionIntroLesson, IfLesson, IfElseLesson, ElseIfLesson, CombineConditionsLesson, TernaryLesson, ReservationPracticeLesson } from './DecisionLessons';
import PracticaTiendaIfElseLesson from './PracticaTiendaIfElseLesson';
import SwitchLesson from './SwitchLesson';
import GradeEvaluatorPracticeLesson from './GradeEvaluatorPracticeLesson';
import { WhyLoopsLesson, WhileLoopLesson, ForLoopLesson, CountersAccumulatorsLesson, DoWhileLesson, BreakContinueLesson, LoopDebuggingLesson, StoreOrdersPracticeLesson } from './LoopLessons';
import SavingsChallengeLesson from './SavingsChallengeLesson';
import { ParametersAndArgumentsLesson, FunctionVariablesLesson, BudgetCalculatorPracticeLesson } from './FunctionLessonsRebuilt';
import { FunctionIntroLesson, HtmlFunctionsLesson, AgeFunctionLesson, FunctionsLoopsProjectLesson, FunctionsConditionsProjectLesson, ReturnProjectLesson, FunctionsCollaborationLesson, ArrowAndErrorsLesson, PreparedJavaScriptToolsLesson } from './FunctionItineraryLessons';
import AnonymousFunctionsLesson from './AnonymousFunctionsLesson';
import { ArrowLessonAdditions } from './ArrowLessonAdditions';
import SevenAndHalfPracticeLesson from './SevenAndHalfPracticeLesson';
import { ArrayIntroLesson, IndicesLesson, ReadModifyLesson, LengthLesson, ForLesson } from './ArrayLessonsRebuilt';
import { ExpandedForOfLesson } from './ForOfLessonExpanded';
import { ExpandedArrayMethodsLesson } from './ArrayMethodsLessonExpanded';
import ArrayCatalogPracticeLesson from './ArrayCatalogPracticeLesson';
import { ArraySummaryPracticeLesson } from './ArrayBlockLessons';
import { SearchDevelopedLesson, SpliceDevelopedLesson, SimpleCartPracticeLesson } from './ArrayPostForOfLessons';
import ForEachSavingLesson from './ForEachSavingLesson';
import MapRebuiltLesson from './MapRebuiltLesson';
import ReduceRebuiltLesson from './ReduceRebuiltLesson';
import ArraySummaryLesson from './ArraySummaryLesson';
import { ObjectIntroLesson, ObjectMethodsLesson, ObjectsInArraysLesson, ObjectTraversalLesson } from './ObjectLessonsRebuilt';
import { FirstCatalogPracticeLesson, StoreManagementPracticeLesson, StoreManagerChallengeLesson } from './ObjectCatalogPractices';
import ObjectPanelPracticeLesson from './ObjectPanelPracticeLesson';
import DomElementSelectionLesson from './DomElementSelectionLessonV2';
import DomModificationLesson from './DomModificationLessonV2';
import { DomIntroRebuiltLesson } from './DomRebuiltAdditions';
import DomCreationGuidedLesson from './DomCreationGuidedLesson';
import { CounterPracticeLesson } from './EventLessons';
import { SchedulesPracticeAudited, MenuEventPracticeAudited, TaskListPracticeAudited } from './EventPracticesAudited';
import FirstEventsGuidedLesson from './FirstEventsGuidedLesson';
import InputValuesGuidedLesson from './InputValuesGuidedLesson';
import { ProcessFormDataLesson, RelatedFormValidationLesson, ReservationCalculatorPractice } from './FormGuidedLessons';
import { UsefulArraysLesson, ModernObjectsLesson, CompleteFormsLesson, SyncAsyncLesson, ApiFetchLesson, AsyncAwaitLesson } from './ConsolidationLessons';
import CallbacksPromisesLesson from './CallbacksPromisesLesson';
import LocalStorageGuidedLesson from './LocalStorageGuidedLesson';
import LocalStorageMemoryLesson from './LocalStorageMemoryLesson';
import LocalStorageStudentsLesson from './LocalStorageStudentsLesson';
import './javascript-manual.css';
import './lesson-content.css';

const Badge=({level})=><span className={`jsm-badge jsm-badge--${level}`}>{levels[level].title}</span>;
function LessonScrollToTop(){const {pathname,hash}=useLocation();useLayoutEffect(()=>{if(!hash){window.scrollTo({top:0,left:0,behavior:'auto'});}},[pathname,hash]);return null;}
function Sidebar({active,open,onClose}){return <aside className={`jsm-sidebar ${open?'is-open':''}`} aria-label="Índice del manual"><div className="jsm-sidebar__top"><strong>JavaScript</strong><button onClick={onClose} aria-label="Cerrar contenido"><X size={20}/></button></div><nav aria-label="Contenido del curso">{Object.keys(levels).map(level=><section className="jsm-level" key={level}><h2>{levels[level].title}</h2>{courseStructure.filter(b=>b.level===level).map(block=><details key={block.id} open={active?.block.id===block.id}><summary><ChevronDown size={16}/>{block.title}</summary><ul>{block.topics.map(topic=><li key={topic.slug}><Link to={topicPath(topic.slug)} aria-current={active?.slug===topic.slug?'page':undefined}>{topic.title}{topic.kind==='Práctica'&&<small>Práctica</small>}</Link></li>)}</ul></details>)}</section>)}</nav></aside>}
function LessonNav({current}){const route=allTopics.filter(t=>t.block.level===current.block.level),i=route.findIndex(t=>t.slug===current.slug),prev=route[i-1],next=route[i+1],nextLevel=current.block.level==='first'?allTopics.find(t=>t.block.level==='second'):null;return <nav className="jsm-lesson-nav" aria-label="Navegación entre lecciones">{prev?<Link to={topicPath(prev.slug)}>← <span>Anterior</span>{prev.title}</Link>:<span/>}{next?<Link to={topicPath(next.slug)}><span>Siguiente</span>{next.title} →</Link>:nextLevel?<Link to={topicPath(nextLevel.slug)}><span>Segunda vuelta</span>Comenzar la consolidación →</Link>:<Link to="/manuales/javascript"><span>Final del nivel</span>Volver al recorrido</Link>}</nav>}
const developedLessons={
 'que-vamos-a-construir':FirstLessonContent,
 'html-css-y-javascript':HtmlCssJavaScriptLesson,
 'organizar-y-nombrar-codigo':NamingConventionsLesson,
 'como-conectar-javascript':ConnectingJavaScriptLesson,
 'consola-y-devtools':ConsoleAndDevToolsLesson,
 'variables-guardar-datos':VariablesLesson,
 'const-y-let':ConstAndLetLesson,
 'texto-numeros-y-booleanos':DataTypesLesson,
 'template-literals':TemplateLiteralsLesson,
 'practica-datos-en-la-pagina':DataInPagePracticeLesson,
 'operadores-aritmeticos':ArithmeticLesson,
 'comparar-valores':ComparisonLesson,
 'operadores-logicos':LogicalOperatorsLesson,
 'conversion-basica-de-datos':DataConversionLesson,
 'practica-calcular-un-precio':OperatorExercisesLesson,
 'practica-reto-tienda':PracticaRetoTiendaLesson,
 'que-significa-decidir':DecisionIntroLesson,
 'if':IfLesson,
 'if-else':IfElseLesson,
 'practica-tienda-if-else':PracticaTiendaIfElseLesson,
 'else-if':ElseIfLesson,
 'combinar-condiciones':CombineConditionsLesson,
 'operador-ternario':TernaryLesson,
 'practica-ultimas-plazas':ReservationPracticeLesson,
 'switch':SwitchLesson,
 'practica-evaluador-calificaciones':GradeEvaluatorPracticeLesson,
 'por-que-necesitamos-bucles':WhyLoopsLesson,
 'while':WhileLoopLesson,
 'for':ForLoopLesson,
 'contadores-y-acumuladores':CountersAccumulatorsLesson,
 'do-while':DoWhileLesson,
 'break-y-continue':BreakContinueLesson,
 'errores-frecuentes-bucles':LoopDebuggingLesson,
 'practica-tienda-prepara-pedidos':StoreOrdersPracticeLesson,
 'proyecto-final-reto-ahorro':SavingsChallengeLesson,
 'problema-que-resuelve-una-funcion':FunctionIntroLesson,
 'funciones-html':HtmlFunctionsLesson,
 'parametros-y-argumentos':ParametersAndArgumentsLesson,
 'segunda-funcion-edad':AgeFunctionLesson,
 'return':ReturnProjectLesson,
 'variables-en-funciones':FunctionVariablesLesson,
 'funciones-con-condiciones':FunctionsConditionsProjectLesson,
 'funciones-con-bucles':FunctionsLoopsProjectLesson,
 'funciones-colaboran':FunctionsCollaborationLesson,
 'funciones-anonimas':AnonymousFunctionsLesson,
 'funciones-flecha-errores':()=> <><ArrowAndErrorsLesson /><ArrowLessonAdditions /></>,
 'herramientas-javascript-preparadas':PreparedJavaScriptToolsLesson,
 'juego-siete-y-media':SevenAndHalfPracticeLesson,
 'practica-calculadora-presupuesto':BudgetCalculatorPracticeLesson,
 'que-es-un-array':ArrayIntroLesson,
 'indices':IndicesLesson,
 'leer-y-modificar-elementos':ReadModifyLesson,
 'length':LengthLesson,
 'push-pop-includes':ExpandedArrayMethodsLesson,
 'bucle-for':ForLesson,
 'for-of':ExpandedForOfLesson,
 'foreach':ForEachSavingLesson,
 'recorrer-buscar-transformar':ArraySummaryLesson,
 'map':MapRebuiltLesson,
 'filter-find-includes':SearchDevelopedLesson,
 'reduce-arrays':ReduceRebuiltLesson,
 'splice-arrays':SpliceDevelopedLesson,
 'practica-lista-tareas-arrays':ArraySummaryPracticeLesson,
 'carrito-arrays-guiado':SimpleCartPracticeLesson,
 'practica-listas':ArrayCatalogPracticeLesson,
 'que-es-un-objeto':ObjectIntroLesson,
 'metodos-de-objetos':ObjectMethodsLesson,
 'practica-catalogo-inicial':FirstCatalogPracticeLesson,
 'practica-gestionar-tienda':StoreManagementPracticeLesson,
 'practica-encargado-tienda':StoreManagerChallengeLesson,
 'panel-cursos':ObjectPanelPracticeLesson,
 'objetos-dentro-de-arrays':ObjectsInArraysLesson,
 'recorrer-propiedades-objeto':ObjectTraversalLesson,
 'que-es-el-dom':DomIntroRebuiltLesson,
 'como-encontrar-elementos-dom':DomElementSelectionLesson,
 'modificar-elementos-dom':DomModificationLesson,
 'crear-y-eliminar-elementos':DomCreationGuidedLesson,
 'eventos-responder-usuario':FirstEventsGuidedLesson,
 'campos-input-value':InputValuesGuidedLesson,
 'practica-ver-horarios':SchedulesPracticeAudited,
 'practica-menu':MenuEventPracticeAudited,
 'practica-contador':CounterPracticeLesson,
 'practica-lista-tareas':TaskListPracticeAudited,
 'procesar-datos-formulario':ProcessFormDataLesson,
 'validaciones-relacionadas':RelatedFormValidationLesson,
 'practica-calculadora-reservas':ReservationCalculatorPractice,
 'arrays-utiles':UsefulArraysLesson,
 'objetos-modernos':ModernObjectsLesson,
 'formularios-completos':CompleteFormsLesson,
 'persistencia-local':LocalStorageStudentsLesson,
 'sincronia-asincronia':SyncAsyncLesson,
 'callbacks-promises':CallbacksPromisesLesson,
 'apis-fetch':ApiFetchLesson,
 'async-await':AsyncAwaitLesson,
};
const legacyTopicRedirects={
 'objeto-event':'campos-input-value',
 'primer-codigo-javascript':'como-conectar-javascript',
 'mostrar-en-consola':'consola-y-devtools',
 'primer-cambio-visible':'como-conectar-javascript',
 'parametros-por-defecto':'objetos-modernos',
 'mas-bucles':'arrays-utiles',
 'metodos-de-arrays':'arrays-utiles',
 'destructuring':'objetos-modernos',
 'spread-rest':'objetos-modernos',
 'optional-chaining':'objetos-modernos',
 'localstorage':'persistencia-local',
 'practica-tienda-prepara-pedidos':'proyecto-final-reto-ahorro',
 'crear-y-llamar-funciones':'problema-que-resuelve-una-funcion',
 'funciones-flecha':'funciones-flecha-errores',
 'errores-frecuentes-funciones':'funciones-flecha-errores',
 'metodos-preparados':'herramientas-javascript-preparadas',
 'introduccion-a-apis':'apis-fetch',
 'fetch':'apis-fetch',
 'propiedades-y-valores':'que-es-un-objeto',
 'leer-y-modificar-propiedades':'que-es-un-objeto',
 'array-vs-objeto':'objetos-dentro-de-arrays',
 'practica-representar-datos':'practica-catalogo-inicial',
 'objetos-anidados':'que-es-un-objeto',
 'getelementbyid':'como-encontrar-elementos-dom',
 'queryselector':'como-encontrar-elementos-dom',
 'textcontent':'modificar-elementos-dom',
 'atributos':'modificar-elementos-dom',
 'mostrar-y-ocultar':'modificar-elementos-dom',
 'class-html-css':'modificar-elementos-dom',
 'classlist':'modificar-elementos-dom',
 'practica-menu-hamburguesa':'modificar-elementos-dom',
 'practica-cambiar-tarjeta':'modificar-elementos-dom',
 'que-es-un-evento':'eventos-responder-usuario',
 'click':'eventos-responder-usuario',
 'addeventlistener':'eventos-responder-usuario',
 'input':'campos-input-value',
 'cambiar-contenido-interactuar':'eventos-responder-usuario',
 'eventos-teclado-formularios':'eventos-responder-usuario',
 'leer-valores-inputs':'campos-input-value',
 'evento-submit':'procesar-datos-formulario',
 'preventdefault':'procesar-datos-formulario',
 'validacion-sencilla':'validaciones-relacionadas',
 'mostrar-mensajes':'validaciones-relacionadas',
 'practica-formulario':'practica-calculadora-reservas',
};
function Lesson({current,onMenu}){const position=current.index+1;const Content=developedLessons[current.slug];return <><header className="jsm-mobile"><button onClick={onMenu}><Menu size={20}/>Contenido</button><span>{current.block.title} · {position} de {current.block.topics.length}</span></header><article className="jsm-card"><nav className="jsm-breadcrumb" aria-label="Ruta de navegación"><ol><li>JavaScript</li><li>{current.block.title}</li><li aria-current="page">{current.title}</li></ol></nav><Badge level={current.block.level}/><p className="jsm-eyebrow">{current.block.title} · {position} de {current.block.topics.length}</p><h1>{current.title}</h1>{Content?<Content/>:<><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>Aplicar este concepto en una pequeña funcionalidad de una página web.</p></section><div className="jsm-grid"><section><h2>¿Qué problema resuelve?</h2><p>La lección partirá de una situación concreta antes de introducir sintaxis.</p></section><section><h2>¿Dónde lo ves en una web real?</h2><p>Conectarás el concepto con una interfaz reconocible y una práctica acumulativa.</p></section></div><section className="jsm-placeholder"><Code2 size={28}/><h2>Contenido en preparación</h2><p>La estructura, navegación y espacio de práctica están listos. Desarrollaremos esta lección con calma en la siguiente fase.</p></section></>}<LessonNav current={current}/></article></>}
function Home({onMenu}){return <><header className="jsm-mobile"><button onClick={onMenu}><Menu size={20}/>Contenido</button></header><article className="jsm-card jsm-home"><p className="jsm-kicker">DevCampus · Manual de JavaScript</p><h1>Haz que tus páginas empiecen a responder.</h1><p className="jsm-lead">HTML y CSS construyen la página. Ahora aprenderás JavaScript para trabajar con datos, tomar decisiones y crear interacción real.</p><Link className="jsm-primary" to={topicPath('que-vamos-a-construir')}>Empezar la primera vuelta →</Link><section className="jsm-roadmap"><h2>Tu recorrido</h2><ol>{['Datos','Decisiones','Bucles','Funciones','Listas','Objetos','DOM','Eventos','Miniapp'].map((name,i)=><li key={name}><b>{i+1}</b>{name}</li>)}</ol></section><div className="jsm-grid">{Object.entries(levels).map(([key,value])=><section key={key}><Badge level={key}/><h2>{value.title}</h2><p>{value.description}</p></section>)}</div></article></>}
export default function JavaScriptManual(){const {topicSlug}=useParams(),current=topicSlug?getTopic(topicSlug):null,[open,setOpen]=useState(false),redirect=legacyTopicRedirects[topicSlug];useEffect(()=>{document.title=current?`${current.title} | DevCampus`:'Manual de JavaScript | DevCampus';},[current]);if(redirect)return <Navigate to={topicPath(redirect)} replace/>;return <><LessonScrollToTop/><div className="jsm-shell"><header className="jsm-header"><Link to="/manuales/javascript"><b>JS</b> DevCampus · JavaScript</Link><span>Recorrido guiado</span></header><div className="jsm-layout"><Sidebar active={current} open={open} onClose={()=>setOpen(false)}/><div className="jsm-content">{current?<Lesson current={current} onMenu={()=>setOpen(true)}/>:<Home onMenu={()=>setOpen(true)}/>}</div></div></div></>}
