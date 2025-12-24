import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D1421]">
      {/* Luxury Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200)`
        }}
      />
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1421]/80 via-[#0D1421]/60 to-[#0D1421]/90" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* 메인 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#F5F1E6] leading-tight mb-6" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            모든 이별은 서툴기에
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#F5F1E6] leading-tight" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            누군가는 그 곁에 선다
          </h2>
        </motion.div>
        
        {/* 여백 */}
        <div className="py-16"></div>
        
        {/* 서브 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mb-20"
        >
          <p className="text-xl md:text-2xl text-[#C9A66B] font-light leading-relaxed" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            말하지 않아도 되는 시간을 함께 견딥니다
          </p>
        </motion.div>
        
        {/* 여백으로 채우기 */}
        <div className="flex-1 min-h-[200px]"></div>
        
        {/* 시그니처 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mt-auto"
        >
          <p className="text-sm text-[#C9A66B]/70 font-light tracking-wider" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            your life lucid life
          </p>
        </motion.div>
      </div>
    </section>
  );
}