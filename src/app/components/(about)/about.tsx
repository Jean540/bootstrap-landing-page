import Image from "next/image";

import AboutImg from "../../../../public/images/about.jpg";
import "./about.css";

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            <div className="section-title">
              <h1 className="display-4 fw-semibold">About us</h1>
              <div className="line"></div>
              <p>
                We love to craft digital experiances for brands rather than crap
                and more lorem ipusums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6" data-aos="fade-down" data-aos-delay="50">
            <Image src={AboutImg} alt="About Image" />
          </div>
          <div className="col-lg-5" data-aos="fade-down" data-aos-delay="150">
            <h1 className="">About Elixir</h1>
            <p className="mt-3 mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="d-flex pt-4 mb-3">
              <div className="iconBox me-4">
                <i className="ri-mail-send-fill"></i>
              </div>
              <div className="">
                <h5>We are Awesome</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  vitae optio doloremque?
                </p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="iconBox me-4">
                <i className="ri-user-5-fill"></i>
              </div>
              <div className="">
                <h5>We are Awesome</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  vitae optio doloremque?
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="iconBox me-4">
                <i className="ri-rocket-2-fill"></i>
              </div>
              <div className="">
                <h5>We are Awesome</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  vitae optio doloremque?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
