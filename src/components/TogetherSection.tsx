import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function TogetherSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const services = [
    {
      title: "가족장 · 무빈소",
      price: "150",
      unit: "만원~",
      feature: "조용히, 가족만",
      specs: [
        { label: "관", value: "일반관" },
        { label: "상복", value: "총 5벌" },
        { label: "의전", value: "—" }
      ]
    },
    {
      title: "실용장",
      price: "290",
      unit: "만원~",
      feature: "기본에 충실하게",
      specs: [
        { label: "관", value: "일반관" },
        { label: "상복", value: "각 5벌" },
        { label: "의전", value: "4명" }
      ]
    },
    {
      title: "표준장",
      price: "360",
      unit: "만원~",
      feature: "충분히, 정성껏",
      specs: [
        { label: "관", value: "일반관" },
        { label: "상복", value: "각 7벌" },
        { label: "의전", value: "6명" }
      ]
    },
    {
      title: "매장 · 미국식장",
      price: "450",
      unit: "만원~",
      feature: "마지막을 완벽하게",
      specs: [
        { label: "관", value: "고급관" },
        { label: "상복", value: "각 9벌" },
        { label: "의전", value: "8명" }
      ]
    }
  ];
  
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 mb-2 tracking-wider uppercase">LUCIDLIFE SERVICE</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            함께 하는 방식
          </h2>
          <p className="text-gray-600">부담 없이, 상황에 맞게.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.unit}</span>
                </div>
              </div>

              <p className="text-blue-600 text-sm mb-6 font-medium">
                "{service.feature}"
              </p>

              <div className="space-y-3 mb-6">
                {service.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="flex justify-between text-sm">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="text-gray-900 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                자세히 보기
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2">
            전체 상품 비교하기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}