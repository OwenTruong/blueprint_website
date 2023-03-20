import PropTypes from "prop-types";
import Icon from "../Common/Icon";
import logo from "../../assets/logos/logo.png";

function Member({ name, position, linkedin, headshot }) {
  const linkedinSvg =
    "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";

  return (
    <div className="p-4">
      <img className="h-64 w-64 border-double border-8" src={headshot} alt="" />
      <div className="flex flex-col py-4">
        <h1 className="text-xl font-bold">{name}</h1>
        <div className="flex">
          <h2 className="text-lg italic pr-2">{position}</h2>
          <Icon svgPath={linkedinSvg} url={linkedin} size="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

Member.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  headshot: PropTypes.string,
};

Member.defaultProps = {
  headshot: logo,
};

export default Member;
