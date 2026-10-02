import { projects } from "../data/profile";
import { CheckIcon, CodeIcon, ExternalLinkIcon, GithubIcon } from "./icons";
import { Section } from "./Section";

const positionClass: Record<string, string> = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

export function Projects() {
  return (
    <Section id="proyectos" title="Proyectos" icon={<CodeIcon />}>
      <ul className="flex flex-col gap-16">
        {projects.map((project) => (
          <li
            key={project.title}
            className={`grid items-start gap-6 ${project.image ? "sm:grid-cols-[1fr_1.05fr]" : ""}`}
          >
            {project.image ? (
              project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer" className="block">
                  <img
                    src={project.image}
                    alt={project.imageAlt ?? `Captura de ${project.title}`}
                    className={`w-full rounded-xl border border-black/10 bg-black shadow-lg transition hover:scale-[1.01] dark:border-white/10 ${project.imageFit === "contain" ? "object-contain" : "object-cover"} ${positionClass[project.imagePosition ?? "top"]}`}
                    style={{ aspectRatio: project.imageAspect ?? "16/10" }}
                  />
                </a>
              ) : (
                <img
                  src={project.image}
                  alt={project.imageAlt ?? `Captura de ${project.title}`}
                  className={`w-full rounded-xl border border-black/10 bg-black shadow-lg dark:border-white/10 ${project.imageFit === "contain" ? "object-contain" : "object-cover"} ${positionClass[project.imagePosition ?? "top"]}`}
                  style={{ aspectRatio: project.imageAspect ?? "16/10" }}
                />
              )
            ) : null}
            <div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag.name}
                    className={`rounded-full px-2.5 py-1 text-xs ${tag.className}`}
                  >
                    {tag.name}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-pretty text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              {project.highlights ? (
                <ul className="mt-3 space-y-2">
                  {project.highlights.map((line) => (
                    <li
                      key={line}
                      className="flex gap-2 text-pretty text-sm text-gray-600 dark:text-gray-400"
                    >
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-yellow-500" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {project.demo ? (
                  <a
                    className="inline-flex items-center gap-1.5 font-medium text-yellow-600 hover:underline dark:text-yellow-400"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLinkIcon /> Abrir demo
                  </a>
                ) : null}
                {project.github ? (
                  <a
                    className="inline-flex items-center gap-1.5 text-gray-600 hover:underline dark:text-gray-300"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon /> Repo
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
