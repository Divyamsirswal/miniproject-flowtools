import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import PasswordGenerator from "./components/PasswordGenerator";
import QrCodeGenerator from "./components/QrCodeGenerator";
import CurrencyConverter from "./components/CurrencyConverter";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/passwordGenerator" element={<PasswordGenerator />} />
        <Route path="/qrCodeGenerator" element={<QrCodeGenerator />} />
        <Route path="/currencyConverter" element={<CurrencyConverter />} />
      </Routes>
    </Router>
  );
};

export default App;
