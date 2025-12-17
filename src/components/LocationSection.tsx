import { Card } from "./ui/card";
import locationMapImage from "figma:asset/eee5a69c8046c05ea6d15f57e11e0d3c677377d2.png";
import { MapPin, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

export function LocationSection() {
  const { language } = useLanguage();
  const [isZoomed, setIsZoomed] = useState(false);

  // Handle Escape key to close overlay
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZoomed) {
        setIsZoomed(false);
      }
    };

    if (isZoomed) {
      document.addEventListener('keydown', handleEscape);
      // Prevent scrolling when overlay is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isZoomed]);

  const content = {
    en: {
      title: "Strategic Location",
      subtitle: "Excellent transport accessibility and proximity to key facilities.",
      distances: [
        { label: "City border", distance: "2.5 km" },
        { label: "Polish border (Mamonovo-II / Grzechotki crossing)", distance: "38 km" },
        { label: "Port", distance: "9.5 km" },
        { label: "Railway terminal (Dzerzhinskaya-Novaya)", distance: "7.8 km" },
        { label: "Airport", distance: "39 km" },
      ]
    },
    ru: {
      title: "Стратегическое расположение",
      subtitle: "Отличная транспортная доступность и близость к ключевым объектам.",
      distances: [
        { label: "Граница города", distance: "2,5 км" },
        { label: "Граница с Польшей (КПП Мамоново-II / Гжехотки)", distance: "38 км" },
        { label: "Порт", distance: "9,5 км" },
        { label: "Железнодорожный терминал (Дзержинская-Новая)", distance: "7,8 км" },
        { label: "Аэропорт", distance: "39 км" },
      ]
    }
  };

  return (
    <section id="location" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">{content[language].title}</h2>
          <p className="text-slate-600">
            {content[language].subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className="relative rounded-lg overflow-hidden shadow-xl cursor-zoom-in hover:shadow-2xl transition-shadow duration-300"
            onClick={() => setIsZoomed(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsZoomed(true);
              }
            }}
          >
            <img
              src={locationMapImage}
              alt="Location Map"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          
          <div className="space-y-4">
            {content[language].distances.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900">{item.label}</p>
                    <p className="text-blue-600 mt-1">{item.distance}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Zoomed Image Overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            cursor: 'zoom-out'
          }}
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className="relative max-w-6xl w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={locationMapImage}
              alt="Location Map - Enlarged"
              className="w-full h-auto rounded-2xl shadow-2xl"
              style={{
                maxHeight: '90vh',
                objectFit: 'contain',
                cursor: 'zoom-out'
              }}
              onClick={() => setIsZoomed(false)}
            />
            <button
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsZoomed(false)}
              aria-label="Close"
            >
              <X className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}