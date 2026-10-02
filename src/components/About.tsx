import { about, profile } from "../data/profile";
import { UserIcon } from "./icons";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí" icon={<UserIcon />}>
      <div className="grid items-start gap-8 sm:grid-cols-[1.2fr_auto]">
        <div className="space-y-4 text-pretty leading-relaxed text-gray-600 dark:text-gray-300">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <img
          src={profile.image}
          alt={`${profile.name}, desarrollador backend y full stack`}
          className="size-40 rounded-full bg-black object-cover shadow-lg ring-2 ring-yellow-400/80"
        />
      </div>
    </Section>
  );
}
