import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function WhyLucidLifeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const questions = [
    {
      question: "왜 그렇게 해왔을까요?",
      answer: "형식이 아닌, 의미를 복원합니다."
    },
    {
      question: "꼭 장례식장이어야 하나요?",
      answer: "원하는 곳에서, 원하는 방식으로."
    },
    {
      question: "보낸 후, 당신은요?",
      answer: "이별 후에도, 곁에 있습니다."
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
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Why Lucid Life?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {questions.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-relaxed">
                {item.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
