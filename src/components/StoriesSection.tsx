import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Calendar, User } from "lucide-react";

export function StoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stories = [
    {
      title: "아버지의 마지막 선물",
      excerpt: "90세 아버지가 남기신 마지막 메시지와 가족들의 특별한 추모 이야기",
      author: "김○○ 가족",
      date: "2024.12.15",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      link: "#"
    },
    {
      title: "집에서 보낸 마지막 시간",
      excerpt: "병원이 아닌 집에서 가족과 함께한 할머니의 평안한 마지막 순간들",
      author: "박○○ 가족",
      date: "2024.12.10",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      link: "#"
    },
    {
      title: "바다가 보이는 곳에서",
      excerpt: "평생 바다를 사랑했던 어머니를 위한 특별한 추모식 이야기",
      author: "이○○ 가족",
      date: "2024.12.05",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      link: "#"
    }
  ];
  
  return (
    <section id="stories" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#2C2C2C] mb-4">
            이별 이야기
          </h2>
          <p className="text-[#8B7355] text-lg">
            함께한 가족들의 소중한 이야기를 나눕니다
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => window.open(story.link, '_blank')}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink className="text-white" size={16} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#2C2C2C] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {story.title}
                </h3>
                <p className="text-[#8B7355] leading-relaxed mb-4 text-sm">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-[#999999]">
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    <span>{story.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{story.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full hover:bg-[#D4AF37] hover:text-white transition-all"
          >
            더 많은 이야기 보기
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
