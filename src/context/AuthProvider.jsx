// AuthProvider.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
const axiosWithCredentials = axios.create({
  withCredentials: true, // Include credentials (cookies) with requests
});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = async (userName, password) => {
    try {
      // You can replace 'login' with your server endpoint for logging in
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + "/api/login",
        { userName, password },
        { withCredentials: true }
      );
      if (!response.data.error) {
        toast.success("Logged In", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setUser(response.data.user);
        return true;
      }
    } catch (error) {
      toast.error("Check your username and password", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Error logging in:", error);
      return false;
    }
  };
  // Function to check if the user is logged in
  const checkLoggedIn = async () => {
    try {
      // You can replace 'check-auth' with your server endpoint that checks authentication
      const response = await axiosWithCredentials.get(
        import.meta.env.VITE_BASE_URL + "/api/users/checkauth",
        {
          withCredentials: true, // Include credentials (cookies) with requests
        }
      );
      // ("rdata", response.data);
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Error checking authentication:", error.response);
    }
  };

  useEffect(() => {
    //checkLoggedIn();
  }, []);

  // Function to log out
  const logout = async () => {
    try {
      // You can replace 'logout' with your server endpoint for logging out
      await axios.get(import.meta.env.VITE_BASE_URL + "/api/logout", {
        withCredentials: true,
      });
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Create an Axios instance with credentials

  const contextValue = {
    user,
    loginCheck: () => checkLoggedIn(),
    logout,
    login,
    axios: axiosWithCredentials, // Provide the Axios instance with credentials
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
