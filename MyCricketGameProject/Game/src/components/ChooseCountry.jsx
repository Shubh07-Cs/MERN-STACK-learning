import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChooseCountry.css";
import "./ArcadeMode.jsx";

const countries = [
  { name: "India", color: "blue", teamName: "India" },
  { name: "Pakistan", color: "green", teamName: "Pakistan" },
  { name: "Australia", color: "yellow", teamName: "Australia" },
  { name: "England", color: "skyblue", teamName: "England" },
  { name: "New Zealand", color: "black", teamName: "New Zealand" },
  { name: "West Indies", color: "maroon", teamName: "West Indies" },
  { name: "South Africa", color: "darkgreen", teamName: "South Africa" },
  { name: "Sri Lanka", color: "royalblue", teamName: "Sri Lanka" },
];


export default function ChooseCountry() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handlePlayClick = () => {
    if (selectedCountry) {
      navigate("/arcade"); // Pass selected country in URL
    }
  };

  return (
    <div className="choose-country-container">
      <h1>Choose Your Country</h1>
      <div className="country-slider-container">
        <div className="country-slider">
          {countries.map((country) => (
            <div
              key={country.name}
              className={`country-option ${selectedCountry === country ? "selected" : ""}`}
              onClick={() => handleCountrySelect(country)}
              style={{ backgroundColor: country.color }} // Set color dynamically
            >
              {country.name}
            </div>
          ))}
        </div>
      </div>
      <button className="play-button" onClick={handlePlayClick} disabled={!selectedCountry}>
        Play
      </button>
    </div>
  );
}