import {
  Menu,
  X,
} from 'lucide-react';

import {
  useState,
} from 'react';

import {
  Link,
  NavLink,
} from 'react-router-dom';

import Container from './Container';

const links = [
  [
    'Inicio',
    '/',
  ],
  [
    'Cursos',
    '/cursos',
  ],
  [
    'Manuales',
    '/manuales',
  ],
  [
    'Proyectos',
    '/proyectos',
  ],
  [
    'Proyectos de alumnos',
    '/proyectos-alumnos',
  ],
  [
    'Sobre mí',
    '/sobre-mi',
  ],
];

export default function SiteHeader() {
  const [
    open,
    setOpen,
  ] = useState(false);

  const getNavItemClasses = ({
    isActive,
  }) => {
    const baseClasses = `
      block
      rounded-lg
      px-3
      py-2
      text-sm
      font-semibold
      transition-colors
      duration-200
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-brand-yellow
      focus-visible:ring-offset-2
      focus-visible:ring-offset-brand-purple
    `;

    if (isActive) {
      return `
        ${baseClasses}
        bg-brand-yellow
        text-brand-purple
      `;
    }

    return `
      ${baseClasses}
      text-white
      hover:bg-brand-blue
      hover:text-white
    `;
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-brand-blue
        bg-brand-purple
        shadow-md
      "
    >
      <Container
        className="
          flex
          min-h-16
          items-center
          justify-between
          gap-4
        "
      >
        <Link
          to="/"
          className="
            flex
            flex-col
            py-2
            leading-tight
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-brand-yellow
            focus-visible:ring-offset-2
            focus-visible:ring-offset-brand-purple
          "
        >
          <span
            className="
              text-xl
              font-extrabold
              tracking-tight
              text-white
            "
          >
            DevCampus
          </span>

          <span
            className="
              hidden
              text-xs
              font-medium
              text-brand-lavender
              sm:block
            "
          >
            Inma Contreras · Docente y desarrolladora web
          </span>
        </Link>

        <nav
          className="
            hidden
            lg:block
          "
          aria-label="Navegación principal"
        >
          <ul
            className="
              flex
              items-center
              gap-1
            "
          >
            {links.map(
              ([
                name,
                to,
              ]) => (
                <li
                  key={to}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={getNavItemClasses}
                  >
                    {name}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={
            open
              ? 'Cerrar menú'
              : 'Abrir menú'
          }
          aria-expanded={open}
          onClick={() => {
            setOpen(!open);
          }}
          className="
            rounded-lg
            p-2
            text-white
            transition-colors
            hover:bg-brand-blue
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-brand-yellow
            focus-visible:ring-offset-2
            focus-visible:ring-offset-brand-purple
            lg:hidden
          "
        >
          {open ? (
            <X
              aria-hidden="true"
            />
          ) : (
            <Menu
              aria-hidden="true"
            />
          )}
        </button>
      </Container>

      {open && (
        <nav
          className="
            border-t
            border-brand-blue
            bg-brand-purple
            lg:hidden
          "
          aria-label="Navegación móvil"
        >
          <Container>
            <ul
              className="
                space-y-1
                py-3
              "
            >
              {links.map(
                ([
                  name,
                  to,
                ]) => (
                  <li
                    key={to}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className={getNavItemClasses}
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      {name}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
