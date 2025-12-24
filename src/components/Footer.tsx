import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-primary">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="footer-widget-about">
                <img 
                  src="/lucidlife-logo.png" 
                  alt="LucidLife 루시드라이프" 
                  className="mb-30"
                  style={{ height: '50px', width: 'auto' }}
                />
                <p className="color-gray">
                  서툰 이별 앞에, 함께 서 있는 곳입니다. 임종 전부터 이별 이후까지, 한 사람의 전 과정을 하나의 팀이 돌봅니다.
                </p>
                <a href="#contact" className="btn btn__primary btn__primary-style2 btn__link">
                  <span>상담 신청</span> <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2 offset-lg-1">
              <div className="footer-widget-nav">
                <h6 className="footer-widget__title">서비스</h6>
                <nav>
                  <ul className="list-unstyled">
                    <li><a href="#together">함께하는 방식</a></li>
                    <li><a href="#process">사흘동안</a></li>
                    <li><a href="#space">마지막 안식처</a></li>
                    <li><a href="#stories">이별 이야기</a></li>
                    <li><a href="#continuum">이별동행케어</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
              <div className="footer-widget-nav">
                <h6 className="footer-widget__title">링크</h6>
                <nav>
                  <ul className="list-unstyled">
                    <li><a href="#hero">루시드라이프</a></li>
                    <li><a href="#together">함께하는 방식</a></li>
                    <li><a href="#process">사흘동안</a></li>
                    <li><a href="#contact">연락하기</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-widget-contact">
                <h6 className="footer-widget__title color-heading">연락처</h6>
                <ul className="contact-list list-unstyled">
                  <li>궁금한 점이 있으신가요? 언제든지 편하게 문의해주세요.</li>
                  <li>
                    <a href="tel:010-2116-4114" className="phone__number">
                      <i className="icon-phone"></i> <span>010-2116-4114</span>
                    </a>
                  </li>
                  <li className="color-body">경기도 파주시 교하로 100, 908-102</li>
                </ul>
                <div className="d-flex align-items-center">
                  <a href="#contact" className="btn btn__primary btn__link mr-30">
                    <i className="icon-arrow-right"></i> <span>상담 신청</span>
                  </a>
                  <ul className="social-icons list-unstyled mb-0">
                    <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-secondary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <span className="fz-14">&copy; 2025 Lucid Life, All Rights Reserved.</span>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <nav>
                <ul className="list-unstyled footer__copyright-links d-flex flex-wrap justify-content-end mb-0">
                  <li><a href="#contact">연락처</a></li>
                  <li><a href="#together">서비스</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <button id="scrollTopBtn"><i className="fas fa-long-arrow-alt-up"></i></button>
    </footer>
  );
}
