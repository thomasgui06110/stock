import React, { Component } from "react";
import Axios from "axios";

export default class AddProduct extends Component {
  state = {
    name: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name } = this.state;

    const createProductRes = await Axios({
      method: "POST",
      url: "http://localhost:1337/products",
      data: {
        name,
      },
    });

    if (createProductRes.status === 200) {
      alert("Successfully created product");
      window.location = window.location;
    }
  };
  render() {
    const { name } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col md-6">
              <input
                onChange={(event) =>
                  this.setState({ [event.target.name]: event.target.value })
                }
                className="form-control"
                name="name"
                value={name}
                type="text"
              />
            </div>
            <div className="col md-6">
              <button className="btn btn-sm btn-primary">
                Create new Product
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
