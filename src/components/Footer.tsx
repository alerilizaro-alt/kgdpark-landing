import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/507424950d9e76651071a66d43dce367322fedb9.png";

export function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      description: "Multi-functional warehouse and logistics complex",
      rights: "All rights reserved"
    },
    ru: {
      description: "Мультифункциональный складской и логистический комплекс",
      rights: "Все права защищены"
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="p-3 md:p-4">
            <ImageWithFallback 
              src={logoImage} 
              alt="KGDPARK Logo" 
              className="h-20 md:h-24 lg:h-28 w-auto"
            />
          </div>
          <div className="text-center text-slate-600">
            <p className="mb-2">{content[language].description}</p>
            <p className="text-sm">© {new Date().getFullYear()} KGDPARK. {content[language].rights}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}