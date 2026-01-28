'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expertise in modern web technologies and frameworks',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Building fast, scalable, and responsive applications',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Creating elegant solutions for complex challenges',
    },
    {
      icon: Rocket,
      title: 'Innovation Driven',
      description: 'Exploring cutting-edge technologies and best practices',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-light/80 mb-6 leading-relaxed">
              I'm a passionate CSE Diploma student with a deep interest in full-stack
              web development. Currently pursuing my diploma at the Central Institute of
              Technology, Kokrajhar (Deemed to be University under MoE, Govt. of India),
              expected to graduate in 2028.
            </p>

            <p className="text-lg text-light/80 mb-6 leading-relaxed">
              As a member of CodelithLabs, I collaborate with talented developers to create
              innovative solutions and contribute to open-source projects. I'm committed to
              continuous learning and staying at the forefront of modern web technologies.
            </p>

            <p className="text-lg text-light/80 mb-8 leading-relaxed">
              With a strong foundation in both frontend and backend development, I specialize
              in creating user-centric applications that are not just functional but also
              aesthetically beautiful and performant.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary/20 border border-primary rounded-lg text-primary font-semibold hover:bg-primary/30 transition-all"
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Right Column - Stats/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Projects', value: '15+' },
              { label: 'Technologies', value: '20+' },
              { label: 'Collaborators', value: 'CodelithLabs' },
              { label: 'Coffee Cups', value: '∞' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-effect p-6 rounded-lg text-center glow-effect"
              >
                <p className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-light/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4"
              >
                <feature.icon size={24} className="text-primary" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-light/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decoration */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default About;
