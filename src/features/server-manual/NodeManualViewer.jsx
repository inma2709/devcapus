import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  isNodeManualMessage,
  nodeManualMessage,
  nodeManualPublicPath,
  trustedOrigin,
} from './navigationProtocol.js';

const standaloneBasePath = '/manuales-backend/node/';

export default function NodeManualViewer() {
  const { lessonSlug } = useParams();
  const navigate = useNavigate();
  const iframeRef = useRef(null);
  const [bridgeReady, setBridgeReady] = useState(false);
  const [frameError, setFrameError] = useState(false);
  const manualOrigin = useMemo(
    () => trustedOrigin(import.meta.env.VITE_NODE_MANUAL_ORIGIN, window.location.origin),
    [],
  );
  const [initialManualUrl] = useState(() => `${manualOrigin}${standaloneBasePath}#${nodeManualPublicPath(lessonSlug)}`);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== manualOrigin || event.source !== iframeRef.current?.contentWindow || !isNodeManualMessage(event.data)) return;
      setBridgeReady(true);
      if (event.data.slug !== (lessonSlug || null)) navigate(nodeManualPublicPath(event.data.slug));
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [lessonSlug, manualOrigin, navigate]);

  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage(nodeManualMessage(lessonSlug), manualOrigin);
  }, [lessonSlug, manualOrigin]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (!bridgeReady) setFrameError(true);
    }, 8000);
    return () => window.clearTimeout(timeout);
  }, [bridgeReady]);

  return <section className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6" aria-label="Manual de Node.js">
    <p className="mb-3 text-sm text-slate-600" role="status" aria-live="polite">
      {frameError ? 'No se pudo establecer la comunicación con el manual. Comprueba que el build independiente esté disponible.' : bridgeReady ? 'Manual de Node.js cargado.' : 'Cargando el manual de Node.js…'}
    </p>
    {frameError && <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-950" role="alert">
      El contenido no está disponible todavía en esta dirección. Puedes volver al índice de manuales e intentarlo de nuevo cuando se active el build de Node.
    </div>}
    <iframe
      ref={iframeRef}
      className="h-[calc(100vh-10rem)] min-h-[42rem] w-full rounded-xl border border-slate-200 bg-white"
      src={initialManualUrl}
      title="Manual independiente de Fundamentos de Node.js"
      onError={() => setFrameError(true)}
      aria-busy={!bridgeReady}
    />
  </section>;
}
