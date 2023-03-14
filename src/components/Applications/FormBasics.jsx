function FormBasics() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-2">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="col-span-6 sm:col-span-2">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="col-span-6 sm:col-span-1">
          <label
            htmlFor="graduation-year"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Graduation year
          </label>
          <input
            type="text"
            name="graduation-year"
            id="graduation-year"
            autoComplete="four-year"
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="col-span-5 sm:col-span-4">
          <label
            htmlFor="email-address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <input
            type="text"
            name="email-address"
            id="email-address"
            autoComplete="email"
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="col-span-5 sm:col-span-1">
          <label
            htmlFor="major"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Major
          </label>
          <input
            type="text"
            name="major"
            id="major"
            autoComplete="cs"
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
}

export default FormBasics;
