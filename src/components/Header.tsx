import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "루시드라이프", href: "#hero" },
    { label: "함께하는 방식", href: "#together" },
    { label: "사흘동안", href: "#process" },
    { label: "마지막 안식처", href: "#space" },
    { label: "이별 이야기", href: "#stories" },
    { label: "이별동행케어", href: "#continuum" }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0D1421]/95 backdrop-blur-md border-b border-[#C9A66B]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* 좌측 - 루시드라이프 로고 */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center flex-shrink-0"
          >
            <img 
              src="/lucidlife-logo.png" 
              alt="LucidLife 루시드라이프" 
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
            />
          </motion.a>

          {/* 우측 - 액션 버튼들 */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-wrap justify-end">
            {/* 1. 24시간장례상담 */}
            <motion.a
              href="tel:010-2116-4114"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-1.5 md:gap-2 bg-[#C9A66B] text-[#141C2E] px-2 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-full hover:opacity-90 transition-all text-xs md:text-sm font-light whitespace-nowrap"
            >
              <Phone size={14} className="md:w-4 md:h-4 flex-shrink-0" />
              <span className="hidden xl:inline">24시간장례상담</span>
              <span className="xl:hidden">24시간</span>
            </motion.a>

            {/* 2. 긴급상담 전화번호 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden xl:block text-[#C9A66B] text-xs md:text-sm font-light whitespace-nowrap"
            >
              긴급상담 010-2116-4114
            </motion.div>

            {/* 3. 카톡연결 */}
            <motion.a
              href="#"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 bg-[#FEE500] text-[#3C1E1E] px-2 md:px-3 py-1.5 md:py-2 rounded-full hover:bg-[#FFEB3B] transition-colors text-xs md:text-sm whitespace-nowrap"
            >
              <MessageCircle size={14} className="md:w-4 md:h-4" />
              <span className="hidden sm:inline">카톡연결</span>
            </motion.a>

            {/* 4. EN/KR */}
            <div className="flex-shrink-0">
              <LanguageToggle />
            </div>

            {/* 5. 루시드 함께하기 */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-[#C9A66B] text-[#141C2E] px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:opacity-90 transition-all text-xs md:text-sm font-light whitespace-nowrap"
            >
              루시드 함께하기
            </motion.button>

            {/* 6. 햄버거 메뉴 */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 md:p-2 text-[#F5F1E6] hover:text-[#C9A66B] transition-colors flex-shrink-0"
            >
              {isMenuOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
            </motion.button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-6 pb-4 border-t border-[#C9A66B]/20"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2 text-[#F5F1E6] hover:text-[#C9A66B] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="tel:010-2116-4114"
                  className="bg-[#C9A66B] text-[#0D1421] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                >
                  <Phone size={18} />
                  24시간장례상담
                </a>
                <button className="bg-[#C9A66B] text-[#0D1421] px-6 py-3 rounded-full hover:opacity-90 transition-all">
                  루시드 함께하기
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}