import { useI18n } from "../i18n/LanguageContext";
import type { Locale } from "../i18n/types";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-0.5 px-1.5 text-xs font-semibold tracking-wide">
      {(["es", "en"] as const).map((code: Locale, index) => (
        <span key={code} className="flex items-center gap-0.5">
          {index > 0 ? <span className="text-gray-400">/</span> : null}
          <button
            type="button"
            className={`rounded-full px-1.5 py-1 transition ${
              locale === code
                ? "text-yellow-600 dark:text-yellow-400"
                : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            }`}
            aria-pressed={locale === code}
            aria-label={code === "en" ? "English" : "Español"}
            onClick={() => setLocale(code)}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
