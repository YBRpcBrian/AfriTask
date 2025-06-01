import React from 'react'
import { motion } from "framer-motion";
import findwork from "../../../assets/talenthunt.jpg";
import TopTalents from './TopTalents';
import AiMatchedTalents from './AiMatchedTalents';
import Footer from '../../../components/Footer';



const TalentHunt = () => {
  return (
    <div className=" text-gray-800">
    {/* Banner Section */}
    <div className="relative w-full h-[28rem] overflow-hidden rounded-b-4xl shadow-xl">
      {/* Background Image */}
      <img
        className="absolute w-full h-full object-cover z-0"
        src={findwork}
        alt="Find Work"
      />

      {/* Black Overlay */}
      <div className="absolute w-full h-full bg-black/60 z-10" />

      {/* Banner Text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 inset-0 flex items-center justify-center h-full text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg text-center px-4"
      >
        Find Your Next Recuit
      </motion.h1>
    </div>

    {/* Section Title */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-14 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
        This Week Top <span className="text-primary">Talents</span>
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Pick a task that best suits you. Explore tasks across various categories.
      </p>
    </motion.div>

    <TopTalents />

    {/* Section Title */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-14 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
        AI Matched <span className="text-primary">Talents</span>
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Pick a task that best suits you. Explore tasks across various categories.
      </p>
    </motion.div>

    <AiMatchedTalents />

    <Footer />
    </div>
  )
}

export default TalentHunt