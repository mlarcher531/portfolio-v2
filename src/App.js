import "./App.css";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Timeline } from "./components/Timeline";
import { GrLinkedin } from "react-icons/gr";

const App = () => {
  return (
    <div className="flex flex-col pb-10" style={{ width: "100vw" }}>
      <div
        className="flex w-full relative"
        style={{ height: "100vh" }}
        id="container"
      >
        <Header />
        <div className="flex flex-col absolute top-12 left-0">
          <div
            className="text-xl font-bold text-left w-full px-4"
            style={{ fontSize: "80px", color: "#135061", lineHeight: "1em" }}
            id={"name"}
          >
            MIKE ARCHER
          </div>
          <div
            className="mt-5 text-left pl-5"
            style={{ color: "#544ca1" }}
            id="name"
          >
            DEVELOPER | PROBLEM-SOLVER | CREATIVE
          </div>
          <div className="mt-5 text-left pl-5 font-bold">
            <a href="#about" id="name">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row" style={{ height: "100vh" }}>
        <About />
      </div>
      <div className="w-full flex flex-col" style={{ height: "100vh" }}>
        <div className="w-full">
          <Timeline />
        </div>
        <div className="w-full flex flex-col items-center mb-10">
          <div className="font-bold text-xl mb-2">Contact Me</div>

          <a
            href="https://www.linkedin.com/in/marcherdev/"
            className="mb-20 z-30 bg-white hover:scale-110 hover:shadow-lg"
          >
            <GrLinkedin size="4em" color="#0072b1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
