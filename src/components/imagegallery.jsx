import React, { useState } from "react";
import img1 from "../images/food1.jpg";
import img2 from "../images/breakfast.jpg";
import img3 from "../images/food2.jpg";
import img4 from "../images/Desserts.jpg";
import img5 from "../images/pizza.jpg";
import img6 from "../images/dinner.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const ImageGallery = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div className="py-10">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-23 mt-[-210px]">
        <button
          className={`px-6 py-2 rounded-full border-2 ${filter === "All" ? "bg-orange-500 text-white" : "border-orange-500 text-orange-500"}`}
          onClick={() => setFilter("All")}
        >
          ALL
        </button>
        <button
          className={`px-6 py-2 rounded-full border-2 ${filter === "Photo" ? "bg-teal-500 text-white" : "border-teal-500 text-teal-500"}`}
          onClick={() => setFilter("Photo")}
        >
          PHOTO
        </button>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-6 px-65">
        {images.map((img, index) => (
    <div key={index} className="overflow-hidden rounded-xl shadow-lg w-[300px] h-[300px] flex items-center justify-center">
      <img src={img} alt={`Food ${index + 1}`} className="w-full h-full object-cover" />
    </div>
  ))}
</div> 
    </div>
  );
};

export default ImageGallery;
