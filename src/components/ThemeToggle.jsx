'use client'
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita errori di idratazione
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded border border-border"
    >
      {theme === "dark" ? (
        <div className="flex gap-2 items-center">
          <Sun size={14} />
          light
        </div>
        // "◐ light"
      ) : (
        <div className="flex gap-2 items-center">
          <Moon size={14} />
          dark
        </div>
        // "◑ dark"
      )}
    </button>
  );
};