import FormBasics from "./FormBasics";
import FormRoles from "./FormRoles";
import FormQuestions from "./FormQuestions";

function Form() {
  // TODO: Handle Requests/Form Submission
  return (
    <div className="w-full px-40">
      <form action="#" method="POST" className="mt-10 sm:mt-0">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <FormBasics />
            <FormQuestions />
            <FormRoles />
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" className="blue-button-sm">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
