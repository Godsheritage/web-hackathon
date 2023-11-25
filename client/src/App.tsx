import "./App.css";
import { useEffect, useState } from "react";
import Home from "./ pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogOn from "./ pages/LogOn";
import io from "socket.io-client";

const App = () => {
 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logon" element={<LogOn />} />
    </Routes>
  );
};

export default App;
