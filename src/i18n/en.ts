import {
  experience as experienceEs,
  formation as formationEs,
  profile as profileEs,
  projects as projectsEs,
  skillGroups as skillGroupsEs,
} from "../data/profile";
import type { Copy } from "./types";

export const en: Copy = {
  profile: {
    ...profileEs,
    role: "Backend / Full Stack Developer",
    credentials: [
      {
        ...profileEs.credentials[0],
        label: "Higher Technician in Software Development",
      },
      {
        ...profileEs.credentials[1],
        label: "Computer Systems Engineering student",
      },
    ],
    headline:
      "I design REST APIs and web products that stay in production: authentication, persistence, and a front you can actually open. Backend in PHP and Node.js; also Python and AI when the problem needs it.",
    summary:
      "CalcoMania is a real e-commerce (PHP, Slim, MySQL, JWT) on its own domain: catalog, cart, checkout, and an admin. AI_Agro came out of the UTN Artificial Intelligence course: vision, RAG, Docker, and a Telegram bot that answers in text and audio. Higher Technician in Software Development; at UAI I am in the final years of Computer Systems Engineering, working with Express, TypeScript, and MongoDB. I am looking for a junior backend or full-stack role.",
  },
  experience: [
    {
      ...experienceEs[0],
      title: "CalcoMania — e-commerce in production",
      company: "Own product · PHP backend",
      period: "2025 — Present",
      description:
        "B2C store live at calcoomaniaa.com. REST API with PHP Slim, MySQL, JWT, and Apache. It started as the technician-program final project and stayed in production: visitors buy; the admin runs the catalog.",
      highlights: [
        "Authentication with JWT, user and admin roles, email validation, password hashing, and OTP recovery (6 digits, 15 minutes, single use).",
        "Session and cart in HTTP cookies, not localStorage. Checkout with a pickup point and up to two payment methods (cash and bank transfer) whose amounts must match the total.",
        "CRUD for products, categories, themes, stock (sold out at zero), pickup points, and payment methods. Images on the server and transactional emails.",
        "Front and back of the same product: filtered catalog, custom stickers, order history, and login — all online.",
      ],
    },
    {
      ...experienceEs[1],
      title: "AI_Agro — AI agent for agriculture",
      company: "UTN · Artificial Intelligence course",
      description:
        "Project from the UTN AI course. A Telegram bot for growers: they send a grain photo, audio, or text and get a diagnosis and forecast, as a message and as audio.",
      highlights: [
        "Own analyzer: Flask API in Python with Gemini Vision (species, condition, pests, mold, metrics, and bounding boxes). Image modules with Pillow and NumPy.",
        "RAG with OpenAI embeddings and a vector store in Supabase. Conversation memory in Postgres. The dialogue also uses other models besides the custom one (OpenAI and OpenRouter).",
        "Agent tools: 5-day forecast and current weather (OpenWeatherMap), plus silo, plot, and grain-quality queries.",
        "n8n orchestrates the flow (voice, text, or photo) and Docker Compose runs the analyzer and the workflow. Answers in Spanish (es-AR).",
      ],
    },
    {
      ...experienceEs[2],
      title: "REST APIs with Node.js and TypeScript",
      company: "UAI · Computer Systems Engineering",
      period: "Aug 2026 — Present",
      description:
        "Web Development and Middleware, a course in the degree. I am moving to Node the same kind of backend I already had in PHP: validated resources, password hashing, and an HTTP layer that stays separate from persistence.",
      highlights: [
        "REST API in Express 5 and TypeScript on MongoDB / Mongoose, with pagination and filters.",
        "Zod in middleware: if the body is invalid, the controller does not run. Sign-up and login with bcryptjs (the hash is never selected on reads; same 401 if the email does not exist or the password is wrong).",
        "CORS limited to the local front. Git, layers (routes, controllers, models), and a React portfolio front that consumes that API health endpoint.",
      ],
    },
  ],
  formation: [
    {
      ...formationEs[0],
      title: "Computer Systems Engineering",
      place: "Universidad Abierta Interamericana",
      period: "Final years",
      detail:
        "Undergraduate degree. In Web Development and Middleware I build REST APIs with Node.js, Express 5, TypeScript, MongoDB, Zod, and authentication: the same layering I already used in PHP.",
    },
    {
      ...formationEs[1],
      title: "Higher Technician in Software Development",
      place: "Instituto Zona Oeste",
      detail:
        "Technician diploma. Analysis and design (elicitation, requirements, diagrams, mockups, and prototypes) and development: CalcoMania, the VB.NET desktop app, and the Kathará labs.",
    },
    {
      ...formationEs[2],
      title: "Artificial Intelligence course",
      place: "Universidad Tecnológica Nacional",
      detail:
        "This is where AI_Agro came from: computer vision, RAG, n8n orchestration, and an agent used over Telegram.",
    },
    {
      ...formationEs[3],
      title: "English",
      place: "English institute",
      period: "Intermediate level",
      detail:
        "Currently taking classes at an institute. Intermediate level: not a First or TOEFL certificate — training in progress.",
    },
  ],
  skillGroups: [
    {
      ...skillGroupsEs[0],
      items: skillGroupsEs[0].items.map((item) =>
        item === "Autenticación" ? "Authentication" : item
      ),
    },
    skillGroupsEs[1],
    {
      label: "Analysis and design",
      items: [
        "Elicitation",
        "Requirements specification",
        "Diagrams",
        "Mockups",
        "Prototyping",
        "Documentation",
      ],
    },
    {
      label: "AI and automation",
      items: skillGroupsEs[3].items,
    },
    {
      label: "Infra and networks",
      items: skillGroupsEs[4].items.map((item) => {
        if (item === "Ruteo estático") return "Static routing";
        if (item === "Ruteo dinámico") return "Dynamic routing";
        return item;
      }),
    },
  ],
  projects: [
    {
      ...projectsEs[0],
      description:
        "E-commerce in production, on its own domain (calcoomaniaa.com). REST API in PHP Slim, MySQL, and JWT: catalog, cart, checkout, authentication, and an admin panel. Session and cart go through cookies.",
      highlights: [
        "End-to-end purchase: filters by category and theme, custom stickers, cart, order history, pickup point, and up to two payment methods per order (cash and bank transfer).",
        "Backoffice with roles: the admin CRUDs products, categories, themes, pickup points, and payment methods. Stock decreases on sale and becomes Sold out at zero.",
        "Security: sign-up with email validation, login, logout, password hashing, and one-time OTP (6 digits, 15 min). Images in /uploads and transactional emails.",
        "Not a mock: it is published, you log in with a real user, and you operate it as a store.",
      ],
      imageAlt: "CalcoMania: e-commerce in production, sticker catalog with cart and stock",
    },
    {
      ...projectsEs[1],
      description:
        "Project from the UTN Artificial Intelligence course. Telegram agent for agriculture: the grower sends a photo, audio, or text and gets a diagnosis and forecast, in text and in audio. It combines a custom vision model with other models, RAG, and weather.",
      highlights: [
        "Computer vision: Python 3.11, Flask, and Gemini Vision. Detects crop, damage, pests, and mold; returns metrics and bounding boxes (Pillow, NumPy).",
        "RAG in Supabase (vector search + OpenAI embeddings) and memory in Postgres. OpenAI transcribes audio; OpenRouter (gpt-4o-mini) builds the agent reply.",
        "5-day forecast and current weather (OpenWeatherMap). It also answers pests, silo, plot, and grain quality, in a short grain-elevator style (es-AR).",
        "n8n orchestrates voice, text, and image. Docker Compose runs the analyzer (port 5000) and n8n. The flow can be explained node by node.",
      ],
      imageAlt: "AI_Agro: Telegram chatbot with weather forecast and corn-photo analysis",
    },
    {
      ...projectsEs[2],
      title: "Sales system — VB.NET desktop",
      description:
        "Technician-program final project (Instituto Zona Oeste, 2024). WinForms desktop app for a clothing store: customers, garments, brands, sales, and payment methods, with SQL Server.",
      highlights: [
        "CRUD for customers, garments, brands, and payment methods; new sale and queries by date.",
        "Login and sign-up. Price list and invoice/ticket print or export with ReportViewer (RDLC).",
        "Layers inside WinForms: SQL Server connection, class modules, and screens for customers, garments, sales, and invoice.",
        "The same analysis cycle from the program: requirements, diagrams, and a desktop prototype before shipping the system.",
      ],
    },
    {
      ...projectsEs[3],
      description:
        "Published web game for guessing 8-bit songs. You pick a category, listen, stop the track when you recognize it, and have 6 seconds to answer. One life per run; the score drops if you wait too long to stop the music. HTML5, CSS, and JavaScript, no frameworks.",
      highlights: [
        "Six real categories (Rock, Pop, Electronic, Metal, Movies and Series, Games) and 52 levels: each one has an MP3 and an image.",
        "CSS with Flexbox (no Grid or Float) and strict ES5 JavaScript: one file per function, no libraries in the game logic.",
        "Ranking by genre, player name, and volume persisted in localStorage. Modals instead of alert. Keyboard and mouse.",
        "Demo on GitHub Pages: you open it and play. It shows a shippable front, not just a mockup.",
      ],
      imageAlt: "MusicMania: published web game for guessing songs, HTML CSS and JavaScript",
    },
    {
      ...projectsEs[4],
      title: "Kathará lab — static and dynamic routing",
      description:
        "Networking labs (Instituto Zona Oeste) in Kathará, Debian 12, VMs, and Docker. I do both: static addressing with hand-set IPs and test pings, and router setup with dynamic routing (2025 final assignment). The diagram is the full connectivity scheme: hosts, routers, and the spanning tree.",
      highlights: [
        "Connectivity scheme with multiple routers (RA–RGE): links, costs, and spanning tree for the active path.",
        "Static routing: IPs with ip addr, collision domains, and ping host→gateway, router→router, and host→host.",
        "Dynamic routing: routers recompute the lowest-cost path with Dijkstra when the topology changes. DHCP for clients; static on routers and servers. Final-assignment repo on IZO-Redes.",
      ],
      imageAlt: "Kathará connectivity scheme: routers, link costs, and spanning tree",
    },
  ],
  about: [
    "I am a software developer in Rosario, Argentina. Higher Technician in Software Development (Instituto Zona Oeste, 2023–2025) and now in the final years of Computer Systems Engineering at UAI. I am taking English at an institute, intermediate level. I am looking for a junior backend or full-stack role: REST APIs, authentication, databases, and a product I can explain end to end — routes, validation, persistence, and an interface that is not a PowerPoint.",
    "CalcoMania is the most complete system I have live: Slim, MySQL, JWT, cookies, catalog, cart, checkout, and admin. AI_Agro is the project from the UTN Artificial Intelligence course: the grower talks on Telegram and the bot answers with diagnosis, forecast, RAG, and audio. At IZO I also shipped a VB.NET desktop app (sales, SQL Server, and a ReportViewer ticket) and static and dynamic routing labs in Kathará. MusicMania is published and playable.",
    "I do not start with the code. I do elicitation, requirements specification, diagrams, mockups, and prototypes, and only then I implement. At UAI, in Web Development and Middleware, I build the same kind of API with Express, TypeScript, and Mongo: Zod at the door, bcrypt for passwords, resources with Mongoose. CalcoMania's JWT is already there; the one for this course is built in Auth II. I want a team where that can be defended in an interview, not only listed on a CV.",
  ],
  ui: {
    greeting: "Hey, I'm",
    available: "Available for work",
    photoAlt: `${profileEs.name}, backend and full-stack developer`,
    openCalcomania: "Open CalcoMania",
    playMusicmania: "Play MusicMania",
    contactMe: "Contact me",
    openDemo: "Open demo",
    repo: "Repo",
    inProgress: "In progress",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "Cambiar a español",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    pageTitle: "Sebastián Lardelli | Backend Developer — Systems Engineering, PHP, Node.js",
    pageDescription:
      "Software developer in Rosario. Final years of Computer Systems Engineering (UAI). REST APIs in PHP Slim and Node.js, Express, and TypeScript. E-commerce in production, JWT authentication, Docker, RAG, and AI. Portfolio of Sebastián Lardelli.",
    contactIntro: "Rosario, Santa Fe. Email me, call me, or download the CV — all three are here.",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactCv: "Résumé",
    downloadCv: "Download CV (PDF)",
    nav: {
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      formation: "Education",
      about: "About",
      contact: "Contact",
    },
    sections: {
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      formation: "Education",
      about: "About",
      contact: "Contact",
    },
  },
};
