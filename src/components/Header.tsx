import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const { t } = useLanguage();
  
  const navItems = [
    { label: t('nav.lucidlife'), href: "#hero" },
    { label: t('nav.together'), href: "#together" },
    { label: t('nav.threedays'), href: "#threedays" },
    { label: t('nav.restingplace'), href: "#restingplace" },
    { label: t('nav.stories'), href: "#stories" },
    { label: t('nav.withus'), href: "#withus" }
  ];
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-lg py-4" 
          : "bg-white/10 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src="/lucidlife-logo.png" 
              alt="LucidLife Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`transition-colors ${
                  isScrolled 
                    ? "text-[#666666] hover:text-[#D4AF37]" 
                    : "text-white hover:text-[#D4AF37]"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Language Toggle */}
            <LanguageToggle />
            
            <div className="flex items-center gap-4">
              <motion.a
                href="tel:+919876543210"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D4AF37] text-[#0A2E5C] px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#e0bf4d] transition-colors text-sm"
              >
                <Phone size={16} />
                전화
              </motion.a>
              <motion.a
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FEE500] text-[#3C1E1E] px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#FFEB3B] transition-colors text-sm"
              >
                💬 카톡
              </motion.a>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-[#0A2E5C]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pt-6 pb-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 transition-colors ${
                    isScrolled 
                      ? "text-[#666666] hover:text-[#D4AF37]" 
                      : "text-white hover:text-[#D4AF37]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex justify-center mb-4">
                <LanguageToggle />
              </div>
              
              <a
                href="tel:+919876543210"
                className="bg-[#D4AF37] text-[#0A2E5C] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#e0bf4d] transition-colors"
              >
                <Phone size={18} />
                {t('nav.support')}
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
