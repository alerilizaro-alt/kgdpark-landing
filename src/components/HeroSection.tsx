import heroImage from "figma:asset/ed8965646c1027a31d1e958df59efcb7ca3b69bc.png";
import { useLanguage } from "../contexts/LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Investment Project in Kaliningrad",
      buttons: [
        { id: "location", label: "Location" },
        { id: "infrastructure", label: "Infrastructure" },
        { id: "masterplan", label: "Master Plan" },
        { id: "contact", label: "Contacts" }
      ],
      paragraph1: "We proudly present the 'KGDPARK' project — a 50-hectare land plot located in the southern part of Kaliningrad, just 2.5 km from the city border.",
      paragraph2: "The site is fully prepared and equipped with modern infrastructure, intended for the construction of warehouse facilities.",
      imageCaption: "The site planning within the project takes into account various tenant types with different transport demand profiles: offices, warehousing and logistics, light and processing industries, as well as storage for internal needs. The designed transport layout and traffic organization are based on international standards and calculated for a load of up to 5,500 vehicles per day, ensuring efficient and safe operation of the internal road network."
    },
    ru: {
      title: (
        <>
          Инвестиционный проект<br />В Калининграде
        </>
      ),
      buttons: [
        { id: "location", label: "Локация" },
        { id: "infrastructure", label: "Инженерия" },
        { id: "masterplan", label: "Мастер-план" },
        { id: "contact", label: "Контакты" }
      ],
      paragraph1: "Представляем проект 'KGDPARK' — земельный участок площадью 50 гектаров, расположенный в южной части Калининграда, всего в 2,5 км от границы города.",
      paragraph2: "Участок полностью подготовлен и оснащен современной инфраструктурой, предназначен для строительства складских объектов.",
      imageCaption: "При планировании участка в рамках проекта учитываются различные типы арендаторов с разными профилями транспортных потребностей: офисы, складирование и логистика, лёгкая и перерабатывающая промышленность, а также складирование для собственных нужд. Разработанная транспортная схема и организация движения основаны на международных стандартах и рассчитаны на нагрузку до 5 500 транспортных средств в день, обеспечивая эффективное и безопасное функционирование внутренней дорожной сети."
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
              <p className="text-lg leading-relaxed text-justify">
                {content[language].paragraph1}
              </p>
              <p className="text-lg leading-relaxed text-justify">
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

        {/* Full-width caption paragraph below the two-column layout */}
        <div className="max-w-7xl mx-auto mt-12">
          <p className="text-lg leading-relaxed text-justify text-[#444]">
            {content[language].imageCaption}
          </p>
        </div>
      </div>
    </section>
  );
}