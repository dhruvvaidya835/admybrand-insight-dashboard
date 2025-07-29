// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 border rounded-lg"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
