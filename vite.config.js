import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // El despliegue del manual sustituye únicamente index.html y assets en el
  // servidor; sus recursos públicos existentes no deben recopiarse.
  publicDir: process.env.DEVCAMPUS_SHELL_BUILD === '1' ? false : 'public',
  build: {
    outDir: process.env.DEVCAMPUS_SHELL_BUILD === '1' ? 'dist-javascript-shell' : 'dist',
    minify: process.env.DEVCAMPUS_SHELL_BUILD === '1' ? false : 'esbuild',
  },
})
