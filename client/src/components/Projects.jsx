import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'AI Career Recommendation System',
      description: 'Machine learning powered platform that analyzes user skills, interests, and market trends to recommend optimal career paths with personalized learning roadmaps and skill gap analysis.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
      tags: ['Python', 'Scikit-learn', 'Flask', 'React', 'TensorFlow'],
      category: 'ai',
      github: null,
      demo: null,
    },
    {
      title: 'DreamTeam BGMI Fantasy',
      description: 'Full-stack fantasy sports platform for BGMI with real-time scoring, team management, player statistics, competitive leaderboards, and live match updates using WebSocket technology.',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=500&fit=crop&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis'],
      category: 'fullstack',
      github: null,
      demo: null,
    },
    {
      title: 'MERN Blogging Platform',
      description: 'Feature-rich blogging platform with Markdown editor, syntax highlighting, user authentication, comment system, likes, bookmarks, tags, search functionality, and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop&q=80',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
      category: 'fullstack',
      github: null,
      demo: null,
    },
    {
      title: 'Hotel Management System',
      description: 'Comprehensive hotel management solution with online booking system, room inventory management, automated billing, customer relationship management, staff scheduling, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop&q=80',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Chart.js'],
      category: 'fullstack',
      github: null,
      demo: null,
    },
    {
      title: 'Chopat Game',
      description: 'Interactive multiplayer traditional Indian board game built with Kivy framework featuring real-time gameplay, beautiful animations, AI opponents, and cross-platform support for mobile and desktop.',
      image: 'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=800&h=500&fit=crop&q=80',
      tags: ['Python', 'Kivy', 'Game Dev', 'AI'],
      category: 'other',
      github: null,
      demo: null,
    },
    {
      title: 'Minecraft Mods Collection',
      description: 'Custom Minecraft modifications adding new gameplay mechanics, custom items, blocks, mobs, dimensions, and features to enhance player experience. Built using Forge API with Java.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop&q=80',
      tags: ['Java', 'Minecraft', 'Forge API', 'Gradle'],
      category: 'other',
      github: null,
      demo: null,
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'AI/ML', value: 'ai' },
    { name: 'Other', value: 'other' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === f.value
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'glass hover:bg-white/10'
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl overflow-hidden group card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/80 backdrop-blur-sm text-white text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                    {!project.github && !project.demo && (
                      <span className="text-gray-500 text-sm italic">Private Project</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
