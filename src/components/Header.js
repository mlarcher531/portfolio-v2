import Particles from "react-tsparticles";

export const Header = () => {
  return (
    <div className="flex w-full">
      <Particles
        options={{
          fullScreen: {
            enable: true,
            zIndex: 10,
          },
          // background: {
          //   image:
          //     "url(`http://www.photoshelter.com/img-get/I0000md1hoAz7Eaw/s/1000/324/Aerial-Houston-Skyline-Sunset-Pano-DSC07535.jpg`)",
          // },
          particles: {
            number: {
              value: 120,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#d09df5", "#fcd703", "#2e7382", "#1d0c75"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 2,
              color: "#d09df5",
              opacity: 0.4,
              width: 0.4810236182596568,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 143.85614385614386,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 263.73626373626377,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
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
        }}
      />
    </div>
  );
};
