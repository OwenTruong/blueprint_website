import Icon from "../Common/Icon";
import content from "./Icons.json";

function Contact() {
  const iconContent = content.icons;

  const Icons = iconContent.map((icon) => (
    <Icon key={icon.id} svgPath={icon.path} url={icon.url} />
  ));

  return (
    <div className="flex items-center justify-center min-h-[90vh] px-10 md:px-72">
      <div className="">
        <h1 className="text-5xl md:text-8xl font-extrabold text-primary">
          Stay in Touch
        </h1>
        <div className="py-4">
          <a
            href="mailto:sit.blueprint@gmail.com"
            className="text-3xl md:text-4xl text-secondary underline"
          >
            sit.blueprint@gmail.com
          </a>
        </div>
        <div className="py-4 md:py-8 flex justify-between">{Icons}</div>
      </div>
    </div>
  );
}

export default Contact;
