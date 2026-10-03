import { useI18n } from "../i18n/LanguageContext";
import { CheckIcon, CodeIcon, ExternalLinkIcon, GithubIcon } from "./icons";
import { Section } from "./Section";

const positionClass: Record<string, string> = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

export function Projects() {
  const { t } = useI18n();

  return (
    <Section id="proyectos" title={t.ui.sections.projects} icon={<CodeIcon />}>
      <ul className="flex flex-col gap-16 xl:gap-20">
        {t.projects.map((project, index) => {
          const stacked = Boolean(project.stackImageBelow);
          const image = project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt ?? project.title}
              loading={index === 0 ? "eager" : "lazy"}
              className={`h-full w-full ${
                stacked
                  ? "max-h-none xl:max-h-[min(52rem,85vh)]"
                  : "max-h-[22rem] xl:max-h-[26rem]"
              } ${project.imageFit === "contain" ? "object-contain" : "object-cover"} ${
                positionClass[project.imagePosition ?? "top"]
              }`}
              style={{ aspectRatio: project.imageAspect ?? "16/10" }}
            />
          ) : null;

          const media = image ? (
            <div
              className={`project-media overflow-hidden rounded-xl border border-black/10 bg-black shadow-lg dark:border-white/10 ${
                stacked ? "xl:mx-auto xl:max-w-lg" : ""
              }`}
            >
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition hover:scale-[1.01]"
                >
                  {image}
                </a>
              ) : (
                image
              )}
            </div>
          ) : null;

          const copy = (
            <div>
              <h3 className="text-xl font-semibold xl:text-2xl">{project.title}</h3>
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
                    <ExternalLinkIcon /> {t.ui.openDemo}
                  </a>
                ) : null}
                {project.github ? (
                  <a
                    className="inline-flex items-center gap-1.5 text-gray-600 hover:underline dark:text-gray-300"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon /> {t.ui.repo}
                  </a>
                ) : null}
              </div>
            </div>
          );

          return (
            <li
              key={project.title}
              className={`grid items-center gap-6 lg:gap-10 ${
                stacked
                  ? "xl:grid-cols-1"
                  : `${media ? "lg:grid-cols-2" : ""} ${
                      media && index % 2 === 1 ? "lg:[&_.project-media]:order-2" : ""
                    }`
              }`}
            >
              {stacked ? (
                <>
                  {copy}
                  {media}
                </>
              ) : (
                <>
                  {media}
                  {copy}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
