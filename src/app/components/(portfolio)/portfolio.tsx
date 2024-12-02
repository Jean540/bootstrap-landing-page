"use client";
import Fancybox from "../fancybox";
import "./portfolio.css";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title">
              <h1 className="display-4 fw-semibold">Our Portfolio</h1>
              <div className="line"></div>
              <p>
                We love to craft digital experiances for brands rather than crap
                and more lorem ipusums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className="row">
            <div className="col-md-4">
              <div className="portfolio-item image-zoom mt-4">
                <div className="image-zoom-wrapper">
                  <img src="/images/project-6.jpg" className="" />
                  <a
                    href="/images/project-6.jpg"
                    className="iconBox"
                    data-fancybox="gallery"
                  >
                    <i className="ri-search-2-line "></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="portfolio-item image-zoom mt-4 ">
                <div className="image-zoom-wrapper">
                  <img src="/images/project-2.jpg" />
                  <a
                    href="/images/project-2.jpg"
                    className="iconBox"
                    data-fancybox="gallery"
                  >
                    <i className="ri-search-2-line "></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="portfolio-item image-zoom mt-4">
                <div className="image-zoom-wrapper">
                  <img src="/images/project-3.jpg" />
                  <a
                    href="/images/project-3.jpg"
                    className="iconBox"
                    data-fancybox="gallery"
                  >
                    <i className="ri-search-2-line "></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="portfolio-item image-zoom mt-4">
                <div className="image-zoom-wrapper">
                  <img src="/images/project-4.jpg" />
                  <a
                    href="/images/project-4.jpg"
                    className="iconBox"
                    data-fancybox="gallery"
                  >
                    <i className="ri-search-2-line "></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="portfolio-item image-zoom mt-4">
                <div className="image-zoom-wrapper">
                  <img src="/images/project-5.jpg" />
                  <a
                    href="/images/project-5.jpg"
                    className="iconBox"
                    data-fancybox="gallery"
                  >
                    <i className="ri-search-2-line "></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="portfolio-item image-zoom mt-4">
                <div className="image-zoom-wrapper">
                  <img src="/images/project-1.jpg" />
                  <a
                    href="/images/project-1.jpg"
                    className="iconBox"
                    data-fancybox="gallery"
                  >
                    <i className="ri-search-2-line "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fancybox>
      </div>
    </section>
  );
};
