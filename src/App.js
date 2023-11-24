// App.js
import React, { useState } from "react";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import TotalCalculator from "./components/TotalCalculator";
import CustomerHeader from "./components/CustomerHeader"; // Import the Header component
import CustomerFooter from "./components/CustomerFooter"; // Import the Footer component

function App() {
  const [customers, setCustomers] = useState([]);
  const [totalTip, setTotalTip] = useState(0);

  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
    setTotalTip(totalTip + customer.tipAmount);
  };

  return (
    <div className="App">
      <CustomerHeader /> {/* Use the Header component here */}
      <div className="container">
        <h1>Restaurant Tip Calculator</h1>
        <CustomerForm addCustomer={addCustomer} />
        <CustomerList customers={customers} totalTip={totalTip} />
        <TotalCalculator customers={customers} />
      </div>
      <CustomerFooter /> {/* Use the Footer component here */}
    </div>
  );
}

export default App;
