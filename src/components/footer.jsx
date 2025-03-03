import React from "react";
import { ChevronUp } from "lucide-react";
import img from "../images/thakali.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-center py-10 relative shadow-lg">
      {/* Logo Section */}
      <div className="flex justify-center mb-4">
        <img
          src={img}
          alt="Thakali Logo"
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
        />
      </div>

      {/* Restaurant Name */}
      <h1 className="text-teal-700 text-2xl sm:text-3xl md:text-4xl font-bold mt-2">Thakali</h1>
      <h2 className="text-orange-600 text-lg sm:text-xl font-semibold">RESTAURANT</h2>

      {/* Copyright Info */}
      <p className="text-gray-500 mt-3 text-sm sm:text-base">
        2025 ALL RIGHTS RESERVED. DESIGNED BY{" "}
        <a
          href="https://softechfoundation.com"
          className="text-orange-600 font-semibold"
        >
          Softech Foundation
        </a>
      </p>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default Footer;
