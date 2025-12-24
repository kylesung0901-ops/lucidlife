import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mountain, Waves, TreePine, Building } from "lucide-react";

export function RestingPlaceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const places = [
    {
      title: "봉안당",
      description: "따뜻한 빛이 머무는, 가장 편안한 실내 안치 공간.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      title: "자연장",
      description: "자연에서 와서 자연으로. 수목장, 잔디장, 해양장.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      title: "매장",
      description: "전통의 예를 갖춘, 품격 있는 장지 동행.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      title: "개장·이장",
      description: "오래된 묘소를 새로운 안식처로.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    }
  ];
  
  return (
    <section id="space" ref={ref} className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#141C2E]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F5F1E6] mb-3 md:mb-4" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            마지막 안식처
          </h2>
          <p className="text-base md:text-lg text-[#C9A66B] font-light" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            안치까지의 선택을 책임집니다
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
          {places.map((place, index) => (
            <motion.div
              key={place.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#1A2538] rounded-2xl overflow-hidden border border-[#C9A66B]/20 hover:border-[#C9A66B]/40 transition-all duration-300"
            >
              <div className="relative w-full aspect-square">
                <img 
                  src={place.image} 
                  alt={place.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1421]/80 to-transparent" />
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-[#F5F1E6] mb-2 md:mb-3" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {place.title}
                </h3>
                <p className="text-sm md:text-base text-[#C9A66B]/80 leading-relaxed font-light" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {place.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
