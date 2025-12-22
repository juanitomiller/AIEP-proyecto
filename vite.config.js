import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // En GitHub Pages, el base debe ser el nombre del repositorio
  // IMPORTANTE: Cambia '/AIEP-proyecto/' por el nombre real de tu repositorio en GitHub
  base: process.env.NODE_ENV === 'production' ? '/AIEP-proyecto/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
