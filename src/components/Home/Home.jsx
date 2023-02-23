import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from "../../assets/logo_banner.png";

function Home() {
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
        value: 50,
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
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: ["repulse"],
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        repulse: {
          distance: 100,
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
    <div className="h-screen">
      <div className="h-5/6 m-0 z-0 relative flex justify-center items-center content-center">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
        <section className="z-10 absolute inset-0 flex flex-col justify-center items-center content-center">
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
      </div>
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
