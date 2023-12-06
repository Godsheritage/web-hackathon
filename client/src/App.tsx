import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./content/userContext";
import { checkUser } from "../magic";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./ pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogOn from "./ pages/LogOn";
import SignUp from "./ pages/Authenticate/SignUp";

const App = () => {
  const [user, setUser] = useState({ isLoggedIn: null, email: '' });

  useEffect(() => {
    const validateUser = async () => {
      try {
        await checkUser(setUser);
      } catch (error) {
        console.error(error);
      }
    };
    validateUser();
  }, [user.isLoggedIn])

  return (
    <UserContext.Provider value={user}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logon" element={<LogOn />} />
      <Route path="/signUp" element= {< SignUp/>} /> 
    </Routes>
    </UserContext.Provider>
    
  );
};

export default App;
