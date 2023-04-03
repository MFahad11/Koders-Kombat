import React, { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

const AuthContextProvider = props => {

  const [activeUser, setActiveUser] = useState({})
  const [config, setConfig] = useState({
    headers: {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  })


  useEffect(() => {
    console.log(`Bearer ${localStorage.getItem("authToken")}`)
    const controlAuth = async () => {
      try {
        const { data } = await axios.get("http://localhost:4500/api/user/private", config);
        console.log(data)
        setActiveUser(data.user)
      }
      catch (error) {

        localStorage.removeItem("authToken");

        setActiveUser({})
      }
    };
    controlAuth()

  }, [])

  return (
    <AuthContext.Provider value={{ activeUser, setActiveUser, config, setConfig }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
