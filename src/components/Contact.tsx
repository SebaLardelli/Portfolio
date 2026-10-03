import { useI18n } from "../i18n/LanguageContext";
import { FileIcon, MailIcon, PhoneIcon } from "./icons";
import { Section } from "./Section";

export function Contact() {
  const { t } = useI18n();
  const { profile } = t;

  const contacts = [
    {
      label: t.ui.contactEmail,
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <MailIcon className="size-6" />,
    },
    {
      label: t.ui.contactPhone,
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      icon: <PhoneIcon className="size-6" />,
    },
    {
      label: t.ui.contactCv,
      value: t.ui.downloadCv,
      href: profile.cv,
      icon: <FileIcon className="size-6" />,
      download: "Sebastian-Lardelli-CV.pdf",
    },
  ];

  return (
    <Section id="contacto" title={t.ui.sections.contact} icon={<MailIcon />}>
      <p className="mb-6 text-pretty text-gray-600 dark:text-gray-300">
        {t.ui.contactIntro}
      </p>
      <ul className="grid gap-3 xl:grid-cols-3">
        {contacts.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              {...("download" in item && item.download ? { download: item.download } : {})}
              {...(item.href.startsWith("http") || item.href.endsWith(".pdf")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="flex items-center gap-4 rounded-2xl border border-black/10 px-4 py-4 transition hover:border-yellow-400/60 hover:bg-yellow-400/5 dark:border-white/10 dark:hover:border-yellow-400/40 dark:hover:bg-yellow-400/5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-yellow-400/15 text-yellow-600 dark:text-yellow-400">
                {item.icon}
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-lg font-semibold break-words text-pretty text-gray-900 dark:text-white">
                  {item.value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
