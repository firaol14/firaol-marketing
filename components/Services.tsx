import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Calendar, PhoneCall, BarChart3, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Ideation',
    description: 'Content ideas built to grow your brand, drive engagement, and attract ideal coaching clients.',
    icon: Lightbulb,
    color: 'text-brand-blue',
    glow: 'bg-brand-blue/20',
    delay: 0.1
  },
  {
    title: 'Content Creation',
    description: 'Custom designed content strategy and assets built to grab attention, drive interest, and grow your audience.',
    icon: PenTool,
    color: 'text-brand-green',
    glow: 'bg-brand-green/20',
    delay: 0.2
  },
  {
    title: 'Appointment Setting',
    description: 'Structured appointment systems to convert interested prospects into scheduled consultation calls.',
    icon: Calendar,
    color: 'text-brand-yellow',
    glow: 'bg-brand-yellow/20',
    delay: 0.3
  },
  {
    title: 'Sales Calls',
    description: 'Proven sales frameworks to convert consultation calls into paying coaching clients using trust-building techniques.',
    icon: PhoneCall,
    color: 'text-white',
    glow: 'bg-white/20',
    delay: 0.4
  },
  {
    title: 'Performance Analysis',
    description: 'Each campaign is analyzed to refine what\'s working so growth compounds with time and client acquisition costs decrease.',
    icon: BarChart3,
    color: 'text-brand-blue',
    glow: 'bg-brand-blue/20',
    delay: 0.5
  },
  {
    title: 'Unlimited Consulting',
    description: 'Ask anything, anytime. Get clarity fast so you always know what steps to take next for continued growth.',
    icon: MessageSquare,
    color: 'text-brand-green',
    glow: 'bg-brand-green/20',
    delay: 0.6
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-brand-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter mb-4 md:mb-6 text-white">
            What You Get
          </h2>
          <p className="text-brand-grey text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A complete growth system built to maximize leads, trust-building, and conversions, fully tailored to your coaching brand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="group p-6 md:p-8 rounded-[32px] bg-brand-card border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute top-0 right-0 -mr-20 -mt-20 w-56 h-56 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${service.glow}`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-white">{service.title}</h3>
                <p className="text-brand-grey leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};