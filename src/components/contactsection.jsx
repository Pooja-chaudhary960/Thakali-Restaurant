import React from "react";
import fbIcon from "../images/facebook.png"; 
import twitterIcon from "../images/twitter.png"; 
import googleIcon from "../images/google.png"; 

const ContactSection = () => {
  return (
    <div className="py-16 bg-white text-center">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-teal-700 uppercase">CONTACT US</h2>
      <p className="text-orange-500 italic text-lg mt-1">Get <span className="italic">in touch with us</span></p>
      <div className="w-16 border-t-2 border-gray-300 mx-auto mt-2"></div>

      {/* Description */}
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        The business of feeding people is the most amazing business in the world.
      </p>

      {/* Contact Details */}
      <div className="mt-6 text-gray-700">
        <p className="font-semibold italic">Location : <span className="not-italic">Baneshwor</span></p>
        <p className="font-semibold italic">Email : <span className="not-italic text-blue-500">thakali@gmail.com</span></p>
        <p className="font-semibold italic">Phone : <span className="not-italic">+977 9815560532</span></p>
      </div>

      {/* Schedule */}
      <div className="mt-6">
        <h3 className="text-teal-700 font-bold">SCHEDULES</h3>
        <p className="italic font-semibold">Sunday - Saturday: <span className="not-italic">8:00AM - 11:00PM</span></p>
      </div>

      {/* Social Icons Using Images */}
      <div className="mt-6 flex justify-center space-x-4 flex-wrap">
        <a href="#" className="w-10 h-10 mb-4 md:mb-0">
          <img src={fbIcon} alt="Facebook" className="w-full h-full object-contain" />
        </a>
        <a href="#" className="w-10 h-10 mb-4 md:mb-0">
          <img src={twitterIcon} alt="Twitter" className="w-full h-full object-contain" />
        </a>
        <a href="#" className="w-10 h-10 mb-4 md:mb-0">
          <img src={googleIcon} alt="Google+" className="w-full h-full object-contain" />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
