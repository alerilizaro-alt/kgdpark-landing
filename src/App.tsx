import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LocationSection } from "./components/LocationSection";
import { InfrastructureSection } from "./components/InfrastructureSection";
import { MasterPlanSection } from "./components/MasterPlanSection";
import { ContactSection } from "./components/ContactSection";
import { Toaster } from "./components/ui/sonner";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 md:pt-40 lg:pt-44">
          <HeroSection />
          <LocationSection />
          <InfrastructureSection />
          <MasterPlanSection />
          <ContactSection />
        </div>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}
