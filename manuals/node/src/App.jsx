import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import StandaloneServerManual from './StandaloneServerManual.jsx';
import {
  isNodeManualMessage,
  nodeManualMessage,
  nodeManualPublicPath,
  trustedOrigin,
} from '../../../src/features/server-manual/navigationProtocol.js';

function PortalBridge() {
  const location = useLocation();
  const navigate = useNavigate();
  const portalOrigin = trustedOrigin(import.meta.env.VITE_DEVCAMPUS_PORTAL_ORIGIN, window.location.origin);
  const lessonSlug = location.pathname.split('/lecciones/')[1] || null;

  useEffect(() => {
    const handleMessage = (event) => {
      if (window.parent === window || event.origin !== portalOrigin || !isNodeManualMessage(event.data)) return;
      const target = nodeManualPublicPath(event.data.slug);
      if (location.pathname !== target) navigate(target, { replace: true });
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [location.pathname, navigate, portalOrigin]);

  useEffect(() => {
    if (window.parent !== window) window.parent.postMessage(nodeManualMessage(lessonSlug), portalOrigin);
  }, [lessonSlug, portalOrigin]);

  return <Routes>
    <Route path="/" element={<StandaloneServerManual />} />
    <Route path="/manuales/node-fundamentos" element={<StandaloneServerManual />} />
    <Route path="/manuales/node-fundamentos/lecciones/:lessonSlug" element={<StandaloneServerManual />} />
    <Route path="*" element={<StandaloneServerManual />} />
  </Routes>;
}

export default function App() {
  return <HashRouter><PortalBridge /></HashRouter>;
}
