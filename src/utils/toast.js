import React, { useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Toast = ({ message, type, show, setShow }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setShow(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [show, setShow]);

    if (!show) return null;

    return (
        <div className={`fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3 text-white transition-opacity duration-300 ease-in-out ${type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
        >
            {type === "success" ? <FaCheckCircle /> : <FaTimesCircle />}
            <span>{message}</span>
            <button onClick={() => setShow(false)} className="text-white hover:text-gray-200">
                ✖
            </button>
        </div>
    );
};

export default Toast;
