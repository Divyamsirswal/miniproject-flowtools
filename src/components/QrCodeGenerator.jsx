// QrCodeGenerator.jsx
import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

const QrCodeGenerator = () => {
  const [text, setText] = useState("");
  const qrCodeRef = useRef(null);

  const generateQr = async () => {
    if (!text) {
      alert("Please enter text before generating the QR code.");
      return;
    }
    const qrCodeCanvas = await html2canvas(qrCodeRef.current);
    const dataUrl = qrCodeCanvas.toDataURL();
    const downloadLink = document.createElement("a");
    downloadLink.href = dataUrl;
    downloadLink.download = "qrcode.png";
    downloadLink.click();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col gap-4 justify-center items-center bg-black p-4">
        <h1 className="text-white font-sf_dm text-2xl sm:text-4xl mb-4">
          QR Code Generator
        </h1>
        <div className="mt-4" ref={qrCodeRef}>
          <QRCode className="border p-3 sm:p-5" size={300} value={text} />
        </div>

        <div className="flex items-center flex-col mt-4 w-full">
          <p className="text-white text-lg font-sf_sb mb-2">
            Enter your text here:
          </p>
          <input
            type="text"
            value={text}
            onChange={(e) => handleChange(e)}
            className="w-1/2 px-3 py-2 rounded-md border bg-black text-white"
          />
        </div>
        <div className="mt-4">
          <button
            onClick={generateQr}
            className="bg-black hover:bg-white hover:text-black transition-all ease-in-out duration-500 text-white px-6 py-3 font-sf_dm border rounded-2xl"
          >
            Download it!
          </button>
        </div>
      </div>
    </>
  );
};

export default QrCodeGenerator;
