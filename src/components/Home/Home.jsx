import "./Home.css";
import Hero from "./Sections/Hero";
import Blurb from "./Sections/Blurb";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Apply from "../Apply";

function Home() {
  return (
    <div>
      <Hero />
      <Blurb />
      <About />
      <Projects />
      <h1 className="text-3xl md:text-5xl pt-40 text-black text-center font-bold ">
        Apply
      </h1>
      <Apply />
    </div>
  );
}

export default Home;
