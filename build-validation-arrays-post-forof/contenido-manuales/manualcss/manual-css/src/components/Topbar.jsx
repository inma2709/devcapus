import { useEffect, useState } from "react";

const THEME_KEY = "manualcss-theme";

export default function Topbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const stored = window.localStorage.getItem(THEME_KEY);
      if (stored === "dark") return true;
      if (stored === "light") return false;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  // Sincronizar el atributo de tema con el <html> y el storage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }

    try {
      window.localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    } catch {
      // ignorar errores de storage (modo privado, etc.)
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
      <div className="brand" aria-label="Marca del manual">
        <span aria-hidden="true">🎨</span>
        <span>Manual CSS</span>
      </div>

      <div className="top-actions">
        <button
          className="icon-btn"
          type="button"
          onClick={toggleTheme}
          aria-pressed={isDark}
          aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          ◐
        </button>
        
      </div>
    </>
  );
}
