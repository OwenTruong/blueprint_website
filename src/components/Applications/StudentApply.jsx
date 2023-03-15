import PropTypes from "prop-types";
import Footer from "../Common/Footer";
import Form from "./Form";
import Closed from "./Closed";
import Step from "./Step";
import FAQ from "./FAQ";

function StudentApply({ isOpen }) {
  // Current Steps in the Stevens Blueprint Application
  const applicationSteps = [
    {
      id: 1,
      stepName: "Written Application",
      stepDescription: "Submit your Resume and answer a few basic questions",
    },
    {
      id: 2,
      stepName: "Coffee Chats",
      stepDescription:
        "A 15-30 minute coffee chat with the Executive Board, which will provide us with an opportunity to learn more about you, your motivations, and your goals for joining Blueprint.",
    },
    {
      id: 3,
      stepName: "Project Assignment",
      stepDescription:
        "Project Assignment: For this semester we will be taking on 2-3 Non-Profit Organization (NPO) projects, for a total of around 2-3 project leads and 6-12 developers. Don't be disheartened if you're not selected for this first wave of projects!  We will be holding workshops to help prepare you for future projects and forming new teams for the next wave of NPOs in need.",
    },
  ];

  const frequentlyAskedQuestions = [
    {
      id: 1,
      question: "I don’t have a lot of experience, should I still apply?",
      answer: "Yes",
    },
    {
      id: 2,
      question: "Can I be a part of Blueprint if I’m on co-op?",
      answer: "Yes",
    },
    {
      id: 3,
      question: "How much time do I have to commit to Blueprint per week?",
      answer: "7-10 hours",
    },
    {
      id: 4,
      question: "Do I get to choose the project I work on?",
      answer: "Yes",
    },
  ];

  // Map each step to a <Step /> component
  const stepDescriptionBlocks = applicationSteps.map((step) => (
    <Step
      key={step.id}
      stepNumber={step.id}
      stepName={step.stepName}
      stepDescription={step.stepDescription}
    />
  ));

  const faqBlocks = frequentlyAskedQuestions.map((question) => (
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
          <h1 className="text-4xl">FAQ</h1>
          <div className="px-40">{faqBlocks}</div>
        </div>
        <div>{isOpen ? <Form /> : <Closed />}</div>
      </div>
      <Footer />
    </div>
  );
}

StudentApply.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default StudentApply;
