import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ServiceCard } from "./ServiceCard";
import { Heart, Flame, Flower2, Users } from "lucide-react";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const services = [
    {
      title: "Moksha",
      description: "End-to-end funeral care with dignity and respect",
      features: [
        "Complete funeral arrangements",
        "Transportation and logistics",
        "Documentation assistance",
        "Traditional ceremony coordination"
      ],
      icon: Heart
    },
    {
      title: "Mukti",
      description: "Elevated offering with premium amenities",
      features: [
        "VIP body freezer facilities",
        "Eco-friendly cremation logs",
        "Premium venue arrangements",
        "24/7 support services"
      ],
      icon: Flame
    },
    {
      title: "Amritam",
      description: "Comprehensive ceremonial offering",
      features: [
        "Venue booking and décor",
        "Spiritual performers coordination",
        "Customized memorial displays",
        "Catering arrangements"
      ],
      icon: Flower2
    },
    {
      title: "Nirvana",
      description: "Complete ritual support for all ceremonies",
      features: [
        "Asthi Visarjan arrangements",
        "Dasvi, Gyarvi, Barvi ceremonies",
        "Tehrvi and Shrad rituals",
        "Priest coordination and guidance"
      ],
      icon: Users
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
            Our Packages
          </motion.span>
          <h2 className="text-[#0A2E5C] mb-4">Thoughtfully Curated Services</h2>
          <p className="max-w-2xl mx-auto text-[#666666]">
            We offer a range of comprehensive packages to honor your loved ones with dignity and grace
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-[#666666] mb-6">
            Not sure which package is right for you? Our compassionate team is here to help.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white border-2 border-[#D4AF37] text-[#0A2E5C] px-8 py-4 rounded-full hover:bg-[#D4AF37] hover:text-white transition-all shadow-lg"
          >
            Speak with Our Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}