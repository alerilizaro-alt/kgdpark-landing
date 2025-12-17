import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import contactImage from "figma:asset/5fc20bfc0a3d65883a3b4b1c22a5b58f756a79d8.png";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useLanguage } from "../contexts/LanguageContext";

export function ContactSection() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // Honeypot field
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const content = {
    en: {
      formTitle: "Register to download the full investment project materials.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Message (optional)",
      messagePlaceholder: "Tell us about your investment interests...",
      submitBtn: "Submit",
      successMessage: "Thank you! The presentation will open automatically.",
      successSubMessage: "If it doesn't open, click the button below.",
      downloadBtn: "📄 Open Presentation",
      consentLabel: "I agree to the Privacy Policy.",
      emailError: "Please enter a valid email address (must contain @)",
      consentError: "You must agree to the Privacy Policy",
      emailText: "Email",
      phoneText: "Phone",
      locationText: "Location",
      locationValue: "Kaliningrad, Russia"
    },
    ru: {
      formTitle: "Зарегистрируйтесь, чтобы скачать полные материалы инвестиционного проекта.",
      nameLabel: "Имя",
      namePlaceholder: "Ваше имя",
      emailLabel: "Электронная почта",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Сообщение (необязательно)",
      messagePlaceholder: "Расскажите нам о ваших инвестиционных интересах...",
      submitBtn: "Отправить заявку",
      successMessage: "Спасибо! Презентация откроется автоматически.",
      successSubMessage: "Если она не открылась, нажмите кнопку ниже.",
      downloadBtn: "📄 Открыть презентацию",
      consentLabel: "Я согласен с Политикой конфиденциальности.",
      emailError: "Пожалуйста, введите действительный адрес электронной почты (должен содержать @)",
      consentError: "Вы должны согласиться с Политикой конфиденциальности",
      emailText: "Электронная почта",
      phoneText: "Телефон",
      locationText: "Местоположение",
      locationValue: "Калининград, Россия"
    }
  };

  const validateEmail = (email: string): boolean => {
    // Simple validation - must contain @
    return email.includes('@') && email.length > 3;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    // Check honeypot field - if filled, it's likely spam
    if (formData.company) {
      console.log("Spam detected - honeypot field filled");
      return;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      setEmailError(content[language].emailError);
      return;
    }

    // Check consent
    if (!formData.consent) {
      toast.error(content[language].consentError);
      return;
    }

    // Success - show message and automatically open PDF
    setIsSubmitted(true);
    toast.success(content[language].successMessage);
    
    // Automatically open the PDF after a short delay
    setTimeout(() => {
      window.open('/files/presentation.pdf', '_blank');
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    // Clear email error when user types
    if (e.target.name === "email" && emailError) {
      setEmailError("");
    }
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData({
      ...formData,
      consent: checked,
    });
  };

  const handleDownload = () => {
    // This will trigger the download of the PDF
    window.open('/files/presentation.pdf', '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6">
                    <h3 className="text-slate-900 text-center">{content[language].formTitle}</h3>
                  </div>
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
                      className={emailError ? "border-red-500" : ""}
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm">{emailError}</p>
                    )}
                  </div>
                  
                  {/* Honeypot field - hidden from users */}
                  <div className="hidden">
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
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
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={handleConsentChange}
                      required
                    />
                    <Label
                      htmlFor="consent"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {content[language].consentLabel}
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    {content[language].submitBtn}
                  </Button>
                </form>
              ) : (
                <div className="space-y-6 text-center py-8">
                  <div className="space-y-2">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Download className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-slate-900">{content[language].successMessage}</h3>
                    <p className="text-slate-600">
                      {formData.name}, {language === 'en' 
                        ? 'your registration has been confirmed.' 
                        : 'ваша регистрация подтверждена.'}
                    </p>
                    <p className="text-slate-600">
                      {content[language].successSubMessage}
                    </p>
                  </div>
                  
                  <Button 
                    onClick={handleDownload}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {content[language].downloadBtn}
                  </Button>
                  
                  <Button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", message: "", company: "", consent: false });
                    }}
                    variant="ghost"
                    className="w-full"
                  >
                    {language === 'en' ? 'Register another email' : 'Зарегистрировать другой email'}
                  </Button>
                </div>
              )}
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