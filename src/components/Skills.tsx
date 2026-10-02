import { useI18n } from "../i18n/LanguageContext";
import { CodeIcon } from "./icons";
import { Section } from "./Section";

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
                    className="rounded-full border border-black/10 px-2.5 py-1 text-sm text-gray-600 dark:border-white/10 dark:text-gray-300"
                  >
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
