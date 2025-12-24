import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section id="withus" ref={ref} className="py-24 px-6 bg-gradient-to-br from-[#F8F6F0] to-[#FFFFFF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8B7355] rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-8">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-[#8B7355] leading-relaxed mb-8">
            서툰 이별 앞에서, 혼자가 아님을 느끼실 수 있도록<br />
            루시드라이프가 함께하겠습니다.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://forms.google.com/your-form-id', '_blank')}
            className="bg-[#D4AF37] text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-[#C5A028] transition-all shadow-lg hover:shadow-xl"
          >
            {t('cta.button')}
          </motion.button>
          
          <p className="text-sm text-[#999999] mt-4">
            사전등록을 통해 필요한 순간 빠른 도움을 받으실 수 있습니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}
