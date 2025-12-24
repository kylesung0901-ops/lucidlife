import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart, Users, Shield, Star } from "lucide-react";

export function TogetherSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const approaches = [
    {
      icon: Heart,
      title: "마음을 담은 의식",
      description: "형식보다 의미를 중시하는 맞춤형 의식 설계",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      icon: Users,
      title: "가족 중심 케어",
      description: "가족의 상황과 요구에 맞춘 개별적 접근",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      icon: Shield,
      title: "전문가 동행",
      description: "경험 많은 전문가가 처음부터 끝까지 함께",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      icon: Star,
      title: "품격 있는 공간",
      description: "5성급 호텔 수준의 편안하고 품격 있는 환경",
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
          <h2 className="text-3xl md:text-4xl font-light text-[#2C2C2C] mb-4">
            함께하는 방식
          </h2>
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
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mb-3">
                    <approach.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">
                  {approach.title}
                </h3>
                <p className="text-[#8B7355] leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
