import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ThreeAxesSection } from "./components/ThreeAxesSection";
import { WhyLucidLifeSection } from "./components/WhyLucidLifeSection";
import { WhyDifferentSection } from "./components/WhyDifferentSection";
import { TogetherSection } from "./components/TogetherSection";
import { ThreeDaysSection } from "./components/ThreeDaysSection";
import { RestingPlaceSection } from "./components/RestingPlaceSection";
import { StoriesSection } from "./components/StoriesSection";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <ThreeAxesSection />
        <WhyLucidLifeSection />
        <WhyDifferentSection />
        <TogetherSection />
        <ThreeDaysSection />
        <RestingPlaceSection />
        <StoriesSection />
        <Testimonials />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}