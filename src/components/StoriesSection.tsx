import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Calendar, User } from "lucide-react";

export function StoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stories = [
    {
      title: "함께 견뎌낸 이야기들",
      description: "한 사람의 마지막을 함께 지나온 기록",
      isCompleted: true
    },
    {
      title: "서툰 작별을 위한 안내서",
      description: "알아두면 흔들리지 않는 최소한의 문법",
      isCompleted: true
    },
    {
      title: "사유하는 이별의 농도",
      description: "삶과 죽음 사이에서 길어 올린 생각들",
      isCompleted: true
    }
  ];
  
  return (
    <section id="stories" ref={ref} className="py-24 px-6 bg-[#0D1421]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#F5F1E6] mb-4" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            이별 이야기
          </h2>
        </motion.div>
        
        <div className="max-w-2xl mx-auto space-y-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-[#1A2538] rounded-2xl border border-[#C9A66B]/20 hover:border-[#C9A66B]/40 transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-[#C9A66B] rounded-full flex items-center justify-center">
                  <span className="text-[#0D1421] text-sm">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#F5F1E6] mb-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {story.title}
                </h3>
                <p className="text-[#C9A66B]/80 leading-relaxed font-light" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {story.description}
                </p>
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
            className="border-2 border-[#C9A66B] text-[#C9A66B] px-8 py-3 rounded-full hover:bg-[#C9A66B] hover:text-[#0D1421] transition-all"
          >
            더 많은 이야기 보기
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
