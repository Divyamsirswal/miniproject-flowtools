import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const WelcomePopup = ({ onClose, title, message, customStyle }) => {
  const popupRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const autoCloseTimeout = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => {
      clearTimeout(autoCloseTimeout);
    };
  }, []);

  const handleClose = () => {
    if (!isClosing && popupRef.current) {
      setIsClosing(true);
      popupRef.current.addEventListener("animationend", handleAnimationEnd, {
        once: true,
      });
      popupRef.current.classList.add("animate-fade-out");
    }
  };

  const handleAnimationEnd = () => {
    onClose();
  };

  return (
    <div
      ref={popupRef}
      className={`fixed bottom-4 right-4 bg-slate-900 ${customStyle} ${
        isClosing ? "animate-fade-out" : "animate-fade-in"
      } text-white p-6 rounded-lg shadow-lg z-50`}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg">{message}</p>
        <button
          className="bg-white text-gray-800 px-4 py-2 rounded mt-4 hover:bg-gray-300 focus:outline-none"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

WelcomePopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  customStyle: PropTypes.string,
};

export default WelcomePopup;
