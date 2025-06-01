import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Paintbrush,
  Code,
  PenTool,
  Megaphone,
  BarChart3,
  Camera,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const categories = [
  { title: "Design", icon: Paintbrush },
  { title: "Development", icon: Code },
  { title: "Writing", icon: PenTool },
  { title: "Marketing", icon: Megaphone },
  { title: "Data & Analytics", icon: BarChart3 },
  { title: "Photography", icon: Camera },
  { title: "Business", icon: Briefcase },
  { title: "Cybersecurity", icon: ShieldCheck },
];

const Categories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-primary-3 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Explore Top Categories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-green-100 mb-12 max-w-xl mx-auto"
        >
          Browse expert freelancers by category and hire the best talent for your project.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="bg-white text-[#17453b] rounded-xl shadow hover:shadow-md transition p-6 flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="bg-green-100 text-green-600 rounded-full p-3 mb-3">
                  <Icon size={28} />
                </div>
                <h3 className="text-sm md:text-base font-semibold">{category.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
