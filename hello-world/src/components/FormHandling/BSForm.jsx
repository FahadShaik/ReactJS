import React, { Component } from "react";

class BSForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    dept: "",
    message: "",
  };

  updateHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  onChange={this.updateHandler}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={this.updateHandler}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  name="phone"
                  onChange={this.updateHandler}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter subject"
                  name="subject"
                  onChange={this.updateHandler}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Department</label>
                <select
                  className="form-control"
                  id="department"
                  name="dept"
                  onChange={this.updateHandler}
                >
                  <option>Select department</option>
                  <option>Sales</option>
                  <option>Support</option>
                  <option>Technical</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  onChange={this.updateHandler}
                  name="message"
                ></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BSForm;
