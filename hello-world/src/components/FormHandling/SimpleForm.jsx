import React, { Component } from "react";

class SimpleForm extends Component {
  state = {
    email: "",
    password: "",
  };

  emailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <pre className="mt-2">{JSON.stringify(this.state)}</pre>
        <form className="mt-5" onSubmit={this.submitHandler}>
          <label>Email:::::::::</label>
          <input
            type="text"
            className="mb-2"
            onChange={this.emailHandler}
          />{" "}
          <br />
          <label>Password:</label>
          <input type="text" className="mb-2" onChange={this.passwordHandler} />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default SimpleForm;
