import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';

const CourseCard = ({
  thumbnail,
  title,
  description,
  author,
  rating,
  price,
  onTakeCourse,
  onToggleWishlist,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = () => {
    const newState = !isWishlisted;
    setIsWishlisted(newState);
    if (onToggleWishlist) onToggleWishlist(newState);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-primary/30 overflow-hidden max-w-sm w-full transition duration-300 ease-in-out relative"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Heart Icon */}
      <button
        onClick={handleWishlistClick}
        className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow hover:bg-white"
      >
        <Heart
          size={20}
          className={`transition duration-300 ${isWishlisted ? 'fill-primary text-primary' : 'text-gray-500'}`}
        />
      </button>

      <div className="p-4 flex flex-col justify-between h-full">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">{title}</h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <div className="mt-3 text-sm text-gray-500">By {author}</div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
                strokeWidth={1.5}
              />
            ))}
            <span className="text-xs text-gray-700 ml-1">({rating.toFixed(1)})</span>
          </div>
          <div className="text-lg font-bold text-gray-800">${price.toFixed(2)}</div>
        </div>

        <button
          onClick={onTakeCourse}
          className="mt-4 px-4 py-2 bg-primary text-white text-sm rounded-xl hover:bg-primary/90 transition duration-300"
        >
          Take Course
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
