import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../images/thakaliset.png";

const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-5">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="About Us Background"
        className="absolute inset-0 w-full h-[500px] sm:h-[600px] object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center sm:text-left px-5 sm:px-0">
        {/* Logo and Name */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wider">ABOUT US</h1>

        {/* Separator */}
        <div className="my-6 border-t-2 border-white w-16 mx-auto sm:mx-0"></div>

        {/* Section Title */}
        <p className="mt-2 text-lg italic">Where We All Start</p>

        <nav className="mt-4 text-sm">
          <ul className="flex flex-wrap justify-center sm:justify-start space-x-2">
            <li>
              <Link to="/" className="hover:text-orange-300">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>About Us</li>
          </ul>
        </nav>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full px-5 py-6 flex justify-between items-center bg-opacity-50 lg:bg-transparent">
        <h1 className="text-white text-3xl sm:text-4xl font-bold">
          Thakali <br />
          <span className="text-lg font-light tracking-widest">RESTAURANT</span>
        </h1>
        <ul className="flex flex-wrap space-x-6 text-white text-sm sm:text-lg">
          <li>
            <Link to="/" className="hover:text-orange-300">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-orange-300">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-orange-300">
              MENU
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-orange-300">
              GALLERY
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-orange-300">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
