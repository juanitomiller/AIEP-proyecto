import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Cambia esto por el nombre de tu repositorio en GitHub
  // Si tu repositorio se llama "mi-proyecto", usa '/mi-proyecto/'
  base: process.env.NODE_ENV === 'production' ? '/AIEP-proyecto-2/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
