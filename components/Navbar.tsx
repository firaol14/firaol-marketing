import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Process', href: '/#process' },
    { name: 'Services', href: '/#services' },
    { name: 'Comparison', href: '/#comparison' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-lg font-display font-bold tracking-tight hover:text-brand-blue transition-colors">
            Firaol Marketing
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-brand-grey hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Link
              to="/booking"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-blue hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,114,176,0.3)]"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black p-6 flex flex-col border-l border-white/10"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-lg font-display font-bold">Firaol Marketing</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white/80 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-8 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-white/90 hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Link
              to="/booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-white text-black py-4 rounded-full text-lg font-bold text-center hover:bg-brand-blue hover:text-white transition-colors mb-8"
            >
              Book a Strategy Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};