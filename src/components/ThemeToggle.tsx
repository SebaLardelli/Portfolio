import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

export function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    applyTheme(dark);
  }, [dark]);

  return (
    <button
      type="button"
      className="rounded-full p-2 text-gray-600 transition hover:scale-110 dark:text-gray-300"
      aria-label={dark ? "Activar tema claro" : "Activar tema oscuro"}
      onClick={() => setDark((value) => !value)}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
