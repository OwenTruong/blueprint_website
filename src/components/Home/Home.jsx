import "./Home.css";
import Hero from "./Hero";
import Who from "./Who";

function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <Who />
      <section className="relative h-fit bg-negative border-none">
        <div className="curve">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill-curve"
            />
          </svg>
        </div>
        <div className="pt-32 pb-16">
          <h1 className="text-center text-6xl">How it works</h1>
          <p className="text-center px-28">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quasi
            magnam voluptatem porro in quae quaerat! Natus, impedit dolore assumenda omnis
            incidunt quia cumque distinctio nobis! Impedit vel id veritatis?
          </p>
        </div>
      </section>
      <section className="h-96 bg-blue-100">
        <h1>Apply?</h1>
      </section>
      <section className="h-40 bg-blue-400">
        <h1>footer (this is not the correct blue)</h1>
      </section>
    </div>
  );
}

export default Home;
