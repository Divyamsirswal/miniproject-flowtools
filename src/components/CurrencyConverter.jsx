import React, { useState } from "react";
import { InputBox } from "./input";
import useCurrencyInfo from "../components/hooks/useCurrencyInfo";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    const tempFrom = from;
    setFrom(to);
    setTo(tempFrom);
    const tempAmount = amount;
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen flex-col flex justify-center items-center bg-cover bg-no-repeat  bg-stone-950">
      <h1 className="text-white text-center text-5xl font-sf_dm mb-6">
        Currency Converter
      </h1>
      <div className="w-full max-w-4xl p-20  border bg-zinc-900 bg-opacity-90 rounded-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-4">
            <InputBox
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}
              label="From"
            />
          </div>
          <div className="relative mb-4">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-2xl bg-black text-white px-5 py-2 transition-all ease-in-out duration-700"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="mb-4">
            <InputBox
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              label="To"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="border hover:bg-white hover:text-black bg-black text-white px-10 py-4 rounded-3xl transition-all ease-in-out duration-300"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CurrencyConverter;
