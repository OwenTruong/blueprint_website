import Member from "./Member";
import Mission from "./Mission";

function About() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mb-auto">
        <div className="flex justify-center py-16">
          <Mission />
        </div>
        <Member
          name="Christian Apostol"
          position="VP of Projects"
          linkedin="https://www.linkedin.com/in/capostol/"
        />
      </div>
    </div>
  );
}

export default About;
