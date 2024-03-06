import React from "react";
import CardClass from "./CardClass";
import "../css/style.css";

class BodyClass extends React.Component {
  render() {
    return (
      <div className="card-container">
        <CardClass name="Leela" />
        <CardClass name="Parvathi" />
        <CardClass name="Nono" />
        <CardClass name="donnie" />
        <CardClass name="agatha" />
      </div>
    );
  }
}

export default BodyClass;
