/* eslint-disable no-unused-vars */
import { lazy, Suspense } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LessonPage from './components/LessonPage';
import CoreHome from './pages/CoreHome';
import EjerciciosLanding from './pages/EjerciciosLanding';

// Vite necesita conocer los imports diferidos durante el build. El glob
// conserva los chunks por página sin dejar rutas dinámicas sin resolver.
const pageModules = import.meta.glob([
  './pages/*.jsx',
  '!./pages/CoreHome.jsx',
  '!./pages/EjerciciosLanding.jsx',
]);
const load = (path) => {
  const importer = pageModules[`${path}.jsx`];
  if (!importer) throw new Error(`Página diferida no encontrada: ${path}`);
  return lazy(importer);
};
const expansion = {
  'flexbox-avanzado': load('./pages/V20_Flexbox_II_Alineacion'), 'grid-areas-layout': load('./pages/V23_Grid_Areas_Layouts'),
  'selectores-avanzados': load('./pages/V09_Selectores_Avanzados'), pseudoclases: load('./pages/V10_Pseudoclases_Pseudoelementos'),
  'pseudoclases-funcionales': load('./pages/V10b_Pseudoclases_Funcionales'), pseudoelementos: load('./pages/V11_Practica_Selectores'),
  overflow: load('./pages/V18_Overflow_Contencion'), imagenes: load('./pages/V24_Imagenes_I'), 'imagenes-avanzadas': load('./pages/V25_Imagenes_II'),
  navegacion: load('./pages/V29_Barra_Navegacion'), tablas: load('./pages/V30_Tablas'), modales: load('./pages/V32_Modales'), overlays: load('./pages/V32_Overlay'),
  'posicionamiento-avanzado': load('./pages/V13_Texto_I'), sass: load('./pages/V37_SASS_Introduccion'), bootstrap: load('./pages/V38_Bootstrap_Introduccion'), tailwind: load('./pages/V39_Tailwind_Introduccion'),
};
const exercises = {
  'e01-tarjeta-perfil': load('./pages/E01_Tarjeta_Perfil'), 'e02-tipografia': load('./pages/E02_Tipografia'), 'e03-menu-hover': load('./pages/E03_Menu_Hover'), 'e04-botones': load('./pages/E04_Botones'), 'e05-variables-css': load('./pages/E05_Variables_CSS'),
  'e06-flexbox-basico': load('./pages/E06_Flexbox_Centra'), 'e07-galeria-flex': load('./pages/E07_Galeria_Flex'), 'e08-formulario': load('./pages/E08_Formulario'), 'e09-grid-galeria': load('./pages/E09_Grid_Galeria'), 'e10-grid-layout': load('./pages/E10_Grid_Layout'),
  'e11-bootstrap-grid': load('./pages/E11_Bootstrap_Grid'), 'e12-bootstrap-navbar': load('./pages/E12_Bootstrap_Navbar'), 'e13-bootstrap-cards': load('./pages/E13_Bootstrap_Cards'), 'e14-bootstrap-forms': load('./pages/E14_Bootstrap_Forms'), 'e15-bootstrap-landing': load('./pages/E15_Bootstrap_Landing'),
  'e16-grid-areas': load('./pages/E16_Grid_Areas'), 'e17-responsive-mobile-first': load('./pages/E17_Responsive_MobileFirst'), 'e18-tailwind-hero': load('./pages/E18_Tailwind_Hero'), 'e19-tailwind-grid': load('./pages/E19_Tailwind_Grid'), 'e20-portfolio-final': load('./pages/E20_Portfolio_Final'),
};
const redirects = {
  'css-introduccion':'/tema/primera-regla', 'css-interno-externo-1':'/tema/primera-regla', 'css-interno-externo-2':'/tema/caja', 'css-inline':'/tema/clases', 'css-cascada-1':'/tema/cascada', 'css-cascada-2':'/tema/apariencia', 'css-devtools':'/tema/devtools', 'css-selectores-basicos':'/tema/selector-etiqueta', 'css-practica-selectores':'/tema/clases', 'css-variables':'/tema/variables', 'css-texto-1':'/tema/flujo', 'css-texto-2':'/tema/apariencia', 'css-tipografia':'/tema/apariencia', 'css-box-model':'/tema/caja', 'css-display':'/tema/flujo', 'css-flexbox-1':'/tema/flexbox-1', 'css-flexbox-2':'/tema/flexbox-2', 'css-grid-1':'/tema/grid-1', 'css-grid-2':'/tema/grid-2', 'css-grid-areas':'/tema/grid-2', 'css-fondos':'/tema/apariencia', 'css-botones-vinculos':'/tema/interaccion', 'css-formularios':'/tema/interaccion', 'css-zindex':'/ampliacion/posicionamiento-avanzado', 'css-position':'/tema/posicionamiento', 'css-media-queries':'/tema/responsive', 'css-responsive-layout':'/tema/responsive', 'css-accesibilidad':'/tema/interaccion',
  'css-selectores-avanzados':'/ampliacion/selectores-avanzados', 'css-pseudoclases':'/ampliacion/pseudoclases', 'css-pseudoclases-funcionales':'/ampliacion/pseudoclases-funcionales', 'css-overflow':'/ampliacion/overflow', 'css-imagenes-1':'/ampliacion/imagenes', 'css-imagenes-2':'/ampliacion/imagenes-avanzadas', 'css-navbar':'/ampliacion/navegacion', 'css-tablas':'/ampliacion/tablas', 'css-modales':'/ampliacion/modales', 'css-overlays':'/ampliacion/overlays', 'css-sass':'/ampliacion/sass', 'css-bootstrap':'/ampliacion/bootstrap', 'css-tailwind':'/ampliacion/tailwind',
};
function Loading(){ return <p className="callout">Cargando contenido…</p>; }
function ExpansionHome(){ return <div className="doc"><h1>Ampliación</h1><p>Consulta estos temas tras completar el itinerario básico.</p><ul>{Object.keys(expansion).map((name) => <li key={name}><Link to={`/ampliacion/${name}`}>{name.replaceAll('-', ' ')}</Link></li>)}</ul></div>; }
export default function App(){ return <Routes><Route path="/" element={<Layout/>}><Route index element={<CoreHome/>}/><Route path="tema/:lessonId" element={<LessonPage/>}/><Route path="ejercicios" element={<EjerciciosLanding/>}/><Route path="ampliacion" element={<ExpansionHome/>}/>{Object.entries(expansion).map(([path, Component]) => <Route key={path} path={`ampliacion/${path}`} element={<Suspense fallback={<Loading/>}><Component/></Suspense>}/>)}{Object.entries(exercises).map(([path, Component]) => <Route key={path} path={`ejercicios/${path}`} element={<Suspense fallback={<Loading/>}><Component/></Suspense>}/>)}{Object.entries(redirects).map(([path,to]) => <Route key={path} path={path} element={<Navigate to={to} replace/>}/>)}<Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes>; }
