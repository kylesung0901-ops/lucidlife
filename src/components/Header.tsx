import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

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
  
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Holistic Care", href: "#holistic" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
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
            className="flex flex-col"
          >
            <span className={`font-serif transition-colors ${
              isScrolled ? "text-[#0A2E5C]" : "text-white"
            }`} style={{ fontSize: "1.5rem", fontWeight: 700 }}>
              The Last String
            </span>
            <span className={`text-xs tracking-wider transition-colors ${
              isScrolled ? "text-[#D4AF37]" : "text-[#D4AF37]"
            }`}>
              Celebrating Life, Honoring Afterlife
            </span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
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
            
            <motion.a
              href="tel:+919876543210"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-[#0A2E5C] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#e0bf4d] transition-colors"
            >
              <Phone size={18} />
              24/7 Support
            </motion.a>
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
              
              <a
                href="tel:+919876543210"
                className="bg-[#D4AF37] text-[#0A2E5C] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#e0bf4d] transition-colors"
              >
                <Phone size={18} />
                24/7 Support
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
