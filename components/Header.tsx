// components/Header.tsx
"use client";

import { useTheme } from "next-themes";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
      <ThemeSwitch checked={isDark} onChange={toggleTheme} />
    </header>
  );
}
