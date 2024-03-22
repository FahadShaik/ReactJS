import React, { Component } from "react";
import Axios from "axios";

class User extends Component {
  state = {
    users: [],
  };

  getUserData = () => {
    console.log("hello");
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
      })
      .catch(() => {});
  };
  render() {
    return (
      <div>
        <button onClick={this.getUserData}>Click For Data</button>
      </div>
    );
  }
}

export default User;
