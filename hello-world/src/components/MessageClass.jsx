import React from "react";

class MessageClass extends React.Component {
  msg = "Hello Iron Man";

  btnHandler = () => {
    console.log("GM");
    this.msg = "GM Iron Man";
    console.log(this.msg);
  };

  render() {
    return (
      <>
        <h1>Message components</h1>
        <hr />
        <h3>value : {this.msg}</h3>
        <button onClick={this.btnHandler}>GM</button>
        <button>GN</button>
      </>
    );
  }
}
export default MessageClass;
