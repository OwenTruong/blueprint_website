import PropTypes from "prop-types";

function Header({ title, description, image }) {
  return (
    <div className="flex bg-primary py-24 px-10 md:px-52">
      <div className="flex flex-col w-3/4">
        <h1 className="text-6xl font-extrabold text-white pb-4">{title}</h1>
        <p className="text-xl text-white">{description}</p>
      </div>
      <div className="flex justify-center items-center w-1/4">
        <img src={image} alt="Replace This!" className="h-32" />
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Header;
