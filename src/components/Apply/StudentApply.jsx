import PropTypes from "prop-types";
import Form from "./StudentForm/Form";
import FormClosed from "./StudentForm/FormClosed";
import Step from "./Step";
import FAQ from "./FAQ";
import content from "./StudentContent.json";

function StudentApply({ isOpen }) {
  const APPLICATION_STEPS = content.applicationSteps;
  const FREQUENTLY_ASKED_QUESTIONS = content.frequentlyAskedQuestions;

  const stepDescriptionBlocks = APPLICATION_STEPS.map((step) => (
    <Step
      key={step.id}
      stepNumber={step.id}
      stepName={step.stepName}
      stepDescription={step.stepDescription}
    />
  ));

  const faqBlocks = FREQUENTLY_ASKED_QUESTIONS.map((question) => (
    <FAQ key={question.id} question={question.question} answer={question.answer} />
  ));

  return (
    <div className="flex flex-col min-h-screen px-80">
      <div>
        <h1 className="text-4xl py-8">Developer Application Process</h1>
        <div>{stepDescriptionBlocks}</div>
      </div>
      <div>
        <h1 className="text-4xl py-8">Frequently Asked Questions (FAQ)</h1>
        <div>{faqBlocks}</div>
      </div>
      <div className="flex justify-center py-24">
        {isOpen ? <Form /> : <FormClosed />}
      </div>
    </div>
  );
}

StudentApply.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default StudentApply;
