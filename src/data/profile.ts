import { publicUrl } from "../utils/publicUrl";

export const profile = {
  name: "Sebastián Lardelli",
  shortName: "Seba",
  role: "Desarrollador Backend / Full Stack",
  credentials: [
    {
      label: "Técnico Superior en Desarrollo de Software",
      href: "https://www.institutozonaoeste.edu.ar/",
      logo: publicUrl("/logos/izo-escudo.png"),
      logoAlt: "Instituto Zona Oeste",
      round: false,
    },
    {
      label: "Estudiante de Ingeniería en Sistemas Informáticos",
      href: "https://uai.edu.ar/",
      logo: publicUrl("/logos/uai-sello.png"),
      logoAlt: "Universidad Abierta Interamericana",
      round: true,
    },
  ],
  headline:
    "Diseño APIs REST y productos web que quedan en producción: autenticación, persistencia y un front que se puede abrir. Backend en PHP y Node.js; también Python e IA cuando el problema lo pide.",
  summary:
    "CalcoMania es un e-commerce real (PHP, Slim, MySQL, JWT) con dominio propio: catálogo, carrito, checkout y un admin. AI_Agro salió del curso de Inteligencia Artificial de la UTN: visión, RAG, Docker y un bot de Telegram que responde por texto y audio. Técnico Superior en Desarrollo de Software; en la UAI estoy en los últimos años de Ingeniería en Sistemas Informáticos, con Express, TypeScript y MongoDB. Busco un rol junior de backend o full stack.",
  available: true,
  location: "Rosario, Santa Fe, Argentina",
  email: "sebalardelli@gmail.com",
  phone: "+54 3464 440119",
  github: "https://github.com/SebaLardelli",
  cv: publicUrl("/cv.pdf"),
  image: publicUrl("/sebastian-lardelli.png"),
  musicmania: "https://sebalardelli.github.io/MusicMania/",
  calcomania: "https://www.calcoomaniaa.com",
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    title: "CalcoMania — e-commerce en producción",
    company: "Producto propio · Backend PHP",
    period: "2025 — Actualidad",
    current: true,
    description:
      "Tienda B2C publicada en calcoomaniaa.com. API REST con PHP Slim, MySQL, JWT y Apache. Nació como proyecto final de la tecnicatura y quedó en producción: el visitante compra; el admin opera el catálogo.",
    highlights: [
      "Autenticación con JWT, roles de usuario y administrador, validación de correo, hash de contraseñas y recuperación por OTP (6 dígitos, 15 minutos, un solo uso).",
      "Sesión y carrito con cookies HTTP, no localStorage. Checkout con punto de retiro y hasta dos medios de pago (efectivo y transferencia) cuyos montos tienen que cerrar el total.",
      "CRUD de productos, categorías, temáticas, stock (pasa a Agotado en cero), puntos de retiro y métodos de pago. Imágenes en el servidor y mails transaccionales.",
      "Front y back del mismo producto: catálogo con filtros, calcos personalizadas, mis compras e inicio de sesión, todo online.",
    ],
  },
  {
    title: "AI_Agro — agente de IA para el agro",
    company: "UTN · Curso de Inteligencia Artificial",
    period: "2025",
    description:
      "Proyecto del curso de IA de la UTN. Bot de Telegram para el productor: manda una foto del grano, un audio o un texto y recibe diagnóstico y pronóstico, en mensaje y en audio.",
    highlights: [
      "Analizador propio: API Flask en Python con Gemini Vision (especie, estado, plagas, moho, métricas y bounding boxes). Módulos de imagen con Pillow y NumPy.",
      "RAG con embeddings OpenAI y base vectorial en Supabase. Memoria de conversación en Postgres. El diálogo consume otros modelos además del propio (OpenAI y OpenRouter).",
      "Herramientas del agente: pronóstico a 5 días y clima actual (OpenWeatherMap), más consultas de silo, lote y calidad de grano.",
      "n8n orquesta el flujo (voz, texto o foto) y Docker Compose levanta el analizador y el workflow. Respuesta en español (es-AR).",
    ],
  },
  {
    title: "APIs REST con Node.js y TypeScript",
    company: "UAI · Ingeniería en Sistemas Informáticos",
    period: "Ago 2026 — Actualidad",
    current: true,
    description:
      "Materia Desarrollo y Middleware Web, dentro de la carrera. Estoy pasando a Node el mismo tipo de backend que ya tenía en PHP: recursos con validación, hash de contraseñas y una capa HTTP que no se mezcla con la persistencia.",
    highlights: [
      "API REST en Express 5 y TypeScript sobre MongoDB / Mongoose, con paginado y filtros.",
      "Zod en middleware: si el body no cierra, el controller no corre. Registro y login con bcryptjs (el hash no se selecciona en lecturas; mismo 401 si el mail no existe o la password es mala).",
      "CORS limitado al front local. Git, capas (routes, controllers, models) y un front React de portfolio que consume el health de esa API.",
    ],
  },
];

export type FormationItem = {
  title: string;
  place: string;
  period: string;
  detail?: string;
  current?: boolean;
};

export const formation: FormationItem[] = [
  {
    title: "Ingeniería en Sistemas Informáticos",
    place: "Universidad Abierta Interamericana",
    period: "Últimos años",
    current: true,
    detail:
      "Carrera de grado. En Desarrollo y Middleware Web armo APIs REST con Node.js, Express 5, TypeScript, MongoDB, Zod y autenticación: el mismo criterio de capas que ya usaba en PHP.",
  },
  {
    title: "Tecnicatura Superior en Desarrollo de Software",
    place: "Instituto Zona Oeste",
    period: "2023 — 2025",
    detail:
      "Título de técnico. Análisis y diseño (elicitación, requerimientos, diagramas, mockups y prototipos) y desarrollo: CalcoMania, la app de escritorio en VB.NET y los laboratorios Kathará.",
  },
  {
    title: "Curso de Inteligencia Artificial",
    place: "Universidad Tecnológica Nacional",
    period: "2025",
    detail:
      "De acá salió AI_Agro: visión por computadora, RAG, orquestación con n8n y un agente que se usa por Telegram.",
  },
  {
    title: "Inglés",
    place: "Instituto de inglés",
    period: "Nivel intermedio",
    current: true,
    detail:
      "Cursando en un instituto. Nivel intermedio: no es una certificación tipo First o TOEFL, es formación en marcha.",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    items: [
      "API REST",
      "PHP",
      "Slim",
      "MySQL",
      "SQL",
      "JWT",
      "Autenticación",
      "Apache",
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Zod",
      "bcrypt",
      "Python",
      "Flask",
      "VB.NET",
      "WinForms",
      "SQL Server",
    ],
  },
  {
    label: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Flexbox", "CSS Grid", "Git"],
  },
  {
    label: "Análisis y diseño",
    items: [
      "Elicitación",
      "Especificación de requerimientos",
      "Diagramas",
      "Mockups",
      "Prototipado",
      "Documentación",
    ],
  },
  {
    label: "IA y automatización",
    items: ["Gemini Vision", "RAG", "OpenAI", "n8n", "Telegram", "Supabase", "Docker"],
  },
  {
    label: "Infra y redes",
    items: ["Linux", "Debian 12", "Docker", "Kathará", "Ruteo estático", "Ruteo dinámico", "Dijkstra", "IPv4", "DHCP"],
  },
];

export type ProjectTag = {
  name: string;
  className: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  highlights?: string[];
  tags: ProjectTag[];
  image?: string;
  imagePosition?: string;
  imageAspect?: string;
  imageFit?: "cover" | "contain";
  imageAlt?: string;
  github?: string;
  demo?: string;
};

const tag = {
  php: { name: "PHP", className: "bg-[#4f5b93] text-white" },
  slim: { name: "Slim", className: "bg-[#1c1917] text-[#fbbf24]" },
  mysql: { name: "MySQL", className: "bg-[#00758f] text-white" },
  jwt: { name: "JWT", className: "bg-neutral-800 text-white" },
  rest: { name: "API REST", className: "bg-[#0f766e] text-white" },
  html: { name: "HTML5", className: "bg-[#e34f26] text-white" },
  css: { name: "CSS3", className: "bg-[#264de4] text-white" },
  js: { name: "JavaScript", className: "bg-[#f7df1e] text-black" },
  python: { name: "Python", className: "bg-[#3776ab] text-white" },
  flask: { name: "Flask", className: "bg-[#1c1917] text-white" },
  gemini: { name: "Gemini Vision", className: "bg-[#4285f4] text-white" },
  docker: { name: "Docker", className: "bg-[#1d63ed] text-white" },
  n8n: { name: "n8n", className: "bg-[#ea4b71] text-white" },
  telegram: { name: "Telegram", className: "bg-[#229ed9] text-white" },
  rag: { name: "RAG", className: "bg-[#3f3f46] text-[#f4f4f5]" },
  kathara: { name: "Kathará", className: "bg-[#0f766e] text-white" },
  debian: { name: "Debian", className: "bg-[#a80030] text-white" },
  dijkstra: { name: "Dijkstra", className: "bg-neutral-800 text-white" },
  vb: { name: "VB.NET", className: "bg-[#512bd4] text-white" },
  winforms: { name: "WinForms", className: "bg-[#1c1917] text-white" },
  sqlserver: { name: "SQL Server", className: "bg-[#cc2927] text-white" },
};

export const projects: ProjectItem[] = [
  {
    title: "CalcoMania",
    description:
      "E-commerce en producción, con dominio propio (calcoomaniaa.com). API REST en PHP Slim, MySQL y JWT: catálogo, carrito, checkout, autenticación y panel de administración. La sesión y el carrito van por cookies.",
    highlights: [
      "Compra de punta a punta: filtros por categoría y temática, calcos personalizadas, carrito, mis compras, punto de retiro y hasta dos medios de pago por compra (efectivo y transferencia).",
      "Backoffice con roles: el admin hace CRUD de productos, categorías, temáticas, puntos de retiro y métodos de pago. El stock se descuenta al vender y pasa a Agotado en cero.",
      "Seguridad: registro con validación de correo, login, cierre de sesión, hash de contraseñas y OTP de un solo uso (6 dígitos, 15 min). Imágenes en /uploads y mails transaccionales.",
      "No es una maqueta: está publicada, se entra con usuario real y se opera como tienda.",
    ],
    tags: [tag.php, tag.slim, tag.mysql, tag.jwt, tag.rest],
    image: publicUrl("/projects/calcomania.png"),
    imagePosition: "center",
    imageAspect: "21/10",
    imageAlt: "CalcoMania: e-commerce en producción, catálogo de calcos con carrito y stock",
    demo: "https://www.calcoomaniaa.com",
  },
  {
    title: "AI_Agro",
    description:
      "Proyecto del curso de Inteligencia Artificial de la UTN. Agente en Telegram para el agro: el productor manda foto, audio o texto y recibe diagnóstico y pronóstico, en texto y en audio. Combina un modelo propio de visión con otros modelos, RAG y clima.",
    highlights: [
      "Visión por computadora: Python 3.11, Flask y Gemini Vision. Detecta cultivo, daño, plagas y moho; devuelve métricas y bounding boxes (Pillow, NumPy).",
      "RAG en Supabase (búsqueda vectorial + embeddings OpenAI) y memoria en Postgres. OpenAI transcribe el audio; OpenRouter (gpt-4o-mini) arma la respuesta del agente.",
      "Pronóstico a 5 días y clima actual (OpenWeatherMap). También responde plagas, silo, lote y calidad de grano, con estilo corto de acopio (es-AR).",
      "n8n orquesta voz, texto e imagen. Docker Compose levanta el analizador (puerto 5000) y n8n. El flujo se puede explicar nodo por nodo.",
    ],
    tags: [tag.python, tag.flask, tag.gemini, tag.rag, tag.docker, tag.n8n, tag.telegram],
    image: publicUrl("/projects/ai-agro.png"),
    imagePosition: "top",
    imageAspect: "3/4",
    imageAlt: "AI_Agro: chatbot de Telegram con pronóstico climático y análisis de foto de maíz",
    github: "https://github.com/SebaLardelli/AI_Agro",
  },
  {
    title: "Sistema de ventas — escritorio VB.NET",
    description:
      "Proyecto final de la tecnicatura (Instituto Zona Oeste, 2024). Aplicación de escritorio WinForms para un local de indumentaria: clientes, prendas, marcas, ventas y formas de pago, con SQL Server.",
    highlights: [
      "ABM de clientes, prendas, marcas y medios de pago; alta de venta y consultas por fecha.",
      "Login y registro. Lista de precios e impresión/exportación de factura (ticket) con ReportViewer (RDLC).",
      "Capas en el propio WinForms: conexión a SQL Server, módulos de clases y pantallas de clientes, prendas, ventas y factura.",
      "El mismo ciclo de análisis de la tecnicatura: requerimientos, diagramas y prototipo de escritorio antes de dejar el sistema andando.",
    ],
    tags: [tag.vb, tag.winforms, tag.sqlserver],
    github: "https://github.com/SebaLardelli/VB-Trabajo-Final",
  },
  {
    title: "MusicMania",
    description:
      "Juego web publicado para adivinar canciones 8-bit. Elegís categoría, escuchás el tema, lo cortás cuando lo reconocés y tenés 6 segundos para responder. Una vida por partida; el puntaje baja si tardás en frenar la música. HTML5, CSS y JavaScript, sin frameworks.",
    highlights: [
      "Seis categorías reales (Rock, Pop, Electrónica, Metal, Pelis y Series, Juegos) y 52 niveles: cada uno tiene MP3 e imagen.",
      "CSS con Flexbox (sin Grid ni Float) y JavaScript ES5 estricto: un archivo por función, sin librerías en la lógica.",
      "Ranking por género, nombre del jugador y volumen persistidos en localStorage. Modales en lugar de alert. Teclado y mouse.",
      "Demo en GitHub Pages: se abre y se juega. Sirve para mostrar un front entregable, no solo un mockup.",
    ],
    tags: [tag.html, tag.css, tag.js],
    image: publicUrl("/projects/musicmania.png"),
    imagePosition: "top",
    imageAlt: "MusicMania: juego web publicado para adivinar canciones, HTML CSS y JavaScript",
    github: "https://github.com/SebaLardelli/MusicMania",
    demo: "https://sebalardelli.github.io/MusicMania/",
  },
  {
    title: "Laboratorio Kathará — ruteo estático y dinámico",
    description:
      "Laboratorios de Redes (Instituto Zona Oeste) en Kathará, Debian 12, VMs y Docker. Hago las dos cosas: direccionamiento estático con IPs a mano y ping de prueba, y configuración de routers con ruteo dinámico (TP final 2025). El diagrama es el esquema de conectividad completo: hosts, routers y el árbol de expansión.",
    highlights: [
      "Esquema de conectividad con múltiples routers (RA–RGE): enlaces, costos y árbol de expansión para el camino activo.",
      "Ruteo estático: IPs con ip addr, collision domains y ping host→gateway, router→router y host→host.",
      "Ruteo dinámico: los routers recalculan el camino de menor costo con Dijkstra cuando cambia la topología. DHCP para clientes; estático en routers y servidores. Repo del TP final en IZO-Redes.",
    ],
    tags: [tag.kathara, tag.debian, tag.docker, tag.dijkstra],
    image: publicUrl("/projects/esquema-conectividad.png"),
    imagePosition: "center",
    imageFit: "contain",
    imageAspect: "1/1",
    imageAlt: "Esquema de conectividad Kathará: routers, costos de enlace y árbol de expansión",
    github: "https://github.com/IZO-Redes/2025-tp-final-SebaLardelli",
  },
];

export const about = [
  "Soy desarrollador de software en Rosario, Argentina. Técnico Superior en Desarrollo de Software (Instituto Zona Oeste, 2023–2025) y, ahora, en los últimos años de Ingeniería en Sistemas Informáticos en la UAI. Cursando inglés en un instituto, nivel intermedio. Busco un rol junior de backend o full stack: APIs REST, autenticación, bases de datos y un producto que se pueda explicar de punta a punta — rutas, validación, persistencia y una interfaz que no sea un PowerPoint.",
  "CalcoMania es el sistema más completo que tengo en el aire: Slim, MySQL, JWT, cookies, catálogo, carrito, checkout y panel. AI_Agro es el proyecto del curso de Inteligencia Artificial de la UTN: el productor habla por Telegram y el bot responde con diagnóstico, pronóstico, RAG y audio. En IZO también dejé una app de escritorio en VB.NET (ventas, SQL Server y ticket con ReportViewer) y laboratorios de ruteo estático y dinámico en Kathará. MusicMania está publicado y se juega.",
  "No arranco por el código. Hago elicitación, especificación de requerimientos, diagramas, mockups y prototipos, y recién ahí implemento. En la UAI, en Desarrollo y Middleware Web, hago el mismo tipo de API con Express, TypeScript y Mongo: Zod en la puerta, bcrypt para las contraseñas, recursos con Mongoose. El JWT de CalcoMania ya está; el de esta materia se arma en Auth II. Me interesa un equipo donde eso se pueda defender en una entrevista, no solo listar en un CV.",
];
