import "./Home.css";
import Hero from "./Hero";
import About from "./About";
import How from "./How";
import Footer from "../Common/Footer";

function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <About />
      <How />
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
