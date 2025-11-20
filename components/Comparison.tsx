import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { ComparisonRow } from '../types';

export const Comparison: React.FC = () => {
  const rows: ComparisonRow[] = [
    { label: 'Clear + Direct Communication', alone: false, us: true, other: false },
    { label: 'Personalized In-House Experience', alone: true, us: true, other: false },
    { label: 'Trained + Trusted Marketing Experts', alone: false, us: true, other: false },
    { label: 'No Middlemen', alone: true, us: true, other: false },
    { label: 'Saves Time to Focus on Your Coaching', alone: false, us: true, other: 'warn' },
  ];

  return (
    <section id="comparison" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight">
            Why Us?
          </h2>
          <p className="text-brand-grey text-lg md:text-xl leading-relaxed">
            A marketing agency that actually feels like part of your team. Direct access, trusted experts, and no middlemen.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A]">
          <motion.table 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full border-collapse"
          >
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="text-left p-6 md:p-8 text-brand-grey font-medium w-[40%]">Features</th>
                <th className="p-6 md:p-8 text-brand-grey font-medium text-sm md:text-base">Alone</th>
                <th className="p-6 md:p-8 text-white font-bold text-sm md:text-lg bg-white/[0.05] border-x border-white/5">
                  Firaol Marketing
                </th>
                <th className="p-6 md:p-8 text-brand-grey font-medium text-sm md:text-base">Others</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 md:p-8 text-white font-medium text-sm md:text-lg">
                    {row.label}
                  </td>
                  
                  <td className="p-6 md:p-8 text-center">
                    {row.alone ? (
                      <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto"><Check className="w-4 h-4 text-brand-green" /></div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mx-auto"><X className="w-4 h-4 text-white/30" /></div>
                    )}
                  </td>

                  <td className="p-6 md:p-8 text-center bg-white/[0.02] border-x border-white/5">
                    <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto">
                        <Check className="w-5 h-5 text-brand-green" />
                    </div>
                  </td>

                  <td className="p-6 md:p-8 text-center">
                    {row.other === 'warn' ? (
                        <span className="text-xl opacity-50">⚠️</span>
                    ) : row.other ? (
                       <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto"><Check className="w-4 h-4 text-brand-green" /></div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mx-auto"><X className="w-4 h-4 text-white/30" /></div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  );
};