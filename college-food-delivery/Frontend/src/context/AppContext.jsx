import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(null); // 🍪 Don't need localStorage if using cookies
  const [allOrders, setAllOrders] = useState([]);

  const backendUrl = "http://localhost:8080";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/user/profile`, {
          withCredentials: true,
        });
        if (data.success) {
          setUser(data.user);
          setToken("exists"); 
        }
      } catch (err) {
        console.log("User not logged in");
        setToken(null);
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    await axios.get(`${backendUrl}/api/user/logout`, {
      withCredentials: true,
    });
    setToken(null);
    setUser(null);
  };

  const value = {
    allOrders,
    setAllOrders,
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
