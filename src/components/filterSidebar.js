import React, { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RevenueFilterBar from "./revenueFilter";
import IncomeFilterBar from "./incomeFilter";
import DateFilterBar from "./dateFilter";

const FilterSidebar = ({ data, setFilteredData, originalData, setOriginalData }) => {
  const [isOpen, setIsOpen] = useState(false);


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

        </div>
      )}
    </div>
  );
};

export default FilterSidebar;
