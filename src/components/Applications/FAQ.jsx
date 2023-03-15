import PropTypes from "prop-types";

function FAQ({ question, answer }) {
  return (
    <div>
      <h1>{question}</h1>
      <h2>{answer}</h2>
    </div>
  );
}

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQ;
