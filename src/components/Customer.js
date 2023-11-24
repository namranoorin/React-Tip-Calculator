// Customer.js
import React from "react";

const Customer = ({ customer }) => {
  const { name, billAmount, tipAmount } = customer;

  return (
    <div>
      <p>Customer Name: {name}</p>
      <p>Bill Amount: {billAmount} Rs</p>
      <p>Tip Amount: {tipAmount} Rs</p>
    </div>
  );
};

export default Customer;
