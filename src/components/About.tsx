import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Users, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const phases = [
    { 
      icon: Clock, 
      title: t('about.phase1.title'), 
      desc: t('about.phase1.desc'),
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: Users, 
      title: t('about.phase2.title'), 
      desc: t('about.phase2.desc'),
      color: "from-amber-500 to-amber-600"
    },
    { 
      icon: Heart, 
      title: t('about.phase3.title'), 
      desc: t('about.phase3.desc'),
      color: "from-green-500 to-green-600"
    }
  ];
  
  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-gradient-to-b from-white to-[#F9F7F4] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A2E5C]/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[#D4AF37] tracking-wider uppercase mb-4 block">{t('about.badge')}</span>
              <h2 className="text-[#0A2E5C] mb-4 text-3xl font-bold">{t('about.title')}</h2>
              <h3 className="text-[#666666] mb-8 text-xl">{t('about.subtitle')}</h3>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYXNzaW9uYXRlJTIwY2FyZXxlbnwxfHx8fDE3NjM4MDM2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="이별동행케어"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E5C]/60 via-transparent to-transparent" />
              
              {/* Process Flow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
              >
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-600 font-medium">임종 전</span>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 via-amber-500 to-green-500 mx-2"></div>
                  <span className="text-amber-600 font-medium">장례 중</span>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-500 to-green-500 mx-2"></div>
                  <span className="text-green-600 font-medium">이별 이후</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Three Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-[#D4AF37] relative overflow-hidden"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <phase.icon className="text-white" size={28} />
              </div>
              <h3 className="text-[#0A2E5C] mb-3 text-lg font-bold">{phase.title}</h3>
              <p className="text-[#666666] leading-relaxed">{phase.desc}</p>
              
              {/* Connection Line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}