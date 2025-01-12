import axios from "axios";

const URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${process.env.REACT_APP_API_KEY}&limit=100`;


export const getFinanceData = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch(err) {
        console.error(err);
    }
};