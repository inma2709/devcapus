import { Link } from 'react-router-dom';

const itineraryPath = '/itinerarios/mf0492-entorno-servidor';

export default function ManualBreadcrumbs({ currentChapter }) {
  return <nav aria-label="Ruta de navegación" className="flex flex-wrap gap-x-2 gap-y-1 text-sm font-semibold text-brand-blue"><Link to="/">DevCampus</Link><span aria-hidden="true">→</span><Link to="/itinerarios">Itinerarios</Link><span aria-hidden="true">→</span><Link to={itineraryPath}>MF0492_3</Link><span aria-hidden="true">→</span>{currentChapter ? <><Link to="/manuales/node-fundamentos">Node.js</Link><span aria-hidden="true">→</span><span className="text-slate-600" aria-current="page">{currentChapter}</span></> : <span className="text-slate-600" aria-current="page">Node.js</span>}</nav>;
}
