import { motion } from "framer-motion";

const JuiceItem = () => {
  const menuItems = [
    {
      name: "Lemon Mint",
      price: "Rs. 180 /-",
     
    },
    {
      name: "Orange Fresh",
      price: "Rs. 120 /-",
     
    },
    {
      name: "Lemon Fresh",
       price: "Rs. 150 /-",
      
    },
    {
        name: "WaterMelon",
        price: "Rs. 130 /-",
       
      },
      {
        name: "Avacado",
        price: "Rs. 200 /-",
       
      },
      {
        name: "Mango",
        price: "Rs. 110 /-",
       
      },
      
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-teal-700">Fresh Juice</h2>
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

export default JuiceItem;
