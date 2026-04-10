import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'Pallav delivered an exceptional web application for our startup. His expertise in MERN stack and attention to detail exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      image: 'https://i.pravatar.cc/150?img=13',
      text: 'Working with Pallav was a pleasure. He understood our requirements perfectly and delivered a scalable solution on time. His code quality is outstanding.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, DesignHub',
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'Pallav transformed our design mockups into a beautiful, responsive website. His communication throughout the project was excellent, and the final product was perfect.',
      rating: 5,
    },
    {
      name: 'David Kumar',
      role: 'CTO, DataFlow Systems',
      image: 'https://i.pravatar.cc/150?img=12',
      text: 'Impressive technical skills and problem-solving abilities. Pallav built a complex API system for us that handles thousands of requests efficiently. Great work!',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'Marketing Director, BrandWave',
      image: 'https://i.pravatar.cc/150?img=9',
      text: 'Our new portfolio website has received amazing feedback from clients. Pallav created something truly special that represents our brand perfectly.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Entrepreneur',
      image: 'https://i.pravatar.cc/150?img=14',
      text: 'Pallav helped bring my startup idea to life with an MVP that impressed investors. His ability to work fast without compromising quality is remarkable.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Real feedback from clients who trusted me with their projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl relative"
              >
                <FaQuoteLeft className="text-primary text-3xl opacity-20 absolute top-4 right-4" />
                
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
