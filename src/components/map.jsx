import React from "react";

const Map = () => {
  return (
    <div className="w-full h-0 pb-[25%] relative">  {/* Adjust height by changing the percentage */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300778.7692173233!2d85.16778111020476!3d27.64360575420146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bba06380db%3A0xf4dc4fba9195fdc4!2sThe%20Thakali%20Food%20Cafe!5e0!3m2!1sen!2snp!4v1738849515665!5m2!1sen!2snp"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
