import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../images/thakalihu.jpg";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-5">
      {/* Background Image */}
      <img 
        src={backgroundImage} 
        alt="About Us Background" 
        className="absolute inset-0 w-full h-[500px] object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        {/* Logo and Name */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wider">CONTACT US</h1>

        {/* Separator */}
        <div className="my-6 border-t-2 border-white w-16 mx-auto"></div>

        {/* Section Title */}
        <p className="mt-2 text-lg italic">Get In Touch</p>

        {/* Breadcrumb Navigation */}
        <nav className="mt-4 text-sm">
          <ul className="flex space-x-2 justify-center">
            <li><a href="/" className="hover:text-orange-300">Home</a></li>
            <li>/</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full px-5 sm:px-10 py-6 flex justify-between items-center">
        <h1 className="text-white text-3xl sm:text-4xl font-bold">
          Thakali <br />
          <span className="text-lg font-light tracking-widest">RESTAURANT</span>
        </h1>
        <ul className="flex space-x-4 sm:space-x-6 text-white text-sm sm:text-lg">
          <li><Link to="/" className="hover:text-orange-300">HOME</Link></li>
          <li><Link to="/about-us" className="hover:text-orange-300">ABOUT</Link></li>
          <li><Link to="/menu" className="hover:text-orange-300">MENU</Link></li>
          <li><Link to="/gallery" className="hover:text-orange-300">GALLERY</Link></li>
          <li><Link to="/contact-us" className="hover:text-orange-300">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
