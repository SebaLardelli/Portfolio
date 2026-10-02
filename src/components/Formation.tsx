import { formation } from "../data/profile";
import { AcademicIcon } from "./icons";
import { Section } from "./Section";

export function Formation() {
  return (
    <Section id="formacion" title="Formación" icon={<AcademicIcon />}>
      <ol className="space-y-8">
        {formation.map((item) => (
          <li key={item.title}>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.current ? (
                <span className="rounded-full bg-yellow-400/15 px-2 py-0.5 text-xs font-medium text-yellow-700 dark:text-yellow-400">
                  En curso
                </span>
              ) : null}
            </div>
            <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">{item.place}</p>
            <p className="text-sm text-gray-500">{item.period}</p>
            {item.detail ? (
              <p className="mt-2 text-pretty text-gray-600 dark:text-gray-300">{item.detail}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
