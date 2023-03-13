function FormRoles() {
  const roles = [
    { id: 1, name: "Developer" },
    { id: 2, name: "Designer" },
    { id: 3, name: "Product Manager" },
    { id: 4, name: "Technical Lead" },
  ];

  const rolesCheckboxes = roles.map((role) => (
    <div className="flex items-start" key={role.id}>
      <div className="flex h-6 items-center">
        <input
          id="comments"
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-900">
          {role.name}
        </label>
      </div>
    </div>
  ));

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <fieldset>
                  <legend className="sr-only">Roles</legend>
                  <div
                    className="text-sm font-semibold leading-6 text-gray-900"
                    aria-hidden="true"
                  >
                    Roles
                  </div>
                  <div className="mt-4 space-y-4">{rolesCheckboxes}</div>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormRoles;
