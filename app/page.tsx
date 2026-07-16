import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { GameSection } from "@/components/GameSection";
import { Hero } from "@/components/Hero";
import { ThinkBreakShowcase } from "@/components/ThinkBreakShowcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ThinkBreakShowcase />
      <GameSection />
      <ContactSection />
    </>
  );
}
