import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#proyectos", id: "proyectos", label: "Proyectos" },
  { href: "#experiencia", id: "experiencia", label: "Experiencia" },
  { href: "#habilidades", id: "habilidades", label: "Skills" },
  { href: "#formacion", id: "formacion", label: "Formación" },
  { href: "#sobre-mi", id: "sobre-mi", label: "Sobre mí" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 mx-auto flex w-full justify-center pt-3">
      <nav
        className={`flex max-w-[calc(100%-1rem)] items-center gap-1 overflow-x-auto rounded-full px-2 py-1 text-sm transition-all duration-300 ${
          scrolled
            ? "border border-black/10 bg-white/70 shadow-lg ring-1 ring-black/5 backdrop-blur-md dark:border-white/10 dark:bg-black/40 dark:ring-white/10"
            : "bg-transparent"
        }`}
      >
        {links.map((link) => {
          const isActive = active === link.id;
          return (
            <a
              key={link.id}
              href={link.href}
              aria-label={link.label}
              className={`rounded-full px-2 py-1.5 text-xs transition sm:px-3 sm:text-sm ${
                isActive
                  ? "bg-yellow-400/10 font-semibold text-yellow-600 dark:text-yellow-400"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              }`}
            >
              {link.label}
            </a>
          );
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
}
