import PropTypes from "prop-types";

function Step({ stepNumber, stepName, stepDescription }) {
  return (
    <p>
      {stepNumber}
      {stepName}
      {stepDescription}{" "}
    </p>
  );
}

Step.propTypes = {
  stepNumber: PropTypes.string.isRequired,
  stepName: PropTypes.string.isRequired,
  stepDescription: PropTypes.string.isRequired,
};

export default Step;
