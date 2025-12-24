import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "루시드라이프", href: "#hero" },
    { label: "함께하는 방식", href: "#together" },
    { label: "사흘동안", href: "#process" },
    { label: "마지막 안식처", href: "#space" },
    { label: "이별 이야기", href: "#stories" },
    { label: "이별동행케어", href: "#continuum" }
  ];

  return (
    <header className="header header-layout1">
        <nav className="navbar navbar-expand-lg sticky-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#hero">
              <img 
                src="/lucidlife-logo.png" 
                className="logo-light" 
                alt="LucidLife 루시드라이프"
                style={{ height: '50px', width: 'auto' }}
              />
              <img 
                src="/lucidlife-logo.png" 
                className="logo-dark" 
                alt="LucidLife 루시드라이프"
                style={{ height: '50px', width: 'auto' }}
              />
            </a>
            <button 
              className={`navbar-toggler ${isMenuOpen ? 'actived' : ''}`}
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="menu-lines"><span></span></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="mainNavigation">
              <ul className="navbar-nav ml-auto">
                {navItems.map((item) => (
                  <li key={item.href} className="nav__item">
                    <a 
                      href={item.href} 
                      className="nav__item-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <button 
                className="close-mobile-menu d-block d-lg-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="d-none d-xl-flex align-items-center position-relative ml-30">
              <a 
                href="#contact" 
                className="btn btn__primary btn__rounded ml-30"
              >
                <i className="icon-calendar"></i>
                <span>상담 신청</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
  );
}
