import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../images/mission.jpg";
import img2 from "../images/thakalih.jpg";
import img3 from "../images/thakalihu.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    img1,
    img2,
    img3,
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const MissionSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-8 lg:px-16 lg:py-16">
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-700">OUR MISSION</h2>
        <h3 className="text-xl text-orange-500 my-4">Goals & Vision</h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
          At Thakali Restaurant, we have a very clear and precise mission: to impress our
          customers by giving them the highest degree of service possible and
          providing them with the freshest, finest, and best-quality food at
          reasonable prices in a soothing and comfortable environment. Our
          policies focus on delivering only the best quality food, service, and
          a great atmosphere to ensure repeat clientele, which can never be
          achieved by advertisements alone.
          <br />
          <br />
          Procedures we follow ensure standardized recipes and constant training
          of staff to provide the same quality food every time. Here, you can
          enjoy the warmth of traditional Nepali sweets, snacks, and a
          multi-cuisine restaurant that celebrates passion and innovation while
          maintaining the original flavors of Nepali food with a focus on
          quality, hygiene, and affordability.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center px-4">
        <Carousel />
      </div>
    </div>
  );
};

export default MissionSection;
