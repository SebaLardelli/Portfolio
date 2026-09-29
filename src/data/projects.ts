export type Project = {
  title: string;
  summary: string;
  stack: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Calcomanía",
    summary:
      "Proyecto final de la tienda de calcomanías. En el repositorio está el código en PHP, JavaScript, HTML y CSS.",
    stack: ["PHP", "JavaScript", "HTML", "CSS"],
    repo: "https://github.com/SebaLardelli/Proyecto-FinalPP2",
  },
  {
    title: "MusicMania",
    summary:
      "Juego web para adivinar canciones, hecho para Desarrollo y Arquitecturas Web. El jugador elige una categoría, escucha el tema y responde en el menor tiempo posible.",
    stack: ["HTML", "JavaScript", "CSS"],
    repo: "https://github.com/SebaLardelli/MusicMania",
    demo: "https://sebalardelli.github.io/MusicMania/",
  },
  {
    title: "Analizador agrícola",
    summary:
      "Programa en Python que analiza fotos de granos y semillas para detectar especie, estado y problemas de calidad. Corre con Flask y Docker.",
    stack: ["Python", "Flask", "Docker"],
    repo: "https://github.com/SebaLardelli/AI_Agro",
  },
  {
    title: "Sodería Lardelli",
    summary:
      "Aplicación para el negocio de agua y soda: productos, categorías, clientes, boletas e historial. Se puede instalar en el celular.",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/SebaLardelli/Soderia-Lardelli",
  },
  {
    title: "Portada de diario",
    summary:
      "Portada de un diario digital sobre Rosario, con HTML semántico y CSS. Está pensada para celular, tablet y escritorio.",
    stack: ["HTML", "CSS"],
    repo: "https://github.com/SebaLardelli/Noticia-Propia",
    demo: "https://sebalardelli.github.io/Noticia-Propia/",
  },
  {
    title: "Configuración de red",
    summary:
      "Trabajo práctico de redes. Incluye la consigna de configuración y un laboratorio con los archivos de arranque de los equipos.",
    stack: ["Redes"],
    repo: "https://github.com/SebaLardelli/Redes-Comunicacion",
  },
];
