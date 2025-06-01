import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobileAlt,
  FaPython,
  FaAws,
  FaDocker,
  FaJsSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";

const aiMatchedTalents = [
  {
    name: "Emma Watson",
    profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
    skills: [
      { name: "React", color: "bg-blue-500", icon: <FaReact /> },
      { name: "Node.js", color: "bg-green-600", icon: <FaNodeJs /> },
      { name: "MongoDB", color: "bg-green-400", icon: <FaDatabase /> },
    ],
  },
  {
    name: "James Anderson",
    profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
    skills: [
      { name: "React Native", color: "bg-purple-600", icon: <FaMobileAlt /> },
      { name: "Express", color: "bg-gray-700", icon: null },
      { name: "Docker", color: "bg-blue-800", icon: <FaDocker /> },
    ],
  },
  {
    name: "Sophia Martinez",
    profileImage: "https://randomuser.me/api/portraits/women/32.jpg",
    skills: [
      { name: "Python", color: "bg-yellow-500", icon: <FaPython /> },
      { name: "AWS", color: "bg-orange-600", icon: <FaAws /> },
      { name: "SEO", color: "bg-yellow-400", icon: null },
    ],
  },
  {
    name: "Michael Brown",
    profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
    skills: [
      { name: "DevOps", color: "bg-red-600", icon: null },
      { name: "Kubernetes", color: "bg-indigo-700", icon: null },
      { name: "Docker", color: "bg-blue-800", icon: <FaDocker /> },
    ],
  },
  {
    name: "Olivia Green",
    profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
    skills: [
      { name: "UI/UX Design", color: "bg-pink-500", icon: null },
      { name: "JavaScript", color: "bg-yellow-400", icon: <FaJsSquare /> },
      { name: "React", color: "bg-blue-500", icon: <FaReact /> },
    ],
  },
  {
    name: "Liam Scott",
    profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
    skills: [
      { name: "Node.js", color: "bg-green-600", icon: <FaNodeJs /> },
      { name: "MongoDB", color: "bg-green-400", icon: <FaDatabase /> },
      { name: "React", color: "bg-blue-500", icon: <FaReact /> },
    ],
  },
  {
    name: "Isabella King",
    profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
    skills: [
      { name: "SEO", color: "bg-yellow-400", icon: null },
      { name: "Copywriting", color: "bg-pink-600", icon: null },
      { name: "UI/UX", color: "bg-pink-500", icon: null },
    ],
  },
  {
    name: "Noah Wilson",
    profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
    skills: [
      { name: "Full Stack", color: "bg-indigo-600", icon: null },
      { name: "AWS", color: "bg-orange-600", icon: <FaAws /> },
      { name: "Docker", color: "bg-blue-800", icon: <FaDocker /> },
    ],
  },
];

const cardVariants = {
  rest: { scale: 1, boxShadow: "0 1px 4px rgba(0,0,0,0.1)" },
  hover: {
    scale: 1.06,
    boxShadow: "0 12px 20px rgba(72, 187, 120, 0.4)",
    transition: { duration: 0.3, type: "spring", stiffness: 300 },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.12,
    transition: { duration: 0.3, type: "spring", stiffness: 300 },
  },
};

const skillVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.15,
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: { duration: 0.2 },
  },
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: "#0ead69" }, // green-600
  hover: {
    scale: 1.1,
    backgroundColor: "#0c7c59", // green-700
    transition: { duration: 0.3 },
  },
};

const AiMatchedTalents = () => {
  return (
    <div className="py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {aiMatchedTalents.map((talent) => (
          <motion.div
            key={talent.name}
            className="bg-green-50 rounded-xl p-5 flex flex-col items-center text-center cursor-pointer"
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div
              className="mb-4 rounded-full border-4 border-primary-2 overflow-hidden w-24 h-24"
              variants={imageVariants}
            >
              <img
                src={talent.profileImage}
                alt={talent.name}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>
            <h3 className="text-lg font-semibold text-primary-3 mb-3 truncate">
              {talent.name}
            </h3>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {talent.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className={`flex items-center space-x-1 px-3 py-0.5 rounded-full text-white text-xs font-semibold shadow-sm ${skill.color}`}
                  variants={skillVariants}
                  initial="rest"
                  whileHover="hover"
                  title={skill.name}
                >
                  {skill.icon && <span className="text-sm">{skill.icon}</span>}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="text-white px-6 py-2 rounded-full font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-primary-2 text-sm"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              onClick={() => alert(`Viewing AI Match profile of ${talent.name}`)}
              style={{ backgroundColor: "#57cc99" }}
            >
              View AI Match
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AiMatchedTalents;
