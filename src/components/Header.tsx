import logoImage from "figma:asset/d3cfa079d191c41bd7595a7a96ba4f04c700f1b6.png";
import { useLanguage } from "../contexts/LanguageContext";

export function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex justify-center md:justify-start">
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
          </div>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-sm">
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
            <span className="text-gray-300">|</span>
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
          </div>
        </div>
      </div>
    </header>
  );
}
