import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Priya Sharma",
      relation: "Daughter",
      text: "The Last String helped us through the most difficult time of our lives with such grace and compassion. Every detail was handled with care, allowing us to focus on celebrating my father's life."
    },
    {
      name: "Rajesh Kumar",
      relation: "Son",
      text: "Their professionalism and empathy made all the difference. The team understood our cultural needs and ensured every ritual was performed with proper respect and dignity."
    },
    {
      name: "Meera Patel",
      relation: "Wife",
      text: "From the moment we contacted them, we felt supported and understood. The grief counseling services have been invaluable in helping our family heal."
    },
    {
      name: "Amit Desai",
      relation: "Brother",
      text: "The attention to detail and personalized service exceeded our expectations. They truly honored my sister's memory in the most beautiful way possible."
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
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
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#D4AF37] tracking-wider uppercase mb-4 block"
          >
            Client Stories
          </motion.span>
          <h2 className="text-[#0A2E5C] mb-4">Words from Families We've Served</h2>
          <p className="text-[#666666]">
            Their trust and feedback inspire us to continue serving with compassion
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 text-[#D4AF37] opacity-20" size={64} />
            <Quote className="absolute bottom-6 right-6 text-[#D4AF37] opacity-20 rotate-180" size={64} />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <p className="text-[#0A2E5C] mb-8 italic leading-relaxed" style={{ fontSize: "1.125rem" }}>
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#e0bf4d] rounded-full flex items-center justify-center">
                  <span className="text-white">{testimonials[currentIndex].name.charAt(0)}</span>
                </div>
                <div className="text-left">
                  <p className="text-[#2F2F2F]">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-[#666666]">
                    {testimonials[currentIndex].relation}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-[#0A2E5C] text-white rounded-full flex items-center justify-center hover:bg-[#0d3a75] transition-colors shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-[#D4AF37] w-8" 
                      : "bg-[#D3D3D3] hover:bg-[#D4AF37]/50 w-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-[#0A2E5C] text-white rounded-full flex items-center justify-center hover:bg-[#0d3a75] transition-colors shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}