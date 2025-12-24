import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Clock, Heart, Home } from "lucide-react";

export function ThreeDaysSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const days = [
    {
      day: "첫째 날",
      title: "마음의 준비",
      description: "고인을 모시고 가족이 마음을 정리하는 시간",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      activities: ["입관 의식", "조문 접수", "가족 시간"]
    },
    {
      day: "둘째 날",
      title: "추모와 나눔",
      description: "지인들과 함께 고인을 기리고 추억을 나누는 시간",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      activities: ["추도식", "조문 시간", "추억 나눔"]
    },
    {
      day: "셋째 날",
      title: "마지막 인사",
      description: "고인과의 마지막 인사와 영원한 안식처로의 배웅",
      icon: Clock,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      activities: ["발인식", "화장/매장", "봉안"]
    },
    {
      day: "그 이후",
      title: "새로운 시작",
      description: "이별 후 일상으로 돌아가는 과정을 함께 동행",
      icon: Home,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      activities: ["사후 관리", "추모 서비스", "심리 상담"]
    }
  ];
  
  return (
    <section id="threedays" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#2C2C2C] mb-4">
            사흘동안
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {days.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img 
                  src={day.image} 
                  alt={day.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {day.day}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                    <day.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">
                  {day.title}
                </h3>
                <p className="text-[#8B7355] leading-relaxed mb-4">
                  {day.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {day.activities.map((activity, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#D4AF37]/10 text-[#8B7355] px-3 py-1 rounded-full text-sm"
                    >
                      {activity}
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
