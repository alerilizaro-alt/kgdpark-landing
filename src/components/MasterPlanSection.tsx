import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import masterPlanImage from "figma:asset/3d438a96f217a48d7bf7b3db4a61622c47831dec.png";
import masterPlanCover from "figma:asset/b90a528fea60cdd1220c05c8bbe2c78391f6b031.png";
import infrastructureImage1 from "figma:asset/3d0091948e70ce2e69cf82e09532ab9d54a4841f.png";
import gasStationImage from "figma:asset/453e04e00683b4789e0ec55dd4a7712071e1c414.png";
import infrastructureImage2 from "figma:asset/ffd41ccbe6185dd9c20f3b6d44d60958fe71618a.png";
import secondLineWarehouse from "figma:asset/cb628d883aa5fad7cf7ade5573eba752a2defb37.png";
import hotelOfficePlot from "figma:asset/2f13c08b9c12987c722aa05d25768274aee3f945.png";
import { Download, Building2, Warehouse, Store, Briefcase, ParkingCircle, Car } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { MasterPlanModal } from "./MasterPlanModal";
import { ImageZoomModal } from "./ImageZoomModal";

export function MasterPlanSection() {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageZoomOpen, setIsImageZoomOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState("");

  const content = {
    en: {
      title: "Master Plan and Building Areas",
      subtitle: "Comprehensive development parameters and facility breakdown",
      downloadBtn: "Get the Presentation",
      coverImageCaption: "On the first line, a DIY hypermarket with an area of 20,500 m² and parking for 2,000 cars is planned.",
      infrastructureImageCaption: "The transport layout is designed for a capacity of up to 5,500 vehicles per day, ensuring efficient and safe operation of the internal road network.",
      gasStationCaption: "At the site entrance, the construction of a gas station and an office building is planned.",
      warehouseCaption: "In the upper part of the site, the construction of two warehouses with areas of 55,000 m² and 44,000 m² is planned.",
      secondLineWarehouseCaption: "On the second line of the site, the construction of four warehouse facilities is planned. The master plan includes two warehouses with an area of 17,380 m² each, one warehouse with an area of 13,880 m², and one warehouse with an area of 5,088 m². The layout of the buildings is designed to ensure efficient logistics, transport accessibility, and optimal use of the site.",
      hotelOfficePlotCaption: "On the second line of the site, a land plot with a total area of 14,439 m² is located. Its configuration has been considered in the master plan and is well suited for the development of a hotel, office facilities, or a dormitory.",
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
      downloadBtn: "Получить презентацию",
      coverImageCaption: "На первой линии предусмотрено расположение строительного гипермаркета площадью 20 500 м² и парковкой на 2000 автомобилей.",
      infrastructureImageCaption: "Транспортная схема рассчитана на нагрузку до 5 500 транспортных средств в день и обеспечивает эффективное и безопасное функционирование внутренней дорожной сети.",
      gasStationCaption: "При заезде на участок предусмотрено строительство АЗС и офисного здания.",
      warehouseCaption: "В верхней части участка предусмотрено строительство двух складов площадью 55 000 м² и 44 000 м².",
      secondLineWarehouseCaption: "На второй линии участка предусмотрено строительство четырёх складских объектов. Проектом запланированы два склада площадью 17 380 м² каждый, один склад площадью 13 880 м², а также один склад площадью 5 088 м². Размещение зданий выполнено с учётом эффективной логистики, транспортной доступности и оптимального использования территории.",
      hotelOfficePlotCaption: "На второй линии участка расположен земельный участок площадью 14 439 м², конфигурация которого учтена при формировании мастер-плана и оптимально подходит для размещения гостиницы, офисных помещений или общежития.",
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenImageZoom = (image: string) => {
    setZoomedImage(image);
    setIsImageZoomOpen(true);
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
        
        {/* Master Plan Cover Image */}
        <div className="mb-16">
          <img 
            src={masterPlanCover}
            alt="Master Plan Cover"
            className="w-full h-auto rounded-2xl shadow-lg"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
            onClick={() => handleOpenImageZoom(masterPlanCover)}
          />
          <p className="text-justify text-slate-600 mt-5 leading-relaxed">
            {content[language].coverImageCaption}
          </p>
        </div>
        
        {/* Master Plan – Additional Visuals */}
        <div className="mb-16 space-y-12">
          <div>
            <img 
              src={infrastructureImage1}
              alt="KGDPARK Warehouse Complex Aerial View"
              className="w-full h-auto rounded-2xl shadow-lg"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              onClick={() => handleOpenImageZoom(infrastructureImage1)}
            />
            <p className="text-justify text-slate-600 mt-5 leading-relaxed">
              {content[language].infrastructureImageCaption}
            </p>
          </div>
          
          <div>
            <img 
              src={gasStationImage}
              alt="Gas Station and Office Building"
              className="w-full h-auto rounded-2xl shadow-lg"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              onClick={() => handleOpenImageZoom(gasStationImage)}
            />
            <p className="text-justify text-slate-600 mt-5 leading-relaxed">
              {content[language].gasStationCaption}
            </p>
          </div>
          
          <div>
            <img 
              src={infrastructureImage2}
              alt="KGDPARK Infrastructure Modernization"
              className="w-full h-auto rounded-2xl shadow-lg"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              onClick={() => handleOpenImageZoom(infrastructureImage2)}
            />
            <p className="text-justify text-slate-600 mt-5 leading-relaxed">
              {content[language].warehouseCaption}
            </p>
          </div>
          
          <div>
            <img 
              src={secondLineWarehouse}
              alt="KGDPARK Second Line Warehouse"
              className="w-full h-auto rounded-2xl shadow-lg"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              onClick={() => handleOpenImageZoom(secondLineWarehouse)}
            />
            <p className="text-justify text-slate-600 mt-5 leading-relaxed">
              {content[language].secondLineWarehouseCaption}
            </p>
          </div>
          
          <div>
            <img 
              src={hotelOfficePlot}
              alt="KGDPARK Hotel and Office Plot"
              className="w-full h-auto rounded-2xl shadow-lg"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              onClick={() => handleOpenImageZoom(hotelOfficePlot)}
            />
            <p className="text-justify text-slate-600 mt-5 leading-relaxed">
              {content[language].hotelOfficePlotCaption}
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div 
            className="relative rounded-lg overflow-hidden shadow-xl cursor-zoom-in hover:shadow-2xl transition-shadow"
            onClick={() => handleOpenImageZoom(masterPlanImage)}
          >
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
            onClick={handleOpenModal}
            size="lg"
            className="gap-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="w-5 h-5" />
            {content[language].downloadBtn}
          </Button>
        </div>
      </div>

      {/* Modal */}
      <MasterPlanModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <ImageZoomModal 
        isOpen={isImageZoomOpen}
        onClose={() => setIsImageZoomOpen(false)}
        imageSrc={zoomedImage}
        imageAlt="Master Plan Zoomed"
      />
    </section>
  );
}