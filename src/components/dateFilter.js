import React, { useState } from "react";
import YearRangePicker from "../utils/yearPicker";

import { sortData } from "../utils/sortData";
import Toast from "../utils/toast";

const DateFilterBar = ({ data, setFilteredData, originalData, setOriginalData }) => {
  // const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  

  const applyFilter = () => {
    let filtered = [...originalData];
    
    console.log(`this ${startYear} and ${endYear}`);
    console.log(originalData);
    if(startYear.getFullYear() > endYear.getFullYear()) {
      setToastMessage("The 'To' cannot be smaller than 'From'.");
      setToastType("error");
      setShowToast(true);
      return;
    }
    if (startYear.getFullYear() && endYear.getFullYear()) {
      filtered = filtered.filter(
        (item) => item.date.substr(0,4) >= startYear.getFullYear() && item.date.substr(0,4) <= endYear.getFullYear()
      );
    }
    
    filtered = sortData(filtered, "date", "asc");
    setFilteredData(filtered);
    setOriginalData(originalData);
  };

  return (
    <div className="mb-4">
      <h3 className="text-md font-medium">Select Year Range</h3>
      <div>
      <YearRangePicker 
        startYear={startYear} 
        setStartYear={setStartYear} 
        endYear={endYear} 
        setEndYear={setEndYear} 
      />
      <div className="py-5">
      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg shadow hover:bg-indigo-700 transition" onClick={applyFilter}>
        Apply Date Filter
      </button>  
      </div>
    </div>
    <Toast message={toastMessage} type={toastType} show={showToast} setShow={setShowToast} />
    </div>
  );
};

export default DateFilterBar;
