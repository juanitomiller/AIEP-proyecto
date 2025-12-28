# Clandestin0 - Tienda de Cervezas

Proyecto React desarrollado con Vite para una tienda de cervezas online.

## 🚀 Características

- Catálogo de productos con imágenes
- Carrito de compras funcional
- Sistema de autenticación y registro
- Perfil de usuario editable
- Diseño responsive y moderno
- Integración con GitHub Pages para deploy automático

## 📋 Requisitos Previos

- Node.js 18 o superior
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd AIEP-proyecto
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción

## 🌐 Deploy en GitHub Pages

El proyecto está configurado para hacer deploy automático a GitHub Pages cuando se hace push a la rama `main` o `master`.

### Configuración del Base Path

**IMPORTANTE**: Antes de hacer deploy, actualiza el `base` en `vite.config.js` con el nombre exacto de tu repositorio:

```js
base: process.env.NODE_ENV === 'production' ? '/NOMBRE-DE-TU-REPOSITORIO/' : '/',
```

### Pasos para Deploy

1. Asegúrate de que el nombre del repositorio en GitHub coincida con el `base` en `vite.config.js`
2. Haz push a la rama `main` o `master`
3. Ve a la pestaña **Actions** en GitHub
4. El workflow se ejecutará automáticamente
5. Una vez completado, ve a **Settings > Pages** y selecciona **GitHub Actions** como fuente
6. Tu sitio estará disponible en: `https://TU-USUARIO.github.io/NOMBRE-REPOSITORIO/`

## 📁 Estructura del Proyecto

```
├── public/
│   └── img/          # Imágenes estáticas
├── src/
│   ├── components/    # Componentes React
│   ├── context/       # Contextos de React
│   ├── styles/        # Estilos CSS
│   ├── App.jsx        # Componente principal
│   └── main.jsx      # Punto de entrada
├── data/
│   └── products.js   # Datos de productos
└── vite.config.js    # Configuración de Vite
```

## 🎨 Tecnologías Utilizadas

- React 18
- Vite
- React Router DOM
- Bootstrap 5
- React Icons

## 📝 Notas

- Las imágenes deben estar en la carpeta `public/img/`
- Los productos se definen en `data/products.js`
- El sistema de autenticación usa localStorage (no es producción-ready)

## 📄 Licencia

Copyright © AIEP 2025
