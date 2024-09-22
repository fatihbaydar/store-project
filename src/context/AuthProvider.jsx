import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
// export const {Provider} = createContext() bu şekilde AuthContext içinden doğrudan dest edilerek gelebilir de.

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  console.log(user);
  const login = (info) => {
    setUser(info);
    navigate("/dashboard");
  };
  const logout = () => setUser(null);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
