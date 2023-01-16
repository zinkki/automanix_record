export default function Product() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading-po" data-aos="fade-right" data-aos-delay="200">상품</h2>
          <h3 className="section-subheading-subpo" data-aos="fade-right" data-aos-delay="400">
            현대 N만의 특별한 상품을 드립니다!
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4" data-aos="fade-right" data-aos-delay="600">
            <div className="portfolio-item">
              <a className="portfolio-link" href="#blank01">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img
                  className="img-fluid"
                  src={require("../asset/img/img-gift-01.png")}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">N 세차 용품 세트</div>
                <div className="portfolio-caption-subheading text-muted">
                  데일리 베스트 드라이버 상품
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4" data-aos="fade-right" data-aos-delay="800">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#blank02">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img
                  className="img-fluid"
                  src={require("../asset/img/img-gift-02.png")}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  현대N x 펠리칸 케이스 3종세트
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  최종 결승 1위 상품
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4" data-aos="fade-right" data-aos-delay="1000">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#blank03">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={require("../asset/img/img-gift-03.png")}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">핀뱃지</div>
                <div className="portfolio-caption-subheading text-muted">
                  참가상
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="section-subheading-tiny">
            *참가경품 및 데일리 베스트 드라이버 경품은 중복수령 불가
          </h3>
        </div>
      </div>
    </section>
  );
}
