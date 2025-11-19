import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative px-6">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-brand-card border border-white/10 rounded-[48px] p-8 md:p-24 text-center overflow-hidden"
        >
          {/* Animated Border Gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-green to-brand-yellow opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/10 via-brand-green/10 to-brand-yellow/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
             <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-2xl mx-auto flex items-center justify-center mb-8 md:mb-10 border border-white/10 shadow-lg"
             >
                <Calendar className="w-7 h-7 md:w-8 md:h-8 text-white" />
             </motion.div>

            <h2 className="font-display font-bold text-3xl md:text-6xl lg:text-7xl tracking-tighter mb-6 md:mb-8 text-white">
              Let's scale your <br/> coaching business
            </h2>
            <p className="text-brand-grey text-lg md:text-xl mb-10 md:mb-12 max-w-lg mx-auto leading-relaxed">
              We'll help you build a marketing system that actually gets attention, builds trust, and turns prospects into consistent, high-value coaching clients.
            </p>

            <div className="flex flex-col items-center gap-4 mb-10 md:mb-12">
                <Link 
                  to="/booking"
                  className="w-full sm:w-auto bg-white text-black rounded-full px-10 py-4 md:py-5 font-bold text-lg md:text-xl hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-brand-blue/25 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                    Book a Strategy Call
                    <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-2">
                   <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                   </span>
                   <span className="text-white/80 font-medium text-sm uppercase tracking-wide">5 spots left</span>
                </div>
            </div>

            <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm text-brand-grey font-medium">
               <div className="flex items-center gap-2.5">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
                  </div>
                  <span>Accepting applications for Q4</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};