import Hero from "./Hero";

function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <section className="h-96 bg-blue-100">
        <h1>Mission, Values...</h1>
      </section>
      <section className="h-96">
        <h1>How it works</h1>
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
