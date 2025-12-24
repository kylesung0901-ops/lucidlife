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
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 좌측 - 루시드라이프 로고 */}
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <img 
              src="/lucidlife-logo-new.svg" 
              alt="LucidLife Logo" 
              className="h-12 w-auto object-contain"
              style={{ minHeight: '48px', maxHeight: '60px' }}
            />
          </motion.a>

          {/* 우측 - 액션 버튼들 */}
          <div className="flex items-center gap-3">
            {/* 1. 24시간장례상담 */}
            <motion.a
              href="tel:010-2116-4114"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 bg-[#C9A66B] text-[#141C2E] px-4 py-2 rounded-full hover:opacity-90 transition-all text-sm font-light"
            >
              <Phone size={16} />
              24시간장례상담
            </motion.a>

            {/* 2. 긴급상담 전화번호 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block text-[#141C2E] text-sm font-light"
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
              className="flex items-center gap-2 bg-[#FEE500] text-[#3C1E1E] px-3 py-2 rounded-full hover:bg-[#FFEB3B] transition-colors text-sm"
            >
              <MessageCircle size={16} />
              <span className="hidden sm:inline">카톡연결</span>
            </motion.a>

            {/* 4. EN/KR */}
            <LanguageToggle />

            {/* 5. 루시드 함께하기 */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C9A66B] text-[#141C2E] px-4 py-2 rounded-full hover:opacity-90 transition-all text-sm font-light"
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
              className="p-2 text-[#141C2E] hover:text-[#C9A66B] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-6 pb-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2 text-[#141C2E] hover:text-[#C9A66B] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="tel:010-2116-4114"
                  className="bg-[#C9A66B] text-[#141C2E] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                >
                  <Phone size={18} />
                  24시간장례상담
                </a>
                <button className="bg-[#C9A66B] text-[#141C2E] px-6 py-3 rounded-full hover:opacity-90 transition-all">
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