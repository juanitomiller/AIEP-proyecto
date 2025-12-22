import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: 
  // - Si tu sitio está en: usuario.github.io/repositorio/ → usa '/repositorio/'
  // - Si tu sitio está en: usuario.github.io/ (raíz) → usa '/'
  // Verifica la URL real de tu GitHub Pages y ajusta esto
  base: process.env.NODE_ENV === 'production' ? '/AIEP-proyecto/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
