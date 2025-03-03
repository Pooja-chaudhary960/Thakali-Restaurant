import React from "react";
import backgroundImage from "../images/thakaliset.png";
import decorativeIcon from "../images/decorative.png";

const Restaurant = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-5">
      {/* Background Image */}
      <img 
        src={backgroundImage} 
        alt="Restaurant Background" 
        className="absolute inset-0 w-full max-h-[600px] object-cover -z-10"
      />

      {/* Transparent Content Box */}
      <div className=" -mt-32 relative bg-white/30 backdrop-blur-lg p-10 w-[500px] min-h-[600px] text-center rectangle-lg shadow-lg border border-white/20">
        {/* Decorative Icon */}
        <div className="flex justify-center mb-2">
          <img src={decorativeIcon} alt="Decorative Icon" className="w-10 h-10" />
        </div>
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 drop-shadow-md">Thakali RESTAURANT</h2>

        {/* Subtitle */}
        <p className="italic text-orange-600 mt-1 text-lg sm:text-xl">Welcome to Thakali Restaurant</p>

        {/* Description */}
        <p className="text-gray-900 leading-relaxed text-lg sm:text-1xl text-justify mt-4">
         Thakali Restaurant, established in 2020, offers a warm and inviting escape from Baneshwor. 
         Specializing in authentic Thakali cuisine, this restaurant brings the rich flavors of Nepal’s Himalayan region to the heart of the city. 
         With its traditional décor and welcoming ambiance, Thakali Restaurant provides a truly immersive
         dining experience for those seeking an authentic taste of Nepalese heritage.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-2 border border-orange-500 text-orange-500 rounded-full transition-all hover:bg-orange-500 hover:text-white">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default Restaurant;
