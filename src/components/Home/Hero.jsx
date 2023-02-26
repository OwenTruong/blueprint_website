import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions1 } from "./ParticlesOptions";
import logo from "../../assets/logo_banner.png";

function Hero() {
  const particlesInit1 = async (main) => {
    // initialize tsParticles instance (main), can add custom shapes or presets
    await loadFull(main);
  };

  // const particlesInit2 = async (main) => {
  //   // initialize tsParticles instance (main), can add custom shapes or presets
  //   await loadFull(main);
  // };

  return (
    <section className="relative h-5/6 m-0 z-0 flex justify-center items-center content-center">
      <Particles
        className="tsparticles"
        init={particlesInit1}
        options={particlesOptions1}
      />
      <div className="z-10 absolute inset-0 flex flex-col justify-center items-center content-center">
        <div
          id="bubble-repulse"
          className="flex justify-center flex-col items-center content-center"
        >
          <img src={logo} className="w-96 px-10 sm:max-w-sm" alt="Blueprint Logo" />
          <h2 className="pb-6 m-2 text-2xl font-bold">Technology for Social Good</h2>
          <div className="">
            <button
              type="button"
              className="px-4 py-2 text-lg bg-blue-700 font-semibold rounded-full border text-white hover:text-black hover:bg-neutral-400"
            >
              Help us get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
