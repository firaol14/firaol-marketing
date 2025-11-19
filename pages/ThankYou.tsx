import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-blue selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-20">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full text-center bg-brand-card border border-white/10 rounded-[48px] p-10 md:p-16"
        >
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-8"
            >
                <CheckCircle className="w-10 h-10 text-brand-green" />
            </motion.div>
            
            <h1 className="font-display font-bold text-3xl md:text-5xl mb-6 text-white">
                Application Received!
            </h1>
            <p className="text-brand-grey text-lg mb-10 leading-relaxed">
                Thank you for booking a strategy call. We've received your information and will be in touch shortly to confirm the details.
            </p>
            
            <Link 
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
                Back to Home
            </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};