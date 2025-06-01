import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const talents = [
  {
    name: "Alice Johnson",
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
    skills: [
      { name: "React", color: "bg-blue-500", icon: <FaReact /> },
      { name: "Node.js", color: "bg-green-600", icon: <FaNodeJs /> },
      { name: "MongoDB", color: "bg-green-400", icon: <FaDatabase /> },
    ],
  },
  {
    name: "Brian Smith",
    profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
    skills: [
      { name: "React Native", color: "bg-purple-600", icon: <FaMobileAlt /> },
      { name: "Node.js", color: "bg-green-600", icon: <FaNodeJs /> },
      { name: "Express", color: "bg-gray-700", icon: null },
    ],
  },
  {
    name: "Catherine Lee",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    skills: [
      { name: "UI/UX Design", color: "bg-pink-500", icon: null },
      { name: "React", color: "bg-blue-500", icon: <FaReact /> },
      { name: "SEO", color: "bg-yellow-400", icon: null },
    ],
  },
  {
    name: "David Kim",
    profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
    skills: [
      { name: "DevOps", color: "bg-red-600", icon: null },
      { name: "Docker", color: "bg-blue-800", icon: null },
      { name: "Kubernetes", color: "bg-indigo-700", icon: null },
    ],
  },
];

const cardVariants = {
  rest: { scale: 1, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(72, 187, 120, 0.5)",
    transition: { duration: 0.3, type: "spring", stiffness: 300 },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.3, type: "spring", stiffness: 300 },
  },
};

const skillVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.15,
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
    transition: { duration: 0.2 },
  },
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: "#0ead69" }, // green-600 hex
  hover: {
    scale: 1.1,
    backgroundColor: "#0c7c59", // green-700 hex
    transition: { duration: 0.3 },
  },
};

const TopTalents = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {talents.map((talent) => (
          <motion.div
            key={talent.name}
            className="talent-card bg-green-50 border border-green-200 rounded-xl p-5 flex flex-col items-center text-center cursor-pointer"
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div
              className="profile-img-wrapper mb-4 rounded-full border-4 border-primary-2 overflow-hidden w-24 h-24"
              variants={imageVariants}
            >
              <img
                src={talent.profileImage}
                alt={talent.name}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>

            <h3 className="text-lg font-semibold mb-3 text-green-900">{talent.name}</h3>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {talent.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className={`skill-badge flex items-center space-x-1 px-3 py-1 rounded-full text-white text-xs font-semibold ${skill.color} shadow-sm`}
                  variants={skillVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  {skill.icon && <span className="text-base">{skill.icon}</span>}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="profile-btn text-white px-6 py-2 rounded-full font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              onClick={() => alert(`Viewing profile of ${talent.name}`)}
              style={{ backgroundColor: "#16a34a" }} // fallback for initial bg
            >
              See Profile
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopTalents;
