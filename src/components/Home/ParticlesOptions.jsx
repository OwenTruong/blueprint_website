export const particlesOptions1 = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: window.innerWidth < 500 ? 10 : 25,
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
    collisions: {
      enable: false,
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

export default {}; // needed to not be an arror exporting 1 object
