import React from "react";
import StockDetail from "./StockDetail";

function StockEventsTable({ StockEvents, Products }) {
  return (
    <div>
      {Products.map((product) => {
        const { id } = product;

        const relevantStockEvents = StockEvents.filter(
          (se) => se.product.id === product.id
        );

        const stockTotal = relevantStockEvents.reduce((acc, value) => {
          return acc + value.qty;
        }, 0);

        return (
          <div key={product.id} className="StockEventTable_ProductContainer">
            <StockDetail
              name={product.name}
              total={stockTotal}
              stockevents={relevantStockEvents}
            />
          </div>
        );
      })}
    </div>
  );
}

export default StockEventsTable;
