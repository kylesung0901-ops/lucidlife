import { motion } from "motion/react";
import { Phone, Calendar, Clock } from "lucide-react";

export function ContactInfoBar() {
  return (
    <section className="contact-info py-0">
      <div className="container">
        <div className="row row-no-gutter boxes-wrapper">
          <div className="col-sm-12 col-md-4">
            <div className="contact-box d-flex">
              <div className="contact__icon">
                <i className="icon-call3"></i>
              </div>
              <div className="contact__content">
                <h2 className="contact__title">긴급 상담</h2>
                <p className="contact__desc">
                  언제든지 편하게 문의해주세요. 루시드라이프 팀이 신속하게 답변해 드리겠습니다.
                </p>
                <a href="tel:010-2116-4114" className="phone__number">
                  <i className="icon-phone"></i> <span>010-2116-4114</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="contact-box d-flex">
              <div className="contact__icon">
                <i className="icon-health-report"></i>
              </div>
              <div className="contact__content">
                <h2 className="contact__title">상담 신청</h2>
                <p className="contact__desc">
                  전문 상담사가 24시간 대기하고 있습니다. 언제든지 상담 신청을 해주세요.
                </p>
                <a href="#contact" className="btn btn__white btn__outlined btn__rounded">
                  <span>상담 신청하기</span><i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="contact-box d-flex">
              <div className="contact__icon">
                <i className="icon-heart2"></i>
              </div>
              <div className="contact__content">
                <h2 className="contact__title">운영 시간</h2>
                <ul className="time__list list-unstyled mb-0">
                  <li><span>월요일 - 금요일</span><span>24시간</span></li>
                  <li><span>토요일</span><span>24시간</span></li>
                  <li><span>일요일</span><span>24시간</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

