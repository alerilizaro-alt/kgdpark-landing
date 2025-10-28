import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import contactImage from "figma:asset/be2fec6a960cc3a230f09c43824096a6e27f3fde.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useLanguage } from "../contexts/LanguageContext";

export function ContactSection() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "For investment inquiries and partnership opportunities.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your investment interests...",
      submitBtn: "Send Message",
      successToast: "Thank you for your inquiry! We will contact you soon.",
      emailText: "Email",
      phoneText: "Phone",
      locationText: "Location",
      locationValue: "Kaliningrad, Russia"
    },
    ru: {
      title: "Свяжитесь с нами",
      subtitle: "По вопросам инвестиций и партнерских возможностей.",
      nameLabel: "Имя",
      namePlaceholder: "Ваше имя",
      emailLabel: "Электронная почта",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Сообщение",
      messagePlaceholder: "Расскажите нам о ваших инвестиционных интересах...",
      submitBtn: "Отправить сообщение",
      successToast: "Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.",
      emailText: "Электронная почта",
      phoneText: "Телефон",
      locationText: "Местоположение",
      locationValue: "Калининград, Россия"
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    toast.success(content[language].successToast);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">{content[language].title}</h2>
          <p className="text-slate-600">
            {content[language].subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{content[language].nameLabel}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content[language].namePlaceholder}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{content[language].emailLabel}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content[language].emailPlaceholder}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{content[language].messageLabel}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={content[language].messagePlaceholder}
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  {content[language].submitBtn}
                </Button>
              </form>
            </Card>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-600">{content[language].emailText}</p>
                  <a href="mailto:info@kgdpark.com" className="text-slate-900 hover:text-blue-600">
                    info@kgdpark.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-600">{content[language].phoneText}</p>
                  <a href="tel:+79114626377" className="text-slate-900 hover:text-blue-600">
                    +7 (911) 4626377
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-600">{content[language].locationText}</p>
                  <p className="text-slate-900">{content[language].locationValue}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl h-full min-h-[500px]">
            <img
              src={contactImage}
              alt="Kaliningrad Port"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
