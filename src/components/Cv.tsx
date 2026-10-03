import { useEffect, type ReactNode } from "react";
import { useI18n } from "../i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { PrinterIcon } from "./icons";

function githubHandle(url: string) {
  return url.replace(/^https?:\/\/(www\.)?github\.com\//, "github.com/");
}

function siteHost(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function Cv() {
  const { t } = useI18n();
  const { profile } = t;

  useEffect(() => {
    document.title = t.ui.cv.pageTitle;
    window.scrollTo(0, 0);
    return () => {
      document.title = t.ui.pageTitle;
    };
  }, [t.ui.cv.pageTitle, t.ui.pageTitle]);

  return (
    <div className="cv-page bg-page min-h-screen">
      <div className="cv-toolbar cv-no-print sticky top-0 z-20 border-b border-black/10 bg-[#f6f3ed]/90 px-4 py-3 backdrop-blur-md dark:border-white/10 dark:bg-[#0c0b0a]/90">
        <div className="mx-auto flex max-w-[210mm] flex-wrap items-center justify-between gap-3">
          <a href="#inicio" className="text-link text-sm text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400">
            ← {t.ui.cv.back}
          </a>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-gray-800 transition hover:border-yellow-400/60 dark:border-white/10 dark:bg-white/5 dark:text-gray-100"
            >
              <PrinterIcon /> {t.ui.cv.print}
            </button>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>

      <article className="cv-sheet mx-auto my-6 px-5 py-8 sm:px-8 xl:my-10">
        <header className="flex items-start gap-5 border-b border-yellow-500/40 pb-5">
          <img
            src={profile.image}
            alt={t.ui.photoAlt}
            width={96}
            height={96}
            className="size-20 shrink-0 rounded-full bg-black object-cover shadow-md ring-2 ring-yellow-400/80 sm:size-24"
          />
          <div className="min-w-0">
            <h1 className="text-3xl font-bold tracking-tight text-pretty sm:text-4xl">
              <span className="gradient-name">{profile.name}</span>
            </h1>
            <p className="mt-1 text-sm font-medium text-yellow-600 dark:text-yellow-400">{profile.role}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{profile.location}</p>
            <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600 dark:text-gray-400">
              <a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a>
              <a className="text-link" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                {githubHandle(profile.github)}
              </a>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                {profile.name}
              </a>
              <a className="text-link" href={profile.calcomania} target="_blank" rel="noreferrer">
                {siteHost(profile.calcomania)}
              </a>
            </p>
          </div>
        </header>

        <CvSection title={t.ui.cv.profile}>
          <p className="text-pretty text-sm leading-relaxed text-gray-700 dark:text-gray-300">{profile.headline}</p>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-gray-600 dark:text-gray-400">{profile.summary}</p>
        </CvSection>

        <CvSection title={t.ui.cv.education}>
          <ul className="space-y-3">
            {t.formation.map((item) => (
              <li key={item.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <h3 className="text-sm font-semibold">
                    {item.title}
                    <span className="font-normal text-gray-500"> — {item.place}</span>
                  </h3>
                  <span className="shrink-0 text-xs text-gray-500">{item.period}</span>
                </div>
                {item.detail ? (
                  <p className="mt-0.5 text-pretty text-sm text-gray-600 dark:text-gray-400">
                    {item.detail.split(/(?<=\.)\s/)[0]}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </CvSection>

        <CvSection title={t.ui.cv.experience}>
          <ul className="space-y-4">
            {t.experience.map((item) => (
              <li key={`${item.company}-${item.title}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <h3 className="text-sm font-semibold">
                    {item.title}
                    <span className="font-normal text-gray-500"> — {item.company}</span>
                  </h3>
                  <span className="shrink-0 text-xs text-gray-500">{item.period}</span>
                </div>
                <p className="mt-0.5 text-pretty text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                {item.highlights ? (
                  <ul className="mt-1.5 list-disc space-y-1 pl-4 text-pretty text-sm text-gray-600 dark:text-gray-400">
                    {item.highlights.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </CvSection>

        <CvSection title={t.ui.cv.projects}>
          <ul className="space-y-3">
            {t.projects.map((project) => (
              <li key={project.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-sm font-semibold">{project.title}</h3>
                  <span className="text-xs text-gray-500">{project.tags.map((tag) => tag.name).join(" · ")}</span>
                </div>
                <p className="mt-0.5 text-pretty text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                <p className="mt-1 flex flex-wrap gap-x-3 text-xs">
                  {project.demo ? (
                    <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
                      {project.liveKind === "site" ? t.ui.openSite : t.ui.openDemo}
                    </a>
                  ) : null}
                  {project.github ? (
                    <a className="text-link" href={project.github} target="_blank" rel="noreferrer">
                      {t.ui.repo}
                    </a>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </CvSection>

        <CvSection title={t.ui.cv.skills}>
          <ul className="space-y-1.5">
            {t.skillGroups.map((group) => (
              <li key={group.label} className="text-sm">
                <span className="font-semibold text-yellow-700 dark:text-yellow-400">{group.label}: </span>
                <span className="text-gray-700 dark:text-gray-300">{group.items.join(" · ")}</span>
              </li>
            ))}
          </ul>
        </CvSection>

        <div className="grid gap-6 sm:grid-cols-2">
          <CvSection title={t.ui.cv.languages}>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>{t.ui.cv.spanish}</li>
              <li>{t.ui.cv.english}</li>
            </ul>
          </CvSection>
          <CvSection title={t.ui.cv.additional}>
            <p className="text-pretty text-sm text-gray-600 dark:text-gray-400">{profile.plus}</p>
          </CvSection>
        </div>
      </article>
    </div>
  );
}

function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cv-block mt-5">
      <h2 className="mb-2 border-b border-black/10 pb-1 text-xs font-semibold tracking-[0.16em] text-yellow-700 uppercase dark:border-white/10 dark:text-yellow-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
