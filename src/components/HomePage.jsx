import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="relative w-screen h-screen bg-black">
      <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-950 w-10/12 h-5/6 border rounded-5xl rounded-tl-[0vw] rounded-tr-[10rem] rounded-bl-[10rem] rounded-br-[0vw] rounded-lg shadow-lg flex flex-col items-center justify-center">
        
        <div className="flex items-baseline justify-center">
          <h3 className="text-5xl font-sf_li text-white mb-10">flow</h3>
          <h5 className="text-1xl font-sf_li text-white">tools</h5>
        </div>

        <MediaQuery maxDeviceWidth={414}>
          
          <div className="relative w-11/12 h-3/5 flex-col gap-5 bg-transparent border rounded-3xl flex items-center justify-center">
            {renderButtons("text-lg", "h-16", "py-2")}
          </div>
        </MediaQuery>

        <MediaQuery minDeviceWidth={415} maxDeviceWidth={896}>
         
          <div className="relative w-3/4 h-4/5 flex-col gap-5 bg-transparent border rounded-3xl flex items-center justify-center">
            {renderButtons("text-2xl", "h-20", "py-4")}
          </div>
        </MediaQuery>

        <MediaQuery minDeviceWidth={897}>
         
          <div className="relative w-1/4 h-3/5 flex-col gap-5 bg-transparent border rounded-3xl flex items-center justify-center">
            {renderButtons("text-2xl", "h-16", "py-4")}
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

const renderButtons = (textSize, height, paddingY) => (
  <>
    <button
      className={`transition-all ease-in-out hover:bg-transparent hover:border hover:text-white duration-300 ${textSize} font-sf_sb w-10/12 ${height} rounded-[1.3rem] bg-white`}
    >
      <Link to="/passwordGenerator">
        <h1 className={`h-full items-center flex justify-center ${paddingY}`}>
          Password Generator
        </h1>
      </Link>
    </button>
    <button
      className={`transition-all ease-in-out hover:bg-transparent hover:border hover:text-white duration-300 ${textSize} font-sf_sb w-10/12 ${height} rounded-[1.3rem] bg-white`}
    >
      <Link to="/currencyConverter">
        <h1 className={`h-full items-center flex justify-center ${paddingY}`}>
          Currency Converter
        </h1>
      </Link>
    </button>
    <button
      className={`transition-all ease-in-out hover:bg-transparent hover:border hover:text-white duration-300 ${textSize} font-sf_sb w-10/12 ${height} rounded-[1.3rem] bg-white`}
    >
      <Link to="/qrCodeGenerator">
        <h1 className={`h-full items-center flex justify-center ${paddingY}`}>
          QR Code Generator
        </h1>
      </Link>
    </button>
    <button
      className={`rounded-[1.7vw] w-1/2 ${height} flex justify-center items-center px-10 border mt-8 cursor-pointer ${textSize} font-sf_dm text-white transition-all ease-in-out hover:bg-white hover:text-black duration-500`}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Divyamsirswal"
      >
        <h1 className={`px-14 ${paddingY} items-center flex justify-center`}>
          Github
        </h1>
      </a>
    </button>
  </>
);

export default HomePage;
