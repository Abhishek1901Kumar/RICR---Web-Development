import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const Convert = () => {
    if(!from|| !to || !fromAmt)


        try{

        } catch (error) {}

  };

  return (
    <>
      <div className="bg-amber-50 h-screen p-5">
        <div className="w-3xl ng-white rounded shadow border p-3 mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <div>
              {from && (
                <img
                  src={`https://flagsapi.com/${from.split(" ")[1]}/flat/64.png`}
                  alt=""
                />
              )}
              <select
                name="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="border p-3 rounded overflow-hidden"
              >
                <option value="">-Select Country-</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}{" "}
                  </option>
                ))}
              </select>
            </div>
            <select
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border p-3 rounded overflow-hidden"
            >
              <option value="">-Select Country-</option>
              {CountryData.map((country, idx) => (
                <option
                  value={country.CurrencyCode + " " + country.CountryCode}
                  key={idx}
                >
                  {country.CountryName}{" "}
                </option>
              ))}
            </select>
            <div className=" flex gap-3 items-center">
              <label htmlFor="fromAmt">Amount</label>
              <input
                type="text"
                name="fromAmt"
                placeholder="Enter the Amount to Convert"
                className="border rounded p-3 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
