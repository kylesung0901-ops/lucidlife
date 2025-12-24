import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Link, MessageSquare, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function HolisticServices() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const differences = [
    {
      icon: Link,
      title: t('difference.reason1.title'),
      description: t('difference.reason1.desc'),
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: MessageSquare,
      title: t('difference.reason2.title'),
      description: t('difference.reason2.desc'),
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Heart,
      title: t('difference.reason3.title'),
      description: t('difference.reason3.desc'),
      gradient: "from-purple-500 to-purple-700"
    }
  ];
  
  return (
    <section id="holistic" ref={ref} className="py-24 px-6 bg-gradient-to-b from-white to-[#F9F7F4] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#D4AF37] tracking-wider uppercase mb-4 block"
          >
            {t('difference.badge')}
          </motion.span>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {differences.map((difference, index) => (
            <motion.div
              key={difference.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow text-center border-t-4 border-[#D4AF37]"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-br ${difference.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <difference.icon className="text-white" size={32} />
                </motion.div>
                
                <h3 className="text-[#0A2E5C] mb-4 text-xl font-bold">{difference.title}</h3>
                <p className="text-[#666666] leading-relaxed text-lg">{difference.description}</p>
              </motion.div>
              
              {/* Connection Line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}