import React from "react";
import bgImage from "../images/food.jpeg"; // Replace with your image path

const Test = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Content */}
      <div className="relative text-center px-4 sm:px-8"> 
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white italic mt-2">
          Take a look at the new food promotion
        </p>
      </div>
    </div>
  );
};

export default Test;
