import { useState } from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function AppLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">Saltar al contenido</a>

      <header className="topbar">
        <div className="topbar-inner">
          <TopNav
            isSidebarCollapsed={isSidebarCollapsed}
            onToggleSidebar={() => setIsSidebarCollapsed(v => !v)}
          />
        </div>
      </header>

      <div className={`main-grid ${isSidebarCollapsed ? "is-collapsed" : ""}`}>
        <aside className="sidebar" aria-label="Navegación lateral">
          <Sidebar isCollapsed={isSidebarCollapsed} />
        </aside>

        <main id="main" className="content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
