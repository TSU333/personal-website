"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/components/Providers";

export function Navbar() {
  const pathname = usePathname();
  const { dictionary } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: dictionary.nav.home, active: pathname === "/" },
    {
      href: "/projects",
      label: dictionary.nav.projects,
      active: pathname.startsWith("/projects"),
    },
    { href: "/#contact", label: dictionary.nav.contact, active: false },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <div className="site-shell">
        <div className="surface-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-foreground/5"
          >
            <Image
              src="/tsu-mark.svg"
              alt="TSU"
              width={28}
              height={28}
              className="rounded-[9px]"
            />
            <span className="text-[15px] font-semibold tracking-[-0.035em] text-foreground">
              TSU
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-[15px] font-medium transition ${
                  link.active
                    ? "bg-foreground/8 text-foreground"
                    : "text-muted hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? dictionary.misc.close : dictionary.misc.menu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/75 bg-card/74 text-foreground/80 backdrop-blur transition hover:bg-card md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="subtle-panel mt-3 overflow-hidden p-4 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-2xl px-4 py-3 text-[15px] font-medium transition ${
                      link.active
                        ? "bg-foreground/8 text-foreground"
                        : "text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
