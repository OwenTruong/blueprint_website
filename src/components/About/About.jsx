import Member from "./Member";

function About() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mb-auto">
        <h1>Implement about page</h1>
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
