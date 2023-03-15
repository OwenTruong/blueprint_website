import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./ParticlesOptions";
import logo from "../../assets/logo_banner.png";

function Hero() {
  const particlesInit = async (main) => {
    // initialize tsParticles instance (main), can add custom shapes or presets
    await loadFull(main);
  };

  return (
    <section className="relative h-5/6 m-0 z-0 flex justify-center items-center content-center  border-none">
      <Particles
        className="tsparticles border-none"
        init={particlesInit}
        options={particlesOptions}
      />
      <div className="z-10 absolute inset-0 flex flex-col justify-center items-center content-center border-none">
        <div
          id="bubble-repulse"
          className="flex justify-center flex-col items-center content-center"
        >
          <img src={logo} className="w-96 px-10 sm:max-w-sm" alt="Blueprint Logo" />
          <h2 className="pb-6 m-2 text-2xl font-bold">Technology for Social Good</h2>
          <div className="">
            <Link to="apply" type="button" className="blue-button-lg">
              Help us get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
