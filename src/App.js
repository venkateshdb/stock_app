import React, { useState, useEffect } from "react";
import { useFetchData } from "./hooks/useFetchData";
import DataTable from "./components/DataTable";

import FinancialUI from "./pages/financeUI";
import FilterSidebar from "./components/filterSidebar";

const App = () => {
  const { data, loading } = useFetchData();
  const [filteredData, setFilteredData] = useState([]);

  const [originalData, setOriginalData] = useState(data); 

  useEffect(() => {
    if (data.length > 0) {
      setFilteredData(data);
      setOriginalData(data);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-2xl font-bold text-center mb-4 md:font-sans py-10">Financial Data Filtering App</h1>
      <DataTable data={filteredData} setFilteredData={setFilteredData}/>
      <FilterSidebar data={filteredData} setFilteredData={setFilteredData} originalData={originalData} setOriginalData={setOriginalData}></FilterSidebar>
    </div>
  );
};

export default App;
