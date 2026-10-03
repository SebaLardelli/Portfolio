import type { ProjectItem } from "../data/profile";
import { useI18n } from "../i18n/LanguageContext";
import { CheckIcon, CodeIcon, ExternalLinkIcon, GithubIcon } from "./icons";
import { Section } from "./Section";

function ProjectShot({ project, priority }: { project: ProjectItem; priority?: boolean }) {
  if (!project.image) return null;

  const maxWidth = project.imageWidth ?? 1400;
  const tall = (project.imageHeight ?? 0) > (project.imageWidth ?? 0);

  const image = (
    <img
      src={project.image}
      alt={project.imageAlt ?? project.title}
      width={project.imageWidth}
      height={project.imageHeight}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`project-shot ${project.imageFit === "contain" ? "object-contain" : ""}`}
      style={{
        maxWidth: `min(100%, ${maxWidth}px)`,
        maxHeight: tall || project.imageFit === "contain" ? "min(52rem, 82vh)" : undefined,
      }}
    />
  );

  return (
    <figure
      className={`project-frame mx-auto w-full ${tall ? "max-w-[44rem]" : ""}`}
      style={{ maxWidth: tall ? undefined : `min(100%, ${maxWidth}px)` }}
    >
      {project.demo ? (
        <a href={project.demo} target="_blank" rel="noreferrer" className="block">
          {image}
        </a>
      ) : (
        image
      )}
    </figure>
  );
}

export function Projects() {
  const { t } = useI18n();

  return (
    <Section id="proyectos" title={t.ui.sections.projects} icon={<CodeIcon />}>
      <ul className="flex flex-col gap-16 xl:gap-24">
        {t.projects.map((project, index) => (
          <li key={project.title} className="flex flex-col gap-5 xl:gap-7">
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
            </div>

            <ProjectShot project={project} priority={index === 0} />

            <div>
              <p className="text-pretty text-gray-600 dark:text-gray-300">{project.description}</p>
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
          </li>
        ))}
      </ul>
    </Section>
  );
}
