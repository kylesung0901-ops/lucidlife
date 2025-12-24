import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center bg-[#1A2538]/50 backdrop-blur-sm rounded-full p-0.5 md:p-1 border border-[#C9A66B]/30"
    >
      <button
        onClick={() => setLanguage('ko')}
        className={`px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
          language === 'ko'
            ? 'bg-[#C9A66B] text-[#0D1421] shadow-lg'
            : 'text-[#F5F1E6] hover:text-[#C9A66B]'
        }`}
      >
        KR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-[#C9A66B] text-[#0D1421] shadow-lg'
            : 'text-[#F5F1E6] hover:text-[#C9A66B]'
        }`}
      >
        EN
      </button>
    </motion.div>
  );
}
