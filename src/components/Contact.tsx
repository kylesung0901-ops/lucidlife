import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for reaching out. We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-gradient-to-b from-white to-[#F9F7F4] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#0A2E5C]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
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
            Get In Touch
          </motion.span>
          <h2 className="text-[#0A2E5C] mb-4">We're Here for You</h2>
          <p className="text-[#666666]">
            Available 24/7 to support you through every step
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[#0A2E5C] mb-6">Reach Out Anytime</h3>
              <p className="text-[#666666] mb-8">
                Our compassionate team is available around the clock to assist you with immediate needs or to answer any questions about our services.
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#e0bf4d] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-[#2F2F2F] mb-1">24/7 Helpline</p>
                  <p className="text-[#666666]">+91 98765 43210</p>
                  <p className="text-[#666666]">+91 98765 43211</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#e0bf4d] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-[#2F2F2F] mb-1">Email</p>
                  <p className="text-[#666666]">care@thelaststring.com</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#e0bf4d] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-[#2F2F2F] mb-1">Location</p>
                  <p className="text-[#666666]">Mumbai, Maharashtra, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#2F2F2F] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#D3D3D3] rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#2F2F2F] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#D3D3D3] rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-[#2F2F2F] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#D3D3D3] rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#2F2F2F] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-[#D3D3D3] rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#e0bf4d] text-white py-4 rounded-full inline-flex items-center justify-center gap-2 hover:shadow-xl transition-shadow"
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}