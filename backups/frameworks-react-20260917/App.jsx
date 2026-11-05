import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import SiteFooter from './components/layout/SiteFooter';
import SiteHeader from './components/layout/SiteHeader';
import AboutPage from './pages/AboutPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';
import ManualsPage from './pages/ManualsPage';
import ManualViewerPage from './pages/ManualViewerPage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectsPage from './pages/ProjectsPage';
import StudentProjectsPage from './pages/StudentProjectsPage';

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
          <Route path="/manuales/:slug" element={<ManualViewerPage />} />
          <Route
            path="/manuales/html-uf1841/index.html"
            element={<Navigate to="/manuales/html-uf1841" replace />}
          />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyectos-alumnos" element={<StudentProjectsPage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <SiteFooter />
    </BrowserRouter>
  );
}
