import logo from "../assets/logo_banner.png";

function Home() {
  return (
    <div className="h-screen">
      <section className="h-5/6 flex flex-col justify-center items-center content-center">
        <img src={logo} className="max-w-md" alt="Blueprint Logo" />
        <h2 className="text-2xl pb-6">Technology for Social Good</h2>
        <div>
          <button
            type="button"
            className="px-4 py-2 text-lg bg-blue-700 font-semibold rounded-full border text-white hover:text-black hover:bg-neutral-400"
          >
            Help us get started
          </button>
        </div>
      </section>
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
