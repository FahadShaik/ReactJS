import React, { Component } from "react";
import Axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    console.log("hello");
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        console.log("error");
      });
  }

  render() {
    return (
      <div>
        <h1>User Component</h1>
        <div className="container">
          {this.state.users.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => {
                  console.log(user);
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.address.city}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h1>No data</h1>
          )}
        </div>
      </div>
    );
  }
}

export default User;
