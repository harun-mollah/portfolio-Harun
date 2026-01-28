'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Task Management System',
      description:
        'A full-stack application using AI to help users organize and prioritize tasks efficiently.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'MongoDB'],
      image: '🎯',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Real-time Collaboration Platform',
      description:
        'WebSocket-based collaborative tool for teams to work together on projects in real-time.',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      image: '👥',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 3,
      title: '3D Interactive Portfolio',
      description:
        'Immersive portfolio website with Three.js animations and interactive 3D elements.',
      technologies: ['Three.js', 'React', 'Framer Motion', 'Tailwind CSS'],
      image: '🚀',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'E-Commerce Analytics Dashboard',
      description:
        'Advanced dashboard for tracking sales, customer behavior, and inventory management.',
      technologies: ['React', 'Chart.js', 'Python', 'Django', 'PostgreSQL'],
      image: '📊',
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'Mobile Health Tracking App',
      description:
        'Cross-platform mobile app for health monitoring with real-time data sync.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      image: '❤️',
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'Machine Learning Prediction Model',
      description:
        'ML model for predicting market trends with 85% accuracy using historical data.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      image: '🤖',
      github: '#',
      live: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Showcase of my recent work and side projects. Each project demonstrates my skills
            in full-stack development, problem-solving, and creating user-centric solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        {/* Featured Projects (First 3) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-12"
        >
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="mb-8 glass-effect border border-primary/20 rounded-lg overflow-hidden glow-effect group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                {/* Image/Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center justify-center text-7xl md:text-6xl h-full min-h-48"
                >
                  {project.image}
                </motion.div>

                {/* Content */}
                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="flex items-center gap-1 text-yellow-400 text-sm">
                          <Star size={14} className="fill-current" />
                          Featured Project
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-light/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-all text-sm font-semibold"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-all text-sm font-semibold"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Other Notable Projects</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.slice(3).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass-effect border border-primary/20 rounded-lg p-6 glow-effect group"
              >
                <div className="text-5xl mb-4">{project.image}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-light/70 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-primary text-dark rounded-lg font-bold hover:shadow-glow-lg transition-all"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default Projects;
