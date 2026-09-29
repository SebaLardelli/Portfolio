# Portfolio — Sebastián Lardelli

Sitio personal. Stack: Astro 5 y Bootstrap.

Astro 5, y no la 7: en esta PC el Control de aplicaciones de Windows bloquea el binario nativo del compilador de Astro 7. La 5 compila igual y el sitio es el mismo.

## Cómo correrlo

1. Node 22 o superior.
2. `npm install`
3. `npm run dev` abre http://localhost:4321
4. `npm run build` genera `dist/`. `npm run preview` sirve esa build.

El nombre, el email, GitHub y LinkedIn están en `src/data/profile.ts`. Los proyectos, en `src/data/projects.ts`.

## Deploy

Pendiente. Host previsto: Vercel o Netlify, sitio estático, comando `npm run build`, salida `dist`.
