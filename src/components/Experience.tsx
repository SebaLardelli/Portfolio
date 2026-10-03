import { useI18n } from "../i18n/LanguageContext";
import { BriefcaseIcon, CheckIcon } from "./icons";
import { Section } from "./Section";

export function Experience() {
  const { t } = useI18n();

  return (
    <Section id="experiencia" title={t.ui.sections.experience} icon={<BriefcaseIcon />}>
      <ol className="relative ml-1 before:absolute before:inset-y-0 before:-start-1.5 before:w-px before:bg-gray-200 dark:before:bg-gray-800">
        {t.experience.map((item) => (
          <li key={`${item.company}-${item.title}`} className="relative ms-6 mb-10 last:mb-0">
            <span className="absolute top-1.5 -start-[1.45rem] flex size-3.5 items-center justify-center">
              {item.current ? (
                <span className="absolute size-3.5 animate-ping rounded-full bg-yellow-400/70" />
              ) : null}
              <span className="relative size-3 rounded-full border-2 border-yellow-400 bg-white dark:bg-neutral-950" />
            </span>
            <h3 className="text-lg font-semibold xl:text-xl">{item.title}</h3>
            <h4 className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
              {item.company}
            </h4>
            <time className="text-sm text-gray-500">{item.period}</time>
            <p className="mt-2 text-pretty text-gray-600 dark:text-gray-300">{item.description}</p>
            {item.highlights ? (
              <ul className="mt-3 space-y-2">
                {item.highlights.map((line) => (
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
          </li>
        ))}
      </ol>
    </Section>
  );
}
