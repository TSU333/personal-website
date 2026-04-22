import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TSU",
    template: "%s | TSU",
  },
  description:
    "TSU builds clean and practical software, browser extensions, and systems, including ThinkBreak and OpenClaw Emergency Ops.",
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
            <main className="pb-12 pt-24 sm:pt-28">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
