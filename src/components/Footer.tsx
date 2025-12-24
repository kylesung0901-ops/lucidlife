import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0A2E5C] text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-[#D4AF37] mb-4">The Last String</h3>
            <p className="text-white/80">
              Celebrating life, honoring afterlife with compassion and dignity.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-[#D4AF37] mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} The Last String. All rights reserved. Serving families with compassion and care.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
