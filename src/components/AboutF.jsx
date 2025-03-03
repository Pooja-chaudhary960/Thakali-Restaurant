import React from "react";
import img1 from "../images/mix.png";

const AboutFood = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-8 lg:px-16 lg:py-16">
      {/* Image Section */}
      <div className="relative flex justify-center items-center mb-8 lg:mb-0 lg:w-1/2">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform rotate-45 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80">
          <img
            src={img1}
            alt="Food Mix"
            className="w-full h-full object-cover transform -rotate-45"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left lg:ml-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-700">ART OF FOOD</h2>
        <h3 className="text-xl text-orange-500 my-4">Welcome to Thakali Restaurant</h3>
        <p className="text-gray-600 text-justify sm:text-base md:text-lg">
          Thakali Restaurant, established in 2020, offers a warm and inviting escape from Baneshwor.
          Specializing in authentic Thakali cuisine, this restaurant brings the rich flavors of Nepal’s Himalayan region to the heart of the city. 
          With its traditional décor and welcoming ambiance, Thakali Restaurant provides a truly immersive
          dining experience for those seeking an authentic taste of Nepalese heritage.
        </p>
      </div>
    </div>
  );
};

export default AboutFood;
