import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import hero from "../../assets/hero.jpg"; // Ensure this path is correct

const rotatingTexts = [
  "AfriTask empowers African freelancers with local payments.",
  "Post jobs and find skilled talents across Africa.",
  "Escrow ensures trust between job owners and freelancers.",
  "Pay via MoMo, Orange Money, or Bitcoin Lightning instantly.",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  // Check if the component is in view
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return; // Stop interval if not in view

    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % rotatingTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Freelancing background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-8"
        >
          Empowering African Talents. <br />
          <span className="text-primary">Connect Work Get Paid</span>
        </motion.h1>

        <div className="h-10 relative mb-8 w-full text-sm min-h-[40px]">
          <AnimatePresence mode="wait">
            {isInView && (
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 text-gray-200 text-lg px-4"
              >
                {rotatingTexts[currentIndex]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-8 py-3 rounded-xl shadow-lg hover:bg-primary-3 transition duration-300 text-sm"
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
