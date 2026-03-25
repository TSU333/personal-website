"use client";

import Link from "next/link";

import { useLanguage } from "@/components/Providers";

export function Footer() {
  const { dictionary } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-shell mt-24 border-t border-border/70 pb-10 pt-8 text-sm text-muted">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <p className="font-semibold tracking-[-0.035em] text-foreground">
          TSU
        </p>
        <p>{dictionary.footer.line}</p>
      </div>

      <div className="flex flex-col gap-1 sm:items-end">
        <p>
          © {year} TSU. {dictionary.footer.rights}
        </p>
        <Link href="/#contact" className="transition hover:text-foreground">
          {dictionary.footer.contact}
        </Link>
      </div>
      </div>
    </footer>
  );
}
