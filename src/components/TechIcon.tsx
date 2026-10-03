import type { ReactNode, SVGProps } from "react";

type TechIconProps = {
  name: string;
  className?: string;
  branded?: boolean;
};

function normalize(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9.+]+/g, " ")
    .trim();
}

const ALIAS: Record<string, string> = {
  "api rest": "rest",
  php: "php",
  slim: "slim",
  mysql: "mysql",
  sql: "sql",
  jwt: "jwt",
  autenticacion: "auth",
  authentication: "auth",
  apache: "apache",
  "node.js": "node",
  nodejs: "node",
  express: "express",
  typescript: "typescript",
  mongodb: "mongodb",
  mongoose: "mongoose",
  zod: "zod",
  bcrypt: "bcrypt",
  python: "python",
  flask: "flask",
  "vb.net": "dotnet",
  winforms: "winforms",
  "sql server": "sqlserver",
  html5: "html",
  css3: "css",
  javascript: "javascript",
  react: "react",
  flexbox: "flexbox",
  "css grid": "grid",
  git: "git",
  elicitacion: "elicit",
  elicitation: "elicit",
  "especificacion de requerimientos": "reqs",
  "requirements specification": "reqs",
  diagramas: "diagrams",
  diagrams: "diagrams",
  mockups: "mockups",
  prototipado: "proto",
  prototyping: "proto",
  documentacion: "docs",
  documentation: "docs",
  "gemini vision": "gemini",
  rag: "rag",
  openai: "openai",
  n8n: "n8n",
  telegram: "telegram",
  supabase: "supabase",
  docker: "docker",
  linux: "linux",
  "debian 12": "debian",
  debian: "debian",
  kathara: "kathara",
  "ruteo estatico": "static-route",
  "static routing": "static-route",
  "ruteo dinamico": "dynamic-route",
  "dynamic routing": "dynamic-route",
  dijkstra: "dijkstra",
  ipv4: "ipv4",
  dhcp: "dhcp",
};

function Mark({
  children,
  className,
  color,
  filled = true,
}: SVGProps<SVGSVGElement> & { children: ReactNode; color: string; filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className ?? "size-3.5"}
      fill={filled ? color : "none"}
      stroke={filled ? "none" : color}
      strokeWidth={filled ? undefined : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const ICONS: Record<string, { color: string; node: (color: string, className?: string) => ReactNode }> = {
  php: {
    color: "#777BB4",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <ellipse cx="12" cy="12" rx="11" ry="7.2" />
        <path
          fill="#fff"
          d="M6.2 9.6h1.55c1.35 0 2.12.62 1.88 1.86-.27 1.38-1.1 1.86-2.42 1.86H6.7L6.2 15.4H4.85l1.35-5.8Zm.82 1.12-.42 1.82h.72c.62 0 1.08-.22 1.2-.86.12-.62-.14-.96-.78-.96H7.02Zm4.08-1.12h1.35l-.32 1.38h1.18c.58 0 .98-.12 1.1-.66.04-.18.02-.32-.04-.42h1.32c.08.18.12.42.08.64-.18.92-.82 1.28-1.78 1.28h-.92l-.38 1.6h-1.35l1.08-4.82Zm4.55 0h1.55c1.35 0 2.12.62 1.88 1.86-.27 1.38-1.1 1.86-2.42 1.86h-.51L16.3 15.4h-1.35l1.35-5.8Zm.82 1.12-.42 1.82h.72c.62 0 1.08-.22 1.2-.86.12-.62-.14-.96-.78-.96h-.72Z"
        />
      </Mark>
    ),
  },
  slim: {
    color: "#fbbf24",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z" />
        <path d="M12 12 4 8.5M12 12l8-3.5M12 12v8" />
      </Mark>
    ),
  },
  mysql: {
    color: "#4479A1",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M16.8 3.2c-1.1.1-2.3.8-3.2 2-.4.5-.8 1.2-1 1.8-.1.2 0 .3.2.3 1.1-.2 2.3-.1 3.3.4.2.1.3 0 .3-.2.2-.8.7-1.6 1.3-2.2.6-.6.8-1.1.8-1.5 0-.4-.4-.6-1.7-.6Zm-6.4 3.1c-.7 0-1.6.2-2.6.7-2.4 1.2-4.1 3.4-4.9 6.2C2 15.6 2.4 18 4 19.6c1.1 1.1 2.6 1.5 4.2 1.1 1.3-.3 2.4-1.1 3.6-2.4.2-.2.4-.2.5 0 .8.9 1.7 1.6 2.7 2.1 1.3.6 2.7.7 4 .2 1.5-.5 2.6-1.7 3.1-3.3.3-1 .2-2.1-.3-3.2-.8-1.8-2.3-3-4.3-3.4-1-.2-2.1 0-3.1.4-.2.1-.4 0-.4-.2.1-.6.1-1.2 0-1.8-.2-1.1-.8-2-1.8-2.5-.6-.3-1.2-.4-1.8-.3Z" />
      </Mark>
    ),
  },
  sql: {
    color: "#336791",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <ellipse cx="12" cy="6.5" rx="7.5" ry="2.8" />
        <path d="M4.5 6.5v11c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8v-11" />
        <path d="M4.5 12c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8" />
      </Mark>
    ),
  },
  jwt: {
    color: "currentColor",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M10.2 2.1 3.4 6v8.2c0 4.3 3 8.2 8.6 9.7 5.6-1.5 8.6-5.4 8.6-9.7V6l-6.8-3.9L12 1.2 10.2 2.1Zm1.8 4.2a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Zm0 4.6c1.7 0 3.1 1.3 3.1 3v.4H8.9v-.4c0-1.7 1.4-3 3.1-3Z" />
      </Mark>
    ),
  },
  rest: {
    color: "#0f766e",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <path d="M4 8h7l2 3h7" />
        <path d="M4 16h6l2-3h8" />
        <circle cx="4" cy="8" r="1.4" fill={c} stroke="none" />
        <circle cx="20" cy="11" r="1.4" fill={c} stroke="none" />
        <circle cx="4" cy="16" r="1.4" fill={c} stroke="none" />
      </Mark>
    ),
  },
  auth: {
    color: "#d97706",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
        <circle cx="12" cy="15" r="1.2" fill={c} stroke="none" />
      </Mark>
    ),
  },
  apache: {
    color: "#D22128",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M12 2 3 21h3.2l1.5-3.4h8.6L17.8 21H21L12 2Zm0 5.4 3.2 7.2H8.8L12 7.4Z" />
      </Mark>
    ),
  },
  node: {
    color: "#5FA04E",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M11.3 1.3 2.8 6.2c-.5.3-.8.8-.8 1.4v9c0 .6.3 1.1.8 1.4l8.5 4.9c.4.2 1 .2 1.4 0l8.5-4.9c.5-.3.8-.8.8-1.4v-9c0-.6-.3-1.1-.8-1.4l-8.5-4.9c-.4-.2-1-.2-1.4 0Z" />
      </Mark>
    ),
  },
  express: {
    color: "currentColor",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <path d="M3 8h6.2c1.6 0 2.6 1 2.6 2.4S10.8 13 9.2 13H5.8L10.6 18" />
        <path d="M14 8h7M15.8 13H21M14 18h7" />
      </Mark>
    ),
  },
  typescript: {
    color: "#3178C6",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M1.5 1.5h21v21h-21z" />
        <path
          fill="#fff"
          d="M13.4 17.7v-6.3H9.7V9.8h9.1v1.6h-3.7v6.3h-1.7Zm6.4-3.3c.1 1 .7 1.7 2.2 1.7 1 0 1.6-.4 1.6-1 0-.6-.5-.9-1.7-1.3l-1.2-.4c-1.7-.5-2.8-1.4-2.8-3 0-1.8 1.5-3.1 3.9-3.1 2.3 0 3.8 1.2 3.9 3.1h-2.1c-.1-.9-.7-1.5-1.8-1.5-1 0-1.6.5-1.6 1.1 0 .6.5.9 1.7 1.3l1.1.4c2 .6 3.1 1.5 3.1 3.1 0 1.9-1.5 3.2-4.2 3.2-2.5 0-4.1-1.2-4.2-3.3h2.1Z"
        />
      </Mark>
    ),
  },
  mongodb: {
    color: "#47A248",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M12.4 2s.3 2.6-.5 4.4c-.7 1.5-2.1 2.8-2.1 2.8s2.1.4 3.1 2.5c.8 1.7.7 4.1.6 5.1 2.2-1.9 3.6-5 3.6-8.2 0-3.4-2-5.7-4.7-6.6Zm-.8 8.2s-1.3 1.5-1.6 2.6c-.3 1.1-.1 2.2-.1 2.2s1.1-.4 1.8-1.5c.7-1.1.7-2.2.7-2.2s-.3-.7-.8-1.1Z" />
      </Mark>
    ),
  },
  mongoose: {
    color: "#880000",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <path d="M4 15c2-5 5.5-8 8-8s6 3 8 8" />
        <circle cx="9" cy="11" r="1" fill={c} stroke="none" />
        <path d="M12 15v4M9 19h6" />
      </Mark>
    ),
  },
  zod: {
    color: "#3E67B1",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M4 5h16l-8 14L4 5Z" />
      </Mark>
    ),
  },
  bcrypt: {
    color: "#ca8a04",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.5 2.5" />
      </Mark>
    ),
  },
  python: {
    color: "#3776AB",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M12.1 2.2c-2.2 0-2.6.9-2.6 2.6v1.8h5.3c.6 0 1.1.5 1.1 1.1v5.1h1.7c1.7 0 2.5-.8 2.6-2.6.1-1.7.1-2.8 0-4.4C20 3.8 19 2.2 16.2 2.2h-4.1Zm-1.5 1.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" />
        <path
          fill="#FFD43B"
          d="M11.9 21.8c2.2 0 2.6-.9 2.6-2.6v-1.8H9.2c-.6 0-1.1-.5-1.1-1.1v-5.1H6.4c-1.7 0-2.5.8-2.6 2.6-.1 1.7-.1 2.8 0 4.4.2 2 1.2 3.6 4 3.6h4.1Zm1.5-1.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z"
        />
      </Mark>
    ),
  },
  flask: {
    color: "currentColor",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <path d="M9 3h6M12 3v6L6.5 20h11L12 9" />
      </Mark>
    ),
  },
  dotnet: {
    color: "#512BD4",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M12 2 2.5 6.8v10.4L12 22l9.5-4.8V6.8L12 2Zm4.3 13.7c-.4.7-1.2 1.1-2.2 1.1-1.6 0-2.6-1-2.6-2.7V10.4h1.7v3.6c0 .9.4 1.4 1.1 1.4.7 0 1.1-.5 1.1-1.3v-3.7h1.7v3.7c0 1.3-.3 2.2-.9 2.6Zm-7.6.9-2.6-6.2h1.8l1.6 4.2 1.6-4.2h1.8l-2.6 6.2H8.7Z" />
      </Mark>
    ),
  },
  winforms: {
    color: "#0078D6",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M3 4h8.2v7.2H3V4Zm9.8 0H21v7.2h-8.2V4ZM3 12.8h8.2V20H3v-7.2Zm9.8 0H21V20h-8.2v-7.2Z" />
      </Mark>
    ),
  },
  sqlserver: {
    color: "#CC2927",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M4 5.5c0-1.4 3.6-2.5 8-2.5s8 1.1 8 2.5v13c0 1.4-3.6 2.5-8 2.5s-8-1.1-8-2.5v-13Z" />
        <path fill="#fff" fillOpacity=".25" d="M4 10.5c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
      </Mark>
    ),
  },
  html: {
    color: "#E34F26",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M3.2 2.2h17.6l-1.6 17.8L12 22.2 4.8 20 3.2 2.2Z" />
        <path fill="#fff" d="M12 19.4 17.4 18l1.3-14.2H12v2.5h4.3l-.3 3.2H12v2.5h3.8l-.4 4.2L12 16.9v2.5Z" />
        <path fill="#EBEBEB" d="M12 19.4V16.9l-3.3-.9-.2-2.6H11V11H6.4l.5 5.6L12 19.4Zm0-10.2V6.7H6.7l.2 2.5H12Z" />
      </Mark>
    ),
  },
  css: {
    color: "#1572B6",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M3.2 2.2h17.6l-1.6 17.8L12 22.2 4.8 20 3.2 2.2Z" />
        <path fill="#fff" d="M12 19.4 17.4 18l.9-9.8H12v2.5h3.9l-.2 2.4H12v2.5h3.5l-.4 4.1L12 16.9v2.5Z" />
        <path fill="#EBEBEB" d="M12 19.4V16.9l-3.4-.9-.2-2.5h2.4V11H6.6l.5 5.6L12 19.4Zm0-10.2V6.7H6.7l.2 2.5H12Z" />
      </Mark>
    ),
  },
  javascript: {
    color: "#F7DF1E",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M1.5 1.5h21v21h-21z" />
        <path d="M14.3 18.4c.4.7 1 1.2 2.1 1.2 1.1 0 1.8-.5 1.8-1.4 0-1-.7-1.3-1.9-1.9l-.7-.3c-1.9-.8-3.1-1.8-3.1-4 0-2 1.5-3.5 3.9-3.5 1.7 0 2.9.6 3.8 2.1l-2.1 1.3c-.4-.8-.9-1.1-1.7-1.1-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.6 1.6l.7.3c2.2 1 3.5 1.9 3.5 4.1 0 2.3-1.8 3.6-4.3 3.6-2.4 0-4-.9-4.7-2.7l2.1-1.2Zm-6.6.2c.3.6.6 1 1.3 1 .7 0 1.1-.3 1.1-1.3V10.8h2.6v7.6c0 2.7-1.6 3.9-3.9 3.9-2.1 0-3.3-1.1-3.9-2.4l2.8-1.3Z" />
      </Mark>
    ),
  },
  react: {
    color: "#61DAFB",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <circle cx="12" cy="12" r="2.1" fill={c} stroke="none" />
        <ellipse cx="12" cy="12" rx="10.2" ry="4.1" />
        <ellipse cx="12" cy="12" rx="10.2" ry="4.1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10.2" ry="4.1" transform="rotate(120 12 12)" />
      </Mark>
    ),
  },
  flexbox: {
    color: "#2563eb",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M9 5v14M15 5v14" />
      </Mark>
    ),
  },
  grid: {
    color: "#2563eb",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M12 4v16M3 12h18" />
      </Mark>
    ),
  },
  git: {
    color: "#F05032",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M21.6 11 13 2.4a1.4 1.4 0 0 0-2 0L8.9 4.5l2.5 2.5a2 2 0 0 1 2.1 2.4l2.4 2.4a2 2 0 1 1-1.1.9l-2.3-2.3v6.1a2 2 0 1 1-1.5 0V10.3a2 2 0 0 1-1.1-2.7L7.8 5.6 2.4 11a1.4 1.4 0 0 0 0 2l8.6 8.6a1.4 1.4 0 0 0 2 0l8.6-8.6a1.4 1.4 0 0 0 0-2Z" />
      </Mark>
    ),
  },
  elicit: {
    color: "#d97706",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <circle cx="9" cy="9" r="3.2" />
        <path d="M4.5 18c.9-2.4 2.7-3.6 4.5-3.6s3.6 1.2 4.5 3.6" />
        <path d="M16 8h4M16 12h3" />
      </Mark>
    ),
  },
  reqs: {
    color: "#d97706",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <path d="M7 4h8l4 4v12H7z" />
        <path d="M15 4v4h4M9 12h6M9 16h6" />
      </Mark>
    ),
  },
  diagrams: {
    color: "#d97706",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <rect x="3.5" y="3.5" width="6" height="6" rx="1" />
        <rect x="14.5" y="14.5" width="6" height="6" rx="1" />
        <rect x="14.5" y="3.5" width="6" height="6" rx="1" />
        <path d="M9.5 6.5h5M17.5 9.5v5" />
      </Mark>
    ),
  },
  mockups: {
    color: "#d97706",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </Mark>
    ),
  },
  proto: {
    color: "#d97706",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M10 18h4" />
      </Mark>
    ),
  },
  docs: {
    color: "#d97706",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v4h4M9 12h6M9 16h6" />
      </Mark>
    ),
  },
  gemini: {
    color: "#8E75B2",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M12 2c.4 4.6 1.8 8 6.4 10C13.8 14 12.4 17.4 12 22 11.6 17.4 10.2 14 5.6 12 10.2 10 11.6 6.6 12 2Z" />
      </Mark>
    ),
  },
  rag: {
    color: "#7c3aed",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <circle cx="7" cy="8" r="2.2" />
        <circle cx="17" cy="8" r="2.2" />
        <circle cx="12" cy="17" r="2.2" />
        <path d="M8.8 9.4 10.6 15M15.2 9.4 13.4 15M9.2 8h5.6" />
      </Mark>
    ),
  },
  openai: {
    color: "#10a37f",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M14.6 4.4a4.2 4.2 0 0 0-6.3 2.1L7.8 7.6A4.2 4.2 0 0 0 3.4 12a4.2 4.2 0 0 0 3.4 4.1l.6.1a4.2 4.2 0 0 0 .5 3.8 4.2 4.2 0 0 0 6.3-2.1l.5-1.1a4.2 4.2 0 0 0 4.4-4.4l-.1-.6a4.2 4.2 0 0 0-.5-3.8 4.2 4.2 0 0 0-3.9-2.2Zm-2.5 1.7c.5 0 1 .1 1.4.4l.1.1-3.6 2.1v4.1l-1.6-.9V9.4l2.3-1.3c.4-.3.9-.4 1.4-.4Zm2.7 1.1c.4.3.8.8 1 1.3v.1l-1.6.9V12l-3.3-1.9 1.6-.9 2.3-1Zm1.6 3.4c0 .5-.1 1-.4 1.4l-.1.1-1.6.9-3.3 1.9v-1.9l3.3-1.9 2.1-1.2v.7Zm-6.2 5.1c-.5 0-1-.1-1.4-.4l-.1-.1 3.6-2.1v-4.1l1.6.9v4.4l-2.3 1.3c-.4.3-.9.4-1.4.4Z" />
      </Mark>
    ),
  },
  n8n: {
    color: "#EA4B71",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <rect x="3" y="9.5" width="5" height="5" rx="1.2" />
        <rect x="16" y="3.5" width="5" height="5" rx="1.2" />
        <rect x="16" y="15.5" width="5" height="5" rx="1.2" />
        <path d="M8 12h3.2c1.4 0 2.3-.9 2.3-2.2V8.5h2.5M8 12h3.2c1.4 0 2.3.9 2.3 2.2v1.3h2.5" fill="none" stroke={c} strokeWidth="1.8" />
      </Mark>
    ),
  },
  telegram: {
    color: "#26A5E4",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M21.5 4.4 2.8 11.6c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.6.4.8 1 .8.5 0 .7-.2 1-.6l2.7-2.6 5.6 4.1c1 .6 1.8.3 2-.9l3.1-14.6c.3-1.3-.5-1.9-1.6-1.4ZM8.2 13.8l10.3-6.5c.5-.3 1-.1.6.2l-8.8 8-.3 3.5-1.8-5.2Z" />
      </Mark>
    ),
  },
  supabase: {
    color: "#3ECF8E",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M13.5 2.2 5.2 14.1c-.4.6 0 1.4.8 1.4h6.1L10.5 21.8l8.3-11.9c.4-.6 0-1.4-.8-1.4h-6.1L13.5 2.2Z" />
      </Mark>
    ),
  },
  docker: {
    color: "#2496ED",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M21.8 10.4c-.6-.4-2-.6-3.1-.4-.1-1-.7-1.9-1.6-2.6l-.4-.3-.3.4c-.5.7-.7 1.6-.6 2.4.1.6.3 1.1.7 1.5-1.6.4-3.2.4-4.6.1H3.1c-.5 2.3.3 5.2 2.4 7 1.7 1.5 4.1 2.3 7 2.3 5.4 0 9.5-2.5 9.5-7.8 0-.1 0-1.3-1.2-2.1ZM6.1 11.2h2.1v2H6.1v-2Zm2.8 0h2.1v2H8.9v-2Zm2.8 0h2.1v2h-2.1v-2ZM8.9 8.6h2.1v2H8.9v-2Zm2.8 0h2.1v2h-2.1v-2Zm0-2.5h2.1v2h-2.1v-2Zm2.8 2.5h2.1v2h-2.1v-2Z" />
      </Mark>
    ),
  },
  linux: {
    color: "#FCC624",
    node: (c, className) => (
      <Mark color={c} className={className}>
        <path d="M12 3c-2.2 1.2-3.6 3.6-3.7 6.2 0 1.2.3 2.3.4 2.8-.7 1-1.6 2.4-1.6 4.1 0 2.6 1.8 4.1 5 4.1h.1c3.1 0 4.9-1.4 4.9-4.1 0-1.7-.9-3.1-1.6-4.1.2-.6.4-1.6.4-2.8C15.8 6.4 14.3 4 12 3Z" />
        <circle cx="9.7" cy="10.2" r="1" fill="#111" />
        <circle cx="14.3" cy="10.2" r="1" fill="#111" />
      </Mark>
    ),
  },
  debian: {
    color: "#A81D33",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M13.8 7.2c-2.8-.6-5.2 1.1-5.4 3.8-.2 2.4 1.5 4 3.7 4.2 1.6.1 2.8-.7 3.1-1.9" />
      </Mark>
    ),
  },
  kathara: {
    color: "#0d9488",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <circle cx="6" cy="7" r="2" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="12" cy="17" r="2" />
        <path d="M7.8 8.2 10.4 15M16.2 8.2 13.6 15M8 7h8" />
      </Mark>
    ),
  },
  "static-route": {
    color: "#0d9488",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <path d="M4 18h6l3-6 3 3 4-8" />
        <path d="M16 7h4v4" />
      </Mark>
    ),
  },
  "dynamic-route": {
    color: "#0d9488",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <path d="M4 8h5l3 4 3-3 5 5" />
        <path d="M4 16h6M16 8v4h4" />
      </Mark>
    ),
  },
  dijkstra: {
    color: "#ca8a04",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="5" r="2" />
        <circle cx="12" cy="19" r="2" />
        <circle cx="19" cy="12" r="2" />
        <path d="M7 12h10M12 7v10M6.6 10.6 10.4 6.8M13.6 17.2l3.8 3.8" />
      </Mark>
    ),
  },
  ipv4: {
    color: "#4f46e5",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 12h10M9 9v6" />
      </Mark>
    ),
  },
  dhcp: {
    color: "#7c3aed",
    node: (c, className) => (
      <Mark color={c} className={className} filled={false}>
        <circle cx="12" cy="12" r="2" />
        <path d="M12 5v2M12 17v2M5 12h2M17 12h2M7 7l1.4 1.4M15.6 15.6 17 17M17 7l-1.4 1.4M8.4 15.6 7 17" />
      </Mark>
    ),
  },
};

export function TechIcon({ name, className = "size-4 shrink-0", branded = true }: TechIconProps) {
  const key = ALIAS[normalize(name)];
  const icon = key ? ICONS[key] : undefined;
  if (!icon) return null;
  const color = branded ? icon.color : "currentColor";
  return <>{icon.node(color, className)}</>;
}
