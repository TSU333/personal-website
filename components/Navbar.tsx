"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { LanguageToggle } from "@/components/LanguageToggle";
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
      href: "/projects/thinkbreak",
      label: dictionary.nav.projects,
      active: pathname.startsWith("/projects"),
    },
    {
      href: "/web-design/maison-tsu",
      label: dictionary.nav.webDesign,
      active: pathname.startsWith("/web-design"),
    },
    { href: "/#contact", label: dictionary.nav.contact, active: false },
  ];

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div className="nav-shell">
        <div className="site-shell grid h-[61px] grid-cols-[1fr_auto] items-center sm:h-[65px] md:grid-cols-3">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 transition hover:opacity-70"
          >
            <Image
              src="/tsu-mark.svg"
              alt="TSU"
              width={27}
              height={27}
              loading="eager"
            />
            <span className="type-ui text-[15px] font-medium tracking-[-0.015em] text-[#d7d2c6]">
              TSU
            </span>
            <span className="type-ui hidden text-[11px] text-[#d7d2c6]/42 lg:inline">
              Independent Developer
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`type-ui nav-link ${link.active ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end md:flex">
            <LanguageToggle />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? dictionary.misc.close : dictionary.misc.menu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="nav-control type-ui inline-flex h-9 w-9 items-center justify-center border border-[#d7d2c6]/24 md:hidden"
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
              className="fixed inset-x-0 bottom-0 z-40 bg-[#030812] md:hidden"
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
              <div className="site-shell flex min-h-full flex-col bg-[#030812] pb-8 pt-5 text-[#d7d2c6]">
                <nav className="border-y border-[#d7d2c6]/18">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={`display-type flex items-center justify-between border-b border-[#d7d2c6]/18 py-5 text-[2rem] leading-none tracking-[-0.035em] transition last:border-b-0 ${
                        link.active
                          ? "text-[#f2ff9e]"
                          : "text-[#d7d2c6] hover:text-[#f2ff9e]"
                      }`}
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 border-t border-[#d7d2c6]/18 pt-5">
                  <LanguageToggle />
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
