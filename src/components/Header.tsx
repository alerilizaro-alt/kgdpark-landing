import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/507424950d9e76651071a66d43dce367322fedb9.png";

export function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="p-3 md:p-4">
              <ImageWithFallback 
                src={logoImage} 
                alt="KGDPARK Logo" 
                className="h-20 md:h-24 lg:h-28 w-auto"
              />
            </div>
          </div>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => setLanguage('ru')}
              className={`px-3 py-2 rounded transition-colors ${
                language === 'ru' 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              RU
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-2 rounded transition-colors ${
                language === 'en' 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}