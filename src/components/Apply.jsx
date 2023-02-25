import { useState } from "react";

function Apply() {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Test inputs for valid stevens email
    // TODO: Add Google Sheets API call
    setContactInfo({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={contactInfo.firstName}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, firstName: e.target.value })
            }
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={contactInfo.lastName}
            onChange={(e) => setContactInfo({ ...contactInfo, lastName: e.target.value })}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={contactInfo.email}
            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Apply;
