import "./Home.css";
import Hero from "./Sections/Hero";
import Blurb from "./Sections/Blurb";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Apply from "./Sections/Apply";

function Home() {
  return (
    <div>
      <Hero />
      <Blurb />
      <About />
      <Projects />
      <Apply />
    </div>
  );
}

export default Home;
