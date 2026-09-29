export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    label: "Backend",
    items: ["PHP", "Node.js", "Python", "Visual Basic .NET", "Bases de datos"],
  },
  {
    label: "Herramientas",
    items: ["Git", "Docker", "Testing"],
  },
];
