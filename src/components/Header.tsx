import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { CloseIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#proyectos", id: "proyectos", label: "Proyectos" },
  { href: "#experiencia", id: "experiencia", label: "Experiencia" },
  { href: "#habilidades", id: "habilidades", label: "Skills" },
  { href: "#formacion", id: "formacion", label: "Formación" },
  { href: "#sobre-mi", id: "sobre-mi", label: "Sobre mí" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
];

function linkClass(isActive: boolean, stacked = false) {
  return `rounded-full transition ${
    stacked ? "block px-4 py-3 text-base" : "px-3 py-2 text-sm xl:text-base"
  } ${
    isActive
      ? "bg-yellow-400/10 font-semibold text-yellow-600 dark:text-yellow-400"
      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
  }`;
}

export function Header() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const glass =
    "border border-black/10 bg-white/80 shadow-lg ring-1 ring-black/5 backdrop-blur-md dark:border-white/10 dark:bg-black/55 dark:ring-white/10";

  return (
    <header className="fixed top-0 z-50 w-full px-5 pt-3">
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] lg:hidden"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div className="page-width relative z-50 mx-auto">
        <nav className={`flex items-center rounded-full px-2 py-1.5 ${glass}`}>
          <a
            href="#inicio"
            className="min-w-0 truncate rounded-full px-2.5 py-2 text-[13px] font-semibold text-gray-800 sm:px-3 sm:text-sm lg:overflow-visible lg:whitespace-nowrap dark:text-white"
            onClick={() => setOpen(false)}
          >
            {profile.name}
          </a>

          <div className="hidden min-w-0 flex-1 items-center justify-evenly lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-label={link.label}
                className={linkClass(active === link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-0.5">
            <button
              type="button"
              className="rounded-full p-2 text-gray-700 lg:hidden dark:text-gray-200"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
            <ThemeToggle />
          </div>
        </nav>

        {open ? (
          <div
            id="mobile-nav"
            className={`mt-2 rounded-3xl p-2 lg:hidden ${glass}`}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-label={link.label}
                className={linkClass(active === link.id, true)}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
