import React, { useState } from "react";
import Upload from "./Upload";

function Hero() {
  const [prediction, setPrediction] = useState("");
  const [animationKey, setAnimationKey] = useState(0); 

  const handlePrediction = (label) => {
    setPrediction(label);
    setAnimationKey(prev => prev + 1); 
  };

  const bins = [
    { label: "paper", image: "./images/paper-bin.png" },
    { label: "plastic", image: "./images/plastic.png" },
    { label: "metal", image: "./images/metal.png" },
    { label: "glass", image: "./images/glass-bin.png" },
  ];

  return (
    <div className="h-[618px] bg-[#75fc8bed] flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center p-16">
        <Upload onPredict={handlePrediction} />
      </div>

      <div className="flex flex-row justify-around items-center p-16 space-x-8">
        {bins.map((bin, index) => {
          const isHighlighted = prediction.toLowerCase().includes(bin.label);
          return (
            <div
              key={`${index}-${isHighlighted ? animationKey : ""}`} // force update on highlight
              className={`flex h-[170px] w-[170px] transition-transform duration-500 ease-in-out rounded-xl 
                ${isHighlighted ? "animate-pulse scale-110 border-4 border-yellow-400 shadow-xl" : ""}`}
            >
              <img
                src={bin.image}
                alt={bin.label}
                className="w-auto h-auto object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
