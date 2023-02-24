function Apply() {
  function handleSubmit() {
    // console.log("Hello");
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
