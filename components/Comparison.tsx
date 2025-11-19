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
    <section id="comparison" className="py-20 md:py-32 bg-brand-bg relative border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16 px-4"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter mb-4 md:mb-6 text-white">
            The Better Way to Scale <br /> Your Coaching Business
          </h2>
          <p className="text-brand-grey text-base md:text-lg max-w-2xl mx-auto">
            Finally, a Marketing Agency That Actually Feels Like Part of Your Team. Get direct communication, trusted experts, and no middlemen slowing things down.
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.table 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full border-collapse table-fixed"
          >
            <thead>
              <tr>
                <th className="text-left p-2 md:p-6 text-brand-grey font-medium w-[42%] md:w-2/5"></th>
                <th className="p-1 md:p-6 text-brand-grey font-bold text-[10px] sm:text-xs md:text-lg align-bottom">Alone</th>
                <th className="p-1 md:p-6 text-white font-bold text-xs md:text-xl bg-white/5 rounded-t-2xl border-t border-l border-r border-white/10 align-bottom">
                  <span className="block md:hidden text-brand-blue">Firaol</span>
                  <span className="hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                    Firaol Marketing
                  </span>
                </th>
                <th className="p-1 md:p-6 text-brand-grey font-bold text-[10px] sm:text-xs md:text-lg align-bottom">
                  <span className="md:hidden">Others</span>
                  <span className="hidden md:inline">Other Agencies</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-white/5 last:border-none group hover:bg-white/[0.02] transition-colors">
                  <td className="p-2 md:p-6 text-white font-medium text-[11px] sm:text-xs md:text-lg leading-tight md:leading-normal">
                    {row.label}
                  </td>
                  
                  {/* Alone Column */}
                  <td className="p-1 md:p-6 text-center align-middle">
                    {row.alone ? (
                      <Check className="w-4 h-4 md:w-6 md:h-6 text-brand-green mx-auto" />
                    ) : (
                      <X className="w-4 h-4 md:w-6 md:h-6 text-red-500 mx-auto" />
                    )}
                  </td>

                  {/* Us Column */}
                  <td className="p-1 md:p-6 text-center align-middle bg-white/5 border-l border-r border-white/10 relative">
                     {/* Highlight background for the column bottom */}
                     {index === rows.length - 1 && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-green rounded-b-2xl" />
                     )}
                    <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto">
                        <Check className="w-3 h-3 md:w-5 md:h-5 text-brand-green" />
                    </div>
                  </td>

                  {/* Other Agencies Column */}
                  <td className="p-1 md:p-6 text-center align-middle">
                    {row.other === 'warn' ? (
                        <span className="text-base md:text-2xl">⚠️</span>
                    ) : row.other ? (
                       <Check className="w-4 h-4 md:w-6 md:h-6 text-brand-green mx-auto" />
                    ) : (
                      <X className="w-4 h-4 md:w-6 md:h-6 text-red-500 mx-auto" />
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