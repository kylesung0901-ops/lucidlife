import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <footer ref={ref} className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* 사업자 정보 */}
          <div className="text-center mb-8">
            <div className="space-y-2 text-sm text-gray-300">
              <p>업체명 : 루시드라이프 | 대표자 : 서동원</p>
              <p>사업자등록번호 : 123-92-47792</p>
              <p>사업장소재지 : 경기도 파주시 교하로 100, 908-102</p>
              <p>전화번호 : 010-2116-4114</p>
            </div>
          </div>

          {/* 링크들 */}
          <div className="flex justify-center gap-6 mb-8">
            <button className="text-gray-300 hover:text-white transition-colors text-sm">
              개인정보 처리방침
            </button>
            <button className="text-gray-300 hover:text-white transition-colors text-sm">
              이용약관양식
            </button>
          </div>

          {/* 저작권 */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 LUCID LIFE. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 플로팅 버튼들 */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <motion.a
          href="tel:010-2116-4114"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}