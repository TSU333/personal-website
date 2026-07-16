import { ContactSection } from "@/components/ContactSection";
import { GameSection } from "@/components/GameSection";
import { Hero } from "@/components/Hero";
import { ThinkBreakShowcase } from "@/components/ThinkBreakShowcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThinkBreakShowcase />
      <GameSection />
      <ContactSection />
    </>
  );
}
