import heroImage from "figma:asset/ed8965646c1027a31d1e958df59efcb7ca3b69bc.png";
import { useLanguage } from "../contexts/LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Investment Project in Kaliningrad 2025",
      buttons: [
        { id: "location", label: "Location" },
        { id: "infrastructure", label: "Infrastructure" },
        { id: "masterplan", label: "Master Plan" },
        { id: "contact", label: "Contacts" }
      ],
      paragraph1: "We proudly present the 'KGDPARK' project — a 50-hectare land plot located in the southern part of Kaliningrad, just 2.5 km from the city border.",
      paragraph2: "The site is fully prepared and equipped with modern infrastructure, designed for the construction of industrial and warehouse facilities."
    },
    ru: {
      title: "Инвестиционный проект в Калининграде 2025",
      buttons: [
        { id: "location", label: "Расположение" },
        { id: "infrastructure", label: "Инфраструктура" },
        { id: "masterplan", label: "Мастер-план" },
        { id: "contact", label: "Контакты" }
      ],
      paragraph1: "Представляем проект 'KGDPARK' — земельный участок площадью 50 гектаров, расположенный в южной части Калининграда, всего в 2,5 км от границы города.",
      paragraph2: "Участок полностью подготовлен и оснащен современной инфраструктурой, предназначен для строительства промышленных и складских объектов."
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 lg:px-20 py-20">
        {/* Title at top center */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-wide uppercase">
            {content[language].title}
          </h1>
        </div>

        {/* Navigation buttons - responsive, wraps on mobile */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-3xl mx-auto">
          {content[language].buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => scrollToSection(button.id)}
              className="px-6 py-3 rounded-lg bg-[#E6E6E6] text-[#444] hover:bg-blue-500 hover:text-white transition-all duration-200"
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Two-column content layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left column - Text */}
          <div className="space-y-4">
            <div className="space-y-4 text-[#444]">
              <p className="text-lg leading-relaxed">
                {content[language].paragraph1}
              </p>
              <p className="text-lg leading-relaxed">
                {content[language].paragraph2}
              </p>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="KGDPARK 3D Visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
