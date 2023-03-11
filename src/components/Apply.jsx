import { useState } from "react";

// const SHEET_ID = process.env.GOOGLE_SHEET_ID;
// console.log(SHEET_ID);

function Apply() {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [name, setName] = useState("");

  /* Sheet1!A1:A2 */
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name:
                  <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </label>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={contactInfo.lastName}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, lastName: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </label>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email:
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    value={contactInfo.email}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, email: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </label>
                <input type="submit" value="Submit" onClick={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Apply;
