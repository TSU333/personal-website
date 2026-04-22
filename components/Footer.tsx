"use client";

import Link from "next/link";

import { useLanguage } from "@/components/Providers";

export function Footer() {
  const { dictionary } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-shell section-space pb-10">
      <div className="section-rule flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="type-ui text-[13px] font-semibold tracking-[0.1em] text-foreground">
            TSU
          </p>
          <p className="max-w-md">{dictionary.footer.line}</p>
        </div>

        <div className="flex flex-col gap-1 sm:items-end">
          <p>
            © {year} TSU. {dictionary.footer.rights}
          </p>
          <Link
            href="/#contact"
            className="type-ui text-[13px] font-medium transition hover:text-foreground"
          >
            {dictionary.footer.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
