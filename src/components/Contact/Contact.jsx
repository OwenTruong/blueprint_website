import Icon from "../Common/Icon";
import content from "./Icons.json";

function Contact() {
  const Icons = content.icons;
  const iconComponents = Icons.map((icon) => (
    <Icon key={icon.id} svgPath={icon.path} url={icon.url} />
  ));

  return (
    <div className="flex flex-col min-h-screen p-80">
      <div className="mb-auto">
        <h1 className="text-8xl text-primary">Stay in Touch</h1>
        <div className="py-8">
          <a
            href="mailto:sit.blueprint@gmail.com"
            className="text-2xl text-secondary underline py-8"
          >
            sit.blueprint@gmail.com
          </a>
        </div>
        <div className="py-8">{iconComponents}</div>
      </div>
    </div>
  );
}

export default Contact;
