import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#F8F6F0] to-[#FFFFFF]">
      {/* Luxury Hotel Lounge Background */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200)`
        }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <img 
              src="/lucidlife-logo.png" 
              alt="LucidLife Logo" 
              className="h-32 w-auto mx-auto mb-8"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-light text-[#2C2C2C] leading-tight">
              {t('hero.title')}
            </h1>
            <h2 className="text-2xl md:text-4xl font-medium text-[#8B7355] leading-relaxed">
              {t('hero.subtitle')}
            </h2>
          </motion.div>
        </div>
        
        {/* Why Lucid Life Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-12">
            {/* Question 1 */}
            <div className="text-center space-y-4">
              <h3 className="text-lg font-medium text-[#2C2C2C]">
                {t('why.question1')}
              </h3>
              <p className="text-[#8B7355] leading-relaxed">
                {t('why.answer1')}
              </p>
            </div>
            
            {/* Question 2 */}
            <div className="text-center space-y-4">
              <h3 className="text-lg font-medium text-[#2C2C2C]">
                {t('why.question2')}
              </h3>
              <p className="text-[#8B7355] leading-relaxed">
                {t('why.answer2')}
              </p>
            </div>
            
            {/* Question 3 */}
            <div className="text-center space-y-4">
              <h3 className="text-lg font-medium text-[#2C2C2C]">
                {t('why.question3')}
              </h3>
              <p className="text-[#8B7355] leading-relaxed">
                {t('why.answer3')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}