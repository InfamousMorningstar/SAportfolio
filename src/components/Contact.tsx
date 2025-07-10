'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope className="text-accent" />,
    label: 'Email',
    value: 's.ahmad0147@gmail.com',
    href: 'mailto:s.ahmad0147@gmail.com',
    description: 'Send me an email for professional inquiries'
  },
  {
    icon: <FaMapMarkerAlt className="text-secondary" />,
    label: 'Location',
    value: 'Calgary, AB, Canada',
    href: 'https://www.google.com/maps/place/Calgary,+AB',
    description: 'Based in Calgary, open to remote opportunities'
  }
];

const socialLinks = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/InfamousMorningstar',
    username: '@InfamousMorningstar',
    color: 'hover:text-accent'
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/salman-ahmad-6788811b6/',
    username: 'Salman Ahmad',
    color: 'hover:text-accent2'
  },
  {
    icon: <FaDiscord />,
    label: 'Discord',
    href: 'https://discord.com/users/699763177315106836',
    username: 'infamous_morningstar',
    color: 'hover:text-secondary'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto mb-8"></div>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just chat about technology?
            I&apos;m always open to connecting with fellow developers and innovators.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Single Column - Complete Contact Information */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Contact Information Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <span className="text-accent mr-3">📞</span>
                  Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent/5 transition-all duration-300 group"
                      whileHover={{ x: 10 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="text-2xl group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 10 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {item.label}
                        </h4>
                        <p className="text-lg text-muted group-hover:text-foreground transition-colors">
                          {item.value}
                        </p>
                        <p className="text-sm text-muted">
                          {item.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-accent/20"></div>

              {/* Social Media Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <span className="text-accent2 mr-3">🌐</span>
                  Social Media
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-lg hover:bg-accent/5 transition-all duration-300 group ${social.color}`}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="text-2xl group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 10 }}
                      >
                        {social.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {social.label}
                        </h4>
                        <p className="text-muted text-sm">
                          {social.username}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-accent/20"></div>

              {/* Availability & Quick Message Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <span className="text-secondary mr-3">✉️</span>
                  Let's Connect
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-accent/5 border border-accent/20 rounded-lg">
                    <h4 className="text-lg font-semibold text-accent mb-3">Currently Available For:</h4>
                    <ul className="space-y-2 text-muted">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Full-time DevOps opportunities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Contract & freelance projects</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Technical consultations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Open source collaborations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center space-y-6">
                    <div className="text-center">
                      <p className="text-muted mb-6">
                        Prefer email? Send me a message directly and I'll get back to you within 24 hours.
                      </p>
                      
                      <motion.a
                        href="mailto:s.ahmad0147@gmail.com?subject=Let's Connect!&body=Hi Salman,%0D%0A%0D%0AI'd like to discuss..."
                        className="btn-primary inline-flex items-center space-x-2 px-8 py-4 text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaEnvelope />
                        <span>Send Email</span>
                      </motion.a>
                    </div>

                    <div className="border-t border-accent/20 pt-6">
                      <motion.div
                        className="text-center"
                        animate={{ 
                          scale: [1, 1.02, 1],
                          rotateY: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        <p className="text-sm text-muted mb-2">Response Time</p>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-accent font-semibold">Usually within 24 hours</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
