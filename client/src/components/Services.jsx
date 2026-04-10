import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaMobile, FaRocket, FaLaptopCode } from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: FaCode,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using MERN stack with modern best practices and scalable architecture. Perfect for businesses needing complete solutions.',
      features: ['React.js Frontend', 'Node.js Backend', 'Database Design', 'API Integration'],
    },
    {
      icon: FaLaptopCode,
      title: 'Custom Website Development',
      description: 'Tailored websites built from scratch to match your brand identity and business requirements perfectly. Responsive, fast, and SEO-optimized.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern Interface'],
    },
    {
      icon: FaServer,
      title: 'MERN Stack Applications',
      description: 'Robust and scalable applications using MongoDB, Express, React, and Node.js for complex business needs. Built for growth and performance.',
      features: ['Real-time Features', 'Authentication', 'Cloud Deployment', 'Maintenance'],
    },
    {
      icon: FaMobile,
      title: 'API Development',
      description: 'RESTful API design and development with proper documentation, security, and performance optimization. Seamless integration guaranteed.',
      features: ['REST APIs', 'Authentication', 'Documentation', 'Testing'],
    },
    {
      icon: FaRocket,
      title: 'Startup MVP Development',
      description: 'Launch your startup idea quickly with a scalable MVP built using modern web technologies. Fast turnaround without compromising quality.',
      features: ['Quick Turnaround', 'Scalable Code', 'Agile Process', 'Cost Effective'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Offering professional development services to bring your ideas to life with cutting-edge technologies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-6 rounded-2xl group"
              >
                <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                >
                  Request Service
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
