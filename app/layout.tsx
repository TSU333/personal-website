import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TSU | Personal Portfolio",
    template: "%s | TSU",
  },
  description:
    "A premium bilingual portfolio for TSU, showcasing browser extensions, software tools, and creative digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="relative min-h-screen">
            <Navbar />
            <main className="pb-10 pt-28 sm:pt-32">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
