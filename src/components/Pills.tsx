import type { ReactNode } from "react";
import { useI18n } from "../i18n/LanguageContext";

type SocialPillProps = {
  href: string;
  children: ReactNode;
};

export function SocialPill({ href, children }: SocialPillProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-sm transition hover:scale-105 hover:bg-white focus-visible:scale-105 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {children}
    </a>
  );
}

type PulseTone = "green" | "amber";

const pulseTone: Record<PulseTone, { ping: string; dot: string }> = {
  green: { ping: "bg-emerald-400", dot: "bg-emerald-500" },
  amber: { ping: "bg-amber-400", dot: "bg-amber-500" },
};

export function PulseBadge({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: PulseTone;
}) {
  const color = pulseTone[tone];

  return (
    <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-sm text-pretty dark:border-white/10 dark:bg-white/5">
      <span className="relative flex size-2.5 shrink-0">
        <span className={`absolute inline-flex size-full animate-ping rounded-full opacity-70 ${color.ping}`} />
        <span className={`relative inline-flex size-2.5 rounded-full ${color.dot}`} />
      </span>
      {children}
    </span>
  );
}

export function AvailabilityBadge() {
  const { t } = useI18n();
  return <PulseBadge tone="green">{t.ui.available}</PulseBadge>;
}

export function CredentialLink({
  href,
  label,
  logo,
  logoLight,
  logoAlt,
  round,
  wide,
}: {
  href: string;
  label: string;
  logo: string;
  logoLight?: string;
  logoAlt: string;
  round?: boolean;
  wide?: boolean;
}) {
  const box = wide
    ? "h-8 w-auto max-w-[7.5rem] shrink-0 object-contain"
    : "size-10 shrink-0 object-contain";
  const shadow = `drop-shadow-[0_1px_2px_rgba(0,0,0,0.28)] dark:drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)] ${round ? "rounded-full" : ""}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2.5 text-sm text-gray-600 transition hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400"
    >
      {logoLight ? (
        <>
          <img src={logoLight} alt={logoAlt} className={`${box} ${shadow} dark:hidden`} />
          <img src={logo} alt="" className={`${box} ${shadow} hidden dark:block`} />
        </>
      ) : (
        <img src={logo} alt={logoAlt} className={`${box} ${shadow}`} />
      )}
      <span className="underline-offset-4 group-hover:underline">{label}</span>
    </a>
  );
}
