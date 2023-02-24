import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from "../../assets/logo_banner.png";

function Hero() {
  const particlesInit = async (main) => {
    // initialize tsParticles instance (main), can add custom shapes or presets
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 20,
        density: {
          enable: false,
          value_area: 900,
        },
      },
      color: {
        value: "#0078E8",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 60,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        bounce: true,
        straight: false,
        out_mode: "bounce",
        attract: {
          enable: false,
          rotateX: 10,
          rotateY: 10,
        },
      },
    },
    interactivity: {
      events: {
        onDiv: [
          {
            enable: true,
            selectors: "#bubble-repulse",
            mode: "bounce",
            type: "rectangle",
          },
        ],
        onhover: {
          enable: false,
          mode: ["repulse"],
        },
        resize: false,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 6,
          speed: 1,
        },
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div className="h-5/6 m-0 z-0 relative flex justify-center items-center content-center">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      <div className="z-10 absolute inset-0 flex flex-col justify-center items-center content-center">
        <div
          id="bubble-repulse"
          className="flex justify-center flex-col items-center content-center"
        >
          <img src={logo} className="max-w-md" alt="Blueprint Logo" />
          <h2 className="text-2xl pb-6 m-2">Technology for Social Good</h2>
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
    </div>
  );
}

export default Hero;
