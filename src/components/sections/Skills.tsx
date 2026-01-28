'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsCategories = [
    {
      category: 'Frontend Development',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Three.js',
        'Redux',
        'Webpack',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Backend Development',
      skills: [
        'Node.js',
        'Express.js',
        'Python',
        'Django',
        'REST APIs',
        'GraphQL',
        'Microservices',
        'Authentication',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Database & Tools',
      skills: [
        'MongoDB',
        'PostgreSQL',
        'Firebase',
        'Redis',
        'Git & GitHub',
        'Docker',
        'AWS',
        'Linux',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Other Skills',
      skills: [
        'UI/UX Design',
        'System Design',
        'Problem Solving',
        'Agile Methodology',
        'Open Source',
        'Technical Writing',
        'Team Leadership',
        'DevOps Basics',
      ],
      color: 'from-orange-500 to-red-500',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillsCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-effect border border-primary/20 rounded-lg p-6 glow-effect group"
            >
              {/* Category Header */}
              <h3 className="text-lg font-bold mb-6 text-primary group-hover:text-accent transition-colors">
                {category.category}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group/skill"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover/skill:scale-150 transition-transform" />
                    <span className="text-light/80 text-sm group-hover/skill:text-light transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass-effect border border-primary/20 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-8">Technical Proficiency</h3>

          <div className="space-y-6">
            {[
              { label: 'Frontend Technologies', percentage: 90 },
              { label: 'Backend Development', percentage: 85 },
              { label: 'Database Design', percentage: 80 },
              { label: 'DevOps & Deployment', percentage: 75 },
              { label: 'System Design', percentage: 80 },
            ].map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.label}</span>
                  <span className="text-primary">{item.percentage}%</span>
                </div>
                <div className="w-full h-3 bg-primary/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
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

export default Skills;
