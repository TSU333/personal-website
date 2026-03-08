"use client";

import { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { useLanguage } from "@/components/Providers";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { dictionary } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={dictionary.misc.themeToggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/75 bg-card/70 text-foreground/80 backdrop-blur transition hover:-translate-y-0.5 hover:border-foreground/10 hover:bg-card"
    >
      {isDark ? <SunMedium size={16} /> : <Moon size={16} />}
    </button>
  );
}
