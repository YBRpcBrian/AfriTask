import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Cpu, Settings, BookOpen, Zap, Monitor } from 'lucide-react';


const tools = [
  {
    title: 'VS Code',
    description: 'Powerful code editor with extensions.',
    icon: <Wrench className="w-8 h-8 text-white" />,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Git & GitHub',
    description: 'Version control and collaboration platform.',
    icon: <Settings className="w-8 h-8 text-white" />,
    color: 'from-gray-700 to-gray-900',
  },
  {
    title: 'Chrome DevTools',
    description: 'Browser tools for debugging & profiling.',
    icon: <Monitor className="w-8 h-8 text-white" />,
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'Postman',
    description: 'API testing and development tool.',
    icon: <Zap className="w-8 h-8 text-white" />,
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'Figma',
    description: 'Collaborative UI/UX design tool.',
    icon: <BookOpen className="w-8 h-8 text-white" />,
    color: 'from-pink-500 to-purple-600',
  },
  {
    title: 'Docker',
    description: 'Container platform for building & shipping.',
    icon: <Cpu className="w-8 h-8 text-white" />,
    color: 'from-cyan-500 to-blue-700',
  },
];

const LearningTools = () => {
  return (
    <div className="p-6 lg:px-40">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold text-gray-800 mb-6"
      >
        My Learning Tools
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-10 text-gray-600 max-w-3xl"
      >
        These are the essential tools that power my daily learning and development workflow. From coding editors to design and API testing, each tool helps me grow and deliver better results.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)' }}
            className={`rounded-3xl p-6 bg-gradient-to-br ${tool.color} cursor-pointer shadow-md text-white flex flex-col items-center justify-center text-center transition-transform duration-300`}
            title={tool.description}
          >
            <div className="mb-4">{tool.icon}</div>
            <h3 className="text-xl font-semibold">{tool.title}</h3>
            <p className="mt-2 text-sm opacity-90">{tool.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LearningTools;
