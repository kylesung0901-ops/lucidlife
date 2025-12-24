import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Clock, Heart, Home } from "lucide-react";

export function ContinuumCareSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const timeline = [
    {
      phase: "임종 전",
      title: "서로가 아직 전하지 못한 것이 남아 있을 때",
      icon: Clock,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      phase: "장례 중",
      title: "고인이 되심에 조문과 입관의 작별의 시간",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      phase: "이별 이후",
      title: "탈상, 제사, 천도제를 지나며 다시 일상으로 돌아갈 때",
      icon: Home,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    }
  ];
  
  return (
    <section id="continuum" ref={ref} className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#141C2E]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-base md:text-lg text-[#C9A66B] font-light mb-3 md:mb-4" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Continuum Care
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F5F1E6] mb-4 md:mb-8" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            절차가 아니라, 의식으로.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#F5F1E6]/80 leading-relaxed max-w-4xl mx-auto font-light px-4" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            장례는 3일로 끝나지 않습니다. 생전부터 장례 이후까지, 한 사람을 기억하는 전 과정을 함께합니다.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#1A2538] rounded-2xl overflow-hidden border border-[#C9A66B]/20 hover:border-[#C9A66B]/40 transition-all duration-300"
            >
              <div className="relative h-40 sm:h-48">
                <img 
                  src={item.image} 
                  alt={item.phase}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1421]/80 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#C9A66B] text-[#0D1421] px-3 py-1 rounded-full text-sm font-light">
                    {item.phase}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-[#C9A66B]/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <item.icon className="text-[#C9A66B]" size={24} />
                  </div>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <p className="text-sm md:text-base text-[#F5F1E6]/80 leading-relaxed font-light" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-sm md:text-base text-[#C9A66B] hover:text-[#F5F1E6] transition-colors font-light underline"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            이별은 하루로 끝나지 않습니다 &gt;
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
