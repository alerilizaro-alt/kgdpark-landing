import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { X, Download, CheckCircle2 } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

interface MasterPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MasterPlanModal({ isOpen, onClose }: MasterPlanModalProps) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      submitBtn: "Submit",
      successMessage: "Thank you! The presentation will open automatically.",
      successSubMessage: "If it doesn't open, click the button below.",
      downloadBtn: "📄 Open Presentation",
      consentLabel: "I agree to the Privacy Policy.",
      emailError: "Please enter a valid email address (must contain @)",
      consentError: "You must agree to the Privacy Policy",
    },
    ru: {
      formTitle: "Зарегистрируйтесь, чтобы скачать полные материалы инвестиционного проекта.",
      nameLabel: "Имя",
      namePlaceholder: "Ваше имя",
      emailLabel: "Электронная почта",
      emailPlaceholder: "your.email@example.com",
      submitBtn: "Отправить заявку",
      successMessage: "Спасибо! Презентация откроется автоматически.",
      successSubMessage: "Если она не открылась, нажмите кнопку ниже.",
      downloadBtn: "📄 Открыть презентацию",
      consentLabel: "Я согласен с Политикой конфиденциальности.",
      emailError: "Пожалуйста, введите действительный адрес электронной почты (должен содержать @)",
      consentError: "Вы должны согласиться с Политикой конфиденциальности",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleClose = () => {
    onClose();
    // Reset form after a short delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", consent: false });
      setEmailError("");
    }, 300);
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-40" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative bg-white rounded-[20px] shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Content */}
            <div className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6">
                    <h3 className="text-slate-900 text-center">
                      {content[language].formTitle}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="modal-name">{content[language].nameLabel}</Label>
                    <Input
                      id="modal-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={content[language].namePlaceholder}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="modal-email">{content[language].emailLabel}</Label>
                    <Input
                      id="modal-email"
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
                      id="modal-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="modal-consent"
                      checked={formData.consent}
                      onCheckedChange={handleConsentChange}
                      required
                    />
                    <Label
                      htmlFor="modal-consent"
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
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-center py-4"
                >
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-slate-900">{content[language].successMessage}</h3>
                    <p className="text-slate-600 text-sm">
                      {formData.name}, {language === 'en' 
                        ? 'your registration has been confirmed.' 
                        : 'ваша регистрация подтверждена.'}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {content[language].successSubMessage}
                    </p>
                  </div>
                  
                  <Button 
                    onClick={handleDownload}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {content[language].downloadBtn}
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}