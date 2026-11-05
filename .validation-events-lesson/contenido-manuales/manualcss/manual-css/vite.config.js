import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/contenido-manuales/manualcss/manual-css/dist/',
  plugins: [react()],
})
