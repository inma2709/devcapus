/**
 * Construye rutas a los archivos públicos del manual sin depender de la URL
 * de la página activa. Vite aporta BASE_URL en compilación.
 */
export const manualAsset = (filename) => `${import.meta.env.BASE_URL}${filename}`;
