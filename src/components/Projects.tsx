import { useRef } from "react";
import type { ProjectItem } from "../data/profile";
import { useI18n } from "../i18n/LanguageContext";
import { CheckIcon, CloseIcon, CodeIcon, ExpandIcon, ExternalLinkIcon, GithubIcon } from "./icons";
import { Section } from "./Section";
import { TechIcon } from "./TechIcon";

function ProjectShot({ project, priority }: { project: ProjectItem; priority?: boolean }) {
  const { t } = useI18n();
  const dialogRef = useRef<HTMLDialogElement>(null);
  if (!project.image) return null;

  const sourceW = project.imageWidth ?? 1400;
  const sourceH = project.imageHeight ?? 900;
  const tall = sourceH / sourceW > 1.15;
  const alt = project.imageAlt ?? project.title;

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <figure className={`project-frame ${tall ? "project-frame-tall" : ""}`}>
        <button
          type="button"
          onClick={open}
          aria-label={`${t.ui.enlarge}: ${project.title}`}
          className="relative block w-full cursor-zoom-in"
        >
          <img
            src={project.image}
            alt={alt}
            width={sourceW}
            height={sourceH}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={`project-shot ${project.imageFit === "contain" ? "object-contain" : ""}`}
          />
          <span className="project-shot-hint">
            <ExpandIcon className="size-3.5" />
            {t.ui.enlarge}
          </span>
        </button>
      </figure>
      <dialog
        ref={dialogRef}
        className="project-lightbox"
        aria-label={project.title}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <button
          type="button"
          onClick={close}
          aria-label={t.ui.closeImage}
          className="project-lightbox-close"
        >
          <CloseIcon className="size-5" />
        </button>
        <img src={project.image} alt={alt} width={sourceW} height={sourceH} />
      </dialog>
    </>
  );
}

export function Projects() {
  const { t } = useI18n();

  return (
    <Section id="proyectos" title={t.ui.sections.projects} icon={<CodeIcon />}>
      <ul className="flex flex-col gap-8 xl:gap-10">
        {t.projects.map((project, index) => (
          <li
            key={project.title}
            className="flex flex-col gap-5 rounded-2xl border border-black/10 bg-white/60 p-4 shadow-[0_12px_40px_rgb(0_0_0/0.06)] xl:gap-6 xl:p-6 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_18px_50px_rgb(0_0_0/0.28)]"
          >
            <div>
              <h3 className="text-xl font-semibold xl:text-2xl">{project.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag.name}
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ${tag.className}`}
                  >
                    <TechIcon name={tag.name} branded={false} />
                    {tag.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-body">
              <ProjectShot project={project} priority={index === 0} />
              <p className="min-w-0 flex-1 text-pretty text-gray-800 dark:text-gray-100">{project.description}</p>
            </div>
            {project.highlights ? (
                <ul className="space-y-2">
                  {project.highlights.map((line) => (
                    <li
                      key={line}
                      className="flex gap-2 text-pretty text-sm text-gray-600 dark:text-gray-400"
                    >
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-yellow-500" />
                      <span className="min-w-0">{line}</span>
                    </li>
                  ))}
                </ul>
            ) : null}

            <div className="flex flex-wrap gap-3 text-sm">
              {project.demo ? (
                <a
                  className="link-chip inline-flex items-center gap-1.5 px-3 py-1.5 font-medium text-yellow-600 dark:text-yellow-400"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLinkIcon /> {project.liveKind === "site" ? t.ui.openSite : t.ui.openDemo}
                </a>
              ) : null}
              {project.github ? (
                <a
                  className="link-chip inline-flex items-center gap-1.5 px-3 py-1.5 text-gray-600 dark:text-gray-300"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon /> {t.ui.repo}
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
