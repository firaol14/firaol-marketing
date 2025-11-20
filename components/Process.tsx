import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, PenTool, Layout, BarChart2, ArrowRight } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Kickoff',
    description: 'We align on your coaching offer, unique story, and revenue goals to build strategies that distinguish you from the noise.',
    icon: Rocket,
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    border: 'group-hover:border-brand-blue/30'
  },
  {
    number: '02',
    title: 'Strategy Buildout',
    description: "You get a custom, research-backed strategy. You're then paired with dedicated marketing partners who handle your growth.",
    icon: Layout,
    color: 'text-brand-green',
    bg: 'bg-brand-green/10',
    border: 'group-hover:border-brand-green/30'
  },
  {
    number: '03',
    title: 'Execution',
    description: 'You focus on coaching. We execute. The marketing team follows the strategy inside a shared workspace for full transparency.',
    icon: PenTool,
    color: 'text-brand-yellow',
    bg: 'bg-brand-yellow/10',
    border: 'group-hover:border-brand-yellow/30'
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'We refine based on data. Results compound with each campaign, lowering acquisition costs while scaling your business.',
    icon: BarChart2,
    color: 'text-white',
    bg: 'bg-white/10',
    border: 'group-hover:border-white/30'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight"
            >
              The Process.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-grey text-lg leading-relaxed"
            >
              A streamlined 4-step system designed to take you from unknown to authority without adding more work to your plate.
            </motion.p>
          </div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="hidden md:block"
          >
            <div className="h-px w-32 bg-white/20" />
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-8 md:p-12 rounded-[2rem] bg-[#0A0A0A] border border-white/5 transition-all duration-500 hover:bg-[#0F0F0F] ${step.border}`}
            >
               {/* Hover Gradient */}
               <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

               <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                 <div className="flex justify-between items-start">
                    <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center border border-white/5`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <span className="font-display font-bold text-5xl text-white/10 select-none group-hover:text-white/20 transition-colors">
                      {step.number}
                    </span>
                 </div>

                 <div>
                   <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                     {step.title}
                     <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-grey" />
                   </h3>
                   <p className="text-brand-grey leading-relaxed text-base md:text-lg max-w-md">
                     {step.description}
                   </p>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};