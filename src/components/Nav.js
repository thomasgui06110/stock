import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/products">
          Products
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/stock">
          Stock
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/stock/add">
          Add Stock
        </NavLink>
      </li>
    </ul>
  );
}
