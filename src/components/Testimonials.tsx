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
    <section id="ceo" ref={ref} className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#141C2E] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#C9A66B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#1A2538]/30 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-2xl md:text-3xl text-[#F5F1E6] font-light italic mb-6" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              "이별은 끝이 아니라, 한 사람을 기억하는 시작입니다."
            </p>
          </motion.div>
          <h2 className="text-xl font-medium text-[#F5F1E6] mb-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            도원
          </h2>
          <p className="text-[#C9A66B] font-light" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            루시드라이프 대표
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
            <div className="bg-[#1A2538] rounded-2xl border border-[#C9A66B]/20 p-8 relative overflow-hidden">
              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-[#C9A66B]/30 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                  alt="도원 대표"
                  className="w-full h-full object-cover"
                />
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
                    <div className="w-10 h-10 bg-[#C9A66B] rounded-full flex items-center justify-center">
                      <cred.icon className="text-[#0D1421]" size={20} />
                    </div>
                    <span className="text-[#F5F1E6] font-medium">{cred.title}</span>
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
            <div className="bg-[#1A2538] rounded-2xl border border-[#C9A66B]/20 p-6">
              <h3 className="text-[#F5F1E6] font-semibold text-xl mb-6">경력</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <exp.icon className="text-[#C9A66B] mt-1" size={20} />
                    <span className="text-[#F5F1E6]/80 leading-relaxed">{exp.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-[#C9A66B]/10 border border-[#C9A66B]/30 rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-4 left-4 text-[#C9A66B] opacity-30" size={32} />
              <p className="text-[#F5F1E6] text-lg font-medium italic text-center leading-relaxed pt-4">
                {t('ceo.quote')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}