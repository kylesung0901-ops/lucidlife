import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Heart, Users } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats = [
    { icon: Users, value: "5000+", label: "Families Served" },
    { icon: Award, value: "15+", label: "Years of Service" },
    { icon: Heart, value: "100%", label: "Satisfaction Rate" }
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
              <span className="text-[#D4AF37] tracking-wider uppercase mb-4 block">About Us</span>
              <h2 className="text-[#0A2E5C] mb-6">Compassion in Every Detail</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="mb-4">
                At The Last String, we understand that saying goodbye to a loved one is one of life's most profound moments. Our mission is to provide compassionate, dignified, and personalized funeral and memorial services that honor the unique life and legacy of those who have passed.
              </p>
              <p className="mb-4">
                Based in Mumbai, we bring together tradition, empathy, and professionalism to support families during their most difficult times. Every detail is handled with care, allowing you to focus on celebrating the life of your loved one.
              </p>
              <p>
                We believe in the celebration of life after loss, ensuring that every service reflects the dignity, grace, and respect that every individual deserves.
              </p>
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
                src="https://images.unsplash.com/photo-1761234852163-23f2ededd04e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXJpbmclMjBoYW5kc3xlbnwxfHx8fDE3NjM4MDM2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Compassionate care"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E5C]/60 via-transparent to-transparent" />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
              >
                <p className="text-[#0A2E5C] italic">
                  "Honoring memories with dignity and grace"
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-[#D4AF37]"
            >
              <div className="w-16 h-16 bg-[#F5F5DC] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-[#0A2E5C]" size={28} />
              </div>
              <h3 className="text-[#0A2E5C] mb-2">{stat.value}</h3>
              <p className="text-[#666666]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}