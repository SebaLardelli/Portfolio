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
      {
        ...profileEs.credentials[2],
        label: "English A2+ · Eklab Institute",
      },
    ],
    headline:
      "My main search is to work on AI integrations: connecting models to APIs, data, and a product people can actually use. Backend in PHP and Node.js; Python when the problem needs it.",
    summary:
      "CalcoMania is a formal personal venture (PHP, Slim, MySQL, JWT) on its own domain, built from scratch: catalog, cart, checkout, and an admin. AI_Agro came out of the UTN Artificial Intelligence course: vision, RAG, Docker, and a Telegram bot that answers in text and audio. I am looking for a junior backend or full-stack role, focused on AI integrations.",
    plus:
      "Plus: I am currently learning robotics with Arduino in Tinkercad and hands-on labs at university, with a project ahead. I also practice drone flying in a simulator (Uncrashed FPV).",
    location: "From Villa Mugueta. I live in Rosario, Santa Fe, Argentina.",
  },
  experience: [
    {
      ...experienceEs[0],
      title: "CalcoMania — e-commerce in production",
      company: "Own venture · PHP backend",
      period: "2025 — Present",
      description:
        "Personal business live at calcoomaniaa.com, built from scratch as a formal venture — not a class exercise. REST API with PHP Slim, MySQL, JWT, and Apache. Visitors buy; the admin runs the catalog.",
      highlights: [
        "Built from zero with analysis and design documentation: elicitation, requirements, Draw.io diagrams, Whimsical and Figma mockups/wireframes, and a prototype before going to production.",
        "MVC architecture and client-server communication: the front consumes the REST API.",
        "Authentication with JWT, user and admin roles, email validation, password hashing, and OTP recovery (6 digits, 15 minutes, single use).",
        "Session and cart in HTTP cookies, not localStorage. Checkout with a pickup point and up to two payment methods (cash and bank transfer) whose amounts must match the total.",
        "CRUD for products, categories, themes, stock (sold out at zero), pickup points, and payment methods. Images on the server and transactional emails.",
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
      title: "REST APIs with the MERN stack and TypeScript",
      company: "UAI · Computer Systems Engineering",
      period: "Aug 2026 — Present",
      description:
        "Web Development and Middleware, a course in the degree. I am currently learning the MERN stack with TypeScript: MongoDB, Express, React, and Node.js. REST API with validation, authentication, and layers (routes, controllers, models).",
      highlights: [
        "REST API in Express 5 and TypeScript on MongoDB / Mongoose, with pagination and filters.",
        "Validation with Zod in middleware, and sign-up/login with bcryptjs.",
        "Git, CORS for the local front, and a React front that consumes that API.",
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
        "Undergraduate degree. In Web Development and Middleware I am learning the MERN stack with TypeScript: REST APIs in Express 5, MongoDB, Zod, and authentication. In Software Engineering I am using and learning design patterns (creational, structural, and behavioral) and architectural patterns such as MVC and client-server communication.",
    },
    {
      ...formationEs[1],
      title: "Higher Technician in Software Development",
      place: "Instituto Zona Oeste",
      detail:
        "Technician diploma. Analysis and design (elicitation, requirements, Draw.io diagrams, Whimsical and Figma mockups/wireframes, and prototypes) and development: CalcoMania, the VB.NET desktop app, and the Kathará labs. In Software Engineering 2 and in the diploma project I used creational, structural, and behavioral design patterns. I also managed test cases in TestLink: requirements, steps, expected result, and execution, plus black-box, white-box, and gray-box techniques, spreadsheets, bug reports, basis-path testing, and cyclomatic complexity.",
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
      place: "Eklab Institute",
      period: "A2+ · In progress",
      detail:
        "Currently taking classes in Rosario. Current level A2+ according to the coursebook (CEFR): top of A2, not yet B1. Not First or TOEFL.",
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
        "Whimsical",
        "Figma",
        "Draw.io",
        "Creational patterns",
        "Structural patterns",
        "Behavioral patterns",
        "MVC",
        "Client-server",
      ],
    },
    {
      label: "Testing",
      items: [
        "TestLink",
        "Black-box",
        "White-box",
        "Gray-box",
        "Test cases",
        "Basis path",
        "Cyclomatic complexity",
        "Bug reports",
      ],
    },
    {
      label: "AI and automation",
      items: skillGroupsEs[4].items,
    },
    {
      label: "Infra and networks",
      items: skillGroupsEs[5].items.map((item) => {
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
        "A formal personal venture: a real e-commerce on its own domain (calcoomaniaa.com), built entirely from scratch. Not a demo and not a homework upload — the business is in production. REST API in PHP Slim, MySQL, and JWT; catalog, cart, checkout, authentication, and an admin panel. Session and cart go through cookies.",
      highlights: [
        "Own business documented end to end: elicitation, requirements specification, Draw.io diagrams, Whimsical and Figma mockups/wireframes, and a prototype before implementing the system that runs the store today.",
        "MVC architecture and client-server communication between the client and the REST API.",
        "Real purchase flow: filters by category and theme, custom stickers, cart, order history, pickup point, and up to two payment methods per order (cash and bank transfer).",
        "Backoffice with roles: the admin CRUDs products, categories, themes, pickup points, and payment methods. Stock decreases on sale and becomes Sold out at zero.",
        "Security: sign-up with email validation, login, logout, password hashing, and one-time OTP (6 digits, 15 min). Images in /uploads and transactional emails.",
      ],
      imageAlt: "CalcoMania: store in production, sticker catalog with cart and stock",
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
        "Technician-program final project (Instituto Zona Oeste, 2024). A complete clothing-store system: not just VB. WinForms front, business logic, and SQL Server. Login, CRUD, sales, reports, and invoices.",
      highlights: [
        "Three layers in the same system: WinForms screens, class modules, and SQL Server persistence.",
        "CRUD for customers, garments, brands, and payment methods; new sale and queries by date.",
        "Login and sign-up. Price list and invoice/ticket print or export with ReportViewer (RDLC).",
        "The same analysis cycle from the program: requirements, diagrams, and a desktop prototype before shipping the system. In the diploma project I applied creational, structural, and behavioral design patterns.",
      ],
      imageAlt: "VB.NET sales system: main menu with customers, garments, brands, payments, and sales",
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
    "I am from Villa Mugueta, Santa Fe, and I live in Rosario: I moved here to study and I am here now. Higher Technician in Software Development (Instituto Zona Oeste, 2023–2025) and now in the final years of Computer Systems Engineering at UAI. I am taking English at Eklab Institute, A2+ level. My main search is a junior role focused on AI integrations, with a backend or full-stack base: REST APIs, authentication, data, and a product I can explain end to end.",
    "CalcoMania is my venture: a formal personal business, built from scratch, with analysis documentation and the system in production (Slim, MySQL, JWT, cookies, catalog, cart, checkout, and admin). AI_Agro is the project from the UTN Artificial Intelligence course: the grower talks on Telegram and the bot answers with diagnosis, forecast, RAG, and audio. At IZO I also shipped a VB.NET desktop app (sales, SQL Server, and a ReportViewer ticket) and static and dynamic routing labs in Kathará. MusicMania is published and playable.",
    "I do not start with the code. I do elicitation, requirements specification, Draw.io diagrams, Whimsical and Figma mockups/wireframes, and only then I implement. In Software Engineering 2 (IZO) and in the diploma project I used creational, structural, and behavioral design patterns. In CalcoMania I applied MVC and client-server communication. I am using and learning those same patterns now at UAI, in Software Engineering. I also used TestLink to manage test cases: requirement, preconditions, steps, expected result, and execution, plus black-box, white-box, and gray-box, basis-path testing, cyclomatic complexity, and bug reports. In Web Development and Middleware I am learning the MERN stack with TypeScript: Express, MongoDB, Zod, and bcrypt. CalcoMania's JWT is already there; the one for this course is built in Auth II. I want a team where that can be defended in an interview, not only listed on a CV.",
    "As a plus, I am currently learning robotics: Arduino in Tinkercad, hands-on labs at university, and a project ahead. I also practice drone flying in a simulator, Uncrashed FPV.",
  ],
  ui: {
    greeting: "Hey, I'm",
    available: "Available for work",
    photoAlt: `${profileEs.name}, backend and full-stack developer`,
    openCalcomania: "Open CalcoMania",
    playMusicmania: "Play MusicMania",
    contactMe: "Contact me",
    openDemo: "Open demo",
    openSite: "Open site",
    repo: "Repository",
    inProgress: "In progress",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "Cambiar a español",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    pageTitle: "Sebastián Lardelli | AI integrations — Backend, PHP, Node.js",
    pageDescription:
      "Software developer from Villa Mugueta, living in Rosario. Final years of Computer Systems Engineering (UAI). Looking for AI integration work. REST APIs in PHP Slim and Node.js, RAG, Docker, and e-commerce in production. Portfolio of Sebastián Lardelli.",
    contactIntro: "I live in Rosario (I am from Villa Mugueta, Santa Fe). Email me, call me, or open the résumé — all three are here.",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactCv: "Résumé",
    contactLinkedin: "LinkedIn",
    downloadCv: "View résumé",
    cv: {
      pageTitle: "Sebastián Lardelli | Résumé",
      back: "Back to portfolio",
      print: "Print / PDF",
      profile: "Profile",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      languages: "Languages",
      additional: "Additional",
      spanish: "Spanish — native",
      english: "English — A2+ (Eklab Institute, in progress)",
    },
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
