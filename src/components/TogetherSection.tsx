import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function TogetherSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const approaches = [
    {
      title: "가족장 · 무빈소",
      feature: "조용히, 가족만",
      description: "조용히, 가장 가까운 사람들만 남아 이별에 집중하는 시간.",
      icon: "icon-heart"
    },
    {
      title: "실용장",
      feature: "기본에 충실하게",
      description: "불필요한 부담은 덜고, 장례의 기본은 놓치지 않은 현실적인 선택.",
      icon: "icon-medicine"
    },
    {
      title: "표준장",
      feature: "충분히, 정성껏",
      description: "가장 많은 이들이 선택한, 균형과 품위를 갖춘 기본 장례.",
      icon: "icon-heart2"
    },
    {
      title: "매장 · 미국식장",
      feature: "마지막을 완벽하게",
      description: "한 사람의 삶을 중심에 두고 설계하는 맞춤형 추모 의식.",
      icon: "icon-blood-test"
    }
  ];
  
  return (
    <section id="together" ref={ref} className="services-layout1 services-carousel">
      <div className="bg-img">
        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-60">
              <h2 className="heading__subtitle">부담 없이, 상황에 맞게</h2>
              <h3 className="heading__title">함께하는 방식</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="slick-carousel"
              data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "autoplay": true, "arrows": false, "dots": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 1}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'>
              {approaches.map((approach, index) => (
                <div key={approach.title} className="service-item">
                  <div className="service__icon">
                    <i className={approach.icon}></i>
                    <i className={approach.icon}></i>
                  </div>
                  <div className="service__content">
                    <h4 className="service__title">{approach.title}</h4>
                    <p className="service__desc">{approach.description}</p>
                    <ul className="list-items list-items-layout1 list-unstyled">
                      <li>{approach.feature}</li>
                    </ul>
                    <a href="#contact" className="btn btn__secondary btn__outlined btn__rounded">
                      <span>자세히 보기</span>
                      <i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-30">
            <a href="#contact" className="btn btn__primary btn__rounded">
              <span>전체 상품 비교하기</span>
              <i className="icon-arrow-right"></i>
            </a>
            <div className="mt-20">
              <a href="#" className="btn btn__secondary btn__link btn__rounded">
                <span>미국식 장례 알아보기</span>
                <i className="icon-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
