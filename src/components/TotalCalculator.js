// TotalCalculator.js
import React from "react";

const TotalCalculator = ({ customers }) => {
  const totalCustomers = customers.length;
  const totalTips = customers.reduce(
    (total, customer) => total + customer.tipAmount,
    0
  );

  return (
    <div>
      <h2>Total Calculator</h2>
      <p>Total Customers: {totalCustomers}</p>
      <p>Total Tips: {totalTips} Rs</p>
    </div>
  );
};

export default TotalCalculator;
