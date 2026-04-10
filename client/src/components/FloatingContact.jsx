import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaEnvelope, FaLinkedin, FaTimes } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { icon: FaEnvelope, label: 'Email', href: 'mailto:pallavkanani27@gmail.com', color: '#ea4335' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pallav-kanani-306b8b28b', color: '#0077b5' },
    { icon: SiWhatsapp, label: 'WhatsApp', href: 'https://wa.me/916354678706', color: '#25d366' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4 space-y-3"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, x: -5 }}
                className="flex items-center gap-3 glass px-4 py-3 rounded-full hover:bg-white/20 transition-all"
                style={{ borderLeft: `3px solid ${contact.color}` }}
              >
                <contact.icon size={20} style={{ color: contact.color }} />
                <span className="text-sm font-medium">{contact.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg hover:shadow-primary/50 transition-all"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </motion.button>
    </div>
  );
};

export default FloatingContact;
