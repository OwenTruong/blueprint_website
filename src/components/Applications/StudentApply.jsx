import PropTypes from "prop-types";
import Footer from "../Common/Footer";
import Form from "./Form";
import Closed from "./Closed";

function StudentApply({ isOpen }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="mb-auto"> {isOpen ? <Form /> : <Closed />} </div>
      <Footer />
    </div>
  );
}

StudentApply.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default StudentApply;
