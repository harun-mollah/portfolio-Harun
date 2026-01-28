'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
        >
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm text-primary">Welcome to my portfolio</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">MD Harun Al Roshid Mollah</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-light/80 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          CSE Diploma Student at Central Institute of Technology, Kokrajhar
          <br />
          Full Stack Developer & Open Source Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-light/60 mb-12 max-w-2xl mx-auto"
        >
          Passionate about building elegant, scalable solutions. Part of{' '}
          <a
            href="https://codelithlabs.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            CodelithLabs
          </a>
          . Currently exploring advanced frontend architectures, cloud technologies,
          and full-stack development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-dark rounded-lg font-bold text-lg hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ChevronDown size={32} className="text-primary animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Floating Cards */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-32 left-10 hidden lg:block"
      >
        <div className="glass-effect p-4 rounded-lg max-w-xs">
          <p className="text-sm text-light/80">
            📍 From Asssam, India | 🎓 Batch 2025-2028
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-48 right-10 hidden lg:block"
      >
        <div className="glass-effect p-4 rounded-lg max-w-xs">
          <p className="text-sm text-light/80">
            💼 Full Stack Developer | Team Lead at CodelithLabs
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
