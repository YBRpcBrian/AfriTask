import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../../assets/enterprice.jpg";

// Lucide Icons
import { Wrench, ClipboardCheck, Handshake } from "lucide-react";

const EnterpriseBanner = () => {
  return (
    <section className="max-w-7xl mx-auto my-10 px-4">
      <div className="bg-[#17453b] rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 p-6 md:p-10 text-white"
        >
          <h4 className="text-xs md:text-sm font-medium mb-3 uppercase tracking-wide">
            Enterprise Suite
          </h4>

          <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-5">
            This is how <br />
            <span className="text-green-400">good companies</span><br />
            <span className="text-green-400">find good company.</span>
          </h1>

          <p className="text-sm md:text-base mb-6">
            Access the top 1% of talent on AfriTask, and a full suite of hybrid workforce
            management tools. This is how innovation works now.
          </p>

          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <Wrench className="text-green-400 w-5 h-5 mt-1" />
              <span>Access expert talent to fill your skill gaps</span>
            </li>
            <li className="flex items-start gap-2">
              <ClipboardCheck className="text-green-400 w-5 h-5 mt-1" />
              <span>Control your workflow: hire, classify and pay your talent</span>
            </li>
            <li className="flex items-start gap-2">
              <Handshake className="text-green-400 w-5 h-5 mt-1" />
              <span>Partner with AfriTask for end-to-end support</span>
            </li>
          </ul>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[#17453b] font-semibold mt-8 px-5 py-2 text-sm rounded-md transition"
          >
            Learn more
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src={bannerImage}
            alt="Professional working"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseBanner;
