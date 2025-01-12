import React from 'react';
import { useState } from 'react';
import { sortData } from '../utils/sortData';



const DataTable = ({ data, setFilteredData }) => {
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSort = (type) => {
    const order = sortOrder === "desc" ? "asc" : "desc";
    const sorted = sortData(data, type, order);

    setSortOrder(order);
    setFilteredData(sorted);
  };

  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll bg-white shadow-md rounded-lg bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100" onClick={() => handleSort("date")}>
              <p className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                Date
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={`w-4 h-4 text-gray-800 transition-transform duration-200 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </p>
            </th>
            <th className="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100" onClick={() => handleSort("revenue")}>
              <p className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                Revenue
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={`w-4 h-4 text-gray-800 transition-transform duration-200 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </p>
            </th>
            <th className="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100" onClick={() => handleSort("netIncome")}>
              <p className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                Net Income
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={`w-4 h-4 text-gray-800 transition-transform duration-200 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </p>
            </th>
            <th className="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
              <p className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                Gross Profit
              </p>
            </th>
            <th className="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
              <p className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                EPS
              </p>
            </th>
            <th className="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
              <p className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                Operating Income
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (

            <tr key={index} className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                  {item.date}
                </p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                  ${item.revenue.toLocaleString()}
                </p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                  ${item.netIncome.toLocaleString()}
                </p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                  ${item.grossProfit.toLocaleString()}
                </p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">{item.eps}
                </p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">${item.operatingIncome.toLocaleString()}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;