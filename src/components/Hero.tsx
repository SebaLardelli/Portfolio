import { useI18n } from "../i18n/LanguageContext";
import { FileIcon, GithubIcon, MailIcon } from "./icons";
import { AvailabilityBadge, CredentialLink, SocialPill } from "./Pills";

export function Hero() {
  const { t } = useI18n();
  const { profile } = t;

  return (
    <section id="inicio" className="page-width mx-auto px-5 pb-10 pt-28 xl:pb-14 xl:pt-32">
      <div className="anim-fade-in mb-5 flex items-center gap-4">
        <img
          src={profile.image}
          alt={t.ui.photoAlt}
          className="size-16 rounded-full bg-black object-cover shadow-lg ring-2 ring-yellow-400/80 xl:size-20"
        />
        <div className="flex flex-col gap-1">
          {profile.available ? <AvailabilityBadge /> : null}
        </div>
      </div>

      <h1 className="anim-fade-in anim-delay-1 text-4xl font-bold tracking-tight text-pretty sm:text-5xl xl:text-6xl">
        {t.ui.greeting} <span className="gradient-name">Sebastián</span>
      </h1>
      <p className="mt-2 text-sm font-medium text-pretty text-yellow-600 xl:text-base dark:text-yellow-400">{profile.role}</p>
      {profile.credentials?.length ? (
        <ul className="mt-3 flex flex-col gap-2">
          {profile.credentials.map((item) => (
            <li key={item.label}>
              <CredentialLink
                href={item.href}
                label={item.label}
                logo={item.logo}
                logoAlt={item.logoAlt}
                round={item.round}
              />
            </li>
          ))}
        </ul>
      ) : null}

      <p className="anim-fade-in anim-delay-2 mt-5 max-w-3xl text-pretty text-lg text-gray-600 xl:text-xl dark:text-gray-300">
        {profile.headline}
      </p>
      <p className="mt-3 max-w-3xl text-pretty text-base text-gray-600 xl:text-lg dark:text-gray-400">{profile.summary}</p>
      <p className="mt-3 text-sm text-gray-500">{profile.location}</p>

      <nav className="anim-fade-in anim-delay-3 mt-6 flex flex-wrap gap-3">
        <SocialPill href={profile.calcomania}>{t.ui.openCalcomania}</SocialPill>
        <SocialPill href={profile.musicmania}>{t.ui.playMusicmania}</SocialPill>
        <SocialPill href={`mailto:${profile.email}`}>
          <MailIcon /> {t.ui.contactMe}
        </SocialPill>
        <SocialPill href={profile.github}>
          <GithubIcon /> GitHub
        </SocialPill>
        <SocialPill href={profile.cv}>
          <FileIcon /> CV
        </SocialPill>
      </nav>
    </section>
  );
}
