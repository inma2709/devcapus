export default function TopNav({ isSidebarCollapsed, onToggleSidebar }) {
  return (
    <>
      <div className="brand" aria-label="Manual UF1841">
        <span aria-hidden="true">📘</span>
        <span>Manual UF1841 · HTML</span>
      </div>

      <div className="top-actions">
        <button
          type="button"
          className="icon-btn"
          onClick={onToggleSidebar}
          aria-label={isSidebarCollapsed ? "Mostrar barra lateral" : "Ocultar barra lateral"}
          title={isSidebarCollapsed ? "Mostrar barra lateral" : "Ocultar barra lateral"}
        >
          {isSidebarCollapsed ? "⟩" : "⟨"}
        </button>
      </div>
    </>
  );
}
