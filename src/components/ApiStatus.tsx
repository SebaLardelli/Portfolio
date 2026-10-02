import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

type Status = "checking" | "online" | "offline";

export function ApiStatus() {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_URL}/health`, { signal: controller.signal })
      .then((response) => setStatus(response.ok ? "online" : "offline"))
      .catch(() => setStatus("offline"));

    return () => controller.abort();
  }, []);

  const label =
    status === "online" ? "API en línea" : status === "offline" ? "API apagada" : "Chequeando API…";

  const color =
    status === "online"
      ? "text-emerald-600 dark:text-emerald-400"
      : status === "offline"
        ? "text-rose-600 dark:text-rose-400"
        : "text-gray-500";

  return <span className={`text-xs font-medium ${color}`}>{label}</span>;
}
