import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { initSubmenuPositioning } from "../utils/submenuPositioning";

const linkClass = ({ isActive }) => "topnav-link" + (isActive ? " active" : "");
const subLinkClass = ({ isActive }) => "submenu-link" + (isActive ? " active" : "");


export default function TopNav() {
  const location = useLocation();

  // Inicializar posicionamiento inteligente de submenús (fixed sobre el viewport)
  useEffect(() => {
    const cleanup = initSubmenuPositioning();
    return cleanup;
  }, []);

  // Cerrar submenús cuando cambie la ruta
  useEffect(() => {
    // Cerrar todos los submenús abiertos
    document.querySelectorAll('.topnav-group[open]').forEach(details => {
      details.open = false;
    });
  }, [location.pathname]);

  return (
    <nav className="topnav" aria-label="Navegación principal">
      <div className="topnav-inner">

        {/* INICIO */}
        <NavLink to="/" className={linkClass}>
          <span aria-hidden="true">🏠</span>
          <span className="label">Inicio</span>
        </NavLink>

        <details className="topnav-group">
          <summary className="topnav-link"><span aria-hidden="true">🧭</span><span className="label">Ruta recomendada</span></summary>
          <div className="topnav-submenu" role="menu" aria-label="Ruta recomendada">
            <NavLink to="css-texto-1" className={subLinkClass}>1 · Tipografía</NavLink>
            <NavLink to="css-unidades" className={subLinkClass}>2 · Unidades de medida</NavLink>
            <NavLink to="css-box-model" className={subLinkClass}>3 · Box Model</NavLink>
            <NavLink to="css-tamano" className={subLinkClass}>4 · Dimensiones y límites</NavLink>
            <NavLink to="css-espacio" className={subLinkClass}>5 · Espacio</NavLink>
            <NavLink to="css-imagenes-1" className={subLinkClass}>6 · Imágenes I</NavLink>
            <NavLink to="css-imagenes-2" className={subLinkClass}>7 · Imágenes II</NavLink>
            <NavLink to="css-display" className={subLinkClass}>8 · Display y flujo</NavLink>
            <NavLink to="css-flexbox-1" className={subLinkClass}>9 · Flexbox</NavLink>
            <NavLink to="css-grid-1" className={subLinkClass}>10 · Grid</NavLink>
            <NavLink to="css-position" className={subLinkClass}>11 · Position y z-index</NavLink>
          </div>
        </details>

        <details className="topnav-group">
          <summary className="topnav-link"><span aria-hidden="true">🌱</span><span className="label">Fundamentos</span></summary>
          <div className="topnav-submenu" role="menu" aria-label="Fundamentos">
            <NavLink to="css-introduccion" className={subLinkClass}>Esencial · Qué es CSS</NavLink>
            <NavLink to="css-interno-externo-1" className={subLinkClass}>Esencial · Conectar CSS</NavLink>
            <NavLink to="css-selectores-basicos" className={subLinkClass}>Esencial · Selectores</NavLink>
            <NavLink to="css-box-model" className={subLinkClass}>Esencial · Modelo de caja</NavLink>
            <NavLink to="css-interno-externo-2" className={subLinkClass}>CSS base (reset general)</NavLink>
            <NavLink to="css-cascada-1" className={subLinkClass}>Cascada y especificidad ⭐</NavLink>
            <NavLink to="css-flexbox-1" className={subLinkClass}>Esencial · Flexbox</NavLink>
            <NavLink to="css-grid-1" className={subLinkClass}>Esencial · Grid</NavLink>
            <NavLink to="css-media-queries" className={subLinkClass}>Esencial · Responsive</NavLink>
          </div>
        </details>

        {/* SELECTORES */}
        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">🎯</span>
            <span className="label">Selectores</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Selectores">
            <NavLink to="css-selectores-basicos" className={subLinkClass}>Básicos</NavLink>
            <NavLink to="css-selectores-avanzados" className={subLinkClass}>Avanzado · Selectores</NavLink>
            <NavLink to="css-practica-selectores" className={subLinkClass}>Pseudoelementos</NavLink>
            <NavLink to="css-pseudoclases" className={subLinkClass}>Pseudoclases</NavLink>
            <NavLink to="css-pseudoclases-funcionales" className={subLinkClass}>Avanzado · Pseudoclases funcionales</NavLink>
          </div>
        </details>

        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">🧠</span>
            <span className="label">Pensar en CSS</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Pensar en CSS">
            <NavLink to="css-pensar-cajas" className={subLinkClass}>Actividad 1 · De HTML a diseño</NavLink>
            <NavLink to="css-pensar-variables" className={subLinkClass}>Tema 2 · Variables CSS</NavLink>
          </div>
        </details>
        
          <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">🍀</span>
            <span className="label">Aspectos visuales</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Aspectos visuales">
            <NavLink to="css-unidades" className={subLinkClass}>Unidades de medida</NavLink>
            <NavLink to="css-texto-1" className={subLinkClass}>Texto y tipografía · Fundamentos</NavLink>
            <NavLink to="css-texto-2" className={subLinkClass}>Texto y tipografía · Profundización</NavLink>
            <NavLink to="css-fondos" className={subLinkClass}>Fondos y gradientes</NavLink>
          </div>
        </details>

        {/* LAYOUT */}
        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">📐</span>
            <span className="label">Layout</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Layout">
            <NavLink to="css-box-model" className={subLinkClass}>Box model</NavLink>
            <NavLink to="css-tamano" className={subLinkClass}>Tamaño · ¿Cuánto debe ocupar?</NavLink>
            <NavLink to="css-espacio" className={subLinkClass}>Espacio · ¿Dónde necesito aire?</NavLink>
            <NavLink to="css-imagenes-1" className={subLinkClass}>Imágenes I · Tamaño y proporción</NavLink>
            <NavLink to="css-imagenes-2" className={subLinkClass}>Imágenes II · Recorte y efectos</NavLink>
            <NavLink to="css-display" className={subLinkClass}>Display y flujo</NavLink>
            <NavLink to="css-overflow" className={subLinkClass}>Overflow y contención</NavLink>
            <NavLink to="css-flexbox-1" className={subLinkClass}>Flexbox I ⭐</NavLink>
            <NavLink to="css-flexbox-mapa" className={subLinkClass}>Flexbox · Mapa padre e hijo</NavLink>
            <NavLink to="css-flexbox-2" className={subLinkClass}>Flexbox II: alineación</NavLink>
            <NavLink to="css-flexbox-3" className={subLinkClass}>Flexbox III: layouts reales</NavLink>
            <NavLink to="css-grid-1" className={subLinkClass}>Grid I · Dibuja la cuadrícula ⭐</NavLink>
            <NavLink to="css-grid-2" className={subLinkClass}>Grid II: cuadrícula adaptable</NavLink>
            <NavLink to="css-grid-3" className={subLinkClass}>Grid III: colocar piezas</NavLink>
            <NavLink to="css-grid-areas" className={subLinkClass}>Grid IV · Areas con nombres ⭐</NavLink>
            <NavLink to="css-position" className={subLinkClass}>Position y z-index</NavLink>
          </div>
        </details>


        {/* PATRONES DE INTERFAZ */}
        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">🧩</span>
            <span className="label">Patrones de interfaz</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Patrones de interfaz">
            <NavLink to="css-botones-vinculos" className={subLinkClass}>I · Botones y vínculos</NavLink>
            <NavLink to="css-navbar" className={subLinkClass}>II · Navegación</NavLink>
            <NavLink to="css-tablas" className={subLinkClass}>III · Tablas</NavLink>
            <NavLink to="css-formularios" className={subLinkClass}>IV · Formularios</NavLink>
            <NavLink to="css-modales" className={subLinkClass}>V · Diálogos</NavLink>
            <NavLink to="css-overlays" className={subLinkClass}>VI · Ayudas contextuales</NavLink>
          </div>
        </details>

        {/* RESPONSIVE */}
        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">📱</span>
            <span className="label">Responsive</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Responsive">
            <NavLink to="css-media-queries" className={subLinkClass}>Media queries</NavLink>
            <NavLink to="css-responsive-layout" className={subLinkClass}>Layout responsive</NavLink>
            <NavLink to="css-accesibilidad" className={subLinkClass}>Accesibilidad</NavLink>
          </div>
        </details>

        {/* EXTRA */}
        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">🚀</span>
            <span className="label">Frameworks</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Extra">
            <NavLink to="css-sass" className={subLinkClass}>Avanzado · SASS</NavLink>
            <NavLink to="css-bootstrap" className={subLinkClass}>Ampliación · Bootstrap</NavLink>
            <NavLink to="css-tailwind" className={subLinkClass}>Avanzado · Tailwind CSS</NavLink>
          </div>
        </details>

        {/* EJERCICIOS */}
        <NavLink to="ejercicios" className={linkClass}>
          <span aria-hidden="true">🏋️</span>
          <span className="label">Ejercicios</span>
        </NavLink>

       
      </div>
    </nav>
  );
}
