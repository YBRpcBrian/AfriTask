import React, { useState } from "react";
import { Search, Brush, Code, FileText, Megaphone, Globe, CheckCircle } from "lucide-react";
import TaskCards from "./TaskCards";
import cardData from "./cardData";
import { motion } from "framer-motion";

const categoryIcons = {
  Design: <Brush size={14} />,
  Development: <Code size={14} />,
  Writing: <FileText size={14} />,
  Marketing: <Megaphone size={14} />,
  Translation: <Globe size={14} />,
};

const typeIcons = {
  Copywriting: <FileText size={12} />,
  SEO: <Megaphone size={12} />,
  Development: <Code size={12} />,
  Translation: <Globe size={12} />,
};

const Taskcomp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const categories = ["Design", "Development", "Writing", "Marketing", "Translation"];
  const types = ["Copywriting", "SEO", "Development", "Translation"];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filteredTasks = cardData.filter((task) => {
    const title = task.title || "";
    const category = task.category || "";
    const type = task.type || "";

    const matchesSearch = searchTerm.trim() === "" || title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(category);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(type);

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-8 px-3 md:px-6 h-[calc(100vh-80px)]">
      {/* Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/4 bg-white border border-gray-200 p-4 rounded-2xl shadow-md sticky top-20 self-start max-h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide"
      >
        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => {
              const isSelected = selectedCategories.includes(cat);
              return (
                <motion.button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer select-none
                    transition-colors duration-300
                    ${isSelected ? "bg-primary text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"}
                    `}
                >
                  <div
                    className={`p-0.5 rounded-full border-2 ${
                      isSelected ? "border-white" : "border-gray-300"
                    } flex-shrink-0`}
                  >
                    {categoryIcons[cat]}
                  </div>
                  <span
                    className="font-medium text-xs truncate max-w-[80px]"
                    title={cat}
                  >
                    {cat}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Price Range (Disabled) */}
        <div className="opacity-50 cursor-not-allowed">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Max Price (Inactive)</h2>
          <input
            type="range"
            min="0"
            max="500"
            value={250}
            disabled
            className="w-full accent-primary cursor-not-allowed"
          />
          <div className="text-xs text-gray-500 mt-1">Up to FCFA 250</div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Task Types */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Task Types</h2>
          <div className="grid grid-cols-2 gap-3">
            {types.map((type) => {
              const isSelected = selectedTypes.includes(type);
              return (
                <motion.button
                  key={type}
                  onClick={() => toggleType(type)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer select-none
                    transition-colors duration-300
                    ${isSelected ? "bg-primary text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"}
                    `}
                >
                  <div
                    className={`p-0.5 rounded-full border-2 ${
                      isSelected ? "border-white" : "border-gray-300"
                    } flex-shrink-0`}
                  >
                    {typeIcons[type]}
                  </div>
                  <span
                    className="font-medium text-xs truncate max-w-[80px]"
                    title={type}
                  >
                    {type}
                  </span>
                  {isSelected && <CheckCircle size={14} className="ml-auto text-white flex-shrink-0" />}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Main Section */}
      <div
        className="w-full lg:w-3/4 flex flex-col"
        style={{
          maxHeight: "calc(100vh - 80px)",
          overflowY: "auto",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        {/* Hide scrollbar for Webkit */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="relative mb-8 flex-shrink-0"
        >
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-base px-5 py-3 pl-12 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </motion.div>

        {/* Task Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-2"
        >
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <motion.div
                key={task.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <TaskCards
                  img={task.img}
                  title={task.title}
                  shortDescription={task.shortDescription}
                  price={task.price}
                  textSize="sm" // Pass a prop if you want to adjust inside TaskCards too
                />
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 mt-10 text-sm">
              No tasks found matching your criteria.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Taskcomp;
