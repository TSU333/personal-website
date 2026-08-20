import { ContactSection } from "@/components/ContactSection";
import { GameSection } from "@/components/GameSection";
import { Hero } from "@/components/Hero";
import { ThinkBreakShowcase } from "@/components/ThinkBreakShowcase";
import { WebDesignSection } from "@/components/WebDesignSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThinkBreakShowcase />
      <WebDesignSection />
      <GameSection />
      <ContactSection />
    </>
  );
}
