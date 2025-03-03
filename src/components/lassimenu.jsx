import { motion } from "framer-motion";
import img1 from "../images/bananalassi.jpg";
import img2 from "../images/sweetlassi.jpg";
import img3 from "../images/plainlassi.jpg";


const LassiMenu = () => {
  const menuItems = [
    {
      name: "BANANA LASSI",
      description:
        "Made of the finest yoghurt, fresh bananas and guaranteed by Nepal's best lassi makers – Banana Lassi",
      price: "Rs. 180 /-",
      image: img1,
    },
    {
      name: "SWEET LASSI",
      description:
        "Sweet Lassi – a blend of pure yoghurt, topped with rich spices that add a zing to your glass of refreshment.",
      price: "Rs. 150 /-",
      image: img2,
    },
    {
      name: "PLAIN LASSI",
      description: "",
      price: "Rs. 120 /-",
      image: img3,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-teal-700">LASSI</h2>
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

export default LassiMenu;
