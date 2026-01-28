'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Trophy, Award, Rocket } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Diploma in Computer Science & Engineering',
      school: 'Central Institute of Technology, Kokrajhar',
      period: '2025 - 2028',
      status: 'In Progress',
      details: 'Deemed to be University, under the MoE, Govt. of India',
      icon: GraduationCap,
      cgpa: '8.5+',
      focus: ['Web Development', 'Data Structures', 'Database Design', 'Software Engineering'],
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'CodelithLabs Member',
      description: 'Active member of a hackathon & coding community team',
    },
    {
      icon: Award,
      title: 'Open Source Contributor',
      description: 'Contributing to various open-source projects',
    },
    {
      icon: BookOpen,
      title: 'Self-Taught Developer',
      description: 'Continuous learning through courses and practice',
    },
    {
      icon: Rocket,
      title: 'Project Builder',
      description: 'Created 15+ projects ranging from web to mobile apps',
    },
  ];

  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="relative glass-effect border border-primary/20 rounded-lg p-8 glow-effect"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <edu.icon size={28} className="text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-primary font-semibold mb-1">{edu.school}</p>
                    <p className="text-light/70 text-sm mb-2">{edu.details}</p>
                    <p className="text-light/60 text-sm mb-4">{edu.period}</p>

                    <div className="flex flex-wrap gap-2">
                      {edu.focus.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-bold gradient-text mb-2">{edu.cgpa}</p>
                    <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-lg border border-primary/10 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <achievement.icon size={24} className="text-primary" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
              <p className="text-light/70 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* College Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-effect border border-primary/30 rounded-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-primary font-semibold mb-2">Institution</h4>
              <p className="text-light/80">Central Institute of Technology, Kokrajhar</p>
            </div>
            <div>
              <h4 className="text-primary font-semibold mb-2">Address</h4>
              <p className="text-light/80">Kokrajhar, BTAD, Asssam 783370, India</p>
            </div>
            <div>
              <h4 className="text-primary font-semibold mb-2">Affiliation</h4>
              <p className="text-light/80">Deemed to be University, MoE, Govt. of India</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default Education;
