import logoImage from "figma:asset/d3cfa079d191c41bd7595a7a96ba4f04c700f1b6.png";
import { useLanguage } from "../contexts/LanguageContext";

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
            <img 
              src={logoImage} 
              alt="KGDPARK Logo" 
              className="h-24 md:h-32 lg:h-36 w-auto"
              style={{ 
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08))',
                border: '1px solid #DDDDDD',
                borderRadius: '4px',
                padding: '8px'
              }}
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
