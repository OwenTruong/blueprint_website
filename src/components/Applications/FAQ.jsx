import PropTypes from "prop-types";

function FAQ({ question, answer }) {
  return (
    <div className="flex flex-col text-lg py-2 px-8">
      <p className="md:font-bold">{question}</p>
      <p>{answer}</p>
    </div>
  );
}

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQ;
