import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, PenTool, Layout, BarChart2 } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Kickoff',
    description: 'We align on your coaching offer, unique story, and revenue goals to build marketing strategies that drive leads and business results while standing out from other coaches.',
    icon: Rocket,
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    border: 'border-brand-blue/20'
  },
  {
    number: '02',
    title: 'Strategy Buildout',
    description: "You get a custom, research-backed strategy built to grab attention and attract your ideal clients. You're then paired with dedicated marketing partners who handle your growth long term.",
    icon: Layout,
    color: 'text-brand-green',
    bg: 'bg-brand-green/10',
    border: 'border-brand-green/20'
  },
  {
    number: '03',
    title: 'Execution',
    description: 'You focus on coaching. Everything else is handled for you. The marketing team follows the direction of the strategist and execute inside a shared workspace, giving you a transparent in-house experience.',
    icon: PenTool,
    color: 'text-brand-yellow',
    bg: 'bg-brand-yellow/10',
    border: 'border-brand-yellow/20'
  },
  {
    number: '04',
    title: 'Performance Optimization',
    description: 'We refine our strategy using performance data and client feedback, so results compound with each campaign and your business scales consistently.',
    icon: BarChart2,
    color: 'text-white',
    bg: 'bg-white/10',
    border: 'border-white/20'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-brand-bg relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-16 mb-16 md:mb-20">
            <div className="lg:w-1/2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-wider mb-6 md:mb-8 uppercase"
                >
                    The Process
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-display font-bold text-4xl md:text-5xl tracking-tighter mb-6 leading-[1.1]"
                >
                    Leveraging Proven Marketing Systems for <span className="text-brand-blue">Coach Growth</span>
                </motion.h2>
            </div>
            
            <div className="lg:w-1/2">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-brand-grey text-lg leading-relaxed mb-6"
                >
                    Create compelling content and you’re in front of the exact people who want what you're offering. They're learning about your expertise and building trust with you before they ever reach out.
                </motion.p>
                 <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-brand-grey text-lg leading-relaxed"
                >
                    When you work with us, you work directly with our in-house team to create marketing systems that get attention, build trust, and generate consistent leads.
                </motion.p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

            {steps.map((step, index) => (
                <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative p-6 md:p-8 rounded-[32px] bg-brand-card border border-white/5 hover:border-white/10 transition-colors group ${index % 2 !== 0 ? 'md:translate-y-24' : ''}`}
                >
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                        <step.icon className={`w-6 h-6 md:w-7 md:h-7 ${step.color}`} />
                    </div>
                    <div className="text-xs font-bold text-brand-grey mb-2 uppercase tracking-widest">Stage {index + 1}</div>
                    <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-white">{step.title}</h3>
                    <p className="text-brand-grey leading-relaxed text-[15px]">
                        {step.description}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};