import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const groups = [
  { id: 'introduccion', label: 'Introducción', links: [['Preparación', 'preparacion'], ['Qué es CSS', 'primera-regla'], ['Selectores', 'selector-etiqueta'], ['Clases', 'clases'], ['ID', 'id'], ['Apariencia', 'apariencia'], ['Unidades', 'unidades']] },
  { id: 'fundamentos', label: 'Fundamentos', links: [['Cascada', 'cascada'], ['Modelo de caja', 'caja'], ['Flujo y display', 'flujo']] },
  { id: 'layout', label: 'Layout', links: [['Flexbox I', 'flexbox-1'], ['Flexbox II', 'flexbox-2'], ['Grid I', 'grid-1'], ['Grid II', 'grid-2'], ['Posicionamiento', 'posicionamiento']] },
  { id: 'responsive', label: 'Responsive y accesibilidad', links: [['Diseño responsive', 'responsive'], ['Interacción y accesibilidad', 'interaccion']] },
  { id: 'moderno', label: 'CSS moderno', links: [['Efectos', 'efectos'], ['Variables', 'variables'], ['DevTools', 'devtools']] },
];

export default function TopNav() {
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) setOpenMenu(null);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpenMenu(null);
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const toggleMenu = (menuId) => {
    setOpenMenu((current) => (current === menuId ? null : menuId));
  };
  const closeMenu = () => setOpenMenu(null);

  return (
    <nav ref={navRef} className="topnav" aria-label="Navegación principal">
      <div className="topnav-inner">
        <NavLink to="/" className="topnav-link" onClick={closeMenu}>Inicio</NavLink>
        {groups.map(({ id, label, links }) => {
          const isOpen = openMenu === id;
          const menuId = `menu-${id}`;
          return (
            <div className={`topnav-group${isOpen ? ' is-open' : ''}`} key={id}>
              <button type="button" className="topnav-link topnav-menu-button" aria-expanded={isOpen} aria-controls={menuId} aria-haspopup="true" onClick={() => toggleMenu(id)}>
                {label}
              </button>
              <div id={menuId} className="topnav-submenu">
                {links.map(([linkLabel, lessonId]) => (
                  <NavLink key={lessonId} to={`/tema/${lessonId}`} className="submenu-link" onClick={closeMenu}>
                    {linkLabel}
                  </NavLink>
                ))}
              </div>
            </div>
          );
        })}
        <NavLink to="/ejercicios" className="topnav-link" onClick={closeMenu}>Práctica</NavLink>
        <NavLink to="/ampliacion" className="topnav-link" onClick={closeMenu}>Ampliación</NavLink>
      </div>
    </nav>
  );
}
