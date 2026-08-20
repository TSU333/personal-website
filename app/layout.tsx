import type { Metadata } from "next";

import { Providers } from "@/components/Providers";
import { SiteFrame } from "@/components/SiteFrame";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TSU",
    template: "%s | TSU",
  },
  description:
    "TSU is an independent developer building browser extensions, AI tools, and games. Creator of ThinkBreak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Providers>
          <SiteFrame>{children}</SiteFrame>
        </Providers>
      </body>
    </html>
  );
}
