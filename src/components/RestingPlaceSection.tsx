import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mountain, Waves, TreePine, Building } from "lucide-react";

export function RestingPlaceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const places = [
    {
      title: "자연 안식처",
      description: "푸른 자연 속에서 영원한 평안을 누리는 곳",
      icon: TreePine,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      features: ["자연장", "수목장", "산림형 납골당"]
    },
    {
      title: "전통 봉안당",
      description: "전통적인 방식으로 정성스럽게 모시는 공간",
      icon: Building,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      features: ["실내 봉안당", "가족 봉안실", "추모 공간"]
    },
    {
      title: "바다 전망",
      description: "넓은 바다를 바라보며 영원한 휴식을 취하는 곳",
      icon: Waves,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      features: ["해안가 납골당", "바다 조망", "산책로"]
    },
    {
      title: "도심 접근성",
      description: "가족들이 쉽게 찾아뵐 수 있는 도심 속 안식처",
      icon: Mountain,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      features: ["도심 납골당", "교통 편의", "주차 시설"]
    }
  ];
  
  return (
    <section id="restingplace" ref={ref} className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#2C2C2C] mb-4">
            마지막 안식처
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {places.map((place, index) => (
            <motion.div
              key={place.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img 
                  src={place.image} 
                  alt={place.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mb-3">
                    <place.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">
                  {place.title}
                </h3>
                <p className="text-[#8B7355] leading-relaxed mb-4">
                  {place.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {place.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#D4AF37]/10 text-[#8B7355] px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
