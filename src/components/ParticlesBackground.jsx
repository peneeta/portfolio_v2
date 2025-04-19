import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = async (main) => {
    // Load full tsparticles package
    await loadFull(main);
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#4C9CFD", "#61E786", "#E34A6F"]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 4,
        random: true
      },
      links: {
        enable: true,
        distance: 150,
        color: "#4C9CFD",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        bounce: true
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          quantity: 6
        },
        remove: {
          quantity: 4
        }
      }
    },
    retina_detect: true
  };
  
  return (
    <>
      <div style={{ position: "relative", height: "100vh" }}>
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </div>
    </>
  )
}

export default ParticlesBackground