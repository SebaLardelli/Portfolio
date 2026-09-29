# Portfolio Astro — brief para iterar

Documento vivo. La carpeta de trabajo es `Desktop/Portfolio/`. Este archivo (`portfolio.md`) es el guion: textos, estética y orden de commits. El sitio Astro se arma en esta misma carpeta, fuera de `mdw-2026` y de `mdw-2026-main`. Cuando un dato esté entre corchetes, hay que reemplazarlo antes de publicar.

Estado: el sitio ya está en esta carpeta (`npm run dev`). Nombre, mail, teléfono y GitHub salen del CV. Faltan LinkedIn y los links de cada proyecto. La foto se sacó del PDF del CV.

---

## Qué es Dijkstra (y cómo nombrarlo)

No existe un simulador comercial llamado “djstra”. El nombre que usás es **Dijkstra** (Edsger Dijkstra): algoritmo de camino de menor costo en un grafo con pesos no negativos.

En redes se usa así:

- Cada router o switch es un **nodo**.
- Cada enlace es una **arista** con un costo (distancia, latencia, ancho de banda invertido, cantidad de saltos).
- Desde un nodo origen, Dijkstra calcula el camino de **menor costo** hacia el resto.
- Con ese resultado se arma la **tabla de reenvío**: para cada destino, el siguiente salto.
- Es la idea central del ruteo por estado de enlace (link-state), el mismo criterio que usa OSPF para elegir rutas dentro de un área.

En el portfolio se nombra **Dijkstra**, nunca “djstra”. Es una parte del bloque de redes, no el título de todo el bloque.

### Qué entra de redes

Experiencia de cursada y práctica, para defender en una entrevista:

- **Direccionamiento estático.** Calcular una red IPv4: dirección de red, máscara, cantidad de hosts, primera y última utilizable, broadcast y puerta de enlace. Asignar esa configuración a mano en hosts y routers.
- **Direccionamiento dinámico.** Definir el rango que entrega DHCP (pool, máscara, gateway, DNS) y distinguir qué queda fijo (servidores, routers) y qué sale del pool (clientes).
- **Wireshark.** Capturar tráfico y leer la trama por capas: Ethernet, IP, TCP o UDP, y HTTP cuando corresponde. Filtrar una conversación y comprobar que la asignación y la ruta se ven en el paquete, no solo en el esquema.
- **Camino de menor costo.** Con la topología armada, Dijkstra elige el siguiente salto. Sirve para contrastar la tabla de reenvío con lo que muestra la captura.

Datos que siguen abiertos (no inventar un repo):

- [ ] ¿Lo hiciste en Packet Tracer, GNS3, en máquinas virtuales, o en un script propio?
- [ ] Repo o captura publicable: [ ]
- [ ] Una topología concreta para contar en la card (por ejemplo, dos subredes, un router, DHCP en una y estática en la otra): [ ]

---

## Posición del sitio

Una página, en español, para una búsqueda laboral real.

- Título: **Técnico Superior en Desarrollo de Software**. Cubre interfaz, servidor, datos y redes. No reducirlo a “Desarrollador Backend”.
- Subtítulo honesto: en formación con TypeScript, Astro y Python. No decir “Full Stack senior”.
- Nombre: Sebastián Lardelli. Mail, teléfono y GitHub salen del CV, aunque parte de ese CV esté desactualizada.
- Hilo conductor: **cómo viaja un mensaje**. En la web es un request HTTP. En una red es un paquete que elige el camino de menor costo. El sitio tiene que sentirse de alguien que entiende las dos cosas.

El backend de la materia (Express + TypeScript + MongoDB + JWT + Zod, recursos en `/api/v1`) **no se copia** dentro del portfolio. Sirve como referencia mental y como uno de los tres proyectos. Astro publica HTML estático; un servidor Express no hace falta para aprobar.

---

## Estética

Fondo negro con luces suaves (verde y azul) y una grilla tenue, como los portfolios oscuros de Astro (Lambda, Falcon, y sitios con marquee de stack). Bootstrap 5 solo para la grilla. Sin el grafo de nodos y sin las etiquetas `GET /`.

Evitar: degradados violeta genéricos, “Proyecto 1”, Lorem ipsum, cards idénticas de plantilla, iconos decorativos sin función.

### Paleta

| Token | Uso | Valor |
|---|---|---|
| `--ink` | Texto principal | `#17211b` |
| `--paper` | Fondo claro | `#f4f1ea` |
| `--panel` | Cards | `#fffdf8` |
| `--line` | Bordes | `#d7d1c5` |
| `--signal` | Acento (un solo color: “enlace activo”) | `#0f6e56` |
| `--signal-ink` | Texto sobre acento | `#f4f1ea` |
| `--muted` | Texto secundario | `#5c6560` |
| `--mono` | Etiquetas tipo `GET`, costos, rutas | fuente monoespaciada del sistema |

Modo oscuro (opcional, suma nota): `--paper` pasa a `#121614`, `--ink` a `#e7efe9`, `--signal` se mantiene. Guardar la preferencia en `localStorage` y respetar `prefers-color-scheme` la primera vez.

### Barra de stack

Debajo del nombre, una barra horizontal que se desplaza con los lenguajes y los conocimientos (HTML, PHP, JavaScript, Wireshark, DHCP, Docker, etc.). Si el sistema pide menos movimiento, la barra queda quieta y envuelta.

### Movimiento

Transición corta al hacer scroll (opacidad). En CSS:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## Textos (borrador, listos para corregir)

Reemplazar todo lo que esté entre corchetes. El tono es el tuyo: concreto, sin adjetivos de marketing.

### Hero

- Nombre: Sebastián Lardelli
- Rol: Técnico Superior en Desarrollo de Software
- Frase: Desarrollo interfaces web, APIs y bases de datos. En redes calculo el direccionamiento y analizo el tráfico.
- Botón primario: `Ver proyectos` → `#proyectos`
- Botón secundario: `Contactarme` → `#contacto`
- Foto: [ruta o “sin foto en v1”]. Si hay foto, `alt` con el nombre, no “foto” ni “avatar”.

Un solo `h1`: el nombre.

### Sobre mí

Texto del CV, con la ortografía corregida:

Soy una persona trabajadora, organizada y responsable. Tengo experiencia en distintas tareas. También me considero una persona resolutiva, con buen ánimo y capaz de resolver problemas.

Debajo van la experiencia y la formación del mismo CV: refrigeración, calcomanías (2022–2024), Awas en Acebal (2017–2024), tecnicatura en el Instituto Zona Oeste (2023–2025), ingeniería eléctrica en la UTN (2020–2022), refrigeración en el ITA (2017–2018) y secundario en la E.E.S.O. Profesor Luis Ravera (2014–2019).

#### Párrafo corto de API REST (para la bio o para una nota al pie de habilidades, no las dos)

Una API REST trata los datos como recursos con una URL. El verbo dice la intención: GET lee, POST crea, PUT o PATCH actualiza, DELETE borra. El servidor contesta con un código (200, 201, 400, 401, 404, 500) y un cuerpo, en general JSON. No guarda la sesión del cliente en el servidor: cada request trae lo necesario para entenderse, por ejemplo un token. Eso es lo que vengo practicando en PHP (Slim, JWT, MySQL) y en Node (Express, validación, MongoDB).

### Habilidades

Agrupadas. Solo lo que podés defender en una entrevista.

**Frontend**

- HTML semántico
- CSS
- Bootstrap
- JavaScript (navegador, sólido)

**Backend**

- PHP (sólido): rutas, controladores, auth, JWT
- APIs HTTP / REST: recursos, verbos, códigos de estado, JSON
- JavaScript en servidor (Node y Express, en formación con la materia)
- TypeScript (principiante)

**Datos**

- SQL Server
- MySQL
- MongoDB

**Infra y redes**

- Direccionamiento IPv4 estático: subred, máscara, rango útil, broadcast, gateway
- Asignación dinámica con DHCP (pool, reservas, qué queda fijo)
- Análisis de tramas con Wireshark (Ethernet, IP, TCP/UDP, HTTP)
- Dijkstra: camino de menor costo y tabla de reenvío
- Linux
- Máquinas virtuales
- Docker

**En aprendizaje**

- Astro
- Python

### Proyectos (mínimo 3, con datos reales)

#### 1. Calcomanía

Tienda de calcomanías. Trabajo final del técnico superior.

- Qué hace: catálogo, carrito, usuarios, recuperación por código, panel con roles y permisos, puntos de venta y retiro, métricas, backup y cobro con Mercado Pago.
- Cómo está hecha: PHP (Slim), MySQL, JWT, HTML/CSS/JS en el cliente. Los recursos viven bajo `/api/...` (auth, productos, ventas, carrito).
- Tecnologías: PHP, Slim, MySQL, JWT, JavaScript, Mercado Pago
- Repo: [url]
- Demo: [url o “sin demo pública”]

#### 2. API de la materia (MDW)

API de práctica: alumnos, materias y autenticación.

- Qué hace: CRUD, validación del body, hash de contraseñas, sesión con JWT en cookie `httpOnly`, healthcheck.
- Cómo está hecha: Express organiza la app, las rutas reparten por recurso (`/api/v1/students`, `/subjects`, `/auth`), un middleware valida con Zod y el controller habla con Mongo vía Mongoose.
- Tecnologías: Node.js, Express, TypeScript, MongoDB, Mongoose, Zod, JWT, bcrypt
- Repo: [url de este proyecto, si es público]
- Demo: [url o “API sin frontend desplegado”]

Si el repo de la materia es privado o es el del profesor, no lo uses como entrega. En ese caso el proyecto 2 del portfolio es **este mismo sitio**, y Calcomanía + Dijkstra cubren el resto. El portfolio cuenta como proyecto: Astro, contenido en datos, deploy.

#### 3. Direccionamiento y análisis de tráfico

Práctica de redes: armar la topología, numerarla y comprobar en la captura que el paquete viaja como dice el esquema.

- Qué hace: cálculo de subredes, asignación estática en routers y servidores, pool DHCP para clientes, lectura de la trama en Wireshark y, cuando la ruta depende del costo, elección del siguiente salto con Dijkstra.
- Tecnologías: IPv4, DHCP, Wireshark, Dijkstra
- Repo: [url]
- Demo: [url]

#### Reserva, si Dijkstra no tiene repo a tiempo

El portfolio en Astro pasa a ser el tercer proyecto (este sitio, su repo y el deploy). Dijkstra queda como habilidad en “Infra y redes”, no como card vacía.

### Contacto

- Email: sebalardelli@gmail.com
- Teléfono: +54 3464 440119
- GitHub: https://github.com/SebaLardelli
- LinkedIn: [no está en el CV; no inventar el link]
- CV: [opcional, `public/cv.pdf`]

Formulario: **no en la primera versión**. La consigna lo marca opcional y, si está, tiene que validar. Se agrega en el commit de opcionales: nombre, email y mensaje requeridos; email con formato; mensajes de error al lado del campo; sin enviar a ningún lado hasta tener un destino (Formspree o un endpoint). Un formulario que “no hace nada” y tampoco avisa, resta.

### Footer

Nombre, año, link al repo del portfolio. Una línea: Técnico Superior en Desarrollo de Software.

---

## Stack elegido y por qué

**Astro + Bootstrap 5 + CSS propio.**

Astro es lo nuevo (la consigna y la clase). Bootstrap es lo que ya usás para que responsive no sea el problema. Tailwind quedaría como segunda herramienta nueva al mismo tiempo; se puede sumar después, no ahora.

Astro en una frase: cada `.astro` es HTML con un bloque de frontmatter arriba (entre `---`) que corre en el build, no en el navegador. El resultado es HTML estático. JavaScript al cliente solo si lo pedís con `client:*`. En este sitio, casi todo puede ser estático. El modo oscuro y el formulario, si entran, son las únicas islas con script.

---

## Forma del proyecto (dentro de `Portfolio/`)

```text
Portfolio/
  portfolio.md             # este guion, se queda
  public/
    favicon.svg
    cv.pdf                 # opcional
  src/
    components/
      Nav.astro
      Footer.astro
      Hero.astro
      About.astro
      Skills.astro
      Projects.astro
      Contact.astro
      ThemeToggle.astro    # opcional, commit aparte
    data/
      profile.ts           # nombre, rol, frase, links
      skills.ts
      projects.ts
    layouts/
      Base.astro           # html, head, header, main, footer
    pages/
      index.astro          # una sola página, compone las secciones
    styles/
      global.css
  README.md
  astro.config.mjs
  package.json
```

`data/projects.ts` imita la idea de un recurso de la API: un arreglo de objetos con `title`, `summary`, `stack`, `repo`, `demo`. Las cards solo leen ese arreglo. Cambiar un proyecto no toca el HTML.

---

## Seguimiento por commits

El sitio se inicializa en `Desktop/Portfolio/`, en un repo propio, separado de la materia. Commits chicos, en este orden. Cada uno tiene que dejar el sitio corriendo.

| # | Commit | Qué queda hecho | Listo cuando |
|---|---|---|---|
| 0 | `chore: inicializar Astro` | `npm create astro@latest`, git, README mínimo con Node y `npm run dev` | `localhost:4321` abre |
| 1 | `feat: layout semántico y navbar` | `Base.astro`, `header`/`nav`/`main`/`footer`, un `h1`, anclas, skip link | Teclado llega a cada link |
| 2 | `feat: hero y sobre mí` | Textos de este brief ya corregidos, foto con `alt` o sin foto | Se lee en 360 px sin scroll horizontal |
| 3 | `feat: habilidades por categoría` | Tres o cuatro grupos, sin listas infladas | Solo tecnologías defendibles |
| 4 | `feat: proyectos` | 3 cards desde `data/projects.ts`, links reales | Ningún título genérico |
| 5 | `feat: contacto y footer` | Email, GitHub, LinkedIn | Links con texto visible, no solo el icono |
| 6 | `style: responsive y contraste` | 360, 768, 1280 | Sin barra horizontal; texto y fondo se distinguen |
| 7 | `docs: README de entrega` | Stack, install, dev, build, deploy | Un compañero lo corre sin preguntar |
| 8 | Deploy | Vercel o Netlify, sitio estático | URL pública |
| 9 | Opcional: tema claro/oscuro | Toggle + `prefers-color-scheme` + reduced motion | El tema sobrevive al recargar |
| 10 | Opcional: CV y formulario | PDF en `public/`, form con validación | Errores visibles, campos vacíos no pasan |

Después del commit 8, subir al aula: link del repo y link del deploy.

### README (esqueleto)

```md
# Portfolio — [Nombre]

Sitio personal. Stack: Astro y Bootstrap.

## Cómo correrlo

1. Node 20 o superior.
2. `npm install`
3. `npm run dev` → http://localhost:4321
4. `npm run build` y `npm run preview` para ver la build.

## Deploy

[URL]. Host: [Vercel o Netlify], proyecto estático, comando `npm run build`, salida `dist`.
```

---

## Checklist de la consigna

- [ ] Hero: nombre, rol, frase, botón a una sección
- [ ] Sobre mí: 2 a 4 oraciones propias
- [ ] Habilidades por categoría
- [ ] 3 proyectos: título, descripción, tecnologías, link
- [ ] Contacto: email, GitHub, LinkedIn
- [ ] Navbar a cada sección
- [ ] 360 / 768 / 1280, sin scroll horizontal
- [ ] `header`, `nav`, `main`, `section`, `footer`, un solo `h1`
- [ ] `alt` en imágenes, foco visible, contraste
- [ ] Cero Lorem ipsum y cero “Proyecto 1”
- [ ] Commits progresivos
- [ ] README
- [ ] URL pública

Opcionales, después de lo obligatorio:

- [ ] Claro / oscuro
- [ ] Animación corta que se apaga con `prefers-reduced-motion`
- [ ] CV en PDF
- [ ] Lighthouse: 90+ en Performance y Accessibility (Astro estático ayuda; imágenes pesadas y Bootstrap completo por CDN sin control, no)

---

## Qué no hacer en la v1

- No montar Express dentro del portfolio “porque la materia es backend”.
- No aprender Tailwind y Astro el mismo día.
- No inventar métricas (“mejoré el rendimiento un 40%”) ni proyectos que no puedas abrir y explicar.
- No poner el formulario hasta que valide y tenga un destino.
- No commitear `.env`, claves de Mercado Pago ni el JWT secret de Calcomanía.

---

## Siguiente paso

Corregir en este archivo los corchetes (nombre, mail, links, y el párrafo real del simulador Dijkstra). Con eso cerrado, el commit 0 es inicializar Astro dentro de `Portfolio/`.
