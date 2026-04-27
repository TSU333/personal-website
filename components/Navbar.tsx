"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/components/Providers";

export function Navbar() {
  const pathname = usePathname();
  const { dictionary } = useLanguage();
  const headerRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateMenuTop = () => {
      setMenuTop(headerRef.current?.getBoundingClientRect().height ?? 0);
    };

    updateMenuTop();

    const observer = new ResizeObserver(updateMenuTop);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    window.addEventListener("resize", updateMenuTop);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateMenuTop);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

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
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div className="nav-shell">
        <div className="site-shell flex items-center justify-between py-4 sm:py-5">
          <Link
            href="/"
            onClick={closeMenu}
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
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="type-ui inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-foreground/80 transition hover:border-foreground/20 hover:bg-foreground/5 md:hidden"
          >
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
              className="fixed inset-x-0 bottom-0 z-40 bg-background md:hidden"
              style={{ top: menuTop ? `${menuTop}px` : undefined }}
            />
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto md:hidden"
              style={{ top: menuTop ? `${menuTop}px` : undefined }}
            >
              <div className="site-shell flex min-h-full flex-col bg-background pb-8 pt-6">
                <nav className="border-y border-border/70">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={`type-ui flex items-center justify-between border-b border-border/60 py-5 text-[15px] font-medium transition last:border-b-0 ${
                        link.active
                          ? "text-foreground"
                          : "text-foreground/82 hover:text-foreground"
                      }`}
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto flex items-center justify-between gap-5 border-t border-border/70 pt-5">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
