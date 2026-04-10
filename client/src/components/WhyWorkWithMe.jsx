import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBolt, FaCode, FaComments, FaRocket } from 'react-icons/fa';

const WhyWorkWithMe = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const reasons = [
    {
      icon: FaBolt,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality. Your project delivered on time, every time.',
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following industry best practices and standards.',
    },
    {
      icon: FaComments,
      title: 'Clear Communication',
      description: 'Regular updates and transparent communication throughout the development process.',
    },
    {
      icon: FaRocket,
      title: 'Startup Friendly',
      description: 'Understanding startup needs with flexible solutions and scalable architecture.',
    },
  ];

  return (
    <section className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Why <span className="gradient-text">Work With Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-2xl text-center group glow-on-hover"
              >
                <div className="text-primary text-5xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                  <reason.icon />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
