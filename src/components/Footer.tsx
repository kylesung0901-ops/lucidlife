import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="bg-[#2C2C2C] text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/lucidlife-logo-new.svg" 
                alt="LucidLife Logo" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-white/80 leading-relaxed mb-6">
                서툰 이별 앞에, 함께 서 있는 곳입니다.
              </p>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">연락처</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#D4AF37]" />
                  <span className="text-white/80">24시간 상담: 010-2116-4114</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#D4AF37]" />
                  <span className="text-white/80">info@lucidlife.co.kr</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#D4AF37]" />
                  <span className="text-white/80">경기도 파주시 교하로 100, 908-102</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Business Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">사업자 정보</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>상호명: 루시드라이프 | 대표자: 도원</p>
                <p>사업자등록번호: 000-00-00000</p>
                <p>주소: 서울특별시 강남구 테헤란로 000, 00층</p>
              </div>
              
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#C9A66B] text-[#141C2E] px-6 py-3 rounded-full hover:opacity-90 transition-all font-light"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  멤버십 무료 가입
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-white/60 text-sm">
            Copyright © 2025 Lucid Life. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
