import { motion } from "framer-motion";
import img1 from "../images/plainR.jpg";
import img2 from "../images/butterR.png";

const Roti = () => {
  const menuItems = [
    {
      name: "Plain Roti Per Piece",
      price: "Rs. 30 /-",
      image: img1,
    },
    {
      name: "Butter Roti Per Piece",
      price: "Rs. 60 /-",
      image: img2,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-teal-700">ROTI</h2>
        <p className="text-pink-500 italic">Thakali Restaurant</p>
        <div className="w-16 h-[2px] bg-gray-300 mx-auto my-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-start space-x-4 sm:space-x-8"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-md mx-auto sm:mx-0"
            />
            <div className="flex-1 mt-4 sm:mt-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              )}
            </div>
            <span className="text-pink-500 font-bold mt-2 sm:mt-0">{item.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roti;
