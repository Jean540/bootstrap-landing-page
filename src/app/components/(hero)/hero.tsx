import "./hero.css";
export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-vh-100 d-flex align-items-center text-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1
              data-aos="fade-left"
              className="text-uppercase text-white fw-semibold display-1"
            >
              Welcome to elixir
            </h1>
            <h5 className="text-white mt-3 mb-4 " data-aos="fade-right">
              WE ARE TEAM OF TALENTED DESIGNERS MAKING WEBSITES WITH BOOTSTRAP
            </h5>
            <div data-aos="fade-up" data-aos-deley="50">
              <a href="#" className="btn btn-brand me-2">
                Get Started
              </a>
              <a href="#" className="btn btn-light ms-2">
                Out Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
