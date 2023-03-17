import Step from "./Step";
import FAQ from "./FAQ";
import content from "./NpoContent.json";

function Nonprofits() {
  const APPLICATION_STEPS = content.npoSteps;
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

  // TODO: Add Sample Proposal to firebase server and link
  return (
    <div className="flex flex-col min-h-screen px-80">
      <div>
        <h1 className="text-4xl py-8">Non-Profit Application Process</h1>
        {stepDescriptionBlocks}
      </div>
      <div>
        <h1 className="text-4xl py-8">Frequently Asked Questions (FAQ)</h1>
        {faqBlocks}
      </div>
      <div className="flex justify-center py-24"> Sample Proposal </div>
    </div>
  );
}

export default Nonprofits;
