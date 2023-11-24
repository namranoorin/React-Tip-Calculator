// CustomerList.js
import React from "react";

import Customer from "./Customer";

const CustomerList = ({ customers, totalTip }) => {
  return (
    <div>
      {customers.map((customer, index) => (
        <Customer key={index} customer={customer} />
      ))}
      <p>Total Customers: {customers.length}</p>
      <p>Total Tip Paid: {totalTip} Rs</p>
    </div>
  );
};

export default CustomerList;
