import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // En GitHub Pages, el base debe ser el nombre del repositorio
  // Puedes cambiarlo aquí o usar la variable de entorno BASE_URL
  base: process.env.BASE_URL || (process.env.NODE_ENV === 'production' ? '/AIEP-proyecto/' : '/'),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
