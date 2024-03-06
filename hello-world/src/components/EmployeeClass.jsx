import React from "react";
class EmployeeClass extends React.Component {
  render() {
    return (
      <>
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="card-header bg-dark text-white">
              <h1>{this.props.userInfo.userName}</h1>
            </div>
            <div className="card-body">
              <img src={this.props.userInfo.imageLink} alt="act-img" />
              <p>{this.props.userInfo.userAge}</p>
              <p>{this.props.userInfo.userDesignation}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EmployeeClass;
