import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    { name: 'React.js', icon: FaReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'Backend' },
    { name: 'Express.js', icon: SiExpress, color: '#ffffff', category: 'Backend' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Backend' },
    { name: 'REST APIs', icon: FaDatabase, color: '#6366f1', category: 'Backend' },
    { name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032', category: 'Tools' },
    { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Tools' },
    { name: 'AI/ML', icon: FaDatabase, color: '#8b5cf6', category: 'Tools' },
  ];

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: `0 15px 40px ${skill.color}33`
                }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  style={{ color: skill.color }}
                  className="text-5xl mb-4"
                >
                  <skill.icon />
                </motion.div>
                <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                <span className="text-xs text-gray-500">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
