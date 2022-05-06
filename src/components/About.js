import {
  FaGolfBall,
  FaLaptopCode,
  FaGamepad,
  FaDog,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithubSquare,
} from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails, SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

export const About = () => {
  return (
    <>
      <div
        className="w-full px-6 items-center flex flex-col bg-white z-20"
        // style={{ backgroundColor: "#dadaf5" }}
        id="about"
      >
        <div className="flex flex-row w-full items-center justify-around mt-6">
          <div className="rounded-full p-3 bg-red-300 h-44 w-44 items-center justify-center shadow-xl hidden lg:flex">
            <FaGolfBall size="8em" color="#31143f" />
          </div>
          <div className="rounded-full p-3 bg-red-300 h-44 w-44 items-center justify-center hidden md:flex shadow-xl">
            <FaLaptopCode size="8em" color="#31143f" />
          </div>
          <div className="rounded-full h-64 w-64 bg-white" id="photo" />
          <div className="rounded-full p-3 bg-red-300 h-44 w-44 items-center justify-center hidden md:flex shadow-xl">
            <FaGamepad size="8em" color="#31143f" />
          </div>
          <div className="rounded-full p-3 bg-red-300 h-44 w-44 items-center justify-center hidden lg:flex shadow-xl">
            <FaDog size="8em" color="#31143f" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  md:text-lg md:mt-16">
          <div className="w-full md:w-7/12 py-6 px-6 md:pl-14">
            I am a{" "}
            <span className="font-semibold" style={{ color: "#26119c" }}>
              software developer
            </span>{" "}
            who specializes in building clean, responsive user interfaces. After
            graduating from the{" "}
            {/* <span className="font-semibold" style={{ color: "#1b5c14" }}> */}
            <span className="font-semibold" style={{ color: "#05b047" }}>
              Flatiron School
            </span>{" "}
            Full-Stack Development Program, I spent nearly a year working for a
            Houston-based start-up where I honed my skills and had the
            opportunity to{" "}
            <span className="font-semibold" style={{ color: "#ed262e" }}>
              learn on a daily basis
            </span>
            . <strong>My mission</strong> as a developer is to continue to learn
            so that one day I can help others become better developers. When I
            am not working, I am a passionate golfer, gamer, and dog parent.
            Currently,{" "}
            <span className="font-semibold" style={{ color: "#a004de" }}>
              I am looking for a role as a ReactJS Developer
            </span>
            .
          </div>
          <div className="flex flex-col space-y-3 h-full w-full md:w-5/12  px-4 items-center justify-center">
            <div className="flex flex-row w-full space-x-3 justify-center">
              <div>
                <FaReact size="6em" color="#034f97" />
              </div>
              <div>
                <SiTailwindcss size="6em" color="#0fa373" />
              </div>
              <div>
                <IoLogoNodejs size="6em" color="#c73c9f" />
              </div>
            </div>
            <div className="flex flex-row w-full space-x-3 justify-center">
              <div>
                <FaHtml5 size="4em" color="#5d55bc" />
              </div>
              <div>
                <SiTypescript size="4em" color="#e4a438" />
              </div>
              <div>
                <FaCss3 size="4em" color="#a51001" />
              </div>
            </div>
            <div className="flex flex-row w-full space-x-3 justify-center">
              <div>
                <DiRuby size="3em" color="#276658" />
              </div>
              <div>
                <SiRubyonrails size="3em" color="#000969" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
