import { About } from "./components/(about)/about";
import { Counter } from "./components/(counter)/counter";
import { Hero } from "./components/(hero)/hero";
import { NavBar } from "./components/(navBar)/navBar";
import { Portfolio } from "./components/(portfolio)/portfolio";
import { Services } from "./components/(services)/services";
import "./page.css";

const HomeScreen = () => {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
    </div>
  );
};

export default HomeScreen;
