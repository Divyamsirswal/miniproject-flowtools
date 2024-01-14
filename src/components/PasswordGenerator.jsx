import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+=[]{}~`";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex gap-4 flex-col justify-center items-center min-h-screen bg-stone-950 p-4 md:p-8 lg:p-12">
        <h1 className="text-5xl text-white font-sf_dm mb-4 ">
          Password Generator
        </h1>
        <div className="relative flex flex-col rounded-2xl w-full bg-zinc-900 border p-20 md:w-2/3">
          <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <input
              type="text"
              value={password}
              className="bg-black text-white rounded-2xl rounded-r-2xl sm:rounded-r-none p-3 md:p-5 outline-none w-full md:w-2/3 h-12 md:h-16 mb-2 md:mb-0"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyToClipBoard}
              className="transition-all font-sf_sb  sm:rounded-l-none rounded-l-2xl h-12 md:h-16 ease-in-out hover:text-black hover:bg-white outline-none text-white bg-black rounded-2xl px-3 py-0.5"
            >
              Copy
            </button>
          </div>
          <div className="pt-4 pb-8 text-white font-sf_dm flex flex-col md:flex-row w-full justify-center items-center text-sm">
            <div className="flex-col items-center gap-4 mr-4 md:mr-8 flex item-center">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer w-auto md:w-2/3"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-xl font-sf_li">Length: {length}</label>
            </div>
            <div className=" flex gap-8">
              <div className="flex items-center gap-x-2 md:mb-0">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label className="text-xl font-sf_sb">Numbers</label>
              </div>
              <div className="flex items-center gap-x-2 md:mb-0 ">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                <label className="text-xl font-sf_sb">Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
