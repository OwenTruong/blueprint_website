/* eslint-disable global-require */
import Member from "./Member";
import Mission from "./Mission";
import Carousel from "../Common/Carousel";
import Members from "./Members.json";

function About() {
  const carouselImages = {
    resources: [
      {
        title: "Blueprint Test Image 1",
        source: require("../../assets/dummyImage.png"),
      },
      {
        title: "Blueprint Test Image 2",
        source: require("../../assets/dummyImage.png"),
      },
      {
        title: "Blueprint Test Image 3",
        source: require("../../assets/dummyImage.png"),
      },
      {
        title: "Blueprint Test Image 4",
        source: require("../../assets/dummyImage.png"),
      },
    ],
  };

  const MEMBERS = Members.members;
  const memberComponents = MEMBERS.map((mem) => (
    <Member
      key={mem.id}
      name={mem.name}
      position={mem.position}
      linkedin={mem.linkedin}
    />
  ));

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-auto">
        <div className="flex justify-center py-16">
          <Mission />
        </div>
        <Carousel imageData={carouselImages} />
        <div>
          <h1 className="flex justify-center text-6xl font-bold py-8">The Team</h1>
          <div className="flex flex-wrap">{memberComponents}</div>
        </div>
      </div>
    </div>
  );
}

export default About;
