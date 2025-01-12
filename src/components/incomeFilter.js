import React, { useState } from "react";
import Toast from "../utils/toast";

const IncomeFilterBar = ({ data, setFilteredData, originalData, setOriginalData }) => {
  const [incomeRange, setIncomeRange] = useState({ start: "", end: "" });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const applyFilter = () => {
    let filtered = [...originalData];
    
    if(incomeRange.start > incomeRange.end) {
      setToastMessage("The 'To' cannot be smaller than 'From'.");
      setToastType("error");
      setShowToast(true);
      return;
    }

    if (incomeRange.start && incomeRange.end) {
      filtered = filtered.filter(
        (item) => item.netIncome >= incomeRange.start && item.netIncome <= incomeRange.end
      );
    }

    setFilteredData(filtered);
    setOriginalData(originalData);
  };

  return (
    <div className="mb-4">
      <h3 className="text-md font-medium">Select Income Range</h3>
      <input
        type="number"
        placeholder="From ($)"
        className="w-full border p-2 rounded-md shadow-sm mt-2"
        onChange={(e) => setIncomeRange({ ...incomeRange, start: e.target.value })}
      />
      <input
        type="number"
        placeholder="To ($)"
        className="w-full border p-2 rounded-md shadow-sm mt-2"
        onChange={(e) => setIncomeRange({ ...incomeRange, end: e.target.value })}
      />
      <div className="py-5">
      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg shadow hover:bg-indigo-700 transition" onClick={applyFilter}>
        Apply Income Filter
      </button>  
    </div>
    <Toast message={toastMessage} type={toastType} show={showToast} setShow={setShowToast} />
    </div>
  );
};

export default IncomeFilterBar;
