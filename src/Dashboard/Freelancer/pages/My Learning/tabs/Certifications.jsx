import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const certifications = [
  {
    title: 'React Developer Certification',
    platform: 'Meta (Coursera)',
    grade: 'A+',
    rank: 'Top 5%',
    verified: true,
    date: 'Jan 2025',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'SEO Mastery',
    platform: 'Udemy',
    grade: 'A',
    rank: 'Top 10%',
    verified: true,
    date: 'Feb 2025',
    color: 'from-green-400 to-blue-500',
  },
  {
    title: 'Copywriting Pro',
    platform: 'Skillshare',
    grade: 'B+',
    rank: 'Top 15%',
    verified: false,
    date: 'Mar 2025',
    color: 'from-pink-500 to-rose-400',
  },
  {
    title: 'Web Design Fundamentals',
    platform: 'FreeCodeCamp',
    grade: 'A',
    rank: 'Top 8%',
    verified: true,
    date: 'Apr 2025',
    color: 'from-orange-400 to-yellow-500',
  },
  {
    title: 'Advanced Freelancing & Escrow Payment Systems',
    platform: 'AfriTask',
    grade: 'A+',
    rank: 'Top 3%',
    verified: true,
    date: 'May 2025',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'AI Tools & Productivity',
    platform: 'LinkedIn Learning',
    grade: 'A',
    rank: 'Top 12%',
    verified: true,
    date: 'June 2025',
    color: 'from-sky-500 to-blue-600',
  },
];

const Certifications = () => {
  return (
    <div className="p-6 lg:px-40">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold text-gray-800 mb-2"
      >
        My Certifications
      </motion.h1>
      <p className="text-gray-600 mb-10">
        These certifications represent my growth and excellence across various fields — from software development to digital marketing, freelancing, and AI tools. Each course has helped shape my technical and creative journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, rotate: [-1, 0, 1, 0] }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-r ${cert.color} text-white`}
          >
            <div className="p-5 space-y-3 relative">
              {cert.verified && (
                <div className="absolute top-4 right-4 bg-white text-green-600 p-1 rounded-full shadow-md">
                  <BadgeCheck className="w-5 h-5" />
                </div>
              )}
              <h2 className="text-xl font-bold leading-snug">{cert.title}</h2>
              <p className="text-sm text-white/90 italic">{cert.platform}</p>
              <div className="border-t border-white/30 pt-4 flex justify-between text-sm text-white/90">
                <div>
                  <p className="font-semibold">Date</p>
                  <p>{cert.date}</p>
                </div>
                <div>
                  <p className="font-semibold">Grade</p>
                  <p>{cert.grade}</p>
                </div>
                <div>
                  <p className="font-semibold">Rank</p>
                  <p>{cert.rank}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
