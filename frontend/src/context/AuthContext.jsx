import { useState, createContext } from "react";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/login", {
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
      const response = await axios.post("http://127.0.0.1:8000/logout");

      if (response.status === 200) {
        console.log("Logout successful");
        setUser(null);
      }
    } catch (err) {
      console.log("error in logout");
    }
  };

  const register = async () => {};

  return (
    <AuthContext.Provider value={{ user, error, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
