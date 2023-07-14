import PropTypes from "prop-types";

function Value({ name, description }) {
  return (
    <div className="p-6">
      <div className="flex flex-col py-4">
        <h1 className="text-center text-xl font-bold">{name}</h1>
        <h2 className="text-lg italic">{description}</h2>
      </div>
    </div>
  );
}

Value.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Value;
