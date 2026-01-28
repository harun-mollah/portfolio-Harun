"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:work.harun.mollah@gmail.com', label: 'Email' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-secondary border-t border-primary/20 py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
            <h3 className="text-2xl font-bold gradient-text mb-2">Harun</h3>
            <p className="text-light/70 text-sm">
              CSE Diploma Student | Full Stack Developer | CodelithLabs
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-3 text-light/80 text-sm">
              <Mail size={18} className="text-primary" />
              <a href="mailto:work.harun.mollah@gmail.com" className="hover:text-primary transition-colors">
                work.harun.mollah@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-light/80 text-sm">
              <Phone size={18} className="text-primary" />
              <span>+91 9954927947</span>
            </div>
            <div className="flex items-start gap-3 text-light/80 text-sm">
              <MapPin size={18} className="text-primary mt-0.5" />
              <span>Kutirghat, Asssam, India</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary/30 transition-all"
                title={social.label}
              >
                <social.icon size={20} className="text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
          >
            <p className="text-light/60 text-sm">
              © 2025 MD Harun Al Roshid Mollah. All rights reserved.
            </p>
            <p className="text-light/60 text-sm mt-4 md:mt-0">
              Crafted with ❤️ using Next.js, React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
