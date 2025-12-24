import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CTAPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // 푸터 직전 (90% 스크롤 시) 팝업 표시
      if (scrollTop + windowHeight >= documentHeight * 0.9) {
        if (!hasScrolledToBottom) {
          setHasScrolledToBottom(true);
          setTimeout(() => setIsVisible(true), 500); // 0.5초 후 팝업 표시
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledToBottom]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    // 실제 구현 시 구글폼이나 회원가입 페이지로 연결
    window.open('https://forms.google.com/your-form-id', '_blank');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-2xl p-8 m-6 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-[#141C2E] hover:text-[#C9A66B] transition-colors"
            >
              <X size={24} />
            </button>

            {/* 팝업 내용 */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-light text-[#141C2E] mb-4" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  루시드 함께하기
                </h3>
                <div className="space-y-2">
                  <p className="text-lg text-[#C9A66B] font-light" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    미리 가입해두세요.
                  </p>
                  <p className="text-lg text-[#C9A66B] font-light" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    18개월 치 내드립니다.
                  </p>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05, opacity: 0.9 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCTAClick}
                className="bg-[#C9A66B] text-[#141C2E] px-8 py-4 rounded-full text-lg font-light hover:opacity-90 transition-all w-full"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                루시드 함께하기
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm text-[#999999] mt-4 font-light"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                사전 등록을 통한 특별 혜택을 받으실 수 있습니다
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
