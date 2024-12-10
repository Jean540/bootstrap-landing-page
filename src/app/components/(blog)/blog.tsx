export const Blog = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="section-title">
              <h1 className="display-4 fw-semibold">Recent News & Articles</h1>
              <div className="line"></div>
              <p className="">
                We love to craft digital experiances for brands rather than crap
                and more lorem ipusums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" data-aos="fade-down" data-aos-delay="150">
            <div className="team-member image-zoom">
              <div className="image-zoom-wrapper">
                <img src="./images/blog-post-1.jpg" alt="" />
              </div>
              <h5 className="mt-4">Web Design 2022</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                dolores sint cum.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-down" data-aos-delay="250">
            <div className="team-member image-zoom">
              <div className="image-zoom-wrapper">
                <img src="./images/blog-post-2.jpg" alt="" />
              </div>
              <h5 className="mt-4">Web Design 2022</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                dolores sint cum.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-down" data-aos-delay="350">
            <div className="team-member image-zoom">
              <div className="image-zoom-wrapper">
                <img src="./images/blog-post-3.jpg" alt="" />
              </div>
              <h5 className="mt-4">Web Design 2022</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                dolores sint cum.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
