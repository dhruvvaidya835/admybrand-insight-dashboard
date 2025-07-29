// components/ui/theme-switch.tsx
import * as React from "react";

interface ThemeSwitchProps {
  checked: boolean;
  onChange: () => void;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ checked, onChange }) => {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: checked ? "black" : "gray",
        color: "white",
        border: "none",
        borderRadius: "1rem",
      }}
    >
      {checked ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};
