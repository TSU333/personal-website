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
      className="nav-control type-ui inline-flex h-8 w-8 items-center justify-center border border-[#d7d2c6]/24"
    >
      {isDark ? <SunMedium size={14} /> : <Moon size={14} />}
    </button>
  );
}
