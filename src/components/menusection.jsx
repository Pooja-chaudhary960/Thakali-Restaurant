import React from "react";
import img1 from "../images/breakfast.jpg"; // Dark overlay image
import img2 from "../images/dessert.jpg";   // Default normal image
import img3 from "../images/dinner.jpg";    // Another normal image

const MenuSection = () => {
  const menuItems = [
    { id: "breakfast", name: "BREAKFAST", normalImg: img1, overlayImg: img1, rating: 5 },
    { id: "dessert", name: "DESSERT", normalImg: img2, overlayImg: img2, rating: 4 },
    { id: "dinner", name: "DINNER", normalImg: img3, overlayImg: img3, rating: 5 },
  ];

  return (
    <div className="py-8 bg-white text-center">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-teal-700">OUR MENU</h2>
      <p className="text-orange-500 italic text-md mt-2">Choose & Taste</p>

      {/* Menu Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1000px] mx-auto px-4">
        {menuItems.map((item) => (
          <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
            {/* Normal Image (Base Layer) */}
            <img
              src={item.normalImg}
              alt={item.name}
              className="w-full h-[400px] object-cover transition-transform duration-500"
            />

            {/* Hover Image (Slides Up on Hover) */}
            <div className="absolute inset-0 bg-black bg-opacity-70 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
              <img
                src={item.overlayImg}
                alt={item.name}
                className="w-full h-full object-cover opacity-50"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <p className="text-lg font-bold">{item.name}</p>
                {/* Star Ratings */}
                <div className="flex mt-1">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <span key={index} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
