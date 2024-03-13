import React, { Component } from "react";
import employeeData from "./EmpData";

export class EmployeeListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: employeeData,
    };
  }

  popUpAlert = (value) => {
    alert(`Hello ${value} Good Morning`);
  };

  render() {
    return (
      <div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => {
                return (
                  <tr
                    key={employee.id}
                    onClick={this.popUpAlert.bind(this, employee.Name)}
                  >
                    <td>{employee.id}</td>
                    <td>{employee.Name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeListClass;
