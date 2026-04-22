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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="nav-shell">
        <div className="site-shell flex items-center justify-between py-4 sm:py-5">
          <Link
            href="/"
            className="flex items-center gap-3 transition hover:opacity-70"
          >
            <Image
              src="/tsu-mark.svg"
              alt="TSU"
              width={26}
              height={26}
              className="rounded-[8px]"
            />
            <span className="type-ui text-[15px] font-semibold tracking-[0.08em] text-foreground">
              TSU
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`type-ui border-b pb-1 text-[14px] font-medium transition ${
                  link.active
                    ? "border-foreground/60 text-foreground"
                    : "border-transparent text-muted hover:border-border hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? dictionary.misc.close : dictionary.misc.menu}
            className="type-ui inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-foreground/80 transition hover:border-foreground/20 hover:bg-foreground/5 md:hidden"
          >
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <div className="site-shell">
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 border border-border/70 bg-background/96 p-5 md:hidden"
              style={{ borderRadius: "var(--radius-m)" }}
            >
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`type-ui border-b pb-3 text-[14px] font-medium transition ${
                      link.active
                        ? "border-foreground/40 text-foreground"
                        : "border-border/60 text-foreground/82 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-4">
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
