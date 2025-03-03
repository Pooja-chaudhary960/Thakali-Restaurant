import React from "react";
import img from "../images/mission.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInfoSection = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-16"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-around items-center text-center md:text-left space-y-8 md:space-y-0 relative z-10">
        {/* Address */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center w-16 h-16 border-2 border-pink-500 rounded-full mb-4">
            <FaMapMarkerAlt className="text-3xl text-white-500" />
          </div>
          <h3 className="font-bold uppercase text-lg">Address</h3>
          <p className="mt-2">Baneshwor</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center w-16 h-16 border-2 border-pink-500 rounded-full mb-4">
            <FaPhoneAlt className="text-3xl text-white-500" />
          </div>
          <h3 className="font-bold uppercase text-lg">Phone</h3>
          <p className="mt-2">Telephone: +977 9815560775</p>
          <p className="mt-1">Mobile: +977 9815560532</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center w-16 h-16 border-2 border-pink-500 rounded-full mb-4">
            <FaEnvelope className="text-3xl text-white-500" />
          </div>
          <h3 className="font-bold uppercase text-lg">E-mail</h3>
          <p className="mt-2">thakali@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
