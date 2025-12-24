import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Music, Users, Quote } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const credentials = [
    {
      icon: Award,
      title: t('ceo.cert1'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: t('ceo.cert2'),
      color: "from-green-500 to-green-600"
    }
  ];
  
  const experiences = [
    {
      icon: Users,
      title: t('ceo.current'),
      color: "text-blue-600"
    },
    {
      icon: Music,
      title: t('ceo.prev1'),
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: t('ceo.prev2'),
      color: "text-green-600"
    }
  ];
  
  return (
    <section id="testimonials" ref={ref} className="py-24 px-6 bg-gradient-to-b from-[#F9F7F4] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0A2E5C]/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0A2E5C] mb-4 text-4xl font-bold"
          >
            {t('ceo.name')}
          </motion.h2>
          <p className="text-[#D4AF37] text-xl font-semibold mb-2">
            {t('ceo.title')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#e0bf4d] flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                도
              </div>
              
              {/* Credentials */}
              <div className="space-y-4">
                {credentials.map((cred, index) => (
                  <motion.div
                    key={cred.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${cred.color} rounded-full flex items-center justify-center`}>
                      <cred.icon className="text-white" size={20} />
                    </div>
                    <span className="text-[#0A2E5C] font-medium">{cred.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Experience & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Experience */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-[#0A2E5C] font-bold text-xl mb-6">경력</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <exp.icon className={`${exp.color} mt-1`} size={20} />
                    <span className="text-[#666666] leading-relaxed">{exp.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-[#D4AF37]/10 to-[#0A2E5C]/10 rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-4 left-4 text-[#D4AF37] opacity-30" size={32} />
              <p className="text-[#0A2E5C] text-xl font-medium italic text-center leading-relaxed pt-4">
                {t('ceo.quote')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}