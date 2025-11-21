# 🌊 Pablo Dive - Web Oficial

Este repositorio contiene el código fuente de la página web oficial de **Pablo Dive**, biólogo marino, activista ambiental y creador de contenido enfocado en el océano y la conservación marina.

El proyecto está construido con **Astro**, priorizando el rendimiento, la optimización SEO y una experiencia de usuario fluida con animaciones modernas.

## 🚀 Tecnologías

El proyecto utiliza un stack moderno centrado en el rendimiento y la experiencia de desarrollo:

- **Framework**: [Astro](https://astro.build/) (v5)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) (v4) con [DaisyUI](https://daisyui.com/)
- **Animaciones**: [GSAP](https://gsap.com/) y [Lenis](https://lenis.studio/) (Smooth Scroll)
- **Despliegue**: [Vercel](https://vercel.com/) (Adapter Static)
- **CMS / Contenido**: Content Island
- **Calidad de Código**: ESLint, Prettier, Husky, Lint-staged

## 🛠️ Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [pnpm](https://pnpm.io/) (gestor de paquetes utilizado en este proyecto)

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd pablodive
   ```

2. Instala las dependencias:
   ```bash
   pnpm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example` (si existe) o asegúrate de definir las siguientes variables:

   ```env
   CONTENT_ISLAND_SECRET_TOKEN=tu_token_aqui
   ```

## scripts 📜 Scripts Disponibles

En el `package.json` encontrarás los siguientes comandos útiles:

| Comando | Descripción |
| :--- | :--- |
| `pnpm dev` | Inicia el servidor de desarrollo local en `http://localhost:4321`. |
| `pnpm build` | Realiza el chequeo de tipos y construye el sitio para producción en `dist/`. |
| `pnpm preview` | Sirve la versión construida localmente para previsualizarla. |
| `pnpm clean` | Elimina las carpetas `dist` y `.astro` para una limpieza completa. |
| `pnpm lint` | Ejecuta ESLint para encontrar problemas en el código. |
| `pnpm format` | Formatea el código usando Prettier. |
| `pnpm type-check`| Ejecuta `astro check` para validación de tipos TypeScript. |

## 📂 Estructura del Proyecto

```text
/
├── public/            # Archivos estáticos (imágenes, robots.txt, etc.)
├── src/
│   ├── components/    # Componentes reutilizables (.astro, .jsx, etc.)
│   ├── layouts/       # Plantillas de diseño principales
│   ├── pages/         # Rutas de la aplicación (file-based routing)
│   └── styles/        # Estilos globales o específicos
├── astro.config.mjs   # Configuración de Astro
├── tailwind.config.js # Configuración de Tailwind (si aplica)
└── package.json       # Dependencias y scripts
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, asegúrate de seguir las reglas de linting y formateo antes de enviar un Pull Request.

1. Haz un fork del proyecto.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Añade nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

Desarrollado por [Rubén Afonso](https://github.com/rubentnf)
