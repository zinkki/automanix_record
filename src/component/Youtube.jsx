import { FaRegPlayCircle } from 'react-icons/fa';

export default function Youtube() {
  return (
    <section className="bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading-po" data-aos="fade-right" data-aos-delay="200">유튜브 바로가기</h2>
          <h3 className="section-subheading-subpo" data-aos="fade-right" data-aos-delay="400">
            라이브를 통해 도전하고 있는 참가자를 확인해 보세요!
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 mb-12" data-aos="flip-up" data-aos-delay="600">
            <div className="portfolio-item-youtube">
              <a className="portfolio-link-youtube" href="https://www.youtube.com/@HyundaiNFestival">
                <div className="portfolio-hover-youtube col-lg-12">
                  <div className="portfolio-hover-content icon"><FaRegPlayCircle></FaRegPlayCircle></div>
                </div>
                <img
                  className="img-fluid"
                  src={require("../asset/img/img-example.jpg")}
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
	)
}