import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="dropdown lang-dropdown">
      <button 
        className="dropdown-toggle lang-dropdown-toggle" 
        id="langDropdown" 
        data-toggle="dropdown"
        onClick={(e) => {
          e.preventDefault();
          setLanguage(language === 'ko' ? 'en' : 'ko');
        }}
      >
        <span>{language === 'ko' ? '한국어' : 'English'}</span>
      </button>
      <div className="dropdown-menu" aria-labelledby="langDropdown">
        <a 
          className="dropdown-item" 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setLanguage('ko');
          }}
        >
          <span>한국어</span>
        </a>
        <a 
          className="dropdown-item" 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setLanguage('en');
          }}
        >
          <span>English</span>
        </a>
      </div>
    </div>
  );
}
