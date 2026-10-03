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
    {
      label: "Inglés A2+ · Eklab Institute",
      href: "https://eklabinstitute.com/",
      logo: publicUrl("/logos/eklab.png"),
      logoLight: publicUrl("/logos/eklab-light.png"),
      logoAlt: "Eklab Institute",
      wide: true,
    },
  ],
  headline:
    "Mi búsqueda principal es dedicarme a integraciones con IA: conectar modelos con APIs, datos y un producto que se pueda usar. Backend en PHP y Node.js; Python cuando el problema lo pide.",
  summary:
    "CalcoMania es un e-commerce real (PHP, Slim, MySQL, JWT) con dominio propio: catálogo, carrito, checkout y un admin. AI_Agro salió del curso de Inteligencia Artificial de la UTN: visión, RAG, Docker y un bot de Telegram que responde por texto y audio. Busco un rol junior de backend o full stack, con foco en integraciones con IA.",
  plus:
    "Plus: ahora estoy aprendiendo robótica con Arduino en Tinkercad y prácticas reales en la facultad, con un proyecto a futuro. También practico conducción de drone en simulador (Uncrashed FPV).",
  available: true,
  location: "De Villa Mugueta. Vivo en Rosario, Santa Fe, Argentina.",
  email: "sebalardelli@gmail.com",
  phone: "+54 3464 440119",
  github: "https://github.com/SebaLardelli",
  linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-lardelli/",
  cv: "#cv",
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
    company: "Emprendimiento propio · Backend PHP",
    period: "2025 — Actualidad",
    current: true,
    description:
      "Negocio personal en calcoomaniaa.com, montado desde cero como emprendimiento formal: no es una práctica de clase. API REST con PHP Slim, MySQL, JWT y Apache. El visitante compra; el admin opera el catálogo.",
    highlights: [
      "Levantado de 0 con documentación de análisis y diseño: elicitación, requerimientos, diagramas en Draw.io, mockups y wireframes en Whimsical y Figma, y prototipo antes de pasar a producción.",
      "Arquitectura MVC y comunicación cliente-servidor: el front consume la API REST.",
      "Autenticación con JWT, roles de usuario y administrador, validación de correo, hash de contraseñas y recuperación por OTP (6 dígitos, 15 minutos, un solo uso).",
      "Sesión y carrito con cookies HTTP, no localStorage. Checkout con punto de retiro y hasta dos medios de pago (efectivo y transferencia) cuyos montos tienen que cerrar el total.",
      "CRUD de productos, categorías, temáticas, stock (pasa a Agotado en cero), puntos de retiro y métodos de pago. Imágenes en el servidor y mails transaccionales.",
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
    title: "APIs REST con stack MERN y TypeScript",
    company: "UAI · Ingeniería en Sistemas Informáticos",
    period: "Ago 2026 — Actualidad",
    current: true,
    description:
      "Materia Desarrollo y Middleware Web, dentro de la carrera. Estoy aprendiendo el stack MERN con TypeScript: MongoDB, Express, React y Node.js. API REST con validación, autenticación y capas (routes, controllers, models).",
    highlights: [
      "API REST en Express 5 y TypeScript sobre MongoDB / Mongoose, con paginado y filtros.",
      "Validación con Zod en middleware y registro/login con bcryptjs.",
      "Git, CORS al front local y un front React que consume esa API.",
    ],
  },
];

export type FormationItem = {
  title: string;
  place: string;
  period: string;
  detail?: string;
  current?: boolean;
  href?: string;
  logo?: string;
  logoLight?: string;
  logoAlt?: string;
};

export const formation: FormationItem[] = [
  {
    title: "Ingeniería en Sistemas Informáticos",
    place: "Universidad Abierta Interamericana",
    period: "Últimos años",
    current: true,
    detail:
      "Carrera de grado. En Desarrollo y Middleware Web estoy aprendiendo el stack MERN con TypeScript: APIs REST en Express 5, MongoDB, Zod y autenticación. En Ingeniería del Software estoy usando y aprendiendo patrones de diseño (creacionales, estructurales y de comportamiento) y patrones arquitectónicos como MVC y comunicación cliente-servidor.",
  },
  {
    title: "Tecnicatura Superior en Desarrollo de Software",
    place: "Instituto Zona Oeste",
    period: "2023 — 2025",
    detail:
      "Título de técnico. Análisis y diseño (elicitación, requerimientos, diagramas en Draw.io, mockups y wireframes en Whimsical y Figma, y prototipos) y desarrollo: CalcoMania, la app de escritorio en VB.NET y los laboratorios Kathará. En Ingeniería de Software 2 y en el trabajo de diploma usé patrones de diseño creacionales, estructurales y de comportamiento. También gestioné casos de prueba en TestLink: requerimientos, pasos, resultado esperado y ejecución, más técnicas de caja negra, blanca y gris, planillas, reporte de bugs, ruta básica y complejidad ciclomática.",
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
    place: "Eklab Institute",
    period: "Nivel A2+ · En curso",
    current: true,
    href: "https://eklabinstitute.com/",
    logo: publicUrl("/logos/eklab.png"),
    logoLight: publicUrl("/logos/eklab-light.png"),
    logoAlt: "Eklab Institute",
    detail:
      "Cursando en Rosario. Nivel actual A2+ según el libro (MCER): tramo alto de A2, todavía no B1. No es First ni TOEFL.",
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
      "Whimsical",
      "Figma",
      "Draw.io",
      "Patrones creacionales",
      "Patrones estructurales",
      "Patrones de comportamiento",
      "MVC",
      "Cliente-servidor",
    ],
  },
  {
    label: "Testing",
    items: [
      "TestLink",
      "Caja negra",
      "Caja blanca",
      "Caja gris",
      "Casos de prueba",
      "Ruta básica",
      "Complejidad ciclomática",
      "Reporte de bugs",
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
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  github?: string;
  demo?: string;
  liveKind?: "site" | "demo";
  stackImageBelow?: boolean;
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
      "Emprendimiento personal formal: un e-commerce real, con dominio propio (calcoomaniaa.com), montado completamente desde cero. No es una demo ni un TP colgado: es el negocio en producción. API REST en PHP Slim, MySQL y JWT; catálogo, carrito, checkout, autenticación y panel. La sesión y el carrito van por cookies.",
    highlights: [
      "Negocio propio documentado de punta a punta: elicitación, especificación de requerimientos, diagramas en Draw.io, mockups y wireframes en Whimsical y Figma, y prototipo antes de implementar el sistema que hoy opera la tienda.",
      "Arquitectura MVC y comunicación cliente-servidor entre el cliente y la API REST.",
      "Compra real: filtros por categoría y temática, calcos personalizadas, carrito, mis compras, punto de retiro y hasta dos medios de pago por compra (efectivo y transferencia).",
      "Backoffice con roles: el admin hace CRUD de productos, categorías, temáticas, puntos de retiro y métodos de pago. El stock se descuenta al vender y pasa a Agotado en cero.",
      "Seguridad: registro con validación de correo, login, cierre de sesión, hash de contraseñas y OTP de un solo uso (6 dígitos, 15 min). Imágenes en /uploads y mails transaccionales.",
    ],
    tags: [tag.php, tag.slim, tag.mysql, tag.jwt, tag.rest],
    image: publicUrl("/projects/calcomania.png"),
    imagePosition: "center",
    imageWidth: 1917,
    imageHeight: 1078,
    imageAlt: "CalcoMania: tienda en producción, catálogo de calcos con carrito y stock",
    demo: "https://www.calcoomaniaa.com",
    liveKind: "site",
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
    imageWidth: 692,
    imageHeight: 939,
    imageAlt: "AI_Agro: chatbot de Telegram con pronóstico climático y análisis de foto de maíz",
    github: "https://github.com/SebaLardelli/AI_Agro",
    stackImageBelow: true,
  },
  {
    title: "Sistema de ventas — escritorio VB.NET",
    description:
      "Proyecto final de la tecnicatura (Instituto Zona Oeste, 2024). Sistema completo para un local de indumentaria: no es solo VB. Front en WinForms, lógica de negocio y SQL Server. Login, ABM, ventas, informes y factura.",
    highlights: [
      "Tres capas en el mismo sistema: pantallas WinForms, módulos de clases y persistencia en SQL Server.",
      "ABM de clientes, prendas, marcas y medios de pago; alta de venta y consultas por fecha.",
      "Login y registro. Lista de precios e impresión/exportación de factura (ticket) con ReportViewer (RDLC).",
      "El mismo ciclo de análisis de la tecnicatura: requerimientos, diagramas y prototipo de escritorio antes de dejar el sistema andando. En el trabajo de diploma apliqué patrones de diseño creacionales, estructurales y de comportamiento.",
    ],
    tags: [tag.vb, tag.winforms, tag.sqlserver],
    image: publicUrl("/projects/vb-ventas.png"),
    imagePosition: "center",
    imageWidth: 1289,
    imageHeight: 749,
    imageAlt: "Sistema de ventas VB.NET: menú principal con clientes, prendas, marcas, pagos y ventas",
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
    imageWidth: 1400,
    imageHeight: 875,
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
    imageWidth: 2413,
    imageHeight: 2425,
    imageAlt: "Esquema de conectividad Kathará: routers, costos de enlace y árbol de expansión",
    github: "https://github.com/IZO-Redes/2025-tp-final-SebaLardelli",
  },
];

export const about = [
  "Soy de Villa Mugueta, Santa Fe, y vivo en Rosario: vine a estudiar y estoy acá ahora. Técnico Superior en Desarrollo de Software (Instituto Zona Oeste, 2023–2025) y, ahora, en los últimos años de Ingeniería en Sistemas Informáticos en la UAI. Cursando inglés en Eklab Institute, nivel A2+. Mi búsqueda principal es un rol junior para dedicarme a integraciones con IA, con base de backend o full stack: APIs REST, autenticación, datos y un producto que se pueda explicar de punta a punta.",
  "CalcoMania es mi emprendimiento: un negocio personal formal, montado desde cero, con documentación de análisis y el sistema en producción (Slim, MySQL, JWT, cookies, catálogo, carrito, checkout y panel). AI_Agro es el proyecto del curso de Inteligencia Artificial de la UTN: el productor habla por Telegram y el bot responde con diagnóstico, pronóstico, RAG y audio. En IZO también dejé una app de escritorio en VB.NET (ventas, SQL Server y ticket con ReportViewer) y laboratorios de ruteo estático y dinámico en Kathará. MusicMania está publicado y se juega.",
  "No arranco por el código. Hago elicitación, especificación de requerimientos, diagramas en Draw.io, mockups y wireframes en Whimsical y Figma, y recién ahí implemento. En Ingeniería de Software 2 (IZO) y en el trabajo de diploma usé patrones de diseño creacionales, estructurales y de comportamiento. En CalcoMania apliqué MVC y comunicación cliente-servidor. Esos mismos patrones los estoy usando y aprendiendo ahora en la UAI, en Ingeniería del Software. También usé TestLink para gestionar casos de prueba: requerimiento, precondiciones, pasos, resultado esperado y ejecución, más caja negra, blanca y gris, ruta básica, complejidad ciclomática y reportes de bugs. En Desarrollo y Middleware Web estoy aprendiendo el stack MERN con TypeScript: Express, MongoDB, Zod y bcrypt. El JWT de CalcoMania ya está; el de esta materia se arma en Auth II. Me interesa un equipo donde eso se pueda defender en una entrevista, no solo listar en un CV.",
  "Como plus, ahora estoy aprendiendo robótica: Arduino en Tinkercad, prácticas reales en la facultad y un proyecto a futuro. También practico conducción de drone en simulador, en Uncrashed FPV.",
];
