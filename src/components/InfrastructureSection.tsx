import { Card } from "./ui/card";
import { Truck, Droplet, Zap, Flame, Wrench, Battery } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import highwayAccessImage from "figma:asset/e2e40905dafae99ce353d58dd7d66e76ea067403.png";

export function InfrastructureSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Infrastructure and Engineering Readiness",
      subtitle: "Complete utility infrastructure to support logistics operations",
      highwayAccessText: "Direct right and left exits to the E28 highway (Moscow – Minsk – Kaliningrad – Gdańsk), as well as right and left entrances to the site.",
      infrastructure: [
        {
          icon: Truck,
          title: "Highway Access",
          description: "Direct right and left exits to the E28 highway (Moscow – Minsk – Kaliningrad – Gdańsk).",
        },
        {
          icon: Droplet,
          title: "Water Supply",
          description: "Two wells with a capacity of 100 m³/hour",
        },
        {
          icon: Zap,
          title: "Electrical Substation",
          description: "15 kV / 0.4 kV, 400 kW capacity",
        },
        {
          icon: Flame,
          title: "Gas Supply",
          description: "240 m³/hour distribution unit, expandable",
        },
        {
          icon: Wrench,
          title: "Wastewater Treatment",
          description: "Approved site for modular wastewater treatment facilities",
        },
        {
          icon: Battery,
          title: "Electrical Substation Project",
          description: "Total capacity of 4.0 MW",
        },
      ]
    },
    ru: {
      title: "Инфраструктура и инженерная готовность",
      subtitle: "Полная инфраструктура инженерных коммуникаций для поддержки логистических операций",
      highwayAccessText: "Прямой правый и левый выезды на автомагистраль E28 (Москва – Минск – Калининград – Гданьск), а также левый и правый заезд на участок.",
      infrastructure: [
        {
          icon: Truck,
          title: "Доступ к автомагистрали",
          description: "Прямой правый и левый выезды на автомагистраль E28 (Москва – Минск – Калининград – Гданьск).",
        },
        {
          icon: Droplet,
          title: "Водоснабжение",
          description: "Две скважины – производительностью 100 м³/час",
        },
        {
          icon: Zap,
          title: "Электроподстанция",
          description: "15 кВ / 0,4 кВ, мощность 400 кВт",
        },
        {
          icon: Flame,
          title: "Газоснабжение",
          description: "Распределительный узел 240 м³/час, расширяемый",
        },
        {
          icon: Wrench,
          title: "Очистка сточных вод",
          description: "Утвержденная площадка для модульных очистных сооружений",
        },
        {
          icon: Battery,
          title: "Проект электроподстанции",
          description: "Общей мощностью 5,0 МВт",
        },
      ]
    }
  };

  return (
    <section id="infrastructure" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">{content[language].title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content[language].infrastructure.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-gray-200">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Highway Access Image Block */}
        <div className="mt-16">
          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
            <img
              src={highwayAccessImage}
              alt="Highway E28 Access"
              className="w-full h-auto object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
          <p className="text-slate-600 text-center max-w-3xl mx-auto" style={{ fontSize: '17px' }}>
            {content[language].highwayAccessText}
          </p>
        </div>
      </div>
    </section>
  );
}