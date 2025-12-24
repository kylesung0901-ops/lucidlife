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
    'nav.lucidlife': '루시드라이프',
    'nav.together': '함께하는 방식',
    'nav.threedays': '사흘동안',
    'nav.restingplace': '마지막 안식처',
    'nav.stories': '이별 이야기',
    'nav.withus': '루시드와 함께',
    'nav.support': '24시간 지원',
    
    // Hero Section
    'hero.title': '모든 이별은 서툴기에,',
    'hero.subtitle': '누군가는 그 곁에 선다.',
    
    // Why Lucid Life
    'why.question1': '왜 그렇게 해왔을까요?',
    'why.answer1': '형식이 아닌, 의미를 복원합니다.',
    'why.question2': '꼭 장례식장이어야 하나요?',
    'why.answer2': '원하는 곳에서, 원하는 방식으로.',
    'why.question3': '보낸 후, 당신은요?',
    'why.answer3': '이별 후에도, 곁에 있습니다.',
    
    // CTA
    'cta.title': '루시드와 함께.',
    'cta.button': '사전등록',
    
    // About Section (이별동행케어)
    'about.badge': '이별동행케어',
    'about.title': '임종 전부터 이별 이후까지.',
    'about.subtitle': '한 사람의 전 과정을, 하나의 팀이 돌봅니다.',
    'about.phase1.title': '임종 전',
    'about.phase1.desc': '불안을 줄이는 준비',
    'about.phase2.title': '장례 중',
    'about.phase2.desc': '절차보다 사람',
    'about.phase3.title': '이별 이후',
    'about.phase3.desc': '일상으로 돌아가는 정리',
    
    // Services Section (세 가지 축)
    'services.badge': '세 가지 축',
    'services.axis1.title': '전통의 재해석',
    'services.axis1.subtitle': '고종황제 입관 의식을 재현한 격조.',
    'services.axis1.desc': '전통을 넘어, 의전으로.',
    'services.axis2.title': '시대의 요구',
    'services.axis2.subtitle': '국내 최초, 미국식 메모리얼 장례.',
    'services.axis2.desc': '장례식장이 아닌, 원하는 곳에서.',
    'services.axis3.title': '영혼의 보살핌',
    'services.axis3.subtitle': '죽음학과 심리상담을 통합한 의식 케어.',
    'services.axis3.desc': '이별 앞에서, 깨어 있도록.',
    
    // 우리가 다른 이유
    'difference.badge': '우리가 다른 이유',
    'difference.reason1.title': '하나의 책임선',
    'difference.reason1.desc': '임종 전·중·후, 끊기지 않습니다.',
    'difference.reason2.title': '설명의 최소화',
    'difference.reason2.desc': '필요한 시점에, 필요한 만큼만.',
    'difference.reason3.title': '감정의 존중',
    'difference.reason3.desc': '절차보다 사람의 상태를 먼저 봅니다.',
    
    // 대표 소개
    'ceo.name': '도원',
    'ceo.title': '루시드라이프 대표',
    'ceo.cert1': '국가공인 장례지도사',
    'ceo.cert2': '최면 상담 전문가',
    'ceo.current': '現 대한 장례지도사 연합회 사무국장',
    'ceo.prev1': '前 MBC마당놀이 국악관현악단 지휘자',
    'ceo.prev2': '前 프리드라이프 전국 1% 의전팀장',
    'ceo.quote': '"이별은 끝이 아니라, 한 사람을 기억하는 시작입니다."',
    
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
    'nav.lucidlife': 'LucidLife',
    'nav.together': 'Our Approach',
    'nav.threedays': 'Three Days',
    'nav.restingplace': 'Final Resting Place',
    'nav.stories': 'Farewell Stories',
    'nav.withus': 'With LucidLife',
    'nav.support': '24/7 Support',
    
    // Hero Section
    'hero.title': 'Every farewell is awkward,',
    'hero.subtitle': 'Someone stands by your side.',
    
    // Why Lucid Life
    'why.question1': 'Why have we done it that way?',
    'why.answer1': 'We restore meaning, not formality.',
    'why.question2': 'Does it have to be a funeral home?',
    'why.answer2': 'Where you want, how you want.',
    'why.question3': 'What about you after sending them off?',
    'why.answer3': 'Even after farewell, we remain by your side.',
    
    // CTA
    'cta.title': 'With LucidLife.',
    'cta.button': 'Pre-register',
    
    // About Section (Farewell Care)
    'about.badge': 'Farewell Care',
    'about.title': 'From before death to after farewell.',
    'about.subtitle': 'One team takes care of the entire process of one person.',
    'about.phase1.title': 'Before Death',
    'about.phase1.desc': 'Preparation to reduce anxiety',
    'about.phase2.title': 'During Funeral',
    'about.phase2.desc': 'People over procedures',
    'about.phase3.title': 'After Farewell',
    'about.phase3.desc': 'Organizing to return to daily life',
    
    // Services Section (Three Pillars)
    'services.badge': 'Three Pillars',
    'services.axis1.title': 'Reinterpretation of Tradition',
    'services.axis1.subtitle': 'The dignity of recreating Emperor Gojong\'s burial ceremony.',
    'services.axis1.desc': 'Beyond tradition, to protocol.',
    'services.axis2.title': 'Contemporary Needs',
    'services.axis2.subtitle': 'Korea\'s first American-style memorial funeral.',
    'services.axis2.desc': 'Not in a funeral hall, but where you want.',
    'services.axis3.title': 'Care for the Soul',
    'services.axis3.subtitle': 'Ritual care integrating thanatology and psychological counseling.',
    'services.axis3.desc': 'To stay awake in the face of farewell.',
    
    // Our Difference
    'difference.badge': 'Our Difference',
    'difference.reason1.title': 'One Line of Responsibility',
    'difference.reason1.desc': 'Before, during, and after death - uninterrupted.',
    'difference.reason2.title': 'Minimal Explanation',
    'difference.reason2.desc': 'Only what\'s needed, when it\'s needed.',
    'difference.reason3.title': 'Respect for Emotions',
    'difference.reason3.desc': 'We see the person\'s state before procedures.',
    
    // CEO Introduction
    'ceo.name': 'Dowon',
    'ceo.title': 'LucidLife CEO',
    'ceo.cert1': 'Certified National Funeral Director',
    'ceo.cert2': 'Hypnotherapy Counseling Specialist',
    'ceo.current': 'Current Secretary General of Korea Funeral Directors Association',
    'ceo.prev1': 'Former Conductor of MBC Madangnori Korean Traditional Orchestra',
    'ceo.prev2': 'Former Top 1% Protocol Team Leader at FreeLife',
    'ceo.quote': '"Farewell is not the end, but the beginning of remembering a person."',
    
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
