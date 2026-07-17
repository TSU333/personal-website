"use client";

import Link from "next/link";

import { useLanguage } from "@/components/Providers";

export function Footer() {
  const { dictionary } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer pb-8 pt-7">
      <div className="site-shell flex flex-col gap-6 text-[13px] text-[#d7d2c6]/46 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="type-ui text-[14px] font-medium text-[#d7d2c6]">
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
            className="type-ui text-[13px] transition hover:text-[#f2ff9e]"
          >
            {dictionary.footer.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
