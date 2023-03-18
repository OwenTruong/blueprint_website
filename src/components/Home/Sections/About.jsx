/* eslint-disable global-require */
// Above line disables eslint for require statements since it dislikes dynamic imports, but it's needed to import images using an object (not possible via external JSON)
import { Link } from "react-router-dom";
import stevensLogo from "../../../assets/logos/stevens_logo.svg";
import blueprintLogo from "../../../assets/logos/logo.png";
import Carousel from "../../Common/Carousel";

function About() {
  const carouselImages = {
    resources: [
      {
        title: "Blueprint Test Image 1",
        source: require("../../../assets/dummyImage.png"),
      },
      {
        title: "Blueprint Test Image 2",
        source: require("../../../assets/dummyImage.png"),
      },
      {
        title: "Blueprint Test Image 3",
        source: require("../../../assets/dummyImage.png"),
      },
      {
        title: "Blueprint Test Image 4",
        source: require("../../../assets/dummyImage.png"),
      },
    ],
  };

  return (
    <section className="relative h-fit bg-white border-none">
      <div className="spacer-about-waves about-waves" />
      <div className="pt-6 pb-10">
        <div className="px-10 md:px-36 bg-white">
          <h1 className="text-3xl py-2 md:text-6xl md:pt-5 text-black text-center font-extrabold">
            About Us
          </h1>
          <div className="flex justify-center items-center pb-5 w-full z-0">
            <div className="relative w-56 h-60">
              <div className="flex bg-white absolute bottom-0 right-0 h-32 w-32 items-center justify-center border-4 border-secondary rounded-full shadow-xl">
                <img src={blueprintLogo} alt="Stevens Logo" className="p-6" />
              </div>
              <div className="flex bg-white abosolute top-0 left-0 h-40 w-40 items-center justify-center border-4 border-secondary rounded-full shadow-xl">
                <img src={stevensLogo} alt="Stevens Logo" className="px-7 pb-4" />
              </div>
            </div>
            <p className="w-2/3 relative text-md font-extrathin sm:text-2xl text-black pl-20">
              We are a group of students at Stevens Institute of Technology who have a
              passion technology and want to apply our talents towards social causes that
              can use our help.
            </p>
          </div>
          <Carousel imageData={carouselImages} />
          <Link
            to="/about"
            className="flex justify-center p-2 text-lg text-blue-400 text-center"
          >
            Read More &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
