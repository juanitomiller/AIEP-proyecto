# Instrucciones para Deploy en GitHub Pages

## ⚠️ IMPORTANTE: Configuración del Nombre del Repositorio

**ANTES de hacer deploy, verifica el nombre exacto de tu repositorio en GitHub.**

1. Ve a tu repositorio en GitHub
2. El nombre aparece en la URL: `https://github.com/TU-USUARIO/NOMBRE-REPOSITORIO`
3. Actualiza el archivo `vite.config.js` con el nombre correcto:

```js
base: process.env.NODE_ENV === 'production' ? '/NOMBRE-REPOSITORIO/' : '/',
```

**Ejemplo:** Si tu repositorio se llama `mi-proyecto`, la línea debe ser:
```js
base: process.env.NODE_ENV === 'production' ? '/mi-proyecto/' : '/',
```

## Configuración de GitHub Pages

1. Ve a **Settings** > **Pages** en tu repositorio
2. En **Source**, selecciona:
   - **Branch: gh-pages** (si usas deploy manual)
   - **GitHub Actions** (si usas el workflow automático)
3. Guarda los cambios

## Pasos para Deploy

### Opción 1: Usando GitHub Actions (Recomendado) ✅

1. El archivo `.github/workflows/deploy.yml` ya está configurado
2. Haz commit y push a la rama `main` o `master`:
   ```bash
   git add .
   git commit -m "Configurar deploy"
   git push
   ```
3. Ve a la pestaña **Actions** en GitHub
4. GitHub Actions automáticamente construirá y desplegará tu sitio
5. Espera a que termine (puede tomar 2-3 minutos)
6. Tu sitio estará disponible en: `https://TU-USUARIO.github.io/NOMBRE-REPOSITORIO/`

### Opción 2: Deploy Manual

1. Instala gh-pages (si no lo tienes):
   ```bash
   npm install --save-dev gh-pages
   ```

2. Ejecuta el comando de deploy:
   ```bash
   npm run deploy
   ```

3. Esto creará una rama `gh-pages` con tu sitio construido
4. Ve a **Settings** > **Pages** y selecciona la rama `gh-pages`

## Solución de Problemas

### Error 404 o página en blanco

1. **Verifica el nombre del repositorio** en `vite.config.js`
2. **Asegúrate de que el base tenga el formato correcto:**
   - Debe empezar y terminar con `/`
   - Ejemplo: `/mi-proyecto/` ✅
   - NO: `/mi-proyecto` ❌ o `mi-proyecto/` ❌

3. **Limpia el build y vuelve a construir:**
   ```bash
   rm -rf dist
   npm run build
   ```

### Las imágenes no se cargan

- Las rutas de imágenes ya están configuradas para usar `import.meta.env.BASE_URL`
- Si aún hay problemas, verifica que los archivos estén en la carpeta `public/img/`

### Las rutas de navegación no funcionan

- React Router ya está configurado con `basename={import.meta.env.BASE_URL}`
- Asegúrate de que el `base` en `vite.config.js` coincida con el nombre del repositorio

