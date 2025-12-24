import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Crown, Globe, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const axes = [
    {
      title: t('services.axis1.title'),
      subtitle: t('services.axis1.subtitle'),
      description: t('services.axis1.desc'),
      icon: Crown,
      gradient: "from-purple-500 to-purple-700",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: t('services.axis2.title'),
      subtitle: t('services.axis2.subtitle'),
      description: t('services.axis2.desc'),
      icon: Globe,
      gradient: "from-blue-500 to-blue-700",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: t('services.axis3.title'),
      subtitle: t('services.axis3.subtitle'),
      description: t('services.axis3.desc'),
      icon: Heart,
      gradient: "from-green-500 to-green-700",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];
  
  return (
    <section id="services" ref={ref} className="py-24 px-6 bg-gradient-to-b from-[#F9F7F4] to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0A2E5C]/10 rounded-full blur-3xl" />
      </div>
      
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
            {t('services.badge')}
          </motion.span>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {axes.map((axis, index) => (
            <motion.div
              key={axis.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={axis.image} 
                  alt={axis.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${axis.gradient} opacity-80`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <axis.icon size={48} className="mx-auto mb-3" />
                    <h3 className="text-xl font-bold">{axis.title}</h3>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h4 className="text-[#0A2E5C] font-semibold mb-3 text-lg leading-tight">
                  {axis.subtitle}
                </h4>
                <p className="text-[#666666] leading-relaxed">
                  {axis.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}