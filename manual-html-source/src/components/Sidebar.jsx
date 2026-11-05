import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) => `nav-item ${isActive ? "active" : ""}`;

  return (
    <nav className="menu" aria-label="Menú del manual UF1841">
      <NavLink to="/" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🏠</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Inicio
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/0" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🧑‍💻</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 0 · Entorno
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/1" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🎯</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 1 · Diseño Web
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/2" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🧩</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 2 · Prototipo
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/3" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🏷️</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 3 · Lenguajes de marcado
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/4" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">📄</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 4 · Introducción HTML
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/5" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🔤</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 5 · Etiquetas
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/6" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🧾</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 6 · Cabecera
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/7" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🧱</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 7 · Cuerpo
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/8" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🗺️</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 8 · Otros elementos HTML
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/9" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">📊</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 9 · Tablas
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/10" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">📝</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 10 · Formularios
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/11" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">📎</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 11 · Footer
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/12" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🖼️</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 12 · Insertar imágenes
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/13" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">📋</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 13 · Buenas prácticas
            </span>
          </>
        )}
      </NavLink>

      <NavLink to="/tema/14" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🧪</span>
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 14 · Test de repaso HTML
            </span>
          </>
        )}
      </NavLink>
      
      <NavLink to="/tema/15" end className={linkClass}>
        {({ isActive }) => (
          <>
            <span aria-hidden="true">🧪</span>npm 
            <span className="label" aria-current={isActive ? "page" : undefined}>
              Tema 15 · Ejercicio final HTML
            </span>
          </>
        )}
      </NavLink>
    </nav>
  );
}
