import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "What is a 'Full-Service Marketing Agency'?",
    answer: "It means we handle the entire marketing lifecycle. From researching topics that will perform well, to scripting, editing, creating thumbnails, and even setting appointments and managing the sales process. You focus on being the coach; we handle the growth."
  },
  {
    question: "How much effort is required from me?",
    answer: "Minimal. Your primary role is to provide the raw expertise (recording the content based on our briefs) and show up for the coaching calls. We handle the strategy, post-production, distribution, and lead management."
  },
  {
    question: "How long before I see results?",
    answer: "While every niche is different, our clients typically see an increase in engagement within the first 30 days. Significant lead flow and revenue growth usually compound around the 90-day mark as the content library builds trust."
  },
  {
    question: "What if I'm not good at marketing?",
    answer: "That's exactly why we're here. We don't expect you to be a marketer. We bring the marketing expertise to amplify your coaching expertise."
  },
  {
    question: "Do I need a large personal brand for this to work?",
    answer: "No. Our strategies are designed to build authority from scratch. In fact, starting with a clean slate often allows us to target your ideal audience more precisely without dealing with 'dead' subscribers."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-brand-bg px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 md:mb-6 text-white">
                Your questions, answered
            </h2>
            <p className="text-brand-grey text-lg">
                Whether you're a new client or a long-time partner, we're here to help. Below are answers to the most common questions.
            </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-2xl bg-brand-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-base md:text-lg text-white pr-4">{faq.question}</span>
                <span className="flex-shrink-0 p-2 rounded-full bg-white/5 text-white/70">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-5 md:p-6 pt-0 text-brand-grey leading-relaxed border-t border-white/5 mt-2 text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};