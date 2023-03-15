function FormQuestions() {
  return (
    <div>
      <div className="col-span-6 sm:col-span-5 pb-4">
        <label
          htmlFor="about"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Why are you interested in joining Blueprint?
        </label>
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            rows={3}
            className="mt-1 px-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
            defaultValue=""
          />
        </div>
      </div>

      <div className="col-span-6 sm:col-span-6">
        <label
          htmlFor="about"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          What and experience can you bring to Blueprint?
        </label>
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            rows={3}
            className="mt-1 px-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
            defaultValue=""
          />
        </div>
      </div>
    </div>
  );
}

export default FormQuestions;
