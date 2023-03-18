import { Link } from "react-router-dom";
import blueprintLogo from "../../assets/logos/logo_negative.png";
import Header from "./Header";
import content from "./ProjectsContent.json";

function Projects() {
  return (
    <div className="">
      <Header
        title={content.header.title}
        description={content.header.description}
        image={content.header.image}
      />
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
