import HeroSection from "./landing/HeroSection";
import StorySections from "./landing/StorySections";
import CtaSections from "./landing/CtaSections";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-golos overflow-x-hidden noise-overlay">
      <HeroSection />
      <div className="content-width relative z-10">
        <StorySections />
        <CtaSections />
      </div>
    </div>
  );
}
