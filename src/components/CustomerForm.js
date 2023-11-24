// CustomerForm.js
import React, { useState } from "react";

const CustomerForm = ({ addCustomer }) => {
  const [name, setName] = useState("");
  const [billAmount, setBillAmount] = useState(0);
  const [serviceRating, setServiceRating] = useState("excellent");

  const calculateTip = () => {
    let tipPercentage = 0;
    if (serviceRating === "excellent") {
      tipPercentage = 0.2;
    } else if (serviceRating === "moderate") {
      tipPercentage = 0.1;
    } else if (serviceRating === "bad") {
      tipPercentage = 0.05;
    }
    return billAmount * tipPercentage;
  };

  const handleSubmit = () => {
    const tipAmount = calculateTip();
    addCustomer({ name, billAmount, tipAmount });
    setName("");
    setBillAmount(0);
  };

  return (
    <div>
      <div>
        <label className="form-label">Customer Name</label>
        <div>
          <input
            className="form-control border border-primary border-3"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label for="number" className="form-label">
          Amount Of Bill
        </label>
        <div>
          <input
            className="form-control border border-primary border-3"
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="form-label">Select the tip</label>
        <div>
          <select
            className="form-select border border-primary border-3 mb-2"
            value={serviceRating}
            onChange={(e) => setServiceRating(e.target.value)}
          >
            <option value="excellent">Excellent (20%)</option>
            <option value="moderate">Moderate (10%)</option>
            <option value="bad">Bad (5%)</option>
          </select>
        </div>
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Add Customer
      </button>
    </div>
  );
};

export default CustomerForm;
