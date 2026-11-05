import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // DevCampus carga este proyecto en un iframe desde esta ruta, no desde la
  // raíz del dominio. Vite utiliza este prefijo para todos los assets del build.
  base: "/contenido-manuales/html/",
});
