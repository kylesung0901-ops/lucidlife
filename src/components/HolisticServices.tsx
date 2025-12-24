import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { FileText, Sparkles, MessageCircleHeart } from "lucide-react";

export function HolisticServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const services = [
    {
      icon: FileText,
      title: "Legacy Planning",
      description: "Help preserve your loved one's story and values for future generations through thoughtful documentation and memorial planning."
    },
    {
      icon: Sparkles,
      title: "Spiritual Healing",
      description: "Connect with experienced spiritual guides who can provide comfort and support through traditional healing practices."
    },
    {
      icon: MessageCircleHeart,
      title: "Grief Counseling",
      description: "Professional counseling services to support you and your family through the grieving process with compassion and understanding."
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
            Beyond Funeral Services
          </motion.span>
          <h2 className="text-[#0A2E5C] mb-4">Holistic Care & Support</h2>
          <p className="max-w-2xl mx-auto text-[#666666]">
            Comprehensive support for healing and remembrance throughout your journey
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#e0bf4d] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <service.icon className="text-white" size={32} />
                </motion.div>
                
                <h3 className="text-[#0A2E5C] mb-4">{service.title}</h3>
                <p className="text-[#666666] leading-relaxed">{service.description}</p>
              </motion.div>
              
              {/* Decorative Corner Element */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-[#F5F5DC]/50 rounded-full blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}