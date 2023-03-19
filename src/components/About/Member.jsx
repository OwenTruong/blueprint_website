import PropTypes from "prop-types";
import logo from "../../assets/logos/logo.png";

function Member({ name, role, linkedin, headshot }) {
  return (
    <div>
      <img src={headshot} alt="" />
      <div>
        <h1>{name}</h1>
        <h2>{role}</h2>
        <div>{linkedin}</div>
      </div>
    </div>
  );
}

Member.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  headshot: PropTypes.string,
};

Member.defaultProps = {
  headshot: logo,
};

export default Member;
