import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const YearRangePicker = ({ startYear, setStartYear, endYear, setEndYear }) => {
    return (
        //   <div className="flex items-center space-x-4">
        //     {/* From Year Picker */}
        //     <div className="relative">
        //       <label className="block text-gray-600 text-sm mb-1">From</label>
        //       <DatePicker
        //         selected={startYear}
        //         onChange={(date) => setStartYear(date)}
        //         showYearPicker
        //         dateFormat="yyyy"
        //         className="border p-2 rounded-md w-32 text-center shadow-md focus:ring-2 focus:ring-blue-500"
        //         popperClassName="border bg-white shadow-lg rounded-md"
        //         calendarClassName="bg-white border border-gray-300 rounded-md shadow-lg"
        //         wrapperClassName="relative"
        //       />
        //     </div>

        //     {/* To Year Picker */}
        //     <div className="relative">
        //       <label className="block text-gray-600 text-sm mb-1">To</label>
        //       <DatePicker
        //         selected={endYear}
        //         onChange={(date) => setEndYear(date)}
        //         showYearPicker
        //         dateFormat="yyyy"
        //         className="border p-2 rounded-md w-32 text-center shadow-md focus:ring-2 focus:ring-blue-500"
        //         popperClassName="border bg-white shadow-lg rounded-md"
        //         calendarClassName="bg-white border border-gray-300 rounded-md shadow-lg"
        //         wrapperClassName="relative"
        //       />
        //     </div>
        //   </div>

      
            <div className="flex space-x-4 mt-2">
                <div className="w-1/2">
                    <label className="text-sm text-gray-600">From</label>
                    <DatePicker
                        selected={startYear}
                        onChange={(date) => setStartYear(date)}
                        showYearPicker
                        dateFormat="yyyy"
                        className="border p-2 w-full rounded-md shadow-sm"
                    />
                </div>
                <div className="w-1/2">
                    <label className="text-sm text-gray-600">To</label>
                    <DatePicker
                        selected={endYear}
                        onChange={(date) => setEndYear(date)}
                        showYearPicker
                        dateFormat="yyyy"
                        className="border p-2 w-full rounded-md shadow-sm"
                    />
                </div>
            </div>

    );
};

export default YearRangePicker;