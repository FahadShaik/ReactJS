import React, { Component } from "react";

export class MessageBinding extends Component {
  state;
  constructor(props) {
    super(props);
    console.log("First Render");
    this.state = {
      msg: "Hello",
    };
  }

  updateHandler = (value) => {
    console.log(value);
    this.setState({ msg: this.state.msg + value });
  };

  render() {
    console.log("Second Render");
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.updateHandler.bind(this, " Good Morning")}>
          GM
        </button>
        <button onClick={this.updateHandler.bind(this, " Good afternoon")}>
          GA
        </button>
        <button onClick={this.updateHandler.bind(this, " Good evening")}>
          GE
        </button>
        <button onClick={this.updateHandler.bind(this, " Good Night")}>
          GN
        </button>
      </div>
    );
  }
}

export default MessageBinding;
