import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // El manual se publica bajo esta ruta, no en la raíz del portal. Mantener
  // la base explícita evita que sus recursos se mezclen con /assets del sitio.
  base: "/contenido-manuales/manualcss/manual-css/dist/",
  plugins: [react()],
})
