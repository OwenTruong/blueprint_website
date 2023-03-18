import PropTypes from "prop-types";

function ShowcaseCards({ title, description, image, link }) {
  return (
    <div className="flex justify-around py-6">
      <div className="flex">hello</div>
    </div>
  );
}

ShowcaseCards.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ShowcaseCards;
