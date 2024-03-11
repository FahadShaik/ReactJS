import React from "react";

class ProductTableClass extends React.Component {
  state = {
    name: "Apple iPhone 15 (Blue, 128 GB)",
    price: 66499,
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
    qty: 1,
  };

  incrementHandler = () => {
    this.setState({ qty: this.state.qty + 1 });
  };
  decrementHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
  };

  render() {
    return (
      <>
        <h2>Product Details</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <table className="table">
                <thead>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </thead>
                <tbody>
                  <td>{this.state.name}</td>
                  <td>
                    <img
                      src={this.state.imageUrl}
                      width={"100px"}
                      alt="product_image"
                    />
                  </td>
                  <td>{this.state.price}</td>
                  <td>
                    <i
                      className="fa fa-minus-circle"
                      onClick={this.decrementHandler}
                    ></i>
                    {this.state.qty}
                    <i
                      className="fa fa-plus-circle"
                      onClick={this.incrementHandler}
                    ></i>
                  </td>
                  <td>{this.state.qty * this.state.price}</td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductTableClass;
