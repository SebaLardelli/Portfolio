import { useI18n } from "../i18n/LanguageContext";
import { CodeIcon } from "./icons";
import { Section } from "./Section";
import { TechIcon } from "./TechIcon";

export function Skills() {
  const { t } = useI18n();

  return (
    <Section id="habilidades" title={t.ui.sections.skills} icon={<CodeIcon />}>
      <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.skillGroups.map((group) => (
          <div key={group.label}>
            <dt className="mb-3 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
              {group.label}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/50 px-2.5 py-1 text-sm text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                  >
                    <TechIcon name={item} />
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
