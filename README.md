# Portfolio — Sebastián Lardelli

Sitio personal. React 19, Vite y Tailwind.

Publicado en https://sebalardelli.github.io/Portfolio/

## Cómo correrlo

1. Node 22 o superior.
2. `npm install`
3. `npm run dev` — http://localhost:5173
4. `npm run build` genera `dist/`. `npm run preview` sirve esa build.

Nombre, mail, teléfono, formación y proyectos están en `src/data/profile.ts`.
Foto, CV y capturas: `public/`.

## Deploy

El push a `main` dispara `.github/workflows/deploy.yml` (GitHub Pages).
En el repositorio, Settings → Pages → Source tiene que quedar en **GitHub Actions**.
