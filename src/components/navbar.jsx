import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import img from "../images/thakali.png"; // Assuming the image path is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.location.reload(); // Manually reload the page
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex justify-between items-center px-10 py-4 bg-white shadow-md z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold text-teal-700">Thakali</h1>
        <span className="text-sm text-orange-600 font-semibold">RESTAURANT</span>
        <img src={img} alt="Decorative Icon" className="h-10 w-10 object-contain" />
      </div>

      {/* Hamburger Menu Icon (visible on mobile) */}
      <div className="lg:hidden flex items-center" onClick={toggleMenu}>
        <button className="text-teal-700 text-2xl">☰</button>
      </div>

      {/* Navigation Links */}
      <ul className={`lg:flex space-x-6 text-black font-medium ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <li>
          <Link to="/" className="hover:text-teal-600" onClick={handleHomeClick}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="hover:text-teal-600 cursor-pointer">ABOUT</Link>
        </li>
        <li>
          <Link to="/menu" className="hover:text-teal-600 cursor-pointer">MENU</Link>
        </li>
        <li>
          <Link to="/gallery" className="hover:text-teal-600 cursor-pointer">GALLERY</Link>
        </li>
        <li>
          <Link to="/contact-us" className="hover:text-teal-600 cursor-pointer">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
