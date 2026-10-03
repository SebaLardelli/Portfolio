import { useI18n } from "../i18n/LanguageContext";
import { FileIcon, GithubIcon, MailIcon } from "./icons";
import { AvailabilityBadge, CredentialLink, SocialPill } from "./Pills";

export function Hero() {
  const { t } = useI18n();
  const { profile } = t;

  const credentials = profile.credentials?.length ? (
    <ul className="flex flex-col gap-2">
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
  ) : null;

  return (
    <section id="inicio" className="page-width mx-auto scroll-mt-28 px-5 pb-10 pt-28 xl:pb-16 xl:pt-32">
      <div className="flex flex-col xl:flex-row xl:items-start xl:gap-14">
        <div className="anim-fade-in mb-5 flex items-center gap-4 xl:mb-0 xl:w-60 xl:shrink-0 xl:flex-col xl:items-start xl:gap-5">
          <img
            src={profile.image}
            alt={t.ui.photoAlt}
            width={112}
            height={112}
            className="size-16 rounded-full bg-black object-cover shadow-lg ring-2 ring-yellow-400/80 xl:size-28"
          />
          <div className="flex flex-col gap-3">
            {profile.available ? <AvailabilityBadge /> : null}
            <div className="hidden xl:block">{credentials}</div>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="anim-fade-in anim-delay-1 text-4xl font-bold tracking-tight text-pretty sm:text-5xl xl:text-6xl">
            {t.ui.greeting} <span className="gradient-name">Sebastián</span>
          </h1>
          <p className="mt-2 text-sm font-medium text-pretty text-yellow-600 xl:text-base dark:text-yellow-400">
            {profile.role}
          </p>
          <div className="mt-3 xl:hidden">{credentials}</div>

          <p className="anim-fade-in anim-delay-2 mt-5 max-w-3xl text-pretty text-lg text-gray-600 xl:text-xl dark:text-gray-300">
            {profile.headline}
          </p>
          <p className="mt-3 max-w-3xl text-pretty text-base leading-relaxed text-gray-600 xl:text-lg dark:text-gray-400">
            {profile.summary}
          </p>
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
        </div>
      </div>
    </section>
  );
}
