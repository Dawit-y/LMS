import { useState, createContext, useEffect } from "react";
import axios from "../api/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post("login", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Login successful");
        setUser(response.data);
        return "success";
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post("logout");

      if (response.status === 200) {
        console.log("Logout successful");
        setUser(null);
        setError(null);
      }
    } catch (err) {
      console.log("error in logout");
    }
  };

  const register = async () => {};

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get("check-session");
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (err) {
        console.log("No active session");
      }
    };

    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, error, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
