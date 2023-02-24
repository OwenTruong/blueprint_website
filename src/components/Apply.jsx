import { useState } from "react";

function Apply() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit() {
    setFirstName("");
    setLastName("");
    setEmail("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input type="text" name="firstName" />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastName" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Apply;
