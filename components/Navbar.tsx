"use client";

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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-full border border-border/70 bg-card/72 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-5">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-foreground/5"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/85" />
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold tracking-[0.22em] text-foreground">
                TSU
              </span>
              <span className="hidden text-xs uppercase tracking-[0.22em] text-muted sm:inline-block">
                {dictionary.nav.label}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  link.active
                    ? "bg-foreground text-background"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/75 bg-card/70 text-foreground/80 backdrop-blur transition hover:bg-card md:hidden"
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
              className="mt-3 overflow-hidden rounded-[28px] border border-border/70 bg-card/86 p-4 shadow-panel backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-2xl px-4 py-3 text-sm transition ${
                      link.active
                        ? "bg-foreground text-background"
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
