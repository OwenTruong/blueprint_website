import Footer from "./Common/Footer";

function Projects() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mb-auto">
        <div style={{ backgroundColor: "#0078E8", padding: "250px" }}>
          <h1
            style={{
              fontSize: "58px",
              color: "white",
              lineHeight: "87px",
              fontWeight: "bold",
              marginTop: "-125px", // add negative margin to move the h1 element up
            }}
          >
            Projects
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "white",
            }}
          >
            It&apos;s our priority to build projects that are both accessible and
            transparent.
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "white",
            }}
          >
            Feel free to browse some of our open-source solutions below.
          </p>
        </div>

        <div style={{ backgroundColor: "white", padding: "250px" }}>
          <h2
            style={{
              fontSize: "58px",
              color: "#0078E8",
              lineHeight: "87px",
              fontWeight: "bold",
              marginTop: "-125px", // add negative margin to move the h1 element up
            }}
          >
            Project Showcase
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
