# Portfolio — Sebastián Lardelli

Sitio personal. Stack: Astro 5 y Bootstrap.

Astro 5, y no la 7: en esta PC el Control de aplicaciones de Windows bloquea el binario nativo del compilador de Astro 7. La 5 compila igual y el sitio es el mismo.

## Cómo correrlo

1. Node 22 o superior.
2. `npm install`
3. `npm run dev`
4. `npm run build` genera `dist/`. `npm run preview` sirve esa build.

El nombre, el email, GitHub y LinkedIn están en `src/data/profile.ts`. Los proyectos, en `src/data/projects.ts`.

## Deploy

GitHub Pages, en https://sebalardelli.github.io/Portfolio/

El push a `main` dispara `.github/workflows/deploy.yml`. En el repositorio, Settings → Pages → Source tiene que quedar en **GitHub Actions**, no en una rama.
