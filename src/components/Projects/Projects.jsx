import Header from "./Header";
import Card from "./Card";
import content from "./ProjectsContent.json";

function Projects() {
  const HEAD = content.header;
  const SHOWCASE = content.showcase;

  const showcaseCards = SHOWCASE.projectCards.map((card) => (
    <Card
      key={card.id}
      title={card.title}
      description={card.description_short}
      image={card.image}
      alt={card.alt}
      link={card.link}
    />
  ));

  return (
    <div className="">
      <Header title={HEAD.title} description={HEAD.description} image={HEAD.image} />
      <div className="bg-white py-20 px-10 md:px-52">
        <h2 className="pb-10 font-extrabold text-5xl text-primary text-center">
          {SHOWCASE.title}
        </h2>
        {/* <h3 className="text-4xl font-bold text-black text-center border-b-8 pb-4">
          Current Projects
        </h3> */}
        <div className="flex justify-around py-6">{showcaseCards}</div>
      </div>
    </div>
  );
}

export default Projects;
