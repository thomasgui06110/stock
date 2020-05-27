import React from "react";
import "./App.css";
import StockD from "./components/StockEventsTable";
import axios from "axios";
import AddStockEvent from "./components/AddStockEvent";
import AddProduct from "./components/AddProduct";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Products

//fetch all stock events

//we are separed them by different products

class App extends React.Component {
  state = {
    fetchProducts: [],
    fetchStockEvents: [],
  };

  async componentDidMount() {
    const productsRes = await axios({
      method: "GET",
      url: "http://localhost:1337/products",
    });

    const stockEventRes = await axios({
      method: "GET",
      url: "http://localhost:1337/stockevents",
    });
    console.log(stockEventRes);

    const fetchProducts = productsRes.data;
    const fetchStockEvents = stockEventRes.data;

    this.setState({ fetchStockEvents, fetchProducts });
  }

  render() {
    const { fetchStockEvents, fetchProducts } = this.state;
    return (
      <div className="container">
        <h1>The Stock App</h1>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/products">
              <AddProduct />
            </Route>
            <Route exact path="/stock/add">
              <div className="mb-4">
                <AddStockEvent products={fetchProducts} />{" "}
              </div>
            </Route>
            <Route exact path="/stock">
              <StockD Products={fetchProducts} StockEvents={fetchStockEvents} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
