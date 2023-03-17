import { Link } from "react-router-dom";
import Carousel from "../Common/Carousel";
import images from "./Images.json";

function About() {
  return (
    <section className="relative h-fit bg-primary border-none">
      <div className="spacer-about-waves about-waves" />
      <div className="relative">
        <div className="px-8 md:px-24 bg-white">
          <h1 className="text-3xl py-2 md:text-5xl md:py-5 text-black text-center font-bold ">
            About Us
          </h1>
          <p className="text-md sm:text-2xl text-black text-center py-5">
            We are a group of students at Stevens Institute of Technology who have a
            passion technology and want to apply our talents towards social causes that
            can use our help.
          </p>
          <Carousel imageData={images} />
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
