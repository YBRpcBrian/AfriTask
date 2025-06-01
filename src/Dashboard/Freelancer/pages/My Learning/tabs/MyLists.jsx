import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code, Globe, PenLine, Search, Languages, BrainCircuit,
  Paintbrush, Database, Settings, PencilRuler, LayoutDashboard, X
} from 'lucide-react';

const initialSkills = [
  { title: 'React', icon: Code, color: 'bg-purple-100 text-purple-600' },
  { title: 'Web Development', icon: Globe, color: 'bg-blue-100 text-blue-600' },
  { title: 'SEO', icon: Search, color: 'bg-green-100 text-green-600' },
  { title: 'Copywriting', icon: PenLine, color: 'bg-yellow-100 text-yellow-600' },
  { title: 'English Translation', icon: Languages, color: 'bg-red-100 text-red-600' },
  { title: 'AI & Tools', icon: BrainCircuit, color: 'bg-indigo-100 text-indigo-600' },
  { title: 'Graphic Design', icon: Paintbrush, color: 'bg-pink-100 text-pink-600' },
  { title: 'Databases', icon: Database, color: 'bg-emerald-100 text-emerald-600' },
  { title: 'DevOps', icon: Settings, color: 'bg-gray-100 text-gray-600' },
  { title: 'UI/UX Design', icon: PencilRuler, color: 'bg-orange-100 text-orange-600' },
  { title: 'Project Management', icon: LayoutDashboard, color: 'bg-cyan-100 text-cyan-600' },
];

const MyLists = () => {
  const [skills, setSkills] = useState(initialSkills);

  const removeSkill = (indexToRemove) => {
    setSkills((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="p-6 lg:px-40">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Learning Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl p-5 flex items-center gap-4 transition-all duration-300 group"
            >
              <div className={`p-3 rounded-xl ${skill.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-lg font-medium text-gray-700 flex-1">{skill.title}</div>

              <button
                onClick={() => removeSkill(index)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </div>
      {skills.length === 0 && (
        <motion.p
          className="mt-10 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No skills left in the list.
        </motion.p>
      )}
    </div>
  );
};

export default MyLists;
