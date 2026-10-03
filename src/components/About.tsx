import { UserIcon } from "./icons";
import { Section } from "./Section";
import { useI18n } from "../i18n/LanguageContext";

export function About() {
  const { t } = useI18n();

  return (
    <Section id="sobre-mi" title={t.ui.sections.about} icon={<UserIcon />}>
      <div className="grid items-start gap-8 overflow-visible sm:grid-cols-[1.2fr_auto]">
        <div className="space-y-4 text-pretty leading-relaxed text-gray-600 dark:text-gray-300">
          {t.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="justify-self-center p-3">
          <div className="photo-neon size-40 xl:size-52">
            <span className="photo-neon-ring" aria-hidden="true" />
            <img
              src={t.profile.image}
              alt={t.ui.photoAlt}
              className="relative z-10 size-full rounded-full bg-black object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
