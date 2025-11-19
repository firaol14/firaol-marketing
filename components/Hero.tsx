import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SuccessStory } from '../types';

const successStories: SuccessStory[] = [
  { name: "Life Coach Sarah", result: "$5K → $25K Monthly" },
  { name: "Business Coach Mike", result: "$127K in 6 Months" },
  { name: "Health Coach Emma", result: "$156K Annual Revenue" },
  { name: "Career Coach David", result: "$89K First Year" },
  { name: "Executive Coach Lisa", result: "6-Figure Business Built" },
  { name: "Fitness Coach Jason", result: "$200K+ Scaling Success" },
  { name: "Relationship Coach Anna", result: "Triple Revenue Growth" },
  { name: "Mindset Coach Ryan", result: "From $0 to $150K" },
  { name: "Productivity Coach Tom", result: "Consistent 5-Figure Months" },
  { name: "Sales Coach Maria", result: "6-Figure Launch Success" },
  { name: "Leadership Coach Steve", result: "$180K Business Growth" },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 md:pt-20 pb-16 md:pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/15 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      <div className="max-w-[1200px] w-full mx-auto px-6 flex flex-col items-center text-center z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          <span className="text-xs md:text-sm font-medium text-brand-grey tracking-tight">Accepting new clients for Q4</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-7xl lg:text-[84px] tracking-tighter leading-[1.1] mb-6 text-white"
        >
          Scales Your Coaching <br className="hidden md:block" />
          <span className="text-white/40">Business to 6 Figures.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-xl text-brand-grey max-w-2xl mb-10 leading-relaxed"
        >
          Ideation, content creation, appointment setting, and sales calls - all handled for you. All you need to do is deliver exceptional coaching.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 items-center mb-16 md:mb-20"
        >
          <Link
            to="/booking"
            className="w-full sm:w-auto group bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-brand-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,114,176,0.4)]"
          >
            Book a Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#process"
            className="w-full sm:w-auto group px-8 py-4 rounded-full text-base font-bold text-white border border-white/10 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            How it works
          </a>
        </motion.div>

        {/* Success Story Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full overflow-hidden relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-brand-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-brand-bg to-transparent z-10" />
          
          <div className="flex gap-4 md:gap-6 animate-scroll hover:pause">
             {[...successStories, ...successStories].map((story, idx) => (
                <div key={idx} className="flex-shrink-0 w-64 md:w-72 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green flex-shrink-0">
                      <TrendingUp size={20} />
                   </div>
                   <div className="text-left">
                      <div className="text-white font-bold text-sm">{story.name}</div>
                      <div className="text-brand-grey text-xs font-medium uppercase tracking-wide">{story.result}</div>
                   </div>
                </div>
             ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};