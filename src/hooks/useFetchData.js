import {useState, useEffect} from 'react';
import {getFinanceData} from '../services/financeService';

export const useFetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const financeData = await getFinanceData();
            setData(financeData);
            setLoading(false);
        };
        fetchData();
    }, []);

    return { data, loading };
}