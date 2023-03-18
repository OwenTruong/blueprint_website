import Icon from "../Common/Icon";
import content from "./Icons.json";

function Contact() {
  const iconContent = content.icons;

  const Icons = iconContent.map((icon) => (
    <Icon key={icon.id} svgPath={icon.path} url={icon.url} />
  ));

  return (
    <div className="flex flex-col min-h-screen p-80">
      <div className="mb-auto">
        <h1 className="text-8xl text-primary">Stay in Touch</h1>
        <div className="py-4">
          <a
            href="mailto:sit.blueprint@gmail.com"
            className="text-4xl text-secondary underline"
          >
            sit.blueprint@gmail.com
          </a>
        </div>
        <div className="py-8 flex flex-wrap nowrap">{Icons}</div>
      </div>
    </div>
  );
}

export default Contact;
