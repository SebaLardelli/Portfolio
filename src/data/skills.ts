export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Lenguajes en GitHub",
    items: ["HTML", "CSS", "JavaScript", "PHP", "Python", "Visual Basic .NET"],
  },
  {
    label: "Del currículum",
    items: [
      "Bases de datos",
      "Node.js",
      "Testing",
      "Ingeniería del software",
      "Metodologías ágiles",
    ],
  },
  {
    label: "Forma de trabajo",
    items: ["Resolución de problemas", "Trabajo en equipo", "Gestión del tiempo"],
  },
  {
    label: "Idiomas",
    items: ["Inglés básico"],
  },
];
