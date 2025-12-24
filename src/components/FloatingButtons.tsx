import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* 카카오톡 버튼 */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#FEE500] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        aria-label="카카오톡 상담"
      >
        <MessageCircle className="text-[#3C1E1E]" size={24} />
      </motion.a>
      
      {/* 전화 버튼 */}
      <motion.a
        href="tel:010-2116-4114"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#C9A66B] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        aria-label="전화 상담"
      >
        <Phone className="text-[#0D1421]" size={24} />
      </motion.a>
    </div>
  );
}
