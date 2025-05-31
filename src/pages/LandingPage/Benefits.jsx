import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Banknote, BadgeCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Local Payments',
    icon: <Banknote size={32} className="text-primary" />,
    description:
      'Pay and get paid seamlessly using MTN MoMo, Orange Money, and other local options across Africa.',
  },
  {
    title: 'Trusted Escrow',
    icon: <ShieldCheck size={32} className="text-primary" />,
    description:
      'We secure your funds in escrow and only release them when the job is completed and approved.',
  },
  {
    title: 'Verified Accounts',
    icon: <BadgeCheck size={32} className="text-primary" />,
    description:
      'All users go through a verification process to build trust and prevent fraud on the platform.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose AfriTask?
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Empowering freelancers and businesses across Africa with secure,
          fast, and trustworthy services.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
