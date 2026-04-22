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
      className="type-ui inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-foreground/80 transition hover:border-foreground/20 hover:bg-foreground/5"
    >
      {isDark ? <SunMedium size={16} /> : <Moon size={16} />}
    </button>
  );
}
