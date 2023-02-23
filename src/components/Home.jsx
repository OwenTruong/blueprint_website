function Home() {
  return (
    <div className="h-screen">
      <section className="h-5/6 flex flex-col justify-center items-center content-center">
        <h1 className="text-6xl pb-10">Home Page</h1>
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
        <h1>Section Header 1</h1>
      </section>
      <section className="h-96">
        <h1>Section Header 2</h1>
      </section>
      <section className="h-96 bg-blue-100">
        <h1>Section Header 3</h1>
      </section>
      <section className="h-40 bg-blue-400">
        <h1>footer (this is not the correct blue)</h1>
      </section>
    </div>
  );
}

export default Home;
