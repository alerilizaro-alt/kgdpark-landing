import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LocationSection } from "./components/LocationSection";
import { InfrastructureSection } from "./components/InfrastructureSection";
import { MasterPlanSection } from "./components/MasterPlanSection";
import { ContactSection } from "./components/ContactSection";
import { BackToTop } from "./components/BackToTop";
import { Toaster } from "./components/ui/sonner";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  useEffect(() => {
    // Google Analytics tracking code
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-BX9QKGJ5NE';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BX9QKGJ5NE', {
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

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
        <BackToTop />
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}