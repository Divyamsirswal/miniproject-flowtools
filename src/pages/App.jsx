import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import PasswordGenerator from "../components/PasswordGenerator";
import QrCodeGenerator from "../components/QrCodeGenerator";
import CurrencyConverter from "../components/CurrencyConverter";
import WelcomePopup from "../components/WelcomePopup";

const App = () => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = sessionStorage.getItem("hasVisitedBefore");
    if (!hasVisitedBefore) {
      setShowWelcomePopup(true);
      sessionStorage.setItem("hasVisitedBefore", true);
    }
  }, []);

  const closeWelcomePopup = () => {
    setShowWelcomePopup(false);
  };

  const handleClose = () => {
    setShowWelcomePopup(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/passwordGenerator" element={<PasswordGenerator />} />
        <Route path="/qrCodeGenerator" element={<QrCodeGenerator />} />
        <Route path="/currencyConverter" element={<CurrencyConverter />} />
      </Routes>

      {showWelcomePopup && (
        <WelcomePopup
          onClose={handleClose}
          title="Welcome to flowtools!!"
          message="Explore the minimal tools."
          customStyle="from-purple-500 via-pink-500 to-red-500"
        />
      )}
    </Router>
  );
};

export default App;
