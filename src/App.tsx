import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TogetherSection } from "./components/TogetherSection";
import { ThreeDaysSection } from "./components/ThreeDaysSection";
import { RestingPlaceSection } from "./components/RestingPlaceSection";
import { StoriesSection } from "./components/StoriesSection";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
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
        <Testimonials />
        <CTASection />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
}