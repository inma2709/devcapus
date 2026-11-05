import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import SiteFooter from './components/layout/SiteFooter';
import SiteHeader from './components/layout/SiteHeader';
import AboutPage from './pages/AboutPage';
import PenpotActivityPage from './pages/PenpotActivityPage';
import PenpotActivityRoadmapPage from './pages/PenpotActivityRoadmapPage';
import PenpotActivity02Page from './pages/PenpotActivity02Page';
import PenpotActivity02RoadmapPage from './pages/PenpotActivity02RoadmapPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CoursesPage from './pages/CoursesPage';
import FrameworkViewerPage from './pages/FrameworkViewerPage';
import HomePage from './pages/HomePage';
import ManualsPage from './pages/ManualsPage';
import ManualCategoryPage from './pages/ManualCategoryPage';
import ManualViewerPage from './pages/ManualViewerPage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectsPage from './pages/ProjectsPage';
import StudentProjectsPage from './pages/StudentProjectsPage';
import ReadmeTutorialPage from './pages/ReadmeTutorialPage';
import JavaScriptManual from './features/javascript-manual/JavaScriptManual';
import JavaScriptExercises from './features/javascript-exercises/JavaScriptExercises';
import NodeManualViewer from './features/server-manual/NodeManualViewer';
import ItinerariesPage from './pages/ItinerariesPage';
import ItineraryDetailPage from './pages/ItineraryDetailPageEnhanced';

export default function App() {
  return (
    <BrowserRouter>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
        href="#contenido"
      >
        Saltar al contenido
      </a>

      <SiteHeader />

      <main id="contenido">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cursos" element={<CoursesPage />} />
          <Route path="/cursos/:slug" element={<CourseDetailPage />} />
          <Route path="/manuales" element={<ManualsPage />} />
          <Route path="/manuales/frontend" element={<ManualCategoryPage area="frontend" />} />
          <Route path="/manuales/backend" element={<ManualCategoryPage area="backend" />} />
          <Route path="/manuales/node-fundamentos" element={<NodeManualViewer />} />
          <Route path="/manuales/node-fundamentos/lecciones/:lessonSlug" element={<NodeManualViewer />} />
          <Route path="/manuales/javascript" element={<JavaScriptManual />} />
          <Route path="/manuales/javascript/:topicSlug" element={<JavaScriptManual />} />
          <Route path="/manuales/javascript-ejercicios" element={<JavaScriptExercises />} />
          <Route path="/manuales/javascript-ejercicios/:exerciseSlug" element={<JavaScriptExercises />} />
          <Route
            path="/manuales/diseno/actividad-penpot-01"
            element={<PenpotActivityPage />}
          />
          <Route
            path="/manuales/diseno/actividad-penpot-01/hoja-de-ruta"
            element={<PenpotActivityRoadmapPage />}
          />
          <Route
            path="/manuales/diseno/actividad-penpot-02"
            element={<PenpotActivity02Page />}
          />
          <Route
            path="/manuales/diseno/actividad-penpot-02/hoja-de-ruta"
            element={<PenpotActivity02RoadmapPage />}
          />
          <Route path="/manuales/:slug" element={<ManualViewerPage />} />
          <Route path="/itinerarios" element={<ItinerariesPage />} />
          <Route path="/itinerarios/:slug" element={<ItineraryDetailPage />} />
          <Route
            path="/frameworks"
            element={<Navigate to="/manuales?categoria=Frameworks" replace />}
          />
          <Route path="/frameworks/:slug" element={<FrameworkViewerPage />} />
          <Route
            path="/manuales/html-uf1841/index.html"
            element={<Navigate to="/manuales/html-uf1841" replace />}
          />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyectos/readme" element={<ReadmeTutorialPage />} />
          <Route path="/proyectos-alumnos" element={<StudentProjectsPage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <SiteFooter />
    </BrowserRouter>
  );
}
