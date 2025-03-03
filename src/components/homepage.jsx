import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import image from '../video/thakaliv.mp4';

const HomePage = () => {
  const [textPosition, setTextPosition] = useState(-100);
  const [textPosition2, setTextPosition2] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextPosition((prev) => (prev < 0 ? 0 : prev));
      setTextPosition2((prev) => (prev > 0 ? 0 : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.location.reload(); // Manually reload the page
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src={image} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-center items-center py-6">
          <h1 className="text-white text-3xl sm:text-4xl font-bold text-center">
            Thakali <br />
            <span className="text-base sm:text-xl font-light tracking-widest">RESTAURANT</span>
          </h1>
        </nav>

        {/* Navigation Links */}
        <ul className="flex justify-center space-x-6 sm:space-x-8 text-white text-xs sm:text-sm uppercase font-semibold mt-4">
          <li>
            <Link to="/" className="hover:text-orange-400 cursor-pointer" onClick={handleHomeClick}>
              Home
            </Link>
          </li>
          <li><Link to="/about-us" className="hover:text-orange-300">ABOUT</Link></li>
          <li><Link to="/menu" className="hover:text-orange-300">MENU</Link></li>
          <li><Link to="/gallery" className="hover:text-orange-300">GALLERY</Link></li>
          <li><Link to="/contact-us" className="hover:text-orange-300">CONTACT</Link></li>
        </ul>

        {/* Centered Hero Text with useEffect-based Sliding */}
        <div className="flex flex-col items-center justify-center flex-grow text-white text-center px-5">
          <div
            className="text-xl sm:text-2xl font-bold"
            style={{ transform: `translateX(${textPosition}%)`, transition: "transform 2s ease-in-out" }}
          >
            <span>PREMIUM RESTAURANT THAKALI</span>
          </div>

          <div
            className="text-xl sm:text-2xl font-bold mt-4"
            style={{ transform: `translateX(${textPosition2}%)`, transition: "transform 2s ease-in-out" }}
          >
            <span>KEEP CALM & TASTE OUR FOOD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
