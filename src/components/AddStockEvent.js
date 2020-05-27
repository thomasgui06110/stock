import React, { Component } from "react";
import axios from "axios";

export default class AddStockEvent extends Component {
  state = {
    qty: 0,
    type: "add",
    product: "no",
    alert: "",
    show: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { qty, type, product, alert } = this.state;
    if (product != "no") {
      const data = {
        qty,
        type,
        product: parseInt(product),
      };
      const addStockRes = await axios({
        method: "POST",
        url: `http://localhost:1337/stockevents`,
        data,
      });

      console.log("Axios ", addStockRes);
      if (addStockRes.status === 200) {
        this.setState({ alert: "Ajout avec Success !!! " });
        console.log(alert, qty);

        setTimeout(() => {
          window.location = window.location;
        }, 2000);

        // window.location = window.location;
      }
    } else {
      alert("No product chosen");
      return;
    }
  };

  render() {
    //select the product

    //Add a qty

    //Select a type

    //Submit to Strapi
    const { qty, type, product, alert, show } = this.state;
    const { products } = this.props;
    return (
      <div className="AddStockEvent">
        {alert !== "" && (
          <div className="alert alert-success" role="alert">
            {alert}
          </div>
        )}
        <h2 className="mb-3">
          Add Stock Event{" "}
          <button
            className="btn btn-sm btn-success"
            onClick={() => this.setState({ show: true })}
          >
            + Add
          </button>
        </h2>
        {show && (
          <form onSubmit={this.handleSubmit}>
            <div className="row md-3">
              <div className="col-md-6">
                <select
                  onChange={this.handleChange}
                  name="product"
                  value={product}
                  className="form-control"
                >
                  <option value="no">please select a product</option>
                  {products.map((product, i) => (
                    <option key={i} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-2">
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="qty"
                  value={qty}
                  className="form-control"
                />
              </div>{" "}
              <div className="col-md-2">
                <select
                  onChange={this.handleChange}
                  name="type"
                  value={type}
                  className="form-control"
                >
                  <option value="add">Add</option>
                  <option value="remove">Remove</option>
                </select>
              </div>{" "}
              <div className="col-md-2">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }
}
