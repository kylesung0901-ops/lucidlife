import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="slider">
      <div className="slick-carousel m-slides-0"
        data-slick='{"slidesToShow": 1, "arrows": true, "dots": false, "speed": 700,"fade": true,"cssEase": "linear"}'>
        <div className="slide-item align-v-h">
          <div className="bg-img">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
              alt="slide img"
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div className="slide__content">
                  <h2 className="slide__title">모든 이별은 서툴기에<br />누군가는 그 곁에 선다</h2>
                  <p className="slide__desc">
                    말하지 않아도 되는 시간을 함께 견딥니다. 서툰 이별 앞에, 함께 서 있는 곳입니다.
                  </p>
                  <ul className="features-list list-unstyled mb-0 d-flex flex-wrap">
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-heart"></i>
                      </div>
                      <h2 className="feature__title">이별동행케어</h2>
                    </li>
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-medicine"></i>
                      </div>
                      <h2 className="feature__title">전문 상담</h2>
                    </li>
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-heart2"></i>
                      </div>
                      <h2 className="feature__title">24시간 지원</h2>
                    </li>
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-blood-test"></i>
                      </div>
                      <h2 className="feature__title">맞춤형 서비스</h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
