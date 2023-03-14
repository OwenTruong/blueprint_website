import PropTypes from "prop-types";
import Footer from "../Common/Footer";
import Form from "./Form";
import Closed from "./Closed";
import Step from "./Step";

function StudentApply({ isOpen }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="mb-auto">
        <div>
          <p>Developer Application Process</p>
          <Step
            stepNumber="1"
            stepName="Written Application"
            stepDescription="Submit your Resume and answer these questions"
          />
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
