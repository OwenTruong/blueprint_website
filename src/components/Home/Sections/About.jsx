import { Link } from "react-router-dom";
import carouselImages from "./Images.json";
import stevensLogo from "../../../assets/logos/stevens_logo.svg";
import Carousel from "../../Common/Carousel";

function About() {
  return (
    <section className="relative h-fit bg-white border-none">
      <div className="spacer-about-waves about-waves" />
      <div className="relative py-12">
        <div className="px-8 md:px-32 bg-white">
          <h1 className="text-3xl py-2 md:text-5xl md:py-5 text-black text-center font-bold underline underline-offset-8 decoration-primary">
            About Us
          </h1>
          <div className="flex justify-center py-5">
            <div className="mx-auto flex max-w-screen-sm items-center justify-center">
              <div className="h-auto w-full rounded-full bg-gradient-to-r from-primary via-white to-primary p-1">
                <div className="flex h-full w-full items-center justify-center back">
                  {/* <div className="bg-white rounded-full drop-shawdow-primary drop-shadow-lg border-8 border-primary"> */}
                  <img src={stevensLogo} alt="Stevens Logo" className="p-10" />
                  {/* </div> */}
                </div>
              </div>
            </div>
            <p className="text-md sm:text-2xl text-black text-center py-10">
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
            -Learn more-
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
