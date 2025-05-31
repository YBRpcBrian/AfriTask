import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amina Bello",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/150?img=47",
    quote:
      "AfriTask helped me land freelance gigs that match my passion. It’s fast, reliable, and filled with top-tier talent seekers.",
  },
  {
    name: "Kwame Mensah",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=15",
    quote:
      "The platform is sleek and easy to use. The escrow system gave me confidence to work with new clients seamlessly.",
  },
  {
    name: "Fatou Diallo",
    role: "Digital Marketer",
    avatar: "https://i.pravatar.cc/150?img=32",
    quote:
      "Finally, a freelance platform that understands the African market. Payment is swift and support is top-notch.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#17453b] mb-4"
        >
          What Our Users Say
        </motion.h2>
        <p className="text-gray-500 text-sm md:text-base mb-12 max-w-xl mx-auto">
          Real experiences from freelancers and clients across Africa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-[#17453b] font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">“{testimonial.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
