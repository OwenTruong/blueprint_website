import PropTypes from "prop-types";
import Footer from "../Common/Footer";
import Form from "./StudentForm/Form";
import Closed from "./StudentForm/FormClosed";
import Step from "./Step";
import FAQ from "./FAQ";
import content from "./Content.json";

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
    <div className="flex flex-col h-screen">
      <div className="mb-auto px-40">
        <div>
          <h1 className="text-4xl py-8">Developer Application Process</h1>
          <div className="px-40">{stepDescriptionBlocks}</div>
        </div>
        <div>
          <h1 className="text-4xl py-8">Frequently Asked Questions (FAQ)</h1>
          <div className="px-40">{faqBlocks}</div>
        </div>
        <div className="grid h-screen place-items-center">
          {isOpen ? <Form /> : <Closed />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

StudentApply.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default StudentApply;
