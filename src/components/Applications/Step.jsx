import PropTypes from "prop-types";

function Step({ stepNumber, stepName, stepDescription }) {
  return (
    <div className="flex items-center mb-6">
      <div className="bg-blue-500 text-white font-bold rounded-full h-16 w-16 flex items-center justify-center">
        {stepNumber}
      </div>
      <div className="ml-4">
        <h2 className="text-lg font-bold">{stepName}</h2>
        <p className="text-gray-500">{stepDescription}</p>
      </div>
    </div>
  );
}

Step.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  stepName: PropTypes.string.isRequired,
  stepDescription: PropTypes.string.isRequired,
};

export default Step;
