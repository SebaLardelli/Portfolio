import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

export function Section({ id, title, icon, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-[740px] px-5 py-12" data-section>
      <h2 className="mb-8 flex items-center gap-2 text-2xl font-semibold">
        <span className="text-yellow-500">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
