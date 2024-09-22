import React, { createContext, useState } from "react";

export const AuthContext = createContext();
// export const {Provider} = createContext() bu şekilde AuthContext içinden doğrudan dest edilerek gelebilir de.

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user)
    const login = (info) => {
        setUser(info)
    }
  return (
    <AuthContext.Provider value={{user, login}}>
        {children}
    </AuthContext.Provider>
  )

};

export default AuthProvider;
