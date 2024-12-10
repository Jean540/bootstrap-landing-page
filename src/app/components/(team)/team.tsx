import "./team.css";
export const Team = () => {
  return (
    <section id="team" className="section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="section-title">
              <h1 className="display-4 fw-semibold">Team Members</h1>
              <div className="line"></div>
              <p>
                We love to craft digital experiances for brands rather than crap
                and more lorem ipusums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 text-center">
          <div className="col-md-4" data-aos="fade-down" data-aos-delay="150">
            <div className="team-member image-zoom">
              <div className="image-zoom-wrapper">
                <img src="./images/person-1.jpg" alt="" />
              </div>
              <div className="team-member-content">
                <h4 className="text-white">Jon Doe</h4>
                <p className="mb-0 text-white">Webflow Artist</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-down" data-aos-delay="250">
            <div className="team-member image-zoom">
              <div className="image-zoom-wrapper">
                <img src="./images/person-2.jpg" alt="" />
              </div>
              <div className="team-member-content">
                <h4 className="text-white">Jon Doe</h4>
                <p className="mb-0 text-white">Webflow Artist</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-down" data-aos-delay="350">
            <div className="team-member image-zoom">
              <div className="image-zoom-wrapper">
                <img src="./images/person-3.jpg" alt="" />
              </div>
              <div className="team-member-content">
                <h4 className="text-white">Jon Doe</h4>
                <p className="mb-0 text-white">Webflow Artist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
