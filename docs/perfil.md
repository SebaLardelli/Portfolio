# Perfil — Sebastián Lardelli

Compilación para el portfolio y para entrevistas. Fuentes: CV (`public/cv.pdf`), [GitHub](https://github.com/SebaLardelli), tienda en producción [CalcoMania](https://www.calcoomaniaa.com), TP de Redes (Kathará) y lo que se puede defender en voz alta. No inventar LinkedIn, Mercado Pago ni métricas.

---

## Identidad

| Campo | Dato |
|---|---|
| Nombre | Sebastián Lardelli |
| Rol en el sitio | Desarrollador Backend / Full Stack |
| Credenciales (bajo el rol) | Logo IZO + Técnico Superior en Desarrollo de Software → https://www.institutozonaoeste.edu.ar/ . Logo UAI circular + estudiante de Ingeniería → https://uai.edu.ar/ . Sin pastilla. |
| Lugar | Rosario, Santa Fe, Argentina |
| Mail | sebalardelli@gmail.com |
| Teléfono | +54 3464 440119 |
| GitHub | https://github.com/SebaLardelli |
| LinkedIn | no está en el CV; no inventar URL |
| Foto | `web/public/sebastian-lardelli.png` |
| CV | `web/public/cv.pdf` |

Hero:

> Diseño APIs REST y productos web que quedan en producción: autenticación, persistencia y un front que se puede abrir. Backend en PHP y Node.js; también Python e IA cuando el problema lo pide.

> CalcoMania es un e-commerce real (PHP, Slim, MySQL, JWT) con dominio propio. AI_Agro salió del curso de Inteligencia Artificial de la UTN: visión, RAG y Docker, en Telegram. Técnico Superior; en la UAI está en los últimos años de Ingeniería en Sistemas Informáticos.

El texto de la one-page mezcla **scan humano** (tres productos) con **palabras que buscan avisos y filtros** (API REST, autenticación, JWT, e-commerce, Docker, RAG, TypeScript). Sin inventar métricas ni LinkedIn.

---

## Volver a la versión anterior

El sitio vive en esta carpeta (`Desktop/Portfolio`). El repo de MDW de la UAI es solo el ejercicio de la materia.

---

## Qué va en la web vs qué queda en el CV

Un portfolio de software **no** mezcla oficios. Quien entra a la página tiene que leer: productos, stack, contacto.

| Dato | ¿En la one-page? | ¿Dónde sí? |
|---|---|---|
| Tecnicatura + Ingeniería UAI | Sí, en formación / Sobre mí. MDW es materia, no el título. | Web y CV |
| Curso de IA (UTN) | Sí, formación + experiencia de AI_Agro | Web y CV |
| PHP Slim, Node, Docker, RAG | Sí | Web y CV |
| CalcoMania, AI_Agro, MusicMania, VB escritorio, Kathará | Sí | Web |
| Análisis (elicitación, requerimientos, mockups, prototipos) | Sí, skills + formación IZO + Sobre mí | Web y CV |
| Kathará | Sí, card: ruteo estático y dinámico. Repo del TP final: IZO-Redes/2025-tp-final-SebaLardelli | Web y CV |
| Lardelli \| Noticias | No (maquetado; MusicMania ya cubre HTML/CSS) | Repo / CV |
| Sodería Lardelli, Pinturillo | No | Repo |
| Awas, refrigeración, eléctrica UTN, secundario, CorelDRAW | No | Solo CV |

---

## Formación (solo software, en la web)

| Título | Dónde | Cuándo |
|---|---|---|
| Ingeniería en Sistemas Informáticos | UAI | En curso — últimos años |
| Tecnicatura Superior en Desarrollo de Software | Instituto Zona Oeste | 2023–2025 |
| Curso de Inteligencia Artificial | UTN | 2025 |
| Inglés | Instituto (sin nombre en el CV) | En curso — nivel intermedio |

MDW (Express / TypeScript / Mongo) es una materia de la carrera, no el ítem de formación. Va en Experiencia y en el detalle de la ingeniería.

---

## Experiencia (solo software, en la web)

La materia MDW de la UAI **no** va como primer ítem del timeline ni como si fuera la carrera. La carrera es Ingeniería en Sistemas Informáticos.

### CalcoMania — PHP Slim (producción)

Tienda en [calcoomaniaa.com](https://www.calcoomaniaa.com). Nació como PP2 y quedó publicada con dominio propio. Apache + Slim + MySQL + JWT. **Sesión y carrito con cookies** (no localStorage). En Experiencia: misión + cookies + OTP/roles. El detalle de catálogo/admin va en la card. **No** decir Mercado Pago.

### AI_Agro — curso de IA, UTN (2025)

Proyecto del **curso de Inteligencia Artificial de la UTN**. El productor manda foto, audio o texto y recibe diagnóstico y pronóstico. Analizador propio + otros modelos, RAG, clima. n8n y Docker Compose. No poner ingeniería eléctrica UTN en la web.

---

## Stack en la one-page (recortado)

**Backend:** PHP, Slim, MySQL, JWT, Node.js, Express, TypeScript, MongoDB, Python, Flask.

**Frontend:** HTML, CSS, JavaScript, React.

**IA e infra:** Docker, n8n, RAG, Gemini Vision.

Kathará, Wireshark, Pillow, ES5, Bootstrap, cookies-como-chip: CV o highlight, no sopa de home.

**IA_Agro (detalle para entrevista):** audio y mensaje; Gemini Vision; OpenAI / OpenRouter; OpenWeatherMap; RAG Supabase; Postgres memory. No inventar métricas de ROI.

**Otros del CV:** testing, metodologías ágiles. Inglés: instituto en curso, nivel intermedio (no certificación). VB.NET ya va en la one-page (card + skills).

---

## Proyectos en la one-page

Orden: Proyectos → Experiencia → Skills → Sobre mí. Tres cards.

Capturas **reales** en `web/public/projects/`:

- `calcomania.png` — captura del usuario (catálogo). Enlace solo https://www.calcoomaniaa.com; sin repo.
- `ai-agro.jpg` — captura del usuario: chat de Telegram (pronóstico Rosario + foto de maíz).
- `musicmania.png` — GitHub Pages del juego.

- `esquema-conectividad.png` — esquema de conectividad (árbol de expansión, draw.io). Es la captura de la card Kathará.
- `lab-redes.png` — misma imagen (copia). El recorte chico de ping quedó reemplazado.
- `noticia-rosario.png` queda en `public/` por si se vuelve atrás. No se muestra.

| Proyecto | Qué es | Demo | Repo |
|---|---|---|---|
| CalcoMania | Tienda en producción. Slim + MySQL + JWT. Cookies. Dominio propio. | https://www.calcoomaniaa.com | — |
| AI_Agro | Proyecto del curso de IA (UTN). Bot de Telegram. Visión + RAG + pronósticos. | — | [AI_Agro](https://github.com/SebaLardelli/AI_Agro) |
| MusicMania | Juego 8-bit publicado. HTML/CSS/ES5. | https://sebalardelli.github.io/MusicMania/ | [MusicMania](https://github.com/SebaLardelli/MusicMania) |
| Laboratorio Kathará | Ruteo estático y dinámico (TP final IZO 2025). Dijkstra, Debian/Docker. | — | [2025-tp-final-SebaLardelli](https://github.com/IZO-Redes/2025-tp-final-SebaLardelli) |
| Sistema de ventas VB.NET | Escritorio WinForms + SQL Server. Ticket/factura con ReportViewer. IZO 2024. | — | [VB-Trabajo-Final](https://github.com/SebaLardelli/VB-Trabajo-Final) |

Fuera de la one-page: `SebaLardelli/Redes-Comunicacion` (no enlazar; el que importa es el de IZO-Redes), Noticias, Sodería, Pinturillo, este MDW.

---

## Cómo se usa en el código del front

Todo el texto editable: `src/data/profile.ts`.  
Foto y CV: `public/`.  
Capturas: `public/projects/`.  
Badge de API: solo en `import.meta.env.DEV` (en el build público no aparece “API apagada”).

Si cambia un dato (mail, demo, stack), se cambia el markdown **y** `profile.ts`.
