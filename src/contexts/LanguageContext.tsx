import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 번역 데이터
const translations = {
  ko: {
    // Header
    'nav.about': '소개',
    'nav.services': '서비스',
    'nav.holistic': '전인적 케어',
    'nav.testimonials': '후기',
    'nav.contact': '연락처',
    'nav.support': '24시간 지원',
    
    // Hero Section
    'hero.title': '사후세계를 기리며',
    'hero.subtitle': '정성스럽게 준비된 장례 및 추모 서비스',
    'hero.cta.immediate': '즉시 도움 받기',
    'hero.cta.explore': '서비스 둘러보기',
    
    // About Section
    'about.badge': '우리에 대해',
    'about.title': '존경과 품위로 삶을 기리다',
    'about.description': '어려운 시기에 가족들에게 자비롭고 전문적인 지원을 제공하는 것이 우리의 사명입니다. 각 가족의 고유한 필요와 전통을 이해하며, 개인화된 서비스를 통해 사랑하는 이를 기릴 수 있도록 돕습니다.',
    'about.feature1.title': '24시간 지원',
    'about.feature1.desc': '언제든지 도움이 필요할 때',
    'about.feature2.title': '개인화된 서비스',
    'about.feature2.desc': '각 가족의 고유한 필요에 맞춤',
    'about.feature3.title': '전문적인 케어',
    'about.feature3.desc': '경험 많은 전문가들의 지원',
    
    // Services Section
    'services.badge': '우리의 서비스',
    'services.title': '포괄적인 장례 서비스',
    'services.description': '전통적인 장례식부터 현대적인 추모 서비스까지, 모든 가족의 필요를 충족시키는 다양한 옵션을 제공합니다.',
    
    // Contact Section
    'contact.badge': '연락하기',
    'contact.title': '언제든지 도와드립니다',
    'contact.description': '모든 단계에서 지원하기 위해 24시간 연중무휴로 운영됩니다',
    'contact.reach': '언제든지 연락하세요',
    'contact.available': '어려운 시기나 서비스에 대한 질문이 있을 때 언제든지 도움을 드리기 위해 자비로운 팀이 24시간 대기하고 있습니다.',
    'contact.phone': '24시간 헬프라인',
    'contact.email': '이메일',
    'contact.location': '위치',
    'contact.form.name': '성명 *',
    'contact.form.email': '이메일 주소 *',
    'contact.form.phone': '전화번호 *',
    'contact.form.message': '메시지',
    'contact.form.send': '메시지 보내기',
    
    // Footer
    'footer.tagline': '삶을 기리고, 사후세계를 존중하며',
    'footer.description': '어려운 시기에 가족들에게 자비롭고 전문적인 지원을 제공합니다.',
    'footer.quicklinks': '빠른 링크',
    'footer.services': '서비스',
    'footer.contact': '연락처 정보',
    'footer.rights': '모든 권리 보유.',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.holistic': 'Holistic Care',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.support': '24/7 Support',
    
    // Hero Section
    'hero.title': 'Honoring Afterlife',
    'hero.subtitle': 'Thoughtfully Curated Funeral & Memorial Services',
    'hero.cta.immediate': 'Get Immediate Assistance',
    'hero.cta.explore': 'Explore Services',
    
    // About Section
    'about.badge': 'About Us',
    'about.title': 'Honoring Lives with Respect and Dignity',
    'about.description': 'Our mission is to provide compassionate and professional support to families during their most difficult times. We understand that each family has unique needs and traditions, and we are committed to helping you honor your loved one with personalized services.',
    'about.feature1.title': '24/7 Support',
    'about.feature1.desc': 'Always here when you need us',
    'about.feature2.title': 'Personalized Service',
    'about.feature2.desc': 'Tailored to each family\'s unique needs',
    'about.feature3.title': 'Professional Care',
    'about.feature3.desc': 'Experienced professionals at your service',
    
    // Services Section
    'services.badge': 'Our Services',
    'services.title': 'Comprehensive Funeral Services',
    'services.description': 'From traditional funeral services to contemporary memorial options, we offer a range of services to meet every family\'s needs.',
    
    // Contact Section
    'contact.badge': 'Get In Touch',
    'contact.title': 'We\'re Here for You',
    'contact.description': 'Available 24/7 to support you through every step',
    'contact.reach': 'Reach Out Anytime',
    'contact.available': 'Our compassionate team is available around the clock to assist you with immediate needs or to answer any questions about our services.',
    'contact.phone': '24/7 Helpline',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.form.name': 'Full Name *',
    'contact.form.email': 'Email Address *',
    'contact.form.phone': 'Phone Number *',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    
    // Footer
    'footer.tagline': 'Celebrating Life, Honoring Afterlife',
    'footer.description': 'Providing compassionate and professional support to families during their most difficult times.',
    'footer.quicklinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko'); // 기본값을 한글로 설정

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ko']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
