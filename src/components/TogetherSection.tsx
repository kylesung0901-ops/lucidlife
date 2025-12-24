import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart, Users, Shield, Star } from "lucide-react";

export function TogetherSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const approaches = [
    {
      title: "가족장 · 무빈소",
      feature: "조용히, 가족만",
      description: "조용히, 가장 가까운 사람들만 남아 이별에 집중하는 시간.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      title: "실용장",
      feature: "기본에 충실하게",
      description: "불필요한 부담은 덜고, 장례의 기본은 놓치지 않은 현실적인 선택.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      title: "표준장",
      feature: "충분히, 정성껏",
      description: "가장 많은 이들이 선택한, 균형과 품위를 갖춘 기본 장례.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      title: "매장 · 미국식장",
      feature: "마지막을 완벽하게",
      description: "한 사람의 삶을 중심에 두고 설계하는 맞춤형 추모 의식.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    }
  ];
  
  return (
    <section id="together" ref={ref} className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#141C2E] mb-4" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            함께하는 방식
          </h2>
          <p className="text-lg text-[#C9A66B] font-light" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            부담 없이, 상황에 맞게
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img 
                  src={approach.image} 
                  alt={approach.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#C9A66B] text-[#141C2E] px-3 py-1 rounded-full text-sm font-light">
                    {approach.feature}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#141C2E] mb-3" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {approach.title}
                </h3>
                <p className="text-[#C9A66B] leading-relaxed font-light" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {approach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 버튼들 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 space-y-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C9A66B] text-[#141C2E] px-8 py-3 rounded-full hover:opacity-90 transition-all font-light"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            전체 상품 비교하기
          </motion.button>
          
          <div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-[#C9A66B] hover:text-[#141C2E] transition-colors font-light underline"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              미국식 장례 알아보기 &gt;
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
