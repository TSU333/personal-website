"use client";

import Link from "next/link";

import { useLanguage } from "@/components/Providers";

export function Footer() {
  const { dictionary } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 pb-8 pt-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
      <div className="space-y-1">
        <p className="font-semibold uppercase tracking-[0.22em] text-foreground">
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
    </footer>
  );
}
