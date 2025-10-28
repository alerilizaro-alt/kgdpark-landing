import { Card } from "./ui/card";
import { Button } from "./ui/button";
import masterPlanImage from "figma:asset/3d438a96f217a48d7bf7b3db4a61622c47831dec.png";
import { Download, Building2, Warehouse, Store, Briefcase, ParkingCircle, Car } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function MasterPlanSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Master Plan and Building Areas",
      subtitle: "Comprehensive development parameters and facility breakdown",
      downloadBtn: "Download Master Plan (PDF)",
      downloadAlert: "Master Plan PDF download will be available soon",
      parameters: [
        { icon: Building2, label: "Total land area", value: "504,155 m²" },
        { icon: Building2, label: "Total built-up area", value: "180,073 m²" },
        { icon: Warehouse, label: "Warehouses", value: "152,890 m²" },
        { icon: Store, label: "DIY hypermarket", value: "20,520 m²" },
        { icon: Briefcase, label: "Offices / Hotel", value: "6,663 m²" },
        { icon: ParkingCircle, label: "Truck parking", value: "252 spaces" },
        { icon: Car, label: "Car parking", value: "2,447 spaces" },
      ]
    },
    ru: {
      title: "Мастер-план и площади застройки",
      subtitle: "Комплексные параметры развития и распределение объектов",
      downloadBtn: "Скачать мастер-план (PDF)",
      downloadAlert: "Загрузка мастер-плана в формате PDF скоро будет доступна",
      parameters: [
        { icon: Building2, label: "Общая площадь земли", value: "504 155 м²" },
        { icon: Building2, label: "Общая площадь застройки", value: "180 073 м²" },
        { icon: Warehouse, label: "Складские помещения", value: "152 890 м²" },
        { icon: Store, label: "Гипермаркет DIY", value: "20 520 м²" },
        { icon: Briefcase, label: "Офисы / Гостиница", value: "6 663 м²" },
        { icon: ParkingCircle, label: "Парковка для грузовиков", value: "252 места" },
        { icon: Car, label: "Парковка для автомобилей", value: "2 447 мест" },
      ]
    }
  };

  const handleDownload = () => {
    // Placeholder function for PDF download
    alert(content[language].downloadAlert);
  };

  return (
    <section id="masterplan" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">{content[language].title}</h2>
          <p className="text-slate-600">
            {content[language].subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src={masterPlanImage}
              alt="Master Plan"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          
          <div className="space-y-4">
            {content[language].parameters.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-5 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600">{item.label}</p>
                    </div>
                    <div className="text-slate-900">{item.value}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleDownload}
            size="lg"
            variant="outline"
            className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            <Download className="w-5 h-5" />
            {content[language].downloadBtn}
          </Button>
        </div>
      </div>
    </section>
  );
}
