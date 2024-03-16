import Axios from "axios";
import React, { Component } from "react";

class EmpLC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeesData: {},
    };
  }
  componentDidMount() {
    Axios.get("https://dummyjson.com/users")
      .then((response) => {
        this.setState({ employeesData: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        {Object.keys(this.state.employeesData).length > 0 ? (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employeesData.users.map((employee) => {
                  return (
                    <tr>
                      {console.log(employee)}
                      <td>{employee.id}</td>
                      <td>{employee.firstName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <h1>No Data</h1>
        )}
      </div>
    );
  }
}

export default EmpLC;
