import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const credentials = [
    "국가공인 장례지도사",
    "최면 상담 전문가", 
    "現 대한 장례지도사 연합회 사무국장",
    "前 MBC마당놀이 국악관현악단 지휘자",
    "前 프리드라이프 전국 1% 의전팀장"
  ];
  
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* 텍스트 영역 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                도원
              </h2>
              <p className="text-gray-600">루시드라이프 대표</p>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic mb-8 leading-relaxed">
              "이별은 끝이 아니라, 한 사람을 기억하는 시작입니다."
            </blockquote>

            <ul className="space-y-3">
              {credentials.map((credential, index) => (
                <motion.li
                  key={credential}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span>{credential}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 이미지 영역 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                alt="도원 대표"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}