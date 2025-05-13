import React, { createContext, useEffect, useState } from "react";
import { AllOrders } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
  const [allOrders, setAllOrders] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const logout = () => {
        localStorage.removeItem('token');
        setToken(null);  
        setUser(null);   
    };

  // Simulate fetching orders
  const fetchAllOrders = async () => {
    setAllOrders(AllOrders);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);
  const value = {
    allOrders,
    user, setUser,
    showLogin, setShowLogin,
    backendUrl, token, setToken,
    logout,
  };



  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
