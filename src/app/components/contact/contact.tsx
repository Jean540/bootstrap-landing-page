import "./contact.css";
export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="section-title">
              <h1 className="display-4 text-white fw-semibold">Get in touch</h1>
              <div className="line bg-white"></div>
              <p className="text-white">
                We love to craft digital experiances for brands rather than crap
                and more lorem ipusums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          data-aos="fade-down"
          data-aos-delay="250"
        >
          <div className="col-lg-8">
            <form
              action="#"
              className="row g-3 p-lg-5 p-4 bg-white theme-shadow"
            >
              <div className="form-group col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter first name"
                />
              </div>
              <div className="form-group col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                />
              </div>
              <div className="form-group col-lg-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email address"
                />
              </div>
              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                />
              </div>
              <div className="form-group col-lg-12">
                <textarea
                  name="message"
                  rows={5}
                  className="form-control"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="form-group col-lg-12 d-grid">
                <button className="btn btn-brand ">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
