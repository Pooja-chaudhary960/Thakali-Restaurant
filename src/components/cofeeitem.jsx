import { motion } from "framer-motion";

const CofeeItem = () => {
  const menuItems = [
    { name: "Black Tea", price: "Rs. 100 /-" },
    { name: "Lemon Tea", price: "Rs. 70 /-" },
    { name: "Green Tea", price: "Rs. 50 /-" },
    { name: "Hot Milk", price: "Rs. 120 /-" },
    { name: "Milk Coffee", price: "Rs. 130 /-" },
    { name: "Black Coffee", price: "Rs. 150 /-" },
    { name: "Fresh Milk Tea", price: "Rs. 140 /-" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Title and Description */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-700">TEA & COFFEE</h2>
        <p className="text-pink-500 italic mt-2">Thakali Restaurant</p>
        <div className="w-16 h-[2px] bg-gray-300 mx-auto my-2"></div>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start justify-between bg-white shadow-lg rounded-lg p-4"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
              {/* Description, if any */}
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              )}
            </div>
            {/* Price */}
            <span className="text-pink-500 font-bold">{item.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CofeeItem;
