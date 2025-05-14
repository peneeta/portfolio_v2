import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = async (main) => {
    // Load full tsparticles package
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: false, // ❗️This disables fullscreen auto-canvas
    },
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#00A6FB", "#61E786", "#FCB001"]
      },
      shape: {
        type: "circle",
        polygon: {
          nb_sides: 5
        },
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      links: {
        enable: true,
        distance: 180,
        color: "#00A6FB",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        bounce: false
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
          enable: false,
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
          quantity: 10
        }
      }
    },
    retina_detect: true
  };
  
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-120 -z-10">
        <Particles id="tsparticles" 
        init={particlesInit} 
        options={particlesOptions}
        className="w-full h-full"
        canvasClassName="w-full h-full"/>
      </div>
    </>
  )
}

export default ParticlesBackground