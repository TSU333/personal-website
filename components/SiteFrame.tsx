"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const standaloneRoutes = ["/web-design/maison-tsu"];

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStandalone = standaloneRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (isStandalone) {
    return <main>{children}</main>;
  }

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-[61px] sm:pt-[65px]">{children}</main>
      <Footer />
    </div>
  );
}
