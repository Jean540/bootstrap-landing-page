"use client";
import { useEffect } from "react";
import { About } from "./components/(about)/about";
import { Blog } from "./components/(blog)/blog";
import { Counter } from "./components/(counter)/counter";
import { Footer } from "./components/(footer)/footer";
import { Hero } from "./components/(hero)/hero";
import { NavBar } from "./components/(navBar)/navBar";
import { Portfolio } from "./components/(portfolio)/portfolio";
import { Review } from "./components/(review)/review";
import { Services } from "./components/(services)/services";
import { Team } from "./components/(team)/team";
import { Contact } from "./components/contact/contact";
import "./page.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const HomeScreen = () => {
  useEffect(() => {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div data-bs-spy="scroll" data-bs-target=".navbar" className="">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Review />
      <Team />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomeScreen;
