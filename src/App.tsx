import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TogetherSection } from "./components/TogetherSection";
import { ThreeDaysSection } from "./components/ThreeDaysSection";
import { RestingPlaceSection } from "./components/RestingPlaceSection";
import { StoriesSection } from "./components/StoriesSection";
import { ContinuumCareSection } from "./components/ContinuumCareSection";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { CTAPopup } from "./components/CTAPopup";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <TogetherSection />
        <ThreeDaysSection />
        <RestingPlaceSection />
        <StoriesSection />
        <ContinuumCareSection />
        <Testimonials />
        <Contact />
        <Footer />
        <FloatingButtons />
        <CTAPopup />
      </div>
    </LanguageProvider>
  );
}