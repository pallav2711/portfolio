import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AnimatedTestimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'Pallav delivered an exceptional web application for our startup. His expertise in MERN stack and attention to detail exceeded our expectations. Highly recommended!',
      rating: 5,
      company: 'TechStart Inc',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      image: 'https://i.pravatar.cc/150?img=13',
      text: 'Working with Pallav was a pleasure. He understood our requirements perfectly and delivered a scalable solution on time. His code quality is outstanding.',
      rating: 5,
      company: 'InnovateCo',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, DesignHub',
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'Pallav transformed our design mockups into a beautiful, responsive website. His communication throughout the project was excellent, and the final product was perfect.',
      rating: 5,
      company: 'DesignHub',
    },
    {
      name: 'David Kumar',
      role: 'CTO, DataFlow Systems',
      image: 'https://i.pravatar.cc/150?img=12',
      text: 'Impressive technical skills and problem-solving abilities. Pallav built a complex API system for us that handles thousands of requests efficiently. Great work!',
      rating: 5,
      company: 'DataFlow Systems',
    },
    {
      name: 'Lisa Anderson',
      role: 'Marketing Director, BrandWave',
      image: 'https://i.pravatar.cc/150?img=9',
      text: 'Our new portfolio website has received amazing feedback from clients. Pallav created something truly special that represents our brand perfectly.',
      rating: 5,
      company: 'BrandWave',
    },
    {
      name: 'James Wilson',
      role: 'Entrepreneur',
      image: 'https://i.pravatar.cc/150?img=14',
      text: 'Pallav helped bring my startup idea to life with an MVP that impressed investors. His ability to work fast without compromising quality is remarkable.',
      rating: 5,
      company: 'Startup Founder',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  return (
    <section id="testimonials" className="py-32 bg-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Real feedback from clients who trusted me with their projects
          </p>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="glass-strong p-10 md:p-12 rounded-3xl relative spotlight"
              >
                <FaQuoteLeft className="text-primary text-5xl opacity-20 absolute top-8 right-8" />
                
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full border-4 border-primary shadow-lg shadow-primary/50"
                  />
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-2xl mb-2">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-400 mb-2">{testimonials[currentIndex].role}</p>
                    <p className="text-primary text-sm font-semibold">{testimonials[currentIndex].company}</p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-2 mb-6 justify-center md:justify-start"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, type: 'spring' }}
                    >
                      <FaStar className="text-yellow-400 text-xl" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300 text-lg leading-relaxed italic"
                >
                  "{testimonials[currentIndex].text}"
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 glass p-4 rounded-full hover:bg-primary/20 transition-all group"
            >
              <FaChevronLeft className="text-2xl group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 glass p-4 rounded-full hover:bg-primary/20 transition-all group"
            >
              <FaChevronRight className="text-2xl group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-primary to-secondary'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedTestimonials;
