import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Clock, Heart, Home } from "lucide-react";

export function ThreeDaysSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const days = [
    {
      day: "1일차",
      title: "임종 및 빈소 마련",
      description: "황망한 첫날, 복잡한 절차 대신 고인과의 인사에 집중",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      day: "2일차",
      title: "입관 및 조문",
      description: "가장 아름다운 마지막 모습을 기억할 수 있도록, 최고의 예를 갖춘 입관식",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      day: "3일차",
      title: "발인 및 장지 동행",
      description: "마지막 안식처까지, 소홀함 없이 끝까지 동행",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    }
  ];
  
  return (
    <section id="process" ref={ref} className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0D1421]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#F5F1E6] mb-4" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            사흘동안
          </h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {days.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#1A2538] rounded-2xl overflow-hidden border border-[#C9A66B]/20 hover:border-[#C9A66B]/40 transition-all duration-300"
            >
              <div className="relative aspect-square">
                <img 
                  src={day.image} 
                  alt={day.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1421]/80 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#C9A66B] text-[#0D1421] px-3 py-1 rounded-full text-sm font-light">
                    {day.day}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-[#F5F1E6] mb-2 md:mb-3" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {day.title}
                </h3>
                <p className="text-sm md:text-base text-[#C9A66B]/80 leading-relaxed font-light" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {day.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
