import { profile } from "../data/profile";
import { FileIcon, GithubIcon, MailIcon } from "./icons";
import { AvailabilityBadge, CredentialLink, SocialPill } from "./Pills";

export function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-[740px] px-5 pb-10 pt-28">
      <div className="anim-fade-in mb-5 flex items-center gap-4">
        <img
          src={profile.image}
          alt={`${profile.name}, desarrollador backend y full stack`}
          className="size-16 rounded-full bg-black object-cover shadow-lg ring-2 ring-yellow-400/80"
        />
        <div className="flex flex-col gap-1">
          {profile.available ? <AvailabilityBadge /> : null}
        </div>
      </div>

      <h1 className="anim-fade-in anim-delay-1 text-4xl font-bold tracking-tight text-pretty sm:text-5xl">
        Hey, soy <span className="gradient-name">{profile.shortName}</span>
      </h1>
      <p className="mt-2 text-sm font-medium text-pretty text-yellow-600 dark:text-yellow-400">{profile.role}</p>
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

      <p className="anim-fade-in anim-delay-2 mt-5 max-w-xl text-pretty text-lg text-gray-600 dark:text-gray-300">
        {profile.headline}
      </p>
      <p className="mt-3 max-w-xl text-pretty text-base text-gray-600 dark:text-gray-400">{profile.summary}</p>
      <p className="mt-3 text-sm text-gray-500">{profile.location}</p>

      <nav className="anim-fade-in anim-delay-3 mt-6 flex flex-wrap gap-3">
        <SocialPill href={profile.calcomania}>Abrir CalcoMania</SocialPill>
        <SocialPill href={profile.musicmania}>Jugar MusicMania</SocialPill>
        <SocialPill href={`mailto:${profile.email}`}>
          <MailIcon /> Contáctame
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
