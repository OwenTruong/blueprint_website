import PropTypes from "prop-types";

function Step({ stepNumber, stepName, stepDescription }) {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 px-32 py-4">
      <div className="row-span-3 bg-secondary text-8xl">{stepNumber}</div>
      <div className="col-span-2 bg-slate-500">{stepName}</div>
      <div className="row-span-2 col-span-2 bg-slate-500">{stepDescription} </div>
    </div>
  );
}

Step.propTypes = {
  stepNumber: PropTypes.string.isRequired,
  stepName: PropTypes.string.isRequired,
  stepDescription: PropTypes.string.isRequired,
};

export default Step;
