import { motion } from "framer-motion";
import img1 from "../images/vegthali.jpg";
import img2 from "../images/chicken.jpg";
import img3 from "../images/mutton.png";


const ThakaliSet = () => {
  const menuItems = [
    {
      name: "Veg ThaliSet",
      price: "Rs. 300 /-",
      image: img1,
    },
    {
      name: "Chicken ThaliSet",
      price: "Rs. 500 /-",
      image: img2,
    },
    {
      name: "Mutton ThaliSet",
       price: "Rs. 650 /-",
      image: img3,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-teal-700">THALI SET</h2>
        <p className="text-pink-500 italic">Thakali Restaurant</p>
        <div className="w-16 h-[2px] bg-gray-300 mx-auto my-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 ">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              )}
            </div>
            <span className="text-pink-500 font-bold">{item.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThakaliSet;
