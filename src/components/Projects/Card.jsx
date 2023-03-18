import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ title, description, image, alt, link }) {
  return (
    <div className="flex flex-col relative w-80 m-4 bg-secondary border-4 border-primary rounded-3xl shadow-xl">
      <div className="p-5">
        <img className="flex justify-center mx-auto p-10" src={image} alt={alt} />
        <h5 className="rounded-3xl text-2xl text-black font-bold py-2">{title}</h5>
        <p className="font-normal text-gray-700">{description}</p>
        <Link
          to={link}
          className="flex justify-center p-2 text-lg text-blue-800 text-center"
        >
          Read More &gt;
        </Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
