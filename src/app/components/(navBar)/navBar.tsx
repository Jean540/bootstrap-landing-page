import { useEffect, useState } from "react";
import "./navBar.css";

type NavLink = {
  title: string;
  path: string;
};

export const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [size, setSize] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    //  este if serve para evitar o seguinte erro: "window is not defined" que geralmente ocorre quando você está tentando acessar o objeto window em um ambiente de servidor, como Node.js
    if (typeof window !== "undefined") {
      const onResize = () => setSize(window.innerWidth);

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }
  }, []);

  useEffect(() => {
    if (size >= 991) {
      setNavBarOpen(false);
    }
  }, [size]);

  const navLinks: NavLink[] = [
    { title: "Home", path: "#hero" },
    { title: "About", path: "#about" },
    { title: "Services", path: "#services" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Review", path: "#reviews" },
    { title: "Team", path: "#team" },
    { title: "Contact", path: "#contact" },
    { title: "Blog", path: "#blog" },
    { title: "Download", path: "#" },
  ];

  useEffect(() => {}, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/images/logo-dark.svg" alt="Website logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavBarOpen(!navBarOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link, key) => (
              <li key={key} className="nav-item">
                <a
                  className={
                    link.title != "Download"
                      ? "nav-link"
                      : "btn btn-brand ms-lg-3"
                  }
                  href={link.path}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen && (
        <div className="container menu ">
          <ul className="navbar-nav">
            {navLinks.map((link, key) => (
              <li
                key={key}
                className="nav-item"
                onClick={() => setNavBarOpen(false)}
              >
                <a className="nav-link" href={link.path}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
