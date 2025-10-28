import { Card } from "./ui/card";
import locationMapImage from "figma:asset/eee5a69c8046c05ea6d15f57e11e0d3c677377d2.png";
import { MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function LocationSection() {
  const { language } = useLanguage();

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
          <div className="relative rounded-lg overflow-hidden shadow-xl">
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
    </section>
  );
}
