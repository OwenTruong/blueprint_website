import PropTypes from "prop-types";

function FAQ({ question, answer }) {
  return (
    <div className="flex flex-col text-lg py-2">
      <p className="md:font-bold">{question}</p>
      <p className="text-slate-700">{answer}</p>
    </div>
  );
}

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQ;
