'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'work.harun.mollah@gmail.com',
      href: 'mailto:work.harun.mollah@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9954927947',
      href: 'tel:+919954927947',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Asssam, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400',
    },
    {
      name: 'CodelithLabs',
      icon: ExternalLink,
      href: 'https://codelithlabs.in',
      color: 'hover:text-accent',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect border border-primary/20 rounded-lg p-6 glow-effect group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <info.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{info.label}</h3>
              <p className="text-light/80 group-hover:text-primary transition-colors">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect border border-primary/20 rounded-lg p-8 glow-effect"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div whileHover={{ x: 5 }}>
                <label className="block text-light/80 text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-light placeholder-light/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div whileHover={{ x: 5 }}>
                <label className="block text-light/80 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-light placeholder-light/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Subject Input */}
              <motion.div whileHover={{ x: 5 }}>
                <label className="block text-light/80 text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-light placeholder-light/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project inquiry"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div whileHover={{ x: 5 }}>
                <label className="block text-light/80 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-light placeholder-light/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-accent/20 border border-accent rounded-lg text-accent text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-primary text-dark rounded-lg font-bold hover:shadow-glow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send size={20} />}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Info Card */}
            <div className="glass-effect border border-primary/20 rounded-lg p-8 glow-effect">
              <h3 className="text-2xl font-bold mb-4">Quick Info</h3>
              <p className="text-light/80 mb-6">
                I'm always open to new opportunities, collaborations, and interesting projects.
                Whether you want to discuss a potential project or just say hello, feel free to
                reach out.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-primary font-semibold mb-2">📧 Response Time</p>
                  <p className="text-light/70">Usually within 24 hours</p>
                </div>
                <div>
                  <p className="text-primary font-semibold mb-2">🎯 Looking For</p>
                  <p className="text-light/70">Freelance projects, collaborations, internships</p>
                </div>
                <div>
                  <p className="text-primary font-semibold mb-2">🌍 Availability</p>
                  <p className="text-light/70">Full-time availability for remote projects</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all"
                  >
                    <social.icon size={20} className={`text-primary ${social.color}`} />
                    <span className="font-semibold text-light hover:text-primary transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-light/70 mb-6 max-w-2xl mx-auto">
            Don't see what you're looking for? Feel free to reach out directly at{' '}
            <a
              href="mailto:work.harun.mollah@gmail.com"
              className="text-primary hover:underline font-semibold"
            >
              work.harun.mollah@gmail.com
            </a>
          </p>
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

export default Contact;
