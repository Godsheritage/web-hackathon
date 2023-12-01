import "./App.css";
import React from "react";
import LogOn from "./ pages/LogOn";
import Home from "./ pages/home/Home";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  // ProductContextProvider

  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logon" element={<LogOn />} />
      </Routes>
    </AppContextProvider>
  );
};

export default App;
