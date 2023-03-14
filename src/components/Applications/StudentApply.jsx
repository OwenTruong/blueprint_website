import PropTypes from "prop-types";
import Footer from "../Common/Footer";
import Form from "./Form";
import Closed from "./Closed";
import Step from "./Step";

function StudentApply({ isOpen }) {
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

  const stepDescriptionBlocks = applicationSteps.map((step) => (
    <Step
      key={step.id}
      stepNumber={step.id}
      stepName={step.stepName}
      stepDescription={step.stepDescription}
    />
  ));

  return (
    <div className="flex flex-col h-screen">
      <div className="mb-auto">
        <div>
          <p className="text-4xl py-8 pl-4">Developer Application Process</p>
          {stepDescriptionBlocks}
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
