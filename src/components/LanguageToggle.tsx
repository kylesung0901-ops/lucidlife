import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20"
    >
      <button
        onClick={() => setLanguage('ko')}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
          language === 'ko'
            ? 'bg-[#D4AF37] text-[#0A2E5C] shadow-lg'
            : 'text-white hover:text-[#D4AF37]'
        }`}
      >
        KR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-[#D4AF37] text-[#0A2E5C] shadow-lg'
            : 'text-white hover:text-[#D4AF37]'
        }`}
      >
        EN
      </button>
    </motion.div>
  );
}
