import React from "react";
import CourseCard from "./CourseCard";
import UngoingCourseCard from "./UngoingCourseCard";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const AllCourses = () => {
  const ongoingCourses = [
    {
      thumbnail: "https://images.unsplash.com/photo-1724166573009-4634b974ebb2?q=80&w=2070&auto=format&fit=crop",
      title: "React Basics for Beginners",
      description: "Understand the fundamentals of React and how to build your first app.",
      author: "Jane Doe",
      progress: 40,
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      title: "Node.js Crash Course",
      description: "Master server-side development with Express and Node.js.",
      author: "John Smith",
      progress: 75,
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26",
      title: "UI/UX Design Essentials",
      description: "Learn the principles of user-centered design and wireframing.",
      author: "Alice Kim",
      progress: 55,
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86",
      title: "Intro to Data Science with Python",
      description: "Explore data analysis using Pandas, NumPy, and Matplotlib.",
      author: "Dr. Lee",
      progress: 25,
    },
  ];

  const recommendedCourses = [
    {
      thumbnail: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3",
      title: "Fullstack JavaScript Developer Bootcamp",
      description: "Become a fullstack developer using the MERN stack.",
      author: "Michael Scott",
      rating: 4.8,
      price: 39.99,
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc",
      title: "SEO Mastery 2024",
      description: "Boost website traffic by mastering Search Engine Optimization.",
      author: "Angela White",
      rating: 4.5,
      price: 0,
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1628277613967-6abca504d0ac",
      title: "Mobile App Dev with Flutter",
      description: "Build fast cross-platform mobile apps using Flutter & Dart.",
      author: "Carlos Diaz",
      rating: 4.6,
      price: 34.99,
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1712002641088-9d76f9080889",
      title: "AI for Beginners",
      description: "Understand AI concepts and how to apply them in real world.",
      author: "Prof. Susan Ray",
      rating: 4.9,
      price: 44.99,
    },
  ];

  const handleTakeCourse = (title) => alert(`You clicked to take course: ${title}`);
  const handleToggleWishlist = (title) => alert(`You toggled wishlist for: ${title}`);
  const handleContinueCourse = (title) => alert(`Continue course clicked: ${title}`);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Ongoing Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-1 text-gray-900">Continue Learning</h2>
        <p className="text-gray-600 mb-6">Resume where you left off and keep growing your skills.</p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ongoingCourses.map((course, index) => (
            <div key={index} className="flex flex-col h-full">
              <UngoingCourseCard
                {...course}
                onContinue={() => handleContinueCourse(course.title)}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recommended Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16"
      >
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Recommended for You</h2>
            <p className="text-gray-600">Based on your interests and progress.</p>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-3 transition">
            See All
          </button>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recommendedCourses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col h-full"
            >
              <div className="aspect-[16/9]">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                <p className="text-sm text-gray-500 mb-1">By {course.author}</p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex items-center gap-1 text-yellow-500 text-sm">
                    <FaStar /> <span>{course.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-sm font-bold text-primary-3">
                    {course.price === 0 ? "Free" : `$${course.price}`}
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleTakeCourse(course.title)}
                    className="w-full text-sm bg-primary text-white py-2 rounded-md hover:bg-primary-3"
                  >
                    Enroll
                  </button>
                  <button
                    onClick={() => handleToggleWishlist(course.title)}
                    className="text-sm text-primary border border-primary py-2 px-3 rounded-md hover:bg-green-50"
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AllCourses;
