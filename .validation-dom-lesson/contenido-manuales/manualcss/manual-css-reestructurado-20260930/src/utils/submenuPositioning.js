// =========================================================
// SUBMENU POSITIONING - Posicionamiento inteligente de submenús
// =========================================================

export function initSubmenuPositioning() {
  // Función para cerrar todos los submenús
  function closeAllSubmenus() {
    document.querySelectorAll('.topnav-group[open]').forEach(details => {
      details.open = false;
    });
  }
  
  // Función para posicionar un submenú (fixed respecto al viewport)
  function positionSubmenu(details, submenu) {
    const summary = details.querySelector('summary');
    if (!summary) return;

    const rect = summary.getBoundingClientRect();
    const submenuRect = submenu.getBoundingClientRect();
    
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    
    // Coordenadas base: justo debajo del summary, alineado a la izquierda
    let top = rect.bottom + 8; // 8px de margen
    let left = rect.left;
    let transform = 'none';
    
    // Verificar si se sale por la derecha
    if (left + submenuRect.width > viewport.width - 20) {
      left = rect.right - submenuRect.width;
    }
    
    // Verificar si se sale por abajo
    if (top + submenuRect.height > viewport.height - 20) {
      // Posicionar arriba del summary
      top = rect.top - submenuRect.height - 8;
    }
    
    // Si aún se sale por arriba, centrar en pantalla
    if (top < 20) {
      top = Math.max(20, (viewport.height - submenuRect.height) / 2);
    }
    
    // Aplicar posición directamente sobre el submenú (inline styles)
    submenu.style.top = `${top}px`;
    submenu.style.left = `${left}px`;
    submenu.style.transform = transform;

    // Además, exponer como variables CSS por si el CSS las usa
    details.style.setProperty('--submenu-top', `${top}px`);
    details.style.setProperty('--submenu-left', `${left}px`);
    details.style.setProperty('--submenu-transform', transform);
  }
  
  // Manejar apertura de submenús
  function handleDetailsToggle(event) {
    const details = event.target;
    const submenu = details.querySelector('.topnav-submenu');
    
    if (!submenu) return;
    
    if (details.open) {
      // Cerrar otros submenús abiertos
      document.querySelectorAll('.topnav-group[open]').forEach(openDetails => {
        if (openDetails !== details) {
          openDetails.open = false;
        }
      });
      
      // Posicionar después de que el elemento sea visible
      requestAnimationFrame(() => {
        positionSubmenu(details, submenu);
      });
    }
  }
  
  // Manejar clicks en enlaces de submenú
  function handleSubmenuLinkClick(event) {
    // Verificar si el click fue en un enlace de submenú
    if (event.target.classList.contains('submenu-link')) {
      // Cerrar todos los submenús
      closeAllSubmenus();
    }
  }
  
  // Cerrar submenú al hacer clic fuera
  function handleOutsideClick(event) {
    const openSubmenu = document.querySelector('.topnav-group[open]');
    if (openSubmenu && !openSubmenu.contains(event.target)) {
      openSubmenu.open = false;
    }
  }
  
  // Reposicionar en resize
  function handleResize() {
    const openSubmenu = document.querySelector('.topnav-group[open] .topnav-submenu');
    if (openSubmenu) {
      const details = openSubmenu.closest('.topnav-group');
      requestAnimationFrame(() => {
        positionSubmenu(details, openSubmenu);
      });
    }
  }
  
  // Cerrar submenús al hacer scroll
  function handleScroll() {
    closeAllSubmenus();
  }
  
  // Event listeners
  document.addEventListener('toggle', handleDetailsToggle);
  document.addEventListener('click', handleSubmenuLinkClick);
  document.addEventListener('click', handleOutsideClick);
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);
  
  // Cleanup function
  return () => {
    document.removeEventListener('toggle', handleDetailsToggle);
    document.removeEventListener('click', handleSubmenuLinkClick);
    document.removeEventListener('click', handleOutsideClick);
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', handleScroll);
  };
}