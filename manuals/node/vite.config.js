import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

export default defineConfig({
  base: '/manuales-backend/node/',
  plugins: [react(), tailwindcss()],
  server: { fs: { allow: [projectRoot] } },
  build: { outDir: 'dist', emptyOutDir: true },
});
