import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function ThreeDaysSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const process = [
    {
      day: "1",
      title: "첫째 날",
      subtitle: "임종과 준비",
      description: "24시간 긴급 출동 염습과 입관 장례 계획 수립"
    },
    {
      day: "2", 
      title: "둘째 날",
      subtitle: "추모와 의식",
      description: "조문 공간 운영 심리 상담 지원 추모 영상 상영"
    },
    {
      day: "3",
      title: "셋째 날", 
      subtitle: "발인과 안치",
      description: "발인 의식 장지 이동 안치 후 정리"
    },
    {
      day: "4",
      title: "그 이후",
      subtitle: "이별 후 동행", 
      description: "49재 안내 심리 케어 일상 복귀 지원"
    }
  ];
  
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            사흘동안
          </h2>
          <p className="text-gray-600">장례의 3일, 한 챕터씩 함께 걷습니다</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {process.map((step, index) => (
            <motion.div
              key={step.day}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.day}
                </div>
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}