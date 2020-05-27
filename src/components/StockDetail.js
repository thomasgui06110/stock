import React, { Component } from "react";

class StockDetail extends Component {
  state = {
    show: false,
  };
  render() {
    const { name, total, stockevents } = this.props;
    const { show } = this.state;
    return (
      <div
        className="StockDetail"
        onClick={() => this.setState({ show: !show })}
      >
        <h2>
          Product: {name}| Total: {total}
        </h2>
        {show && (
          <>
            {stockevents.map((stock, i) => (
              <div key={i} className="StockEventsTable">
                <p>Id: {stock.id}</p>
                <p>Type: {stock.type}</p>
                <p>Quantity : {stock.qty}</p>
                <p>Name: {stock.product.name}</p>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default StockDetail;
