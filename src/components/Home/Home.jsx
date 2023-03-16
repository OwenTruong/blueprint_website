import "./Home.css";
import Hero from "./Hero";
import Blurb from "./Blurb";
import About from "./About";
import Projects from "./Projects";
import Footer from "../Common/Footer";

function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <Blurb />
      <About />
      <Projects />
      <section className="h-96 bg-blue-100">
        <h1>Apply?</h1>
      </section>
      <section className="h-40 bg-blue-400">
        <h1>footer (this is not the correct blue)</h1>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
