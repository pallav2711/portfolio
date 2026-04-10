import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRocket, FaBrain } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    { icon: FaCode, title: 'Clean Code', desc: 'Writing maintainable and scalable code' },
    { icon: FaRocket, title: 'Fast Delivery', desc: 'Efficient project completion' },
    { icon: FaBrain, title: 'Problem Solver', desc: 'Creative solutions to complex problems' },
  ];

  return (
    <section id="about" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm a passionate Full Stack Developer with expertise in building modern web applications
                  using the MERN stack. Currently pursuing my studies in AI & Machine Learning, I combine
                  traditional web development with cutting-edge AI technologies.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  With experience in developing everything from fantasy sports platforms to AI-powered
                  career recommendation systems, I love turning complex problems into elegant solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                  projects, or building Minecraft mods for fun!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass p-6 rounded-xl flex items-start gap-4"
                >
                  <div className="text-primary text-3xl mt-1">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
