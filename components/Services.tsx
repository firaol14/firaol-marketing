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
    glow: 'bg-brand-blue/10',
    delay: 0.1
  },
  {
    title: 'Content Creation',
    description: 'Custom designed content strategy and assets built to grab attention and grow your audience.',
    icon: PenTool,
    color: 'text-brand-green',
    glow: 'bg-brand-green/10',
    delay: 0.2
  },
  {
    title: 'Appointment Setting',
    description: 'Structured appointment systems to convert interested prospects into scheduled calls.',
    icon: Calendar,
    color: 'text-brand-yellow',
    glow: 'bg-brand-yellow/10',
    delay: 0.3
  },
  {
    title: 'Sales Calls',
    description: 'Proven sales frameworks to convert consultation calls into paying coaching clients.',
    icon: PhoneCall,
    color: 'text-white',
    glow: 'bg-white/10',
    delay: 0.4
  },
  {
    title: 'Performance Analysis',
    description: 'Data-driven refinement to ensure growth compounds and acquisition costs decrease.',
    icon: BarChart3,
    color: 'text-brand-blue',
    glow: 'bg-brand-blue/10',
    delay: 0.5
  },
  {
    title: 'Unlimited Consulting',
    description: 'Direct access to the team. Get clarity fast so you always know the next step for growth.',
    icon: MessageSquare,
    color: 'text-brand-green',
    glow: 'bg-brand-green/10',
    delay: 0.6
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-display font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight"
          >
            Complete Growth System.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-grey text-lg md:text-xl leading-relaxed"
          >
             Maximize leads, build trust, and increase conversions with a system tailored to your coaching brand.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="group p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 hover:bg-[#0F0F0F] transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${service.glow} flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              
              <h3 className="font-display font-bold text-xl mb-4 text-white group-hover:text-brand-blue transition-colors">{service.title}</h3>
              <p className="text-brand-grey leading-relaxed text-[15px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};