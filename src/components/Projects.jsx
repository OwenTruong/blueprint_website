import { Link } from "react-router-dom";
import blueprintLogo from "../assets/logos/logo_negative.png";

function Projects() {
  return (
    <div className="">
      <div className="flex bg-primary py-24 px-10 md:px-52">
        <div className="flex flex-col w-3/4">
          <h1 className="text-6xl font-extrabold text-white pb-4">Projects</h1>
          <p className="text-xl text-white">
            It&apos;s our priority to build projects that are both accessible and
            transparent.
          </p>
          <p className="text-xl text-white">
            Feel free to browse some of our open-source solutions below.
          </p>
        </div>
        <div className="flex justify-center items-center w-1/4">
          <img src={blueprintLogo} alt="Replace This!" className="h-32" />
        </div>
      </div>
      <div className="bg-white py-20 px-10 md:px-52">
        <h2 className="text-5xl font-extrabold text-primary text-center pb-10">
          Project Showcase
        </h2>
        {/* <h3 className="text-4xl font-bold text-black text-center border-b-8 pb-4">
          Current Projects
        </h3> */}
        <div className="flex justify-around py-6">
          <div className="flex flex-colrelative w-80 bg-secondary border-4 border-primary rounded-3xl shadow-xl">
            <div className="p-5">
              <img className="p-10" src={blueprintLogo} alt="" />
              <h5 className="rounded-3xl text-2xl text-black font-bold py-2">
                Sample Project 1
              </h5>
              <p className="font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in
                reverse order...
              </p>
              <Link
                to="/projects"
                className="flex justify-center p-2 text-lg text-blue-800 text-center"
              >
                Read More &gt;
              </Link>
            </div>
          </div>
          <div className="flex flex-colrelative w-80 bg-secondary border-4 border-primary rounded-3xl shadow-xl">
            <div className="p-5">
              <img className="p-10" src={blueprintLogo} alt="" />
              <h5 className="rounded-3xl text-2xl text-black font-bold py-2">
                Sample Project 2
              </h5>
              <p className="font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in
                reverse order...
              </p>
              <Link
                to="/projects"
                className="flex justify-center p-2 text-lg text-blue-800 text-center"
              >
                Read More &gt;
              </Link>
            </div>
          </div>
          <div className="flex flex-colrelative w-80 bg-secondary border-4 border-primary rounded-3xl shadow-xl">
            <div className="p-5">
              <img className="p-10" src={blueprintLogo} alt="" />
              <h5 className="rounded-3xl text-2xl text-black font-bold py-2">
                Sample Project 3
              </h5>
              <p className="font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in
                reverse order...
              </p>
              <Link
                to="/projects"
                className="flex justify-center p-2 text-lg text-blue-800 text-center"
              >
                Read More &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
