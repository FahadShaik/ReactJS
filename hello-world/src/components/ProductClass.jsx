import React from "react";

class ProductClass extends React.Component {
  state = {
    qty: 1,
  };

  decrHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
  };
  incrHandler = () => {
    this.setState({ qty: this.state.qty + 1 });
  };

  render() {
    return (
      <>
        <h1>Product example.</h1>
        <button onClick={this.decrHandler}>-</button>
        {this.state.qty}
        <button onClick={this.incrHandler}>+</button>
      </>
    );
  }
}

export default ProductClass;
