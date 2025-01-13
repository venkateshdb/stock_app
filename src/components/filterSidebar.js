import React, { useState } from "react";
import { FaFilter, FaTimes, FaRedo } from "react-icons/fa";
import Toast from "../utils/toast";
import "react-datepicker/dist/react-datepicker.css";
import RevenueFilterBar from "./revenueFilter";
import IncomeFilterBar from "./incomeFilter";
import DateFilterBar from "./dateFilter";

const FilterSidebar = ({ data, setFilteredData, originalData, setOriginalData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const resetFilters = () => {
    
    setFilteredData(originalData);

    setToastMessage("Filters Reset!");
    setToastType("success");
    setShowToast(true);
  };

  return (
    <div>
      
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 hover:bg-indigo-600 transition"
      >
        <FaFilter /> <span>Filters</span>
      </button>

      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl p-6 transition-transform transform translate-x-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-gray-600 hover:text-red-500" />
            </button>
          </div>

          
          <DateFilterBar data={data} setFilteredData={setFilteredData} originalData={originalData} setOriginalData={setOriginalData} />

          <RevenueFilterBar data={data} setFilteredData={setFilteredData} originalData={originalData} setOriginalData={setOriginalData} />

          <IncomeFilterBar data={data} setFilteredData={setFilteredData} originalData={originalData} setOriginalData={setOriginalData} />

          <button
              onClick={resetFilters}
              className="bg-gray-500 text-white py-2 px-6 rounded-lg shadow hover:bg-gray-700 transition flex items-center space-x-2 ml-auto"
            >
              <FaRedo /> <span>Reset Filters</span>
            </button>
        </div>
      )}
      <Toast message={toastMessage} type={toastType} show={showToast} setShow={setShowToast} />

    </div>
  );
};

export default FilterSidebar;
