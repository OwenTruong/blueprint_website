import "./Home.css";
import Hero from "./Hero";
import Blurb from "./Blurb";
import About from "./About";
import Projects from "./Projects";
import Apply from "../Apply";
import Footer from "../Common/Footer";

function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <Blurb />
      <About />
      <Projects />
      <h1 className="text-3xl md:text-5xl pt-40 text-black text-center font-bold ">
        Apply
      </h1>
      <Apply />
      <Footer />
    </div>
  );
}

export default Home;
