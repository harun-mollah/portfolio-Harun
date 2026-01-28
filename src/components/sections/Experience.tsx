'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Team Lead & Contributor',
      organization: 'CodelithLabs',
      type: 'Hackathon & Coding Community',
      duration: '2024 - Present',
      location: 'India',
      description:
        'Leading development initiatives for hackathons and coding projects. Collaborating with talented developers to create innovative solutions.',
      responsibilities: [
        'Lead technical discussions and code reviews',
        'Mentor junior developers in best practices',
        'Contribute to multiple open-source projects',
        'Organize and participate in hackathons',
      ],
      skills: ['Leadership', 'Full Stack Dev', 'Problem Solving', 'Open Source'],
    },
    {
      role: 'Full Stack Developer (Self-Employed)',
      organization: 'Freelance Projects',
      type: 'Web Development',
      duration: '2024 - Present',
      location: 'Remote',
      description:
        'Developing custom web applications for clients. Building scalable solutions with modern tech stack.',
      responsibilities: [
        'Design and develop full-stack web applications',
        'Implement responsive UI/UX designs',
        'Optimize application performance',
        'Deploy and maintain production applications',
      ],
      skills: ['React', 'Node.js', 'Database Design', 'DevOps'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Roles</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="relative glass-effect border border-primary/20 rounded-lg p-8 glow-effect"
            >
              {/* Timeline indicator */}
              <div className="absolute left-8 top-8 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Briefcase size={24} className="text-dark" />
              </div>

              <div className="ml-20">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-primary font-semibold text-lg">{exp.organization}</p>
                  <p className="text-light/60 text-sm mt-1">{exp.type}</p>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2 text-light/70 text-sm">
                    <Calendar size={16} className="text-accent" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 text-light/70 text-sm">
                    <MapPin size={16} className="text-accent" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-light/80 mb-6 leading-relaxed">{exp.description}</p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-primary">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-light/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Award,
              title: 'Professional Growth',
              description: 'Continuous learning and skill development through real-world projects',
            },
            {
              icon: Briefcase,
              title: 'Project Delivery',
              description: 'Successfully delivered 15+ projects with high quality standards',
            },
            {
              icon: Calendar,
              title: 'Active Contribution',
              description: 'Regular participation in hackathons and open-source initiatives',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10 }}
              className="glass-effect border border-primary/20 rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-light/70 text-sm">{item.description}</p>
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

export default Experience;
