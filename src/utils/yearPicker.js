import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const YearRangePicker = ({ startYear, setStartYear, endYear, setEndYear }) => {
    return (
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