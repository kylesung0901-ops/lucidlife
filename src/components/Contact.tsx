import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
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
    <section id="contact" ref={ref} className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0D1421] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#C9A66B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1A2538]/30 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#C9A66B] tracking-wider uppercase mb-4 block"
          >
            {t('contact.badge')}
          </motion.span>
          <h2 className="text-[#F5F1E6] mb-4">{t('contact.title')}</h2>
          <p className="text-[#F5F1E6]/70">
            {t('contact.description')}
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
              <h3 className="text-[#F5F1E6] mb-6">{t('contact.reach')}</h3>
              <p className="text-[#F5F1E6]/70 mb-8">
                {t('contact.available')}
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 bg-[#1A2538] rounded-xl p-5 border border-[#C9A66B]/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9A66B] to-[#D4B87A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#0D1421]" size={20} />
                </div>
                <div>
                  <p className="text-[#F5F1E6] mb-1">{t('contact.phone')}</p>
                  <p className="text-[#C9A66B]">010-2116-4114</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 bg-[#1A2538] rounded-xl p-5 border border-[#C9A66B]/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9A66B] to-[#D4B87A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#0D1421]" size={20} />
                </div>
                <div>
                  <p className="text-[#F5F1E6] mb-1">{t('contact.email')}</p>
                  <p className="text-[#C9A66B]">info@lucidlife.co.kr</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 bg-[#1A2538] rounded-xl p-5 border border-[#C9A66B]/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9A66B] to-[#D4B87A] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#0D1421]" size={20} />
                </div>
                <div>
                  <p className="text-[#F5F1E6] mb-1">{t('contact.location')}</p>
                  <p className="text-[#C9A66B]">경기도 파주시 교하로 100, 908-102</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#1A2538] rounded-2xl p-8 border border-[#C9A66B]/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#F5F1E6] mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D1421] border border-[#C9A66B]/30 rounded-lg text-[#F5F1E6] focus:outline-none focus:border-[#C9A66B] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#F5F1E6] mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D1421] border border-[#C9A66B]/30 rounded-lg text-[#F5F1E6] focus:outline-none focus:border-[#C9A66B] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-[#F5F1E6] mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D1421] border border-[#C9A66B]/30 rounded-lg text-[#F5F1E6] focus:outline-none focus:border-[#C9A66B] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#F5F1E6] mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0D1421] border border-[#C9A66B]/30 rounded-lg text-[#F5F1E6] focus:outline-none focus:border-[#C9A66B] transition-colors resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#C9A66B] text-[#0D1421] py-4 rounded-full inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-medium"
              >
                {t('contact.form.send')}
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}